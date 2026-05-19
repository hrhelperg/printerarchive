import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "history",
  slug: "history-of-wireless-printing",
  title: "The History of Wireless Printing",
  description:
    "How removing the cable changed what a printer was for — from a fixed endpoint you walked to into a service any device could reach.",
  summary:
    "The cable was never just a wire. It was a constraint on where a printer could be, who could reach it, and what counted as a device allowed to print at all. Wireless printing's history is the story of that constraint being dismantled, and of the printer quietly changing from a fixed endpoint into an ambient service.",
  era: "Printing without the cable",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "The print cable was a topological constraint: it fixed the printer's location and limited which device could reach it.",
        "Removing the cable mattered less for tidiness than for decoupling the printer from a single machine and a fixed place.",
        "Driverless, networked standards completed the shift by letting devices print without per-device setup, making wireless the assumed default.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "The cable as a workflow constraint",
    },
    {
      kind: "paragraph",
      text: "A print cable looks like a minor piece of housekeeping. It was actually a rule. It said the printer lives within a cable's length of one computer, and that computer is the one that prints. Everything about how people shared a printer before networking was downstream of that single physical fact.",
    },
    {
      kind: "paragraph",
      text: "The constraint was topological, not merely tidy. A directly attached printer was bound to a place and, more limitingly, to a host. To print, work had to reach that host first. The cable did not just connect two devices; it defined the shape of who could print and from where.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What tethered printing made hard",
    },
    {
      kind: "paragraph",
      text: "Tethering made the obvious things awkward. A printer could not sit where it was convenient if that was not where its host was. A second computer could not simply use it. And a device that was not a conventional computer at all had effectively no way in.",
    },
    {
      kind: "paragraph",
      text: "Networking loosened the first two problems by turning the printer into a shared service rather than an attachment, a shift the archive examines in its evolution of office printing. But the network, in its early shared-office form, still largely assumed a managed environment and configured client machines. The cable's deepest assumption — that printing belonged to set-up computers — survived the move to networking and had to be dismantled separately.",
    },
    {
      kind: "heading",
      level: 2,
      text: "How driverless and networked standards changed expectations",
    },
    {
      kind: "paragraph",
      text: "The decisive change was not radio in itself. Radio removed the wire; it did not, by itself, remove the setup. The harder constraint was the per-device driver — the requirement that a machine be specifically prepared before it could print at all.",
    },
    {
      kind: "paragraph",
      text: "Driverless, discovery-based standards addressed exactly that: a device finds a printer on the network and prints without bespoke installation. The archive's guide to how wireless printing works explains the discovery-and-driverless mechanics; the historical point is that this is what finally retired the cable's surviving assumption. Once any capable device on the network could print without preparation, the printer stopped belonging to a privileged set of configured hosts.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Mobile work and the shifting role of the printer",
    },
    {
      kind: "paragraph",
      text: "This arrived alongside a change in what the typical device even was. When work moved onto phones and tablets — machines with no notion of installing a traditional driver — driverless printing was not a convenience but a precondition for printing to exist on them at all.",
    },
    {
      kind: "paragraph",
      text: "The printer's role inverted as a result. It had been a destination: a fixed point a configured computer sent work to. It became a discovered service that a transient device could use briefly and forget. Vendor approaches to that model, such as the one covered in the archive's account of AirPrint, are best understood as expressions of this inversion rather than as the cause of it; the same logic appears in the workflow archive's treatment of mobile office printing.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The trade-offs of convenience",
    },
    {
      kind: "paragraph",
      text: "Convenience was not free, and its costs were of a different kind than the cable's. A wire either worked or did not. A wireless path introduced discovery that can fail, network conditions that vary, and a printer reachable by anything on the network rather than by one cabled host.",
    },
    {
      kind: "callout",
      tone: "warning",
      title: "The reachability trade-off",
      text: "Removing the cable also removed an implicit access boundary. A directly attached printer could only be driven by its host; a discoverable wireless printer is, by design, reachable by other devices on the same network. Convenience and exposure are two faces of the same change, and the second is easy to overlook because the first is so visible.",
    },
    {
      kind: "paragraph",
      text: "There was a subtler cost too. When printing requires no setup and no thought, it also invites no thought, and the deliberation the cable's friction once imposed — is this device meant to print here, to this printer — quietly disappeared. As elsewhere in this archive, removing friction removed some incidental discipline along with it.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "A note on dates",
      text: "This page describes wireless printing by the constraints it dismantled and the standards-based capabilities that did so, not by specific dates, products, or companies. The relevant capabilities matured and were adopted unevenly rather than at a single datable moment.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Wireless as the assumed default",
    },
    {
      kind: "paragraph",
      text: "Wireless printing reached its endpoint when the cable became the exception that needs explaining. The expectation now is that a device can find a printer and use it without being wired to anything or prepared in advance; a tethered connection reads as a fallback. This is the same expectation ratchet seen across office printing, applied to connectivity: once the cable-free path was routine, it became the floor, and the office's sense of how printing should work reorganised around it. The decade in which the shared-office groundwork for this was laid is treated in the archive's account of office printing in the 1990s, which is where this story's preconditions sit.",
    },
  ],
  faqs: [
    {
      q: "Was wireless printing mainly about removing cable clutter?",
      a: "No. The cable was a topological constraint: it bound the printer to a place and to a single host. Removing it mattered because it decoupled the printer from one machine and one location, not because it tidied a desk.",
    },
    {
      q: "If networking already shared printers, what did wireless add?",
      a: "Early shared-office networking still largely assumed configured client machines. The cable's deepest assumption — that printing belonged to set-up computers — survived networking. Driverless, discovery-based standards were what finally removed that assumption.",
    },
    {
      q: "What did the convenience of wireless printing cost?",
      a: "A directly attached printer could only be driven by its host. A discoverable wireless printer is, by design, reachable by other devices on the same network. The exposure and the convenience are two faces of the same change, and it also removed the small deliberation the cable's friction once imposed.",
    },
  ],
  related: [
    { section: "guides", slug: "how-wireless-printing-works" },
    { section: "mobile-printing", slug: "what-is-airprint" },
    { section: "history", slug: "office-printing-in-the-1990s" },
    { section: "workflows", slug: "mobile-office-printing" },
  ],
  published: "2026-05-19",
  updated: "2026-05-19",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "history of wireless printing",
    "wireless printing history",
    "driverless printing",
    "tethered printing constraint",
    "mobile printing history",
  ],
  cluster: "printing-evolution",
};

export default entry;
