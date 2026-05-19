import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "history",
  slug: "early-network-printing-systems",
  title: "Early Network Printing Systems",
  description:
    "When a printer stopped belonging to one desk, a queue appeared — and with it an office etiquette, an informal authority, and norms that outlived the hardware.",
  summary:
    "Early network printing is usually told as a connectivity story. Its lasting product was social. The moment a device served many desks, a line formed, and with the line came waiting, courtesy, precedence, and an informal authority over the queue. The hardware changed; those norms stayed.",
  era: "The first shared-printer networks",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "Early network printing's durable legacy was social: a queue created etiquette, precedence, and informal authority over the line.",
        "Spoolers and servers did not only sequence jobs; they relocated control over order from people at a device to a system and its administrator.",
        "The behaviours and expectations formed here outlived the specific hardware and became permanent assumptions about shared printing.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "When a printer stopped belonging to one desk",
    },
    {
      kind: "paragraph",
      text: "The decisive moment in this story is not a wire being connected; it is a printer ceasing to be one person's and becoming everyone's. The instant a single device served many desks, something that had not existed before came into being: a line. A worker could no longer simply print, because someone else's work might be ahead of theirs. That sounds trivial and is not. A line is a social object as much as a technical one, and almost everything distinctive about shared office printing flows from the line rather than from the network beneath it.",
    },
    {
      kind: "paragraph",
      text: "The archive's account of office printing before Wi-Fi describes the wired topology that made shared devices reachable. This page takes up what happened among the people once they were sharing one — the part of the history that was about conduct rather than cabling.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The queue as a new office reality",
    },
    {
      kind: "paragraph",
      text: "The queue — defined in the archive's entry on the print queue — was a genuinely new feature of working life, not a technicality hidden inside a system. It made the order of work visible and contestable. A long job ahead of a short one meant the short one waited; a job submitted later but more urgent had no natural way to assert its urgency. The queue introduced, into the ordinary office, the small daily politics of any shared line: patience, frustration, the temptation to jump, and the question of whether jumping was acceptable.",
    },
    {
      kind: "paragraph",
      text: "What makes this historically significant is that the queue was not experienced as infrastructure. It was experienced as a situation among colleagues, and people responded to it the way they respond to any line — by forming norms.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Spoolers, servers, and who controlled the line",
    },
    {
      kind: "paragraph",
      text: "Underneath the social line sat a technical one. A spooler — the subject of the archive's entry on the print spooler — accepted jobs, held them, and released them to the device in order, so the device was never directly contended for. A server administered that arrangement for many users. The historically interesting consequence is about control rather than mechanism: deciding what printed next moved away from whoever was standing nearest the machine and toward the system and the person who administered it. Precedence stopped being something seized at the device and became something the system enforced and an administrator could shape.",
    },
    {
      kind: "paragraph",
      text: "This was a quiet transfer of authority. The queue did not only order jobs; it relocated the power to order them, from physical presence to systemic position — a shift whose broader workplace consequences the archive's evolution of office printing develops further.",
    },
    {
      kind: "heading",
      level: 2,
      text: "How sharing changed behavior and etiquette",
    },
    {
      kind: "paragraph",
      text: "Around the queue grew an unwritten etiquette that no system specified and everyone learned. Large jobs were, by custom, deferred or run at quiet times so as not to monopolise the line. Collecting promptly so output did not pile up, not disturbing other people's pages in the tray, and not casually cancelling work that was not yours became ordinary courtesies. Standing by the device for something urgent was a recognised, semi-legitimate way of asserting precedence the system did not grant. These norms were a social technology that grew up alongside the technical one to make a shared line tolerable.",
    },
    {
      kind: "paragraph",
      text: "The point worth holding is that this etiquette was emergent, not designed, and it was specific to sharing. It had no analogue in the per-desk arrangement because a private device needs no courtesy.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The reliability trade-offs of early networks",
    },
    {
      kind: "paragraph",
      text: "The arrangement that produced these norms also concentrated risk, and the etiquette partly existed because the consequences of disorder were now collective. When the device, the spooler, or the server faltered, it did not inconvenience one person; it stalled everyone whose work sat in the line, and a jammed or failed shared queue could halt a whole group's output at once. Sharing thus traded the per-desk world's redundancy — many small independent points of failure — for a single, efficient, but collectively critical one. The norms of restraint around the queue were, in part, a social response to the fact that careless behaviour now had shared cost.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "A note on dates",
      text: "This page describes the operational and social character of early shared-printer networks rather than specific years, products, or companies. Such systems were adopted gradually and unevenly across organisations rather than at a single datable moment.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What early network printing made permanent",
    },
    {
      kind: "paragraph",
      text: "The hardware of early network printing was superseded many times over, but its social product was not. Once people had learned that printing is a shared, queued, asynchronous act governed partly by courtesy and partly by a system, that understanding became the permanent default and every later arrangement inherited it. The expectation that one submits and waits rather than seizes, that large jobs are a collective consideration, that order is administered rather than grabbed — these outlived the specific spoolers and servers entirely. Early network printing's lasting contribution was not a technology but a settled set of norms about sharing a line, which is why its true history is social rather than mechanical.",
    },
  ],
  faqs: [
    {
      q: "Why describe early network printing as a social development rather than a technical one?",
      a: "Because its durable product was social. Connecting a device to many desks created a line, and the line produced waiting, courtesy, precedence, and informal authority. The hardware was superseded repeatedly; those norms about sharing a queue persisted and became the default.",
    },
    {
      q: "How did spoolers and servers change who controlled printing order?",
      a: "They moved control of precedence away from whoever stood nearest the device and into the system and its administrator. A spooler held and released jobs in order, so order became something the system enforced and could be shaped administratively rather than seized physically.",
    },
    {
      q: "Why did an unwritten printing etiquette emerge at all?",
      a: "Because sharing made disorder collectively costly. A failed or monopolised queue stalled a whole group, so customs — defer large jobs, collect promptly, do not cancel others' work — emerged as a social response to risk the per-desk arrangement never had.",
    },
  ],
  related: [
    { section: "guides", slug: "what-is-a-print-server" },
    { section: "glossary", slug: "print-spooler" },
    { section: "glossary", slug: "print-queue" },
    { section: "history", slug: "office-printing-before-wifi" },
  ],
  published: "2026-05-19",
  updated: "2026-05-19",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "early network printing systems",
    "print queue history",
    "print spooler history",
    "shared printer etiquette",
    "network printing history",
  ],
  cluster: "impact-and-early-digital",
};

export default entry;
