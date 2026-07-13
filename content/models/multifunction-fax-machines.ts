import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "multifunction-fax-machines",
  "title": "Multifunction Fax Machines (Fax MFPs)",
  "description": "Multifunction fax machines (fax MFPs) integrate Group 3 faxing with printing, scanning, and copying in one office all-in-one, per ITU-T T.4/T.30.",
  "summary": "A multifunction fax machine, or fax MFP, is an office all-in-one that folds faxing into a single device alongside printing, scanning, and copying rather than dedicating a machine to fax alone. Its fax function is almost always Group 3, defined by ITU-T Recommendations T.4 (image coding) and T.30 (call setup and transmission over the telephone network), and often Super G3 using V.34 modulation at up to 33.6 kbit/s. Because the fax shares the unit's print engine, output is on plain paper — laser in most enterprise machines and inkjet in home-office models — rather than the thermal roll paper of early standalone fax machines. This page describes the class at family level; it does not list specifications for individual models, and any figure that cannot be traced to an authoritative standard or manufacturer source is omitted.",
  "category": "Fax machine class",
  "era": "Office all-in-one era (fax common in MFPs, 1980s–2010s)",
  "alsoKnownAs": [
    "Fax MFP",
    "All-in-one fax machine",
    "Multifunction printer with fax (MFP/AIO)",
    "Printer-fax-copier"
  ],
  "specs": [
    {
      "label": "Device class",
      "value": "Office multifunction device (MFP / all-in-one) that combines faxing with printing, scanning, and copying in a single unit",
      "source": "Wikipedia: Multifunction printer"
    },
    {
      "label": "Fax standard",
      "value": "Group 3 facsimile — page image coding per ITU-T T.4, call setup and transmission per ITU-T T.30, over the public switched telephone network",
      "source": "ITU-T Recs. T.4 and T.30"
    },
    {
      "label": "Group 3 resolutions",
      "value": "204 × 98 dpi (standard) and 204 × 196 dpi (fine)",
      "source": "ITU-T Rec. T.4"
    },
    {
      "label": "High-speed faxing",
      "value": "Super G3 uses V.34 modulation at up to 33.6 kbit/s (ITU-T T.30 Annex F); earlier Group 3 modes run at up to 14.4 kbit/s (V.17) and 9.6 kbit/s (V.29)",
      "source": "ITU-T Rec. T.30"
    },
    {
      "label": "Output",
      "value": "Plain paper printed on the unit's own engine — laser in most enterprise MFPs, inkjet in home-office models",
      "source": "Wikipedia: Multifunction printer"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What a multifunction fax machine is"
    },
    {
      "kind": "paragraph",
      "text": "A multifunction fax machine — commonly called a fax MFP or all-in-one — is an office machine that incorporates the functionality of several devices in one, combining some or all of printing, scanning, photocopying, and faxing in a single unit. In this class the fax capability is not a standalone product but one function among several: the same chassis prints documents, scans and copies originals, and sends and receives faxes. From the 1980s to the 2010s multifunction printers commonly included fax functionality, which is how the fax MFP became a typical way offices faxed once converged devices displaced dedicated fax machines. On contemporary all-in-ones fax is increasingly treated as an optional feature rather than a defining one."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The fax function: Group 3 over the telephone network"
    },
    {
      "kind": "paragraph",
      "text": "The fax subsystem in these machines is almost always Group 3, the facsimile system standardized by the ITU-T (formerly CCITT). Two recommendations define it. T.4, \"Standardization of Group 3 facsimile terminals for document transmission,\" specifies how the page image is encoded, using the Modified Huffman and Modified READ compression schemes. T.30, \"Procedures for document facsimile transmission in the general switched telephone network,\" governs how two terminals negotiate and carry out a call over ordinary telephone lines. Under T.4, Group 3 sends at 204 × 98 dpi in standard mode and 204 × 196 dpi in fine mode. Because Group 3 runs over the analog telephone network, a fax MFP needs only a standard phone line to interoperate with other fax machines."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Transmission speed: Super G3 and earlier Group 3 modems"
    },
    {
      "kind": "paragraph",
      "text": "Group 3 fax speed is set by the modulation the two terminals agree on during the T.30 handshake. Many later fax MFPs support Super G3, which uses V.34 modulation to reach up to 33.6 kbit/s and is defined in Annex F of ITU-T T.30. Earlier and fallback Group 3 modes run more slowly — up to 14.4 kbit/s using V.17 and up to 9.6 kbit/s using V.29 — and a call drops back to a lower rate when line conditions require it. Higher speed shortens per-page transmission time but does not change the Group 3 image resolutions defined by T.4."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Plain-paper output on a laser or inkjet engine"
    },
    {
      "kind": "paragraph",
      "text": "Because the fax function shares the multifunction unit's own print engine, a fax MFP produces incoming faxes on plain paper rather than the heat-sensitive roll paper used by early standalone thermal fax machines. In commercial and enterprise machines that engine is typically laser (electrophotographic); in personal and small-office (SOHO) machines it is typically inkjet. This plain-paper output is a practical advantage of the class: received faxes look like ordinary printed documents, do not fade the way thermal-paper faxes can, and use the same consumables and paper path as the machine's printing and copying functions."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "A shared scanner for copy, scan, and fax-send"
    },
    {
      "kind": "paragraph",
      "text": "The same scanning mechanism the machine uses to photocopy and to scan to file also captures outgoing fax pages, often fed through an automatic document feeder. Integrating one scanner, one print engine, and one telephone interface is what lets a single device stand in for a separate printer, copier, scanner, and fax machine — the core value proposition of the multifunction category. The fax portion still operates as an independent Group 3 terminal on the telephone line; the integration lies in the shared hardware and control panel rather than in the fax protocol itself."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relation to standalone and Group 4 fax machines"
    },
    {
      "kind": "paragraph",
      "text": "Multifunction fax machines sit between dedicated desktop fax units and general office printing. Compared with standalone thermal-paper fax machines, the fax MFP trades a single-purpose design for shared print, scan, and copy hardware and plain-paper output. It should also be distinguished from Group 4 facsimile, a separate digital class defined by ITU-T T.6 (which specifies the Modified Modified READ coding) and T.563 (terminal characteristics) that operates over 64 kbit/s ISDN circuits rather than the analog telephone network. Most office fax MFPs implement Group 3 over the PSTN, not Group 4. Related class pages in this reference cover plain-paper, laser, inkjet, and Super G3 fax machines in more detail."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Reference scope"
    },
    {
      "kind": "paragraph",
      "text": "This page describes the multifunction fax machine as a class, at family level. It does not list resolution, speed, memory, or price for any individual model, and it states no per-model specification that cannot be traced to an authoritative source. Class-level facts about the fax subsystem are drawn from the ITU-T facsimile recommendations, and the multifunction-device definition from general reference material; anything that could not be sourced is omitted rather than estimated. It is not a buying guide and quotes no current pricing or availability."
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
          "Device class",
          "Office multifunction device (MFP / all-in-one) that combines faxing with printing, scanning, and copying in a single unit"
        ],
        [
          "Fax standard",
          "Group 3 facsimile — page image coding per ITU-T T.4, call setup and transmission per ITU-T T.30, over the public switched telephone network"
        ],
        [
          "Group 3 resolutions",
          "204 × 98 dpi (standard) and 204 × 196 dpi (fine)"
        ],
        [
          "High-speed faxing",
          "Super G3 uses V.34 modulation at up to 33.6 kbit/s (ITU-T T.30 Annex F); earlier Group 3 modes run at up to 14.4 kbit/s (V.17) and 9.6 kbit/s (V.29)"
        ],
        [
          "Output",
          "Plain paper printed on the unit's own engine — laser in most enterprise MFPs, inkjet in home-office models"
        ]
      ],
      "sources": [
        "Wikipedia: Multifunction printer",
        "ITU-T Recs. T.4 and T.30",
        "ITU-T Rec. T.4",
        "ITU-T Rec. T.30"
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
      "section": "history",
      "slug": "history-of-fax-machines"
    },
    {
      "section": "guides",
      "slug": "laser-printing"
    },
    {
      "section": "guides",
      "slug": "inkjet-printing"
    },
    {
      "section": "models",
      "slug": "hp-officejet-original"
    }
  ],
  "faqs": [
    {
      "q": "What is a multifunction fax machine?",
      "a": "It is an office all-in-one (MFP) that combines faxing with printing, scanning, and copying in one device, so a single unit handles all four functions instead of a dedicated fax machine standing alone. The fax is one function among several rather than a standalone product."
    },
    {
      "q": "What fax standard do multifunction fax machines use?",
      "a": "Almost always Group 3, the ITU-T facsimile system defined by Recommendation T.4 (page-image coding) and T.30 (call procedures over the telephone network). Many later units also support Super G3, which uses V.34 modulation at up to 33.6 kbit/s."
    },
    {
      "q": "What resolution does a fax MFP send at?",
      "a": "Group 3, as defined by ITU-T T.4, sends at 204 × 98 dpi in standard mode and 204 × 196 dpi in fine mode. This is a property of the Group 3 standard rather than of any specific machine."
    },
    {
      "q": "Do multifunction fax machines use thermal paper?",
      "a": "No. Because the fax shares the multifunction unit's own print engine, incoming faxes print on plain paper — laser in most enterprise machines and inkjet in home-office models — rather than the heat-sensitive roll paper used by early standalone thermal fax machines."
    },
    {
      "q": "How fast is Super G3 fax compared with earlier Group 3?",
      "a": "Super G3 uses V.34 modulation to reach up to 33.6 kbit/s, defined in Annex F of ITU-T T.30, whereas earlier Group 3 modes top out at 14.4 kbit/s (V.17) and 9.6 kbit/s (V.29). Higher speed shortens transmission time but does not change the Group 3 resolutions set by T.4."
    }
  ],
  "sources": [
    {
      "title": "ITU-T Recommendation T.4 — Standardization of Group 3 facsimile terminals for document transmission",
      "url": "https://www.itu.int/rec/T-REC-T.4/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "ITU-T Recommendation T.30 — Procedures for document facsimile transmission in the general switched telephone network",
      "url": "https://www.itu.int/rec/T-REC-T.30/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "ITU-T Recommendation T.6 — Facsimile coding schemes and coding control functions for Group 4 facsimile apparatus",
      "url": "https://www.itu.int/rec/T-REC-T.6/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "ITU-T Recommendation T.563 — Terminal characteristics for Group 4 facsimile apparatus",
      "url": "https://www.itu.int/rec/T-REC-T.563/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "ITU-T Group 4 FAX Compression (T.6) — Sustainability of Digital Formats",
      "url": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000136.shtml",
      "publisher": "Library of Congress"
    },
    {
      "title": "Multifunction printer",
      "url": "https://en.wikipedia.org/wiki/Multifunction_printer",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "multifunction fax machine",
    "fax mfp",
    "all-in-one fax machine",
    "multifunction printer fax",
    "group 3 fax",
    "super g3 fax",
    "plain paper fax",
    "print scan copy fax",
    "itu-t t.4",
    "office all-in-one",
    "fax over pstn",
    "laser fax mfp"
  ],
  "cluster": "fax-models"
};

export default entry;
