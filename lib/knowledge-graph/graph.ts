import { TAXONOMY, getCluster, LIVE_SECTIONS } from "@/lib/knowledge-graph/taxonomy";
import type { KgCluster } from "@/lib/knowledge-graph/types";
import { allEntries } from "@/lib/content/registry";
import { getSectionMeta, type SectionId } from "@/lib/site";
import type { ContentEntry } from "@/lib/content/types";

// Runtime graph helpers for the /knowledge-graph asset. Kept OUT of taxonomy.ts
// on purpose: taxonomy.ts uses only type-only "@/" imports so it loads under
// `node --experimental-strip-types` for scripts/taxonomy.test.mjs. This module
// imports the runtime registry (allEntries) and is used only by page components.

/** Sections this cluster touches that are actually live hubs. */
export function liveSectionsForCluster(c: KgCluster): SectionId[] {
  const set = new Set<string>([c.primarySection, ...c.secondarySections]);
  return LIVE_SECTIONS.filter((s) => set.has(s));
}

/** Cross-links resolved to real cluster nodes (drops any that do not resolve). */
export function resolvedCrossLinks(c: KgCluster): KgCluster[] {
  return c.crossLinks
    .map(getCluster)
    .filter((x): x is KgCluster => Boolean(x));
}

/**
 * Live content pages relevant to a cluster. Honest join, real routes only:
 * (1) entries explicitly tagged entry.cluster === c.id, then
 * (2) entries in the cluster's live sections whose title/keywords overlap the
 *     cluster's entity names / label tokens (scored). Every result is a live
 *     route /${section}/${slug}.
 */
export function livePagesForCluster(c: KgCluster, limit = 24): ContentEntry[] {
  const sections = new Set<string>(liveSectionsForCluster(c));
  const tagged = allEntries.filter((e) => e.cluster === c.id);

  const vocab = new Set(
    [c.label, ...c.entities.map((e) => e.name)]
      .join(" ")
      .toLowerCase()
      .split(/[^a-z0-9]+/)
      .filter((t) => t.length > 3),
  );
  const scored = allEntries
    .filter((e) => sections.has(e.section) && e.cluster !== c.id)
    .map((e) => {
      const hay = `${e.title} ${e.keywords.join(" ")}`.toLowerCase();
      let score = 0;
      for (const t of vocab) if (hay.includes(t)) score++;
      return { e, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.e);

  const seen = new Set<string>();
  const out: ContentEntry[] = [];
  for (const e of [...tagged, ...scored]) {
    const key = `${e.section}/${e.slug}`;
    if (!seen.has(key)) {
      seen.add(key);
      out.push(e);
    }
    if (out.length >= limit) break;
  }
  return out;
}

/**
 * Overview grouping: clusters bucketed by primarySection (a real field), in
 * LIVE_SECTIONS order. Covers all clusters (every primarySection is live).
 */
export function clustersByDomain() {
  return LIVE_SECTIONS.map((s) => ({
    section: s,
    label: getSectionMeta(s).label,
    clusters: TAXONOMY.filter((c) => c.primarySection === s),
  })).filter((g) => g.clusters.length > 0);
}

/** Total canonical entities across the graph (overview stat). */
export const totalEntities = (): number =>
  TAXONOMY.reduce((n, c) => n + c.entities.length, 0);
