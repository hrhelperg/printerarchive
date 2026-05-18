import type { TroubleshootingEntry } from "@/lib/content/types";

const entry: TroubleshootingEntry = {
  section: "troubleshooting",
  slug: "airprint-not-working",
  title: "AirPrint Not Working",
  description:
    "Why an AirPrint printer may not appear from an Apple device and a safe sequence to resolve it.",
  summary:
    "AirPrint problems are almost always discovery problems: the device and printer not sharing a network they can communicate over. This guide works through the likely causes.",
  symptom: "An AirPrint-capable printer does not appear when printing from an iPhone, iPad, or Mac.",
  appliesTo: ["AirPrint-capable printers", "iPhone, iPad, and Mac", "Home and small-office networks"],
  body: [
    {
      kind: "paragraph",
      text: "When AirPrint does not work, the printer is usually fine; the device simply cannot discover or reach it. Work through these checks in order.",
    },
    {
      kind: "steps",
      steps: [
        { title: "Confirm both support AirPrint", text: "Verify the printer is AirPrint-capable and is powered on and ready, with no error state on its panel." },
        { title: "Check the same network", text: "Confirm the Apple device and the printer are on the same local network. Different or guest networks are the most common cause." },
        { title: "Disable network isolation", text: "Client isolation or guest-network restrictions prevent discovery. Use the main network where devices can see each other." },
        { title: "Restart the printer", text: "Power the printer fully off and on so it re-advertises itself on the network." },
        { title: "Restart the Apple device's connection", text: "Toggle the device's Wi-Fi off and on so it rediscovers available printers." },
        { title: "Re-test from the print dialog", text: "Open the print dialog again and check whether the printer now appears before sending a job." },
      ],
    },
    {
      kind: "callout",
      tone: "tip",
      title: "Start with the network",
      text: "If you only check one thing, confirm the device and printer share the same non-isolated local network. That resolves most AirPrint issues.",
    },
  ],
  faqs: [
    { q: "Why doesn't my printer show up for AirPrint?", a: "Almost always because the Apple device and printer are on different networks, or the network isolates devices so they cannot discover each other." },
    { q: "Does AirPrint need a driver?", a: "No. AirPrint is driver-free; the issue is discovery and reachability, not missing software." },
    { q: "Why does toggling Wi-Fi help?", a: "It forces the device to rediscover printers on the network, which clears stale discovery state." },
  ],
  related: [
    { section: "mobile-printing", slug: "what-is-airprint" },
    { section: "glossary", slug: "airprint" },
    { section: "troubleshooting", slug: "printer-not-detected-on-mac" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: ["airprint not working", "airprint no printers found", "iphone printing", "troubleshooting"],
  cluster: "troubleshooting",
};

export default entry;
