import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  section: "guides",
  slug: "carbonless-paper",
  title: "Carbonless (NCR) Paper: How a Copy Is Made Without Carbon",
  description:
    "On a carbonless set the printer supplies only force. Microcapsules of colourless dye, an acidic developer ply, and the CB/CFB/CF stack make the copy.",
  summary:
    "This archive says on page after page that an impact printer marks the lower plies of a multipart form. None of those pages says what is on the lower plies. This one does, and the answer is mildly disorienting: on a carbonless set, the copy is not made by the printer. The printer supplies force and nothing else. The copy is made by the paper.\n\nThe underside of the top sheet carries millions of capsules a few micrometres across, each holding a colourless dye precursor dissolved in a high-boiling oil. The top face of the sheet beneath carries an acidic developer. Pressure bursts the capsules along the line of the stroke, the released fluid wicks into the receiving coating, and the precursor reacts with the acid and becomes visible. Nothing in that sequence is ink, and nothing in it is carbon. Everything else follows from it: why the plies are labelled CB, CFB and CF, why a set is three or four parts rather than fifteen, and why a ream does not slowly copy itself under its own weight.",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "The copy is a reaction between two coatings on two different sheets. The printer's only contribution is localised pressure.",
        "The capsules hold a colourless leuco dye precursor in a high-boiling solvent — NIOSH gives 3 to 6 micrometres across, at roughly 2 to 6 percent dye.",
        "Colour appears only against an acidic developer on the receiving ply: acid-treated clay typically in Europe, phenolic resin in the United States and Japan.",
        "Sets are built from CB (coated back), CFB (coated front and back) and CF (coated front). CFB is a middle sheet, not 'self-contained' paper.",
        "Inert spacer particles called 'stilts', sized larger than the capsules, carry the static load so a stack does not mark itself.",
        "The commercial history — the 1953 patent filings, Appleton's mills, the PCB emulsion solvent EPA dates to 1954–1971 — is more contested than popular accounts admit.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "The printer only supplies force",
    },
    {
      kind: "paragraph",
      text: "An impact printer, a typewriter and a ballpoint pen share the one property that matters here: each delivers a concentrated mechanical load to a small area of the top sheet. On a carbonless set that load is the whole of the printer's contribution. The mechanism deposits nothing on the lower sheets and never touches them. The stroke is a trigger; the image on ply two is manufactured locally, out of materials already lying in contact with each other.",
    },
    {
      kind: "paragraph",
      text: "This is why non-impact printing cannot make a carbonless copy: electrophotographic and inkjet processes form their image on the surface they address and apply no meaningful pressure beneath it, so the lower plies are never triggered. It is also why the part count of a set is bounded. Each ply absorbs some of the load and spreads what it passes on, so marks grow fatter and fainter down the stack until they stop being legible — not a rule about paper grades, but what happens to a point load travelling through compressible fibre.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What is actually inside the capsules",
    },
    {
      kind: "paragraph",
      text: "The coating on the back of the top sheet is neither ink nor pigment. The NIOSH hazard review of carbonless copy paper — DHHS (NIOSH) Publication No. 2001-107, still the most detailed public description of the construction — describes microcapsules between 3 and 6 micrometres in diameter, each enclosing a solution of colour former at roughly 2 to 6 percent in a high-boiling organic solvent. The solvent must boil high enough that the coating survives years in a warehouse without drying out, while staying mobile enough to wick the instant a capsule ruptures.",
    },
    {
      kind: "paragraph",
      text: "The colour formers NIOSH names are leuco dyes — leuco from the Greek for white — colourless in the closed form they are stored in. It lists triphenylmethanes, of which crystal violet lactone is the familiar example; xanthenes, the fluorans; and thiazines such as benzoyl leucomethylene blue. None of that liquid is visible. Rub the back of a top sheet hard against ordinary copier stock and you get an oily smudge and no colour at all.",
    },
    {
      kind: "archivalTable",
      caption:
        "What the two coatings contain, as described in the NIOSH technical chapter",
      headers: ["Coating", "Which face it sits on", "What the review lists"],
      rows: [
        [
          "Capsule (CB) coating",
          "Underside of a CB or CFB sheet",
          "Microcapsules 3–6 micrometres across; a 2–6% solution of colourless colour former in a high-boiling organic solvent; binder; inert spacer particles ('stilts') of starch, floc or arrowroot, sized larger than the capsules",
        ],
        [
          "Developer (CF) coating",
          "Top face of a CF or CFB sheet",
          "An acidic developer — acid-treated reactive clays typical in Europe, phenolic resins typical in the United States and Japan",
        ],
        [
          "Colour formers named",
          "Dissolved inside the capsules",
          "Triphenylmethanes (e.g. crystal violet lactone); xanthenes (fluorans); thiazines (e.g. benzoyl leucomethylene blue)",
        ],
      ],
      sources: [
        "NIOSH Hazard Review: Carbonless Copy Paper, DHHS (NIOSH) Publication No. 2001-107 — 'The Technology of CCP'",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "The developer ply, and why the halves are kept apart",
    },
    {
      kind: "paragraph",
      text: "The receiving surface carries an acidic developer, and the mark is the product of the two coatings meeting. In acid the leuco compound's closed lactone ring opens, its conjugated system extends, and it begins absorbing visible light. The developer is not a catalyst standing by; it is a reactant, deliberately coated onto a different sheet from the dye. That separation is the whole trick, and it is why every description of carbonless paper as 'invisible ink that develops on contact with air' is wrong in both halves of the sentence.",
    },
    {
      kind: "paragraph",
      text: "Which developer a sheet carries depends on where it was made. NIOSH records a geographic split — acid-treated reactive clays typical of European production, phenolic resins in the United States and Japan. Both are acidic solids dispersed in a binder and behave identically to a user; to a chemist, and to anyone studying occupational exposure, they are different materials, which is why the review distinguishes them.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Why a ream does not copy itself",
    },
    {
      kind: "paragraph",
      text: "Here is the question the mechanism as described cannot yet answer. A capsule coating and a developer coating spend their working life pressed face to face — in a pad, in a box, at the bottom of a full ream — and the sheet is sensitive enough to record a ballpoint stroke through four plies. Why does the weight of the paper above not develop the whole stack a uniform blue?",
    },
    {
      kind: "paragraph",
      text: "The answer is a component popular accounts almost universally omit. NIOSH describes inert spacer particles blended into the capsule coating, known in the trade as stilts: starch, floc or arrowroot, deliberately sized larger than the capsules. They stand proud of the coating and carry the load, so distributed static weight rests on the stilts while the capsules sit sheltered in the gaps beneath, uncompressed. A concentrated point load is another matter — a pen nib or a print wire exceeds locally what the stilts can bridge and crushes the capsules directly under it. The original record-sheet patent adds a related reason for discretising the fluid at all: in a crease, a crack propagates between capsules rather than through a continuous film.",
    },
    {
      kind: "heading",
      level: 2,
      text: "CB, CFB, CF: how a set is built",
    },
    {
      kind: "paragraph",
      text: "Because the two reactive coatings live on different sheets, a multipart set cannot be assembled from one kind of paper. It is assembled from three, and the abbreviations naming them describe only which faces are coated. A three-part set is CB / CFB / CF; a four-part set is CB / CFB / CFB / CF. Every additional intermediate copy costs one more CFB sheet and one more increment of pressure loss.",
    },
    {
      kind: "table",
      caption: "The three ply types and where each belongs in a set",
      headers: ["Ply", "Expansion", "Coating", "Position"],
      rows: [
        [
          "CB",
          "Coated back",
          "Capsules on the reverse face only; the front is plain writable paper",
          "Top sheet — takes the pressure, keeps the original",
        ],
        [
          "CFB",
          "Coated front and back",
          "Developer on the up-facing side, capsules on the down-facing side",
          "Any middle sheet — receives from above, transmits below",
        ],
        [
          "CF",
          "Coated front",
          "Developer on the top face only",
          "Bottom sheet — receives, transmits nothing",
        ],
      ],
    },
    {
      kind: "paragraph",
      text: "Plies are usually tinted in a fixed sequence so a clerk can identify a copy by colour, but that sequence is a convention of a market or an individual form printer rather than a standard. There is no universal meaning to a yellow second ply, and colour orders differ between countries and trades.",
    },
    {
      kind: "editorialAside",
      title: "CFB is not 'self-contained' paper",
      text: "These two are conflated constantly and they are different products. CFB is coated front and back — developer facing up, capsules facing down — and copies onto the sheet below it. Self-contained (also sold as self-copying) paper carries capsules and developer on the same face, so pressure develops an image on that sheet itself, with no receiving ply involved at all.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Where the mechanism came from — and what it did not invent",
    },
    {
      kind: "paragraph",
      text: "The founding documents are two United States patents filed on the same day, 30 June 1953, and assigned to The National Cash Register Company. US2730456, 'Manifold Record Material', names Barrett K. Green and Lowell Schleicher and issued on 10 January 1956; it covers the record sheet. US2800457, covering the encapsulation method rather than the sheet, names Green alone and issued on 23 July 1957. The split is worth stating, because the microencapsulation literature habitually cites 'Green, 1953' and drops Schleicher.",
    },
    {
      kind: "paragraph",
      text: "What the filings describe is the coacervate-walled capsule: microscopic pressure-rupturable capsules whose nucleus is an oily, water-immiscible printing fluid, enclosed in a gelled complex hydrophilic colloid shell formed by coacervation from two oppositely charged colloids in roughly equal proportion — gelatin and gum arabic in the preferred embodiment. US2730456 states explicitly that the enclosed fluid may carry colourless colour-reactants which mark only on contact with acid-sensitised paper. The chemistry described above is not a later reconstruction; it is in the 1953 filing, in the inventors' own words.",
    },
    {
      kind: "paragraph",
      text: "What the patents did not do is invent complex coacervation — a colloid phenomenon described long before anyone thought to coat it onto a business form, conventionally traced in the literature to Bungenberg de Jong and Kruyt in the late 1920s. The defensible claim for Green and Schleicher is narrower and more interesting than 'they invented microencapsulation': they made a coacervate-walled capsule manufacturable as a pressure-transfer record coating, and produced the first commercially successful microcapsule-based carbonless paper. Even 'the first paper that copied without carbon' outruns the evidence, since other pressure-sensitive and chemical-transfer record papers were being pursued and spirit and hectograph duplicating already existed.",
    },
    {
      kind: "callout",
      tone: "warning",
      title: "Three dates, routinely swapped",
      text: "The patents were filed in 1953 and granted in 1956 and 1957; commercial marketing began in 1954. 'Invented in 1954' and 'patented in 1953' are each half-right about a different event and wrong as stated. A frequently repeated exact first-sale date in March 1954 traces to a corporate press release rather than an archival record, and is not repeated here.",
    },
    {
      kind: "timeline",
      events: [
        {
          period: "Late 1920s",
          text: "Complex coacervation is described in the colloid-chemistry literature, conventionally credited to Bungenberg de Jong and Kruyt.",
        },
        {
          period: "30 June 1953",
          text: "US2730456 (Green and Schleicher, the record sheet) and US2800457 (Green, the encapsulation method) are both filed, assigned to NCR. Appleton Papers' SEC filing dates ACPC's joint work with NCR — on the development and production of carbonless paper — to the same year.",
        },
        {
          period: "1954",
          text: "NCR PAPER is marketed by NCR and manufactured by Appleton Coated Paper Company. EPA dates the use of PCBs in the manufacturing emulsion from this year.",
        },
        {
          period: "1956 and 1957",
          text: "US2730456 issues on 10 January 1956; US2800457 issues on 23 July 1957.",
        },
        {
          period: "1970–1971",
          text: "NCR acquires Appleton Coated Paper Company; the Appleton Papers division is formed the following year, per the company's SEC filing. EPA dates the end of PCB use in the emulsion to 1971.",
        },
        {
          period: "1987",
          text: "OSHA asks NIOSH to review the health effects reported in connection with carbonless copy paper.",
        },
        {
          period: "December 2000",
          text: "NIOSH's hazard review is confirmed, published as DHHS (NIOSH) Publication No. 2001-107.",
        },
        {
          period: "2017",
          text: "EPA's case summary describes a consent decree ending NCR's litigation over the Lower Fox River Superfund site, with costs the agency puts above $200 million.",
        },
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "The name is a trade mark, not a description",
    },
    {
      kind: "paragraph",
      text: "NCR PAPER was a trade name, and NCR stood for the National Cash Register Company — the assignee named on the patents. 'No Carbon Required' is a gloss retro-fitted to the initials afterwards: widespread, serviceable, and not their documented origin. The term has since genericised, and 'NCR paper' is now used across the trade for carbonless stock from any manufacturer, naming a construction rather than a producer.",
    },
    {
      kind: "paragraph",
      text: "'Carbonless' is equally specific about what it denies. It names the absence of the interleaved carbon-coated tissue a manifold set previously required between plies, not the absence of carbon. The dyes, the solvent, the binders and the capsule walls are all organic chemistry, and vendors who advertise the stock as 'carbon-free' are borrowing a word from a different conversation.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Who actually made it, and the solvent that followed",
    },
    {
      kind: "paragraph",
      text: "One of the most durable errors in this history is that NCR manufactured carbonless paper. NCR marketed it and held the patents; Appleton Coated Paper Company manufactured it, and by ACPC's own filed account the two worked together from 1953 on both development and production. Appleton Papers' corporate history, set out in its SEC Form 10-K under disclosure obligations rather than in a brochure, dates ACPC's founding to 1907 and records that 'In 1953, ACPC began working with NCR Corporation on the development and production of carbonless paper' and that in 1954 NCR began marketing its NCR PAPER brand 'which ACPC manufactured'. The same section dates NCR's acquisition of ACPC to 1970, the formation of the Appleton Papers division of NCR to 1971 — through the merger of ACPC with Combined Paper Mills — and the 1978 acquisition of that division's assets from NCR by Appleton, then a subsidiary of B.A.T Industries. It is a company's account of itself — but a filed one, and it preserves a division of labour most retellings collapse.",
    },
    {
      kind: "paragraph",
      text: "Both names appear together in the United States public record because of the solvent. EPA's case summary for the Lower Fox River Superfund site states that NCR developed 'pressure responsive record materials' for carbonless copy paper, and that 'From 1954 to 1971, PCBs were used in the emulsion to manufacture NCR copy paper.' The PCBs were capsule-emulsion chemistry — the carrier, not the colour former — and are not present in modern stock. EPA attributes the release to both the manufacture of NCR paper and its later recycling by various paper mills, via numerous wastewater discharge points, and the 2017 consent decree left NCR as the sole work party for the remaining sediment cleanup, at a cost the agency estimates above $200 million. Estimates of the PCB mass there differ substantially between EPA's own documents and the state figures cited in the natural-resource-damage record, so any tonnage belongs to the document it came from rather than being quoted as the number.",
    },
    {
      kind: "callout",
      tone: "warning",
      title: "What the health record does and does not say",
      text: "NIOSH 2001-107 is a hazard review: a synthesis of published literature and Federal Register submissions, prepared following a 1987 OSHA request and ending in recommended controls. It is neither a finding that carbonless paper causes illness nor a clean bill of health, and it is cited as both. Separately, bisphenol A has been used as a colour developer in some CF coatings as well as in thermal receipt paper — but the European restriction pursued through ANSES and ECHA targets thermal paper. Carbonless is a different construction with different free-developer availability, and thermal-paper exposure findings do not transfer to it wholesale.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "A modern sheet is not a 1954 sheet",
      text: "The gelatin and gum-arabic coacervate wall of the 1953 filings was in time substantially displaced in production by capsule walls of melamine-formaldehyde, urea-formaldehyde and polyurea chemistry — tougher, more uniform, better suited to high-speed coating. The architecture is unchanged, but the materials realising it are not the ones the inventors used, which is one reason the NIOSH review remains useful: it describes production practice rather than the founding patent.",
    },
    {
      kind: "researchInset",
      title: "Frequently misstated in the secondary literature",
      items: [
        "That the capsules contain ink. They contain a colourless colour former in solution; the mark is a reaction on the receiving ply.",
        "That NCR manufactured the paper. NCR marketed it and held the patents; Appleton Coated Paper Company manufactured it until NCR acquired ACPC in 1970, and by ACPC's own filed account the two worked together from 1953 on both development and production.",
        "That Green invented microencapsulation. Complex coacervation predates the patents by decades, and Schleicher — a named inventor on the sheet patent — is routinely dropped.",
        "That NCR was coined to mean 'no carbon required'. It was the National Cash Register Company; the expansion is a later gloss.",
        "That CFB means self-contained. CFB copies onto the ply below; self-contained paper carries both chemistries on one face and copies onto itself.",
        "That PCBs are a carbonless-paper ingredient, or that carbonless falls under the EU thermal-paper BPA restriction. EPA documents PCBs as an emulsion ingredient used from 1954 to 1971; the BPA restriction targets thermal paper.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "Reading this back onto the printer",
    },
    {
      kind: "paragraph",
      text: "Return to the sentence this page set out to unpack — that an impact printer produces several copies in one pass — and it reads differently. The printer is not producing copies; it is delivering precisely located mechanical impulses into a stack of chemically prepared sheets, each of which manufactures its own image from its own coatings. The strike is a signal; the sheets are the device. That also explains the form set's odd persistence. Offices moving to non-impact output did not lose a printer feature, they lost the ability to address a substrate, and no driver setting could restore it. Wherever multipart carbonless sets survived, an impact mechanism survived alongside them — not because the printer was better, but because the paper still needed hitting.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "Reference scope",
      text: "A neutral technical and historical reference on a paper construction. Chemistry and construction are drawn from the NIOSH hazard review and the original patents; corporate and environmental history is attributed to the SEC filing and EPA case summary it comes from. Where dates or attributions are disputed, the dispute is stated rather than resolved. Nothing here is health, safety, legal or purchasing advice.",
    },
  ],
  faqs: [
    {
      q: "Does the printer put ink on the second copy?",
      a: "No. The printer applies pressure to the top sheet only. The capsule coating on its underside ruptures under the stroke and releases a colourless solution, which reacts with an acidic developer coated on the top face of the sheet below. The copy is made by the two coatings, not by anything the printer deposits.",
    },
    {
      q: "What do CB, CFB and CF mean?",
      a: "They describe which faces are coated. CB is coated back — capsules on the reverse — and is the top sheet. CFB is coated front and back, developer facing up and capsules facing down, and serves as any middle sheet. CF is coated front, developer only, and is the bottom sheet. A three-part set is CB / CFB / CF.",
    },
    {
      q: "Why doesn't a stack of carbonless paper copy itself?",
      a: "Because of inert spacer particles called stilts. NIOSH describes starch, floc or arrowroot particles blended into the capsule coating and sized larger than the 3-to-6-micrometre capsules, so they stand proud of the surface and carry distributed static load. A concentrated point load from a pen or print wire exceeds what the stilts bridge locally and ruptures the capsules beneath it.",
    },
    {
      q: "Does NCR stand for 'no carbon required'?",
      a: "NCR was the National Cash Register Company, the assignee named on the 1953 patent filings. 'No carbon required' is a widely repeated gloss applied to the initials afterwards rather than their documented origin. The term 'NCR paper' has since genericised and is used for carbonless stock from any manufacturer.",
    },
  ],
  related: [
    { section: "guides", slug: "impact-printing" },
    { section: "history", slug: "how-dot-matrix-printers-work" },
    { section: "guides", slug: "dot-matrix-ribbon" },
    { section: "guides", slug: "synthetic-and-specialty-media" },
    { section: "guides", slug: "label-and-tag-media" },
    { section: "guides", slug: "paper-grades-and-standards" },
    { section: "guides", slug: "paper-weight-and-caliper" },
    { section: "guides", slug: "line-printing" },
  ],
  sources: [
    {
      title: "US2730456A — Manifold Record Material (Green and Schleicher)",
      url: "https://patents.google.com/patent/US2730456",
      publisher:
        "Google Patents / USPTO — assignee: The National Cash Register Company",
    },
    {
      title:
        "US2800457A — Oil-containing microscopic capsules and method of making them (Green)",
      url: "https://patents.google.com/patent/US2800457A/en",
      publisher: "Google Patents / USPTO",
    },
    {
      title:
        "NIOSH Hazard Review: Carbonless Copy Paper — DHHS (NIOSH) Publication No. 2001-107",
      url: "https://archive.cdc.gov/www_cdc_gov/niosh/docs/2001-107/default.html",
      publisher:
        "National Institute for Occupational Safety and Health / CDC (US federal, public domain)",
    },
    {
      title:
        "NIOSH Hazard Review: Carbonless Copy Paper — 'The Technology of CCP' (full-text transcription)",
      url: "https://en.wikisource.org/wiki/NIOSH_Hazard_Review:_Carbonless_Copy_Paper/The_Technology_of_CCP",
      publisher: "Wikisource transcription of the public-domain NIOSH original",
    },
    {
      title:
        "Case Summary: NCR Corporation Agrees to End Litigation and Complete PCBs Cleanup at Fox River Superfund Site",
      url: "https://www.epa.gov/enforcement/case-summary-ncr-corporation-agrees-end-litigation-and-complete-pcbs-cleanup-fox-river",
      publisher: "U.S. Environmental Protection Agency",
    },
    {
      title: "OSHA eTool — Hospitals: Administration: Carbonless Copy Paper",
      url: "https://www.osha.gov/etools/hospitals/administration/carbonless-paper",
      publisher: "Occupational Safety and Health Administration",
    },
    {
      title:
        "Appleton Papers Inc. Form 10-K (FY2010) — corporate history section",
      url: "https://www.sec.gov/Archives/edgar/data/0001144326/000114432610000004/form10-k.htm",
      publisher: "U.S. Securities and Exchange Commission, EDGAR",
    },
  ],
  published: "2026-08-26",
  updated: "2026-08-26",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "carbonless paper",
    "ncr paper",
    "carbonless copy paper",
    "cb cfb cf plies",
    "microcapsule",
    "leuco dye",
    "colour developer",
    "multipart form",
    "impact printing media",
    "self-contained paper",
    "stilts spacer particles",
  ],
  cluster: "paper-technologies",
  difficulty: "intermediate",
  estimatedTime: "9 min read",
};

export default entry;
