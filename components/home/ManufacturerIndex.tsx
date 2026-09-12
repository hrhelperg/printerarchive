import Link from "next/link";
import { getSection } from "@/lib/content/queries";
import { getManufacturer } from "@/lib/knowledge-graph/manufacturers";
import { Container } from "@/components/layout/Container";

/**
 * Manufacturer discovery by typographic monogram.
 *
 * No logos: the archive does not hold licensed brand assets, and inventing or
 * scraping them would be exactly the kind of unsourced material the source
 * policy forbids. A set monogram is honest and, at this size, more legible
 * than a wordmark would be anyway.
 */
export function ManufacturerIndex() {
  const brands = getSection("brands");
  if (brands.length === 0) return null;

  return (
    <Container width="wide" className="py-[var(--band)]">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="kicker">Manufacturers</p>
          <h2 className="mt-2 text-display-sm text-balance">
            The companies that shaped the desk
          </h2>
        </div>
        <Link
          href="/brands"
          className="font-sans text-sm font-semibold text-accent no-underline hover:underline"
        >
          All manufacturers <span aria-hidden>→</span>
        </Link>
      </div>

      <ul className="mt-9 grid grid-cols-2 gap-px border border-rule bg-rule sm:grid-cols-3 lg:grid-cols-5">
        {brands.map((b) => {
          const slug = b.slug;
          const kg = getManufacturer(slug);
          const families = kg?.modelFamilies?.length ?? 0;
          const monogram = ("brand" in b && b.brand ? b.brand : b.title)
            .replace(/[^A-Za-z]/g, "")
            .slice(0, 2)
            .toUpperCase();
          return (
            <li key={slug}>
              <Link
                href={`/brands/${slug}`}
                className="group flex h-full flex-col gap-3 bg-paper-raised p-5 no-underline transition-colors hover:bg-paper-sunken"
              >
                <span className="flex h-10 w-10 items-center justify-center border border-rule-strong font-sans text-sm font-bold tracking-tight text-ink-display group-hover:border-accent group-hover:text-accent">
                  {monogram}
                </span>
                <span className="font-sans text-[0.95rem] font-semibold text-ink-display group-hover:text-accent">
                  {"brand" in b && b.brand ? b.brand : b.title}
                </span>
                {families > 0 ? (
                  <span className="meta-line mt-auto">
                    {families} model {families === 1 ? "family" : "families"}
                  </span>
                ) : (
                  <span className="meta-line mt-auto">
                    {kg?.hqCountry ?? "Manufacturer"}
                  </span>
                )}
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
