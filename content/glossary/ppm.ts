import type { GlossaryEntry } from "@/lib/content/types";

const entry: GlossaryEntry = {
  section: "glossary",
  slug: "ppm",
  title: "PPM (Pages Per Minute)",
  description:
    "PPM expresses how many pages a printer can output in one minute under defined conditions — a common measure of print speed.",
  summary:
    "PPM is a throughput measure: the number of pages a printer produces per minute. Quoted figures depend heavily on the test conditions used.",
  term: "PPM (pages per minute)",
  shortDefinition:
    "The number of pages a printer can output in one minute under stated test conditions.",
  body: [
    {
      kind: "paragraph",
      text: "PPM, or pages per minute, is the standard way printer throughput is described. It reflects sustained output speed once a job is running rather than the time to produce a single page from idle.",
    },
    {
      kind: "paragraph",
      text: "Quoted PPM values depend on the page content, colour versus monochrome output, paper size, and the measurement method. Simple text pages typically reach higher rates than pages with heavy graphics, and colour output is often slower than monochrome on the same device.",
    },
    {
      kind: "callout",
      tone: "tip",
      title: "First page out time",
      text: "PPM does not capture how long the first page takes to appear. For short jobs, first-page-out time can matter more than sustained PPM.",
    },
  ],
  seeAlso: [
    { section: "glossary", slug: "duplex-printing" },
    { section: "guides", slug: "how-laser-printers-work" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["ppm", "print speed", "throughput"],
  cluster: "printing-fundamentals",
};

export default entry;
