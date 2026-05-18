import type { GlossaryEntry } from "@/lib/content/types";

const entry: GlossaryEntry = {
  section: "glossary",
  slug: "duplex-printing",
  title: "Duplex Printing",
  description:
    "Duplex printing produces output on both sides of a sheet. It can be automatic or manual depending on the printer.",
  summary:
    "Duplex printing means printing on both sides of a page. Automatic duplexing turns the sheet inside the printer; manual duplexing relies on reinserting paper.",
  term: "Duplex printing",
  shortDefinition:
    "Printing on both sides of a sheet of paper, either automatically or manually.",
  body: [
    {
      kind: "paragraph",
      text: "Duplex printing refers to placing content on both faces of a sheet rather than only one. Single-sided printing is described as simplex by contrast.",
    },
    {
      kind: "paragraph",
      text: "Automatic duplexing uses a mechanism that pulls the sheet back into the printer and turns it so the second side can be printed without user intervention. Manual duplexing prints one side, then prompts the user to reload the stack so the reverse side can be printed.",
    },
    {
      kind: "callout",
      tone: "tip",
      title: "Why it matters",
      text: "Duplexing reduces paper use and produces more compact documents, which is often relevant for long reports and archival printing.",
    },
  ],
  seeAlso: [
    { section: "guides", slug: "what-is-duplex-printing" },
    { section: "glossary", slug: "ppm" },
    { section: "workflows", slug: "scan-to-searchable-pdf" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["duplex", "double-sided printing", "simplex"],
  cluster: "printing-fundamentals",
};

export default entry;
