import type { GlossaryEntry } from "@/lib/content/types";

const entry: GlossaryEntry = {
  section: "glossary",
  slug: "thermal-printing",
  title: "Thermal Printing",
  description:
    "Thermal printing marks media using controlled heat rather than liquid ink or fused toner.",
  summary:
    "Thermal printing uses heat to mark media. Direct thermal uses heat-sensitive paper; thermal transfer melts a ribbon onto media for more durable output.",
  term: "Thermal printing",
  shortDefinition:
    "A printing method that marks media with controlled heat rather than liquid ink or toner.",
  body: [
    {
      kind: "paragraph",
      text: "Thermal printing forms images using heat from a print head. It is the technology behind most receipts, many shipping and barcode labels, and tickets, where mechanical simplicity and reliability matter.",
    },
    {
      kind: "paragraph",
      text: "There are two main forms. Direct thermal marks heat-sensitive media with no ribbon, but the result can fade with heat, light, or age. Thermal transfer melts pigment from a ribbon onto media for more durable output.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "Why receipts fade",
      text: "Receipts often use direct thermal media, which is sensitive to heat by design, so heat, light, or age can cause fading.",
    },
  ],
  seeAlso: [
    { section: "history", slug: "thermal-printing-history" },
    { section: "workflows", slug: "print-shipping-labels" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["thermal printing", "direct thermal", "thermal transfer", "receipt printing"],
  cluster: "printing-fundamentals",
};

export default entry;
