import type { ProductId } from "@/lib/products";

/**
 * Neutral monochrome placeholder glyphs for ecosystem products that do not
 * have a supplied app icon. These are INTERNAL line marks (single-colour,
 * currentColor) — deliberately NOT the official app-store artwork. They give
 * the product cards consistent iconography in the calm paper/ink register
 * until real icons are supplied. 24×24 viewBox; decorative (aria-hidden).
 */
export function ProductGlyph({
  id,
  className = "",
}: {
  id: ProductId;
  className?: string;
}) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.5,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    className,
    "aria-hidden": true as const,
    focusable: "false" as const,
  };
  switch (id) {
    case "smart-printer":
      return (
        <svg {...common}>
          <rect x="7" y="3.25" width="10" height="5" rx="1" />
          <rect x="4" y="8.25" width="16" height="7" rx="1.5" />
          <rect x="7" y="13.25" width="10" height="7.5" rx="1" />
          <circle cx="7.5" cy="11.25" r="0.75" fill="currentColor" stroke="none" />
        </svg>
      );
    case "zip-rar":
      return (
        <svg {...common}>
          <rect x="4.5" y="3.75" width="15" height="16.5" rx="1.5" />
          <path d="M12 3.75v13" />
          <path d="M11 6.75h2M11 9.25h2M11 11.75h2M11 14.25h2" />
          <rect x="10.5" y="16" width="3" height="3.25" rx="0.5" />
        </svg>
      );
    case "pdf-editor":
      return (
        <svg {...common}>
          <path d="M7 3.5h6.5L17 7v13H7z" />
          <path d="M13.5 3.5V7H17" />
          <path d="M9.25 12h5.5M9.25 14.75h5.5M9.25 17.5h3.25" />
        </svg>
      );
    case "fax-app":
      return (
        <svg {...common}>
          <path d="M7 8.75V4.5h10v4.25" />
          <rect x="3.75" y="8.75" width="16.5" height="8.75" rx="1.5" />
          <path d="M7 13.25h3.5" />
          <path d="M7 20.25v-2.75M17 20.25v-2.75" />
        </svg>
      );
    default:
      return null;
  }
}
