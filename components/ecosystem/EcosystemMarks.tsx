/**
 * Inline marks for the ecosystem banner.
 *
 * These are internal, abstract, single-colour (currentColor) marks — they are
 * deliberately NOT any product's official logo, and no third-party artwork is
 * used. Product identity in the banner is carried by a text monogram.
 */

/** Abstract "connected nodes" mark used beside the HELPERG Ecosystem label. */
export function EcosystemMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.4}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="12" cy="12" r="2.4" />
      <circle cx="4.6" cy="6.4" r="1.7" />
      <circle cx="19.4" cy="6.4" r="1.7" />
      <circle cx="12" cy="20" r="1.7" />
      <path d="M10.3 10.5 6 7.6M13.7 10.5 18 7.6M12 14.4V18.3" />
    </svg>
  );
}

/** Nine-dot grid used on the "Explore Products" trigger. */
export function GridMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <circle cx="6" cy="6" r="1.5" />
      <circle cx="12" cy="6" r="1.5" />
      <circle cx="18" cy="6" r="1.5" />
      <circle cx="6" cy="12" r="1.5" />
      <circle cx="12" cy="12" r="1.5" />
      <circle cx="18" cy="12" r="1.5" />
      <circle cx="6" cy="18" r="1.5" />
      <circle cx="12" cy="18" r="1.5" />
      <circle cx="18" cy="18" r="1.5" />
    </svg>
  );
}

/** Close (×) mark for the directory panel. */
export function CloseMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={1.7}
      strokeLinecap="round"
      className={className}
      aria-hidden="true"
      focusable="false"
    >
      <path d="m6.5 6.5 11 11M17.5 6.5l-11 11" />
    </svg>
  );
}
