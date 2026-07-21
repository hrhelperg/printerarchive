import Link from "next/link";
import {
  directoryApplications,
  directoryWebsites,
  missingPlatforms,
  platformLabel,
  platformLinks,
  relForLink,
  type EcosystemProduct,
} from "@/lib/ecosystem/product-registry";

/**
 * The ecosystem directory rendered inside the panel.
 *
 * Server component: every card and every link is in the served HTML, so the
 * directory is crawlable and readable without client-side JavaScript. The only
 * client code involved is the panel shell that opens and closes it.
 *
 * Section labels are <p> elements, not headings: the banner precedes every
 * page's <h1>, so real headings here would put an h2 before the h1 in the
 * document outline on all 369 pages.
 */
export function EcosystemDirectory({ currentId }: { currentId: string }) {
  const websites = directoryWebsites();
  const applications = directoryApplications();

  return (
    <div className="eco-directory">
      <section aria-labelledby="eco-dir-web">
        <p id="eco-dir-web" className="eco-dir-heading">
          Web Platforms
        </p>
        <ul className="eco-dir-grid">
          {websites.map((product) => (
            <li key={product.id}>
              <WebsiteCard
                product={product}
                isCurrent={product.id === currentId}
              />
            </li>
          ))}
        </ul>
      </section>

      <section aria-labelledby="eco-dir-apps" className="eco-dir-section">
        <p id="eco-dir-apps" className="eco-dir-heading">
          Applications
        </p>
        <ul className="eco-dir-grid">
          {applications.map((product) => (
            <li key={product.id}>
              <ApplicationCard product={product} />
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}

/**
 * One primary action per web platform: the site itself. The whole card is the
 * link, which keeps link density to exactly one anchor per product.
 */
function WebsiteCard({
  product,
  isCurrent,
}: {
  product: EcosystemProduct;
  isCurrent: boolean;
}) {
  const body = (
    <>
      <span className="eco-card-head">
        <span className="eco-card-monogram" aria-hidden="true">
          {product.monogram}
        </span>
        <span className="eco-card-name">{product.name}</span>
        {isCurrent ? <span className="eco-card-current">Current</span> : null}
      </span>
      <span className="eco-card-desc">{product.description}</span>
    </>
  );

  if (isCurrent) {
    return (
      <Link
        href="/"
        className="eco-card eco-card--current"
        aria-current="true"
        data-ecosystem-product-id={product.id}
        data-ecosystem-surface="directory-web"
        data-ecosystem-platform="website"
        data-ecosystem-current="true"
      >
        {body}
      </Link>
    );
  }

  if (!product.websiteUrl || product.websiteStatus !== "available") {
    return <span className="eco-card eco-card--inert">{body}</span>;
  }

  return (
    <a
      href={product.websiteUrl}
      target="_blank"
      rel={relForLink(product, "website")}
      className="eco-card"
      data-ecosystem-product-id={product.id}
      data-ecosystem-surface="directory-web"
      data-ecosystem-platform="website"
    >
      {body}
    </a>
  );
}

/**
 * Applications ship on several platforms, so the card is a container with
 * compact per-platform links. Platforms with no verified link are stated once,
 * quietly — never as a row of large disabled buttons, and never as
 * "coming soon".
 */
function ApplicationCard({ product }: { product: EcosystemProduct }) {
  const links = platformLinks(product);
  const missing = missingPlatforms(product);

  return (
    <div className="eco-card eco-card--app">
      <span className="eco-card-head">
        <span className="eco-card-monogram" aria-hidden="true">
          {product.monogram}
        </span>
        <span className="eco-card-name">{product.name}</span>
      </span>
      <span className="eco-card-desc">{product.description}</span>
      <span className="eco-card-links">
        {links.map((link) => (
          <a
            key={link.platform}
            href={link.url}
            target="_blank"
            rel={relForLink(product, link.platform)}
            className="eco-platform-link"
            aria-label={`${product.name} — ${link.label}`}
            data-ecosystem-product-id={product.id}
            data-ecosystem-surface="directory-app"
            data-ecosystem-platform={link.platform}
          >
            {link.label}
          </a>
        ))}
        {missing.length > 0 ? (
          <span className="eco-platform-missing">
            Not listed: {missing.map((p) => platformLabel(p)).join(", ")}
          </span>
        ) : null}
      </span>
    </div>
  );
}
