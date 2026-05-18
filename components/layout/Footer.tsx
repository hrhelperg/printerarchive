import Link from "next/link";
import { SECTIONS, site } from "@/lib/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-20 border-t border-rule py-12">
      <Container width="wide">
        <p className="font-serif text-lg">{site.name}</p>
        <p className="mt-1 max-w-prose text-sm text-ink-soft">
          {site.description}
        </p>
        <nav aria-label="Sections" className="mt-6">
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
            <li>
              <Link
                href="/about"
                className="no-underline hover:text-accent"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="no-underline hover:text-accent"
              >
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        <p className="mt-8 font-sans text-xs text-ink-faint">
          Published by {site.publisher.name} ·{" "}
          <a href={`mailto:${site.publisher.email}`}>
            {site.publisher.email}
          </a>{" "}
          · © {new Date().getFullYear()} {site.publisher.name}. Educational
          reference content.
        </p>
      </Container>
    </footer>
  );
}
