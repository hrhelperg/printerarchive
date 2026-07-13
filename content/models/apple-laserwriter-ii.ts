import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "apple-laserwriter-ii",
  "title": "Apple LaserWriter II",
  "description": "Apple's 1988 LaserWriter II family (SC, NT, NTX) shared one 300-dpi Canon LBP-SX laser engine with swappable QuickDraw or PostScript controllers.",
  "summary": "The Apple LaserWriter II was a family of 300-dpi monochrome desktop laser printers introduced by Apple Computer, Inc. in 1988, built around a shared Canon LBP-SX marking engine and a modular controller board that could be swapped to change the printer's capabilities. The entry-level LaserWriter IISC was a host-based QuickDraw printer connected by SCSI, while the LaserWriter IINT and IINTX added Adobe PostScript and LocalTalk/AppleTalk networking; the IINTX used a faster Motorola 68020 and could attach a SCSI hard disk for fonts. All three printed at 300 dpi and up to eight pages per minute on the same 45-pound chassis. Apple later extended the line with the PostScript Level 2 LaserWriter IIf and IIg in October 1991, the IIg being described as the first LaserWriter with built-in Ethernet.",
  "manufacturer": "Apple Computer, Inc.",
  "category": "Laser printer",
  "era": "Desktop-publishing era (late 1980s–early 1990s)",
  "introduced": "1988 (LaserWriter IISC, IINT, and IINTX); LaserWriter IIf and IIg followed in October 1991 (per Apple Support technical specifications)",
  "discontinued": "Staggered: IISC July 1990; IINT and IINTX October 1991; IIf May 1993; IIg October 1993 (per Apple Support technical specifications)",
  "alsoKnownAs": [
    "LaserWriter IISC",
    "LaserWriter IINT",
    "LaserWriter IINTX",
    "LaserWriter IIf",
    "LaserWriter IIg"
  ],
  "specs": [
    {
      "label": "Print engine (marking engine)",
      "value": "Canon LBP-SX laser-xerographic (electrophotographic) engine, shared across all LaserWriter II models",
      "source": "Apple LaserWriter II NT/NTX Owner's Guide (1988), Appendix E; Wikipedia: LaserWriter (engine common to all models)"
    },
    {
      "label": "Resolution",
      "value": "300 dpi (text and graphics)",
      "source": "Apple LaserWriter II NT/NTX Owner's Guide (1988); Apple Support technical specifications"
    },
    {
      "label": "Print speed",
      "value": "Up to 8 pages per minute (actual speed depends on the image)",
      "source": "Apple LaserWriter II NT/NTX Owner's Guide (1988), Appendix E (shared Canon LBP-SX engine, eight pages per minute maximum)"
    },
    {
      "label": "Engine life / duty cycle",
      "value": "Minimum life expectancy 300,000 pages with no monthly page limit; recommended service interval 100,000 pages",
      "source": "Apple LaserWriter II NT/NTX Owner's Guide (1988); Apple Support technical specifications (engine min. life 300,000)"
    },
    {
      "label": "Processor",
      "value": "IISC: Motorola 68000 @ 7.45 MHz; IINT: 68000 @ 11.5 MHz; IINTX: 68020 @ 16.67 MHz; IIf: 68030 @ 20 MHz; IIg: 68030 @ 25 MHz",
      "source": "Apple Support technical specifications (per model); Apple LaserWriter II NT/NTX Owner's Guide (IINT 11.5 MHz 68000, IINTX 16.7 MHz 68020)"
    },
    {
      "label": "Page description language",
      "value": "IISC: QuickDraw (host-based, no PostScript); IINT: Adobe PostScript + Diablo 630 emulation; IINTX: Adobe PostScript + Diablo 630 and HP LaserJet emulation; IIf & IIg: Adobe PostScript Level 2 + PCL 4+",
      "source": "Apple Support technical specifications (per model); Apple LaserWriter II NT/NTX Owner's Guide"
    },
    {
      "label": "Standard RAM",
      "value": "IISC: 1 MB (fixed); IINT: 2 MB (fixed); IINTX: 2 MB (expandable to 12 MB); IIf: 2 MB (to 32 MB); IIg: 5 MB (to 32 MB)",
      "source": "Apple Support technical specifications (per model); Apple LaserWriter II NT/NTX Owner's Guide (IINT 2 MB, IINTX to 12 MB)"
    },
    {
      "label": "ROM",
      "value": "IISC: 16 KB; IINT & IINTX: 1 MB; IIf & IIg: 2 MB",
      "source": "Apple Support technical specifications (per model); Apple LaserWriter II NT/NTX Owner's Guide (1 MB, IINT/IINTX)"
    },
    {
      "label": "Resident fonts (PostScript models)",
      "value": "35 fonts in ROM across 11 typeface families: ITC Avant Garde, ITC Bookman, Courier, Helvetica, Helvetica Narrow, New Century Schoolbook, Palatino, Symbol, Times, ITC Zapf Chancery, ITC Zapf Dingbats (IINT/IINTX); additional PostScript fonts supported",
      "source": "Apple LaserWriter II NT/NTX Owner's Guide (1988), Appendix E"
    },
    {
      "label": "Interfaces & networking",
      "value": "IISC: SCSI (two ports for daisy-chaining), no AppleTalk; IINT: LocalTalk (AppleTalk), RS-232/RS-422 serial, Apple Desktop Bus; IINTX: adds SCSI (dedicated font hard disk) and a ROM-expansion slot; IIf: LocalTalk, RS-232/RS-422 serial; IIg: adds built-in Ethernet",
      "source": "Apple Support technical specifications (per model); Apple LaserWriter II NT/NTX Owner's Guide; Wikipedia: LaserWriter (IISC dual SCSI ports; IIg first with built-in Ethernet)"
    },
    {
      "label": "Paper handling",
      "value": "Supports U.S. letter, U.S. legal, A4, B5, and envelopes; automatic feed via 200-sheet paper cassette; envelope cassette holds 15; manual single-sheet feed",
      "source": "Apple LaserWriter II NT/NTX Owner's Guide (1988), Appendix E"
    },
    {
      "label": "Dimensions",
      "value": "8.7 in H x 20.2 in W x 18.7 in D (per Apple); owner's guide lists 22 cm H x 51.3 cm W x 47.5 cm D",
      "source": "Apple Support technical specifications; Apple LaserWriter II NT/NTX Owner's Guide (1988)"
    },
    {
      "label": "Weight",
      "value": "20.5 kg (45 lb)",
      "source": "Apple LaserWriter II NT/NTX Owner's Guide (1988); Apple Support technical specifications"
    },
    {
      "label": "Power",
      "value": "90-126 V AC, 50-60 Hz (US/Japan); 198-264 V AC, 50 Hz (Europe/Australia); 170 W standby average, 900 W maximum",
      "source": "Apple LaserWriter II NT/NTX Owner's Guide (1988); Apple Support technical specifications"
    },
    {
      "label": "Introduced",
      "value": "1988 (IISC, IINT, IINTX); IIf and IIg in October 1991",
      "source": "Apple Support technical specifications (per model)"
    },
    {
      "label": "Discontinued",
      "value": "IISC July 1990; IINT and IINTX October 1991; IIf May 1993; IIg October 1993",
      "source": "Apple Support technical specifications (per model)"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What the Apple LaserWriter II was"
    },
    {
      "kind": "paragraph",
      "text": "The Apple LaserWriter II was a family of 300-dpi monochrome desktop laser printers introduced by Apple Computer, Inc. in 1988. Three models launched under the name — the entry-level LaserWriter IISC, the mid-range LaserWriter IINT, and the high-end LaserWriter IINTX — and Apple later extended the line with the LaserWriter IIf and IIg in October 1991. All shared one physical chassis and the same Canon LBP-SX marking engine, printing at 300 dots per inch and up to eight pages per minute, with a minimum engine life expectancy of 300,000 pages, as documented in Apple's LaserWriter II NT/NTX Owner's Guide and Apple's per-model technical-specification pages."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "A family built on interchangeable controllers"
    },
    {
      "kind": "paragraph",
      "text": "The defining idea of the LaserWriter II was modularity. As Wikipedia records, the LaserWriter II was designed to allow complete replacement of the circuit board that operates the printer, while across all the different models the print engine stayed the same. Swapping the controller board changed what the printer could do without changing the engine underneath. The LaserWriter IISC was a low-end, host-based QuickDraw printer that connected over SCSI, did not use PostScript, and — per Wikipedia — did not require an Adobe license; it carried two SCSI ports for daisy-chaining and no AppleTalk support. The LaserWriter IINT added Adobe PostScript and AppleTalk networking, and the LaserWriter IINTX paired PostScript and AppleTalk with a SCSI controller for a dedicated printer-font hard disk."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The Canon LBP-SX engine and how a page was printed"
    },
    {
      "kind": "paragraph",
      "text": "Appendix E of Apple's LaserWriter II NT/NTX Owner's Guide identifies the marking engine as a Canon LBP-SX laser-xerographic mechanism. Like other laser printers of its generation, it formed each page electrophotographically: a laser writes a latent image on a photoconductor drum, the image is developed with toner, and heat fuses the toner to the paper — the guide notes the fuser reaches high temperature to fuse the dots onto the page. The guide records a print quality of 300 dots per inch for text and graphics (about 7.4 million dots per page) and a maximum speed of eight pages per minute. Consumables and wear parts followed the cartridge model of that engine generation; the guide lists a minimum life expectancy of 300,000 pages and a recommended service interval of 100,000 pages."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "PostScript, QuickDraw, and the raster image processor"
    },
    {
      "kind": "paragraph",
      "text": "How a page was described differed sharply across the family. The LaserWriter IISC used QuickDraw and relied on the host Macintosh to rasterize the page before sending it over SCSI; Apple's specifications list a 68000 processor at 7.45 MHz and just 16 KB of ROM in that model. The PostScript models carried far more computing power to act as their own raster image processors: per Apple's specifications and the owner's guide, the IINT used a 68000 at 11.5 MHz and the IINTX a 68020 at 16.67 MHz, each with 1 MB of ROM. The guide lists 35 resident fonts in ROM spanning eleven typeface families — ITC Avant Garde, ITC Bookman, Courier, Helvetica, Helvetica Narrow, New Century Schoolbook, Palatino, Symbol, Times, ITC Zapf Chancery, and ITC Zapf Dingbats — and notes support for additional PostScript fonts. The IINT could also interpret Diablo 630 data, while the IINTX added HP LaserJet emulation; the IINTX's RAM was expandable to 12 MB and it could attach a dedicated SCSI hard disk for fonts."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Networking and connectivity"
    },
    {
      "kind": "paragraph",
      "text": "Connectivity tracked each model's controller. Apple's specifications list the IISC with a SCSI interface only, while the IINT and IINTX offered LocalTalk (running the AppleTalk protocols), RS-232/RS-422 serial, and Apple Desktop Bus connections per the owner's guide; the IINTX added a SCSI interface for its font hard disk and a slot for ROM expansion. Because AppleTalk let several Macintosh computers share one printer, a networked LaserWriter II could serve a workgroup. The later LaserWriter IIg went further: Apple's specifications list an Ethernet port alongside LocalTalk and serial, and Wikipedia describes the IIg as the first LaserWriter with a built-in Ethernet network interface."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The IIf and IIg (1991): PostScript Level 2"
    },
    {
      "kind": "paragraph",
      "text": "In October 1991 Apple extended the line with the LaserWriter IIf and IIg. Apple's specifications list both with a Motorola 68030 processor — 20 MHz in the IIf and 25 MHz in the IIg — 2 MB of ROM, and support for Adobe PostScript Level 2 and PCL 4+ (HP LaserJet) emulation. The IIf carried 2 MB of RAM expandable to 32 MB; the IIg started at 5 MB, also expandable to 32 MB. Both continued to use the same 300-dpi, eight-page-per-minute engine and 45-pound chassis as the original 1988 models."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Place in printing history"
    },
    {
      "kind": "paragraph",
      "text": "The LaserWriter II carried forward the desktop-publishing role established by the original 1985 Apple LaserWriter, but with a modular design that let buyers choose their price and capability point — from a host-based QuickDraw printer to a networked PostScript workhorse — on a common engine and chassis. Apple's specifications record staggered discontinuations: the IISC in July 1990, the IINT and IINTX in October 1991 as the IIf and IIg arrived, the IIf in May 1993, and the IIg in October 1993."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Documented specifications and reference scope"
    },
    {
      "kind": "paragraph",
      "text": "This page records only specifications traceable to authoritative sources: Apple's own technical-specification support pages for each model and Apple's LaserWriter II NT/NTX Owner's Guide, supplemented by Wikipedia for the family's design history. Where the record is model-specific — processor, memory, page description language, and interfaces all differ between the SC, NT, NTX, IIf, and IIg — the differences are noted rather than averaged. Any figure that could not be traced to a reliable source is omitted rather than estimated. This is a historical reference, not a buying guide, and it quotes no current pricing or availability."
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
          "Print engine (marking engine)",
          "Canon LBP-SX laser-xerographic (electrophotographic) engine, shared across all LaserWriter II models"
        ],
        [
          "Resolution",
          "300 dpi (text and graphics)"
        ],
        [
          "Print speed",
          "Up to 8 pages per minute (actual speed depends on the image)"
        ],
        [
          "Engine life / duty cycle",
          "Minimum life expectancy 300,000 pages with no monthly page limit; recommended service interval 100,000 pages"
        ],
        [
          "Processor",
          "IISC: Motorola 68000 @ 7.45 MHz; IINT: 68000 @ 11.5 MHz; IINTX: 68020 @ 16.67 MHz; IIf: 68030 @ 20 MHz; IIg: 68030 @ 25 MHz"
        ],
        [
          "Page description language",
          "IISC: QuickDraw (host-based, no PostScript); IINT: Adobe PostScript + Diablo 630 emulation; IINTX: Adobe PostScript + Diablo 630 and HP LaserJet emulation; IIf & IIg: Adobe PostScript Level 2 + PCL 4+"
        ],
        [
          "Standard RAM",
          "IISC: 1 MB (fixed); IINT: 2 MB (fixed); IINTX: 2 MB (expandable to 12 MB); IIf: 2 MB (to 32 MB); IIg: 5 MB (to 32 MB)"
        ],
        [
          "ROM",
          "IISC: 16 KB; IINT & IINTX: 1 MB; IIf & IIg: 2 MB"
        ],
        [
          "Resident fonts (PostScript models)",
          "35 fonts in ROM across 11 typeface families: ITC Avant Garde, ITC Bookman, Courier, Helvetica, Helvetica Narrow, New Century Schoolbook, Palatino, Symbol, Times, ITC Zapf Chancery, ITC Zapf Dingbats (IINT/IINTX); additional PostScript fonts supported"
        ],
        [
          "Interfaces & networking",
          "IISC: SCSI (two ports for daisy-chaining), no AppleTalk; IINT: LocalTalk (AppleTalk), RS-232/RS-422 serial, Apple Desktop Bus; IINTX: adds SCSI (dedicated font hard disk) and a ROM-expansion slot; IIf: LocalTalk, RS-232/RS-422 serial; IIg: adds built-in Ethernet"
        ],
        [
          "Paper handling",
          "Supports U.S. letter, U.S. legal, A4, B5, and envelopes; automatic feed via 200-sheet paper cassette; envelope cassette holds 15; manual single-sheet feed"
        ],
        [
          "Dimensions",
          "8.7 in H x 20.2 in W x 18.7 in D (per Apple); owner's guide lists 22 cm H x 51.3 cm W x 47.5 cm D"
        ],
        [
          "Weight",
          "20.5 kg (45 lb)"
        ],
        [
          "Power",
          "90-126 V AC, 50-60 Hz (US/Japan); 198-264 V AC, 50 Hz (Europe/Australia); 170 W standby average, 900 W maximum"
        ],
        [
          "Introduced",
          "1988 (IISC, IINT, IINTX); IIf and IIg in October 1991"
        ],
        [
          "Discontinued",
          "IISC July 1990; IINT and IINTX October 1991; IIf May 1993; IIg October 1993"
        ]
      ],
      "sources": [
        "Apple LaserWriter II NT/NTX Owner's Guide (1988), Appendix E",
        "Wikipedia: LaserWriter (engine common to all models)",
        "Apple LaserWriter II NT/NTX Owner's Guide (1988)",
        "Apple Support technical specifications",
        "Apple Support technical specifications (engine min. life 300,000)",
        "Apple Support technical specifications (per model)",
        "Apple LaserWriter II NT/NTX Owner's Guide (IINT 11.5 MHz 68000, IINTX 16.7 MHz 68020)",
        "Apple LaserWriter II NT/NTX Owner's Guide",
        "Apple LaserWriter II NT/NTX Owner's Guide (IINT 2 MB, IINTX to 12 MB)",
        "Apple LaserWriter II NT/NTX Owner's Guide (1 MB, IINT/IINTX)",
        "Wikipedia: LaserWriter (IISC dual SCSI ports; IIg first with built-in Ethernet)"
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
      "slug": "apple-laserwriter"
    },
    {
      "section": "models",
      "slug": "hp-laserjet-original"
    },
    {
      "section": "models",
      "slug": "hp-laserjet-4"
    },
    {
      "section": "guides",
      "slug": "laser-printing"
    },
    {
      "section": "guides",
      "slug": "toner-cartridge"
    },
    {
      "section": "guides",
      "slug": "photoconductor-drum"
    }
  ],
  "faqs": [
    {
      "q": "When was the Apple LaserWriter II introduced?",
      "a": "Apple introduced the core LaserWriter II line — the IISC, IINT, and IINTX — in 1988, according to Apple's technical-specification pages. Apple extended the family with the LaserWriter IIf and IIg in October 1991."
    },
    {
      "q": "What is the difference between the LaserWriter II SC, NT, and NTX?",
      "a": "Per Apple's specifications and owner's guide, the IISC is a host-based QuickDraw printer connected by SCSI with no PostScript (a 68000 at 7.45 MHz, 1 MB RAM). The IINT adds Adobe PostScript and LocalTalk/AppleTalk networking on a 68000 at 11.5 MHz with 2 MB RAM. The IINTX uses a faster 68020 at 16.67 MHz, expands RAM to 12 MB, and adds a SCSI interface for a dedicated font hard disk."
    },
    {
      "q": "What print engine did the LaserWriter II use?",
      "a": "Appendix E of Apple's LaserWriter II NT/NTX Owner's Guide identifies the marking engine as a Canon LBP-SX laser-xerographic mechanism, and Wikipedia notes the same engine was used across all LaserWriter II models. It printed 300 dots per inch at up to eight pages per minute."
    },
    {
      "q": "Did the LaserWriter II use PostScript?",
      "a": "The IINT, IINTX, IIf, and IIg used Adobe PostScript (Level 2 on the IIf and IIg). The entry-level IISC did not — it used QuickDraw and, per Wikipedia, did not require an Adobe license."
    },
    {
      "q": "Which LaserWriter II had Ethernet?",
      "a": "The LaserWriter IIg (October 1991). Apple's specifications list an Ethernet port alongside LocalTalk and serial, and Wikipedia describes it as the first LaserWriter with a built-in Ethernet network interface."
    }
  ],
  "sources": [
    {
      "title": "LaserWriter IISC: Technical Specifications",
      "url": "https://support.apple.com/en-us/112246",
      "publisher": "Apple Inc."
    },
    {
      "title": "LaserWriter IINT: Technical Specifications",
      "url": "https://support.apple.com/en-us/112250",
      "publisher": "Apple Inc."
    },
    {
      "title": "LaserWriter IINTX: Technical Specifications",
      "url": "https://support.apple.com/en-us/112249",
      "publisher": "Apple Inc."
    },
    {
      "title": "LaserWriter IIf: Technical Specifications",
      "url": "https://support.apple.com/en-us/112255",
      "publisher": "Apple Inc."
    },
    {
      "title": "LaserWriter IIg: Technical Specifications",
      "url": "https://support.apple.com/en-us/112254",
      "publisher": "Apple Inc."
    },
    {
      "title": "LaserWriter II NT/NTX Owner's Guide (1988), Appendix E: Specifications and Parts List",
      "url": "https://vintageapple.org/laserwriter/pdf/LaserWriter_II_NT_NTX_Owners_Guide_1988.pdf",
      "publisher": "Apple Computer, Inc. (archived at VintageApple.org)"
    },
    {
      "title": "LaserWriter",
      "url": "https://en.wikipedia.org/wiki/LaserWriter",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "apple laserwriter ii",
    "laserwriter ii nt",
    "laserwriter ii ntx",
    "laserwriter ii sc",
    "canon lbp-sx engine",
    "postscript laser printer",
    "300 dpi laser printer",
    "quickdraw printer",
    "localtalk appletalk printer",
    "apple laser printer 1988",
    "laserwriter iig ethernet",
    "desktop publishing history"
  ],
  "cluster": "printer-models"
};

export default entry;
