import type { WorkflowEntry } from "@/lib/content/types";

const entry: WorkflowEntry = {
  section: "workflows",
  slug: "scan-to-searchable-pdf",
  title: "Scan to Searchable PDF",
  description:
    "A repeatable workflow for turning paper documents into searchable, archival PDF files using scanning and OCR.",
  summary:
    "This workflow describes how to convert paper documents into PDFs whose text can be searched, by combining a quality scan with optical character recognition.",
  goal: "Produce archival PDFs whose text is searchable and selectable.",
  toolsUsed: ["A scanner or multifunction device", "OCR-capable software"],
  body: [
    {
      kind: "paragraph",
      text: "A plain scan produces an image of a page. To make the document genuinely useful for archiving and retrieval, the text within that image must be recognised so it can be searched. This workflow is deliberately generic and not tied to any specific product.",
    },
    {
      kind: "steps",
      steps: [
        {
          title: "Prepare the document",
          text: "Remove staples, flatten folds, and order pages so the scan reflects the intended sequence.",
        },
        {
          title: "Scan at an adequate resolution",
          text: "Use a resolution high enough for reliable text recognition while keeping file size reasonable. Clean, high-contrast scans recognise more accurately.",
        },
        {
          title: "Apply OCR",
          text: "Process the scan with OCR-capable software so an invisible text layer is added beneath the page image.",
        },
        {
          title: "Verify and save as PDF",
          text: "Spot-check that text can be selected and searched, then save as a PDF so appearance and searchable text are preserved together.",
        },
      ],
    },
    {
      kind: "callout",
      tone: "tip",
      title: "Consistency",
      text: "Using the same resolution and naming convention across a batch keeps an archive predictable and easy to search later.",
    },
  ],
  related: [
    { section: "glossary", slug: "ocr" },
    { section: "tools", slug: "what-is-pdf" },
  ],
  faqs: [
    {
      q: "Does every scan become searchable automatically?",
      a: "No. A scan is an image until OCR is applied. Without OCR the document looks correct but its text cannot be searched.",
    },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["scan to pdf", "searchable pdf", "ocr", "document workflow"],
  cluster: "document-workflows",
};

export default entry;
