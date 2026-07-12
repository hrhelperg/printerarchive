import Link from "next/link";

const STAGES: { n: number; label: string; text: string }[] = [
  {
    n: 1,
    label: "Device",
    text: "A phone, tablet, or laptop holds the document and initiates the print.",
  },
  {
    n: 2,
    label: "Network discovery",
    text: "The device finds an eligible printer on the local network — the step AirPrint and its equivalents standardised.",
  },
  {
    n: 3,
    label: "Printer",
    text: "The printer accepts the job directly, without a conventionally installed driver.",
  },
  {
    n: 4,
    label: "Document output",
    text: "The page is rendered and printed — the same end the rest of the archive traces from its mechanical origins.",
  },
];

export function MobileHandoff() {
  return (
    <section aria-label="Modern mobile printing handoff" className="mb-14">
      <p className="kicker">The modern handoff</p>
      <h2 className="mt-2 text-display-sm text-balance">
        From device to printed page
      </h2>
      <p className="mt-3 max-w-2xl font-serif text-lg text-ink-soft text-pretty">
        Mobile printing replaced the installed driver with network discovery.
        The document still reaches paper; the path it takes is what changed.
      </p>
      <ol className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {STAGES.map((s) => (
          <li key={s.n} className="premium-card-sm flex h-full flex-col p-6">
            <span className="font-sans text-2xl font-semibold leading-none text-accent">
              {String(s.n).padStart(2, "0")}
            </span>
            <span className="mt-3 font-sans text-base font-semibold leading-6 text-ink-display">
              {s.label}
            </span>
            <span className="mt-2 text-sm leading-6 text-ink-soft text-pretty">
              {s.text}
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-6 font-sans text-sm text-ink-soft">
        The discovery step is explained in{" "}
        <Link
          href="/mobile-printing/what-is-airprint"
          className="no-underline hover:underline"
        >
          What is AirPrint?
        </Link>
      </p>
    </section>
  );
}
