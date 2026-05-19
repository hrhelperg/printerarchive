import type { ContentEntry } from "@/lib/content/types";

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

// One short, typographic eyebrow per entry, derived from its typed shape.
export function entryKicker(e: Partial<ContentEntry> & { section: string }): string {
  // `era` is present only on HistoryEntry; check shape before section
  // because section "fax" maps to both GuideEntry and HistoryEntry.
  if ("era" in e && e.era) return String(e.era);
  switch (e.section) {
    case "history":
      // reached only if a history entry has no era (defensive fallback)
      return "History";
    case "guides":
    case "mobile-printing":
    case "fax":
      return "difficulty" in e && e.difficulty
        ? cap(String(e.difficulty))
        : "Guide";
    case "troubleshooting":
      return "Troubleshooting";
    case "brands":
      return "brand" in e && e.brand ? String(e.brand) : "Brand";
    case "workflows":
      return "Workflow";
    case "tools":
      return "Tool";
    case "glossary":
      return "Definition";
    default:
      return "Entry";
  }
}
