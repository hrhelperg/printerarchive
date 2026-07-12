import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "print-mottle",
  "title": "Print Mottle",
  "description": "Print mottle is the blotchy, uneven density, gloss, or color that appears in solid printed areas. Learn its causes, how it is measured, and how to reduce it.",
  "summary": "Print mottle is a common print-quality defect in which areas meant to reproduce as smooth, uniform solids or tints instead look blotchy, cloudy, or orange-peel-like, with irregular variation in density, gloss, or color. It is usually caused by non-uniform ink take-up or immobilization on the substrate — for example uneven coating porosity, back-trapping between printing units, fountain-solution imbalance in offset lithography, or ink coalescence on low-porosity media in inkjet. Because the variation is aperiodic and typically tied to the paper, mottle is distinguished from periodic defects such as banding and moiré and from uniform tonal shifts such as dot gain. Remediation centers on matching media to the process, controlling ink load and moisture, and standardized process control, with press or print-engine faults referred for servicing.",
  "difficulty": "intermediate",
  "estimatedTime": "10 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What print mottle is"
    },
    {
      "kind": "paragraph",
      "text": "Print mottle (also simply \"mottling\") is a print-quality defect in which an area intended to reproduce as a smooth, uniform solid or tint instead appears blotchy, cloudy, or textured, with irregular local variation in ink density, gloss, or color. The reference glossary PrintWiki defines it concisely as \"a printing defect characterized by a spotty, non-uniform appearance in solid printed areas.\" The variation is macroscopic — coarse enough to be seen with the unaided eye at normal viewing distance — and it is aperiodic (random or irregular) rather than following a regular repeating pattern."
    },
    {
      "kind": "paragraph",
      "text": "That aperiodic character is what separates mottle from other non-uniformity defects. In the image-quality standards ISO 13660:2001 and its successor ISO/IEC 24790, mottle is characterized as aperiodic fluctuation of print density (or lightness) at spatial frequencies of about 0.4 cycles per millimeter or lower, measured in all directions. Fluctuations at higher spatial frequencies fall under graininess, a finer-scale relative of mottle; regular, repeating variation instead corresponds to periodic defects such as banding or moiré. Because the disturbance is broad and irregular, mottle is often most objectionable in even midtone tints and large solids — skies, flat backgrounds, neutral grays, and skin tones — where the eye most readily notices unevenness."
    },
    {
      "kind": "paragraph",
      "text": "Mottle is a solid-area rendering defect, not an artifact of the screening method used to break the image into dots. Halftone screening and its variants — amplitude-modulation and frequency-modulation screening, error diffusion, and ordered dithering — determine how tone is built, but mottle arises from how ink is transferred to and immobilized on the substrate; it can appear regardless of the screening technique in use."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Appearance and symptoms"
    },
    {
      "kind": "paragraph",
      "text": "The hallmark of mottle is a splotchy pattern of lighter and darker (or glossier and duller) regions across an area that the artwork specifies as uniform. Observers frequently describe the surface as looking like orange peel, and older trade usage also calls a mottled appearance \"galvanized\" or \"cloudy.\" The pattern typically has no consistent direction and does not repeat at a fixed interval, which is a key visual cue that separates it from banding and other periodic defects."
    },
    {
      "kind": "paragraph",
      "text": "Mottle is usually classified by which attribute varies:"
    },
    {
      "kind": "list",
      "items": [
        "Density mottle — local variation in ink-film optical density, so the area reads as uneven lightness or depth of color.",
        "Gloss mottle — variation in surface gloss (specular reflection) even when density is fairly even; most visible on coated stocks under directional light and at grazing viewing angles.",
        "Color mottle — local shifts in hue or chroma, common where a neutral or secondary color is built from more than one ink and the inks take up unevenly.",
        "Coating mottle — non-uniformity attributed to the paper coating itself, sometimes seen on calendered papers before or independent of the ink."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Because the defect depends on lighting, mottle can look worse under some illumination and viewing angles than others. Gloss mottle in particular may be nearly invisible when a sheet is viewed flat-on yet obvious when the sheet is tilted, so appearance should be judged under consistent viewing conditions."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Types and terminology"
    },
    {
      "kind": "paragraph",
      "text": "Beyond the attribute-based labels above, mottle is also named for its mechanism or for the process in which it arises. The terminology overlaps, and several of these names describe the same underlying event."
    },
    {
      "kind": "list",
      "items": [
        "Back-trap mottle — non-uniform re-transfer (\"back-trapping\") of already-printed ink from the paper onto the blanket of a later printing unit in a multi-color offset press. It is described in the peer-reviewed literature as the most common form of print mottle (Lee et al., 2021). The pattern of unevenness tends to coincide with variation in the paper's coating mass and surface porosity.",
        "Water-interference mottle — specific to lithographic offset, and known by several synonyms including fountain-water mottle, wet-trap mottle, water-repellence mottle, and ink-refusal mottle. It results from insufficient or uneven absorption of fountain solution by the paper, followed by uneven ink take-up, when the supply of dampening water and the substrate's ability to absorb and move that water are out of balance.",
        "Coalescence mottle — characteristic of inkjet on low-porosity or glossy media, where adjacent ink drops merge before they set. Merging drops pool into locally darker, uneven regions; glossy coated media that dry slowly are generally more prone than more porous matte or satin coatings."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Mottle is not confined to one process: it is documented in offset lithography, inkjet, flexography, and toner electrophotography. The unifying theme across all of them is the same — uneven transfer or immobilization of colorant on the substrate."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Mechanisms and causes"
    },
    {
      "kind": "paragraph",
      "text": "Across processes, the root cause of mottle is non-uniform ink immobilization: colorant sets, absorbs, or dries at different rates or to different degrees across the sheet, so a nominally uniform area ends up with uneven density, gloss, or color. The specific contributing factors fall into a few groups."
    },
    {
      "kind": "paragraph",
      "text": "Substrate factors are dominant for coated papers. Uneven coating mass distribution and non-uniform surface porosity — the distribution of pores and the clustering of closed, less-absorbent areas — cause ink to be taken up unevenly. Research reviews attribute this porosity non-uniformity to migration of coating binder toward or away from the surface during drying; the historical explanation emphasized binder enrichment at the surface, while more recent work points to binder depletion, but either way the practical consequence is a mottle pattern that mirrors the coating's own non-uniformity. Base-sheet formation (the evenness of fiber distribution) and calendering can contribute as well."
    },
    {
      "kind": "paragraph",
      "text": "Process and ink factors add to or trigger the defect:"
    },
    {
      "kind": "list",
      "items": [
        "In offset lithography, an imbalance between fountain-solution feed and the paper's water uptake produces water-interference mottle, and non-uniform ink retransfer at successive nips produces back-trap mottle. Ink tack, viscosity, and setting/drying behavior, together with impression pressure, all influence how evenly ink transfers and sets.",
        "In inkjet, drop-to-drop and drop-to-media interactions govern coalescence: differences in surface tension between ink and media, high local ink volume, and slow-drying glossy coatings promote the merging of drops into an uneven film. Ink chemistry (binder, surfactant, and solvent content) and the presence and uniformity of any fixer or pre-coat step also matter.",
        "Excessive total ink coverage — building dark neutrals or solids from heavy layers of multiple inks — increases the ink load the substrate must absorb and can make mottle worse; how the black component is generated in the separations therefore interacts with mottle (see black generation)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Environmental conditions, especially ambient humidity and temperature, affect both moisture balance in lithography and drying in inkjet, and so can influence the severity of mottle."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Diagnosis and differentiation"
    },
    {
      "kind": "paragraph",
      "text": "Diagnosing mottle is largely a matter of confirming that the unevenness is aperiodic and correlated with the substrate, and then separating it from defects that look superficially similar. Inspection is best done on uniform test areas (solids and even tints) under controlled, standardized viewing conditions, using raking (grazing) light and a loupe to reveal gloss and fine density variation."
    },
    {
      "kind": "paragraph",
      "text": "Key differentiations:"
    },
    {
      "kind": "list",
      "items": [
        "Versus banding: banding is periodic, usually appears as regular light and dark lines across the process direction, and is tied to the print mechanism; mottle is irregular and typically tied to the paper.",
        "Versus moiré: moiré is a periodic interference pattern between halftone screens; mottle has no such regular structure.",
        "Versus dot gain: dot gain is a generally uniform tonal shift caused by halftone dots enlarging as they print; it darkens tones evenly rather than producing a blotchy pattern.",
        "Versus color-management or profiling errors: an incorrect profile or an uncalibrated device shifts color predictably across the whole job, whereas mottle is local and irregular. Ruling these out with proper color calibration and printer profiling helps confirm that a color problem is truly mottle rather than a reproduction error."
      ]
    },
    {
      "kind": "paragraph",
      "text": "A practical way to localize the cause is substitution: printing the same file on a different substrate, or moving it to a different press or engine, indicates whether the defect follows the paper (pointing to substrate/coating uniformity) or the equipment (pointing to a process or hardware factor)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Measurement and quantification"
    },
    {
      "kind": "paragraph",
      "text": "The image-quality standards ISO 13660:2001 and ISO/IEC 24790 provide the accepted framework for quantifying mottle so that it can be specified and compared objectively rather than judged only by eye. In these standards, mottle is defined as aperiodic fluctuation of density or lightness at spatial frequencies at or below about 0.4 cycles per millimeter, measured in all directions; it is the larger-scale counterpart of graininess, which covers the higher-frequency fluctuations. Mottle is generally associated with structures roughly one millimeter and larger (about 1.3 mm), and the structure sizes (wavelengths) most disturbing to viewers are a few millimeters across."
    },
    {
      "kind": "paragraph",
      "text": "In practice, mottle is measured from a printed uniform patch by capturing it (for example with a calibrated scanner, camera, or imaging densitometer), dividing it into small tiles or bands, and computing the variation — typically the standard deviation — of reflectance, density, or lightness among those regions. Frequency-selective methods, such as octave-band filtering, are used to separate the mottle-scale variation from finer graininess and from the overall average level. Complementary instruments target specific attributes: densitometers and spectrophotometers for density and color mottle, and gloss meters for gloss mottle. These measurements support process control and substrate qualification, but they characterize the defect rather than prescribe a fix."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "General remediation principles"
    },
    {
      "kind": "paragraph",
      "text": "Because mottle has multiple causes, remediation is about identifying the dominant factor and applying well-established, general control measures rather than a single universal fix. The measures below reflect general industry practice and manufacturer guidance; the appropriate specifics depend on the equipment, inks, and media in use and should be taken from the relevant manufacturer's documentation."
    },
    {
      "kind": "list",
      "items": [
        "Match media to the process. Selecting substrates whose coating and formation are uniform, and that are recommended for the printing process and ink set in use, is the most direct lever, since substrate non-uniformity is the leading cause on coated stocks. Qualifying a substrate on a short run before committing to a long one is common practice.",
        "Manage ink load. Reducing excessive total ink coverage, and building dark neutrals with appropriate black generation and gray-component replacement (see black generation) rather than heavy overlays of all inks, lessens the demand placed on the substrate.",
        "Control moisture and drying. In offset lithography, maintaining a controlled ink-and-water (fountain-solution) balance limits water-interference mottle; in inkjet, choosing appropriately porous or matte media, allowing adequate drying time, and keeping ambient temperature and humidity within the manufacturer's stated operating range reduce coalescence.",
        "Use recommended settings and routine maintenance. Following the manufacturer's recommended media, color settings, and profiles, and running the manufacturer's routine maintenance — for example a printhead-cleaning cycle on an inkjet device — addresses many device-related contributions without any disassembly.",
        "Standardize process control. Consistent calibration and profiling (color calibration, printer profiling, and overall color management) keep reproduction predictable, so that genuine mottle can be distinguished from drift and controlled over time."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Some contributors to mottle are hardware or press faults — for example uneven impression pressure, or worn, glazed, or damaged blankets and rollers, or a print-engine malfunction. These require servicing or technician attention rather than operator adjustment, and should be referred to qualified service in line with the manufacturer's guidance. This page is descriptive and does not provide repair procedures."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to adjacent print-quality topics"
    },
    {
      "kind": "paragraph",
      "text": "Mottle sits alongside a family of print-quality and color-reproduction topics that are often confused with it, or that help in diagnosing it, but that describe different phenomena:"
    },
    {
      "kind": "list",
      "items": [
        "Screening and tone rendering — halftoning, AM screening, FM screening, error diffusion, ordered dithering, and screen angles — determine how continuous tone is converted to printable dots. Mottle can occur under any of these and is not caused by the choice of screen itself.",
        "Periodic defects — moiré patterns — are regular interference patterns, in contrast to mottle's irregular structure.",
        "Tonal reproduction — dot gain — is a predictable, generally uniform change in tone, whereas mottle is a spatial non-uniformity.",
        "Color reproduction and control — color management, printer profiling, color calibration, and RGB-to-CMYK conversion — govern accurate, repeatable color; they are essential for telling true mottle apart from color errors and for keeping a process stable enough to detect mottle reliably."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Cross-referencing these topics helps place mottle correctly: it is a substrate-and-transfer non-uniformity, distinct from the screening, tonal, and color-management issues it is easily mistaken for."
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
      "slug": "ink-bleeding"
    },
    {
      "section": "guides",
      "slug": "gloss-differential"
    },
    {
      "section": "guides",
      "slug": "print-quality-assessment"
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
      "slug": "halftoning"
    }
  ],
  "faqs": [
    {
      "q": "What causes print mottle?",
      "a": "Mottle is caused by non-uniform take-up or immobilization of ink on the substrate, so a uniform area prints unevenly. On coated papers the leading cause is non-uniform coating mass and surface porosity; other causes include back-trapping between offset printing units, an imbalance between fountain solution and the paper's water uptake, ink coalescence on low-porosity or glossy inkjet media, excessive total ink coverage, and unstable temperature or humidity."
    },
    {
      "q": "What is the difference between mottle, banding, and moiré?",
      "a": "Mottle is aperiodic (irregular, non-repeating) and is usually tied to the substrate. Banding is periodic — regular light and dark lines, usually across the process direction — and is tied to the print mechanism. Moiré is a periodic interference pattern between halftone screens. The regular, repeating structure of banding and moiré is the main visual cue that separates them from mottle."
    },
    {
      "q": "Is print mottle a paper problem or a press problem?",
      "a": "It can be either, and often both. On coated stocks, substrate factors such as coating uniformity and porosity are frequently dominant, but offset water balance, ink properties, ink coverage, and equipment condition also contribute. A practical way to localize the cause is to reprint the same file on a different substrate or a different press: if the defect follows the paper it points to the substrate, and if it follows the equipment it points to a process or hardware factor."
    },
    {
      "q": "How is print mottle measured?",
      "a": "The standards ISO 13660:2001 and ISO/IEC 24790 define mottle as aperiodic density or lightness fluctuation at spatial frequencies of about 0.4 cycles per millimeter or lower, at a larger spatial scale than graininess. In practice it is quantified by imaging a uniform patch, dividing it into small tiles or bands, and computing the variation (typically the standard deviation) of reflectance, density, or lightness, often with frequency filtering such as octave-band analysis. Densitometers and spectrophotometers are used for density and color mottle, and gloss meters for gloss mottle."
    },
    {
      "q": "How can I reduce mottle on an inkjet printer?",
      "a": "General practice is to use appropriately porous or matte media that the manufacturer recommends for the device and ink, apply the manufacturer's recommended media and color settings and ICC profiles, avoid excessive ink coverage, allow adequate drying, and keep ambient temperature and humidity within the manufacturer's stated operating range. Running the manufacturer's routine maintenance, such as a printhead-cleaning cycle, addresses many device-related causes without disassembly. If mottle persists after these steps, it may indicate a hardware fault that requires servicing by a qualified technician."
    }
  ],
  "sources": [
    {
      "title": "Mottle",
      "url": "https://printwiki.org/Mottle",
      "publisher": "PrintWiki"
    },
    {
      "title": "ISO/IEC 24790:2017 — Measurement of image quality attributes for hardcopy output — Monochrome text and graphic images",
      "url": "https://www.iso.org/standard/69796.html",
      "publisher": "International Organization for Standardization (ISO)"
    },
    {
      "title": "Back-trap Mottle: A Review of Mechanisms and Possible Solutions (Lee et al., 2021)",
      "url": "https://bioresources.cnr.ncsu.edu/resources/back-trap-mottle-a-review-of-mechanisms-and-possible-solutions/",
      "publisher": "BioResources (North Carolina State University)"
    },
    {
      "title": "Causes of back-trap mottle in lithographic offset prints on coated papers",
      "url": "https://www.tappi.org/publications-standards/tappi-journal/home/16/feb/causes-of-back-trap-mottle-in-lithographic-offset-prints-on/",
      "publisher": "TAPPI Journal"
    },
    {
      "title": "Combating Coated Paper",
      "url": "https://inkjetinsight.com/inkjet-knowledge-base/combating-coated-paper/",
      "publisher": "Inkjet Insight"
    },
    {
      "title": "Mottled Print: Understanding This Common Flexo Printing Defect",
      "url": "https://blog.luminite.com/blog/flexo-printing-defects-mottled-image",
      "publisher": "Luminite"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "print mottle",
    "mottling",
    "back-trap mottle",
    "water-interference mottle",
    "gloss mottle",
    "density mottle",
    "color mottle",
    "coalescence mottle",
    "print quality defect",
    "uneven ink density",
    "coated paper printing defect",
    "iso/iec 24790"
  ],
  "cluster": "print-quality"
};

export default entry;
