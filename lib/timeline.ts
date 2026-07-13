import { allEntries } from "@/lib/content/registry";
import type { ModelEntry } from "@/lib/content/types";

// Data helper for the /timeline authority asset. Builds a chronological view of
// the model pages from their source-backed `introduced` dates — zero new facts,
// every entry links to a real /models/<slug> route. Models without a sourced
// introduction year (e.g. fax class/standard pages, which describe eras rather
// than a single release) are simply omitted.

export interface TimelineItem {
  slug: string;
  title: string;
  year: number;
  introduced: string;
  manufacturer?: string;
  category?: string;
}

const YEAR = /\b(1[89]\d\d|20\d\d)\b/;

export function modelTimeline(): { decade: number; items: TimelineItem[] }[] {
  const items: TimelineItem[] = [];
  for (const e of allEntries) {
    if (e.section !== "models") continue;
    const m = e as ModelEntry;
    if (typeof m.introduced !== "string") continue;
    const y = m.introduced.match(YEAR);
    if (!y) continue;
    items.push({
      slug: m.slug,
      title: m.title,
      year: parseInt(y[1], 10),
      introduced: m.introduced,
      manufacturer: m.manufacturer,
      category: m.category,
    });
  }
  items.sort((a, b) => a.year - b.year || a.title.localeCompare(b.title));

  const byDecade = new Map<number, TimelineItem[]>();
  for (const it of items) {
    const d = Math.floor(it.year / 10) * 10;
    const bucket = byDecade.get(d) ?? [];
    if (!byDecade.has(d)) byDecade.set(d, bucket);
    bucket.push(it);
  }
  return [...byDecade.entries()]
    .sort((a, b) => a[0] - b[0])
    .map(([decade, list]) => ({ decade, items: list }));
}

export const timelineCount = (): number =>
  modelTimeline().reduce((n, d) => n + d.items.length, 0);
