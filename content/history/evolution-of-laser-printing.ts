import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "history",
  slug: "evolution-of-laser-printing",
  title: "The Evolution of Laser Printing",
  description:
    "How laser printing developed from a specialised technology into a standard for fast, sharp office output.",
  summary:
    "Laser printing began as expensive, specialised equipment and gradually became a mainstream office and home technology. This overview traces that progression by era and by the principles that made it possible.",
  era: "From specialised equipment to mainstream office printing",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "Laser printing is an electrophotographic process: charge, light, toner, fusing.",
        "It moved from large, costly shared machines toward compact desktop and home units.",
        "Its strengths — speed and sharp text — shaped how offices produced documents.",
      ],
    },
    {
      kind: "paragraph",
      text: "Laser printing did not arrive as a finished consumer product. It began as comparatively large, expensive equipment used where high volume and sharp output justified the cost, and over time became smaller, more affordable, and common in ordinary offices and homes.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The underlying principle",
    },
    {
      kind: "paragraph",
      text: "The core method has remained consistent: a light-sensitive drum is charged, a precisely steered beam writes an invisible electrostatic image, toner is attracted to that image, transferred to paper, and fused with heat. Refinement has been incremental rather than a change of principle.",
    },
    {
      kind: "heading",
      level: 2,
      text: "From shared machines to the desktop",
    },
    {
      kind: "paragraph",
      text: "Early laser printers were often shared resources serving many users. As components became cheaper and smaller, the technology reached individual desks and then homes, while networked office units continued to serve high-volume workgroups.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Why it reshaped office output",
    },
    {
      kind: "paragraph",
      text: "Sharp text, quiet operation, and high sustained speed made laser printing well suited to the document-heavy office. It set expectations for what printed business documents should look like and how quickly they should be produced.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "Scope of this overview",
      text: "This page describes the development of the technology in general terms. It does not assign specific invention dates or attribute milestones to particular companies, because such claims vary by source.",
    },
  ],
  faqs: [
    {
      q: "Has the basic laser printing method changed over time?",
      a: "The core electrophotographic process — charge, expose, develop with toner, transfer, fuse — has stayed consistent. Most change has been refinement in cost, size, speed, and quality.",
    },
    {
      q: "Why did laser printing become an office standard?",
      a: "Sharp text, quiet operation, and high sustained speed suited the document-heavy office, which made it a natural default for business output.",
    },
    {
      q: "Were early laser printers personal devices?",
      a: "Early units were often larger, costly, shared resources. Personal and home laser printers came later as components shrank and prices fell.",
    },
  ],
  related: [
    { section: "guides", slug: "how-laser-printers-work" },
    { section: "history", slug: "history-of-printers" },
    { section: "guides", slug: "laser-vs-inkjet-printers" },
    { section: "history", slug: "how-early-laser-printers-worked" },
    { section: "history", slug: "transition-from-impact-to-laser-printing" },
  ],
  published: "2026-05-18",
  updated: "2026-05-20",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "evolution of laser printing",
    "laser printer history",
    "electrophotography",
    "office printing",
  ],
  sources: [
    {
      title: "Laser printing",
      url: "https://en.wikipedia.org/wiki/Laser_printing",
      publisher: "Wikipedia",
    },
    {
      title: "HP LaserJet",
      url: "https://en.wikipedia.org/wiki/HP_LaserJet",
      publisher: "Wikipedia",
    },
    {
      title: "Xerography",
      url: "https://en.wikipedia.org/wiki/Xerography",
      publisher: "Wikipedia",
    },
  ],
  cluster: "printing-history",
};

export default entry;
