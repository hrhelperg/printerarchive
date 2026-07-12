import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "ink-cartridge",
  "title": "Ink Cartridge",
  "description": "An ink cartridge stores an inkjet printer's liquid ink and feeds it to the printhead. Its composition, types, function, and standardized yield testing.",
  "summary": "An ink cartridge is the replaceable container that holds an inkjet printer's liquid ink and presents it to the printing system as the store at the head of the ink path. Its ink is typically an aqueous mixture of a colorant — a dissolved dye or a dispersed pigment — in a water-based vehicle with humectants, surfactants, and minor additives, while the container maintains a slight back-pressure, vents as ink is drawn out, and often carries an identification chip. Cartridges vary by whether they include the printhead, by colorant arrangement, and by colorant chemistry, and their comparable page yield is defined by standardized test methods (ISO/IEC 24711 using the ISO/IEC 24712 test pages) rather than by any fixed number. This reference describes the consumable and its function and gives no specific yields, capacities, lifespans, part numbers, prices, or refill procedures.",
  "difficulty": "intermediate",
  "estimatedTime": "11 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What an ink cartridge is"
    },
    {
      "kind": "paragraph",
      "text": "An ink cartridge is the replaceable container that holds the liquid ink used by an inkjet printer and presents that ink to the printing system. It is a consumable: it is designed to be installed, drawn down as printing consumes the ink, and then replaced. As a combined material-and-container unit it sits at the very start of the ink path — it is the store from which ink is drawn — and this page describes the cartridge and its ink as a consumable, rather than the mechanics of how drops are formed or how the supply is regulated, which are covered on their own pages."
    },
    {
      "kind": "paragraph",
      "text": "It helps to distinguish the cartridge from the parts around it. It is not the ink delivery system, the subsystem that conditions and conveys ink to the head, and it is not the inkjet printhead, the component that actually ejects the drops — although in some designs the cartridge physically contains the printhead. It is also distinct from a toner cartridge, which holds dry (or, in some presses, liquid) electrophotographic toner for laser-class printers rather than liquid ink. And it is related to, but usually distinguished from, the bottle-refilled reservoirs of an ink tank or continuous ink supply system, a boundary discussed in the types section below."
    },
    {
      "kind": "paragraph",
      "text": "In everyday use the term \"ink cartridge\" covers a range of forms, from a small self-contained pen that carries both the ink and its own printhead, to an ink-only module that clips into a machine with a permanent head. What they share is the role: a clean, sealed store of jettable ink, packaged so the printer can draw from it reliably and the user can swap it when it runs out."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Composition: the ink and the container"
    },
    {
      "kind": "paragraph",
      "text": "An ink cartridge has two aspects worth describing: the ink material it exists to hold, and the container that holds it. Both are described here in general terms only; specific formulations, capacities, and construction details are product- and vendor-specific and are not stated as fact."
    },
    {
      "kind": "paragraph",
      "text": "The ink. The primary material is the ink itself. Most consumer and office cartridges hold an aqueous (water-based) ink, in which a colorant is carried in a vehicle that is largely water together with water-soluble organic components. A representative aqueous inkjet ink combines:"
    },
    {
      "kind": "list",
      "items": [
        "A colorant — either a dye dissolved in the vehicle or a pigment dispersed as fine solid particles. Whether the colorant is a dye or a pigment is a defining property of the ink and is treated in detail on the dye-based ink and pigment-based ink pages.",
        "A vehicle — predominantly water, together with humectants and co-solvents (such as glycols) that slow drying at the nozzle and keep the ink fluid.",
        "Surfactants — which set the ink's surface tension and wetting behaviour so it jets cleanly and interacts correctly with the media.",
        "Minor additives — such as biocides, pH buffers, and viscosity modifiers that keep the ink stable in storage and reliable in jetting."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Other, non-aqueous ink chemistries — solvent, latex, and UV-curable inks — and phase-change solid inks exist for specific applications; these are covered on their own pages and are not restated here."
    },
    {
      "kind": "paragraph",
      "text": "The container. The cartridge body is the packaging that keeps this ink clean, sealed, and presented to the printer in the right condition. In general terms a cartridge provides a reservoir holding the ink; a means of maintaining a slight negative (back-)pressure at the outlet so ink does not weep out — commonly a capillary foam or sponge, or a free-ink chamber with a spring-loaded bag or valve; a controlled vent or labyrinth that admits air to replace ink as it is drawn, without letting ink leak; an outlet or septum that mates to the printer's ink feed or, in integrated designs, feeds directly into the cartridge's own printhead; and, in many products, an electronic memory or identification chip that reports information such as ink-level estimates and cartridge identity to the printer. The physics of the back-pressure that keeps the nozzle meniscus stable belongs to the ink delivery system and is only summarised here."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Main types of ink cartridge"
    },
    {
      "kind": "paragraph",
      "text": "Ink cartridges are categorised along several independent axes, and any given product is a combination of choices from each."
    },
    {
      "kind": "paragraph",
      "text": "By whether the printhead is included:"
    },
    {
      "kind": "list",
      "items": [
        "Integrated-printhead cartridges carry the nozzles and printhead built into the cartridge itself, so replacing the cartridge also renews the printhead. This arrangement is common with thermal (bubble-jet) designs.",
        "Ink-only cartridges are reservoirs that feed a permanent printhead fixed in the printer; only the ink and its container are replaced, while the head persists. This arrangement is common with piezoelectric designs."
      ]
    },
    {
      "kind": "paragraph",
      "text": "By colorant arrangement:"
    },
    {
      "kind": "list",
      "items": [
        "Single-colorant cartridges hold one ink each — for example a separate cartridge for each process colour — so each can be replaced independently.",
        "Multi-colorant (tri-colour) cartridges house several colorants in one body.",
        "Photo cartridges add lighter or additional colorants (for example light cyan, light magenta, or gray) to extend the tonal range on photo-capable machines, used alongside the main colour set."
      ]
    },
    {
      "kind": "paragraph",
      "text": "By colorant chemistry:"
    },
    {
      "kind": "list",
      "items": [
        "Dye-based and pigment-based ink cartridges differ in the colorant they carry, and some machines mix the two — for instance a pigment black paired with dye colours. The trade-offs are described on the dye-based ink and pigment-based ink pages."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Where the reservoir is large, bottle-refilled, and feeds a permanent head, the arrangement is usually described as an ink tank system or continuous ink supply system (CISS) rather than a cartridge; the distinction is largely one of size and refillability. Finally, beyond original-equipment cartridges, the market also includes compatible (newly manufactured third-party) and remanufactured (cleaned and refilled) cartridges; these are noted here neutrally as categories, without endorsement or compatibility claims."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works and where it fits"
    },
    {
      "kind": "paragraph",
      "text": "The cartridge's job is to be the clean, sealed store at the start of the ink path and to hand ink to the printing system in the right condition. It works in concert with the ink delivery system and the printhead: as the printer fires drops, ink is drawn out of the cartridge; the vent admits air to replace it; and the back-pressure element keeps the pressure at the outlet slightly below ambient, so the nozzles neither drool under gravity nor lose their prime. The detail of that pressure regulation is on the ink delivery system page and is not restated here."
    },
    {
      "kind": "paragraph",
      "text": "Where the cartridge sits depends on its type. In integrated-head designs the cartridge is essentially a self-contained pen: the ink path from reservoir to nozzle is short and internal, and it is renewed each time the cartridge is changed. In ink-only designs the cartridge docks to the printer's feed and the ink travels on to a permanent head, sometimes across the width of the machine through the delivery system's tubing. The drop-formation physics — thermal versus piezoelectric ejection — belongs to the inkjet process pages and is not repeated on this consumable reference."
    },
    {
      "kind": "paragraph",
      "text": "Where a cartridge carries an identification or memory chip, that chip participates in the printer's ink-level estimation and cartridge recognition. It does not itself store ink; it is part of how the machine manages the consumable."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Role in print quality"
    },
    {
      "kind": "paragraph",
      "text": "An ink cartridge does not place ink on the page, but as the source of the ink and the guardian of its condition it contributes to the printed result. Print quality is a system property — the ink, the printhead, the media, and the image-processing pipeline all act together — so the cartridge is one contributor among several. The relationships below are general, and no comparative superlatives or numeric claims are made here."
    },
    {
      "kind": "list",
      "items": [
        "Colorant chemistry shapes the look and durability of the print. Dye inks, being dissolved, tend toward a wide colour gamut and vivid, smoothly blended colour; pigment inks, being particulate, tend toward greater water- and light-resistance. The detailed trade-offs, and where each is typically preferred, are on the dye-based ink and pigment-based ink pages.",
        "Cleanliness matters. Ink that stays free of contaminants and air in the cartridge helps the head jet reliably; particulates or air drawn from a compromised cartridge are among the supply-side contributors to the weak, missing, or deflected jets described on the nozzle clogging page.",
        "Stability matters. Ink that has dried at the outlet, settled (in the case of pigments), or aged past its usable life can jet inconsistently or shift in colour, so keeping the ink within condition is part of the cartridge's role.",
        "Consistent back-pressure supports consistent drops. A cartridge that maintains its intended slight negative pressure helps keep drop volume and placement steady; the underlying mechanism is covered on the delivery-system page."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Standardized yield testing"
    },
    {
      "kind": "paragraph",
      "text": "A common question about any ink cartridge is how many pages it will print — its page yield. Yield is not a fixed physical constant of a cartridge, because it depends heavily on what is printed (text versus dense graphics, and how much colour coverage), on the printer's behaviour, and on usage patterns. To make manufacturers' yield figures comparable across products, the measurement has been standardized."
    },
    {
      "kind": "paragraph",
      "text": "The relevant standards for liquid-ink cartridges are:"
    },
    {
      "kind": "list",
      "items": [
        "ISO/IEC 24711 — the method for determining ink cartridge yield for colour inkjet printers and multifunction devices. It defines how cartridges are exercised — printing a defined document suite continuously under controlled conditions until an end-of-life condition (such as noticeable fading or an out-of-ink stop) is reached — and how a declared yield is derived by averaging the results across multiple cartridges and printers.",
        "ISO/IEC 24712 — the standardized set of colour test pages that the yield method prints: a suite of typical office documents together with a diagnostic page. The same colour test pages underpin colour inkjet yield testing (ISO/IEC 24711) and colour toner yield testing (ISO/IEC 19798); monochrome toner testing (ISO/IEC 19752) uses its own separate test page."
      ]
    },
    {
      "kind": "paragraph",
      "text": "For the electrophotographic (laser) counterpart, analogous methods exist and are noted here only for context and cross-reference to the toner pages: ISO/IEC 19752 covers monochrome toner cartridge yield and ISO/IEC 19798 covers colour toner cartridge yield."
    },
    {
      "kind": "paragraph",
      "text": "Two points follow from how these methods work. First, a declared yield is a standardized, statistical figure intended for like-for-like comparison, not a guarantee of the pages any particular user will get; actual yield varies considerably with page content, coverage, ink used during printer set-up, and printing habits. Second, this reference describes the method and the concept only. It states no specific page-yield numbers, ink capacities, or lifespans, because those are product-specific values published by the manufacturer for each cartridge."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Handling, storage, and end-of-life"
    },
    {
      "kind": "paragraph",
      "text": "Because a cartridge holds a fluid that must stay clean and jettable, sensible handling and storage follow from the same physics that govern jetting. The points below are stated as general principles, not as schedules or procedures; specific shelf lives, storage limits, and service steps are set by the manufacturer for each product."
    },
    {
      "kind": "list",
      "items": [
        "Keep cartridges sealed in their packaging until use, store them within the manufacturer's stated conditions, and avoid extremes of heat, freezing, and direct sunlight, which can degrade the ink or cause leaks.",
        "Observe the ink's usable life. Ink that has aged or been stored poorly may jet inconsistently, and pigmented inks in particular can settle over time.",
        "Handle to avoid contamination: keep the outlet and any electrical contacts clean, and avoid touching the nozzles on integrated-head cartridges."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Ink can stain skin, clothing, and surfaces, and the manufacturer's Safety Data Sheet (SDS) is the authoritative source for the safe handling and disposal of a specific ink. Refilling a cartridge, and the use of remanufactured or third-party cartridges, are common practices, but improper refilling or handling can cause leaks, poor jetting, contamination of the printhead, or air ingestion into the ink path. This reference does not provide refill or repair procedures; any such work, and anything else requiring service, should follow the manufacturer's guidance."
    },
    {
      "kind": "paragraph",
      "text": "When a cartridge is exhausted it is replaced. Empty cartridges are frequently collected for recycling or remanufacture through manufacturer and third-party return programs rather than simply discarded, which is the general environmental consideration associated with the consumable."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to adjacent components and pages"
    },
    {
      "kind": "paragraph",
      "text": "The ink cartridge sits within a cluster of related topics, each of which has its own page so that this reference can stay focused on the consumable itself."
    },
    {
      "kind": "list",
      "items": [
        "Ink delivery system — the subsystem the cartridge plugs into, which conditions and conveys the ink to the head. This page covers the store; that page covers the conveyance and pressure regulation.",
        "Inkjet printhead — what the cartridge feeds. In integrated-head cartridges the printhead is physically part of the cartridge; in ink-only designs it is a permanent component fed by the cartridge.",
        "Ink tank system and continuous ink supply system — the large-reservoir, bottle-refilled alternative to a disposable cartridge.",
        "Dye-based ink and pigment-based ink — the two main colorant chemistries a cartridge may hold, with their respective trade-offs.",
        "Toner cartridge — the electrophotographic counterpart, holding marking powder for laser-class printers rather than liquid ink; useful for contrast and covered on its own page.",
        "Nozzle clogging — a consumable-related defect influenced by ink condition and handling.",
        "Inkjet printing — the process overview that ties the consumable to the machine."
      ]
    },
    {
      "kind": "paragraph",
      "text": "By design, drop-formation physics stays on the process pages, ink conveyance and pressure regulation stay on the delivery-system page, and colorant chemistry stays on the dye and pigment ink pages, while the cartridge as a consumable — its ink material, its construction, its types, and its standardized yield testing — stays here."
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
      "slug": "ink-delivery-system"
    },
    {
      "section": "guides",
      "slug": "inkjet-printhead"
    },
    {
      "section": "guides",
      "slug": "ink-tank-system"
    },
    {
      "section": "guides",
      "slug": "dye-based-ink"
    },
    {
      "section": "guides",
      "slug": "pigment-based-ink"
    },
    {
      "section": "guides",
      "slug": "toner-cartridge"
    }
  ],
  "faqs": [
    {
      "q": "What is inside an ink cartridge?",
      "a": "Most consumer and office ink cartridges hold an aqueous (water-based) ink made up of a colorant — either a dye dissolved in the vehicle or a pigment dispersed as fine particles — carried in a vehicle of largely water plus humectants and co-solvents, together with surfactants that set the surface tension and minor additives such as biocides, pH buffers, and viscosity modifiers. The container around the ink provides a reservoir, a back-pressure element (such as a foam or a spring-loaded bag), a vent, an outlet, and often an identification chip. Exact formulations and capacities are product-specific and are not stated here."
    },
    {
      "q": "What is the difference between an ink cartridge and a toner cartridge?",
      "a": "An ink cartridge holds liquid ink for an inkjet printer, which ejects it as drops through a printhead. A toner cartridge holds dry (or, in some presses, liquid) electrophotographic toner for a laser-class printer, which fuses it to the page by an entirely different process. They are different consumables for different printing technologies; the toner cartridge is covered on its own page."
    },
    {
      "q": "What is the difference between an integrated-printhead cartridge and an ink-only cartridge?",
      "a": "An integrated-printhead cartridge carries the nozzles and printhead built into the cartridge, so replacing the cartridge also renews the printhead — an arrangement common with thermal (bubble-jet) designs. An ink-only cartridge is just a reservoir that feeds a permanent printhead fixed in the printer, so only the ink and its container are replaced while the head persists — an arrangement common with piezoelectric designs."
    },
    {
      "q": "How is an ink cartridge's page yield determined?",
      "a": "Page yield is measured by a standardized method, ISO/IEC 24711, which prints the ISO/IEC 24712 suite of colour test pages continuously under controlled conditions until the cartridge reaches an end-of-life condition, then derives a declared yield by averaging results across multiple cartridges and printers. The result is a statistical figure meant for like-for-like comparison, not a guarantee: actual yield varies with page content, coverage, and printing habits. This reference describes the method only and gives no specific yield numbers."
    },
    {
      "q": "Can ink cartridges be refilled?",
      "a": "Refilling cartridges, and using remanufactured or third-party compatible cartridges, are common practices, but improper refilling or handling can cause leaks, poor jetting, contamination of the printhead, or air entering the ink path. This reference does not provide refill or repair procedures; the manufacturer's guidance and the ink's Safety Data Sheet are the authoritative sources, and anything requiring service should be handled accordingly."
    }
  ],
  "sources": [
    {
      "title": "ISO/IEC 24711:2015 (or later editions) — Method for the determination of ink cartridge yield for colour inkjet printers and multi-function devices that contain printer components",
      "url": "https://www.iso.org/standard/64863.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO/IEC 24712:2007 — Colour test pages for measurement of office equipment consumable yield",
      "url": "https://www.iso.org/standard/50017.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO/IEC 19798:2007 — Method for the determination of toner cartridge yield for colour printers and multi-function devices that contain printer components",
      "url": "https://www.iso.org/standard/50015.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO/IEC 19752:2017 — Method for the determination of toner cartridge yield for monochromatic electrophotographic printers and multi-function devices that contain printer components",
      "url": "https://www.iso.org/standard/68555.html",
      "publisher": "ISO"
    },
    {
      "title": "Measuring Page Yields for HP Inkjet Printers",
      "url": "https://www8.hp.com/h71041/learn-about-supplies/us/en/ink.html",
      "publisher": "HP"
    },
    {
      "title": "Inkjet ink composition (US Patent 8,227,524)",
      "url": "https://www.freepatentsonline.com/8227524.html",
      "publisher": "Hewlett-Packard Development Company / USPTO"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "ink cartridge",
    "inkjet cartridge",
    "ink cartridge composition",
    "dye ink",
    "pigment ink",
    "integrated printhead cartridge",
    "ink cartridge yield",
    "iso/iec 24711",
    "page yield",
    "printer consumable",
    "aqueous ink",
    "cartridge chip"
  ],
  "cluster": "ink-technologies"
};

export default entry;
