import Link from "next/link";
import type { ContentEntry } from "@/lib/content/types";
import { getSectionMeta } from "@/lib/site";
import { entryKicker } from "@/lib/content/kicker";

export function RelatedLinks({ items }: { items: ContentEntry[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mt-14 border-t border-rule pt-8">
      <p className="kicker">Continue in the archive</p>
      <h2 className="mt-2 font-serif text-3xl leading-tight text-ink-display">
        Related reading
      </h2>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {items.map((e) => {
          const label = getSectionMeta(e.section).label;
          const k = entryKicker(e);
          const lk = label.toLowerCase();
          const showK =
            k.toLowerCase() !== lk && k.toLowerCase() !== lk.replace(/s$/, "");
          return (
            <li key={`${e.section}/${e.slug}`}>
              <Link
                href={`/${e.section}/${e.slug}`}
                className="premium-card-sm group block h-full p-5 no-underline transition hover:border-rule-strong"
              >
                <p className="kicker">
                  {label}
                  {showK ? ` · ${k}` : ""}
                </p>
                <p className="mt-2 font-sans text-base font-semibold leading-6 text-ink-display group-hover:text-accent">
                  {e.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-ink-soft text-pretty">
                  {e.description}
                </p>
              </Link>
            </li>
          );
        })}
      </ul>
    </section>
  );
}
