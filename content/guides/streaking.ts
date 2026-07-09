import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "streaking",
  "title": "Print Streaking",
  "description": "Print streaking: light or dark lines running along the paper-feed direction from a fixed fault like a clogged nozzle or a contaminated drum. Causes and fixes.",
  "summary": "Print streaking is an appearance (macro-uniformity) defect in which one or more light or dark lines run through a print parallel to the paper-feed (process) direction. Unlike periodic banding, a streak is typically caused by a single fault fixed at one cross-page position — most often a clogged or misfiring inkjet nozzle, or contamination, wear, or damage on an electrophotographic drum, developer blade, or laser-scanner window. It is diagnosed by printing uniform fills and nozzle-check patterns, checking the defect's orientation, and measuring a scanned density profile; standardized measurement of 1-D uniformity distortions is defined by ISO/TS 18621-21. Remedies range from user-level cleaning cycles, consumable replacement, and calibration to servicing of the imaging engine when the fault is internal.",
  "difficulty": "intermediate",
  "estimatedTime": "13 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What print streaking is"
    },
    {
      "kind": "paragraph",
      "text": "Print streaking (also called streaking, streaks, or, in electrophotographic printing, \"vertical lines\") is a print-quality defect in which one or more unwanted light or dark lines run through the printed output, oriented parallel to the direction the paper travels through the printer — the process direction. It is a spatial non-uniformity of the printed layer: along the streak, the printer lays down too little colorant (a light or \"dropout\" streak) or too much (a dark streak) relative to the surrounding area."
    },
    {
      "kind": "paragraph",
      "text": "Streaking is an optical, appearance-based defect — it concerns how the image looks, specifically the uniformity of tone and color across the page. In the vocabulary developed for office and production printing, it is one of the macro-uniformity attributes. The INCITS W1.1 committee, the U.S. contribution to the ISO/IEC standardization of office-equipment image quality, groups spatial non-uniformities into a compact taxonomy: streaks and banding are one-dimensional variations, while mottle and graininess are two-dimensional. By spatial frequency, streaks, banding, and mottle are the macro-uniformity (lower-frequency) attributes, whereas graininess is the micro-uniformity (high-frequency) attribute. In that framework a streak is specifically a one-dimensional, isolated (aperiodic) lightness or chromatic variation, as distinct from banding, which is one-dimensional but periodic."
    },
    {
      "kind": "paragraph",
      "text": "The defining feature is orientation combined with persistence. Because a streak runs in the process direction, it is produced by something wrong at a single, fixed position across the width of the page (the cross-process direction). As the sheet moves past that fixed fault, the error is drawn out into a continuous line. This is why streaks are usually traceable to a stationary component — a particular inkjet nozzle, one element of a print-head array, a spot on a drum or roller, or a mark on an optical surface — rather than to a timing or rotational error, which instead produces banding across the page (see the comparison below)."
    },
    {
      "kind": "paragraph",
      "text": "Because the phenomenon spans inkjet and electrophotographic (laser and LED) engines, sources use several overlapping names: streaks, streaking, lines, vertical lines (in desktop laser output the paper feeds lengthwise, so process-direction streaks appear \"vertical\"), white/light streaks or dropout (missing colorant), and dark/black or colored streaks (excess colorant). This page uses \"streak\" for the general phenomenon and notes engine-specific terms where relevant."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Appearance and symptoms"
    },
    {
      "kind": "paragraph",
      "text": "A streak presents as a line, or a small set of lines, running the length of the page in the paper-feed direction. Useful observations for recognizing and classifying it:"
    },
    {
      "kind": "list",
      "items": [
        "Light / white streaks (dropout): a pale or fully white line where the printer failed to deposit colorant. In inkjet this is the classic signature of a nozzle that is not firing; in electrophotographic printing it can indicate an obstructed light path (for example, contamination on the laser-scanner window) or a fault that prevents development along one line.",
        "Dark / colored streaks: a line of excess colorant. In electrophotographic printing this often points to contamination, damage, or foreign material at a fixed point on the drum or an adjacent roller, or to a nicked developer metering blade.",
        "Single vs. multiple streaks: a lone streak suggests one localized fault; several regularly spaced streaks can indicate a group of adjacent array elements, or — if they instead repeat down the page rather than across it — a different, periodic defect class.",
        "Single-channel vs. composite: a streak visible in only one colorant (seen in a single-color fill) localizes the fault to that color's nozzle bank or imaging path; a streak present in every channel points to a shared component in the paper path or a downstream stage such as transfer or fusing.",
        "Where it shows: streaks are most visible in uniform fills, midtones, and large solids, and are easy to miss in text or busy images. Printing full-page single-color and composite fills is the standard way to make them visible."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The most reliable classification cue is orientation. A defect that runs with the paper feed is a streak; a defect that runs across the page, especially if it repeats at a regular interval, is banding or another periodic defect (see below). Streaks are also distinct from two-dimensional non-uniformities — mottle (irregular blotchiness) and graininess (fine texture) — which do not form lines."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Streaking vs. banding, mottle, and moiré"
    },
    {
      "kind": "paragraph",
      "text": "Because several print-quality defects look superficially similar, it helps to place streaking within the macro-uniformity family and separate it from neighboring defects."
    },
    {
      "kind": "list",
      "items": [
        "Streaks vs. banding. Both are one-dimensional. Streaks are aperiodic lines parallel to the process direction, caused by a component whose response is non-uniform across the page width but fixed in position — a clogged nozzle, a scratched drum, a contaminated optical window. Banding is periodic and runs perpendicular to the process direction (across the page); it arises from time-varying behavior of a moving subsystem, such as non-uniform photoreceptor or drive velocity, out-of-round development or transfer rollers, or wobble of the laser-scanner polygon mirror. In short: a streak is a fixed-position fault drawn into a line along paper travel; a band is a rhythmic error repeated across the page.",
        "Streaks vs. mottle and graininess. Mottle is a two-dimensional, low-frequency random variation (irregular light-and-dark blotching); graininess is a two-dimensional, high-frequency texture. Neither forms a directional line, so orientation quickly separates them from streaking.",
        "Streaks vs. moiré. Moiré is an interference pattern between two periodic structures (for example, a halftone screen and image detail, or two overlapping screens). It is an artifact of the screening system rather than a fixed-position hardware fault. Screening geometry and moiré are covered on their own pages — see moiré patterns and the halftoning references — and are not repeated here."
      ]
    },
    {
      "kind": "paragraph",
      "text": "All of these are appearance (optical) attributes standardized under the office-equipment image-quality work (INCITS W1.1; ISO/IEC 24790, which superseded ISO/IEC 13660). They describe how the print looks, not whether the printed layer is mechanically durable; permanence problems such as rub-off or smearing are a separate, mechanical class of defect with different causes."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Mechanism and causes: inkjet"
    },
    {
      "kind": "paragraph",
      "text": "In an inkjet engine, the image is built from very large numbers of tiny ink drops fired by an array of nozzles. A streak appears whenever a nozzle — or a small group of nozzles — at a fixed cross-page position fails to place ink correctly while the media advances past it:"
    },
    {
      "kind": "list",
      "items": [
        "Non-firing (clogged/blocked) nozzles → light/white streaks. Dried ink, entrained air, or particulate debris can block a nozzle so it delivers no drop. The unpainted path it should have covered becomes a light or white line running the length of the print. Infrequent use is a leading contributor, because ink left standing in idle nozzles dries out.",
        "Deflected or weak nozzles → misplaced or faint streaks. A partially obstructed nozzle can fire drops at the wrong angle, or with reduced volume or velocity, producing a mispositioned or low-density line rather than a clean gap.",
        "Nozzle-to-nozzle variation → density streaks. Even without an outright failure, systematic differences in drop volume or placement across the array can show up as faint lighter or darker streaks in uniform fills.",
        "Nozzle-plate contamination and ink-path issues. Ink residue or fibers on the nozzle plate, and air or contamination in the ink supply, can disturb specific nozzles and create localized streaking."
      ]
    },
    {
      "kind": "paragraph",
      "text": "A related but distinct defect in scanning (carriage-based) inkjet printers is horizontal banding at swath boundaries caused by media-advance (paper-feed) errors between passes. That is a periodic feed problem rather than a fixed-nozzle streak: it runs across, and repeats down, the page, and is diagnosed differently."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Mechanism and causes: electrophotographic (laser and LED)"
    },
    {
      "kind": "paragraph",
      "text": "In electrophotographic (EP) printing — laser and LED printers, copiers, and digital presses — the image is formed on a photoconductor (the drum or belt, commonly called the OPC), developed with toner, transferred to paper, and fused. A streak results when any stage has a persistent fault at one fixed position across the page, which the moving paper (and the rotating drum) draws into a line:"
    },
    {
      "kind": "list",
      "items": [
        "Photoconductor (drum) contamination, filming, scratches, or damage. Foreign material — paper dust, adhesive from label or envelope stock, staples, or clips — can adhere to or scratch the drum surface at one point, marking a dark line wherever that point contacts the page.",
        "Developer metering (doctor) blade defects. A nick, wear point, or contamination on the blade that meters toner onto the developer roller lets through a line of too much or too little toner, producing a streak.",
        "Optical-path contamination → white streaks. Dust or residue on the laser-scanner exit window (the \"laser glass\") or on an LED-head cover blocks exposure along one line, leaving a light or white streak.",
        "Dead or weak LED elements. In LED print-heads, a single failed emitter in the linear array leaves a light streak, directly analogous to a dead inkjet nozzle.",
        "Worn or contaminated rollers and consumables. Charge, developer, transfer, and fuser members that are contaminated, worn, or damaged at a point can each contribute streaks; contaminated or end-of-life developer, and toner that is out of the manufacturer's specification, are also documented contributors."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Many EP streak causes are tied to a user-replaceable imaging consumable (in most desktop machines the drum/imaging unit and developer are part of a replaceable cartridge). Faults in the fixed engine hardware — the laser scanner, the transfer subsystem, or the fuser — are internal and are addressed by servicing rather than by user action."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Streaks vs. repetitive defects: using periodicity to localize the fault"
    },
    {
      "kind": "paragraph",
      "text": "A practical extension of the streak/band distinction is periodicity along the page. A true streak is continuous and aperiodic: it comes from a fault fixed in position (a nozzle, a blade nick, an optical spot), so it prints as an unbroken line. A defect that instead repeats at a regular interval down the page belongs to the periodic (repetitive) family: it comes from a rotating member, and the repeat interval corresponds to that member's circumference. Because different rollers and drums have different circumferences, the measured repeat spacing is, as a matter of general industry practice, used to reason about which rotating subsystem is implicated."
    },
    {
      "kind": "paragraph",
      "text": "For the purposes of this reference, the useful takeaways are: (1) a continuous line in the feed direction points to a fixed-position component (nozzle, print-head element, metering blade, drum spot, optical window); and (2) a mark repeating at a fixed interval points to a rotating component (a specific roller or the drum). Identifying and correcting a specific internal rotating component is a service activity. This page does not provide device-specific repeat-interval charts, part identifications, or disassembly steps."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Diagnosis and measurement"
    },
    {
      "kind": "paragraph",
      "text": "Streaking is diagnosed by making it visible under controlled conditions, then, where objectivity is needed, measuring it."
    },
    {
      "kind": "list",
      "items": [
        "Print controlled test images. Full-page single-colorant fills, composite fills, and smooth gradients reveal streaks that are invisible in ordinary content. Printing each colorant separately shows whether a streak is confined to one channel (localizing it to that color's nozzle bank or imaging path) or shared across all channels (pointing to the common paper path, transfer, or fusing).",
        "Nozzle-check pattern (inkjet). Most inkjet printers can print a built-in nozzle-check pattern in which each nozzle contributes a known mark; gaps or broken segments show exactly which nozzles or channels are failing. This both confirms a nozzle cause and guides the cleaning response.",
        "Orientation and rotation test. Because streaks follow the process direction, comparing a normally oriented print with the same content rotated on the page indicates whether the defect stays fixed relative to paper travel (an engine or media-transport cause) or moves with the image content (a data, rendering, or file cause). This quickly separates hardware streaking from image-side artifacts.",
        "Scanned-profile (instrumented) measurement. Objective assessment scans the print and computes a one-dimensional lightness or density profile across the direction perpendicular to the streak; a streak appears as a localized deviation (a spike or dip) in that profile, and automated methods fit streak templates to such profiles to characterize position and strength. The standardized measurement of one-dimensional macroscopic-uniformity distortions — streaks and bands — is defined in ISO/TS 18621-21, which specifies a test-form layout, scanning-spectrophotometer sampling, and a Macro-Uniformity-Score; by design it targets lower-frequency 1-D distortions and does not capture very fine, high-frequency patterns such as individual missing nozzles. The broader appearance-attribute framework is given by INCITS W1.1 and ISO/IEC 24790 (which superseded ISO/IEC 13660)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "An honesty point mirrored from the standards themselves: these are optical/appearance metrics. They quantify how uniform the print looks; they say nothing about whether the printed layer is mechanically durable, which is a separate (permanence) concern."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "General remediation principles"
    },
    {
      "kind": "paragraph",
      "text": "The appropriate response depends on the engine and on where the fault sits. The following are general, well-documented practices; anything internal to the imaging engine is described as requiring servicing, not instructed here."
    },
    {
      "kind": "paragraph",
      "text": "Inkjet."
    },
    {
      "kind": "list",
      "items": [
        "Run the manufacturer's print-head cleaning (nozzle-recovery) cycle and re-check with the nozzle-check pattern; a partially cleared pattern may improve with a further cycle.",
        "If ink has dried in idle nozzles, allowing the printer to rest before another cleaning can help the manufacturer's cycle clear the clog. Using the printer regularly, and letting it park/cap its heads, reduces drying in the first place.",
        "Keep ink and supplies within specification and not past their usable life. If a nozzle remains dead after the recommended cleaning steps, the print-head may need deeper maintenance or, for permanent heads, servicing."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Electrophotographic."
    },
    {
      "kind": "list",
      "items": [
        "Because many EP streaks trace to a user-replaceable imaging consumable, replacing or — where the manufacturer provides a routine — cleaning the affected drum/imaging unit or developer per that guidance often clears the defect.",
        "Keep foreign material out of the paper path (avoid shedding, adhesive-bearing, or damaged media that can deposit debris on the drum), and clean only user-accessible surfaces, only as the manufacturer directs.",
        "Use toner and supplies that meet the manufacturer's specification; out-of-specification supplies are a documented contributor to streaking."
      ]
    },
    {
      "kind": "paragraph",
      "text": "General to both."
    },
    {
      "kind": "list",
      "items": [
        "Match the media setting to the loaded stock and keep the paper path clean.",
        "Keep firmware and drivers current, and use the printer's built-in calibration and uniformity-correction routines. Many engines can reduce or mask low-contrast streaks and banding by redistributing output or applying position-dependent tone correction; automatic streak compensation driven by scanned feedback is described in the engineering literature, and some inkjet systems offer nozzle-failure compensation that reassigns work away from a failed nozzle.",
        "Reducing very high area coverage, or lightening a problem channel, can lessen the visibility of a marginal streak; tonal reproduction and colorant-mixing choices are covered under dot gain and black generation."
      ]
    },
    {
      "kind": "paragraph",
      "text": "When user-level cleaning, consumable replacement, media correction, and calibration do not resolve the streak, the fault likely lies in fixed engine hardware — the laser scanner, transfer subsystem, fuser, or a permanent print-head — which is a precision and/or hot, high-voltage assembly that requires servicing by a qualified technician. This reference is descriptive: it does not provide disassembly steps, part numbers, error codes, service temperatures or voltages, or maintenance intervals."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Effect on color, and where to go next"
    },
    {
      "kind": "paragraph",
      "text": "Because a streak is a local density error, it also shifts the measured tone and color along the affected line. Streaking can therefore undermine calibration and profiling and should be resolved before characterizing a device; conversely, uniformity calibration can partially mask low-contrast streaks. For the color-measurement and calibration context, see color calibration, printer profiling, and color management. For how tone is physically rendered — and can spread — see dot gain and the halftoning and screening references. For step-by-step fixes to specific everyday symptoms, see the practical consumer guides under troubleshooting/."
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
      "slug": "print-banding"
    },
    {
      "section": "guides",
      "slug": "ghosting"
    },
    {
      "section": "guides",
      "slug": "nozzle-clogging"
    },
    {
      "section": "guides",
      "slug": "background-fogging"
    },
    {
      "section": "tools",
      "slug": "moire-patterns"
    },
    {
      "section": "tools",
      "slug": "dot-gain"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between streaking and banding?",
      "a": "Streaks are aperiodic one-dimensional lines that run parallel to the paper-feed (process) direction, produced by a fault fixed at one cross-page position — for example a clogged nozzle or a scratched drum. Banding is periodic and runs across the page (perpendicular to paper travel), produced by time-varying or rotational behavior such as drive-speed variation, out-of-round rollers, or scanner-mirror wobble. Orientation and periodicity are the distinguishing signatures."
    },
    {
      "q": "Why does my inkjet print white lines or streaks?",
      "a": "Light or white streaks in inkjet output usually mean one or more nozzles are not firing — commonly because of dried ink, entrained air, or debris in the nozzle. Running the printer's built-in nozzle-check pattern shows which nozzles or channels are affected; the manufacturer's print-head cleaning cycle is the standard first remedy, and using the printer regularly helps prevent the drying that causes clogs."
    },
    {
      "q": "What causes vertical streaks on a laser printer?",
      "a": "A persistent fault at a fixed position is drawn into a line as the page moves: contamination, filming, scratches, or foreign material (paper dust, label adhesive, staples) on the photoconductor drum; a nicked or contaminated developer metering blade; a dirty laser-scanner window (\"laser glass\"); a weak or dead LED element; or worn imaging consumables. Many causes trace to a user-replaceable imaging unit; faults in fixed engine hardware require servicing."
    },
    {
      "q": "Can streaking be measured objectively?",
      "a": "Yes. The print is scanned and a one-dimensional lightness or density profile is computed perpendicular to the streak, where the streak appears as a localized deviation. ISO/TS 18621-21 standardizes a Macro-Uniformity-Score for one-dimensional distortions (streaks and bands), though by design it targets lower-frequency patterns and does not capture very fine ones such as individual missing nozzles."
    },
    {
      "q": "Is streaking the same as a toner-adhesion or smearing problem?",
      "a": "No. Streaking is an optical/appearance defect — how the image looks, namely a line of wrong density — whereas rub-off, smearing, and flaking are mechanical permanence problems (whether the printed image survives handling). They have different causes and are diagnosed differently."
    },
    {
      "q": "When does streaking require a technician?",
      "a": "When user-level steps do not clear it — cleaning cycles, replacing user-replaceable consumables (a print-head where applicable, or the drum/imaging unit), matching media settings, and running the printer's calibration and uniformity correction — the fault likely lies in fixed engine hardware (laser scanner, transfer subsystem, fuser, or a permanent print-head) and requires servicing by a qualified technician. It is not a user disassembly task."
    }
  ],
  "sources": [
    {
      "title": "ISO/TS 18621-21:2023 — Graphic technology — Image quality evaluation methods for printed matter — Part 21: Measurement of 1D distortions of macroscopic uniformity utilizing scanning spectrophotometers",
      "url": "https://www.iso.org/standard/83420.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO/IEC 24790:2017 — Information technology — Office equipment — Measurement of image quality attributes for hardcopy output — Monochrome text and graphic images",
      "url": "https://www.iso.org/standard/69796.html",
      "publisher": "ISO/IEC"
    },
    {
      "title": "ISO/IEC 13660:2001 — Information technology — Office equipment — Measurement of image quality attributes for hardcopy output — Binary monochrome text and graphic images",
      "url": "https://www.iso.org/standard/22145.html",
      "publisher": "ISO/IEC"
    },
    {
      "title": "INCITS W1.1 development update: Appearance-based image quality standards for printers",
      "url": "https://www.researchgate.net/publication/253317628_INCITS_W11_development_update_Appearance-based_image_quality_standards_for_printers",
      "publisher": "Society for Imaging Science and Technology (IS&T)"
    },
    {
      "title": "W1.1 macro uniformity (Electronic Imaging, Proc. SPIE 7242)",
      "url": "https://www.spiedigitallibrary.org/conference-proceedings-of-spie/7242/1/W11-macro-uniformity/10.1117/12.805363.short",
      "publisher": "SPIE"
    },
    {
      "title": "Measurement of Macro-uniformity: Streaks, Bands, Mottle and Chromatic Variations (PICS 2001)",
      "url": "https://www.researchgate.net/publication/220865274_Measurement_of_Macro-uniformity_Streaks_Bands_Mottle_and_Chromatic_Variations",
      "publisher": "Society for Imaging Science and Technology (IS&T)"
    },
    {
      "title": "White vertical lines or streaks on printed pages",
      "url": "https://help.brother-usa.com/app/answers/detail/a_id/150372/",
      "publisher": "Brother"
    },
    {
      "title": "Black vertical lines or streaks on printed pages",
      "url": "https://help.brother-usa.com/app/answers/detail/a_id/153021/",
      "publisher": "Brother"
    },
    {
      "title": "Printing the Nozzle Check Pattern / Cleaning the Print Head Nozzles",
      "url": "https://support.usa.canon.com/kb/s/article/ART109200",
      "publisher": "Canon"
    },
    {
      "title": "Cleaning the Print Head",
      "url": "https://files.support.epson.com/htmldocs/pho22_/pho22_rf/maint_2.htm",
      "publisher": "Epson"
    },
    {
      "title": "Method and apparatus for characterizing printer streaking (US 8,456,706)",
      "url": "https://patents.google.com/patent/US8456706",
      "publisher": "Google Patents"
    },
    {
      "title": "Active compensation of streaks using spatial filtering and feedback control (US 7,424,169)",
      "url": "https://patents.google.com/patent/US7424169",
      "publisher": "Google Patents / Xerox"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "print streaking",
    "streaks vs banding",
    "vertical lines on printed pages",
    "inkjet nozzle clog streak",
    "laser printer streaks",
    "macro-uniformity",
    "process direction defect",
    "print quality defect",
    "iso/ts 18621-21",
    "printhead cleaning",
    "drum contamination",
    "nozzle check pattern"
  ],
  "cluster": "print-quality"
};

export default entry;
