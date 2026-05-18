import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  section: "guides",
  slug: "understanding-printer-resolution",
  title: "Understanding Printer Resolution",
  description:
    "What printer resolution means, how DPI relates to perceived quality, and why higher numbers are not always better.",
  summary:
    "Printer resolution, usually expressed in DPI, describes how finely a printer places dots. This guide explains what it does and does not tell you about real-world quality.",
  difficulty: "introductory",
  estimatedTime: "6 min read",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "Resolution (DPI) describes dot density, not overall quality on its own.",
        "Content type and media affect perceived quality as much as DPI.",
        "Higher DPI has diminishing returns and larger files or slower output.",
      ],
    },
    {
      kind: "paragraph",
      text: "Printer resolution is commonly stated in dots per inch (DPI): how many individual dots the printer can place along an inch. It is an important factor in quality, but it is not the whole story.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What DPI tells you",
    },
    {
      kind: "paragraph",
      text: "Higher DPI allows finer detail. For text and line art, sufficient resolution produces crisp edges; beyond a certain point, increases are hard to perceive at normal viewing distances.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What DPI does not tell you",
    },
    {
      kind: "paragraph",
      text: "Perceived quality also depends on the content, the media, and how the printer handles tone and colour. A high DPI number on unsuitable paper does not guarantee a better-looking result.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Practical guidance",
    },
    {
      kind: "list",
      items: [
        "For everyday text, moderate resolution is usually more than enough.",
        "For photos, media quality matters as much as the DPI figure.",
        "Very high settings can increase file size and slow output for little visible gain.",
      ],
    },
  ],
  faqs: [
    {
      q: "Is a higher DPI always better?",
      a: "Not necessarily. Beyond a point the difference is hard to perceive, and very high settings can slow output and enlarge files with little visible benefit.",
    },
    {
      q: "What is DPI?",
      a: "Dots per inch — the number of individual dots a printer places along a linear inch.",
    },
    {
      q: "Why does my high-DPI print still look poor?",
      a: "Quality also depends on content and media. Unsuitable paper or poor source material limits the result regardless of DPI.",
    },
  ],
  related: [
    { section: "glossary", slug: "dpi" },
    { section: "guides", slug: "how-inkjet-printers-work" },
    { section: "guides", slug: "laser-vs-inkjet-printers" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "printer resolution",
    "dpi explained",
    "print quality",
    "dots per inch",
  ],
  cluster: "printing-fundamentals",
};

export default entry;
