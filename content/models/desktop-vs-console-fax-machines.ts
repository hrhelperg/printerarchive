import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "desktop-vs-console-fax-machines",
  "title": "Desktop vs. Console Fax Machines",
  "description": "Desktop vs. console fax machines differ in size and duty, not fax standard: both are typically ITU-T Group 3 units using the same T.4/T.30 coding.",
  "summary": "Desktop and console fax machines are distinguished by physical form and workload, not by how they send a fax. Both classes are typically ITU-T Group 3 terminals that share the same T.4 image coding, T.30 call procedures, and V-series modulation, so a console unit is not a different kind of fax from a desktop one, only a larger, higher-capacity chassis for heavier duty. Resolution and connection speed are set by the Group 3 standard and the telephone line rather than the cabinet, while paper capacity, memory, footprint, and duty cycle are where the form factors genuinely diverge. Exact per-model figures vary by product and are not asserted for the class here.",
  "category": "Fax machine class (form factor)",
  "alsoKnownAs": [
    "Tabletop vs. floor-standing fax machines",
    "Personal/desktop fax vs. console fax",
    "Compact vs. console fax units"
  ],
  "specs": [
    {
      "label": "Underlying fax standard",
      "value": "Both classes are normally Group 3 fax terminals, defined by ITU-T T.4 (terminal and coding standardization) with call procedures set out in ITU-T T.30",
      "source": "ITU-T Recommendation T.4; ITU-T Recommendation T.30"
    },
    {
      "label": "Standard resolution (Group 3)",
      "value": "About 204 x 98 dpi (approx. 8 picture elements/mm horizontal by 3.85 lines/mm vertical; 1728 pixels per A4 scan line)",
      "source": "ITU-T Recommendation T.4"
    },
    {
      "label": "Fine resolution (Group 3)",
      "value": "About 204 x 196 dpi (approx. 7.7 lines/mm)",
      "source": "ITU-T Recommendation T.4"
    },
    {
      "label": "Group 3 modulation",
      "value": "V.27ter (up to 4.8 kbit/s), V.29 (up to 9.6 kbit/s), and V.17 (up to 14.4 kbit/s)",
      "source": "ITU-T V-series Recommendations; ITU-T Recommendation T.30"
    },
    {
      "label": "Super G3 modulation",
      "value": "V.34 half-duplex, up to 33.6 kbit/s, per the procedures of ITU-T T.30 Annex F (capability negotiation via V.8)",
      "source": "ITU-T Recommendation T.30 (Annex F); ITU-T Recommendation V.34"
    },
    {
      "label": "Group 4 option (higher tier)",
      "value": "Some high-end units also supported Group 4 fax over ISDN, defined by ITU-T T.6 (coding) and T.563 (terminal characteristics)",
      "source": "ITU-T Recommendation T.6; ITU-T Recommendation T.563"
    },
    {
      "label": "Form-factor distinction",
      "value": "Desktop = compact tabletop/countertop unit for lower volumes; console = larger floor-standing or cabinet unit for higher-volume, heavier-duty use",
      "source": "Office-equipment form-factor classification (copier/fax trade usage)"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What \"desktop\" and \"console\" describe"
    },
    {
      "kind": "paragraph",
      "text": "\"Desktop\" and \"console\" are form-factor and duty-class labels rather than the names of a fax protocol. A desktop fax machine is a compact unit designed to sit on a desk, table, or countertop and serve an individual, a small office, or a single department at modest volumes. A console fax machine is a larger, floor-standing or cabinet-mounted unit built for higher throughput and heavier daily duty, typically in a mailroom, telecommunications room, or busy department. The same vocabulary is used across office equipment: copiers, for example, are routinely split into compact desktop models and larger floor-standing (console) models, and the fax distinction follows the same logic of footprint and workload rather than any change in how a page is transmitted."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The same standard underneath: Group 3"
    },
    {
      "kind": "paragraph",
      "text": "Whatever the cabinet, the great majority of these machines are Group 3 fax terminals defined by the ITU-T. Group 3 operation is standardized in ITU-T Recommendation T.4, \"Standardization of Group 3 facsimile terminals for document transmission,\" while call setup, capability negotiation, and the page-transfer procedure are defined in ITU-T Recommendation T.30, \"Procedures for document facsimile transmission in the general switched telephone network.\" A desktop unit and a console unit that both implement Group 3 speak exactly the same protocol over the public switched telephone network; a larger chassis does not make a machine a different class of fax. This is the central point of the comparison: the difference is physical and operational, not one of transmission standard."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Resolution and image coding"
    },
    {
      "kind": "paragraph",
      "text": "Group 3 image resolution is set by the standard, not the form factor. ITU-T T.4 defines a standard resolution of about 204 x 98 dpi (roughly 8 picture elements per millimetre horizontally by 3.85 lines per millimetre vertically, with 1728 pixels across an A4 scan line) and a fine resolution of about 204 x 196 dpi (about 7.7 lines per millimetre); an optional superfine mode at about 204 x 391 dpi is also defined. Pages are compressed with the Modified Huffman and Modified READ schemes of T.4, and the Modified Modified READ (MMR) scheme of ITU-T T.6 is available as an option. A desktop and a console machine set to the same mode produce the same page geometry, because both are following T.4."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Connection speed and modulation"
    },
    {
      "kind": "paragraph",
      "text": "Transmission speed likewise comes from the fax standard and the telephone line rather than from the size of the unit. Group 3 carries image data using the ITU-T V-series modems referenced by T.30: V.27ter (up to 4.8 kbit/s), V.29 (up to 9.6 kbit/s), and V.17 (up to 14.4 kbit/s). Machines marketed as \"Super G3\" negotiate the faster V.34 modulation, running at up to 33.6 kbit/s under the procedures of ITU-T T.30 Annex F, with capability negotiation handled by ITU-T V.8. A desktop Super G3 unit and a console Super G3 unit connected to comparable lines negotiate the same speeds; a console cabinet does not transmit an individual page faster than a desktop one running the same standard."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where the form factor actually matters"
    },
    {
      "kind": "paragraph",
      "text": "The practical differences between the classes are in paper handling, capacity, and endurance rather than in the fax call itself. Console units are built around larger paper trays or reels, higher-capacity automatic document feeders, more memory for queuing and broadcasting jobs, and mechanisms rated for heavier daily duty, all housed in a floor-standing or cabinet form that a desk could not accommodate. Desktop units trade that capacity for a small footprint suited to personal or low-volume use. Exact figures, including pages per minute, sheet and feeder capacities, memory, physical dimensions, and duty-cycle ratings, vary from model to model and are documented on individual product specifications, so they are not asserted for the class as a whole here."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Historical note: from Desk-Fax to office consoles"
    },
    {
      "kind": "paragraph",
      "text": "Compact desktop facsimile predates the Group 3 era. Western Union's Desk-Fax, introduced in 1948, was a small facsimile unit intended to sit on an office desk and exchange images of telegrams with a local Western Union office; tens of thousands were placed in service before the system was retired in the 1960s. When the Group 3 standard arrived around 1980 and office faxing became widespread, manufacturers offered both compact desktop machines and larger, higher-volume machines, mirroring the desktop-versus-console split long used for copiers and other office equipment."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Group 4 and higher-tier machines"
    },
    {
      "kind": "paragraph",
      "text": "A minority of high-end machines, often though not necessarily console-class units in larger installations, also supported Group 4 fax, the digital, ISDN-based service defined by ITU-T T.6 (coding) and ITU-T T.563, \"Terminal characteristics for Group 4 facsimile apparatus.\" Group 4 was a separate, higher-tier capability layered onto the hardware, not a property of the cabinet: form factor and fax group are independent, and most desktop and console machines alike were Group 3 devices working over ordinary telephone lines."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Reference scope"
    },
    {
      "kind": "paragraph",
      "text": "This page records only class-level facts that can be traced to authoritative sources: the ITU-T recommendations that define Group 3 (and, for the higher tier, Group 4) fax, and the office-equipment form-factor terminology that gives the desktop and console labels their meaning. The desktop-versus-console distinction is one of size, capacity, and duty, not of fax protocol. Per-model specifications, including resolution beyond the standard modes, speed ratings, paper and feeder capacities, memory, physical dimensions, pricing, and availability, differ by product and are not estimated here."
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
          "Underlying fax standard",
          "Both classes are normally Group 3 fax terminals, defined by ITU-T T.4 (terminal and coding standardization) with call procedures set out in ITU-T T.30"
        ],
        [
          "Standard resolution (Group 3)",
          "About 204 x 98 dpi (approx. 8 picture elements/mm horizontal by 3.85 lines/mm vertical; 1728 pixels per A4 scan line)"
        ],
        [
          "Fine resolution (Group 3)",
          "About 204 x 196 dpi (approx. 7.7 lines/mm)"
        ],
        [
          "Group 3 modulation",
          "V.27ter (up to 4.8 kbit/s), V.29 (up to 9.6 kbit/s), and V.17 (up to 14.4 kbit/s)"
        ],
        [
          "Super G3 modulation",
          "V.34 half-duplex, up to 33.6 kbit/s, per the procedures of ITU-T T.30 Annex F (capability negotiation via V.8)"
        ],
        [
          "Group 4 option (higher tier)",
          "Some high-end units also supported Group 4 fax over ISDN, defined by ITU-T T.6 (coding) and T.563 (terminal characteristics)"
        ],
        [
          "Form-factor distinction",
          "Desktop = compact tabletop/countertop unit for lower volumes; console = larger floor-standing or cabinet unit for higher-volume, heavier-duty use"
        ]
      ],
      "sources": [
        "ITU-T Recommendation T.4",
        "ITU-T Recommendation T.30",
        "ITU-T V-series Recommendations",
        "ITU-T Recommendation T.30 (Annex F)",
        "ITU-T Recommendation V.34",
        "ITU-T Recommendation T.6",
        "ITU-T Recommendation T.563",
        "Office-equipment form-factor classification (copier/fax trade usage)"
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
      "section": "fax",
      "slug": "how-fax-machines-work"
    },
    {
      "section": "fax",
      "slug": "history-of-business-faxing"
    },
    {
      "section": "fax",
      "slug": "decline-of-office-fax-machines"
    },
    {
      "section": "guides",
      "slug": "thermal-printhead"
    },
    {
      "section": "guides",
      "slug": "laser-printing"
    },
    {
      "section": "guides",
      "slug": "inkjet-printing"
    }
  ],
  "faqs": [
    {
      "q": "Is a console fax machine a different kind of fax from a desktop one?",
      "a": "No. \"Desktop\" and \"console\" describe physical form and duty (a compact tabletop unit versus a larger floor-standing or cabinet unit), not the fax protocol. Both are normally ITU-T Group 3 terminals using the same T.4 coding and T.30 procedures, so a console machine is a bigger, higher-capacity chassis rather than a different class of fax."
    },
    {
      "q": "Do console fax machines transmit pages faster than desktop machines?",
      "a": "Not by virtue of the cabinet. Transmission speed is set by the fax standard and the telephone line: Group 3 uses the V.27ter, V.29, and V.17 modems (up to 14.4 kbit/s), while Super G3 uses V.34 at up to 33.6 kbit/s under T.30 Annex F. A desktop and a console unit running the same standard on comparable lines negotiate the same speed."
    },
    {
      "q": "What resolution do desktop and console fax machines use?",
      "a": "The same Group 3 resolutions defined by ITU-T T.4: a standard mode of about 204 x 98 dpi and a fine mode of about 204 x 196 dpi, with an optional superfine mode. Resolution is a property of the standard, not the form factor."
    },
    {
      "q": "What actually differs between the two classes?",
      "a": "Paper and document-feeder capacity, memory, mechanism endurance and duty cycle, and footprint. Console units are floor-standing or cabinet machines built for higher-volume, heavier-duty use, while desktop units are compact machines for personal or low-volume settings. Exact figures vary by model and are not asserted for the class here."
    },
    {
      "q": "Where did the idea of a \"desktop\" fax come from?",
      "a": "Compact desktop facsimile predates modern office fax: Western Union's Desk-Fax of 1948 was a small unit made to sit on a desk and exchange telegram images. The desktop-versus-console vocabulary itself is borrowed from office equipment such as copiers, which are similarly split into compact desktop and larger floor-standing models."
    }
  ],
  "sources": [
    {
      "title": "ITU-T Recommendation T.4: Standardization of Group 3 facsimile terminals for document transmission",
      "url": "https://www.itu.int/rec/T-REC-T.4/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "ITU-T Recommendation T.30: Procedures for document facsimile transmission in the general switched telephone network",
      "url": "https://www.itu.int/rec/T-REC-T.30/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "ITU-T Recommendation T.6: Facsimile coding schemes and coding control functions for Group 4 facsimile apparatus",
      "url": "https://www.itu.int/rec/T-REC-T.6/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "ITU-T Recommendation T.563: Terminal characteristics for Group 4 facsimile apparatus",
      "url": "https://www.itu.int/rec/T-REC-T.563/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "ITU-T Recommendation V.34: A modem operating at data signalling rates of up to 33 600 bit/s",
      "url": "https://www.itu.int/rec/T-REC-V.34/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "Fax (standards, Group 3 resolutions and modulation, Western Union Desk-Fax)",
      "url": "https://en.wikipedia.org/wiki/Fax",
      "publisher": "Wikipedia"
    },
    {
      "title": "Desk-fax",
      "url": "https://www.britannica.com/technology/desk-fax",
      "publisher": "Encyclopaedia Britannica"
    },
    {
      "title": "Office Copiers: Types, Functions & Buying Guide (desktop vs. floor-standing/console form factors)",
      "url": "https://www.jdyoung.com/resource-center/posts/view/476/office-copiers",
      "publisher": "JD Young"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "desktop fax machine",
    "console fax machine",
    "floor-standing fax machine",
    "fax machine form factor",
    "group 3 fax machine",
    "fax machine types",
    "high-volume fax machine",
    "office fax machine",
    "super g3 fax",
    "itu-t t.4",
    "tabletop fax machine",
    "fax machine classes"
  ],
  "cluster": "fax-models"
};

export default entry;
