import type { ReactNode } from "react";

interface ArchivalCardProps {
  variant?: "default" | "lead";
  href?: string;
  children: ReactNode;
  className?: string;
}

/**
 * Editorial archival-card surface used by hub lead entries, homepage
 * bands, and feature blocks. Two variants: default (compact) and lead
 * (larger, for prominent feature cards). When `href` is given, the
 * whole card becomes a single accessible link via the inner anchor.
 * Server Component.
 */
export function ArchivalCard({
  variant = "default",
  href,
  children,
  className = "",
}: ArchivalCardProps) {
  const sizing = variant === "lead" ? "p-7 md:p-9" : "p-5 md:p-6";
  const base = `archival-card ${sizing} ${className}`;
  if (href) {
    return (
      <a href={href} className={`group block no-underline ${base}`}>
        {children}
      </a>
    );
  }
  return <div className={base}>{children}</div>;
}
