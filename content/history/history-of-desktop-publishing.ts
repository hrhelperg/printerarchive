import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "history",
  slug: "history-of-desktop-publishing",
  title: "The History of Desktop Publishing",
  description:
    "How the production of a finished page collapsed from a multi-trade workflow into a single desk — and what that displaced.",
  summary:
    "Before desktop publishing, turning a manuscript into a finished page was a relay between specialists, each holding a step nobody else could do. Desktop publishing did not just add a tool; it collapsed that relay onto one desk, removing a bottleneck and, with it, a set of trades the office had depended on.",
  era: "The page on the desk",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "Producing a finished page was once a serial workflow across separate specialists, each a potential bottleneck and revision delay.",
        "Desktop publishing collapsed composition, layout, and proofing onto one desk by making the page a software artefact the operator controlled.",
        "The page-description model let what was seen on screen correspond to what a printer produced, which is the technical pivot the change rested on.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "Publishing before it reached the desk",
    },
    {
      kind: "paragraph",
      text: "Producing a professionally set page was once a sequence of distinct hands. Copy was written, then marked up, then set by someone who operated typesetting equipment, then laid out as physical artwork, then proofed, then corrected — which often meant returning to an earlier specialist and waiting. Each step lived with a different person or supplier, and the finished page existed only at the end of the relay. The page was not something an author could see until comparatively late, and changing it was expensive because it meant re-entering the chain.",
    },
    {
      kind: "paragraph",
      text: "This arrangement was not inefficiency for its own sake. Typesetting was a skilled trade with specialised equipment, and concentrating it made economic sense when the equipment was costly and the skill scarce. The structure was rational; it was simply slow and serial, and its seriality was the constraint.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The workflow bottleneck DTP removed",
    },
    {
      kind: "paragraph",
      text: "The bottleneck was the handoff. Every transfer between specialists added a queue and a revision cost: a change late in the process could unwind several earlier steps. Desktop publishing's central effect was to remove the handoffs by putting composition, layout, and proofing in the hands of one operator at one desk, where a change and its consequence could be seen immediately rather than after a round trip through suppliers.",
    },
    {
      kind: "timeline",
      events: [
        {
          period: "Authoring",
          text: "Copy is written, then handed onward for typesetting.",
        },
        {
          period: "Typesetting",
          text: "A specialist sets the text on dedicated equipment — a separate trade and a queue.",
        },
        {
          period: "Layout and paste-up",
          text: "Set text is assembled into page artwork by hand, another specialist step.",
        },
        {
          period: "Proof and correction",
          text: "Errors send the work back up the chain, repeating earlier steps and their delays.",
        },
        {
          period: "Desktop publishing",
          text: "Authoring, layout, and proofing collapse onto one desk; the relay becomes a single loop.",
        },
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "How the page-description model changed production",
    },
    {
      kind: "paragraph",
      text: "The change rested on a technical pivot: describing a page in a device-independent way so that a screen and a printer could agree on the result. When a page is a structured description rather than a physical paste-up, the operator can compose and revise on screen with confidence that the printed output will correspond. The archive's guide to PostScript printing explains the page-description idea that made this correspondence possible, and it is worth stressing that without that correspondence, desk-side composition would have been guesswork.",
    },
    {
      kind: "paragraph",
      text: "The other half of the pivot was an output device able to render that description at a quality close enough to typeset work to be acceptable for real use. That role fell to laser output, whose trajectory is the subject of the archive's evolution of laser printing; desktop publishing and affordable sharp output rose together because each was of limited use without the other.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What moved in-house and what that displaced",
    },
    {
      kind: "paragraph",
      text: "When the relay collapsed, work moved in-house — and so did decisions that had previously been made by trained specialists. An office could now produce its own newsletters, reports, and manuals without commissioning an outside chain. The gain was speed and control; the displacement was the typesetting trade and the layout craft, whose specialised judgement was now distributed to operators who had the tool but not necessarily the training. This is the same in-housing pattern visible across office printing, where capabilities steadily migrated from external suppliers and dedicated rooms onto ordinary desks.",
    },
    {
      kind: "paragraph",
      text: "It also connects to a broader move the archive treats in the transition from impact to laser printing: as output became sharp and local, the office stopped sending work out to be made to look finished and started expecting to make it look finished itself. Desktop publishing is the composition-side half of that same shift.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The trade-offs of democratized publishing",
    },
    {
      kind: "paragraph",
      text: "Democratising production traded craft consistency for access and speed. When typesetting was a trade, typographic conventions were enforced by people who knew them; when the page moved to every desk, the tool no longer guaranteed the judgement, and a great deal of available output was produced by people doing layout for the first time. The capability became universal faster than the discipline did — a recurring pattern when scarcity stops enforcing care, also noted in the archive's account of colour becoming an unconsidered default.",
    },
    {
      kind: "paragraph",
      text: "There was a compensating gain beyond speed: iteration became cheap. When revising a page no longer meant re-entering a supplier chain, documents could be improved through many quick passes rather than feared because each change was costly. That alone reshaped how seriously, and how often, ordinary documents were revised.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "A note on dates",
      text: "This page describes desktop publishing by the workflow it changed and the production model it introduced, not by specific dates, products, or companies. The component capabilities matured at different times and were adopted unevenly across organisations rather than at a single moment.",
    },
    {
      kind: "heading",
      level: 2,
      text: "DTP's lasting imprint on office work",
    },
    {
      kind: "paragraph",
      text: "The lasting imprint is an assumption, not a tool: that the person writing a document is also the person who lays it out, and that a finished-looking page is something an office produces rather than orders. That assumption is now so embedded it is invisible, which is the surest sign a transition has completed. Its dependence on resolution and faithful page description still surfaces in everyday practice, which is why the archive's guide to printer resolution remains the practical companion to this history.",
    },
  ],
  faqs: [
    {
      q: "What did desktop publishing actually remove from the workflow?",
      a: "The handoffs. Producing a finished page was a serial relay between writer, typesetter, layout artist, and proofing, each adding a queue and a costly revision loop. Desktop publishing collapsed those steps onto one desk so a change and its result could be seen immediately.",
    },
    {
      q: "Why was a page-description model essential to it?",
      a: "Desk-side composition only works if the screen and the printer agree on the result. Describing a page in a device-independent way gave that correspondence; without it, composing a page at a desk would have been guesswork against the final printed output.",
    },
    {
      q: "What was displaced when publishing moved in-house?",
      a: "The typesetting trade and the layout craft. The judgement those specialists held was distributed to operators who had the tool but not always the training, so the capability became universal faster than the typographic discipline did.",
    },
  ],
  related: [
    { section: "guides", slug: "what-is-postscript-printing" },
    { section: "history", slug: "evolution-of-laser-printing" },
    { section: "history", slug: "transition-from-impact-to-laser-printing" },
    { section: "guides", slug: "understanding-printer-resolution" },
  ],
  published: "2026-05-19",
  updated: "2026-05-19",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "history of desktop publishing",
    "desktop publishing workflow",
    "typesetting to DTP",
    "page description model",
    "in-house publishing",
  ],
  cluster: "printing-evolution",
};

export default entry;
