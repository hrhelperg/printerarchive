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
    {
      kind: "heading",
      level: 2,
      text: "Historical context",
    },
    {
      kind: "paragraph",
      text: "Described conceptually rather than by date, the brand's lasting relevance is that its name became shorthand for the act of copying itself, and that the same lineage of office document technology is closely tied to how electrophotographic and laser output reached the workplace. It is the brand most often invoked when explaining how the office moved from carbon-and-impact reproduction to dry, fused, on-demand document output.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Printer categories",
    },
    {
      kind: "paragraph",
      text: "The categories most associated with the brand sit firmly in the shared, higher-volume end: workgroup laser printers, office multifunction systems that print, copy, and scan, and production-class equipment for in-house and commercial print rooms. These are duty-cycle devices defined by sustained throughput and finishing rather than by a low entry price.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Enterprise versus home usage",
    },
    {
      kind: "paragraph",
      text: "There is little home-printer story here. The brand's relevance is almost entirely organisational: shared devices serving many users, judged on uptime, volume, and document handling rather than purchase price. The trade-off is that such equipment is heavier to place and dependent on configuration and service, but it absorbs departmental volume that a desktop device cannot.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Technological relevance",
    },
    {
      kind: "paragraph",
      text: "The brand is technologically relevant because dry electrophotographic reproduction and the laser printing that grew from the same family of ideas reshaped what an office document was: produced on demand, sharp, and reproducible without wet processes. It is also bound up with the rise of desktop publishing, where the ability to compose a page on screen and reproduce it faithfully changed who could originate professional documents.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Workflow and troubleshooting relationships",
    },
    {
      kind: "paragraph",
      text: "Because the equipment is shared and networked, its workflows centre on print, copy, and scan-to-destination for many users, typically mediated by print-server-style spooling and queues rather than direct connections. The failures users notice follow from that shared posture: a device reporting offline to part of a workgroup or jobs stalled in a common queue are more often network, server, or queue conditions than mechanical faults.",
    },
  ],
  related: [
    { section: "history", slug: "office-printing-in-the-1990s" },
    { section: "guides", slug: "what-is-a-print-server" },
    { section: "guides", slug: "how-laser-printers-work" },
    { section: "history", slug: "how-early-laser-printers-worked" },
    { section: "history", slug: "evolution-of-laser-printing" },
    { section: "history", slug: "history-of-desktop-publishing" },
  ],
  published: "2026-05-18",
  updated: "2026-05-19",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["xerox printing", "xerox", "office copying", "printer brands"],
  cluster: "brand-overview",
};

export default entry;
