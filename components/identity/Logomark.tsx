interface LogomarkProps {
  className?: string;
  accessibleName?: string;
}

/**
 * Primary PrinterArchive mark. Single-color SVG (uses currentColor).
 * 24×24 viewBox. Decorative by default (aria-hidden); pass
 * `accessibleName` only when the mark is the link's accessible name.
 *
 * Geometry — three structural ideas working together:
 *   1. 17×17 hairline frame at (3.5, 3.5) — the "catalog plate"
 *   2. Internal horizontal hairline rule at y=11 — the "header rule"
 *      that real archival catalog cards carry; gives the silhouette
 *      a second structural feature so the mark does not read as a
 *      generic bordered box and provides an interior feature for the
 *      eye to lock onto at favicon sizes.
 *   3. 7×7 solid block at (13, 13) — the "press impression" stamp
 *      in the lower-right region of the plate. Asymmetric placement
 *      breaks radial symmetry; lower-right is the typical archival-
 *      stamp convention on a catalog plate.
 *
 * 16px legibility: at 16×16 the 7×7 solid block renders as
 * roughly 5×5 device pixels — anchored mass that survives sub-pixel
 * rasterization. The horizontal rule at y=11 maps to ~y=7 in the
 * bitmap, giving the eye a mid-glyph horizontal feature. The frame
 * uses stroke-width 1.25 in the favicon variant (app/icon.svg) so
 * the perimeter stays continuous at 16×16 and 32×32.
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
      <line
        x1="3.5"
        y1="11"
        x2="20.5"
        y2="11"
        stroke="currentColor"
        strokeWidth="1"
      />
      <rect x="13" y="13" width="7" height="7" fill="currentColor" />
    </svg>
  );
}
