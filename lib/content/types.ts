import type { SectionId } from "@/lib/site";

export interface ArchiveImage {
  src: string; // /images/<section>/<file>.<ext> committed under public/
  alt: string;
  width: number;
  height: number;
  caption?: string;
  credit: { source: string; url?: string; license: string };
}

export interface ContentRef {
  section: SectionId;
  slug: string;
}

export type ContentBlock =
  | { kind: "heading"; level: 2 | 3; text: string; id?: string }
  | { kind: "paragraph"; text: string }
  | { kind: "list"; ordered?: boolean; items: string[] }
  | {
      kind: "callout";
      tone: "note" | "tip" | "warning";
      title?: string;
      text: string;
    }
  | { kind: "table"; caption?: string; headers: string[]; rows: string[][] }
  | { kind: "keyTakeaways"; items: string[] }
  | { kind: "timeline"; events: { period: string; text: string }[] }
  | { kind: "steps"; steps: { title: string; text: string }[] }
  | { kind: "figure"; image: ArchiveImage }
  | { kind: "pullquote"; text: string; attribution?: string }
  | { kind: "footnoteRef"; n: number }
  | {
      kind: "sourceCallout";
      text: string;
      attribution: string;
      source?: { title: string; url?: string };
    }
  | { kind: "editorialAside"; title?: string; text: string }
  | { kind: "timelineBreak"; era: string; year?: string }
  | {
      kind: "quotePlate";
      text: string;
      attribution: string;
      citation?: string;
    }
  | {
      kind: "figurePair";
      left: ArchiveImage;
      right: ArchiveImage;
      caption?: string;
    }
  | {
      kind: "archivalTable";
      caption: string;
      headers: string[];
      rows: string[][];
      sources?: string[];
      figureNumber?: string;
    }
  | { kind: "researchInset"; title: string; items: string[] };

export interface BaseEntry {
  section: SectionId;
  slug: string;
  title: string;
  description: string; // <=160 chars, SEO meta
  summary: string; // lede paragraph
  body: ContentBlock[];
  hero?: ArchiveImage;
  published: string; // ISO date (YYYY-MM-DD)
  updated: string; // ISO date (YYYY-MM-DD)
  author: string;
  editor: string;
  keywords: string[];
  cluster?: string;
  related?: ContentRef[];
  faqs?: { q: string; a: string }[];
  sources?: { title: string; url?: string; publisher?: string }[];
  footnotes?: { n: number; text: string }[];
  essayLead?: {
    kicker?: string;
    standfirst: string;
    byline?: string;
  };
  deepReading?: { ref: ContentRef; note?: string }[];
  modernTools?: import("@/lib/products").ProductId[];
}

export interface GuideEntry extends BaseEntry {
  section: "guides" | "mobile-printing" | "fax";
  difficulty: "introductory" | "intermediate" | "advanced";
  estimatedTime: string;
}

export interface TroubleshootingEntry extends BaseEntry {
  section: "troubleshooting";
  symptom: string;
  appliesTo: string[];
}

export interface HistoryEntry extends BaseEntry {
  section: "history" | "fax";
  era: string;
}

export interface GlossaryEntry extends BaseEntry {
  section: "glossary";
  term: string;
  shortDefinition: string;
  seeAlso: ContentRef[];
}

export interface BrandEntry extends BaseEntry {
  section: "brands";
  brand: string;
  focusAreas: string[];
}

export interface WorkflowEntry extends BaseEntry {
  section: "workflows";
  goal: string;
  toolsUsed: string[];
}

export interface ToolEntry extends BaseEntry {
  section: "tools";
  purpose: string;
}

/**
 * A reference page for a specific printer or fax machine model. Every spec-like
 * field is OPTIONAL so a page can omit anything it cannot verify against an
 * authoritative source — the source policy forbids inventing specifications.
 * The only field made mandatory beyond BaseEntry is `sources`.
 */
export interface ModelEntry extends BaseEntry {
  section: "models";
  /** Manufacturer as printed on the device / spec sheet. Omit if unverified. */
  manufacturer?: string;
  /** Device class, e.g. "Laser printer", "Dot-matrix printer", "Fax machine". */
  category?: string;
  /** Operational-era label (e.g. "Early laser era"). Source-backed only. */
  era?: string;
  /** Market-introduction year/date — include ONLY if source-backed. */
  introduced?: string;
  /** Discontinuation year/date — include ONLY if source-backed. */
  discontinued?: string;
  /** Other names / model numbers the same machine shipped under. */
  alsoKnownAs?: string[];
  /**
   * Flexible, self-citing spec list — preferred over fixed spec columns so any
   * unknown spec is simply omitted. Every pair names its own source; never
   * fabricate a value to fill a column.
   */
  specs?: { label: string; value: string; source: string }[];
  /** Mandatory on model pages: at least one authoritative source. */
  sources: { title: string; url?: string; publisher?: string }[];
}

export type ContentEntry =
  | GuideEntry
  | TroubleshootingEntry
  | HistoryEntry
  | GlossaryEntry
  | BrandEntry
  | WorkflowEntry
  | ToolEntry
  | ModelEntry;
