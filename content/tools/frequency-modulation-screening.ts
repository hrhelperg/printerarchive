import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "frequency-modulation-screening",
  "title": "Frequency Modulation (FM / Stochastic) Screening",
  "description": "Frequency modulation (FM) or stochastic screening renders tone by varying the number and placement of tiny, near-uniform halftone dots rather than their size.",
  "summary": "Frequency modulation (FM) screening, also called stochastic screening, is a halftoning method in which tone is reproduced by varying how many small, near-uniform dots occupy an area and where they fall, rather than by varying dot size on a fixed grid as in amplitude modulation (AM) screening. Because the dots are placed aperiodically—by error diffusion or by stochastic, blue-noise threshold masks—an FM screen has no regular ruling or screen angle, which largely avoids the moiré that can arise from superimposed AM color separations and from fine repetitive image detail. In exchange, its many tiny, edge-heavy dots make it unusually sensitive to dot gain and place high demands on imaging resolution and press stability, which is why it is often deployed as second-order or hybrid AM/FM screening. It is applied at the raster/screening stage of the print pipeline and is treated here as a deeper companion to the general halftoning overview.",
  "purpose": "Frequency modulation (FM), or stochastic, screening reproduces tone by varying the spacing of many small, near-uniform dots rather than their size.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Definition and terminology"
    },
    {
      "kind": "paragraph",
      "text": "Frequency modulation (FM) screening, more commonly called stochastic screening in commercial prepress, is a form of digital halftoning in which continuous tone is reproduced by controlling the number and spatial distribution of very small, nearly uniform dots across an area, while the size of each individual dot is held roughly constant. Darker tones are produced by placing more dots more densely; lighter tones by placing fewer, more widely separated dots. This is the complement of amplitude modulation (AM), or conventional, screening, in which dots sit on a fixed regular grid at constant spacing and tone is set by varying each dot's size. The general AM/FM distinction and the wider halftoning context are covered in the halftoning reference; this page concentrates on the FM/stochastic case rather than restating that overview."
    },
    {
      "kind": "paragraph",
      "text": "The name is borrowed from signal theory, by analogy with amplitude- and frequency-modulated carriers. In AM the dot \"amplitude\" (size) varies at a fixed spatial frequency (the screen ruling); in FM the dot amplitude is fixed and the spatial frequency—how closely the dots are packed—varies with tone. Because there is no regular repeating cell, an FM screen has no screen ruling expressed in lines per inch (LPI) and no screen angle in the sense used for AM screens. Instead, an FM screen is characterized primarily by the size of its individual dots or addressable spots, a dimension sometimes expressed in microns; the smaller that spot, the finer the detail the screen can hold and the less visible the individual dots become."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How frequency modulation encodes tone"
    },
    {
      "kind": "paragraph",
      "text": "At the level of the marking device, an FM screen still produces a purely bi-level (ink/no-ink) pattern: each addressable location is either turned on or left blank. What distinguishes FM is the rule that decides which locations are turned on. Rather than clustering turned-on pixels into a growing dot at a fixed grid position—as clustered-dot AM screening does—FM disperses the turned-on locations across the area so that their local density tracks the desired tone while their positions do not fall on any regular lattice."
    },
    {
      "kind": "paragraph",
      "text": "Two broad algorithmic families implement this dispersion:"
    },
    {
      "kind": "list",
      "items": [
        "Error diffusion. The image is traversed pixel by pixel; at each pixel the value is thresholded to on or off, and the resulting quantization error is distributed to neighboring, not-yet-processed pixels so that local average density is preserved. Floyd–Steinberg error diffusion is a widely cited example. Because the decision at each pixel depends on its neighbors, error diffusion is a serial, content-adaptive process.",
        "Stochastic (blue-noise) threshold masks. A large, precomputed threshold array is designed so that comparing an image against it, pixel by pixel, yields an aperiodic dot pattern with desirable spectral properties. This is applied point-wise—like ordered dithering, but with an irregular, non-repeating mask rather than a small periodic matrix—so it is fast and easily tiled across large rasters."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Both families are forms of FM screening, and both reduce, at the smallest scale, to a per-pixel thresholding decision; the sophistication lies in how the threshold surface or error distribution is arranged so that the pattern looks smooth and carries no dominant periodicity. FM screening is applied at the raster/screening stage of the print pipeline, within the raster image processor (RIP), after page content has been rasterized to the device grid—the same stage where AM screening and calibration are applied. See the raster image processor and image thresholding references for those underlying operations."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "First-order and second-order FM screening"
    },
    {
      "kind": "paragraph",
      "text": "FM implementations are commonly grouped into \"first-order\" and \"second-order\" behaviors, a distinction specific enough to FM that it does not arise in conventional AM screening."
    },
    {
      "kind": "list",
      "items": [
        "First-order FM holds every dot at the same, minimal size and represents tone purely by changing dot frequency—how many equal-sized dots fall in a region. This maximizes resolvable detail but concentrates the difficulty at the press: a field of many isolated, minimum-size dots has an enormous combined edge length, so it is highly exposed to dot gain and to any instability in imaging or inking, and flat midtones can look grainy.",
        "Second-order FM relaxes the fixed-size rule. In the midtones, where a first-order screen would otherwise pack many tiny dots edge to edge, the dots are allowed to grow and merge somewhat, so tone is carried by a combination of changing frequency and changing size. Reserving pure frequency modulation for the extreme highlights and shadows—where dots must remain isolated—while permitting some size variation in the midtones improves stability and reduces graininess."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Terminology is not perfectly standardized; vendors use \"first-/second-generation\" and \"first-/second-order\" with slightly different emphases. The underlying trade, however, is consistent: pure frequency modulation maximizes detail, while admitting some amplitude modulation improves press robustness. The same reasoning motivates hybrid AM/FM screening, in which an AM (variable-size, fixed-grid) structure is used through the midtones and FM behavior is used only in the extreme highlights and shadows, where AM dots would be too small to hold or too merged to distinguish. Hybrid screening is introduced as one of the principal screening strategies in the halftoning overview; here it can be seen as the limiting case of trading frequency modulation for amplitude modulation wherever amplitude modulation is the more robust choice."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Blue noise and the design of stochastic screens"
    },
    {
      "kind": "paragraph",
      "text": "The visual quality of an FM screen depends heavily on how its dots are dispersed, not merely on how many there are. A naive random placement produces conspicuous clumping and voids—low-spatial-frequency structure that the eye readily perceives as noise or mottle. The design goal for high-quality stochastic screens is instead a \"blue-noise\" distribution: one whose spatial-frequency content is concentrated at high frequencies, with as little low-frequency energy as possible, so that the dots are spread out as evenly as an irregular pattern can be while never falling into a regular grid."
    },
    {
      "kind": "paragraph",
      "text": "Blue-noise dot patterns achieve two things at once. Because they are aperiodic, they carry no dominant frequency or angle that could beat against another screen or against repetitive image content, which suppresses moiré. Because their energy sits at high spatial frequencies—near the limit of what the eye resolves at reading distance—their texture tends to disappear into apparent smooth tone. Blue-noise mask design and error-diffusion refinement are active areas of digital-halftoning research and engineering; they are design methods and quality goals rather than formal published standards."
    },
    {
      "kind": "paragraph",
      "text": "When such a screen is carried through a page-description language, it is typically expressed as a threshold-array halftone rather than as a spot function—the spot-function form is oriented toward AM dot shapes and their fill order. PostScript and PDF both provide threshold-array halftone types for exactly this purpose, which is how a precomputed stochastic mask can be embedded in, or honored by, a RIP. The general halftone model shared by PostScript and PDF is described in the halftoning reference and is not repeated here."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Moiré, screen angles, and color separation"
    },
    {
      "kind": "paragraph",
      "text": "The most frequently cited reason to choose FM screening is its behavior in color work. When several AM separations are printed on top of one another, their regular grids interact; to keep that interaction from producing a coarse, objectionable moiré, the strong process screens are conventionally offset from one another in angle. An offset of roughly 30 degrees between the strong colors is the commonly used guideline, but the exact per-color angle assignment varies between shops and sources and is a convention rather than a fixed law. Even when angled according to convention, the superimposed AM screens form a rosette pattern, and any regular, fine detail in the image itself—woven fabric, mesh, architectural louvers—can still beat against the screen."
    },
    {
      "kind": "paragraph",
      "text": "Because an FM screen has no regular grid and therefore no angle, these mechanisms largely do not apply: superimposed FM separations do not form a rosette, and the aperiodic dot pattern greatly reduces subject moiré from repetitive image detail. \"Largely\" and \"greatly reduces\" are the accurate qualifiers—FM removes the periodic source of moiré, but it does not remove every possible artifact, and it introduces its own sensitivities discussed below."
    },
    {
      "kind": "paragraph",
      "text": "This angle-independence is what makes FM attractive for extended-gamut or \"hi-fi\" printing that adds inks beyond cyan, magenta, yellow, and black. Each additional AM ink would need its own screen angle, and the supply of well-separated angles is limited, so additional inks tend to accumulate moiré; FM sidesteps the angle-budget problem entirely, allowing more inks to be superimposed. The role of process inks and separations is covered in the CMYK reference."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Practical tradeoffs and press behavior"
    },
    {
      "kind": "paragraph",
      "text": "FM screening's advantages and its costs both stem from the same fact: it represents tone with many small, dispersed, high-perimeter dots rather than fewer, larger, compact ones."
    },
    {
      "kind": "paragraph",
      "text": "On the advantage side:"
    },
    {
      "kind": "list",
      "items": [
        "It resolves very fine image detail, down toward the size of the individual micro-dot.",
        "It largely avoids color (rosette) moiré and subject moiré, as described above, and supports extended-gamut multi-ink printing.",
        "It sidesteps the resolution-versus-gray-level trade-off that constrains AM cell screening: because FM tone is set by how many micro-dots are turned on across an area rather than by the size of a fixed cell, tonal resolution is governed instead by the device's addressability and by how reliably the smallest dots can be imaged and held. The AM cell trade-off itself is derived in the halftoning reference."
      ]
    },
    {
      "kind": "paragraph",
      "text": "On the cost side:"
    },
    {
      "kind": "list",
      "items": [
        "The very large combined edge length of a field of tiny dots makes FM unusually sensitive to dot gain—the tendency of printed tones to read larger and darker than intended, from mechanical ink spread on the substrate and from optical light-scatter within the paper—so midtones can darken or plug more readily than with AM, and the screen must be characterized and compensated with tone-value curves. Dot gain itself is defined in the halftoning reference.",
        "Holding minimum-size dots demands high imaging resolution, careful platemaking, and stable, consistent press conditions; highlights can drop out if the smallest dots fail to image or transfer.",
        "First-order FM in particular can look grainy in flat midtones and smooth gradients, and FM work has historically been more demanding to proof and to run consistently than AM."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Presented as a trade-off rather than a ranking: FM buys detail and freedom from periodic moiré at the price of tighter process control. Whether it is the appropriate choice depends on the image content, the inks, the substrate, and the stability of the imaging and printing system."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Device requirements and where FM screening appears"
    },
    {
      "kind": "paragraph",
      "text": "Because an FM screen relies on dots small enough to be individually imperceptible at reading distance, it is closely tied to the addressability (dpi) of the marking device. A device must be able to place spots small and precise enough that a densely packed field of them still reads as smooth tone; this is why fully digital FM screening in commercial prepress became practical alongside high-resolution imagesetters, platesetters, and computer-to-plate (CtP) systems, and why a coarse marking engine limits how fine an FM screen it can usefully carry."
    },
    {
      "kind": "paragraph",
      "text": "FM and FM-like screening appear across several output contexts:"
    },
    {
      "kind": "list",
      "items": [
        "High-fidelity and detail-critical offset, where moiré avoidance and fine detail justify the extra process control, often using second-order or hybrid AM/FM screens rather than pure first-order FM.",
        "Extended-gamut / multi-ink printing, where the absence of screen angles removes the angle-budget limit on the number of superimposable inks.",
        "Inkjet and much desktop output, where small, fixed-size drops combined with error diffusion are inherently FM in character; on many photo inkjets this is further blended with variable drop sizes, blurring the line between halftone and near-continuous tone."
      ]
    },
    {
      "kind": "paragraph",
      "text": "In every case the screening decision is made at the RIP, at the same raster/output stage of the pipeline where AM screening, dot-gain compensation, and calibration are applied; that pipeline placement is common to all screening and is described in the halftoning and raster image processor references."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History and attribution"
    },
    {
      "kind": "paragraph",
      "text": "The conceptual roots of FM screening lie in digital halftoning generally, and in dispersed-dot methods such as error diffusion, which established that a bi-level device could reproduce tone by scattering equal-weight marks rather than by growing clustered dots. Fully digital, aperiodic screening for professional print became practical as the industry moved from photographic camera-and-screen halftoning to fully digital raster image processors driving high-addressability imagesetters and platesetters—a transition that the halftoning reference places in the later twentieth century, with programmable screening formalized in page-description languages during the 1980s and 1990s and stochastic technologies commercialized over the same period."
    },
    {
      "kind": "paragraph",
      "text": "Attribution of a single \"first\" stochastic screen is not clear-cut. Several vendors introduced competing, separately branded stochastic and second-order FM screening technologies, and the priority claims around them are vendor-specific and contested in much the same way that the priority of the original halftone is contested. This reference therefore describes the era and the class of technology rather than crowning a single inventor or product, and it avoids assigning specific product names to specific dates where the record is promotional rather than independently established."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to adjacent concepts"
    },
    {
      "kind": "paragraph",
      "text": "FM screening is best understood as one node in the wider halftoning and color-reproduction system:"
    },
    {
      "kind": "list",
      "items": [
        "Amplitude modulation (AM) screening is its direct complement—fixed grid, variable dot size—and the two are frequently combined in hybrid AM/FM screens. The general treatment of AM, screen ruling, screen angles, and dot shape lives in the halftoning reference.",
        "Error diffusion and ordered dithering are the two classic digital-halftoning algorithm families; error diffusion is an FM method, while ordered (clustered-dot) dithering is the digital form of AM. FM's blue-noise masks are the aperiodic counterpart of ordered dithering's small periodic matrices.",
        "Image thresholding is the primitive operation beneath every screening method: each addressable spot is set by comparing a value against a threshold. FM defines a spatially aperiodic threshold surface; see the image thresholding reference.",
        "The raster image processor (RIP) is where screening is actually performed, and where the AM/FM choice, dot-gain compensation, and calibrated tone-value curves are applied.",
        "CMYK process color and extended-gamut inks are the setting in which FM's angle-independence matters most, since it removes the practical limit on how many separations can be superimposed without moiré.",
        "Dot gain and tone-value control, central to FM's press behavior, are governed in offset work by process-control standards such as ISO 12647-2, which define tone-value (dot-area) targets that any screen—AM or FM—must be characterized against."
      ]
    },
    {
      "kind": "paragraph",
      "text": "For the high-level overview of all of these together, see the halftoning reference; this page is intended as the deeper treatment of the FM/stochastic branch specifically."
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
      "slug": "halftoning"
    },
    {
      "section": "tools",
      "slug": "ordered-dithering"
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
      "q": "What is FM (stochastic) screening?",
      "a": "Frequency modulation (FM) screening, usually called stochastic screening in prepress, is a halftoning method that reproduces tone by varying the number and placement of very small, near-uniform dots across an area rather than by varying dot size on a fixed grid. Denser dots make darker tones and sparser dots make lighter ones. Because the dots are placed aperiodically, an FM screen has no regular ruling (LPI) or screen angle and is instead characterized by its micro-dot size."
    },
    {
      "q": "How is FM screening different from AM screening?",
      "a": "They modulate opposite properties. Amplitude modulation (AM, or conventional) screening keeps dots on a fixed regular grid and varies their size; frequency modulation (FM) keeps dot size roughly constant and varies how many dots fall in an area and where. AM has a screen ruling and a screen angle; FM has neither. The two are compared in more general terms in the halftoning reference."
    },
    {
      "q": "Does FM screening eliminate moiré?",
      "a": "It greatly reduces the periodic sources of moiré but is best described as largely avoiding it rather than eliminating it outright. Because an FM screen has no regular grid or angle, superimposed color separations do not form a rosette and fine repetitive image detail has no screen frequency to beat against. FM does not, however, remove every possible artifact, and it introduces its own sensitivities, such as increased susceptibility to dot gain."
    },
    {
      "q": "What are first-order and second-order FM screening?",
      "a": "First-order FM keeps every dot at the same minimum size and varies only their frequency, which maximizes detail but tends to be grainy and highly sensitive to dot gain in the midtones. Second-order FM allows the dots to grow and merge somewhat in the midtones, carrying tone through a mix of frequency and size to improve press stability. The related hybrid AM/FM approach uses an AM structure in the midtones and FM only at the extreme highlights and shadows. Vendor terminology varies, but the underlying trade is consistent."
    },
    {
      "q": "Why is FM screening more sensitive to dot gain?",
      "a": "A field of many tiny, dispersed dots has a far greater combined edge length than the same tone rendered as fewer, larger AM dots, and dot gain acts at dot edges. The extra perimeter means small increases in tone value—from mechanical ink spread and from optical light-scatter in the paper—add up quickly, so midtones tend to darken or plug more readily and the screen must be carefully characterized and compensated with tone-value curves. Dot gain is defined in the halftoning reference."
    }
  ],
  "sources": [
    {
      "title": "Halftone",
      "url": "https://en.wikipedia.org/wiki/Halftone",
      "publisher": "Wikipedia"
    },
    {
      "title": "Stochastic Screening",
      "url": "https://printwiki.org/Stochastic_Screening",
      "publisher": "PrintWiki"
    },
    {
      "title": "Screen Angles",
      "url": "https://printwiki.org/Screen_Angles",
      "publisher": "PrintWiki"
    },
    {
      "title": "ISO 32000-2 (PDF 2.0), Clause 10 — Rendering (halftones)",
      "url": "https://pdf-issues.pdfa.org/32000-2-2020/clause10.html",
      "publisher": "PDF Association"
    },
    {
      "title": "ISO 12647-2 — Graphic technology: Process control for the production of half-tone colour separations, proof and production prints — Part 2: Offset lithographic processes",
      "url": "https://www.iso.org/obp/ui/#!iso:std:iso:12647:-2:ed-2:v1:en",
      "publisher": "ISO"
    }
  ],
  "published": "2026-07-07",
  "updated": "2026-07-07",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "frequency modulation screening",
    "fm screening",
    "stochastic screening",
    "fm halftone",
    "first-order fm screening",
    "second-order fm screening",
    "hybrid am/fm screening",
    "error diffusion",
    "blue noise screening",
    "micro-dot",
    "prepress screening",
    "moire-free screening"
  ],
  "cluster": "print-imaging"
};

export default entry;
