import Link from "next/link";
import { Container } from "@/components/layout/Container";

const ERAS = [
  { era: "Early", title: "Early computer printing", href: "/history/early-computer-printing" },
  { era: "Impact", title: "Dot matrix printers", href: "/history/dot-matrix-printers-explained" },
  { era: "Non-impact", title: "Evolution of laser printing", href: "/history/evolution-of-laser-printing" },
  { era: "Networked", title: "Office printing in the 1990s", href: "/history/office-printing-in-the-1990s" },
  { era: "Mobile", title: "What is AirPrint?", href: "/mobile-printing/what-is-airprint" },
];

export function EraRail() {
  return (
    <section className="surface-grain border-y border-rule-strong bg-sepia">
      <Container width="wide" className="py-14">
        <p className="kicker">A short history</p>
        <h2 className="mt-2 text-display-sm text-balance">
          Five eras of putting marks on a page
        </h2>
        <ol className="mt-8 grid gap-px border border-rule-strong bg-rule-strong sm:grid-cols-2 lg:grid-cols-5">
          {ERAS.map((s, i) => (
            <li key={s.href} className="bg-sepia">
              <Link
                href={s.href}
                className="group flex h-full flex-col p-5 no-underline"
              >
                <span className="font-serif text-2xl leading-none text-rule-strong">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="kicker mt-3">{s.era}</span>
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
