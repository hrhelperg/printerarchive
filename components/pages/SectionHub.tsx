import type { Metadata } from "next";
import { getSectionMeta, type SectionId } from "@/lib/site";
import { getSection, getBreadcrumbs } from "@/lib/content/queries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Frontispiece } from "@/components/content/Frontispiece";
import { SectionList } from "@/components/content/SectionList";
import { EvolutionBand } from "@/components/history/EvolutionBand";
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
  const isHistory = section === "history";

  const groups = new Map<string, typeof items>();
  for (const e of items) {
    const key = e.cluster ?? "__none__";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(e);
  }
  const useGroups = groups.size > 1 && items.length >= 6;

  return (
    <>
      <Container width="wide" className="pt-8">
        <Breadcrumbs items={crumbs} />
      </Container>
      <div className="mt-6">
        <Frontispiece
          kicker="Section"
          title={m.title}
          lede={m.description}
          meta={`${items.length} ${items.length === 1 ? "entry" : "entries"}`}
          tone={isHistory ? "sepia" : "default"}
          titleClassName="text-display-sm"
        />
      </div>

      {isHistory ? <EvolutionBand /> : null}

      <Container width="wide" className="py-14">
        <JsonLd data={breadcrumbSchema(crumbs)} />
        {items.length === 0 ? (
          <p className="text-ink-faint">
            New entries are being added to this section.
          </p>
        ) : useGroups ? (
          [...groups.entries()].map(([key, list], idx) => (
            <section
              key={key}
              aria-labelledby={`group-${key}`}
              className={idx > 0 ? "mt-14" : ""}
            >
              <p id={`group-${key}`} className="kicker">
                {key === "__none__"
                  ? "More in this section"
                  : key.replace(/-/g, " ")}
              </p>
              <SectionList items={list} />
            </section>
          ))
        ) : (
          <SectionList items={items} />
        )}
      </Container>
    </>
  );
}
