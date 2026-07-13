import Image from "next/image";
import { PRODUCTS, type ProductId } from "@/lib/products";
import { ProductGlyph } from "./ProductGlyph";

interface ModernToolsProps {
  products: ProductId[];
}

export function ModernTools({ products }: ModernToolsProps) {
  const resolved = products.map((id) => PRODUCTS[id]);
  if (resolved.length === 0) return null;
  return (
    <section
      aria-labelledby="modern-tools"
      className="mt-14 border-t border-rule pt-8"
    >
      <h2
        id="modern-tools"
        className="font-serif text-3xl leading-tight text-ink-display"
      >
        Modern tools
      </h2>
      <p className="mt-2 text-sm leading-6 text-ink-faint text-pretty">
        Contemporary apps for the same task, published by HELPERG LLC — the
        publisher of this archive.
      </p>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {resolved.map((p) => (
          <li
            key={p.id}
            className="premium-card-sm flex h-full flex-col p-5 transition hover:border-rule-strong hover:shadow-[0_10px_26px_rgb(15_23_42_/_0.08)]"
          >
            <div className="flex items-center gap-3">
              {p.icon ? (
                <Image
                  src={p.icon}
                  alt=""
                  width={40}
                  height={40}
                  className="h-10 w-10 shrink-0 rounded-lg border border-rule"
                />
              ) : (
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-rule bg-paper text-ink-soft">
                  <ProductGlyph id={p.id} className="h-5 w-5" />
                </span>
              )}
              <p className="font-sans text-lg font-semibold text-ink-display">
                {p.name}
              </p>
            </div>
            <p className="mt-3 flex-1 text-sm leading-6 text-ink-soft text-pretty">
              {p.tagline}
            </p>
            <p className="mt-4 flex flex-wrap gap-2">
              {p.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center rounded-md border border-rule bg-paper px-3 py-1.5 font-sans text-xs font-semibold text-ink-soft no-underline transition-colors hover:border-accent hover:text-accent"
                >
                  {l.label} ↗
                </a>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
