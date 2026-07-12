import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "diablo-630",
  "title": "Diablo 630 (Daisy Wheel Printer)",
  "description": "Diablo/Xerox daisy-wheel letter-quality printer; per Wikipedia its command set was so widely copied that even the original Apple LaserWriter emulated it.",
  "summary": "The Diablo 630 was a daisy-wheel impact printer sold under the Diablo Systems name, the Diablo Data Systems division of Xerox Corporation. It produced letter-quality output comparable to an IBM Selectric at a nominal 30 characters per second using an interchangeable print wheel, and offered Centronics, RS-232, and later GPIB (IEEE-488) interfaces. According to Wikipedia, its control command set became so widely supported that later daisy-wheel and many dot-matrix printers, and even the original Apple LaserWriter, copied or emulated it, making \"Diablo emulation\" an expected feature. Authoritative sources differ on when it appeared: the Computer History Museum's history dates the Model 630 to 1976, while Wikipedia dates its sale to 1980.",
  "manufacturer": "Diablo Systems, Inc. (Diablo Data Systems division of Xerox Corporation)",
  "category": "Daisy wheel printer",
  "era": "Letter-quality daisy-wheel era (late 1970s–1980s)",
  "alsoKnownAs": [
    "Xerox Diablo 630",
    "Diablo 630 ECS (Extended Character Set)"
  ],
  "specs": [
    {
      "label": "Print technology",
      "value": "Daisy-wheel impact printing (letter-quality)",
      "source": "Wikipedia"
    },
    {
      "label": "Print quality",
      "value": "Letter-quality, described as equivalent to an IBM Selectric",
      "source": "Wikipedia"
    },
    {
      "label": "Print speed",
      "value": "Approximately 30 characters per second (nominal)",
      "source": "Wikipedia"
    },
    {
      "label": "Print element",
      "value": "Interchangeable daisy print wheel (swappable for different typefaces and pitches)",
      "source": "Wikipedia; Computer History Museum"
    },
    {
      "label": "Interfaces",
      "value": "Originally Centronics parallel or RS-232 serial; RS-232, Centronics, and GPIB (IEEE-488) with the later API (All Purpose Interface)",
      "source": "Wikipedia"
    },
    {
      "label": "Dimensions",
      "value": "Approx. 23½ in W × 8 in H × ~19 in L (per two museum units)",
      "source": "Computer History Museum"
    },
    {
      "label": "Weight",
      "value": "Approximately 35–40 lb (about 16–18 kg)",
      "source": "Computer History Museum"
    },
    {
      "label": "Manufacturer",
      "value": "Diablo Systems, Inc. (a Xerox company), the Diablo Data Systems division of Xerox Corporation",
      "source": "Computer History Museum; Wikipedia"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What the Diablo 630 was"
    },
    {
      "kind": "paragraph",
      "text": "The Diablo 630 was a daisy-wheel computer printer marketed by Diablo Systems, Inc., the Diablo Data Systems division of Xerox Corporation; Computer History Museum records label surviving units \"Diablo Systems Inc., A Xerox Company.\" It was a letter-quality impact printer, meaning it struck fully formed characters through an inked ribbon rather than building them from a pattern of dots. Wikipedia describes its output as equivalent to an IBM Selectric typewriter — the de facto quality standard of the period — produced at a nominal 30 characters per second. Physically it was a desktop unit: two Computer History Museum catalog entries give dimensions of roughly 23½ inches wide by 8 inches high by about 19 inches long, and a weight of about 35 to 40 pounds."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How daisy-wheel, letter-quality printing worked"
    },
    {
      "kind": "paragraph",
      "text": "Like other daisy-wheel machines, the 630 formed characters using a flat wheel of radial spokes, or \"petals,\" each carrying one raised character at its tip. To print a character the wheel spun to bring the correct petal into position, and a hammer struck it against an inked ribbon and the paper. Because each glyph was a solid, pre-formed shape, the result read like typewriter output — the origin of the \"letter-quality\" label. This impact approach contrasts with dot-matrix printing, which builds characters from patterns of pins and trades crispness for speed and graphics capability. Wikipedia notes that Diablo Systems had developed the first commercially successful daisy-wheel printer around 1970 under engineer Andrew Gabor, and the 630 was a mature, widely sold member of that lineage."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The interchangeable print wheel"
    },
    {
      "kind": "paragraph",
      "text": "A defining feature was the removable print wheel. As with the changeable \"typeball\" element of the IBM Selectric, an operator could swap the wheel to change typeface or character pitch, according to Wikipedia. The Computer History Museum's history \"The Daisy Wheel Story,\" co-written by Diablo figures Michael Weisberg and George Comstock, credits the Model 630 with \"Mike Weisberg's new very low cost, extremely durable print wheel\" and says the model \"became the market's undisputed favorite.\" The University of Amsterdam computer-museum record for a later 630 ECS/IBM variant describes a 96-petal plastic wheel carrying two characters per petal — 192 characters in all — with the wheel jogging slightly to reach the inner character."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Dating the Diablo 630"
    },
    {
      "kind": "paragraph",
      "text": "Authoritative sources disagree on when the 630 appeared, so this page does not assert a single introduction date. The Computer History Museum's \"The Daisy Wheel Story\" states the Model 630 was \"introduced in 1976,\" whereas Wikipedia says the printer was sold by the Diablo Data Systems division of Xerox \"beginning in 1980.\" Computer History Museum catalog records for individual units date them to 1980 and to about 1982. No discontinuation date could be traced to an authoritative source, so none is stated here; figures that cannot be verified are omitted rather than estimated."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "A de facto standard: Diablo 630 emulation"
    },
    {
      "kind": "paragraph",
      "text": "The 630's most durable legacy was its command set — the escape sequences a computer sent to control margins, line spacing, pitch, and other functions. Wikipedia states the Diablo 630 was so successful that \"virtually all later daisy wheel printers, as well as many dot matrix printers and even the original Apple Laserwriter either copied its command set or could emulate it,\" and that \"Diablo emulation became an expected feature\" on other daisy-wheel and early laser printers. In that respect the 630's control language played a role comparable to other de facto printer-control standards, such as Epson's ESC/P, by giving software a common target to write to."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Interfaces: Centronics, RS-232, and the API"
    },
    {
      "kind": "paragraph",
      "text": "Wikipedia records that the 630 could originally be ordered with either a Centronics parallel or an RS-232 serial interface. Diablo later introduced the API (All Purpose Interface), after which RS-232, Centronics, and GPIB (IEEE-488) were available on every printer. Serial baud rates were configurable; the University of Amsterdam record for the ECS/IBM variant lists options of 110, 300, 1200, and 2400 baud together with a roughly 1,300-character receive buffer."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Variants and OEM versions"
    },
    {
      "kind": "paragraph",
      "text": "Several variants existed. Wikipedia describes the 630 ECS (Extended Character Set), whose wheels carried two rows of characters so the machine could print in two languages or with a large set of special symbols; the University of Amsterdam record documents a 630 ECS/IBM configured for the IBM PC character set and rated at up to 40 characters per second. A companion model, the Diablo 1620, added a keyboard, and Wikipedia notes the print mechanism was also sold to OEMs — resold by Digital Equipment Corporation as the LQP01/LQPSE and by Hewlett-Packard as the 2601A."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Place in printing history"
    },
    {
      "kind": "paragraph",
      "text": "Daisy-wheel printers from Diablo and competitor Qume were, per Wikipedia, the dominant high-end output technology for computing and office-automation applications by 1980, prized for typewriter-quality text. They could not print graphics and were slower and noisier than the dot-matrix, laser, and inkjet technologies that followed, and letter-quality impact printing faded through the 1980s. The 630 is nonetheless well represented in museum collections — including the Computer History Museum and the Smithsonian's National Museum of American History — as a representative example of the letter-quality era, and its command set outlived the hardware through emulation on later printers, including early laser printers such as the original Apple LaserWriter (per Wikipedia)."
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
          "Daisy-wheel impact printing (letter-quality)"
        ],
        [
          "Print quality",
          "Letter-quality, described as equivalent to an IBM Selectric"
        ],
        [
          "Print speed",
          "Approximately 30 characters per second (nominal)"
        ],
        [
          "Print element",
          "Interchangeable daisy print wheel (swappable for different typefaces and pitches)"
        ],
        [
          "Interfaces",
          "Originally Centronics parallel or RS-232 serial; RS-232, Centronics, and GPIB (IEEE-488) with the later API (All Purpose Interface)"
        ],
        [
          "Dimensions",
          "Approx. 23½ in W × 8 in H × ~19 in L (per two museum units)"
        ],
        [
          "Weight",
          "Approximately 35–40 lb (about 16–18 kg)"
        ],
        [
          "Manufacturer",
          "Diablo Systems, Inc. (a Xerox company), the Diablo Data Systems division of Xerox Corporation"
        ]
      ],
      "sources": [
        "Wikipedia",
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
      "section": "guides",
      "slug": "dot-matrix-printing"
    },
    {
      "section": "guides",
      "slug": "laser-printing"
    },
    {
      "section": "tools",
      "slug": "esc-p"
    },
    {
      "section": "tools",
      "slug": "postscript"
    },
    {
      "section": "models",
      "slug": "hp-laserjet-original"
    }
  ],
  "faqs": [
    {
      "q": "When was the Diablo 630 introduced?",
      "a": "Authoritative sources differ. The Computer History Museum's \"The Daisy Wheel Story\" dates the Model 630 to 1976, while Wikipedia says it was sold beginning in 1980; museum-held units are cataloged as made in 1980 and about 1982. Because the records conflict, this page does not assert a single introduction date."
    },
    {
      "q": "Who made the Diablo 630?",
      "a": "It was made by Diablo Systems, Inc., the Diablo Data Systems division of Xerox Corporation; museum labels read \"Diablo Systems Inc., A Xerox Company.\" Wikipedia notes Diablo had developed the first commercially successful daisy-wheel printer around 1970."
    },
    {
      "q": "What is \"Diablo 630 emulation\"?",
      "a": "The 630's command set became so widely supported that, according to Wikipedia, later daisy-wheel and many dot-matrix printers — and even the original Apple LaserWriter — copied or emulated it, making \"Diablo emulation\" an expected printer feature."
    },
    {
      "q": "How fast and at what quality did it print?",
      "a": "Wikipedia lists a nominal 30 characters per second with letter-quality output comparable to an IBM Selectric typewriter; the later ECS/IBM variant was rated at up to 40 characters per second per the University of Amsterdam computer museum."
    },
    {
      "q": "How did the Diablo 630 connect to a computer?",
      "a": "Per Wikipedia, it originally offered a Centronics parallel or RS-232 serial interface; the later All Purpose Interface (API) provided RS-232, Centronics, and GPIB (IEEE-488) on every unit."
    }
  ],
  "sources": [
    {
      "title": "Diablo 630",
      "url": "https://en.wikipedia.org/wiki/Diablo_630",
      "publisher": "Wikipedia"
    },
    {
      "title": "Diablo 630 daisy wheel printer (catalog 102627804)",
      "url": "https://www.computerhistory.org/collections/catalog/102627804",
      "publisher": "Computer History Museum"
    },
    {
      "title": "Diablo 630 daisy wheel printer (catalog 102673726)",
      "url": "https://www.computerhistory.org/collections/catalog/102673726",
      "publisher": "Computer History Museum"
    },
    {
      "title": "The Daisy Wheel Story (Michael Weisberg and George Comstock)",
      "url": "http://archive.computerhistory.org/resources/access/text/2017/03/102738203-05-01-acc.pdf",
      "publisher": "Computer History Museum"
    },
    {
      "title": "Diablo Data Systems",
      "url": "https://en.wikipedia.org/wiki/Diablo_Data_Systems",
      "publisher": "Wikipedia"
    },
    {
      "title": "Daisy wheel printing",
      "url": "https://en.wikipedia.org/wiki/Daisy_wheel_printing",
      "publisher": "Wikipedia"
    },
    {
      "title": "Diablo Model 630 printer",
      "url": "https://ub.fnwi.uva.nl/computermuseum/diablo630.html",
      "publisher": "University of Amsterdam Computer Museum"
    },
    {
      "title": "Diablo 630 (object nmah_882063)",
      "url": "https://americanhistory.si.edu/collections/object/nmah_882063",
      "publisher": "Smithsonian National Museum of American History"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "diablo 630",
    "diablo 630 printer",
    "daisy wheel printer",
    "xerox diablo",
    "diablo emulation",
    "diablo 630 command set",
    "letter-quality printer",
    "impact printer",
    "diablo systems",
    "diablo 630 ecs",
    "daisy wheel printing history"
  ],
  "cluster": "printer-models"
};

export default entry;
