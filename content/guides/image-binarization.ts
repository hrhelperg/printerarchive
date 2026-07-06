import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "image-binarization",
  "title": "Image Binarization",
  "description": "Converting grayscale document scans to bilevel black/white via global and local thresholding (Otsu, Niblack, Sauvola) for OCR and archival.",
  "summary": "Image binarization converts a grayscale (or color-then-grayscale) image into a bilevel image in which every pixel is assigned to one of two values — conventionally black ink foreground and white paper background. The decision is made by a thresholding rule, and the field is organized by how the threshold is chosen: a single global value for the whole image versus a local value computed per pixel from neighborhood statistics. As a preprocessing step it sits between image capture and downstream recognition or bilevel-compressed archival, and because it discards information irreversibly its quality bounds everything that follows.",
  "difficulty": "advanced",
  "estimatedTime": "8 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History and origin"
    },
    {
      "kind": "paragraph",
      "text": "Thresholding as a segmentation idea predates any single canonical paper; it follows naturally from representing an image as an intensity histogram. The field's most durable anchor is Nobuyuki Otsu's 1979 paper, \"A Threshold Selection Method from Gray-Level Histograms\" (IEEE Transactions on Systems, Man, and Cybernetics 9(1):62–66, DOI 10.1109/TSMC.1979.4310076). Otsu framed automatic global threshold selection as a statistical optimization over the gray-level histogram, and it remains one of the most cited works in image processing."
    },
    {
      "kind": "paragraph",
      "text": "The move to local/adaptive thresholding for documents is documented in two lineage points. Wayne Niblack, in An Introduction to Digital Image Processing (Prentice-Hall, 1986), introduced the local mean-and-standard-deviation threshold that bears his name. Jaakko Sauvola and Matti Pietikäinen, in \"Adaptive Document Image Binarization\" (Pattern Recognition 33(2):225–236, 2000, DOI 10.1016/S0031-3203(99)00055-2), modified Niblack's rule specifically to handle stained, unevenly illuminated document backgrounds."
    },
    {
      "kind": "paragraph",
      "text": "Systematic community benchmarking arrived with the Document Image Binarization Contest (DIBCO), first held at ICDAR 2009 in Barcelona, with subsequent DIBCO and H-DIBCO editions. These competitions established public degraded-document datasets, ground truth, and shared evaluation measures."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solves"
    },
    {
      "kind": "paragraph",
      "text": "A raw scan or photograph of a page is a continuous-tone image full of information irrelevant to reading the text: paper texture, scanner noise, show-through from the reverse side, staining, uneven illumination, fading ink, and color casts. Binarization addresses several coupled problems:"
    },
    {
      "kind": "list",
      "items": [
        "Foreground/background separation — isolating ink strokes from the substrate so character shapes are cleanly defined.",
        "Data reduction — reducing a multi-bit-per-pixel image to 1 bit per pixel, which both simplifies modeling for recognition and enables large storage savings when paired with bilevel compression.",
        "Normalization for recognition — giving OCR and layout-analysis algorithms a canonical, contrast-invariant representation, so that a stroke reads the same whether the original was a crisp laser print or a faded carbon copy."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "The general pipeline of a binarization operation:"
    },
    {
      "kind": "paragraph",
      "text": "1. (Optional) preprocessing — convert color to grayscale (for example by luminance weighting), and optionally denoise, correct illumination, or normalize contrast. Uneven-illumination correction is often what makes a global method viable. 2. Threshold determination — compute the threshold T, either once for the whole image (global) or per pixel/region (local). 3. Assignment — pixel intensity is mapped to foreground or background by comparing it to T (or to the local T(x,y)). 4. (Optional) postprocessing — morphological cleanup (despeckle, fill) and connected-component filtering to remove noise blobs."
    },
    {
      "kind": "paragraph",
      "text": "Global thresholding picks one T. Otsu's method chooses it by treating the histogram as two classes split at T and selecting the T that maximizes the between-class variance (equivalently, minimizes within-class variance). This works well when the histogram is genuinely bimodal — a dark ink peak and a light paper peak separated by a clear valley."
    },
    {
      "kind": "paragraph",
      "text": "Local/adaptive thresholding computes a threshold from the statistics of a sliding window around each pixel, letting T track spatial variation in illumination and background:"
    },
    {
      "kind": "list",
      "items": [
        "Niblack: T(x,y) = m(x,y) + k · s(x,y), where m and s are the local mean and standard deviation over a window and k is a bias parameter. It adapts to local contrast but tends to generate noise in blank regions where s is small. Sign and magnitude conventions for k vary across textbooks and implementations, so it should be verified against the specific implementation in use.",
        "Sauvola: T(x,y) = m(x,y) · [1 + k · (s(x,y)/R − 1)], where R is the dynamic range of the standard deviation (R = 128 for 8-bit grayscale in the original formulation) and k is a positive bias (commonly cited in the range ≈ 0.2–0.5). The design intent: in high-contrast text regions the term drives T toward m, while in low-contrast uniform-background regions it suppresses spurious foreground, reducing the background noise that plagues Niblack on stained or unevenly lit pages."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Algorithms and variants"
    },
    {
      "kind": "list",
      "items": [
        "Fixed/manual global threshold — a hand-chosen constant; simplest and least robust.",
        "Otsu (1979) — automatic global threshold via histogram between-class-variance maximization. Extensions include multi-level Otsu (more than two classes) and 2-D Otsu, which uses pixel-plus-neighborhood statistics for noisier images.",
        "Kittler–Illingworth minimum-error thresholding (1986) — a distinct histogram method (Pattern Recognition 19(1):41–47) that relaxes Otsu's equal-variance and equal-size assumptions via a Gaussian-mixture model.",
        "Niblack (1986) — local mean plus standard deviation.",
        "Sauvola & Pietikäinen (2000) — Niblack modified for document backgrounds; a standard local baseline.",
        "Adaptive mean / adaptive Gaussian (mean-minus-C style) — threshold each pixel against the local box or Gaussian-weighted average minus a constant C; provided in OpenCV as adaptiveThreshold (ADAPTIVE_THRESH_MEAN_C, ADAPTIVE_THRESH_GAUSSIAN_C).",
        "Toolkit implementations — scikit-image provides threshold_otsu, threshold_niblack, and threshold_sauvola, documented with the Niblack-1986 and Sauvola-2000 citations.",
        "Learning-based methods — DIBCO-era research applies CNN/GAN and other deep models to degraded-document binarization (for example the published SauvolaNet). These are research and state-of-the-art results rather than universal defaults."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the capture/OCR pipeline"
    },
    {
      "kind": "paragraph",
      "text": "A typical document-capture pipeline runs: scan or photograph → grayscale conversion → geometric correction (deskew, dewarp) → illumination/contrast normalization → binarization → segmentation and layout analysis → OCR → export (searchable PDF or archival format)."
    },
    {
      "kind": "paragraph",
      "text": "Binarization historically fed OCR directly. A notable modern nuance appears in Tesseract: from version 4.0 onward the LSTM recognition engine normally operates on the grayscale image rather than the binarized one, yet the binarized image is still produced and used for layout analysis, orientation and script detection, and separator and picture detection. Tesseract's historical internal binarizer was a custom global-Otsu variant without normalization; Tesseract 5.0 (released November 2021) added Leptonica-based \"Adaptive Otsu\" and \"Tiled Sauvola\" options. This illustrates that binarization has partly shifted from a recognition prerequisite to a structural/segmentation prerequisite, while remaining essential for bilevel archival output."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Robust foreground isolation for clean, high-contrast documents; global Otsu is fast, parameter-free, and effective when the histogram is bimodal.",
        "Adaptivity to real-world degradation — local methods, Sauvola especially, handle uneven illumination, shadows, and staining that defeat a single global threshold.",
        "Downstream storage savings — 1-bit output enables bilevel compression (CCITT Group 4, JBIG2) with high ratios for text.",
        "Simplification for classical algorithms — connected-component analysis, contour extraction, and many segmentation routines are cheaper and better-defined on bilevel data.",
        "Contrast normalization — presents recognition stages with a representation independent of the original tonal range."
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
        "Bimodality assumption (global methods): Otsu degrades under heavy noise, a small foreground fraction, inhomogeneous lighting, and when within-class variance exceeds between-class variance. A single threshold cannot serve a page whose background brightness varies spatially.",
        "Parameter sensitivity (local methods): Window size and the bias k strongly affect results. Windows too small relative to stroke width, or a poorly chosen k, cause broken strokes or noise; Niblack in particular produces speckle in blank regions.",
        "Stroke degradation: Over-thresholding thins or breaks thin and faint strokes and can drop diacritics and punctuation; under-thresholding merges adjacent characters and fills counters (enclosed loops). Both cause recognition errors.",
        "Irreversibility: Binarization is lossy and cannot be undone. Anti-aliasing nuance and any information in near-threshold pixels are discarded permanently.",
        "Halftones and images: Photographs and halftoned illustrations are poorly represented by any text-oriented threshold and require separate handling, such as picture-region detection, rather than binarization.",
        "Bleed-through and stains: Reverse-side ink and stains can be misclassified as foreground; these are exactly the degraded-document cases DIBCO was created to stress-test."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to OCR and scanning"
    },
    {
      "kind": "paragraph",
      "text": "Binarization was long the canonical first stage of OCR and remains tightly coupled to it. Recognition accuracy depends strongly on binarization quality: merged or broken characters at this stage propagate as substitution and deletion errors downstream. Scanning parameters interact directly — insufficient resolution starves the local statistics that adaptive methods rely on (Tesseract guidance recommends adequate DPI, commonly around 300 dpi for body text), and scanner illumination artifacts are precisely what adaptive methods must correct. As noted above, some modern engines feed grayscale to the recognizer while still requiring binarized images for layout and segmentation."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and archival"
    },
    {
      "kind": "paragraph",
      "text": "Binarization is the gateway to bilevel compression, which dominates scanned-document storage."
    },
    {
      "kind": "list",
      "items": [
        "CCITT Group 4 (ITU-T T.6, \"MMR\" — Modified Modified READ): a lossless 2-D run-length scheme standardized as ITU-T T.6 in 1988 and originating in Group 4 fax. It is carried in TIFF as Compression type 4, formalized in the TIFF 6.0 specification (finalized June 3, 1992), and is a supported compression method for 1-bit images in PDF, including archival PDF/A use.",
        "JBIG2 (ITU-T T.88 / ISO/IEC 14492): a bilevel standard that encodes recurring symbol patterns by reference, achieving better ratios than Group 4 for text-heavy pages. It supports both lossless and lossy modes. For archival use, lossless JBIG2 is preferred, for the reason below."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Archival caution (documented failure mode): JBIG2's lossy \"Pattern Matching & Substitution\" mode replaces similar glyph patches with a single shared representative. If the error-correcting \"Soft Pattern Matching\" difference-image step is omitted, visually similar characters can be silently substituted — for example a scanned digit rendered as a different digit. This is the 2013 Xerox WorkCentre character-substitution defect documented by David Kriesel, in which lossy JBIG2 on certain machines altered numbers in scanned documents and went undetected across many machines for years. The lesson for archival workflows is to prefer lossless bilevel compression and to treat lossy symbol-substitution compression as unsafe where character fidelity is legally or historically material."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Binarization remains a standard, actively used preprocessing and archival step:"
    },
    {
      "kind": "list",
      "items": [
        "It is still the enabling step for bilevel-compressed searchable-PDF and TIFF archives, the backbone of large document-digitization programs.",
        "It remains essential for layout analysis and segmentation even in OCR engines that recognize from grayscale.",
        "It is an active research area, benchmarked through DIBCO and H-DIBCO, with deep-learning methods now competing with and sometimes surpassing classical Otsu and Sauvola baselines on heavily degraded historical documents — while classical global and local methods remain the pragmatic defaults for clean, high-volume production scanning because they are fast and parameter-light."
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
          "period": "1979",
          "text": "Otsu publishes the global histogram threshold method (IEEE Trans. SMC 9(1):62–66)."
        },
        {
          "period": "1986",
          "text": "Niblack's local mean/std-dev threshold appears in An Introduction to Digital Image Processing (Prentice-Hall); Kittler and Illingworth publish minimum-error thresholding (Pattern Recognition 19(1):41–47)."
        },
        {
          "period": "1988",
          "text": "CCITT Group 4 bilevel compression standardized as ITU-T T.6."
        },
        {
          "period": "1992",
          "text": "TIFF 6.0 specification finalized (June 3), formalizing Group 4 as Compression type 4."
        },
        {
          "period": "2000",
          "text": "Sauvola & Pietikäinen publish adaptive document binarization (Pattern Recognition 33(2):225–236); JBIG2 published as ITU-T T.88."
        },
        {
          "period": "2009",
          "text": "First DIBCO held at ICDAR, Barcelona."
        },
        {
          "period": "2013",
          "text": "Xerox WorkCentre JBIG2 lossy character-substitution defect publicly documented by D. Kriesel."
        },
        {
          "period": "2021",
          "text": "Tesseract 5.0 (November) adds Leptonica-based Adaptive Otsu and Tiled Sauvola binarization."
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
      "slug": "image-thresholding"
    },
    {
      "section": "guides",
      "slug": "ocr-preprocessing"
    },
    {
      "section": "guides",
      "slug": "ocr-accuracy"
    },
    {
      "section": "guides",
      "slug": "document-cleanup"
    },
    {
      "section": "guides",
      "slug": "image-despeckle"
    },
    {
      "section": "guides",
      "slug": "morphological-operations"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between global and local (adaptive) thresholding?",
      "a": "Global thresholding chooses one threshold value for the entire image (Otsu's method being the classic automatic choice), which works when the histogram is clearly bimodal. Local or adaptive thresholding computes a threshold per pixel from the statistics of a surrounding window, letting it track uneven illumination and staining across the page; Niblack and Sauvola are the standard document-oriented examples."
    },
    {
      "q": "Why is Sauvola often preferred over Niblack for documents?",
      "a": "Niblack's rule (local mean plus a multiple of the local standard deviation) adapts to contrast but produces speckle noise in blank regions where the standard deviation is small. Sauvola modified the formula so that uniform low-contrast background regions suppress spurious foreground, which reduces the background noise that affects Niblack on stained or unevenly illuminated pages."
    },
    {
      "q": "Do modern OCR engines still need binarization?",
      "a": "Yes, though the role has shifted. From Tesseract 4.0 the LSTM recognizer normally works on the grayscale image, but a binarized image is still produced and used for layout analysis, orientation and script detection, and separator and picture detection. Binarization also remains essential for producing bilevel-compressed archival output."
    },
    {
      "q": "Why can lossy JBIG2 be dangerous for archives?",
      "a": "JBIG2's lossy Pattern Matching & Substitution mode replaces similar glyph patches with one shared representative. If the error-correcting Soft Pattern Matching step is omitted, visually similar characters can be silently swapped, as in the 2013 Xerox WorkCentre defect where scanned numbers were altered undetected for years. Lossless bilevel compression is preferred where character fidelity matters."
    }
  ],
  "sources": [
    {
      "title": "Otsu, A Threshold Selection Method from Gray-Level Histograms (IEEE Trans. SMC, 1979)",
      "url": "https://ui.adsabs.harvard.edu/abs/1979ITSMC...9...62O/abstract",
      "publisher": "IEEE / NASA ADS"
    },
    {
      "title": "Sauvola & Pietikäinen, Adaptive Document Image Binarization (Pattern Recognition, 2000)",
      "url": "https://ui.adsabs.harvard.edu/abs/2000PatRe..33..225S/abstract",
      "publisher": "Pattern Recognition / NASA ADS"
    },
    {
      "title": "Niblack, An Introduction to Digital Image Processing (Prentice-Hall, 1986)",
      "url": "https://archive.org/details/introductiontodi0000nibl",
      "publisher": "Internet Archive"
    },
    {
      "title": "Kittler & Illingworth, Minimum Error Thresholding (Pattern Recognition, 1986)",
      "url": "https://www.semanticscholar.org/paper/Minimum-error-thresholding-Kittler-Illingworth/00f2938d9f10e4bd37336f01b18a41d518f749ba",
      "publisher": "Semantic Scholar"
    },
    {
      "title": "DIBCO 2009 (ICDAR 2009 Document Image Binarization Contest)",
      "url": "https://link.springer.com/article/10.1007/s10032-010-0115-7",
      "publisher": "Springer / IJDAR"
    },
    {
      "title": "JBIG2 — ITU-T Recommendation T.88",
      "url": "https://www.itu.int/rec/dologin_pub.asp?lang=e&id=T-REC-T.88-200002-S!!PDF-E&type=items",
      "publisher": "ITU-T"
    },
    {
      "title": "ISO/IEC 14492 (JBIG2)",
      "url": "https://cdn.standards.iteh.ai/samples/75396/d9c30b8e5bf34406bcf80f485bec8d4e/ISO-IEC-14492-2019.pdf",
      "publisher": "ISO/IEC"
    },
    {
      "title": "TIFF Revision 6.0 specification (June 3, 1992)",
      "url": "https://www.itu.int/itudoc/itu-t/com16/tiff-fx/docs/tiff6.pdf",
      "publisher": "Adobe / ITU-T"
    },
    {
      "title": "ITU-T Group 4 FAX Compression (T.6) format description",
      "url": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000136.shtml",
      "publisher": "Library of Congress"
    },
    {
      "title": "Xerox WorkCentres are switching written numbers when scanning",
      "url": "https://www.dkriesel.com/en/blog/2013/0802_xerox-workcentres_are_switching_written_numbers_when_scanning",
      "publisher": "David Kriesel"
    },
    {
      "title": "Tesseract — Improving the quality of the output (binarization methods)",
      "url": "https://tesseract-ocr.github.io/tessdoc/ImproveQuality.html",
      "publisher": "Tesseract OCR project"
    },
    {
      "title": "Tesseract RFC: allow flexible or better binarization (issue #3083)",
      "url": "https://github.com/tesseract-ocr/tesseract/issues/3083",
      "publisher": "Tesseract OCR project"
    },
    {
      "title": "Niblack and Sauvola Thresholding — scikit-image documentation",
      "url": "https://scikit-image.org/docs/stable/auto_examples/segmentation/plot_niblack_sauvola.html",
      "publisher": "scikit-image"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "image binarization",
    "thresholding",
    "otsu method",
    "sauvola",
    "niblack",
    "adaptive thresholding",
    "document binarization",
    "bilevel image",
    "ocr preprocessing",
    "dibco",
    "jbig2",
    "ccitt group 4"
  ],
  "cluster": "image-preprocessing"
};

export default entry;
