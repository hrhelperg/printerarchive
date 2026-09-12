import Link from "next/link";
import Image from "next/image";
import type { ContentEntry } from "@/lib/content/types";
import { entryKicker } from "@/lib/content/kicker";

/**
 * The archive's default index: one lead entry given editorial weight, the rest
 * as hairline rows.
 *
 * This replaces a grid of identical rounded cards. A hub carrying 200 guides
 * is a reference index, and a reference index should be dense and scannable —
 * the card grid made twelve entries fill a screen and buried the rest.
 */
export function EntryIndex({
  items,
  lead = true,
}: {
  items: ContentEntry[];
  lead?: boolean;
}) {
  if (items.length === 0) return null;
  const [first, ...rest] = items;
  const showLead = lead && items.length > 3;
  const rows = showLead ? rest : items;

  return (
    <div>
      {showLead ? <LeadEntry entry={first} /> : null}
      <ul className={showLead ? "mt-10" : ""}>
        {rows.map((e) => (
          <li key={`${e.section}/${e.slug}`}>
            <Link href={`/${e.section}/${e.slug}`} className="editorial-row group">
              <span className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
                <span className="min-w-0 flex-1 basis-[22rem]">
                  <span className="block font-sans text-[0.975rem] font-semibold leading-6 text-ink-display group-hover:text-accent">
                    {e.title}
                  </span>
                  <span className="mt-1 block text-sm leading-6 text-ink-soft text-pretty">
                    {e.description}
                  </span>
                </span>
                <span className="tech-label shrink-0">{entryKicker(e)}</span>
                {e.sources?.length ? (
                  <span className="index-number shrink-0 w-10 text-right">
                    {e.sources.length}
                  </span>
                ) : (
                  <span className="index-number shrink-0 w-10 text-right">—</span>
                )}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

function LeadEntry({ entry: e }: { entry: ContentEntry }) {
  return (
    <Link
      href={`/${e.section}/${e.slug}`}
      className="group grid gap-6 no-underline md:grid-cols-[1.4fr_1fr] md:items-center"
    >
      <span>
        <span className="tech-label">{entryKicker(e)}</span>
        <span className="mt-2.5 block text-section group-hover:text-accent">
          {e.title}
        </span>
        <span className="mt-3 block max-w-2xl font-serif text-[1.02rem] leading-8 text-ink-soft text-pretty">
          {e.summary}
        </span>
        <span className="mt-4 block meta-line">
          Updated <time dateTime={e.updated}>{e.updated}</time>
          {e.sources?.length ? ` · ${e.sources.length} sources` : ""}
        </span>
      </span>
      {e.hero ? (
        <span className="block overflow-hidden border border-rule bg-paper-sunken md:justify-self-end">
          <Image
            src={e.hero.src}
            alt={e.hero.alt}
            width={e.hero.width}
            height={e.hero.height}
            sizes="(max-width: 768px) 100vw, 380px"
            className="aspect-[3/2] h-full w-full object-cover"
          />
        </span>
      ) : null}
    </Link>
  );
}
