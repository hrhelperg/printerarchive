import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "sharp-ux-fax-series",
  "title": "Sharp UX Fax Series",
  "description": "Sharp's UX series of standalone ITU-T Group 3 fax machines for home and small offices, spanning thermal-transfer film and plain-paper inkjet models.",
  "summary": "The Sharp UX series is a line of standalone Group 3 facsimile machines made by Sharp Corporation, identified by the \"UX\" model prefix and sold alongside the company's FO-branded fax models. Every UX machine is an ITU-T (formerly CCITT) Group 3 terminal that sends and receives documents over the public switched telephone network, following ITU-T Recommendations T.4 and T.30. The line spans thermal-transfer (film-ribbon) models such as the UX-P200 and later plain-paper inkjet models such as the UX-B700, so this page describes the family at line level rather than cataloguing per-model specifications. Sharp no longer manufactures its standalone UX/FO fax machines for retail, but because they conform to Group 3 the machines remain interoperable with other Group 3 fax devices and services.",
  "manufacturer": "Sharp Corporation",
  "category": "Fax machine series",
  "alsoKnownAs": [
    "Sharp UX-series fax machines",
    "Sharp UX fax machines",
    "Sharp UX facsimile line"
  ],
  "specs": [
    {
      "label": "Fax standard",
      "value": "ITU-T (CCITT) Group 3 (G3) facsimile",
      "source": "Sharp UX-P200 Facsimile Operation Manual (Sharp Corporation); ITU-T Rec. T.30"
    },
    {
      "label": "Telephone line",
      "value": "Public switched telephone network (PSTN)",
      "source": "Sharp UX-P200 Facsimile Operation Manual (Sharp Corporation)"
    },
    {
      "label": "Group 3 resolution",
      "value": "Horizontal 203 pels/inch (8 pels/mm); vertical 3.85 lines/mm standard, 7.7 fine, 15.4 superfine (1,728 picture elements across a 215 mm scan line)",
      "source": "ITU-T Rec. T.4; Sharp UX-P200 Facsimile Operation Manual (Sharp Corporation)"
    },
    {
      "label": "Image coding",
      "value": "Group 3 run-length coding: Modified Huffman (MH) and Modified READ (MR)",
      "source": "ITU-T Rec. T.4; Sharp UX-P200 Facsimile Operation Manual (Sharp Corporation)"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview of the UX line"
    },
    {
      "kind": "paragraph",
      "text": "The Sharp UX series is a family of standalone facsimile machines produced by Sharp Corporation and identified by the \"UX\" model prefix printed on units such as the UX-P200, whose operation manual is titled simply \"UX-P200 Facsimile Operation Manual.\" Sharp built its dedicated fax machines under two prefixes, UX and FO, with the UX line consisting of compact desktop fax terminals typical of home and small-office use. Rather than a single product, the series covers many individual models released across the life of the analog fax market, ranging from film-ribbon (thermal-transfer) units to later plain-paper inkjet models. For that reason this page describes the line at the family level and does not assign any one model's specifications to the whole series. What the models share is conformance to the international Group 3 fax standard, which governs how they scan, compress, and exchange documents over ordinary telephone lines."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Group 3 standard and PSTN operation"
    },
    {
      "kind": "paragraph",
      "text": "Every Sharp UX fax machine is an ITU-T (formerly CCITT) Group 3 terminal. Sharp's UX-P200 manual lists the machine's compatibility as \"ITU-T (CCITT) G3 mode\" and its applicable telephone line as the \"public switched telephone network,\" which are the defining traits of the Group 3 class. Group 3 itself is defined by two ITU-T Recommendations: T.4, \"Standardization of Group 3 facsimile terminals for document transmission,\" which specifies scanning resolution and image-coding schemes, and T.30, \"Procedures for document facsimile transmission in the general switched telephone network,\" which specifies call setup, capability negotiation, and the handshaking protocol. Under T.4 a Group 3 page is scanned at 1,728 black-and-white picture elements across a 215 mm scan line, with a standard vertical resolution of 3.85 lines/mm and optional higher resolutions of 7.7 and 15.4 lines/mm. The UX-P200 manual states the same figures in imperial units, listing 203 pels/inch horizontally (8 pels/mm) and 98, 196, and 391 lines/inch for standard, fine, and superfine modes, confirming that the line follows the Group 3 resolution set."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Image coding and modem speeds"
    },
    {
      "kind": "paragraph",
      "text": "Group 3 machines compress each scanned line with run-length coding defined in T.4: one-dimensional Modified Huffman (MH) and two-dimensional Modified READ (MR). The UX-P200 manual lists its compression schemes as \"MR, MH, H2,\" reflecting this Group 3 coding. Transmission speed depends on the modem, and Group 3 modems are standardized in the ITU-T V-series: V.27ter (2,400 and 4,800 bit/s), V.29 (up to 9,600 bit/s), and the optional V.17 (up to 14,400 bit/s), as summarized in Garret Wilson's Group 3 reference. Modem speed therefore varies from model to model and is a per-unit specification rather than a family-wide one; the UX-P200, for example, is rated at 9,600 bit/s with automatic fallback to lower speeds. The later Super G3 extension adds the V.34 modem at up to 33,600 bit/s, which mFax reports on higher-end machines such as its FO-DC550, so Super G3 should not be assumed for every UX model."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Printing methods across the line"
    },
    {
      "kind": "paragraph",
      "text": "Because the UX series spans a long period, its models do not share a single printing technology. Many UX machines are thermal-transfer (film-ribbon) fax machines: the UX-P200, for instance, uses \"thermal transfer recording,\" printing onto plain paper by melting ink from a Sharp imaging-film roll. Thermal-transfer models are recognizable by the film they consume; the UX-5CR roll is used by models including the UX-P100, UX-P115, UX-P200, UX-A255, UX-A260, and UX-CD600, while the UX-3CR film serves the UX-300/305/460 group, according to consumables listings. Later in the line Sharp moved some models to plain-paper inkjet printing, such as the UX-B700, per mFax's Sharp fax overview. For the mechanics behind these output methods, see the thermal printhead and inkjet printing references."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Models in the series"
    },
    {
      "kind": "paragraph",
      "text": "Representative members of the series include the UX-P100, UX-P115, UX-P200, UX-A255, UX-A260, and UX-CD600 (thermal-transfer models using UX-5CR film); the UX-300, UX-305, and UX-460 (thermal-transfer models using UX-3CR film); the UX-355L; and the plain-paper inkjet UX-B700. These model identities are drawn from Sharp documentation and consumables-compatibility listings. Individual units differ in memory capacity, document-feeder size, modem speed, display, and features, and this page intentionally avoids presenting one model's numbers as if they applied to the whole family. The common thread is the Group 3 fax engine rather than any shared print mechanism or feature set."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Consumables and media"
    },
    {
      "kind": "paragraph",
      "text": "On thermal-transfer UX models the consumable is a roll of Sharp thermal-transfer imaging film rather than toner or a liquid-ink cartridge. The UX-P200 manual specifies a UX-5CR replacement roll of about 164 ft (50 m) that yields roughly 150 letter-size pages; the UX-3CR film performs the equivalent role on the 300/400-series machines. Because these are plain-paper fax machines, the paper itself is ordinary copier stock: the UX-P200 tray is rated for about 50 letter sheets of 20-lb paper. Plain-paper inkjet models such as the UX-B700 instead use ink cartridges and carry a larger paper tray. Buyers of used units should confirm which film or ink a specific model takes, since the UX-5CR and UX-3CR supplies are not interchangeable across the whole line."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Availability and legacy"
    },
    {
      "kind": "paragraph",
      "text": "Sharp no longer manufactures its standalone UX and FO fax machines for retail. According to mFax's buyer's guide, remaining units are generally sold used or refurbished, and Sharp's current fax capability is delivered through its MX-series multifunction printers rather than dedicated fax hardware. Despite being out of production, UX machines remain usable because Group 3 is a stable international standard: any Group 3 terminal or fax service that conforms to ITU-T T.4 and T.30 can exchange documents with a UX machine over the telephone network. For wider context on the technology, see the reference pages on how fax machines work and on analog versus digital fax."
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
          "ITU-T (CCITT) Group 3 (G3) facsimile"
        ],
        [
          "Telephone line",
          "Public switched telephone network (PSTN)"
        ],
        [
          "Group 3 resolution",
          "Horizontal 203 pels/inch (8 pels/mm); vertical 3.85 lines/mm standard, 7.7 fine, 15.4 superfine (1,728 picture elements across a 215 mm scan line)"
        ],
        [
          "Image coding",
          "Group 3 run-length coding: Modified Huffman (MH) and Modified READ (MR)"
        ]
      ],
      "sources": [
        "Sharp UX-P200 Facsimile Operation Manual (Sharp Corporation)",
        "ITU-T Rec. T.30",
        "ITU-T Rec. T.4"
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
      "slug": "analog-fax-vs-digital-fax"
    },
    {
      "section": "fax",
      "slug": "history-of-business-faxing"
    },
    {
      "section": "fax",
      "slug": "why-fax-is-still-used"
    },
    {
      "section": "guides",
      "slug": "thermal-printhead"
    },
    {
      "section": "guides",
      "slug": "inkjet-printing"
    }
  ],
  "faqs": [
    {
      "q": "Is the Sharp UX series Group 3 or Super G3?",
      "a": "The UX machines are ITU-T (CCITT) Group 3 fax terminals operating over the public switched telephone network; Sharp's UX-P200 manual explicitly lists \"ITU-T (CCITT) G3 mode.\" Super G3 (the V.34 modem at up to 33,600 bit/s) is reported by mFax on higher-end machines such as the FO-DC550 rather than described as a UX-wide feature, and individual UX modem speeds vary (the UX-P200, for example, is rated at 9,600 bit/s)."
    },
    {
      "q": "What print technology do Sharp UX fax machines use?",
      "a": "It varies by model. Many UX models are thermal-transfer (film-ribbon) machines that print on plain paper: the UX-P200 uses \"thermal transfer recording\" with UX-5CR film. Later models such as the UX-B700 are plain-paper inkjet units. There is no single print technology common to the entire series."
    },
    {
      "q": "What resolution does a Sharp UX fax machine use?",
      "a": "As Group 3 terminals they follow the ITU-T T.4 resolution set. The UX-P200 manual lists 203 pels/inch horizontally (8 pels/mm) and vertical resolutions of 98 lines/inch (3.85 lines/mm) standard, 196 (7.7 lines/mm) fine, and 391 (15.4 lines/mm) superfine, which match the T.4 figures of 1,728 elements across a 215 mm line at 3.85, 7.7, and 15.4 lines/mm."
    },
    {
      "q": "What film or ribbon does a thermal-transfer UX model use?",
      "a": "Thermal-transfer UX machines use Sharp imaging-film rolls. Per the UX-P200 manual, the UX-5CR roll (about 50 m) yields roughly 150 letter-size pages and is used on P-series and A-series models such as the UX-P100/P115/P200 and UX-A255/A260; the UX-3CR film serves the UX-300/305/460 group. Plain-paper inkjet models such as the UX-B700 use ink cartridges instead."
    },
    {
      "q": "Are Sharp UX fax machines still made?",
      "a": "No. According to mFax's buyer's guide, Sharp's standalone UX and FO fax lines are no longer manufactured for retail, with remaining units sold used or refurbished; fax capability now ships mainly in Sharp's MX-series multifunction printers. Existing UX units still interoperate with any Group 3 device or service because Group 3 remains a stable ITU-T standard."
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
      "title": "Sharp UX-P200 Facsimile Operation Manual",
      "url": "https://archive.org/details/manualsonline-id-6807bfa2-af8f-4a3f-aa96-15a87e01ac4c",
      "publisher": "Sharp Corporation"
    },
    {
      "title": "Sharp Fax Machine Buyer's Guide: Models, Specs & Alternatives",
      "url": "https://mfax.to/blog/sharp-fax-machine/",
      "publisher": "mFax (Documo)"
    },
    {
      "title": "Group 3 Facsimile Communication",
      "url": "https://www.garretwilson.com/essays/computers/group3-fax",
      "publisher": "Garret Wilson"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "sharp ux",
    "sharp ux fax",
    "sharp fax machine",
    "sharp ux-p200",
    "sharp ux-b700",
    "group 3 fax",
    "itu-t t.4",
    "thermal transfer fax",
    "plain paper fax",
    "pstn facsimile",
    "sharp facsimile",
    "super g3"
  ],
  "cluster": "fax-models"
};

export default entry;
