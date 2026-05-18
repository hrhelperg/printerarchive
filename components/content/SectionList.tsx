import Link from "next/link";
import type { ContentEntry } from "@/lib/content/types";

export function SectionList({ items }: { items: ContentEntry[] }) {
  return (
    <ul className="mt-8 divide-y divide-rule border-y border-rule">
      {items.map((e) => (
        <li key={`${e.section}/${e.slug}`} className="py-6">
          <Link
            href={`/${e.section}/${e.slug}`}
            className="font-serif text-xl tracking-tight no-underline hover:underline"
          >
            {e.title}
          </Link>
          <p className="mt-1.5 text-ink-soft">{e.summary}</p>
          <p className="mt-2 font-sans text-xs uppercase tracking-wide text-ink-faint">
            Updated {e.updated}
          </p>
        </li>
      ))}
    </ul>
  );
}
