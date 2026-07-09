import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "print-quality-assessment",
  "title": "Print Quality Assessment",
  "description": "Print quality assessment is the visual and instrumental measurement of printed output — its tone, color, sharpness, uniformity, and defects.",
  "summary": "Print quality assessment is the systematic measurement and evaluation of printed output, resolving the general notion of \"quality\" into defined attributes — tone and density, color accuracy, sharpness and line reproduction, uniformity, gloss, and freedom from defects — that can be judged visually or measured with instruments. Objective methods (reflection densitometry, colorimetry and spectrophotometry, and image-analysis systems) produce repeatable, operator-independent numbers, while subjective visual evaluation under controlled viewing conditions captures overall perceived quality; the two are used together. International standards — including the ISO/IEC 13660 and ISO/IEC 24790 attribute measures, ISO 15311 print-quality reporting, ISO 12647 process-control aim values, and the ISO 13655 and ISO 5 measurement conditions — provide common metrics, tolerances, and reporting so that results are comparable between operators and sites. This overview frames the attributes, instruments, standards, and diagnostic approach shared by the individual print-defect topics, and treats remediation only as general, well-documented principle rather than device-specific repair.",
  "difficulty": "intermediate",
  "estimatedTime": "12 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What print quality assessment is"
    },
    {
      "kind": "paragraph",
      "text": "Print quality assessment is the systematic evaluation of how faithfully and how consistently a printing process reproduces its intended output, expressed through defined, measurable attributes of the finished print. Rather than reducing to a single verdict of \"good\" or \"bad,\" it resolves the loose everyday idea of quality into specific dimensions — tone and density, color accuracy, sharpness and line reproduction, uniformity, gloss, and freedom from defects — each of which can be observed, measured, and compared against a target value or an agreed tolerance."
    },
    {
      "kind": "paragraph",
      "text": "The discipline serves several distinct purposes that are worth separating, because they use different methods and reference points:"
    },
    {
      "kind": "list",
      "items": [
        "Process control: monitoring a running process so that it stays within known limits and reproduces the same result from sheet to sheet and day to day. This is closely tied to calibrating a device to standard aim values and is discussed further under color calibration and dot gain.",
        "Conformance and acceptance: judging whether a finished product meets an agreed specification, frequently as part of the relationship between a print buyer and a print supplier.",
        "Diagnosis: identifying, characterising, and localising a specific artefact or fault so that its cause can be addressed."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Print quality is always assessed relative to a purpose and a viewing context. The same sheet can be entirely acceptable for one application and unacceptable for another — newsprint, a fine-art reproduction, and a packaging mock-up are held to very different expectations — so an assessment is meaningful only against a stated intent, substrate, and intended viewing condition. This page is a concept-level overview of the attributes, instruments, standards, and diagnostic approach that the individual print-defect topics share; it is distinct from the step-by-step consumer how-to material collected under troubleshooting, and it describes phenomena and general remediation principles rather than device-specific repair."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Subjective and objective evaluation"
    },
    {
      "kind": "paragraph",
      "text": "Two complementary families of method sit behind almost every print-quality judgement, and mature practice combines them."
    },
    {
      "kind": "paragraph",
      "text": "Subjective (visual, psychophysical) evaluation relies on human observers looking at prints, usually under controlled viewing conditions — a standardised illuminant such as D50, a neutral surround, and a defined viewing geometry — and sometimes through formal panels that rank samples or scale their perceived quality. Its strength is that it captures the integrated impression a viewer actually forms, including interactions between attributes that no single number expresses well. Its weakness is that it is observer-dependent and not perfectly repeatable: different people, and the same person under different adaptation or lighting, may reach different conclusions, and the result reflects opinion as much as measurement."
    },
    {
      "kind": "paragraph",
      "text": "Objective (instrumental) evaluation uses instruments and image analysis to produce numbers that are repeatable and largely independent of the operator. Because a measured density or color-difference value does not change with who is looking, instrumental data supports process control, acceptance testing, and the tracking of drift over time far more reliably than the eye alone. Its limitation is that a metric is only as useful as its correlation with perceived quality, so well-designed print-quality metrics are specifically constructed and validated to track what observers see."
    },
    {
      "kind": "paragraph",
      "text": "Viewing and measurement conditions matter to both families, because the appearance of color and gloss depends on how a print is illuminated and observed. Standardised viewing (for example a D50 light booth) underpins fair visual comparison, and the analogous standardisation of instrument illumination and geometry — discussed below — is what makes objective readings comparable between devices and sites."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The attributes of print quality"
    },
    {
      "kind": "paragraph",
      "text": "Because \"quality\" is not a single quantity, assessment decomposes it into attributes that can each be defined and measured. The commonly evaluated dimensions include:"
    },
    {
      "kind": "list",
      "items": [
        "Tone reproduction and density: whether tones print at the intended lightness across the range, and whether solids reach the intended ink film density. This dimension is dominated by tone value increase (dot gain) in halftone printing and by how the black channel is built, covered on the dedicated dot gain and black generation pages.",
        "Color accuracy and consistency: how closely reproduced colors match their target, and how stable they remain across a run and between runs. This is the province of color management and printer profiling.",
        "Resolution, sharpness, and line and text quality: edge acuity and the crispness of fine lines and characters, described through measures such as edge blurriness, raggedness, and line width. Addressable resolution (the grid the device can mark on) is related to, but not the same as, the effective sharpness actually achieved.",
        "Uniformity: freedom from unwanted spatial variation. Macro-uniformity concerns large-scale variation such as banding and streaking; micro-uniformity concerns fine-scale variation such as graininess and mottle. The dot-level origin of some texture effects is treated under halftoning, error diffusion, and ordered dithering.",
        "Registration: correct alignment of the separations and of the front and back of a sheet.",
        "Gloss and gloss uniformity: the level and evenness of surface sheen, including gloss differential across an image.",
        "Artefacts and defects: discrete faults such as ghosting, set-off and smearing, show-through, background fogging, and stray marks.",
        "Permanence: resistance to fading (lightfastness) and to smudging, rubbing, water, and handling."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Each attribute is a phenomenon in its own right, with its own appearance, mechanism, and appropriate measurement; the individual defect topics in this reference treat them one at a time, while this page frames how they are collectively assessed."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Instruments and measurement conditions"
    },
    {
      "kind": "paragraph",
      "text": "Objective assessment draws on a small set of instrument types, each suited to particular attributes."
    },
    {
      "kind": "list",
      "items": [
        "Reflection densitometers measure optical density — a logarithmic measure of the light a printed area reflects back (D = -log10 R) — and are the traditional tool for gauging ink film thickness and solid ink density in process control. Reflection density measurement is standardised in the ISO 5 series, which fixes the measurement geometry (the 45°/0° arrangement of ISO 5-4, illuminating at 45° and viewing along the normal) and the spectral \"status\" responses, so that density figures are comparable between instruments.",
        "Colorimeters and spectrophotometers report color in perceptual terms. A spectrophotometer measures spectral reflectance and computes CIE color values (such as CIELAB), which describe appearance rather than mere ink density and are the basis for color matching and color-difference evaluation. For these readings to agree between devices, the illumination and measurement conditions must be standardised: ISO 13655 defines the spectral measurement and computation practice for graphic-arts images, including the M0–M3 measurement conditions (among them the D50-based M1 condition and the ultraviolet-excluding M2 condition), which must be stated for a color figure to be interpretable.",
        "Image-analysis and scanner-based systems capture the print as a digital image and compute spatial attributes — line width, edge raggedness and blurriness, background haze, graininess, mottle, and banding — from the captured pixels. These systems implement the analytical attribute measures described in the office-equipment image-quality standards discussed below.",
        "Test targets and control strips provide the known patches the instruments read. A control strip of solids and tint steps is carried alongside a job so that density, tone value, and color can be measured on the actual production sheet, and standardised charts provide references for characterising a device."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Across all of these, two practices are essential to trustworthy results: the instruments themselves must be calibrated and maintained, and the measurement conditions (geometry, illuminant or measurement mode, and aperture) must be reported together with the numbers, because a value quoted without its conditions cannot be reliably compared."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Color accuracy and color difference (ΔE)"
    },
    {
      "kind": "paragraph",
      "text": "Color accuracy is usually quantified as a color difference between a measured color and its target, computed in a perceptually organised color space. The CIELAB space (CIE 1976 Lab*) is the common working space, and the difference between two colors within it is reported as a ΔE (delta E) value."
    },
    {
      "kind": "paragraph",
      "text": "Several ΔE formulas are in use. The original CIE 1976 difference (ΔE*ab, often called ΔE76) is simply the Euclidean distance between two points in CIELAB; it is easy to compute but corresponds only loosely to how large a difference looks, being notably uneven across the color space. The CIEDE2000 formula (ΔE00) applies weightings for lightness, chroma, and hue to track perceived difference more closely, and it has become the preferred metric in much graphic-arts quality control."
    },
    {
      "kind": "paragraph",
      "text": "ΔE values are interpreted against tolerances. A widely quoted general guide holds that a difference of about ΔE 1 is at the threshold of perception for most observers, and that differences in the region of roughly 2 to 3.5 mark the usual limit of commercial acceptability. These figures are rules of thumb rather than a universal specification: the acceptable tolerance depends on the product, the substrate, the location within an image, and the agreement reached between supplier and buyer, and it is set per job rather than fixed once for all work."
    },
    {
      "kind": "paragraph",
      "text": "Densitometry and colorimetry answer different questions and are not interchangeable. Density is well suited to controlling the process — for example holding ink film thickness steady — whereas colorimetric ΔE describes whether the printed color actually matches its intended appearance. Both are used, and the choice depends on whether the goal is process stability or a color match; the relationship between them is developed further under color management and monitor-to-printer matching."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Standards and metric frameworks"
    },
    {
      "kind": "paragraph",
      "text": "Several international standards give print-quality assessment its common vocabulary, metrics, and tolerances, so that different operators and sites can specify, measure, and report quality in the same terms."
    },
    {
      "kind": "list",
      "items": [
        "ISO/IEC 13660 and ISO/IEC 24790 define device-independent image-quality attributes for hardcopy office output, measured by analysing the printed image itself without needing a reference original. They specify attributes such as character and line darkness, line width, edge raggedness and blurriness, large-area background (haze) and graininess or mottle, and extraneous marks. ISO/IEC 13660:2001 addressed binary monochrome text and line images; it has since been withdrawn and replaced by ISO/IEC 24790, which broadens the scope to monochrome text and graphics generally. These standards are the foundation for the spatial, structural side of print-quality measurement.",
        "ISO 15311 (Graphic technology — requirements for printed matter for commercial and industrial production) provides print-quality metrics, measurement methods, and a reporting schema for finished printed matter, with guidance aimed at specifying and reporting requirements across print processes and product categories. Its guidance for commercial print assumes normal viewing at arm's length (on the order of 30–50 cm) and distinguishes required, recommended, and optional metrics.",
        "ISO 12647 specifies process-control aim values and tolerances for the graphic-arts processes, giving presses a common target to calibrate toward; it is discussed in the context of tone value increase on the dot gain page.",
        "ISO 13655 and the ISO 5 series (above) standardise the measurement conditions — spectral and geometric — on which all of the color and density figures depend."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Read together, these standards separate the concerns cleanly: measurement-condition standards make readings comparable, attribute standards define what is measured on the image, process standards set the aim values to hold, and reporting standards fix how results are communicated. A quality claim is strongest when it names the standard, the metric, and the conditions it was measured under."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Detecting and characterising defects"
    },
    {
      "kind": "paragraph",
      "text": "Diagnosis begins with describing the appearance of a problem precisely, then measuring and localising it, and only then inferring a mechanism. A disciplined description separates the symptom from any assumed cause and captures a few key characteristics that narrow the field of possible explanations:"
    },
    {
      "kind": "list",
      "items": [
        "Spatial pattern: is the fault periodic (regularly repeating, as in banding) or random (irregular, as in mottle)? Repeat spacing is a strong clue, because a repeating artefact usually points to something cyclic in the process.",
        "Orientation: does it run along the direction the media travels, across it, or in neither direction? Directional streaks and bands tend to implicate different parts of the path than area-wide effects such as fogging.",
        "Extent and selectivity: is it confined to one color or channel, to certain tones, to one region of the sheet, or to particular media, and is it constant or intermittent?"
      ]
    },
    {
      "kind": "paragraph",
      "text": "A further step is to localise where in the pipeline the problem originates — in the source file or its color conversion, in the raster image processor and screening, in the marking engine, in the substrate, in the operating environment, or in finishing. Comparing a known-good reference, testing an alternative file or substrate, and checking whether the effect survives a change of one variable at a time all help attribute the cause."
    },
    {
      "kind": "paragraph",
      "text": "An important part of characterisation is distinguishing normal, expected process variation from a genuine fault. Effects such as tone value increase and the fine rosette of correctly angled screens are inherent, controlled behaviours of halftone printing, not defects; screening interference (moiré) is objectionable only past a threshold. These are covered on the halftoning, screen angles, dot gain, and moiré pattern pages and should not be confused with faults. The individual defect phenomena in this reference — including banding, streaking, mottle, ghosting, registration error, ink bleed, show-through, gloss differential, color cast, background fogging, and set-off — are each treated as a distinct topic, described as phenomena with documented mechanisms rather than as service procedures."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "General remediation principles and scope of this reference"
    },
    {
      "kind": "paragraph",
      "text": "Most print-quality problems are managed rather than eliminated outright, and the well-documented general approach works in layers from the input toward the hardware:"
    },
    {
      "kind": "list",
      "items": [
        "Control the input: address problems at the file and preparation stage first — apply correct color management and profiles, keep total ink coverage within sensible limits through appropriate black generation, choose a screening method suited to the content, and compensate for known tone value increase. Fixing a cause upstream is generally preferable to compensating for it later.",
        "Control the process and environment: calibrate the device to standard aim values, match the media to the print process it was designed for, and keep the operating environment stable — for example controlling ambient temperature and humidity, which broadly affect media behaviour and mark formation. These are general practices; specific settings are properties of a given device and process and are established from the manufacturer's guidance.",
        "Use the routine maintenance the device exposes: many issues are resolved by the ordinary, user-accessible actions a manufacturer provides — for example running the built-in printhead-cleaning or calibration cycle, or replacing depleted consumables as the device indicates. These are described here only in general terms.",
        "Escalate hardware faults to servicing: where a symptom points to worn, damaged, or misadjusted hardware, the condition requires servicing by a qualified technician. This reference does not provide disassembly, part-replacement, or internal-adjustment procedures, and does not specify device internals such as operating temperatures, voltages, error codes, or maintenance intervals; those depend on the specific equipment and belong to the manufacturer's service documentation."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Remediation should always be verified by re-measuring against the same attributes and conditions used to detect the problem, closing the loop between assessment and correction."
    },
    {
      "kind": "paragraph",
      "text": "Reference scope: this is a neutral technical overview. Figures and standards are drawn from documented sources, and it does not include current pricing, marketing claims, product recommendations, or repair instructions. For the underlying color and imaging concepts it depends on, see the companion pages on color management, printer profiling, color calibration, RGB-to-CMYK conversion, halftoning, and dot gain."
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
      "slug": "print-mottle"
    },
    {
      "section": "guides",
      "slug": "color-cast"
    },
    {
      "section": "tools",
      "slug": "dot-gain"
    },
    {
      "section": "guides",
      "slug": "color-management"
    },
    {
      "section": "guides",
      "slug": "printer-profiling"
    }
  ],
  "faqs": [
    {
      "q": "What is print quality assessment?",
      "a": "It is the systematic evaluation of printed output against defined, measurable attributes — tone and density, color accuracy, sharpness and line reproduction, uniformity, gloss, and freedom from defects — rather than a single subjective verdict. It is carried out for process control, for conformance and acceptance against a specification, and for diagnosing specific faults, and is always judged relative to the print's purpose, substrate, and viewing context."
    },
    {
      "q": "What is the difference between subjective and objective print quality evaluation?",
      "a": "Subjective evaluation uses human observers judging prints under controlled viewing conditions; it captures overall perceived quality but is observer-dependent and not perfectly repeatable. Objective evaluation uses instruments and image analysis to produce repeatable, operator-independent numbers such as density and color difference. The two are complementary, and useful objective metrics are designed to correlate with what observers actually see."
    },
    {
      "q": "Which instruments are used to measure print quality?",
      "a": "Reflection densitometers measure optical density for ink-density and process control; colorimeters and spectrophotometers measure CIE color values and spectral reflectance for color matching and color-difference evaluation; and image-analysis or scanner-based systems compute spatial attributes such as line width, edge sharpness, graininess, mottle, and banding. For results to be comparable, the measurement geometry and illumination conditions must be standardised and reported alongside the numbers."
    },
    {
      "q": "What standards define print quality metrics?",
      "a": "ISO/IEC 13660 and its successor ISO/IEC 24790 define image-quality attributes for hardcopy office output; ISO 15311 provides print-quality metrics and a reporting schema for commercial and industrial printed matter; ISO 12647 specifies process-control aim values and tolerances; and ISO 13655 and the ISO 5 series standardise the spectral and geometric measurement conditions on which color and density figures depend. Together they make quality claims comparable when the standard, metric, and conditions are stated."
    },
    {
      "q": "What does a ΔE color-difference value mean, and how much is acceptable?",
      "a": "ΔE (delta E) is the measured difference between a printed color and its target in a perceptual color space such as CIELAB; the CIEDE2000 formula is now widely preferred over the older CIE 1976 difference because it tracks perception more closely. A common general guide is that about ΔE 1 is at the threshold of perception and roughly 2 to 3.5 is often the limit of commercial acceptability, but these are rules of thumb — the acceptable tolerance depends on the product and is agreed between supplier and buyer rather than fixed universally."
    }
  ],
  "sources": [
    {
      "title": "ISO/IEC 24790:2017 — Information technology — Office equipment — Measurement of image quality attributes for hardcopy output — Monochrome text and graphic images",
      "url": "https://www.iso.org/standard/69796.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO/IEC 13660:2001 — Information technology — Office equipment — Measurement of image quality attributes for hardcopy output — Binary monochrome text and graphic images",
      "url": "https://www.iso.org/standard/22145.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO/TS 15311-1:2020 — Graphic technology — Requirements for printed matter for commercial and industrial production — Part 1: Measurement methods and reporting schema",
      "url": "https://www.iso.org/standard/77922.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 13655:2017 — Graphic technology — Spectral measurement and colorimetric computation for graphic arts images",
      "url": "https://www.iso.org/standard/65430.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 5-4:2009 — Photography and graphic technology — Density measurements — Part 4: Geometric conditions for reflection density",
      "url": "https://www.iso.org/standard/52916.html",
      "publisher": "ISO"
    },
    {
      "title": "Color difference",
      "url": "https://en.wikipedia.org/wiki/Color_difference",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "print quality assessment",
    "print quality evaluation",
    "image quality attributes",
    "densitometry",
    "colorimetry",
    "optical density",
    "delta e",
    "ciede2000",
    "iso 24790",
    "iso 15311",
    "print defects",
    "tone reproduction"
  ],
  "cluster": "print-quality"
};

export default entry;
