import Link from "next/link";
import Image from "next/image";
import { FOOTER_GROUPS, site, getSectionMeta } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";
import { ProductGlyph } from "@/components/content/ProductGlyph";
import { Logomark } from "@/components/identity/Logomark";
import { Container } from "./Container";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-rule py-14">
      <Container width="wide">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]">
          <div>
            <p className="flex items-center gap-2.5 font-serif text-lg text-ink">
              <Logomark className="h-6 w-6 text-ink" />
              {site.name}
            </p>
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
          <nav aria-label="Modern tools">
            <p className="kicker">Modern tools</p>
            <ul className="mt-3 space-y-1.5 font-sans text-sm text-ink-soft">
              {Object.values(PRODUCTS).map((p) => (
                <li key={p.id}>
                  <a
                    href={p.links[0].href}
                    target="_blank"
                    rel="noopener noreferrer nofollow"
                    className="group flex items-center gap-2 no-underline transition-colors hover:text-accent"
                  >
                    {p.icon ? (
                      <Image
                        src={p.icon}
                        alt=""
                        width={18}
                        height={18}
                        className="h-[18px] w-[18px] shrink-0 rounded border border-rule"
                      />
                    ) : (
                      <span className="flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded border border-rule text-ink-soft">
                        <ProductGlyph id={p.id} className="h-3 w-3" />
                      </span>
                    )}
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
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
          <Link href="/cookie-policy" className="no-underline hover:text-accent">
            Cookie policy
          </Link>
          <a href="#cookie-preferences" className="no-underline hover:text-accent">
            Cookie preferences
          </a>
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
