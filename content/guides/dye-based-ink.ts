import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "dye-based-ink",
  "title": "Dye-Based Ink",
  "description": "Dye-based ink is an inkjet consumable in which a soluble colorant is dissolved in a liquid vehicle, giving vivid, saturated color that absorbs into the media.",
  "summary": "Dye-based ink is a liquid inkjet consumable whose colorant is a soluble dye dissolved molecularly in a carrier fluid — most often water together with co-solvents — so that the ink forms a true solution rather than a dispersion of solid particles. Because the colorant is dissolved, dye inks jet cleanly through fine nozzles, absorb into the media, and can render highly saturated color across a wide gamut, though they are generally less water-resistant and less lightfast than pigment inks. This reference describes the material itself — its composition, colorant types, function, and role in print quality — and links out to the cartridge and delivery hardware that store and feed it, the printhead and inkjet process that place it, and the standardized ISO/IEC framework by which cartridge yield is defined. It deliberately gives no specific yields, capacities, lifespans, prices, part numbers, or refill procedures.",
  "difficulty": "intermediate",
  "estimatedTime": "10 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What dye-based ink is"
    },
    {
      "kind": "paragraph",
      "text": "Dye-based ink — often shortened to dye ink — is a liquid inkjet ink whose colorant is a dye: a soluble, molecular colorant that is fully dissolved in a liquid vehicle to form a true solution. This is the defining contrast with its counterpart material. In a dye ink the colorant exists as individual molecules in the liquid phase, whereas in a pigment ink the colorant is a set of solid, insoluble particles held in suspension. General references on ink describe pigments as solid, opaque particles suspended in the fluid, while dye colorants are dissolved in the liquid phase — a distinction that drives almost every practical difference between the two families."
    },
    {
      "kind": "paragraph",
      "text": "This page is about the consumable substance itself, not the machinery that handles it or the physics that places it on paper. The cartridge or tank that stores the fluid is covered by the ink cartridge and ink delivery system references; the component that ejects it as drops is the inkjet printhead; and the process by which those drops are laid down is described on the inkjet printing pages. Here the subject is simply the ink: what it is made of, the kinds of dye it can carry, how it behaves as a fluid and a colorant, and how those properties shape the printed result."
    },
    {
      "kind": "paragraph",
      "text": "Dye-based ink is best understood alongside pigment-based ink, its parallel material. Together, aqueous dye inks and aqueous pigment inks are the two principal water-borne colorant families used in consumer and office inkjet printing, and much of what can be said about one is framed by comparison with the other."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Composition and formulation"
    },
    {
      "kind": "paragraph",
      "text": "An aqueous dye ink is a balanced chemical formulation rather than a simple mixture of colorant and water. The descriptions below stay at the level of general function; no recipes, proportions, or numeric parameters are given, because those are formulation- and vendor-specific. In broad terms, general references on ink chemistry describe a water-based dye ink as bringing together the following kinds of ingredient:"
    },
    {
      "kind": "list",
      "items": [
        "Colorant — the soluble dye, usually an organic compound, that provides the color and is dissolved molecularly in the vehicle.",
        "Vehicle or carrier — the liquid the colorant is dissolved in; in aqueous inks this is predominantly water, which also acts as the main solvent.",
        "Humectants and co-solvents — water-miscible liquids such as glycols and glycerol that slow evaporation, help keep the ink from drying and crusting at the nozzle during idle periods, and support redissolving.",
        "Surfactants and wetting agents — additives that set the surface tension so drops form cleanly at the nozzle and the ink wets the media appropriately.",
        "Penetrants — agents that influence how quickly and how deeply the ink is absorbed into the paper.",
        "Biocides or antimicrobials — preservatives that inhibit microbial growth in a water-based fluid during storage.",
        "Buffering agents and sequestrants — additives that hold the pH within a working range and manage dissolved metal ions that could otherwise affect stability."
      ]
    },
    {
      "kind": "paragraph",
      "text": "These ingredients are chosen to work with a specific printhead technology and media, so a dye ink is engineered as a system rather than a generic liquid. Non-aqueous ink families — solvent, UV-curable, and latex inks — use entirely different vehicles and chemistries and are documented separately; dye colorants are most closely associated with the aqueous inks described here, although the term \"dye\" refers to the colorant's solubility, not to any single vehicle."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Colorant types and ink variants"
    },
    {
      "kind": "paragraph",
      "text": "Dye-based inks can be categorized both by the class of dye they carry and by how those colorants are combined into an ink set. Because dyes are soluble colorants borrowed in large part from the chemistry of textile and paper dyeing, general references note that several dye classes appear in ink formulation, selected for solubility, hue, and fastness:"
    },
    {
      "kind": "list",
      "items": [
        "Acid dyes — water-soluble dyes that carry acidic (anionic) groups.",
        "Direct dyes — water-soluble dyes designed to have affinity for cellulose fibers without a separate fixing step.",
        "Reactive dyes — dyes able to form chemical bonds with the substrate, associated with more durable coloration.",
        "Disperse dyes — largely water-insoluble colorants used as fine dispersions; these are the colorants associated with dye-sublimation and are covered by the sublimation ink and dye-sublimation printing references, where the dye transfers into a substrate under heat."
      ]
    },
    {
      "kind": "paragraph",
      "text": "By ink set, dye inks are most commonly built around the cyan, magenta, yellow, and black process colors, sometimes with additional lighter or supplementary colorants intended to smooth tonal gradations and extend the reproducible gamut. Some printer designs also combine colorant families — for example pairing a more durable colorant for text with dye colorants for the color channels — so \"dye ink\" describes the color inks in such a system rather than necessarily every channel. Which colorant class and ink set a given product uses is a design choice; this page describes the options in general and makes no claims about any specific cartridge."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How dye ink works and where it fits in the system"
    },
    {
      "kind": "paragraph",
      "text": "As a fluid, a dye ink is a low-viscosity solution, which lets it be metered and driven through the very fine nozzles of an inkjet printhead. The storage and pressure-controlled feeding of that fluid belong to the ink cartridge and ink delivery system, and the ejection of individual drops belongs to the inkjet printhead; this reference does not restate that hardware behavior. What matters here is how the material behaves as a colorant once it reaches the page."
    },
    {
      "kind": "paragraph",
      "text": "Because the colorant is dissolved at the molecular level, a dye ink contains no solid particles to scatter light or to settle out of suspension over time. When a drop lands, the fluid penetrates and is absorbed into the media, and the dye molecules lodge within — or, with some dye classes, bond to — the fibers or the receiving coating. Color then forms by the selective absorption of light by those dye molecules. General references note that dye-based colorants are typically strong for their mass, able to produce a large amount of color per unit of colorant, which is part of why dye inks are associated with intense, saturated results."
    },
    {
      "kind": "paragraph",
      "text": "The boundary between this page and its neighbors is deliberate. Drop formation and firing are described on the inkjet process pages; storage, filtration, and pressure regulation are described on the component pages; and the defect behavior of blocked nozzles is described on the nozzle clogging page. This reference stays with the ink as a substance — its makeup, its colorant chemistry, and the print qualities that follow from being a dissolved colorant."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Role in print quality"
    },
    {
      "kind": "paragraph",
      "text": "Dye-based ink is one contributor to print quality among several; the media, the printhead, the ink set, and the color-management pipeline all act together, so the points below are general relationships rather than isolated or numeric claims."
    },
    {
      "kind": "list",
      "items": [
        "Saturation and gamut — because dye colorant is strong for its mass and free of light-scattering particles, dye inks are associated with vivid, highly saturated color and, on suitable media, a wide reproducible gamut.",
        "Smoothness on coated and photo media — on receiving layers engineered for them, dye inks can lay down even tones and smooth gradients.",
        "Behavior on plain paper — because the fluid absorbs into the sheet, on uncoated stock a dye ink can spread along the paper fibers, which is seen as feathering or bleeding at edges; this defect is discussed on the ink bleeding page and is one reason coated media exist.",
        "Water sensitivity — a soluble colorant can re-wet, so dye prints are generally more prone to smearing or running when exposed to water or humidity than prints made with insoluble pigment particles.",
        "Lightfastness — lightfastness describes a colorant's resistance to fading under light, and fading occurs as light exposure — particularly ultraviolet, but also visible wavelengths — breaks down the molecules responsible for color through photodegradation and photo-oxidation. Organic, molecularly dispersed dye colorants are generally more susceptible to this than pigments, so dye prints tend to be less lightfast; the trade-off against pigment durability is covered on the pigment-based ink page.",
        "Media dependence — much of a dye ink's practical quality depends on a matching receiving layer designed to fix the dye quickly and limit spread, so ink and media are best considered as a pair."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Standardized yield and permanence testing"
    },
    {
      "kind": "paragraph",
      "text": "The idea of a cartridge \"yield\" is meaningful only as a standardized-method concept: a figure produced by running a defined test under controlled conditions, not an inherent property of the ink. The relevant framework for color inkjet is a pair of international standards. ISO/IEC 24711 specifies a method for determining the page yield of ink cartridges for color inkjet printers and multi-function devices, and ISO/IEC 24712 defines the suite of color test pages used in that measurement. In outline, the method prints the standardized page suite on plain paper under a controlled environment using default settings, runs a number of cartridges to end of life, and reports an average predicted yield within statistically defined bounds."
    },
    {
      "kind": "paragraph",
      "text": "This reference names those methods but states no specific yield figure, capacity, or lifespan for any cartridge, because such values are device- and product-specific and are exactly the kind of claim this page avoids. The electrophotographic side has its own analogous standards — ISO/IEC 19752 for monochrome toner and ISO/IEC 19798 for color toner — which are discussed on the toner pages rather than here."
    },
    {
      "kind": "paragraph",
      "text": "Permanence is assessed by a separate family of tests. Lightfastness — resistance to fading under light — is characterized on scales such as the Blue Wool Scale and by ISO 105 color-fastness standards, which rate colorants from very fugitive to very stable. These frameworks provide the vocabulary for comparing the durability of dye and pigment colorants without this page having to assert any particular rating."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Handling, storage, and environmental notes"
    },
    {
      "kind": "paragraph",
      "text": "The notes here are general. A dye-based ink is a chemical product, and the manufacturer's Safety Data Sheet (SDS) and product guidance are the authoritative source for any specific handling, first-aid, storage, or disposal information."
    },
    {
      "kind": "list",
      "items": [
        "Staining — dye inks are strong, penetrating colorants and readily stain skin, clothing, and surfaces; spills should be contained and cleaned promptly.",
        "Exposure — aqueous inks contain solvents and preservatives, so contact with skin and eyes and any ingestion should be avoided, and hands washed after handling; follow the SDS for the specific product.",
        "Storage — keep containers and cartridges sealed and stored as the manufacturer directs, away from excessive heat, freezing, and direct sunlight, all of which can degrade a water-based fluid or its colorant.",
        "Refilling and service — refilling or otherwise handling loose ink carries staining and chemical-exposure hazards, and any such handling should follow the manufacturer's guidance; this page gives no step-by-step refill or repair procedure, and anything requiring service should be referred to the manufacturer.",
        "Disposal and recycling — used ink and empty cartridges should be disposed of, or returned for recycling, according to the product's instructions and local regulations."
      ]
    },
    {
      "kind": "paragraph",
      "text": "This is a descriptive reference, not a service manual or buying guide. It describes what the material is and why it behaves as it does, but it does not instruct on maintenance or repair."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to adjacent concepts and pages"
    },
    {
      "kind": "paragraph",
      "text": "Dye-based ink sits within a cluster of related topics, each of which has its own page so that this reference can stay focused on the material itself."
    },
    {
      "kind": "list",
      "items": [
        "Pigment-based ink — the counterpart colorant material, in which insoluble particles are suspended rather than dissolved. The two pages are best read together, since dye and pigment inks are defined largely by contrast.",
        "Ink cartridge and ink delivery system — the hardware that stores the fluid and feeds it, under controlled pressure and free of air and debris, to the head. This page describes the ink; those pages describe how it is contained and conveyed.",
        "Inkjet printhead — the component that ejects the ink as drops. Dye ink's low-viscosity, particle-free nature is well suited to fine nozzles; the ejection physics belongs to that page.",
        "Inkjet printing — the system-level process overview, which this material page supports rather than duplicates.",
        "Dye-sublimation printing and sublimation ink — the disperse-dye relatives, where a dye is transferred into a substrate by heat rather than absorbed as a liquid.",
        "Nozzle clogging — the defect that can arise when any ink, including a dye ink, dries or thickens at the nozzle; this page provides the material context while the defect itself is covered there."
      ]
    },
    {
      "kind": "paragraph",
      "text": "By design, hardware behavior stays on the component pages, drop-formation and transfer physics stay on the process pages, and the composition, colorant chemistry, and print-quality role of the ink stay here."
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
      "slug": "pigment-based-ink"
    },
    {
      "section": "guides",
      "slug": "ink-cartridge"
    },
    {
      "section": "guides",
      "slug": "inkjet-printing"
    },
    {
      "section": "guides",
      "slug": "sublimation-ink"
    },
    {
      "section": "guides",
      "slug": "ink-delivery-system"
    },
    {
      "section": "guides",
      "slug": "nozzle-clogging"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between dye-based ink and pigment-based ink?",
      "a": "The difference is how the colorant is carried. In a dye-based ink the colorant is a soluble dye dissolved molecularly in the liquid, forming a true solution; in a pigment-based ink the colorant is solid, insoluble particles held in suspension. That single distinction drives the practical trade-offs: dye inks tend to give vivid, saturated color and absorb into the media, while pigment inks tend to be more water-resistant and more lightfast. Both are described in more detail on their respective material pages."
    },
    {
      "q": "Is dye-based ink waterproof or fade-resistant?",
      "a": "Generally less so than pigment ink. Because a dye is a soluble colorant, dye prints are more prone to smearing or running when exposed to water or humidity, and because dye colorants are organic molecules that light — particularly ultraviolet, but also visible wavelengths — can break down through photodegradation, they tend to be less lightfast and to fade sooner than pigment colorants. Lightfastness is characterized by scales such as the Blue Wool Scale and ISO 105 standards. Actual durability also depends heavily on the media and storage conditions, so this page states no specific ratings."
    },
    {
      "q": "Why does dye-based ink produce such vivid color?",
      "a": "Because the colorant is dissolved at the molecular level, a dye ink has no solid particles to scatter light, and general references note that dye colorants are strong for their mass — able to produce a large amount of color per unit of colorant. Combined with the ink absorbing into a matched receiving layer, this supports the intense, saturated results dye inks are associated with. The color still depends on the media and the color-management pipeline working together."
    },
    {
      "q": "How is the page yield of a dye-ink cartridge measured?",
      "a": "Through standardized methods, not a fixed property of the ink. ISO/IEC 24711 defines a method for determining ink cartridge page yield for color inkjet printers, and ISO/IEC 24712 defines the color test-page suite used, printed under controlled conditions with default settings across multiple cartridges run to end of life to produce an average predicted yield. This reference names the framework but gives no specific yield number for any cartridge, since such values are product-specific."
    },
    {
      "q": "Can dye ink and pigment ink be used interchangeably?",
      "a": "No. A dye ink and a pigment ink are engineered as systems for a specific printhead and media, and they differ in colorant, vehicle, and physical behavior. Which ink a printer is designed to use is set by the manufacturer, and this page does not provide compatibility lists or substitution instructions; follow the manufacturer's guidance for any given device."
    }
  ],
  "sources": [
    {
      "title": "Ink",
      "url": "https://en.wikipedia.org/wiki/Ink",
      "publisher": "Wikipedia"
    },
    {
      "title": "Lightfastness",
      "url": "https://en.wikipedia.org/wiki/Lightfastness",
      "publisher": "Wikipedia"
    },
    {
      "title": "ISO/IEC 24711:2021 — Method for the determination of ink cartridge yield for colour inkjet printers and multi-function devices that contain printer components",
      "url": "https://www.iso.org/standard/77902.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "ISO/IEC 24712:2007 — Colour test pages for measurement of office equipment consumable yield",
      "url": "https://www.iso.org/standard/50017.html",
      "publisher": "International Organization for Standardization"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "dye-based ink",
    "dye ink",
    "inkjet ink",
    "soluble colorant",
    "aqueous ink",
    "dye vs pigment ink",
    "ink colorant",
    "color gamut",
    "lightfastness",
    "iso/iec 24711",
    "ink composition",
    "inkjet consumable"
  ],
  "cluster": "ink-technologies"
};

export default entry;
