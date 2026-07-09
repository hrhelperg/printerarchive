import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "toner-adhesion",
  "title": "Toner Adhesion and Fusing Defects",
  "description": "Why laser and LED printer toner rubs off, flakes, or offsets: the fusing process, the cold-to-hot offset window, causes, testing, and general remedies.",
  "summary": "Toner adhesion (fusing) defects are permanence failures in which a laser or LED printer's toner image is correctly placed but not durably bonded to the paper, so it rubs off, flakes at folds, or offsets onto rollers and later sheets. They originate in the fuser, where heat and pressure should melt the toner and press it into the paper fibers, and they map onto a temperature \"fusing window\" between under-fusing (rub-off, flaking) and hot offset (ghost repeats). Because adhesion is a mechanical property, it is assessed by crease, rub, and tape tests rather than by the optical image-quality standards ISO/IEC 13660 and 24790. Most user-side remedies come down to matching the media-type setting to the stock, using in-specification dry paper and specified supplies, and routing internal fuser problems to a qualified technician.",
  "difficulty": "intermediate",
  "estimatedTime": "12 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Definition and terminology"
    },
    {
      "kind": "paragraph",
      "text": "Toner adhesion (or fusing) defects are print-permanence failures specific to dry-toner electrophotographic (EP) printing — laser and LED printers, digital presses, and copiers. In these defects the toner image is present and correctly positioned on the page, but it is not durably bonded to the paper: it rubs off, flakes, cracks, or smears under handling, or it transfers (\"offsets\") onto rollers and back onto later sheets. The root cause lies in the final fusing (also called fixing) step, in which heat and pressure are meant to melt the powdered toner and bond it permanently to the substrate."
    },
    {
      "kind": "paragraph",
      "text": "Freshly developed toner is a thermoplastic powder held to the page only weakly, by electrostatic and van der Waals (dispersion) forces. Durable adhesion is created only at fusing, when the resin melts and forms a bond with the paper fibers. A toner-adhesion defect in the field therefore almost always signals a fusing problem rather than a fault in the earlier charge, develop, or transfer stages."
    },
    {
      "kind": "paragraph",
      "text": "This is a mechanical, permanence defect — distinct from the optical image-quality defects covered elsewhere on this site. Screening artifacts, dot gain, and moiré concern how an image looks; adhesion and fusing defects concern whether the image survives handling. Industry sources use several overlapping names for these phenomena, which it helps to relate up front:"
    },
    {
      "kind": "list",
      "items": [
        "Poor fusing, under-fusing, or low fix level — the toner is inadequately bonded.",
        "Rub-off, flaking, and smearing — visible outcomes of a weak bond.",
        "Cold offset and hot offset (also called offsetting or ghosting) — toner transferring to the fuser and re-depositing on the page."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Appearance and symptoms"
    },
    {
      "kind": "paragraph",
      "text": "The defect is recognized by how the toner behaves under handling rather than by its color or placement:"
    },
    {
      "kind": "list",
      "items": [
        "Rub-off and smearing: passing a finger, eraser, or another sheet across the print lifts or smears the toner, leaving a gray smudge and a lightened image. It is worst in high-coverage dark or solid areas.",
        "Flaking and crease cracking: when the page is folded, toner cracks and flakes away along the fold line. This is the classic sign of low fix level and the basis of the standard crease test.",
        "Powdery, dull, low-gloss solids: under-fused solids look matte, granular, or as though the toner is sitting on top of the paper rather than fused into it, and the toner mass can be brushed away.",
        "Offset and ghost repeats: a faint second copy of the image appears further down the same page or on later pages. In hot offset, molten toner picked up onto a hot fuser roller is re-deposited on subsequent revolutions, so the repeats are spaced at the roller's circumference.",
        "Toner on the fuser or on the back of sheets: in cold offset, unfused toner is picked off the page and adheres to the fuser, later reappearing as contamination."
      ]
    },
    {
      "kind": "paragraph",
      "text": "As a rough guide, rub-off and flaking indicate too little fusing energy (the cold end of the process window), whereas offset and ghosting most often indicate too much (hot offset) — although offset can also occur at the cold extreme, as described below."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The fusing process at a high level"
    },
    {
      "kind": "paragraph",
      "text": "This section summarizes fusing only to the depth needed to understand the defects; the print engine and xerographic process are treated in the site's process references."
    },
    {
      "kind": "paragraph",
      "text": "Dry toner is a thermoplastic powder: micron-scale particles of a binder resin (commonly styrene-acrylic or polyester) carrying pigment, together with a wax release agent and charge-control and flow additives. It is engineered to be solid at room temperature but to soften and flow within a specific, comparatively narrow temperature band. After the image is developed and electrostatically transferred to the paper, it is still only loose powder."
    },
    {
      "kind": "paragraph",
      "text": "The fuser applies heat and pressure as the sheet passes through a nip formed between a heated roller or belt and a pressure member. Heat softens and melts the toner particles, which coalesce into a continuous film, while pressure presses the molten toner into and around the paper fibers. On cooling, the toner solidifies into a durable bond. The bond has two components worth distinguishing:"
    },
    {
      "kind": "list",
      "items": [
        "Mechanical anchoring: molten toner penetrates and locks around surface fibers and pores.",
        "Cohesion and wetting: the melted resin wets the fiber surface, and the individual particles fuse into a single film."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Adhesion strength rises with adequate melting and compression; a print's gloss is a byproduct governed by temperature, pressure, and dwell time in the nip. Beyond this, the fuser is a hot, high-voltage assembly, and its internal mechanics, temperatures, and parts are outside the scope of this descriptive reference."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The fusing window: cold offset, minimum fix, and hot offset"
    },
    {
      "kind": "paragraph",
      "text": "The central organizing concept for these defects is the fusing window, documented in toner-resin and service literature through four related terms (given here qualitatively, without device temperatures):"
    },
    {
      "kind": "list",
      "items": [
        "Cold offset temperature (COT): the low-temperature limit below which under-melted toner fails to fix and instead offsets onto the fuser roller. It sits below the minimum fix temperature.",
        "Minimum fix temperature (MFT): the lowest temperature that produces acceptable adhesion, defined operationally by a crease or fold test.",
        "Hot offset temperature (HOT): the temperature above which molten toner becomes so tacky that it splits, with part sticking to the fuser instead of remaining on the page.",
        "Fusing latitude (the fusing window): the usable band between MFT and HOT. Proper fusing requires operating inside this window, and a wider window is more robust to variation in media and environment."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The defects map directly onto this window:"
    },
    {
      "kind": "list",
      "items": [
        "Below MFT — under-fusing and poor fix, producing rub-off, flaking, and crease cracking, because the resin never fully melted or penetrated.",
        "Around or below COT — cold offset, where insufficiently melted toner is picked off the page and adheres to the roller as contamination.",
        "Above HOT — hot offset, where over-tacky toner splits and part transfers to the roller, re-printing downstream as offset or ghost images."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Toner materials and why the window exists"
    },
    {
      "kind": "paragraph",
      "text": "A framing note: the numeric ranges below describe the chemistry of the toner as a consumable material. They are documented, illustrative values that vary from one toner system to another; they are not device settings and are not values to apply to a printer or to diagnose a machine against."
    },
    {
      "kind": "list",
      "items": [
        "Binder-resin glass-transition temperature (Tg) is typically engineered to roughly 50–70 °C — high enough to resist caking or \"blocking\" in storage, low enough to melt and flow at fusing. Too low a Tg harms shelf stability; too high a Tg raises melt viscosity and impairs low-temperature fixing.",
        "Melt and flow begin a modest amount above Tg; lower melt viscosity aids low-temperature fixing.",
        "Wax release agents (for example paraffin, carnauba, rice, or beeswax, melting in the region of roughly 45–90 °C) migrate to the surface of the melt to aid release from the roller and widen the anti-offset margin.",
        "Resin chemistry matters: polyester binders generally fix at lower temperatures than styrene-acrylics, and cross-linking raises the hot-offset temperature, broadening the window against hot offset."
      ]
    },
    {
      "kind": "paragraph",
      "text": "This is why a toner formulation must match the engine it is used in. A cartridge whose resin melts at the wrong temperature narrows or shifts the fusing window and can produce rub-off or offset even on a healthy printer — a documented compatibility issue of melt-range mismatch rather than a blanket judgment about any particular supply."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Media, moisture, and other causes"
    },
    {
      "kind": "paragraph",
      "text": "Because the substrate takes part in the fusing bond, media choice is a major cause family, described here qualitatively:"
    },
    {
      "kind": "list",
      "items": [
        "Thermal mass of the paper: the heat needed to fuse a given toner depends on the sheet's thermal mass and surface. Heavier, thicker paper absorbs more heat, so a fusing condition that fully fixes lightweight paper can under-fuse heavyweight stock and cause rub-off. (As an illustration only, media are often grouped into light, mid, and heavy weights around 75 gsm and 160 gsm, with coated stock needing more energy than uncoated of the same weight; exact figures vary by system.)",
        "Surface and coating: coated, glossy, or very smooth stocks present fewer fibers and pores for mechanical anchoring and behave differently thermally, so toner can form a lower-quality bond and rub off.",
        "Moisture and humidity: damp paper carries water that absorbs fusing heat as it vaporizes, lowering the effective fusing energy; cold or humid conditions reduce fusing performance. High moisture can also disturb charge and transfer, a separate contributor.",
        "The media-type setting: selecting a paper weight or type in the driver or panel changes the engine's fusing behavior. A media-type setting that does not match the loaded stock — for example plain-paper settings used for heavy or coated media — is one of the most common user-fixable causes of rub-off."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Several contributors sit inside the machine and are matters for servicing rather than user adjustment; they are described here, not instructed:"
    },
    {
      "kind": "list",
      "items": [
        "A worn or failing fuser (an aged roller, belt, or pressure member, or a degraded surface or release layer) may no longer reach or hold the needed heat and pressure, giving progressive rub-off or offset. This requires servicing by a qualified technician.",
        "Depleted or uneven release agent, in systems that use fuser oil or release-agent management, can cause offset when too little is present or oil ghosting when too much is; this likewise requires servicing.",
        "Excessive total toner laydown — very high area coverage, or rich four-color composite blacks — is harder to fuse than light coverage. Reducing total toner through black generation and GCR can ease fusing of dark, high-coverage areas.",
        "Non-genuine or mismatched toner whose melt properties differ from the engine's target window can cause both rub-off and offset, as noted above."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Diagnosis and measurement"
    },
    {
      "kind": "paragraph",
      "text": "An important honesty point governs this topic: the office-equipment image-quality standards do not measure toner adhesion or fusing durability. ISO/IEC 13660:2001 (Information technology — Office equipment — Measurement of image quality attributes for hardcopy output — Binary monochrome text and graphic images) and its successor ISO/IEC 24790:2017 (Information technology — Office equipment — Measurement of image quality attributes for hardcopy output — Monochrome text and graphic images) both define device-independent optical attributes — such as darkness, raggedness, blurriness, line width, mottle, and graininess — and their scope is limited to how the printed image appears, not whether it survives handling. (ISO/IEC 13660 was withdrawn and superseded by 24790, which carries a later amendment.) That these standards address appearance rather than mechanical permanence follows from their own stated scope, which enumerates only optical attributes."
    },
    {
      "kind": "paragraph",
      "text": "Adhesion and fix durability are assessed by separate, purpose-built tests:"
    },
    {
      "kind": "list",
      "items": [
        "Crease or fold test: a solid print is folded on itself, unfolded, and the toner loss along the crease is measured — as residual density or on a rank scale from no cracking to large peel-off. The temperature that gives acceptable crease performance defines the minimum fix temperature, and this is the standard way \"fix level\" is quantified.",
        "Rub and abrasion resistance: a weighted sample rubs the print for a set number of cycles and the density loss or smear is graded. ASTM D5264 (the Sutherland rub test) and TAPPI T830 were developed for inks and coatings and are applied by analogy to toner durability.",
        "Tape (pull-off) or cross-hatch adhesion test: adhesive tape is pressed onto the image and peeled, and the amount of toner removed is graded. ASTM D3359 is the canonical tape-test method for this, with results typically graded on a 0–5 scale."
      ]
    },
    {
      "kind": "paragraph",
      "text": "For field triage, general manufacturer guidance is to first distinguish under-fusing (rub-off, flaking, matte solids) from hot offset (evenly spaced ghost repeats); then confirm that the media-type setting matches the loaded stock, that the paper is in specification and dry, and that genuine or specified supplies are in use. If those are correct and the defect persists, the fuser is the likely source and the unit requires servicing."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "General remediation principles"
    },
    {
      "kind": "paragraph",
      "text": "The remedies below are general, well-documented practices. User-accessible settings and consumables are described as actions a user can take; anything internal to the fuser is described as requiring service, not instructed. Because printers and media vary, these are tendencies rather than fixed rules."
    },
    {
      "kind": "list",
      "items": [
        "Match the media-type setting to the actual stock. Selecting the correct weight or type — heavy, cardstock, labels, coated, and so on — lets the engine apply appropriate fusing heat and dwell. This is among the most common user-fixable causes of rub-off on heavy or coated media.",
        "Use in-specification, dry media. Keep within the printer's supported weight and type range, store paper sealed and acclimated, and avoid damp, curled, over-smooth, or non-laser-rated stock. Confirm that labels and specialty media are rated to survive the fusing process before use.",
        "Control the environment. Avoid printing in excessively cold or humid conditions, which reduce fusing performance.",
        "Use toner and supplies that meet the manufacturer's specification, so the toner's melt window matches the engine; mismatched melt properties are a documented cause of both rub-off and offset.",
        "Reduce total toner laydown where feasible — for example through black generation and GCR, or lighter coverage — for hard-to-fuse jobs."
      ]
    },
    {
      "kind": "paragraph",
      "text": "When correct media, environment, and supplies do not resolve the problem, the fuser or the release-agent system likely needs attention. The fuser is a hot, high-voltage assembly that is serviced by a qualified technician; this reference does not instruct disassembly, temperature changes, or part replacement, all of which require servicing."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to other print-quality topics"
    },
    {
      "kind": "paragraph",
      "text": "Toner adhesion is a mechanical and permanence property, so it sits apart from the optical and color topics covered elsewhere, but it connects to several of them:"
    },
    {
      "kind": "list",
      "items": [
        "Dot gain: the same heat and pressure that fuse toner also spread it, so fusing contributes to physical dot gain and tonal shift.",
        "Black generation and GCR: reducing total toner mass in dark and neutral areas eases fusing of high-coverage regions, linking a color-separation decision directly to fusing robustness.",
        "Halftoning and the screening family: the image is laid down as halftone toner dots that must then fuse, so screening and adhesion are sequential stages of the same output — the screening pages cover dot formation, this page covers whether those dots stay put.",
        "Moiré: a useful contrast, being a purely optical defect, whereas adhesion failure is mechanical.",
        "Color calibration and color management: fusing state and gloss change a print's measured density, so the fusing condition can influence calibration and color measurement."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Screening, dot gain, and moiré are treated in full on their own pages and are referenced here rather than re-explained."
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
      "slug": "ghosting"
    },
    {
      "section": "guides",
      "slug": "background-fogging"
    },
    {
      "section": "guides",
      "slug": "smearing-and-set-off"
    },
    {
      "section": "guides",
      "slug": "laser-printing"
    },
    {
      "section": "tools",
      "slug": "dot-gain"
    },
    {
      "section": "tools",
      "slug": "black-generation"
    }
  ],
  "faqs": [
    {
      "q": "Why does the toner rub off my prints?",
      "a": "Rub-off is under-fusing: the toner was not fully melted and pressed into the paper fibers, so the bond is weak. The most common user-side cause is a media-type setting that does not match the stock, so the engine under-heats heavy or coated paper; damp or out-of-specification paper, mismatched supplies, and a worn fuser (which requires servicing) are other causes."
    },
    {
      "q": "What is the difference between cold offset and hot offset?",
      "a": "Cold offset happens at the cold end of the fusing window: insufficiently melted toner is picked off the page and sticks to the fuser, then reappears as contamination. Hot offset happens above the hot-offset temperature: over-tacky molten toner splits, and the part that transfers to the fuser roller re-prints as faint ghost repeats spaced at the roller's circumference."
    },
    {
      "q": "Do ISO/IEC 13660 and 24790 measure toner adhesion?",
      "a": "No. Both standards define optical image-quality attributes — such as darkness, raggedness, blurriness, line width, mottle, and graininess — and their scope covers how the print appears, not whether it survives handling. Adhesion and fix durability are assessed by separate methods: the crease test, rub/abrasion tests (ASTM D5264, TAPPI T830), and the tape/cross-hatch test (ASTM D3359)."
    },
    {
      "q": "How is fusing quality or fix level tested?",
      "a": "The standard measure is the crease (fold) test: a solid print is folded, unfolded, and the toner loss along the crease is graded; the temperature that gives acceptable crease performance defines the minimum fix temperature. Rub testers (for example the Sutherland test) grade abrasion resistance, and the tape/cross-hatch adhesion test (ASTM D3359) grades toner pulled off by adhesive tape, typically on a 0–5 scale."
    },
    {
      "q": "Can I fix poor fusing myself?",
      "a": "Often, on the user side: match the media-type setting to the stock, use in-specification dry paper and specified toner, avoid printing in very cold or humid conditions, and reduce heavy coverage where possible. If those steps do not resolve it, the fuser or release-agent system likely needs attention. The fuser is a hot, high-voltage assembly serviced by a qualified technician, not a user-disassembly task."
    }
  ],
  "sources": [
    {
      "title": "Xerography / Electrophotography Overview (tutorial)",
      "url": "https://www.imaging.org/IST/IST/Resources/Tutorials/Xerography.aspx",
      "publisher": "Society for Imaging Science and Technology (IS&T)"
    },
    {
      "title": "6.4 Electrophotographic Process — Graphic Design and Print Production Fundamentals",
      "url": "https://ecampusontario.pressbooks.pub/graphicdesign/chapter/6-4-electrophotographic-process/",
      "publisher": "eCampus Ontario"
    },
    {
      "title": "Toner Adhesion in Electrophotography (book chapter)",
      "url": "https://link.springer.com/chapter/10.1007/978-1-4615-9531-1_13",
      "publisher": "Springer"
    },
    {
      "title": "Journal of Imaging Science and Technology 57(5), 2013 — toner adhesion vs. temperature and charge",
      "url": "https://library.imaging.org/admin/apis/public/api/ist/website/downloadArticle/jist/57/5/art00005",
      "publisher": "Society for Imaging Science and Technology (IS&T)"
    },
    {
      "title": "The Adhesion of Spherical Toner: Electrostatic and van der Waals Interactions",
      "url": "https://library.imaging.org/admin/apis/public/api/ist/website/downloadArticle/print4fab/17/1/art00039_2",
      "publisher": "Society for Imaging Science and Technology (IS&T)"
    },
    {
      "title": "Reactive melt mixing process for preparing cross-linked toner resin (EP0550989A1)",
      "url": "https://patents.google.com/patent/EP0550989A1/en",
      "publisher": "Google Patents (Xerox)"
    },
    {
      "title": "Low gloss, low melt cross-linked toner resins (EP0590314B1)",
      "url": "https://patents.google.com/patent/EP0590314B1/en",
      "publisher": "Google Patents"
    },
    {
      "title": "Fusing Temperature (service documentation)",
      "url": "http://support.ricoh.com/bb_v1oi/pub_e/oi_view/0001079/0001079458/view/adjustment/int/0170.htm",
      "publisher": "Ricoh"
    },
    {
      "title": "Toner, method for preparing the toner (US 7,241,548 — Tg / resin properties)",
      "url": "https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/7241548",
      "publisher": "USPTO"
    },
    {
      "title": "HP LaserJet Print Media Guide",
      "url": "https://kaas.hpcloud.hp.com/pdf-public/pdf_380033_en-US-1.pdf",
      "publisher": "HP"
    },
    {
      "title": "Fusers, printing apparatuses, and methods of fusing toner on media (US 7,697,860)",
      "url": "https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/7697860",
      "publisher": "USPTO"
    },
    {
      "title": "Moisture transport in paper passing through the fuser nip of a laser printer",
      "url": "https://www.researchgate.net/publication/317773479_Moisture_transport_in_paper_passing_through_the_fuser_nip_of_a_laser_printer",
      "publisher": "ResearchGate"
    },
    {
      "title": "Fuser release agent management (RAM) system (US 5,576,821)",
      "url": "https://patents.google.com/patent/US5576821",
      "publisher": "Google Patents (Xerox)"
    },
    {
      "title": "Release agent application system for a heated fuser roll (US 4,050,801)",
      "url": "https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/4050801",
      "publisher": "USPTO"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "toner adhesion",
    "fusing defects",
    "toner rub-off",
    "cold offset",
    "hot offset",
    "under-fusing",
    "poor fusing",
    "fusing window",
    "minimum fix temperature",
    "crease test",
    "toner flaking",
    "laser printer fusing"
  ],
  "cluster": "print-quality"
};

export default entry;
