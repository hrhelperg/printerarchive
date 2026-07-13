import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "panasonic-kx-fax-series",
  "title": "Panasonic KX-Fax Series",
  "description": "Panasonic's KX-F series: Group 3 (ITU-T T.4/T.30) small-office fax machines built with thermal-paper, film plain-paper and laser plain-paper recording.",
  "summary": "The Panasonic KX-F series (model numbers beginning KX-F, e.g. KX-FT, KX-FP, KX-FHD, KX-FL and KX-FLB) is a long-running family of Group 3 facsimile machines sold under the Panasonic brand and produced by Kyushu Matsushita Electric Co., Ltd., part of the Matsushita Electric Industrial group. As Group 3 terminals they conform to the ITU-T T.4 and T.30 Recommendations, transmitting over the analog telephone network at the Group 3 scanning densities of 204 x 98 dpi (standard) and 204 x 196 dpi (fine). The line spans direct-thermal (thermal-paper) models, thermal-transfer-film plain-paper models, and later laser plain-paper fax/copiers, with the older thermal and film generation operating at conventional Group 3 speeds and later Super G3 laser models using ITU-T V.34 at up to 33.6 kbit/s. Many units combine the fax with a telephone handset or speakerphone, a digital answering system, a copier and an automatic document feeder.",
  "manufacturer": "Panasonic (Matsushita Electric Industrial Co., Ltd.)",
  "category": "Fax machine series",
  "era": "Group 3 facsimile era",
  "alsoKnownAs": [
    "Panasonic KX-F series",
    "Panasonic KX-FT / KX-FP / KX-FHD fax machines",
    "Panasonic KX-FL / KX-FLB laser fax machines"
  ],
  "specs": [
    {
      "label": "Fax standard",
      "value": "Group 3 facsimile, conforming to ITU-T Recommendations T.4 and T.30",
      "source": "ITU-T Rec. T.4; ITU-T Rec. T.30"
    },
    {
      "label": "Network",
      "value": "Analog public switched telephone network (PSTN), per ITU-T T.30",
      "source": "ITU-T Rec. T.30"
    },
    {
      "label": "Resolutions (Group 3)",
      "value": "Standard 204 x 98 dpi and fine 204 x 196 dpi as defined by ITU-T T.4; several models add a halftone (grayscale) mode",
      "source": "ITU-T Rec. T.4; Gough's Tech Zone KX-F1010 teardown (halftone)"
    },
    {
      "label": "Modem / transmission",
      "value": "Group 3 voiceband modems per ITU-T: earlier V.27ter/V.29 for lower rates and V.17 up to 14.4 kbit/s; the thermal-transfer-film KX-F1010 is documented at about 9.6 kbit/s; later Super G3 (laser) models use ITU-T V.34 up to 33.6 kbit/s",
      "source": "ITU-T Rec. V.17; ITU-T Rec. V.34; Gough's Tech Zone KX-F1010 teardown (9.6 kbit/s)"
    },
    {
      "label": "Recording technologies",
      "value": "Direct thermal on thermal paper (KX-FT), thermal-transfer film onto plain paper (early KX-F, KX-FP, KX-FHD), and laser electrophotographic plain paper (KX-FL, KX-FLB)",
      "source": "Panasonic KX-FT operating instructions (thermal); Gough's Tech Zone KX-F1010 teardown (film); Panasonic KX-series FAX support (laser models)"
    },
    {
      "label": "Common integrated functions",
      "value": "Telephone handset and/or speakerphone, digital answering system (TAM), copier, automatic document feeder and Caller ID on many models",
      "source": "Panasonic KX-FT operating instructions; Panasonic KX-F1200 service manual (2-line digital answering system); Gough's Tech Zone KX-F1010 teardown"
    },
    {
      "label": "Manufacturer",
      "value": "Panasonic brand; fax units produced by Kyushu Matsushita Electric Co., Ltd. (Matsushita Electric Industrial group)",
      "source": "Panasonic KX-F1200 service manual (copyright Kyushu Matsushita Electric Co., Ltd.)"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What the Panasonic KX-F series is"
    },
    {
      "kind": "paragraph",
      "text": "The Panasonic KX-F series is a long-running family of Group 3 facsimile machines that Panasonic sold for home, home-office and small-business use, identifiable by model numbers that begin with the prefix \"KX-F\" (for example KX-FT, KX-FP, KX-FHD, KX-FL and KX-FLB). The machines were marketed under the Panasonic brand and produced by Kyushu Matsushita Electric Co., Ltd., a company within the Matsushita Electric Industrial group, as recorded in Panasonic owner's manuals for the line. Rather than a single product, the series is a naming umbrella covering successive generations of desktop fax units that shared the Group 3 standard but differed in their recording (printing) technology and feature sets. This page describes the line at family level and does not assign specifications to individual models beyond what the cited sources support."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The Group 3 standard behind the series"
    },
    {
      "kind": "paragraph",
      "text": "Every machine in the KX-F line is a Group 3 fax terminal, meaning it conforms to the ITU-T Recommendations that define Group 3 facsimile. ITU-T Recommendation T.4, \"Standardization of Group 3 facsimile terminals for document transmission\" (first standardized in 1980), specifies how a page is scanned and encoded, including the Group 3 scanning densities of 204 x 98 dots per inch in standard mode and 204 x 196 dots per inch in fine mode; several KX-F models add a halftone (grayscale) mode on top of these. ITU-T Recommendation T.30, \"Procedures for document facsimile transmission in the general switched telephone network\", governs the call-setup, capability-negotiation and error-handling procedures the machines follow over an ordinary analog phone line. Group 3 transmission relies on a family of ITU-T voiceband modems: the earlier, lower-speed V.27ter and V.29 modems, ITU-T V.17 for rates up to 14.4 kbit/s, and, in the later Super G3 machines, ITU-T V.34 for rates up to 33.6 kbit/s."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Recording technologies across the line"
    },
    {
      "kind": "paragraph",
      "text": "The KX-F series spans three main recording (printing) technologies. The earliest and simplest are direct-thermal machines, most visibly the KX-FT models, which print onto heat-sensitive thermal paper with a thermal print head. A second group prints onto ordinary plain paper by thermal transfer, melting a waxy pigment from a plastic film ribbon onto the page; the KX-F1010, for instance, uses a roll of thermal-transfer film, and later KX-FP and KX-FHD \"plain paper\" models work the same way. The most capable branch of the line replaced film with laser (electrophotographic) engines: the KX-FL and KX-FLB plain-paper fax/copiers print with toner like a small laser printer. Because the technologies differ so much, running costs, output permanence and print quality vary widely across the series, and this page does not generalize a single figure across all of them."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "From standard Group 3 to Super G3"
    },
    {
      "kind": "paragraph",
      "text": "Transmission speed in the KX-F line tracks its recording technology and era. The thermal-paper and thermal-transfer-film models are conventional Group 3 machines: the KX-F1010, for example, is documented at 9,600 bit/s, and the thermal KX-FT models likewise run at conventional Group 3 speeds. The later laser plain-paper models are marketed as Super G3, the branding for Group 3 machines that use the ITU-T V.34 modem to reach up to 33.6 kbit/s and so cut per-page transmission time. Super G3 also makes Group 3 error correction mode (ECM) and V.34 half-duplex operation central to the higher speeds. Exact per-model speeds are not generalized here; the two anchor points, roughly 9.6 kbit/s for the thermal-transfer-film KX-F1010 and up to 33.6 kbit/s for the Super G3 laser generation, are each drawn from the cited sources."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Telephone, answering and copier functions"
    },
    {
      "kind": "paragraph",
      "text": "Most KX-F machines are multifunction communication devices rather than fax-only units. Across the line they commonly integrate a telephone, whether a handset, a speakerphone or both, so the same box serves as the phone on the line it faxes over. Many add a digital answering system (telephone answering machine, or TAM); the KX-F1200, for example, is described in its manual as a plain-paper fax with a 2-line digital answering system. A walk-up copier function is near-universal, using the fax scanner and print engine to duplicate documents, and higher models include an automatic document feeder (ADF) and Caller ID. These combinations are what made the series popular as an all-in-one desk appliance for small offices."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Model families and naming"
    },
    {
      "kind": "paragraph",
      "text": "Within the KX-F umbrella, the trailing letters and digits roughly indicate the generation and technology. KX-FT denotes the thermal-paper machines; early bare KX-F numbers and the KX-FP and KX-FHD ranges denote plain-paper units that print by thermal-transfer film; and KX-FL and KX-FLB denote the plain-paper laser fax and laser multifunction devices. Feature suffixes and regional letters (such as country codes appended to a model number) vary by market. Because Panasonic reused the KX- prefix across unrelated product lines, KX-P for dot-matrix and laser printers, KX-T for telephones and KX-TG for cordless phones, the KX-F prefix is the reliable marker of the fax family specifically."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Reference scope and sourcing"
    },
    {
      "kind": "paragraph",
      "text": "This is a series-level reference. Class-level facts, that these are Group 3 terminals, the T.4 scanning resolutions, the T.30 call procedures and the V.17/V.34 modem rates, are sourced to the relevant ITU-T Recommendations, which define the Group 3 standard the machines implement. Family-level facts about the Panasonic line are drawn from Panasonic owner's manuals and support material and from an independent hardware teardown. No specification has been invented to fill a gap: where the sources do not establish a firm figure, such as a single series-wide introduction date, a price, or a per-model spec, none is stated. The page is a historical and technical reference, not a buying guide, and quotes no current pricing or availability."
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
          "Group 3 facsimile, conforming to ITU-T Recommendations T.4 and T.30"
        ],
        [
          "Network",
          "Analog public switched telephone network (PSTN), per ITU-T T.30"
        ],
        [
          "Resolutions (Group 3)",
          "Standard 204 x 98 dpi and fine 204 x 196 dpi as defined by ITU-T T.4; several models add a halftone (grayscale) mode"
        ],
        [
          "Modem / transmission",
          "Group 3 voiceband modems per ITU-T: earlier V.27ter/V.29 for lower rates and V.17 up to 14.4 kbit/s; the thermal-transfer-film KX-F1010 is documented at about 9.6 kbit/s; later Super G3 (laser) models use ITU-T V.34 up to 33.6 kbit/s"
        ],
        [
          "Recording technologies",
          "Direct thermal on thermal paper (KX-FT), thermal-transfer film onto plain paper (early KX-F, KX-FP, KX-FHD), and laser electrophotographic plain paper (KX-FL, KX-FLB)"
        ],
        [
          "Common integrated functions",
          "Telephone handset and/or speakerphone, digital answering system (TAM), copier, automatic document feeder and Caller ID on many models"
        ],
        [
          "Manufacturer",
          "Panasonic brand; fax units produced by Kyushu Matsushita Electric Co., Ltd. (Matsushita Electric Industrial group)"
        ]
      ],
      "sources": [
        "ITU-T Rec. T.4",
        "ITU-T Rec. T.30",
        "Gough's Tech Zone KX-F1010 teardown (halftone)",
        "ITU-T Rec. V.17",
        "ITU-T Rec. V.34",
        "Gough's Tech Zone KX-F1010 teardown (9.6 kbit/s)",
        "Panasonic KX-FT operating instructions (thermal)",
        "Gough's Tech Zone KX-F1010 teardown (film)",
        "Panasonic KX-series FAX support (laser models)",
        "Panasonic KX-FT operating instructions",
        "Panasonic KX-F1200 service manual (2-line digital answering system)",
        "Gough's Tech Zone KX-F1010 teardown",
        "Panasonic KX-F1200 service manual (copyright Kyushu Matsushita Electric Co., Ltd.)"
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
      "section": "fax",
      "slug": "why-fax-is-still-used"
    }
  ],
  "faqs": [
    {
      "q": "What is the Panasonic KX-F series?",
      "a": "It is a family of Group 3 fax machines sold under the Panasonic brand (model numbers beginning KX-F, such as KX-FT, KX-FP, KX-FHD, KX-FL and KX-FLB) and produced by Kyushu Matsushita Electric Co., Ltd. The line spans thermal-paper, thermal-transfer-film plain-paper, and laser plain-paper models."
    },
    {
      "q": "Are Panasonic KX-F fax machines Group 3?",
      "a": "Yes. They are Group 3 terminals conforming to ITU-T Recommendations T.4 and T.30, transmitting over the analog telephone network at the Group 3 scanning densities of 204 x 98 dpi (standard) and 204 x 196 dpi (fine)."
    },
    {
      "q": "Do KX-F models use thermal or plain paper?",
      "a": "Both, depending on the model. The KX-FT models print by direct thermal onto heat-sensitive thermal paper, while other models print onto plain paper, either by thermal-transfer film (early KX-F, KX-FP, KX-FHD) or with a laser engine (KX-FL, KX-FLB)."
    },
    {
      "q": "What is Super G3 on the Panasonic laser fax models?",
      "a": "Super G3 is the branding for Group 3 machines that use the ITU-T V.34 modem to reach up to 33.6 kbit/s. The earlier thermal-paper and film KX-F models are conventional Group 3 units (the KX-F1010 film model is documented at about 9.6 kbit/s); the later laser models are the Super G3 ones."
    },
    {
      "q": "Did Panasonic KX-F machines include a phone and answering machine?",
      "a": "Many did. Across the line the units commonly integrate a telephone handset or speakerphone, a digital answering system, a copier and, on higher models, an automatic document feeder and Caller ID."
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
      "title": "ITU-T Recommendation V.17: A 2-wire modem for facsimile applications with rates up to 14 400 bit/s",
      "url": "https://www.itu.int/rec/T-REC-V.17/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "ITU-T Recommendation V.34: A modem operating at data signalling rates of up to 33 600 bit/s for use on the general switched telephone network",
      "url": "https://www.itu.int/rec/T-REC-V.34/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "Multi-Function Printer / Consumer FAX (KX-series) Support",
      "url": "https://docs.connect.panasonic.com/pcc/support/fax/",
      "publisher": "Panasonic"
    },
    {
      "title": "Panasonic KX-F1200 Plain Paper Fax with 2-Line Digital Answering System Service Manual / Technical Guide",
      "url": "https://c.searspartsdirect.com/mmh/lis_pdf/OWNM/97120076.pdf",
      "publisher": "Kyushu Matsushita Electric Co., Ltd. (Panasonic)"
    },
    {
      "title": "Tech Flashback: Panasonic KX-F1010 Plain Paper Fax Machine",
      "url": "https://goughlui.com/2020/08/23/tech-flashback-panasonic-kx-f1010-plain-paper-fax-machine/",
      "publisher": "Gough's Tech Zone (Gough Lui)"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "panasonic kx-f",
    "panasonic kx-fax series",
    "kx-f fax machine",
    "panasonic fax machine",
    "group 3 fax",
    "kx-ft thermal fax",
    "kx-fl laser fax",
    "super g3 fax",
    "plain paper fax",
    "itu-t t.30 fax",
    "panasonic kx-fhd",
    "thermal transfer fax"
  ],
  "cluster": "fax-models"
};

export default entry;
