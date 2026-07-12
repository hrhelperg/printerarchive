import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "centronics-101",
  "title": "Centronics 101",
  "description": "The Centronics 101, a 1970 impact dot matrix printer, ran a 5x7 seven-wire head at 165 cps; its parallel port became the de facto Centronics standard.",
  "summary": "Introduced in 1970 by Centronics Data Computer Corporation of Hudson, New Hampshire, the Model 101 was a character-by-character impact dot matrix printer that formed characters from a 5x7 dot matrix using a seven-solenoid print head at 165 characters per second across a 132-column line. Its 36-pin parallel data interface became an industry de facto standard — a variant of which IBM adopted for the IBM Personal Computer in 1981, later formalized as IEEE 1284. Wikipedia states that Centronics developed the first dot matrix impact printer, though the same article notes the earlier OKI Wiredot (1968) is generally credited as the first such machine; what is well documented is the 101's commercial impact and the wide adoption of its parallel interface. The specifications on this page are drawn chiefly from Centronics' own Series 100 specification document.",
  "manufacturer": "Centronics Data Computer Corporation",
  "category": "Impact dot matrix printer",
  "era": "Early dot matrix impact era (1970s)",
  "introduced": "1970",
  "alsoKnownAs": [
    "Centronics Model 101",
    "Model 101",
    "Centronics Series 100 (base model)"
  ],
  "specs": [
    {
      "label": "Printing method",
      "value": "Impact dot matrix, character-by-character (one line at a time)",
      "source": "Centronics Series 100 Specifications & Interface Information"
    },
    {
      "label": "Print head",
      "value": "Seven solenoids driving print wires arranged radially around the head; each solenoid fires up to five times per character",
      "source": "Centronics Series 100 Specifications & Interface Information"
    },
    {
      "label": "Character structure",
      "value": "5 x 7 dot matrix (10-point type equivalent)",
      "source": "Centronics Series 100 Specifications & Interface Information"
    },
    {
      "label": "Print speed",
      "value": "165 characters per second",
      "source": "Centronics Series 100 Specifications & Interface Information"
    },
    {
      "label": "Line rate",
      "value": "60 lines per minute on a full 132-character line; up to 200 lines per minute on short lines",
      "source": "Centronics Series 100 Specifications & Interface Information"
    },
    {
      "label": "Line format",
      "value": "132 characters maximum per line, 6 lines per inch",
      "source": "Centronics Series 100 Specifications & Interface Information"
    },
    {
      "label": "Character pitch",
      "value": "10 characters per inch (horizontal); 6 lines per inch (vertical)",
      "source": "Centronics Series 100 Specifications & Interface Information"
    },
    {
      "label": "Character set",
      "value": "USASCII 64-character set (upper case; no lower case)",
      "source": "Centronics Series 100 Specifications & Interface Information"
    },
    {
      "label": "Character buffer",
      "value": "132 characters (one line)",
      "source": "Centronics Series 100 Specifications & Interface Information"
    },
    {
      "label": "Data input",
      "value": "Parallel (standard); RS-232 serial optional at 100 to 9,600 baud",
      "source": "Centronics Series 100 Specifications & Interface Information"
    },
    {
      "label": "Parallel data rate",
      "value": "Up to 75,000 characters per second",
      "source": "Centronics Series 100 Specifications & Interface Information"
    },
    {
      "label": "Connector",
      "value": "36-pin Amphenol parallel connector (about 21 pins used)",
      "source": "Wikipedia (Parallel port)"
    },
    {
      "label": "Paper handling",
      "value": "Sprocket (pin) feed, adjustable to 14 7/8-inch form width; original plus up to four carbon copies",
      "source": "Centronics Series 100 Specifications & Interface Information"
    },
    {
      "label": "Ribbon",
      "value": "1-inch fabric ribbon on 3-inch spools",
      "source": "Centronics Series 100 Specifications & Interface Information"
    },
    {
      "label": "Dimensions",
      "value": "11.5 in high x 20 in deep x 27.75 in wide",
      "source": "Centronics Series 100 Specifications & Interface Information"
    },
    {
      "label": "Weight",
      "value": "118 pounds",
      "source": "Centronics Series 100 Specifications & Interface Information"
    },
    {
      "label": "Power",
      "value": "115 VAC +/-10%, 60 Hz (115/230 VAC, 50 Hz optional)",
      "source": "Centronics Series 100 Specifications & Interface Information"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What the Centronics 101 was"
    },
    {
      "kind": "paragraph",
      "text": "The Centronics 101 was an impact dot matrix printer introduced in 1970 by Centronics Data Computer Corporation of Hudson, New Hampshire. It was the base model of the company's Series 100 line and printed character-by-character across the page with a moving print head rather than one line or one page at a time. According to Centronics' own Series 100 specification document, the 101 produced output at 165 characters per second on continuous, sprocket-fed forms up to 14 7/8 inches wide, with a maximum of 132 characters per line at six lines per inch. Wikipedia dates the release of the printer, which featured the company's new parallel connector, to 1970."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it printed: the seven-wire impact head"
    },
    {
      "kind": "paragraph",
      "text": "The 101 formed each character from a 5 x 7 dot matrix. Centronics' documentation describes a print head carrying seven solenoids attached to print wires arranged radially around the head; each solenoid could fire independently up to five times per character, driving its wire against the ribbon, paper and platen so the character was built up out of dots. When the solenoids were de-energized the wires withdrew flush to the surface of the head. Horizontal character registration was maintained by an optical clocking system on the carriage — a strip of alternating transparent and opaque slots generated a pulse train that resynchronized print timing, keeping characters aligned even as head speed varied. The broader mechanism is described in the overview of dot matrix printing."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Documented specifications"
    },
    {
      "kind": "paragraph",
      "text": "Centronics' Series 100 specification sheet lists the 101 as an impact, character-by-character printer using a 5 x 7 dot matrix and the USASCII 64-character set (upper case only; lower-case recognition arrived on the later 101A). Rated speed was 165 characters per second, equivalent to 60 lines per minute on a full 132-character line and up to 200 lines per minute on short lines. The standard data input was parallel, accepting data at up to 75,000 characters per second, with an RS-232 serial option running at 100 to 9,600 baud; a single-line, 132-character buffer held the current line. The same document records physical figures — roughly 11.5 inches high, 20 inches deep and 27.75 inches wide, a weight of 118 pounds, and 115 VAC 60 Hz power — and notes the printer could produce an original plus up to four carbon copies through a 1-inch fabric ribbon. Figures that cannot be traced to an authoritative source, including any launch price, are omitted here rather than estimated."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The Centronics parallel interface"
    },
    {
      "kind": "paragraph",
      "text": "The 101's most durable contribution was its data connector. As documented in histories of the parallel port, Centronics built the interface around a surplus 36-pin Amphenol connector of which only about 21 pins were actually used, carrying eight data lines together with strobe, acknowledge and busy handshaking signals; the printer itself received parallel data at up to 75,000 characters per second. The printer side of this interface quickly became an industry de facto standard. When IBM released the IBM Personal Computer in 1981 it included a variant of the Centronics interface, pairing a DB-25 connector on the PC side with the 36-pin connector on the printer side, and the arrangement was eventually formalized as the IEEE 1284 standard in the late 1990s. The name 'Centronics' stayed attached to the parallel printer port for decades, until USB displaced it."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The \"first dot matrix printer\" claim"
    },
    {
      "kind": "paragraph",
      "text": "Wikipedia states that Centronics developed the first dot matrix impact printer, but the same article notes that OKI's Wiredot, shown in 1968, preceded it and is generally credited as the earliest dot matrix impact printer. That 'first' claim should therefore be read with attribution rather than as settled fact. What is well documented is the 101's commercial impact and the wide adoption of its interface, rather than an uncontested claim to being absolutely first."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Place in printing history"
    },
    {
      "kind": "paragraph",
      "text": "The 101 anchored the Centronics Series 100, which also included the 101A and 101AL (both using a 9 x 7 matrix) and the faster, bi-directional 102A, alongside the lower-cost Model 306 that reused the 101's print head. Centronics Data Computer Corporation operated from Hudson, New Hampshire and was a major printer maker through the 1970s and early 1980s. The 101's importance is twofold: it helped establish dot matrix impact printing as a practical, affordable technology for computer output, and it originated the parallel interface that connected printers to computers for roughly the next quarter-century. A very different later machine, the original HP LaserJet, gained a 'Centronics parallel' port on its 1985 successor — a small illustration of how far the interface reached beyond the printer that introduced it."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Reference scope"
    },
    {
      "kind": "paragraph",
      "text": "This page records only facts that can be traced to authoritative sources — chiefly Centronics' own specification and technical documentation and reference histories of the parallel interface (a Computer History Museum photograph of an unspecified Centronics printer terminal is included as general context only, not as documentation of the Model 101). Any specification that cannot be sourced, such as a launch price or a Model 101 discontinuation date, is omitted rather than estimated. It is not a buying guide and quotes no current pricing or availability; the sources consulted are listed below."
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
          "Printing method",
          "Impact dot matrix, character-by-character (one line at a time)"
        ],
        [
          "Print head",
          "Seven solenoids driving print wires arranged radially around the head; each solenoid fires up to five times per character"
        ],
        [
          "Character structure",
          "5 x 7 dot matrix (10-point type equivalent)"
        ],
        [
          "Print speed",
          "165 characters per second"
        ],
        [
          "Line rate",
          "60 lines per minute on a full 132-character line; up to 200 lines per minute on short lines"
        ],
        [
          "Line format",
          "132 characters maximum per line, 6 lines per inch"
        ],
        [
          "Character pitch",
          "10 characters per inch (horizontal); 6 lines per inch (vertical)"
        ],
        [
          "Character set",
          "USASCII 64-character set (upper case; no lower case)"
        ],
        [
          "Character buffer",
          "132 characters (one line)"
        ],
        [
          "Data input",
          "Parallel (standard); RS-232 serial optional at 100 to 9,600 baud"
        ],
        [
          "Parallel data rate",
          "Up to 75,000 characters per second"
        ],
        [
          "Connector",
          "36-pin Amphenol parallel connector (about 21 pins used)"
        ],
        [
          "Paper handling",
          "Sprocket (pin) feed, adjustable to 14 7/8-inch form width; original plus up to four carbon copies"
        ],
        [
          "Ribbon",
          "1-inch fabric ribbon on 3-inch spools"
        ],
        [
          "Dimensions",
          "11.5 in high x 20 in deep x 27.75 in wide"
        ],
        [
          "Weight",
          "118 pounds"
        ],
        [
          "Power",
          "115 VAC +/-10%, 60 Hz (115/230 VAC, 50 Hz optional)"
        ]
      ],
      "sources": [
        "Centronics Series 100 Specifications & Interface Information",
        "Wikipedia (Parallel port)"
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
      "section": "guides",
      "slug": "dot-matrix-printing"
    },
    {
      "section": "tools",
      "slug": "esc-p"
    },
    {
      "section": "models",
      "slug": "hp-laserjet-original"
    }
  ],
  "faqs": [
    {
      "q": "When was the Centronics 101 introduced?",
      "a": "In 1970. Wikipedia dates the release of the Model 101 — the printer that debuted Centronics' 36-pin parallel connector — to 1970, and it was the base model of the company's Series 100 line."
    },
    {
      "q": "Was the Centronics 101 the first dot matrix printer?",
      "a": "Wikipedia states that Centronics developed the first dot matrix impact printer, but the same article notes that OKI's Wiredot (1968) came earlier and is generally credited as the first dot matrix impact printer, so the 'first' claim is best stated with attribution. What is clearly documented is the 101's commercial impact and the wide adoption of its parallel interface."
    },
    {
      "q": "How fast did the Centronics 101 print, and how did the mechanism work?",
      "a": "Centronics' Series 100 specification sheet rates it at 165 characters per second. It built each character from a 5 x 7 dot matrix using a print head of seven solenoids and wires; each solenoid fired up to five times per character, striking the ribbon and paper to form dots across a line of up to 132 characters."
    },
    {
      "q": "What is the 'Centronics interface'?",
      "a": "It is the parallel printer interface the 101 introduced, built on a 36-pin connector with data, strobe, acknowledge and busy lines. The printer side became a de facto industry standard; IBM shipped a variant on the 1981 IBM PC, and it was later formalized as IEEE 1284."
    },
    {
      "q": "How did the Centronics 101 connect to a computer?",
      "a": "Its standard data input was the Centronics parallel interface, which accepted data at up to 75,000 characters per second. An optional RS-232 serial interface running at 100 to 9,600 baud was also available."
    }
  ],
  "sources": [
    {
      "title": "Series 100 Printers (Models 101/101A/101AL/102A/306) — Specifications and Interface Information",
      "url": "http://vtda.org/docs/computing/Centronics/101_101A_101AL_102A_306_SpecificationsInterfaceInformation.pdf",
      "publisher": "Centronics Data Computer Corporation"
    },
    {
      "title": "Model 101 Printer Technical Manual (No. 37400010 Rev. H, May 1978)",
      "url": "https://bitsavers.trailing-edge.com/pdf/centronics/101/37400010H_Centronics_Model_101_Printer_Technical_Manual_May1978.pdf",
      "publisher": "Centronics Data Computer Corporation (Bitsavers archive)"
    },
    {
      "title": "Centronics",
      "url": "https://en.wikipedia.org/wiki/Centronics",
      "publisher": "Wikipedia"
    },
    {
      "title": "Parallel port",
      "url": "https://en.wikipedia.org/wiki/Parallel_port",
      "publisher": "Wikipedia"
    },
    {
      "title": "Centronics printer terminal photograph (unspecified model; catalog 102627437)",
      "url": "https://www.computerhistory.org/collections/catalog/102627437",
      "publisher": "Computer History Museum"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "centronics 101",
    "centronics model 101",
    "centronics data computer corporation",
    "dot matrix printer",
    "impact printer",
    "centronics parallel interface",
    "parallel port history",
    "165 characters per second",
    "5x7 dot matrix",
    "1970 printer",
    "seven-wire print head",
    "series 100 printer"
  ],
  "cluster": "printer-models"
};

export default entry;
