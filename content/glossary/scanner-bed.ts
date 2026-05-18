import type { GlossaryEntry } from "@/lib/content/types";

const entry: GlossaryEntry = {
  section: "glossary",
  slug: "scanner-bed",
  title: "Scanner Bed",
  description:
    "The scanner bed is the flat glass surface on which a document is placed to be scanned.",
  summary:
    "The scanner bed (or flatbed) is the glass surface where a page is laid for scanning. Its cleanliness and the document's flatness directly affect scan quality.",
  term: "Scanner bed",
  shortDefinition:
    "The flat glass surface of a flatbed scanner on which a document is placed to be captured.",
  body: [
    {
      kind: "paragraph",
      text: "The scanner bed, also called the flatbed, is the glass plate on which a page or object is placed face down to be scanned. A moving sensor passes beneath the glass to capture the image.",
    },
    {
      kind: "paragraph",
      text: "Because the bed is part of the optical path, dust, marks, or smudges on the glass appear in scans, and a document that is not lying flat can produce blur or shadow. Keeping the bed clean and the original flat is the simplest way to improve scan quality.",
    },
    {
      kind: "callout",
      tone: "tip",
      title: "Flatbed vs feeder",
      text: "A flatbed handles bound or delicate originals one at a time; a document feeder handles loose multi-page stacks but not bound material.",
    },
  ],
  seeAlso: [
    { section: "workflows", slug: "scan-to-searchable-pdf" },
    { section: "troubleshooting", slug: "scanner-not-detected" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["scanner bed", "flatbed scanner", "scanning", "scan quality"],
  cluster: "document-workflows",
};

export default entry;
