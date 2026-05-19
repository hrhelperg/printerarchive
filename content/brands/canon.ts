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
    {
      kind: "heading",
      level: 2,
      text: "Historical context",
    },
    {
      kind: "paragraph",
      text: "Described conceptually rather than by date, the brand's relevance grows out of an imaging lineage: a name associated with cameras and optics that carried into printing meant its devices were positioned where image quality, not just text, mattered. That heritage situates it within the broader story of how colour reproduction moved from specialist work into something ordinary home and office devices were expected to do well.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Printer categories",
    },
    {
      kind: "paragraph",
      text: "The categories most associated with the brand span home document and photo inkjet printers, inkjet and laser all-in-ones that add scanning and copying, and office laser and multifunction systems. The inkjet side is frequently positioned toward photographic and colour-sensitive output, while the office side serves shared document work.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Enterprise versus home usage",
    },
    {
      kind: "paragraph",
      text: "At home the device is chosen for photo and document quality at an accessible price; in an organisation the same brand's laser and multifunction units are chosen for shared throughput and document handling. The trade-off mirrors the wider inkjet-versus-laser divide: the home inkjet excels at colour and photos but costs more per page at volume, while the office unit is built for sustained text-heavy work.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Technological relevance",
    },
    {
      kind: "paragraph",
      text: "The brand is technologically relevant largely through inkjet output: understanding its home and photo devices is mostly a matter of understanding how inkjet printers lay down fine droplets to build images, and how colour printing developed into a routine expectation rather than a specialist capability.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Workflow and troubleshooting relationships",
    },
    {
      kind: "paragraph",
      text: "Common workflows split by context: photo and document printing plus scan-to-file on home all-in-ones, and shared document output on office systems. Troubleshooting follows the same split — a home inkjet's issues are usually local, around heads, cartridges, or a single connection, while a shared office device's most visible failure is reporting offline to networked users, where the queue, server, or network is the more likely cause.",
    },
  ],
  related: [
    { section: "guides", slug: "how-inkjet-printers-work" },
    { section: "guides", slug: "how-laser-printers-work" },
    { section: "troubleshooting", slug: "printer-offline-guide" },
    { section: "history", slug: "evolution-of-color-printing" },
  ],
  published: "2026-05-18",
  updated: "2026-05-19",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["canon printers", "canon printing", "printer brands", "imaging"],
  cluster: "brand-overview",
};

export default entry;
