import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "toner-composition",
  "title": "Toner Composition",
  "description": "Toner is the dry powder laser and LED printers fuse to paper — what it is made of, its main types, how it forms images, and its role in print quality.",
  "summary": "Toner is the fine, dry powder that electrophotographic (laser and LED) printers use to form images, in contrast to liquid inkjet ink. It is a formulated blend of a thermoplastic binder resin, a colorant or pigment, and functional additives that control the powder's electrostatic charge, flow, and fusing behavior. This reference explains what toner is made of, its main types, how it forms and fixes an image, and the standardized methods used to measure cartridge yield.",
  "difficulty": "intermediate",
  "estimatedTime": "9 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What toner is"
    },
    {
      "kind": "paragraph",
      "text": "Toner is the marking material of electrophotographic printing — the imaging process used by laser and LED printers and by the office copiers historically called xerographic machines. Unlike the liquid inks used in inkjet printing, toner is a dry, free-flowing powder made of extremely small solid particles. Each particle is a composite of a plastic binder and a colorant, engineered so that the powder can hold a precise electrostatic charge, be moved and metered by mechanical and magnetic forces, and then be melted onto the page."
    },
    {
      "kind": "paragraph",
      "text": "Because it is a powder rather than a liquid, toner is not absorbed into the paper the way ink can be. Instead it is deposited on the surface in the shape of the image and then fixed in place by heat and pressure — which is why pages leaving a laser printer are warm, and why toner and ink are not interchangeable between printer types."
    },
    {
      "kind": "paragraph",
      "text": "The consumable that stores, seals, and meters toner is the toner cartridge; the powder itself is the subject of this page. This reference describes what toner is and how it is composed in general terms, and cross-links the components and processes that handle it rather than repeating them."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What toner is made of"
    },
    {
      "kind": "paragraph",
      "text": "Toner is a formulated mixture rather than a single chemical. Its ingredients fall into a few functional groups:"
    },
    {
      "kind": "list",
      "items": [
        "Binder resin — a thermoplastic polymer that forms the bulk of each particle and melts under the fuser's heat to bond the image to the page. Polyester resins are common, and styrene-acrylate copolymers are another widely used binder family. A safety data sheet published by Xerox for one black toner lists polyester resin at roughly 40–55% of the product by weight.",
        "Colorant — the material that gives toner its color. Black toner is colored with carbon black or, in magnetic formulations, with iron oxide; color toners use cyan, magenta, and yellow pigments. The same Xerox sheet lists iron oxide at roughly 35–55% by weight, reflecting a magnetic black toner.",
        "Charge control agents — additives that help each particle take on a consistent electrostatic charge, which matters because the image is developed electrostatically.",
        "Wax — a release agent that helps molten toner let go of the hot fuser surface and reduces smearing and offset.",
        "External surface additives — very fine flow agents such as fumed silica and metal oxides (for example titanium dioxide) applied to the outside of the particles to keep the powder free-flowing, stabilize its charging, and prevent caking."
      ]
    },
    {
      "kind": "paragraph",
      "text": "HP's description of its electrophotographic cartridges notes that toner and its additives also act as a lubricant on the metering blade, helping to prevent streaks and noise — one illustration of how the additive package does more than color the page. No single formulation is universal: blends are tuned to a given printer's speed, charging behavior, and fusing temperature, so the exact ingredients and proportions vary by product."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Main types of toner"
    },
    {
      "kind": "paragraph",
      "text": "Toner is produced and formulated in several distinct ways:"
    },
    {
      "kind": "list",
      "items": [
        "Conventional (pulverized) versus chemically produced toner — Traditional toner is made by melt-mixing the ingredients into a solid and then grinding that solid into powder, which yields irregularly shaped particles. Chemically produced, or polymerized, toner is instead grown in a liquid process (such as emulsion aggregation or suspension polymerization) that produces smaller, rounder, more uniform particles. Polymerized toner is covered in depth on its own reference page.",
        "Single-component versus dual-component — The defining feature of single-component development is that no separate carrier beads are used. It comes in two forms: magnetic single-component toner contains its own magnetic material (iron oxide) so a magnetic developer roller can carry it directly, as in the HP mono cartridge design referenced here, while non-magnetic single-component toner carries no magnetic material and is instead held on the developer roller electrostatically by an elastic charging blade. Dual-component (two-component) developers mix toner with separate, reusable magnetic carrier beads that charge and transport it; how a machine handles each is covered on the developer unit page.",
        "Color sets — Color electrophotographic printers use cyan, magenta, yellow, and black toners, combined on the page to build the full-color image.",
        "Specialty toners — MICR toner is loaded with magnetic iron oxide so printed characters can be read by magnetic check-processing equipment, and liquid toner suspends very fine particles in a carrier fluid for use in some high-end digital presses. Both are described on their own pages."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How toner works and where it fits"
    },
    {
      "kind": "paragraph",
      "text": "Within an electrophotographic printer, toner is the material that turns an invisible electrostatic pattern into a visible, permanent image. In outline:"
    },
    {
      "kind": "list",
      "items": [
        "The powder is stored in the cartridge and kept aerated and free-flowing so it can move on demand.",
        "A metering blade spreads it into a thin, even layer and, through friction (tribocharging), gives it a uniform electrostatic charge.",
        "The developer unit carries the charged toner to the photoconductor drum, where it is attracted to the areas a laser or LED array has discharged, developing the latent image.",
        "The toner image is transferred electrostatically to the paper and then bonded permanently by the fuser unit using heat and pressure."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Each of those stages is handled by a dedicated component with its own reference page; this page concerns the powder that passes through them. What matters for the material itself is that toner is engineered to match the machine: it must take and hold charge fast enough to keep pace with the print speed, and it must soften at a controlled, relatively low temperature so the fuser can melt it without scorching the paper. Xerox's safety data sheet for one black toner reports a softening point in roughly the 49–60 °C (120–140 °F) range, which illustrates how low that softening threshold is compared with everyday materials; the fuser itself runs hotter to fully melt and bond the powder."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Toner's role in print quality"
    },
    {
      "kind": "paragraph",
      "text": "Because toner is both the coloring material and the medium that physically carries the image, its properties shape almost every aspect of output:"
    },
    {
      "kind": "list",
      "items": [
        "Particle size and uniformity influence how finely detail and edges can be rendered; smaller, more uniform particles can lay down thinner, smoother layers.",
        "Charge consistency determines how cleanly toner develops onto the image and stays off the background. Powder that charges unevenly can transfer too heavily, too lightly, or where it should not, contributing to density variation and background haze.",
        "Fusing behavior governs how durably the image bonds to the paper and how glossy it looks. Toner well matched to the fuser adheres firmly and resists rubbing, while a poor match can smear or flake.",
        "Flow and lubrication keep the metering and developing hardware working cleanly; as HP notes, the additive package helps prevent streaks and mechanical noise."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The hardware behind these effects, and the related failure modes, are discussed on the toner adhesion and fuser unit references. The key point here is that print quality is designed into the powder as much as into the mechanism."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Standardized yield and testing methods"
    },
    {
      "kind": "paragraph",
      "text": "How many pages a toner cartridge can print is not a single fixed number — it depends heavily on how much of each page is covered with toner. To let cartridges be compared fairly, the industry relies on standardized test methods rather than claims measured in different ways:"
    },
    {
      "kind": "list",
      "items": [
        "ISO/IEC 19752 defines the method for monochrome (black) toner cartridges.",
        "ISO/IEC 19798 defines the equivalent method for color toner cartridges.",
        "ISO/IEC 24711 is the analogous method for colour inkjet ink cartridges, while ISO/IEC 24712 defines the common colour test-page suite used by both the colour toner (19798) and colour inkjet (24711) yield methods; these are noted here only for contrast, since ink is a different consumable."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Each method specifies a standard set of test pages, default printer settings, a controlled temperature and humidity range, and the testing of several cartridges whose results are averaged, so that a declared \"yield\" is the output of a defined procedure rather than an isolated measurement. This page describes the framework only. It intentionally does not list any specific cartridge's rated yield, because such a figure is device- and model-specific and falls outside the scope of a materials reference."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Handling, safety, and storage"
    },
    {
      "kind": "paragraph",
      "text": "Toner is a fine powder, and the main practical considerations follow from that physical form rather than from chemical toxicity. Manufacturers' safety data sheets generally describe modern toner as not classified as hazardous under the U.S. OSHA Hazard Communication Standard and carrying no hazard signal word; the Xerox sheet examined here reports no known effects for eye, skin, inhalation, or ingestion under normal use, states that the product contains no listed carcinogen, and notes that it was not mutagenic in standard testing. Sensible, general precautions still apply to any fine dust:"
    },
    {
      "kind": "list",
      "items": [
        "Avoid creating dust clouds. Fine powder dispersed in air in high enough concentration, in the presence of an ignition source, is a potential dust-explosion hazard, as the safety data sheet notes for the material in bulk.",
        "Limit inhalation of airborne dust. Overexposure may cause mild respiratory irritation similar to nuisance dust, and the sheet cites published occupational exposure limits for total and respirable dust.",
        "Clean spills by sweeping or vacuuming into a suitable container rather than blowing the powder around, and wash affected skin with soap and water; as a general precaution, cool rather than warm water is often suggested, since the powder is designed to be heat-fusible.",
        "Store cartridges closed, at room temperature, in a dry, well-ventilated place."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Refilling or opening a cartridge exposes loose toner and should be approached with these dust precautions in mind. The specific procedures for refilling, and any repair, are matters for the cartridge or printer manufacturer's guidance rather than this reference, which does not provide step-by-step service instructions."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to adjacent consumables and components"
    },
    {
      "kind": "paragraph",
      "text": "Toner is best understood alongside the materials and parts it works with:"
    },
    {
      "kind": "list",
      "items": [
        "Versus ink — Toner is the dry-powder counterpart to liquid inkjet ink. Where toner is fused with heat, ink is a liquid that is absorbed by or bonded to the paper surface; the two are matched to entirely different print mechanisms and are not interchangeable. Ink chemistry is covered on the dye-based ink and pigment-based ink pages.",
        "The cartridge — The toner cartridge is the housing that stores, seals, and meters the powder; this page is about the material inside it.",
        "The delivery and imaging chain — The developer unit charges and carries toner, the photoconductor drum holds the latent image it develops onto, and the fuser unit melts it onto the page. Each of those components has its own reference.",
        "Specialized toners — Polymerized toner, MICR toner, and liquid toner are formulation-specific variants covered on their own pages."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Seen together, toner is the engineered powder at the center of the electrophotographic process — designed as much for how it charges, flows, and melts as for the color it lays down."
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This is a neutral technical reference describing this consumable and its general types and function. It is not a buying guide or service manual: it gives no specific page yields, capacities, prices, part numbers, compatibility lists, or refill/repair procedures, and anything requiring service should be handled per the manufacturer's guidance. The references consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "guides",
      "slug": "toner-cartridge"
    },
    {
      "section": "guides",
      "slug": "fuser-unit"
    },
    {
      "section": "guides",
      "slug": "polymerized-toner"
    },
    {
      "section": "guides",
      "slug": "developer-unit"
    },
    {
      "section": "guides",
      "slug": "photoconductor-drum"
    },
    {
      "section": "guides",
      "slug": "laser-printing"
    }
  ],
  "faqs": [
    {
      "q": "What is toner made of?",
      "a": "Toner is a formulated powder rather than a single chemical. Each particle is mostly a thermoplastic binder resin (commonly polyester or a styrene-acrylate copolymer) that melts to bond the image to paper, combined with a colorant — carbon black or iron oxide for black toner, and cyan, magenta, and yellow pigments for color toner. Smaller functional additives control the particle's electrostatic charge, act as a release wax during fusing, and keep the powder free-flowing."
    },
    {
      "q": "Is toner the same as ink?",
      "a": "No. Toner is a dry powder used by laser and LED (electrophotographic) printers and is fused to the page with heat and pressure, while ink is a liquid used by inkjet printers and is absorbed or bonded to the paper surface. They are matched to different print mechanisms and cannot be substituted for one another."
    },
    {
      "q": "Is toner powder harmful?",
      "a": "Manufacturers' safety data sheets generally classify modern toner as not hazardous under standard workplace regulations, with no known effects under normal use. As with any fine dust, sensible precautions still apply: avoid inhaling airborne powder or creating dust clouds — fine dust in high concentration near an ignition source is a potential explosion hazard — and clean spills by vacuuming or sweeping rather than blowing them around."
    },
    {
      "q": "How is toner cartridge yield measured?",
      "a": "Page yield is measured with standardized test methods so cartridges can be compared fairly: ISO/IEC 19752 for monochrome toner and ISO/IEC 19798 for color toner, with ISO/IEC 24711 the method for color inkjet ink and ISO/IEC 24712 the shared colour test-page suite used by both the color toner and color inkjet methods. Each method specifies standard test pages, default settings, controlled conditions, and averaging across several cartridges. The rated yield of any specific cartridge is device- and model-specific and is not listed here."
    },
    {
      "q": "What is polymerized toner?",
      "a": "Polymerized, or chemically produced, toner is grown in a liquid process rather than made by grinding a solid, which yields smaller, rounder, more uniform particles that can produce finer detail and smoother coverage. It is one of several formulation types and is covered in depth on its own reference page."
    }
  ],
  "sources": [
    {
      "title": "Original HP toner cartridge: A look inside (technical brief)",
      "url": "https://h20195.www2.hp.com/v2/GetPDF.aspx/4aa6-9403eew.pdf",
      "publisher": "HP Development Company"
    },
    {
      "title": "Safety Data Sheet: Toner Cartridge — Black (SDS #A-1030)",
      "url": "https://www.xerox.com/download/ehs/msds/A-1030.en-us.pdf",
      "publisher": "Xerox Corporation"
    },
    {
      "title": "ISO/IEC 19752:2017 — Method for the determination of toner cartridge yield for monochromatic electrophotographic printers",
      "url": "https://www.iso.org/standard/68555.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "ISO/IEC 19798:2017 — Method for the determination of toner cartridge yield for colour printers",
      "url": "https://www.iso.org/standard/64862.html",
      "publisher": "International Organization for Standardization"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "toner composition",
    "what toner is made of",
    "toner ingredients",
    "toner binder resin",
    "polyester toner resin",
    "carbon black toner",
    "magnetic toner iron oxide",
    "charge control agent",
    "polymerized toner",
    "electrophotographic toner",
    "toner page yield iso 19752",
    "toner powder safety"
  ],
  "cluster": "toner-technologies"
};

export default entry;
