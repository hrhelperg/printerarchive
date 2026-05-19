import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "history",
  slug: "evolution-of-color-printing",
  title: "The Evolution of Color Printing",
  description:
    "How colour moved from a costly, specialist exception in the office to an unremarkable default — and what that normalisation cost.",
  summary:
    "For most of the office's history, colour was not a setting; it was a decision with a budget. The interesting question is not when colour printing appeared but why it stayed exceptional for so long, and what had to change in cost and workflow before it could become the unconsidered default it is now.",
  era: "Color becomes ordinary",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "Colour stayed exceptional in the office for economic and workflow reasons, not because the capability was unavailable.",
        "Producing colour once meant a separate process, a separate device, or an outside supplier — colour was a routed task, not a checkbox.",
        "Normalisation came when colour stopped requiring a decision; the cost and friction did not vanish, they were absorbed into the consumable model.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "Why early offices lived in monochrome",
    },
    {
      kind: "paragraph",
      text: "The everyday office lived in black and white for a long time, and the reason was not that colour was impossible. It was that colour was expensive in every dimension that mattered to an office: the equipment cost more, the consumables cost more, the output was slower, and the result was often reserved for documents important enough to justify the difference. Monochrome was not a limitation people resented so much as a baseline they did not question.",
    },
    {
      kind: "paragraph",
      text: "That baseline shaped document conventions. Emphasis was carried by weight, italics, rules, and layout rather than by hue, because designers and clerks alike worked within a palette of one. The monochrome office was a coherent system, not merely a colour one waiting to happen.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What color cost in workflow and money",
    },
    {
      kind: "paragraph",
      text: "The true cost of colour was rarely just the price of a cartridge. It was the workflow it imposed. A colour document might require a different device from the one on the floor, a different and slower print path, or routing to an outside print supplier with a lead time and a minimum quantity. Colour was therefore a routed task: a decision made before the document was produced, not a property toggled at the moment of printing.",
    },
    {
      kind: "pullquote",
      text: "Colour was not a setting on the page; it was a decision with a budget, a lead time, and often a different machine.",
    },
    {
      kind: "paragraph",
      text: "Because colour was a routed task, it carried a discipline. People asked whether a document needed colour, because needing it had consequences for time and money. The technical basis for how liquid-ink colour is laid down is covered in the archive's guide on how inkjet printers work; the point here is that the capability existed well before the economics let it become casual.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The shift from specialist output to everyday color",
    },
    {
      kind: "paragraph",
      text: "The shift was gradual and was driven by cost and convenience converging rather than by a single capability arriving. As colour-capable devices became affordable enough to sit where ordinary work happened, and as producing a colour page stopped requiring a separate process or supplier, the decision overhead fell away. The change that mattered was not that colour got better but that asking for it stopped being a question. The longer device-side arc of the technology that did most of this work is traced in the archive's evolution of inkjet printers.",
    },
    {
      kind: "paragraph",
      text: "Once the routing disappeared, colour migrated from the category of special output into the category of ordinary output. That migration is the actual subject of this page: not the invention of colour printing, but its loss of specialness.",
    },
    {
      kind: "heading",
      level: 2,
      text: "How color reset document expectations",
    },
    {
      kind: "paragraph",
      text: "Availability reset expectations, exactly as sharper text had done in the move away from impact printing. Once colour was routinely on hand, monochrome began to read as a deliberate constraint rather than the natural state of a document. Charts were expected to use colour to carry meaning; presentations and customer-facing material were expected to look produced. As with other capability ratchets in office printing, the new normal did not roll back once it was established.",
    },
    {
      kind: "paragraph",
      text: "This is the same expectation mechanism described in the archive's evolution of office printing, applied to hue rather than sharpness. A capability becomes available, becomes routine, then becomes the floor — and the office reorganises its sense of an acceptable document around it.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The constraints color printing still imposed",
    },
    {
      kind: "paragraph",
      text: "Normalisation did not abolish colour's costs; it relocated them. Colour consumables remained more involved than a single black supply, colour pages generally consumed more material, and the relationship between what appeared on a screen and what emerged on paper was never perfectly predictable, because addressable resolution and colour reproduction are bounded by the device and the medium. The archive's glossary entry on DPI explains why apparent detail and colour fidelity are constrained by addressable resolution rather than being unlimited.",
    },
    {
      kind: "paragraph",
      text: "There was also a quieter cost: when colour is free to use, it is also free to misuse, and the discipline that scarcity once enforced was lost along with the friction. Colour stopped being rationed, which was the goal — but the rationing had been doing some unacknowledged work in keeping documents legible.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "A note on dates",
      text: "This page describes the normalisation of colour by its economics and workflow rather than by specific dates or products. Colour capability and colour affordability arrived at very different times and progressed unevenly across document types, so the transition does not resolve to a single point.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Color as a normalized default",
    },
    {
      kind: "paragraph",
      text: "Colour reached its endpoint when it stopped being a category at all. A device that prints colour without being asked to, at a cost folded invisibly into ordinary running, has made colour a default rather than a choice — and a default is, by definition, something nobody decides. The remaining distinctions, including when colour is even worth the consumable difference, are practical rather than conceptual; the archive's comparison of laser and inkjet printers addresses those everyday trade-offs that persist underneath the now-invisible default.",
    },
  ],
  faqs: [
    {
      q: "Why did colour stay exceptional in offices for so long if the capability existed?",
      a: "The barrier was economic and procedural, not technical. Colour often meant a different or slower device, a separate process, or an outside supplier with lead times. It was a routed task with a budget, so it stayed a deliberate decision rather than a routine option.",
    },
    {
      q: "What actually made colour become ordinary?",
      a: "Cost and convenience converging rather than colour itself improving. When a colour page no longer required a separate process or supplier and colour-capable devices became affordable in ordinary workspaces, the decision overhead disappeared and colour lost its specialness.",
    },
    {
      q: "Did normalising colour remove its costs?",
      a: "No — it relocated them. Colour consumables remained more involved, colour pages used more material, and screen-to-page fidelity stayed imperfect because reproduction is bounded by the device and medium. What changed is that the cost was absorbed into ordinary running rather than decided per document.",
    },
  ],
  related: [
    { section: "guides", slug: "how-inkjet-printers-work" },
    { section: "history", slug: "evolution-of-inkjet-printers" },
    { section: "guides", slug: "laser-vs-inkjet-printers" },
    { section: "glossary", slug: "dpi" },
  ],
  published: "2026-05-19",
  updated: "2026-05-19",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "evolution of color printing",
    "color printing history",
    "color in the office",
    "monochrome to color",
    "color printing cost",
  ],
  cluster: "printing-evolution",
};

export default entry;
