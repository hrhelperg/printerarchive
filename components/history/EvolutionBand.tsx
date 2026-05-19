import Link from "next/link";
import { Container } from "@/components/layout/Container";

const STAGES: { era: string; title: string; href: string; note: string }[] = [
  {
    era: "Impact",
    title: "Mechanical & dot matrix",
    href: "/history/dot-matrix-printers-explained",
    note: "Characters formed by striking an inked ribbon against the page.",
  },
  {
    era: "Non-impact",
    title: "The laser revolution",
    href: "/history/evolution-of-laser-printing",
    note: "Static electricity and fused toner replace the hammer and ribbon.",
  },
  {
    era: "Non-impact",
    title: "Inkjet for everyone",
    href: "/history/evolution-of-inkjet-printers",
    note: "Tiny droplets bring affordable colour to the home and office.",
  },
  {
    era: "Networked",
    title: "The shared office",
    href: "/history/office-printing-in-the-1990s",
    note: "Printers become networked, multifunction, shared infrastructure.",
  },
];

export function EvolutionBand() {
  return (
    <section className="border-b border-rule">
      <Container width="wide" className="py-14">
        <p className="kicker">Evolution</p>
        <h2 className="mt-2 text-display-sm text-balance">
          From the hammer to the network
        </h2>
        <p className="mt-3 max-w-2xl font-serif text-lg text-ink-soft text-pretty">
          Printing did not arrive — it evolved. Each era solved the limits of
          the one before it.
        </p>
        <ol className="mt-8 grid gap-px border border-rule bg-rule md:grid-cols-4">
          {STAGES.map((s, i) => (
            <li key={s.href} className="bg-paper-raised">
              <Link
                href={s.href}
                className="group flex h-full flex-col p-6 no-underline transition-colors hover:bg-paper"
              >
                <span className="font-serif text-3xl leading-none text-rule-strong">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="kicker mt-4">{s.era}</span>
                <span className="mt-1.5 font-serif text-lg tracking-tight text-ink group-hover:text-accent">
                  {s.title}
                </span>
                <span className="mt-2 text-sm text-ink-soft text-pretty">
                  {s.note}
                </span>
              </Link>
            </li>
          ))}
        </ol>
      </Container>
    </section>
  );
}
