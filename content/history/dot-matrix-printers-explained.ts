import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "history",
  slug: "dot-matrix-printers-explained",
  title: "Dot Matrix Printers Explained",
  description:
    "What dot matrix printers are, how impact printing works, and why the technology persisted in specific roles.",
  summary:
    "Dot matrix printers form characters by striking an inked ribbon with a pattern of pins. This overview explains the mechanism, its trade-offs, and why it survived in particular settings.",
  era: "The impact-printing era and its lasting niches",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "Dot matrix is an impact technology: pins strike an inked ribbon against paper.",
        "It is comparatively noisy and coarse but durable and inexpensive to run.",
        "It persisted where multi-part forms and ribbon economy mattered.",
      ],
    },
    {
      kind: "paragraph",
      text: "A dot matrix printer forms each character from a small grid of dots produced by pins striking an inked ribbon against the paper. Because it physically strikes the page, it is an impact printer, in contrast to non-impact methods such as inkjet and laser.",
    },
    {
      kind: "heading",
      level: 2,
      text: "How the mechanism works",
    },
    {
      kind: "paragraph",
      text: "A moving print head contains a column of pins. As the head travels across the line, selected pins fire to press the ribbon against the paper, building characters and simple graphics dot by dot.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Trade-offs",
    },
    {
      kind: "list",
      items: [
        "Noisier than non-impact printers because printing is mechanical striking.",
        "Lower resolution and rougher output than laser or inkjet.",
        "Low running cost and high durability in demanding environments.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "Why it persisted",
    },
    {
      kind: "paragraph",
      text: "Because impact transfers through layers, dot matrix could print multi-part carbonless forms in a single pass. That capability, along with rugged reliability and inexpensive ribbons, kept it in use for invoices, logistics, and similar tasks well after office output generally moved to laser and inkjet.",
    },
  ],
  faqs: [
    {
      q: "Why is a dot matrix printer so loud?",
      a: "It prints by mechanically striking pins against an inked ribbon and paper, which is inherently noisier than non-impact methods.",
    },
    {
      q: "Why were dot matrix printers still used after laser and inkjet existed?",
      a: "Impact printing can mark multi-part carbonless forms in one pass, and the printers are durable with low running costs, which suited specific business tasks.",
    },
    {
      q: "Is dot matrix the same as a typewriter?",
      a: "Both are impact methods, but a typewriter strikes whole character shapes while a dot matrix printer builds characters from a pattern of dots.",
    },
  ],
  related: [
    { section: "history", slug: "history-of-printers" },
    { section: "history", slug: "early-computer-printing" },
    { section: "guides", slug: "laser-vs-inkjet-printers" },
    { section: "history", slug: "how-dot-matrix-printers-work" },
    { section: "history", slug: "how-impact-printing-worked" },
  ],
  published: "2026-05-18",
  updated: "2026-05-19",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "dot matrix printers",
    "impact printing",
    "multi-part forms",
    "printing history",
  ],
  cluster: "printing-history",
};

export default entry;
