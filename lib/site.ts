export type SectionId =
  | "history"
  | "guides"
  | "troubleshooting"
  | "brands"
  | "workflows"
  | "tools"
  | "glossary"
  | "mobile-printing"
  | "fax";

export interface SectionMeta {
  id: SectionId;
  label: string; // nav label
  title: string; // hub <h1>
  description: string; // hub meta + lede
}

export const SECTIONS: SectionMeta[] = [
  {
    id: "history",
    label: "History",
    title: "Printing History",
    description:
      "How printing, fax, and document technology developed over time.",
  },
  {
    id: "guides",
    label: "Guides",
    title: "Technology Guides",
    description:
      "Clear explanations of how printing and scanning technologies work.",
  },
  {
    id: "troubleshooting",
    label: "Troubleshooting",
    title: "Troubleshooting",
    description:
      "Structured, methodical fixes for common printing problems.",
  },
  {
    id: "brands",
    label: "Brands",
    title: "Printer Brands",
    description:
      "Reference overviews of major printer and imaging manufacturers.",
  },
  {
    id: "workflows",
    label: "Workflows",
    title: "Document Workflows",
    description:
      "Repeatable processes for scanning, printing, and document handling.",
  },
  {
    id: "tools",
    label: "Tools",
    title: "Tools & Formats",
    description:
      "Reference explanations of printing-related tools, formats, and standards.",
  },
  {
    id: "glossary",
    label: "Glossary",
    title: "Printing Glossary",
    description:
      "Definitions of printing, scanning, and document terminology.",
  },
  {
    id: "mobile-printing",
    label: "Mobile Printing",
    title: "Mobile Printing",
    description:
      "Printing from phones and tablets, including AirPrint and related standards.",
  },
  {
    id: "fax",
    label: "Fax",
    title: "Fax Technology",
    description: "How fax technology works and how it evolved.",
  },
];

export const site = {
  name: "PrinterArchive",
  legalName: "PrinterArchive.net",
  url: "https://printerarchive.net",
  tagline: "The internet archive of printing knowledge.",
  description:
    "PrinterArchive.net is an educational reference on printing, fax, scanning, mobile printing, document workflows, and the history of printing technology.",
  publisher: { name: "HELPERG LLC", email: "info@helperg.com" },
  sections: SECTIONS,
} as const;

export const getSectionMeta = (id: SectionId): SectionMeta => {
  const s = SECTIONS.find((x) => x.id === id);
  if (!s) throw new Error(`Unknown section: ${id}`);
  return s;
};
