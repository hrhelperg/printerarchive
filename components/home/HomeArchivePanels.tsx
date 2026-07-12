import Link from "next/link";
import Image from "next/image";
import type { ContentEntry, ContentRef } from "@/lib/content/types";
import { getEntry, getSection } from "@/lib/content/queries";
import { allEntries } from "@/lib/content/registry";
import { getSectionMeta } from "@/lib/site";
import { entryKicker } from "@/lib/content/kicker";

const POPULAR_GUIDES: ContentRef[] = [
  { section: "guides", slug: "how-laser-printers-work" },
  { section: "guides", slug: "what-is-postscript-printing" },
  { section: "guides", slug: "printer-drivers" },
  { section: "tools", slug: "ipp" },
  { section: "workflows", slug: "scan-to-searchable-pdf" },
  { section: "troubleshooting", slug: "printer-offline-guide" },
];

const TECHNOLOGIES: ContentRef[] = [
  { section: "guides", slug: "laser-printing" },
  { section: "guides", slug: "inkjet-printing" },
  { section: "guides", slug: "electrophotography" },
  { section: "guides", slug: "dot-matrix-printing" },
  { section: "guides", slug: "thermal-transfer-printing" },
  { section: "guides", slug: "optical-character-recognition" },
];

const STANDARDS: ContentRef[] = [
  { section: "tools", slug: "postscript" },
  { section: "tools", slug: "pcl" },
  { section: "tools", slug: "ipp" },
  { section: "tools", slug: "pdf-a" },
  { section: "tools", slug: "twain" },
  { section: "tools", slug: "sane" },
  { section: "tools", slug: "cups" },
  { section: "tools", slug: "mopria" },
];

const SYSTEM_AREAS = [
  {
    title: "Printing technologies",
    text: "Laser, inkjet, thermal, impact, electrophotographic, and color imaging systems.",
    href: "/guides/laser-printing",
  },
  {
    title: "Document formats",
    text: "PDF, PDF/A, PostScript, PCL, TIFF, XPS, and print-rendering languages.",
    href: "/tools/what-is-pdf",
  },
  {
    title: "Scanning & OCR",
    text: "Flatbed, ADF, TWAIN, SANE, searchable PDF, OCR engines, and capture workflows.",
    href: "/guides/optical-character-recognition",
  },
  {
    title: "Enterprise printing",
    text: "Print servers, queues, discovery, accounting, pull printing, and document governance.",
    href: "/guides/enterprise-print-servers",
  },
  {
    title: "Printer models",
    text: "A source-first model catalogue designed to scale to thousands of verified devices.",
    href: "/models",
  },
  {
    title: "Fax systems",
    text: "Analog fax, digital fax, office fax history, and document transmission technology.",
    href: "/fax",
  },
];

function resolve(refs: ContentRef[]) {
  return refs
    .map((r) => getEntry(r.section, r.slug))
    .filter((entry): entry is ContentEntry => Boolean(entry));
}

function MiniEntryCard({ entry }: { entry: ContentEntry }) {
  return (
    <Link
      href={`/${entry.section}/${entry.slug}`}
      className="premium-card-sm group grid h-full grid-cols-[4.5rem_1fr] gap-4 p-3 no-underline transition hover:border-rule-strong hover:shadow-[0_10px_26px_rgb(15_23_42_/_0.08)]"
    >
      {entry.hero ? (
        <div className="relative aspect-square overflow-hidden rounded-md border border-rule bg-paper">
          <Image
            src={entry.hero.src}
            alt=""
            width={entry.hero.width}
            height={entry.hero.height}
            sizes="72px"
            className="h-full w-full object-cover"
          />
        </div>
      ) : (
        <div
          aria-hidden="true"
          className="flex aspect-square items-center justify-center rounded-md border border-rule bg-sepia font-sans text-lg font-semibold text-accent"
        >
          {entry.title.slice(0, 1)}
        </div>
      )}
      <div className="min-w-0">
        <p className="font-sans text-[0.72rem] font-semibold text-accent">
          {entryKicker(entry)}
        </p>
        <p className="mt-1 line-clamp-2 font-sans text-sm font-semibold leading-5 text-ink-display group-hover:text-accent">
          {entry.title}
        </p>
        <p className="mt-1 line-clamp-2 text-xs leading-5 text-ink-faint">
          {entry.description}
        </p>
      </div>
    </Link>
  );
}

function TextEntryLink({ entry }: { entry: ContentEntry }) {
  const section = getSectionMeta(entry.section);
  return (
    <Link
      href={`/${entry.section}/${entry.slug}`}
      className="group flex items-start justify-between gap-4 border-b border-rule py-4 no-underline last:border-b-0"
    >
      <span>
        <span className="font-sans text-xs font-semibold text-accent">
          {section.label}
        </span>
        <span className="mt-1 block font-sans text-sm font-semibold text-ink-display group-hover:text-accent">
          {entry.title}
        </span>
      </span>
      <time
        dateTime={entry.updated}
        className="shrink-0 font-sans text-xs text-ink-faint"
      >
        {entry.updated}
      </time>
    </Link>
  );
}

