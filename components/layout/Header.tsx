import Link from "next/link";
import { SECTIONS, site } from "@/lib/site";
import { Container } from "./Container";

export function Header() {
  return (
    <header className="border-b border-rule">
      <Container
        width="wide"
        className="flex flex-wrap items-baseline justify-between gap-y-3 py-5"
      >
        <Link
          href="/"
          className="font-serif text-xl font-semibold tracking-tight no-underline"
        >
          {site.name}
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap gap-x-5 gap-y-2 font-sans text-sm text-ink-soft">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/${s.id}`}
                  className="no-underline hover:text-accent"
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
