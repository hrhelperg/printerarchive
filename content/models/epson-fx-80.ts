import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "epson-fx-80",
  "title": "Epson FX-80",
  "description": "The Epson FX-80 (1983) was a 9-pin impact dot-matrix printer that succeeded the MX-80, printing at 160 cps with bit-image graphics.",
  "summary": "The Epson FX-80 is a 9-pin impact dot-matrix printer that Epson introduced in 1983 as the successor to its best-selling MX-80. According to Epson's operation manual it printed at 160 characters per second and added a faster printhead, a larger data buffer, user-definable character sets and dot-addressable bit-image graphics. Text jobs printed bidirectionally with logic seeking, and the printer connected through a standard Centronics-style 8-bit parallel interface with optional serial and IEEE-488 connections. It was driven by Epson's escape-code control set, the command lineage the company later codified as ESC/P.",
  "manufacturer": "Epson (Seiko Epson Corporation)",
  "category": "9-pin impact dot-matrix printer",
  "era": "Early-to-mid 1980s (personal-computer dot-matrix era)",
  "introduced": "1983",
  "specs": [
    {
      "label": "Print method",
      "value": "Impact dot matrix",
      "source": "Epson FX-80 Operation Manual"
    },
    {
      "label": "Print head",
      "value": "9 pins",
      "source": "Epson FX-80 Operation Manual"
    },
    {
      "label": "Print speed",
      "value": "160 characters per second (cps)",
      "source": "Epson FX-80 Operation Manual"
    },
    {
      "label": "Character matrix",
      "value": "11 x 9 dots",
      "source": "Epson FX-80 Operation Manual"
    },
    {
      "label": "Print direction",
      "value": "Bidirectional with logic seeking in text mode; unidirectional in bit-image mode",
      "source": "Epson FX-80 Operation Manual"
    },
    {
      "label": "Character sets",
      "value": "96 ASCII characters, 9 international character sets, 96 italic characters",
      "source": "Epson FX-80 Operation Manual"
    },
    {
      "label": "Maximum columns",
      "value": "80 columns (pica / emphasized)",
      "source": "Epson FX-80 Operation Manual"
    },
    {
      "label": "Bit-image graphics",
      "value": "Dot-addressable single-density 60 dpi, double-density 120 dpi and quadruple-density 240 dpi modes",
      "source": "Epson FX-80/100 User's Manual (Vol. 1); Atari Archives (Epson printer reference, Appendix C)"
    },
    {
      "label": "Interface",
      "value": "Standard Centronics-style 8-bit parallel; optional RS-232C serial and IEEE-488",
      "source": "Epson FX-80 Operation Manual"
    },
    {
      "label": "Paper handling",
      "value": "Pin-feed (tractor) or friction feed; one original plus two carbon copies",
      "source": "Epson FX-80 Operation Manual"
    },
    {
      "label": "Dimensions",
      "value": "100 mm (H) x 420 mm (W) x 347 mm (D)",
      "source": "Epson FX-80 Operation Manual"
    },
    {
      "label": "Weight",
      "value": "7.5 kg",
      "source": "Epson FX-80 Operation Manual"
    },
    {
      "label": "Power",
      "value": "AC 120 V +/-10% or 220/240 V +/-10%, 49.5-60.5 Hz, 70 VA maximum",
      "source": "Epson FX-80 Operation Manual"
    },
    {
      "label": "Ribbon life",
      "value": "Approximately 3 million characters",
      "source": "Epson FX-80 Operation Manual"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What the Epson FX-80 was"
    },
    {
      "kind": "paragraph",
      "text": "The Epson FX-80 was a 9-pin impact dot-matrix printer that Epson introduced in 1983 as the successor to the company's MX-80. It formed characters by driving nine print wires against an inked ribbon, building each glyph from a grid of dots as the head traversed the page. Contemporary records place its introduction around 1983: the account of the Epson MX-80 states that the FX-80 replaced the entire MX-80 line that year, and The Henry Ford, which holds an example in its collection, dates the artifact to circa 1983. According to Epson's own operation manual, the 80-column FX-80 printed at 160 characters per second."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "From the MX-80 to the FX series"
    },
    {
      "kind": "paragraph",
      "text": "The FX-80 built directly on the MX-80, which is documented as the best-selling dot-matrix printer of its era, having sold well over one million units. Published histories record that the FX-80 added a faster printhead, a larger data buffer and user-definable character sets for custom symbols and typefaces. The 80-column FX-80 was accompanied by a wide-carriage sibling, the 136-column FX-100, and the two models were documented together in a shared Epson operation manual."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it printed"
    },
    {
      "kind": "paragraph",
      "text": "The FX-80 used an impact dot-matrix mechanism with a nine-pin print head, as documented in Epson's operation manual. Each character was built on an 11-by-9 dot matrix, and text was printed bidirectionally with logic seeking, so the head chose the shorter travel to the next printable text; bit-image graphics were printed unidirectionally. This is the same impact-printing method described in the general account of dot-matrix printing."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Text styles, graphics and ESC control codes"
    },
    {
      "kind": "paragraph",
      "text": "Beyond plain text, the FX-80 offered a range of typographic effects. An archived Epson printer specification lists pica, elite, compressed and expanded pitches together with proportional spacing, emphasized and double-strike modes, italics, superscript, subscript and underline, plus user-definable characters and a hex-dump diagnostic mode. It could also print dot-addressable bit-image graphics, with that reference documenting single-density (60 dpi), double-density (120 dpi) and quadruple-density (240 dpi) modes. These features were invoked through Epson's escape-code control set; the command lineage began with the MX-80 and formed the basis of the command set Epson later codified as ESC/P."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Interfaces and connectivity"
    },
    {
      "kind": "paragraph",
      "text": "Epson's operation manual lists a standard Centronics-style 8-bit parallel interface, with optional RS-232C serial and IEEE-488 connections. This let the FX-80 attach to the personal computers and microcomputers of the period through the parallel ports that were common at the time, while the optional interfaces broadened compatibility with serial and instrumentation hosts."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Documented specifications"
    },
    {
      "kind": "paragraph",
      "text": "Authoritative records agree on the printer's core figures. Epson's operation manual gives a print speed of 160 cps, a nine-pin head, an 11-by-9 character matrix, a maximum of 80 columns in pica and emphasized printing, and a character repertoire of 96 ASCII characters, nine international character sets and 96 italic characters. The manual lists overall dimensions of 100 mm high by 420 mm wide by 347 mm deep and a weight of 7.5 kg, with a ribbon life expectancy of about three million characters. Any figure that cannot be traced to an authoritative source is omitted here rather than estimated."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Place in printing history"
    },
    {
      "kind": "paragraph",
      "text": "The FX-80 arrived during the years when 9-pin impact dot-matrix printers were the dominant output device for home and small-business microcomputers, valued for low running costs and the ability to print multipart forms; Epson's manual notes support for an original plus two carbon copies. Alongside contemporaries such as the first desktop laser printers that appeared later in the decade, the FX series helped entrench Epson's escape-code command conventions as a de facto standard that many competing printers went on to emulate."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Reference scope"
    },
    {
      "kind": "paragraph",
      "text": "This model page records only facts that can be traced to an authoritative source, such as Epson's own manuals and museum or archive records. Any specification that cannot be sourced is omitted rather than estimated. It is not a buying guide and quotes no current pricing or availability; the sources consulted are listed below."
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
          "Print method",
          "Impact dot matrix"
        ],
        [
          "Print head",
          "9 pins"
        ],
        [
          "Print speed",
          "160 characters per second (cps)"
        ],
        [
          "Character matrix",
          "11 x 9 dots"
        ],
        [
          "Print direction",
          "Bidirectional with logic seeking in text mode; unidirectional in bit-image mode"
        ],
        [
          "Character sets",
          "96 ASCII characters, 9 international character sets, 96 italic characters"
        ],
        [
          "Maximum columns",
          "80 columns (pica / emphasized)"
        ],
        [
          "Bit-image graphics",
          "Dot-addressable single-density 60 dpi, double-density 120 dpi and quadruple-density 240 dpi modes"
        ],
        [
          "Interface",
          "Standard Centronics-style 8-bit parallel; optional RS-232C serial and IEEE-488"
        ],
        [
          "Paper handling",
          "Pin-feed (tractor) or friction feed; one original plus two carbon copies"
        ],
        [
          "Dimensions",
          "100 mm (H) x 420 mm (W) x 347 mm (D)"
        ],
        [
          "Weight",
          "7.5 kg"
        ],
        [
          "Power",
          "AC 120 V +/-10% or 220/240 V +/-10%, 49.5-60.5 Hz, 70 VA maximum"
        ],
        [
          "Ribbon life",
          "Approximately 3 million characters"
        ]
      ],
      "sources": [
        "Epson FX-80 Operation Manual",
        "Epson FX-80/100 User's Manual (Vol. 1)",
        "Atari Archives (Epson printer reference, Appendix C)"
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
      "q": "When was the Epson FX-80 introduced?",
      "a": "Records date it to 1983. Published histories state that the FX-80 replaced the entire MX-80 line that year, and The Henry Ford dates its example of the printer to circa 1983."
    },
    {
      "q": "How fast was the Epson FX-80?",
      "a": "Epson's operation manual lists a print speed of 160 characters per second, printed bidirectionally with logic seeking in text mode."
    },
    {
      "q": "How many pins did the FX-80 printhead have?",
      "a": "It used an impact dot-matrix mechanism with a nine-pin print head, according to Epson's operation manual."
    },
    {
      "q": "Could the Epson FX-80 print graphics?",
      "a": "Yes. An archived Epson printer specification documents dot-addressable bit-image graphics in single-density (60 dpi), double-density (120 dpi) and quadruple-density (240 dpi) modes, alongside user-definable characters."
    },
    {
      "q": "How did the FX-80 connect to a computer?",
      "a": "Its standard interface was a Centronics-style 8-bit parallel port, with optional RS-232C serial and IEEE-488 interfaces listed in Epson's operation manual."
    }
  ],
  "sources": [
    {
      "title": "FX-80/100 User's Manual (Vol. 1)",
      "url": "https://files.support.epson.com/pdf/fx80__/fx80__uv.pdf",
      "publisher": "Epson (Seiko Epson Corporation)"
    },
    {
      "title": "Epson FX-80 Operation Manual (Specifications)",
      "url": "https://www.manualslib.com/manual/812447/Epson-Fx-80.html",
      "publisher": "Epson (Seiko Epson Corporation), via ManualsLib"
    },
    {
      "title": "Epson Printer, Model FX-80, circa 1983",
      "url": "https://www.thehenryford.org/collections-and-research/digital-collections/artifact/150113",
      "publisher": "The Henry Ford"
    },
    {
      "title": "Epson MX-80 (FX-80 release and ESC/P lineage)",
      "url": "https://en.wikipedia.org/wiki/Epson_MX-80",
      "publisher": "Wikipedia"
    },
    {
      "title": "Appendix C - Epson Printer Specifications",
      "url": "https://www.atariarchives.org/epson/appendix_c.php",
      "publisher": "Atari Archives (Epson printer reference reprint)"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "epson fx-80",
    "epson fx 80",
    "fx-80 dot matrix printer",
    "9-pin dot matrix printer",
    "epson fx series",
    "160 cps printer",
    "epson mx-80 successor",
    "impact dot matrix printer",
    "esc/p",
    "1983 dot matrix printer",
    "dot matrix printer history",
    "epson printer specifications"
  ],
  "cluster": "printer-models"
};

export default entry;