export function HomeArchivePanels() {
  const popular = resolve(POPULAR_GUIDES);
  const technologies = resolve(TECHNOLOGIES);
  const standards = resolve(STANDARDS);
  const manufacturers = getSection("brands").slice(0, 8);
  const recentlyUpdated = [...allEntries]
    .sort((a, b) => b.updated.localeCompare(a.updated))
    .slice(0, 6);

  return (
    <section className="border-b border-rule bg-paper">
      <div className="mx-auto w-full max-w-7xl px-5 py-12 sm:px-6 lg:px-8 lg:py-16">
        <div className="grid gap-6 lg:grid-cols-[1.45fr_0.75fr]">
          <section aria-labelledby="popular-guides" className="premium-card p-5 lg:p-6">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <p className="kicker">Popular guides</p>
                <h2
                  id="popular-guides"
                  className="mt-2 font-serif text-3xl leading-tight text-ink-display"
                >
                  Authoritative starting points
                </h2>
              </div>
              <Link
                href="/guides"
                className="shrink-0 font-sans text-sm font-semibold no-underline"
              >
                View all guides →
              </Link>
            </div>
            <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {popular.map((entry) => (
                <MiniEntryCard key={`${entry.section}/${entry.slug}`} entry={entry} />
              ))}
            </div>
          </section>

          <section aria-labelledby="recently-updated" className="premium-card p-5 lg:p-6">
            <p className="kicker">Recently updated</p>
            <h2
              id="recently-updated"
              className="mt-2 font-serif text-3xl leading-tight text-ink-display"
            >
              Freshly maintained
            </h2>
            <div className="mt-4">
              {recentlyUpdated.map((entry) => (
                <TextEntryLink key={`${entry.section}/${entry.slug}`} entry={entry} />
              ))}
            </div>
          </section>
        </div>

        <section aria-labelledby="system-map" className="mt-8">
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
            <div>
              <p className="kicker">Explore by system</p>
              <h2
                id="system-map"
                className="mt-2 text-display-sm text-balance"
              >
                The archive spans the full document stack
              </h2>
            </div>
            <Link
              href="/tools"
              className="font-sans text-sm font-semibold no-underline"
            >
              Browse tools and standards →
            </Link>
          </div>
          <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {SYSTEM_AREAS.map((area) => (
              <Link
                key={area.href}
                href={area.href}
                className="premium-card-sm group block p-5 no-underline transition hover:border-rule-strong hover:shadow-[0_10px_26px_rgb(15_23_42_/_0.08)]"
              >
                <p className="font-sans text-base font-semibold text-ink-display group-hover:text-accent">
                  {area.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  {area.text}
                </p>
              </Link>
            ))}
          </div>
        </section>

        <div className="mt-8 grid gap-6 lg:grid-cols-2">
          <section aria-labelledby="top-manufacturers" className="premium-card p-5 lg:p-6">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <p className="kicker">Top manufacturers</p>
                <h2
                  id="top-manufacturers"
                  className="mt-2 font-serif text-3xl leading-tight text-ink-display"
                >
                  Companies that shaped office output
                </h2>
              </div>
              <Link
                href="/brands"
                className="shrink-0 font-sans text-sm font-semibold no-underline"
              >
                View all →
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {manufacturers.map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/${entry.section}/${entry.slug}`}
                  className="premium-card-sm flex min-h-20 items-center justify-center px-4 py-5 text-center font-sans text-sm font-semibold text-ink-display no-underline transition hover:border-rule-strong hover:text-accent"
                >
                  {entry.title.replace("Printer Brand History", "").trim()}
                </Link>
              ))}
            </div>
          </section>

          <section aria-labelledby="standards" className="premium-card p-5 lg:p-6">
            <div className="flex items-baseline justify-between gap-4">
              <div>
                <p className="kicker">Standards</p>
                <h2
                  id="standards"
                  className="mt-2 font-serif text-3xl leading-tight text-ink-display"
                >
                  Languages, protocols, and formats
                </h2>
              </div>
              <Link
                href="/tools"
                className="shrink-0 font-sans text-sm font-semibold no-underline"
              >
                View all →
              </Link>
            </div>
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4">
              {standards.map((entry) => (
                <Link
                  key={entry.slug}
                  href={`/${entry.section}/${entry.slug}`}
                  className="premium-card-sm group flex min-h-20 flex-col justify-center px-4 py-4 no-underline transition hover:border-rule-strong"
                >
                  <span className="font-sans text-sm font-semibold text-ink-display group-hover:text-accent">
                    {entry.title}
                  </span>
                  <span className="mt-1 line-clamp-1 text-xs text-ink-faint">
                    {entryKicker(entry)}
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </div>

        <section aria-labelledby="technologies" className="mt-8 premium-card p-5 lg:p-6">
          <div className="flex items-baseline justify-between gap-4">
            <div>
              <p className="kicker">Printing technologies</p>
              <h2
                id="technologies"
                className="mt-2 font-serif text-3xl leading-tight text-ink-display"
              >
                Mechanisms, materials, and imaging physics
              </h2>
            </div>
            <Link
              href="/guides"
              className="shrink-0 font-sans text-sm font-semibold no-underline"
            >
              View guides →
            </Link>
          </div>
          <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((entry) => (
              <Link
                key={entry.slug}
                href={`/${entry.section}/${entry.slug}`}
                className="group block rounded-lg border border-rule bg-paper px-5 py-5 no-underline transition hover:border-rule-strong hover:bg-paper-raised"
              >
                <p className="font-sans text-sm font-semibold text-accent">
                  {entryKicker(entry)}
                </p>
                <p className="mt-2 font-sans text-base font-semibold text-ink-display group-hover:text-accent">
                  {entry.title}
                </p>
                <p className="mt-2 text-sm leading-6 text-ink-soft">
                  {entry.description}
                </p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}
