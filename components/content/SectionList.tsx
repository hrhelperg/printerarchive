import Link from "next/link";
import type { ContentEntry } from "@/lib/content/types";
import { entryKicker } from "@/lib/content/kicker";

export function SectionList({ items }: { items: ContentEntry[] }) {
  if (items.length === 0) return null;
  const [lead, ...rest] = items;
  return (
    <div className="mt-10">
      <Link
        href={`/${lead.section}/${lead.slug}`}
        className="group block border-t border-rule-strong py-8 no-underline"
      >
        <p className="kicker">{entryKicker(lead)}</p>
        <h2 className="mt-2 text-display-sm text-balance group-hover:text-accent">
          {lead.title}
        </h2>
        <p className="mt-3 max-w-2xl font-serif text-lg text-ink-soft text-pretty">
          {lead.summary}
        </p>
        <p className="mt-3 font-sans text-xs uppercase tracking-wide text-ink-faint">
          Updated <time dateTime={lead.updated}>{lead.updated}</time>
        </p>
      </Link>
      {rest.length > 0 && (
        <ul className="divide-y divide-rule border-y border-rule">
          {rest.map((e) => (
            <li key={`${e.section}/${e.slug}`}>
              <Link
                href={`/${e.section}/${e.slug}`}
                className="group block py-6 no-underline"
              >
                <p className="kicker">{entryKicker(e)}</p>
                <h3 className="mt-1.5 font-serif text-xl tracking-tight text-ink group-hover:text-accent">
                  {e.title}
                </h3>
                <p className="mt-1.5 text-ink-soft text-pretty">{e.summary}</p>
                <p className="mt-2 font-sans text-xs uppercase tracking-wide text-ink-faint">
                  Updated <time dateTime={e.updated}>{e.updated}</time>
                </p>
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
