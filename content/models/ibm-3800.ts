import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "ibm-3800",
  "title": "IBM 3800",
  "description": "The IBM 3800, announced 1975 and shipped 1976, was a System/370 mainframe printer widely credited as the first commercially available laser printer.",
  "summary": "The IBM 3800 Printing Subsystem was a high-speed laser printer that IBM announced in 1975 and first shipped in 1976 as a channel-attached peripheral for System/370 mainframes. It used a low-powered laser and an electrophotographic process to print on continuous fanfold paper at roughly 167 impressions per minute. It is widely credited as the first commercially available laser printer. Successive models raised resolution and adjusted speed before the line was superseded by the IBM 3900 and discontinued in 1999.",
  "manufacturer": "IBM",
  "category": "High-speed laser printer (mainframe production printer)",
  "era": "1970s–1990s (IBM System/370 mainframe era)",
  "introduced": "1975 (announced April 15, 1975; first shipped 1976)",
  "discontinued": "1999",
  "alsoKnownAs": [
    "IBM 3800 Printing Subsystem",
    "IBM 3800 Model 1",
    "IBM 3800-1",
    "Argonaut (development code name)",
    "Jubilee (early development code name)"
  ],
  "specs": [
    {
      "label": "Print technology",
      "value": "Electrophotographic, image exposed by a low-powered laser (non-impact)",
      "source": "IBM, Introducing the IBM 3800 Printing Subsystem and Its Programming, GC26-3829-0 (1975)"
    },
    {
      "label": "Print speed (Model 1)",
      "value": "Up to ~167 impressions per minute (approx. 3,000 eleven-inch forms in 18 minutes)",
      "source": "IBM, Introducing the IBM 3800 Printing Subsystem and Its Programming (1975)"
    },
    {
      "label": "Paper transport speed",
      "value": "31.8 inches per second (nominal)",
      "source": "IBM, Introducing the IBM 3800 Printing Subsystem and Its Programming (1975)"
    },
    {
      "label": "Resolution (Model 1)",
      "value": "180 x 144 pels per inch (horizontal x vertical)",
      "source": "IBM Journal of Research and Development, Technology of the IBM 3800 printing subsystem model 3"
    },
    {
      "label": "Resolution (Model 3)",
      "value": "240 x 240 pels per inch",
      "source": "IBM Journal of Research and Development, Technology of the IBM 3800 printing subsystem model 3"
    },
    {
      "label": "Paper handling",
      "value": "Continuous single-ply fanfold forms, tractor-fed, both edges punched, perforations between pages",
      "source": "IBM, Introducing the IBM 3800 Printing Subsystem and Its Programming (1975)"
    },
    {
      "label": "Form size range",
      "value": "Width 6.5–14.875 in; length 3.5–11 in",
      "source": "IBM, Introducing the IBM 3800 Printing Subsystem and Its Programming (1975)"
    },
    {
      "label": "Character sets",
      "value": "Up to 18 selectable sets (10-, 12-, 15-pitch), incl. Gothic, Text, Katakana, OCR-A, OCR-B, and format sets",
      "source": "IBM, Introducing the IBM 3800 Printing Subsystem and Its Programming (1975)"
    },
    {
      "label": "Host attachment",
      "value": "Channel-attached to IBM System/370 (Models 145, 155-II, 158, 165-II, 168); OS/VS1 and OS/VS2",
      "source": "IBM, Introducing the IBM 3800 Printing Subsystem and Its Programming (1975)"
    },
    {
      "label": "Announced",
      "value": "April 15, 1975",
      "source": "Wikipedia: IBM 3800"
    },
    {
      "label": "First shipped",
      "value": "1976",
      "source": "Wikipedia: IBM 3800"
    },
    {
      "label": "Discontinued",
      "value": "1999 (successor IBM 3900 announced 1990)",
      "source": "Wikipedia: IBM 3800"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What the IBM 3800 was"
    },
    {
      "kind": "paragraph",
      "text": "The IBM 3800 Printing Subsystem was a high-speed, non-impact laser printer that IBM sold as a peripheral for its System/370 mainframe computers. IBM announced it on April 15, 1975 and began shipping it in 1976. Rather than striking paper through an inked ribbon like the line and impact printers it was meant to replace, the 3800 used a low-powered laser and an electrophotographic (xerographic) process to form characters and images on continuous fanfold paper. It was a large, floor-standing machine intended for centralized data-processing centers producing high volumes of output such as invoices, statements, and payroll. Development reportedly began in 1969 under the code name Jubilee, later changed to Argonaut, and the printer was developed and initially manufactured in San Jose, California."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The first commercially available laser printer"
    },
    {
      "kind": "paragraph",
      "text": "The 3800 is widely described as the first commercially available laser printer. The Computer History Museum notes that IBM beat Xerox to market with its 3800 laser printer, and it was among the first shipping products to combine laser exposure with electrophotography. Competing accounts exist about which machine deserves the \"first laser printer\" title, since Xerox and others were developing xerographic printers in the same period; the distinction usually turns on how one defines \"laser,\" \"commercial availability,\" and shipment dates. The claim here is stated as it is attributed in museum and archival records rather than asserted as an undisputed fact."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it printed: laser electrophotography"
    },
    {
      "kind": "paragraph",
      "text": "According to IBM's 1975 manual, the 3800 uses an electrophotographic technique with a low-powered laser to print on paper. A modulated light beam from the laser exposed the image of the data to be printed onto a photoconductor; toner then adhered to the resulting latent image and was transferred and fused onto the moving paper. This is the same fundamental process later adopted by desktop laser printers, but implemented at production scale for a mainframe environment. The mechanism combines a scanning laser, a rotating photoconductor, and toner-based development and fusing."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Speed and continuous-forms paper handling"
    },
    {
      "kind": "paragraph",
      "text": "IBM's 1975 manual describes the subsystem processing about 3,000 eleven-inch forms in approximately 18 minutes of continuous printing — on the order of 167 impressions per minute — and moving paper at a nominal 31.8 inches per second. Paper was continuous single-ply fanfold stock, tractor-fed with both edges punched and perforations between pages; supported forms ranged from 6.5 to 14.875 inches wide and 3.5 to 11 inches long. Because it printed on continuous forms rather than cut sheets, the 3800 fit the batch, high-volume workflows typical of 1970s mainframe installations."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Fonts, character sets, and electronic forms overlay"
    },
    {
      "kind": "paragraph",
      "text": "Unlike fixed-type impact printers, the 3800 could select among many character sets under program control. IBM's manual lists up to eighteen character sets in 10-, 12-, and 15-pitch, including Gothic, Text, Katakana, OCR-A, OCR-B, and format sets for drawing lines, corners, and tees in different line weights. The subsystem could also print electronic forms overlays — the ruled lines and boilerplate of a form — together with variable data, reducing the need for pre-printed stock and letting a single device produce documents that previously required custom forms."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Models, successors, and discontinuation"
    },
    {
      "kind": "paragraph",
      "text": "IBM shipped several 3800 models over the product's life. The original Model 1 printed at 180 x 144 pels per inch; later models raised resolution — the Model 3 reached 240 x 240 pels per inch — and adjusted speed, while specialized variants added support for large character sets such as Japanese Kanji. IBM channel-attached the subsystem to System/370 processors (including Models 145, 155-II, 158, 165-II, and 168) running the OS/VS1 and OS/VS2 operating systems. IBM announced the IBM 3900 as a successor in 1990, and the 3800 line was discontinued in 1999."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Place in printing history"
    },
    {
      "kind": "paragraph",
      "text": "The 3800 established laser xerography as a practical technology for high-volume computer output and is a landmark in the transition from impact to non-impact printing. Its production-scale approach preceded the desktop laser printers that followed, which brought the same electrophotographic principles to the office and, eventually, the home. Compared with the mechanical impact and dot-matrix printers of its era, the 3800 offered quieter operation, programmable fonts, and far greater throughput, foreshadowing the laser-printing architecture still in use today."
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
          "Print technology",
          "Electrophotographic, image exposed by a low-powered laser (non-impact)"
        ],
        [
          "Print speed (Model 1)",
          "Up to ~167 impressions per minute (approx. 3,000 eleven-inch forms in 18 minutes)"
        ],
        [
          "Paper transport speed",
          "31.8 inches per second (nominal)"
        ],
        [
          "Resolution (Model 1)",
          "180 x 144 pels per inch (horizontal x vertical)"
        ],
        [
          "Resolution (Model 3)",
          "240 x 240 pels per inch"
        ],
        [
          "Paper handling",
          "Continuous single-ply fanfold forms, tractor-fed, both edges punched, perforations between pages"
        ],
        [
          "Form size range",
          "Width 6.5–14.875 in; length 3.5–11 in"
        ],
        [
          "Character sets",
          "Up to 18 selectable sets (10-, 12-, 15-pitch), incl. Gothic, Text, Katakana, OCR-A, OCR-B, and format sets"
        ],
        [
          "Host attachment",
          "Channel-attached to IBM System/370 (Models 145, 155-II, 158, 165-II, 168); OS/VS1 and OS/VS2"
        ],
        [
          "Announced",
          "April 15, 1975"
        ],
        [
          "First shipped",
          "1976"
        ],
        [
          "Discontinued",
          "1999 (successor IBM 3900 announced 1990)"
        ]
      ],
      "sources": [
        "IBM, Introducing the IBM 3800 Printing Subsystem and Its Programming, GC26-3829-0 (1975)",
        "IBM, Introducing the IBM 3800 Printing Subsystem and Its Programming (1975)",
        "Wikipedia: IBM 3800",
        "IBM Journal of Research and Development, Technology of the IBM 3800 printing subsystem model 3"
      ]
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This model page records only facts that can be traced to an authoritative source (manufacturer, museum, or archive records); any specification that cannot be sourced is omitted rather than estimated. It is not a buying guide and quotes no current pricing or availability. The sources consulted are listed below."
    }
  ],
  "related": [],
  "faqs": [
    {
      "q": "When was the IBM 3800 introduced?",
      "a": "IBM announced the 3800 Printing Subsystem on April 15, 1975, and began shipping it in 1976. It was sold as a peripheral for IBM System/370 mainframes and was not available as a stand-alone product."
    },
    {
      "q": "Was the IBM 3800 really the first laser printer?",
      "a": "It is widely credited as the first commercially available laser printer, and the Computer History Museum states IBM beat Xerox to market with it. Competing claims exist depending on how \"laser\" and \"commercial availability\" are defined, so the distinction is best treated as a widely cited attribution rather than an undisputed fact."
    },
    {
      "q": "How fast was the IBM 3800?",
      "a": "IBM's 1975 manual describes it processing about 3,000 eleven-inch forms in roughly 18 minutes of continuous printing — on the order of 167 impressions per minute — moving paper at a nominal 31.8 inches per second. Later models adjusted speed and resolution."
    },
    {
      "q": "What did the IBM 3800 print on?",
      "a": "It printed on continuous single-ply fanfold paper that was tractor-fed with both edges punched, not on cut sheets. Supported forms ranged from 6.5 to 14.875 inches wide and 3.5 to 11 inches long, suiting high-volume mainframe batch output."
    },
    {
      "q": "What replaced the IBM 3800?",
      "a": "IBM announced the IBM 3900 as a successor in 1990, and the 3800 line was discontinued in 1999."
    }
  ],
  "sources": [
    {
      "title": "Introducing the IBM 3800 Printing Subsystem and Its Programming (GC26-3829-0)",
      "url": "https://archive.org/stream/bitsavers_ibm3800GC2eIBM3800PrintingSubsystemandItsProgrammi_2451554/GC26-3829-0_Introducing_the_IBM_3800_Printing_Subsystem_and_Its_Programming_Feb75_djvu.txt",
      "publisher": "IBM Corporation (via bitsavers / Internet Archive)"
    },
    {
      "title": "IBM 3800 Model 1 laser printer",
      "url": "https://www.computerhistory.org/revolution/input-output/14/351/1885",
      "publisher": "Computer History Museum"
    },
    {
      "title": "IBM 3800",
      "url": "https://en.wikipedia.org/wiki/IBM_3800",
      "publisher": "Wikipedia"
    },
    {
      "title": "Technology of the IBM 3800 printing subsystem model 3",
      "url": "https://dl.acm.org/doi/abs/10.1147/rd.283.0257",
      "publisher": "IBM Journal of Research and Development"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "ibm 3800",
    "ibm 3800 printing subsystem",
    "first commercially available laser printer",
    "laser printer history",
    "electrophotographic printing",
    "system/370 printer",
    "mainframe laser printer",
    "continuous forms printer",
    "high-speed laser printer",
    "ibm laser printer",
    "non-impact printer"
  ],
  "cluster": "printer-models"
};

export default entry;
