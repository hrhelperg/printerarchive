import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "history",
  slug: "how-dot-matrix-printers-work",
  title: "How Dot Matrix Printers Work",
  description:
    "Dot matrix solved an office problem before it was a mechanism: cheap, durable, simultaneous multi-part copies created in the act of printing.",
  summary:
    "Dot matrix printing is usually explained pins-first. That inverts the history. The pins matter because of what they let an office stop doing — re-creating copies by hand. Understanding the mechanism only makes sense once you understand the procedure it was built to serve.",
  era: "The impact-printing era",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "Dot matrix is best understood by the office procedure it served — simultaneous multi-part copies — not by its pin mechanism alone.",
        "Forming the image by physical impact is what made carbon-set copies, durability, and very low running cost possible at once.",
        "Non-impact methods displaced dot matrix for general use but could not replicate the one capability that still preserves a residual niche.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "The office problem dot matrix was built to solve",
    },
    {
      kind: "paragraph",
      text: "Before any mechanism, there was a procedure. An office issuing an invoice or a dispatch note did not need one document; it needed several identical ones distributed to different parties — one to the customer, one filed, one to accounts — and producing those copies by transcription was slow and error-prone. The problem dot matrix addressed was not how to make a character look good. It was how to make several copies of a document come into existence in a single pass, on ordinary multi-part stationery, cheaply enough to do it for every transaction.",
    },
    {
      kind: "paragraph",
      text: "Holding that problem in view changes how the mechanism reads. Everything distinctive about the technology — the force, the noise, the coarse character, the continuous paper — follows from solving that specific procedural need rather than from an attempt to print well in the abstract.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What striking the page enabled day to day",
    },
    {
      kind: "paragraph",
      text: "A dot matrix printer forms each character from a small grid of points, struck onto the page by a column of fine pins driven through an inked ribbon. The detail that mattered operationally is the word struck. Because the image is made by force transmitted into and through the paper, that force can pass through an interleaved set of sheets and mark each one. The printer does not copy a document after making it; it makes the copies in the act of printing the original.",
    },
    {
      kind: "figure",
      image: {
        src: "/images/history/how-dot-matrix-printers-work--fujitsu-dl3300.jpg",
        alt: "A Fujitsu DL3300 dot matrix printer with continuous tractor-feed paper loaded",
        width: 1600,
        height: 1200,
        caption:
          "A dot matrix printer with continuous tractor-feed stationery — the durable, low-cost stock on which one pass could mark an interleaved multi-part set.",
        credit: {
          source: "Corvair, via Wikimedia Commons",
          url: "https://commons.wikimedia.org/wiki/File:Fujitsu_DL3300_dot_matrix_printer.JPG",
          license: "CC BY-SA 4.0",
        },
      },
    },
    {
      kind: "paragraph",
      text: "Day to day, this collapsed a multi-step clerical task into a single machine operation. The same property is treated from the broader mechanical angle in the archive's account of how impact printing worked; here the point is narrower and procedural — the strike was not a means of forming a letter so much as a means of producing a set.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The multipart-form workflow nothing else could do",
    },
    {
      kind: "paragraph",
      text: "This is the centre of the page, and it is worth stating as a categorical claim rather than a comparative one. Methods that form an image without striking the page cannot, by their nature, mark sheets they do not touch. A device that lays toner or ink onto one surface produces one printed surface; obtaining further copies requires a separate copying step. Dot matrix's multi-part capability was therefore not merely better at copies — it was a different category of operation, one the non-impact methods could not perform at all because the property depended on the very impact those methods removed.",
    },
    {
      kind: "paragraph",
      text: "An office built on transactional paperwork was, in effect, built on this capability. Forms were designed as multi-part sets, filing procedures assumed the copies arrived together, and the cost model assumed copies were free byproducts of printing rather than separate work. The workflow and the mechanism were a single system.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The operational limits operators accepted",
    },
    {
      kind: "paragraph",
      text: "The capability was bought with limits that offices accepted because the alternative was losing the capability. Driving pins hard enough to mark a carbon set is loud, and no acoustic measure changed the underlying physics. The image, assembled from a coarse field of struck points, was legible rather than refined. Speed was modest because each character was mechanically constructed. These were not regarded as faults to be tolerated until fixed; they were the known price of the one thing the machine did that nothing else did.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Why non-impact eventually displaced it",
    },
    {
      kind: "paragraph",
      text: "Non-impact methods displaced dot matrix wherever the multi-part capability was not the deciding factor — which was most general printing. For correspondence and reports, quiet operation and refined output mattered more than carbon copies, and there the comparison was decisive. The fuller account of that change is the archive's transition from impact to laser printing. The displacement was not the defeat of an inferior mechanism; it was the recognition that, for most documents, the property that justified impact was simply not needed, so its costs no longer bought anything.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "A note on dates",
      text: "This page describes a technological role and its supersession by principle rather than by specific years, products, or companies. Impact and non-impact methods coexisted for an extended period and shifted unevenly across uses rather than at a single moment.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Where dot matrix still survives and why",
    },
    {
      kind: "paragraph",
      text: "Dot matrix persists exactly where the displacing logic does not apply: settings whose procedures still depend on a carbon-set copy produced in one pass, on durable continuous stationery, in conditions where ruggedness and trivial running cost outweigh appearance. This is not nostalgia or inertia; it is the same categorical fact from the other direction. Because non-impact methods cannot, by principle, mark sheets they do not touch, any workflow genuinely built on that capability has no non-impact substitute. The archive's broader history of printers places this residue in context. Dot matrix did not survive by being better; it survived by being the only thing that does a particular job at all — which is also why it was worth understanding procedure-first.",
    },
  ],
  faqs: [
    {
      q: "Why explain dot matrix by its workflow rather than its pins?",
      a: "Because the pins exist to serve a procedure. The technology was built so an office could produce several identical copies in one pass on multi-part stationery. Its noise, coarseness, and continuous paper all follow from solving that need, so the procedure explains the mechanism rather than the reverse.",
    },
    {
      q: "Why can non-impact printers not replicate the multi-part copy?",
      a: "Because the copy depends on force passing through interleaved sheets. A method that forms an image without striking the page touches and marks only one surface, so it produces one printed sheet. Obtaining further copies requires a separate step, which is a different category of operation.",
    },
    {
      q: "Is dot matrix's survival just institutional inertia?",
      a: "No. It survives where workflows genuinely depend on a one-pass carbon-set copy on durable continuous stock. Since non-impact methods cannot perform that operation in principle, those workflows have no substitute, so the persistence is functional rather than habitual.",
    },
  ],
  related: [
    { section: "history", slug: "dot-matrix-printers-explained" },
    { section: "history", slug: "how-impact-printing-worked" },
    { section: "history", slug: "transition-from-impact-to-laser-printing" },
    { section: "glossary", slug: "thermal-printing" },
  ],
  published: "2026-05-19",
  updated: "2026-05-19",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "how dot matrix printers work",
    "dot matrix printing",
    "multipart form printing",
    "impact printer mechanism",
    "carbon copy printing history",
  ],
  cluster: "impact-and-early-digital",
};

export default entry;
