import type { BrandEntry } from "@/lib/content/types";

const entry: BrandEntry = {
  section: "brands",
  slug: "xerox",
  title: "Xerox Printing",
  description:
    "A neutral reference overview of Xerox's role in office printing, copying, and document technology.",
  summary:
    "Xerox is widely recognised in office document technology, historically associated with copying and with office printing and multifunction systems.",
  brand: "Xerox",
  focusAreas: ["Office printing", "Copying", "Multifunction systems", "Document technology"],
  body: [
    {
      kind: "paragraph",
      text: "Xerox is one of the widely recognised names in office document technology. The name is strongly associated with copying and, more broadly, with office printing and multifunction systems used by organisations.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Role in printing",
    },
    {
      kind: "paragraph",
      text: "Xerox is most associated with the office and workgroup context: shared devices that print, copy, and scan at volume, fitting the document-centric workflows common in organisations.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Common workflows",
    },
    {
      kind: "list",
      items: [
        "Shared workgroup printing and copying.",
        "Scan-to-file and document distribution in offices.",
        "High-volume document output on multifunction systems.",
      ],
    },
    {
      kind: "callout",
      tone: "note",
      title: "Reference scope",
      text: "This page is a general, neutral overview for context within the archive. It does not list specific models, prices, specifications, market share, or dates, and is not a product recommendation.",
    },
  ],
  related: [
    { section: "history", slug: "office-printing-in-the-1990s" },
    { section: "guides", slug: "what-is-a-print-server" },
    { section: "guides", slug: "how-laser-printers-work" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["xerox printing", "xerox", "office copying", "printer brands"],
  cluster: "printer-brands",
};

export default entry;
