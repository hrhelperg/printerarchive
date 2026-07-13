import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "super-g3-fax-machines",
  "title": "Super G3 Fax Machines",
  "description": "Super G3 is a high-speed Group 3 fax variant that uses ITU-T V.34 half-duplex modulation to carry image data at rates up to 33.6 kbit/s.",
  "summary": "Super G3 (also called Super Group 3 or SG3) is the high-speed form of Group 3 fax. It is not a separate class of fax defined by the ITU but a Group 3 terminal that carries the image using ITU-T V.34 half-duplex modulation, which supports data signalling rates up to 33.6 kbit/s, rather than the slower modulations used by earlier Group 3 equipment. Because it remains a Group 3 device built on the ITU-T T.4 and T.30 recommendations, a Super G3 machine works over ordinary telephone lines and stays backward compatible with the existing base of standard Group 3 fax machines.",
  "category": "Fax machine class (Group 3)",
  "alsoKnownAs": [
    "Super Group 3",
    "SG3",
    "V.34 fax"
  ],
  "specs": [
    {
      "label": "Fax group",
      "value": "Group 3 (high-speed variant)",
      "source": "ITU-T T.30"
    },
    {
      "label": "Governing standards",
      "value": "ITU-T T.4 (image coding and terminal characteristics) and ITU-T T.30 (call set-up, negotiation, and page transfer over the PSTN)",
      "source": "ITU-T T.4 / T.30"
    },
    {
      "label": "Image modulation (Super G3)",
      "value": "ITU-T V.34 half-duplex, data signalling rates up to 33.6 kbit/s, negotiated via T.30",
      "source": "ITU-T V.34 / T.30"
    },
    {
      "label": "Legacy Group 3 modulations (fallback)",
      "value": "V.17 up to 14.4 kbit/s, V.29 up to 9.6 kbit/s, V.27ter up to 4.8 kbit/s",
      "source": "ITU-T V.17 / V.29 / V.27ter"
    },
    {
      "label": "Call start-up",
      "value": "ITU-T V.8 session-start procedure used to establish the V.34 fax session",
      "source": "ITU-T V.8"
    },
    {
      "label": "Standard resolution",
      "value": "About 204 x 98 dpi (1728 pixels per scan line)",
      "source": "ITU-T T.4"
    },
    {
      "label": "Fine resolution",
      "value": "About 204 x 196 dpi",
      "source": "ITU-T T.4"
    },
    {
      "label": "Image compression",
      "value": "Modified Huffman (MH, one-dimensional) and Modified READ (MR, two-dimensional); Modified Modified READ (MMR) from T.6 also usable",
      "source": "ITU-T T.4 / T.6"
    },
    {
      "label": "Error handling",
      "value": "Optional Error Correction Mode (ECM) transfers image data in protected frames",
      "source": "ITU-T T.30"
    },
    {
      "label": "Network",
      "value": "General switched telephone network (PSTN)",
      "source": "ITU-T T.30"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What Super G3 means"
    },
    {
      "kind": "paragraph",
      "text": "Super G3 (also written Super Group 3, or SG3) is a manufacturer and industry term for the high-speed form of Group 3 fax. It is not a separate group of fax defined by the ITU: a Super G3 machine is a Group 3 facsimile terminal that can carry the image using ITU-T V.34 half-duplex modulation instead of the slower modulations used by earlier Group 3 equipment. Because it remains a Group 3 device, it continues to operate over the ordinary telephone network and follows the same image-coding and call-control standards as any other Group 3 fax."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Standards behind the class"
    },
    {
      "kind": "paragraph",
      "text": "Every Group 3 fax, Super G3 included, is built on two ITU-T recommendations. T.4 standardises how a page is scanned and encoded, and T.30 defines the procedures the two machines use to set up a call, negotiate their capabilities, and transfer pages over the general switched telephone network (PSTN). What distinguishes Super G3 is the use of ITU-T V.34 as the image-carrying modulation. V.34 is a modem recommendation for data signalling rates of up to 33 600 bit/s; the T.30 procedures let two terminals establish a V.34 fax session and drop back to slower operation when line conditions require it."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Speed compared with standard Group 3"
    },
    {
      "kind": "paragraph",
      "text": "Earlier Group 3 machines send the compressed image using the V.27ter (up to 4.8 kbit/s), V.29 (up to 9.6 kbit/s), or V.17 (up to 14.4 kbit/s) modulations. Super G3 raises that ceiling by using V.34, which supports data signalling rates up to 33.6 kbit/s. In practice this can shorten the time needed to transmit a page, but the rate actually achieved depends on line quality, because T.30 negotiates the highest modulation that both machines and the connection can sustain."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Call set-up and fallback"
    },
    {
      "kind": "paragraph",
      "text": "A Super G3 call begins with the ITU-T V.8 start-up procedure, which the two terminals use to signal that they can run a V.34 session and to begin negotiating its parameters. If a V.34 session cannot be established, for example when one side is an ordinary Group 3 machine, the call falls back to the legacy Group 3 modulations, with T.30 control frames carried on the V.21 channel 2 signalling channel. This fallback behaviour is what keeps Super G3 interoperable with the large installed base of standard Group 3 equipment."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Resolution and image coding"
    },
    {
      "kind": "paragraph",
      "text": "Super G3 uses the same image format as other Group 3 machines. T.4 defines a scan line of 1728 picture elements across the page, a standard resolution of about 204 x 98 dpi, and a fine resolution of about 204 x 196 dpi. Pages are compressed using the Modified Huffman (one-dimensional) and Modified READ (two-dimensional) schemes of T.4; the more efficient Modified Modified READ (MMR) coding of T.6 can also be used. When the optional Error Correction Mode (ECM) of T.30 is enabled, image data is exchanged in protected frames, which helps reliability at the higher speeds Super G3 uses and on connections carried over IP networks."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Interoperability and Group 4"
    },
    {
      "kind": "paragraph",
      "text": "Because Super G3 is an extension of Group 3 rather than a replacement, a Super G3 terminal can exchange documents with any standard Group 3 machine; the two simply negotiate down to a common capability using T.30. Super G3 should not be confused with Group 4 fax, a separate, higher-resolution class designed for digital networks such as ISDN and defined by a different set of recommendations. Super G3 capability became common on plain-paper fax machines and multifunction devices, which reconstruct the received page using laser or inkjet printing rather than the direct-thermal printing used by many earlier Group 3 units."
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
          "Fax group",
          "Group 3 (high-speed variant)"
        ],
        [
          "Governing standards",
          "ITU-T T.4 (image coding and terminal characteristics) and ITU-T T.30 (call set-up, negotiation, and page transfer over the PSTN)"
        ],
        [
          "Image modulation (Super G3)",
          "ITU-T V.34 half-duplex, data signalling rates up to 33.6 kbit/s, negotiated via T.30"
        ],
        [
          "Legacy Group 3 modulations (fallback)",
          "V.17 up to 14.4 kbit/s, V.29 up to 9.6 kbit/s, V.27ter up to 4.8 kbit/s"
        ],
        [
          "Call start-up",
          "ITU-T V.8 session-start procedure used to establish the V.34 fax session"
        ],
        [
          "Standard resolution",
          "About 204 x 98 dpi (1728 pixels per scan line)"
        ],
        [
          "Fine resolution",
          "About 204 x 196 dpi"
        ],
        [
          "Image compression",
          "Modified Huffman (MH, one-dimensional) and Modified READ (MR, two-dimensional); Modified Modified READ (MMR) from T.6 also usable"
        ],
        [
          "Error handling",
          "Optional Error Correction Mode (ECM) transfers image data in protected frames"
        ],
        [
          "Network",
          "General switched telephone network (PSTN)"
        ]
      ],
      "sources": [
        "ITU-T T.30",
        "ITU-T T.4 / T.30",
        "ITU-T V.34 / T.30",
        "ITU-T V.17 / V.29 / V.27ter",
        "ITU-T V.8",
        "ITU-T T.4",
        "ITU-T T.4 / T.6"
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
      "slug": "why-fax-is-still-used"
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
    }
  ],
  "faqs": [
    {
      "q": "What is a Super G3 fax machine?",
      "a": "Super G3 (Super Group 3, or SG3) is the high-speed form of Group 3 fax. It is a standard Group 3 terminal that carries the image using ITU-T V.34 half-duplex modulation, which supports data signalling rates up to 33.6 kbit/s, rather than the slower modulations used by earlier Group 3 machines."
    },
    {
      "q": "How much faster is Super G3 than standard Group 3?",
      "a": "Standard Group 3 machines top out at 14.4 kbit/s using the V.17 modulation. Super G3 uses V.34, which supports data signalling rates up to 33.6 kbit/s, so it can transmit a page more quickly when line quality allows. The rate actually used is negotiated by the T.30 protocol based on what both machines and the connection support."
    },
    {
      "q": "Is Super G3 the same as Group 4 fax?",
      "a": "No. Super G3 is a high-speed variant of Group 3 that runs over ordinary telephone lines. Group 4 is a separate, higher-resolution fax class designed for digital networks such as ISDN and defined by different ITU-T recommendations."
    },
    {
      "q": "Can a Super G3 machine send to an older fax machine?",
      "a": "Yes. Super G3 is backward compatible with Group 3. If a V.34 session cannot be established, the machines fall back to the legacy Group 3 modulations (V.17, V.29, or V.27ter) using the T.30 negotiation procedures, so Super G3 units interoperate with the existing base of Group 3 equipment."
    }
  ],
  "sources": [
    {
      "title": "ITU-T Recommendation T.30: Procedures for document facsimile transmission in the general switched telephone network",
      "url": "https://www.itu.int/rec/T-REC-T.30/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "ITU-T Recommendation T.4: Standardization of Group 3 facsimile terminals for document transmission",
      "url": "https://www.itu.int/rec/T-REC-T.4/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "ITU-T Recommendation T.6: Facsimile coding schemes and coding control functions for Group 4 facsimile apparatus",
      "url": "https://www.itu.int/rec/T-REC-T.6/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "ITU-T Recommendation V.34: A modem operating at data signalling rates of up to 33 600 bit/s for use on the general switched telephone network and on leased point-to-point 2-wire telephone-type circuits",
      "url": "https://www.itu.int/rec/T-REC-V.34/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "ITU-T Recommendation V.17: A 2-wire modem for facsimile applications with rates up to 14 400 bit/s",
      "url": "https://www.itu.int/rec/T-REC-V.17/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "ITU-T Recommendation V.29: 9600 bits per second modem standardized for use on point-to-point 4-wire leased telephone-type circuits",
      "url": "https://www.itu.int/rec/T-REC-V.29/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "ITU-T Recommendation V.27ter: 4800/2400 bits per second modem standardized for use in the general switched telephone network",
      "url": "https://www.itu.int/rec/T-REC-V.27ter/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "ITU-T Recommendation V.8: Procedures for starting sessions of data transmission over the public switched telephone network",
      "url": "https://www.itu.int/rec/T-REC-V.8/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "Fax",
      "url": "https://en.wikipedia.org/wiki/Fax",
      "publisher": "Wikipedia"
    },
    {
      "title": "V.34 Fax Relay over Packet Networks (technical white paper)",
      "url": "https://www.audiocodes.com/media/2072/v34-fax-relay-over-packet-networks.pdf",
      "publisher": "AudioCodes"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "super g3",
    "super group 3",
    "sg3",
    "group 3 fax",
    "v.34 fax",
    "33.6 kbit/s fax",
    "itu-t t.30",
    "itu-t t.4",
    "fax modulation",
    "plain-paper fax",
    "high-speed fax",
    "fax machine class"
  ],
  "cluster": "fax-models"
};

export default entry;
