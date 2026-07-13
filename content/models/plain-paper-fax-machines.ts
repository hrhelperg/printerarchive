import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "plain-paper-fax-machines",
  "title": "Plain-Paper Fax Machines",
  "description": "Plain-paper fax machines print received Group 3 faxes on ordinary paper via laser, LED, inkjet, or thermal-transfer marking, not heat-sensitive thermal rolls.",
  "summary": "Plain-paper fax machines are facsimile devices that print incoming documents onto ordinary cut-sheet office paper rather than the heat-sensitive coated rolls used by earlier direct-thermal machines. They form the received image with a laser (electrophotographic), LED, inkjet, or thermal-transfer marking engine, producing permanent pages that do not fade or curl. Most are ITU-T Group 3 terminals that send and receive over the ordinary telephone network, so the plain-paper label describes the output method rather than the transmission standard. Encyclopedic histories place the broad transition to plain paper from the mid-1990s, and the class is now typically embodied in multifunction laser and inkjet devices.",
  "category": "Fax machine class",
  "era": "Plain-paper transition (mid-1990s onward)",
  "alsoKnownAs": [
    "Plain paper fax",
    "Plain-paper facsimile machine",
    "Ordinary-paper fax machine"
  ],
  "specs": [
    {
      "label": "Device class",
      "value": "Facsimile machine that prints received documents on ordinary plain cut-sheet paper, contrasted with direct-thermal machines that image heat-sensitive coated roll paper",
      "source": "Wikipedia (Fax)"
    },
    {
      "label": "Marking technologies",
      "value": "Laser/LED (electrophotographic), inkjet, or thermal-transfer printing onto plain paper",
      "source": "Wikipedia (Fax)"
    },
    {
      "label": "Print media",
      "value": "Standard cut-sheet office paper (e.g. A4 or 8.5 x 11 in), not heat-sensitive thermal roll paper",
      "source": "Wikipedia (Fax)"
    },
    {
      "label": "Output permanence",
      "value": "Permanent office-printer output that does not fade; by contrast, direct-thermal output is eradicable and can detach or fade in storage and is generally not accepted in archives or courts without photocopying",
      "source": "Wikipedia (Fax)"
    },
    {
      "label": "Typical transmission standard",
      "value": "ITU-T Group 3 facsimile over the public switched telephone network, standardized in 1980 and defined by ITU-T T.4 (image resolution and coding) with T.30 (transmission procedures)",
      "source": "ITU-T T.4; ITU-T T.30; Wikipedia (Fax)"
    },
    {
      "label": "Group 3 resolutions",
      "value": "Standard about 203 x 98 dpi (~8 pels/mm x 3.85 lines/mm) and fine about 203 x 196 dpi (~8 pels/mm x 7.7 lines/mm); 1728 pels per nominal scan line; optional superfine roughly 203 x 391 dpi",
      "source": "ITU-T T.4"
    },
    {
      "label": "Modem modulations",
      "value": "ITU-T V.27ter (4.8/2.4 kbit/s), V.29 (9.6/7.2 kbit/s) and V.17 (up to 14.4 kbit/s), negotiated via T.30; Super Group 3 machines add a V.34-based fax modem up to 33.6 kbit/s",
      "source": "ITU-T T.30 and V-series (V.27ter/V.29/V.17/V.34); Wikipedia (Fax)"
    },
    {
      "label": "Digital (Group 4) alternative",
      "value": "A plain-paper terminal may instead be an ITU-T Group 4 apparatus over ISDN, per T.563 (terminal characteristics) with T.6 (Modified Modified READ coding)",
      "source": "ITU-T T.563; ITU-T T.6"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What defines a plain-paper fax machine"
    },
    {
      "kind": "paragraph",
      "text": "A plain-paper fax machine is a facsimile device that prints incoming documents onto ordinary cut-sheet office paper, the same stock used in a copier or desktop printer, rather than onto the heat-sensitive coated rolls used by earlier direct-thermal fax machines. The defining characteristic of the class is therefore the marking engine and the media it prints on, not the way the image travels down the line. A plain-paper machine forms the received page with a laser (electrophotographic) mechanism, an LED array, an inkjet head, or a thermal-transfer ribbon, any of which deposits toner or ink onto plain paper. Because the label describes output rather than transmission, plain-paper and thermal-paper machines can implement the very same ITU-T facsimile standards and interoperate freely."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Plain paper versus thermal paper"
    },
    {
      "kind": "paragraph",
      "text": "The contrast that gives the class its name is with direct-thermal fax machines, which image a chemically coated paper by selectively heating it. Reference literature notes that such thermal output is eradicable and brittle and tends to detach from or fade on the medium after long storage, so thermal faxes are generally not accepted in archives or courts as documentary evidence without first being photocopied. Plain-paper output, by contrast, is produced with the same permanent toner or ink used in office printing: it does not fade, lies flat instead of curling, and can be filed directly. Encyclopedic histories place the broad transition to plain paper from the mid-1990s, as laser and inkjet marking became inexpensive enough to build into fax and multifunction devices."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Marking technologies used"
    },
    {
      "kind": "paragraph",
      "text": "Plain-paper fax machines borrow their imaging directly from the printer world. Laser and LED models use the electrophotographic process, charging and exposing a photoconductor drum and fusing dry toner to the page, and produce sharp, permanent text well suited to business records. Inkjet models spray liquid ink and can additionally support color, although color faxing between different manufacturers was historically limited by the absence of a universal color-fax standard. Thermal-transfer models sit between the two worlds, melting pigment or wax from a ribbon onto ordinary paper rather than onto special thermal stock. In practice the class is now most often encountered not as a stand-alone fax unit but as one function of a multifunction laser or inkjet device that also copies, prints, and scans."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Transmission standards: still Group 3"
    },
    {
      "kind": "paragraph",
      "text": "Whatever their marking engine, the overwhelming majority of plain-paper fax machines are ITU-T Group 3 terminals that send and receive over the ordinary switched telephone network. Group 3 was standardized in 1980 and is defined by two ITU-T Recommendations working together: T.4, which specifies the image resolutions and the source coding used to compress a page, and T.30, which specifies the call-establishment and negotiation procedures by which two machines identify each other, agree a speed, and confirm each page. Group 3 image data is compressed with the Modified Huffman and Modified READ schemes of T.4. A separate digital family, Group 4, is defined for ISDN by Recommendations such as T.563 (terminal characteristics) and T.6 (Modified Modified READ coding); plain-paper output is equally compatible with either family, which is why the output class and the transmission group are independent of one another."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Documented resolutions and speeds"
    },
    {
      "kind": "paragraph",
      "text": "Under ITU-T T.4, a Group 3 machine scans and prints at a standard resolution of about 203 x 98 dots per inch, corresponding to roughly 8 picture elements per millimetre horizontally and 3.85 lines per millimetre vertically, with 1728 pels across the nominal scan line. A fine mode doubles the vertical detail to about 203 x 196 dpi (7.7 lines/mm), and an optional superfine mode roughly doubles it again. Transmission speed is set by the V-series voiceband modems the machine negotiates through T.30: V.27ter carries 4.8 or 2.4 kbit/s, V.29 carries 9.6 or 7.2 kbit/s, and V.17 reaches up to 14.4 kbit/s. Later Super Group 3 machines add a V.34-based fax modem that raises the ceiling to 33.6 kbit/s. These figures describe the Group 3 standard the machines implement rather than any single model."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Reference scope"
    },
    {
      "kind": "paragraph",
      "text": "This page describes plain-paper fax machines at the level of a class, and every specification above is a property of the ITU-T standards the class implements or of the marking technologies it uses, each cited to an authoritative source. It does not assign resolutions, speeds, prices, or dates to any individual model, because those vary by product and the source policy for this archive forbids inventing per-unit figures. Facts that could not be traced to an ITU-T Recommendation or a reputable encyclopedic or industry reference have been omitted rather than estimated. It is not a buying guide and quotes no current pricing or availability."
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
          "Facsimile machine that prints received documents on ordinary plain cut-sheet paper, contrasted with direct-thermal machines that image heat-sensitive coated roll paper"
        ],
        [
          "Marking technologies",
          "Laser/LED (electrophotographic), inkjet, or thermal-transfer printing onto plain paper"
        ],
        [
          "Print media",
          "Standard cut-sheet office paper (e.g. A4 or 8.5 x 11 in), not heat-sensitive thermal roll paper"
        ],
        [
          "Output permanence",
          "Permanent office-printer output that does not fade; by contrast, direct-thermal output is eradicable and can detach or fade in storage and is generally not accepted in archives or courts without photocopying"
        ],
        [
          "Typical transmission standard",
          "ITU-T Group 3 facsimile over the public switched telephone network, standardized in 1980 and defined by ITU-T T.4 (image resolution and coding) with T.30 (transmission procedures)"
        ],
        [
          "Group 3 resolutions",
          "Standard about 203 x 98 dpi (~8 pels/mm x 3.85 lines/mm) and fine about 203 x 196 dpi (~8 pels/mm x 7.7 lines/mm); 1728 pels per nominal scan line; optional superfine roughly 203 x 391 dpi"
        ],
        [
          "Modem modulations",
          "ITU-T V.27ter (4.8/2.4 kbit/s), V.29 (9.6/7.2 kbit/s) and V.17 (up to 14.4 kbit/s), negotiated via T.30; Super Group 3 machines add a V.34-based fax modem up to 33.6 kbit/s"
        ],
        [
          "Digital (Group 4) alternative",
          "A plain-paper terminal may instead be an ITU-T Group 4 apparatus over ISDN, per T.563 (terminal characteristics) with T.6 (Modified Modified READ coding)"
        ]
      ],
      "sources": [
        "Wikipedia (Fax)",
        "ITU-T T.4",
        "ITU-T T.30",
        "ITU-T T.30 and V-series (V.27ter/V.29/V.17/V.34)",
        "ITU-T T.563",
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
      "q": "What is a plain-paper fax machine?",
      "a": "It is a fax machine that prints received documents onto ordinary cut-sheet office paper using a laser, LED, inkjet, or thermal-transfer marking engine, rather than onto the heat-sensitive coated rolls used by direct-thermal fax machines. The term describes how the page is printed, not how it is transmitted."
    },
    {
      "q": "How is a plain-paper fax different from a thermal-paper fax?",
      "a": "A direct-thermal machine images chemically coated paper by heat; reference sources note that this output is eradicable, can fade or detach in storage, and is often not accepted in archives or courts without photocopying. Plain-paper output uses permanent toner or ink on standard paper, so it does not fade and lies flat for filing."
    },
    {
      "q": "Do plain-paper fax machines use a different transmission standard?",
      "a": "Usually not. The great majority are ITU-T Group 3 machines over the telephone network, defined by Recommendations T.4 and T.30, the same standards used by thermal machines. Some plain-paper terminals are instead Group 4 devices over ISDN (per T.563 and T.6). The output method and the transmission group are independent."
    },
    {
      "q": "What resolutions and speeds do they use?",
      "a": "As Group 3 devices they follow ITU-T T.4: standard resolution around 203 x 98 dpi and a fine mode around 203 x 196 dpi, with 1728 pels per scan line. Speed depends on the negotiated V-series modem, V.27ter, V.29 and V.17 up to 14.4 kbit/s, while Super Group 3 machines use a V.34-based modem up to 33.6 kbit/s."
    },
    {
      "q": "Why did offices switch to plain-paper fax machines?",
      "a": "Chiefly for permanence and handling. Encyclopedic histories date the shift to the mid-1990s, when laser and inkjet marking became cheap enough to embed in fax and multifunction devices, replacing thermal rolls whose printouts faded, curled, and were unsuitable for long-term records without copying."
    }
  ],
  "sources": [
    {
      "title": "T.4: Standardization of Group 3 facsimile terminals for document transmission",
      "url": "https://www.itu.int/rec/T-REC-T.4/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "T.30: Procedures for document facsimile transmission in the general switched telephone network",
      "url": "https://www.itu.int/rec/T-REC-T.30/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "T.563: Terminal characteristics for Group 4 facsimile apparatus",
      "url": "https://www.itu.int/rec/T-REC-T.563/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "T.6: Facsimile coding schemes and coding control functions for Group 4 facsimile apparatus",
      "url": "https://www.itu.int/rec/T-REC-T.6/en",
      "publisher": "International Telecommunication Union (ITU-T)"
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
    "plain paper fax",
    "plain-paper fax machine",
    "laser fax machine",
    "inkjet fax machine",
    "thermal transfer fax",
    "group 3 fax",
    "itu-t t.4",
    "fax machine class",
    "plain paper vs thermal fax",
    "multifunction fax",
    "group 3 fax resolution",
    "super g3 fax"
  ],
  "cluster": "fax-models"
};

export default entry;
