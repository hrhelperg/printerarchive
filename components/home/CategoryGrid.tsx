import Link from "next/link";
import { SECTIONS } from "@/lib/site";
import { getSection } from "@/lib/content/queries";
import { Container } from "@/components/layout/Container";

interface CategoryGridProps {
  kicker?: string;
  title?: string;
}

export function CategoryGrid({
  kicker = "Browse the archive",
  title = `${SECTIONS.length} ways into printing technology`,
}: CategoryGridProps) {
  return (
    <Container width="wide" className="py-14">
      <p className="kicker">{kicker}</p>
      <h2 className="mt-2 text-display-sm text-balance">{title}</h2>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {SECTIONS.map((s, i) => {
          const count = getSection(s.id).length;
          return (
            <li key={s.id}>
              <Link
                href={`/${s.id}`}
                className="premium-card-sm group flex h-full min-h-56 flex-col p-5 no-underline transition hover:border-rule-strong hover:shadow-[0_10px_26px_rgb(15_23_42_/_0.08)]"
              >
                <span className="flex h-10 w-10 items-center justify-center rounded-lg border border-rule bg-sepia font-sans text-sm font-semibold text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="mt-5 font-sans text-base font-semibold leading-6 text-ink-display group-hover:text-accent">
                  {s.title}
                </span>
                <span className="mt-2 flex-1 text-sm leading-6 text-ink-soft text-pretty">
                  {s.description}
                </span>
                <span className="mt-4 font-sans text-xs font-semibold text-ink-faint">
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
