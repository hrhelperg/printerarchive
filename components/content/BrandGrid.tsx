import Link from "next/link";
import type { ContentEntry } from "@/lib/content/types";
import { getManufacturer } from "@/lib/knowledge-graph/manufacturers";

/**
 * Manufacturers as entity tiles: monogram, name, headquarters, status and the
 * number of model families the knowledge graph has mapped.
 *
 * No logos — the archive holds no licensed brand assets, and a fabricated or
 * scraped mark would be unsourced material on a page whose whole claim is that
 * it is sourced.
 */
export function BrandGrid({ items }: { items: ContentEntry[] }) {
  if (items.length === 0) return null;
  return (
    <ul className="grid grid-cols-1 gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
      {items.map((e) => {
        const kg = getManufacturer(e.slug);
        const name = "brand" in e && e.brand ? e.brand : e.title;
        const monogram = name.replace(/[^A-Za-z]/g, "").slice(0, 2).toUpperCase();
        const families = kg?.modelFamilies?.length ?? 0;
        return (
          <li key={e.slug}>
            <Link
              href={`/brands/${e.slug}`}
              className="group flex h-full flex-col gap-4 bg-paper-raised p-6 no-underline transition-colors hover:bg-paper-sunken"
            >
              <span className="flex items-center gap-4">
                <span className="flex h-12 w-12 shrink-0 items-center justify-center border border-rule-strong font-sans text-base font-bold tracking-tight text-ink-display group-hover:border-accent group-hover:text-accent">
                  {monogram}
                </span>
                <span className="min-w-0">
                  <span className="block font-sans text-base font-semibold text-ink-display group-hover:text-accent">
                    {name}
                  </span>
                  {kg ? (
                    <span className="meta-line block">
                      {kg.hqCountry} · {kg.status}
                    </span>
                  ) : null}
                </span>
              </span>
              <span className="text-sm leading-6 text-ink-soft text-pretty">
                {e.description}
              </span>
              {families > 0 ? (
                <span className="tech-label mt-auto">
                  {families} model {families === 1 ? "family" : "families"} mapped
                </span>
              ) : null}
            </Link>
          </li>
        );
      })}
    </ul>
  );
}
