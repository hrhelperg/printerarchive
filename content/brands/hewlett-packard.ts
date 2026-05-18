import type { BrandEntry } from "@/lib/content/types";

const entry: BrandEntry = {
  section: "brands",
  slug: "hewlett-packard",
  title: "Hewlett-Packard (HP) Printing",
  description:
    "A neutral reference overview of Hewlett-Packard's role in consumer and office printing and imaging.",
  summary:
    "Hewlett-Packard is widely recognised as one of the major manufacturers in consumer and office printing, producing inkjet and laser devices and associated supplies.",
  brand: "Hewlett-Packard (HP)",
  focusAreas: [
    "Inkjet printers",
    "Laser printers",
    "All-in-one devices",
    "Printing supplies",
  ],
  body: [
    {
      kind: "paragraph",
      text: "Hewlett-Packard is one of the most widely recognised names in printing. Across consumer and office markets it has produced inkjet printers, laser printers, multifunction devices that combine printing and scanning, and the consumable supplies those devices use.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Role in printing",
    },
    {
      kind: "paragraph",
      text: "HP devices are commonly encountered in homes, small offices, and larger organisations. As with other major manufacturers, its product range spans entry-level inkjet units through to higher-volume office laser systems.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "Reference scope",
      text: "This page is a general, neutral overview for context within the archive. It does not list specific models, prices, or specifications, and is not a product recommendation.",
    },
  ],
  related: [
    { section: "guides", slug: "how-laser-printers-work" },
    { section: "guides", slug: "how-inkjet-printers-work" },
    { section: "troubleshooting", slug: "printer-offline-guide" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["hp", "hewlett-packard", "printer brands"],
  cluster: "printer-brands",
};

export default entry;
