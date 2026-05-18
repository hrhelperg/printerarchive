import type { GlossaryEntry } from "@/lib/content/types";

const entry: GlossaryEntry = {
  section: "glossary",
  slug: "toner",
  title: "Toner",
  description:
    "Toner is the fine powder used by laser and LED printers to form images, fused to the page with heat and pressure.",
  summary:
    "Toner is a dry powder, rather than a liquid ink, used in electrophotographic printers. It is attracted to a charged image and then fused permanently onto paper.",
  term: "Toner",
  shortDefinition:
    "The fine powder used by laser and LED printers to form an image, fused to paper by heat and pressure.",
  body: [
    {
      kind: "paragraph",
      text: "Toner is the marking material in electrophotographic printing. Unlike inkjet inks, which are liquids, toner is a fine powder typically based on pigment combined with a binding material that allows it to melt and adhere to paper.",
    },
    {
      kind: "paragraph",
      text: "During printing, toner is attracted to areas of an electrostatically charged drum that correspond to the image, transferred to the page, and then bonded permanently by a heated fuser. This is why pages leaving a laser printer are often warm.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "Toner vs ink",
      text: "Toner is dry and fused with heat; inkjet ink is liquid and absorbed or bonded to the surface. The two are not interchangeable between printer types.",
    },
  ],
  seeAlso: [
    { section: "guides", slug: "how-laser-printers-work" },
    { section: "guides", slug: "how-inkjet-printers-work" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["toner", "laser printing", "electrophotography"],
  cluster: "printing-technology",
};

export default entry;
