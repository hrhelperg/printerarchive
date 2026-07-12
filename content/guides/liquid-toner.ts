import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "liquid-toner",
  "title": "Liquid Toner (Liquid Electrophotography)",
  "description": "Liquid toner, used in liquid electrophotography (LEP), is a marking material of charged pigment particles dispersed in an insulating carrier liquid.",
  "summary": "Liquid toner is an electrophotographic marking material in which finely divided, electrically charged pigment-and-resin particles are dispersed in an insulating liquid carrier, rather than existing as a dry powder like conventional toner. The process that uses it, liquid electrophotography (LEP), forms a latent image on a photoconductor, develops it with the liquid ink, and transfers a thin resin film to the substrate—often by way of a heated blanket. Because the particles are far smaller than dry toner, liquid toner is associated with thin image layers, sharp edges, and high effective resolution. It is best known today through HP's Indigo digital presses and their ElectroInk consumable.",
  "difficulty": "intermediate",
  "estimatedTime": "8 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What liquid toner is"
    },
    {
      "kind": "paragraph",
      "text": "Liquid toner is an electrophotographic (EP) marking material in which the colorant is carried as charged particles suspended in a liquid, rather than delivered as a free-flowing dry powder. As with dry toner, it is developed onto an electrically charged photoconductor and then fixed to the printed sheet—but the toner particles travel to the image in a fluid, not as airborne powder."
    },
    {
      "kind": "paragraph",
      "text": "The printing process built around this material is called liquid electrophotography (LEP). It shares the core physics of laser printing—uniform charging of a photoconductor, selective discharge by a laser to write a latent electrostatic image, and electrostatic development of charged colorant onto that image—but substitutes a liquid ink for dry toner and typically transfers the image as a thin, cohesive film. Because the marking material is at once ink-like (a pigment dispersed in a liquid) and toner-like (charged and developed electrostatically), it sits between the inkjet and dry-toner families and is described by both terms in the technical literature."
    },
    {
      "kind": "paragraph",
      "text": "This page describes the consumable and material itself. The hardware that charges the photoconductor and develops the image is covered on the component references, and the broader electrophotographic process is covered under laser printing; those are cross-referenced here rather than repeated."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Composition: particles in a carrier liquid"
    },
    {
      "kind": "paragraph",
      "text": "A liquid toner has two essential parts, plus additives that control charging:"
    },
    {
      "kind": "list",
      "items": [
        "A carrier liquid — a low-viscosity, high-electrical-resistivity (insulating) fluid, commonly an isoparaffinic hydrocarbon oil often called imaging oil. Its high resistivity is what lets the suspended particles hold and retain an electrostatic charge instead of that charge bleeding away through the fluid.",
        "Charged colorant particles — pigment encapsulated in a thermoplastic resin, carrying a controlled electrostatic charge.",
        "A charge director (charge-control additive) — sets the polarity and magnitude of the particle charge so the particles migrate predictably under an applied electric field."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The defining physical property is particle size. Published technical sources place dry toner roughly in the 6–20 micrometre range, while liquid-toner particles are far smaller—commonly cited from a few micrometres down to well below one micrometre (sub-micron). HP's Indigo ElectroInk, the most thoroughly documented liquid toner, is described with pigment particles on the order of one to two micrometres. This order-of-magnitude reduction in particle size is the root cause of most of liquid toner's print-quality behaviour."
    },
    {
      "kind": "paragraph",
      "text": "Some liquid inks are supplied as a concentrate and diluted with additional carrier fluid inside the press to reach working consistency. The exact handling of concentrate and carrier is system-specific and is not detailed here."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Types and where it is used"
    },
    {
      "kind": "paragraph",
      "text": "At the broadest level, electrophotographic toners divide into two families: dry toner (a powder—the material in most office laser printers and copiers) and liquid toner (particles in a carrier fluid). This library's toner-composition reference covers the dry-powder family in detail; liquid toner is the wet alternative."
    },
    {
      "kind": "paragraph",
      "text": "Within liquid electrophotography, the technology is most closely associated in current commercial printing with HP's Indigo digital press family, whose liquid ink is branded ElectroInk. Liquid-electrophotographic systems are generally offered with the process colours (cyan, magenta, yellow, black) and frequently with extended-gamut and specialty colorants—for example orange, violet and green to widen the gamut, plus specialty inks such as white and various security or effect inks—the exact set depending on the press."
    },
    {
      "kind": "paragraph",
      "text": "Liquid developers also have a long history in earlier electrophotographic and electrostatic copying and proofing systems, where fine particle size was valued for resolving detail. Because the material is a pigment dispersed in a liquid, it is sometimes grouped conceptually with pigment-based inks; the distinguishing factor is delivery. Inkjet inks are ejected through nozzles, whereas liquid toner is placed electrostatically onto a photoconductor. The cross-referenced ink pages cover the jetted-ink families."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works and where it fits in the print system"
    },
    {
      "kind": "paragraph",
      "text": "Liquid toner is consumed inside an electrophotographic imaging cycle:"
    },
    {
      "kind": "list",
      "items": [
        "Charging — a photoconductor (in Indigo systems, a reusable photo imaging plate, or PIP) is given a uniform electrostatic charge.",
        "Exposure — a laser selectively discharges the photoconductor to write a latent image, exactly as in dry laser printing.",
        "Development — instead of a dry developer dusting powder onto the latent image, liquid ink is metered onto the photoconductor by ink developer assemblies (in Indigo, binary ink developer units), building a thin liquid film of charged particles only where the latent image calls for them.",
        "Transfer and fixing — the developed image is transferred, frequently onto a heated intermediate blanket where the carrier fluid is driven off and the resin particles soften and coalesce into a continuous film; that film is then transferred to the substrate. Because a heated blanket carries an offset-like film to the paper, the process is often called \"digital offset.\""
      ]
    },
    {
      "kind": "paragraph",
      "text": "This differs from the dry-toner pipeline in an important way. Dry toner is transferred as a powder and then bonded to the paper in a separate fuser using heat and pressure; liquid toner's resin film is already made cohesive during the heated-blanket step, so there is no loose powder and no conventional powder-fusing stage. The photoconductor and the developer hardware are described on their own component pages; here it is enough to note that liquid toner is the material those components move and image."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Role in print quality"
    },
    {
      "kind": "paragraph",
      "text": "The small particle size of liquid toner has several consequences for the printed result:"
    },
    {
      "kind": "list",
      "items": [
        "Thin image layers. Because the particles are small and form a thin film, the printed layer can be very thin and closely follow the surface of the paper, giving a flatter, more offset-like feel than a raised dry-toner layer.",
        "Sharp edges and fine detail. Smaller particles resolve fine halftone dots, small text and thin lines more cleanly, supporting high effective resolution.",
        "Smooth tone and uniform gloss. A thin, coalesced film tends to produce even gloss and smooth tonal gradations across the sheet.",
        "Efficient colour layering. In full-colour work, thin per-colour films let multiple separations combine without building up excessive thickness in dark, high-coverage areas."
      ]
    },
    {
      "kind": "paragraph",
      "text": "These are the reasons liquid electrophotography has been favoured where photographic quality and an offset-like appearance matter. As with any marking material, the final result also depends on the imaging hardware, the substrate and the workflow—liquid toner is one contributor to print quality, not the sole determinant."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Standardized yield and testing framework"
    },
    {
      "kind": "paragraph",
      "text": "In the consumables world, \"yield\" refers to how much a cartridge can print, measured by a standardized method rather than a marketing estimate. The relevant international standards are:"
    },
    {
      "kind": "list",
      "items": [
        "ISO/IEC 19752 — the method for determining monochrome toner cartridge yield, based on continuously printing a defined test page (specified at approximately 5% coverage) until the cartridge reaches end of life.",
        "ISO/IEC 19798 — the equivalent method for colour toner cartridges.",
        "ISO/IEC 24711 — the method for ink cartridge yield in colour inkjet devices.",
        "ISO/IEC 24712 — the suite of standardized colour test pages used by the colour-toner and inkjet yield methods."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The value of these standards is that they fix the test conditions—page content, coverage and procedure—so that different products are measured the same way. Their scope should be stated plainly: they were written for cartridge-based desktop printers and multifunction devices, and they express results as a page count under a standardized page. Liquid-electrophotographic production presses generally do not report a single cartridge page-yield in this sense; their consumable use is more naturally described by coverage or printed area, and their inks are supplied and metered differently from a desktop cartridge. This reference therefore names the standardized methods but does not assign any specific page-yield, capacity or coverage figure to a liquid-toner product."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Handling, storage and environmental notes"
    },
    {
      "kind": "paragraph",
      "text": "Liquid toner and dry toner present different handling profiles, and in every case the governing document is the manufacturer's safety data sheet (SDS) for the specific product."
    },
    {
      "kind": "paragraph",
      "text": "Dry toner is a fine powder. Published SDS information for conventional dry toner describes it as generally low-hazard in normal use, with the main concerns being mild, nuisance-dust-type respiratory irritation from inhaling airborne powder and—as with many fine organic dusts—a potential dust-cloud combustion hazard if large amounts become airborne near an ignition source. Typical guidance is to avoid creating dust clouds, keep containers closed and stored dry at room temperature, and clean spills by sweeping or vacuuming rather than blowing."
    },
    {
      "kind": "paragraph",
      "text": "Liquid toner instead carries its colorant in a hydrocarbon-based carrier fluid, so its handling considerations are those of a liquid dispersion rather than a dust—for example avoiding skin and eye contact, ensuring ventilation, and disposing of the fluid and any used containers according to local regulations. Because carrier chemistry and concentrations vary by product, specific exposure limits, protective-equipment choices and disposal routes must be taken from the product SDS. This page provides general awareness only; it gives no refill, recharge or repair procedures, and anything requiring service or spill remediation beyond routine handling should follow the manufacturer's instructions."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to adjacent consumables and concepts"
    },
    {
      "kind": "paragraph",
      "text": "Liquid toner sits at the intersection of several material families, and is most useful to understand by contrast:"
    },
    {
      "kind": "list",
      "items": [
        "Versus dry toner. Both are electrophotographic toners developed onto a charged photoconductor, but dry toner is a powder fused by heat and pressure, while liquid toner is a fluid dispersion transferred as a thin film. See the toner-composition reference for the dry-powder side.",
        "Versus laser printing. Liquid electrophotography belongs to the electrophotographic process family described under laser printing; it uses the same charge, expose and develop logic with a liquid ink and a heated-blanket transfer.",
        "Versus inkjet inks. Liquid toner resembles a pigment-based ink in that pigment is dispersed in a liquid, but it is not jetted—it is placed by an electric field. The pigment-based-ink and inkjet references cover the jetted alternatives.",
        "Versus the imaging hardware. The photoconductor and the developer components physically charge and image the material; those are treated on their own component pages and are not duplicated here."
      ]
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
      "slug": "toner-composition"
    },
    {
      "section": "guides",
      "slug": "laser-printing"
    },
    {
      "section": "guides",
      "slug": "photoconductor-drum"
    },
    {
      "section": "guides",
      "slug": "developer-unit"
    },
    {
      "section": "guides",
      "slug": "pigment-based-ink"
    }
  ],
  "faqs": [
    {
      "q": "Is liquid toner the same as inkjet ink?",
      "a": "No. Both suspend colorant in a liquid, but they are delivered differently. Inkjet ink is ejected through nozzles onto the page, while liquid toner is charged and developed electrostatically onto a photoconductor as part of an electrophotographic cycle and then transferred to the substrate. In principle it is closer to laser-printer toner than to inkjet ink."
    },
    {
      "q": "How is liquid toner different from ordinary (dry) toner?",
      "a": "Dry toner is a free-flowing powder with particles commonly in the 6–20 micrometre range that is fused to paper with heat and pressure. Liquid toner suspends much smaller particles—often a few micrometres down to sub-micron—in an insulating carrier fluid, and its resin film is typically made cohesive on a heated blanket rather than in a powder-fusing step. The smaller particle size is the main reason liquid toner is associated with thin image layers and high resolution."
    },
    {
      "q": "Is HP Indigo ElectroInk a liquid toner?",
      "a": "Yes. ElectroInk is HP's liquid electrophotographic ink—charged pigmented resin particles dispersed in an isoparaffinic carrier liquid—used in the Indigo digital press family, which is the most widely documented commercial liquid-electrophotography system."
    },
    {
      "q": "Does liquid toner have an ISO page yield like a desktop cartridge?",
      "a": "The ISO/IEC page-yield standards (19752 for mono toner, 19798 for colour toner, 24711 for inkjet) were written for cartridge-based desktop printers and report a standardized page count. Liquid-electrophotographic production presses generally are not rated by a single cartridge page-yield figure; their consumable use is described differently. This reference names the standardized methods but does not assign specific yield numbers to any product."
    },
    {
      "q": "Why does liquid toner tend to look like offset printing?",
      "a": "Its very small particles form a thin film that closely follows the paper surface, and in systems such as Indigo that film is transferred from a heated blanket—an offset-like step. The result is a flat, thin ink layer with even gloss, which is why liquid electrophotography is often called \"digital offset.\""
    }
  ],
  "sources": [
    {
      "title": "HP Indigo LEP Technology",
      "url": "https://www.tappi.org/content/events/09papercon/papers/Field.pdf",
      "publisher": "TAPPI"
    },
    {
      "title": "The HP Indigo LEP / LEPX Technology & The Future of Digital Printing",
      "url": "https://www.hp.com/content/dam/hpi/press/press-kits/2020/pre-drupa-hp-portfolio-reveal/HP_IND_A4_LEPx_whitepaper.pdf",
      "publisher": "HP"
    },
    {
      "title": "HP Indigo Digital Press: Complete Overview",
      "url": "https://www.hp.com/us-en/shop/tech-takes/hp-indigo-press-overview",
      "publisher": "HP"
    },
    {
      "title": "ISO/IEC 19752, 19798, 24711 and 24712 — consumable page-yield test methods and the colour test-page suite",
      "url": "https://www.iso.org/",
      "publisher": "ISO/IEC"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "liquid toner",
    "liquid electrophotography",
    "lep",
    "electroink",
    "hp indigo",
    "electrophotographic printing",
    "digital offset",
    "carrier liquid",
    "pigment particles",
    "dry toner vs liquid toner",
    "toner composition",
    "imaging oil"
  ],
  "cluster": "toner-technologies"
};

export default entry;
