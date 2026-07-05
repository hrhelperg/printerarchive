import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "halftoning",
  "title": "Halftoning",
  "description": "Halftoning simulates continuous-tone images using patterns of dots on bi-level printing devices. History, AM vs FM screening, PostScript and PDF halftones.",
  "summary": "Halftoning is the reprographic technique that reproduces a continuous-tone image on a device capable of laying down only a small, fixed set of ink or toner states by breaking the image into a pattern of dots that vary in size, spacing, or both. At normal viewing distance the eye spatially averages the dots, so fields of small or large dots read as intermediate grays; applied to each process ink it yields full-color reproduction. It underpins offset, gravure, flexography, and screen printing as well as bi-level laser and inkjet output, and is formalized in page-description languages such as PostScript and PDF through explicit screen and halftone controls.",
  "purpose": "A reprographic technique that simulates continuous-tone images using dots on devices that print few ink states.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "The core idea predates its practical realization. William Henry Fox Talbot is documented as having suggested, in an 1852 patent, the use of \"photographic screens or veils\" in connection with a photographic intaglio process, breaking an image into printable elements."
    },
    {
      "kind": "paragraph",
      "text": "Practical newspaper-grade reproduction emerged over the following decades. The first printed halftone photograph is commonly dated to 30 October 1869 — an image of Prince Arthur (photographed by William Notman) produced through William Leggo's \"leggotype\" work, with publisher George-Edouard Desbarats, for the Canadian Illustrated News. On 4 March 1880 the New York Daily Graphic published what is often described as the first newspaper reproduction of a photograph with a full tonal range (\"A Scene in Shantytown\"), using a crude halftone screen. Frederic Ives of Philadelphia patented a commercially significant method in 1881, and in 1882 Georg Meisenbach of Germany patented a halftone process (\"autotype\"/Autotypie) that became commercially successful for relief halftones. These early processes used cross-line glass screens interposed between the subject and the photographic plate."
    },
    {
      "kind": "paragraph",
      "text": "Priority in this field is genuinely contested. Multiple inventors worked in parallel, and the widely repeated \"first\" dates (1869, 1880) are commonly cited rather than definitively settled. This page therefore describes the era and named contributors rather than asserting a single definitive inventor. Photographic screening dominated for roughly a century; from the 1970s onward electronic dot generators and, later, fully digital raster image processors progressively replaced camera-and-screen methods."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Printing presses and most digital marking engines are fundamentally bi-level (or few-level) devices: at a given spot, ink is either deposited or it is not, so they cannot natively render the intermediate gray values of a photograph."
    },
    {
      "kind": "paragraph",
      "text": "Before halftoning, photographs could not be printed in the same press pass as text; illustrations had to be hand-engraved or reproduced by separate continuous-tone processes that were slow and unsuited to high-volume relief/letterpress and, later, offset workflows. Halftoning converts continuous tone into a purely bi-level dot pattern that a standard press or bi-level printer can reproduce, letting photographs and text share the same plate and print run. This is the enabling technology behind the illustrated newspaper, magazine, and modern commercial print."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "The perceived tone at a location is controlled by the fraction of area covered by ink (the \"dot area\" or coverage). There are two principal strategies for modulating that coverage."
    },
    {
      "kind": "list",
      "items": [
        "Amplitude Modulation (AM), also called conventional or ordered screening: dots sit on a fixed, regular grid at a constant spacing, and the dot size varies — small dots for highlights, large dots for shadows. AM is predictable and controllable on press but introduces periodic structure that can interact with image detail or with other color screens.",
        "Frequency Modulation (FM), also called stochastic screening: dots are of nearly uniform, very small size, and tone is varied by changing how many dots occupy an area and where they fall, placed by a pseudo-random or error-diffusion algorithm. With no dominant periodic grid, FM largely avoids moire and resolves fine detail, at the cost of greater sensitivity to dot gain and press variation."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Hybrid AM/FM screens combine an AM grid in midtones with FM behavior in extreme highlights and shadows, where AM dots would otherwise be too small or too merged to hold."
    },
    {
      "kind": "paragraph",
      "text": "In digital halftoning the equivalent operations are ordered dithering (a threshold matrix compared against pixel values — the digital form of AM) and error diffusion (e.g., Floyd-Steinberg, an FM-type method), performed by the raster image processor (RIP) or printer firmware."
    },
    {
      "kind": "paragraph",
      "text": "Key AM parameters include the screen frequency or ruling (measured in lines per inch, LPI, or lines per cm), the screen angle (critical for color work), and the dot shape (round, elliptical, square, line), which affects how tones transition where dots begin to touch. For color work the three strong process colors are conventionally separated by about 30 degrees to minimize moire, with yellow often run at a slightly different frequency; sources vary on the exact per-color angle assignment, so the 30-degree separation principle is the reliable statement rather than any single canonical table."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the print/document pipeline"
    },
    {
      "kind": "paragraph",
      "text": "Halftoning is performed at raster/output time, near the very end of the pipeline — after the page has been composed and rasterized to the device's addressable grid, but before (or as) the bi-level bitmap is sent to the marking engine."
    },
    {
      "kind": "paragraph",
      "text": "A typical prepress flow is: design application produces a page description (PostScript/PDF); a RIP rasterizes it to a high-resolution continuous-tone raster at device resolution; a halftone/screening stage thresholds that raster into a bi-level (or multi-level) dot pattern; and the result drives a platesetter/imagesetter (for offset) or a print engine (for digital). The screening stage is where LPI, angle, dot shape, and the AM/FM choice are applied, and where dot-gain compensation curves are typically baked in."
    },
    {
      "kind": "paragraph",
      "text": "Dot gain is the well-documented tendency of printed dots to end up larger than intended, from ink spreading on or into the substrate (mechanical/physical gain) and from optical light-scattering at dot edges (optical gain). It darkens midtones most and must be characterized and compensated via tone/transfer curves. Gain is larger on absorbent, uncoated stocks (such as newsprint) and smaller on coated art paper, which is why achievable LPI is substrate-dependent."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "For bi-level marking engines — most laser printers and many inkjets — halftoning is what makes photographic and gray-scale output possible at all, since a single toner or ink drop is essentially on/off at a spot."
    },
    {
      "kind": "paragraph",
      "text": "The device's addressability (dpi) sets an upper bound on screening quality: a coarse engine can only place a coarse or low-gray-count screen. Published rules of thumb tie engine resolution to usable screen ruling — for example, roughly 65 LPI at 300 dpi and about 85 to 105 LPI at 600 dpi for laser output. These are representative figures, not fixed standards. Many inkjets combine small addressable drops with FM/error-diffusion screening and, on photo printers, variable drop sizes, blurring the line between \"halftone\" and near-continuous tone. Screen printing typically uses relatively coarse rulings because of thick ink films and coarse mesh."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "paragraph",
      "text": "Operating-system print subsystems participate in halftoning primarily by rasterizing and handing off page content, and by providing screening when the target device cannot do it itself."
    },
    {
      "kind": "paragraph",
      "text": "On Unix-like systems, CUPS with Ghostscript performs screening when driving a raw bi-level engine. Windows exposes halftoning through its print/graphics path (including halftone stretch modes and driver-level dithering) and, in modern drivers, through the print pipeline, with the actual screening typically done by the printer driver or the device. Apple's macOS printing stack is built on CUPS. In all cases, high-end screening for offset prepress is usually delegated to a dedicated RIP rather than the OS, whereas office and desktop printing relies on OS- or driver-level dithering."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF / PostScript / drivers"
    },
    {
      "kind": "paragraph",
      "text": "PostScript made halftone control an explicit, programmable part of the page description. The language exposes operators to set the screen: setscreen and setcolorscreen (frequency, angle, and a spot function) and the more general sethalftone with halftone dictionaries (supporting threshold-array and multi-cell halftone types); a halftone dictionary supplied to setscreen behaves as sethalftone. A spot function is a procedure that defines the order in which cells within the halftone grid are turned on as tone darkens, thereby determining dot shape."
    },
    {
      "kind": "paragraph",
      "text": "A defining constraint of cell-based (AM) screening is the trade-off between resolution and the number of reproducible gray levels: with a clustered-dot cell of n x n device pixels, the number of achievable gray levels is n squared plus 1, where n = device resolution (dpi) / screen frequency (lpi). Higher LPI at a fixed dpi therefore yields fewer gray levels. To reconcile rational device grids with the angles and frequencies ideal for color work, vendors developed accurate/supercell screening (for example, Adobe Accurate Screens and Linotype-Hell technologies) that uses large repeating supercells to closely approximate the target angle and ruling while preserving gray-level count."
    },
    {
      "kind": "paragraph",
      "text": "PDF inherits this model: it carries halftone constructs in the graphics state through the HT (halftone) entry of an ExtGState dictionary, using the same dictionary types and spot-function/threshold-array concepts as PostScript, so a RIP can honor document-specified screening. In practice, most production workflows override document-level screening at the RIP/output-device stage, applying the shop's calibrated screens rather than whatever a file requests. Printer drivers likewise either pass through PDL screening or substitute their own halftoning appropriate to the engine."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "Halftoning remains ubiquitous. AM screening is still the workhorse of commercial offset, at higher rulings on coated stock and coarser rulings on newsprint. FM/stochastic and hybrid AM/FM screens are widely used for high-fidelity work, fine detail, and to enable printing with more than four inks (extended-gamut or \"hi-fi\" color) without moire."
    },
    {
      "kind": "paragraph",
      "text": "Computer-to-plate (CtP) imagesetters and platesetters apply digital screening at very high addressability, while desktop and office laser/inkjet output relies on driver/OS dithering. Digital halftoning research continues on error-diffusion variants, blue-noise mask design, and model-based, optimization, and machine-learning approaches to extract more perceived tone and detail from bi-level devices."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Enables continuous-tone imagery on bi-level and few-level devices — the enabling technology of illustrated mass print.",
        "Lets photographs and text/line art print on the same plate and pass.",
        "AM screening is predictable, controllable, and robust on high-speed presses.",
        "FM/stochastic screening resolves very fine detail, largely avoids color moire, and supports extended-gamut multi-ink printing.",
        "Fully digital screening integrates cleanly with PostScript/PDF RIP workflows and calibration (dot-gain compensation)."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Limitations"
    },
    {
      "kind": "list",
      "items": [
        "Moire: overlapping periodic AM screens, and their interaction with regular image detail, can beat into visible interference patterns; managed by correct screen angles and, with FM, largely avoided.",
        "Resolution-versus-gray-levels trade-off in AM cell screening (gray levels approximately (dpi/lpi) squared + 1): finer screens mean fewer tonal steps at a given device resolution.",
        "Dot gain: dots print larger than intended (ink spread plus optical scatter), darkening midtones; this requires characterization and tone-curve compensation and constrains usable LPI on absorbent or rough substrates.",
        "FM screening's many tiny, edge-heavy dots are more sensitive to dot gain and press variation and place higher demands on platemaking and press stability.",
        "Extreme highlights and shadows are hard for pure AM (dots too small to hold or too merged), motivating hybrid screens."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Related standards and protocols"
    },
    {
      "kind": "list",
      "items": [
        "PostScript (Adobe) — setscreen, setcolorscreen, and sethalftone operators, halftone dictionaries, and spot functions.",
        "PDF (ISO 32000) — halftone specification via the HT entry in graphics-state (ExtGState) dictionaries, mirroring PostScript halftone types.",
        "Vendor/RIP screening technologies — Adobe Accurate Screens and Linotype-Hell supercell/stochastic screening, licensed into PostScript workflows.",
        "CUPS / Ghostscript — open-source raster/print pipeline that performs screening for bi-level engines.",
        "Digital halftoning algorithms — ordered/clustered-dot dithering (e.g., Bayer matrices), error diffusion (e.g., Floyd-Steinberg), and blue-noise/stochastic masks (methods, not formal standards).",
        "ISO 12647-2 — process control for offset lithography, governing tone value (dot gain) targets that depend on halftone dot area."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Timeline"
    },
    {
      "kind": "timeline",
      "events": [
        {
          "period": "c. 1852",
          "text": "William Henry Fox Talbot patents the concept of interposing \"photographic screens or veils\" to break an image into printable elements (intaglio context)."
        },
        {
          "period": "30 October 1869",
          "text": "First printed halftone photograph commonly dated to this time (Prince Arthur image, associated with William Leggo's leggotype)."
        },
        {
          "period": "4 March 1880",
          "text": "New York Daily Graphic publishes a newspaper photograph reproduction with a full tonal range (\"A Scene in Shantytown\") using a crude halftone screen."
        },
        {
          "period": "1881",
          "text": "Frederic Ives (Philadelphia) patents a commercially significant halftone method."
        },
        {
          "period": "1882",
          "text": "Georg Meisenbach (Germany) patents the \"autotype\" halftone process; commercially successful relief halftones."
        },
        {
          "period": "1880s",
          "text": "Industrial-scale relief halftone printing takes hold as multiple inventors refine cross-line screen processes."
        },
        {
          "period": "1970s onward",
          "text": "Electronic dot generators and digital screening progressively replace photographic camera-and-screen halftoning."
        },
        {
          "period": "1980s–1990s",
          "text": "PostScript formalizes programmable screening (setscreen/sethalftone); FM/stochastic and accurate/supercell screening technologies are commercialized."
        }
      ]
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This is a neutral technical and historical reference. Figures and dates are drawn from documented sources; it does not include current pricing, marketing claims, or product recommendations. The references consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "tools",
      "slug": "raster-image-processor"
    },
    {
      "section": "guides",
      "slug": "laser-printing"
    },
    {
      "section": "history",
      "slug": "evolution-of-color-printing"
    },
    {
      "section": "guides",
      "slug": "inkjet-printing"
    },
    {
      "section": "guides",
      "slug": "what-is-postscript-printing"
    },
    {
      "section": "guides",
      "slug": "electrophotography"
    }
  ],
  "faqs": [
    {
      "q": "What is halftoning?",
      "a": "Halftoning is a reprographic technique that simulates a continuous-tone image, such as a photograph, on a device that can lay down only a small, fixed set of ink or toner states. It breaks the image into a pattern of dots varying in size, spacing, or both; at normal viewing distance the eye averages the dots into apparent grays, and applying the process to each process ink produces full color."
    },
    {
      "q": "What is the difference between AM and FM screening?",
      "a": "In amplitude modulation (AM, or conventional) screening, dots sit on a fixed regular grid and their size varies to represent tone. In frequency modulation (FM, or stochastic) screening, dots are nearly uniform and very small, and tone is varied by how many dots fall in an area and where, placed by a pseudo-random or error-diffusion algorithm. FM largely avoids moire and resolves fine detail but is more sensitive to dot gain."
    },
    {
      "q": "Why do finer halftone screens reduce the number of gray levels?",
      "a": "In cell-based AM screening a gray level is produced by turning on a number of device pixels within a halftone cell. For a cell of n by n device pixels the number of achievable gray levels is n squared plus 1, where n equals device resolution (dpi) divided by screen frequency (lpi). Raising the screen ruling at a fixed dpi shrinks the cell, so fewer distinct tonal steps are possible."
    },
    {
      "q": "How do PostScript and PDF control halftoning?",
      "a": "PostScript exposes the screen through operators such as setscreen, setcolorscreen, and sethalftone, using halftone dictionaries and spot functions that determine dot shape and the order cells fill as tone darkens. PDF inherits this model through the HT (halftone) entry of an ExtGState graphics-state dictionary. In practice most production workflows override document-specified screening at the RIP using the shop's calibrated screens."
    },
    {
      "q": "What is dot gain?",
      "a": "Dot gain is the tendency of printed dots to end up larger than intended, from ink spreading on or into the substrate (mechanical gain) and from light scattering at dot edges (optical gain). It darkens midtones most and must be characterized and compensated with tone/transfer curves. It is larger on absorbent stocks like newsprint and smaller on coated paper, which is one reason usable screen ruling depends on the substrate."
    }
  ],
  "sources": [
    {
      "title": "Halftone",
      "url": "https://en.wikipedia.org/wiki/Halftone",
      "publisher": "Wikipedia"
    },
    {
      "title": "ISO 12647-2 — Graphic technology: Process control for the production of half-tone colour separations, proof and production prints — Part 2: Offset lithographic processes",
      "url": "https://www.iso.org/obp/ui/#!iso:std:iso:12647:-2:ed-2:v1:en",
      "publisher": "ISO"
    },
    {
      "title": "ISO 32000-2 (PDF 2.0), Clause 10 — Rendering (halftones)",
      "url": "https://pdf-issues.pdfa.org/32000-2-2020/clause10.html",
      "publisher": "PDF Association"
    },
    {
      "title": "PostScript Language Reference — Level 2 operators (setscreen, setcolorscreen, sethalftone)",
      "url": "https://hepunx.rl.ac.uk/~adye/psdocs/ref/PSL2s.html",
      "publisher": "Adobe Systems (PLRM operator reference)"
    },
    {
      "title": "Accurate Screens",
      "url": "https://printwiki.org/Accurate_Screens",
      "publisher": "PrintWiki"
    },
    {
      "title": "Screen Angles",
      "url": "https://printwiki.org/Screen_Angles",
      "publisher": "PrintWiki"
    },
    {
      "title": "Halftones and grey levels explained",
      "url": "http://the-print-guide.blogspot.com/2009/01/halftones-and-grey-levels-explained.html",
      "publisher": "The Print Guide"
    },
    {
      "title": "The Illustrated News: Half-tone photographic printing",
      "url": "https://ingeniumcanada.org/channel/innovation/illustrated-news-half-tone-photographic-printing",
      "publisher": "Ingenium Canada"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "halftoning",
    "halftone",
    "screening",
    "am screening",
    "fm screening",
    "stochastic screening",
    "dot gain",
    "screen ruling",
    "lpi",
    "moire",
    "dithering",
    "error diffusion"
  ],
  "cluster": "color-and-imaging"
};

export default entry;
