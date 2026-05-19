import Link from "next/link";
import type { ContentEntry } from "@/lib/content/types";
import { getSectionMeta } from "@/lib/site";
import { entryKicker } from "@/lib/content/kicker";

export function RelatedLinks({ items }: { items: ContentEntry[] }) {
  if (items.length === 0) return null;
  return (
    <section className="mt-14 border-t border-rule pt-8">
      <p className="kicker">Continue in the archive</p>
      <h2 className="mt-2 font-serif text-2xl tracking-tight">
        Related reading
      </h2>
      <ul className="mt-5 grid gap-px border border-rule bg-rule sm:grid-cols-2">
        {items.map((e) => {
          const label = getSectionMeta(e.section).label;
          const k = entryKicker(e);
          const lk = label.toLowerCase();
          const showK =
            k.toLowerCase() !== lk && k.toLowerCase() !== lk.replace(/s$/, "");
          return (
            <li key={`${e.section}/${e.slug}`} className="bg-paper">
              <Link
                href={`/${e.section}/${e.slug}`}
                className="group block h-full p-5 no-underline transition-colors hover:bg-paper-raised"
              >
                <p className="kicker">
                  {label}
                  {showK ? ` · ${k}` : ""}
                </p>
                <p className="mt-2 font-serif text-lg tracking-tight text-ink group-hover:text-accent">
                  {e.title}
                </p>
                <p className="mt-1 text-sm text-ink-soft text-pretty">
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
