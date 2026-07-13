import Image from "next/image";
import { PRODUCTS } from "@/lib/products";
import { ProductGlyph } from "@/components/content/ProductGlyph";
import { Container } from "@/components/layout/Container";

export function ProductEcosystem() {
  return (
    <section className="border-y border-rule bg-paper-raised">
      <Container width="wide" className="py-14 lg:py-16">
        <div className="flex flex-col justify-between gap-4 lg:flex-row lg:items-end">
          <div>
            <p className="kicker">Modern tools</p>
            <h2 className="mt-2 text-display-sm text-balance">
              Companion apps for contemporary document work
            </h2>
            <p className="mt-3 max-w-3xl text-ink-soft">
              The archive explains the systems; these HELPERG tools handle the
              everyday workflows around printing, faxing, PDFs, archives,
              resumes, invoices, and personal document finance.
            </p>
          </div>
        </div>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {Object.values(PRODUCTS).map((p) => (
            <li key={p.id}>
              <article className="premium-card-sm flex h-full flex-col p-5 transition hover:border-rule-strong hover:shadow-[0_10px_28px_rgb(15_23_42_/_0.08)]">
                <div className="flex items-center gap-3">
                  {p.icon ? (
                    <Image
                      src={p.icon}
                      alt=""
                      width={44}
                      height={44}
                      className="h-11 w-11 shrink-0 rounded-lg border border-rule"
                    />
                  ) : (
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-rule bg-paper text-accent">
                      <ProductGlyph id={p.id} className="h-5 w-5" />
                    </span>
                  )}
                  <h3 className="font-sans text-base font-semibold text-ink-display">
                    {p.name}
                  </h3>
                </div>
                <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft">
                  {p.tagline}
                </p>
                <div className="mt-5 flex flex-wrap gap-2">
                  {p.links.map((l) => (
                    <a
                      key={l.label}
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer nofollow"
                      className="rounded-md border border-rule bg-paper px-3 py-1.5 font-sans text-xs font-semibold text-ink-soft no-underline transition-colors hover:border-accent hover:text-accent"
                    >
                      {l.label} ↗
                    </a>
                  ))}
                </div>
              </article>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
