import Link from "next/link";
import { Container } from "@/components/layout/Container";

/**
 * The technology through-line, drawn as a connected rail rather than five
 * separate cards. The hairline running through the markers is the point: these
 * are stages of one story, and the previous card grid said the opposite.
 */
const STAGES: { era: string; title: string; note: string; href: string }[] = [
  {
    era: "Impact",
    title: "Type struck through ribbon",
    note: "A shaped character hits an inked ribbon against paper — loud, slow, and able to cut a carbon copy.",
    href: "/history/how-impact-printing-worked",
  },
  {
    era: "Dot matrix",
    title: "The character becomes a grid",
    note: "Pins replace shaped type, so the printer stops being limited to the glyphs cast into its mechanism.",
    href: "/history/how-dot-matrix-printers-work",
  },
  {
    era: "Laser",
    title: "The page is composed, then fused",
    note: "Electrophotography renders a whole page at once, and sharp output becomes a desk-side expectation.",
    href: "/history/evolution-of-laser-printing",
  },
  {
    era: "Inkjet",
    title: "Colour becomes ordinary",
    note: "Droplets on demand make photographic colour affordable, and the household printer arrives.",
    href: "/history/evolution-of-inkjet-printers",
  },
  {
    era: "Networked",
    title: "The printer leaves the desk",
    note: "Queues, spoolers and print servers turn a peripheral into shared office infrastructure.",
    href: "/history/early-network-printing-systems",
  },
  {
    era: "Mobile",
    title: "The driver disappears",
    note: "Discovery and driverless standards let a phone print to a machine it has never met.",
    href: "/mobile-printing/what-is-airprint",
  },
];

export function EvolutionRail() {
  return (
    <section aria-labelledby="evolution-rail" className="band-sunken">
      <Container width="wide" className="py-[var(--band)]">
        <p className="kicker">The through-line</p>
        <h2 id="evolution-rail" className="mt-2 text-display-sm text-balance">
          Six ways of putting a mark on a page
        </h2>
        <p className="mt-4 max-w-2xl standfirst">
          Each stage removed a constraint the previous one imposed — and
          introduced one of its own.
        </p>

        <ol className="mt-10 grid gap-y-9 sm:grid-cols-2 lg:grid-cols-6 lg:gap-x-5">
          {STAGES.map((s, i) => (
            <li key={s.href} className="relative">
              {/* The connecting rule. Hidden on the last item and on stacked
                  layouts, where the sequence is already read top to bottom. */}
              {i < STAGES.length - 1 ? (
                <span
                  aria-hidden
                  className="absolute left-0 top-[0.4375rem] hidden h-px w-full bg-rule-strong lg:block"
                />
              ) : null}
              <span
                aria-hidden
                className="relative z-10 block h-3.5 w-3.5 rounded-full border-2 border-accent bg-paper-sunken"
              />
              <Link href={s.href} className="group mt-4 block no-underline">
                <span className="tech-label">{s.era}</span>
                <span className="mt-2 block font-sans text-[0.95rem] font-semibold leading-6 text-ink-display group-hover:text-accent">
                  {s.title}
                </span>
                <span className="mt-2 block text-sm leading-6 text-ink-soft text-pretty">
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
