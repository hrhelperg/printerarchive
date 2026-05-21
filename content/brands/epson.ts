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
      kind: "figure",
      image: {
        src: "/images/brands/epson--epson-lx800.png",
        alt: "Epson LX-800 dot matrix printer, a beige 1980s impact printer with a paper guide",
        width: 615,
        height: 376,
        caption:
          "Epson LX-800 — a representative unit from Epson's dot-matrix line, the impact printers that established the brand before its inkjet era.",
        credit: {
          source: "Oguenther, via Wikimedia Commons",
          url: "https://commons.wikimedia.org/wiki/File:Epson-lx800.png",
          license: "CC BY-SA 3.0",
        },
      },
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
    {
      kind: "heading",
      level: 2,
      text: "Historical context",
    },
    {
      kind: "paragraph",
      text: "Described conceptually rather than by date, the brand's relevance is its strong identification with inkjet output for the home, including photo-oriented work. That association places it within the broader account of how inkjet printers developed from a niche method into the default for affordable home colour, and of how colour reproduction itself became an ordinary expectation rather than specialist work.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Where the brand's devices land in practice",
    },
    {
      kind: "paragraph",
      text: "The categories most associated with the brand are home document and photo inkjet printers and inkjet all-in-ones that add scanning and copying, alongside office and multifunction devices. The centre of gravity is the inkjet side, frequently positioned toward photo and colour-sensitive output.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Enterprise versus home usage",
    },
    {
      kind: "paragraph",
      text: "The brand is most at home in the home: devices chosen for photo and document quality at an accessible price. The trade-off is the standard inkjet one — strong colour and photo output but a running cost that rises with volume — which is why heavy text-heavy office work tends to favour laser instead, even where the same brand also offers office units.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Technological relevance",
    },
    {
      kind: "paragraph",
      text: "The brand is technologically relevant chiefly through inkjet: understanding its devices is largely about understanding how inkjet printers place fine droplets to build images, how resolution affects perceived quality, and how inkjet and colour printing evolved into routine, affordable capabilities.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Workflow and troubleshooting relationships",
    },
    {
      kind: "paragraph",
      text: "Common workflows are home document and photo printing plus scan-to-file on all-in-ones. The troubleshooting profile reflects inkjet realities: faded, banded, or blank output is frequently a head or ink condition rather than a deeper hardware fault, and clearing or checking the ink and head state is the usual first step before suspecting anything more serious.",
    },
  ],
  related: [
    { section: "guides", slug: "how-inkjet-printers-work" },
    { section: "guides", slug: "understanding-printer-resolution" },
    { section: "troubleshooting", slug: "printer-printing-blank-pages" },
    { section: "history", slug: "evolution-of-color-printing" },
    { section: "history", slug: "evolution-of-inkjet-printers" },
  ],
  published: "2026-05-18",
  updated: "2026-05-20",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["epson printers", "epson printing", "inkjet", "printer brands"],
  cluster: "brand-overview",
};

export default entry;
