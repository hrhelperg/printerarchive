import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "impact-printing",
  "title": "Impact Printing",
  "description": "Impact printing strikes an inked ribbon against paper by force — the category behind dot-matrix, daisy-wheel, and line printers, and multipart copies.",
  "summary": "Impact printing is the umbrella category of printing in which a mechanical element strikes an inked ribbon against the page, transferring ink by physical force. It is defined against non-impact printing (inkjet, laser, thermal), and its signature capability follows directly from the strike: because the blow carries through stacked sheets, impact printers can produce carbon or carbonless multipart copies in a single pass. The category spans typewriter-derived printers, daisy-wheel and thimble printers, dot-matrix printers, and line printers.",
  "difficulty": "intermediate",
  "estimatedTime": "6 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Impact marking predates computing. The mechanical typewriter established the strike-through-ribbon principle in the 19th century, and IBM's electric printing tabulators carried that principle into business machinery from the 1920s. Computer-driven impact printing matured through the middle of the 20th century, developing along several parallel lines."
    },
    {
      "kind": "paragraph",
      "text": "Line printers emerged with the first commercial computers. IBM's electric accounting machines led to the IBM 407 (1949), a type-wheel accounting machine and a documented line-printing milestone. The IBM 716 line printer was based on the 407 and was paired with IBM's first commercial computer, the IBM 701 (1952)."
    },
    {
      "kind": "paragraph",
      "text": "Dot-matrix printing has a disputed pre-history in Rudolf Hell's Hellschreiber, an early facsimile-like, dot-matrix-based teletypewriter device invented in 1925 and patented in 1929. It was a telegraphy device rather than a computer printer, so its status as an ancestor of computer dot-matrix printing is a lineage claim rather than a direct origin. The modern serial impact dot-matrix (SIDM) printer is generally attributed to OKI, whose Wiredot appeared in 1968. In 1970, Digital Equipment Corporation launched the LA30 and Centronics launched the model 101, both commercial dot-matrix printers."
    },
    {
      "kind": "paragraph",
      "text": "Daisy-wheel printing was developed around 1970 by a team led by Dr. Andrew Gabor at Diablo Systems Inc. (founded 1969); the device entered commercial use from 1972. Diablo was acquired by Xerox in 1972, after which the company operated as the Diablo Data Systems division."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "All impact printers share a common physical chain: a hammer or actuator drives a type element (or fine pins) against an inked fabric ribbon, which is pressed against the paper, depositing ink in the shape of the striking element. The families differ chiefly in what does the striking."
    },
    {
      "kind": "paragraph",
      "text": "Fully-formed-character printers — typewriters, daisy-wheel, thimble, and line printers — carry raised, complete glyphs. When the desired character is positioned over the print point, a hammer strikes it (or strikes the paper against it) through the ribbon."
    },
    {
      "kind": "list",
      "items": [
        "Daisy wheel: a flat wheel with radial \"petals,\" each bearing one raised character, is rotated by a servo until the needed petal aligns, then a solenoid hammer strikes it.",
        "Line printers: carry a full character set on a rotating drum, a moving chain or train, an etched steel band, or type on bars. Column hammers fire the instant the correct character passes each column position, so an entire line prints in one rapid sequence rather than character by character."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Dot-matrix printers have no pre-formed glyphs. A print head holds a vertical column (or columns) of fine pins driven by electromagnets or solenoids; as the head traverses the line, selected pins fire to build each character — and any graphics — out of a grid of dots."
    },
    {
      "kind": "paragraph",
      "text": "In every case, the forceful strike is what enables copying through multipart stationery."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Evolution"
    },
    {
      "kind": "paragraph",
      "text": "The category evolved from mechanical, single-character devices toward faster and more flexible computer peripherals. Line printers gave mainframes high-throughput bulk output. Daisy-wheel printers delivered typewriter-quality text for word processing through the 1970s and early 1980s."
    },
    {
      "kind": "paragraph",
      "text": "Dot-matrix printers, being programmable at the level of the individual dot, added arbitrary fonts and graphics — capabilities the fully-formed-character machines structurally lacked. Dot resolution improved as head designs moved from 9-pin to 24-pin, the latter marketed as \"Near Letter Quality\" (NLQ). The Epson MX-80 (around 1979–1980) helped popularize dot-matrix printing in personal computing."
    },
    {
      "kind": "paragraph",
      "text": "From the 1990s onward, falling non-impact prices displaced impact printers from general-purpose use, leaving them in niches where their distinctive strengths remain difficult to replace."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "paragraph",
      "text": "The advantages below are qualitative and documented; no specific speeds, resolutions, or prices are asserted."
    },
    {
      "kind": "list",
      "items": [
        "Multipart and carbon copying: the strike carries through stacked carbon or carbonless sheets, producing multiple copies simultaneously. This is the category's most-cited advantage and is central to invoices, receipts, and business forms.",
        "Durable, tamper-resistant output and low running cost: ink impressed into the paper fiber by force is harder to erase or alter invisibly, and ribbons are inexpensive relative to toner or ink cartridges.",
        "Robustness in harsh or continuous environments: impact mechanisms tolerate dust and heat and work well with continuous-feed fan-fold stationery, suiting them to industrial and back-office settings.",
        "High throughput for line printers: printing a whole line at once made line printers among the fastest printers for bulk text output."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Disadvantages"
    },
    {
      "kind": "paragraph",
      "text": "As with the advantages, these drawbacks are described qualitatively."
    },
    {
      "kind": "list",
      "items": [
        "Noise: the mechanical striking is loud, a frequently noted drawback in office environments.",
        "Limited output quality and graphics for fully-formed-character types: daisy-wheel and line printers cannot render arbitrary fonts or graphics without physically swapping the type element, and dot-matrix text was historically coarser than laser or inkjet output.",
        "Mechanical wear and speed ceilings: moving strike mechanisms wear over time, and per-character serial printing is slow compared with page-oriented non-impact printers."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "Impact printing — especially dot-matrix — persists specifically where the strike-through capability or physical ruggedness matters. Typical surviving applications include multipart business forms, banking, point-of-sale receipts, logistics and shipping documents, and aviation and industrial settings that require carbon or carbonless copies or continuous-form durability. For mainstream document and photo output, it has otherwise been superseded by non-impact printing."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to other technologies"
    },
    {
      "kind": "paragraph",
      "text": "Impact printing is one half of the primary printer taxonomy, defined against non-impact printing (inkjet, laser or xerographic, thermal, and dye-sublimation). The key functional divide is contact: impact devices physically strike the page, and that strike lets them copy through stacked media, producing multipart documents — something laser and other non-impact methods do not do in the same single-pass way."
    },
    {
      "kind": "paragraph",
      "text": "Impact printing descends directly from the typewriter and shares its ribbon-strike principle. Within the category, dot-matrix printing is the branch that bridged toward graphics-capable output, foreshadowing the flexibility that raster non-impact printers would later provide across a whole page."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "paragraph",
      "text": "The following manufacturers are documented within the impact-printing category."
    },
    {
      "kind": "list",
      "items": [
        "OKI — early serial impact dot-matrix printing (the Wiredot, 1968).",
        "Digital Equipment Corporation (DEC) — the LA-series dot-matrix printers and terminals (LA30, LA36, LA120).",
        "Centronics — early dot-matrix printing (model 101), and associated with the parallel interface standard.",
        "Epson — the MX-80 and later 24-pin LQ dot-matrix lines.",
        "IBM — line printers (1403, 1443), dot-matrix (5103), and electric printing tabulators (407).",
        "Diablo Systems (later the Diablo Data Systems division of Xerox) — daisy-wheel printers such as the Diablo 630.",
        "Qume — daisy-wheel competitor.",
        "NEC — the Spinwriter, a thimble-element variant.",
        "Brother — the Twinriter, a hybrid daisy-wheel and dot-matrix design.",
        "Dataproducts — drum and band line printers."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Related printer families"
    },
    {
      "kind": "paragraph",
      "text": "Documented product-line names within each impact-printing family:"
    },
    {
      "kind": "list",
      "items": [
        "Dot-matrix: OKI Wiredot; DEC LA30, LA36, and LA120; Centronics 101; Epson MX-80 and the LQ series; IBM 5103.",
        "Daisy-wheel and thimble: Diablo 630; Qume daisy-wheel printers; NEC Spinwriter; Brother Twinriter.",
        "Line printers: IBM 1403 (chain), IBM 1443 (bar), IBM 716; Dataproducts B300, B600, and B1000 (band).",
        "Typewriter-derived: Friden Flexowriter; IBM Selectric-based terminals."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Timeline"
    },
    {
      "kind": "timeline",
      "events": [
        {
          "period": "1920s",
          "text": "IBM electric printing tabulators establish computer-adjacent impact printing."
        },
        {
          "period": "1925 (attributed)",
          "text": "Rudolf Hell's Hellschreiber, a dot-matrix-based teletypewriter device (patented 1929), a disputed dot-matrix precursor."
        },
        {
          "period": "1949",
          "text": "IBM 407 accounting machine, a documented line-printing milestone."
        },
        {
          "period": "1952",
          "text": "IBM 701 computer paired with the IBM 716 line printer."
        },
        {
          "period": "1968",
          "text": "OKI Wiredot, an early serial impact dot-matrix printer."
        },
        {
          "period": "~1970",
          "text": "Daisy-wheel printer developed by a team led by Dr. Andrew Gabor at Diablo Systems."
        },
        {
          "period": "1970",
          "text": "DEC LA30 and Centronics 101 dot-matrix printers launched."
        },
        {
          "period": "1972",
          "text": "Daisy-wheel printers enter commercial use; Xerox acquires Diablo Systems."
        },
        {
          "period": "~1979–1980",
          "text": "Epson MX-80 popularizes dot-matrix in personal computing."
        },
        {
          "period": "Mid-1980s",
          "text": "Daisy-wheel decline as laser and inkjet emerge."
        },
        {
          "period": "~1995",
          "text": "Inkjet overtakes dot-matrix in the mainstream market; impact printing retreats to multipart and industrial niches."
        }
      ]
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This is a neutral technical and historical reference. Figures and dates are drawn from documented sources; it does not include current pricing, marketing claims, or product recommendations. The references consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "history",
      "slug": "how-impact-printing-worked"
    },
    {
      "section": "guides",
      "slug": "dot-matrix-printing"
    },
    {
      "section": "guides",
      "slug": "daisy-wheel-printing"
    },
    {
      "section": "guides",
      "slug": "line-printing"
    },
    {
      "section": "history",
      "slug": "transition-from-impact-to-laser-printing"
    },
    {
      "section": "history",
      "slug": "how-dot-matrix-printers-work"
    }
  ],
  "faqs": [
    {
      "q": "What is impact printing?",
      "a": "Impact printing is the category of printing in which a mechanical element strikes an inked ribbon against the page, transferring ink by physical force. It is defined in contrast to non-impact methods such as inkjet, laser, and thermal printing, where the marking mechanism never touches the paper."
    },
    {
      "q": "Why can impact printers make carbon copies when other printers can't?",
      "a": "The defining feature of impact printing is a forcible strike. Because that blow carries through a stack of sheets, an impact printer can produce carbon or carbonless multipart copies in a single pass. Laser and other non-impact printers deposit toner or ink, or apply heat, without a page-transferring strike, so they do not copy through stacked media the same way."
    },
    {
      "q": "What are the main types of impact printers?",
      "a": "The category includes typewriter-derived printers, daisy-wheel and thimble printers, dot-matrix printers, and line printers (drum, chain, train, band, and bar designs). Fully-formed-character types carry complete raised glyphs, while dot-matrix heads build characters and graphics from a grid of pin-struck dots."
    },
    {
      "q": "Is impact printing still used today?",
      "a": "Yes, in specific niches. Dot-matrix and other impact printers persist where the strike-through capability or physical ruggedness matters, such as multipart business forms, banking, point-of-sale receipts, logistics and shipping documents, and industrial or aviation settings. For general document and photo output it has been superseded by non-impact printing."
    },
    {
      "q": "Who invented the daisy-wheel printer?",
      "a": "The daisy-wheel printer was developed around 1970 by a team led by Dr. Andrew Gabor at Diablo Systems Inc., and entered commercial use from 1972. Diablo was acquired by Xerox in 1972 and thereafter operated as the Diablo Data Systems division."
    }
  ],
  "sources": [
    {
      "title": "Impact printer",
      "url": "https://en.wikipedia.org/wiki/Impact_printer",
      "publisher": "Wikipedia"
    },
    {
      "title": "Dot matrix printing",
      "url": "https://en.wikipedia.org/wiki/Dot_matrix_printing",
      "publisher": "Wikipedia"
    },
    {
      "title": "Daisy wheel printing",
      "url": "https://en.wikipedia.org/wiki/Daisy_wheel_printing",
      "publisher": "Wikipedia"
    },
    {
      "title": "Line printer",
      "url": "https://en.wikipedia.org/wiki/Line_printer",
      "publisher": "Wikipedia"
    },
    {
      "title": "Diablo Data Systems",
      "url": "https://en.wikipedia.org/wiki/Diablo_Data_Systems",
      "publisher": "Wikipedia"
    },
    {
      "title": "Diablo Systems Inc.",
      "url": "https://www.ithistory.org/db/companies/diablo-systems-inc",
      "publisher": "IT History Society"
    },
    {
      "title": "The Daisy Wheel Story (Weisberg & Comstock)",
      "url": "http://archive.computerhistory.org/resources/access/text/2017/03/102738203-05-01-acc.pdf",
      "publisher": "Computer History Museum"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "impact printing",
    "impact printer",
    "dot-matrix printer",
    "daisy-wheel printer",
    "line printer",
    "non-impact printing",
    "multipart forms",
    "carbonless copies",
    "serial impact dot matrix",
    "sidm",
    "oki wiredot",
    "ibm 1403"
  ],
  "cluster": "printing-technology"
};

export default entry;
