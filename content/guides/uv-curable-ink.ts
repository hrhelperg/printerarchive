import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "uv-curable-ink",
  "title": "UV-Curable Ink",
  "description": "UV-curable ink is a printing ink that hardens by UV-triggered photopolymerization instead of drying, letting it bond to non-porous substrates with low VOCs.",
  "summary": "UV-curable ink is a printing ink whose reactive monomers, oligomers, and photoinitiators cross-link into a solid film under ultraviolet light rather than drying by evaporation or absorption. Because almost nothing evaporates, it is a solvent-free or high-solids material that cures in place within a fraction of a second and bonds to non-porous substrates such as plastic, glass, and metal. It is used mainly in wide-format and industrial inkjet, where a brief pinning exposure fixes each dot on landing and a final cure hardens the film for abrasion and chemical resistance. Handling hazards apply to the uncured liquid, so the supplier's Safety Data Sheet governs its use.",
  "difficulty": "intermediate",
  "estimatedTime": "9 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What UV-curable ink is"
    },
    {
      "kind": "paragraph",
      "text": "UV-curable ink (also called UV ink, energy-curable ink, or radiation-curable ink) is a printing ink that solidifies by photopolymerization rather than by evaporation or absorption. Instead of a liquid carrier such as water or solvent that has to leave the film, the fluid is composed largely of reactive materials that, on exposure to ultraviolet light, cross-link into a solid polymer film in place. When the printed layer passes under a UV source, photoinitiators in the formulation absorb the radiation and trigger a rapid polymerization reaction that converts the wet ink into a cured solid, typically within a fraction of a second."
    },
    {
      "kind": "paragraph",
      "text": "Because effectively none of the ink evaporates, most of what is deposited becomes part of the final film. This makes UV ink a solvent-free or high-solids material: it contains little or no volatile carrier, and it does not depend on a drying oven or on air-drying time. That property, more than any single ingredient, is what distinguishes it from water-based and solvent inks and explains why it is chosen where fast, low-emission curing on non-absorbent surfaces is needed."
    },
    {
      "kind": "paragraph",
      "text": "This page describes the ink as a material — what it is made of, how it cures, and how it affects print quality. The hardware that jets and cures it, and the broader printing processes that use it, are covered on their own pages (see the cross-links below); this reference does not duplicate them."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Composition"
    },
    {
      "kind": "paragraph",
      "text": "UV-curable ink is a blend of reactive and non-reactive components. The reactive part is what polymerizes; the rest gives the ink its color and working properties. Typical constituents include:"
    },
    {
      "kind": "list",
      "items": [
        "Oligomers (also called prepolymers or resins): moderately low-molecular-weight, usually acrylated backbones that carry reactive groups. The oligomer choice largely determines the cured film's mechanical and chemical properties — hardness, flexibility, adhesion, and chemical resistance.",
        "Reactive monomers (reactive diluents): smaller molecules that lower the viscosity of the uncured ink so it can be applied or jetted, and that participate in the cure. Monofunctional monomers carry a single reactive site; multifunctional monomers carry two or more and form cross-links between oligomer chains, building a three-dimensional network. Adjusting the monomer-to-oligomer ratio is one of the main ways formulators tune viscosity and cured-film behavior.",
        "Photoinitiators: the light-sensitive component. On absorbing UV energy they generate the reactive species — free radicals or cations — that start the polymerization. They are a minor fraction of the formulation but are essential to UV cure.",
        "Colorants: pigments that provide color and opacity. Because the cured layer is a cross-linked solid, UV inks are generally pigment-based rather than dye-based.",
        "Additives: small quantities of surfactants, dispersants, stabilizers, and polymerization inhibitors that control surface wetting, keep pigment dispersed, and prevent premature curing during storage."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The reactive monomers and oligomers together make up the bulk of the fluid, colorant a smaller portion, and photoinitiator and additives smaller still. Exact proportions vary widely by product and are not specified here."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Types and curing mechanisms"
    },
    {
      "kind": "paragraph",
      "text": "UV inks are grouped both by the chemistry that cures them and by the light source used."
    },
    {
      "kind": "paragraph",
      "text": "By cure chemistry:"
    },
    {
      "kind": "list",
      "items": [
        "Free-radical systems are the most common. They typically use acrylate chemistry: the photoinitiator produces free radicals that rapidly chain-polymerize the acrylate monomers and oligomers. They cure very fast but can be inhibited by atmospheric oxygen at the surface.",
        "Cationic systems use photoinitiators that generate acidic (cationic) species to polymerize epoxide or vinyl-ether chemistry. They are a smaller share of UV chemistry and are chosen when properties such as low shrinkage, strong adhesion, or a continued cure after the light is removed are wanted; they are less oxygen-sensitive but more sensitive to humidity."
      ]
    },
    {
      "kind": "paragraph",
      "text": "By light source:"
    },
    {
      "kind": "list",
      "items": [
        "Conventional mercury-vapor lamps (arc or microwave-driven) emit a broad band of UV together with substantial infrared. Only part of that output is used for curing, and much of the rest appears as heat.",
        "UV-LED sources emit a narrow band in the UVA region (commonly around 365 to 405 nm) and little infrared. They switch on and off instantly, run cooler, and allow curing on heat-sensitive films and thin substrates that would warp under a hot mercury lamp. Moving an ink from mercury lamps to UV-LED generally requires reformulating it with photoinitiators matched to the LED wavelengths."
      ]
    },
    {
      "kind": "paragraph",
      "text": "UV inks are also formulated for specific hardware and substrates — for example flatbed and roll-to-roll wide-format inkjet, and various industrial and label presses. This page treats the material class in general rather than any one product line."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works and where it fits"
    },
    {
      "kind": "paragraph",
      "text": "In an inkjet system, UV ink is stored and fed by an ink delivery system and ejected as drops by the printhead — most often a piezoelectric head, because UV inks are not designed for the heating used in thermal inkjet and because piezo heads can handle their viscosity and be temperature-controlled. Once drops land on the substrate they stay liquid until exposed to UV, which gives the process a distinctive two-stage curing sequence:"
    },
    {
      "kind": "list",
      "items": [
        "Pinning: a brief, low-intensity UV exposure immediately after jetting \"freezes\" each dot so it stops spreading, fixing dot size and preventing colors from bleeding into one another.",
        "Curing: a later, higher-intensity exposure fully polymerizes the layer into its final solid film."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Because the ink cures in place and does not need to soak in or evaporate, it can be printed on non-absorbent and non-porous materials — plastics, glass, metal, coated boards, films, and rigid panels — where water- and solvent-based inks would struggle to dry or adhere. This is the niche UV ink occupies among wide-format and industrial inks: it sits alongside solvent and latex inks as an option for non-porous substrates, but it is defined by cure-on-demand polymerization rather than by solvent evaporation or polymer coalescence. The jetting hardware, the curing lamps, and the printing process itself are described on their own pages; the point here is that the ink is a reactive fluid whose \"drying\" is a light-driven chemical reaction."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Role in print quality"
    },
    {
      "kind": "paragraph",
      "text": "Because the cured layer is a cross-linked polymer rather than a residue left by evaporation, UV ink tends to produce a tough, well-bonded film. Its contributions to print quality and durability include:"
    },
    {
      "kind": "list",
      "items": [
        "Abrasion, scratch, and chemical resistance: the cross-linked network resists rubbing and many solvents once fully cured, which supports outdoor signage, packaging, and industrial marking.",
        "Adhesion to difficult substrates: with the right formulation — pigment dispersion, rheology, and adhesion promoters — the film can bond directly to plastics, metal, and glass.",
        "Dot control and sharpness: pinning fixes dot geometry the instant ink lands, limiting dot gain and color-to-color bleed and helping hold fine detail and clean edges.",
        "Gloss and finish control: formulation and cure conditions can yield finishes from matte to high gloss, and the film can be built up to a tactile thickness for effects that thin evaporative inks cannot achieve."
      ]
    },
    {
      "kind": "paragraph",
      "text": "There are trade-offs that also affect quality. Cure has to be matched to the ink and substrate: under-curing leaves a film that is soft, tacky, poorly adhered, and chemically more reactive, while the relatively high film build and hardness can crack on highly flexible substrates unless the formulation is designed for flexibility. Colorfastness, opacity, and adhesion therefore depend as much on delivering the correct curing energy as on the ink itself."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Standardized testing and the yield framework"
    },
    {
      "kind": "paragraph",
      "text": "Consumable \"yield\" is normally reported through standardized test methods so that different products can be compared on a common basis. For office printers those methods are defined by ISO/IEC standards: ISO/IEC 19752 for monochrome toner cartridges, which uses its own single test page, while ISO/IEC 19798 (color toner cartridges) and ISO/IEC 24711 (color inkjet cartridges) both use the shared color test-page suite defined in ISO/IEC 24712. Each specifies a fixed test document, environment, and procedure, and expresses yield as the number of standard pages a cartridge produces under that method — a controlled figure, not a promise about any particular job."
    },
    {
      "kind": "paragraph",
      "text": "That framework was built around office cartridges printing a standard page on plain paper. UV-curable inks are used mainly in wide-format and industrial inkjet on non-paper substrates, where ink coverage, drop volume, and substrate vary enormously and where the office page-yield standards were not designed to apply. For that reason no page-yield number is quoted here. The useful idea to carry over is the general one — that a yield figure is only meaningful when it is tied to a defined, standardized method — rather than any specific value."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Handling, safety, and environmental notes"
    },
    {
      "kind": "paragraph",
      "text": "The safety profile of UV ink changes completely at the moment of cure, so uncured and cured ink must be treated as different materials."
    },
    {
      "kind": "list",
      "items": [
        "Uncured ink: the reactive monomers, oligomers, and photoinitiators in the liquid can irritate skin and eyes, and repeated skin contact with uncured acrylate chemistry can cause skin sensitization (allergic contact dermatitis) that may persist. Uncured ink should be handled with the skin and eye protection and ventilation the supplier specifies, and misting or spills kept off the skin.",
        "Cured film: once fully polymerized and locked into a solid, the film is generally far less reactive and is the intended stable end state.",
        "Curing equipment: UV sources emit radiation that is hazardous to eyes and skin, and mercury lamps additionally produce heat and can generate ozone, whereas UV-LED systems avoid mercury and run cooler. These are operational matters handled through equipment guarding and the manufacturer's instructions.",
        "Environmental: because UV inks are solvent-free or high-solids, they emit little or no volatile organic compounds (VOCs) or hazardous air pollutants and do not require drying ovens, a frequently cited advantage over solvent inks. Mercury-lamp systems raise a mercury-disposal consideration that UV-LED systems avoid."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Specific hazard classifications, exposure limits, and first-aid and disposal steps vary by product and are set out in each ink's Safety Data Sheet; that document and the manufacturer's guidance are the authority. This reference does not provide refill, mixing, or repair procedures — those should be left to the manufacturer's instructions."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to adjacent inks and components"
    },
    {
      "kind": "paragraph",
      "text": "UV-curable ink is best understood alongside the other consumables and components it works with."
    },
    {
      "kind": "list",
      "items": [
        "Versus other wide-format inks: solvent and latex inks also print on non-porous substrates, but they form a film by solvent evaporation or by heat-driven polymer coalescence, whereas UV ink polymerizes on demand under light. Compared with dye- and pigment-based aqueous inks, UV ink is a reactive, pigment-carrying fluid rather than a colorant dissolved or dispersed in a water carrier; the general colorant distinction is covered on the pigment-based-ink page.",
        "Versus the hardware: the ink is only the material. It is fed by the ink delivery system and ejected by the inkjet printhead (typically piezoelectric), and it is laid down by the inkjet printing process. Those pages cover the mechanics of supply, jetting, and printing; this page covers the fluid itself.",
        "A handling link worth noting: because UV ink stays liquid until light reaches it, stray light or heat around the printhead can begin curing ink inside the nozzles, a failure mode related to nozzle-clogging. This is one reason UV inkjet systems shield the ink path from the curing lamps."
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
      "slug": "latex-ink"
    },
    {
      "section": "guides",
      "slug": "solvent-ink"
    },
    {
      "section": "guides",
      "slug": "pigment-based-ink"
    },
    {
      "section": "guides",
      "slug": "inkjet-printing"
    },
    {
      "section": "guides",
      "slug": "inkjet-printhead"
    },
    {
      "section": "guides",
      "slug": "ink-delivery-system"
    }
  ],
  "faqs": [
    {
      "q": "How does UV-curable ink dry?",
      "a": "It does not dry in the usual sense. Instead of losing a liquid carrier to evaporation or absorption, it cures: photoinitiators in the ink absorb ultraviolet light and trigger the monomers and oligomers to cross-link into a solid polymer film, typically within a fraction of a second of exposure. Because effectively none of the ink evaporates, most of what is jetted becomes the final film."
    },
    {
      "q": "What is the difference between free-radical and cationic UV inks?",
      "a": "They differ in the chemistry the photoinitiator sets off. Free-radical inks, the more common type, use acrylate chemistry and cure very fast but can be surface-inhibited by oxygen. Cationic inks generate acidic species to polymerize epoxide or vinyl-ether chemistry; they are less oxygen-sensitive and can keep curing briefly after the light is removed, but are more sensitive to humidity. Free-radical systems make up the large majority of UV chemistry."
    },
    {
      "q": "Why are UV inks used for printing on plastic, glass, and metal?",
      "a": "Because they cure by light rather than by soaking in or evaporating, UV inks can form a solid film on non-absorbent and heat-sensitive surfaces where water- or solvent-based inks would struggle to dry or adhere. With appropriate formulation the cured film bonds directly to the substrate and resists abrasion and many chemicals. This is why UV ink is common in wide-format, industrial, and label printing."
    },
    {
      "q": "Is UV-curable ink hazardous?",
      "a": "The hazard is mainly in the uncured liquid. Reactive monomers, oligomers, and photoinitiators can irritate skin and eyes, and repeated skin contact with uncured acrylate ink can cause skin sensitization that may persist. Once fully cured into a solid film the ink is generally far less reactive. Specific classifications and precautions vary by product and are set out in the ink's Safety Data Sheet, which is the authority; this page gives no refill or repair procedures."
    },
    {
      "q": "What changed with UV-LED curing compared with mercury lamps?",
      "a": "UV-LED lamps emit a narrow band of UVA and very little infrared, so they run cooler and switch on and off instantly, allowing printing on heat-sensitive films and thin substrates that a hot mercury lamp could warp. Mercury lamps emit a broader UV range plus substantial heat and contain mercury. Moving an ink from mercury to LED curing usually requires reformulating it with photoinitiators matched to the LED wavelengths."
    }
  ],
  "sources": [
    {
      "title": "The UV & EB Curing Process",
      "url": "https://radtech.org/the-uv-eb-curing-process/",
      "publisher": "RadTech International North America"
    },
    {
      "title": "UV Curing Science",
      "url": "https://www.gewuv.com/uv-curing-science/",
      "publisher": "GEW (EC) Limited"
    },
    {
      "title": "Radiation Cured Coatings: Types, Features & Composition",
      "url": "https://www.specialchem.com/coatings/guide/ultraviolet-led-eb-radiation-cured-coatings",
      "publisher": "SpecialChem"
    },
    {
      "title": "Monomers and Oligomers for UV/EB Energy Curing",
      "url": "https://allnex.com/getmedia/145635ca-d1b8-49f2-aa52-759109217aa5/Customer-Summit_UV101_Monomers-And-Oligomers-_allnex_Radcure_2021.pdf?ext=.pdf",
      "publisher": "allnex"
    },
    {
      "title": "New developments and inkjet applications of UV-LED curable inks",
      "url": "https://www.sciencedirect.com/science/article/pii/S2949822825006859",
      "publisher": "Elsevier (ScienceDirect)"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "uv-curable ink",
    "uv ink",
    "photoinitiator",
    "oligomer",
    "reactive monomer",
    "free-radical curing",
    "cationic curing",
    "uv-led curing",
    "wide-format inkjet ink",
    "energy-curable ink",
    "photopolymerization",
    "pigment-based uv ink"
  ],
  "cluster": "ink-technologies"
};

export default entry;
