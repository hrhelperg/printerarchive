import type { ContentEntry } from "@/lib/content/types";

const cap = (s: string) => s.charAt(0).toUpperCase() + s.slice(1);

// One short, typographic eyebrow per entry, derived from its typed shape.
export function entryKicker(e: Partial<ContentEntry> & { section: string }): string {
  switch (e.section) {
    case "history":
      return ("era" in e && e.era ? String(e.era) : "History");
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
