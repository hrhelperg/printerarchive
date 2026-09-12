import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { SectionId } from "@/lib/site";
import { getSectionMeta } from "@/lib/site";
import { getEntry, getBreadcrumbs, getRelated } from "@/lib/content/queries";
import { entryKicker } from "@/lib/content/kicker";
import { buildMetadata } from "@/lib/seo/metadata";
import { MetaBar } from "@/components/layout/MetaBar";
import { ModelIdentity } from "@/components/content/ModelIdentity";
import { SpecTable } from "@/components/content/SpecTable";
import { LongformArticle } from "@/components/pages/LongformArticle";
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

  // Model pages read as technical references rather than essays: an identity
  // strip in the masthead and the cited specification set ahead of the prose.
  const isModel = e.section === "models";
  const railRows = [{ term: "Section", value: sectionLabel }];
  if (isModel && e.manufacturer) {
    railRows.push({ term: "Manufacturer", value: e.manufacturer });
  }
  if (isModel && e.introduced) {
    railRows.push({ term: "Introduced", value: e.introduced });
  }

  return (
    <LongformArticle
      entry={e}
      crumbs={crumbs}
      kicker={`${sectionLabel}${showKick ? ` · ${kick}` : ""}`}
      schemas={schemas}
      related={related}
      variant="reference"
      railRows={railRows}
      metaLine={<MetaBar author={e.author} editor={e.editor} updated={e.updated} />}
      mastheadExtra={isModel ? <ModelIdentity entry={e} /> : undefined}
      beforeBody={
        isModel && e.specs?.length ? <SpecTable specs={e.specs} /> : undefined
      }
    />
  );
}
