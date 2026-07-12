import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "screen-angles",
  "title": "Halftone Screen Angles",
  "description": "Halftone screen angles rotate each CMYK separation to prevent moire: the conventional 30-degree separation, yellow's 15-degree case, and supercell screening.",
  "summary": "A halftone screen angle is the orientation of a periodic (AM) halftone dot grid on the page, set separately for each process-colour separation so that the overprinted patterns do not beat into visible moire. Conventional practice, recommended in standards such as ISO 12647-2, commonly separates the strong inks (cyan, magenta, black) by about 30 degrees with the dominant colour at 45 degrees, while the visually weak yellow is offset by only about 15 degrees. Correctly angled screens combine into a fine, stable rosette rather than a coarse interference pattern, and reproducing the ideal angles on a digital grid relies on rational-tangent approximations and supercell (accurate) screening. This page extends the broader halftoning overview with a focus on the angle parameter.",
  "purpose": "A halftone screen angle is the orientation of each colour's periodic dot grid, chosen so the overprinted separations form a stable rosette instead of moiré.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Definition"
    },
    {
      "kind": "paragraph",
      "text": "A halftone screen angle is the angle, measured in degrees from a horizontal reference, at which the regular grid of a periodic (amplitude-modulated, or AM) halftone screen is oriented on the printed page. In process-colour printing each ink separation is screened with its own dot grid, and each grid is rotated to a different angle so that the superimposed patterns interact predictably rather than clashing. The angle describes the orientation of the lattice of dot centres, not the shape of an individual dot."
    },
    {
      "kind": "paragraph",
      "text": "Because the square lattice used by conventional round or square dots repeats every 90 degrees, screen angles are conventionally expressed within a 0-90 degree range; an angle and that same angle plus 90 degrees produce an equivalent lattice. Screen angle is a property specific to periodic screens: non-periodic (frequency-modulated, or stochastic) screens place dots without a single repeating orientation and therefore carry no meaningful screen angle."
    },
    {
      "kind": "paragraph",
      "text": "Screen angle is one of the three principal controls of an AM screen, alongside screen ruling (frequency, in lines per inch) and dot shape, and it is the control most directly responsible for how cleanly several colour separations can be overprinted. For the broader mechanics of AM versus FM screening, screen ruling, dot shape and dot gain, see the halftoning overview; this page focuses on the angle parameter and its consequences rather than restating those fundamentals."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Why screen angle matters: moire and the rosette"
    },
    {
      "kind": "paragraph",
      "text": "When two regular periodic patterns are overlaid, small differences in their spacing and orientation create a third, much coarser pattern of light and dark bands. This interference is called moire. In colour halftoning the overlaid patterns are the dot grids of the separate inks; if two of them share the same angle, or angles that differ only slightly, the beat between them becomes a large, slow, highly visible moire that reads as blotches or waves across what should be an even tint."
    },
    {
      "kind": "paragraph",
      "text": "Rotating the separations to well-chosen, widely separated angles does not eliminate the interference, because periodic patterns always interfere, but it pushes the beat to such a high frequency that the combined pattern collapses into a small, regular, repeating motif instead of a coarse one. In four-colour work this stable motif is known as a rosette: a flower-like cluster formed by the overprinted dots of the different inks. A correctly angled set of screens produces a fine, even rosette that the eye integrates into smooth colour at normal viewing distance, whereas a poorly angled set produces objectionable moire. ISO 12647-2 recommends well-separated screen angles to keep the rosette fine, and explicitly ties its slight screen-frequency variation between separations to minimizing moire."
    },
    {
      "kind": "paragraph",
      "text": "Rosettes occur in two common forms depending on how the dot grids register against one another:"
    },
    {
      "kind": "list",
      "items": [
        "A dot-centred (closed) rosette, with a dot at the centre of each motif.",
        "A clear-centred (open) rosette, with an open paper hole at the centre."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Which form appears depends on the relative registration of the separations, so the rosette can drift as press registration wanders, producing subtle tone and colour shifts. This registration sensitivity is one reason screen angles are chosen conservatively and applied consistently across a job."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Conventional angle assignments and the 30-degree separation"
    },
    {
      "kind": "paragraph",
      "text": "The dominant convention in four-colour lithography separates the three visually strong inks by a substantial, roughly equal angular interval and offsets the weak yellow by a smaller amount. ISO 12647-2:2013 states this as a recommendation rather than an absolute rule. For half-tone dots without a principal axis (round or square dots), the standard says the nominal difference between the screen angles for cyan, magenta and black should be 30 degrees, that yellow should be separated by 15 degrees from another colour, and that the screen angle of the dominant colour should be 45 degrees."
    },
    {
      "kind": "paragraph",
      "text": "Two points deserve emphasis, because they are frequently overstated elsewhere:"
    },
    {
      "kind": "list",
      "items": [
        "The standard fixes the separations, not a rigid table of which ink takes which angle. It pins the dominant colour to 45 degrees and requires 30 degrees between the strong colours and 15 degrees for yellow; it does not decree that cyan must be 15 degrees or magenta must be 75 degrees.",
        "These are recommended nominal values (the standard says they \"should be\"), commonly used because they work well in practice, not a universal physical law. Individual vendors, RIPs and print shops apply their own calibrated angle sets, and the specific ink-to-angle mapping varies."
      ]
    },
    {
      "kind": "paragraph",
      "text": "A widely used realization consistent with the ISO rule places the dominant colour (often black) at 45 degrees, the other two strong colours at 15 and 75 degrees, and yellow at 0 degrees, so that black, cyan and magenta sit 30 degrees apart and yellow is 15 degrees from cyan. This particular set (black 45, cyan 15, magenta 75, yellow 0) is one common assignment; other assignments reassign which ink takes 45 degrees according to which colour dominates the image. The reliable, portable statements are the 30-degree separation of the strong colours, the 15-degree offset for yellow, and 45 degrees for the dominant ink; the exact per-ink angles are a convention, not a constant. A commonly cited rationale for placing the dominant ink at 45 degrees is that a diagonal dot pattern is less conspicuous to the eye than a horizontal or vertical one, though ISO 12647-2 specifies the 45-degree placement without stating a reason."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The special case of yellow and the four-colour geometry"
    },
    {
      "kind": "paragraph",
      "text": "Four separations cannot all be given the full 30-degree spacing within the available range. For symmetric (round or square) dots the lattice repeats every 90 degrees, so all distinct angles fall within a 0-90 degree window. Three screens spaced 30 degrees apart already span 60 degrees of that window (for example 15, 45 and 75 degrees); a fourth screen has no room for another 30-degree gap and must sit only about 15 degrees from one of its neighbours."
    },
    {
      "kind": "paragraph",
      "text": "By convention this tightly spaced fourth slot is assigned to yellow. Yellow is the lightest and least visually dominant process ink, so the residual moire between yellow and an adjacent separation is the least objectionable of the possible clashes. ISO 12647-2 captures exactly this asymmetry: it requires 30 degrees between cyan, magenta and black but allows yellow to be separated by only 15 degrees. The trade-off is deliberate; the small yellow separation is accepted precisely because yellow's low contrast makes any interference it introduces hard to see."
    },
    {
      "kind": "paragraph",
      "text": "Because the interference between yellow and its neighbour is reduced rather than removed, yellow is also the separation most often given additional anti-moire help through frequency adjustments rather than angle, as described below."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Symmetric dots versus dots with a principal axis"
    },
    {
      "kind": "paragraph",
      "text": "The correct angular separation depends on the symmetry of the dot shape, a distinction the general halftoning overview does not develop. A round or square dot is symmetric under a 90-degree rotation, so its screen repeats every 90 degrees. An elliptical or line dot, by contrast, has a principal axis and repeats only every 180 degrees; it looks different when rotated by 90 degrees. Two such screens can therefore align, and beat into moire, at wider angular offsets than symmetric screens would, so they need a larger separation to stay clear of one another."
    },
    {
      "kind": "paragraph",
      "text": "ISO 12647-2:2013 states both cases explicitly:"
    },
    {
      "kind": "list",
      "items": [
        "For half-tone dots without a principal axis (round, square): the nominal difference between cyan, magenta and black should be 30 degrees, with the dominant colour at 45 degrees and yellow 15 degrees from another colour.",
        "For half-tone dots with a principal axis (elliptical, line): the nominal difference between cyan, magenta and black should be 60 degrees, with the dominant colour at 45 degrees or 135 degrees, and yellow again 15 degrees from another colour."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Elliptical dots are often chosen for their smooth tonal transitions, but their geometry couples the angle choice to how the dots join up as tone increases. ISO 12647-2 recommends that for dots with a principal axis the first link-up, where dots begin to touch along one axis, occur no lower than 40 percent tone value, and the second link-up, touching along the other axis, no higher than 60 percent. The angle set and the dot shape therefore have to be chosen together rather than independently."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Rendering exact angles on a digital grid: rational-tangent and supercell screening"
    },
    {
      "kind": "paragraph",
      "text": "A digital imagesetter or platesetter can only mark cells that lie on its fixed rectangular addressing grid, which makes some screen angles far easier to produce than others. An angle of 45 degrees maps cleanly onto a square grid: its tangent is exactly 1, so dot centres fall on regular grid nodes and the screen tiles perfectly. Angles such as 15 and 75 degrees have irrational tangents that never land exactly on grid nodes, so they cannot be reproduced precisely by a single simple repeating cell."
    },
    {
      "kind": "paragraph",
      "text": "Early digital screening handled this by restricting screens to rational-tangent angles, whose tangent is a ratio of small integers, and accepting that the achievable angle and ruling would deviate slightly from the ideal. Those small deviations are themselves a moire hazard: if two separations end up a fraction of a degree, or a few percent of a ruling, away from their intended relationship, a slow beat can reappear. To reduce the errors, vendors developed supercell (also called accurate) screening, in which the repeating unit is not a single halftone cell but a large tile assembled from many cells. Averaged across the supercell, the effective angle and frequency approximate the target values far more closely than a single cell can, so screens can sit much nearer the true 15, 45 and 75 degrees while preserving the number of reproducible grey levels."
    },
    {
      "kind": "paragraph",
      "text": "Device resolution sets the ceiling on how well angles and tones can be rendered. ISO 12647-2 recommends that the platesetter resolution be high enough to reproduce at least 150 tone-value steps; for a nominal ruling of 80 cm-1 (roughly 200 lpi) it gives an example minimum of 1000 cm-1, while noting that supercell technology allows a lower resolution for a given ruling. The screening itself is carried out in the raster image processor, and the underlying resolution-versus-grey-levels trade-off that supercell screening is designed to protect is covered on the halftoning overview."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Complementary anti-moire methods: frequency detuning and non-periodic screening"
    },
    {
      "kind": "paragraph",
      "text": "Angle separation is the primary defence against screen-to-screen moire, but it is not the only one, and it does not cover every case."
    },
    {
      "kind": "list",
      "items": [
        "Slight frequency differences between separations. ISO 12647-2 notes that the screen ruling is often varied slightly from one process colour to another to minimize moire, with differences of up to about 6 percent of the nominal frequency between cyan, magenta and yellow. Because yellow can be given only a small angular separation, it is a common candidate for this frequency detuning.",
        "A finer ruling for one separation. The standard also notes that black or yellow is sometimes screened substantially finer than the other colours, giving the example of 84 cm-1 against 60 cm-1, which can also help break up interference.",
        "Non-periodic (FM / stochastic) screening. Because stochastic screens have no single repeating orientation, they largely sidestep the screen-to-screen moire that angle assignment exists to prevent, and they carry no screen angle at all. ISO 12647-2 explicitly allows work separated for periodic screens to be printed with non-periodic screens where there is a moire problem on press, while cautioning that this can introduce tone-contouring artefacts and colour-shift deficiencies. Conventional and stochastic screens are therefore not always interchangeable in appearance."
      ]
    },
    {
      "kind": "paragraph",
      "text": "A separate phenomenon, sometimes called subject moire, is interference between the halftone screen and a regular pattern already present in the image, such as a woven fabric or a fine grille. This depends on the image content together with the screen, not on the angle relationship among the four separations, and it is addressed by changing the ruling or angle or by softening the offending detail rather than by the standard angle set. See the halftoning overview for AM, FM and hybrid screening in general."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Practical use, tradeoffs and related concepts"
    },
    {
      "kind": "paragraph",
      "text": "In a modern workflow, screen angles are not set by the designer but applied at output time by the raster image processor as it converts each colour separation into a bi-level dot pattern. The RIP holds a calibrated screen set (ruling, angle and dot shape per ink) and normally imposes the shop's own values rather than any screening a file requests. Getting the set right is a prerequisite for clean process-colour printing; getting it wrong produces moire, colour casts and rosette drift that no amount of ink or press adjustment can fully correct."
    },
    {
      "kind": "paragraph",
      "text": "The main trade-offs are:"
    },
    {
      "kind": "list",
      "items": [
        "Robustness versus fidelity. Conventional angled AM screening is predictable and stable on press, but its periodic structure is inherently moire-prone and limits how many inks can be overprinted cleanly. Non-periodic screening avoids the angle problem but is more sensitive to dot gain and press variation.",
        "Angle accuracy versus grey levels. Hitting the ideal angles on a digital grid can cost tonal resolution unless supercell screening is used; there is a standing tension between angle and ruling accuracy and the number of reproducible grey levels at a given device resolution.",
        "Yellow's compromise. The 15-degree yellow separation is a permanent weak point that is managed, not solved, and often needs additional frequency help."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Screen angles sit downstream of colour separation and upstream of the marking engine, so they connect to several adjacent topics: the halftoning overview (AM/FM screening, ruling, dot gain and grey levels); the raster image processor that applies the screen; the CMYK process-colour model whose four separations are angled; RGB-to-CMYK conversion, which produces those separations; and image thresholding, the per-pixel decision by which a continuous-tone raster becomes halftone dots. This page treats the angle parameter specifically; the broader theory and history of halftoning are covered on the halftoning page."
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
      "slug": "amplitude-modulation-screening"
    },
    {
      "section": "tools",
      "slug": "moire-patterns"
    },
    {
      "section": "tools",
      "slug": "halftoning"
    },
    {
      "section": "tools",
      "slug": "dot-gain"
    },
    {
      "section": "tools",
      "slug": "raster-image-processor"
    },
    {
      "section": "tools",
      "slug": "cmyk"
    }
  ],
  "faqs": [
    {
      "q": "What is a halftone screen angle?",
      "a": "A halftone screen angle is the orientation, in degrees from a horizontal reference, of the regular dot grid of a periodic (AM) halftone screen. In process-colour printing each ink separation is screened at its own angle so that the overprinted grids form a fine, stable rosette instead of a coarse interference (moire) pattern. Non-periodic (stochastic / FM) screens have no single screen angle."
    },
    {
      "q": "What are the conventional CMYK screen angles?",
      "a": "Convention, as recommended in ISO 12647-2, separates the three strong inks (cyan, magenta, black) by about 30 degrees with the dominant colour at 45 degrees, and offsets yellow by only about 15 degrees. A commonly used set consistent with this is black 45, cyan 15, magenta 75 and yellow 0 degrees, but the standard fixes the separations, not which ink takes which angle, and specific assignments vary between vendors and shops. These are recommended, commonly used values rather than a universal law."
    },
    {
      "q": "Why is yellow separated by only 15 degrees instead of 30?",
      "a": "For symmetric (round or square) dots the screen repeats every 90 degrees, so all distinct angles lie in a 0-90 degree window. Three screens 30 degrees apart already use 60 degrees of that window, leaving no room for a fourth 30-degree gap, so the fourth screen must sit about 15 degrees from a neighbour. Yellow is given that slot because it is the visually weakest ink, so the residual moire it introduces is the least noticeable."
    },
    {
      "q": "How do screen angles prevent moire?",
      "a": "Overlaid periodic dot grids always interfere; when two grids share the same or nearly the same angle the interference is a large, slow, highly visible moire. Rotating the separations to widely separated angles pushes the interference to a high frequency, so the overprinted dots combine into a tight, regular rosette that the eye reads as smooth colour instead of a coarse pattern. ISO 12647-2 recommends well-separated angles and ties its slight frequency variation to minimizing moire."
    },
    {
      "q": "How are angles like 15 and 75 degrees reproduced accurately on a digital imagesetter?",
      "a": "45 degrees maps exactly onto a square addressing grid because its tangent is 1, but 15 and 75 degrees have irrational tangents that do not fall on grid nodes. Early digital screening approximated them with rational-tangent angles and accepted small deviations; supercell (accurate) screening later reduced those errors by building the repeating unit from many halftone cells, so the averaged angle and ruling sit much closer to the target while preserving grey levels."
    }
  ],
  "sources": [
    {
      "title": "ISO 12647-2:2013 — Graphic technology: Process control for the production of half-tone colour separations, proof and production prints — Part 2: Offset lithographic processes",
      "url": "https://www.iso.org/obp/ui/#!iso:std:iso:12647:-2:ed-3:v1:en",
      "publisher": "ISO"
    },
    {
      "title": "The Point About 2021 ISO 12647 Standards for CMYK Print and Proof Works (Rev. 5)",
      "url": "https://www.color-source.net/",
      "publisher": "Color Source S.A.S."
    },
    {
      "title": "Revising our thinking on tone value increase (Advances in Printing and Media Technology, Vol. XLVIII)",
      "url": "https://doi.org/10.14622/Advances_48_2022_18",
      "publisher": "iarigai"
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
    }
  ],
  "published": "2026-07-07",
  "updated": "2026-07-07",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "screen angle",
    "halftone screen angle",
    "cmyk screen angles",
    "screen angle separation",
    "moire",
    "rosette",
    "conventional screening",
    "am screening",
    "yellow screen angle",
    "supercell screening",
    "rational tangent screening",
    "iso 12647-2"
  ],
  "cluster": "print-imaging"
};

export default entry;
