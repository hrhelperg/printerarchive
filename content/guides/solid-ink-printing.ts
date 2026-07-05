import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "solid-ink-printing",
  "title": "Solid Ink Printing",
  "description": "History and technology of solid ink (phase-change) printing, from Exxon and Howtek patents through Tektronix Phaser and the Xerox ColorQube line.",
  "summary": "Solid ink printing, also called phase-change or hot-melt printing, is a non-impact color technology that melts blocks of waxy, resin-based ink, jets the molten ink, and lets it re-solidify on a cooler surface. Its commercial lineage runs from 1980s Exxon, Dataproducts, and Howtek phase-change inkjet work through the Tektronix Phaser family introduced in 1991, and — after Xerox acquired Tektronix's color printing division in 2000 — the Xerox Phaser and ColorQube lines. Xerox launched ColorQube in 2009 and wound the technology down in the first half of 2016, leaving solid ink a legacy office color and multifunction technology.",
  "difficulty": "intermediate",
  "estimatedTime": "7 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Solid ink printing, also known as phase-change or hot-melt printing, is a non-impact color technology built around blocks of waxy, resin-based solid ink rather than liquid cartridges or toner powder. The commercial phase-change inkjet lineage is documented from the 1980s onward, when the technology's foundations passed through several companies rather than a single inventor."
    },
    {
      "kind": "paragraph",
      "text": "Exxon's printer and inkjet research produced core phase-change inkjet patents in the mid-1980s, including US4593292 (Arthur M. Lewis, Exxon Research & Engineering, filed 1984, granted 1986) and US4682187 (John G. Martner, assigned to Exxon, filed 1984, granted 1987), both covering hot-melt inkjet apparatus. This work fed a broader ecosystem that included Dataproducts, which acquired Exxon inkjet patents, and Howtek, Inc., founded in 1984 by Robert Howard. Because contemporary reference sources attribute the development of the solid ink printer variously across Exxon, Dataproducts, and Howtek, it is best understood as a shared, multi-company lineage rather than the work of one named inventor."
    },
    {
      "kind": "paragraph",
      "text": "Earlier hot-melt and wax-ink experiments are sometimes traced to work at Teletype Corporation in the 1960s (including a project reported around 1962 and wax ink used in a continuous-inkjet terminal around 1966), but those early origins rest largely on secondary encyclopedic sourcing and should be treated as attributed rather than firmly established. Likewise, references to foundational phase-change patents in the early 1970s are attributed and not independently confirmed here; the patents actually documented in this record are the 1980s Exxon filings."
    },
    {
      "kind": "paragraph",
      "text": "Solid ink became a recognizable office product category through Oregon-based Tektronix, whose PhaserJet PXi was introduced in June 1991. A succession of Phaser models followed through the 1990s. In 2000, Xerox acquired the Tektronix Color Printing and Imaging Division, absorbing solid ink into the Xerox Phaser line."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Solid ink printing follows a phase-change cycle that can be summarized as melt, jet, and freeze:"
    },
    {
      "kind": "list",
      "items": [
        "Loading: Solid ink is supplied as crayon-like sticks or blocks that drop into hoppers. Each color is keyed or shaped so it can only load into its correct slot, and there is no plastic cartridge shell.",
        "Melting: The printer heats the ink to a working temperature to liquefy it. Working temperatures are formulation-dependent: wax-based inks flow below roughly 100 °C, while thermoplastic formulations run hotter, around 125 °C in Howtek-style designs.",
        "Jetting: Printheads with reservoirs, channels, and nozzles jet the molten ink. On the Tektronix and Xerox office machines, the ink is jetted onto a heated intermediate transfer drum rather than directly onto the paper.",
        "Transfer and fusing: The image on the drum is transferred to paper through a nip. The ink solidifies almost instantly on the cooler paper and is pressed to fuse. Because it sits on and bonds to the surface of the paper rather than soaking in, it forms an opaque, glossy layer.",
        "Maintenance: Printheads use wiper assemblies, and drums run periodic cleaning cycles to clear paper dust."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Xerox's own description of the ColorQube design confirms the core mechanism, noting that the ink melts and sprays onto a spinning color drum inside the machine before transfer to the page."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Evolution"
    },
    {
      "kind": "paragraph",
      "text": "The technology evolved through several distinct phases. Early continuous-inkjet wax terminals gave way to drop-on-demand phase-change inkjet products such as the Howtek Pixelmaster and the Dataproducts Jolt. Tektronix then focused the technology on the office with its Phaser family, adding the intermediate transfer drum that jets ink onto a heated drum before transferring it to paper."
    },
    {
      "kind": "paragraph",
      "text": "After the 2000 acquisition, Xerox continued solid ink through Phaser solid-ink models and then the ColorQube line, launched in 2009, which extended the technology to higher duty cycles and multifunction (MFP) capability. The category was discontinued in the mid-2010s."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "paragraph",
      "text": "The documented advantages of solid ink are qualitative:"
    },
    {
      "kind": "list",
      "items": [
        "Vivid, opaque color that sits on the paper surface and is described as bright and precise.",
        "Media versatility, handling many paper types, thicknesses, and lower-grade stock, because the ink coats the surface rather than soaking in.",
        "Waste reduction, since ink blocks leave essentially no cartridge shell to dispose of once consumed — a headline environmental selling point for the ColorQube, which Xerox promoted as generating far less supplies waste than comparable devices.",
        "Water-fast results, because the ink is fused to the paper surface rather than absorbed.",
        "Good tolerance of intermittent use, as solidified ink resists drying out and helps protect ink-delivery components between jobs.",
        "Non-toxic formulation potential, since the inks can be made from benign materials; a Tektronix demonstration reportedly used food-grade edible ink (an anecdote that should be treated as attributed rather than documented)."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Disadvantages"
    },
    {
      "kind": "paragraph",
      "text": "The documented drawbacks are likewise qualitative:"
    },
    {
      "kind": "list",
      "items": [
        "Warm-up delay: the first print after power-on can be slow because the printer must heat and melt the ink.",
        "Standby energy: the printer keeps ink near its freeze point in sleep mode, drawing continuous power.",
        "Not easily movable: at operating temperature the machine holds molten wax, and manuals require a special cool-down cycle before the unit can be moved, making it unsuitable for mobile or cart use.",
        "Purge and waste on power loss: an unexpected power interruption can trigger purge cycles that flush ink into a waste tray.",
        "Nozzle clogging risk: solid contaminants can clog printheads, and printhead replacement is costly.",
        "Cross-model incompatibility: ink blocks are not interchangeable across different Phaser models because of formulation and melt-point differences.",
        "Finishing quirks: lamination requires reduced heat to avoid smearing the wax-based image."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "Solid ink was primarily an office color printing and multifunction technology. Xerox discontinued its solid-ink devices in the first half of 2016 (support continued for a period after end-of-sale), so it is now effectively a legacy technology rather than a mainstream current product category; the market shifted back toward color laser and liquid inkjet."
    },
    {
      "kind": "paragraph",
      "text": "The phase-change drop-on-demand concept did carry forward into other fields, notably early 3D printing and rapid prototyping, where former Howtek engineers helped spawn companies working on wax-model and thermoplastic deposition (a lineage associated with Solidscape)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to other technologies"
    },
    {
      "kind": "list",
      "items": [
        "Versus liquid inkjet: both jet ink from nozzles, but solid ink is melted from a block and freezes on contact rather than being sprayed as a liquid that dries or absorbs; solid ink also resists drying during idle periods.",
        "Versus color laser: solid ink competed directly with color laser in the office, pitching less consumable waste and surface-fused color against laser's toner-fusing electrophotographic process.",
        "Versus offset printing: the imaging and transfer step can resemble offset printing because an intermediate transfer surface (the drum) carries the image before it meets paper.",
        "Versus thermal-transfer / thermal wax: both use wax-based colorants, but thermal-transfer melts ink off a ribbon onto paper, whereas solid ink jets molten ink from bulk blocks.",
        "Link to 3D printing: phase-change drop-on-demand deposition is a technical ancestor of certain wax and thermoplastic additive-manufacturing methods."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "list",
      "items": [
        "Teletype Corporation is associated with the earliest hot-melt and wax-ink terminal work in the 1960s (attributed).",
        "Exxon conducted the printer and inkjet research behind the mid-1980s phase-change inkjet patents; Dataproducts acquired Exxon inkjet patents and produced the Jolt and the (monochrome) SI-480; and Howtek produced the Pixelmaster.",
        "Tektronix commercialized office solid ink with the Phaser line from 1991 onward.",
        "Xerox acquired Tektronix's color printing division in 2000 and produced Phaser solid-ink and ColorQube products; Fuji Xerox also marketed solid-ink devices in its regions."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Related printer families"
    },
    {
      "kind": "list",
      "items": [
        "Howtek Pixelmaster (developed from the HT-1).",
        "Dataproducts Jolt (the color model) and Dataproducts SI-480 (monochrome).",
        "Tektronix Phaser solid-ink models, including the PhaserJet PXi, Phaser III, Phaser 300, Phaser 600, and Phaser 380.",
        "Xerox Phaser solid-ink models produced after the 2000 acquisition.",
        "Xerox ColorQube desktop and multifunction models."
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
          "period": "c. 1962",
          "text": "Hot-melt/solid-ink work reported at Teletype Corporation (attributed)."
        },
        {
          "period": "c. 1966",
          "text": "Wax ink reported in a continuous-inkjet Teletype terminal (attributed)."
        },
        {
          "period": "early 1970s",
          "text": "Foundational phase-change ink patents attributed to this era (not independently confirmed here)."
        },
        {
          "period": "1984",
          "text": "Howtek, Inc. founded by Robert Howard; Exxon inkjet patents filed (granted 1986–1987) and later associated with Dataproducts."
        },
        {
          "period": "mid-1980s",
          "text": "Howtek Pixelmaster developed from the HT-1."
        },
        {
          "period": "June 1991",
          "text": "Tektronix PhaserJet PXi introduced, an early solid-ink office printer."
        },
        {
          "period": "September 1991",
          "text": "Dataproducts Jolt released."
        },
        {
          "period": "1996–1997",
          "text": "Tektronix Phaser 600 (1996) and Phaser 380 (1997), among other 1990s Phaser models."
        },
        {
          "period": "2000",
          "text": "Xerox acquires the Tektronix Color Printing and Imaging Division, absorbing solid ink into the Phaser line."
        },
        {
          "period": "2009",
          "text": "Xerox launches the ColorQube solid-ink line."
        },
        {
          "period": "2016",
          "text": "Xerox winds down and discontinues solid-ink printers (first half of the year)."
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
      "section": "brands",
      "slug": "xerox"
    },
    {
      "section": "guides",
      "slug": "inkjet-printing"
    },
    {
      "section": "history",
      "slug": "evolution-of-color-printing"
    },
    {
      "section": "history",
      "slug": "evolution-of-inkjet-printers"
    },
    {
      "section": "guides",
      "slug": "how-inkjet-printers-work"
    },
    {
      "section": "glossary",
      "slug": "thermal-printing"
    }
  ],
  "faqs": [
    {
      "q": "What is solid ink printing?",
      "a": "Solid ink printing, also called phase-change or hot-melt printing, is a non-impact color technology that melts blocks of waxy, resin-based ink, jets the molten ink, and lets it re-solidify on a cooler surface such as a transfer drum and then paper."
    },
    {
      "q": "Who made solid ink printers?",
      "a": "The 1980s phase-change inkjet lineage runs through Exxon, Dataproducts, and Howtek. Tektronix commercialized office solid ink with its Phaser line from 1991, and Xerox — after acquiring Tektronix's color printing division in 2000 — produced the Phaser and ColorQube solid-ink families."
    },
    {
      "q": "Is solid ink printing still available?",
      "a": "No. Xerox wound down and discontinued its solid-ink (ColorQube) devices in the first half of 2016, and the office market shifted back to color laser and liquid inkjet. Solid ink is now a legacy technology."
    },
    {
      "q": "How is solid ink different from liquid inkjet?",
      "a": "Both jet ink from nozzles, but solid ink is melted from a solid block and freezes on contact with a cooler surface, forming an opaque layer on top of the paper, whereas liquid inkjet sprays liquid that dries or soaks into the page. Solid ink also resists drying during idle periods."
    }
  ],
  "sources": [
    {
      "title": "Solid ink",
      "url": "https://en.wikipedia.org/wiki/Solid_ink",
      "publisher": "Wikipedia"
    },
    {
      "title": "Xerox Phaser",
      "url": "https://en.wikipedia.org/wiki/Xerox_Phaser",
      "publisher": "Wikipedia"
    },
    {
      "title": "Dataproducts",
      "url": "https://en.wikipedia.org/wiki/Dataproducts",
      "publisher": "Wikipedia"
    },
    {
      "title": "US4593292A — Ink jet apparatus employing phase change ink melted as needed",
      "url": "https://patents.google.com/patent/US4593292",
      "publisher": "Google Patents / USPTO"
    },
    {
      "title": "US4682187A — Ink jet method and apparatus utilizing granular or hot melt ink",
      "url": "https://patents.google.com/patent/US4682187",
      "publisher": "Google Patents / USPTO"
    },
    {
      "title": "Breakthrough Xerox Multifunction Printer Cuts Cost of Color Pages (ColorQube launch, May 2009)",
      "url": "https://investors.xerox.com/news-releases/news-release-details/breakthrough-xerox-multifunction-printer-cuts-cost-color-pages",
      "publisher": "Xerox"
    },
    {
      "title": "Xerox rolls out pioneering ColorQube printer with crayon-like ink",
      "url": "https://betanews.com/2009/05/07/xerox-rolls-out-pioneering-colorqube-printer-with-crayon-like-ink/",
      "publisher": "BetaNews"
    },
    {
      "title": "Is Xerox Retiring Solid Ink?",
      "url": "https://industryanalysts.com/xerox-retiring-solid-ink/",
      "publisher": "Industry Analysts"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "solid ink printing",
    "phase-change printing",
    "hot-melt ink",
    "tektronix phaser",
    "xerox colorqube",
    "solid ink sticks",
    "non-impact color printing",
    "transfer drum printing",
    "howtek pixelmaster",
    "wax-based ink"
  ],
  "cluster": "printing-technology"
};

export default entry;
