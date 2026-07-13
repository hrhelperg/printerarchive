import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "brother-fax-machine-series",
  "title": "Brother Fax Machine Series",
  "description": "Brother's Group 3 fax machine line (FAX-series and IntelliFAX), spanning thermal, inkjet and plain-paper laser models built to ITU-T T.4/T.30.",
  "summary": "The Brother Fax Machine Series is Brother Industries' family of Group 3 facsimile machines, sold under FAX-#### model numbers and, in North America, under the IntelliFAX brand for business-class laser models. Over time the line has used several marking technologies — direct-thermal and thermal-transfer on early units, plain-paper inkjet, and plain-paper electrophotographic laser on current models — while conforming to the ITU-T Group 3 standard (page coding per ITU-T T.4, call control per ITU-T T.30). Brother rates its later Super G3 laser models, such as the FAX-2840 and IntelliFax-5750e, at a 33,600 bit/s (V.34) fax modem, while inkjet and other pre-Super-G3 models negotiate up to 14,400 bit/s (V.17) and the earliest thermal units ran slower. This page describes the line at family level: class-level facts are cited to the ITU-T standards and representative specifications to Brother's own documentation, and unsourced or per-model figures are not generalized to the whole series.",
  "manufacturer": "Brother Industries, Ltd.",
  "category": "Fax machine series",
  "alsoKnownAs": [
    "Brother IntelliFAX / IntelliFax (Brother's North American brand for its business-class plain-paper laser fax machines, e.g. IntelliFax-5750e, IntelliFAX-2840, IntelliFAX-4100e)",
    "Brother FAX-series (individual units carry FAX-#### model numbers such as FAX-236S, FAX-1840C, FAX-2840 and FAX-2940)"
  ],
  "specs": [
    {
      "label": "Facsimile class",
      "value": "ITU-T Group 3 (later laser models also list ITU-T Super Group 3); page coding per ITU-T T.4 and call/session control per ITU-T T.30",
      "source": "Brother FAX-2840 specifications (ITU-T Super Group 3 / ITU-T Group 3); ITU-T Recommendations T.4 and T.30"
    },
    {
      "label": "Group 3 scan resolution",
      "value": "Horizontal 203 dpi (8 dots/mm); vertical 98 lpi (3.85 lines/mm) standard and 196 lpi (7.7 lines/mm) fine; some models add 392 lpi (15.4 lines/mm) superfine",
      "source": "Brother FAX-2840 specifications; ITU-T Recommendation T.4"
    },
    {
      "label": "Fax modem rate (varies by model)",
      "value": "Up to 14,400 bit/s (V.17) on earlier and inkjet models; up to 33,600 bit/s (V.34, 'Super G3') on later laser models, with automatic fallback",
      "source": "Brother FAX-1840C specifications (14,400 bps) and FAX-2840 specifications (33,600 bps); ITU-T Recommendations V.17 and V.34"
    },
    {
      "label": "Image coding",
      "value": "Modified Huffman (MH) and Modified READ (MR) per ITU-T T.4, plus Modified Modified READ (MMR); color inkjet models code color pages as JPEG",
      "source": "Brother FAX-1840C specifications (MH/MR/MMR; color JPEG); ITU-T Recommendation T.4"
    },
    {
      "label": "Marking technologies used across the line",
      "value": "Direct-thermal (thermal paper) and thermal-transfer film on early models; plain-paper inkjet; and plain-paper electrophotographic laser on current models",
      "source": "Brother FAX-236S (direct-thermal) and 'Thermal Transfer FAX' series (FAX-T1/FAX-T9); FAX-1840C (inkjet); FAX-2840 (electrophotographic laser) specifications"
    },
    {
      "label": "Grayscale (halftone) depth (varies by model)",
      "value": "8-bit / 256 levels on the FAX-2840 laser model; 64 levels (mono) / 256 (color) on the FAX-1840C inkjet model",
      "source": "Brother FAX-2840 and FAX-1840C specifications"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What the Brother Fax Machine Series is"
    },
    {
      "kind": "paragraph",
      "text": "The Brother Fax Machine Series is the family of Group 3 facsimile machines built by Brother Industries, Ltd. and sold internationally under FAX-#### model numbers, with business-class plain-paper laser models marketed in North America under the IntelliFAX (also styled IntelliFax) brand. Rather than a single product, it is a long-running line that has spanned several marking technologies and modem generations while remaining within the ITU-T Group 3 facsimile standard. This page describes the line at family level: facts about the Group 3 class are cited to the relevant ITU-T Recommendations, and representative specifications are cited to Brother's own product documentation. Specifications that vary from model to model, or that could not be traced to an authoritative source, are not presented as line-wide."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "A Group 3 line built on ITU-T T.4 and T.30"
    },
    {
      "kind": "paragraph",
      "text": "Brother's fax machines are Group 3 (G3) devices, the dominant analogue fax class for the public switched telephone network. Brother's specification sheets list the compatibility of current models as 'ITU-T Group 3' and, on later laser units, 'ITU-T Super Group 3.' Two ITU-T Recommendations underpin the class: T.4, 'Standardization of Group 3 facsimile terminals for document transmission,' which defines how a page is scanned into picture elements and compressed, and T.30, 'Procedures for document facsimile transmission in the general switched telephone network,' which defines the call setup, capability negotiation and handshake two machines use to agree on speed and resolution before sending image data. Because every model in the line implements these procedures, a Brother fax interoperates with Group 3 machines from other manufacturers."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Scan resolution and image coding"
    },
    {
      "kind": "paragraph",
      "text": "Group 3 fixes the horizontal sampling of a scan line, and Brother's documentation reflects the standard values. The FAX-2840 specification, for example, lists a horizontal resolution of 203 dots per inch (8 dots/mm) with a standard vertical resolution of 98 lines per inch (3.85 lines/mm) and a fine mode of 196 lines per inch (7.7 lines/mm); a superfine mode of 392 lines per inch (15.4 lines/mm) is offered on some models. These figures match ITU-T T.4, which specifies 1728 picture elements across the nominal 215 mm scan line and vertical pitches of 3.85 or 7.7 lines/mm. For compression, Brother's sheets list Modified Huffman (MH) and Modified READ (MR) coding — the one- and two-dimensional schemes defined in T.4 — together with Modified Modified READ (MMR); the color inkjet FAX-1840C additionally codes color pages as JPEG. Grayscale (halftone) depth is model-dependent: the laser FAX-2840 records 8-bit/256 levels, while the inkjet FAX-1840C lists 64 levels for mono and 256 for color."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modem speeds: 14.4 kbit/s to Super G3 (33.6 kbit/s)"
    },
    {
      "kind": "paragraph",
      "text": "The rate at which a Group 3 machine moves image data depends on its fax modem, and Brother's line spans two generations. Earlier and inkjet models negotiate up to 14,400 bit/s: the FAX-1840C specification lists a 14,400 bps modem, the ceiling defined by ITU-T Recommendation V.17, 'A 2-wire modem for facsimile applications with rates up to 14 400 bit/s.' Later business-class laser models are 'Super G3': the FAX-2840 and the IntelliFax-5750e list a 33,600 bps fax modem with automatic fallback, the rate defined by ITU-T Recommendation V.34, 'A modem operating at data signalling rates of up to 33 600 bit/s.' Both fall back automatically to slower rates on poor lines; the Group 3 modem family also includes the earlier, lower-speed V.27 ter and V.29 modulations that machines drop to when line quality requires it."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Marking technologies across the family"
    },
    {
      "kind": "paragraph",
      "text": "Because the line spans decades, its models put marks on paper in different ways, and this is the main axis of variation within the family. Early Brother fax machines were thermal: direct-thermal units such as the FAX-236S printed onto heat-sensitive paper, and Brother also grouped thermal-transfer-film models — its FAX-T1 and FAX-T9 series — under a 'Thermal Transfer FAX' category. Brother then built plain-paper machines in two forms: inkjet, such as the four-cartridge color FAX-1840C, whose specification lists an 'Inkjet' print engine, and electrophotographic laser, such as the FAX-2840, whose specification lists an 'Electrophotographic Laser Printer.' The underlying marking mechanisms are covered in the guides to the thermal printhead, inkjet printing and laser printing."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The IntelliFAX business-class laser branding"
    },
    {
      "kind": "paragraph",
      "text": "In North America Brother marketed its higher-volume, plain-paper laser fax machines under the IntelliFAX name while retaining the FAX-#### model numbers used elsewhere. Brother's own product page for the IntelliFax-5750e describes it as 'a high-performance laser fax machine' with a B/W laser engine, Super G3 compatibility and a 33.6 kbps fax modem; other machines in the group include the IntelliFAX-2840 and IntelliFAX-4100e. Functionally these are office fax machines distinguished by larger page memory, more one-touch and speed-dial locations and higher-duty paper handling, rather than by any change to the Group 3 standard they implement."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Reference scope and sourcing"
    },
    {
      "kind": "paragraph",
      "text": "This is a family-level reference page, not a buying guide, and it quotes no current pricing or availability. Facts about the Group 3 class are cited to the governing ITU-T Recommendations — T.4 and T.30 for the facsimile procedures, and V.17 and V.34 for the fax modem rates — while device-specific figures such as resolutions, modem speeds, coding methods and marking technology are cited to Brother's published specifications for named models and are presented as examples of the line's range rather than as universal specifications. Any specification that could not be traced to an authoritative source has been omitted rather than estimated, and no per-model figure has been generalized to the whole series."
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
          "Facsimile class",
          "ITU-T Group 3 (later laser models also list ITU-T Super Group 3); page coding per ITU-T T.4 and call/session control per ITU-T T.30"
        ],
        [
          "Group 3 scan resolution",
          "Horizontal 203 dpi (8 dots/mm); vertical 98 lpi (3.85 lines/mm) standard and 196 lpi (7.7 lines/mm) fine; some models add 392 lpi (15.4 lines/mm) superfine"
        ],
        [
          "Fax modem rate (varies by model)",
          "Up to 14,400 bit/s (V.17) on earlier and inkjet models; up to 33,600 bit/s (V.34, 'Super G3') on later laser models, with automatic fallback"
        ],
        [
          "Image coding",
          "Modified Huffman (MH) and Modified READ (MR) per ITU-T T.4, plus Modified Modified READ (MMR); color inkjet models code color pages as JPEG"
        ],
        [
          "Marking technologies used across the line",
          "Direct-thermal (thermal paper) and thermal-transfer film on early models; plain-paper inkjet; and plain-paper electrophotographic laser on current models"
        ],
        [
          "Grayscale (halftone) depth (varies by model)",
          "8-bit / 256 levels on the FAX-2840 laser model; 64 levels (mono) / 256 (color) on the FAX-1840C inkjet model"
        ]
      ],
      "sources": [
        "Brother FAX-2840 specifications (ITU-T Super Group 3 / ITU-T Group 3)",
        "ITU-T Recommendations T.4 and T.30",
        "Brother FAX-2840 specifications",
        "ITU-T Recommendation T.4",
        "Brother FAX-1840C specifications (14,400 bps) and FAX-2840 specifications (33,600 bps)",
        "ITU-T Recommendations V.17 and V.34",
        "Brother FAX-1840C specifications (MH/MR/MMR; color JPEG)",
        "Brother FAX-236S (direct-thermal) and 'Thermal Transfer FAX' series (FAX-T1/FAX-T9); FAX-1840C (inkjet); FAX-2840 (electrophotographic laser) specifications",
        "Brother FAX-2840 and FAX-1840C specifications"
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
      "slug": "analog-fax-vs-digital-fax"
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
      "section": "guides",
      "slug": "thermal-printhead"
    }
  ],
  "faqs": [
    {
      "q": "Is a Brother fax machine a Group 3 fax?",
      "a": "Yes. Brother's fax machines are ITU-T Group 3 devices, using the image coding of ITU-T Recommendation T.4 and the call procedures of ITU-T T.30; later business-class laser models additionally list ITU-T Super Group 3 compatibility."
    },
    {
      "q": "What is the difference between the Brother FAX-series and IntelliFAX?",
      "a": "IntelliFAX (also written IntelliFax) is Brother's North American brand name for its business-class plain-paper laser fax machines, such as the IntelliFax-5750e; the same devices carry FAX-#### model numbers elsewhere. It denotes a class of Brother fax, not a different fax standard."
    },
    {
      "q": "How fast is a Brother Super G3 fax?",
      "a": "Brother rates its Super G3 laser models, such as the FAX-2840 and IntelliFax-5750e, at a 33,600 bit/s fax modem (ITU-T V.34) with automatic fallback. Inkjet and other pre-Super-G3 models, such as the FAX-1840C, negotiate up to 14,400 bit/s (ITU-T V.17); the earliest thermal units ran slower."
    },
    {
      "q": "What print technologies have Brother fax machines used?",
      "a": "The line has used direct-thermal (thermal-paper) and thermal-transfer-film printing on early models, plain-paper inkjet (for example the color FAX-1840C), and plain-paper electrophotographic laser on current models such as the FAX-2840."
    },
    {
      "q": "What resolution do Brother fax machines scan and print at?",
      "a": "At the Group 3 baseline: Brother's FAX-2840 specification lists 203 dpi horizontal (8 dots/mm) with 98 lpi standard and 196 lpi fine vertical resolution, matching ITU-T T.4; some models add a 392 lpi superfine mode."
    }
  ],
  "sources": [
    {
      "title": "ITU-T Recommendation T.4 — Standardization of Group 3 facsimile terminals for document transmission",
      "url": "https://www.itu.int/rec/T-REC-T.4",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "ITU-T Recommendation T.30 — Procedures for document facsimile transmission in the general switched telephone network",
      "url": "https://www.itu.int/rec/T-REC-T.30",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "ITU-T Recommendation V.17 — A 2-wire modem for facsimile applications with rates up to 14 400 bit/s",
      "url": "https://www.itu.int/rec/T-REC-V.17",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "ITU-T Recommendation V.34 — A modem operating at data signalling rates of up to 33 600 bit/s for use on the general switched telephone network",
      "url": "https://www.itu.int/rec/T-REC-V.34",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "Brother FAX-2840 Specifications (high-speed laser fax)",
      "url": "https://support.brother.com/g/b/spec.aspx?c=us&lang=en&prod=fax2840_us_as",
      "publisher": "Brother International Corporation"
    },
    {
      "title": "Brother IntelliFax-5750e (high-speed laser business fax)",
      "url": "https://www.brother-usa.com/products/ppf5750e",
      "publisher": "Brother International Corporation"
    },
    {
      "title": "Brother FAX-1840C Specifications (color inkjet fax)",
      "url": "https://support.brother.com/g/b/spec.aspx?c=us_ot&lang=en&prod=fax1840c_all",
      "publisher": "Brother International Corporation"
    },
    {
      "title": "Brother 'Thermal Transfer FAX' product series (FAX-T1 / FAX-T9)",
      "url": "https://support.brother.com/g/b/productseries.aspx?c=eu_ot&lang=en&pcatid=31&content=faq",
      "publisher": "Brother (Brother support / Solutions Center)"
    },
    {
      "title": "Brother FAX-236S Specifications (direct-thermal fax)",
      "url": "https://www.manualslib.com/manual/21864/Brother-Fax-236s.html",
      "publisher": "Brother Industries, Ltd. (specification document archived at ManualsLib)"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "brother fax machine",
    "brother fax series",
    "brother intellifax",
    "brother group 3 fax",
    "brother super g3 fax",
    "brother laser fax",
    "brother inkjet fax",
    "brother fax-2840",
    "brother fax machine models",
    "itu-t group 3 fax",
    "brother thermal fax",
    "brother business fax"
  ],
  "cluster": "fax-models"
};

export default entry;
