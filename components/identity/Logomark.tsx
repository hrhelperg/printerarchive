interface LogomarkProps {
  className?: string;
  accessibleName?: string;
}

/**
 * Primary PrinterArchive mark. Single-colour SVG using currentColor:
 * stacked sheets, a printer body, and an output tray. It reads as
 * archive + printer without becoming illustrative.
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
      <path
        d="M7.25 3.75h7.6l2.9 2.9v3.1H7.25z"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path
        d="M14.85 3.75v2.9h2.9"
        stroke="currentColor"
        strokeWidth="1.45"
        strokeLinejoin="round"
      />
      <path
        d="M5.4 9.6h13.2a2 2 0 0 1 2 2v5.15H3.4V11.6a2 2 0 0 1 2-2Z"
        stroke="currentColor"
        strokeWidth="1.6"
        strokeLinejoin="round"
      />
      <path
        d="M7.4 16.75h9.2v3.5H7.4z"
        fill="currentColor"
      />
      <path
        d="M8.6 12.55h6.8M6.65 19.95h10.7"
        stroke="currentColor"
        strokeWidth="1.35"
        strokeLinecap="round"
      />
    </svg>
  );
}
