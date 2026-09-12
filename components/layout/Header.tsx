import Link from "next/link";
import { SECTIONS, site } from "@/lib/site";
import { Container } from "./Container";
import { Wordmark } from "@/components/identity/Wordmark";

/**
 * Section rail order. Deliberately editorial rather than alphabetical: the
 * narrative sections lead, the reference catalogues follow, and Blog closes
 * the rail behind a divider because it is a different register, not another
 * encyclopedia section.
 */
const RAIL: { href: string; label: string }[] = [
  ...SECTIONS.filter((s) => s.id !== "mobile-printing").map((s) => ({
    href: `/${s.id}`,
    label: s.label,
  })),
  { href: "/knowledge-graph", label: "Knowledge Graph" },
  { href: "/timeline", label: "Timeline" },
];

export function Header() {
  return (
    // Sticks directly beneath the global ecosystem banner. The offset is the
    // banner's own height variable, never a duplicated literal.
    <header className="sticky top-[var(--ecosystem-banner-height)] z-40 border-b border-rule bg-paper-raised/95 backdrop-blur">
      {/* Tier 1 — identity and search. */}
      <Container
        width="wide"
        className="flex h-14 items-center gap-4 lg:h-[3.75rem]"
      >
        <Link
          href="/"
          className="shrink-0 no-underline"
          aria-label={`${site.name} home`}
        >
          <Wordmark
            size="compact"
            tagline="The world's printing encyclopedia"
            className="lg:hidden"
            showTagline={false}
          />
          <Wordmark
            tagline="The world's printing encyclopedia"
            className="hidden lg:flex"
          />
        </Link>

        <form
          action="https://www.google.com/search"
          method="get"
          role="search"
          className="ml-auto flex min-w-0 flex-1 items-center gap-2 rounded-md border border-rule bg-paper px-3 py-1.5 transition-colors focus-within:border-accent sm:max-w-xs lg:max-w-sm"
        >
          <input type="hidden" name="as_sitesearch" value="printerarchive.net" />
          <label htmlFor="site-search" className="sr-only">
            Search PrinterArchive
          </label>
          <svg
            aria-hidden="true"
            viewBox="0 0 24 24"
            className="h-4 w-4 shrink-0 text-ink-faint"
            fill="none"
          >
            <path
              d="m20 20-4.2-4.2m1.7-5.3a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
              stroke="currentColor"
              strokeWidth="1.8"
              strokeLinecap="round"
            />
          </svg>
          <input
            id="site-search"
            name="q"
            type="search"
            placeholder="Search the archive"
            className="min-w-0 flex-1 bg-transparent font-sans text-sm text-ink outline-none placeholder:text-ink-faint"
          />
          <button
            type="submit"
            className="shrink-0 rounded font-sans text-xs font-semibold text-accent transition-colors hover:text-accent-hover"
          >
            Search
          </button>
        </form>
      </Container>

      {/* Tier 2 — the section rail.
          The list scrolls horizontally at EVERY width. It previously became
          `overflow-visible` above lg, which let it shrink below its content
          width and paint its links 200px to the left, on top of the wordmark.
          Overflow here is always `auto`, so the failure cannot recur. */}
      <nav aria-label="Sections" className="border-t border-rule">
        <Container width="wide" className="relative">
          <ul className="scrollbar-none -mx-1 flex items-stretch gap-0.5 overflow-x-auto font-sans text-[0.8125rem] font-semibold">
            {RAIL.map((item) => (
              <li key={item.href} className="shrink-0">
                <Link
                  href={item.href}
                  className="block whitespace-nowrap border-b-2 border-transparent px-3 py-2.5 text-ink-soft no-underline transition-colors hover:border-b-accent hover:text-accent"
                >
                  {item.label}
                </Link>
              </li>
            ))}
            <li aria-hidden className="shrink-0 self-center px-2">
              <span className="block h-4 w-px bg-rule-strong" />
            </li>
            <li className="shrink-0">
              <Link
                href="/blog"
                className="block whitespace-nowrap border-b-2 border-transparent px-3 py-2.5 text-accent no-underline transition-colors hover:border-b-accent"
              >
                Blog
              </Link>
            </li>
          </ul>
        </Container>
      </nav>
    </header>
  );
}
