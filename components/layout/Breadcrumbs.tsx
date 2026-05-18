import Link from "next/link";

export function Breadcrumbs({
  items,
}: {
  items: { name: string; href: string }[];
}) {
  return (
    <nav aria-label="Breadcrumb" className="font-sans text-xs text-ink-faint">
      <ol className="flex flex-wrap items-center gap-1.5">
        {items.map((it, i) => (
          <li key={it.href} className="flex items-center gap-1.5">
            {i < items.length - 1 ? (
              <Link href={it.href} className="no-underline hover:underline">
                {it.name}
              </Link>
            ) : (
              <span aria-current="page" className="text-ink-soft">
                {it.name}
              </span>
            )}
            {i < items.length - 1 && <span aria-hidden>/</span>}
          </li>
        ))}
      </ol>
    </nav>
  );
}
