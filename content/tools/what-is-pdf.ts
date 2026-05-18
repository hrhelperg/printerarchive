import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  section: "tools",
  slug: "what-is-pdf",
  title: "What Is a PDF?",
  description:
    "An explanation of the PDF format and why it is central to printing and document workflows.",
  summary:
    "PDF is a document format designed to preserve the appearance of a page across devices, which is why it is widely used for printing and archiving.",
  purpose:
    "Explain the role of the PDF format in printing and document preservation.",
  body: [
    {
      kind: "paragraph",
      text: "PDF stands for Portable Document Format. Its defining purpose is to preserve how a document looks — layout, fonts, and graphics — regardless of the device or software used to view or print it.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Why PDF matters for printing",
    },
    {
      kind: "paragraph",
      text: "Because a PDF carries its own description of the page, a document printed from a PDF on one machine should closely match the same document printed elsewhere. This predictability is why PDF is a common final step before printing and a common format for archived records.",
    },
    {
      kind: "list",
      items: [
        "Consistent appearance across devices and printers",
        "Suitable for long-term archiving of fixed-layout documents",
        "Can carry a searchable text layer when produced with OCR",
      ],
    },
    {
      kind: "callout",
      tone: "note",
      title: "Image vs searchable PDF",
      text: "A PDF created purely from a scan is an image of the page. Adding an OCR text layer makes the same PDF searchable while keeping its appearance.",
    },
  ],
  related: [
    { section: "glossary", slug: "ocr" },
    { section: "workflows", slug: "scan-to-searchable-pdf" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["pdf", "portable document format", "document format"],
  cluster: "document-workflows",
};

export default entry;
