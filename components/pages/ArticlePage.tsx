import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { SectionId } from "@/lib/site";
import { getSectionMeta } from "@/lib/site";
import { getEntry, getBreadcrumbs, getRelated } from "@/lib/content/queries";
import { entryKicker } from "@/lib/content/kicker";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MetaBar } from "@/components/layout/MetaBar";
import { ArchivePlate } from "@/components/content/ArchivePlate";
import { ArticleBody } from "@/components/content/ArticleBody";
import { FaqList } from "@/components/content/FaqList";
import { SourceTransparency } from "@/components/content/SourceTransparency";
import { ArchiveFootnotes } from "@/components/content/ArchiveFootnotes";
import { EssayLead } from "@/components/content/EssayLead";
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
  const sectionLabel = getSectionMeta(e.section).label;
  const kick = entryKicker(e);
  const showKick =
    kick.toLowerCase() !== sectionLabel.toLowerCase() &&
    kick.toLowerCase() !== sectionLabel.toLowerCase().replace(/s$/, "");
  return (
    <Container width="prose" className="py-12">
      <JsonLd data={schemas} />
      <Breadcrumbs items={crumbs} />
      <article className="mt-6 fade-up">
        {e.essayLead ? (
          <EssayLead
            kicker={e.essayLead.kicker ?? sectionLabel}
            title={e.title}
            standfirst={e.essayLead.standfirst}
            byline={e.essayLead.byline}
          />
        ) : (
          <header>
            <p className="kicker">
              {sectionLabel}
              {showKick ? ` · ${kick}` : ""}
            </p>
            <h1 className="mt-3 text-display-sm leading-tight text-balance">
              {e.title}
            </h1>
            <p className="mt-4 font-serif text-xl text-ink-soft text-pretty">
              {e.summary}
            </p>
            <MetaBar author={e.author} editor={e.editor} updated={e.updated} />
          </header>
        )}
        {e.hero ? (
          <ArchivePlate
            image={e.hero}
            preload
            sizes="(max-width: 768px) 100vw, 768px"
          />
        ) : null}
        <div className="mt-8 font-serif text-[1.0625rem] leading-[1.75] text-ink">
          <ArticleBody blocks={e.body} />
        </div>
        {e.faqs?.length ? <FaqList faqs={e.faqs} /> : null}
        {e.sources?.length ? <SourceTransparency sources={e.sources} /> : null}
        {e.footnotes?.length ? <ArchiveFootnotes footnotes={e.footnotes} /> : null}
        <RelatedLinks items={related} />
      </article>
    </Container>
  );
}
