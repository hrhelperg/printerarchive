import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "roll-feed-vs-cut-sheet-fax-machines",
  "title": "Roll-Feed vs Cut-Sheet Fax Machines",
  "description": "How roll-feed thermal-paper faxes and plain-paper cut-sheet faxes differ in marking engine, media, and image durability, though both are Group 3 terminals.",
  "summary": "Roll-feed and cut-sheet describe the two ways a Group 3 fax machine puts a received page on paper. Roll-feed machines print with a direct-thermal head onto heat-sensitive paper drawn from a continuous roll and cut to length, the approach that dominated from the 1970s to the early 1990s. Cut-sheet, or plain-paper, machines instead mark standard Letter or A4 sheets using laser, LED, inkjet, or thermal-transfer engines, and became the office norm from the mid-1990s. Because both classes share the same ITU-T T.4 image coding and T.30 call procedure, the choice affects only the durability and handling of the printout, not what is transmitted.",
  "category": "Fax machine class",
  "alsoKnownAs": [
    "Thermal-roll vs plain-paper fax machines",
    "Roll-paper vs cut-sheet fax",
    "Thermal fax vs plain-paper fax"
  ],
  "specs": [
    {
      "label": "Governing standard",
      "value": "Group 3 facsimile — image coding per ITU-T Recommendation T.4, call setup per ITU-T Recommendation T.30 (both classes)",
      "source": "ITU-T T.4 & T.30"
    },
    {
      "label": "Standard (normal) resolution",
      "value": "approx. 203 x 98 dpi (1,728 picture elements per 215 mm scan line; 3.85 lines/mm vertical)",
      "source": "ITU-T T.4"
    },
    {
      "label": "Fine resolution",
      "value": "approx. 203 x 196 dpi (7.7 lines/mm vertical)",
      "source": "ITU-T T.4"
    },
    {
      "label": "Roll-feed output medium",
      "value": "Heat-sensitive (direct-thermal) paper on a continuous roll; each received page cut to the transmitted length",
      "source": "Wikipedia, 'Fax'"
    },
    {
      "label": "Cut-sheet output medium",
      "value": "Standard plain paper (Letter/A4) marked by laser or LED, inkjet, or thermal-transfer engines; widespread from the mid-1990s",
      "source": "Wikipedia, 'Fax'"
    },
    {
      "label": "Direct-thermal image permanence",
      "value": "Extremely unstable; may begin to deteriorate in as few as six months and is not treated as archival unless copied to plain paper",
      "source": "NARA Bulletin 96-03"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Two ways to print a received fax"
    },
    {
      "kind": "paragraph",
      "text": "Roll-feed and cut-sheet are not competing transmission standards but two ways a Group 3 fax machine renders the page it receives. Every Group 3 terminal follows the same ITU-T Recommendation T.4 for coding the image and ITU-T Recommendation T.30 for setting up and running the call, so what separates the two classes lies entirely downstream of the telephone line: the marking engine and the paper path. A roll-feed machine prints onto heat-sensitive paper drawn from a continuous roll and cuts each page to the length that was sent; a cut-sheet, or plain-paper, machine prints onto discrete standard sheets, much as an office copier or printer would."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Roll-feed (direct-thermal) fax machines"
    },
    {
      "kind": "paragraph",
      "text": "Roll-feed machines use direct thermal printing: a thermal printhead applies heat to a specially coated, heat-sensitive paper, darkening it to form the image, with no ink, toner, or ribbon involved. The paper is supplied on a long roll, and after each page is printed a built-in cutter severs it at the transmitted page length. Accounts of fax history record that machines of this type were the common form from the 1970s through the early 1990s. The design is mechanically simple, compact, and free of per-page consumables beyond the paper itself, which helped make early fax machines inexpensive to build and to run. Its drawbacks are equally characteristic: the printed roll tends to curl, and the thermal image is not permanent."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Cut-sheet (plain-paper) fax machines"
    },
    {
      "kind": "paragraph",
      "text": "Cut-sheet machines print received pages onto ordinary Letter- or A4-size sheets using the same marking technologies as office printers — laser or LED electrophotography, inkjet, or thermal transfer, which lays pigment from a ribbon onto plain paper. Wikipedia's account of fax history dates the industry's shift toward these plain-paper faxes to the mid-1990s. Their output looks and behaves like any other printed document: it lies flat, files normally, and needs no flattening or copying before it can be used or stored. The trade-off is added cost and complexity — a sheet-feeding path plus toner, ink, or ribbon consumables — relative to a bare thermal roll."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Image permanence and record-keeping"
    },
    {
      "kind": "paragraph",
      "text": "The most consequential difference between the two classes is how long the printout lasts. The U.S. National Archives, in Bulletin 96-03, describes the images on thermal paper as extremely unstable, warning that they may begin to deteriorate in as few as six months, may react with common office chemicals found in markers, cosmetics, and some plastic folders, and can fade until the text is illegible or the whole sheet darkens. The same bulletin states that a plain-paper copy — it cites xerographic (laser or photocopier) output — produces a much more stable image than a copy made on thermal paper, and directs that any thermal-paper fax that is a Federal record be copied onto plain paper when it is received. Wikipedia likewise notes that thermal fax paper is generally not accepted in archives, or as documentary evidence in some courts, unless it has been photocopied. For anything meant to be kept, cut-sheet plain paper is the more durable medium."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What both classes share: coding and resolution"
    },
    {
      "kind": "paragraph",
      "text": "Because the difference lies only in the printer, a roll-feed machine and a plain-paper machine interoperate transparently — they negotiate and exchange pages identically under T.30, and each reconstructs the same coded image defined by T.4. ITU-T T.4 divides the page into a scan line of 1,728 picture elements across a nominal 215 mm width. Its standard (normal) vertical resolution is 3.85 lines per millimetre and its fine mode is 7.7 lines per millimetre, commonly expressed as roughly 203 x 98 dpi and 203 x 196 dpi respectively; a higher-density superfine mode is also widely implemented. Those resolutions are properties of the Group 3 standard, not of the paper, so the same page arrives at the same resolution whether it is printed on a thermal roll or a plain sheet."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Historical trade-offs between the two classes"
    },
    {
      "kind": "paragraph",
      "text": "In their overlapping years the two classes suited different priorities. Roll-feed thermal machines were cheaper to buy and, with only paper to replace, cheap to keep running, and their compact mechanism fit small offices and homes; the cost was curling output and an image that faded. Plain-paper machines cost more up front and added ink or toner to the running cost, but produced flat, file-ready, durable pages — which is why they became the office standard after the mid-1990s. Devices that also photocopy, print, or scan are inherently plain-paper machines, since those functions produce standard document pages rather than a cut length of thermal roll."
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
          "Governing standard",
          "Group 3 facsimile — image coding per ITU-T Recommendation T.4, call setup per ITU-T Recommendation T.30 (both classes)"
        ],
        [
          "Standard (normal) resolution",
          "approx. 203 x 98 dpi (1,728 picture elements per 215 mm scan line; 3.85 lines/mm vertical)"
        ],
        [
          "Fine resolution",
          "approx. 203 x 196 dpi (7.7 lines/mm vertical)"
        ],
        [
          "Roll-feed output medium",
          "Heat-sensitive (direct-thermal) paper on a continuous roll; each received page cut to the transmitted length"
        ],
        [
          "Cut-sheet output medium",
          "Standard plain paper (Letter/A4) marked by laser or LED, inkjet, or thermal-transfer engines; widespread from the mid-1990s"
        ],
        [
          "Direct-thermal image permanence",
          "Extremely unstable; may begin to deteriorate in as few as six months and is not treated as archival unless copied to plain paper"
        ]
      ],
      "sources": [
        "ITU-T T.4 & T.30",
        "ITU-T T.4",
        "Wikipedia, 'Fax'",
        "NARA Bulletin 96-03"
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
      "section": "guides",
      "slug": "laser-printing"
    },
    {
      "section": "guides",
      "slug": "inkjet-printing"
    },
    {
      "section": "guides",
      "slug": "thermal-transfer-printing"
    },
    {
      "section": "fax",
      "slug": "how-fax-machines-work"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between a roll-feed and a cut-sheet fax machine?",
      "a": "A roll-feed machine prints onto heat-sensitive paper fed from a continuous roll and cuts each received page to length; a cut-sheet (plain-paper) machine prints onto standard Letter or A4 sheets using laser, inkjet, or thermal-transfer engines. The difference is in the printer and paper, not in how the fax is transmitted."
    },
    {
      "q": "Why does fax paper from older machines fade?",
      "a": "Roll-feed machines use direct thermal paper, whose heat-formed image is inherently unstable. The U.S. National Archives (Bulletin 96-03) notes that such images can begin to deteriorate in as few as six months and can be lost if the paper is exposed to heat, light, or common office chemicals."
    },
    {
      "q": "Are roll-feed and plain-paper faxes compatible with each other?",
      "a": "Yes. Both are Group 3 terminals following ITU-T Recommendations T.4 and T.30, so they negotiate and exchange pages identically regardless of how each machine prints the result."
    },
    {
      "q": "Why did offices switch to plain-paper fax machines?",
      "a": "Plain-paper output lies flat, does not curl, files like any other document, and is far more permanent than thermal roll paper. The National Archives recommends copying thermal faxes onto plain paper for any record worth keeping, and the industry moved toward plain-paper faxes from the mid-1990s."
    },
    {
      "q": "What resolution do these fax machines print at?",
      "a": "Both classes use the Group 3 resolutions defined in ITU-T T.4: a standard mode of about 203 x 98 dpi and a fine mode of about 203 x 196 dpi, built from a scan line of 1,728 picture elements."
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
      "title": "Fax",
      "url": "https://en.wikipedia.org/wiki/Fax",
      "publisher": "Wikipedia"
    },
    {
      "title": "NARA Bulletin 96-03: Preservation of facsimile transmissions that are Federal records",
      "url": "https://www.archives.gov/records-mgmt/bulletins/1996/96-03.html",
      "publisher": "U.S. National Archives and Records Administration (NARA)"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "roll-feed fax machine",
    "cut-sheet fax machine",
    "plain-paper fax",
    "thermal fax paper",
    "direct thermal fax",
    "group 3 fax",
    "itu-t t.4",
    "fax machine types",
    "thermal roll vs plain paper fax",
    "fax image permanence",
    "fax resolution"
  ],
  "cluster": "fax-models"
};

export default entry;
