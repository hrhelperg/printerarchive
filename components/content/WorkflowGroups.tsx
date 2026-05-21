import Link from "next/link";
import type { ContentEntry } from "@/lib/content/types";

const GROUPS: { label: string; slugs: string[] }[] = [
  {
    label: "Print from a phone or tablet",
    slugs: [
      "print-from-iphone",
      "print-from-android",
      "print-documents-from-ipad",
      "mobile-office-printing",
    ],
  },
  { label: "Scan to searchable PDF", slugs: ["scan-to-searchable-pdf"] },
  { label: "Print shipping labels", slugs: ["print-shipping-labels"] },
];

function Card({ e }: { e: ContentEntry }) {
  return (
    <li className="bg-paper">
      <Link
        href={`/workflows/${e.slug}`}
        className="group flex h-full flex-col p-6 no-underline transition-colors hover:bg-paper-raised"
      >
        <span className="font-serif text-base tracking-tight text-ink group-hover:text-accent">
          {e.title}
        </span>
        <span className="mt-1.5 text-sm text-ink-soft text-pretty">
          {e.summary}
        </span>
        <span className="mt-2 font-sans text-xs uppercase tracking-wide text-ink-faint">
          Open the workflow &rarr;
        </span>
      </Link>
    </li>
  );
}

export function WorkflowGroups({ items }: { items: ContentEntry[] }) {
  const entries = items.filter((e) => e.section === "workflows");
  if (entries.length === 0) return null;
  const bySlug = new Map(entries.map((e) => [e.slug, e]));
  const mapped = new Set(GROUPS.flatMap((g) => g.slugs));
  const unmapped = entries.filter((e) => !mapped.has(e.slug));

  return (
    <div className="mt-10 space-y-12">
      {GROUPS.map((g) => {
        const groupEntries = g.slugs
          .map((s) => bySlug.get(s))
          .filter((e) => e !== undefined) as ContentEntry[];
        if (groupEntries.length === 0) return null;
        return (
          <section key={g.label} aria-label={g.label}>
            <p className="kicker">{g.label}</p>
            <ul className="mt-4 grid gap-px border border-rule bg-rule sm:grid-cols-2">
              {groupEntries.map((e) => (
                <Card key={e.slug} e={e} />
              ))}
            </ul>
          </section>
        );
      })}
      {unmapped.length > 0 ? (
        <section aria-label="More workflows">
          <p className="kicker">More workflows</p>
          <ul className="mt-4 grid gap-px border border-rule bg-rule sm:grid-cols-2">
            {unmapped.map((e) => (
              <Card key={e.slug} e={e} />
            ))}
          </ul>
        </section>
      ) : null}
      <p className="mt-4 font-sans text-sm text-ink-soft">
        Fax workflows are documented in the{" "}
        <Link href="/fax" className="no-underline hover:underline">
          Fax section
        </Link>
        .
      </p>
    </div>
  );
}
