import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "group-3-fax-machines",
  "title": "Group 3 Fax Machines (ITU-T T.4 / T.30)",
  "description": "Group 3 (ITU-T T.4/T.30) is the analog PSTN fax standard set by the CCITT in 1980, defining resolutions, image coding, and modem handshakes.",
  "summary": "Group 3 is the class of fax machines defined by ITU-T Recommendation T.4, with call-control procedures in ITU-T Recommendation T.30, for transmitting scanned black-and-white documents over the analog telephone network. Standardized by the CCITT in 1980, it encodes pages at about 204 x 98 dpi (standard) or 204 x 196 dpi (fine) using Modified Huffman and related run-length compression, and sends them through voiceband modems at rates up to 14.4 kbit/s. The faster \"Super G3\" tier uses V.34-family modulation for rates up to 33.6 kbit/s. Because interoperability is fixed by the ITU-T recommendations rather than by any one vendor, Group 3 became the dominant analog office fax standard and is documented here at the class and standard level rather than as an individual model.",
  "category": "Fax machine class",
  "era": "Digital PSTN facsimile era (1980–present)",
  "introduced": "1980 (standardized by the CCITT, now ITU-T, as Recommendation T.4)",
  "alsoKnownAs": [
    "Group 3 fax",
    "G3 fax",
    "G3 facsimile",
    "ITU-T T.4 fax",
    "Super G3 (enhanced Group 3)"
  ],
  "specs": [
    {
      "label": "Defining standards",
      "value": "ITU-T Recommendation T.4 (terminal characteristics and image coding); call-control procedures in ITU-T Recommendation T.30",
      "source": "ITU-T T.4; ITU-T T.30"
    },
    {
      "label": "First standardized",
      "value": "1980, by the CCITT (now ITU-T)",
      "source": "IEEE ETHW; Wikipedia (Fax)"
    },
    {
      "label": "Transmission network",
      "value": "Analog general switched telephone network (PSTN); also usable over leased circuits and ISDN",
      "source": "ITU-T T.4; ITU-T T.30"
    },
    {
      "label": "Standard (normal) resolution",
      "value": "About 204 x 98 dpi — 1728 pixels per scan line horizontally, 3.85 lines/mm vertically",
      "source": "ITU-T T.4; Wikipedia (Fax)"
    },
    {
      "label": "Fine resolution",
      "value": "About 204 x 196 dpi (7.7 lines/mm vertically); optional superfine about 204 x 391 dpi",
      "source": "ITU-T T.4; Wikipedia (Fax)"
    },
    {
      "label": "Image compression",
      "value": "Modified Huffman (MH, one-dimensional) baseline; optional two-dimensional Modified READ (MR) per T.4; optional Modified Modified READ (MMR) per T.6",
      "source": "ITU-T T.4; ITU-T T.6; Wikipedia (Fax)"
    },
    {
      "label": "Modem modulation",
      "value": "V.27ter (2400/4800 bit/s), V.29 (7200/9600 bit/s), and V.17 (up to 14.4 kbit/s); V.21-based low-speed signaling for the handshake",
      "source": "ITU-T T.30; Wikipedia (Fax)"
    },
    {
      "label": "Super G3 data rate",
      "value": "Up to 33.6 kbit/s using ITU-T V.34 (half-duplex) modulation",
      "source": "ITU-T T.30; Wikipedia (Fax)"
    },
    {
      "label": "Session protocol",
      "value": "ITU-T T.30 handshake negotiates page size, resolution, coding, and modem speed and controls page demarcation and call termination",
      "source": "ITU-T T.30"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What Group 3 fax is"
    },
    {
      "kind": "paragraph",
      "text": "Group 3 (often written G3) is the class of facsimile terminals defined by ITU-T Recommendation T.4, with the call-control procedures specified in ITU-T Recommendation T.30. It is the standard for sending scanned black-and-white document images as digital data over the analog general switched telephone network (PSTN); the same terminals may also operate over leased circuits and ISDN. A Group 3 machine scans a page into a bitmap, compresses it, negotiates a connection with the receiving terminal, and transmits the compressed image through a built-in voiceband modem, which the far end decodes and prints. Because interoperability is fixed by the ITU-T recommendations rather than by any single manufacturer, machines from different vendors can exchange documents — so this page describes the class and its governing standards rather than an individual unit."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Standardization and history"
    },
    {
      "kind": "paragraph",
      "text": "Group 3 was standardized in 1980 by the CCITT, the ITU committee whose telecommunication standardization work is now carried out by the ITU-T. The IEEE's Engineering and Technology History Wiki records the 1980 international standardization of G3 facsimile as an engineering milestone, and reference histories note that Recommendation T.4 brought interoperability to digital fax and cut transmission to under a minute per page — a large improvement over the earlier analog Group 1 and Group 2 machines, which needed about six and three minutes per page respectively. Combining digital image coding with ordinary telephone lines made Group 3 the dominant office fax standard from the 1980s onward, and T.4 remains an in-force ITU-T recommendation."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How a page is scanned and compressed"
    },
    {
      "kind": "paragraph",
      "text": "A Group 3 terminal samples each scan line at 1728 picture elements across the nominal 215 mm (A4) coded line width, which corresponds to roughly 203–204 dots per inch horizontally. Standard (normal) vertical resolution is about 98 lines per inch (3.85 lines per millimetre) and fine mode about 196 lines per inch (7.7 lines per millimetre); an optional superfine mode roughly doubles the vertical density again, to about 391 lines per inch. The resulting bitmap is compressed before transmission. The baseline scheme is one-dimensional Modified Huffman (MH) run-length coding defined in T.4; T.4 also allows a more efficient two-dimensional Modified READ (MR) option, and many Group 3 terminals additionally support Modified Modified READ (MMR) — the two-dimensional coding defined in Recommendation T.6 for Group 4 — as a higher-compression option."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The T.30 session and modem handshake"
    },
    {
      "kind": "paragraph",
      "text": "Recommendation T.30 governs what happens on the line. When a call connects, the two terminals exchange handshake tones and capability frames to agree on the page size, the resolution and coding to use, and the highest modem speed both machines support; T.30 then controls the page-by-page image transfer, the boundaries between pages, and the orderly termination of the call. The low-speed signaling for this negotiation is carried using V.21-based modulation, while the compressed image itself is sent with faster half-duplex voiceband modems. Group 3 image transfer commonly uses V.27ter (2400 and 4800 bit/s), V.29 (7200 and 9600 bit/s), and V.17 (up to 14.4 kbit/s), with the terminals falling back to a slower shared rate when line quality does not support the fastest one."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Super G3 and interoperability"
    },
    {
      "kind": "paragraph",
      "text": "The fastest tier of Group 3, marketed as \"Super G3,\" uses ITU-T V.34 (half-duplex) modulation to raise the image-transfer rate to as much as 33.6 kbit/s, roughly halving the time needed to send a page compared with a 14.4 kbit/s V.17 machine. Super G3 stays part of the same standard family: during the T.30 handshake a Super G3 terminal and an older Group 3 terminal simply negotiate down to the fastest speed and coding both support, so the two remain interoperable. The Group 3 procedures have also been adapted for carrying fax traffic over IP networks rather than only analog phone lines."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Printing the received image"
    },
    {
      "kind": "paragraph",
      "text": "The Group 3 standards define how a page is scanned, coded, and transmitted, but not how the receiving machine puts the image on paper, so output technology varied by product generation. Early and low-cost Group 3 machines printed onto heat-sensitive thermal roll paper using a thermal printhead, while later \"plain-paper\" fax machines and multifunction devices reused laser (electrophotographic) or inkjet marking engines to print received faxes onto ordinary cut sheets. Separating the transmission standard from the marking method is why a single Group 3 protocol could be implemented across thermal, laser, and inkjet hardware from many manufacturers."
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
          "Defining standards",
          "ITU-T Recommendation T.4 (terminal characteristics and image coding); call-control procedures in ITU-T Recommendation T.30"
        ],
        [
          "First standardized",
          "1980, by the CCITT (now ITU-T)"
        ],
        [
          "Transmission network",
          "Analog general switched telephone network (PSTN); also usable over leased circuits and ISDN"
        ],
        [
          "Standard (normal) resolution",
          "About 204 x 98 dpi — 1728 pixels per scan line horizontally, 3.85 lines/mm vertically"
        ],
        [
          "Fine resolution",
          "About 204 x 196 dpi (7.7 lines/mm vertically); optional superfine about 204 x 391 dpi"
        ],
        [
          "Image compression",
          "Modified Huffman (MH, one-dimensional) baseline; optional two-dimensional Modified READ (MR) per T.4; optional Modified Modified READ (MMR) per T.6"
        ],
        [
          "Modem modulation",
          "V.27ter (2400/4800 bit/s), V.29 (7200/9600 bit/s), and V.17 (up to 14.4 kbit/s); V.21-based low-speed signaling for the handshake"
        ],
        [
          "Super G3 data rate",
          "Up to 33.6 kbit/s using ITU-T V.34 (half-duplex) modulation"
        ],
        [
          "Session protocol",
          "ITU-T T.30 handshake negotiates page size, resolution, coding, and modem speed and controls page demarcation and call termination"
        ]
      ],
      "sources": [
        "ITU-T T.4",
        "ITU-T T.30",
        "IEEE ETHW",
        "Wikipedia (Fax)",
        "ITU-T T.6"
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
      "q": "What is a Group 3 fax machine?",
      "a": "Group 3 (G3) is the internationally standardized class of fax terminals defined by ITU-T Recommendation T.4, with the call procedures in ITU-T T.30. Group 3 machines scan a document, compress the image, and send it over the ordinary analog telephone network to another Group 3 machine, which decodes and prints it."
    },
    {
      "q": "What resolution does Group 3 fax use?",
      "a": "Group 3 samples 1728 pixels across each scan line (about 203–204 dpi horizontally). Standard mode uses about 98 lines per inch vertically (roughly 204 x 98 dpi) and fine mode about 196 lines per inch (roughly 204 x 196 dpi); an optional superfine mode roughly doubles the vertical density again."
    },
    {
      "q": "How fast can a Group 3 fax transmit?",
      "a": "Group 3 image transfer uses voiceband modems — V.27ter at 2400/4800 bit/s, V.29 at 7200/9600 bit/s, and V.17 at up to 14.4 kbit/s — with the two machines negotiating the fastest rate both support during the T.30 handshake and falling back on poor lines."
    },
    {
      "q": "What is Super G3?",
      "a": "Super G3 is the fastest tier of Group 3. It adds ITU-T V.34 (half-duplex) modulation to raise the image-transfer rate to as much as 33.6 kbit/s — about double the 14.4 kbit/s ceiling of a V.17 machine — while remaining backward-compatible with ordinary Group 3 terminals."
    },
    {
      "q": "How is Group 3 different from Group 4?",
      "a": "Group 3 is designed for the analog telephone network and uses voiceband modems, whereas Group 4 was designed for digital circuits such as ISDN. The two use related image-coding schemes: Group 4's Modified Modified READ (MMR) coding is defined in ITU-T T.6 and is also available as an option on many Group 3 machines."
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
      "title": "Milestones: International Standardization of G3 Facsimile, 1980",
      "url": "https://ethw.org/Milestones:International_Standardization_of_G3_Facsimile,_1980",
      "publisher": "IEEE Engineering and Technology History Wiki"
    },
    {
      "title": "Fax",
      "url": "https://en.wikipedia.org/wiki/Fax",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "group 3 fax",
    "g3 fax",
    "itu-t t.4",
    "itu-t t.30",
    "super g3",
    "fax resolution",
    "fax modem modulation",
    "modified huffman fax",
    "analog fax standard",
    "pstn fax",
    "fax machine class",
    "v.17 fax"
  ],
  "cluster": "fax-models"
};

export default entry;
