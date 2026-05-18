import type { TroubleshootingEntry } from "@/lib/content/types";

const entry: TroubleshootingEntry = {
  section: "troubleshooting",
  slug: "paper-jam-guide",
  title: "Paper Jam Guide",
  description:
    "How to clear a paper jam safely and reduce repeat jams, without forcing or damaging the printer.",
  summary:
    "Most paper jams are caused by media, loading, or worn pickup components. This guide explains how to clear a jam safely and how to reduce repeat jams.",
  symptom: "The printer reports a paper jam or stops feeding paper correctly.",
  appliesTo: ["Inkjet printers", "Laser printers", "All-in-one devices"],
  body: [
    {
      kind: "paragraph",
      text: "A paper jam is usually a media or feeding problem rather than a serious fault. The priority is to clear it without forcing parts, then to address why it happened.",
    },
    {
      kind: "callout",
      tone: "warning",
      title: "Safety first",
      text: "Power off the printer before reaching inside. Pull jammed paper slowly in the direction of the paper path and never yank it against the mechanism.",
    },
    {
      kind: "steps",
      steps: [
        { title: "Power off the printer", text: "Turn the printer off before opening covers or reaching inside, for safety and to avoid damage." },
        { title: "Locate the jam", text: "Open the covers the printer indicates and find where the paper is caught along the paper path." },
        { title: "Remove paper gently", text: "Pull the jammed sheet slowly and steadily in the natural direction of travel. Avoid tearing it; remove any small remnants." },
        { title: "Check for fragments", text: "Confirm no torn pieces remain in the path, as fragments cause immediate repeat jams." },
        { title: "Reload paper correctly", text: "Fan the stack, align it to the guides, and do not overfill the tray. Misaligned or overfilled trays are a common cause." },
        { title: "Power on and test", text: "Turn the printer back on and print a single test page to confirm normal feeding." },
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "Reducing repeat jams",
    },
    {
      kind: "list",
      items: [
        "Use media within the printer's supported weight and size range.",
        "Keep paper dry and flat; damp or curled paper jams more often.",
        "Do not overfill the tray and keep guides snug but not tight.",
      ],
    },
  ],
  faqs: [
    { q: "Why does my printer keep jamming?", a: "Common causes are unsuitable or damp media, overfilled or misaligned trays, torn paper fragments left in the path, or worn pickup components." },
    { q: "Should I pull jammed paper hard?", a: "No. Power off first and pull slowly in the direction of the paper path to avoid tearing paper or damaging the mechanism." },
    { q: "How do I stop repeat jams?", a: "Use supported, dry, flat media, avoid overfilling the tray, align the guides, and ensure no fragments remain in the path." },
  ],
  related: [
    { section: "troubleshooting", slug: "printer-printing-blank-pages" },
    { section: "troubleshooting", slug: "printer-offline-guide" },
    { section: "guides", slug: "how-laser-printers-work" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["paper jam", "clear paper jam", "printer jamming", "troubleshooting"],
  cluster: "troubleshooting",
};

export default entry;
