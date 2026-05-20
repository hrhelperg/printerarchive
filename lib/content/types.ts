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
  | { kind: "footnoteRef"; n: number };

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

export type ContentEntry =
  | GuideEntry
  | TroubleshootingEntry
  | HistoryEntry
  | GlossaryEntry
  | BrandEntry
  | WorkflowEntry
  | ToolEntry;
