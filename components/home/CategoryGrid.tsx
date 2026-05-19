import Link from "next/link";
import { SECTIONS } from "@/lib/site";
import { getSection } from "@/lib/content/queries";
import { Container } from "@/components/layout/Container";

export function CategoryGrid() {
  return (
    <Container width="wide" className="py-14">
      <hr className="rule-sep" />
      <p className="kicker mt-10">Browse the archive</p>
      <h2 className="mt-2 text-display-sm text-balance">
        {SECTIONS.length} ways into printing technology
      </h2>
      <ul className="mt-8 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {SECTIONS.map((s, i) => {
          const count = getSection(s.id).length;
          return (
            <li key={s.id} className="bg-paper">
              <Link
                href={`/${s.id}`}
                className="group flex h-full flex-col p-6 no-underline transition-colors hover:bg-paper-raised"
              >
                <span className="font-serif text-2xl leading-none text-rule-strong">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-4 font-serif text-xl tracking-tight text-ink group-hover:text-accent">
                  {s.title}
                </span>
                <span className="mt-1.5 flex-1 text-sm text-ink-soft text-pretty">
                  {s.description}
                </span>
                <span className="mt-4 font-sans text-xs uppercase tracking-wide text-ink-faint">
                  {count} {count === 1 ? "entry" : "entries"}
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}
