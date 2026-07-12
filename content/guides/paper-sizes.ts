import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "paper-sizes",
  "title": "Paper Sizes and Standards",
  "description": "How paper sizes are standardized: the metric ISO 216 A, B and C series and North American ANSI Letter, Legal and Tabloid formats, and how they are defined and…",
  "summary": "A paper size standard defines the trimmed dimensions of sheet media so that formats are consistent and interchangeable across presses, printers, and finishing equipment. Two systems dominate: the metric ISO 216 family — the A, B and C series built on a constant 1:√2 aspect ratio and used through most of the world — and the traditional North American sizes (Letter, Legal, Ledger/Tabloid) together with the ANSI/ASME Y14.1 A–E series. Size is a purely dimensional property, distinct from a sheet's weight, thickness, grade, finish, and optical characteristics, though it interacts with all of them during printing. This reference describes how the major standards are constructed and measured and the role sheet format plays in imposition, scaling, bleed, and media handling.",
  "difficulty": "intermediate",
  "estimatedTime": "10 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Definition and scope"
    },
    {
      "kind": "paragraph",
      "text": "A paper size is the set of dimensions of a sheet of paper or board, and a paper size standard is a published specification that fixes those dimensions so that a named format means the same thing to everyone who produces, prints, or finishes the sheet. The dimensions that a standard fixes are normally the trimmed size — the final dimensions of the sheet after it has been cut to its finished format — expressed as a width and a height. Standardization is what lets a document composed on one device print, fold, bind, file, and mail predictably on another."
    },
    {
      "kind": "paragraph",
      "text": "Two standard systems account for the great majority of office and commercial printing. The metric ISO 216 system, together with the closely related ISO 217 and ISO 269 series, defines the A, B and C formats used through most of the world. The North American system defines the traditional Letter, Legal, and Ledger/Tabloid sizes and the engineering ANSI A–E series formalized in ANSI/ASME Y14.1. The two systems are geometrically different and are not interchangeable: their sheets differ in both dimensions and aspect ratio."
    },
    {
      "kind": "paragraph",
      "text": "Size is only one of several independent properties of a sheet. It is orthogonal to a paper's weight and thickness, its grade, its surface finish, and its optical characteristics; a single named size such as A4 is manufactured across a wide range of grammages, coatings, and colors. This page describes the dimensional standards themselves. The interacting properties — grammage and caliper, coated versus uncoated construction, opacity, and brightness and whiteness — are treated as separate references, and defects such as paper curl and show-through, and the print processes (inkjet, laser, thermal) that consume these sheets, are documented elsewhere on this site."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The ISO 216 A and B series"
    },
    {
      "kind": "paragraph",
      "text": "ISO 216 defines the A and B series of trimmed sizes and specifies indication of the paper's machine direction. Its defining principle is a constant width-to-length ratio of 1 : √2 (approximately 1 : 1.414), chosen because it is the only aspect ratio preserved when a sheet is halved across its longer dimension. Halving an A-series sheet therefore produces two sheets of the next size down with the same proportions, and no format in the series is a distorted version of any other."
    },
    {
      "kind": "paragraph",
      "text": "The series is anchored by two definitions:"
    },
    {
      "kind": "list",
      "items": [
        "A0 has an area of one square metre (1 m²), with its sides in the 1 : √2 ratio.",
        "Each subsequent size (A1, A2, A3, A4, and so on) is obtained by halving the area of the preceding size, so the long side of A(n+1) equals the short side of An. As a result, A4 measures 210 mm × 297 mm — the most widely used office format worldwide."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The B series fills the gaps between A sizes: each B-series size is the geometric mean of the two adjacent A sizes, giving intermediate formats for applications where an A size is not suitable (posters, books, and envelopes among them). Because the ratio is shared across the whole family, documents scale cleanly between sizes — an A3 page reduces exactly to A4, and two A4 pages impose onto a single A3 sheet — which is central to how the system is used in copying, imposition, and enlargement."
    },
    {
      "kind": "paragraph",
      "text": "A practical caution: the ISO series is metric and its convenient scaling holds only within the ISO family. A Japanese JIS B series also exists and is not identical to ISO B — JIS defines its B sizes to have 1.5 times the area of the corresponding A size, so JIS B lengths are about 1.22 times the A-series lengths, whereas ISO B lengths are about 1.19 times. The JIS A series matches ISO A, but the two B series should not be treated as equivalent."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Envelopes, untrimmed stock, and the rest of the ISO family"
    },
    {
      "kind": "paragraph",
      "text": "Two companion standards extend the ISO 216 geometry to purposes beyond the finished sheet."
    },
    {
      "kind": "paragraph",
      "text": "The C series, historically defined in ISO 269, is used chiefly for envelopes. The area of a C-series sheet is the geometric mean of the areas of the A and B sheets of the same number, which sizes each C format so that the matching A-series sheet fits inside it — an unfolded A4 letter fits a C4 envelope, and an A4 folded once fits a C5. ISO 269 was withdrawn in 2009 without a direct replacement, but the C sizes remain specified in several national standards and in continued industry practice."
    },
    {
      "kind": "paragraph",
      "text": "The RA and SRA formats, defined in ISO 217, are untrimmed (raw) sizes. \"RA\" denotes raw format A and \"SRA\" supplementary raw format A. These sheets are deliberately larger than the corresponding finished A size so that the press has material for gripper margins and for bleed — ink printed beyond the final edge — before the sheet is trimmed down to its A-series finished size. They are a production input rather than a document format, and they are the reason a job finished at A4 is often run on a larger parent sheet."
    },
    {
      "kind": "paragraph",
      "text": "Taken together, ISO 216 (finished A and B sizes), ISO 269 (C-series envelopes), and ISO 217 (RA/SRA untrimmed stock) form a single coherent metric family in which finished pieces, their envelopes, and the parent sheets they are cut from all share the same underlying proportion."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "North American and ANSI sizes"
    },
    {
      "kind": "paragraph",
      "text": "North America — the United States, Canada, and parts of Mexico — is the principal region that does not use ISO 216 for everyday paper. Instead it uses a set of traditional sizes and the engineering series standardized in ANSI/ASME Y14.1."
    },
    {
      "kind": "paragraph",
      "text": "The common office sizes are:"
    },
    {
      "kind": "list",
      "items": [
        "Letter — 8.5 in × 11 in — the default for correspondence, forms, and general office printing.",
        "Legal — 8.5 in × 14 in — used for certain contracts and legal documents.",
        "Ledger / Tabloid — 11 in × 17 in — used for spreadsheets, newspaper-style pages, and two-up layouts of Letter pages."
      ]
    },
    {
      "kind": "paragraph",
      "text": "ANSI/ASME Y14.1 (first adopted in this form in 1992 and revised several times since, including 1995, 2005, 2012, and 2022) defines a lettered engineering-drawing series built on the Letter size: ANSI A (8.5 × 11 in), ANSI B (11 × 17 in), ANSI C (17 × 22 in), ANSI D (22 × 34 in), and ANSI E (34 × 44 in)."
    },
    {
      "kind": "paragraph",
      "text": "The ANSI series doubles in area from one size to the next, like the ISO A series, but it differs in a fundamental way: it has two alternating aspect ratios rather than one constant ratio. Doubling ANSI A gives ANSI B with a different proportion, doubling again returns to the ANSI A proportion, and so on. Consequently, scaling between adjacent North American sizes does not preserve proportions the way it does in the ISO system, and content laid out for Letter does not map without distortion onto Tabloid or vice versa. The dimensional mismatch between Letter (8.5 × 11 in, about 216 × 279 mm) and A4 (210 × 297 mm) is a routine source of scaling and clipping when documents cross between the two systems."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How sizes are defined and measured"
    },
    {
      "kind": "paragraph",
      "text": "A paper size standard is, at its core, a table of trimmed dimensions together with the tolerances allowed in cutting. The dimensions are given in millimetres in the ISO system and in inches in the North American system, and the standards also state how the finished sheet is to be measured and, in ISO 216, how the machine direction (grain) is to be indicated. Measuring a sheet's size is therefore a matter of dimensional metrology — width, height, and squareness against the standard's stated tolerances — rather than the reflectance or mass measurements used for a sheet's optical and physical properties."
    },
    {
      "kind": "paragraph",
      "text": "Size must not be confused with the measures that describe how heavy or thick a sheet is:"
    },
    {
      "kind": "list",
      "items": [
        "Grammage is standardized by ISO 536 and expressed in grams per square metre (g/m²). Because it is a mass per unit area, grammage is independent of the sheet's format — an A4 and an A3 sheet of the same stock share the same g/m² value.",
        "Basis weight, the North American convention, is instead tied to format and grade: it is the weight of a ream of sheets cut to a grade's basic size, so the same numerical basis weight refers to different actual paper depending on the grade. This size-and-grade dependence is covered in the paper weight and caliper reference, not repeated here."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Several other properties that are frequently specified alongside size are governed by their own standards and measured by their own methods: opacity by ISO 2471 (and the TAPPI contrast-ratio methods), and brightness by ISO 2470. These describe how the sheet transmits and reflects light, not its dimensions, and are documented on their respective reference pages. The point of separating them is that a format specification (\"A4\") and a property specification (\"90 g/m², high opacity, uncoated\") are independent axes that together describe a stock."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Role in printing and print quality"
    },
    {
      "kind": "paragraph",
      "text": "Sheet format governs several stages of the print workflow even though it does not, by itself, determine image quality."
    },
    {
      "kind": "list",
      "items": [
        "Media selection and fit. A driver or press must be told the sheet size so that the imaging area, margins, and page scaling are computed correctly. A size mismatch — sending an A4 layout to a Letter tray, or the reverse — forces the software either to scale the page (changing its true dimensions) or to clip content at the edges, and can leave uneven margins because the two formats differ in both width and height.",
        "Imposition and scaling. The ISO family's constant ratio makes multi-up imposition and reduction predictable: two A4 pages impose on A3, four on A2, and reductions between sizes need no re-proportioning. The North American sizes, with their alternating ratios, require more care when placing multiple pages on a parent sheet.",
        "Bleed and trimming. Work that prints to the edge is run on a larger untrimmed sheet (such as an ISO 217 RA/SRA format, or an oversized parent in the North American system) and cut down afterward, so that ink can extend past the final trim line. This is why the finished size and the sheet actually loaded on the press are often different.",
        "Envelopes and mailing. The C-series geometry lets a chosen envelope accept a known A-series sheet flat or folded, so format planning extends from the document to its enclosure.",
        "Feed and registration. Sheet dimensions interact with paper transport: guides, trays, and rollers must be set to the loaded size, and format is one factor in reliable pickup and in front-to-back registration on duplex work. The mechanics of transport are covered in the paper feed rollers reference, and format is orthogonal to the process — inkjet, laser, or thermal — laying down the image."
      ]
    },
    {
      "kind": "paragraph",
      "text": "In all of these, size sets the geometric frame within which a job is produced; the rendered quality of the image within that frame depends on the substrate's other properties and on the printing process."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relation to adjacent concepts"
    },
    {
      "kind": "paragraph",
      "text": "Because \"paper\" is described by several independent attributes, it helps to place size relative to the properties it is most often confused with."
    },
    {
      "kind": "list",
      "items": [
        "Weight and caliper. Grammage (ISO 536) and thickness are mass and dimensional-depth measures that are independent of format; a size and a weight are specified together but measured separately.",
        "Grade and standard. A grade names an intended use and construction (bond, book, cover, and so on) and carries its own conventions, including the basic sizes that anchor North American basis weight; the sizes on this page are the format layer that a grade is cut to.",
        "Coated versus uncoated construction and finish. These describe the surface and are again independent of format.",
        "Optical properties. Opacity (ISO 2471), brightness (ISO 2470), and whiteness (CIE whiteness, ISO 11475/11476) describe light behaviour, not dimensions.",
        "Grain / machine direction. ISO 216 specifies indication of machine direction because grain — the alignment of fibres along the direction the sheet ran through the machine — matters for folding, stiffness, and dimensional stability, and it is closely tied to defects such as paper curl."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Keeping these axes distinct is the reason a complete media specification pairs a format from this page (for example, A4 or Letter) with values drawn from those other references (a grammage, a grade, a finish, and, where it matters, opacity and brightness)."
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
      "slug": "paper-weight-and-caliper"
    },
    {
      "section": "guides",
      "slug": "coated-vs-uncoated-paper"
    },
    {
      "section": "guides",
      "slug": "paper-opacity"
    },
    {
      "section": "guides",
      "slug": "paper-feed-rollers"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between A4 and Letter size?",
      "a": "They belong to different standards and are not interchangeable. A4 is defined by ISO 216 as 210 mm × 297 mm; Letter is the North American size 8.5 in × 11 in (about 216 mm × 279 mm). A4 is narrower and taller, and the two have different aspect ratios (roughly 1.41 for A4 versus 1.29 for Letter), so a document laid out for one is scaled or clipped when printed on the other."
    },
    {
      "q": "Why is the ISO 216 A series based on a 1:√2 ratio?",
      "a": "Because 1:√2 is the only aspect ratio preserved when a sheet is cut in half across its long side. This makes each size exactly half the area of the one before it — A0 is defined as 1 m², A1 is half of A0, and so on — and lets pages be enlarged or reduced between sizes without any distortion, which is what makes A3-to-A4 scaling and two-up imposition exact."
    },
    {
      "q": "What are RA and SRA paper sizes?",
      "a": "They are untrimmed ('raw') formats defined in ISO 217 — RA for 'raw format A' and SRA for 'supplementary raw format A'. Both are slightly larger than the matching finished A size so the press has room for gripper margins and for bleed (ink printed past the final edge). The sheet is trimmed down to its A-series size after printing, so RA/SRA are production input sizes rather than document formats."
    },
    {
      "q": "Is the C series the same as the A series?",
      "a": "No. The C series (historically ISO 269, withdrawn in 2009 but still used) is intended mainly for envelopes. Each C size's area is the geometric mean of the A and B sizes of the same number, which makes it sized to hold the matching A-series sheet — an unfolded A4 fits a C4 envelope, and an A4 folded once fits a C5."
    },
    {
      "q": "Does a paper's size determine its weight or thickness?",
      "a": "No. Size is a purely dimensional property. Weight is described by grammage (ISO 536) in grams per square metre, which is independent of format, or by the North American basis weight, which depends on a grade's ream count and basic size. A single size such as A4 is made in many weights, thicknesses, finishes, and grades; those are specified separately and are covered on the paper weight and caliper reference."
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
      "title": "ISO 217 — Paper — Untrimmed sizes — Designation and tolerances for primary and supplementary ranges, and indication of machine direction (RA and SRA formats)",
      "url": "https://en.wikipedia.org/wiki/ISO_217",
      "publisher": "Wikipedia"
    },
    {
      "title": "International standard paper sizes (ISO 216 A/B/C series, ISO 269 C series, JIS B series)",
      "url": "https://en.wikipedia.org/wiki/International_standard_paper_sizes",
      "publisher": "Wikipedia"
    },
    {
      "title": "ANSI/ASME Y14.1 — Decimal Inch Drawing Sheet Size and Format (ANSI A–E series)",
      "url": "https://en.wikipedia.org/wiki/ANSI/ASME_Y14.1",
      "publisher": "Wikipedia"
    },
    {
      "title": "Standard Paper Sizes — ISO and ANSI Formats",
      "url": "https://blog.ansi.org/ansi/standard-paper-sizes-iso-ansi-a-a4/",
      "publisher": "The ANSI Blog"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "paper sizes",
    "iso 216",
    "a series paper",
    "b series paper",
    "ansi paper sizes",
    "letter size paper",
    "a4 paper size",
    "paper size standards",
    "iso 217 ra sra",
    "tabloid ledger size",
    "paper formats",
    "trimmed sheet size"
  ],
  "cluster": "paper-technologies"
};

export default entry;
