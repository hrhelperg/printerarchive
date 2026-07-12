import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "paper-weight-and-caliper",
  "title": "Paper Weight and Caliper: Grammage, Basis Weight, and Thickness",
  "description": "Paper weight (grammage or basis weight) and caliper (thickness) are distinct print-media properties, measured under ISO 536, ISO 534 and TAPPI methods.",
  "summary": "Paper weight and caliper are two separate physical properties of paper and board as a printing substrate: weight describes mass (as grammage in g/m² or as basis weight in pounds per ream), while caliper describes the thickness of a single sheet. Because they measure different quantities, a sheet can be heavy without being thick, and the ratio between the two defines density and bulk. This reference explains how each property is defined and measured under recognized standards such as ISO 536, ISO 534, and the TAPPI test methods, and how both affect handling and print quality.",
  "difficulty": "intermediate",
  "estimatedTime": "9 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Definition and scope"
    },
    {
      "kind": "paragraph",
      "text": "Paper weight and caliper are two distinct physical properties used to characterize paper and board as a printing substrate. \"Weight\" refers to the mass of the material, expressed either as grammage (mass per unit area) or as basis weight (mass of a defined number of sheets). Caliper refers to the thickness of a single sheet. Because these two figures measure fundamentally different quantities — mass versus distance — they are not interchangeable: a sheet can be relatively heavy without being especially thick, and vice versa."
    },
    {
      "kind": "paragraph",
      "text": "Both properties usually appear at the top of a paper's technical data sheet, and both influence how a substrate feeds and transports through a printer or press and how ink or toner is received on the surface. This page describes the properties themselves and the standardized methods used to name and measure them; it is a descriptive reference rather than a buying guide. Specific defects and processes are covered on their own pages and are cross-linked below rather than repeated here."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Weight: grammage and basis weight"
    },
    {
      "kind": "paragraph",
      "text": "Paper weight is quantified in two parallel systems that describe the same underlying idea — area density, or mass per unit of area — in different units."
    },
    {
      "kind": "list",
      "items": [
        "Grammage is the mass per unit area, expressed in grams per square metre (g/m², commonly written \"gsm\"). It is independent of thickness and is the measure used in most of the world. Its determination is specified by ISO 536, Paper and board — Determination of grammage, and by the equivalent TAPPI/ANSI T 410 test method.",
        "Basis weight is the convention used in the United States and a few other markets. It expresses weight as pounds per ream — 500 sheets by standard definition — of a sheet cut to that grade's basic size. A related figure, M weight, gives the mass of 1,000 sheets (two reams) and is derived directly from basis weight."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The key subtlety of basis weight is that the basic size differs from one grade to another, so an identical pound figure does not represent an identical mass across grades. Commonly cited basic sizes include roughly 17 × 22 in for bond and writing papers, 25 × 38 in for book/text papers, and 20 × 26 in for cover stock. As a result, a \"20 lb\" bond and a \"50 lb\" text paper can be similar in actual mass per unit area even though their pound labels differ. Grammage avoids this ambiguity because it is grade-independent; converting a pound figure to gsm requires knowing which grade's basic size applies."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Caliper: thickness, mils, and points"
    },
    {
      "kind": "paragraph",
      "text": "Caliper is the thickness of a single sheet. In metric usage it is expressed in micrometres (µm); in US usage it is often given in mils (thousandths of an inch, where 1 mil = 1/1000 in). Paperboard thickness is frequently quoted in \"points,\" a unit in which 1 point equals 1/1000 in, so a board described as, for example, \"12 pt\" is 0.012 in thick."
    },
    {
      "kind": "paragraph",
      "text": "Because paper is compressible, caliper is meaningful only when the measuring pressure is specified. The property is measured with a precision micrometer that applies a defined static load over a defined contact area for a defined dwell time. Two standards govern the measurement:"
    },
    {
      "kind": "list",
      "items": [
        "ISO 534, Paper and board — Determination of thickness, density and specific volume, which specifies two approaches: measuring a single sheet (single-sheet thickness) and measuring a stack (bulking thickness).",
        "TAPPI/ANSI T 411, Thickness (caliper) of paper, paperboard, and combined board, which likewise uses an automated micrometer under a specified static load (50 kPa in that method). The relatively high pressure makes the method unsuitable for very soft or low-density materials such as tissue, whose structure can collapse under load."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Because the applied pressure influences the reading, caliper values are comparable only when measured to the same method."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Bulk, density, and specific volume"
    },
    {
      "kind": "paragraph",
      "text": "Weight and caliper together define how tightly the fibres and fillers are packed. Paper density is calculated by dividing grammage by caliper (for example, g/m² divided by micrometres), and its inverse — often called bulk or specific volume — describes how much thickness a sheet delivers per unit of mass. ISO 534 covers not only thickness but also the calculation of apparent sheet density and apparent specific volume."
    },
    {
      "kind": "paragraph",
      "text": "This relationship explains why two sheets of identical grammage can have noticeably different caliper. A high-bulk, lightly calendered, uncoated sheet is thicker per gram, while a dense, heavily calendered or coated sheet is thinner per gram. Neither is inherently \"more\" paper by weight; they simply distribute the same mass over different thicknesses."
    },
    {
      "kind": "list",
      "items": [
        "High bulk yields a thicker, often stiffer feel at a given weight and is sometimes sought for books and packaging.",
        "High density yields a thinner, smoother sheet at a given weight and is associated with coated and calendered grades."
      ]
    },
    {
      "kind": "paragraph",
      "text": "In book manufacturing the same idea appears as pages-per-inch (a measure derived from bulk), which is used to estimate spine thickness. Because bulk and density are ratios of the two primary measurements, they are only as reliable as the grammage and caliper figures they are computed from."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Measurement standards and methods"
    },
    {
      "kind": "paragraph",
      "text": "Weight and caliper are among the most standardized of all paper properties, which is what makes cross-supplier comparison possible. The principal named standards are:"
    },
    {
      "kind": "list",
      "items": [
        "ISO 536 / TAPPI T 410 — grammage (mass per unit area). Test pieces of accurately known area are weighed, and mass is divided by area to give g/m².",
        "ISO 534 / TAPPI T 411 — caliper (thickness), plus, in ISO 534, density and specific volume. Thickness is read with a precision micrometer under controlled pressure.",
        "ISO 216 — Writing paper and certain classes of printed matter — Trimmed sizes, which defines the A and B size series. Because grammage is stated per square metre and the ISO A0 sheet is defined as exactly one square metre (with each smaller size half the area of the previous one, at a 1:√2 side ratio), grammage and ISO sheet sizes combine cleanly to give the mass of any A-series sheet."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Reliable results depend on procedure as well as instrument: specimens are conditioned in a controlled standard atmosphere before testing, and several specimens are measured and averaged because both properties vary across a sheet and a reel. The methods also carry scope limits — for instance, ISO 534's single-sheet thickness method is not applied above a stated grammage ceiling and is not intended for corrugated fibreboard, and tissue products are handled under a separate standard. Values should therefore always be read together with the method that produced them."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Paper types and grades by weight and caliper"
    },
    {
      "kind": "paragraph",
      "text": "Weight and caliper are the primary axes along which paper grades are organized, though grade names describe intended use as much as any single number. Broad families include:"
    },
    {
      "kind": "list",
      "items": [
        "Writing and bond papers — light to medium grammage, used for correspondence, forms, and office printing.",
        "Book, text, and offset papers — a wide grammage span used for the body pages of books, brochures, and general commercial print.",
        "Cover, card, and index/tag/bristol stocks — heavier and thicker, used for covers, folders, and cards where rigidity matters.",
        "Newsprint — low grammage and relatively high bulk, optimized for high-speed web printing.",
        "Paperboard — the heaviest and thickest category, typically specified in points of caliper and used for packaging and folding cartons."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Surface treatment interacts strongly with these categories. Coated grades tend to be denser than uncoated grades of the same grammage, so a coated sheet is often thinner and smoother than an uncoated one of equal weight; this distinction is described in detail on the coated-versus-uncoated reference. Because published grammage or caliper ranges vary by manufacturer and market, this page does not assign fixed numeric ranges to grade names — the reliable practice is to read each product's own data sheet."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Role in printing and print quality"
    },
    {
      "kind": "paragraph",
      "text": "Weight and caliper shape both machine behaviour and the appearance of the finished print."
    },
    {
      "kind": "list",
      "items": [
        "Feed and transport. Heavier and thicker stock has more mass and stiffness, which changes how it is picked, separated, and driven through the paper path. Substrates outside a device's rated weight/caliper window are more prone to misfeeds and jams; the mechanics of pickup are covered on the paper-feed-rollers page.",
        "Opacity and show-through. Grammage and caliper correlate with, but do not fully determine, how much printed content is visible from the reverse side. Lighter, thinner sheets generally show through more, especially in duplex printing. Opacity is a separate optical property (see the paper-opacity page), and the resulting artefact is described on the show-through page.",
        "Stiffness and fold. Rigidity rises steeply with caliper, affecting how a sheet stands, folds, and scores — a central concern for covers and packaging.",
        "Dimensional stability and curl. A sheet's response to moisture and heat depends partly on its structure and weight; the curl defect itself is described on the paper-curl page.",
        "Ink and toner interaction. Surface density and smoothness (linked to caliper and coating) influence how ink sits on or penetrates the sheet, which in turn interacts with tonal reproduction phenomena such as dot gain. Individual printing processes publish their own media weight and caliper limits; those processes are cross-linked rather than duplicated here."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relation to adjacent properties"
    },
    {
      "kind": "paragraph",
      "text": "Because \"paper weight\" is used loosely in everyday speech, it is worth separating it from neighbouring concepts."
    },
    {
      "kind": "list",
      "items": [
        "Weight is not thickness. Grammage and basis weight describe mass; caliper describes thickness. Two sheets of identical grammage can differ in caliper because of finish, calendering, and coating, so neither figure can be inferred from the other without knowing the density.",
        "Weight relates to size, not the reverse. Grammage is defined per square metre, so it is independent of sheet dimensions; the actual mass of a cut sheet follows from grammage and the ISO 216 (or other) size chosen. See the paper-sizes reference.",
        "Weight is distinct from optical properties. Brightness (measured under ISO 2470) and opacity (ISO 2471) are separate from weight and caliper, even though heavier, denser stock often correlates with higher opacity. Whiteness and brightness are covered on their own reference pages.",
        "Practical downstream effects. Weight also governs postage and shipping cost and, together with caliper, the physical bulk of a bound or packed product."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Taken together, weight and caliper are the foundation on which most other paper specifications are interpreted, which is why standards bodies treat their measurement so precisely."
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
      "slug": "paper-grades-and-standards"
    },
    {
      "section": "guides",
      "slug": "paper-opacity"
    },
    {
      "section": "guides",
      "slug": "cardstock-and-cover-stock"
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
      "slug": "paper-curl"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between paper weight and caliper?",
      "a": "Weight describes the mass of the paper — as grammage (grams per square metre) or basis weight (pounds per ream) — while caliper describes the thickness of a single sheet, measured in micrometres, mils, or points. They measure different quantities, so a sheet can be heavy without being thick, and one figure cannot be derived from the other without also knowing the paper's density."
    },
    {
      "q": "How do gsm and basis weight (pounds) differ?",
      "a": "Grammage (gsm) is mass per square metre and is grade-independent, so it allows direct comparison between any two papers. Basis weight, used mainly in the United States, is the weight in pounds of a ream (usually 500 sheets) cut to a grade's basic size. Because the basic size differs by grade, the same pound figure does not mean the same mass across grades; converting a pound figure to gsm requires knowing which basic size applies."
    },
    {
      "q": "Can two papers with the same gsm have different thickness?",
      "a": "Yes. Grammage fixes mass per unit area but not how that mass is distributed through the thickness. A high-bulk, lightly calendered, uncoated sheet is thicker per gram, whereas a dense, calendered or coated sheet of the same grammage is thinner. The ratio of grammage to caliper is the paper's density."
    },
    {
      "q": "How is caliper measured and in what units?",
      "a": "Caliper is measured with a precision micrometer that applies a specified static load, following standards such as ISO 534 or TAPPI/ANSI T 411. Because paper compresses, readings are only comparable when the applied pressure and method match. Units are micrometres (µm), mils (thousandths of an inch), or, for paperboard, points, where one point equals 1/1000 inch."
    },
    {
      "q": "What is paper bulk?",
      "a": "Bulk, also called specific volume, is the inverse of density — the thickness a sheet delivers per unit of mass. High-bulk papers feel thicker and often stiffer at a given weight, which is useful for books and packaging, while low-bulk (dense) papers are thinner and smoother. Bulk and density are both calculated from the primary grammage and caliper measurements, as defined in ISO 534."
    }
  ],
  "sources": [
    {
      "title": "ISO 536:2019 — Paper and board — Determination of grammage",
      "url": "https://www.iso.org/standard/77583.html",
      "publisher": "International Organization for Standardization (ISO)"
    },
    {
      "title": "ISO 534:2011 — Paper and board — Determination of thickness, density and specific volume",
      "url": "https://www.iso.org/standard/53060.html",
      "publisher": "International Organization for Standardization (ISO)"
    },
    {
      "title": "ISO 216:2007 — Writing paper and certain classes of printed matter — Trimmed sizes — A and B series",
      "url": "https://www.iso.org/standard/36631.html",
      "publisher": "International Organization for Standardization (ISO)"
    },
    {
      "title": "ISO 2470-1:2016 — Paper, board and pulps — Measurement of diffuse blue reflectance factor (ISO brightness)",
      "url": "https://www.iso.org/standard/69090.html",
      "publisher": "International Organization for Standardization (ISO)"
    },
    {
      "title": "ISO 2471:2008 — Paper and board — Determination of opacity (paper backing) — Diffuse reflectance method",
      "url": "https://www.iso.org/standard/39771.html",
      "publisher": "International Organization for Standardization (ISO)"
    },
    {
      "title": "TAPPI/ANSI T 410 — Grammage of paper and paperboard (weight per unit area)",
      "url": "https://imisrise.tappi.org/TAPPI/Products/01/T/0104T410.aspx",
      "publisher": "TAPPI (Technical Association of the Pulp and Paper Industry)"
    },
    {
      "title": "TAPPI/ANSI T 411 — Thickness (caliper) of paper, paperboard, and combined board",
      "url": "https://imisrise.tappi.org/TAPPI/Products/01/T/0104T411.aspx",
      "publisher": "TAPPI (Technical Association of the Pulp and Paper Industry)"
    },
    {
      "title": "Grammage",
      "url": "https://en.wikipedia.org/wiki/Grammage",
      "publisher": "Wikipedia"
    },
    {
      "title": "Paper density",
      "url": "https://en.wikipedia.org/wiki/Paper_density",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "paper weight",
    "grammage",
    "gsm",
    "basis weight",
    "paper caliper",
    "paper thickness",
    "iso 536",
    "iso 534",
    "paper density",
    "paper bulk",
    "points paperboard",
    "tappi t 411"
  ],
  "cluster": "paper-technologies"
};

export default entry;
