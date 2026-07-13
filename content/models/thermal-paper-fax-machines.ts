import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "thermal-paper-fax-machines",
  "title": "Thermal-Paper Fax Machines",
  "description": "The roll-fed thermal-paper class of Group 3 fax machine: how direct-thermal printing shaped its form factor, output handling, and limitations.",
  "summary": "Thermal-paper fax machines are the roll-fed class of Group 3 fax that print received pages by direct thermal printing, using a thermal printhead to apply heat to a heat-sensitive coated paper roll with no ink, toner, or ribbon. The print method defined the machines: a continuous paper roll, a page cutter, compact desktop bodies, and output that curls and fades over time. They implement the same ITU-T Group 3 standards as other fax machines (T.4 image coding and T.30 call procedures over the telephone network) and differ from plain-paper fax machines only in how the page is put on paper. This reference describes the class at family level and does not assert specifications, prices, or dates for individual models.",
  "category": "Fax machine class",
  "alsoKnownAs": [
    "Thermal fax machines",
    "Direct-thermal fax machines",
    "Roll-fed thermal fax machines"
  ],
  "specs": [
    {
      "label": "Fax standard",
      "value": "ITU-T Group 3 — T.4 image coding and control functions, T.30 call procedures over the telephone network",
      "source": "ITU-T Recommendations T.4 and T.30"
    },
    {
      "label": "Print method",
      "value": "Direct thermal printing — a thermal printhead heats a heat-sensitive (thermochromic) coated paper; no ink, toner, or ribbon",
      "source": "Wikipedia (Thermal printing)"
    },
    {
      "label": "Print media",
      "value": "Heat-sensitive thermal paper supplied on a continuous roll",
      "source": "Wikipedia (Thermal paper)"
    },
    {
      "label": "Horizontal resolution",
      "value": "Nominally 1728 picture elements per scan line across a 215 mm line — about 204 dpi (8 pels/mm)",
      "source": "ITU-T Recommendation T.4; Wikipedia (Fax)"
    },
    {
      "label": "Vertical resolution",
      "value": "Standard 3.85 lines/mm (about 98 dpi) and fine 7.7 lines/mm (about 196 dpi); optional superfine 15.4 lines/mm",
      "source": "ITU-T Recommendation T.4; Wikipedia (Fax)"
    },
    {
      "label": "Group 3 modems",
      "value": "V.27 ter (2400/4800 bit/s), V.29 (7200/9600 bit/s), and V.17 (up to 14 400 bit/s)",
      "source": "ITU-T Recommendations V.27 ter, V.29 and V.17"
    },
    {
      "label": "Super G3 option",
      "value": "V.34 modem for image transfer at up to 33 600 bit/s, defined in ITU-T T.30 Annex F",
      "source": "ITU-T T.30 Annex F; ITU-T Recommendation V.34"
    },
    {
      "label": "Transmission network",
      "value": "General switched telephone network (PSTN) — an analog telephone line",
      "source": "ITU-T Recommendation T.30"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What defines the class"
    },
    {
      "kind": "paragraph",
      "text": "A thermal-paper fax machine is a Group 3 fax machine that prints the pages it receives using direct thermal printing onto a roll of heat-sensitive paper. The defining trait is the output method: rather than fusing toner or spraying ink onto ordinary cut-sheet paper, the machine forms the image by heating a chemically coated paper that darkens where the heat is applied. Everything else about the device — how it scans an original, negotiates the call, and encodes the page — follows the same ITU-T Group 3 standards used across the wider fax world, so the class is best understood as one printing variant of Group 3 fax rather than a separate transmission standard. Because \"thermal-paper fax\" names a class and a print method, this page describes the family at a general level and does not assign specifications, prices, or dates to individual models."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How thermal-paper printing works"
    },
    {
      "kind": "paragraph",
      "text": "Thermal-paper fax machines print by direct thermal printing, the same non-impact method used in receipt and label printers. According to encyclopedic technical references, the paper carries a solid-state thermochromic coating — typically a colorless leuco dye together with an acidic developer and a sensitizer — while a thermal printhead holds an array of tiny, individually addressable resistive heating elements. As the paper passes the head, selected elements heat spots on the coating; the heat lets the dye react with the developer and shift into its colored (usually black) form, and rapid cooling fixes the mark. No ink, toner, or ribbon is consumed — only the coated paper and the electricity that produces the heat — which is why these machines were mechanically simple and needed no separate print supplies. Direct thermal is normally monochrome, so a received fax appears as black marks on the paper's background."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The Group 3 standards they implement"
    },
    {
      "kind": "paragraph",
      "text": "As Group 3 machines, thermal-paper fax units follow two core ITU-T Recommendations. ITU-T T.4 defines how the page image is scanned, its resolutions, and the compression coding (the Modified Huffman and Modified READ schemes), while ITU-T T.30 defines the call procedure — the negotiation, training, and handshaking the two machines perform before and during a page transfer over the telephone network. Under T.4, a page is scanned at a nominal 1728 picture elements across a 215 mm line — about 204 dots per inch horizontally — with a standard vertical resolution of 3.85 lines per millimetre (roughly 98 dpi) and an optional fine mode of 7.7 lines per millimetre (roughly 196 dpi); T.4 also provides an optional superfine resolution of 15.4 lines per millimetre. The Group 3 family was first standardized in 1980 and revised over the following decades. These are class-level facts defined by the standard, not measurements of any one machine."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modems and transmission speed"
    },
    {
      "kind": "paragraph",
      "text": "Group 3 fax carries the compressed page over an ordinary analog telephone line using a voiceband modem, and thermal-paper machines are no exception. The standard Group 3 modem recommendations are ITU-T V.27 ter (2400 and 4800 bit/s), V.29 (7200 and 9600 bit/s), and V.17, a modem defined specifically for facsimile with rates up to 14 400 bit/s; the two machines negotiate the fastest rate the line will support during the T.30 handshake. Later Group 3 machines added the \"Super G3\" option defined in ITU-T T.30 Annex F, which uses a V.34 modem to carry image data at up to 33 600 bit/s. Whether a given thermal-paper unit supported only the slower modems or the V.34 option depended on the individual machine, which this class page does not attempt to enumerate."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Form factor and paper handling"
    },
    {
      "kind": "paragraph",
      "text": "The use of a paper roll shaped the physical design of the class. Because the media is a continuous strip rather than pre-cut sheets, a thermal-paper machine feeds the roll past the printhead and then cuts each received page to length, and it needs no paper tray, toner cartridge, or ink supply. That kept the units compact and low-maintenance, which suited the desktop and home settings where thermal-paper fax was common; compact desktop machines, some integrating a telephone handset on a shared line, were typical of the class. Paper handling is the clearest dividing line between this class and plain-paper fax machines, which print onto standard cut-sheet stock — a roll-fed versus cut-sheet contrast treated in its own right elsewhere in this reference."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Output characteristics and limitations"
    },
    {
      "kind": "paragraph",
      "text": "The print method also defined the limitations of the class. Thermal paper's image is formed by leuco dyes that are chemically unstable and tend to revert toward their colorless state, so faxes printed this way fade over time, especially in warm or humid storage, and the coated stock is sensitive to heat, light, oils, and abrasion — any of which can darken or erase the page. The paper also tends to curl because it is dispensed from a roll. These traits made thermal-paper output poorly suited to filing or archiving, a well-documented drawback of direct thermal media generally, and they are a large part of why offices migrated to plain-paper fax machines as those became affordable. For long-term retention, an important thermal fax was frequently photocopied onto plain paper."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to other fax classes"
    },
    {
      "kind": "paragraph",
      "text": "Thermal-paper fax sits alongside several other Group 3 printing variants. Plain-paper fax machines perform the same scanning, negotiation, and coding but print the received page onto ordinary cut-sheet paper using laser, inkjet, or thermal-transfer print engines, trading the roll's simplicity for durable, non-fading output. A distinct standard, Group 4 fax (ITU-T T.6 coding), was designed for all-digital ISDN lines rather than the analog telephone network and remained a niche class. As multifunction devices absorbed faxing into combined print-copy-scan units, standalone thermal-paper machines faded from the market. Because faxing behaviour is governed by the shared Group 3 standards, the thermal-paper class differs from these relatives mainly in how — not whether — it puts the received page on paper."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Reference scope"
    },
    {
      "kind": "paragraph",
      "text": "This is a neutral, class-level reference. The transmission facts — the Group 3 standards, resolutions, and modem rates — are drawn from the ITU-T Recommendations that define them, and the description of thermal printing and its media is drawn from encyclopedic technical references; both are cited below. Consistent with a class page, no attempt is made to state print speeds, dimensions, prices, introduction or discontinuation dates, or feature lists for specific thermal-paper models, because those vary by unit and are not established here against an authoritative source."
    },
    {
      "kind": "archivalTable",
      "caption": "Documented class/series characteristics (each value cited to an authoritative source)",
      "headers": [
        "Characteristic",
        "Value"
      ],
      "rows": [
        [
          "Fax standard",
          "ITU-T Group 3 — T.4 image coding and control functions, T.30 call procedures over the telephone network"
        ],
        [
          "Print method",
          "Direct thermal printing — a thermal printhead heats a heat-sensitive (thermochromic) coated paper; no ink, toner, or ribbon"
        ],
        [
          "Print media",
          "Heat-sensitive thermal paper supplied on a continuous roll"
        ],
        [
          "Horizontal resolution",
          "Nominally 1728 picture elements per scan line across a 215 mm line — about 204 dpi (8 pels/mm)"
        ],
        [
          "Vertical resolution",
          "Standard 3.85 lines/mm (about 98 dpi) and fine 7.7 lines/mm (about 196 dpi); optional superfine 15.4 lines/mm"
        ],
        [
          "Group 3 modems",
          "V.27 ter (2400/4800 bit/s), V.29 (7200/9600 bit/s), and V.17 (up to 14 400 bit/s)"
        ],
        [
          "Super G3 option",
          "V.34 modem for image transfer at up to 33 600 bit/s, defined in ITU-T T.30 Annex F"
        ],
        [
          "Transmission network",
          "General switched telephone network (PSTN) — an analog telephone line"
        ]
      ],
      "sources": [
        "ITU-T Recommendations T.4 and T.30",
        "Wikipedia (Thermal printing)",
        "Wikipedia (Thermal paper)",
        "ITU-T Recommendation T.4",
        "Wikipedia (Fax)",
        "ITU-T Recommendations V.27 ter, V.29 and V.17",
        "ITU-T T.30 Annex F",
        "ITU-T Recommendation V.34",
        "ITU-T Recommendation T.30"
      ]
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This page describes a class or series of fax machines from documented standards and manufacturer/archive records; class-level facts are cited to standards bodies (notably ITU-T) and are not per-unit specifications. It omits anything that cannot be sourced, gives no current pricing or availability, and is a historical/technical reference rather than a buying guide. The sources consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "guides",
      "slug": "direct-thermal-printing"
    },
    {
      "section": "guides",
      "slug": "thermal-printhead"
    },
    {
      "section": "fax",
      "slug": "how-fax-machines-work"
    },
    {
      "section": "fax",
      "slug": "analog-fax-vs-digital-fax"
    },
    {
      "section": "models",
      "slug": "plain-paper-fax-machines"
    },
    {
      "section": "models",
      "slug": "group-3-fax-machines"
    }
  ],
  "faqs": [
    {
      "q": "What is a thermal-paper fax machine?",
      "a": "It is a Group 3 fax machine that prints received pages by direct thermal printing onto a roll of heat-sensitive paper rather than onto ordinary cut-sheet paper. It uses the same ITU-T Group 3 standards as other fax machines and differs from plain-paper models only in its print method and media."
    },
    {
      "q": "Do thermal-paper fax machines use ink or toner?",
      "a": "No. They print by direct thermal printing: a heated printhead darkens a heat-sensitive coating built into the paper. There is no ink, toner, or ribbon to replace — only the thermal paper roll itself."
    },
    {
      "q": "Why do faxes printed on thermal paper fade?",
      "a": "The image is formed by leuco dyes that are chemically unstable and revert toward their colorless state over time, particularly in warm or humid storage. The coating is also sensitive to heat, light, oils, and abrasion, so thermal fax output is not suited to long-term filing — which is why important faxes were often photocopied onto plain paper for archiving."
    },
    {
      "q": "What resolution do thermal-paper (Group 3) fax machines use?",
      "a": "As Group 3 machines they follow ITU-T T.4: a scan line of nominally 1728 picture elements across 215 mm — about 204 dpi horizontally — with a standard vertical resolution of 3.85 lines per millimetre (about 98 dpi) and an optional fine mode of 7.7 lines per millimetre (about 196 dpi). T.4 also defines an optional superfine mode of 15.4 lines per millimetre. These figures come from the standard, not from any single machine."
    },
    {
      "q": "Are thermal-paper and plain-paper fax machines the same?",
      "a": "No. Both are Group 3 machines that scan, negotiate, and encode pages identically, but a thermal-paper machine prints onto a heat-sensitive roll while a plain-paper machine prints onto standard cut-sheet paper using a laser, inkjet, or thermal-transfer engine. The plain-paper output is durable and does not fade; the thermal roll is simpler but its output fades and curls."
    }
  ],
  "sources": [
    {
      "title": "ITU-T Recommendation T.4: Standardization of Group 3 facsimile terminals for document transmission",
      "url": "https://www.itu.int/rec/T-REC-T.4/en",
      "publisher": "ITU-T"
    },
    {
      "title": "ITU-T Recommendation T.30: Procedures for document facsimile transmission in the general switched telephone network",
      "url": "https://www.itu.int/rec/T-REC-T.30/en",
      "publisher": "ITU-T"
    },
    {
      "title": "ITU-T Recommendation T.6: Facsimile coding schemes and coding control functions for Group 4 facsimile apparatus",
      "url": "https://www.itu.int/rec/T-REC-T.6/en",
      "publisher": "ITU-T"
    },
    {
      "title": "ITU-T Recommendation V.17: A 2-wire modem for facsimile applications with rates up to 14 400 bit/s",
      "url": "https://www.itu.int/rec/T-REC-V.17/en",
      "publisher": "ITU-T"
    },
    {
      "title": "ITU-T Recommendation V.27 ter: 4800/2400 bit/s modem for the general switched telephone network",
      "url": "https://www.itu.int/rec/T-REC-V.27ter/en",
      "publisher": "ITU-T"
    },
    {
      "title": "ITU-T Recommendation V.29: 9600 bit/s modem",
      "url": "https://www.itu.int/rec/T-REC-V.29/en",
      "publisher": "ITU-T"
    },
    {
      "title": "ITU-T Recommendation V.34: modem for data signalling rates up to 33 600 bit/s",
      "url": "https://www.itu.int/rec/T-REC-V.34/en",
      "publisher": "ITU-T"
    },
    {
      "title": "Fax",
      "url": "https://en.wikipedia.org/wiki/Fax",
      "publisher": "Wikipedia"
    },
    {
      "title": "Thermal paper",
      "url": "https://en.wikipedia.org/wiki/Thermal_paper",
      "publisher": "Wikipedia"
    },
    {
      "title": "Thermal printing",
      "url": "https://en.wikipedia.org/wiki/Thermal_printing",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "thermal-paper fax machines",
    "thermal fax machine",
    "roll-fed fax machine",
    "direct thermal fax",
    "group 3 fax",
    "itu-t t.4",
    "itu-t t.30",
    "thermal fax paper",
    "fax machine class",
    "plain-paper vs thermal fax",
    "super g3",
    "fax modem"
  ],
  "cluster": "fax-models"
};

export default entry;
