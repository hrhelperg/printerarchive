import type { SectionId } from "@/lib/site";
import { getSectionMeta } from "@/lib/site";
import type { ContentEntry, ContentRef } from "@/lib/content/types";
import { allEntries } from "@/lib/content/registry";

export const getSection = (section: SectionId): ContentEntry[] =>
  allEntries
    .filter((e) => e.section === section)
    .sort((a, b) => (a.updated < b.updated ? 1 : -1));

export const getEntry = (
  section: SectionId,
  slug: string,
): ContentEntry | undefined =>
  allEntries.find((e) => e.section === section && e.slug === slug);

export const getAllRoutes = (): ContentRef[] =>
  allEntries.map((e) => ({ section: e.section, slug: e.slug }));

export function getRelated(entry: ContentEntry, limit = 4): ContentEntry[] {
  const explicit = (entry.related ?? [])
    .map((r) => getEntry(r.section, r.slug))
    .filter((e): e is ContentEntry => Boolean(e));

  const kw = new Set(entry.keywords);
  const scored = allEntries
    .filter((e) => !(e.section === entry.section && e.slug === entry.slug))
    .filter((e) => !explicit.includes(e))
    .map((e) => {
      let score = 0;
      if (entry.cluster && e.cluster === entry.cluster) score += 3;
      score += e.keywords.filter((k) => kw.has(k)).length;
      return { e, score };
    })
    .filter((x) => x.score > 0)
    .sort((a, b) => b.score - a.score)
    .map((x) => x.e);

  return [...explicit, ...scored].slice(0, limit);
}

export function getBreadcrumbs(section: SectionId, slug?: string) {
  const crumbs = [
    { name: "Home", href: "/" },
    { name: getSectionMeta(section).label, href: `/${section}` },
  ];
  if (slug) {
    const e = getEntry(section, slug);
    if (e) crumbs.push({ name: e.title, href: `/${section}/${slug}` });
  }
  return crumbs;
}
