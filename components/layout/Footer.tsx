import Link from "next/link";
import { FOOTER_GROUPS, site, getSectionMeta } from "@/lib/site";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-rule py-14">
      <Container width="wide">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <p className="font-serif text-lg text-ink">{site.name}</p>
            <p className="mt-2 max-w-prose text-sm text-ink-soft">
              {site.description}
            </p>
          </div>
          {FOOTER_GROUPS.map((g) => (
            <nav key={g.heading} aria-label={g.heading}>
              <p className="kicker">{g.heading}</p>
              <ul className="mt-3 space-y-1.5 font-sans text-sm text-ink-soft">
                {g.ids.map((id) => (
                  <li key={id}>
                    <Link
                      href={`/${id}`}
                      className="no-underline transition-colors hover:text-accent"
                    >
                      {getSectionMeta(id).label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-10 flex flex-wrap items-center gap-x-5 gap-y-2 border-t border-rule pt-6 font-sans text-xs text-ink-faint">
          <Link href="/about" className="no-underline hover:text-accent">
            About
          </Link>
          <Link href="/editorial-policy" className="no-underline hover:text-accent">
            Editorial policy
          </Link>
          <Link href="/source-policy" className="no-underline hover:text-accent">
            Source policy
          </Link>
          <Link href="/archive-methodology" className="no-underline hover:text-accent">
            Methodology
          </Link>
          <Link href="/changelog" className="no-underline hover:text-accent">
            Changelog
          </Link>
          <Link href="/contact" className="no-underline hover:text-accent">
            Contact
          </Link>
          <a href="/feed.xml" className="no-underline hover:text-accent">
            RSS
          </a>
          <a href="/llms.txt" className="no-underline hover:text-accent">
            llms.txt
          </a>
          <a href="/sitemap.xml" className="no-underline hover:text-accent">
            Sitemap
          </a>
        </div>

        <p className="mt-6 font-sans text-xs text-ink-faint">
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
