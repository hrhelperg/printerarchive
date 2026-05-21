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
        className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-soft"
      >
        Continue reading
      </h2>
      <ul className="mt-4 space-y-5">
        {resolved.map(({ entry, note }) => (
          <li key={`${entry.section}/${entry.slug}`}>
            <Link
              href={`/${entry.section}/${entry.slug}`}
              className="group block no-underline"
            >
              <span className="font-serif text-lg tracking-tight text-ink group-hover:text-accent">
                {entry.title}
              </span>
            </Link>
            {note ? (
              <p className="mt-1 text-sm text-ink-soft text-pretty">{note}</p>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}
