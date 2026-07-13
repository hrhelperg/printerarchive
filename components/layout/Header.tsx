import Link from "next/link";
import { SECTIONS, site } from "@/lib/site";
import { Container } from "./Container";
import { Wordmark } from "@/components/identity/Wordmark";

export function Header() {
  return (
    <header className="border-b border-rule">
      <Container
        width="wide"
        className="flex flex-wrap items-center justify-between gap-x-8 gap-y-3 py-5"
      >
        <Link
          href="/"
          className="group no-underline"
          aria-label={`${site.name} — home`}
        >
          <Wordmark tagline={site.tagline} />
        </Link>
        <nav aria-label="Primary">
          <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 font-sans text-sm font-medium text-ink-soft">
            {SECTIONS.map((s) => (
              <li key={s.id}>
                <Link
                  href={`/${s.id}`}
                  className="no-underline underline-offset-4 transition-colors hover:text-accent hover:underline"
                >
                  {s.label}
                </Link>
              </li>
            ))}
            <li key="knowledge-graph">
              <Link
                href="/knowledge-graph"
                className="no-underline underline-offset-4 transition-colors hover:text-accent hover:underline"
              >
                Knowledge Graph
              </Link>
            </li>
          </ul>
        </nav>
      </Container>
    </header>
  );
}
