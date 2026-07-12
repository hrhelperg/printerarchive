import Link from "next/link";
import Image from "next/image";
import { SECTIONS, site } from "@/lib/site";
import { getSection } from "@/lib/content/queries";
import { Container } from "@/components/layout/Container";
import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";

interface HomeHeroProps {
  image?: ArchiveImageData;
  ctaHref?: string;
  ctaLabel?: string;
}

export function HomeHero({
  image,
  ctaHref = "/history",
  ctaLabel = "Enter the archive",
}: HomeHeroProps) {
  const totalEntries = SECTIONS.reduce((sum, s) => sum + getSection(s.id).length, 0);
  const stats = [
    {
      label: "Reference entries",
      value: `${totalEntries}+`,
      detail: "Source-backed guides, histories, tools, and workflows",
    },
    {
      label: "Manufacturers",
      value: `${getSection("brands").length}`,
      detail: "Brand histories and technical lineages",
    },
    {
      label: "Standards & protocols",
      value: `${getSection("tools").length}`,
      detail: "PDF, IPP, PCL, PostScript, TWAIN, SANE, and more",
    },
    {
      label: "Model pages",
      value: `${getSection("models").length}`,
      detail: "Structured for thousands of sourced device records",
    },
  ];

  return (
    <section className="border-b border-rule bg-[linear-gradient(180deg,#ffffff_0%,#fafbfc_72%)]">
      <Container width="wide" className="py-10 lg:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-center">
          <div className="fade-up">
            <p className="inline-flex items-center rounded-full border border-rule bg-paper-raised px-3 py-1.5 font-sans text-xs font-semibold text-accent shadow-[0_1px_2px_rgb(15_23_42_/_0.04)]">
              The most comprehensive printing resource on the web
            </p>
            <h1 className="mt-6 max-w-4xl text-display text-balance">
              Everything about printing. All in one{" "}
              <span className="text-accent">trusted archive.</span>
            </h1>
            <p className="mt-6 max-w-2xl font-serif text-xl leading-8 text-ink-soft text-pretty">
              {site.description} Independent, source-backed, and built for
              readers who need facts instead of marketing language.
            </p>

            <form
              action="https://www.google.com/search"
              method="get"
              role="search"
              className="mt-8 flex flex-col gap-3 rounded-lg border border-rule bg-paper-raised p-2 shadow-[0_18px_45px_rgb(15_23_42_/_0.08)] sm:flex-row sm:items-center"
            >
              <input type="hidden" name="as_sitesearch" value="printerarchive.net" />
              <label htmlFor="home-search" className="sr-only">
                Search PrinterArchive
              </label>
              <div className="flex min-w-0 flex-1 items-center gap-3 px-3 py-2">
                <svg
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                  className="h-5 w-5 shrink-0 text-ink-faint"
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
                  id="home-search"
                  name="q"
                  type="search"
                  placeholder="Search guides, standards, models, workflows..."
                  className="min-w-0 flex-1 bg-transparent font-sans text-sm text-ink outline-none placeholder:text-ink-faint"
                />
              </div>
              <button
                type="submit"
                className="rounded-lg bg-accent px-5 py-3 font-sans text-sm font-semibold text-white transition-colors hover:bg-accent-hover"
              >
                Search
              </button>
            </form>

            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                ["Source transparency", "Every cited claim stays traceable."],
                ["Independent reference", "No affiliate reviews or rankings."],
                ["Static and fast", "Built for durable indexed knowledge."],
              ].map(([title, text]) => (
                <div key={title} className="premium-card-sm p-4">
                  <p className="font-sans text-sm font-semibold text-ink-display">
                    {title}
                  </p>
                  <p className="mt-1 text-sm text-ink-faint">{text}</p>
                </div>
              ))}
            </div>

            <p className="mt-7 font-sans text-sm">
              <Link
                href={ctaHref}
                className="inline-flex items-center rounded-lg border border-rule bg-paper-raised px-4 py-2 font-semibold text-ink-soft no-underline shadow-[0_1px_2px_rgb(15_23_42_/_0.04)] transition-colors hover:border-accent hover:text-accent"
              >
                {ctaLabel}
                <span aria-hidden="true" className="ml-2">→</span>
              </Link>
            </p>
          </div>

          {image ? (
            <figure className="premium-card relative overflow-hidden p-4 fade-up-2">
              <div className="relative overflow-hidden rounded-lg bg-paper">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  sizes="(max-width: 1024px) 100vw, 620px"
                  preload
                  className="h-auto w-full object-cover"
                  style={{ aspectRatio: `${image.width} / ${image.height}` }}
                />
              </div>
              <figcaption className="mt-3 font-sans text-xs leading-5 text-ink-faint">
                {image.caption ? (
                  <span className="block text-ink-soft">{image.caption}</span>
                ) : null}
                <span>
                  {image.credit.url ? (
                    <a href={image.credit.url} rel="noopener noreferrer nofollow">
                      {image.credit.source}
                    </a>
                  ) : (
                    image.credit.source
                  )}
                  {image.credit.license ? ` · ${image.credit.license}` : ""}
                </span>
              </figcaption>
            </figure>
          ) : null}
        </div>

        <div className="premium-card mt-8 grid gap-px overflow-hidden bg-rule sm:grid-cols-2 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label} className="bg-paper-raised p-5">
              <p className="font-sans text-3xl font-semibold text-accent">
                {s.value}
              </p>
              <p className="mt-1 font-sans text-sm font-semibold text-ink-display">
                {s.label}
              </p>
              <p className="mt-1 text-sm leading-5 text-ink-faint">{s.detail}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
