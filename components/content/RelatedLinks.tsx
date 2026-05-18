import Link from "next/link";
import type { ContentEntry } from "@/lib/content/types";

export function RelatedLinks({ items }: { items: ContentEntry[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mt-12 border-t border-rule pt-8">
      <h2 className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-soft">
        Related reading
      </h2>
      <ul className="mt-4 grid gap-4 sm:grid-cols-2">
        {items.map((e) => (
          <li
            key={`${e.section}/${e.slug}`}
            className="border border-rule p-4"
          >
            <Link
              href={`/${e.section}/${e.slug}`}
              className="font-serif text-lg no-underline hover:underline"
            >
              {e.title}
            </Link>
            <p className="mt-1 text-sm text-ink-soft">{e.description}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}
