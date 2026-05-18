import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "history",
  slug: "thermal-printing-history",
  title: "A History of Thermal Printing",
  description:
    "How thermal printing became the standard for receipts, labels, and tickets, and how the two main thermal methods differ.",
  summary:
    "Thermal printing uses heat rather than ink ribbons or toner to mark specially prepared media. This overview explains direct thermal and thermal transfer and why the technology dominates receipts and labels.",
  era: "The rise of heat-based receipt and label printing",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "Thermal printing marks media using controlled heat rather than liquid ink or toner.",
        "Direct thermal uses heat-sensitive media; thermal transfer melts a ribbon onto media.",
        "Simplicity and reliability made it standard for receipts, labels, and tickets.",
      ],
    },
    {
      kind: "paragraph",
      text: "Thermal printing became ubiquitous in places most people rarely think about: point-of-sale receipts, shipping and barcode labels, and tickets. Its appeal is mechanical simplicity and reliability in high-volume, unattended use.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Direct thermal",
    },
    {
      kind: "paragraph",
      text: "Direct thermal printing uses heat-sensitive media that darkens where a heated print head touches it. There is no ink or ribbon, which keeps the device simple, but the media can fade over time and with heat or light exposure.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Thermal transfer",
    },
    {
      kind: "paragraph",
      text: "Thermal transfer printing melts pigment from a ribbon onto the media. It needs a ribbon but produces more durable, longer-lasting marks, which suits labels that must survive handling and storage.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Why it became standard for receipts and labels",
    },
    {
      kind: "paragraph",
      text: "Few moving parts, fast output, and quiet operation made thermal printing well suited to retail and logistics, where reliability and speed matter more than photographic quality.",
    },
  ],
  faqs: [
    {
      q: "Why do receipts fade over time?",
      a: "Many receipts use direct thermal media, which darkens with heat. The same sensitivity means heat, light, or age can cause fading.",
    },
    {
      q: "What is the difference between direct thermal and thermal transfer?",
      a: "Direct thermal marks heat-sensitive media with no ribbon; thermal transfer melts pigment from a ribbon onto media for more durable output.",
    },
    {
      q: "Why is thermal printing used for labels and receipts?",
      a: "It is mechanically simple, fast, quiet, and reliable in high-volume use, which suits retail and logistics.",
    },
  ],
  related: [
    { section: "glossary", slug: "thermal-printing" },
    { section: "history", slug: "history-of-printers" },
    { section: "workflows", slug: "print-shipping-labels" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "thermal printing history",
    "direct thermal",
    "thermal transfer",
    "receipt printing",
  ],
  cluster: "printing-history",
};

export default entry;
