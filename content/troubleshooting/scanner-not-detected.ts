import type { TroubleshootingEntry } from "@/lib/content/types";

const entry: TroubleshootingEntry = {
  section: "troubleshooting",
  slug: "scanner-not-detected",
  title: "Scanner Not Detected",
  description:
    "A methodical, safe set of checks when a computer does not detect a scanner or all-in-one's scan function.",
  summary:
    "On an all-in-one device, printing can work while scanning is not detected, because scanning often uses a separate path. This guide isolates the cause step by step.",
  symptom: "The computer does not detect the scanner or the scan function of an all-in-one.",
  appliesTo: ["Standalone scanners", "All-in-one devices", "Network and USB connections"],
  body: [
    {
      kind: "paragraph",
      text: "Scanning and printing can use different software paths, so a device may print while its scanner is not detected. Work through these checks in order, re-testing each time.",
    },
    {
      kind: "steps",
      steps: [
        { title: "Confirm the device is ready", text: "Check the device is powered on, has no error state, and the lid or feeder is closed and clear." },
        { title: "Check the connection", text: "For USB, reseat the cable. For network devices, confirm the scanner is on the same network as the computer." },
        { title: "Try the scan path specifically", text: "Use the system's scan function or the device's own scan workflow, since printing working does not confirm scanning works." },
        { title: "Confirm same network for network scanning", text: "Network scanning generally requires the device and computer on the same local network, not a guest or isolated one." },
        { title: "Restart device and computer", text: "Power the device fully off and on, then restart the computer to clear temporary states." },
        { title: "Re-add the device", text: "Remove a stale device entry and add it again so both print and scan functions are detected freshly." },
      ],
    },
    {
      kind: "callout",
      tone: "note",
      title: "Printing working is not enough",
      text: "Because scanning often uses a separate path, confirm the issue using the scan function specifically rather than assuming a working printer means a working scanner.",
    },
  ],
  faqs: [
    { q: "Why does printing work but scanning doesn't?", a: "Scanning and printing can use different software paths, so one can fail while the other works. Test the scan path specifically." },
    { q: "Does network scanning need the same network?", a: "Yes, generally. The scanner and computer usually need to be on the same local network, not a guest or isolated one." },
    { q: "Should I re-add the device?", a: "Yes, if a stale entry is suspected. Removing and re-adding the device can restore detection of the scan function." },
  ],
  related: [
    { section: "workflows", slug: "scan-to-searchable-pdf" },
    { section: "glossary", slug: "scanner-bed" },
    { section: "troubleshooting", slug: "printer-not-detected-on-windows" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["scanner not detected", "scanner not found", "all-in-one scan", "troubleshooting"],
  cluster: "troubleshooting",
};

export default entry;
