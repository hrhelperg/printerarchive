import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "color-normalization",
  "title": "Color normalization",
  "description": "Reference on color normalization for scanned documents: white balance, flat-field/shading correction, and background whitening ahead of OCR.",
  "summary": "Color normalization, in the document-capture context, is an umbrella term for a family of preprocessing operations that make the color and tone of scanned or photographed pages consistent, both internally (uniform across a single page despite uneven lighting) and externally (consistent across a batch captured on different devices and under different light). It groups three historically distinct techniques that share this goal: white balance / color constancy (removing the color cast of the illuminant so paper reads neutral), flat-field / shading correction (removing spatial brightness non-uniformity such as vignetting and lamp falloff), and background whitening (estimating and flattening the page background before thresholding). These methods originate in color science and scientific imaging (Retinex, the gray-world assumption, von Kries chromatic adaptation, flat-field CCD calibration) and were adopted into document imaging as early preprocessing that stabilizes downstream binarization and OCR. There is no single canonical algorithm or inventor; the term describes a goal met by several source-backed methods.",
  "difficulty": "intermediate",
  "estimatedTime": "8 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History and origin"
    },
    {
      "kind": "paragraph",
      "text": "Color normalization is a composite topic: no single primary source treats \"color normalization for scans\" as one named method or attributes it to one inventor. Instead it draws together techniques that originated in color science and scientific imaging and were later adopted as document preprocessing."
    },
    {
      "kind": "list",
      "items": [
        "Retinex theory was introduced by Edwin H. Land and John J. McCann in \"Lightness and Retinex Theory,\" Journal of the Optical Society of America 61(1):1-11 (1971). It models how the visual system correlates sensation with surface reflectance despite the light reaching the eye being the product of reflectance and illumination. The \"white-patch\" normalization (normalize each channel by its maximum) derives from this line of work.",
        "The gray-world assumption was formalized by G. Buchsbaum in \"A spatial processor model for object colour perception,\" Journal of the Franklin Institute 310(1):1-26 (1980). It posits that an estimate of the illuminant can be recovered from spatial information across the whole field, on the premise that the scene average is achromatic.",
        "Von Kries chromatic adaptation supplies the diagonal (independent per-channel scaling) model that underlies most camera and scanner white balance. The diagonal model is the oldest and most widely used chromatic-adaptation model; the name is standard, though the coefficient idea was first explicitly applied to color constancy by later authors.",
        "Flat-field correction is a standard calibration procedure developed in scientific and astronomical CCD imaging to compensate for per-pixel gain and dark current, used in devices ranging from consumer cameras to telescopes."
      ]
    },
    {
      "kind": "paragraph",
      "text": "In the document and OCR domain, these were absorbed into preprocessing. Binarization became a standard OCR preprocessing step in the 1980s, and locally adaptive thresholding methods were introduced specifically to cope with non-uniform illumination and background variation: Niblack's neighborhood mean-plus-standard-deviation method (documented in An Introduction to Digital Image Processing, 1986) and Sauvola & Pietikainen's \"Adaptive document image binarization,\" Pattern Recognition 33(2):225-236 (2000)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solves"
    },
    {
      "kind": "paragraph",
      "text": "Scans and document photographs rarely present a clean, evenly lit, neutral page. Color normalization targets several recurring defects:"
    },
    {
      "kind": "list",
      "items": [
        "Illuminant color cast. Warm scanner lamps, office fluorescents, or ambient daylight tint the paper away from neutral so that white no longer reads as white.",
        "Uneven illumination and shading. Lamp falloff along a flatbed, camera vignetting, and occlusion shadows in mobile capture make brightness vary across the page.",
        "Aged or degraded media. Paper yellowing, faded text, stains, and ink bleed-through shift tone and reduce contrast.",
        "Batch inconsistency. The same document scanned on two devices, or at two times, produces two different color and tone renditions."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Uneven illumination is a common source of binarization error, particularly in non-scanner capture such as mobile document photography, where lighting is uncontrolled. Estimating and flattening the page background before thresholding reduces this. The broader aim is predictable, comparable input for archival storage, visual comparison, and OCR."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "The three constituent mechanisms have distinct formulations."
    },
    {
      "kind": "paragraph",
      "text": "1. White balance via diagonal (von Kries) correction. Estimate the illuminant's RGB and divide each channel by its estimated illuminant value, equivalent to a 3x3 diagonal transform that maps the illuminant onto the achromatic axis in raw RGB. Illuminant estimators include:"
    },
    {
      "kind": "list",
      "items": [
        "Gray world: assume the scene average is gray and divide each channel by its mean.",
        "White patch / Retinex: assume the brightest patch is white and normalize each channel by its maximum."
      ]
    },
    {
      "kind": "paragraph",
      "text": "2. Flat-field / shading correction. Model the observed image as a raw signal modulated by a spatial gain plus an additive dark/bias term, then invert it. The standard flat-field equation (as documented in general imaging references) is C = (R - D) x m / (F - D), where C is the corrected image, R the raw image, F a flat frame (an image of a uniform field), D a dark frame, and m the mean of (F - D). In documents captured without a physical flat frame, the \"flat\" is often estimated from the page itself, for example via a large-scale low-pass or morphological estimate of the background surface. Shading models can combine a multiplicative (coordinate-dependent) and an additive (background) component."
    },
    {
      "kind": "paragraph",
      "text": "3. Background whitening. Estimate the local background level (a large-window smoothing or rank filter, or a surface fit), remove it to flatten the page toward uniform white, then apply adaptive thresholding. Sauvola's local threshold adapts to the local mean and standard deviation, separating text from a varying background."
    },
    {
      "kind": "paragraph",
      "text": "For device-accurate color, scanners are separately characterized against a physical reference. An IT8 target with defined color patches (the target standard is ISO 12641; the current Part 1 is ISO 12641-1:2016, and Part 2 is ISO 12641-2:2019) is scanned and compared to a reference measurement file to build an ICC profile that corrects subsequent scans."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Algorithms and variants"
    },
    {
      "kind": "list",
      "items": [
        "Gray world - per-channel mean normalization; simple, but fails when the scene is not on average gray.",
        "White patch / Retinex (max-RGB) - per-channel maximum normalization; sensitive to specular highlights and clipped pixels.",
        "Combined or intermediate schemes - methods positioned between gray world and white patch, blending the two estimators.",
        "Von Kries diagonal and non-diagonal chromatic-adaptation transforms - the diagonal model versus matrix transforms (such as Bradford and CAT02) for mapping color between illuminants; non-diagonal transforms model perceived color more accurately across illuminants.",
        "Comprehensive color normalization - an iterative two-stage normalization (intensity, then per-channel) run to convergence.",
        "Histogram equalization and specification - global tone/color redistribution; specification matches a target histogram and tends to look more natural than plain equalization.",
        "Flat-field correction (static and dynamic) - dynamic variants track time-varying illumination.",
        "ICC-profile-based correction - IT8 / ISO 12641 characterization for colorimetrically accurate reproduction.",
        "Learning-based illumination correction - CNNs that jointly rectify and relight document images, perceptual-loss cleanup networks, and Fourier-domain restoration for dewarping and recognition."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Several of these variant descriptions (the flat-field equation, comprehensive normalization, and the standard failure modes of gray world and white patch) rest on tertiary references and are standard but not primary-sourced here."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the capture/OCR pipeline"
    },
    {
      "kind": "paragraph",
      "text": "Color and illumination normalization is an early preprocessing stage: after raw capture and, for camera capture, after geometric rectification or dewarping, and before binarization and OCR. A typical order is:"
    },
    {
      "kind": "list",
      "items": [
        "capture",
        "(dewarp / geometric rectification, for camera capture)",
        "flat-field / illumination correction and white balance",
        "background whitening",
        "adaptive thresholding / binarization",
        "OCR"
      ]
    },
    {
      "kind": "paragraph",
      "text": "Rectified document images can still suffer from sampling and shading artifacts, so illumination adjustment is applied to improve readability and recognition. Binarization is among the most widely used OCR preprocessing steps, and illumination normalization is what makes that thresholding reliable under non-uniform light."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Produces consistent, comparable output across pages, devices, and sessions, which is essential for batch archival.",
        "Improves binarization and OCR robustness under non-uniform lighting by flattening the background before thresholding.",
        "Helps restore legibility of degraded originals (yellowing, fading, stains) by whitening the background and normalizing tone.",
        "The core operations (per-channel scaling and the diagonal transform) are computationally inexpensive.",
        "With IT8 / ICC characterization, it delivers colorimetrically defensible reproduction for color-critical archival work."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Limitations and failure modes"
    },
    {
      "kind": "list",
      "items": [
        "Gray world fails when the page is not on average gray, for example a document dominated by one color, colored stock, or large colored graphics; it does not account for all illumination-intensity variation and is not dynamic.",
        "White patch / max-RGB is fooled by specular highlights or clipped, blown-out pixels being mistaken for white.",
        "Global methods such as histogram equalization can look unnatural and can distort subtle but meaningful color variation.",
        "Flat-field correction requires a genuinely uniform flat frame; shadows from mounts, hotspots, or optical aberrations in the flat introduce their own artifacts, and estimating the flat from the page is only approximate.",
        "Cast and occlusion shadows in mobile capture are hard to remove and can be baked into the result when the illumination model is too simple.",
        "Aggressive background whitening or binarization can erase faint strokes, watermarks, or low-contrast annotations.",
        "The diagonal von Kries adaptation is an approximation; non-diagonal transforms (Bradford, CAT02/CAT16) model perceived color more accurately across illuminants."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to OCR and scanning"
    },
    {
      "kind": "paragraph",
      "text": "OCR engines threshold or otherwise segment text from background. When illumination is uneven, a single global threshold clips text in dark regions or floods light regions. Normalizing illumination and whitening the background is what lets thresholding, whether global (such as Otsu) or locally adaptive (Niblack, Sauvola), cleanly separate glyphs, which directly affects recognition accuracy."
    },
    {
      "kind": "paragraph",
      "text": "On the capture side, scanner ICC characterization via IT8 / ISO 12641 targets ensures the color reaching the pipeline is device-corrected in the first place, complementing the per-image normalization applied downstream."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF/archival"
    },
    {
      "kind": "paragraph",
      "text": "The following is a synthesis of the OCR-binarization and ICC-characterization sources rather than a claim from a single archival-standards primary."
    },
    {
      "kind": "paragraph",
      "text": "For archival digitization, batch consistency and color fidelity are primary requirements. Normalized, background-whitened pages tend to compress more efficiently (bilevel/CCITT encodings for text; smaller continuous-tone files for photographic content), read consistently across a collection, and, when characterized with ICC profiles, carry defensible color. The same illumination normalization that aids OCR also produces the clean text layer that is commonly embedded behind the page image in searchable, archival PDF output."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Color normalization remains central. Mobile document capture, with phones and no controlled lighting, has renewed the need for it. Recent research applies convolutional networks to joint geometric rectification and illumination correction, perceptual-loss cleanup networks for document images, and Fourier-domain restoration for dewarping and recognition."
    },
    {
      "kind": "paragraph",
      "text": "At the same time, the classical methods (gray world, white patch, and flat-field correction) remain in production scanning software and imaging libraries, and IT8 / ISO 12641 characterization continues to be the standard route for color-accurate scanning."
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
          "period": "1971",
          "text": "Land and McCann publish Retinex theory in JOSA 61(1):1-11."
        },
        {
          "period": "1980",
          "text": "Buchsbaum formalizes the gray-world assumption in Journal of the Franklin Institute 310(1):1-26."
        },
        {
          "period": "1980s",
          "text": "Binarization becomes a standard OCR preprocessing step; Niblack's local adaptive thresholding is documented (An Introduction to Digital Image Processing, 1986)."
        },
        {
          "period": "2000",
          "text": "Sauvola and Pietikainen publish adaptive document image binarization for non-uniform illumination in Pattern Recognition 33(2):225-236."
        },
        {
          "period": "2016",
          "text": "ISO 12641-1 (current Part 1 of the IT8 scanner-characterization target standard)."
        },
        {
          "period": "2019",
          "text": "ISO 12641-2 adds advanced colour targets for input scanner calibration."
        },
        {
          "period": "2019-2022",
          "text": "CNN and Fourier deep-learning methods for document illumination correction and cleanup appear in the literature."
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
      "section": "guides",
      "slug": "contrast-enhancement"
    },
    {
      "section": "guides",
      "slug": "flatbed-scanners"
    },
    {
      "section": "guides",
      "slug": "document-cleanup"
    },
    {
      "section": "guides",
      "slug": "ocr-preprocessing"
    },
    {
      "section": "guides",
      "slug": "image-binarization"
    },
    {
      "section": "guides",
      "slug": "image-thresholding"
    }
  ],
  "faqs": [
    {
      "q": "Is color normalization a single algorithm?",
      "a": "No. In document capture it is an umbrella term for several source-backed techniques: white balance / color constancy (gray world, white patch/Retinex, von Kries diagonal correction), flat-field/shading correction, and background whitening. There is no single canonical algorithm or inventor."
    },
    {
      "q": "How does color normalization help OCR?",
      "a": "OCR relies on separating text from background by thresholding. Uneven illumination makes a single threshold clip text in dark areas or flood light areas. Normalizing illumination and whitening the background lets global (Otsu) or local-adaptive (Niblack, Sauvola) thresholding cleanly separate glyphs, which affects recognition accuracy."
    },
    {
      "q": "What is the difference between gray world and white patch?",
      "a": "Gray world assumes the scene average is gray and divides each channel by its mean; it fails when the page is not on average gray. White patch (max-RGB, from Retinex) assumes the brightest patch is white and normalizes each channel by its maximum; it is sensitive to specular highlights and clipped pixels."
    },
    {
      "q": "How is a scanner made color-accurate?",
      "a": "By characterization: an IT8 target with defined color patches (the target standard is ISO 12641, with Part 1 as ISO 12641-1:2016 and Part 2 as ISO 12641-2:2019) is scanned and compared to a reference measurement file to build an ICC profile that corrects subsequent scans."
    },
    {
      "q": "Where does color normalization fit in the capture pipeline?",
      "a": "It is an early preprocessing stage: after raw capture and, for camera capture, after dewarping, and before binarization and OCR. A typical order is capture, dewarp, flat-field/white-balance normalization, background whitening, adaptive thresholding, then OCR."
    }
  ],
  "sources": [
    {
      "title": "Lightness and Retinex Theory (Land & McCann, JOSA 1971)",
      "url": "https://opg.optica.org/josa/abstract.cfm?uri=josa-61-1-1",
      "publisher": "Optica (OSA)"
    },
    {
      "title": "Lightness and retinex theory (Land & McCann)",
      "url": "https://pubmed.ncbi.nlm.nih.gov/5541571/",
      "publisher": "PubMed"
    },
    {
      "title": "A spatial processor model for object colour perception (Buchsbaum 1980)",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/0016003280900587",
      "publisher": "Journal of the Franklin Institute (ScienceDirect)"
    },
    {
      "title": "Adaptive document image binarization (Sauvola & Pietikainen 2000)",
      "url": "https://www.semanticscholar.org/paper/Adaptive-document-image-binarization-Sauvola-Pietik%C3%A4inen/be97923dbcdaf8b1496b637ed156656d8874f552",
      "publisher": "Pattern Recognition (Semantic Scholar)"
    },
    {
      "title": "An Introduction to Digital Image Processing (Niblack 1986)",
      "url": "https://archive.org/details/introductiontodi0000nibl",
      "publisher": "Prentice-Hall / Internet Archive"
    },
    {
      "title": "ISO 12641-1:2016 - Colour targets for input scanner calibration, Part 1",
      "url": "https://www.iso.org/standard/68807.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 12641-2:2019 - Advanced colour targets for input scanner calibration, Part 2",
      "url": "https://www.iso.org/standard/68575.html",
      "publisher": "ISO"
    },
    {
      "title": "Chromatic adaptation",
      "url": "https://en.wikipedia.org/wiki/Chromatic_adaptation",
      "publisher": "Wikipedia"
    },
    {
      "title": "Von Kries coefficient law",
      "url": "https://en.wikipedia.org/wiki/Von_Kries_coefficient_law",
      "publisher": "Wikipedia"
    },
    {
      "title": "Color normalization",
      "url": "https://en.wikipedia.org/wiki/Color_normalization",
      "publisher": "Wikipedia"
    },
    {
      "title": "Flat-field correction",
      "url": "https://en.wikipedia.org/wiki/Flat-field_correction",
      "publisher": "Wikipedia"
    },
    {
      "title": "Thresholding (image processing)",
      "url": "https://en.wikipedia.org/wiki/Thresholding_(image_processing)",
      "publisher": "Wikipedia"
    },
    {
      "title": "Analysis of Image Preprocessing and Binarization Methods for OCR",
      "url": "https://www.mdpi.com/2079-9292/12/11/2449",
      "publisher": "MDPI, Electronics 12(11):2449"
    },
    {
      "title": "Document Rectification and Illumination Correction using a Patch-based CNN",
      "url": "https://arxiv.org/pdf/1909.09470",
      "publisher": "arXiv"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "color normalization",
    "white balance",
    "color constancy",
    "gray world",
    "white patch",
    "retinex",
    "von kries",
    "flat-field correction",
    "shading correction",
    "illumination normalization",
    "background whitening",
    "binarization preprocessing"
  ],
  "cluster": "image-preprocessing"
};

export default entry;
