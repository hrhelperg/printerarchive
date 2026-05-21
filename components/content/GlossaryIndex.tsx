import Link from "next/link";
import type { ContentEntry, GlossaryEntry } from "@/lib/content/types";

function isGlossary(e: ContentEntry): e is GlossaryEntry {
  return e.section === "glossary";
}

export function GlossaryIndex({ items }: { items: ContentEntry[] }) {
  const terms = items.filter(isGlossary);
  if (terms.length === 0) return null;

  const byLetter = new Map<string, GlossaryEntry[]>();
  for (const t of terms) {
    const letter = t.term.charAt(0).toUpperCase();
    if (!byLetter.has(letter)) byLetter.set(letter, []);
    byLetter.get(letter)!.push(t);
  }
  const letters = [...byLetter.keys()].sort();

  return (
    <div className="mt-10">
      <p className="kicker">A&ndash;Z reference index</p>
      <div className="mt-6 divide-y divide-rule border-y border-rule">
        {letters.map((letter) => (
          <section
            key={letter}
            aria-label={`Terms starting with ${letter}`}
            className="grid gap-4 py-6 md:grid-cols-[3rem_1fr]"
          >
            <p
              className="font-serif text-3xl leading-none text-rule-strong"
              aria-hidden
            >
              {letter}
            </p>
            <dl className="space-y-4">
              {byLetter
                .get(letter)!
                .slice()
                .sort((a, b) => (a.term < b.term ? -1 : 1))
                .map((t) => (
                  <div key={t.slug}>
                    <dt>
                      <Link
                        href={`/glossary/${t.slug}`}
                        className="group no-underline"
                      >
                        <span className="font-serif text-lg tracking-tight text-ink group-hover:text-accent">
                          {t.term}
                        </span>
                      </Link>
                    </dt>
                    <dd className="mt-1 text-sm text-ink-soft text-pretty">
                      {t.shortDefinition}
                    </dd>
                  </div>
                ))}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}
