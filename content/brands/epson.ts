import type { BrandEntry } from "@/lib/content/types";

const entry: BrandEntry = {
  section: "brands",
  slug: "epson",
  title: "Epson Printing",
  description:
    "A neutral reference overview of Epson's role in consumer and office printing, especially inkjet.",
  summary:
    "Epson is widely recognised as a major printing manufacturer, particularly associated with inkjet technology, alongside multifunction and office devices.",
  brand: "Epson",
  focusAreas: ["Inkjet printers", "Photo printing", "All-in-one devices", "Office printing"],
  body: [
    {
      kind: "paragraph",
      text: "Epson is one of the widely recognised names in printing, particularly associated with inkjet technology. Its range spans home document and photo printers through to office and multifunction devices.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Role in printing",
    },
    {
      kind: "paragraph",
      text: "Epson devices are common in homes and offices. The company is frequently associated with inkjet output, including photo-oriented printing, alongside all-in-one units that add scanning and copying.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Common workflows",
    },
    {
      kind: "list",
      items: [
        "Home document and photo printing on inkjet devices.",
        "Scan-to-file and copy tasks on all-in-one units.",
        "Everyday office output on multifunction devices.",
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
    { section: "guides", slug: "how-inkjet-printers-work" },
    { section: "guides", slug: "understanding-printer-resolution" },
    { section: "troubleshooting", slug: "printer-printing-blank-pages" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["epson printers", "epson printing", "inkjet", "printer brands"],
  cluster: "printer-brands",
};

export default entry;
