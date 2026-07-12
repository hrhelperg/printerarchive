import Link from "next/link";
import type { ContentEntry, TroubleshootingEntry } from "@/lib/content/types";

const GROUPS: { label: string; slugs: string[] }[] = [
  {
    label: "Connection & detection",
    slugs: [
      "printer-not-detected-on-mac",
      "printer-not-detected-on-windows",
      "printer-wont-connect-to-wifi",
    ],
  },
  {
    label: "Offline & Windows",
    slugs: ["printer-offline-guide", "printer-offline-windows-11"],
  },
  {
    label: "Paper & output",
    slugs: ["paper-jam-guide", "printer-printing-blank-pages"],
  },
  { label: "Scanning", slugs: ["scanner-not-detected"] },
  { label: "AirPrint & mobile", slugs: ["airprint-not-working"] },
];

function isTrouble(e: ContentEntry): e is TroubleshootingEntry {
  return e.section === "troubleshooting";
}

function Card({ e }: { e: TroubleshootingEntry }) {
  return (
    <li>
      <Link
        href={`/troubleshooting/${e.slug}`}
        className="premium-card-sm group flex h-full flex-col p-6 no-underline transition hover:border-rule-strong"
      >
        <span className="text-sm leading-6 text-ink-soft text-pretty">{e.symptom}</span>
        <span className="mt-3 font-sans text-base font-semibold leading-6 text-ink-display group-hover:text-accent">
          {e.title}
        </span>
        <span className="mt-3 font-sans text-xs font-semibold text-ink-faint">
          Read the guide &rarr;
        </span>
      </Link>
    </li>
  );
}

export function DiagnosticGroups({ items }: { items: ContentEntry[] }) {
  const entries = items.filter(isTrouble);
  if (entries.length === 0) return null;
  const bySlug = new Map(entries.map((e) => [e.slug, e]));
  const mapped = new Set(GROUPS.flatMap((g) => g.slugs));
  const unmapped = entries.filter((e) => !mapped.has(e.slug));

  return (
    <div className="mt-10 space-y-12">
      {GROUPS.map((g) => {
        const groupEntries = g.slugs
          .map((s) => bySlug.get(s))
          .filter((e): e is TroubleshootingEntry => Boolean(e));
        if (groupEntries.length === 0) return null;
        return (
          <section key={g.label} aria-label={g.label}>
            <p className="kicker">{g.label}</p>
            <ul className="mt-4 grid gap-4 sm:grid-cols-2">
              {groupEntries.map((e) => (
                <Card key={e.slug} e={e} />
              ))}
            </ul>
          </section>
        );
      })}
      {unmapped.length > 0 ? (
        <section aria-label="More troubleshooting">
          <p className="kicker">More troubleshooting</p>
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {unmapped.map((e) => (
              <Card key={e.slug} e={e} />
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
