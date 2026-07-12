import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "xerox-9700",
  "title": "Xerox 9700",
  "description": "The Xerox 9700 (1977) was a 300-dpi, 120-page-per-minute cut-sheet laser printer Xerox calls its first commercial laser printer.",
  "summary": "The Xerox 9700 Electronic Printing System, introduced in 1977, was a high-volume laser printer that produced 300-dpi output on cut-sheet plain paper at up to 120 pages per minute. Built on the Xerox 9200 copier platform and driven by a modified DEC PDP-11/34 controller, it applied laser xerography developed at Xerox PARC by Gary Starkweather's team. Xerox describes it as its first commercial laser printer and one of the most successful products in its history, and it became a mainstay for high-volume billing and statement printing.",
  "manufacturer": "Xerox Corporation",
  "category": "High-volume production laser printer (electronic printing system)",
  "era": "Late 1970s (mainframe data-center era)",
  "introduced": "1977",
  "discontinued": "1997",
  "alsoKnownAs": [
    "Xerox 9700 Electronic Printing System",
    "Xerox 9700 EPS"
  ],
  "specs": [
    {
      "label": "Print method",
      "value": "Laser xerographic (electrophotographic) printing",
      "source": "DigiBarn Computer Museum"
    },
    {
      "label": "Resolution",
      "value": "300 dpi",
      "source": "Xerox Newsroom"
    },
    {
      "label": "Print speed",
      "value": "Up to 120 pages per minute (about two pages per second)",
      "source": "Xerox Newsroom"
    },
    {
      "label": "Paper handling",
      "value": "Cut-sheet plain paper; simplex and duplex, portrait or landscape",
      "source": "Wikipedia"
    },
    {
      "label": "Print controller",
      "value": "Modified DEC PDP-11/34 minicomputer acting as rasterizer",
      "source": "Wikipedia"
    },
    {
      "label": "Input capacity",
      "value": "2,500-sheet main tray plus 400-sheet auxiliary tray",
      "source": "Wikipedia"
    },
    {
      "label": "Output capacity",
      "value": "Two output stackers holding 1,500 sheets each",
      "source": "Wikipedia"
    },
    {
      "label": "Print engine platform",
      "value": "Based on the Xerox 9200 copier",
      "source": "Wikipedia"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "The Xerox 9700 Electronic Printing System was a high-volume laser printer introduced by Xerox Corporation in 1977. It imaged cut-sheet plain paper at up to 120 pages per minute at a resolution of 300 dots per inch, producing output directly from digital data supplied by a mainframe or minicomputer host. Xerox positioned it as a production system for data centers, where it replaced impact line printers and preprinted multipart forms for jobs such as billing and statement runs. It remained in the Xerox product line until 1997."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Origins at Xerox PARC"
    },
    {
      "kind": "paragraph",
      "text": "The 9700's imaging technology grew out of laser-printing research that Gary Starkweather began at Xerox's Webster, New York laboratory in 1969 and continued after transferring to the Xerox Palo Alto Research Center (PARC). Working with colleagues including Butler Lampson and Ron Rider, the PARC team built a laser-printer prototype that served as the center's office printer for several years and proved reliable in daily use. That research supplied the core imaging engine Xerox productized as the 9700, which succeeded the company's earlier Xerox 1200 Computer Printing System."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it printed: laser xerography"
    },
    {
      "kind": "paragraph",
      "text": "The 9700 combined digital raster imaging with Xerox's xerographic (electrophotographic) process. The Xerox 9200 copier engine on which the 9700 was built used a helium-neon laser that, modulated by the incoming page data and swept across the page, discharged selected areas of an electrically charged, light-sensitive photoconductor to form a latent electrostatic image. Dry toner adhered to the charged pattern, was transferred to plain paper, and was bonded by heat fusing. Building the print engine on that 9200 platform allowed the 9700 to sustain production speeds of about two pages per second at 300 dpi."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture and paper handling"
    },
    {
      "kind": "paragraph",
      "text": "A modified Digital Equipment Corporation PDP-11/34 minicomputer served as the print controller and rasterizer, converting host data streams together with stored fonts and forms into the bitmap the laser imaged onto the photoconductor. The system printed on cut-sheet paper and supported both simplex and duplex output in portrait or landscape orientation. Paper handling reflected its production role: a main input tray held up to 2,500 sheets, with a 400-sheet auxiliary tray, and two output stackers each held 1,500 sheets."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Significance and commercial impact"
    },
    {
      "kind": "paragraph",
      "text": "The 9700 was one of the most commercially successful products in Xerox's history; the company states it routinely generated more than $1 billion in annual revenues. Because it could merge variable data with electronically stored forms and fonts, it became a mainstay for high-volume transactional documents such as credit-card and utility bills, bank statements, insurance policies, and investment reports, displacing preprinted multipart forms. Xerox credits the product with helping launch the digital-printing industry."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Place in printing history"
    },
    {
      "kind": "paragraph",
      "text": "Xerox describes the 9700 as \"the company's first commercial laser printer.\" It was among the earliest production laser printers, arriving shortly after IBM's 3800, which was announced in 1975 and first shipped in 1976 for mainframe data centers. The 9700 also has a place in software history: Richard Stallman's inability to obtain source code to modify the printer's software at the MIT AI Lab around 1980 is frequently cited as an early influence on his advocacy for free software. The underlying PARC laser-printing work is widely regarded as one of that center's most consequential inventions, and the 9700 anchored a Xerox electronic-printing line that continued for decades."
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
          "Laser xerographic (electrophotographic) printing"
        ],
        [
          "Resolution",
          "300 dpi"
        ],
        [
          "Print speed",
          "Up to 120 pages per minute (about two pages per second)"
        ],
        [
          "Paper handling",
          "Cut-sheet plain paper; simplex and duplex, portrait or landscape"
        ],
        [
          "Print controller",
          "Modified DEC PDP-11/34 minicomputer acting as rasterizer"
        ],
        [
          "Input capacity",
          "2,500-sheet main tray plus 400-sheet auxiliary tray"
        ],
        [
          "Output capacity",
          "Two output stackers holding 1,500 sheets each"
        ],
        [
          "Print engine platform",
          "Based on the Xerox 9200 copier"
        ]
      ],
      "sources": [
        "Wikipedia",
        "Xerox Newsroom",
        "DigiBarn Computer Museum"
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
      "slug": "laser-printing"
    },
    {
      "section": "guides",
      "slug": "photoconductor-drum"
    },
    {
      "section": "guides",
      "slug": "laser-scanner-unit"
    },
    {
      "section": "guides",
      "slug": "toner-cartridge"
    },
    {
      "section": "tools",
      "slug": "raster-image-processor"
    },
    {
      "section": "models",
      "slug": "hp-laserjet-original"
    }
  ],
  "faqs": [
    {
      "q": "When was the Xerox 9700 introduced and discontinued?",
      "a": "Xerox introduced the 9700 Electronic Printing System in 1977, and it remained in the product line until 1997."
    },
    {
      "q": "How fast was the Xerox 9700 and at what resolution did it print?",
      "a": "According to Xerox, it printed at up to 120 pages per minute (about two pages per second) at 300 dots per inch on cut-sheet plain paper."
    },
    {
      "q": "Was the Xerox 9700 the first laser printer?",
      "a": "Xerox describes it as \"the company's first commercial laser printer.\" It was among the earliest production laser printers but followed IBM's 3800, which was announced in 1975 and first shipped in 1976 for mainframe data centers."
    },
    {
      "q": "How did the Xerox 9700 print?",
      "a": "It used laser xerography. The Xerox 9200 copier engine it was built on used a helium-neon laser to write a latent image onto a charged photoconductor, which was developed with dry toner and fused to plain paper. A modified DEC PDP-11/34 minicomputer served as the controller and rasterizer."
    },
    {
      "q": "What was the Xerox 9700 used for?",
      "a": "It was a data-center production printer used for high-volume transactional documents such as credit-card and utility bills, bank statements, insurance policies, and investment reports."
    }
  ],
  "sources": [
    {
      "title": "Xerox 9700",
      "url": "https://en.wikipedia.org/wiki/Xerox_9700",
      "publisher": "Wikipedia"
    },
    {
      "title": "Xerox Celebrates Xerox 9700 Innovation (40th anniversary)",
      "url": "https://www.news.xerox.com/news/40-year-anniversay-of-the-Xerox-9700-and-its-innovation",
      "publisher": "Xerox Corporation"
    },
    {
      "title": "Xerox 9700 Electronic Printing System Reference Manual (910002B, September 1978)",
      "url": "https://www.bitsavers.org/pdf/xerox/laser_printing_systems/9700/910002B_Xerox_9700_Reference_Manual_197809.pdf",
      "publisher": "Xerox Corporation (via Bitsavers)"
    },
    {
      "title": "The Story of the Xerox 9700 Electronic Printing System",
      "url": "https://digibarn.com/collections/printers/xerox-9700/",
      "publisher": "DigiBarn Computer Museum"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "xerox 9700",
    "xerox 9700 electronic printing system",
    "laser printer history",
    "xerographic laser printing",
    "gary starkweather",
    "xerox parc laser printer",
    "300 dpi laser printer",
    "120 pages per minute",
    "high-volume production printing",
    "first commercial laser printer",
    "cut-sheet laser printer",
    "pdp-11 print controller"
  ],
  "cluster": "printer-models"
};

export default entry;
