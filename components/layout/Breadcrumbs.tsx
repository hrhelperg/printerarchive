import Link from "next/link";

/**
 * Breadcrumb trail. The current page is truncated with a CSS ellipsis rather
 * than wrapped: a 100-character editorial headline used to occupy the whole
 * crumb line and push the masthead down the page. The full title is still the
 * page's H1 immediately below, so nothing is lost.
 */
export function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="meta-line">
      <ol className="flex items-center gap-1.5">
        {items.map((it, i) => {
          const isLast = i === items.length - 1;
          return (
            <li
              key={it.href}
              className={`flex min-w-0 items-center gap-1.5 ${isLast ? "min-w-0" : "shrink-0"}`}
            >
              {isLast ? (
                <span
                  aria-current="page"
                  className="truncate text-ink-soft"
                  title={it.name}
                >
                  {it.name}
                </span>
              ) : (
                <>
                  <Link
                    href={it.href}
                    className="whitespace-nowrap text-ink-faint no-underline hover:text-accent hover:underline"
                  >
                    {it.name}
                  </Link>
                  <span aria-hidden className="text-ink-faint">
                    /
                  </span>
                </>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
