export type ChangelogKind =
  | "redesign"
  | "feature"
  | "content"
  | "editorial"
  | "image-batch"
  | "infrastructure";

export interface ChangelogEntry {
  /** ISO date YYYY-MM-DD when the change shipped. */
  date: string;
  kind: ChangelogKind;
  title: string;
  summary: string;
}

/** Newest first. New entries are appended at the top. */
export const CHANGELOG: ChangelogEntry[] = [
  {
    date: "2026-05-20",
    kind: "editorial",
    title: "Phase 5.1 — Institutional trust foundation",
    summary:
      "Editorial policy, source policy, archive methodology, and changelog pages established. SourcesList promoted to SourceTransparency. First five history entries carry verified bibliographies.",
  },
  {
    date: "2026-05-20",
    kind: "redesign",
    title: "Phase 4C — Homepage storytelling and launch polish",
    summary:
      "Hero gained the bound-printout archival image and a primary 'Enter the archive' CTA; new FeaturedStories editorial block surfaces seven hand-picked archival narratives; FeaturedBands reduced from five to three; CategoryGrid re-framed as the comprehensive index beneath the editorial tier.",
  },
  {
    date: "2026-05-20",
    kind: "image-batch",
    title: "Phase 4B.3 Batch B — contextual archival imagery integrated",
    summary:
      "Four approved Wikimedia Commons images wired into three history pages: NORAD Computer Center 1984 (early-network-printing-systems), Hughes Aircraft mainframe scene c. 1979–80 (printing-in-the-1980s), 1940 Census Hollerith keypunch operator and IBM 1401 restoration lab (early-computer-printing).",
  },
  {
    date: "2026-05-19",
    kind: "image-batch",
    title: "Phase 4B.3 Batch A — first device-led archival imagery integrated",
    summary:
      "Six approved device-led images committed and wired: bound continuous-form printout (hero band), tractor-feed paper, original HP LaserJet I, IBM 3800 (laser-printer history), Facit E560 (dot-matrix-printers-explained), and Panasonic KX-F90 (history-of-business-faxing).",
  },
  {
    date: "2026-05-19",
    kind: "infrastructure",
    title: "Phase 4B.1 — visual archive system shipped",
    summary:
      "Introduced ArchivePlate, ArchiveImage, ImageGroup, the build-time content-integrity gate, CSS-only motion gated on prefers-reduced-motion, and production-grade Logomark/Wordmark identity. Established the image-presentation contract used by every later batch.",
  },
  {
    date: "2026-05-18",
    kind: "content",
    title: "Phase 4A — historical authority expansion",
    summary:
      "Twenty new history-cluster entries published and five brand pages deepened. All written to the conservative editorial standard now codified in the editorial-policy page.",
  },
];
