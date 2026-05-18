import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  section: "guides",
  slug: "what-is-duplex-printing",
  title: "What Is Duplex Printing?",
  description:
    "A practical guide to duplex (double-sided) printing: how automatic and manual duplexing work and when to use them.",
  summary:
    "Duplex printing puts content on both sides of a sheet. This guide explains automatic and manual duplexing, their trade-offs, and when double-sided output is the right choice.",
  difficulty: "introductory",
  estimatedTime: "5 min read",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "Duplex printing places content on both sides of a sheet; single-sided is simplex.",
        "Automatic duplexing turns the sheet inside the printer; manual duplexing relies on reloading.",
        "Duplexing reduces paper use and produces more compact documents.",
      ],
    },
    {
      kind: "paragraph",
      text: "Duplex printing means printing on both faces of a sheet of paper rather than only one. It is widely used for reports, booklets, and any long document where compactness and paper economy matter.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Automatic duplexing",
    },
    {
      kind: "paragraph",
      text: "A printer with automatic duplexing pulls the sheet back inside after printing the first side and turns it so the second side can be printed without any user action. This is the most convenient option when available.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Manual duplexing",
    },
    {
      kind: "paragraph",
      text: "Manual duplexing prints all the first sides, then prompts you to reinsert the stack so the reverse sides can be printed. It works on printers without a duplex unit but requires care to reload paper in the correct orientation.",
    },
    {
      kind: "heading",
      level: 2,
      text: "When to use duplex",
    },
    {
      kind: "list",
      items: [
        "Long documents where paper use and bulk matter.",
        "Booklets and double-sided handouts.",
        "Archival printing where compact storage is useful.",
      ],
    },
    {
      kind: "callout",
      tone: "tip",
      title: "Check the default",
      text: "Some environments set duplex as the default to save paper. If you need single-sided output, confirm the setting before printing a large job.",
    },
  ],
  faqs: [
    {
      q: "What is the opposite of duplex printing?",
      a: "Single-sided printing, called simplex.",
    },
    {
      q: "Can any printer do double-sided printing?",
      a: "Most can via manual duplexing by reloading paper. Automatic duplexing requires a printer with a duplex unit.",
    },
    {
      q: "Why use duplex printing?",
      a: "It reduces paper consumption and produces more compact documents, which is useful for long reports and archives.",
    },
  ],
  related: [
    { section: "glossary", slug: "duplex-printing" },
    { section: "guides", slug: "understanding-printer-resolution" },
    { section: "guides", slug: "how-laser-printers-work" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "what is duplex printing",
    "double-sided printing",
    "automatic duplex",
    "manual duplex",
  ],
  cluster: "printing-fundamentals",
};

export default entry;
