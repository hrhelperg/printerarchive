import Link from "next/link";
import Image from "next/image";
import { FOOTER_GROUPS, site, getSectionMeta } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";
import { ProductGlyph } from "@/components/content/ProductGlyph";
import { Wordmark } from "@/components/identity/Wordmark";
import { Container } from "./Container";

export function Footer() {
  const policyLinks = [
    { href: "/about", label: "About" },
    { href: "/editorial-policy", label: "Editorial policy" },
    { href: "/source-policy", label: "Source policy" },
    { href: "/archive-methodology", label: "Methodology" },
    { href: "/cookie-policy", label: "Cookie policy" },
    { href: "#cookie-preferences", label: "Cookie preferences" },
    { href: "/contact", label: "Contact" },
  ];
  const resourceLinks = [
    { href: "/changelog", label: "Changelog" },
    { href: "/feed.xml", label: "RSS" },
    { href: "/llms.txt", label: "llms.txt" },
    { href: "/sitemap.xml", label: "Sitemap" },
    { href: "https://github.com/hrhelperg/printerarchive", label: "GitHub" },
  ];

  return (
    <footer className="mt-24 border-t border-rule bg-paper-raised">
      <Container width="wide">
        <div className="grid gap-10 py-14 lg:grid-cols-[1.35fr_2fr] lg:py-20">
          <div className="max-w-md">
            <Wordmark tagline="The world's printing encyclopedia" />
            <p className="mt-5 text-sm leading-6 text-ink-soft">
              {site.description}
            </p>
            <div className="mt-6 grid grid-cols-3 gap-3 font-sans text-sm">
              <div className="premium-card-sm p-3">
                <p className="text-lg font-semibold text-ink-display">300+</p>
                <p className="mt-1 text-xs text-ink-faint">Reference pages</p>
              </div>
              <div className="premium-card-sm p-3">
                <p className="text-lg font-semibold text-ink-display">10</p>
                <p className="mt-1 text-xs text-ink-faint">Archive sections</p>
              </div>
              <div className="premium-card-sm p-3">
                <p className="text-lg font-semibold text-ink-display">0</p>
                <p className="mt-1 text-xs text-ink-faint">Affiliate links</p>
              </div>
            </div>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FOOTER_GROUPS.map((g) => (
              <nav key={g.heading} aria-label={g.heading}>
                <p className="kicker">{g.heading}</p>
                <ul className="mt-4 space-y-2 font-sans text-sm text-ink-soft">
                  {g.ids.map((id) => (
                    <li key={id}>
                      <Link
                        href={`/${id}`}
                        className="premium-link"
                      >
                        {getSectionMeta(id).label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <nav aria-label="Policies">
              <p className="kicker">Policies</p>
              <ul className="mt-4 space-y-2 font-sans text-sm text-ink-soft">
                {policyLinks.map((l) => (
                  <li key={l.href}>
                    {l.href.startsWith("/") ? (
                      <Link href={l.href} className="premium-link">
                        {l.label}
                      </Link>
                    ) : (
                      <a href={l.href} className="premium-link">
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="border-t border-rule py-10">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <section aria-labelledby="footer-products" className="lg:max-w-4xl">
              <p id="footer-products" className="kicker">
                Modern tools
              </p>
              <ul className="mt-4 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {Object.values(PRODUCTS).map((p) => (
                  <li key={p.id}>
                    <a
                      href={p.links[0].href}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="premium-card-sm group flex h-full items-center gap-3 p-3 no-underline transition hover:border-rule-strong hover:shadow-[0_8px_24px_rgb(15_23_42_/_0.08)]"
                    >
                      {p.icon ? (
                        <Image
                          src={p.icon}
                          alt=""
                          width={34}
                          height={34}
                          className="h-[34px] w-[34px] shrink-0 rounded-md border border-rule"
                        />
                      ) : (
                        <span className="flex h-[34px] w-[34px] shrink-0 items-center justify-center rounded-md border border-rule text-accent">
                          <ProductGlyph id={p.id} className="h-4 w-4" />
                        </span>
                      )}
                      <span className="font-sans text-sm font-semibold text-ink group-hover:text-accent">
                        {p.name}
                      </span>
                    </a>
                  </li>
                ))}
              </ul>
            </section>

            <nav aria-label="Resources" className="min-w-[12rem]">
              <p className="kicker">Resources</p>
              <ul className="mt-4 space-y-2 font-sans text-sm text-ink-soft">
                {resourceLinks.map((l) => (
                  <li key={l.href}>
                    {l.href.startsWith("/") ? (
                      <a href={l.href} className="premium-link">
                        {l.label}
                      </a>
                    ) : (
                      <a
                        href={l.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="premium-link"
                      >
                        {l.label}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-rule py-6 font-sans text-xs text-ink-faint sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.publisher.name}. Educational
            reference content.
          </p>
          <p>
            Published by {site.publisher.name} ·{" "}
            <a href={`mailto:${site.publisher.email}`}>{site.publisher.email}</a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
