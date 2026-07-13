import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { taxonomyTotals } from "@/lib/knowledge-graph/taxonomy";
import { clustersByDomain, totalEntities } from "@/lib/knowledge-graph/graph";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Knowledge Graph", href: "/knowledge-graph" },
];

export const metadata = buildMetadata({
  title: "Printer Knowledge Graph",
  description:
    "The map of PrinterArchive: topic clusters, their canonical entities, published coverage, and how they interlink.",
  path: "/knowledge-graph",
});

export default function Page() {
  const totals = taxonomyTotals();
  const domains = clustersByDomain();
  return (
    <>
      <Container width="wide" className="pt-8">
        <Breadcrumbs items={crumbs} />
      </Container>

      <Container width="prose" className="mt-10">
        <h1 className="font-serif text-4xl tracking-tight">
          Printer Knowledge Graph
        </h1>
        <p className="mt-4 font-serif text-lg text-ink-soft">
          Every topic PrinterArchive documents, organised as {totals.clusters}{" "}
          interlinked clusters spanning {totalEntities()} canonical entities and{" "}
          {totals.livePages} published pages. Each cluster below links to its
          entities, the clusters it connects to, and the live pages that cover it.
        </p>
        <dl className="mt-6 flex flex-wrap gap-x-8 gap-y-2 font-sans text-sm text-ink-soft">
          <div>
            <dt className="text-xs uppercase text-ink-faint">Clusters</dt>
            <dd className="text-ink">{totals.clusters}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase text-ink-faint">Entities</dt>
            <dd className="text-ink">{totalEntities()}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase text-ink-faint">Published pages</dt>
            <dd className="text-ink">{totals.livePages}</dd>
          </div>
          <div>
            <dt className="text-xs uppercase text-ink-faint">Long-term capacity</dt>
            <dd className="text-ink">
              {totals.capacityConservative}&ndash;{totals.capacityAmbitious}
            </dd>
          </div>
        </dl>
      </Container>

      <Container width="wide" className="py-14">
        <JsonLd data={breadcrumbSchema(crumbs)} />
        {domains.map((d) => (
          <section key={d.section} className="mt-12 first:mt-0">
            <p className="font-sans text-xs uppercase tracking-wide text-ink-faint">
              {d.label}
            </p>
            <ul className="mt-4 grid list-none gap-4 p-0 sm:grid-cols-2 lg:grid-cols-3">
              {d.clusters.map((c) => (
                <li
                  key={c.id}
                  className="border-l-2 border-rule bg-paper-raised px-5 py-4"
                >
                  <Link
                    href={`/knowledge-graph/${c.id}`}
                    className="font-serif text-lg text-ink no-underline hover:text-accent"
                  >
                    {c.label}
                  </Link>
                  <p className="mt-1 text-sm text-ink-soft">{c.description}</p>
                  <p className="mt-2 font-sans text-xs text-ink-faint">
                    {c.status === "expand"
                      ? `${c.livePages} live`
                      : "Planned"}{" "}
                    &middot; {c.entities.length} entities &middot; capacity{" "}
                    {c.capacity.conservative}&ndash;{c.capacity.ambitious}
                  </p>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </Container>
    </>
  );
}
