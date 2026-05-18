import type { TroubleshootingEntry } from "@/lib/content/types";

const entry: TroubleshootingEntry = {
  section: "troubleshooting",
  slug: "printer-not-detected-on-mac",
  title: "Printer Not Detected on a Mac",
  description:
    "A methodical, safe sequence of checks when a Mac does not detect or list a printer.",
  summary:
    "When a Mac cannot find a printer, the cause is usually connectivity or discovery rather than the printer itself. This guide works through the likely causes in order.",
  symptom: "A Mac does not detect or list the printer when adding or printing.",
  appliesTo: ["USB-connected printers", "Wi-Fi and network printers", "AirPrint-capable printers"],
  body: [
    {
      kind: "paragraph",
      text: "If a Mac will not detect a printer, the issue is most often connection or network discovery, not a hardware fault. Work through these checks one at a time and re-test after each.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "Change one thing at a time",
      text: "Make a single change, then re-test. Changing several things at once makes it hard to know what resolved the problem.",
    },
    {
      kind: "steps",
      steps: [
        { title: "Confirm the printer is on and ready", text: "Check the printer is powered on, has no error indicators, and is not in a sleep or error state on its own panel." },
        { title: "Check the connection", text: "For USB, confirm the cable is firmly seated at both ends. For network printers, confirm the printer is connected to the same network as the Mac." },
        { title: "Confirm same network", text: "Ensure the Mac is not on a different or guest network. AirPrint and network discovery generally require both on the same local network." },
        { title: "Re-add the printer", text: "In the system printer settings, remove any stale entry and add the printer again so it is rediscovered cleanly." },
        { title: "Restart printer and Mac", text: "Power the printer fully off and on, then restart the Mac to clear temporary discovery states." },
        { title: "Check network isolation", text: "If using a guest network or client isolation, switch to the main network, as isolation prevents the Mac from discovering the printer." },
      ],
    },
    {
      kind: "callout",
      tone: "warning",
      title: "When to stop",
      text: "If the printer reports a hardware fault on its own display, stop software steps and consult the device documentation rather than forcing further attempts.",
    },
  ],
  faqs: [
    { q: "Why can't my Mac find the printer?", a: "Most often the connection is loose, or the Mac and printer are on different or isolated networks, preventing discovery." },
    { q: "Do I need to install a driver?", a: "Often not, if the printer supports a driver-free standard. Connection and same-network checks should come first." },
    { q: "Does removing and re-adding the printer help?", a: "Yes. A stale printer entry can block detection; removing and re-adding forces a clean rediscovery." },
  ],
  related: [
    { section: "troubleshooting", slug: "printer-offline-guide" },
    { section: "troubleshooting", slug: "airprint-not-working" },
    { section: "guides", slug: "how-wireless-printing-works" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["printer not detected mac", "mac printer not found", "add printer mac", "troubleshooting"],
  cluster: "troubleshooting",
};

export default entry;
