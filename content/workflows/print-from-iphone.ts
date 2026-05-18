import type { WorkflowEntry } from "@/lib/content/types";

const entry: WorkflowEntry = {
  section: "workflows",
  slug: "print-from-iphone",
  title: "Print From an iPhone",
  description:
    "A clear workflow for printing from an iPhone to a compatible printer using built-in, driver-free printing.",
  summary:
    "Printing from an iPhone normally uses Apple's built-in AirPrint, which requires no app or driver when the printer is compatible and on the same network. This workflow explains the dependable path.",
  goal: "Print a document or photo from an iPhone reliably without extra software.",
  toolsUsed: ["An iPhone", "An AirPrint-compatible printer", "A shared local network"],
  body: [
    {
      kind: "paragraph",
      text: "The most reliable way to print from an iPhone is the built-in print path, which uses AirPrint. When the printer supports AirPrint and is on the same local network, no app or driver is needed.",
    },
    {
      kind: "steps",
      steps: [
        { title: "Confirm the prerequisites", text: "Ensure the printer is AirPrint-capable, powered on, and connected to the same local network as the iPhone." },
        { title: "Open the share or print action", text: "In the app showing the content, choose the share or print option provided by the app." },
        { title: "Select the printer", text: "Choose the printer from the list. A compatible printer on the same network appears automatically." },
        { title: "Set options and print", text: "Adjust copies, range, or colour as needed, then confirm to send the job." },
      ],
    },
    {
      kind: "callout",
      tone: "tip",
      title: "If the printer doesn't appear",
      text: "Almost always the iPhone and printer are on different or isolated networks. Put both on the same main network and try again.",
    },
  ],
  faqs: [
    { q: "Do I need an app to print from an iPhone?", a: "Usually not. If the printer supports AirPrint and shares the network, the built-in print path works without an app or driver." },
    { q: "Why doesn't my printer show up?", a: "Most often the iPhone and printer are on different or isolated networks. Use the same main local network for both." },
    { q: "Can I print photos as well as documents?", a: "Yes. The same print path handles photos and documents from apps that offer a print or share action." },
  ],
  related: [
    { section: "mobile-printing", slug: "what-is-airprint" },
    { section: "troubleshooting", slug: "airprint-not-working" },
    { section: "workflows", slug: "mobile-office-printing" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["print from iphone", "airprint", "mobile printing", "iphone printing"],
  cluster: "mobile-printing",
};

export default entry;
