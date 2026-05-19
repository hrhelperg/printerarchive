// Abstract, geometric archival mark — registration/platen-inspired hairlines.
// Decorative only (decision a: no literal printer illustrations).
export function Motif({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      aria-hidden="true"
      focusable="false"
      className={className}
    >
      <rect
        x="6.5"
        y="6.5"
        width="35"
        height="35"
        stroke="currentColor"
        strokeWidth="1"
      />
      <line x1="6.5" y1="18" x2="41.5" y2="18" stroke="currentColor" strokeWidth="1" />
      <line x1="6.5" y1="30" x2="41.5" y2="30" stroke="currentColor" strokeWidth="1" />
      <line x1="24" y1="2" x2="24" y2="10" stroke="currentColor" strokeWidth="1" />
      <line x1="24" y1="38" x2="24" y2="46" stroke="currentColor" strokeWidth="1" />
      <circle cx="24" cy="24" r="3.25" stroke="currentColor" strokeWidth="1" />
    </svg>
  );
}
