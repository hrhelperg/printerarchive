import { notFound } from "next/navigation";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { getSectionMeta } from "@/lib/site";
import { TAXONOMY, getCluster } from "@/lib/knowledge-graph/taxonomy";
import {
  liveSectionsForCluster,
  resolvedCrossLinks,
  livePagesForCluster,
} from "@/lib/knowledge-graph/graph";

export const dynamicParams = false;

export function generateStaticParams() {
  return TAXONOMY.map((c) => ({ clusterId: c.id }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ clusterId: string }>;
}) {
  const { clusterId } = await params;
  const c = getCluster(clusterId);
  if (!c) return {};
  return buildMetadata({
    title: `${c.label} — Knowledge Graph`,
    description: c.description.slice(0, 160),
    path: `/knowledge-graph/${c.id}`,
  });
}

export default async function Page({
  params,
}: {
  params: Promise<{ clusterId: string }>;
}) {
  const { clusterId } = await params;
  const c = getCluster(clusterId);
  if (!c) notFound();

  const crumbs = [
    { name: "Home", href: "/" },
    { name: "Knowledge Graph", href: "/knowledge-graph" },
    { name: c.label, href: `/knowledge-graph/${c.id}` },
  ];
  const sections = liveSectionsForCluster(c);
  const related = resolvedCrossLinks(c);
  const livePages = livePagesForCluster(c);

  const byType = c.entities.reduce<Record<string, string[]>>((m, e) => {
    (m[e.type] ??= []).push(e.name);
    return m;
  }, {});

  return (
    <>
      <Container width="wide" className="pt-8">
        <Breadcrumbs items={crumbs} />
      </Container>

      <Container width="prose" className="mt-10">
        <h1 className="font-serif text-4xl tracking-tight">{c.label}</h1>
        <p className="mt-4 font-serif text-lg text-ink-soft">{c.description}</p>
        <p className="mt-2 font-sans text-xs text-ink-faint">
          {c.status === "expand"
            ? `${c.livePages} live pages`
            : "Planned cluster"}{" "}
          &middot; long-term capacity {c.capacity.conservative}&ndash;
          {c.capacity.ambitious}
        </p>
      </Container>

      <Container width="wide" className="py-14">
        <JsonLd data={breadcrumbSchema(crumbs)} />

        {Object.keys(byType).length > 0 && (
          <section>
            <p className="font-sans text-xs uppercase tracking-wide text-ink-faint">
              Entities
            </p>
            {Object.entries(byType).map(([type, names]) => (
              <div key={type} className="mt-3">
                <span className="font-sans text-xs uppercase text-ink-faint">
                  {type}
                </span>
                <p className="text-ink-soft">{names.join(" · ")}</p>
              </div>
            ))}
          </section>
        )}

        {related.length > 0 && (
          <section className="mt-12">
            <p className="font-sans text-xs uppercase tracking-wide text-ink-faint">
              Connected clusters
            </p>
            <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
              {related.map((r) => (
                <li key={r.id}>
                  <Link
                    href={`/knowledge-graph/${r.id}`}
                    className="border border-rule px-3 py-1 text-sm no-underline hover:text-accent"
                  >
                    {r.label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {sections.length > 0 && (
          <section className="mt-12">
            <p className="font-sans text-xs uppercase tracking-wide text-ink-faint">
              In the archive
            </p>
            <ul className="mt-3 flex list-none flex-wrap gap-2 p-0">
              {sections.map((s) => (
                <li key={s}>
                  <Link
                    href={`/${s}`}
                    className="border border-rule px-3 py-1 text-sm no-underline hover:text-accent"
                  >
                    {getSectionMeta(s).label}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {livePages.length > 0 && (
          <section className="mt-12">
            <p className="font-sans text-xs uppercase tracking-wide text-ink-faint">
              Pages in this cluster
            </p>
            <ul className="mt-3 grid list-none gap-2 p-0 sm:grid-cols-2">
              {livePages.map((e) => (
                <li key={`${e.section}/${e.slug}`}>
                  <Link
                    href={`/${e.section}/${e.slug}`}
                    className="no-underline hover:text-accent"
                  >
                    {e.title}
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}

        {c.planned.length > 0 && (
          <section className="mt-12">
            <p className="font-sans text-xs uppercase tracking-wide text-ink-faint">
              Planned coverage
            </p>
            <ul className="mt-3 list-none space-y-2 p-0">
              {c.planned.map((p) => (
                <li key={p.slug} className="text-ink-soft">
                  <span className="text-ink">{p.title}</span>
                  {p.angle ? (
                    <span className="text-ink-faint"> — {p.angle}</span>
                  ) : null}
                </li>
              ))}
            </ul>
          </section>
        )}
      </Container>
    </>
  );
}
