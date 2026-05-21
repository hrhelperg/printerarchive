import Link from "next/link";
import { Container } from "@/components/layout/Container";

// Curated discovery pathway into the office-infrastructure cluster. Ordered
// as a narrative — how an organisation centralised, scaled, buffered, shared,
// operated, and finally governed its document output. Mirrors EraRail's
// pattern but on the paper surface so the two rails read as distinct.
const STOPS = [
  {
    label: "Centralised",
    title: "Office print rooms",
    href: "/history/office-print-rooms",
  },
  {
    label: "At scale",
    title: "Print servers in large offices",
    href: "/history/print-servers-in-large-offices",
  },
  {
    label: "Buffered",
    title: "Spoolers and print queues",
    href: "/history/spoolers-and-print-queues",
  },
  {
    label: "Shared",
    title: "Early network printing systems",
    href: "/history/early-network-printing-systems",
  },
  {
    label: "In practice",
    title: "Shared printer workflows",
    href: "/workflows/shared-printer-workflows",
  },
  {
    label: "As records",
    title: "Enterprise document management",
    href: "/history/enterprise-document-management",
  },
];

export function OfficeInfraRail() {
  return (
    <section className="border-y border-rule-strong">
      <Container width="wide" className="py-14">
        <p className="kicker">A pathway through the archive</p>
        <h2 className="mt-2 text-display-sm text-balance">
          How the office organised its printing
        </h2>
        <p className="mt-3 max-w-2xl text-ink-soft">
          Before printing reached every desk it was a shared, centralised, and
          governed thing. Follow how organisations concentrated, scaled, and
          managed the act of putting documents on paper.
        </p>
        <ol className="mt-8 grid gap-px border border-rule-strong bg-rule-strong sm:grid-cols-2 lg:grid-cols-3">
          {STOPS.map((s, i) => (
            <li key={s.href} className="bg-paper">
              <Link
                href={s.href}
                className="group flex h-full flex-col p-5 no-underline transition-colors"
              >
                <span className="font-serif text-2xl leading-none text-rule-strong">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="kicker mt-3">{s.label}</span>
                <span className="mt-1.5 font-serif text-base tracking-tight text-ink group-hover:text-accent">
                  {s.title}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
