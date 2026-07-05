import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "thermal-inkjet-printing",
  "title": "Thermal Inkjet (Bubble Jet) Printing",
  "description": "History and mechanism of thermal inkjet (Bubble Jet) printing, the heat-driven drop-on-demand method co-invented by Canon and HP.",
  "summary": "Thermal inkjet, marketed by Canon as Bubble Jet, is a drop-on-demand printing method in which a thin-film resistor inside each nozzle chamber is pulsed to flash-boil a microscopic layer of ink. The rapidly expanding vapor bubble ejects a single droplet onto the paper, and as it collapses, surface tension refills the chamber. Invented independently and at roughly the same time by teams at Canon in Japan (a 1977 patent, work attributed to Ichiro Endo) and at Hewlett-Packard in the United States (from late 1978, with Jon Vaught), it became the dominant technology in consumer and small-office desktop printers. It is contrasted principally with piezoelectric drop-on-demand inkjet, which ejects droplets by mechanical flexing rather than heat.",
  "difficulty": "intermediate",
  "estimatedTime": "6 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Thermal inkjet was invented independently and at roughly the same time by two teams, one at Canon in Japan and one at Hewlett-Packard in the United States. Multiple authoritative sources agree on this parallel-invention framing, and neither company should be presented as the sole inventor."
    },
    {
      "kind": "paragraph",
      "text": "Canon's own histories trace the enabling observation to an accident in which a heated soldering iron accidentally touched the needle of a syringe filled with ink, causing ink droplets to spurt vigorously from the tip of the needle. In October 1977, Canon submitted a basic patent application for what it describes as the world's first thermal inkjet (Bubble Jet) technology. Wikipedia and an Optica biography attribute the work to Canon engineer Ichiro Endo, noting that his team had initially been trying to use the piezoelectric effect before observing the heat-driven ejection. Notably, Canon's own corporate and intellectual-property pages document the 1977 discovery and patent but do not name Endo individually; the attribution to Endo comes from Optica and Wikipedia."
    },
    {
      "kind": "paragraph",
      "text": "At Hewlett-Packard, work by Jon (also spelled John) Vaught at the company's Corvallis, Oregon division began in late 1978. The HP team found that thin-film resistors could produce enough heat to fire an ink droplet. IEEE Spectrum notes that both companies observed ink boiling and splattering when touched by a hot element and set out to harness the effect. According to Wikipedia, the HP and Canon teams learned of each other's parallel work about two years later, around 1980."
    },
    {
      "kind": "paragraph",
      "text": "The shared nature of the achievement is reflected in later honors. Endo received the Edwin H. Land Medal in 1995, in recognition shared with HP's Vaught, for their independent inventions of the technology. Canon's Bubble Jet system received Japan's Imperial Invention Prize in 1994 (Patent No. 01396884). Ichiro Endo died in 2016."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "The documented physical process operates on the drop-on-demand principle, firing ink only when a droplet is required:"
    },
    {
      "kind": "list",
      "items": [
        "Each print cartridge contains a series of tiny chambers, each with its own heating element (a thin-film resistor). These structures are fabricated by photolithography, the same process family used to make integrated circuits.",
        "To fire a droplet, a pulse of electric current is passed through the heating element, causing rapid vaporization, or flash boiling, of a thin layer of ink in the chamber.",
        "This forms a vapor bubble, producing a large, sudden pressure increase that propels a droplet of ink out of the nozzle orifice onto the paper. This bubble is the origin of Canon's Bubble Jet name.",
        "As the current stops, the bubble condenses and collapses. The ink's surface tension, together with the contraction, draws a fresh charge of ink into the chamber through a narrow channel from the reservoir, ready for the next drop."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Because heat is central to the mechanism, thermal inkjet requires water-based inks with a volatile component capable of forming the vapor bubble."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Evolution"
    },
    {
      "kind": "paragraph",
      "text": "The technology moved from laboratory discovery in 1977 and 1978 to the first shipping products in the mid-1980s: HP's ThinkJet in 1984 and Canon's BJ-80 in 1985."
    },
    {
      "kind": "paragraph",
      "text": "HP's first ThinkJet head was a low-nozzle-count, comparatively low-resolution device. Over subsequent generations, both Canon and HP progressively increased nozzle counts, resolution, and firing frequency. Canon later introduced FINE (Full-photolithography Inkjet Nozzle Engineering) technology, first incorporated in the BJ F850 in 1999, and consolidated its consumer line under the PIXUS (Japan) and PIXMA brands."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "paragraph",
      "text": "The documented advantages of thermal inkjet are qualitative:"
    },
    {
      "kind": "list",
      "items": [
        "Lower-cost print heads. Because no special materials are required, the thermal print head is generally cheaper to produce than in other inkjet technologies.",
        "Manufacturable with semiconductor processes. The resistor heating element can be miniaturized using the same photolithographic technology used for integrated circuits, enabling dense, mass-produced nozzle arrays.",
        "Disposable-head economics. The low cost of the print head made it practical to integrate the head into a replaceable ink cartridge, which is replaced each time the cartridge runs empty.",
        "Enabled affordable desktop and, later, color printing. Thermal inkjet made low-cost printers practical to attach to personal computers."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Disadvantages"
    },
    {
      "kind": "paragraph",
      "text": "The documented disadvantages are likewise qualitative:"
    },
    {
      "kind": "list",
      "items": [
        "Restricted ink chemistry. Thermal inkjet needs inks with a volatile component to form the vapor bubble, which limits the range of usable inks relative to piezoelectric heads.",
        "Kogation. Repeated heating causes kogation, the buildup of burnt ink residue on the heating element, an issue that piezoelectric heads avoid.",
        "Limited head power. Thermal print heads do not have the power of piezoelectric drop-on-demand or continuous inkjet, so the gap between the face of the head and the paper is critical."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "Thermal inkjet remains the most common technology in consumer and small-office/home-office desktop inkjet printers, used by Canon, HP, and Lexmark. It underlies mainstream photo and document printers and, in scaled-up form, HP's professional and wide-format lines (individual model head types should be confirmed, though DeskJet and ThinkJet are unambiguously thermal)."
    },
    {
      "kind": "paragraph",
      "text": "It coexists in the market with piezoelectric inkjet, used by Epson and Brother. Both drop-on-demand approaches now appear in high-capacity refillable systems: Canon's MegaTank and HP's Smart Tank use thermal heads, while Epson's EcoTank is piezoelectric."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to other technologies"
    },
    {
      "kind": "paragraph",
      "text": "Versus piezoelectric drop-on-demand inkjet. Piezoelectric printing is the main alternative drop-on-demand method. It uses a voltage-driven piezoelectric element, commonly PZT (lead zirconium titanate), that flexes to push ink out, with no heat involved. The documented trade-offs favor piezo for ink flexibility: it allows a wider variety of inks because no volatile component is required, and it avoids kogation. Thermal heads, by contrast, are cheaper to manufacture, because the piezoelectric material makes piezo heads more expensive, but they are constrained to volatile water-based inks."
    },
    {
      "kind": "paragraph",
      "text": "Versus continuous inkjet. Both thermal and piezoelectric inkjet are drop-on-demand methods, firing droplets only when needed. This contrasts with continuous inkjet, which produces a constant stream of drops and deflects or recycles the ones not used for printing. Thermal heads are documented as having less power than continuous inkjet."
    },
    {
      "kind": "paragraph",
      "text": "Relation to semiconductor manufacturing. Thermal inkjet heads are built using photolithography, directly borrowing integrated-circuit fabrication techniques, which is central to the technology's low-cost, high-density nozzle arrays."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "list",
      "items": [
        "Canon — originator of the Bubble Jet thermal inkjet and of the FINE cartridge system.",
        "Hewlett-Packard (HP) — independent co-inventor of thermal inkjet, with its ThinkJet and DeskJet lines.",
        "Lexmark — documented as a thermal inkjet manufacturer."
      ]
    },
    {
      "kind": "paragraph",
      "text": "For contrast, Epson and Brother use piezoelectric rather than thermal inkjet."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Related printer families"
    },
    {
      "kind": "list",
      "items": [
        "Canon: Bubble Jet — the BJ and BJC series (for example the BJ-80, BJ-10v, BJC-600J, and BJ F850); consumer lines later branded PIXUS (Japan) and PIXMA; the FINE cartridge system; and the MegaTank refillable line.",
        "HP: ThinkJet (1984), DeskJet, and the wide-format DesignJet lines, along with the Smart Tank refillable line.",
        "Lexmark: consumer thermal inkjet printers."
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
          "period": "1977",
          "text": "Canon's foundational discovery (the accidental soldering-iron and ink-syringe observation); Canon files a basic patent, in October, for the world's first thermal inkjet (Bubble Jet) technology. The work is attributed to Ichiro Endo's team by Optica and Wikipedia."
        },
        {
          "period": "Late 1978",
          "text": "Jon (John) Vaught's thermal inkjet project begins at HP's Corvallis division; the team finds thin-film resistors can fire an ink droplet."
        },
        {
          "period": "~1980",
          "text": "the HP and Canon teams become aware of each other's parallel work."
        },
        {
          "period": "1984",
          "text": "HP introduces the ThinkJet, the first mass-market personal thermal inkjet printer (documented as April 1984); Epson introduces a piezoelectric inkjet the same year."
        },
        {
          "period": "1985",
          "text": "Canon launches the BJ-80, described by Canon as the world's first printer to employ Bubble Jet technology."
        },
        {
          "period": "1994",
          "text": "Canon's Bubble Jet system receives Japan's Imperial Invention Prize (Patent No. 01396884)."
        },
        {
          "period": "1995",
          "text": "Ichiro Endo receives the Edwin H. Land Medal, in recognition shared with HP's John Vaught."
        },
        {
          "period": "1999",
          "text": "Canon's FINE (Full-photolithography Inkjet Nozzle Engineering) technology is introduced with the BJ F850."
        },
        {
          "period": "2016",
          "text": "Ichiro Endo dies."
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
      "slug": "piezoelectric-inkjet-printing"
    },
    {
      "section": "brands",
      "slug": "canon"
    },
    {
      "section": "brands",
      "slug": "hewlett-packard"
    },
    {
      "section": "history",
      "slug": "evolution-of-inkjet-printers"
    },
    {
      "section": "guides",
      "slug": "how-inkjet-printers-work"
    }
  ],
  "faqs": [
    {
      "q": "Who invented thermal inkjet (Bubble Jet) printing?",
      "a": "It was invented independently and at roughly the same time by two teams. At Canon in Japan, a basic patent was filed in October 1977, with the work attributed to engineer Ichiro Endo by Optica and Wikipedia (though Canon's own pages do not name him). At Hewlett-Packard in the United States, work by Jon (John) Vaught began at the Corvallis, Oregon division in late 1978. The two teams learned of each other's parallel work around 1980."
    },
    {
      "q": "Why is it called Bubble Jet?",
      "a": "The name comes from the mechanism. A thin-film resistor inside each nozzle chamber is pulsed with electric current, flash-boiling a thin layer of ink to form a vapor bubble. That bubble's sudden pressure ejects a droplet onto the paper. Bubble Jet is Canon's trade name for its thermal inkjet technology."
    },
    {
      "q": "What is the difference between thermal and piezoelectric inkjet?",
      "a": "Both are drop-on-demand methods, but thermal inkjet ejects droplets using heat (a resistor flash-boils the ink), while piezoelectric inkjet uses a voltage-driven piezoelectric element, commonly PZT, that flexes mechanically with no heat. Thermal heads are cheaper to produce but require volatile water-based inks and are subject to kogation. Piezo allows a wider range of inks and avoids kogation, but its heads are more expensive to manufacture."
    },
    {
      "q": "Which came first, the HP ThinkJet or the Canon BJ-80?",
      "a": "Canon filed its patent first, in 1977, but HP reached the market first. The HP ThinkJet launched in 1984 (documented as April 1984), while Canon's BJ-80, which Canon calls the first printer to employ Bubble Jet technology, followed in 1985. These facts are not in conflict: Canon patented earlier, HP shipped earlier."
    },
    {
      "q": "Is thermal inkjet still used today?",
      "a": "Yes. Thermal inkjet remains the most common technology in consumer and small-office desktop inkjet printers, used by Canon, HP, and Lexmark. It also appears in high-capacity refillable systems such as Canon MegaTank and HP Smart Tank. It coexists with piezoelectric inkjet, used by Epson and Brother."
    }
  ],
  "sources": [
    {
      "title": "Inkjet printing",
      "url": "https://en.wikipedia.org/wiki/Inkjet_printing",
      "publisher": "Wikipedia"
    },
    {
      "title": "A Brief History of Inkjet Printers",
      "url": "https://spectrum.ieee.org/inkjet-printer",
      "publisher": "IEEE Spectrum"
    },
    {
      "title": "Ichiro Endo (biography)",
      "url": "https://www.optica.org/History/Biographies/bios/Ichiro_Endo",
      "publisher": "Optica"
    },
    {
      "title": "Canon celebrates 30th anniversary of launch of first Bubble Jet inkjet printer",
      "url": "https://global.canon/en/news/2015/aug26e2.html",
      "publisher": "Canon Global"
    },
    {
      "title": "The history of Canon's intellectual property in the printing field",
      "url": "https://global.canon/en/intellectual-property/history/printing.html",
      "publisher": "Canon Global"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "thermal inkjet",
    "bubble jet",
    "drop-on-demand",
    "canon bubble jet",
    "ichiro endo",
    "jon vaught",
    "hp thinkjet",
    "piezoelectric inkjet",
    "thermal inkjet vs piezoelectric",
    "how thermal inkjet works",
    "inkjet printing history",
    "kogation"
  ],
  "cluster": "printing-technology"
};

export default entry;
