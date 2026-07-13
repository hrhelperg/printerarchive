import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "fax-copier-combination-machines",
  "title": "Fax / Copier Combination Machines",
  "description": "Fax/copier combination machines add local copying to a Group 3 fax by reusing its scanner and printer; many grew into full multifunction devices.",
  "summary": "Fax / copier combination machines are a class of device that adds local photocopying to a fax terminal by reusing the scanner and printer the fax function already requires: a page is scanned and routed straight to the print engine instead of over the telephone line. Most implement the ITU-T Group 3 standard (Recommendation T.4 for the terminal and image coding, T.30 for call setup), so their fax behaviour, resolutions, and modem speeds follow those specifications rather than any single manufacturer's design. Over time the same integration extended to standalone printing and scanning, producing the multifunction devices that combine copy, scan, print, and fax in one unit. This page describes the class and its shared standards; it does not catalogue individual models or quote pricing.",
  "category": "Fax machine class (fax/copier combination)",
  "era": "Plain-paper fax and multifunction-device era",
  "alsoKnownAs": [
    "Fax/copier combo",
    "Copier-fax machine",
    "Fax-copier machine",
    "Multifunction fax machine",
    "Copy/scan/fax hybrid"
  ],
  "specs": [
    {
      "label": "Underlying fax standard",
      "value": "ITU-T Group 3 — Recommendation T.4 (terminal and image coding) and T.30 (call procedures)",
      "source": "ITU-T Rec. T.4 / T.30"
    },
    {
      "label": "Scan resolution",
      "value": "Standard ≈203–204 × 98 dpi; fine ≈203–204 × 196 dpi (horizontal × vertical)",
      "source": "ITU-T Rec. T.4"
    },
    {
      "label": "Image coding",
      "value": "Modified Huffman (MH, one-dimensional) and Modified READ (MR, two-dimensional) under T.4; Modified Modified READ (MMR) under T.6",
      "source": "ITU-T Rec. T.4 / T.6"
    },
    {
      "label": "Modem modulation",
      "value": "V.27ter (2.4/4.8 kbit/s), V.29 (7.2/9.6 kbit/s), V.17 (up to 14.4 kbit/s); Super G3 uses V.34 (up to about 33.6 kbit/s)",
      "source": "ITU-T Rec. T.30 (V-series modulations)"
    },
    {
      "label": "Network",
      "value": "Analog general switched telephone network (PSTN) for Group 3",
      "source": "ITU-T Rec. T.30"
    },
    {
      "label": "Marking technologies",
      "value": "Direct thermal (thermal-paper rolls); plain-paper output via thermal-transfer, inkjet, or laser engines",
      "source": "Wikipedia: Fax"
    },
    {
      "label": "Combined functions",
      "value": "Fax send/receive plus local copying (a scanned page routed to the printer); often extended to computer printing and scanning as a multifunction device",
      "source": "Wikipedia: Multi-function printer"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What a fax / copier combination machine is"
    },
    {
      "kind": "paragraph",
      "text": "A fax / copier combination machine is a single device that can both send and receive facsimiles and make local photocopies. The category exists because a fax terminal already contains the two subsystems a copier needs: a scanner to digitise an outgoing page and a printer to render an incoming one. Adding a copy function is largely a matter of routing a freshly scanned page to the built-in print engine instead of encoding it for the telephone line. Because the class is defined by this combination of functions rather than by one product, its capabilities are best described at the level of the standards these machines share."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Why faxing and copying combine so naturally"
    },
    {
      "kind": "paragraph",
      "text": "Sending a fax and making a copy follow almost the same internal path. In both cases the machine scans the original into a line-by-line image; the only difference is the destination. A fax hands that image to a modem, which negotiates with a distant machine and transmits it over a phone connection, whereas a copy sends the same image directly to the local printer. Reusing one scanner, one image path, and one printer for both jobs is what lets a combination machine offer copying at little extra cost, and it is the same insight that later produced multifunction office equipment."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The Group 3 standard these machines implement"
    },
    {
      "kind": "paragraph",
      "text": "Most fax / copier combination machines are Group 3 fax terminals. Group 3 is defined by the ITU-T (formerly CCITT) telecommunication standards, principally Recommendation T.4, which standardises the terminal, its page coding, and its resolutions, and Recommendation T.30, which specifies the call-establishment and negotiation procedures a machine follows over the general switched telephone network. Standardisation at this level is what allows machines from different manufacturers to interoperate, and it is why a combination machine's fax behaviour can be described accurately without reference to any single brand. Under T.4, a standard-resolution page is scanned at roughly 203–204 dots per inch horizontally by 98 lines per inch vertically, and a fine-resolution page doubles the vertical detail to about 196 lines per inch. Group 3 pages are compressed with the Modified Huffman (MH) one-dimensional or Modified READ (MR) two-dimensional schemes of T.4, with the more efficient Modified Modified READ (MMR) coding defined in Recommendation T.6."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modem speeds and Super G3"
    },
    {
      "kind": "paragraph",
      "text": "How quickly a Group 3 machine sends a page depends on the modem modulation it negotiates under T.30. Standard Group 3 machines use the ITU-T V.27ter (2,400 and 4,800 bit/s), V.29 (7,200 and 9,600 bit/s), and V.17 (up to 14,400 bit/s) modulations. Later \"Super G3\" machines adopted V.34 signalling, which raises the ceiling to about 33,600 bit/s. Higher throughput mainly shortens transmission time; it does not change the reconstructed image's resolution, which is fixed by the scan mode."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Marking technologies: from thermal paper to plain paper"
    },
    {
      "kind": "paragraph",
      "text": "Combination machines have used the same succession of printing technologies as fax machines generally. Early Group 3 machines printed with direct thermal heads onto heat-sensitive rolls, which was inexpensive but produced output on curling, fading thermal paper. From the mid-1990s the market moved to \"plain-paper\" faxing, in which the received or copied image is rendered by a thermal-transfer, inkjet, or laser print engine onto ordinary cut sheets. The choice of engine largely determines a combination machine's copy quality, running costs, and whether its output is archival."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "From combination machine to multifunction device"
    },
    {
      "kind": "paragraph",
      "text": "The fax / copier combination is a step on the way to the multifunction device, also called an all-in-one or MFP. Once a machine contained a scanner, a print engine, and a controller, manufacturers exposed those subsystems as separate features, adding computer printing and scan-to-file to the existing copy and fax functions. The result is the familiar office device that prints, scans, copies, and faxes from one chassis. Standalone fax / copier units have largely given way to these multifunction machines, even as the underlying Group 3 fax standard they implement has remained stable."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Reference scope"
    },
    {
      "kind": "paragraph",
      "text": "This page describes a class of device and sources its technical claims to the ITU-T standards that define Group 3 facsimile and to encyclopedic references, rather than to any one product. Figures such as resolutions and modem speeds are those specified by the relevant Recommendations; specifications that vary by model — dimensions, memory, pages-per-minute copy speed, or price — are deliberately omitted because they cannot be stated for the class as a whole. It is not a buying guide and quotes no current pricing or availability."
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
          "ITU-T Group 3 — Recommendation T.4 (terminal and image coding) and T.30 (call procedures)"
        ],
        [
          "Scan resolution",
          "Standard ≈203–204 × 98 dpi; fine ≈203–204 × 196 dpi (horizontal × vertical)"
        ],
        [
          "Image coding",
          "Modified Huffman (MH, one-dimensional) and Modified READ (MR, two-dimensional) under T.4; Modified Modified READ (MMR) under T.6"
        ],
        [
          "Modem modulation",
          "V.27ter (2.4/4.8 kbit/s), V.29 (7.2/9.6 kbit/s), V.17 (up to 14.4 kbit/s); Super G3 uses V.34 (up to about 33.6 kbit/s)"
        ],
        [
          "Network",
          "Analog general switched telephone network (PSTN) for Group 3"
        ],
        [
          "Marking technologies",
          "Direct thermal (thermal-paper rolls); plain-paper output via thermal-transfer, inkjet, or laser engines"
        ],
        [
          "Combined functions",
          "Fax send/receive plus local copying (a scanned page routed to the printer); often extended to computer printing and scanning as a multifunction device"
        ]
      ],
      "sources": [
        "ITU-T Rec. T.4 / T.30",
        "ITU-T Rec. T.4",
        "ITU-T Rec. T.4 / T.6",
        "ITU-T Rec. T.30 (V-series modulations)",
        "ITU-T Rec. T.30",
        "Wikipedia: Fax",
        "Wikipedia: Multi-function printer"
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
      "slug": "decline-of-office-fax-machines"
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
      "q": "What is a fax / copier combination machine?",
      "a": "It is a single device that both sends and receives faxes and makes local photocopies, reusing the scanner and printer that the fax function already needs. A copy is simply a scanned page routed to the built-in printer instead of over the telephone line."
    },
    {
      "q": "What standard do these machines use to fax?",
      "a": "Most are Group 3 fax terminals defined by the ITU-T, chiefly Recommendation T.4 (terminal, image coding, and resolutions) and Recommendation T.30 (call procedures over the telephone network). This shared standard is what lets machines from different makers interoperate."
    },
    {
      "q": "What resolution and speed do combination fax machines achieve?",
      "a": "Under ITU-T T.4, Group 3 scans at about 203–204 dpi horizontally by 98 lines per inch (standard) or 196 lpi (fine). Send speed depends on the modem: V.27ter, V.29, and V.17 reach up to 14.4 kbit/s, while Super G3 machines use V.34 for up to about 33.6 kbit/s."
    },
    {
      "q": "How is a combination machine different from a multifunction printer?",
      "a": "They overlap. A fax / copier combination emphasises copying and faxing, whereas a multifunction device (MFP or all-in-one) also exposes computer printing and scan-to-file. The combination machine is essentially an earlier or narrower form of the same integrated design."
    },
    {
      "q": "Do these machines print on plain paper?",
      "a": "Early Group 3 machines used direct thermal printing on thermal-paper rolls. From the mid-1990s, plain-paper models became common, using thermal-transfer, inkjet, or laser engines to print copies and received faxes on ordinary paper."
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
      "title": "Multi-function printer",
      "url": "https://en.wikipedia.org/wiki/Multi-function_printer",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "fax copier combination machine",
    "fax copier combo",
    "multifunction fax machine",
    "group 3 fax",
    "itu-t t.4",
    "itu-t t.30",
    "plain paper fax",
    "fax machine copier",
    "all-in-one fax",
    "super g3",
    "fax resolution",
    "mfp fax"
  ],
  "cluster": "fax-models"
};

export default entry;
