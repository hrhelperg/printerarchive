import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "history",
  slug: "evolution-of-inkjet-printers",
  title: "The Evolution of Inkjet Printers",
  description:
    "How inkjet printing grew from a niche technique into a dominant home and photo printing technology.",
  summary:
    "Inkjet printing developed from a specialised method into one of the most common home printing technologies, valued for affordable colour and photographic output. This overview traces that path by era and principle.",
  era: "From niche technique to common home colour printing",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "Inkjet builds images from very small droplets of liquid ink.",
        "Affordable colour and photo quality drove its adoption in the home.",
        "Media and ink behaviour have always been central to inkjet quality.",
      ],
    },
    {
      kind: "paragraph",
      text: "Inkjet printing matured into a mainstream technology largely because it offered affordable colour. Where early personal printing was often monochrome and text-focused, inkjet made photographic and colour output accessible at home.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The core method",
    },
    {
      kind: "paragraph",
      text: "An inkjet printer forms images by placing very small droplets of liquid ink in precise positions as a print head moves across the page and paper advances beneath it. The principle has stayed consistent while precision and reliability improved.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Why it succeeded in the home",
    },
    {
      kind: "paragraph",
      text: "Lower entry cost and competent colour and photo output made inkjet a natural fit for households. It complemented, rather than replaced, laser printing, which remained strong for high-volume monochrome documents.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The continuing role of media",
    },
    {
      kind: "paragraph",
      text: "Because the ink is liquid, the paper has always mattered. Plain paper can let ink spread; papers designed for inkjet hold droplets more precisely. This relationship between ink and media remains a defining characteristic.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "Scope of this overview",
      text: "This page describes general development. It avoids specific dates and manufacturer attributions, which differ between sources.",
    },
  ],
  faqs: [
    {
      q: "Why did inkjet become popular at home?",
      a: "It offered affordable colour and competent photo output at a low entry cost, which suited household needs.",
    },
    {
      q: "Did inkjet replace laser printing?",
      a: "No. The two coexisted: inkjet for affordable colour and photos, laser for fast, high-volume monochrome documents.",
    },
    {
      q: "Why does paper still matter for inkjet?",
      a: "Liquid ink interacts with the surface it lands on, so media choice continues to affect sharpness and colour.",
    },
  ],
  related: [
    { section: "guides", slug: "how-inkjet-printers-work" },
    { section: "guides", slug: "laser-vs-inkjet-printers" },
    { section: "history", slug: "history-of-printers" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "evolution of inkjet printers",
    "inkjet history",
    "home printing",
    "colour printing",
  ],
  cluster: "printing-history",
};

export default entry;
