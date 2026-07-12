import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "ocr-preprocessing",
  "title": "OCR Preprocessing (Overview)",
  "description": "How image-conditioning steps — rescaling, binarization, deskew, denoise, and layout segmentation — prepare a scanned page before OCR recognition runs.",
  "summary": "OCR preprocessing is the set of image-conditioning steps applied to a scanned or photographed page before character recognition runs. A typical pipeline rescales the capture to adequate resolution, converts it to a clean binary image, deskews it, removes noise, and segments the page into ordered text regions. Because OCR engines are sensitive to input geometry and quality, errors introduced upstream propagate downstream, which is why preprocessing is treated as a first-class concern. This overview frames the four main families — deskew, binarization/thresholding, despeckle/denoise, and layout/page segmentation — and links to detailed per-technique pages. It draws on primary sources including the Tesseract project documentation, Otsu's 1979 global-thresholding paper, and Sauvola and Pietikainen's 2000 adaptive-binarization method.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "OCR preprocessing is the set of image-conditioning steps applied to a scanned or photographed page before character recognition runs, with the goal of presenting the recognition engine with the cleanest, most regular image possible. In a typical pipeline the raw capture is rescaled to an adequate resolution, converted to a clean two-tone (binary) image, straightened (deskewed), cleaned of speckle and other noise, and analyzed to find and order the regions of text (page/layout segmentation). Only then does the recognizer classify glyphs into characters."
    },
    {
      "kind": "paragraph",
      "text": "Preprocessing matters because OCR engines are sensitive to the quality and geometry of their input. The Tesseract project states that \"certain types of noise cannot be removed by Tesseract in the binarisation step, which can cause accuracy rates to drop,\" and that \"the quality of Tesseract's line segmentation reduces significantly if a page is too skewed, which severely impacts the quality of the OCR.\" In other words, errors introduced upstream (skew, poor thresholding, residual noise, mis-segmented columns) propagate downstream and cannot always be recovered by the recognizer."
    },
    {
      "kind": "paragraph",
      "text": "This page is an overview that frames the four main preprocessing families and links to detailed per-technique treatments:"
    },
    {
      "kind": "list",
      "items": [
        "Deskew — detecting and correcting page/text-line rotation.",
        "Binarization / thresholding — converting greyscale or color to black-and-white text/background.",
        "Despeckle / denoise — removing speckle, scanner artifacts, and background texture.",
        "Layout / page segmentation — locating and ordering text blocks, lines, and words."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Preprocessing has been intrinsic to automated text recognition since document-image analysis became a research discipline. Several foundational threads are especially well documented."
    },
    {
      "kind": "list",
      "items": [
        "Global thresholding. Nobuyuki Otsu's 1979 paper \"A Threshold Selection Method from Gray-Level Histograms\" (IEEE Transactions on Systems, Man, and Cybernetics) introduced an automatic, non-parametric method for choosing a single global threshold from an image's grey-level histogram by maximizing between-class (equivalently, minimizing within-class) variance. Otsu's method remains one of the most widely used binarization baselines.",
        "Local adaptive thresholding. Because a single global threshold fails on pages with uneven illumination or aged backgrounds, local methods compute a per-pixel threshold from the local neighborhood's statistics. Niblack's approach (described in An Introduction to Digital Image Processing, commonly cited as 1986) computes thresholds from local mean and standard deviation but leaves substantial background noise; Sauvola and Pietikainen's \"Adaptive document image binarization\" (Pattern Recognition, vol. 33, 2000) refined this to suppress background noise, and it is now a standard reference method for document binarization.",
        "Layout analysis. The X-Y-tree / recursive X-Y-cut lineage of top-down page segmentation traces to Nagy and Seth's \"Hierarchical representation of optically scanned documents\" (1984); the full document-analysis system is often cited as Nagy, Seth and Viswanathan, \"A Prototype Document Image Analysis System for Technical Journals\" (IEEE Computer, 1992). Top-down (splitting) and bottom-up (connected-component grouping) segmentation strategies both trace to this era."
      ]
    },
    {
      "kind": "paragraph",
      "text": "On the engine side, Tesseract was developed at Hewlett-Packard Labs between 1985 and 1994, released as open source by HP in 2005, and subsequently maintained with Google's sponsorship from 2006. Version 4 introduced an LSTM-based recognizer (v4.0.0 final released in 2018), and version 5.0.0 (released 30 November 2021) added two Leptonica-based binarization options — Adaptive Otsu and Sauvola — alongside its default Otsu step."
    },
    {
      "kind": "paragraph",
      "text": "The DIBCO / H-DIBCO competition series, held in association with ICDAR/ICFHR beginning with the first competition at ICDAR 2009, established public benchmark datasets and ground-truth for evaluating document-image binarization, reflecting how central this preprocessing step is to the field."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "A representative preprocessing sequence proceeds as follows."
    },
    {
      "kind": "paragraph",
      "text": "1. Acquisition and rescaling. The page is captured (scanner or camera) and, if necessary, resampled. Tesseract's guidance is that it \"works best on images which have a DPI of at least 300 dpi, so it may be beneficial to resize images.\" 2. Binarization / thresholding. The greyscale or color image is reduced to a binary image in which text pixels are separated from background. Tesseract performs this internally with Otsu by default, but \"the result can be suboptimal, particularly if the page background is of uneven darkness,\" which is why performing binarization as a controlled, separate step is often recommended. 3. Deskew / rotation correction. The dominant text angle is estimated and the page rotated so text lines are horizontal. Tesseract's Orientation and Script Detection (OSD) can report orientation, writing direction, and a deskew angle. 4. Despeckle / denoise. Isolated speckles, scanner streaks, and background texture are removed. Related morphological operations (dilation/erosion) can also compensate for ink bleed or overly thin/bold strokes in degraded documents. 5. Border handling. Dark scan borders can be misrecognized as characters; conversely, missing whitespace margins can hurt recognition. Tesseract suggests adding roughly 10 pixels of border, while warning that overly large borders around a single glyph or word can also cause problems. 6. Layout / page segmentation. The engine identifies text regions, columns, lines, and words, and establishes reading order. Tesseract exposes 14 page-segmentation modes (PSM), numbered 0–13, via --psm, and layout analysis through APIs such as AnalyseLayout() and GetComponentImages() (block/line/word iterators)."
    },
    {
      "kind": "paragraph",
      "text": "Tesseract relies on the Leptonica image-processing library for much of this image handling."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Approach and techniques"
    },
    {
      "kind": "paragraph",
      "text": "Binarization / thresholding"
    },
    {
      "kind": "list",
      "items": [
        "Global (one threshold for the whole page): Otsu's method is the canonical example — automatic and parameter-free, well suited to clean, uniformly-lit pages with a roughly bimodal histogram.",
        "Local / adaptive (per-pixel or per-region thresholds): Niblack, Sauvola, and Adaptive Otsu compute thresholds from local statistics; these are preferred for degraded, unevenly-lit, or historical documents where a single global threshold fails. Sauvola commonly uses parameters around k = 0.5 and R = 128.",
        "Trade-offs are documented: Otsu degrades on non-uniform backgrounds; Niblack leaves background noise; Sauvola can thin or break characters."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Deskew — estimate skew angle (for example via projection profiles, the Hough transform, or connected-component alignment) and rotate. Keeping text lines horizontal is a precondition for reliable line segmentation."
    },
    {
      "kind": "paragraph",
      "text": "Despeckle / denoise — connected-component size filtering to drop tiny speckles, morphological opening/closing, and border/edge cleanup. Some noise types are explicitly outside what the recognizer can fix at binarization time."
    },
    {
      "kind": "paragraph",
      "text": "Layout / page segmentation — top-down (recursive X-Y cut and other projection-profile splitting) versus bottom-up (connected-component grouping/merging), plus hybrid methods; the output is an ordered set of text regions, lines, and words feeding the recognizer."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Accuracy and quality factors"
    },
    {
      "kind": "paragraph",
      "text": "Factors documented to affect OCR accuracy through preprocessing include the following."
    },
    {
      "kind": "list",
      "items": [
        "Resolution / DPI — below roughly 300 dpi, recognition quality tends to fall (Tesseract guidance).",
        "Skew — excessive skew degrades line segmentation and therefore OCR output (Tesseract).",
        "Binarization quality — an uneven background can make the default Otsu threshold suboptimal; choosing an adaptive method for degraded pages materially changes downstream results.",
        "Residual noise — some noise cannot be removed at the binarization step and drops accuracy (Tesseract).",
        "Character rendering — very thin, very bold, or serifed characters, and ink bleed, affect recognition; morphological correction can help.",
        "Borders — dark scan borders can be misread as characters; inadequate margins can also hurt."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The DIBCO/H-DIBCO benchmarks exist specifically to quantify binarization quality against ground truth, underscoring that binarization is a measurable determinant of document-analysis outcomes. Precise, generalizable accuracy percentages are not cited here because they depend entirely on dataset, engine, and settings."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Improves the reliability of downstream recognition by regularizing input (straight, clean, well-thresholded, correctly ordered).",
        "Lets practitioners exert explicit control — for example, choosing and tuning a binarization method rather than accepting an engine's internal default — which the Tesseract documentation notes can yield better results on difficult pages.",
        "Modular: each step (deskew, binarize, denoise, segment) can be evaluated and swapped independently, and benchmark suites such as DIBCO exist for at least the binarization stage."
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
        "Not a cure-all. Certain noise cannot be removed at binarization and still lowers accuracy (Tesseract).",
        "Method-dependent artifacts. Global thresholding fails on uneven backgrounds; adaptive methods can introduce thinning or breakage (Niblack noise, Sauvola thinning).",
        "Parameter sensitivity. Adaptive methods depend on window size and parameters (for example Sauvola's k and R); poor choices degrade results.",
        "Error propagation. Mistakes in early steps (wrong skew correction, wrong column segmentation or reading order) are difficult for the recognizer to undo.",
        "No universal best method. The appropriate technique depends on document type — clean modern print versus degraded/historical versus camera-captured."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to scanning"
    },
    {
      "kind": "paragraph",
      "text": "Preprocessing begins where scanning ends: capture settings largely determine how much preprocessing can help. Adequate resolution (Tesseract's approximately 300 dpi guidance) and avoiding dark scan borders are capture-time choices that directly ease downstream binarization and segmentation. Digitization-standards guidance from national-library and digital-preservation programs emphasizes source-image quality precisely because OCR accuracy depends heavily on the scan. See the per-technique pages and the scanning reference for capture parameters."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and searchable PDF"
    },
    {
      "kind": "paragraph",
      "text": "A searchable (\"sandwich\") PDF keeps the original page image as the visible layer and stores the OCR-recognized text as a hidden, selectable/searchable text layer positioned beneath it — the page looks identical to the scan but its text can be found and copied. Tools such as OCRmyPDF implement exactly this \"add an OCR text layer to scanned PDF\" workflow, and can output archival PDF/A (an ISO-standardized subset of PDF, defined by ISO 19005 and designed for long-term preservation, omitting features such as embedded JavaScript, audio/video, and external font references)."
    },
    {
      "kind": "paragraph",
      "text": "Preprocessing quality feeds directly into the accuracy of the embedded text layer: a cleaner binarized, deskewed page yields a more reliable searchable-PDF text layer."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to workflows"
    },
    {
      "kind": "paragraph",
      "text": "Preprocessing is one stage in a document pipeline: capture/scan → preprocess (rescale, binarize, deskew, denoise, segment) → recognize (OCR) → post-process (spell/dictionary correction, layout reconstruction) → output (searchable PDF, plain text, structured data) → index/archive."
    },
    {
      "kind": "paragraph",
      "text": "In batch digitization and document-management contexts, preprocessing is typically automated and tuned per document class, because it is the lever that most affects recognition accuracy without changing the recognizer itself."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Preprocessing remains standard practice. Modern engines still expose and depend on it: Tesseract's default Otsu binarization plus the Leptonica-based Adaptive Otsu and Sauvola options (added in 5.0.0), its OSD-based deskew, and its page-segmentation modes are all current."
    },
    {
      "kind": "paragraph",
      "text": "In parallel, research has moved toward learned approaches — for example, deep-learning binarization methods evaluated on DIBCO/H-DIBCO — but the underlying goals (clean thresholding, straight lines, denoising, correct segmentation) are unchanged. Even LSTM and neural recognizers benefit from well-conditioned input, so preprocessing continues to be a first-class concern rather than a legacy step."
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
          "text": "Otsu publishes an automatic global-threshold method based on grey-level histograms (IEEE Trans. SMC)."
        },
        {
          "period": "1984",
          "text": "Nagy and Seth publish \"Hierarchical representation of optically scanned documents,\" the origin of the recursive X-Y-cut lineage."
        },
        {
          "period": "1985–1994",
          "text": "Tesseract OCR engine developed at Hewlett-Packard Labs."
        },
        {
          "period": "1986",
          "text": "Niblack's local adaptive thresholding approach described (Niblack, An Introduction to Digital Image Processing)."
        },
        {
          "period": "1992",
          "text": "Nagy, Seth and Viswanathan describe a prototype document image analysis system (IEEE Computer)."
        },
        {
          "period": "2000",
          "text": "Sauvola and Pietikainen publish adaptive document-image binarization improving on Niblack (Pattern Recognition, vol. 33)."
        },
        {
          "period": "2005",
          "text": "Hewlett-Packard releases Tesseract as open source."
        },
        {
          "period": "2006 onward",
          "text": "Tesseract development sponsored by Google."
        },
        {
          "period": "2009",
          "text": "First DIBCO document-image binarization competition (ICDAR series)."
        },
        {
          "period": "2018",
          "text": "Tesseract 4 introduces LSTM-based recognition (v4.0.0 final)."
        },
        {
          "period": "2021",
          "text": "Tesseract 5.0.0 (released 30 November) adds Leptonica-based Adaptive Otsu and Sauvola binarization options."
        }
      ]
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This is a neutral technical and historical reference. Figures and dates are drawn from documented sources; it does not include current pricing, marketing claims, or product recommendations, and is not legal, financial, or medical advice. The references consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "guides",
      "slug": "ocr-accuracy"
    },
    {
      "section": "guides",
      "slug": "ocr-layout-analysis"
    },
    {
      "section": "guides",
      "slug": "optical-character-recognition"
    },
    {
      "section": "guides",
      "slug": "flatbed-scanners"
    },
    {
      "section": "guides",
      "slug": "ocr-engines"
    },
    {
      "section": "guides",
      "slug": "ocr-limitations"
    }
  ],
  "faqs": [
    {
      "q": "What is OCR preprocessing?",
      "a": "OCR preprocessing is the set of image-conditioning steps applied to a scanned or photographed page before character recognition runs — typically rescaling to adequate resolution, binarization (converting to black-and-white), deskewing, denoising, and layout/page segmentation — so the recognizer receives the cleanest, most regular image possible."
    },
    {
      "q": "Why does preprocessing affect OCR accuracy?",
      "a": "OCR engines are sensitive to the geometry and quality of their input. The Tesseract project notes that certain noise cannot be removed at the binarization step and can drop accuracy, and that heavily skewed pages degrade line segmentation. Errors introduced upstream propagate downstream and cannot always be recovered by the recognizer."
    },
    {
      "q": "What resolution does OCR need?",
      "a": "Tesseract's documentation states it works best on images with a DPI of at least 300, so it may be beneficial to resize images below that threshold. Adequate resolution is a capture-time choice that directly eases downstream binarization and segmentation."
    },
    {
      "q": "What is the difference between global and adaptive thresholding?",
      "a": "Global thresholding, such as Otsu's 1979 method, uses one threshold for the whole page and suits clean, uniformly lit images. Adaptive (local) methods like Niblack, Sauvola, and Adaptive Otsu compute per-pixel or per-region thresholds from local statistics and are preferred for degraded, unevenly lit, or historical documents where a single global threshold fails."
    },
    {
      "q": "What is a searchable (sandwich) PDF and how does preprocessing relate to it?",
      "a": "A searchable or sandwich PDF keeps the original page image as the visible layer and stores the OCR-recognized text as a hidden, selectable layer beneath it. Tools such as OCRmyPDF implement this and can output archival PDF/A (ISO 19005). Cleaner binarized, deskewed input yields a more reliable embedded text layer."
    }
  ],
  "sources": [
    {
      "title": "Improving the quality of the output (Tesseract project / tessdoc)",
      "url": "https://tesseract-ocr.github.io/tessdoc/ImproveQuality.html",
      "publisher": "Tesseract OCR project"
    },
    {
      "title": "Tesseract 5.0.0 release notes",
      "url": "https://github.com/tesseract-ocr/tesseract/releases/tag/5.0.0",
      "publisher": "Tesseract OCR project (GitHub)"
    },
    {
      "title": "Tesseract OCR repository (README / history)",
      "url": "https://github.com/tesseract-ocr/tesseract",
      "publisher": "Tesseract OCR project (GitHub)"
    },
    {
      "title": "N. Otsu, \"A Threshold Selection Method from Gray-Level Histograms,\" IEEE Trans. SMC, vol. 9, no. 1, pp. 62–66, 1979",
      "url": "https://ieeexplore.ieee.org/document/4310076",
      "publisher": "IEEE"
    },
    {
      "title": "J. Sauvola & M. Pietikainen, \"Adaptive document image binarization,\" Pattern Recognition 33(2):225–236, 2000",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/S0031320399000552",
      "publisher": "Elsevier / Pattern Recognition"
    },
    {
      "title": "An Analytical Study of Different Document Image Binarization Methods (survey)",
      "url": "https://arxiv.org/pdf/1501.07862",
      "publisher": "arXiv"
    },
    {
      "title": "A Survey of Historical Document Image Datasets (DIBCO context)",
      "url": "https://arxiv.org/pdf/2203.08504",
      "publisher": "arXiv"
    },
    {
      "title": "OCRmyPDF — adds an OCR text layer to scanned PDFs (searchable/sandwich PDF, PDF/A)",
      "url": "https://github.com/ocrmypdf/OCRmyPDF",
      "publisher": "OCRmyPDF project"
    },
    {
      "title": "OCRmyPDF documentation (searchable PDF, PDF/A)",
      "url": "https://ocrmypdf.readthedocs.io/en/latest/introduction.html",
      "publisher": "OCRmyPDF documentation"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "ocr preprocessing",
    "image binarization",
    "thresholding",
    "otsu method",
    "sauvola binarization",
    "deskew",
    "despeckle",
    "denoise",
    "page segmentation",
    "layout analysis",
    "tesseract",
    "leptonica"
  ],
  "cluster": "ocr",
  "difficulty": "intermediate",
  "estimatedTime": "9 min read"
};

export default entry;
