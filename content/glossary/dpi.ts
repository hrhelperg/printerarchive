import type { GlossaryEntry } from "@/lib/content/types";

const entry: GlossaryEntry = {
  section: "glossary",
  slug: "dpi",
  title: "DPI (Dots Per Inch)",
  description:
    "DPI measures how many individual dots a printer places, or a scanner samples, per linear inch — a core measure of resolution.",
  summary:
    "DPI describes how finely a device places or samples dots across one inch. It is the most common way print and scan resolution is expressed.",
  term: "DPI (dots per inch)",
  shortDefinition:
    "The number of individual dots a device places or samples per linear inch of output or capture.",
  body: [
    {
      kind: "paragraph",
      text: "DPI, short for dots per inch, expresses how densely a device renders or captures detail along a single inch. For a printer it refers to how many discrete dots of ink or toner are placed in a line; for a scanner it refers to how many samples are taken across an inch of the original.",
    },
    {
      kind: "paragraph",
      text: "Higher DPI generally allows finer detail, but the visible benefit depends on the medium, the content, and viewing distance. Text and line art reveal resolution differences more readily than continuous-tone photographs, where other factors such as halftoning and ink behaviour also matter.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "DPI vs PPI",
      text: "DPI describes device dots. PPI (pixels per inch) describes the pixel density of a digital image. The two are related during printing but are not interchangeable terms.",
    },
  ],
  seeAlso: [
    { section: "guides", slug: "understanding-printer-resolution" },
    { section: "glossary", slug: "ppm" },
    { section: "guides", slug: "how-laser-printers-work" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["dpi", "resolution", "print quality", "scanning"],
  cluster: "printing-fundamentals",
};

export default entry;
