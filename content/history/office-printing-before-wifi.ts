import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "history",
  slug: "office-printing-before-wifi",
  title: "Office Printing Before Wi-Fi",
  description:
    "Before wireless, printing was a located, wired activity: cables fixed devices in place, and the office's topology decided who could print what.",
  summary:
    "Before wireless networking, a printer was not merely shared — it was somewhere. A cable bound a device to a port, a port to a place, and printing to the geography of the room. The pre-wireless story is about location: what a wire fixed in place, and what could not move because of it.",
  era: "Before the wireless office",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "Before wireless, a printer's location was a fixed property determined by cabling, and that location constrained who could print and from where.",
        "Desk layout, port placement, and cable runs were design decisions that encoded the office's printing topology into the building itself.",
        "Wireless did not make printing better so much as detach it from place — dissolving a constraint that had been invisible because it was universal.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "Printing as a wired, located activity",
    },
    {
      kind: "paragraph",
      text: "It is easy to forget that a printer used to have a place in the way a door has a place. A cable connected it either directly to a machine or to a network port in the wall, and that port was wired to a fixed point in the building. The consequence was categorical rather than incremental: a document could be produced only where a physical path of copper led to a device. Printing was not an action available everywhere; it was an action available at certain coordinates.",
    },
    {
      kind: "paragraph",
      text: "This located character is the single fact from which the rest of the pre-wireless story follows. The archive's account of printing in the 1990s describes the contention among people sharing a device; the prior, more basic constraint was that the device, and access to it, existed at a place a worker had to be physically and topologically connected to.",
    },
    {
      kind: "heading",
      level: 2,
      text: "How cables and ports shaped desk layout and behavior",
    },
    {
      kind: "paragraph",
      text: "Because connection was physical, the floor plan was a printing plan whether anyone called it that. A device had to sit within a cable's reach of a port; a desk that needed direct output had to be near the device or near a port of its own. Cable length, the position of wall ports, and the route a wire could take without crossing a walkway were not technicalities — they decided where printing capability existed and, by extension, which desks were well placed and which were marooned.",
    },
    {
      kind: "paragraph",
      text: "Worker behaviour adapted to this geography. People learned which device their desk was effectively bound to, and they routed work accordingly. Moving a team meant re-cabling, not just relocating chairs. The office's printing topology was, quite literally, built into the structure, and changing it was a physical project.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The print-server era and its queue culture",
    },
    {
      kind: "paragraph",
      text: "Networking improved the located world without abolishing it. A shared device reached over a wired network through a managing intermediary meant a worker no longer had to be cabled directly to the printer — only to the network that reached it. The intermediary that ordered and held jobs is the subject of the archive's guide to the print server, and the queue it maintained is defined in the archive's entry on the print queue. This was a real loosening: access widened from one cable to a wired network's worth of desks.",
    },
    {
      kind: "paragraph",
      text: "But the loosening was bounded by the same physical fact at a larger scale. The network itself was wired; a desk participated only if it had a live port and a cable to it. The queue culture that grew up here — submit, wait, collect — was orderly precisely because every participant was a fixed, identifiable, wired location. The system knew where everyone was because everyone was somewhere specific.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What mobility was impossible and why it mattered",
    },
    {
      kind: "paragraph",
      text: "The decisive limit was not speed or quality but motion. A device used away from a desk could not print where it was used; a worker in a meeting room, a corridor, or another floor was, for printing purposes, simply disconnected. This mattered more than it appeared, because it silently shaped where certain work was done: tasks that culminated in print were anchored to wired locations, so the building's cabling quietly determined where parts of the workday physically took place.",
    },
    {
      kind: "paragraph",
      text: "The constraint was invisible mainly because it was universal. When nothing prints away from a port, the inability to print away from a port is not experienced as a limitation; it is simply the nature of printing. It became legible as a constraint only once it was removed.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The trade-offs of the tethered office",
    },
    {
      kind: "paragraph",
      text: "The tethered arrangement was not merely a deficiency awaiting correction; it carried genuine compensating properties. A wired topology was predictable: a job's path was physical and traceable, the set of participants was bounded and known, and a device's location was a stable fact that administration and troubleshooting could rely on. The cost of that predictability was rigidity — capability fixed to coordinates, reconfiguration as a physical undertaking, and work anchored to where the cabling happened to be. The tethered office bought certainty with immobility.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "A note on dates",
      text: "This page describes a pre-wireless operational condition rather than a dated period. Wired and wireless arrangements overlapped for an extended time and shifted unevenly across organisations rather than at a single moment.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What wireless later dissolved",
    },
    {
      kind: "paragraph",
      text: "Wireless networking did not principally make printing faster or sharper; it removed location as a precondition. Once a job no longer required a physical path to be produced, the relationship between printing and the building's topology was severed, and with it the long chain of consequences described above: the cabling-as-floor-plan, the marooned desk, the meeting-room dead zone. The archive's history of wireless printing follows what replaced this condition. Read against the tethered office, that history is best understood not as an improvement to printing but as the detachment of printing from place — and, with it, the quiet loss of the predictability that being somewhere had guaranteed.",
    },
  ],
  faqs: [
    {
      q: "Why describe pre-wireless printing as a problem of location rather than speed or quality?",
      a: "Because the binding constraint was physical connection. A document could be produced only where a cable path reached a device, so location — not throughput or fidelity — determined who could print and from where, and shaped where parts of the workday happened.",
    },
    {
      q: "Did networked print servers remove the location constraint?",
      a: "They widened it rather than removed it. A worker needed only a connection to the wired network rather than a cable to the printer itself, but the network was still wired, so participation still required a fixed, live port. The constraint operated at a larger scale, not a different kind.",
    },
    {
      q: "What did the tethered office gain from being wired?",
      a: "Predictability. A wired topology made a job's path traceable, the set of participants bounded, and a device's location a stable fact for administration. The price of that certainty was rigidity: capability fixed to coordinates and reconfiguration as a physical project.",
    },
  ],
  related: [
    { section: "guides", slug: "what-is-a-print-server" },
    { section: "history", slug: "history-of-wireless-printing" },
    { section: "history", slug: "printing-in-the-1990s" },
    { section: "glossary", slug: "print-queue" },
  ],
  published: "2026-05-19",
  updated: "2026-05-19",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "office printing before wifi",
    "wired printing history",
    "print server era",
    "tethered office",
    "printing topology history",
  ],
  cluster: "office-printing-era",
};

export default entry;
