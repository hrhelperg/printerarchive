import Link from "next/link";
import Image from "next/image";
import { FOOTER_GROUPS, site, getSectionMeta } from "@/lib/site";
import { PRODUCTS } from "@/lib/products";
import { allEntries } from "@/lib/content/registry";
import { allPosts } from "@/lib/blog/registry";
import { ProductGlyph } from "@/components/content/ProductGlyph";
import { Wordmark } from "@/components/identity/Wordmark";
import { Container } from "./Container";

const policyLinks = [
  { href: "/about", label: "About" },
  { href: "/editorial-policy", label: "Editorial policy" },
  { href: "/source-policy", label: "Source policy" },
  { href: "/archive-methodology", label: "Methodology" },
  { href: "/changelog", label: "Changelog" },
  { href: "/cookie-policy", label: "Cookie policy" },
  { href: "#cookie-preferences", label: "Cookie preferences" },
  { href: "/contact", label: "Contact" },
];

const machineLinks = [
  { href: "/knowledge-graph", label: "Knowledge Graph" },
  { href: "/timeline", label: "Timeline" },
  { href: "/feed.xml", label: "RSS" },
  { href: "/llms.txt", label: "llms.txt" },
  { href: "/sitemap.xml", label: "Sitemap" },
];

export function Footer() {
  // Counted from the registries, never typed in — a stale number in the
  // footer is exactly the kind of thing that erodes the archive's credibility.
  const entryCount = allEntries.length + allPosts.length;
  const sourceCount = [...allEntries, ...allPosts].reduce(
    (n, e) => n + (e.sources?.length ?? 0),
    0,
  );

  return (
    <footer className="mt-24 border-t border-rule bg-paper-sunken">
      <Container width="wide">
        {/* Institutional masthead */}
        <div className="grid gap-10 border-b border-rule py-14 lg:grid-cols-[1.1fr_1.6fr] lg:gap-16">
          <div className="max-w-md">
            <Wordmark tagline="The world's printing encyclopedia" />
            <p className="mt-5 text-[0.95rem] leading-7 text-ink-soft">
              {site.description}
            </p>
            <dl className="mt-7 flex flex-wrap gap-x-10 gap-y-4">
              <div>
                <dt className="tech-label">Reference pages</dt>
                <dd className="mt-1 font-sans text-xl font-semibold text-ink-display tabular-nums">
                  {entryCount}
                </dd>
              </div>
              <div>
                <dt className="tech-label">Cited sources</dt>
                <dd className="mt-1 font-sans text-xl font-semibold text-ink-display tabular-nums">
                  {sourceCount.toLocaleString("en-US")}
                </dd>
              </div>
              <div>
                <dt className="tech-label">Affiliate links</dt>
                <dd className="mt-1 font-sans text-xl font-semibold text-ink-display tabular-nums">
                  0
                </dd>
              </div>
            </dl>
          </div>

          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {FOOTER_GROUPS.map((g) => (
              <nav key={g.heading} aria-label={g.heading}>
                <p className="tech-label">{g.heading}</p>
                <ul className="mt-4 space-y-2.5 font-sans text-sm">
                  {g.ids.map((id) => (
                    <li key={id}>
                      <Link href={`/${id}`} className="premium-link">
                        {getSectionMeta(id).label}
                      </Link>
                    </li>
                  ))}
                  {g.links?.map((l) => (
                    <li key={l.href}>
                      <Link href={l.href} className="premium-link">
                        {l.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}
            <nav aria-label="About the archive">
              <p className="tech-label">About</p>
              <ul className="mt-4 space-y-2.5 font-sans text-sm">
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

        {/* Publisher's other work — present, but plainly subordinate to the
            archive above it: a quiet row, not a product grid. */}
        <div className="grid gap-8 border-b border-rule py-10 lg:grid-cols-[1.1fr_1.6fr] lg:gap-16">
          <div className="max-w-md">
            <p className="tech-label">Modern tools</p>
            <p className="mt-3 text-sm leading-6 text-ink-soft">
              Contemporary tools from {site.publisher.name}, the publisher of
              this archive. Listed for readers who came here to solve a
              present-day document problem.
            </p>
          </div>
          <ul className="flex flex-wrap gap-x-6 gap-y-3 self-center">
            {Object.values(PRODUCTS).map((p) => (
              <li key={p.id}>
                <a
                  href={p.links[0].href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="group inline-flex items-center gap-2 font-sans text-sm text-ink-soft no-underline transition-colors hover:text-accent"
                >
                  {p.icon ? (
                    <Image
                      src={p.icon}
                      alt=""
                      width={22}
                      height={22}
                      className="h-[22px] w-[22px] shrink-0 rounded border border-rule"
                    />
                  ) : (
                    <ProductGlyph id={p.id} className="h-4 w-4 shrink-0 text-ink-faint" />
                  )}
                  {p.name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Machine-readable surfaces + legal */}
        <div className="flex flex-col gap-5 py-8 lg:flex-row lg:items-center lg:justify-between">
          <nav aria-label="Machine-readable">
            <ul className="flex flex-wrap gap-x-5 gap-y-2 font-sans text-xs">
              {machineLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="premium-link">
                    {l.label}
                  </a>
                </li>
              ))}
              <li>
                <a
                  href="https://github.com/hrhelperg/printerarchive"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="premium-link"
                >
                  GitHub
                </a>
              </li>
            </ul>
          </nav>
          <p className="meta-line">
            © {new Date().getFullYear()} {site.publisher.name} · Educational
            reference content ·{" "}
            <a href={`mailto:${site.publisher.email}`}>{site.publisher.email}</a>
          </p>
        </div>
      </Container>
    </footer>
  );
}
