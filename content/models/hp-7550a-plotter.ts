import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "hp-7550a-plotter",
  "title": "HP 7550A Plotter",
  "description": "Eight-pen Hewlett-Packard desktop graphics plotter (1984): automatic pen carousel, sheet feeder, HP-GL, and built-in HP-IB and RS-232-C interfaces.",
  "summary": "The HP 7550A is an eight-pen desktop graphics plotter introduced by Hewlett-Packard in 1984 for engineering drawings, charts, and technical graphics. It held eight pens in a carousel and changed and capped them automatically, drew on media up to ANSI B / ISO A3 size using a grit-wheel paper drive, and accepted drawings written in the HP-GL graphics language. Unlike HP's smaller 7470A and 7475A plotters, it carried both an HP-IB and an RS-232-C interface built in, and it paired a 150-sheet media tray with a single-sheet feeder for unattended plotting. The HP Computer Museum describes it as \"the most advanced small plotter ever built\" and credits the 7550 product line with a ten-year run spanning the original 7550A and its successor, the HP 7550 Plus.",
  "manufacturer": "Hewlett-Packard",
  "category": "Pen plotter",
  "era": "1980s",
  "introduced": "1984",
  "discontinued": "c. 1990 (superseded by the HP 7550 Plus)",
  "alsoKnownAs": [
    "7550A",
    "HP 7550A",
    "Hewlett-Packard 7550A Graphics Plotter"
  ],
  "specs": [
    {
      "label": "Pens",
      "value": "8, in an automatic-changing carousel with automatic pen capping",
      "source": "HP Graphics Plotters Technical Data (part 5954-8797, Hewlett-Packard, 1987); also HP Computer Museum (eight pens)"
    },
    {
      "label": "Plotting speed",
      "value": "80 cm/s on the 7550A (120 cm/s on the later 7550B)",
      "source": "HP Graphics Plotters Technical Data (part 5954-8797, Hewlett-Packard, 1987) for the 80 cm/s 7550A speed; IBM Technical Support Services (OSE) 7550A/7550B service reference for the 120 cm/s 7550B"
    },
    {
      "label": "Resolution",
      "value": "Smallest addressable move 0.025 mm",
      "source": "HP Graphics Plotters Technical Data (part 5954-8797, Hewlett-Packard, 1987)"
    },
    {
      "label": "Pen acceleration",
      "value": "6 g",
      "source": "HP Computer Museum"
    },
    {
      "label": "Graphics language",
      "value": "HP-GL (Hewlett-Packard Graphics Language)",
      "source": "HP Graphics Plotters Technical Data (part 5954-8797, Hewlett-Packard, 1987)"
    },
    {
      "label": "Host interfaces",
      "value": "HP-IB (IEEE-488) parallel and RS-232-C serial, both built in",
      "source": "HP Graphics Plotters Technical Data (part 5954-8797, Hewlett-Packard, 1987)"
    },
    {
      "label": "Built-in character sets",
      "value": "20",
      "source": "HP Graphics Plotters Technical Data (part 5954-8797, Hewlett-Packard, 1987)"
    },
    {
      "label": "Compatible media",
      "value": "Standard paper, vellum, double-matte polyester film, and transparency film, 0.05-0.1 mm thick",
      "source": "HP Graphics Plotters Technical Data (part 5954-8797, Hewlett-Packard, 1987) for media types (also HP Computer Museum); the 0.05-0.1 mm media thickness per the IBM Technical Support Services (OSE) 7550A/7550B service reference"
    },
    {
      "label": "Media handling",
      "value": "Letter/A4 loading tray holding up to 150 sheets, plus a built-in 11 x 17 in and A3 single-sheet feeder",
      "source": "HP Graphics Plotters Technical Data (part 5954-8797, Hewlett-Packard, 1987)"
    },
    {
      "label": "Maximum sheet size",
      "value": "11 x 17 in (ANSI B) / ISO A3",
      "source": "HP Graphics Plotters Technical Data (part 5954-8797, Hewlett-Packard, 1987)"
    },
    {
      "label": "Plot buffer",
      "value": "Default 9,954 bytes; maximum 12,750 bytes",
      "source": "IBM Technical Support Services (OSE) 7550A/7550B service reference; HP Graphics Plotters Technical Data (part 5954-8797, Hewlett-Packard, 1987) gives the user-partitionable physical buffer as ~12 K-bytes"
    },
    {
      "label": "Weight",
      "value": "39 lb (about 17.7 kg)",
      "source": "Computer History Museum"
    },
    {
      "label": "US list price",
      "value": "US$3,900 (at introduction, 1984)",
      "source": "HP Computer Museum"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What the HP 7550A was"
    },
    {
      "kind": "paragraph",
      "text": "The HP 7550A is an eight-pen desktop graphics plotter that Hewlett-Packard introduced in 1984. Like HP's other plotters of the period, it is a vector output device rather than a raster printer: instead of building an image out of dots, it draws line art by moving physical pens across the page under program control. The Computer History Museum records it as a Hewlett-Packard plotter manufactured in 1984 and notes that HP introduced it on page 6 of the July/August 1984 issue of HP Measurement Computation News. Within Hewlett-Packard's early-1980s plotter range it sat above the two-pen 7470A and the six-pen 7475A as the larger, faster, eight-pen model. The HP Computer Museum records that it was built by HP's San Diego Division and carried a US list price of $3,900."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Eight pens and media handling"
    },
    {
      "kind": "paragraph",
      "text": "The plotter held eight pens in a carousel and, according to Hewlett-Packard's specifications, changed pens automatically and capped them when idle to keep the ink from drying. HP offered interchangeable carousels loaded with fiber-tip transparency pens, fiber-tip paper pens, roller-ball pens, or drafting pens, so a single drawing could combine up to eight colors or line weights without manual pen swaps. It was not limited to plain paper: HP's Technical Data sheet lists standard paper, vellum, double-matte polyester film, and transparency film - with the IBM/OSE service reference giving a media thickness of 0.05 to 0.1 mm - and the HP Computer Museum likewise notes paper, transparency film, vellum, and polyester film. Media handling combined a Letter/A4 loading tray holding up to 150 sheets with a built-in single-sheet feeder for 11 x 17 in and A3 sheets. The HP Computer Museum credits the 7550A as the first plotter to include a sheet feeder, which allowed unattended plotting."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it drew: the grit-wheel drive and HP-GL"
    },
    {
      "kind": "paragraph",
      "text": "The 7550A drove the paper on grit wheels: grit-coated wheels grip the edges of the sheet and roll it back and forth along one axis while the pen carriage moves along the other, so a drawing is produced by the combined motion of paper and pen. This is the same moving-paper approach HP used on the smaller 7470A and 7475A, and an IBM Technical Support Services (OSE) service reference for the 7550A - repackaged from HP's operating documentation - describes cleaning these grit wheels and the pen carousel. Drawings were described in HP-GL (Hewlett-Packard Graphics Language), HP's compact vector command set, and the plotter carried 20 built-in character sets for lettering. HP's Technical Data sheet gives the 7550A a plotting speed of 80 cm/s and a smallest addressable move of 0.025 mm; the later 7550B ran at 120 cm/s, and the HP Computer Museum adds that the plotter accelerated its pen at 6 g, calling it \"one of the fastest plotters ever.\""
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Connecting to a computer: HP-IB and RS-232-C"
    },
    {
      "kind": "paragraph",
      "text": "Each 7550A carried two host interfaces built in - an HP-IB (IEEE-488) parallel bus and an RS-232-C serial port - which distinguished it from the 7470A and 7475A, whose buyers had to choose one interface or the other. Both were configured from the plotter's LCD control panel: the panel set the HP-IB bus address (0 to 30) or the serial parameters such as baud rate, parity, duplex, and handshake mode, storing them in nonvolatile memory. The plotter buffered incoming HP-GL, with a documented plot buffer of 9,954 bytes by default and 12,750 bytes maximum, and it offered a replot function that could redraw a stored plot up to 99 times without re-sending it from the host."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Reception, place in HP's line, and known limitations"
    },
    {
      "kind": "paragraph",
      "text": "The HP Computer Museum characterizes the 7550A in strong terms, calling it \"the most advanced small plotter ever built\" and stating that the product \"never had a peer in the marketplace.\" The museum also credits the 7550 line with a ten-year product life - a characterization of the product family (the 7550A together with its successor, the 7550 Plus) rather than of the 7550A's own roughly 1984-to-1990 market run. It also records the design's weaknesses candidly: the replot buffer was too small to be very useful, the unit was physically large, and its cooling fan was noisy. These characterizations are the museum's own. The plotter's $3,900 list price placed it well above the six-pen 7475A that HP sold alongside it, which the same museum lists at $1,895 - reflecting the 7550A's position as the top of HP's small-plotter range rather than a direct replacement for the cheaper models."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Discontinuation, preservation, and what the record does not show"
    },
    {
      "kind": "paragraph",
      "text": "The Computer History Museum records that Hewlett-Packard replaced the 7550A with the 7550 Plus, priced at roughly $4,000-$4,200, around August 1990. Because HP-GL is simple and thoroughly documented, surviving 7550A units remain usable by vintage-computing enthusiasts, and the model is preserved in institutional collections - the Computer History Museum's example was donated by Lawrence Livermore National Laboratory. This page records only specifications that can be traced to Hewlett-Packard's documentation, museum records, or period service references; any figure that cannot be sourced to one of them is omitted here rather than estimated."
    },
    {
      "kind": "archivalTable",
      "caption": "Documented specifications (each value cited to an authoritative source)",
      "headers": [
        "Specification",
        "Value"
      ],
      "rows": [
        [
          "Pens",
          "8, in an automatic-changing carousel with automatic pen capping"
        ],
        [
          "Plotting speed",
          "80 cm/s on the 7550A (120 cm/s on the later 7550B)"
        ],
        [
          "Resolution",
          "Smallest addressable move 0.025 mm"
        ],
        [
          "Pen acceleration",
          "6 g"
        ],
        [
          "Graphics language",
          "HP-GL (Hewlett-Packard Graphics Language)"
        ],
        [
          "Host interfaces",
          "HP-IB (IEEE-488) parallel and RS-232-C serial, both built in"
        ],
        [
          "Built-in character sets",
          "20"
        ],
        [
          "Compatible media",
          "Standard paper, vellum, double-matte polyester film, and transparency film, 0.05-0.1 mm thick"
        ],
        [
          "Media handling",
          "Letter/A4 loading tray holding up to 150 sheets, plus a built-in 11 x 17 in and A3 single-sheet feeder"
        ],
        [
          "Maximum sheet size",
          "11 x 17 in (ANSI B) / ISO A3"
        ],
        [
          "Plot buffer",
          "Default 9,954 bytes; maximum 12,750 bytes"
        ],
        [
          "Weight",
          "39 lb (about 17.7 kg)"
        ],
        [
          "US list price",
          "US$3,900 (at introduction, 1984)"
        ]
      ],
      "sources": [
        "HP Graphics Plotters Technical Data (part 5954-8797, Hewlett-Packard, 1987)",
        "IBM Technical Support Services (OSE) 7550A/7550B service reference ((c) IBM 1995; hosted at testequipment.center)",
        "HP Computer Museum",
        "Computer History Museum"
      ]
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This model page records only facts that can be traced to an authoritative source (manufacturer, museum, or archive records); any specification that cannot be sourced is omitted rather than estimated. It is not a buying guide and quotes no current pricing or availability. The sources consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "models",
      "slug": "hp-7475a-plotter"
    },
    {
      "section": "models",
      "slug": "hp-laserjet-original"
    },
    {
      "section": "tools",
      "slug": "postscript"
    },
    {
      "section": "tools",
      "slug": "pcl"
    },
    {
      "section": "guides",
      "slug": "dot-matrix-printing"
    }
  ],
  "faqs": [
    {
      "q": "How many pens does the HP 7550A hold?",
      "a": "Eight. They sit in a carousel, and Hewlett-Packard's specifications state the plotter changes pens automatically and caps them when idle so a single drawing can use up to eight colors or line widths without manual pen swaps."
    },
    {
      "q": "What is the largest sheet the HP 7550A can plot on?",
      "a": "Up to 11 x 17 inches (ANSI B) or ISO A3, fed from a built-in single-sheet feeder. A separate loading tray holds up to 150 Letter or A4 sheets, and the plotter also handles vellum, polyester film, and transparency film."
    },
    {
      "q": "Does the HP 7550A use HP-IB or RS-232-C?",
      "a": "Both. Each unit has an HP-IB (IEEE-488) parallel interface and an RS-232-C serial interface built in, configured from the LCD control panel. This differs from HP's 7470A and 7475A, which shipped with one interface or the other."
    },
    {
      "q": "What graphics language does the HP 7550A use?",
      "a": "HP-GL (Hewlett-Packard Graphics Language), HP's compact vector command set. The plotter also includes 20 built-in character sets for text."
    },
    {
      "q": "When was the HP 7550A made, and what replaced it?",
      "a": "Hewlett-Packard introduced it in 1984 at a US list price of $3,900. According to the Computer History Museum, HP replaced it with the 7550 Plus, priced at about $4,000-$4,200, around August 1990."
    }
  ],
  "sources": [
    {
      "title": "Hewlett-Packard 7550A Graphics Plotter (artifact record, catalog 102645003)",
      "url": "https://www.computerhistory.org/collections/catalog/102645003",
      "publisher": "Computer History Museum"
    },
    {
      "title": "HP 7550A",
      "url": "https://hpmuseum.net/display_item.php?hw=75",
      "publisher": "HP Computer Museum"
    },
    {
      "title": "HP 7550A/7550B Graphics Plotter service quick-reference (repackaged from HP operating documentation)",
      "url": "https://testequipment.center/Product_Documents/Agilent-7550B-Specifications-3E985.pdf",
      "publisher": "IBM Technical Support Services (OSE), (c) IBM 1995; hosted at testequipment.center"
    },
    {
      "title": "HP Graphics Plotters (HP ColorPro / 7475A / 7550A) Technical Data, part no. 5954-8797",
      "url": "https://www.patstec.fr/MEDIAS/009-000003910/HPGraphicsPlotters-ColorPro-7475A-7550A-TechnicalData-5954-8797-12pages-Jun876475fcc068d4b.pdf",
      "publisher": "Hewlett-Packard (June 1987)"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "hp 7550a",
    "hp 7550a plotter",
    "eight-pen plotter",
    "pen plotter",
    "hp-gl plotter",
    "hewlett-packard plotter",
    "grit-wheel plotter",
    "hp-ib plotter",
    "rs-232 plotter",
    "vintage plotter",
    "drafting plotter",
    "sheet-feeder plotter"
  ],
  "cluster": "printer-models"
};

export default entry;
