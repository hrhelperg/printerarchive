import Link from "next/link";
import { SECTIONS, site } from "@/lib/site";
import { Container } from "./Container";
import { Wordmark } from "@/components/identity/Wordmark";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-rule bg-paper/95 shadow-[0_1px_2px_rgb(15_23_42_/_0.04)] backdrop-blur">
      <Container
        width="wide"
        className="flex flex-col gap-4 py-4 lg:flex-row lg:items-center lg:justify-between lg:py-5"
      >
        <div className="flex flex-wrap items-center justify-between gap-4 lg:flex-nowrap">
          <Link
            href="/"
            className="group no-underline"
            aria-label={`${site.name} home`}
          >
            <Wordmark tagline="The world's printing encyclopedia" />
          </Link>
          <Link
            href="/models"
            className="hidden rounded-full border border-rule bg-paper-raised px-3 py-1.5 font-sans text-xs font-semibold text-accent no-underline shadow-[0_1px_2px_rgb(15_23_42_/_0.04)] transition-colors hover:border-accent hover:bg-paper lg:inline-flex"
          >
            Models
          </Link>
        </div>

        <div className="flex flex-col gap-3 lg:min-w-0 lg:flex-1 lg:flex-row lg:items-center lg:justify-end">
          <nav aria-label="Primary" className="lg:min-w-0">
            <ul className="flex items-center gap-1 overflow-x-auto pb-1 font-sans text-sm font-semibold text-ink-soft lg:flex-nowrap lg:justify-end lg:overflow-visible lg:pb-0">
              {SECTIONS.filter(
                (s) =>
                  s.id !== "troubleshooting" &&
                  s.id !== "mobile-printing" &&
                  s.id !== "models",
              ).map((s) => (
                <li key={s.id} className="shrink-0">
                  <Link
                    href={`/${s.id}`}
                    className="block whitespace-nowrap rounded-full px-2.5 py-2 no-underline transition-colors hover:bg-paper-raised hover:text-accent"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <form
            action="https://www.google.com/search"
            method="get"
            role="search"
            className="flex w-full items-center gap-2 rounded-lg border border-rule bg-paper-raised px-3 py-2 shadow-[0_1px_2px_rgb(15_23_42_/_0.04)] lg:w-[17rem] xl:w-[20rem]"
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
              placeholder="Search archive..."
              className="min-w-0 flex-1 bg-transparent font-sans text-sm text-ink outline-none placeholder:text-ink-faint"
            />
            <button
              type="submit"
              className="rounded-md bg-accent px-3 py-1.5 font-sans text-xs font-semibold text-white transition-colors hover:bg-accent-hover"
            >
              Search
            </button>
          </form>
        </div>
      </Container>
    </header>
  );
}
