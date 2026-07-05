import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "history",
  slug: "enterprise-document-management",
  title: "Enterprise Document Management",
  description:
    "How organisations moved from filing cabinets to managing documents as governed records: captured, indexed, retrieved, retained, and disposed of by rule.",
  summary:
    "Enterprise document management is the history of treating a document not as a piece of paper but as a record with a lifecycle. The filing cabinet handled that lifecycle implicitly; scale broke the implicit version and forced an explicit one. The hard part was never storing documents — it was finding them again, and proving what had been kept and discarded.",
  era: "The managed-document enterprise",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "Enterprise document management treats a document as a record with a lifecycle — capture, index, store, retrieve, retain, dispose — rather than as loose paper.",
        "The difficult problem was never storage but retrieval: a document you cannot find again is effectively lost, which is why indexing and search are central.",
        "Records management adds obligation: retention schedules, legal holds, and disposal turn document handling into a matter of compliance and risk, not just convenience.",
      ],
    },
    {
      kind: "paragraph",
      text: "A filing cabinet already implements a document lifecycle; it just does so implicitly. A document is created, placed in a labelled folder, kept for as long as habit dictates, and eventually thrown out when space runs short. That works while the volume is small and the people who filed the documents are the people who retrieve them. Enterprise document management is what the implicit lifecycle becomes when neither of those conditions holds — when there are too many documents, across too many people and years, for memory and habit to manage. The history is the story of making the lifecycle explicit because scale had broken the implicit one.",
    },
    {
      kind: "heading",
      level: 2,
      text: "From the filing cabinet to the system",
    },
    {
      kind: "paragraph",
      text: "The filing cabinet fails quietly and then all at once. While an organisation is small, the person who needs a document is often the person who filed it, and shared conventions — this drawer, that colour, this naming — hold the system together. As volume grows and staff turn over, those conventions decay: folders are mislabelled, documents filed under one logic are sought under another, and the knowledge of where things are walks out the door with the people who held it. The motivation for a managed system is precisely this decay. A system replaces personal memory and local convention with an explicit, durable structure that does not depend on any individual still being present to find anything.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The document lifecycle",
    },
    {
      kind: "paragraph",
      text: "Making the lifecycle explicit means naming its stages and handling each deliberately. A document is captured — brought into the system, often by scanning paper into a digital form, the workflow described in the archive's account of scan to searchable PDF. It is indexed — described with enough information that it can be found later. It is stored so that it persists and is protected. It is retrieved when needed, ideally by anyone authorised rather than only its author. It is retained for a defined period, and finally it is disposed of when that period ends. The shift from the cabinet is that each of these steps becomes a designed process with rules, rather than something that happens by default and goodwill.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Why retrieval was the real problem",
    },
    {
      kind: "paragraph",
      text: "It is tempting to think the challenge of managing documents is storing them, but storage is the easy part; capacity can always be added. The genuinely hard problem is retrieval. A document that has been stored but cannot be found again is, for every practical purpose, lost — and at scale, things become unfindable not because they are missing but because nothing recorded how to locate them. This is why indexing sits at the centre of document management. Describing a document well enough to retrieve it, and increasingly making its full text searchable through optical character recognition — defined in the archive's glossary entry on OCR — is what separates a usable archive from an expensive pile. The value of a stored document is bounded by the ease of getting it back.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Records management and compliance",
    },
    {
      kind: "paragraph",
      text: "Beyond convenience sits obligation, and this is where document management becomes records management. Many documents must be kept for a defined period and then, often, deliberately destroyed; some must be preserved unaltered when a dispute requires it; and holding a document carries risk as well as value, because what an organisation retains can later be demanded of it. Retention schedules, legal holds, and controlled disposal turn document handling into a matter of policy and law rather than tidiness. The system is no longer only helping people find things; it is helping the organisation prove what it kept, what it discarded, and that it did both according to a rule.",
    },
    {
      kind: "archivalTable",
      caption:
        "Each property of the filing cabinet that scale defeats is what the managed system is built to replace.",
      headers: ["Filing cabinet (implicit)", "Managed system (explicit)"],
      rows: [
        [
          "Findable by the person who filed it",
          "Findable by anyone authorised, through an index",
        ],
        [
          "Kept by habit until space runs out",
          "Retained for a defined period by schedule",
        ],
        [
          "Discarded informally",
          "Disposed of, or held, under a rule that can be shown",
        ],
        [
          "Depends on personal memory and local convention",
          "Depends on durable structure independent of any individual",
        ],
      ],
    },
    {
      kind: "callout",
      tone: "note",
      title: "A note on dates",
      text: "This page describes document management by principle and lifecycle rather than by specific products, vendors, or years. Organisations adopted explicit systems gradually and unevenly, and the boundary between filing and managed records shifted over an extended period.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What enterprise document management became",
    },
    {
      kind: "paragraph",
      text: "The systems acquired many names over time and eventually merged into broader content and information management delivered as cloud services, but the underlying model has been remarkably stable. Capture, index, store, retrieve, retain, dispose: every later elaboration is a refinement of that lifecycle, not a replacement for it. What changed was capacity, search quality, and where the documents physically live; what did not change was the central insight that a document is a record with a life to be managed, and that the measure of a document system is whether you can find — and account for — what you put into it.",
    },
  ],
  faqs: [
    {
      q: "What is enterprise document management, in plain terms?",
      a: "It is the practice of treating a document as a record with a lifecycle — captured, indexed, stored, retrieved, retained, and disposed of by explicit rules — rather than as loose paper kept in a cabinet by habit. It exists because scale breaks the implicit lifecycle a filing cabinet relies on.",
    },
    {
      q: "Why is retrieval considered harder than storage?",
      a: "Because storage capacity can always be added, but a document that cannot be found again is effectively lost. At scale things become unfindable when nothing recorded how to locate them, which is why indexing and full-text search through OCR sit at the centre of any usable document system.",
    },
    {
      q: "How does records management differ from simply storing documents?",
      a: "Records management adds obligation. Documents must be retained for defined periods, sometimes preserved unaltered under legal hold, and deliberately disposed of afterwards. It turns document handling into a matter of policy and compliance — proving what was kept and discarded, and that both followed a rule.",
    },
  ],
  related: [
    { section: "workflows", slug: "scan-to-searchable-pdf" },
    { section: "glossary", slug: "ocr" },
    { section: "history", slug: "office-print-rooms" },
    { section: "history", slug: "print-servers-in-large-offices" },
  ],
  published: "2026-05-21",
  updated: "2026-05-21",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "enterprise document management",
    "document lifecycle",
    "records management history",
    "document retrieval and indexing",
    "office document storage",
  ],
  cluster: "office-infrastructure",
};

export default entry;
