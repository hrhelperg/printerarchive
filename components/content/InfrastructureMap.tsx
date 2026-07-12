import Link from "next/link";

const MAP: { label: string; href: string; note: string }[] = [
  {
    label: "PDF",
    href: "/tools/what-is-pdf",
    note: "The portable document format the office standardised on.",
  },
  {
    label: "Searchable PDF",
    href: "/workflows/scan-to-searchable-pdf",
    note: "A scanned image made selectable and indexable through OCR.",
  },
  {
    label: "OCR",
    href: "/glossary/ocr",
    note: "Optical character recognition — turning an image of text into text.",
  },
  {
    label: "Print queue",
    href: "/glossary/print-queue",
    note: "The ordered line of jobs waiting for a shared device.",
  },
  {
    label: "Print spooler",
    href: "/glossary/print-spooler",
    note: "The service that holds and releases jobs to the device.",
  },
  {
    label: "Print driver",
    href: "/glossary/print-driver",
    note: "The translation layer between an application and a printer.",
  },
  {
    label: "Print server",
    href: "/guides/what-is-a-print-server",
    note: "The system that administers a shared printer for many users.",
  },
  {
    label: "PostScript",
    href: "/guides/what-is-postscript-printing",
    note: "The page-description language behind PDF's lineage.",
  },
];

const FUTURE: string[] = [
  "Document compression (ZIP / archive formats)",
  "File-format conversion",
];

export function InfrastructureMap() {
  return (
    <section aria-label="Document infrastructure map" className="mb-14">
      <p className="kicker">Document infrastructure map</p>
      <h2 className="mt-2 text-display-sm text-balance">
        The layer the document moves through
      </h2>
      <p className="mt-3 max-w-2xl font-serif text-lg text-ink-soft text-pretty">
        Formats, queues, and protocols connect the application to the page.
        These reference entries document the infrastructure beneath the
        visible printer.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {MAP.map((m) => (
          <li key={m.href}>
            <Link
              href={m.href}
              className="premium-card-sm group flex h-full flex-col p-6 no-underline transition hover:border-rule-strong"
            >
              <span className="font-sans text-base font-semibold leading-6 text-ink-display group-hover:text-accent">
                {m.label}
              </span>
              <span className="mt-2 text-sm leading-6 text-ink-soft text-pretty">
                {m.note}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <p className="kicker text-ink-faint">Future reference topics</p>
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-sans text-sm text-ink-faint">
          {FUTURE.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
