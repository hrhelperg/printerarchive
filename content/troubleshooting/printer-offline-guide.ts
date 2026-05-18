import type { TroubleshootingEntry } from "@/lib/content/types";

const entry: TroubleshootingEntry = {
  section: "troubleshooting",
  slug: "printer-offline-guide",
  title: "Printer Shows Offline: A Methodical Guide",
  description:
    "A structured, safe sequence of checks for when a printer reports as offline and will not accept jobs.",
  summary:
    "When a printer shows as offline, the cause is usually communication between the computer and the printer rather than the printer itself. This guide works through the likely causes in order.",
  symptom: "The printer is reported as offline and does not print queued jobs.",
  appliesTo: [
    "USB-connected printers",
    "Network and Wi-Fi printers",
    "Shared office printers",
  ],
  body: [
    {
      kind: "paragraph",
      text: "An offline status almost always means the computer cannot currently confirm communication with the printer. Working through the most common causes in order resolves the majority of cases without guesswork.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "Work in order",
      text: "Change one thing at a time and re-test. Changing several things at once makes it hard to know what fixed the problem.",
    },
    {
      kind: "steps",
      steps: [
        {
          title: "Confirm power and basic state",
          text: "Make sure the printer is powered on, has no error lights, has paper, and is not in a paused or sleep state on its own panel.",
        },
        {
          title: "Check the physical or network connection",
          text: "For a USB printer, confirm the cable is firmly seated at both ends. For a network printer, confirm it is connected to the same network as the computer.",
        },
        {
          title: "Clear the print queue",
          text: "Open the print queue on the computer, cancel any stuck jobs, and try a single new test page. A stuck job can hold the queue in an offline state.",
        },
        {
          title: "Restart the printer and the computer",
          text: "Power the printer fully off and on, then restart the computer. This re-establishes the connection cleanly and clears temporary states.",
        },
        {
          title: "Re-select the correct printer",
          text: "Confirm the intended printer is set as default and that an offline or duplicate copy of the printer is not selected instead.",
        },
        {
          title: "Reconnect the printer to the network",
          text: "If it is a network printer, reconnect it to the network using its own panel or setup process, then send another test page.",
        },
      ],
    },
    {
      kind: "callout",
      tone: "warning",
      title: "When to stop",
      text: "If the printer reports a hardware fault on its own display, stop software troubleshooting and consult the device's documentation rather than forcing further attempts.",
    },
  ],
  faqs: [
    {
      q: "Does offline mean the printer is broken?",
      a: "Usually not. Offline most often indicates a communication problem between the computer and printer rather than a hardware failure.",
    },
    {
      q: "Why does clearing the queue help?",
      a: "A stuck job can hold the queue in an error or offline state, so removing it and sending a fresh job often restores normal operation.",
    },
    {
      q: "Should I reinstall the printer immediately?",
      a: "Reinstalling is a later step. Connection, queue, and restart checks resolve most offline cases and should be tried first.",
    },
  ],
  related: [
    { section: "mobile-printing", slug: "what-is-airprint" },
    { section: "guides", slug: "how-laser-printers-work" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "printer offline",
    "printer not printing",
    "troubleshooting",
    "print queue",
  ],
  cluster: "troubleshooting",
};

export default entry;
