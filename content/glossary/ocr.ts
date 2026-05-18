import type { GlossaryEntry } from "@/lib/content/types";

const entry: GlossaryEntry = {
  section: "glossary",
  slug: "ocr",
  title: "OCR (Optical Character Recognition)",
  description:
    "OCR converts text within a scanned image into machine-readable, searchable characters.",
  summary:
    "OCR is the process of recognising text in an image of a document so that it can be searched, selected, and edited rather than treated as a flat picture.",
  term: "OCR (optical character recognition)",
  shortDefinition:
    "The process of converting text in a scanned image into machine-readable characters.",
  body: [
    {
      kind: "paragraph",
      text: "When a page is scanned, the result is initially an image: a grid of pixels with no understanding of the letters it contains. Optical character recognition analyses that image, identifies character shapes, and produces a text layer that software can search and select.",
    },
    {
      kind: "paragraph",
      text: "OCR is what makes a scanned PDF searchable. Without it, the document looks correct on screen but its words cannot be found, copied, or indexed. Accuracy depends on scan quality, contrast, language, and the legibility of the original.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "Searchable PDF",
      text: "A searchable PDF combines the original page image with an invisible OCR text layer, preserving appearance while enabling search.",
    },
  ],
  seeAlso: [
    { section: "workflows", slug: "scan-to-searchable-pdf" },
    { section: "tools", slug: "what-is-pdf" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["ocr", "optical character recognition", "searchable pdf"],
  cluster: "document-workflows",
};

export default entry;
