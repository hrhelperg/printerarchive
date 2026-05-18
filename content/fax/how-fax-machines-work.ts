import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  section: "fax",
  slug: "how-fax-machines-work",
  title: "How Fax Machines Work",
  description:
    "How a fax machine scans a page, sends it over a telephone connection, and reconstructs it at the other end.",
  summary:
    "A fax machine converts a page into a sequence of light and dark information, sends that over a telephone connection, and the receiving machine reconstructs and prints the page.",
  difficulty: "introductory",
  estimatedTime: "6 min read",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "Faxing scans a page into light and dark information line by line.",
        "The two machines first negotiate how they will communicate.",
        "The receiving machine reconstructs the page from the transmitted information and prints it.",
      ],
    },
    {
      kind: "paragraph",
      text: "A fax machine sends a copy of a physical page to another machine over a telephone connection. Conceptually it scans, transmits, and then reprints the page at the destination.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Scanning the page",
    },
    {
      kind: "paragraph",
      text: "The sending machine moves the page past a sensor and reads it as a series of lines, recording where each line is light or dark. This turns the visual page into information that can be transmitted.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Negotiating the connection",
    },
    {
      kind: "paragraph",
      text: "Before sending the page, the two machines exchange signals to agree on how they will communicate. This negotiation is what allows machines from different makers to interoperate reliably.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Transmission and reconstruction",
    },
    {
      kind: "paragraph",
      text: "The page information is sent over the connection. The receiving machine reverses the process: it reconstructs the lines of light and dark and prints them, producing a copy of the original page.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "Why the connection sounds the way it does",
      text: "The distinctive tones at the start of a fax call are the two machines negotiating and synchronising before the page is sent.",
    },
  ],
  faqs: [
    {
      q: "What does a fax machine actually send?",
      a: "It sends information describing the page as a sequence of light and dark lines, not the paper itself.",
    },
    {
      q: "Why do fax machines make negotiation tones?",
      a: "Before transmitting, the machines exchange signals to agree how they will communicate and synchronise.",
    },
    {
      q: "How does the other machine produce a copy?",
      a: "The receiving machine reconstructs the transmitted line information and prints it, recreating the original page.",
    },
  ],
  related: [
    { section: "history", slug: "history-of-fax-machines" },
    { section: "history", slug: "history-of-printers" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["how fax machines work", "fax", "fax transmission", "scanning"],
  cluster: "printing-history",
};

export default entry;
