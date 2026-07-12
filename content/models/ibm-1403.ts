import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "ibm-1403",
  "title": "IBM 1403 (Line Printer, 1959)",
  "description": "The IBM 1403, introduced with the IBM 1401 in 1959, was a high-speed chain line printer widely noted for its print quality among impact line printers.",
  "summary": "The IBM 1403 was a high-speed impact line printer that IBM introduced in 1959 as part of the IBM 1401 Data Processing System. It printed a full line at a time by firing individual hammers against a fast-moving print chain that carried five copies of a 48-character set, and the original model produced about 600 lines of text per minute. Later variants, including the Model 3, raised throughput to roughly 1,100 lines per minute and replaced the chain with a print train. Columbia University's computing history records that the 1403 remained unsurpassed for print quality until the advent of laser printing in the 1970s.",
  "manufacturer": "IBM",
  "category": "Line printer",
  "era": "Mainframe punched-card computing era (from 1959)",
  "introduced": "1959",
  "alsoKnownAs": [
    "IBM 1403 Model 1",
    "IBM 1403 Model 2",
    "IBM 1403 Model 3",
    "IBM 1403 Model N1"
  ],
  "specs": [
    {
      "label": "Printer type",
      "value": "Impact line printer (print chain; print train in later models)",
      "source": "IEEE Spectrum; Columbia University"
    },
    {
      "label": "Print speed (original model)",
      "value": "About 600 lines per minute",
      "source": "IBM"
    },
    {
      "label": "Print speed (Model 3)",
      "value": "Up to 1,100 lines per minute (about 1,400 lpm with a reduced character set)",
      "source": "IEEE Spectrum"
    },
    {
      "label": "Print positions",
      "value": "Up to 132 print positions (columns), each with its own hammer",
      "source": "IEEE Spectrum"
    },
    {
      "label": "Character set",
      "value": "48 characters, repeated five times on the print chain",
      "source": "IEEE Spectrum; Columbia University"
    },
    {
      "label": "Introduced with",
      "value": "IBM 1401 Data Processing System (1959)",
      "source": "IBM"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What the IBM 1403 was"
    },
    {
      "kind": "paragraph",
      "text": "The IBM 1403 was an impact line printer that IBM introduced in 1959 alongside the IBM 1401 Data Processing System, where it served as the system's high-speed output device. Rather than forming one character at a time, it printed an entire line in a single operation, making it far faster than the typewriter-style printers common at the time. The 1403 was subsequently attached to a range of other IBM computers and remained in production and use for well over two decades."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "A new class of high-speed printing"
    },
    {
      "kind": "paragraph",
      "text": "IBM positioned the 1403 as a high-speed printer, and it became one of the defining peripherals of the early commercial computer era. IBM's own history of the 1401 describes the 1403 as a high-speed printer capable of 600 lines of text per minute. IEEE Spectrum notes that IBM regarded the 1403 as setting \"the standard of quality for high-speed impact printing,\" and reports that more than 23,000 units were delivered to U.S. customers, with sales continuing into the early 1980s."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How the print chain worked"
    },
    {
      "kind": "paragraph",
      "text": "The 1403 printed using a horizontally moving print chain that carried the type. According to IEEE Spectrum and Columbia University, the chain held 48 different characters repeated five times, and it spun continuously in front of an inked ribbon and the paper. Behind the paper sat a row of hammers — one for each print column — each paired with an electromagnet. As the required character passed a given column, that column's hammer fired at precisely the right instant to press the paper and ribbon against the moving type, printing the character in place without smearing. Because every hammer could fire independently as its character came around, the machine assembled a complete line during a single pass of the chain."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "From print chain to print train"
    },
    {
      "kind": "paragraph",
      "text": "Later 1403 variants changed the type carrier. As IEEE Spectrum describes, the Model 3 replaced the character chain with type slugs that slid in a track driven by gears, rather than being linked together in a continuous chain; Columbia University's computing history refers to this later type carrier as a \"print train.\" The mechanism supported higher printing speeds while retaining the same basic hammer-and-ribbon impact principle."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Models and print speeds"
    },
    {
      "kind": "paragraph",
      "text": "The original 1403 shipped with the 1401 in 1959 and printed about 600 lines per minute, a figure given by IBM's history of the 1401. Faster variants followed: IEEE Spectrum reports that the Model 3 could print up to 1,100 lines per minute, rising to about 1,400 lines per minute when only a reduced subset of characters was used. IEEE Spectrum also notes that some versions carried up to 132 print positions, each with its own hammer."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Place in printing history"
    },
    {
      "kind": "paragraph",
      "text": "The 1403 is remembered chiefly for its combination of speed and print quality. Columbia University's computing history records that its output remained unsurpassed for print quality until the advent of laser printing technology in the 1970s. The 1403 has since been restored to full working order by the Computer History Museum's IBM 1401 restoration team, a testament to the durability of the design."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Reference scope"
    },
    {
      "kind": "paragraph",
      "text": "This page records only specifications that can be traced to authoritative sources — IBM's own history, Columbia University's computing history, IEEE Spectrum, and the Computer History Museum. Figures that could not be corroborated (for example, conflicting reported chain speeds) are omitted rather than presented as settled fact. It is a historical reference, not a buying guide, and quotes no pricing or availability."
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
          "Printer type",
          "Impact line printer (print chain; print train in later models)"
        ],
        [
          "Print speed (original model)",
          "About 600 lines per minute"
        ],
        [
          "Print speed (Model 3)",
          "Up to 1,100 lines per minute (about 1,400 lpm with a reduced character set)"
        ],
        [
          "Print positions",
          "Up to 132 print positions (columns), each with its own hammer"
        ],
        [
          "Character set",
          "48 characters, repeated five times on the print chain"
        ],
        [
          "Introduced with",
          "IBM 1401 Data Processing System (1959)"
        ]
      ],
      "sources": [
        "IEEE Spectrum",
        "IBM",
        "Columbia University"
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
      "slug": "dot-matrix-printing"
    },
    {
      "section": "models",
      "slug": "hp-laserjet-original"
    }
  ],
  "faqs": [
    {
      "q": "When was the IBM 1403 introduced?",
      "a": "IBM introduced the 1403 in 1959 as the high-speed printer of the IBM 1401 Data Processing System, according to IBM's own history of the 1401."
    },
    {
      "q": "How fast was the IBM 1403?",
      "a": "The original model printed about 600 lines per minute (IBM). IEEE Spectrum reports that the later Model 3 reached up to 1,100 lines per minute, and as much as 1,400 with a reduced character set."
    },
    {
      "q": "How did the IBM 1403 actually print?",
      "a": "It was an impact line printer. A print chain carrying 48 characters repeated five times spun in front of the paper and ribbon, and one hammer per column fired at the exact moment its character passed, printing a whole line in a single pass, per IEEE Spectrum and Columbia University."
    },
    {
      "q": "What is the difference between the chain and train models?",
      "a": "Early 1403s used a linked print chain; IEEE Spectrum notes that the Model 3 replaced it with type slugs sliding in a track driven by gears, a later type carrier that Columbia University's computing history calls a \"print train,\" supporting higher printing speeds using the same impact principle."
    },
    {
      "q": "Was the IBM 1403 considered high quality?",
      "a": "Yes. Columbia University's computing history records that its print quality remained unsurpassed until laser printing emerged in the 1970s, and IEEE Spectrum notes that IBM described it as the standard of quality for high-speed impact printing."
    }
  ],
  "sources": [
    {
      "title": "The IBM 1401",
      "url": "https://www.ibm.com/history/1401",
      "publisher": "IBM"
    },
    {
      "title": "Restoring the IBM 1401",
      "url": "https://computerhistory.org/blog/restoring-the-ibm-1401/",
      "publisher": "Computer History Museum"
    },
    {
      "title": "How the IBM 1403 Printer Hammered Out 1,100 Lines Per Minute",
      "url": "https://spectrum.ieee.org/how-the-ibm-1403-printer-hammered-out-1100-lines-per-minute",
      "publisher": "IEEE Spectrum"
    },
    {
      "title": "The IBM 1403 Printer",
      "url": "https://www.columbia.edu/cu/computinghistory/1403.html",
      "publisher": "Columbia University"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "ibm 1403",
    "ibm 1403 printer",
    "ibm 1403 line printer",
    "ibm 1401 printer",
    "chain printer",
    "print chain",
    "line printer history",
    "impact printer",
    "ibm 1403 model 3",
    "train printer",
    "mainframe printer",
    "high-speed impact printing"
  ],
  "cluster": "printer-models"
};

export default entry;
