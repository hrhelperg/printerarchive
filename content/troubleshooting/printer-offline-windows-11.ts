import type { TroubleshootingEntry } from "@/lib/content/types";

const entry: TroubleshootingEntry = {
  section: "troubleshooting",
  slug: "printer-offline-windows-11",
  title: "Printer Shows Offline on Windows 11",
  description:
    "A focused, safe sequence for resolving an offline printer status on Windows 11.",
  summary:
    "An offline status on Windows 11 usually means the system cannot currently confirm communication with the printer. This guide applies the general offline approach to Windows 11 specifics.",
  symptom: "Windows 11 reports the printer as offline and queued jobs do not print.",
  appliesTo: ["Windows 11", "USB and network printers", "Shared printers"],
  body: [
    {
      kind: "paragraph",
      text: "Offline status almost always means a communication or queue problem, not a broken printer. The general offline approach applies; this page focuses on the Windows 11 specifics.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "Related general guide",
      text: "For the device-agnostic version of this process, see the general printer offline guide; the steps below adapt it to Windows 11.",
    },
    {
      kind: "steps",
      steps: [
        { title: "Confirm printer state", text: "Check the printer is on, ready, and not in an error or sleep state on its own panel." },
        { title: "Verify connection and network", text: "For USB, reseat the cable. For network printers, confirm the printer and PC are on the same network." },
        { title: "Clear the print queue", text: "Open the printer's queue, cancel stuck jobs, and try a single new job. A blocked queue often forces offline status." },
        { title: "Check 'Use Printer Offline'", text: "In the printer's settings, ensure the printer is not manually set to use offline mode, and re-enable it for normal use." },
        { title: "Restart printer and PC", text: "Power the printer fully off and on, then restart the PC to re-establish the connection cleanly." },
        { title: "Re-add the printer", text: "If it remains offline, remove the printer entry and add it again so it is detected from a clean state." },
      ],
    },
    {
      kind: "callout",
      tone: "warning",
      title: "When to stop",
      text: "If the printer reports a hardware fault on its display, stop software steps and consult the device documentation.",
    },
  ],
  faqs: [
    { q: "Why does Windows 11 say my printer is offline?", a: "Usually the system cannot confirm communication: a connection issue, a stuck queue, or the printer manually set to offline mode." },
    { q: "What is 'Use Printer Offline'?", a: "A Windows setting that keeps the printer in offline mode. If enabled unintentionally, the printer stays offline until it is turned off." },
    { q: "Does clearing the queue help?", a: "Yes. A stuck job can hold the queue in an offline state; clearing it and sending a fresh job often restores operation." },
  ],
  related: [
    { section: "troubleshooting", slug: "printer-offline-guide" },
    { section: "troubleshooting", slug: "printer-not-detected-on-windows" },
    { section: "guides", slug: "how-printer-drivers-work" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["printer offline windows 11", "use printer offline", "windows 11 printing", "troubleshooting"],
  cluster: "troubleshooting",
};

export default entry;
