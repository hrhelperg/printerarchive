import Link from "next/link";
import Image from "next/image";
import type { ContentEntry } from "@/lib/content/types";
import { entryKicker } from "@/lib/content/kicker";

function ClusterPill({ cluster }: { cluster?: string }) {
  if (!cluster) return null;
  return (
    <p className="font-sans text-[10px] uppercase tracking-wider text-ink-faint">
      {cluster.replace(/-/g, " ")}
    </p>
  );
}

export function SectionList({ items }: { items: ContentEntry[] }) {
  if (items.length === 0) return null;
  const [lead, ...rest] = items;
  const leadHasHero = Boolean(lead.hero);
  return (
    <div className="mt-10">
      <Link
        href={`/${lead.section}/${lead.slug}`}
        className="group block border-t border-rule-strong py-8 no-underline transition-colors hover:bg-paper-raised"
      >
        <div
          className={
            leadHasHero
              ? "grid gap-6 md:grid-cols-[1.6fr_1fr] md:items-center"
              : ""
          }
        >
          <div>
            <ClusterPill cluster={lead.cluster} />
            <p className="kicker mt-1">{entryKicker(lead)}</p>
            <h2 className="mt-2 text-display-sm text-balance group-hover:text-accent">
              {lead.title}
            </h2>
            <p className="mt-3 max-w-2xl font-serif text-lg text-ink-soft text-pretty">
              {lead.summary}
            </p>
            <p className="mt-3 font-sans text-xs uppercase tracking-wide text-ink-faint">
              Updated <time dateTime={lead.updated}>{lead.updated}</time>
            </p>
          </div>
          {leadHasHero && lead.hero ? (
            <div className="relative aspect-[3/2] w-full overflow-hidden border border-rule bg-paper-raised">
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
        <ul className="divide-y divide-rule border-y border-rule">
          {rest.map((e) => (
            <li key={`${e.section}/${e.slug}`}>
              <Link
                href={`/${e.section}/${e.slug}`}
                className="group block py-5 no-underline transition-colors hover:bg-paper-raised"
              >
                <ClusterPill cluster={e.cluster} />
                <p className="kicker mt-1">{entryKicker(e)}</p>
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
