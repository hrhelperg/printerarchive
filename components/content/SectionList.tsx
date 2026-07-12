import Link from "next/link";
import Image from "next/image";
import type { ContentEntry } from "@/lib/content/types";
import { entryKicker } from "@/lib/content/kicker";

function ClusterPill({ cluster }: { cluster?: string }) {
  if (!cluster) return null;
  return (
    <p className="font-sans text-[10px] font-semibold uppercase text-ink-faint">
      {cluster.replace(/-/g, " ")}
    </p>
  );
}

export function SectionList({ items }: { items: ContentEntry[] }) {
  if (items.length === 0) return null;
  const [lead, ...rest] = items;
  const leadHasHero = Boolean(lead.hero);
  return (
    <div className="mt-8">
      <Link
        href={`/${lead.section}/${lead.slug}`}
        className="premium-card group block p-6 no-underline transition hover:border-rule-strong md:p-8"
      >
        <div
          className={
            leadHasHero
              ? "grid gap-6 md:grid-cols-[1.6fr_0.9fr] md:items-center"
              : ""
          }
        >
          <div>
            <ClusterPill cluster={lead.cluster} />
            <p className="kicker mt-1">{entryKicker(lead)}</p>
            <h2 className="mt-2 text-display-sm text-balance group-hover:text-accent">
              {lead.title}
            </h2>
            <p className="mt-3 max-w-3xl font-serif text-lg leading-8 text-ink-soft text-pretty">
              {lead.summary}
            </p>
            <p className="mt-4 font-sans text-xs font-semibold text-ink-faint">
              Updated <time dateTime={lead.updated}>{lead.updated}</time>
            </p>
          </div>
          {leadHasHero && lead.hero ? (
            <div className="relative aspect-[3/2] w-full overflow-hidden rounded-lg border border-rule bg-paper">
              <Image
                src={lead.hero.src}
                alt={lead.hero.alt}
                width={lead.hero.width}
                height={lead.hero.height}
                sizes="(max-width: 768px) 100vw, 360px"
                className="h-full w-full object-cover"
              />
            </div>
          ) : null}
        </div>
      </Link>
      {rest.length > 0 && (
        <ul className="mt-4 grid gap-3 md:grid-cols-2 xl:grid-cols-3">
          {rest.map((e) => (
            <li key={`${e.section}/${e.slug}`}>
              <Link
                href={`/${e.section}/${e.slug}`}
                className="premium-card-sm group block h-full p-5 no-underline transition hover:border-rule-strong hover:shadow-[0_10px_26px_rgb(15_23_42_/_0.08)]"
              >
                <ClusterPill cluster={e.cluster} />
                <p className="kicker mt-1">{entryKicker(e)}</p>
                <h3 className="mt-2 font-sans text-base font-semibold leading-6 text-ink-display group-hover:text-accent">
                  {e.title}
                </h3>
                <p className="mt-2 line-clamp-3 text-sm leading-6 text-ink-soft text-pretty">
                  {e.summary}
                </p>
                <p className="mt-3 font-sans text-xs font-semibold text-ink-faint">
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
