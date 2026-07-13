import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "laser-fax-machines",
  "title": "Laser Fax Machines",
  "description": "Laser fax machines are ITU-T Group 3 (T.4/T.30) fax terminals that print received documents on plain paper with a laser electrophotographic engine.",
  "summary": "Laser fax machines are Group 3 facsimile terminals that print incoming documents on plain paper with a laser (electrophotographic) print engine — the same xerographic marking process used by laser printers and photocopiers — rather than onto the heat-sensitive thermal paper used by earlier fax machines. As Group 3 devices they follow the ITU-T T.4 and T.30 Recommendations for image coding and call handling over the public switched telephone network, so they interoperate with thermal and inkjet fax machines regardless of how each one prints. Wikipedia dates the broader shift from thermal-paper to plain-paper fax to the mid-1990s. Many laser fax units were sold as multifunction devices that combined faxing with plain-paper printing, copying and scanning.",
  "category": "Fax machine class",
  "era": "Plain-paper fax era (mid-1990s onward)",
  "alsoKnownAs": [
    "Laser plain-paper fax",
    "Plain-paper fax (laser)",
    "Laser facsimile machine",
    "Laser fax"
  ],
  "specs": [
    {
      "label": "Fax standard / group",
      "value": "Group 3 facsimile terminal, defined by ITU-T T.4 (image resolutions and coding) and ITU-T T.30 (call-setup and transmission procedures over the PSTN); laser fax machines are ordinary Group 3 terminals and interoperate with thermal and inkjet Group 3 machines.",
      "source": "ITU-T Recommendation T.4; ITU-T Recommendation T.30"
    },
    {
      "label": "Marking method",
      "value": "Electrophotographic (laser or LED xerographic) print engine: the received image is written to a photoconductor, developed with toner and fused onto plain cut-sheet paper, in contrast to the direct-thermal printing on heat-sensitive roll paper used by earlier fax machines.",
      "source": "Wikipedia: Fax (1970s-1990s thermal-paper fax; mid-1990s transition to plain-paper fax)"
    },
    {
      "label": "Group 3 resolutions (ITU-T T.4)",
      "value": "Vertical: standard 3.85 lines/mm (about 98 lines per inch), fine 7.7 lines/mm (about 196 lines per inch), optional superfine 15.4 lines/mm (about 391 lines per inch). Horizontal: about 204 pels per inch, encoded as 1728 pels across a nominal 215 mm scan line (commonly cited as 203-204 dpi).",
      "source": "ITU-T Recommendation T.4; Wikipedia: Fax"
    },
    {
      "label": "Image compression",
      "value": "Modified Huffman (MH, one-dimensional) as specified in ITU-T T.4; Modified READ (MR, two-dimensional) as an option in T.4; Modified Modified READ (MMR) as defined in ITU-T T.6 and usable by Group 3 as an option.",
      "source": "ITU-T Recommendation T.4; ITU-T Recommendation T.6"
    },
    {
      "label": "Modulation / line rate (PSTN)",
      "value": "V.27ter up to 4,800 bit/s and V.29 up to 9,600 bit/s (fallback rates), V.17 up to 14,400 bit/s; 'Super G3' machines add V.34 (applied to fax under the advanced procedures of ITU-T T.30) at up to 33,600 bit/s. 'Super G3' is an industry term rather than a formal ITU designation.",
      "source": "ITU-T Recommendation V.17; ITU-T Recommendation V.34; ITU-T Recommendation T.30"
    },
    {
      "label": "Typical per-page transmission time (Group 3)",
      "value": "Roughly 6 to 15 seconds per page for Group 3, depending on page content and the negotiated line rate.",
      "source": "Wikipedia: Fax"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What a laser fax machine is"
    },
    {
      "kind": "paragraph",
      "text": "A laser fax machine is a facsimile machine whose receive-side marking engine is an electrophotographic (laser or LED) print engine, so incoming documents are reproduced with toner fused onto ordinary plain paper rather than printed onto heat-sensitive thermal paper. In every other respect it behaves like any Group 3 fax terminal: it scans outgoing pages, negotiates a connection over the telephone network, and exchanges compressed image data according to the same international standards. The term therefore describes a class defined by how the machine prints, not by a distinct transmission standard. Laser fax machines are one branch of the broader plain-paper fax family; the other common branch uses inkjet printheads. Many laser fax products were sold as multifunction devices that combined fax with plain-paper printing, copying and scanning in a single chassis."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The Group 3 standard behind laser fax"
    },
    {
      "kind": "paragraph",
      "text": "Almost all laser fax machines are Group 3 terminals. Group 3 facsimile is defined by ITU-T Recommendation T.4, which standardizes the image resolutions and coding, and ITU-T Recommendation T.30, which defines the call-setup, capability-negotiation and page-transfer procedures used over the general switched telephone network. Because the marking method is not part of these recommendations, a laser fax, a thermal fax and an inkjet fax all interoperate: at the start of a call two machines negotiate a common resolution, compression scheme and modulation speed regardless of how each one ultimately renders the page. This shared standard is why a document sent from an older thermal machine can be received and printed on a later plain-paper laser unit without special configuration."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Laser marking versus thermal fax"
    },
    {
      "kind": "paragraph",
      "text": "The defining contrast is with the direct-thermal printing used by earlier and lower-cost fax machines. Wikipedia notes that fax machines from the 1970s to the 1990s often used direct thermal printers with rolls of thermal paper, and that a transition toward plain-paper faxes began in the mid-1990s. A laser fax instead uses the xerographic (electrophotographic) process: a laser or LED array writes the received image as a charge pattern on a photoconductor drum, toner is attracted to that pattern, transferred to plain paper and fused with heat. The consequences are archival rather than transmissive - plain-paper output does not fade or curl the way thermal-paper output can, can be written on and photocopied normally, and uses standard cut-sheet stock. None of this changes what travels down the phone line; it changes only the permanence and handling of the received page. The laser-printing and thermal-printhead guides cover the underlying mechanisms in more detail."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Resolution and image detail"
    },
    {
      "kind": "paragraph",
      "text": "As Group 3 devices, laser fax machines carry the resolutions defined in ITU-T T.4. Vertically, T.4 specifies a standard mode of 3.85 lines per millimetre (about 98 lines per inch), a fine mode of 7.7 lines per millimetre (about 196 lines per inch), and an optional superfine mode of 15.4 lines per millimetre (about 391 lines per inch). Horizontally the standard places roughly 204 picture elements per inch across the page, encoded as 1728 pels along a nominal 215 mm scan line; these values are commonly cited as 203-204 dpi. Because the T.4 resolution is fixed by the standard rather than by the printer, a fine-mode fax carries the same amount of scanned detail whether it is printed by laser, thermal or inkjet; the laser engine mainly affects the edge sharpness and permanence of the printed dots."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Transmission speed and modulation"
    },
    {
      "kind": "paragraph",
      "text": "Group 3 fax negotiates a line speed using ITU-T voiceband-modem recommendations. Older and fallback rates use V.27ter (up to 4,800 bit/s) and V.29 (up to 9,600 bit/s); V.17 raised the Group 3 ceiling to 14,400 bit/s. Machines marketed as 'Super G3' - an industry term rather than a formal ITU designation - add V.34 modulation, applied to fax under the advanced procedures of ITU-T T.30, at data rates up to 33,600 bit/s. Wikipedia gives a typical Group 3 page time of roughly 6 to 15 seconds. A laser marking engine does not affect these negotiated rates; a Super G3 laser machine and a Super G3 thermal machine reach the same line speeds. What the laser engine can influence is throughput at the paper, since a fast electrophotographic engine prints received pages without the per-line dwell of a thermal head."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Place in the office document workflow"
    },
    {
      "kind": "paragraph",
      "text": "Laser fax machines belong to the plain-paper era of office faxing that Wikipedia dates to the mid-1990s onward. Their appeal was practical: received faxes emerged as durable plain-paper documents suitable for filing, signing and re-copying, and the same engine could double as a network printer or copier output. Over time the standalone laser fax gave way to multifunction printers that fold fax into a broader set of scan, print and copy functions, and to fax-over-IP and email-to-fax services that carry the same T.30/T.4 payload over data networks. The class remains a useful reference point for how a single transmission standard - Group 3 - was implemented across very different printing technologies."
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
          "Fax standard / group",
          "Group 3 facsimile terminal, defined by ITU-T T.4 (image resolutions and coding) and ITU-T T.30 (call-setup and transmission procedures over the PSTN); laser fax machines are ordinary Group 3 terminals and interoperate with thermal and inkjet Group 3 machines."
        ],
        [
          "Marking method",
          "Electrophotographic (laser or LED xerographic) print engine: the received image is written to a photoconductor, developed with toner and fused onto plain cut-sheet paper, in contrast to the direct-thermal printing on heat-sensitive roll paper used by earlier fax machines."
        ],
        [
          "Group 3 resolutions (ITU-T T.4)",
          "Vertical: standard 3.85 lines/mm (about 98 lines per inch), fine 7.7 lines/mm (about 196 lines per inch), optional superfine 15.4 lines/mm (about 391 lines per inch). Horizontal: about 204 pels per inch, encoded as 1728 pels across a nominal 215 mm scan line (commonly cited as 203-204 dpi)."
        ],
        [
          "Image compression",
          "Modified Huffman (MH, one-dimensional) as specified in ITU-T T.4; Modified READ (MR, two-dimensional) as an option in T.4; Modified Modified READ (MMR) as defined in ITU-T T.6 and usable by Group 3 as an option."
        ],
        [
          "Modulation / line rate (PSTN)",
          "V.27ter up to 4,800 bit/s and V.29 up to 9,600 bit/s (fallback rates), V.17 up to 14,400 bit/s; 'Super G3' machines add V.34 (applied to fax under the advanced procedures of ITU-T T.30) at up to 33,600 bit/s. 'Super G3' is an industry term rather than a formal ITU designation."
        ],
        [
          "Typical per-page transmission time (Group 3)",
          "Roughly 6 to 15 seconds per page for Group 3, depending on page content and the negotiated line rate."
        ]
      ],
      "sources": [
        "ITU-T Recommendation T.4",
        "ITU-T Recommendation T.30",
        "Wikipedia: Fax (1970s-1990s thermal-paper fax; mid-1990s transition to plain-paper fax)",
        "Wikipedia: Fax",
        "ITU-T Recommendation T.6",
        "ITU-T Recommendation V.17",
        "ITU-T Recommendation V.34"
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
      "section": "guides",
      "slug": "laser-printing"
    },
    {
      "section": "guides",
      "slug": "how-laser-printers-work"
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
      "q": "How is a laser fax machine different from a thermal fax machine?",
      "a": "The difference is the marking method, not the transmission standard. A laser fax prints received documents onto plain paper with a toner-based electrophotographic engine, while a thermal fax prints onto heat-sensitive thermal paper. Both are Group 3 terminals under ITU-T T.4 and T.30, so they interoperate normally; the laser machine's output is simply plain paper that resists fading and can be filed, signed and copied like any ordinary document."
    },
    {
      "q": "Do laser fax machines use a different fax standard?",
      "a": "No. Almost all laser fax machines are Group 3 terminals following ITU-T Recommendations T.4 (resolutions and image coding) and T.30 (transmission procedures over the phone network) - the same standards used by thermal and inkjet fax machines. The 'laser' label refers only to how the received image is printed."
    },
    {
      "q": "What resolution do laser fax machines print at?",
      "a": "As Group 3 devices they support the resolutions defined in ITU-T T.4: a standard vertical mode of 3.85 lines/mm (about 98 lines per inch), a fine mode of 7.7 lines/mm (about 196 lines per inch), and an optional superfine mode of 15.4 lines/mm (about 391 lines per inch), with roughly 204 pels per inch horizontally (1728 pels per scan line, commonly cited as 203-204 dpi)."
    },
    {
      "q": "How fast can a laser fax machine send a page?",
      "a": "Speed depends on the modem rate negotiated for the call, not on the laser engine. Group 3 uses V.27ter (up to 4,800 bit/s), V.29 (up to 9,600 bit/s) and V.17 (up to 14,400 bit/s); 'Super G3' machines add V.34 at up to 33,600 bit/s. Wikipedia gives a typical Group 3 page time of about 6 to 15 seconds."
    },
    {
      "q": "Do laser fax machines need special paper?",
      "a": "No. Laser fax machines print received documents on ordinary plain cut-sheet paper, unlike thermal fax machines, which require heat-sensitive thermal paper. This plain-paper output is one of the main reasons offices moved toward laser and other plain-paper fax machines from the mid-1990s onward, according to Wikipedia."
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
      "title": "ITU-T Recommendation V.17: A 2-wire modem for facsimile applications with rates up to 14 400 bit/s",
      "url": "https://www.itu.int/rec/T-REC-V.17/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "ITU-T Recommendation V.34: A modem operating at data signalling rates of up to 33 600 bit/s",
      "url": "https://www.itu.int/rec/T-REC-V.34/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "Fax",
      "url": "https://en.wikipedia.org/wiki/Fax",
      "publisher": "Wikipedia (Wikimedia Foundation)"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "laser fax machine",
    "plain-paper fax",
    "group 3 fax",
    "itu-t t.4",
    "itu-t t.30",
    "electrophotographic printing",
    "laser fax vs thermal fax",
    "super g3",
    "fax modulation",
    "laser facsimile",
    "plain paper facsimile",
    "fax machine class"
  ],
  "cluster": "fax-models"
};

export default entry;
