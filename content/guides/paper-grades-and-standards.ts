import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "paper-grades-and-standards",
  "title": "Paper Grades and Standards",
  "description": "Paper grades classify printing stock by pulp, coating, and use; standards like ISO 216 and ISO 536 define how paper's size and weight are measured.",
  "summary": "A paper grade is a category of printing stock defined by its furnish (pulp), manufacture, and characteristic properties for an intended use, while a paper standard is a documented specification or test method that lets a stock be sized, measured, and compared independent of supplier. This reference describes the main grade families, the two systems used to state paper weight (metric grammage under ISO 536 and North American basis weight), the dimensional size series (ISO 216 and the North American sizes), and the optical and physical property standards (ISO 2470 brightness, ISO 11475 whiteness, ISO 2471 opacity, ISO 534 thickness, and TAPPI methods) used to characterize paper. It also explains how the substrate's grade and measured properties shape print quality and handling. It is descriptive rather than a buying guide, and it cross-links the separate pages that cover paper defects and printing processes.",
  "difficulty": "intermediate",
  "estimatedTime": "10 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Definition and terminology"
    },
    {
      "kind": "paragraph",
      "text": "\"Paper grade\" and \"paper standard\" are two related but distinct ideas that this page treats together, because a grade is meaningful only once there are agreed ways to measure and specify it."
    },
    {
      "kind": "paragraph",
      "text": "A paper grade is a category of paper defined by its furnish (the pulp and additives it is made from), its manufacturing route, and a characteristic set of properties tied to an intended use. Grade names such as bond, book (text), offset, cover, newsprint, and bristol are shorthand for a bundle of expectations about weight, surface, opacity, and behaviour on press. Grade terminology is partly traditional and varies by region and supplier, so the boundaries between families are conventional rather than absolute."
    },
    {
      "kind": "paragraph",
      "text": "A paper standard is a documented specification or standardized test method — most often published by the International Organization for Standardization (ISO) or the Technical Association of the Pulp and Paper Industry (TAPPI) — that defines either a dimensional system (for example the ISO 216 size series) or a repeatable way to measure a property (for example grammage, brightness, or opacity). Standards let a buyer, printer, and paper mill describe the same stock unambiguously and verify it independently of any brand."
    },
    {
      "kind": "paragraph",
      "text": "This page describes the media itself — what a paper grade is, how grades are categorized, and how paper is measured. It is not about paper faults or printing processes: the paper-curl defect and the show-through and print-mottle defects are documented on their own pages, as are the inkjet, laser, and dye-sublimation processes. Those pages are cross-linked where relevant rather than repeated here."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What defines a grade: furnish, coating, and finishing"
    },
    {
      "kind": "paragraph",
      "text": "What separates one grade from another is largely decided before printing, in how the paper is pulped, formed, and finished."
    },
    {
      "kind": "list",
      "items": [
        "Furnish (pulp type). Mechanical pulps (groundwood) retain most of the wood's lignin; they yield bulky, lower-cost sheets that are prone to yellowing, and they dominate grades such as newsprint. Chemical pulps (kraft, sulphite) remove most of the lignin, producing brighter, more stable \"woodfree\" or \"freesheet\" papers used for higher-grade printing and writing. Recycled fibre and cotton (rag) furnishes define further grade families with their own strength and appearance characteristics.",
        "Coating. Applying a mineral coating (typically clay or calcium carbonate with a binder) creates a smoother, more uniform, and more receptive surface than the raw fibre network. Whether a paper is coated or uncoated — and, if coated, how it is finished — is one of the most consequential grade distinctions for print quality. The trade-offs between the two are covered in detail on the coated-versus-uncoated page.",
        "Internal sizing and fillers. Sizing agents govern how readily the sheet absorbs liquids, while mineral fillers (such as titanium dioxide, clay, and calcium carbonate) are added to scatter light and raise opacity and brightness.",
        "Finishing. Calendering — pressing the web between rollers — compacts the surface, reducing roughness and porosity and raising smoothness and gloss."
      ]
    },
    {
      "kind": "paragraph",
      "text": "A grade name is, in effect, a summary of these manufacturing choices and the property profile they produce."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common grade families"
    },
    {
      "kind": "paragraph",
      "text": "The following are broad, widely used grade families. The categories overlap, and exact usage differs between markets and suppliers, so they should be read as an orientation to the vocabulary rather than a rigid taxonomy."
    },
    {
      "kind": "list",
      "items": [
        "Bond and writing papers — general office, letterhead, and business use; usually uncoated.",
        "Book and text papers — lighter-weight stocks for the body pages of books, magazines, and brochures; available coated or uncoated.",
        "Offset papers — uncoated printing papers formulated for offset lithography.",
        "Coated printing papers — coated freesheet (chemical-pulp base) and coated groundwood (mechanical-pulp base) grades used where a smooth, high-fidelity surface is wanted, in matte, silk/satin, or gloss finishes.",
        "Cover and card stocks — heavier, stiffer paperboard-class stocks for covers, cards, and packaging.",
        "Bristol, index, and tag — stiff board grades used for tabbed dividers, index cards, tickets, and tags.",
        "Newsprint — inexpensive, bulky, mechanical-pulp paper for high-volume, short-life printing.",
        "Label, specialty, and process-specific media — self-adhesive label stock, and media engineered for a particular process such as inkjet photo paper, thermal media, and dye-sublimation transfer paper."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Process-specific media are engineered grades tuned to the way a given printer lays down its colorant; the inkjet-photo-paper, thermal-transfer, and related pages describe those interactions in depth."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How paper weight is stated: grammage and basis weight"
    },
    {
      "kind": "paragraph",
      "text": "Two different conventions are used to state \"how heavy\" a paper is, and confusing them is a common source of error."
    },
    {
      "kind": "paragraph",
      "text": "Grammage is the metric, size-independent measure: the mass of the sheet per unit area, expressed in grams per square metre (g/m²). It is standardized by ISO 536, which defines how grammage is determined, and by the corresponding TAPPI method T 410. Because grammage is normalized to area, it lets any two papers be compared directly regardless of their grade or sheet size."
    },
    {
      "kind": "paragraph",
      "text": "Basis weight is the traditional North American measure: the weight, in pounds, of a ream (500 sheets) of the paper cut to the basic size for its grade. The catch is that the basic size differs from grade to grade. According to the standard trade definitions, the basic size is 17 × 22 inches for bond, 25 × 38 inches for book (text), 20 × 26 inches for cover, 22.5 × 28.5 inches for bristol, 25.5 × 30.5 inches for index, and 24 × 36 inches for tag. Because each grade is weighed at a different basic size, papers from different grades that carry different pound numbers can have a similar mass per unit area — so basis weights are not comparable across grades, only within a grade. Grammage avoids this ambiguity, which is why it is the more portable specification. (A related figure, M weight, states the weight of 1,000 sheets at a given size.)"
    },
    {
      "kind": "paragraph",
      "text": "Weight should not be confused with thickness. A sheet's caliper (thickness) and its bulk (volume per unit mass) are separate properties measured on their own, and two papers of equal grammage can differ in caliper depending on furnish and finishing. Weight, caliper, and bulk are treated together on the paper-weight-and-caliper page."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Dimensional standards: paper sizes"
    },
    {
      "kind": "paragraph",
      "text": "Sheet dimensions are governed by standardized size series so that documents, printers, and envelopes interoperate."
    },
    {
      "kind": "paragraph",
      "text": "The international system is ISO 216, which defines the A, B, and C series used across most of the world. Its defining geometry is an aspect ratio of 1:√2 (about 1:1.414): halving a sheet across its long dimension yields two sheets of the next size down with the same proportions. The A series is anchored so that A0 has an area of one square metre, with each subsequent size (A1, A2, A3, A4, and so on) being half the area of the one before. The C series covers envelope sizes sized to hold the corresponding A-series sheet, and ISO 216 also provides for indicating the machine (grain) direction of the sheet."
    },
    {
      "kind": "paragraph",
      "text": "North America uses a separate set of loose sizes that are not part of ISO 216 — commonly Letter, Legal, and Tabloid/Ledger — together with the ANSI engineering series (ANSI A through ANSI E, where ANSI A corresponds to Letter). Because the two systems are built on different proportions, they do not scale into one another the way the ISO series does. The size series and their proportions are covered further on the paper-sizes page."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Optical property standards: brightness, whiteness, opacity, and gloss"
    },
    {
      "kind": "paragraph",
      "text": "Several standardized measurements describe how a paper interacts with light, which in turn drives how printed images look on it."
    },
    {
      "kind": "list",
      "items": [
        "Brightness. ISO brightness, defined by ISO 2470-1, is the diffuse reflectance factor measured in the blue region of the spectrum (an effective wavelength around 457 nm) and reported on a 0–100 scale, with higher values indicating a brighter sheet. TAPPI T 452 (GE brightness) measures a similar blue reflectance but under a directional 45°/0° geometry, so a GE brightness value and an ISO brightness value for the same paper are not interchangeable; TAPPI T 525 (diffuse brightness) instead uses the same diffuse geometry as ISO 2470 and was developed to correlate closely with ISO brightness.",
        "Whiteness. Whiteness is distinct from brightness: it is evaluated over the full visible spectrum and reflects how neutrally \"white\" the sheet appears, including any colour tint. CIE whiteness is standardized under ISO 11475 (using the D65 outdoor-daylight illuminant) and ISO 11476 (using illuminant C). Optical brightening agents (fluorescent whitening agents) absorb ultraviolet light and re-emit it in the visible blue range, raising a sheet's apparent brightness and whiteness; where strong brighteners are present, CIE whiteness values can exceed 100, and results depend on the ultraviolet content of the illumination, which is why the standards specify how that is controlled.",
        "Opacity. Opacity — how far the sheet prevents light passing through it — is standardized by ISO 2471 and the TAPPI T 425 contrast-ratio method. Opacity is the substrate property that most directly governs show-through in two-sided printing; it is covered on the paper-opacity and show-through pages.",
        "Gloss. Specular gloss, the mirror-like component of surface reflection, is measured by ISO 8254 and TAPPI T 480 at defined geometries (such as 75° or 20°), and distinguishes matte from silk and gloss finishes."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Brightness and whiteness are examined further on the paper-brightness-and-whiteness page."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Physical and structural standards, and test conditioning"
    },
    {
      "kind": "paragraph",
      "text": "Alongside the optical measures, a set of standards characterizes the sheet's mass, dimensions, surface, and mechanical behaviour."
    },
    {
      "kind": "list",
      "items": [
        "Mass and thickness. Grammage is measured under ISO 536 (TAPPI T 410). Thickness (caliper), apparent density, and specific volume are measured under ISO 534 (TAPPI T 411), from which bulk is derived. In North American practice caliper is often quoted in points or mils (thousandths of an inch), and in micrometres elsewhere.",
        "Surface roughness/smoothness. Surface is commonly assessed with air-leak methods — such as Bendtsen, Sheffield, and Parker Print-Surf (PPS) — or with the Bekk smoothness test, each reporting a characteristic value for how readily air escapes between the sheet and a reference surface.",
        "Strength. Mechanical properties are covered by their own methods, including tensile properties (ISO 1924) and folding endurance (ISO 5626), among others.",
        "Conditioning. Paper is hygroscopic: its dimensions and many of its properties change with moisture content. For results to be comparable, samples are conditioned and tested in a standard atmosphere. ISO 187 defines that atmosphere as 23 °C and 50 % relative humidity (within stated tolerances) and the conditioning procedure to reach it. The same moisture sensitivity that this conditioning controls is what drives dimensional change and paper curl in service — described on the paper-curl page."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Role in printing and relation to adjacent concepts"
    },
    {
      "kind": "paragraph",
      "text": "A paper's grade and its measured properties are among the strongest determinants of print outcome, because the substrate sets the terms for how ink or toner is received and how the result is seen."
    },
    {
      "kind": "list",
      "items": [
        "Colorant interaction. Absorbency and surface smoothness govern how much a printed dot spreads and sinks into the sheet — the substrate side of dot gain — and how evenly ink lies, which affects print mottle. Coated, smoother grades generally support sharper dots and a wider reproducible colour gamut than absorbent uncoated grades; the coated-versus-uncoated and dot-gain pages develop this.",
        "Appearance. Brightness, whiteness, and gloss set the contrast, apparent colour, and finish of the printed page, while opacity governs how much of the reverse side shows through in duplex work (see show-through and paper-opacity).",
        "Handling and feeding. Grammage, caliper, stiffness, and grain direction affect whether a sheet feeds, separates, and turns reliably through a paper path, and thus its tendency to jam or curl. This is why devices expose media-type settings and why the paper-feed-rollers and paper-curl pages matter to grade selection. In laser and other fusing processes, heavier stock generally needs the media type set correctly so fusing conditions match the sheet.",
        "Process-specific media. Some grades exist to suit a specific marking technology — inkjet photo paper tuned to dye- or pigment-based inks, thermal-transfer and label media, and dye-sublimation transfer paper — so the substrate and the process are chosen together (see inkjet-printing, pigment-based-ink, and thermal-transfer-ribbon)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Finally, standardization is what makes any of this portable: ISO 216 sizing plus a grammage figure lets sheets, printers, and envelopes fit together, and the ISO and TAPPI test standards let a stock be specified and verified without reference to a particular supplier's brand."
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This is a neutral technical reference describing paper/media types and properties and how they are measured. It is not a buying guide: it gives no brand product lines, prices, or model-specific compatibility, and any specific values are typical figures from the cited sources, not guarantees. The references consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "guides",
      "slug": "paper-weight-and-caliper"
    },
    {
      "section": "guides",
      "slug": "paper-sizes"
    },
    {
      "section": "guides",
      "slug": "coated-vs-uncoated-paper"
    },
    {
      "section": "guides",
      "slug": "paper-brightness-and-whiteness"
    },
    {
      "section": "guides",
      "slug": "paper-opacity"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between a paper grade and a paper standard?",
      "a": "A paper grade is a category of paper — such as bond, book/text, cover, or newsprint — defined by its pulp, manufacture, and typical properties for an intended use. A paper standard is a published specification or test method (for example ISO 216 for sizes, ISO 536 for grammage, or ISO 2470 for brightness) that lets a grade be sized, measured, and compared consistently regardless of who made it."
    },
    {
      "q": "What is the difference between grammage and basis weight?",
      "a": "Grammage is the metric measure of mass per unit area in grams per square metre (g/m²), standardized by ISO 536, and is comparable across any papers because it is normalized to area. Basis weight is the North American measure — the weight in pounds of a 500-sheet ream cut to a grade's basic size — and because the basic size differs by grade (for example 17 × 22 inches for bond versus 25 × 38 inches for book), basis weights are only comparable within the same grade, not across grades."
    },
    {
      "q": "How is paper brightness measured, and how does it differ from whiteness?",
      "a": "ISO brightness (ISO 2470-1) is the diffuse reflectance of blue light at an effective wavelength near 457 nm, reported on a 0–100 scale. Whiteness is a separate measure evaluated across the whole visible spectrum, capturing colour tint as well; CIE whiteness is standardized by ISO 11475 and ISO 11476. Optical brightening agents fluoresce ultraviolet light back as visible blue, which raises both apparent brightness and whiteness."
    },
    {
      "q": "Why does A4 have a 1:√2 proportion?",
      "a": "ISO 216, which defines the A, B, and C size series, uses a 1:√2 aspect ratio so that cutting a sheet in half across its long side produces two sheets of the next smaller size with exactly the same proportions. The A series is anchored so that A0 is one square metre in area, and each subsequent size is half the area of the previous one."
    },
    {
      "q": "Why does the paper grade affect print quality?",
      "a": "The substrate determines how ink or toner is received and how the result appears. A grade's absorbency and smoothness influence dot gain and mottle, its opacity governs show-through in two-sided work, and its brightness, whiteness, and gloss set contrast and finish. Grammage, caliper, stiffness, and grain direction also affect feeding, jamming, and curl, which is why devices provide media-type settings."
    }
  ],
  "sources": [
    {
      "title": "ISO 216:2007 — Writing paper and certain classes of printed matter — Trimmed sizes — A and B series, and indication of machine direction",
      "url": "https://www.iso.org/standard/36631.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 536:2019 — Paper and board — Determination of grammage",
      "url": "https://www.iso.org/standard/77583.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 534:2011 — Paper and board — Determination of thickness, density and specific volume",
      "url": "https://www.iso.org/standard/53060.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 2470-1:2016 — Paper, board and pulps — Measurement of diffuse blue reflectance factor — Part 1: Indoor daylight conditions (ISO brightness)",
      "url": "https://www.iso.org/standard/69090.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 2471:2008 — Paper and board — Determination of opacity (paper backing) — Diffuse reflectance method",
      "url": "https://www.iso.org/standard/39771.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 11475:2017 — Paper and board — Determination of CIE whiteness, D65/10 degrees (outdoor daylight)",
      "url": "https://www.iso.org/standard/63614.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 187:2022 — Paper, board and pulps — Standard atmosphere for conditioning and testing and procedure for monitoring the atmosphere and conditioning of samples",
      "url": "https://www.iso.org/standard/80311.html",
      "publisher": "ISO"
    },
    {
      "title": "Basis Weight",
      "url": "https://printwiki.org/Basis_Weight",
      "publisher": "PrintWiki"
    },
    {
      "title": "Basic Size",
      "url": "https://printwiki.org/Basic_Size",
      "publisher": "PrintWiki"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "paper grades",
    "paper standards",
    "grammage",
    "basis weight",
    "iso 216",
    "iso 536",
    "iso 2470 brightness",
    "iso 2471 opacity",
    "coated paper",
    "uncoated paper",
    "paper caliper",
    "printing substrate"
  ],
  "cluster": "paper-technologies"
};

export default entry;
