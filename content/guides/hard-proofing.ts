import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "hard-proofing",
  "title": "Hard Proofing",
  "description": "Hard proofing produces a physical, measurable color sample that predicts a defined print condition, governed for contract proofs by ISO 12647-7.",
  "summary": "Hard proofing is the production of a physical color sample that predicts what a defined printing process will produce for a given file. When manufactured to a formal standard — in practice ISO 12647-7 — and carrying a measurable control element, it becomes a contract proof: the agreed color reference between print buyer and supplier. This page covers the definition, documented history, the baseline/characterize/calibrate workflow, control strips such as the Ugra/Fogra Media Wedge and Idealliance control wedge, tolerance verification via CIEDE2000, where hard proofing sits in the prepress pipeline, its relationship to ICC color management and CMYK, associated printer technologies, common problems, advantages, limitations, and modern relevance alongside soft proofing.",
  "difficulty": "intermediate",
  "estimatedTime": "9 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Hard proofing is the production of a physical color sample — a \"hard copy\" — that predicts, as closely as a proofing system allows, what a defined printing process will produce for a given file. When a hard proof is manufactured to a formal standard and used as the agreed color reference between a print buyer and a print supplier, it is called a contract proof. The dominant international standard governing contract hard proofs is ISO 12647-7 (Graphic technology — Process control for the production of half-tone colour separations, proof and production prints — Part 7: Proofing processes working directly from digital data)."
    },
    {
      "kind": "paragraph",
      "text": "Hard proofing stands in deliberate contrast to soft proofing, in which the simulation is shown on a calibrated display rather than printed. Soft proofing has its own standards family: ISO 12646 (displays for colour proofing — characteristics) and ISO 14861 (requirements for colour soft-proofing systems)."
    },
    {
      "kind": "paragraph",
      "text": "Because ICC profiles, CMYK, halftoning/screening, and the raster image processor (RIP) each have dedicated PrinterArchive pages, this page treats them as prerequisites and cross-links to them rather than re-explaining them."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What it is / definition"
    },
    {
      "kind": "paragraph",
      "text": "A hard proof is a tangible printed sample used to preview and verify the intended final printed result before committing to a production press run. Two levels are worth distinguishing:"
    },
    {
      "kind": "list",
      "items": [
        "Hard proof (general): any physical, color-representative print sample used to preview the result.",
        "Contract proof: a hard proof produced to a formal specification (in practice ISO 12647-7) and carrying a measurable control element, so that its color fidelity can be verified numerically and it can serve as the agreed color reference between the parties."
      ]
    },
    {
      "kind": "paragraph",
      "text": "ISO 12647-7 specifies requirements for systems used to produce hard-copy digital proof prints intended to simulate a printing condition defined by a set of characterization data. Fogra describes its Contract Proof Creation (CPC) certification as attesting that a provider can produce a color-accurate proof in accordance with ISO 12647-7."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History where documented"
    },
    {
      "kind": "paragraph",
      "text": "Proofing predates digital contract proofing by decades. The following milestones are documented in Wikipedia's Prepress proofing article (a secondary source; brand and date specifics are attributed accordingly):"
    },
    {
      "kind": "list",
      "items": [
        "Late 1940s — first overlay proofing systems, using a separate colored sheet per process color.",
        "1965 — 3M introduced Color Key, an overlay system using pigmented UV-sensitive emulsions on polyester.",
        "1970s — laminate systems matured (3M Transfer Key, later Matchprint; DuPont Cromalin).",
        "1987 — the first Iris continuous-stream inkjet proofer was commercialized.",
        "Early 1990s — dye-sublimation proofers appeared (for example 3M Rainbow and the Kodak DCP9000).",
        "Late 1990s — laser thermal-transfer systems (for example Creo/Kodak Spectrum) able to reproduce actual press screening on the proof.",
        "~2005 — inline spectrophotometers built into inkjet proofers (for example the Creo Veris)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "On the standards side: the Ugra/Fogra Media Wedge control target has been used worldwide, in its different versions, since 1997. ISO 12647-7 exists in successive editions — 2007 (first edition), 2013, and 2016. The 2016 edition established CIEDE2000 (ΔE00) as the required basis for reporting color differences in conformance, replacing reliance on the earlier CIE ΔE\\*ab (CIELAB 1976) formula."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "A conformant hard-proofing workflow rests on three technical foundations:"
    },
    {
      "kind": "paragraph",
      "text": "1. Baselining — establishing stable, optimal device settings for the proofer, ink, and substrate combination. 2. Characterizing — printing and measuring a characterization target with a spectrophotometer to build an output profile of the proofer. 3. Calibrating — periodically re-adjusting so the device stays on its baseline."
    },
    {
      "kind": "paragraph",
      "text": "Once profiled, the proofing RIP performs color management so the proofer simulates the target print condition rather than printing its own native gamut. Critically, a control strip or media wedge is printed alongside every proof, then measured with a spectrophotometer; software compares the measured values against the aim values and tolerances of the standard and issues a pass/fail report. This measurement-and-verification loop is what separates a contract proof from a merely attractive print."
    },
    {
      "kind": "paragraph",
      "text": "Control strips / media wedges. The Ugra/Fogra Media Wedge CMYK (widely used in Europe) is the reference control target for ISO 12647-7 contract proofs. Earlier versions (V2.x) contained 46 patches; the current V3.0 contains 72 measuring patches at defined area coverages of C, M, Y, and K, and it retains all 46 legacy patches for backward compatibility. The Idealliance ISO 12647-7 Digital Control Wedge (widely used in North America) is an equivalent target: the 2013 three-row version has 84 patches and includes G7 gray patches, superseding the earlier two-row, 54-patch strip (2009 edition)."
    },
    {
      "kind": "paragraph",
      "text": "Tolerances and measurement. Verification is expressed in ΔE (color difference), evaluated over the media wedge across categories such as substrate/paper-white, primary solids (C, M, Y, K), average across all patches, maximum single-patch difference, gray balance, and, where present, spot-color deviation. In the 2016 edition, conformance color differences are reported as CIEDE2000 (ΔE00); for measured spot colors the cited tolerance is ΔE 2.5. The measurement condition (M0/M1/M2 per ISO 13655) must be stated on the proof. (This page does not publish specific substrate, average, maximum, or primary ΔE00 thresholds, which could not be confirmed against a primary source.)"
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the color/print pipeline"
    },
    {
      "kind": "paragraph",
      "text": "Hard proofing is a verification gate late in prepress — after content and layout are final and color separations exist, and before platemaking and the production press run. The flow can be sketched as:"
    },
    {
      "kind": "paragraph",
      "text": "design/layout → color separation (see CMYK) → RIP and color management (see raster image processor) → screening/halftoning (see halftoning) → hard proof produced and verified here → plates / press → production print."
    },
    {
      "kind": "paragraph",
      "text": "The proof's job is to answer, physically and measurably: if this file is run under a given printing condition, will the color be acceptable? A verified contract proof can then serve as the aim reference for pressroom make-ready."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to ICC profiles and CMYK"
    },
    {
      "kind": "paragraph",
      "text": "Hard proofing is fundamentally an ICC color-management application (see the ICC profiles page). The proofer is driven by two profiles:"
    },
    {
      "kind": "list",
      "items": [
        "a characterization / reference profile describing the target print condition being simulated, and",
        "an output profile of the proofer itself, built from measured characterization data."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The RIP maps file CMYK (or spot) values through these profiles so the proofer reproduces the target's appearance rather than its own native gamut. The media wedge is, in effect, a standardized set of CMYK area-coverage values whose measured colorimetry demonstrates that the whole ICC chain landed within tolerance. For the underlying color model itself, see the CMYK page; it is not re-derived here."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printer technologies"
    },
    {
      "kind": "paragraph",
      "text": "Hard proofing is device-agnostic in principle but has historically been tied to specific output technologies:"
    },
    {
      "kind": "list",
      "items": [
        "Inkjet (often large-format, sometimes with inline spectrophotometry) is the mainstream contract-proofing technology in current practice.",
        "Laminate and thermal-/dye-sublimation systems (for example DuPont Cromalin and 3M Matchprint) dominated earlier and persist in some workflows, notably packaging, where mocking up color on or near the actual substrate matters.",
        "Some laser thermal systems reproduced the actual press halftone screening on the proof (a \"screen proof\"), useful for catching moiré and rosette issues that continuous-tone inkjet proofs cannot show.",
        "Press proofs — printed on the production press or a comparable one — are the most representative hard proof but the most costly, and are a distinct category from prepress contract proofs."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Refer to the relevant PrinterArchive printer-technology pages (for example inkjet printing and dye-sublimation printing) rather than describing those mechanisms in depth here."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common problems"
    },
    {
      "kind": "list",
      "items": [
        "Substrate mismatch — proofing media can differ in white point and optical brighteners from the production stock; the M1 measurement condition (ISO 13655) exists partly to handle optical-brightener effects. A proof can pass on proofing media yet mispredict on the real stock.",
        "Out-of-gamut target — the proofer cannot reproduce colors present in the simulated condition or in the file.",
        "Metamerism / illuminant dependence — proof and press may match under one light and diverge under another; standardized viewing (ISO 3664) is required.",
        "Screening not represented — continuous-tone inkjet proofs do not show press moiré or rosettes unless a screen-proof workflow is used.",
        "Spot colors and special effects — metallics, fluorescents, varnishes, and many spot colors fall outside a CMYK proofer's gamut.",
        "Drift — proofer, ink lot, or measurement-device drift, and expired profiles, degrade accuracy without recalibration.",
        "Measurement-condition confusion — mixing M0/M1/M2 data leads to false pass/fail results.",
        "Version confusion — mismatched color-difference formulas or wedge versions can be mis-stated in reports."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Objective, measurable color agreement — a contract proof carries numeric ΔE evidence rather than only a subjective impression.",
        "Physical evaluation — color and detail (and, on production stock, the tactile substrate) can be assessed in hand under standard lighting.",
        "Contractual clarity — a defined, verifiable reference reduces disputes and costly on-press corrections.",
        "Press-setup aid — a verified proof can serve as the aim target for pressroom make-ready.",
        "Standardized and portable — ISO 12647-7 plus a media wedge means a proof made in one shop can be validated in another."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Limitations"
    },
    {
      "kind": "list",
      "items": [
        "Cost and time — slower and more expensive than soft proofing, with consumables (ink, certified media) adding cost.",
        "Not the press — a prepress proof simulates a condition and cannot capture every press variable; a press proof can, at higher cost.",
        "Gamut and effects ceilings — many spot colors, metallics, fluorescents, and finishing effects cannot be reproduced.",
        "Substrate approximation — proofing media rarely equals the production substrate exactly.",
        "Logistics — physical proofs must be shipped, making remote review slow.",
        "Maintenance burden — disciplined baselining, profiling, calibration, and spectrophotometer upkeep are required."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Hard contract proofing remains an accepted color-agreement mechanism in commercial, publication, and especially packaging print, where color is brand-critical and disputes are expensive. It coexists with soft proofing rather than being wholly replaced by it: soft proofing (ISO 14861, on ISO 12646 class-A/B displays) is faster, cheaper, and better suited to remote collaboration, but a display-based simulation is not universally accepted as the binding contractual reference that a measured ISO 12647-7 hard proof provides. The 2016 move to CIEDE2000 reflects ongoing refinement toward tolerances that better track human color perception."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Timeline"
    },
    {
      "kind": "timeline",
      "events": [
        {
          "period": "Late 1940s",
          "text": "First overlay proofing systems (Wikipedia, Prepress proofing)"
        },
        {
          "period": "1965",
          "text": "3M Color Key overlay system (Wikipedia, Prepress proofing)"
        },
        {
          "period": "1970s",
          "text": "Laminate systems mature: Transfer Key/Matchprint; Cromalin (Wikipedia, Prepress proofing)"
        },
        {
          "period": "1987",
          "text": "First Iris continuous-stream inkjet proofer commercialized (Wikipedia, Prepress proofing)"
        },
        {
          "period": "Early 1990s",
          "text": "Dye-sublimation proofers (3M Rainbow; Kodak DCP9000) (Wikipedia, Prepress proofing)"
        },
        {
          "period": "1997",
          "text": "Ugra/Fogra Media Wedge in use across its later versions (Fogra/Ugra)"
        },
        {
          "period": "Late 1990s",
          "text": "Laser thermal transfer with press-matched screening (Creo/Kodak Spectrum) (Wikipedia, Prepress proofing)"
        },
        {
          "period": "~2005",
          "text": "Inline spectrophotometry in inkjet proofers (Creo Veris) (Wikipedia, Prepress proofing)"
        },
        {
          "period": "2007",
          "text": "ISO 12647-7:2007 (first edition) (ISO)"
        },
        {
          "period": "2008",
          "text": "ISO 12646:2008 (displays for colour proofing) (ISO)"
        },
        {
          "period": "2013",
          "text": "ISO 12647-7:2013; Idealliance three-row 84-patch control wedge; Fogra Media Wedge V3.0 (72 patches) (ISO; Idealliance; Ugra/Fogra)"
        },
        {
          "period": "2015",
          "text": "ISO 14861:2015 (soft-proofing system requirements); ISO 12646:2015 (ISO)"
        },
        {
          "period": "2016",
          "text": "ISO 12647-7:2016 establishes CIEDE2000 (ΔE00) for conformance reporting (ISO; proof.de)"
        }
      ]
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This is a neutral technical and historical reference. Figures and dates are drawn from documented sources; it does not include current pricing, marketing claims, or product recommendations. The references consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "guides",
      "slug": "soft-proofing"
    },
    {
      "section": "tools",
      "slug": "pdf-x"
    },
    {
      "section": "guides",
      "slug": "printer-profiling"
    },
    {
      "section": "tools",
      "slug": "icc-profiles"
    },
    {
      "section": "tools",
      "slug": "cmyk"
    },
    {
      "section": "tools",
      "slug": "raster-image-processor"
    }
  ],
  "sources": [
    {
      "title": "ISO 12647-7:2016 — Graphic technology — Process control ... Part 7: Proofing processes working directly from digital data (scope)",
      "url": "https://www.iso.org/obp/ui/#iso:std:iso:12647:-7:en",
      "publisher": "ISO"
    },
    {
      "title": "ISO 12647-7:2007 (first edition record)",
      "url": "https://www.iso.org/standard/43428.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 12647-7:2013(en)",
      "url": "https://www.iso.org/obp/ui/#iso:std:iso:12647:-7:ed-2:en",
      "publisher": "ISO"
    },
    {
      "title": "ISO 12646:2015 — Displays for colour proofing — Characteristics",
      "url": "https://www.iso.org/standard/57311.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 12646:2008 — Displays for colour proofing — Characteristics and viewing conditions",
      "url": "https://www.iso.org/standard/44468.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 14861:2015 — Requirements for colour soft proofing systems",
      "url": "https://www.iso.org/standard/63540.html",
      "publisher": "ISO"
    },
    {
      "title": "Contract Proof Creation (CPC) certification",
      "url": "https://fogra.org/en/certification/prepress-technology/contract-proof-creation",
      "publisher": "Fogra"
    },
    {
      "title": "The Fogra Media Wedge CMYK (since 1997; contract-proof control medium)",
      "url": "https://fogra.org/en/shop/mediawedge-cmyk",
      "publisher": "Fogra"
    },
    {
      "title": "Ugra/Fogra Media Wedge CMYK V3.0 (46→72 patches)",
      "url": "https://www.ugra.ch/en/product/ugra-fogra-media-wedge-cmyk-3-0/",
      "publisher": "Ugra"
    },
    {
      "title": "Idealliance ISO 12647-7 3-Row Digital Control Wedge 2013 (84 patches)",
      "url": "https://connect.idealliance.org/viewdocument/idealliance-iso-12647-7-3-row-digi-1",
      "publisher": "Idealliance"
    },
    {
      "title": "Idealliance ISO 12647-7 Digital Control Strip 2009 (54-patch predecessor)",
      "url": "https://connect.idealliance.org/viewdocument/idealliance-iso-12647-7-digital-con",
      "publisher": "Idealliance"
    },
    {
      "title": "Proofs according to ISO 12647-7:2016 tolerances (CIEDE2000; spot ΔE 2.5)",
      "url": "https://proofing.de/proof-de-offers-proofs-according-to-the-latest-tolerance-criteria-of-iso-12647-72016/",
      "publisher": "proof.de"
    },
    {
      "title": "Prepress proofing (history, proof types, soft vs hard, workflow)",
      "url": "https://en.wikipedia.org/wiki/Prepress_proofing",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "hard proofing",
    "contract proof",
    "iso 12647-7",
    "ugra/fogra media wedge",
    "idealliance control wedge",
    "ciede2000",
    "hard proof",
    "color proofing",
    "prepress proofing",
    "spectrophotometer verification",
    "cmyk proof",
    "color management proof"
  ],
  "cluster": "color-management"
};

export default entry;
