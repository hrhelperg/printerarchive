import Link from "next/link";
import type { ContentEntry, ModelEntry } from "@/lib/content/types";

/**
 * The model catalogue as one reference table.
 *
 * A single table — not one per manufacturer — so every column keeps the same
 * width down the page; per-group tables sized themselves independently and the
 * columns jumped at each heading. Manufacturers are grouped by spanning header
 * rows instead.
 *
 * Every column is optional data on ModelEntry. A cell with no source-backed
 * value renders an em dash: the archive never infers a specification, and the
 * table must make an absent figure visibly absent rather than plausible.
 */
export function ModelTable({ items }: { items: ContentEntry[] }) {
  const models = items.filter((e): e is ModelEntry => e.section === "models");
  if (models.length === 0) return null;

  const OTHER = "Other documented machines";
  const groups = new Map<string, { label: string; rows: ModelEntry[] }>();
  for (const m of models) {
    const raw = m.manufacturer?.trim();
    const key = raw ? normalise(raw) : OTHER;
    const existing = groups.get(key);
    if (existing) {
      existing.rows.push(m);
      // Prefer the shortest spelling as the display label, so "Apple Computer"
      // and "Apple Computer, Inc." do not become two separate groups.
      if (raw && raw.length < existing.label.length) existing.label = raw;
    } else {
      groups.set(key, { label: raw ?? OTHER, rows: [m] });
    }
  }
  const ordered = [...groups.entries()].sort(([a], [b]) =>
    a === normalise(OTHER) ? 1 : b === normalise(OTHER) ? -1 : a.localeCompare(b),
  );

  return (
    <div className="overflow-x-auto">
      <table className="w-full min-w-[46rem] table-fixed border-collapse text-left">
        <caption className="sr-only">
          Documented printer and fax models, grouped by manufacturer
        </caption>
        <colgroup>
          <col className="w-[26%]" />
          <col className="w-[30%]" />
          <col className="w-[17%]" />
          <col className="w-[19%]" />
          <col className="w-[8%]" />
        </colgroup>
        <thead>
          <tr className="border-y border-rule-strong">
            <th scope="col" className="tech-label py-2.5 pr-4">Model</th>
            <th scope="col" className="tech-label py-2.5 pr-4">Introduced</th>
            <th scope="col" className="tech-label py-2.5 pr-4">Class</th>
            <th scope="col" className="tech-label py-2.5 pr-4">Era</th>
            <th scope="col" className="tech-label py-2.5 text-right">Sources</th>
          </tr>
        </thead>
        {ordered.map(([key, group]) => (
          <tbody key={key}>
            <tr className="bg-paper-sunken">
              <th
                scope="colgroup"
                colSpan={5}
                className="border-y border-rule px-0 py-2 font-sans text-[0.8125rem] font-semibold text-ink-display"
              >
                {group.label}
                <span className="ml-2 index-number">{group.rows.length}</span>
              </th>
            </tr>
            {group.rows.map((m) => (
              <tr
                key={m.slug}
                className="border-b border-rule align-top transition-colors hover:bg-paper-sunken"
              >
                <th scope="row" className="py-3 pr-4 font-normal">
                  <Link
                    href={`/models/${m.slug}`}
                    className="font-sans text-[0.9375rem] font-semibold leading-6 text-ink-display no-underline hover:text-accent"
                  >
                    {m.title}
                  </Link>
                </th>
                <td className="py-3 pr-4 font-sans text-[0.8125rem] leading-6 text-ink-soft">
                  {m.introduced ?? <Absent />}
                </td>
                <td className="py-3 pr-4 font-sans text-sm leading-6 text-ink-soft">
                  {m.category ?? <Absent />}
                </td>
                <td className="py-3 pr-4 font-sans text-sm leading-6 text-ink-soft">
                  {m.era ?? <Absent />}
                </td>
                <td className="py-3 text-right tech-value">{m.sources.length}</td>
              </tr>
            ))}
          </tbody>
        ))}
      </table>
    </div>
  );
}

/** Group key: case- and legal-suffix-insensitive, so one company is one group. */
function normalise(name: string): string {
  return name
    .toLowerCase()
    .replace(/[.,]/g, "")
    .replace(/\b(inc|incorporated|ltd|limited|corp|corporation|co|company|gmbh|ag|kk|kabushiki kaisha)\b/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/** Visibly absent, never a guess. */
function Absent() {
  return (
    <span className="text-ink-faint" title="Not verified against a source">
      —
    </span>
  );
}
