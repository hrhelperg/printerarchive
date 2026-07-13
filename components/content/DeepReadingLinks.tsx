import Link from "next/link";
import type { ContentRef, ContentEntry } from "@/lib/content/types";
import { getEntry } from "@/lib/content/queries";

interface DeepReadingItem {
  ref: ContentRef;
  note?: string;
}

interface DeepReadingLinksProps {
  items: DeepReadingItem[];
}

export function DeepReadingLinks({ items }: DeepReadingLinksProps) {
  const resolved: { entry: ContentEntry; note?: string }[] = items
    .flatMap((it) => {
      const entry = getEntry(it.ref.section, it.ref.slug);
      return entry ? [{ entry, note: it.note }] : [];
    });

  if (resolved.length === 0) return null;

  return (
    <section
      aria-labelledby="deep-reading"
      className="mt-12 border-t border-rule pt-8"
    >
      <h2
        id="deep-reading"
        className="font-serif text-3xl leading-tight text-ink-display"
      >
        Continue reading
      </h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {resolved.map(({ entry, note }) => (
          <li key={`${entry.section}/${entry.slug}`}>
            <Link
              href={`/${entry.section}/${entry.slug}`}
              className="premium-card-sm group block h-full p-5 no-underline transition hover:border-rule-strong"
            >
              <span className="font-sans text-base font-semibold leading-6 text-ink-display group-hover:text-accent">
                {entry.title}
              </span>
              {note ? (
                <span className="mt-2 block text-sm leading-6 text-ink-soft text-pretty">
                  {note}
                </span>
              ) : null}
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
