import Link from "next/link";
import type { ContentEntry } from "@/lib/content/types";

export function SectionList({ items }: { items: ContentEntry[] }) {
  return (
    <ul className="mt-8 divide-y divide-rule border-y border-rule">
      {items.map((e) => (
        <li key={`${e.section}/${e.slug}`} className="py-6">
          <h2 className="font-serif text-xl tracking-tight">
            <Link
              href={`/${e.section}/${e.slug}`}
              className="no-underline hover:underline"
            >
              {e.title}
            </Link>
          </h2>
          <p className="mt-1.5 text-ink-soft text-pretty">{e.summary}</p>
          <p className="mt-2 font-sans text-xs uppercase tracking-wide text-ink-faint">
            Updated{" "}
            <time dateTime={e.updated}>{e.updated}</time>
          </p>
        </li>
      ))}
    </ul>
  );
}
