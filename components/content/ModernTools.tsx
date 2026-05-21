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
      <ul className="mt-4 space-y-5">
        {resolved.map((p) => (
          <li key={p.id}>
            <p className="font-serif text-base text-ink">{p.name}</p>
            <p className="mt-0.5 text-sm text-ink-soft text-pretty">
              {p.tagline}
            </p>
            <p className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 font-sans text-sm">
              {p.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="no-underline hover:underline"
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
