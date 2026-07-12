import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "amplitude-modulation-screening",
  "title": "Amplitude Modulation (AM) Screening",
  "description": "Amplitude modulation (AM) screening: how conventional halftone screens vary dot size on a fixed grid, plus screen ruling, angles, moire, and rosette patterns.",
  "summary": "Amplitude modulation (AM) screening — also called conventional, periodic, or clustered-dot screening — is the traditional halftone method in which dots sit on a fixed regular grid and represent tone by varying in size, small for highlights and large for shadows. Each process colour is screened at its own angle and ruling so that the overlapping lattices form a fine rosette rather than a coarse moiré pattern, an arrangement reflected in process-control standards such as ISO 12647-2. This page goes deeper than the halftoning overview it complements, detailing the AM halftone cell and dot-growth mechanism, screen ruling and its resolution and gray-level constraints, screen-angle and moiré control, and the practical tradeoffs that keep AM the workhorse of commercial offset.",
  "purpose": "Amplitude modulation (AM) screening is the conventional halftone method in which dots on a fixed grid vary in size to represent tone.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Definition and terminology"
    },
    {
      "kind": "paragraph",
      "text": "Amplitude modulation (AM) screening is the conventional and most common form of halftone screening, in which the halftone dots are placed on a fixed, regular grid at a constant spacing and the tone of an area is represented by varying the size of the dots: small dots reproduce light highlights and progressively larger dots reproduce darker tones, up to solid ink coverage in the deepest shadows. Because the dot centres remain on a periodic lattice while only the dot area changes, ISO 12647-2 and much of the graphic-arts literature refer to AM screens as \"periodic screens.\" Other common names include conventional, ordered, and clustered-dot screening."
    },
    {
      "kind": "paragraph",
      "text": "The \"amplitude modulation\" label is borrowed by analogy from telecommunications. In an AM radio signal the carrier frequency is held constant and the information is carried in the varying amplitude of the wave; in AM screening the grid frequency (the screen ruling) is held constant and the tonal information is carried in the varying \"amplitude,\" that is, the size, of each dot. Its counterpart, frequency modulation (FM) or stochastic screening, inverts the roles: the dots are of nearly uniform, very small size and it is their spacing and placement that vary. The high-level contrast between the two families is treated in the halftoning overview; this page concentrates on the mechanics, geometry, and practical behaviour specific to AM screens."
    },
    {
      "kind": "paragraph",
      "text": "A single AM screen is defined by three principal parameters:"
    },
    {
      "kind": "list",
      "items": [
        "Screen ruling (frequency) — how many dot rows occupy a unit length, in lines per inch (lpi) or lines per centimetre.",
        "Screen angle — the orientation of the dot lattice, which becomes critical once several colours are overprinted.",
        "Dot shape — round, square, elliptical, and others, determined by the order in which the halftone cell fills."
      ]
    },
    {
      "kind": "paragraph",
      "text": "In colour work each process ink is screened independently, and the interaction of the several periodic lattices — governed chiefly by their relative angles and frequencies — determines whether the result is a clean, stable reproduction or is spoiled by visible interference."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How amplitude modulation builds tone: the halftone cell"
    },
    {
      "kind": "paragraph",
      "text": "At output resolution an AM screen is realised as a repeating halftone cell: a small block of device pixels (or, on a platesetter, addressable spots) whose members are switched on in a fixed sequence as the required tone darkens. The order in which the cell fills is described in PostScript and PDF by a spot function, and equivalently by a threshold array; the shape traced out by the growing cluster of \"on\" pixels is what gives the dot its round, square, or elliptical form. The number of pixels in the cell therefore sets both the size of the largest possible dot and the number of distinct tonal steps the screen can render."
    },
    {
      "kind": "paragraph",
      "text": "The dot shape is not merely cosmetic, because it controls how tones behave where neighbouring dots begin to touch — the \"link-up\" or \"dot join.\" With round or square dots the dots meet on all sides at essentially a single tone value, producing one abrupt link-up that can leave a visible step in the midtones. Elliptical (also called chain or oval) dots meet along their long axis at one tone and along their short axis at a higher tone, spreading the join across two separate, gentler transitions. ISO 12647-2 reflects this by recommending, for dots with a principal axis, that the first link-up occur no lower than 40 % tone value and the second no higher than 60 % tone value. The same standard names circular, square, and elliptical as the dot shapes to be used for periodic screens."
    },
    {
      "kind": "paragraph",
      "text": "Because tone is built from a countable number of pixels per cell, AM screening embodies an inherent trade-off between screen ruling and the number of reproducible gray levels at a given device resolution — the (dpi/lpi)-based relationship set out in the halftoning overview. The following section looks at how that constraint is bounded by device resolution and relaxed by vendor \"supercell\" techniques."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Screen ruling, resolution, and gray levels"
    },
    {
      "kind": "paragraph",
      "text": "The screen ruling (screen frequency) is the number of dot rows per unit length, expressed in lines per inch (lpi) or lines per centimetre (cm⁻¹); ISO 12647-2 notes that the two are related by a conversion factor of 2.54. Ruling is the most visible quality lever in AM work: higher rulings place more, finer dots per unit area and resolve more detail, while coarser rulings tolerate press and substrate variation better. For four-colour periodic screening ISO 12647-2 specifies a working range of roughly 48 cm⁻¹ to 80 cm⁻¹ — about 120 lpi to 200 lpi — with a preferred range of 120–200 lpi on coated paper and 120–175 lpi on uncoated paper. Coarser rulings (for example, around 85 lpi as a representative figure for newsprint) are used where the substrate cannot hold fine dots."
    },
    {
      "kind": "paragraph",
      "text": "Achievable ruling is bounded from above by the addressability of the marking device, because each halftone dot must be built from whole device pixels. ISO 12647-2 frames this as a tone-reproduction requirement: the platesetter resolution should be chosen so that at least 150 tone value steps can be reproduced, and it gives the example that a nominal ruling of 80 cm⁻¹ built from single halftone cells calls for a platesetter resolution of not less than 1 000 cm⁻¹. Raising the ruling at a fixed device resolution shrinks the cell and reduces the number of gray levels it can hold, which at the extreme produces visible banding or posterisation."
    },
    {
      "kind": "paragraph",
      "text": "Supercell (also called accurate) screening is the standard way of relaxing this constraint. Instead of one small cell, the screen is described by a large repeating tile spanning many nominal cells, which lets the raster image processor approximate awkward target angles and frequencies on the device's rectangular grid while preserving a high gray-level count; the halftoning overview notes examples such as Adobe Accurate Screens and Linotype-Hell technologies. ISO 12647-2 acknowledges the technique, observing that with supercell technology the platesetter resolution can be set lower than the single-cell example would require."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Screen angles and moiré"
    },
    {
      "kind": "paragraph",
      "text": "When two or more periodic screens are overprinted, their regular lattices interfere and can beat together into a coarse, low-frequency pattern known as moiré. Controlling that interference is the central geometric problem of colour AM screening, and it is managed principally by rotating each colour's screen to a different angle. If two screens shared the same angle and ruling they would coincide or drift into large-scale interference; separating them in angle pushes the interference to a spatial frequency high enough to be visually harmless."
    },
    {
      "kind": "paragraph",
      "text": "The graphic-arts convention is that interference is minimised when screens are about 30° apart, but a screen built from round or square dots repeats every 90°, so there is only about 90° of distinct angular space to work in. Four screens cannot all sit 30° apart within 90°, so the three strong process colours are packed at 30° intervals and the fourth — yellow, the lightest and least conspicuous ink — is placed in the remaining gap, nearer a horizontal or vertical axis where its pattern is least intrusive. ISO 12647-2 states these as relationships rather than fixed values: for dots without a principal axis the nominal difference between the cyan, magenta, and black angles should be 30°, with yellow separated by 15° from a neighbouring colour and the dominant colour placed at 45°; for dots with a principal axis (such as elliptical dots) the difference should be 60°, with the dominant colour at 45° or 135°."
    },
    {
      "kind": "paragraph",
      "text": "A widely used concrete assignment for round or square dots places yellow near 0°, magenta near 15°, black at 45°, and cyan near 75°. These particular values are best understood as a commonly used set rather than a universal law: the exact per-colour assignment varies between vendors, RIPs, and dot shapes, and standards specify the angular relationships (the 30° or 60° separations, yellow's 15° offset, and the dominant colour at 45°) rather than mandating fixed numbers. Angle alone does not always eliminate moiré; ISO 12647-2 further notes that the screen frequency is often varied slightly between colours — by up to about 6 % of the nominal frequency among cyan, magenta, and yellow — and that black or yellow is sometimes run at a substantially finer ruling (for example, 84 cm⁻¹ against 60 cm⁻¹) to suppress residual patterns."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The rosette pattern"
    },
    {
      "kind": "paragraph",
      "text": "When correctly angled and in register, the four overprinted CMYK screens do not produce a large moiré but instead settle into a small, regularly repeating figure known as a rosette — described in the reference literature as the little circles or rosettes formed by the interlocking dots of the separations. The rosette is, in effect, the smallest and least objectionable interference pattern the four lattices can make; when its own frequency is high enough it is not resolved individually at normal viewing distance, and the image simply reads as smooth, saturated colour."
    },
    {
      "kind": "paragraph",
      "text": "The rosette is also a practical diagnostic. Because it depends on the screens meeting at their intended angles and in register, drift in registration or in screen geometry changes the rosette's appearance and, past a point, degrades it back toward coarse, objectionable moiré. ISO 12647-2 notes that moiré can in turn introduce tone-contouring artefacts and colour shifts in primary and secondary half-tones. This sensitivity is one reason AM screening places firm demands on press registration and on stable platemaking, and it is a motivation for the FM and hybrid alternatives discussed below."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Practical use, substrates, and tradeoffs"
    },
    {
      "kind": "paragraph",
      "text": "AM screening is the workhorse of commercial offset lithography and is also used in gravure, flexography, and laser printing; everyday consumer inkjet output, by contrast, more commonly uses FM/stochastic (error-diffusion) dithering. Its enduring appeal is predictability and robustness: the dots are relatively large and clustered, so they hold up well through platemaking, inking, and high-speed printing, and their behaviour under dot gain — the enlargement of printed dots covered in the halftoning overview — is well characterised and readily compensated with tone-value curves. Process-control standards for offset are built around these periodic dots."
    },
    {
      "kind": "paragraph",
      "text": "Ruling is chosen to suit the substrate and process. Smooth coated papers can carry fine, high-ruling screens; absorbent or rough stocks such as uncoated papers and newsprint spread ink more and are run at coarser rulings, consistent with the ISO 12647-2 ranges given above. The main weaknesses of AM screening are the flip side of its regular structure:"
    },
    {
      "kind": "list",
      "items": [
        "Moiré, both between colours and where a screen interacts with regular detail in the image itself (fine textiles, mesh, architectural patterns).",
        "Difficulty in extreme highlights and shadows, where the smallest dots may be too fine to hold on plate or press and the largest threaten to fill in.",
        "Sensitivity to registration and screen geometry, because misregistration degrades the rosette toward visible moiré."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Two adaptations address these limits. Where content is moiré-prone, work separated for periodic screens can instead be printed with non-periodic (FM or stochastic) screens; ISO 12647-2 explicitly allows this substitution as a remedy for moiré on press. Hybrid screens keep an AM grid through the midtones but switch to FM behaviour in the extreme highlights and shadows where pure AM dots cannot hold — an approach introduced in the halftoning overview."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to adjacent concepts"
    },
    {
      "kind": "paragraph",
      "text": "AM screening is one branch of halftoning, the broader technique of simulating continuous tone on devices that can only mark a few ink states; the halftoning overview covers the shared history, the AM-versus-FM distinction at a high level, and how PostScript and PDF expose screening controls, none of which is repeated in depth here. Its direct sibling is FM (stochastic) screening, the non-periodic approach that trades AM's press-friendly regularity for freedom from moiré and finer detail rendering."
    },
    {
      "kind": "paragraph",
      "text": "In the production pipeline AM screening is applied by the raster image processor (RIP), the stage that turns a resolution-independent page description into the device's bi-level dot pattern; the screen's ruling, angle, dot shape, and dot-gain compensation are all applied there. Its purely digital analogue is ordered dithering — comparing pixel values against a repeating threshold matrix — which is the same mechanism discussed under image thresholding."
    },
    {
      "kind": "paragraph",
      "text": "Because colour AM screening operates on separated ink channels, it is closely tied to CMYK process colour, whose separations supply the individual screens that must be angled against one another. It also interacts with colour management and profiling: the tone-value (dot-gain) behaviour of a given AM screen and substrate is part of what device and ICC profiles characterise, so that midtone darkening from dot gain is predicted and compensated rather than left to distort the final colour."
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This is a neutral technical reference. Figures and dates are drawn from documented sources; it does not include current pricing, marketing claims, or product recommendations. The references consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "tools",
      "slug": "halftoning"
    },
    {
      "section": "tools",
      "slug": "screen-angles"
    },
    {
      "section": "tools",
      "slug": "frequency-modulation-screening"
    },
    {
      "section": "tools",
      "slug": "dot-gain"
    },
    {
      "section": "tools",
      "slug": "moire-patterns"
    },
    {
      "section": "tools",
      "slug": "raster-image-processor"
    }
  ],
  "faqs": [
    {
      "q": "What is amplitude modulation (AM) screening?",
      "a": "AM screening is the conventional, or periodic, form of halftone screening in which dots sit on a fixed regular grid at constant spacing and represent tone by varying in size — small dots for highlights and progressively larger dots for shadows, up to solid coverage. It is named by analogy with telecommunications: the grid frequency stays fixed while the dot \"amplitude\" (size) is modulated, the opposite of FM or stochastic screening, where dot size is nearly fixed and placement varies."
    },
    {
      "q": "Why are the CMYK screens set at different angles?",
      "a": "Overlapping periodic screens interfere and can produce a coarse moiré pattern, so each colour is rotated to a different angle to push that interference to a harmless high frequency. The convention is roughly 30° between the three strong colours, but a round or square dot grid repeats every 90°, so only about 90° of angular space is available; yellow, the lightest ink, is placed in the remaining gap near an axis. ISO 12647-2 specifies these as angular relationships (30° or 60° separations, yellow offset by 15°, the dominant colour at 45°) rather than fixed per-colour numbers."
    },
    {
      "q": "What is a rosette pattern?",
      "a": "A rosette is the small, regularly repeating figure of interlocking dots — described as little circles or rosettes — that correctly angled and registered CMYK screens form instead of a coarse moiré. When fine enough it is not resolved individually at normal viewing distance, so the image reads as smooth colour. If registration or screen geometry drifts, the rosette degrades back toward visible moiré, which can bring tone-contouring and colour-shift artefacts."
    },
    {
      "q": "What screen ruling (LPI) is used for AM screening?",
      "a": "Ruling is chosen to match the substrate. ISO 12647-2 gives a four-colour range of about 48–80 cm⁻¹ (roughly 120–200 lpi), preferring 120–200 lpi on coated paper and 120–175 lpi on uncoated paper; coarser rulings (around 85 lpi is a representative figure for newsprint) suit absorbent stocks. Higher rulings resolve more detail but demand higher device resolution, because each dot is built from whole device pixels and finer rulings leave fewer gray levels per cell."
    },
    {
      "q": "How does AM screening differ from FM (stochastic) screening?",
      "a": "In AM screening the dots stay on a fixed grid and vary in size to represent tone; in FM (stochastic) screening the dots are nearly uniform and very small, and tone is set by how many fall in an area and where. AM is predictable and robust on press but prone to moiré between colours, while FM largely avoids moiré and resolves fine detail at the cost of greater sensitivity to dot gain. The halftoning overview compares the two families in more general terms."
    }
  ],
  "sources": [
    {
      "title": "Halftone",
      "url": "https://en.wikipedia.org/wiki/Halftone",
      "publisher": "Wikipedia"
    },
    {
      "title": "ISO 12647-2:2013 — Graphic technology: Process control for the production of half-tone colour separations, proof and production prints — Part 2: Offset lithographic processes",
      "url": "https://www.iso.org/obp/ui/#!iso:std:iso:12647:-2:ed-3:v1:en",
      "publisher": "ISO"
    },
    {
      "title": "Screen Angles",
      "url": "https://printwiki.org/Screen_Angles",
      "publisher": "PrintWiki"
    },
    {
      "title": "Accurate Screens",
      "url": "https://printwiki.org/Accurate_Screens",
      "publisher": "PrintWiki"
    },
    {
      "title": "Halftones and grey levels explained",
      "url": "http://the-print-guide.blogspot.com/2009/01/halftones-and-grey-levels-explained.html",
      "publisher": "The Print Guide"
    }
  ],
  "published": "2026-07-07",
  "updated": "2026-07-07",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "amplitude modulation screening",
    "am screening",
    "conventional screening",
    "periodic screening",
    "clustered-dot screening",
    "halftone screen angles",
    "screen ruling",
    "moire",
    "rosette pattern",
    "cmyk screening",
    "screen frequency",
    "lpi"
  ],
  "cluster": "print-imaging"
};

export default entry;
