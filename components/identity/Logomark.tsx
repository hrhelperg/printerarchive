interface LogomarkProps {
  className?: string;
  accessibleName?: string;
}

/**
 * Primary PrinterArchive mark. Single-color SVG (uses currentColor).
 * 24×24 viewBox. Decorative by default (aria-hidden); pass
 * `accessibleName` only when the mark is the link's accessible name.
 *
 * Geometry: a hairline 17×17 archival frame (a catalog plate) with a
 * solid 6×6 block anchored in the lower-right corner — a registration
 * stamp / printer's corner mark. The asymmetric solid block gives the
 * silhouette a distinctive, non-radially-symmetric shape so it cannot
 * be confused with a generic "rectangle with a border." The frame
 * reads as the archive's catalog plate; the corner block reads as the
 * impression of the press.
 *
 * 16px legibility: at 16×16, the 6×6 unit block renders as ~4×4 solid
 * pixels — solid enough to never dissolve at sub-pixel rendering and
 * large enough to anchor the eye to the corner immediately. The 17×17
 * hairline frame becomes ~11×11 inside the bitmap with a 1px stroke
 * (the favicon variant uses stroke-width 1.25 for extra crispness at
 * 16×16 and 32×32). The asymmetric composition survives anti-aliasing
 * because the dominant feature is the filled block, not the hairlines.
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
        x="3.5"
        y="3.5"
        width="17"
        height="17"
        stroke="currentColor"
        strokeWidth="1"
        fill="none"
      />
      <rect x="14" y="14" width="6" height="6" fill="currentColor" />
    </svg>
  );
}
