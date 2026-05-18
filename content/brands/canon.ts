import type { BrandEntry } from "@/lib/content/types";

const entry: BrandEntry = {
  section: "brands",
  slug: "canon",
  title: "Canon Printing",
  description:
    "A neutral reference overview of Canon's role in consumer and office printing and imaging.",
  summary:
    "Canon is widely recognised as a major manufacturer in imaging and printing, producing inkjet and laser devices and multifunction units for home and office use.",
  brand: "Canon",
  focusAreas: ["Inkjet printers", "Laser printers", "All-in-one devices", "Imaging and scanning"],
  body: [
    {
      kind: "paragraph",
      text: "Canon is one of the widely recognised names in imaging and printing. Across consumer and office markets it has produced inkjet printers, laser printers, and multifunction devices that combine printing with scanning and copying.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Role in printing",
    },
    {
      kind: "paragraph",
      text: "Canon devices are commonly encountered in homes and offices, spanning entry-level inkjet units through to office laser and multifunction systems. Its imaging background is reflected in product lines that combine printing and scanning.",
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
        "Office document output on laser and multifunction devices.",
        "Scan-to-file and copy workflows on all-in-one units.",
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
    { section: "guides", slug: "how-laser-printers-work" },
    { section: "troubleshooting", slug: "printer-offline-guide" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["canon printers", "canon printing", "printer brands", "imaging"],
  cluster: "printer-brands",
};

export default entry;
