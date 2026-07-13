import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "lexmark-optra",
  "title": "Lexmark Optra (1994)",
  "description": "The Lexmark Optra was the IBM spin-off's mid-1990s laser printer line, printing up to 1200 dpi with PCL 5 and PostScript Level 2 emulations.",
  "summary": "The Lexmark Optra was the flagship laser printer line of Lexmark International, the company created in 1991 from IBM's printer operations. Trade coverage placed its high-resolution models in the mid-1990s: Byte magazine's February 1995 issue evaluated Lexmark's new 1200-dpi Optra printer, one of the products highlighted around Fall Comdex 1994. According to IBM's printer documentation, Optra models rendered pages through enhanced PCL 5 and PostScript Level 2 emulations at 300, 600, or 1200 dots per inch, with options such as duplex printing and broad paper and envelope handling. This page records only specifications traceable to authoritative documentation and omits figures — such as exact print speeds and memory sizes — that could not be verified.",
  "manufacturer": "Lexmark International, Inc.",
  "category": "Laser printer",
  "era": "Mid-1990s workgroup laser era",
  "introduced": "1994",
  "alsoKnownAs": [
    "Lexmark 4049 series",
    "Optra R",
    "Optra L",
    "Optra N"
  ],
  "specs": [
    {
      "label": "Page-description languages",
      "value": "Enhanced PCL 5 (PCL 5e on later Optra Se units) and PostScript Level 2 emulations",
      "source": "IBM Documentation (AIX printer reference)"
    },
    {
      "label": "Native data-stream heritage",
      "value": "Belongs to the IBM/Lexmark laser lineage whose native command language was PPDS (Personal Printer Data Stream); Lexmark references document Optra printers switching among PCL, PostScript, and PPDS via PJL",
      "source": "Lexmark Technical Reference"
    },
    {
      "label": "Print resolution",
      "value": "300, 600, and 1200 dpi (600 dpi default)",
      "source": "IBM Documentation; Byte, Feb 1995"
    },
    {
      "label": "Duplex printing",
      "value": "Optional two-sided printing (long-edge or short-edge binding)",
      "source": "IBM Documentation (AIX printer reference)"
    },
    {
      "label": "Paper sizes",
      "value": "Letter, Legal, A4, A5, B5, Executive; envelopes Monarch (7 3/4), Com 9, Com 10, DL, C5, and B5",
      "source": "IBM Documentation (AIX printer reference)"
    },
    {
      "label": "Media types",
      "value": "Plain, rough, bond, transparency, labels, card stock, letterhead, preprinted, colored, envelope, and custom stock, from manual feed, input trays, and an envelope feeder",
      "source": "IBM Documentation (AIX printer reference)"
    },
    {
      "label": "Finishing (Optra Se)",
      "value": "Internal collation and selection among multiple output bins",
      "source": "IBM Documentation (AIX printer reference)"
    },
    {
      "label": "Print-quality technology (Optra S)",
      "value": "PQET (Print Quality Enhancement Technology) at 300 and 600 dpi, and PictureGrade grayscale enhancement under PostScript Level 2",
      "source": "Lexmark Optra S User's Guide"
    },
    {
      "label": "Management software",
      "value": "MarkVision printer-management utility (MarkVision and Optra are Lexmark trademarks)",
      "source": "Lexmark Optra S User's Guide"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What the Lexmark Optra was"
    },
    {
      "kind": "paragraph",
      "text": "The Lexmark Optra was a family of desktop and workgroup laser printers marketed by Lexmark International, Inc. — the company formed in 1991 when a leveraged buyout separated IBM's printer, typewriter, and keyboard operations into an independent business. The Optra name became Lexmark's principal laser-printer brand of the mid-1990s, spanning monochrome workgroup and departmental models (sold under designations such as Optra R, Optra L, and Optra N) and, in a later branch, color models such as the Optra C. IBM's own printer documentation lists the \"Lexmark Optra Laser Printer\" among the devices its operating systems supported, describing the machine's paper handling and page-description-language emulations. Product and service materials of the period also refer to the line by the 4049 engine designation."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "A 1200-dpi workgroup laser"
    },
    {
      "kind": "paragraph",
      "text": "The Optra's headline capability was high resolution. Byte magazine's February 1995 issue carried a short evaluation titled \"LexMark Delivers Outstanding Resolution,\" reporting that Lexmark's new 1200-dpi printer produced excellent quality on grayscale images such as photographs, while the difference between 1200 and 600 dpi was less pronounced on ordinary text (Byte, Vol. 20 No. 2, February 1995, p. 23). The same issue's Fall Comdex 1994 roundup considered products publicly announced within about 30 days of that November show, placing the 1200-dpi Optra's debut in late 1994. IBM's printer documentation likewise records that the Optra supported 300, 600, and 1200 dpi, with 600 dpi as the default."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Print languages: PCL, PostScript, and PPDS"
    },
    {
      "kind": "paragraph",
      "text": "According to IBM's printer documentation, the Optra accepted jobs in two page-description-language emulations: Lexmark's enhanced PCL 5 (PCL 5e on later Optra Se units), an emulation of Hewlett-Packard's Printer Command Language, and PostScript Level 2. Beyond these, the Optra belonged to the IBM/Lexmark laser lineage whose native data stream was PPDS (Personal Printer Data Stream) — a command language IBM first introduced in 1981 for its dot-matrix Graphics Printer and Proprinter, then renamed PPDS when IBM introduced the LaserPrinter in 1989 — and Lexmark's technical references document Optra printers selecting among PCL, PostScript, and PPDS through PJL (Printer Job Language) commands. Turning any of these page descriptions into the dot pattern the laser writes is the work of a raster image processor."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How the Optra printed a page"
    },
    {
      "kind": "paragraph",
      "text": "Like other laser printers, the Optra formed each page electrophotographically: a laser scanner unit swept a modulated beam across a rotating photoconductor drum to write a latent image, which was then developed with toner and fused to the paper by heat and pressure. The toner and wear-prone imaging components were supplied in replaceable cartridges. This laser (electrophotographic) method was the same one used across the desktop and workgroup laser printers of the era, distinguishing the Optra from the inkjet and dot-matrix machines that Lexmark and its rivals also sold."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Media handling and finishing"
    },
    {
      "kind": "paragraph",
      "text": "IBM's documentation details the Optra's media flexibility. Paper sizes included Letter, Legal, A4, A5, B5, and Executive, plus envelope sizes Monarch (7 3/4), Com 9, Com 10, DL, C5, and B5. Supported stock types ranged across plain, rough, bond, transparency, labels, card stock, letterhead, preprinted, colored, envelope, and custom media, drawn from sources such as manual feed, multiple input trays, and an envelope feeder. An optional duplex unit enabled two-sided printing with long-edge or short-edge binding, and the networked Optra Se added internal collation and selection among multiple output bins."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "PQET and PictureGrade"
    },
    {
      "kind": "paragraph",
      "text": "Lexmark's Optra S generation added two print-quality enhancements documented in its user guides. PQET (Print Quality Enhancement Technology) smoothed the edges of text and graphics; per Lexmark's Optra S User's Guide it was available at 300 and 600 dpi (offering the most benefit at 300 dpi) and was bypassed when printing at 1200 dpi. PictureGrade improved grayscale printing at 300 and 600 dpi under PostScript Level 2 emulation by raising the effective screen frequency while preserving a large number of gray levels. Lexmark also supplied MarkVision, a printer-management utility whose name — like Optra itself — is a registered Lexmark trademark."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Place in printing history"
    },
    {
      "kind": "paragraph",
      "text": "The Optra was Lexmark's flagship laser line in the years just after its 1991 separation from IBM, carrying IBM's laser-printer engineering forward under an independent brand. It followed the IBM/Lexmark 4039 LaserPrinter generation and competed with contemporaries such as Hewlett-Packard's LaserJet 4 and Apple's PostScript LaserWriter in the mid-1990s market for 600- and 1200-dpi office lasers. Over the second half of the decade the Optra name spread across many variants — R, L, N, S, E, T, and color C models — before Lexmark reorganized its laser range under later letter-series names. Lexmark itself was taken private in 2016 and acquired by Xerox in 2025."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Reference scope"
    },
    {
      "kind": "paragraph",
      "text": "This page records only specifications that can be traced to authoritative sources — IBM's printer documentation, Lexmark's own user guides and technical references, and contemporaneous Byte magazine coverage. Figures commonly quoted by resellers but not confirmed against those sources — including exact engine print speeds in pages per minute, standard and maximum memory, processor, physical dimensions and weight, launch pricing, and a precise discontinuation date — are omitted here rather than estimated. It is a historical reference, not a buying guide, and quotes no current pricing or availability."
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
          "Page-description languages",
          "Enhanced PCL 5 (PCL 5e on later Optra Se units) and PostScript Level 2 emulations"
        ],
        [
          "Native data-stream heritage",
          "Belongs to the IBM/Lexmark laser lineage whose native command language was PPDS (Personal Printer Data Stream); Lexmark references document Optra printers switching among PCL, PostScript, and PPDS via PJL"
        ],
        [
          "Print resolution",
          "300, 600, and 1200 dpi (600 dpi default)"
        ],
        [
          "Duplex printing",
          "Optional two-sided printing (long-edge or short-edge binding)"
        ],
        [
          "Paper sizes",
          "Letter, Legal, A4, A5, B5, Executive; envelopes Monarch (7 3/4), Com 9, Com 10, DL, C5, and B5"
        ],
        [
          "Media types",
          "Plain, rough, bond, transparency, labels, card stock, letterhead, preprinted, colored, envelope, and custom stock, from manual feed, input trays, and an envelope feeder"
        ],
        [
          "Finishing (Optra Se)",
          "Internal collation and selection among multiple output bins"
        ],
        [
          "Print-quality technology (Optra S)",
          "PQET (Print Quality Enhancement Technology) at 300 and 600 dpi, and PictureGrade grayscale enhancement under PostScript Level 2"
        ],
        [
          "Management software",
          "MarkVision printer-management utility (MarkVision and Optra are Lexmark trademarks)"
        ]
      ],
      "sources": [
        "IBM Documentation (AIX printer reference)",
        "Lexmark Technical Reference",
        "IBM Documentation",
        "Byte, Feb 1995",
        "Lexmark Optra S User's Guide"
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
      "slug": "pcl"
    },
    {
      "section": "tools",
      "slug": "postscript"
    }
  ],
  "faqs": [
    {
      "q": "What was the Lexmark Optra?",
      "a": "It was a laser printer line from Lexmark International, the company created in 1991 from IBM's printer operations. The Optra name (the 4049-era engine) covered workgroup and departmental monochrome laser printers such as the Optra R, L, and N, with a later color branch including the Optra C."
    },
    {
      "q": "When was the Lexmark Optra introduced?",
      "a": "Trade coverage places the high-resolution Optra in the mid-1990s. Byte magazine's February 1995 issue evaluated Lexmark's new 1200-dpi Optra printer, and it was among the products highlighted around Fall Comdex 1994 (November 1994), pointing to a late-1994 debut."
    },
    {
      "q": "What print languages did the Optra support?",
      "a": "Per IBM's printer documentation, Optra models supported enhanced PCL 5 (PCL 5e on later Optra Se units) and PostScript Level 2 emulations. Lexmark's technical references also document the IBM/Lexmark PPDS (Personal Printer Data Stream), selectable alongside PCL and PostScript through PJL commands."
    },
    {
      "q": "What resolution did the Optra print at?",
      "a": "IBM's documentation lists 300, 600, and 1200 dpi, with 600 dpi as the default. The 1200-dpi capability was the feature Byte reviewed in February 1995."
    },
    {
      "q": "Is the Lexmark Optra still made?",
      "a": "No. The Optra was a 1990s product line that Lexmark later superseded with other letter-series laser families. Lexmark itself was taken private in 2016 and acquired by Xerox in 2025. This page does not assert a precise Optra discontinuation date, as none was verified against an authoritative source."
    }
  ],
  "sources": [
    {
      "title": "Lexmark Optra Laser Printer (AIX 7.2 printer reference)",
      "url": "https://www.ibm.com/docs/en/ssw_aix_72/printer/lexmark_optra_laser.html",
      "publisher": "IBM Documentation"
    },
    {
      "title": "Lexmark Optra Se Laser Printer (AIX 7.2 printer reference)",
      "url": "https://www.ibm.com/docs/en/ssw_aix_72/printer/lexmark_optra_se.html",
      "publisher": "IBM Documentation"
    },
    {
      "title": "Byte, Vol. 20 No. 2 (Feb. 1995): \"LexMark Delivers Outstanding Resolution\" (p. 23) and Fall Comdex 1994 coverage",
      "url": "http://ftp.math.utah.edu/pub/tex/bib/toc/byte1995.html",
      "publisher": "Byte Magazine (catalogued in the University of Utah TeX bibliography archive)"
    },
    {
      "title": "Optra S User's Guide (February 1998) — PQET, PictureGrade, MarkVision",
      "url": "https://publications.lexmark.com/publications/pdfs/optras/enUser.pdf",
      "publisher": "Lexmark"
    },
    {
      "title": "Lexmark Technical Reference",
      "url": "https://publications.lexmark.com/publications/pdfs/techref_WB.pdf",
      "publisher": "Lexmark"
    },
    {
      "title": "Lexmark",
      "url": "https://en.wikipedia.org/wiki/Lexmark",
      "publisher": "Wikipedia"
    },
    {
      "title": "Personal Printer Data Stream",
      "url": "https://en.wikipedia.org/wiki/Personal_Printer_Data_Stream",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "lexmark optra",
    "lexmark 4049",
    "optra laser printer",
    "1200 dpi laser printer",
    "pcl 5 emulation",
    "postscript level 2 printer",
    "ppds personal printer data stream",
    "markvision",
    "lexmark laser printer",
    "1990s workgroup laser printer",
    "optra r",
    "print quality enhancement technology"
  ],
  "cluster": "printer-models"
};

export default entry;
