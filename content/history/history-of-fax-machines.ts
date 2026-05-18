import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "history",
  slug: "history-of-fax-machines",
  title: "The History of Fax Machines",
  description:
    "How the idea of sending images over a distance developed into the office fax machine and its eventual decline.",
  summary:
    "The concept of transmitting an image over a wire is older than many people assume. This overview traces fax from early image-transmission experiments to the standardised office machine and its gradual replacement by digital alternatives.",
  era: "From early image transmission to the digital decline",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "The principle of scanning an image and sending it over a wire predates modern electronics.",
        "Standardisation made fax interoperable between machines from different manufacturers.",
        "Fax declined as email and digital document exchange became dominant, but persists in some sectors.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "An old idea",
    },
    {
      kind: "paragraph",
      text: "The core idea behind fax — scanning an image line by line, sending a representation of it over a distance, and reconstructing it at the other end — was explored well before the familiar office machine existed. Early experiments demonstrated that images, not just signals, could be transmitted over wires.",
    },
    {
      kind: "heading",
      level: 2,
      text: "From experiment to practical device",
    },
    {
      kind: "paragraph",
      text: "Over time, image transmission moved from specialised experiments toward practical equipment. As telephone networks became widespread, fax found a natural medium: a document could be sent over an ordinary phone line to a machine that printed a copy at the destination.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Standardisation and the office boom",
    },
    {
      kind: "paragraph",
      text: "Fax became genuinely useful for business once machines from different makers could reliably communicate. Common standards defined how machines negotiated a connection and encoded pages, which allowed the office fax machine to become a routine fixture for sending contracts, forms, and signed documents.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Decline and persistence",
    },
    {
      kind: "paragraph",
      text: "As email and digital document exchange matured, the everyday need for fax fell sharply. Even so, fax has persisted in certain sectors where signed documents, established procedures, or regulatory expectations keep it in use, sometimes in software form rather than dedicated hardware.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "Why fax survived",
      text: "Fax persisted partly because it offered a simple, widely understood way to transmit a signed page without shared computer systems between sender and recipient.",
    },
    {
      kind: "timeline",
      events: [
        {
          period: "Early experiments",
          text: "Image transmission over wires is demonstrated in principle.",
        },
        {
          period: "Practical equipment",
          text: "Image transmission becomes usable equipment as telephone networks spread.",
        },
        {
          period: "Standardised office era",
          text: "Common standards make fax interoperable; the office fax machine becomes routine.",
        },
        {
          period: "Digital decline",
          text: "Email and digital exchange reduce everyday fax use, though it persists in some sectors.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "Is fax really older than computers?",
      a: "The underlying concept of transmitting an image over a wire was explored long before modern computers. The familiar office machine came much later.",
    },
    {
      q: "Why is fax still used at all?",
      a: "In some sectors, established procedures and the need to transmit signed documents without shared systems have kept fax in use, often as software rather than hardware.",
    },
    {
      q: "What made fax interoperable?",
      a: "Common standards defined how machines connected and encoded pages, allowing devices from different manufacturers to communicate.",
    },
  ],
  related: [
    { section: "fax", slug: "how-fax-machines-work" },
    { section: "history", slug: "history-of-printers" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["history of fax", "fax machine history", "image transmission"],
  cluster: "printing-history",
};

export default entry;
