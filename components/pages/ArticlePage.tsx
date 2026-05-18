import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { SectionId } from "@/lib/site";
import { getEntry, getBreadcrumbs, getRelated } from "@/lib/content/queries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MetaBar } from "@/components/layout/MetaBar";
import { Prose } from "@/components/content/Prose";
import { ArticleBody } from "@/components/content/ArticleBody";
import { FaqList } from "@/components/content/FaqList";
import { SourcesList } from "@/components/content/SourcesList";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema";

export function articleMetadata(section: SectionId, slug: string): Metadata {
  const e = getEntry(section, slug);
  if (!e) return {};
  return buildMetadata({
    title: e.title,
    description: e.description,
    path: `/${section}/${slug}`,
    type: "article",
    published: e.published,
    modified: e.updated,
    keywords: e.keywords,
  });
}

export function ArticlePage({
  section,
  slug,
}: {
  section: SectionId;
  slug: string;
}) {
  const e = getEntry(section, slug);
  if (!e) notFound();
  const crumbs = getBreadcrumbs(section, slug);
  const related = getRelated(e);
  const schemas: object[] = [articleSchema(e), breadcrumbSchema(crumbs)];
  if (e.faqs?.length) schemas.push(faqSchema(e.faqs));
  return (
    <Container width="prose" className="py-12">
      <JsonLd data={schemas} />
      <Breadcrumbs items={crumbs} />
      <article className="mt-6">
        <header>
          <h1 className="font-serif text-4xl leading-tight tracking-tight">
            {e.title}
          </h1>
          <p className="mt-4 font-serif text-xl text-ink-soft">
            {e.summary}
          </p>
          <MetaBar author={e.author} editor={e.editor} updated={e.updated} />
        </header>
        <Prose>
          <ArticleBody blocks={e.body} />
        </Prose>
        {e.faqs?.length ? <FaqList faqs={e.faqs} /> : null}
        {e.sources?.length ? <SourcesList sources={e.sources} /> : null}
        <RelatedLinks items={related} />
      </article>
    </Container>
  );
}
