import Link from "next/link";
import {
  relForLink,
  timelineProducts,
} from "@/lib/ecosystem/product-registry";

/**
 * The company timeline: every ecosystem website as a real, server-rendered
 * anchor, in registry order. No JavaScript is required to render or use it.
 *
 * The current product (this site) is rendered as an internal link to the home
 * page and marked with aria-current, so assistive technology announces "you are
 * here" rather than presenting it as another destination.
 */
export function EcosystemTimeline({ currentId }: { currentId: string }) {
  const products = timelineProducts();

  return (
    <nav className="eco-timeline-nav" aria-label="HELPERG ecosystem">
      <ol className="eco-timeline" data-ecosystem-timeline>
        {products.map((product) => {
          const isCurrent = product.id === currentId;
          const label = `${product.name}${isCurrent ? " — current site" : ""}`;
          const linkable =
            !!product.websiteUrl && product.websiteStatus === "available";

          const inner = (
            <>
              <span className="eco-tl-monogram" aria-hidden="true">
                {product.monogram}
              </span>
              <span className="eco-tl-name">{product.shortName}</span>
              {isCurrent ? (
                <span className="eco-tl-current">Current</span>
              ) : null}
            </>
          );

          return (
            <li key={product.id} className="eco-tl-item">
              {isCurrent ? (
                <Link
                  href="/"
                  className="eco-tl-link eco-tl-link--current"
                  aria-current="true"
                  aria-label={label}
                  data-ecosystem-product-id={product.id}
                  data-ecosystem-surface="timeline"
                  data-ecosystem-platform="website"
                  data-ecosystem-current="true"
                >
                  {inner}
                </Link>
              ) : linkable ? (
                <a
                  href={product.websiteUrl as string}
                  target="_blank"
                  rel={relForLink(product, "website")}
                  className="eco-tl-link"
                  aria-label={label}
                  data-ecosystem-product-id={product.id}
                  data-ecosystem-surface="timeline"
                  data-ecosystem-platform="website"
                >
                  {inner}
                </a>
              ) : (
                // Defensive: an entry without a verified URL renders as inert
                // text, never as an anchor. Guarded by scripts/ecosystem.test.mjs.
                <span className="eco-tl-link eco-tl-link--inert">{inner}</span>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
