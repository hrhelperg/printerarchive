import Image from "next/image";
import { PRODUCTS, type ProductId } from "@/lib/products";

interface ModernToolsProps {
  products: ProductId[];
}

export function ModernTools({ products }: ModernToolsProps) {
  const resolved = products.map((id) => PRODUCTS[id]);
  if (resolved.length === 0) return null;
  return (
    <section
      aria-labelledby="modern-tools"
      className="mt-12 border-t border-rule pt-8"
    >
      <h2
        id="modern-tools"
        className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-soft"
      >
        Modern tools
      </h2>
      <p className="mt-2 text-sm text-ink-faint text-pretty">
        Contemporary apps for the same task, published by HELPERG LLC — the
        publisher of this archive.
      </p>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2">
        {resolved.map((p) => (
          <li
            key={p.id}
            className="flex h-full flex-col border border-rule bg-paper-raised p-5 transition-colors hover:border-rule-strong"
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
              ) : null}
              <p className="font-serif text-lg tracking-tight text-ink">
                {p.name}
              </p>
            </div>
            <p className="mt-1.5 flex-1 text-sm text-ink-soft text-pretty">
              {p.tagline}
            </p>
            <p className="mt-4 flex flex-wrap gap-2">
              {p.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="inline-flex items-center border border-rule bg-paper px-2.5 py-1 font-sans text-xs text-ink-soft no-underline transition-colors hover:border-ink hover:text-ink"
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
