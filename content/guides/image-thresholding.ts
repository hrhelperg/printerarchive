import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "image-thresholding",
  "title": "Image Thresholding",
  "description": "Technical reference on image thresholding: global (Otsu) and adaptive (Niblack, Sauvola) binarization for document imaging and OCR.",
  "summary": "Image thresholding is a point-based segmentation operation that turns a grayscale image into a binary (two-level) image by comparing each pixel's intensity to a threshold, separating ink or marks from paper or background. In document imaging it is the binarization step that prepares scans and photos for OCR, compression, and archival. The two main families are global thresholding, which applies one threshold to the whole image (notably Otsu's 1979 histogram-based method), and adaptive or local thresholding, which varies the threshold spatially using neighborhood statistics (Niblack 1986, Sauvola and Pietikainen 2000, and OpenCV's adaptive mean and Gaussian methods). Thresholding is fast and often automatic, but global methods fail on uneven backgrounds and binarization discards grayscale detail. It sits between image cleanup and layout or character recognition in the OCR pipeline; Tesseract performs binarization internally via Leptonica using Otsu by default and, since version 5.0.0, offers Adaptive Otsu and Sauvola.",
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
      "text": "The methods most associated with image thresholding are documented in a small set of primary works. The dating below refers to where each technique is published or documented, not to a claim about who first conceived of thresholding as a general idea, which predates all of them."
    },
    {
      "kind": "list",
      "items": [
        "Otsu's method (1979). The widely cited automatic global-thresholding technique was published by Nobuyuki Otsu as \"A Threshold Selection Method from Gray-Level Histograms,\" IEEE Transactions on Systems, Man, and Cybernetics, vol. SMC-9, no. 1, pp. 62–66, January 1979 (DOI 10.1109/TSMC.1979.4310076). It frames threshold selection as an optimization over the image's gray-level histogram."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Niblack's local method (1986). The local (adaptive) thresholding formula commonly attributed to Wayne Niblack appears in his textbook An Introduction to Digital Image Processing (Prentice-Hall, 1986; ISBN 0-13-480674-3). It computes a per-pixel threshold from the local mean and standard deviation within a sliding window."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Sauvola's method (2000). J. Sauvola and M. Pietikainen, \"Adaptive Document Image Binarization,\" Pattern Recognition, vol. 33, no. 2, pp. 225–236, 2000 (DOI 10.1016/S0031-3203(99)00055-2), introduced a modification of the Niblack formula designed for document images degraded by uneven illumination, noise, and background variation."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Adaptive mean and Gaussian thresholding as commonly used today is documented in the OpenCV library (the adaptiveThreshold function with the ADAPTIVE_THRESH_MEAN_C and ADAPTIVE_THRESH_GAUSSIAN_C flags). These are implementation conventions in a widely used open-source project rather than named academic methods."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solves"
    },
    {
      "kind": "paragraph",
      "text": "A scanner or camera records a continuous-tone image, but many downstream tasks operate on, or benefit from, a clean two-class separation of ink and marks versus paper and background. These tasks include OCR, layout analysis, symbol and barcode decoding, black-and-white archival, and bilevel compression such as CCITT Group 4 and JBIG2. Thresholding provides that separation."
    },
    {
      "kind": "paragraph",
      "text": "The core difficulty is that a single fixed threshold rarely works across a whole real-world page. Common causes include:"
    },
    {
      "kind": "list",
      "items": [
        "Uneven illumination such as shadows, page curl, and camera flash falloff.",
        "Background variation such as yellowed or stained paper and show-through from the reverse side.",
        "Variable stroke contrast from faded ink, carbon copies, or thermal-paper receipts.",
        "Noise from the sensor or the medium."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Different thresholding strategies exist precisely to cope with these conditions."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Given a grayscale image I(x, y) and a threshold T, the binary output assigns each pixel to one of two classes:"
    },
    {
      "kind": "list",
      "items": [
        "B(x, y) = 1 (foreground) if I(x, y) > T",
        "B(x, y) = 0 (background) otherwise"
      ]
    },
    {
      "kind": "paragraph",
      "text": "Polarity may be inverted depending on convention. In Tesseract's internal pipeline, for example, the produced binary image represents text as black."
    },
    {
      "kind": "paragraph",
      "text": "Thresholding methods fall into two categories by how T is chosen:"
    },
    {
      "kind": "list",
      "items": [
        "Global thresholding uses one T for the entire image. T may be fixed manually or chosen automatically from the image histogram, as in Otsu's method.",
        "Adaptive or local thresholding computes a threshold T(x, y) that varies spatially, typically from statistics of a window or neighborhood around each pixel. This spatial variation is what makes local methods robust to uneven lighting and background change."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Algorithms and variants"
    },
    {
      "kind": "paragraph",
      "text": "Global — Otsu's method (1979). Otsu treats the pixels as two classes (below and above the threshold) and searches all candidate thresholds to find the one that minimizes the intra-class (within-class) variance, which is mathematically equivalent to maximizing the between-class variance. It operates entirely on the gray-level histogram and requires no manual parameter. It performs best when the histogram is bimodal, with a clear ink peak and a clear paper peak. In OpenCV it is invoked through the THRESH_OTSU flag to threshold, which determines the threshold automatically from the histogram."
    },
    {
      "kind": "paragraph",
      "text": "Adaptive mean and Gaussian (OpenCV). Per the OpenCV documentation:"
    },
    {
      "kind": "list",
      "items": [
        "ADAPTIVE_THRESH_MEAN_C sets the threshold for a pixel to the mean of its neighborhood area minus a constant C.",
        "ADAPTIVE_THRESH_GAUSSIAN_C sets the threshold to a Gaussian-weighted sum of the neighborhood values minus C."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The blockSize parameter sets the neighborhood size and C is subtracted from the computed local statistic. These handle varying illumination across an image far better than a single global threshold."
    },
    {
      "kind": "paragraph",
      "text": "Niblack (1986). A local threshold is computed within a window as T(x, y) = m(x, y) + k · s(x, y), where m and s are the local mean and standard deviation and k is a bias constant. It adapts to local contrast but tends to produce noise or speckle in near-uniform background regions, where the standard deviation is small. Specific parameter values that circulate as defaults are conventions from secondary literature and implementations rather than universal constants; implementations vary widely."
    },
    {
      "kind": "paragraph",
      "text": "Sauvola (2000). Sauvola and Pietikainen modified the Niblack formula for document images: T(x, y) = m(x, y) · [1 + k · (s(x, y) / R − 1)], where R is the dynamic range of the standard deviation and k is a positive parameter. This form suppresses the background noise that Niblack produces in low-variance regions, making it well suited to documents with staining, show-through, and uneven lighting."
    },
    {
      "kind": "paragraph",
      "text": "The broader literature includes additional threshold-selection methods, such as entropy-based and clustering-based approaches, catalogued in general references and in the ImageJ Auto Local Threshold plugin."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the capture/OCR pipeline"
    },
    {
      "kind": "paragraph",
      "text": "Thresholding is a preprocessing step that typically occurs after image acquisition and geometric or tonal cleanup and before text and layout recognition. A representative sequence is:"
    },
    {
      "kind": "paragraph",
      "text": "1. Capture by scanning or photographing, producing a color or grayscale image. 2. Pre-cleanup such as deskew, denoise, resolution normalization, and grayscale conversion. Tesseract's documentation states that it works best on images with a DPI of at least 300. 3. Binarization (thresholding) using a global method (Otsu) or an adaptive method (Sauvola and others) to produce a bilevel image. 4. Layout analysis and segmentation into lines, words, and glyphs. 5. Character recognition producing text output."
    },
    {
      "kind": "paragraph",
      "text": "In Tesseract, binarization is performed internally by default using the Otsu algorithm via the Leptonica image library. The Tesseract documentation notes that this internal Otsu result \"can be suboptimal, particularly if the page background is of uneven darkness.\" Tesseract 5.0.0 added two new Leptonica-based binarization methods, Adaptive Otsu and Sauvola, configurable via the thresholding_ parameters. Applying external or custom binarization before feeding Tesseract is a common practice for difficult pages."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Simplicity and speed. Thresholding is a per-pixel (point or small-window) operation, computationally cheap and highly parallelizable.",
        "Automatic operation. Otsu removes the need to hand-tune a threshold for well-behaved, bimodal images.",
        "Robustness to lighting in adaptive variants. Local methods such as Sauvola and adaptive mean or Gaussian handle uneven illumination and background variation that defeat a single global threshold.",
        "Downstream efficiency. A clean bilevel image supports high-ratio lossless compression such as CCITT Group 4 and JBIG2 and gives OCR engines a cleaner signal."
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
        "Global thresholds fail on uneven backgrounds. Otsu assumes an informative, ideally bimodal histogram; shadows, gradients, or show-through can push parts of a page into the wrong class. Tesseract's documentation flags this for uneven background darkness.",
        "Niblack noise. In near-uniform regions the local standard deviation is small, so Niblack can amplify noise into speckle. Sauvola was designed partly to address this.",
        "Parameter sensitivity. Local methods depend on window size and bias constant; poor choices cause broken strokes (over-thresholding) or merged and blotchy text (under-thresholding).",
        "Loss of information. Binarization is irreversible and discards grayscale detail, which is problematic for faint strokes, anti-aliased text, halftones, and grayscale illustrations.",
        "Not universal. No single method is best for all documents; results depend on medium, degradation type, and the downstream task."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to OCR and scanning"
    },
    {
      "kind": "paragraph",
      "text": "OCR accuracy is sensitive to binarization quality, because broken or merged characters directly cause recognition errors. This is why OCR toolchains bundle binarization (Tesseract does so through Leptonica) and why practitioners often replace the default global Otsu with adaptive methods such as Sauvola or Adaptive Otsu for degraded or unevenly lit scans."
    },
    {
      "kind": "paragraph",
      "text": "Scanner firmware and document-mode settings frequently apply thresholding at capture time to output bilevel TIFFs directly. Resolution matters upstream: Tesseract recommends at least 300 DPI, since too-low resolution starves any thresholding step of the detail needed to separate thin strokes from background."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF/archival"
    },
    {
      "kind": "list",
      "items": [
        "Bilevel archival and compression. Thresholded bilevel images are the natural input for the classic fax and document compression standards CCITT Group 3 and 4 and JBIG2, which achieve high compression on black-and-white page images and are usable as image encodings inside PDF.",
        "Searchable image-plus-text PDFs. A common archival workflow scans a page, binarizes it, runs OCR, and stores the recognized text as an invisible layer over the page image in the PDF, making the archive searchable while preserving the visual page.",
        "Trade-off for archives. Because binarization is lossy for tone, archival programs sometimes retain grayscale or color masters and use binarized derivatives only for OCR, compression, and access copies."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Classical thresholding remains a first-line, low-cost tool and is still embedded in mainstream OCR and imaging stacks including Tesseract with Leptonica, OpenCV, scikit-image, and ImageJ. For heavily degraded historical documents, more recent research has increasingly used learning-based and neural binarization, and the Document Image Binarization Contest (DIBCO) series has driven much of this work. Such methods can outperform classical approaches on difficult cases, while Otsu and Sauvola persist as fast, dependency-free baselines and as built-in defaults in production tools."
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
          "text": "Otsu publishes the automatic global histogram-based threshold-selection method in IEEE Transactions on Systems, Man, and Cybernetics (vol. SMC-9, pp. 62–66)."
        },
        {
          "period": "1986",
          "text": "Niblack's An Introduction to Digital Image Processing (Prentice-Hall) documents the local mean-plus-standard-deviation thresholding formula."
        },
        {
          "period": "2000",
          "text": "Sauvola and Pietikainen publish \"Adaptive Document Image Binarization\" in Pattern Recognition (vol. 33, pp. 225–236), adapting Niblack for document images."
        },
        {
          "period": "Tesseract 5.0.0",
          "text": "Tesseract adds Leptonica-based Adaptive Otsu and Sauvola binarization alongside the default Otsu."
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
      "slug": "image-binarization"
    },
    {
      "section": "guides",
      "slug": "image-noise-reduction"
    },
    {
      "section": "guides",
      "slug": "ocr-accuracy"
    },
    {
      "section": "guides",
      "slug": "ocr-preprocessing"
    },
    {
      "section": "guides",
      "slug": "contrast-enhancement"
    },
    {
      "section": "guides",
      "slug": "optical-character-recognition"
    }
  ],
  "faqs": [
    {
      "q": "What is image thresholding?",
      "a": "Image thresholding is a point-based segmentation operation that converts a grayscale image into a two-level binary image by comparing each pixel's intensity to a threshold value. Pixels at or above the threshold go to one class (such as foreground) and those below to the other. When the output has exactly two levels it is called binarization."
    },
    {
      "q": "What is the difference between global and adaptive thresholding?",
      "a": "Global thresholding uses one threshold for the whole image, chosen manually or automatically from the histogram (for example, Otsu's method). Adaptive or local thresholding computes a threshold that varies spatially, based on the statistics of a neighborhood around each pixel (for example, Niblack, Sauvola, or OpenCV's adaptive mean and Gaussian methods), which makes it more robust to uneven lighting."
    },
    {
      "q": "How does Otsu's method choose a threshold?",
      "a": "Otsu's method, published in 1979, treats the pixels as two classes and searches all candidate thresholds to find the one that minimizes the intra-class variance, which is mathematically equivalent to maximizing the between-class variance. It works entirely from the gray-level histogram, needs no manual parameter, and performs best when the histogram is bimodal."
    },
    {
      "q": "Why does Sauvola's method work better than Niblack on documents?",
      "a": "Niblack computes a local threshold from the local mean plus a scaled standard deviation, but in near-uniform regions the small standard deviation causes it to amplify noise into speckle. Sauvola and Pietikainen modified the formula in 2000 so that it suppresses this background noise in low-variance regions, making it better suited to documents with staining, show-through, and uneven lighting."
    },
    {
      "q": "How does Tesseract handle binarization?",
      "a": "Tesseract performs binarization internally by default using the Otsu algorithm via the Leptonica library. Its documentation notes the result can be suboptimal when the page background has uneven darkness. Tesseract 5.0.0 added two Leptonica-based methods, Adaptive Otsu and Sauvola, configurable through the thresholding_ parameters, and it recommends images of at least 300 DPI."
    }
  ],
  "sources": [
    {
      "title": "A Threshold Selection Method from Gray-Level Histograms (Otsu, 1979)",
      "url": "https://ui.adsabs.harvard.edu/abs/1979ITSMC...9...62O/abstract",
      "publisher": "NASA ADS / IEEE Transactions on Systems, Man, and Cybernetics"
    },
    {
      "title": "Adaptive Document Image Binarization (Sauvola & Pietikainen, 2000)",
      "url": "https://ui.adsabs.harvard.edu/abs/2000PatRe..33..225S/abstract",
      "publisher": "NASA ADS / Pattern Recognition"
    },
    {
      "title": "An Introduction to Digital Image Processing (Niblack, 1986)",
      "url": "https://openlibrary.org/books/OL2712275M/An_introduction_to_digital_image_processing",
      "publisher": "Open Library (ISBN 0-13-480674-3)"
    },
    {
      "title": "OpenCV: Image Thresholding (simple, Otsu, adaptive mean/Gaussian)",
      "url": "https://docs.opencv.org/4.x/d7/d4d/tutorial_py_thresholding.html",
      "publisher": "OpenCV documentation"
    },
    {
      "title": "Improving the quality of the output (binarization, DPI, Adaptive Otsu / Sauvola)",
      "url": "https://tesseract-ocr.github.io/tessdoc/ImproveQuality.html",
      "publisher": "Tesseract project documentation"
    },
    {
      "title": "Niblack and Sauvola Thresholding example",
      "url": "https://scikit-image.org/docs/0.24.x/auto_examples/segmentation/plot_niblack_sauvola.html",
      "publisher": "scikit-image documentation"
    },
    {
      "title": "Auto Local Threshold (catalog of local methods incl. Niblack, Sauvola)",
      "url": "https://imagej.net/plugins/auto-local-threshold",
      "publisher": "ImageJ / Fiji documentation"
    },
    {
      "title": "Thresholding (image processing) — overview",
      "url": "https://en.wikipedia.org/wiki/Thresholding_(image_processing)",
      "publisher": "Wikipedia (orientation source)"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "image thresholding",
    "binarization",
    "otsu's method",
    "adaptive thresholding",
    "sauvola",
    "niblack",
    "document image binarization",
    "ocr preprocessing",
    "global thresholding",
    "local thresholding",
    "grayscale to binary",
    "tesseract binarization"
  ],
  "cluster": "image-preprocessing"
};

export default entry;
