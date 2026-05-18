import type { BrandEntry } from "@/lib/content/types";

const entry: BrandEntry = {
  section: "brands",
  slug: "brother",
  title: "Brother Printing",
  description:
    "A neutral reference overview of Brother's role in home and small-office printing and multifunction devices.",
  summary:
    "Brother is widely recognised as a printing manufacturer associated with practical home and small-office laser and multifunction devices, as well as labelling.",
  brand: "Brother",
  focusAreas: ["Laser printers", "All-in-one devices", "Small-office printing", "Labelling"],
  body: [
    {
      kind: "paragraph",
      text: "Brother is one of the widely recognised names in printing, often associated with practical home and small-office devices, including monochrome laser printers and multifunction units, as well as labelling products.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Role in printing",
    },
    {
      kind: "paragraph",
      text: "Brother devices are common in home offices and small businesses, where dependable document output and all-in-one print, scan, and copy functions are typical needs.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Common workflows",
    },
    {
      kind: "list",
      items: [
        "Everyday monochrome document printing in home and small offices.",
        "Scan-to-file and copy tasks on all-in-one units.",
        "Label printing for organisation and logistics.",
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
    { section: "guides", slug: "how-laser-printers-work" },
    { section: "workflows", slug: "print-shipping-labels" },
    { section: "troubleshooting", slug: "printer-not-detected-on-windows" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["brother printers", "brother printing", "small office printing", "printer brands"],
  cluster: "printer-brands",
};

export default entry;
