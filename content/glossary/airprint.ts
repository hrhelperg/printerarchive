import type { GlossaryEntry } from "@/lib/content/types";

const entry: GlossaryEntry = {
  section: "glossary",
  slug: "airprint",
  title: "AirPrint",
  description:
    "AirPrint is Apple's built-in technology for printing from Apple devices to compatible printers over a local network without installing drivers.",
  summary:
    "AirPrint lets Apple devices print to compatible printers on the same network without separate drivers, by using standard network printing and discovery.",
  term: "AirPrint",
  shortDefinition:
    "Apple's driver-free network printing technology for printing from Apple devices to compatible printers.",
  body: [
    {
      kind: "paragraph",
      text: "AirPrint is a feature of Apple operating systems that allows printing from iPhone, iPad, and Mac to compatible printers on the same local network, without downloading or configuring printer-specific drivers.",
    },
    {
      kind: "paragraph",
      text: "It relies on standard networking: printers advertise themselves on the network and accept jobs in a common format. From the user's perspective, a compatible printer simply appears in the print dialog.",
    },
    {
      kind: "callout",
      tone: "tip",
      title: "Same network",
      text: "AirPrint generally requires the device and printer to be on the same local network and able to discover each other.",
    },
  ],
  seeAlso: [
    { section: "mobile-printing", slug: "what-is-airprint" },
    { section: "troubleshooting", slug: "airprint-not-working" },
    { section: "workflows", slug: "print-from-iphone" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["airprint", "mobile printing", "apple", "network printing"],
  cluster: "mobile-printing",
};

export default entry;
