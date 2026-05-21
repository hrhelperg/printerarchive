interface LogomarkProps {
  className?: string;
  accessibleName?: string;
}

/**
 * Primary PrinterArchive mark. Single-colour SVG (uses currentColor).
 * 24×24 viewBox. Decorative by default (aria-hidden); pass
 * `accessibleName` only when the mark is the link's accessible name.
 *
 * Geometry — printer/document archive identity in three elements:
 *   1. A document sheet (11×12.5 rounded rect at 6.5,3) — "document
 *      framing", the archived page.
 *   2. Three text rules inside the sheet (the last ragged-short) — the
 *      page carries text, reading clearly as a document rather than a
 *      blank card.
 *   3. A solid output-tray bar (17 wide at the base) — "output tray /
 *      paper feed": the sheet sits on the platen the printed page
 *      emerges onto. The solid mass anchors the mark at favicon sizes.
 *
 * 16px legibility: the solid base bar maps to ~5×11 device pixels of
 * anchored mass that survives sub-pixel rasterisation; the favicon
 * variant (app/icon.svg) drops to two heavier text rules so the
 * interior never muddies at 16/32px. Monochrome-first, no gradient,
 * no glow — premium archival register.
 */
export function Logomark({ className = "", accessibleName }: LogomarkProps) {
  const a11y = accessibleName
    ? { role: "img" as const, "aria-label": accessibleName }
    : { "aria-hidden": true as const };
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      focusable="false"
      className={className}
      {...a11y}
    >
      <rect
        x="6.5"
        y="3"
        width="11"
        height="12.5"
        rx="0.5"
        stroke="currentColor"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M9 6.75h6M9 9.5h6M9 12.25h3.5"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      />
      <rect x="3.5" y="17.75" width="17" height="2.75" rx="0.75" fill="currentColor" />
    </svg>
  );
}
