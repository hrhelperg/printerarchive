import type { Metadata } from "next";
import { getSectionMeta, type SectionId } from "@/lib/site";
import { getSection, getBreadcrumbs } from "@/lib/content/queries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { SectionList } from "@/components/content/SectionList";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";

export function hubMetadata(section: SectionId): Metadata {
  const m = getSectionMeta(section);
  return buildMetadata({
    title: m.title,
    description: m.description,
    path: `/${section}`,
  });
}

export function SectionHub({ section }: { section: SectionId }) {
  const m = getSectionMeta(section);
  const items = getSection(section);
  const crumbs = getBreadcrumbs(section);
  return (
    <Container className="py-12">
      <JsonLd data={breadcrumbSchema(crumbs)} />
      <Breadcrumbs items={crumbs} />
      <h1 className="mt-6 font-serif text-4xl tracking-tight text-balance">
        {m.title}
      </h1>
      <p className="mt-3 max-w-2xl text-lg text-ink-soft text-pretty">
        {m.description}
      </p>
      {items.length > 0 ? (
        <SectionList items={items} />
      ) : (
        <p className="mt-10 text-ink-faint">
          New entries are being added to this section.
        </p>
      )}
    </Container>
  );
}
