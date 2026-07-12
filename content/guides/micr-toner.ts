import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "micr-toner",
  "title": "MICR Toner (Magnetic Ink Character Recognition Toner)",
  "description": "MICR toner is iron-oxide-bearing black laser toner that prints the magnetic E-13B and CMC-7 characters banks read to sort and clear checks automatically.",
  "summary": "MICR toner is a specialized black electrophotographic (laser and LED) toner formulated with a magnetizable material, usually iron oxide, so that the characters it prints carry a machine-readable magnetic signal. It is used mainly to print the E-13B and CMC-7 characters on the MICR line of checks, which banks magnetize and read to sort and clear documents automatically. Apart from its magnetic content it behaves like ordinary monochrome toner, moving through the same developer, transfer, and fusing stages, and its printed output must meet the magnetic-signal and dimensional tolerances defined by standards such as ISO 1004 and ANSI X9.100-20.",
  "difficulty": "intermediate",
  "estimatedTime": "11 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What MICR toner is"
    },
    {
      "kind": "paragraph",
      "text": "MICR toner is a specialized black toner for electrophotographic printers (laser and LED machines), formulated so that the characters it prints carry a detectable magnetic signal. MICR stands for magnetic ink character recognition, a character-recognition technology used mainly by the banking industry to process and clear checks and other financial documents. The distinguishing feature of MICR toner is that its formulation includes a magnetizable material — usually iron oxide — so that the specially shaped characters printed along the bottom of a check (the MICR line) can later be magnetized and read automatically by high-speed sorting equipment."
    },
    {
      "kind": "paragraph",
      "text": "In every other respect MICR toner behaves like ordinary monochrome laser toner. It is a dry powder held in a cartridge, charged and applied to the photoconductor drum by the developer unit, transferred to paper, and bonded to the sheet by the fuser. What sets it apart is not how it is printed but what the printed result must do: produce a magnetic signal that falls within the tolerances defined by the MICR standards, so automated readers can recognize each character reliably."
    },
    {
      "kind": "paragraph",
      "text": "Because reliable check clearing depends on that magnetic signal, ANSI and the U.S. Federal Reserve require checks to be printed with magnetic (MICR) ink or toner, and equivalent requirements exist under the international standards used elsewhere. This makes MICR toner a functional, regulated consumable rather than a cosmetic choice: the same visible characters printed with ordinary toner would look correct to the eye but would not carry the magnetic signal the clearing system depends on. This page describes the consumable itself; the printing process is covered in the laser printing reference, and the general chemistry of toner in the toner composition reference."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Composition and types"
    },
    {
      "kind": "paragraph",
      "text": "At a general level, MICR toner shares the same building blocks as other electrophotographic toner: a thermoplastic binder resin (commonly a styrene-acrylate copolymer or a polyester), a colorant (typically carbon black), wax and flow additives, and charge-control agents that give the particles a consistent electrostatic charge. The general chemistry and manufacturing of toner — including pulverized (jet-milled) versus chemically grown, more uniform particles — is described in the toner composition reference and is not repeated here."
    },
    {
      "kind": "paragraph",
      "text": "What defines MICR toner specifically is the deliberate inclusion of a magnetizable material, most often iron oxide (magnetite), at a controlled loading. Iron oxide has long featured in toner: early toners combined carbon powder and iron oxide, and many single-component magnetic mono toners still contain it so that a magnetic developing roller can carry them. MICR toner differs in that its magnetic content is formulated and quality-controlled so that the characters it prints generate a magnetic signal of the correct strength, rather than merely being carried magnetically inside the printer."
    },
    {
      "kind": "paragraph",
      "text": "Types and related materials can be grouped as follows:"
    },
    {
      "kind": "list",
      "items": [
        "MICR toner for electrophotographic printers — the subject of this page — a dry powder used in laser and LED machines and packaged in a toner cartridge.",
        "MICR ink — the liquid counterpart used in offset, flexographic, and some inkjet processes; it serves the same magnetic-signal purpose using a different delivery method (an ink rather than a toner).",
        "Font families — the printed characters follow one of two standardized MICR fonts. E-13B comprises ten digits and four control symbols and is standardized in ISO 1004-1:2013; CMC-7 comprises digits, letters, and control characters and is standardized in ISO 1004-2:2013. The font is a property of the printed output rather than of the toner, but MICR toner exists precisely to render these fonts with a valid magnetic signal."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Exact formulations, iron-oxide loadings, and particle characteristics are proprietary and vary by manufacturer; this reference does not state any specific product's composition figures."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works and where it fits"
    },
    {
      "kind": "paragraph",
      "text": "MICR toner participates in the ordinary electrophotographic printing cycle. Inside the printer the toner is charged and metered by the developer unit, which presents a thin layer of it to the electrostatic latent image on the photoconductor drum; the toner develops onto the image areas, is transferred to the paper, and is then fixed by heat and pressure in the fuser unit. From the printer's point of view MICR toner is handled much like any monochrome toner, which is why it is used in conventional laser and LED hardware rather than in a fundamentally different machine."
    },
    {
      "kind": "paragraph",
      "text": "The magnetic function comes into play only after printing, during document processing. A MICR reader-sorter performs two steps: it first passes the printed characters through a magnetic field to magnetize the iron-oxide particles, and then reads them as they move past a read head. Because each E-13B or CMC-7 character has a distinct shape, it produces a unique magnetic waveform that the reader can identify even when the character is partly obscured, smudged, or overprinted — a robustness that plain optical reading cannot match. This is the core reason checks use magnetic characters: it allows extremely high-volume, low-error automated sorting and clearing."
    },
    {
      "kind": "paragraph",
      "text": "Where MICR toner fits, then, is at the intersection of two systems. Within the printer it is simply a consumable that must charge, develop, transfer, and fuse correctly. Within the banking network it is the physical carrier of machine-readable data, and its output must satisfy the magnetic-signal requirements of the check-clearing infrastructure. Both roles have to be met at once for the consumable to do its job."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Standards the printed output must satisfy"
    },
    {
      "kind": "paragraph",
      "text": "MICR is a standardized technology, and MICR toner exists to meet those standards. The relevant specifications govern the printed characters — their shape, size, position, and magnetic signal level — rather than the toner chemistry directly, but they are what a MICR toner is formulated to satisfy."
    },
    {
      "kind": "list",
      "items": [
        "International: The two MICR fonts are standardized by ISO. ISO 1004-1:2013 specifies the shape, dimensions, magnetic signal level, and tolerances for the E-13B characters (ten numerals and four special symbols); ISO 1004-2:2013 covers the CMC-7 font. E-13B is the basis used in countries such as the United States, Canada, the United Kingdom, and Australia, while CMC-7 is used in a number of European countries (such as France and Italy) and widely across Latin America.",
        "United States: MICR check printing is standardized through the Accredited Standards Committee X9 (ASC X9), an ANSI-accredited standards body, notably in the ANSI X9.100-20 print and test specifications for magnetic-ink printing. This lineage traces back to the E-13B font that the American Bankers Association adopted in the late 1950s and the first national print specification published in the early 1960s.",
        "Requirement: ANSI and the Federal Reserve require checks to carry a magnetic code line printed with MICR ink or toner in order to be handled through normal clearing."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The technology itself was developed in the mid-1950s, in work associated with the Stanford Research Institute and General Electric, and the standardized fonts and signal requirements have underpinned automated check processing ever since. The practical consequence for the consumable is that a MICR toner is judged not only by how it looks, but by whether the characters it prints fall within these documented signal-level and dimensional tolerances."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Role in print quality"
    },
    {
      "kind": "paragraph",
      "text": "For most toner, print quality means visual attributes — density, sharpness, uniformity, and freedom from streaks or fogging, as discussed in the developer unit and laser printing references. MICR toner is judged by an additional, decisive criterion: the magnetic quality of the printed characters. A page can look perfect and still fail if its magnetic signal is out of tolerance."
    },
    {
      "kind": "paragraph",
      "text": "Two dimensions of quality therefore matter:"
    },
    {
      "kind": "list",
      "items": [
        "Visual and dimensional quality — the E-13B or CMC-7 characters must be correctly shaped, sized, and positioned on the MICR line, and free of voids or extraneous marks, because both magnetic readers and any optical fallback depend on clean character forms.",
        "Magnetic signal quality — the strength and consistency of the magnetic signal each character produces must fall within the standardized tolerances. Signals that are too weak, too strong, or contaminated by stray magnetic material can cause misreads or rejects when documents are sorted at high speed."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Because clearing systems process enormous volumes with very low tolerance for error, out-of-specification MICR printing tends to surface as elevated reject rates rather than as an obviously bad-looking page. Achieving a valid signal depends on the toner, the printer, and correct fusing all working together; as with any print-quality issue, a defect visible in the output does not by itself identify which of these is responsible, so conformance is verified against the standard rather than assumed. This reference does not provide device-specific tuning, signal-measurement procedures, or acceptance thresholds, which are set by the standards and the equipment involved."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Standardized testing and yield frameworks"
    },
    {
      "kind": "paragraph",
      "text": "Two distinct kinds of standardized measurement are associated with MICR toner, and it helps to keep them separate."
    },
    {
      "kind": "paragraph",
      "text": "The first is MICR conformance testing: verifying that printed characters meet the magnetic-signal-level and dimensional tolerances defined in the MICR standards (ISO 1004 internationally, and ANSI X9.100-20 in the United States). This is a quality-conformance question specific to magnetic printing, and it is what makes a MICR document acceptable to a reader-sorter. The details of how signal level is measured and what tolerances apply live in those standards."
    },
    {
      "kind": "paragraph",
      "text": "The second is page yield, where MICR toner is treated like any other toner. The printer industry uses standardized, published methods to determine how many standard pages a cartridge produces, so that figures are comparable across products. The relevant method for monochrome toner — the category MICR toner falls into — is ISO/IEC 19752, which defines a repeatable procedure using a standard test page, default printer settings, controlled environmental conditions, and an average taken across multiple cartridges. Parallel methods exist for other consumables: ISO/IEC 19798 for color toner and ISO/IEC 24711 for color inkjet cartridges, both of which use the shared ISO/IEC 24712 colour test-page suite; these do not apply to monochrome MICR toner but are part of the same family of yield standards."
    },
    {
      "kind": "paragraph",
      "text": "Consistent with a neutral reference, this page describes these frameworks only as methods. It does not state any particular cartridge's rated page yield, capacity, or lifespan, because those values are product-specific and are published by the manufacturers who test to the standard."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Handling, safety, and environmental notes"
    },
    {
      "kind": "paragraph",
      "text": "Like other electrophotographic toner, MICR toner is a very fine dry powder, and the general handling considerations for toner apply to it. Manufacturers publish a safety data sheet (SDS) for each product, and that document — not this reference — is the authority for the handling, first aid, and disposal of a specific toner."
    },
    {
      "kind": "paragraph",
      "text": "In general terms:"
    },
    {
      "kind": "list",
      "items": [
        "As a fine powder, toner should be handled so as to avoid creating airborne dust clouds. Toner is generally treated as a low-hazard article in normal cartridge use, but any fine organic dust dispersed in air at high concentration near an ignition source presents a potential dust-explosion hazard, and inhaled dust can cause mild respiratory irritation comparable to other nuisance dusts.",
        "Spills are typically cleaned by careful sweeping or vacuuming with equipment intended for fine powder, avoiding methods that raise dust; heat should be kept away from loose toner because it is designed to melt.",
        "Colorant components warrant ordinary caution: carbon black, a common toner colorant, is classified by the IARC as possibly carcinogenic to humans, which is one reason routine dust-avoidance and following the SDS matter.",
        "Empty cartridges are often collected through recycling or return programs; disposal should follow the manufacturer's instructions and local regulations."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Refilling or rebuilding MICR cartridges raises additional, specific concerns beyond ordinary powder handling: because the value of MICR toner lies in a controlled magnetic signal, using the wrong toner or an improperly filled cartridge can produce characters whose signal is out of tolerance and whose documents are rejected downstream. For that reason, and to avoid the dust hazards above, this reference does not provide refill or repair procedures; obtaining and servicing MICR consumables should follow the manufacturer's guidance."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to adjacent consumables and components"
    },
    {
      "kind": "paragraph",
      "text": "MICR toner is best understood by contrast with the materials and parts around it."
    },
    {
      "kind": "list",
      "items": [
        "Ordinary black toner — chemically similar, but formulated without the controlled magnetic loading; it prints visually identical characters that lack a valid magnetic signal. The shared underlying chemistry is covered in the toner composition reference, and the packaged consumable in the toner cartridge reference.",
        "MICR ink — the liquid equivalent for offset, flexographic, and inkjet processes; it achieves the same magnetic result through a different delivery mechanism. Inkjet delivery hardware is described in the ink delivery system and inkjet printhead references, and the inkjet process in the inkjet printing reference.",
        "Printer components — inside the machine, MICR toner is charged and applied by the developer unit, carried on the photoconductor drum, and fixed by the fuser unit, exactly as ordinary monochrome toner is; those component references cover the mechanics this page does not repeat.",
        "The printing process — the end-to-end electrophotographic process is described in the laser printing reference; MICR toner is a specialized consumable within that process, not a separate technology."
      ]
    },
    {
      "kind": "paragraph",
      "text": "In short, MICR toner sits within the ordinary laser-printing consumable path but adds one requirement the rest of that path does not care about: the printed characters must carry a standardized magnetic signal. Everything else about it — how it is made, how it is applied, how its yield is measured, and how it should be handled — follows the same principles as other monochrome toner."
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
      "slug": "toner-cartridge"
    },
    {
      "section": "guides",
      "slug": "developer-unit"
    },
    {
      "section": "guides",
      "slug": "laser-printing"
    },
    {
      "section": "guides",
      "slug": "fuser-unit"
    }
  ],
  "faqs": [
    {
      "q": "How is MICR toner different from ordinary black laser toner?",
      "a": "Chemically it is very similar — the same kind of binder resin, colorant, and additives — but MICR toner is formulated with a controlled amount of a magnetizable material, usually iron oxide, so that the characters it prints produce a magnetic signal within the tolerances of the MICR standards. Ordinary toner can print the same-looking characters, but they will not carry the magnetic signal that automated check readers depend on."
    },
    {
      "q": "What are the E-13B and CMC-7 fonts?",
      "a": "They are the two standardized MICR character sets. E-13B (ten digits and four control symbols) is standardized in ISO 1004-1:2013 and is used in countries such as the United States, Canada, the United Kingdom, and Australia. CMC-7 is standardized in ISO 1004-2:2013 and is used in a number of European countries (such as France and Italy) and widely across Latin America. The font is a property of the printed characters; MICR toner exists to render these fonts with a valid magnetic signal."
    },
    {
      "q": "Why are checks printed with magnetic toner instead of ordinary toner?",
      "a": "Because check clearing is automated at very high volume. A MICR reader magnetizes the iron-oxide characters and reads the unique magnetic waveform each one produces, which is far more robust to smudging or overprinting than optical reading alone. ANSI and the U.S. Federal Reserve require checks to carry a magnetic code line printed with MICR ink or toner so they can be processed through normal clearing."
    },
    {
      "q": "Is MICR toner the same as MICR ink?",
      "a": "No. Both carry a magnetizable material for the same purpose, but MICR toner is a dry powder used in electrophotographic laser and LED printers, whereas MICR ink is a liquid used in offset, flexographic, and some inkjet processes. This page is about the toner consumable."
    },
    {
      "q": "Does MICR toner contain hazardous materials?",
      "a": "In normal cartridge use, toner is generally treated as a low-hazard article, and each product's safety data sheet is the authority for its specific hazards. As with any toner, it is a fine powder that should be handled to avoid dust clouds; airborne toner dust at high concentration near an ignition source is a potential dust-explosion hazard, inhaled dust can cause mild respiratory irritation, and the common colorant carbon black is classified by the IARC as possibly carcinogenic. Handling, cleanup, and disposal should follow the manufacturer's SDS and local regulations."
    }
  ],
  "sources": [
    {
      "title": "Magnetic ink character recognition",
      "url": "https://en.wikipedia.org/wiki/Magnetic_ink_character_recognition",
      "publisher": "Wikipedia"
    },
    {
      "title": "ISO 1004-1:2013 — Information processing — Magnetic ink character recognition — Part 1: Print specifications for E13B",
      "url": "https://www.iso.org/standard/55881.html",
      "publisher": "International Organization for Standardization (ISO)"
    },
    {
      "title": "ISO 1004-2 — Information processing — Magnetic ink character recognition — Part 2: Print specifications for CMC-7",
      "url": "https://www.iso.org/",
      "publisher": "International Organization for Standardization (ISO)"
    },
    {
      "title": "Standards Advisory: Magnetic Ink Still Required on Checks",
      "url": "https://x9.org/standards-advisory-magnetic-ink-required-checks/",
      "publisher": "Accredited Standards Committee X9 (ASC X9)"
    },
    {
      "title": "MICR Specifications for Checks in ASC X9 Standards",
      "url": "https://blog.ansi.org/ansi/micr-specifications-checks-ansi-x9-standards/",
      "publisher": "American National Standards Institute (ANSI)"
    },
    {
      "title": "Toner (printing)",
      "url": "https://en.wikipedia.org/wiki/Toner_(printing)",
      "publisher": "Wikipedia"
    },
    {
      "title": "ISO/IEC 19752",
      "url": "https://en.wikipedia.org/wiki/ISO/IEC_19752",
      "publisher": "Wikipedia"
    },
    {
      "title": "ISO/IEC 19752:2017 — Method for the determination of toner cartridge yield for monochromatic electrophotographic printers and multi-function devices",
      "url": "https://www.iso.org/standard/68555.html",
      "publisher": "International Organization for Standardization (ISO)"
    },
    {
      "title": "ISO/IEC 19798:2017 — Method for the determination of toner cartridge yield for colour printers and multi-function devices",
      "url": "https://www.iso.org/standard/64862.html",
      "publisher": "International Organization for Standardization (ISO)"
    },
    {
      "title": "ISO/IEC 24711:2015 — Method for the determination of ink cartridge yield for colour inkjet printers and multi-function devices",
      "url": "https://www.iso.org/standard/64863.html",
      "publisher": "International Organization for Standardization (ISO)"
    },
    {
      "title": "ISO/IEC 24712 — Colour test pages for measurement of office equipment consumable yield",
      "url": "https://www.iso.org/",
      "publisher": "International Organization for Standardization (ISO)"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "micr toner",
    "magnetic ink character recognition",
    "iron oxide toner",
    "magnetite toner",
    "magnetic toner",
    "e-13b font",
    "cmc-7 font",
    "check printing toner",
    "micr laser toner",
    "iso 1004",
    "ansi x9.100-20",
    "monochrome toner yield"
  ],
  "cluster": "toner-technologies"
};

export default entry;
