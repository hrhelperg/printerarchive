import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "pigment-based-ink",
  "title": "Pigment-Based Ink",
  "description": "Pigment-based ink carries color in insoluble solid particles dispersed in a vehicle, giving strong light- and water-fastness and sharp edges on plain paper.",
  "summary": "Pigment-based ink is an inkjet colorant system in which color comes from insoluble solid pigment particles held in suspension in a liquid vehicle, rather than from a dissolved dye. Because the colorant is a stable solid that sits near the paper surface, pigment ink resists fading and water and produces sharp edges on plain paper, though it can trade away some gloss uniformity and color gamut versus dye. Being a suspension, it must be stabilized against settling and is susceptible to nozzle clogging when a nozzle sits idle. This page describes the material itself; the jetting processes and supply components are covered on separate pages.",
  "difficulty": "intermediate",
  "estimatedTime": "8 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Definition"
    },
    {
      "kind": "paragraph",
      "text": "Pigment-based ink is a colorant system in which color is carried by insoluble solid pigment particles dispersed — not dissolved — throughout a liquid vehicle. This is the defining contrast with dye-based ink, where the colorant is a molecularly dissolved dye that becomes part of the solution. In pigment ink the colorant remains a discrete solid phase: primary pigment particles are crystalline aggregates of many colorant molecules, typically on the order of tens to a few hundred nanometers, held in suspension in the vehicle. Because the colorant is a suspended solid rather than a solute, the properties, failure modes, and manufacturing challenges of pigment ink differ fundamentally from dye ink even when the two are jetted through identical hardware."
    },
    {
      "kind": "paragraph",
      "text": "In the classic technical sense, a pigment is a particulate solid that alters appearance by selective absorption and/or scattering of light and is substantially insoluble in the medium in which it is incorporated. A dye, by contrast, dissolves and colors at the molecular level. The distinction is one of physical state of the colorant, not of chemical family — the same organic chromophore can, in different forms, serve as either a dye or a pigment."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Composition and Structure"
    },
    {
      "kind": "paragraph",
      "text": "A pigment ink is fundamentally a colloidal dispersion. Its principal elements are:"
    },
    {
      "kind": "list",
      "items": [
        "Colorant (pigment particles). Blacks are commonly carbon black, elemental carbon produced by the incomplete combustion or thermal decomposition of hydrocarbons; it appears black because it absorbs across the visible spectrum. Chromatic colors typically use organic pigments (for example phthalocyanine blues and greens, or quinacridone reds and magentas) prized for chroma, or inorganic pigments (metal oxides such as iron oxides and titanium dioxide) prized for stability and opacity. As a general rule, organic pigments give brighter, more saturated color, while inorganic pigments are more heat- and light-stable.",
        "Vehicle. For aqueous inkjet inks the vehicle is usually more than half water, plus water-miscible co-solvents (humectants such as glycols) that regulate drying, viscosity, and surface tension.",
        "Dispersant / stabilizer. Bare pigment particles tend to agglomerate, so they must be stabilized. Two mechanisms are common: electrostatic (charge) stabilization via surface charge and zeta potential, and steric stabilization via adsorbed polymeric dispersants (often acrylic or polyurethane block copolymers carrying anionic groups). A third route is self-dispersing pigment, in which hydrophilic groups are bonded directly to the particle surface so that no separate resin dispersant is required; this approach is well established commercially, including for surface-modified carbon black.",
        "Resin / binder and additives. A resin — sometimes a separate emulsion, sometimes a coating on the particle — improves adhesion and abrasion resistance on the finished print. Surfactants, biocides, and pH buffers round out the formulation. One notable manufacturer approach is resin-encapsulated pigment, in which each particle is coated in resin; Epson markets this as MicroCrystal Encapsulation, where the resin helps anchor pigment to the media and can improve gloss uniformity."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Particle size is a first-order design parameter. Pigment is typically dispersed to roughly 50–200 nm to balance color development against jetting reliability; oversized particles and the coarse tail of the size distribution (above roughly one micrometre) are what tend to block nozzles."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How It Functions and Where It Fits"
    },
    {
      "kind": "paragraph",
      "text": "Pigment ink is one of the two dominant aqueous-inkjet colorant chemistries, the other being dye. In use it is stored and metered through the printer's ink delivery system and ejected drop-on-demand by the printhead — the same thermal-inkjet and piezoelectric-inkjet mechanisms described under inkjet printing. The colorant chemistry (pigment versus dye) is largely independent of the drop-generation method; a given printhead architecture can be engineered to run either."
    },
    {
      "kind": "paragraph",
      "text": "Because the particles are large relative to the pore structure of most papers, pigment tends to sit on or near the paper surface rather than penetrating into the fibers the way a dissolved dye does. On plain (uncoated) paper this yields sharper dot edges and less feathering or wicking, which benefits text and line work in particular."
    },
    {
      "kind": "paragraph",
      "text": "This is distinct from the other consumable and colorant systems covered elsewhere on the encyclopedia: the dry toner powder fused in laser printing (delivered by the developer unit), the phase-change material of solid-ink printing, and the diffusing dye of dye-sublimation printing are different materials with different delivery physics. This page concerns the aqueous pigment ink material itself, not the machines or processes that deposit it."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Role in Print Quality"
    },
    {
      "kind": "paragraph",
      "text": "Relative to dye ink, the suspended-solid nature of pigment ink drives a characteristic set of trade-offs:"
    },
    {
      "kind": "list",
      "items": [
        "Light-fastness (fade resistance). Because the colorant is a stable solid crystal rather than a light-sensitive dissolved molecule, pigment resists photo-oxidative fading substantially better than dye. This is the primary reason pigment sets are chosen for archival, fine-art, and outdoor work.",
        "Water and smear resistance. The insoluble particle does not readily re-dissolve or bleed when wetted, giving markedly better water-fastness than dye.",
        "Edge sharpness on plain paper. Surface-sitting particles resist wicking into the fiber, reducing feathering.",
        "Gamut and vibrancy. Historically, pigment gave up some color gamut and saturation relative to dye. Modern encapsulated pigment sets have narrowed this gap, but the general trade-off — dye tends to be brighter and wider-gamut, pigment tends to be more stable — still holds.",
        "Gloss uniformity. Because pigment rests on the surface, printed areas on glossy media can exhibit a different gloss level than the surrounding bare paper (gloss differential). Patent literature (US 6,336,705) describes pigment aggregating near the surface of glossy media with a resulting loss of the media's original gloss. Dense, highly inked areas can also show \"bronzing\" — a metallic sheen or hue shift at high ink loads — a phenomenon reported in trade technical sources. For these reasons pigment often pairs best with matte and fine-art media, whereas dye tends to integrate more seamlessly into glossy photo stock."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Standardized Testing and Permanence Framework (Methods Only)"
    },
    {
      "kind": "paragraph",
      "text": "Several ISO/IEC standards define how the consumable and its output are characterized. This page names the methods; it does not quote any specific product's measured page yield, capacity, or permanence figure."
    },
    {
      "kind": "list",
      "items": [
        "Cartridge page yield — ISO/IEC 24711. Defines how ink-cartridge page yield is measured for drop-on-demand colour inkjet printers, on plain paper, using a standardized document suite; the method explicitly excludes photo-configured printers and printers using media of A3 size and larger.",
        "Test pages — ISO/IEC 24712. Defines the standard set of customer-representative test documents (four documents plus a diagnostic page) printed as a fixed job, against which ISO/IEC 24711 measures yield. The current standalone edition dates from 2007.",
        "Toner analogs (context only). The parallel toner-yield methods are ISO/IEC 19752 (monochrome) and ISO/IEC 19798 (colour). These apply to laser toner, not inkjet ink, and are named here only to place the inkjet methods within the broader consumable-yield framework.",
        "Image and light permanence. ISO 18937 covers indoor light stability of reflection prints, with related methods addressing thermal/dark stability (ISO 18936), ozone (ISO 18941), and humidity (ISO 18946). These reflection-print methods are tied together by the umbrella specification ISO 18940 (image-permanence specification for reflection photographic prints for indoor applications), which is the framework relevant to inkjet and pigment display permanence. A separate standard, ISO 18909, covers image-stability methods for conventional continuous-tone (silver-halide / chromogenic) photographic materials; its tests are defined for those materials rather than for inkjet prints."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Permanence figures published by manufacturers and independent imaging-permanence laboratories are predicted ratings derived from these accelerated-aging methods under specified light, media, and display conditions, rather than universal constants. As a general finding, pigment ink sets rate higher for display permanence than comparable dye sets."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Dispersion Stability, Settling, and Handling (General)"
    },
    {
      "kind": "paragraph",
      "text": "Because pigment ink is a suspension rather than a true solution, it faces stability challenges that a dissolved-dye ink does not:"
    },
    {
      "kind": "list",
      "items": [
        "Settling and sedimentation. Gravity slowly settles dense particles over time; small particle size and adsorbed polymer or surface charge slow this process. Well-formulated inks aim for \"soft settling\" — loose agglomerates that redisperse easily with agitation — and avoid \"hard settling,\" in which particles compact into a non-redispersible cake that can cause unrecoverable nozzle failure.",
        "Nozzle clogging and decap. At an idle nozzle, water and co-solvent evaporate from the exposed meniscus, concentrating the ink; in pigment inks this can precipitate or flocculate particles and raise viscosity until the nozzle can no longer fire — the mechanism behind the nozzle-clogging failure mode. The tolerable idle time before a nozzle fails is termed latency, decap, or open time. Printers counter this with capping stations that seal the nozzle plate during idle periods and with maintenance (spitting and purge) cycles.",
        "Handling and safety (general terms only). Pigment inks contain dispersants, solvents/humectants, and biocides; manufacturers publish safety data sheets and generally advise avoiding skin and eye contact and ingestion, keeping ink capped to limit evaporation, and following the manufacturer's guidance for storage and disposal. Refilling or servicing cartridges and printheads outside the manufacturer's instructions can introduce contamination and clogging and can create spill or exposure hazards. Specific refill or repair procedures are out of scope for this reference and should be deferred to the manufacturer's own documentation."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to Adjacent Concepts"
    },
    {
      "kind": "paragraph",
      "text": "Pigment-based ink sits within a family of consumables and processes documented separately across the encyclopedia:"
    },
    {
      "kind": "list",
      "items": [
        "Contrasting colorant — dye-based ink. The direct counterpart, in which a molecularly dissolved dye replaces suspended particles; dye generally offers brighter, wider-gamut color and blends more seamlessly into glossy media, at the cost of lower light- and water-fastness.",
        "Primary reliability concern — nozzle clogging. The pigment-specific failure mode, driven by evaporation and particle concentration or settling at idle nozzles.",
        "Supply and delivery. Pigment ink is packaged in an ink cartridge (or tank) and metered by the ink delivery system to the inkjet printhead; those components are described on their own pages and are not duplicated here.",
        "Processes that deposit it. Inkjet printing, and its thermal-inkjet and piezoelectric-inkjet variants, are the jetting methods that place this ink on the page.",
        "Other colorant systems for contrast (not duplication). The dry toner powder of laser printing (delivered by the developer unit), the phase-change material of solid-ink printing, and the diffusing dye of dye-sublimation printing are distinct materials with distinct delivery physics."
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
      "slug": "dye-based-ink"
    },
    {
      "section": "guides",
      "slug": "ink-cartridge"
    },
    {
      "section": "guides",
      "slug": "nozzle-clogging"
    },
    {
      "section": "guides",
      "slug": "solvent-ink"
    },
    {
      "section": "guides",
      "slug": "ink-delivery-system"
    },
    {
      "section": "guides",
      "slug": "inkjet-printing"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between pigment-based ink and dye-based ink?",
      "a": "In pigment ink the colorant is an insoluble solid dispersed as fine particles throughout the vehicle; in dye ink the colorant is dissolved at the molecular level and becomes part of the solution. As a result, pigment ink generally resists fading and water better and sits nearer the paper surface for sharper edges, while dye ink tends to offer brighter, wider-gamut color and blends more seamlessly into glossy photo media."
    },
    {
      "q": "Why is pigment ink more fade- and water-resistant than dye ink?",
      "a": "Because the colorant is a stable solid crystal rather than a light-sensitive dissolved molecule, it resists photo-oxidative fading. And because the particle is insoluble, it does not readily re-dissolve or bleed when the print is wetted, giving markedly better water-fastness."
    },
    {
      "q": "Is pigment ink more prone to clogging?",
      "a": "Being a suspension, pigment ink can settle over time, and at an idle nozzle, evaporation can concentrate and flocculate the particles until the nozzle no longer fires — the decap or latency limit. Formulations use dispersants and small particle sizes to resist settling, and printers use capping stations and maintenance cycles to limit clogging; see the nozzle-clogging page for the failure mode itself."
    },
    {
      "q": "How is ink-cartridge yield measured, and does this page give yield numbers?",
      "a": "Yield is defined by standardized methods rather than a single universal number. ISO/IEC 24711 specifies how colour-inkjet cartridge page yield is measured, using the customer-representative test pages defined in ISO/IEC 24712. This reference names the methods only and deliberately does not state any specific product's page yield, ink capacity, or lifespan."
    },
    {
      "q": "Does pigment ink work well on glossy photo paper?",
      "a": "It can, but because the particles sit on the surface, dense areas on glossy stock can show gloss differential (a gloss mismatch with the bare paper) or bronzing. For that reason pigment sets often pair best with matte and fine-art media, while dye ink tends to integrate more seamlessly into glossy photo stock."
    }
  ],
  "sources": [
    {
      "title": "ISO/IEC 24711:2021 — Method for the determination of ink cartridge yield for colour inkjet printers",
      "url": "https://www.iso.org/standard/77902.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO/IEC 24712 — Colour test pages for measurement of office equipment consumable yield",
      "url": "https://www.iso.org/standard/50017.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 18937 — Imaging materials: methods for measuring indoor light stability of photographic reflection prints",
      "url": "https://www.iso.org/",
      "publisher": "ISO"
    },
    {
      "title": "ISO 18909:2022 — Photography: processed photographic colour films and paper prints, methods for measuring image stability",
      "url": "https://www.iso.org/standard/83333.html",
      "publisher": "ISO"
    },
    {
      "title": "Analyzing Inkjet Ink Particle Size and Dispersion to Avoid Sedimentation and Instability",
      "url": "https://www.azom.com/article.aspx?ArticleID=11520",
      "publisher": "AZoM"
    },
    {
      "title": "US Patent 6,024,786 — Stable compositions of nano-particulate unmodified pigments and insoluble colorants in aqueous microemulsions",
      "url": "https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/6024786",
      "publisher": "USPTO"
    },
    {
      "title": "US Patent 6,328,393 — Pigment ink jet compositions for high resolution printing",
      "url": "https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/6328393",
      "publisher": "USPTO"
    },
    {
      "title": "US Patent 6,336,705 — Ink-jet recording method, apparatus therefor, control method of said apparatus and machine-readable storing medium",
      "url": "https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/6336705",
      "publisher": "USPTO"
    },
    {
      "title": "US Patent 10,710,370 — System and method for attenuating the drying of ink from a printhead during periods of printhead inactivity",
      "url": "https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/10710370",
      "publisher": "USPTO"
    },
    {
      "title": "EP1717282B1 — Pigmented inkjet ink with a polymeric dispersant",
      "url": "https://patents.google.com/patent/EP1717282B1/en",
      "publisher": "European Patent Office / Google Patents"
    },
    {
      "title": "Colorants: Organic and Inorganic Pigments (Color for Science, Art and Technology, Ch. 10)",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/S1387678398800135",
      "publisher": "ScienceDirect (Elsevier)"
    },
    {
      "title": "Pigments vs. Dyes: Understanding the Key Differences and Applications",
      "url": "https://www.dayglo.com/dayglo/blog/pigments-and-dyes/",
      "publisher": "DayGlo Color Corp"
    },
    {
      "title": "Archival Ink — MicroCrystal Encapsulation (Epson Stylus Pro 5500 sales/technical training document)",
      "url": "https://files.support.epson.com/pdf/pro55_/pro55_ta.pdf",
      "publisher": "Epson"
    },
    {
      "title": "Epson UltraChrome HD Pigment Ink Technology (print-permanence announcement)",
      "url": "https://news.epson.com/news/new-epson-ultrachrome-hd-pigment-ink-technology-delivers-the-highest-print-permanence-ratings-ever-achieved-for-epson-ultrachrome-inks",
      "publisher": "Epson"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "pigment-based ink",
    "pigment ink",
    "inkjet ink",
    "dye vs pigment ink",
    "colorant dispersion",
    "lightfastness",
    "water-fastness",
    "carbon black pigment",
    "self-dispersing pigment",
    "nozzle clogging",
    "iso/iec 24711 page yield",
    "print permanence"
  ],
  "cluster": "ink-technologies"
};

export default entry;
