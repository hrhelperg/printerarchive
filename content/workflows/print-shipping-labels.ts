import type { WorkflowEntry } from "@/lib/content/types";

const entry: WorkflowEntry = {
  section: "workflows",
  slug: "print-shipping-labels",
  title: "Print Shipping Labels",
  description:
    "A practical, general workflow for printing clear, scannable shipping labels on standard or thermal printers.",
  summary:
    "Shipping labels must be sharp and scannable. This generic workflow covers correct sizing, media choice, and verification, without depending on any specific carrier or tool.",
  goal: "Produce clear, correctly sized, scannable shipping labels.",
  toolsUsed: ["A standard or thermal label printer", "Correctly sized label media", "The label file from your shipping tool"],
  body: [
    {
      kind: "paragraph",
      text: "A shipping label only works if it is the right size and sharp enough to scan reliably. This workflow is deliberately generic and not tied to any particular carrier or software.",
    },
    {
      kind: "steps",
      steps: [
        { title: "Match label size to media", text: "Confirm the label document's size matches the physical label media so the content is not scaled or cropped." },
        { title: "Disable scaling", text: "Print at actual size with any 'fit to page' or scaling option turned off, so barcodes keep correct proportions." },
        { title: "Choose appropriate media", text: "For frequent shipping, thermal label media is common; for occasional use, adhesive label sheets on a standard printer can work." },
        { title: "Print one test label", text: "Print a single label and confirm text is sharp and the barcode is crisp and complete before printing a batch." },
        { title: "Verify scannability", text: "Check the barcode is not faint, stretched, or clipped. A poor barcode is the most common cause of rejected labels." },
      ],
    },
    {
      kind: "callout",
      tone: "warning",
      title: "Do not scale barcodes",
      text: "Scaling or 'fit to page' can distort a barcode enough to make it unscannable. Always print labels at actual size.",
    },
  ],
  faqs: [
    { q: "Why is my shipping barcode not scanning?", a: "Most often the label was scaled or printed at the wrong size, or the print is faint. Print at actual size on suitable media and check sharpness." },
    { q: "Do I need a thermal label printer?", a: "Not necessarily. Frequent shippers often use thermal label printers; occasional users can print on adhesive label sheets with a standard printer." },
    { q: "Should I use 'fit to page' for labels?", a: "No. Scaling distorts barcodes. Always print labels at actual size with scaling disabled." },
  ],
  related: [
    { section: "glossary", slug: "thermal-printing" },
    { section: "history", slug: "thermal-printing-history" },
    { section: "guides", slug: "understanding-printer-resolution" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["print shipping labels", "shipping label printing", "barcode label", "thermal label"],
  cluster: "document-workflows",
};

export default entry;
