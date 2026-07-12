import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "smearing-and-set-off",
  "title": "Smearing, Rub, and Set-Off",
  "description": "Smearing, rub, and set-off are print defects where unfixed colorant drags under a rub or transfers to the next sheet. Their causes, testing, and remedies.",
  "summary": "Smearing, rub, and set-off are a family of print defects in which colorant that has not yet set, dried, cured, or fused moves where it should not. Smearing is colorant dragged in place by a rub on the printed face; set-off is still-wet ink transferring onto the back of the next sheet in the pile, with blocking and bricking the severe extreme where sheets stick together. This reference describes their appearance, the shared root cause of incompletely fixed colorant, the process-specific mechanisms in offset, toner, and inkjet printing, how the defects are diagnosed and rub-tested, and general remediation principles. Fixes that require opening or repairing hardware are noted as requiring servicing rather than instructed.",
  "difficulty": "intermediate",
  "estimatedTime": "13 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Definition and terminology"
    },
    {
      "kind": "paragraph",
      "text": "Smearing, rub, and set-off are a family of print-quality defects in which colorant that is not yet fixed to the substrate — not fully set, dried, cured, or fused — moves to a place it should not be. They share that single root condition but differ in the force that moves the colorant and in where it ends up."
    },
    {
      "kind": "list",
      "items": [
        "Smearing (smudging) is wet or poorly bound colorant displaced in place by a rubbing or shearing contact — a finger, a following sheet, a roller, a paper guide, or a mailing machine. The image on the printed face is dragged, streaked, or dulled. It is fundamentally a rub-resistance (abrasion) phenomenon.",
        "Set-off, also called offsetting, is the unwanted transfer of still-wet ink from a printed sheet onto the back (verso) of the sheet stacked immediately above it in the delivery pile. Set-off is defined as the unwanted transfer of ink from one printed sheet to another; the receiving sheet shows a faint, laterally reversed (mirror-image) \"ghost\" of the sheet below before the ink has set.",
        "Blocking and bricking are the severe extreme of set-off, in which sheets — or the wraps of a wound web roll — stick or effectively glue together under pile pressure because ink or coating never dried. Sun Chemical's ink-troubleshooting guidance describes blocking (also called offsetting) as printed surfaces adhering to or transferring onto adjacent material, classically when a web roll is rewound with ink that has not fully set. \"Bricking\" is the same idea for a sheet pile that has fused into a solid block. Light set-off is a cosmetic ghost; blocking and bricking are mechanical adhesion and often total product loss — two severities of one mechanism."
      ]
    },
    {
      "kind": "paragraph",
      "text": "A one-line way to separate them: smearing is colorant moved by a rub on the printed face; set-off is wet colorant moved by pile contact onto the back of the next sheet; blocking/bricking is set-off severe enough to bond sheets together."
    },
    {
      "kind": "paragraph",
      "text": "Two naming cautions are worth stating explicitly. First, set-off the defect is unrelated to offset lithography the printing process, and to the rubber offset blanket on the press; the near-identical words (\"offset,\" \"offsetting,\" \"set-off\") are a genuine and well-documented source of confusion. Second, the term back-trapping (or back-trap mottle) is sometimes used loosely for set-off but more properly names a distinct multicolour-press defect — still-wet ink pulled back off the paper onto a downstream printing unit's blanket — and is not treated as a synonym for set-off here."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Appearance and symptoms"
    },
    {
      "kind": "paragraph",
      "text": "The three defects present differently on the page, and recognising which signature is present is the first diagnostic step. Because set-off lands on the reverse of a sheet while smearing marks the printed face, a quick check of where the mark appears already narrows the cause."
    },
    {
      "kind": "list",
      "items": [
        "Set-off: a faint, low-density, laterally reversed (mirror) replica of a heavily inked area appearing on the reverse of adjacent sheets. It is heaviest opposite solids, shadows, and high-coverage panels, and is often worst in the middle and lower part of a pile, where cumulative weight is greatest. Because it is on the verso, set-off is frequently discovered only when the pile is broken down or during finishing.",
        "Smearing / smudging: directional streaks or drag marks on the printed face that follow the direction of the rubbing motion, with loss of density or gloss where colorant was dragged away; fingerprints and trailing at the edges of dark objects are common. This is distinct from slur and doubling, which are press-register and dot phenomena rather than colorant transfer, and should not be conflated with them.",
        "Blocking / bricking: sheets tear, \"pick,\" or delaminate when separated; a wound roll shows image lifted onto the adjacent wrap; the affected material can be a total loss.",
        "Toner (electrophotographic) output: the image rubs or flakes off under a fingernail or when the sheet is folded, or shows a shiny, greasy, \"cold-fusion\" look — the signature of incomplete fusing rather than of wet ink.",
        "Inkjet output: smudging when the print is handled before it is dry — especially with dye-based inks, and especially on contact with water or a highlighter — plus pooling and coalescence artefacts when ink is printed on non-receptive, mismatched media."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Why it happens: colorant that has not yet set"
    },
    {
      "kind": "paragraph",
      "text": "Every variant traces to the same prerequisite: the vehicle or binder has not set, dried, cured, or fused enough to immobilise the colorant before a mechanical event — stacking or rubbing — occurs. The fixing mechanisms that matter are described here only as they bear on smear and set-off; the imaging of the dot itself is covered on the screening and halftoning pages."
    },
    {
      "kind": "list",
      "items": [
        "Absorption / penetration (sheetfed offset, coldset newsprint, flexo and gravure on absorbent stock): the vehicle wicks into the pores of the paper over seconds to minutes. Fast initial set reduces set-off, but on coated or low-absorbency stock the ink stays on the surface longer, raising set-off risk.",
        "Oxidative polymerisation (conventional sheetfed offset oils such as linseed, soya, and alkyd): oxygen cross-links the unsaturated oils into a solid film over hours. Because the reaction needs access to air, oxygen availability within the pile governs when the stack can safely be handled — the physical basis for anti-set-off spray powder.",
        "Evaporation (heatset web offset with an oven; solvent flexo and gravure): a volatile carrier is driven off by heat and airflow. Retained or trapped solvent is a classic cause of blocking on the rewind or in the stack.",
        "Quickset (two-stage) (commercial sheetfed offset): a thin vehicle drains rapidly into the substrate, leaving a resin and oil film that then oxidises. Quickset inks are purpose-built to set fast, resist set-off, and cut the need for spray powder.",
        "Radiation (UV/EB) curing (UV offset, UV and EB flexo, some digital): a photoinitiated or electron-beam reaction cross-links the film in milliseconds, giving near-instant fix and strong set-off and rub resistance — a documented reason UV work needs little or no spray powder."
      ]
    },
    {
      "kind": "paragraph",
      "text": "A technical study of offset-ink component separation describes setting on coated paper through capillary absorption, latex swelling, and osmotic pressure drawing oil out of the ink film, with pigment and high-molecular-weight polymer initially excluded from the coating's fine pores mainly by size — a physical model of \"set\" preceding full \"dry.\" This mechanism rests on a single technical source and is presented as a model rather than a settled figure."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Set-off: the pile-transfer mechanism and its causes"
    },
    {
      "kind": "paragraph",
      "text": "After printing, sheets stack face-to-back, so a wet printed face contacts the verso of the sheet above. If the ink has not set, pile weight and delivery or handling pressure transfer a thin film onto that verso, producing the mirror ghost. The documented contributors form a compact set of cause families:"
    },
    {
      "kind": "list",
      "items": [
        "Inadequate setting or drying time before stacking — the primary driver.",
        "Heavy ink load, high total area coverage, or a thick ink film — more mobile colorant that is slower to set; worst in solids and shadows.",
        "Non-absorbent, coated, or very smooth stock — ink sits on the surface longer instead of anchoring into fibres and pores.",
        "Pile height, weight, and delivery pressure — cumulative load squeezes films together, which is why set-off often concentrates lower in a tall pile.",
        "High ink tack and high-speed delivery or stacking — a directional factor; specific tack figures in circulation come from a single trade summary and are not asserted here.",
        "Slow-drying conditions — high humidity and low temperature retard oxidative drying, and excess fountain solution or emulsification, or driers out of balance, also slow setting. These are described qualitatively; specific humidity or temperature set-points seen in vendor material are unverified and deliberately omitted."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Set-off and blocking are the same mechanism at different severities: a light ghost when only a little colorant transfers, and blocking or bricking when enough un-dried ink or coating remains to bond sheets or roll wraps together."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Smearing and rub: shear on the printed face"
    },
    {
      "kind": "paragraph",
      "text": "Smear is colorant removed or dragged by abrasion or shear, before or after nominal drying, because the film's cohesion and adhesion are inadequate for the handling it meets. The ISO abrasion framework (ISO 18947, discussed in the next section) characterises rubbing degradation as loss of colour intensity, scratches, changes in gloss, coloration of previously uncoloured areas, and transfer of colorant to a receptor — the last two being smear and set-off in standards language."
    },
    {
      "kind": "paragraph",
      "text": "The behaviour is process-specific:"
    },
    {
      "kind": "list",
      "items": [
        "Offset and packaging: low rub or scuff resistance comes from soft, under-cured, or under-formulated films. It is improved by harder-curing resins, by wax and silicone slip additives, and by an overprint varnish or coating.",
        "Toner (electrophotography): rub-off is the visible symptom of incomplete fusing. Thermoplastic toner is bonded by partially melting into the surface paper fibres under heat and pressure; if the fusing energy is insufficient, the toner's melt behaviour is wrong for the media, or the media and tray settings are wrong, the toner shears off. Humidity impairs adhesion.",
        "Inkjet: pigment inks sit on or near the surface and are generally more rub- and water-resistant, whereas dye inks are more prone to smudging, especially on contact with water. An ink-receptive coating fixes the image quickly by adsorbing water and co-solvent and forcing the binder and colorant to coalesce; printing on non-receptive or mismatched media leaves colorant mobile and smear-prone."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Across all three processes the underlying variables are the same as for set-off: how much colorant is laid down, how fast and how completely it fixes, and how soon and how hard the surface is rubbed."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Diagnosis and measurement"
    },
    {
      "kind": "paragraph",
      "text": "Diagnosis runs from quick shop-floor checks to instrumented rub testing, and finally to the print-quality attribute standards that touch these defects only indirectly."
    },
    {
      "kind": "paragraph",
      "text": "Shop-floor and qualitative checks:"
    },
    {
      "kind": "list",
      "items": [
        "Visual pile inspection — examine the versos of stacked sheets for a mirror ghost (set-off) and the printed face for directional drag (smear).",
        "Manual rub, thumb-twist, and fingernail tests — quick screens for wet or unfused colorant; widely used but subjective.",
        "Densitometry of a ghosted area on the verso, compared with the source solid, to quantify set-off severity."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Instrumented rub, smear, and set-off testing. The standards below are named for their titles and scope; their internal clause text is not quoted here."
    },
    {
      "kind": "list",
      "items": [
        "The Sutherland Ink Rub Tester is the standard instrument: it rubs two samples together under a defined load, speed, and cycle count, then evaluates degradation of the printed face and transfer of ink onto the receptor, with dry-rub, wet-rub, wet-smear, and wet-transfer modes.",
        "ASTM D5264 — Standard Practice for Abrasion Resistance of Printed Materials by the Sutherland Rub Tester.",
        "TAPPI T830 — the Sutherland ink-rub method (formally scoped to containerboard and corrugated board).",
        "ASTM F1571 — Abrasion and Smudge Resistance of Images Produced from Business Copy Products (Sutherland Method); it covers business-copy-product images, originally impact and ribbon output and, by modification, non-impact copier, inkjet, and thermal prints.",
        "ASTM F2497 — an abrasion and scuff-resistance method for inkjet media (withdrawn 2020).",
        "ISO 18947-1:2021 and ISO 18947-2:2021 — Imaging materials and prints — Abrasion resistance; Part 1 specifies general rub-testing methods for analogue and digital prints on all substrates, and Part 2 covers photographic prints. This is the standards family aimed specifically at rub and abrasion resistance, including colorant transfer to a receptor."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Print-quality attribute standards (adjacent, not smear-specific). ISO/IEC 13660:2001 (Measurement of image quality attributes for hardcopy output — Binary monochrome text and graphic images; withdrawn) and its successor ISO/IEC 24790:2017 (with Amendment 1:2022) define large-area attributes such as darkness and background and character or line attributes such as blurriness, raggedness, and extraneous marks. They do not define \"set-off\" or \"smear\" as named defects. Their relevance is interpretive: set-off contamination on a verso, or a stray smear, would register as elevated background or as extraneous marks within these frameworks — a relationship, not a claim that the standards test for set-off."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "General remediation principles"
    },
    {
      "kind": "paragraph",
      "text": "The following are general, well-documented practices, not fixed rules or service procedures. Numeric set-points are deliberately not given, and anything that requires opening or repairing hardware is flagged as requiring servicing."
    },
    {
      "kind": "paragraph",
      "text": "1. Give the colorant time and the right conditions to set, cure, or fuse before contact. Adequate drying is the first-line control, and the drying mechanism should match the job — for example quickset or UV/EB inks where fast fixing is required. 2. Reduce colorant load where set-off or smear appears: lower the total area coverage or ink-film thickness, and use black generation (GCR/UCR) and total-ink-coverage limits in prepress to cut heavy builds. 3. Manage the stack: reduce pile height, slow the delivery, delay downstream handling and finishing until the ink has set, and interleave slip-sheets so that any transfer lands on discardable paper. 4. Use anti-set-off spray powder judiciously. A fine dusting (often starch) creates a small air gap so the wet face does not touch the sheet above and the ink can dry naturally; because oxidative-drying inks need air access, that gap also aids curing. The tradeoffs are real — dust and housekeeping, machine wear, and problems for downstream laminating, coating, varnishing, or foiling and for gloss if overused — so the governing principle is the minimum necessary quantity and a particle size matched to the stock, and coated powders are unsuitable before multi-pass, foil, or lamination work. 5. Match media to the process: absorbency for offset and quickset, a proper ink-receptive coating for inkjet, and, for toner, media within the device's supported weight and type range with the tray and media settings set correctly. 6. Improve film durability against rubbing through ink and finishing choices: harder-curing chemistries, an overprint varnish or coating, and wax or silicone slip additives, which matter especially in packaging. 7. Control the environment: avoid the high-humidity, low-temperature conditions that retard oxidative drying and impair toner adhesion, and keep fountain solution, emulsification, and driers in balance on offset presses. This is described qualitatively; specific set-points are not asserted. 8. Route device faults to service. For toner rub-off, manufacturer guidance directs users first to check that the media weight and type setting matches the loaded stock and to try fresh, in-specification paper. If toner continues to fuse incompletely after those checks, this reference treats a persistently under-fusing device as requiring servicing by a qualified technician rather than user repair; it does not provide fuser temperatures, voltages, part numbers, maintenance intervals, or disassembly steps."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to other print defects and to colour reproduction"
    },
    {
      "kind": "paragraph",
      "text": "Smearing and set-off are defects of what happens to colorant after it is laid down, which distinguishes them from the imaging defects covered elsewhere on this site."
    },
    {
      "kind": "list",
      "items": [
        "Dot gain is the enlargement of halftone dots, a mechanical and optical effect on press that shifts tone; it is a tonal-reproduction issue rather than post-fixing colorant transfer. See the dot-gain reference for that phenomenon.",
        "The halftoning and screening pages — amplitude-modulation (AM) screening, frequency-modulation (FM) screening, error diffusion, ordered dithering, screen angles, and moiré patterns — describe how the dot itself is imaged. This page concerns what happens to the colorant once the dot exists, so those pages are referenced here rather than re-explained.",
        "Ink-load and coverage control are the main preventive levers this defect shares with colour work: black generation (GCR/UCR), and the total-ink-coverage limits set during RGB-to-CMYK conversion and colour management, reduce the heavy builds that are slow to set and prone to set-off.",
        "Measurement ties in with colour reproduction as well. Because set-off and smear change measured density in the affected areas, the densitometric methods used in colour calibration and printer profiling are also the tools used to quantify ghosting and background contamination."
      ]
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This is a neutral technical reference describing print-defect phenomena and general remediation principles. It is not a service manual: it does not provide device-specific repair procedures, error-code meanings, or maintenance intervals, and anything requiring service should be handled per the manufacturer's guidance. The references consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "guides",
      "slug": "toner-adhesion"
    },
    {
      "section": "guides",
      "slug": "ink-bleeding"
    },
    {
      "section": "guides",
      "slug": "paper-curl"
    },
    {
      "section": "tools",
      "slug": "dot-gain"
    },
    {
      "section": "tools",
      "slug": "black-generation"
    },
    {
      "section": "guides",
      "slug": "rgb-to-cmyk-conversion"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between set-off and offset printing?",
      "a": "They are unrelated despite the shared word root. Set-off is a defect — the unwanted transfer of still-wet ink onto the back of the next sheet in a pile. Offset lithography is a printing process, and the offset blanket is a press component that carries ink to the paper. A job printed by offset lithography can either suffer or avoid the set-off defect; the two ideas simply share confusingly similar names."
    },
    {
      "q": "What causes set-off in a freshly printed stack?",
      "a": "The ink has not set before the sheets are stacked. Common contributors are heavy ink coverage and thick ink films, coated or non-absorbent stock that keeps ink on the surface, tall piles whose weight squeezes the sheets together, and slow-drying conditions such as high humidity or low temperature. It is heaviest opposite solids and shadows and often worst lower in the pile."
    },
    {
      "q": "How is set-off prevented?",
      "a": "General practice is to let the ink set before handling, reduce total ink coverage, and manage the pile with lower height, slower delivery, delayed finishing, and slip-sheets. Anti-set-off spray powder is standard — it creates a small air gap between sheets — but it must be used sparingly because of dust and its effect on downstream coating or lamination. Matching media to the process and choosing faster-fixing inks such as quickset or UV/EB also help."
    },
    {
      "q": "Why does toner rub off a laser print?",
      "a": "Toner that rubs or flakes off is the symptom of incomplete fusing — the thermoplastic toner did not melt fully into the paper fibres. Manufacturer guidance is to first check that the media weight and type setting matches the loaded stock and to try fresh, in-specification paper. If toner still fails to fuse after those checks, the device requires servicing by a qualified technician; it is not a user repair, and no fuser temperatures, voltages, or disassembly steps are involved at the user level."
    },
    {
      "q": "How is smear and rub resistance measured?",
      "a": "The standard instrument is the Sutherland Ink Rub Tester, which rubs samples under a set load, speed, and cycle count and evaluates both face degradation and ink transfer onto a receptor. Relevant standards include ASTM D5264, TAPPI T830, ASTM F1571 for business-copy images, and the ISO 18947 rub-resistance family. Densitometry of a transferred ghost is used to quantify set-off severity."
    },
    {
      "q": "Do the ISO/IEC image-quality standards measure set-off?",
      "a": "No. ISO/IEC 13660 (withdrawn) and its successor ISO/IEC 24790 define optical image-quality attributes such as darkness, background, and extraneous marks; they do not name set-off or smear as defects. Set-off contamination or a stray smear would show up as elevated background or as extraneous marks within those frameworks, but that is an interpretation, not a dedicated set-off test."
    }
  ],
  "sources": [
    {
      "title": "Set-off (printing)",
      "url": "https://en.wikipedia.org/wiki/Set-off_(printing)",
      "publisher": "Wikipedia"
    },
    {
      "title": "Anti-set-off spray powder",
      "url": "https://en.wikipedia.org/wiki/Anti-set-off_spray_powder",
      "publisher": "Wikipedia"
    },
    {
      "title": "Set-Off (Offsetting): Why Ink Transfers Onto Another Page",
      "url": "https://mybookquality.com/printing/set-off",
      "publisher": "MyBookQuality"
    },
    {
      "title": "Blocking / Offset — Flexographic Ink Troubleshooting",
      "url": "https://inktsa.sunchemical.com/flexographic/blocking-offset/",
      "publisher": "Sun Chemical"
    },
    {
      "title": "Ink Piling — Ink Troubleshooting",
      "url": "https://inktsa.sunchemical.com/energy-curable/ink-piling/",
      "publisher": "Sun Chemical"
    },
    {
      "title": "5 Spray Powder Usage Concerns",
      "url": "https://corkindustries.com/5-spray-powder-usage-concerns/",
      "publisher": "Cork Industries"
    },
    {
      "title": "Toner Rubs Off, Smudges or is Not Correctly Fused",
      "url": "https://www.support.xerox.com/en-us/article/en/1243119",
      "publisher": "Xerox"
    },
    {
      "title": "Rub Resistance Testing Guide Using the Sutherland Ink Rub Tester",
      "url": "https://www.packqc.com/rub-resistance/",
      "publisher": "PackQC"
    },
    {
      "title": "Sutherland Ink Rub Tester",
      "url": "https://www.cheminstruments.com/sutherland-ink-rub-tester.html",
      "publisher": "ChemInstruments"
    },
    {
      "title": "TAPPI T830 (Sutherland Ink Rub) / ASTM D5264 listing",
      "url": "https://purple-diamond.com/testing-standards/tappi-testing-standards/tappi-t830-sutherland-ink-rub/",
      "publisher": "Purple Diamond"
    },
    {
      "title": "ASTM F1571-95: Abrasion and Smudge Resistance of Images Produced from Business Copy Products (Sutherland Method)",
      "url": "https://store.astm.org/f1571-95.html",
      "publisher": "ASTM International"
    },
    {
      "title": "Abrasion, Rub and Scuff Resistance",
      "url": "https://www.smithers.com/industries/materials/print/print-quality-durability/abrasion-rub-and-scuff-resistance",
      "publisher": "Smithers"
    },
    {
      "title": "ISO 18947-1:2021 — Imaging materials and prints — Abrasion resistance — Part 1: General rub testing methods",
      "url": "https://www.iso.org/standard/75677.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 18947-2:2021 — Imaging materials and prints — Abrasion resistance — Part 2: Rub testing of photographic prints",
      "url": "https://www.iso.org/standard/75678.html",
      "publisher": "ISO"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "set-off",
    "smearing",
    "smudging",
    "rub resistance",
    "anti-set-off spray powder",
    "blocking and bricking",
    "toner rub-off",
    "ink set-off",
    "sutherland ink rub tester",
    "ink drying and curing",
    "print quality defect",
    "offset printing defect"
  ],
  "cluster": "print-quality"
};

export default entry;
