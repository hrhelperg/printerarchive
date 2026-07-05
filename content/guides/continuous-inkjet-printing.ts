import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "continuous-inkjet-printing",
  "title": "Continuous Inkjet Printing",
  "description": "History and workings of continuous inkjet (CIJ) printing: charged-droplet deflection, its instrumentation origins, and its role in industrial coding.",
  "summary": "Continuous inkjet (CIJ) is a non-contact printing technology in which a pressurized stream of ink is broken into a continuous train of uniform droplets; selected droplets are electrostatically charged and steered by deflection plates either onto the substrate or into a gutter for recirculation. Descended from analog chart-recorder instrumentation and formalized by Richard Sweet's charged-droplet work at Stanford in the mid-1960s, CIJ became the dominant technology for high-speed industrial coding and marking of dates, lot codes, and identifiers on production lines. It is distinguished from drop-on-demand (DOD) inkjet, in which drops are generated only when a mark is required.",
  "difficulty": "advanced",
  "estimatedTime": "8 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "The lineage of continuous inkjet (CIJ) runs through scientific instrumentation before it became a printing technology. Its ancestors were chart recorders that traced a physical signal onto moving paper using a jet of ink."
    },
    {
      "kind": "list",
      "items": [
        "Lord Kelvin (William Thomson), 1867 — patented the \"syphon recorder,\" which recorded telegraph signals as a continuous ink trace on moving paper using an ink-jet nozzle deflected by a magnetic coil. It is frequently cited as the earliest ancestor of ink-jet marking.",
        "Rune Elmqvist, 1948-1951 — the Swedish inventor patented a continuous-jet chart recorder that emitted a fine, continuous ink jet steered to trace on moving paper, demonstrated for electrocardiogram recording around 1950. The first commercial devices (medical strip-chart recorders) reached market in 1951, tied to Elmqvist's patent US 2,566,443. These recorders were first marketed as the Mingograf by Elema-Schonander and were later sold through Siemens-Elema after Siemens acquired the firm.",
        "Richard G. Sweet, Stanford University, mid-1960s — Sweet advanced the continuous-jet concept by breaking the ink stream into a train of uniformly charged droplets that could be electrostatically deflected, with drops directed either to paper or to a reuse path. This \"charge-and-deflect\" work, associated with a 1965 publication, is widely regarded as the foundation of modern CIJ, and Sweet is often described as the father of the technique. Because secondary sources vary between 1963 and 1965, the mid-1960s is best treated as the documented era.",
        "Carl Hellmuth Hertz and colleagues, Lund Institute of Technology (Sweden), late 1950s-1960s — Hertz's group developed an independent family of continuous inkjet methods, originally motivated by the need to register ultrasound signals. The Hertz approach modulated the number of droplets reaching the substrate to produce variable optical density (grayscale), described in the \"Ink jet recorder\" patent US 3,416,153 (Hertz and Sven-Inge Simonsson, granted 1968). This became the basis for high-resolution CIJ used in graphic-arts proofing and textile printing.",
        "Commercialization, late 1960s-1970s — CIJ moved into commercial products for industrial coding and for computer output. IBM incorporated continuous inkjet in the IBM 6640, introduced in 1976. A.B. Dick's Videojet product line brought CIJ to industrial coding; an early commercial Videojet CIJ coder is attributed to the late 1960s, though the exact first model and year are not firmly documented in the most authoritative sources."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "The physical process follows a well-documented chain of steps."
    },
    {
      "kind": "paragraph",
      "text": "1. Jet formation. A pump forces liquid ink under pressure through a small nozzle, producing a fast, thin, continuous jet. 2. Droplet break-up (Plateau-Rayleigh instability). A cylindrical liquid jet is inherently unstable and breaks into droplets. Rayleigh's analysis showed that a small symmetric disturbance grows fastest at a characteristic wavelength related to the jet diameter, causing the stream to pinch off into drops. In CIJ a piezoelectric element applies a precise acoustic modulation to the nozzle so the jet breaks into droplets of uniform size and spacing at a controlled, high frequency. 3. Charging. At the point where each droplet detaches, it passes a charging electrode. By setting the electrode voltage synchronously with drop break-off, individual drops receive a controlled electric charge, or none at all. 4. Deflection. The charged drops travel between high-voltage deflection plates, where the electric field bends their trajectories in proportion to their charge. 5. Printing versus recycling. Depending on the architecture, drops are directed either onto the substrate to form the mark or into a gutter, from which recovered ink is filtered and recirculated back to the ink system."
    },
    {
      "kind": "paragraph",
      "text": "Two architectures are documented:"
    },
    {
      "kind": "list",
      "items": [
        "Binary deflection. Drops are either charged or uncharged. Typically one population goes to print while the other is diverted to the gutter, so each nozzle contributes an on/off pixel. Multi-nozzle arrays are used for area coverage.",
        "Multiple (multi-level) deflection. Drops are charged to several different levels so that a single nozzle can place drops at multiple positions across the mark, and grayscale can be produced by varying how many drops reach each pixel. This Hertz-type approach underpins the high-resolution graphic-arts variants."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Evolution"
    },
    {
      "kind": "paragraph",
      "text": "CIJ evolved along two branches from a common charge-and-deflect root. One branch, descended largely from the Sweet charge-and-deflect line, became the rugged industrial coding-and-marking technology optimized for speed, standoff distance, and marking difficult surfaces. The other branch, descended from the Hertz multi-drop grayscale line, became high-resolution continuous inkjet for color proofing and textile and graphic printing, commercialized notably through the Iris Graphics lineage."
    },
    {
      "kind": "paragraph",
      "text": "A third strand, page-wide continuous inkjet for high-volume variable-data and transactional printing, developed through the Mead, Diconix, Kodak, Scitex, and Kodak Versamark line. Over time, drop-on-demand technologies (thermal and piezoelectric) took over most desktop and much high-resolution work, while CIJ retained its stronghold in high-speed industrial coding, where its always-on jet and long throw distance are advantageous."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "paragraph",
      "text": "The documented advantages of CIJ are qualitative rather than benchmarked."
    },
    {
      "kind": "list",
      "items": [
        "High droplet velocity and long standoff distance. Because drops leave the nozzle at high velocity, the printhead can be positioned a relatively long distance from the substrate, which suits marking uneven, recessed, or fast-moving surfaces.",
        "High drop-ejection frequency and speed. The continuous stream is broken into drops at a high rate, enabling very fast printing well matched to production lines.",
        "Non-contact marking on varied substrates. CIJ can mark a wide range of materials without touching them, useful across diverse packaging surfaces.",
        "Ink recirculation. Unused drops are recovered via the gutter and reused, and the always-flowing jet helps keep the nozzle from clogging during operation.",
        "Fast-drying, adherent solvent inks. CIJ commonly uses volatile solvent-based inks that dry quickly and adhere to many surfaces."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Disadvantages"
    },
    {
      "kind": "paragraph",
      "text": "The documented drawbacks are likewise qualitative."
    },
    {
      "kind": "list",
      "items": [
        "Ink loss through evaporation. The volatile solvents used, and the recirculation of ink exposed to air, lead to solvent evaporation; older CIJ systems in particular were noted to lose ink this way even when recycling was used.",
        "System complexity. CIJ requires charging electrodes, deflection plates, a pump, and an ink-recovery and recirculation subsystem, more subsystems than a simple DOD head, implying ongoing maintenance of the fluidics and drop break-off.",
        "Consumables and solvent handling. Reliance on volatile, often flammable solvents entails make-up fluid, filtering, and handling considerations.",
        "Resolution and quality tradeoff in coding-grade systems. The industrial coding branch is optimized for speed and robustness rather than fine resolution; drop-on-demand is generally credited with higher resolution and lower waste in intermittent printing. This is a qualitative tradeoff, not a numeric benchmark."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "The dominant modern application of CIJ is industrial coding and marking: applying date, lot, and batch codes, best-before dates, barcodes, and traceability marks to packaging, containers, cables, and products moving at speed on manufacturing lines. It is prized there for non-contact operation, marking on diverse and uneven surfaces, and line speed."
    },
    {
      "kind": "paragraph",
      "text": "A separate, smaller high-resolution CIJ niche persists in graphic-arts and textile applications derived from the Hertz and Iris lineage, and page-wide CIJ continues in high-volume variable-data and transactional printing through the Kodak Versamark lineage. The leading coding-and-marking vendors today include Videojet, Markem-Imaje, Domino Printing Sciences, Hitachi Industrial Equipment Systems, and ITW."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to other technologies"
    },
    {
      "kind": "paragraph",
      "text": "CIJ is one of the two principal inkjet families, contrasted with drop-on-demand (DOD)."
    },
    {
      "kind": "list",
      "items": [
        "In CIJ, ink flows continuously; drops are always produced and are either used or recycled. Selection is done by charging and electrostatic deflection.",
        "In DOD, drops are generated only when needed. The two main DOD sub-types are thermal, in which a resistor flash-boils a thin ink film to form a bubble that ejects a drop (commercialized by Hewlett-Packard in 1984 and Canon in 1985), and piezoelectric, in which a piezo element's mechanical motion creates the pressure pulse that ejects a drop. Siemens is credited with an early commercial piezoelectric DOD printer in the late 1970s."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The key documented distinction is continuous flow with charge-and-deflect selection and ink recirculation (CIJ) versus on-demand ejection with essentially no recycling (DOD). CIJ also historically descends from analog chart-recorder and oscillograph instrumentation (Kelvin, Elmqvist, Sweet, Hertz), which is not part of the DOD lineage."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "paragraph",
      "text": "Several company associations are documented in the historical record."
    },
    {
      "kind": "list",
      "items": [
        "Elema-Schonander / Siemens — the early Elmqvist continuous-jet medical strip-chart recorder was first marketed as the Mingograf by Elema-Schonander in 1951, and later sold through Siemens-Elema.",
        "A.B. Dick / Videojet — brought CIJ to industrial coding via the Videojet product line; Videojet remains a major coding-and-marking brand.",
        "IBM — used continuous inkjet in the IBM 6640, introduced in 1976.",
        "Iris Graphics — commercialized Hertz-type multi-drop high-resolution CIJ for color proofing, later associated with Scitex.",
        "Mead, Diconix, Kodak, Scitex, Kodak Versamark — the high-volume page-wide CIJ lineage. Per industry and trade histories, Mead's continuous inkjet work led to Diconix, acquired by Eastman Kodak in 1983; the operations were sold to Scitex in 1993, and the first VersaMark printer appeared around 1999.",
        "Domino Printing Sciences, Linx, Markem-Imaje, Hitachi, and ITW / Diagraph — established suppliers of small-character industrial CIJ coders."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Related printer families"
    },
    {
      "kind": "paragraph",
      "text": "Product-line and family names tied to CIJ include:"
    },
    {
      "kind": "list",
      "items": [
        "Videojet small-character CIJ coders (A.B. Dick / Videojet lineage).",
        "IBM 6640 continuous-inkjet document printer.",
        "Iris high-resolution CIJ proofing printers (Iris Graphics; later Scitex Iris).",
        "Kodak Versamark page-wide continuous inkjet, from the Mead, Diconix, and Scitex lineage.",
        "Domino, Linx, Markem-Imaje, and Hitachi small-character CIJ coder lines used in packaging.",
        "Mingograf continuous-jet medical chart recorder, an instrumentation ancestor rather than a printer in the modern sense."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Timeline"
    },
    {
      "kind": "timeline",
      "events": [
        {
          "period": "1867",
          "text": "Lord Kelvin patents the syphon recorder, an ink-jet chart recorder deflected by a magnetic coil."
        },
        {
          "period": "1948-1951",
          "text": "Rune Elmqvist patents a continuous-jet chart recorder (US 2,566,443); the first commercial continuous-jet medical strip-chart recorders reach market in 1951, marketed as the Mingograf by Elema-Schonander."
        },
        {
          "period": "Late 1950s-1960s",
          "text": "Carl Hellmuth Hertz's group at Lund Institute of Technology develops continuous inkjet methods for signal registration and grayscale printing (US 3,416,153, granted 1968)."
        },
        {
          "period": "Mid-1960s (commonly cited 1965)",
          "text": "Richard Sweet at Stanford develops charged-droplet break-up with electrostatic deflection, the foundation of modern CIJ."
        },
        {
          "period": "Late 1960s-1970s",
          "text": "CIJ commercialized for industrial coding via A.B. Dick / Videojet; exact first model and date are attributed rather than firmly documented."
        },
        {
          "period": "1976",
          "text": "IBM 6640 continuous-inkjet printer introduced."
        },
        {
          "period": "1983",
          "text": "Diconix (from Mead) acquired by Eastman Kodak, per industry histories."
        },
        {
          "period": "1993",
          "text": "Kodak's continuous-inkjet operations sold to Scitex, per industry histories."
        },
        {
          "period": "1999",
          "text": "First Kodak/Scitex VersaMark page-wide continuous inkjet printer, per industry histories."
        }
      ]
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This is a neutral technical and historical reference. Figures and dates are drawn from documented sources; it does not include current pricing, marketing claims, or product recommendations. The references consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "guides",
      "slug": "inkjet-printing"
    },
    {
      "section": "guides",
      "slug": "thermal-inkjet-printing"
    },
    {
      "section": "guides",
      "slug": "piezoelectric-inkjet-printing"
    },
    {
      "section": "guides",
      "slug": "how-inkjet-printers-work"
    },
    {
      "section": "history",
      "slug": "evolution-of-inkjet-printers"
    },
    {
      "section": "guides",
      "slug": "laser-vs-inkjet-printers"
    }
  ],
  "faqs": [
    {
      "q": "What is continuous inkjet (CIJ) printing?",
      "a": "CIJ is a non-contact printing technology in which a pressurized stream of ink is broken into a continuous train of uniform droplets. Selected droplets are given an electrostatic charge and steered by high-voltage deflection plates either onto the substrate or into a gutter, from which unused ink is recovered and recirculated."
    },
    {
      "q": "How is CIJ different from drop-on-demand (DOD) inkjet?",
      "a": "In CIJ the ink stream is always flowing and drops are continuously produced, then either used or recycled, with selection done by charging and electrostatic deflection. In DOD, drops are generated only at the instant a mark is required, and there is essentially no recycling. Thermal and piezoelectric are the two main DOD sub-types."
    },
    {
      "q": "Who invented continuous inkjet printing?",
      "a": "Modern CIJ is most often attributed to Richard Sweet at Stanford, whose mid-1960s charged-droplet, electrostatic-deflection work is regarded as its foundation. However, the concept has earlier instrumentation ancestors, including Lord Kelvin's 1867 syphon recorder and Rune Elmqvist's continuous-jet chart recorder, plus a parallel independent line developed by Hellmuth Hertz at Lund."
    },
    {
      "q": "What is CIJ used for today?",
      "a": "Its dominant modern role is industrial coding and marking: printing dates, lot and batch codes, barcodes, and traceability marks onto packaging and products moving at speed on production lines. Smaller niches include high-resolution graphic-arts and textile printing and high-volume variable-data printing."
    }
  ],
  "sources": [
    {
      "title": "A Brief History of Inkjet Printers",
      "url": "https://spectrum.ieee.org/inkjet-printer/particle-1",
      "publisher": "IEEE Spectrum"
    },
    {
      "title": "Rune Elmqvist: Inkjet Printers, Implantable Pacemakers",
      "url": "https://spectrum.ieee.org/rune-elmqvist",
      "publisher": "IEEE Spectrum"
    },
    {
      "title": "Inkjet printing",
      "url": "https://en.wikipedia.org/wiki/Inkjet_printing",
      "publisher": "Wikipedia"
    },
    {
      "title": "Ink jet recorder, US Patent 3,416,153 (Hertz & Simonsson)",
      "url": "https://patents.google.com/patent/US3416153A/en",
      "publisher": "Google Patents / EPO"
    },
    {
      "title": "IBM 6640",
      "url": "https://en.wikipedia.org/wiki/IBM_6640",
      "publisher": "Wikipedia"
    },
    {
      "title": "Production Inkjet Evolution: Kodak",
      "url": "https://whattheythink.com/articles/125332-inkjetinsight-production-inkjet-evolution-kodak/",
      "publisher": "WhatTheyThink"
    },
    {
      "title": "Coding and Marking Ink Market Report 2025-2030",
      "url": "https://www.businesswire.com/news/home/20251124666471/en/",
      "publisher": "ResearchAndMarkets via BusinessWire"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "continuous inkjet",
    "cij printing",
    "charged droplet deflection",
    "industrial coding and marking",
    "richard sweet",
    "inkjet history",
    "plateau-rayleigh instability",
    "drop-on-demand inkjet",
    "videojet",
    "kodak versamark"
  ],
  "cluster": "printing-technology"
};

export default entry;
