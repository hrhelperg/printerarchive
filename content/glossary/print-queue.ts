import type { GlossaryEntry } from "@/lib/content/types";

const entry: GlossaryEntry = {
  section: "glossary",
  slug: "print-queue",
  title: "Print Queue",
  description:
    "The print queue is the ordered list of jobs waiting to print on a particular printer.",
  summary:
    "The print queue holds and orders pending jobs for a printer. Clearing a stuck job in the queue is one of the most common printing fixes.",
  term: "Print queue",
  shortDefinition:
    "The ordered list of print jobs waiting to be printed on a specific printer.",
  body: [
    {
      kind: "paragraph",
      text: "A print queue is the list of jobs lined up for a particular printer. Jobs are normally released in order, and the queue is where you can see, pause, or cancel pending work.",
    },
    {
      kind: "paragraph",
      text: "A single stuck job can hold the whole queue, which is why clearing the queue and sending a fresh job is one of the most common and effective troubleshooting steps.",
    },
    {
      kind: "callout",
      tone: "tip",
      title: "First thing to check",
      text: "When printing stalls, inspect the queue for a stuck job before changing settings or reinstalling anything.",
    },
  ],
  seeAlso: [
    { section: "glossary", slug: "print-spooler" },
    { section: "troubleshooting", slug: "printer-offline-guide" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["print queue", "queue", "stuck print job", "printing"],
  cluster: "printing-fundamentals",
};

export default entry;
