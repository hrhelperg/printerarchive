import Link from "next/link";
import { SECTIONS, site } from "@/lib/site";
import { Container } from "./Container";
import { Motif } from "@/components/content/Motif";

export function Header() {
  return (
    <header className="border-b border-rule">
      <Container
        width="wide"
        className="flex flex-wrap items-center justify-between gap-y-3 py-5"
      >
        <Link
          href="/"
          className="group flex items-center gap-3 no-underline"
          aria-label={`${site.name} — home`}
        >
          <Motif className="h-7 w-7 text-ink-faint" />
          <span className="flex flex-col leading-none">
            <span className="font-serif text-xl font-semibold tracking-tight text-ink">
              {site.name}
            </span>
            <span className="mt-1 hidden font-sans text-[0.68rem] uppercase tracking-[0.18em] text-ink-faint sm:block">
              {site.tagline}
            </span>
          </span>
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 font-sans text-sm text-ink-soft">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/${s.id}`}
                  className="no-underline transition-colors hover:text-accent"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </Container>
    </header>
  );
}
