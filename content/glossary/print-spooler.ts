import type { GlossaryEntry } from "@/lib/content/types";

const entry: GlossaryEntry = {
  section: "glossary",
  slug: "print-spooler",
  title: "Print Spooler",
  description:
    "The print spooler is the system component that accepts print jobs and manages them while they wait to print.",
  summary:
    "The print spooler holds and orders print jobs so applications do not have to wait for the printer. It is a frequent factor in stuck or stalled printing.",
  term: "Print spooler",
  shortDefinition:
    "The system component that accepts print jobs and manages them in a queue while they wait to be printed.",
  body: [
    {
      kind: "paragraph",
      text: "The print spooler is the part of the operating system that receives print jobs from applications and holds them until the printer can process them. It lets an application hand off a job quickly instead of waiting for the printer.",
    },
    {
      kind: "paragraph",
      text: "Because all jobs pass through it, the spooler is a common point of failure: a stuck job in the spooler can hold up the queue and make a printer appear offline or unresponsive until the job is cleared.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "Spooler vs queue",
      text: "The spooler is the managing component; the queue is the ordered list of jobs it holds for a given printer.",
    },
  ],
  seeAlso: [
    { section: "glossary", slug: "print-queue" },
    { section: "guides", slug: "what-is-a-print-server" },
    { section: "history", slug: "spoolers-and-print-queues" },
    { section: "history", slug: "early-network-printing-systems" },
  ],
  published: "2026-05-18",
  updated: "2026-05-19",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["print spooler", "spooler", "print queue", "printing"],
  cluster: "printing-fundamentals",
};

export default entry;
