import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "print-banding",
  "title": "Print Banding",
  "description": "Print banding is periodic light and dark bands across a print. Learn its mechanical, inkjet, electrophotographic and gradient causes, diagnosis and fixes.",
  "summary": "Print banding is a print-quality defect in which visible, roughly periodic light and dark bands appear across areas meant to be a uniform tone or a smooth gradient. It arises from several distinct mechanisms — eccentric or vibrating rotating components, media-advance and inkjet nozzle errors, uneven electrophotographic development or exposure, and insufficient tonal resolution in gradients — and the spacing of the bands often points to the source. Diagnosis combines visual inspection of test patches with spatial-frequency measurement of print uniformity, and remediation ranges from workflow and calibration adjustments to general maintenance and, for worn internal hardware, professional servicing.",
  "difficulty": "intermediate",
  "estimatedTime": "12 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What print banding is"
    },
    {
      "kind": "paragraph",
      "text": "Print banding, often called simply banding, is a print-quality defect in which visible, roughly periodic light and dark bands appear in areas of a print that are meant to be a uniform tone or a smooth gradient. The bands cross the print as stripes and are usually oriented perpendicular to the direction in which the medium moves through the device — the process direction — so that density varies as one moves along that direction. Because it disturbs large, flat areas rather than fine detail, banding is a periodic macro-uniformity defect (large-area, low-spatial-frequency variation), distinct from the aperiodic non-uniformities graininess (a fine-scale, high-spatial-frequency variation) and mottle (a coarser, low-spatial-frequency variation)."
    },
    {
      "kind": "paragraph",
      "text": "The term covers two related but physically distinct phenomena. The first, and the primary sense in hardcopy output, is device banding: periodic density variation introduced by the printing mechanism itself, for example by an eccentric roller or by an error in how far the medium advances between passes. The second is quantization or contour banding: visible steps in a smooth gradient that arise in the image data or the tonal pipeline when there are too few tonal levels, independent of the marking hardware. Both present as bands in a would-be-smooth area, which is why they share a name, but they have different causes and different remedies and are treated separately below."
    },
    {
      "kind": "paragraph",
      "text": "Banding is documented across the major printing processes — electrophotographic (laser and LED) printing, inkjet printing, and offset and other press processes — because each relies on rotating parts, stepwise media movement, or halftone rendering, any of which can introduce a repeating variation. Peer-reviewed characterizations of print artifacts group banding with related periodic defects such as jitter and ghosting, all of which stem from timing or spacing irregularities in the imaging chain."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Appearance, and how banding differs from related defects"
    },
    {
      "kind": "paragraph",
      "text": "Banding appears as a sequence of lighter and darker bands crossing an area that should read as even tone. It is most conspicuous in midtone fills, in gradients and vignettes, in skies and skin tones, and in large solid areas, because the human visual system is highly sensitive to gentle, regular variation at low-to-moderate spatial frequencies. Banding often shows up more strongly in one colorant than the others and may be visible only at certain tone levels. Regular, evenly spaced bands suggest a periodic device cause; irregular or tone-dependent steps within a gradient point instead to a quantization or screening cause."
    },
    {
      "kind": "paragraph",
      "text": "Several neighbouring defects can look similar, so it helps to distinguish them:"
    },
    {
      "kind": "list",
      "items": [
        "Streaking runs the other way. Streaks are typically continuous marks oriented along the process direction (the direction of media travel) and need not be periodic, whereas banding is a set of repeating bands oriented across it. See the companion Print Streaking reference.",
        "Mottle is aperiodic. Mottle is a random, cloudy unevenness with no regular spacing, rather than the regularly spaced bands that define banding.",
        "Moiré is interference between periodic patterns. A moiré pattern is a coarse beat produced when two regular structures such as halftone screens overlap, covered on the companion Moiré Patterns page; it is not the once-per-revolution density variation of mechanical banding, although halftone-interaction banding sits near the boundary between the two.",
        "Ghosting and misregistration are distinct. Ghosting is a faint repeated copy of image content, and registration error is a misalignment of the separations; both are covered on their own pages and differ from the tone-only banding described here."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Because these defects can coexist, appearance alone is often not conclusive. The diagnostic step of measuring band spacing and orientation, described later, is what separates the causes."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Mechanical and drive causes: rotational banding"
    },
    {
      "kind": "paragraph",
      "text": "The most characteristic form of device banding is rotational banding, caused by imperfections in the rotating parts that move the medium and carry the image. In electrophotographic printers the candidate components include the photoconductor drum, the charge roller, the developer roller, transfer rollers, the fuser rollers, and the gears, pinions, and drive motor that turn them; in inkjet and other systems the media-drive rollers and the carriage drive play the same role. If any of these is slightly eccentric, out of round, worn, or subject to vibration, or if a gear train introduces cyclic speed variation — jitter or wobble — the surface velocity or the image spacing fluctuates once per revolution. That cyclic fluctuation is written into the print as a periodic density variation in the process direction."
    },
    {
      "kind": "paragraph",
      "text": "The defining property of rotational banding is that the spacing, or period, of the bands equals the distance the medium travels during one revolution of the offending part — its once-around distance, equal to the component's circumference — or, for a gear, the pitch of its tooth engagement. This makes the band period a fingerprint: measuring the spacing and comparing it against the known once-around distances of the rotating components indicates which part is responsible. The imaging-science literature describes this relationship directly and has developed methods to estimate the repetitive interval of periodic bands in order to localize their source."
    },
    {
      "kind": "paragraph",
      "text": "Reported measurements place the most visible electrophotographic banding at low-to-moderate spatial frequencies. That range matters because the human contrast-sensitivity function is band-pass — it peaks at moderate spatial frequencies and rolls off at both very low and very high frequencies — so a small periodic variation in this middle range is readily seen. These are general characterizations of the phenomenon drawn from the literature, not device specifications or settings to apply."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Media-advance and inkjet nozzle banding"
    },
    {
      "kind": "paragraph",
      "text": "A second family of banding comes from how the medium is advanced and, in inkjet, from the printhead itself. Scanning inkjet printers build the image in swaths as the carriage traverses the page, advancing the medium between swaths. If the advance is slightly too large, a thin unprinted gap appears at the swath boundary and reads as a light band; if it is slightly too small, adjacent swaths overlap and lay down extra colorant, reading as a dark band. The result is banding at the swath pitch. Technical and patent literature on incremental (swath) printing identifies these swath-boundary coincidences, together with nozzle-to-nozzle irregularities, as a principal source of inkjet banding."
    },
    {
      "kind": "paragraph",
      "text": "Inkjet banding also arises directly from the nozzles. A missing, clogged, or deflected nozzle fails to place its raster line, or places it in the wrong position, leaving fine white lines or narrow bands at the nozzle-spacing pitch; a group of weak nozzles produces a lighter band. This nozzle-driven banding is closely related to nozzle clogging and missing-nozzle behaviour, which the companion Inkjet Nozzle Clogging reference covers in detail."
    },
    {
      "kind": "paragraph",
      "text": "General, well-documented mitigations for this family act by disrupting the regular pattern rather than by removing its underlying cause:"
    },
    {
      "kind": "list",
      "items": [
        "Multi-pass and interlaced (weave) print modes distribute each raster line across several nozzles and several passes, so no single nozzle or swath boundary dominates any one band; deliberately varying, or even randomizing, the media-advance distance between passes further prevents swath edges from coinciding.",
        "The manufacturer's media-advance (paper-feed) calibration, where provided, corrects a systematic advance error.",
        "The manufacturer's nozzle-check pattern and printhead-cleaning or recovery cycle address missing-nozzle banding; the specific cycles and intervals are device-specific and are not detailed here."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Electrophotographic process banding"
    },
    {
      "kind": "paragraph",
      "text": "Beyond the mechanical drive, the electrophotographic process itself can produce banding when any of its image-forming steps varies periodically or non-uniformly across the page. Uneven charging of the photoconductor, fluctuation in the development bias or in developer and toner concentration, and variation in the exposure that writes the latent image all translate into density variation. In a laser engine the exposure can vary with the rotation of the scanning polygon mirror or with differences between its mirror facets; in an LED-array printhead, chip-to-chip or emitter-to-emitter intensity differences can produce fixed banding tied to the array layout rather than to a rotation."
    },
    {
      "kind": "paragraph",
      "text": "Because these process variations often couple with the rotating components that carry them, electrophotographic banding is frequently periodic and is analysed with the same period-to-source reasoning used for rotational banding. Where the variation is systematic and can be measured, some systems apply electronic banding compensation, adjusting exposure timing or intensity to counteract the measured periodic error; this is a manufacturer- or service-level control rather than a user procedure."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Quantization and screening banding in gradients"
    },
    {
      "kind": "paragraph",
      "text": "The other principal sense of banding is not a hardware fault at all but a rendering effect. When a smooth gradient is stored or processed with too few tonal levels — too low a bit depth — the continuous transition is forced onto a small set of discrete values, and the boundaries between those values appear as visible steps, or contour bands, across the gradient. This is the same phenomenon known in digital imaging as colour banding or posterization, and it is a property of the image data and the tonal pipeline rather than of the marking engine."
    },
    {
      "kind": "paragraph",
      "text": "A related, hybrid case is halftone-interaction banding, in which the interaction between the halftone screen and the device's own periodicity or tonal transfer produces banding in what should be a smooth ramp. Because halftoning renders continuous tone with patterns of dots, the way tone is quantized and screened directly affects whether gradients reproduce smoothly. These topics are treated on the companion Halftoning, Amplitude-Modulation Screening, Error Diffusion, Ordered Dithering, and Dot Gain references and are not re-explained here."
    },
    {
      "kind": "paragraph",
      "text": "General principles for gradient and quantization banding include:"
    },
    {
      "kind": "list",
      "items": [
        "Carry and process image tone at an adequate bit depth, and avoid unnecessary tonal compression or repeated lossy re-encoding, which discards levels.",
        "Apply dithering — for example error diffusion or ordered dithering — which trades a small amount of noise for the elimination of visible contour steps.",
        "Linearize and calibrate the tonal response and keep colour management and device profiles current, so that tone steps are distributed evenly rather than bunched where the eye will catch them; see the companion Colour Calibration, Printer Profiling, and Colour Management guides."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Diagnosis and measurement"
    },
    {
      "kind": "paragraph",
      "text": "Diagnosing banding begins with controlled test output. Printing uniform tint patches at several tone levels, single-colorant patches, and smooth gradients, then examining them under even, glare-free lighting, reveals the orientation of the bands, their regularity, the tone levels at which they appear, and which colorant carries them. Regular, evenly spaced bands indicate a periodic device cause; steps confined to gradients that move with tone level indicate a quantization or screening cause; banding present in a single separation isolates the responsible colour channel and its associated hardware path."
    },
    {
      "kind": "paragraph",
      "text": "For periodic banding, the central measurement is the band period. Measuring the spacing between bands and comparing it with the known once-around distances of the rotating components maps the defect to its source, because a periodic band repeats at the circumference of the part that produces it. Formal methods can estimate this repetitive interval automatically from a scan of the print."
    },
    {
      "kind": "paragraph",
      "text": "Quantitative characterization uses spatial-frequency analysis. The density profile of a uniform area is measured and transformed — for example by power-spectrum or band-pass (octave-band) analysis — so that the amplitude of variation at each spatial frequency can be read off and correlated with what a viewer perceives; research on the optical homogeneity of prints established such band-pass and power-spectrum measures for exactly this purpose. More recent work characterizes banding and related artifacts such as jitter using wavelet filtering and two-dimensional spectral analysis to handle bands of arbitrary orientation. At the standards level, device-independent measurement of hardcopy image-quality attributes is defined by ISO/IEC 13660 and the later ISO/IEC 24790; within this measurement tradition, banding is treated as a periodic macro-uniformity (large-area) variation, distinct from the aperiodic non-uniformities graininess (a fine-scale, high-spatial-frequency attribute) and mottle (a coarser, low-spatial-frequency attribute). A companion Print Quality Assessment reference covers these standards in more depth."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "General remediation principles"
    },
    {
      "kind": "paragraph",
      "text": "Because banding has several distinct causes, effective remediation begins with the diagnosis above: establishing whether the banding is periodic (a device cause) or confined to gradients (a rendering cause), and which colorant it affects, before changing anything. The measures below are general, well-documented principles; the specific procedures, settings, and intervals that implement them are device-specific and belong to the manufacturer's documentation. Anything involving worn or faulty internal hardware requires servicing by a qualified technician and is not a user procedure."
    },
    {
      "kind": "paragraph",
      "text": "Workflow and data measures, which are user-addressable:"
    },
    {
      "kind": "list",
      "items": [
        "For gradient or contour banding, increase tonal bit depth, apply dithering such as error diffusion or ordered dithering, and avoid unnecessary lossy re-compression.",
        "Linearize and calibrate the tonal and colour response and keep device profiles current, so tone steps are distributed evenly; see the Colour Calibration, Printer Profiling, and Colour Management guides.",
        "Select an appropriate print mode, typically a higher pass count or interlaced mode, which spreads each line across multiple nozzles or passes and reduces swath and nozzle-pattern banding.",
        "Match the media to the print process and keep media and environment within the manufacturer's recommended conditions."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Maintenance measures, which are user-addressable and described only in general terms:"
    },
    {
      "kind": "list",
      "items": [
        "For inkjet missing-nozzle banding, run the manufacturer's nozzle-check and printhead-cleaning or recovery cycle; specific cycle counts and maintenance intervals are device-specific and are not prescribed here. See the Inkjet Nozzle Clogging reference.",
        "Where the device provides a media-advance (paper-feed) calibration, running it corrects a systematic advance error.",
        "Replace consumables that are depleted or out of specification, following the manufacturer's guidance."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Hardware and service-level causes, which require servicing:"
    },
    {
      "kind": "list",
      "items": [
        "Periodic banding traced to a worn, eccentric, or contaminated roller, drum, developer unit, laser or LED unit, or drive component is an internal fault that requires servicing, or replacement of the affected consumable or part by qualified service personnel; it is not addressed by user-facing settings.",
        "Some systems provide electronic banding compensation that adjusts exposure timing or intensity to counteract a measured periodic error; this is a manufacturer- or service-level function rather than a user procedure."
      ]
    },
    {
      "kind": "paragraph",
      "text": "In all cases the aim is to reduce banding below the threshold of visibility for the work at hand. Because the eye is so sensitive to regular low-frequency variation, some residual non-uniformity can remain even in well-maintained systems, and acceptability is judged against the print-quality requirements of the job."
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
      "slug": "streaking"
    },
    {
      "section": "tools",
      "slug": "dot-gain"
    },
    {
      "section": "guides",
      "slug": "nozzle-clogging"
    },
    {
      "section": "tools",
      "slug": "amplitude-modulation-screening"
    },
    {
      "section": "guides",
      "slug": "print-registration"
    },
    {
      "section": "tools",
      "slug": "error-diffusion"
    }
  ],
  "faqs": [
    {
      "q": "What is print banding?",
      "a": "Print banding is a defect in which visible, roughly periodic light and dark bands appear across an area of a print that should be a uniform tone or a smooth gradient. It is a macro-uniformity (large-area) defect and can be caused either by the printing mechanism — for example an eccentric roller, a media-advance error, or a missing inkjet nozzle — or, in smooth gradients, by too few tonal levels in the image data, which is known as quantization or contour banding."
    },
    {
      "q": "Why does the spacing of the bands matter?",
      "a": "For banding produced by a rotating part, the bands repeat at the distance the medium travels in one revolution of that part — its circumference, or once-around distance. Measuring the band spacing and comparing it with the known once-around distances of the rollers, drum, and gears therefore points to which component is responsible, which is why period measurement is central to diagnosing periodic banding."
    },
    {
      "q": "What is the difference between banding and streaking?",
      "a": "Banding is a set of repeating light and dark bands oriented across the direction the medium moves, and it is usually periodic. Streaking is typically a continuous mark running along the direction of media travel and need not be periodic. The orientation and the regularity of the marks distinguish the two; the companion Print Streaking reference covers streaks in detail."
    },
    {
      "q": "How do I reduce banding in a smooth gradient or sky?",
      "a": "Gradient banding is usually a rendering effect from too few tonal levels rather than a hardware fault. Carrying the image at a higher bit depth, applying dithering such as error diffusion or ordered dithering, avoiding repeated lossy compression, and keeping the tonal response calibrated and profiled all help distribute the tone steps so they are no longer visible as contours."
    },
    {
      "q": "Can print banding be fixed by the user, or does it need servicing?",
      "a": "It depends on the cause. Gradient banding and some inkjet banding are user-addressable through workflow settings, calibration, print-mode choice, and the manufacturer's nozzle-check, cleaning cycles, or media-advance calibration. Banding traced to a worn or eccentric roller, drum, developer, laser or LED unit, or drive component is an internal hardware fault that requires servicing by a qualified technician and is not a do-it-yourself repair."
    }
  ],
  "sources": [
    {
      "title": "Characterization of Electrophotographic Print Artifacts: Banding, Jitter, and Ghosting (IEEE Transactions on Image Processing, vol. 20, no. 5)",
      "url": "https://ieeexplore.ieee.org/document/5635331/",
      "publisher": "IEEE"
    },
    {
      "title": "Estimation of Repetitive Interval of Periodic Bands in Laser Electrophotographic Printer Output (Proc. SPIE 9396, Image Quality and System Performance XII)",
      "url": "https://doi.org/10.1117/12.2083547",
      "publisher": "SPIE"
    },
    {
      "title": "Optical Homogeneity of Prints (Doctoral Thesis)",
      "url": "https://kth.diva-portal.org/smash/get/diva2:8640/FULLTEXT01",
      "publisher": "KTH Royal Institute of Technology"
    },
    {
      "title": "ISO/IEC 24790:2017 — Measurement of image quality attributes for hardcopy output — Monochrome text and graphic images",
      "url": "https://www.iso.org/standard/69796.html",
      "publisher": "International Organization for Standardization (ISO)"
    },
    {
      "title": "ISO/IEC 13660:2001 — Measurement of image quality attributes for hardcopy output — Binary monochrome text and graphic images",
      "url": "https://www.iso.org/standard/22145.html",
      "publisher": "International Organization for Standardization (ISO)"
    },
    {
      "title": "US Patent 6,523,936 — Banding reduction in incremental printing, by spacing-apart of swath edges and randomly selected print-medium advance",
      "url": "https://patents.google.com/patent/US6523936B2/en",
      "publisher": "United States Patent and Trademark Office"
    },
    {
      "title": "Colour banding",
      "url": "https://en.wikipedia.org/wiki/Colour_banding",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "print banding",
    "banding printing defect",
    "horizontal banding",
    "periodic density variation",
    "inkjet banding",
    "laser printer banding",
    "media advance banding",
    "missing nozzle banding",
    "gradient banding",
    "posterization banding",
    "macro-uniformity",
    "print quality defect"
  ],
  "cluster": "print-quality"
};

export default entry;
