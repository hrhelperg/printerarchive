import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "group-4-fax-machines",
  "title": "Group 4 Fax Machines",
  "description": "Group 4 fax is the ITU-T T.6 digital-network facsimile class — lossless MMR coding over 64 kbit/s ISDN, with terminal standard T.563.",
  "summary": "Group 4 fax is a class of facsimile apparatus designed for all-digital networks rather than the analog telephone line used by Group 3. It is defined chiefly by ITU-T Recommendation T.6, which specifies the lossless, fully two-dimensional Modified Modified READ (MMR) coding scheme, together with Recommendation T.563 for terminal characteristics. Wikipedia states that Group 4 faxes are designed to operate over 64 kbit/s digital ISDN circuits, and that their resolutions form a superset of the Group 3 (T.4) resolutions. Because it depended on an end-to-end ISDN connection, Group 4 saw limited deployment, and Group 3 remained the standard used on ordinary telephone lines.",
  "category": "Fax machine class",
  "era": "Digital (ISDN) fax era",
  "introduced": "1984 (ITU-T Recommendation T.6 first adopted; current text November 1988)",
  "alsoKnownAs": [
    "Group 4 fax",
    "G4 fax",
    "CCITT/ITU-T Group 4",
    "ITU-T T.6 fax",
    "MMR fax",
    "Modified Modified READ (MMR) fax"
  ],
  "specs": [
    {
      "label": "Fax class / standard",
      "value": "ITU-T Group 4 facsimile, defined by Recommendations T.6 (coding) and T.563 (terminal characteristics)",
      "source": "ITU-T Recommendations T.6 and T.563"
    },
    {
      "label": "Coding scheme",
      "value": "Modified Modified READ (MMR): a lossless, fully two-dimensional bi-level image coding scheme",
      "source": "ITU-T Recommendation T.6; Wikipedia (Group 4 compression); Library of Congress"
    },
    {
      "label": "Coding standard title",
      "value": "ITU-T (CCITT) Recommendation T.6, 'Facsimile coding schemes and coding control functions for Group 4 facsimile apparatus'",
      "source": "ITU-T Recommendation T.6"
    },
    {
      "label": "Standard adopted",
      "value": "MMR/T.6 adopted 1984 (CCITT); current ITU-T T.6 text dated November 1988",
      "source": "Library of Congress; ITU-T Recommendation T.6 (11/88)"
    },
    {
      "label": "Terminal characteristics",
      "value": "ITU-T Recommendation T.563, 'Terminal characteristics for Group 4 facsimile apparatus'",
      "source": "ITU-T Recommendation T.563"
    },
    {
      "label": "Transmission network",
      "value": "All-digital networks, principally 64 kbit/s ISDN circuits (an effectively error-free channel)",
      "source": "Wikipedia (Fax)"
    },
    {
      "label": "Base resolution",
      "value": "200 pels per 25.4 mm (about 200 dpi) in both the main-scan and sub-scan directions",
      "source": "ITU-T Recommendation T.563"
    },
    {
      "label": "Optional resolutions",
      "value": "240, 300 and 400 pels per 25.4 mm (about 240/300/400 dpi); a superset of the Group 3 (T.4) resolutions",
      "source": "ITU-T Recommendation T.563 (resolution values); Wikipedia (Fax), which ties the superset of the T.4 resolutions to Recommendation T.6"
    },
    {
      "label": "Typical compression",
      "value": "About 20:1 (~95%) for a bi-level page; an 8.5 x 11 in page at 200 dpi reduces from about 467.5 kB to about 23.4 kB",
      "source": "Wikipedia (Group 4 compression)"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What Group 4 fax is"
    },
    {
      "kind": "paragraph",
      "text": "Group 4 fax (also written G4 fax) is a class of facsimile apparatus intended for all-digital transmission networks rather than the analog telephone line used by Group 3 machines. The class is defined by two core ITU-T Recommendations: T.6, 'Facsimile coding schemes and coding control functions for Group 4 facsimile apparatus,' which specifies the image-coding scheme, and T.563, 'Terminal characteristics for Group 4 facsimile apparatus,' which specifies the terminals themselves. According to Wikipedia, Group 4 faxes are designed to operate over 64 kbit/s digital ISDN circuits. This is a class page: it documents the Group 4 standard and the family of machines built to it, not any single model, and every figure below is drawn from an authoritative standards or reference source."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The T.6 coding scheme (MMR)"
    },
    {
      "kind": "paragraph",
      "text": "Group 4's image compression is the Modified Modified READ (MMR) scheme, defined in ITU-T Recommendation T.6. Wikipedia and the Library of Congress describe MMR as a lossless method of compressing bi-level (black-and-white) images that is fully two-dimensional: it builds on the Group 3 two-dimensional coding of Recommendation T.4 but removes the end-of-line (EOL) codes, treating the page as a continuous bitstream rather than a series of separately delimited lines. Because Group 4 assumes an error-free digital channel, it does not need the resynchronisation codes that Group 3 relies on over noisy analog lines. Wikipedia states that Group 4 typically achieves about a 20:1 (roughly 95%) compression ratio, giving the example of an 8.5 x 11-inch page scanned at 200 dpi shrinking from about 467.5 kB to about 23.4 kB. The MMR coding scheme was adopted in 1984, and the current ITU-T text of Recommendation T.6 is dated November 1988."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Resolution"
    },
    {
      "kind": "paragraph",
      "text": "The standard picture-element density of Group 4 apparatus is 200 pels per 25.4 mm — about 200 dpi — in both the main-scan (horizontal) and sub-scan (vertical) directions, as defined in ITU-T Recommendation T.563. The same recommendation provides for higher optional densities of 240, 300 and 400 pels per 25.4 mm (about 240, 300 and 400 dpi). Wikipedia characterises the Group 4 resolution set as a superset of the Group 3 (T.4) resolutions, so a Group 4 terminal can reproduce the resolutions a Group 3 machine offers and add higher ones. In keeping with the archive's sourcing policy, resolutions above the 200-dpi base are given only where the standard defines them; no value is estimated."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Built for digital networks (ISDN)"
    },
    {
      "kind": "paragraph",
      "text": "The defining difference between Group 4 and earlier fax classes is the carrier it was designed for. Where Group 3 sends a page over the analog public switched telephone network (PSTN) using a voice-band modem, Group 4 was specified for all-digital networks — principally the Integrated Services Digital Network (ISDN). Wikipedia states that Group 4 faxes are designed to operate over 64 kbit/s digital ISDN circuits, a channel that is both faster and, being digital, effectively error-free. That error-free assumption is what allows the T.6 coding to dispense with the line-by-line resynchronisation codes required on analog connections. The archive's discussion of analog fax versus digital fax explores how changing the underlying carrier reshaped the cost and reliability of faxing."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Group 4 compared with Group 3"
    },
    {
      "kind": "paragraph",
      "text": "Group 3 and Group 4 perform the same task — scanning a page at one end and reconstructing it at the other — over different networks and with different standards. A Group 3 machine conforms to ITU-T Recommendations T.4 (coding) and T.30 (the call and session protocol) and runs over ordinary telephone lines using V-series modems; Wikipedia lists the V.27ter, V.29 and V.17 modulations reaching 14,400 bit/s, with later 'Super G3' terminals using ITU-T V.34 half-duplex modulation to reach up to 33,600 bit/s. A Group 4 machine instead uses the T.6 coding scheme and T.563 terminal characteristics over a 64 kbit/s ISDN channel. In compression terms the two are closely related, since MMR (T.6) is the two-dimensional Group 3 scheme with its end-of-line codes removed. The archive's guide to how fax machines work covers the shared scanning-and-printing mechanics that both classes rely on."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Adoption and legacy"
    },
    {
      "kind": "paragraph",
      "text": "Group 4 was intended to supplant Group 3 by carrying documents error-free over digital networks at up to 64 kbit/s. In practice its dependence on an end-to-end ISDN connection limited where it could be used: ISDN service was more expensive and less widely available than the ordinary analog telephone line that any Group 3 machine could use. Industry references note that Group 4 usage stayed largely confined to ISDN, while the great majority of fax machines in service remained Group 3. The Group 3 line was itself extended over time — the 'Super G3' terminals using ITU-T V.34 (half-duplex) raised its speed to 33.6 kbit/s — which further narrowed the practical advantage of moving to Group 4. As a result, Group 4 is best understood as the digital-network fax standard rather than the fax standard most offices actually adopted."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Reference scope"
    },
    {
      "kind": "paragraph",
      "text": "This page records only facts that can be traced to an authoritative source — chiefly the ITU-T Recommendations that define the class (T.6 and T.563) together with encyclopedic and industry references such as Wikipedia, Britannica and the Library of Congress format registry. Because Group 4 is a class and standard rather than a single product, specifications are given at the class level and no per-model figures are invented; any specification that cannot be sourced is omitted rather than estimated. The page quotes no current pricing or availability. The sources consulted are listed below."
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
          "Fax class / standard",
          "ITU-T Group 4 facsimile, defined by Recommendations T.6 (coding) and T.563 (terminal characteristics)"
        ],
        [
          "Coding scheme",
          "Modified Modified READ (MMR): a lossless, fully two-dimensional bi-level image coding scheme"
        ],
        [
          "Coding standard title",
          "ITU-T (CCITT) Recommendation T.6, 'Facsimile coding schemes and coding control functions for Group 4 facsimile apparatus'"
        ],
        [
          "Standard adopted",
          "MMR/T.6 adopted 1984 (CCITT); current ITU-T T.6 text dated November 1988"
        ],
        [
          "Terminal characteristics",
          "ITU-T Recommendation T.563, 'Terminal characteristics for Group 4 facsimile apparatus'"
        ],
        [
          "Transmission network",
          "All-digital networks, principally 64 kbit/s ISDN circuits (an effectively error-free channel)"
        ],
        [
          "Base resolution",
          "200 pels per 25.4 mm (about 200 dpi) in both the main-scan and sub-scan directions"
        ],
        [
          "Optional resolutions",
          "240, 300 and 400 pels per 25.4 mm (about 240/300/400 dpi); a superset of the Group 3 (T.4) resolutions"
        ],
        [
          "Typical compression",
          "About 20:1 (~95%) for a bi-level page; an 8.5 x 11 in page at 200 dpi reduces from about 467.5 kB to about 23.4 kB"
        ]
      ],
      "sources": [
        "ITU-T Recommendations T.6 and T.563",
        "ITU-T Recommendation T.6",
        "Wikipedia (Group 4 compression)",
        "Library of Congress",
        "ITU-T Recommendation T.6 (11/88)",
        "ITU-T Recommendation T.563",
        "Wikipedia (Fax)"
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
      "slug": "laser-printing"
    }
  ],
  "faqs": [
    {
      "q": "Which ITU-T standards define Group 4 fax?",
      "a": "Group 4 fax is defined chiefly by ITU-T Recommendation T.6, which specifies the Modified Modified READ (MMR) coding scheme, and Recommendation T.563, 'Terminal characteristics for Group 4 facsimile apparatus.'"
    },
    {
      "q": "What network does Group 4 fax use?",
      "a": "Group 4 was designed for all-digital networks. Wikipedia states that Group 4 faxes are designed to operate over 64 kbit/s digital ISDN circuits, rather than the analog telephone line used by Group 3."
    },
    {
      "q": "What resolution does Group 4 fax support?",
      "a": "Its base density is 200 pels per 25.4 mm (about 200 dpi) in both directions, with optional higher densities of 240, 300 and 400 dpi defined in ITU-T Recommendation T.563. Wikipedia notes these form a superset of the Group 3 (T.4) resolutions."
    },
    {
      "q": "How is Group 4 different from Group 3?",
      "a": "Group 3 uses ITU-T Recommendations T.4 and T.30 over the analog telephone network with voice-band modems (up to 14.4 kbit/s, or 33.6 kbit/s for 'Super G3'), while Group 4 uses the T.6 coding scheme over a 64 kbit/s ISDN channel. T.6's MMR coding is essentially the Group 3 two-dimensional scheme with its end-of-line codes removed."
    },
    {
      "q": "Why didn't Group 4 replace Group 3?",
      "a": "Group 4 required an end-to-end ISDN connection, which was more costly and less available than the ordinary telephone line any Group 3 machine could use. Industry references note that Group 4 usage stayed largely confined to ISDN while the great majority of fax machines in service remained Group 3."
    }
  ],
  "sources": [
    {
      "title": "T.6: Facsimile coding schemes and coding control functions for Group 4 facsimile apparatus",
      "url": "https://www.itu.int/rec/T-REC-T.6/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "T.563: Terminal characteristics for Group 4 facsimile apparatus",
      "url": "https://www.itu.int/rec/T-REC-T.563/en",
      "publisher": "International Telecommunication Union (ITU-T)"
    },
    {
      "title": "Fax",
      "url": "https://en.wikipedia.org/wiki/Fax",
      "publisher": "Wikipedia"
    },
    {
      "title": "Group 4 compression",
      "url": "https://en.wikipedia.org/wiki/Group_4_compression",
      "publisher": "Wikipedia"
    },
    {
      "title": "ITU-T Group 4 FAX Compression (T.6)",
      "url": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000136.shtml",
      "publisher": "Library of Congress"
    },
    {
      "title": "Group 4 fax machine",
      "url": "https://www.britannica.com/technology/Group-4-fax-machine",
      "publisher": "Encyclopaedia Britannica"
    },
    {
      "title": "What is fax?",
      "url": "https://docs.blueworx.com/BVR/InfoCenter/V6.1/AIX/help/topic/com.ibm.wvraix.fax.doc/whatisfax1.html",
      "publisher": "Blueworx"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "group 4 fax",
    "group 4 fax machine",
    "g4 fax",
    "itu-t t.6",
    "t.6 fax standard",
    "mmr compression",
    "modified modified read",
    "group 4 facsimile",
    "isdn fax",
    "t.563",
    "digital fax standard",
    "group 4 vs group 3"
  ],
  "cluster": "fax-models"
};

export default entry;
