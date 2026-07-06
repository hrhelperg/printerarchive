import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "image-noise-reduction",
  "title": "Image Noise Reduction (Document Image Denoising)",
  "description": "How Gaussian, median, and bilateral filtering suppress scanner noise in document images while preserving text strokes for OCR and archiving.",
  "summary": "Image noise reduction, or denoising, is the class of image-processing operations that suppress unwanted random variation in pixel brightness or color while attempting to preserve meaningful structure. In document imaging that structure is primarily text strokes, rules, and line art. The Tesseract OCR project defines noise as random variation of brightness or colour that makes text harder to read, and warns that certain noise cannot be removed during binarization, which can cause accuracy rates to drop. Three general-purpose filters are most commonly discussed together for scanned pages: Gaussian filtering (a linear weighted-average smoother), median filtering (a nonlinear order-statistic filter made practical in two dimensions by Huang, Yang, and Tang in 1979), and bilateral filtering (an edge-aware smoother named and popularized by Tomasi and Manduchi in 1998). Each manages the same central trade-off differently, because removing noise necessarily risks removing genuine detail. Denoising sits in the preprocessing stage before or around binarization and recognition, and remains a standard, widely implemented step in OCR and archival scanning pipelines.",
  "difficulty": "intermediate",
  "estimatedTime": "8 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Image noise reduction (denoising) is the class of image-processing operations that suppress unwanted random variation in pixel brightness or color while attempting to preserve the structures that carry meaning. In document imaging those structures are primarily text strokes, rules, and line art. The Tesseract OCR documentation defines noise as \"random variation of brightness or colour in an image, that can make the text of the image more difficult to read.\""
    },
    {
      "kind": "paragraph",
      "text": "For scanned documents the three techniques most commonly discussed together are Gaussian filtering (a linear, weighted-average smoother), median filtering (a nonlinear, order-statistic filter), and bilateral filtering (a nonlinear, edge-aware smoother). Each embodies a different point on the central trade-off of the field: removing noise necessarily risks removing genuine detail, and the three filters manage that trade-off in distinct ways."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History and origin"
    },
    {
      "kind": "paragraph",
      "text": "These are general-purpose image-processing methods that document-imaging pipelines adopted; they were not invented specifically for scanning."
    },
    {
      "kind": "list",
      "items": [
        "Gaussian smoothing is convolution of the image with a discretized Gaussian function — a linear filter and a long-established tool in image processing. The University of Edinburgh HIPR2 reference describes it as \"a 2-D convolution operator that is used to 'blur' images and remove detail and noise.\"",
        "Median filtering originates in robust, nonlinear smoothing of data. The running-median idea is attributed to John Tukey's work on nonlinear smoothing (no specific primary date is asserted here). Its practical two-dimensional use in images was enabled by a fast algorithm published by Huang, Yang, and Tang, \"A fast two-dimensional median filtering algorithm,\" IEEE Transactions on Acoustics, Speech, and Signal Processing, 27(1):13–18, February 1979.",
        "Bilateral filtering was named and popularized by C. Tomasi and R. Manduchi, \"Bilateral filtering for gray and color images,\" Proc. Sixth International Conference on Computer Vision (ICCV), Bombay, 1998. The survey by Paris, Kornprobst, Tumblin, and Durand documents that the same idea appeared earlier under other names: Aurich and Weule (1995) called it the \"nonlinear Gaussian filter,\" Smith and Brady (1997) used it within the SUSAN framework, and related work traces to Yaroslavsky."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solves"
    },
    {
      "kind": "paragraph",
      "text": "Digitizing a paper document introduces random pixel-level errors that degrade legibility and downstream automated processing. Denoising aims to reduce these errors so that:"
    },
    {
      "kind": "list",
      "items": [
        "Thresholding and binarization produce clean black-on-white text instead of speckled output. Tesseract explicitly warns that \"certain types of noise cannot be removed by Tesseract in the binarisation step, which can cause accuracy rates to drop.\"",
        "Character shapes are not broken up or fused by stray pixels before OCR or segmentation.",
        "Compressed archival files are smaller and cleaner, since random speckle is expensive to encode and undermines bilevel and text-region compression."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Sources of scanner noise"
    },
    {
      "kind": "paragraph",
      "text": "Document scanners and cameras use CCD or CMOS sensors, whose noise is well characterized in imaging-detector literature. The principal, physically grounded sources are:"
    },
    {
      "kind": "list",
      "items": [
        "Photon (shot) noise — the inherent statistical fluctuation in the arrival of photons and photoelectrons; it follows Poisson statistics and equals the square root of the signal, so it cannot be eliminated at the source.",
        "Dark-current noise — thermally generated electrons in the sensor, dependent on exposure time and temperature; its shot component is also Poisson-distributed.",
        "Read (readout) noise — introduced by the detector and controller electronics during signal readout and digitization.",
        "Fixed-pattern noise / pixel non-uniformity — pixel-to-pixel differences in sensitivity."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Beyond the sensor, document scans commonly also carry quantization noise, lossy-compression (JPEG) artifacts, and page-origin artifacts such as dust and scratches, paper texture, show-through from the reverse side, and halftone or screening dot patterns. (These document-specific contaminants are standard OCR-preprocessing knowledge; the sensor sources cited above cover only sensor-level noise.)"
    },
    {
      "kind": "paragraph",
      "text": "Different noise types call for different filters. Dust, scratches, and quantization can present as impulse-like speckle (salt-and-pepper), whereas sensor read and shot noise are more nearly additive and Gaussian-like."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "All three filters operate over a sliding neighborhood (window or kernel) around each pixel."
    },
    {
      "kind": "list",
      "items": [
        "Gaussian filter replaces each pixel with a weighted average of its neighbors, the weights following a 2-D Gaussian centered on the pixel, so nearer neighbors count more. It is a linear operation (convolution). The standard deviation σ sets the amount of smoothing — a larger σ means more blur and a larger kernel. The 2-D Gaussian is separable into two 1-D passes; HIPR2 notes it is the only completely circularly symmetric operator that can be decomposed in this way, which makes it efficient.",
        "Median filter sorts the neighborhood's pixel values and replaces the center with the median. Because the output is always an actual value from the neighborhood, HIPR2 notes the filter does not create new unrealistic pixel values when it straddles an edge, and a single outlier will not affect the median significantly. It is nonlinear.",
        "Bilateral filter is a weighted average like the Gaussian, but with two multiplied Gaussian weights: a spatial (domain) term based on distance and a range term based on the intensity difference between the center pixel and each neighbor. Neighbors that differ strongly in intensity — that is, across an edge — receive near-zero weight, so smoothing is confined to within-region pixels. As OpenCV notes, \"pixels at edges will have large intensity variation\" and are therefore effectively excluded, preserving edges while removing noise."
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
        "Gaussian: box or mean blur (an unweighted average) is a cruder relative; the separable implementation is standard, and repeated box blur approximates a Gaussian.",
        "Median: fast 2-D algorithms (Huang, Yang, and Tang, 1979); weighted median; adaptive and center-weighted median; vector median for color images.",
        "Bilateral: the original Tomasi–Manduchi form; the earlier \"nonlinear Gaussian filter\" (Aurich and Weule) and SUSAN (Smith and Brady) formulations; joint/cross-bilateral filters; and fast approximations.",
        "Related edge-preserving smoothers exist — for example anisotropic diffusion, non-local means, and total-variation and wavelet methods — but those are distinct techniques beyond the three in scope here."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the capture/OCR pipeline"
    },
    {
      "kind": "paragraph",
      "text": "Denoising is a preprocessing step applied after capture and before (or interacting with) binarization and recognition. Tesseract's guidance lists candidate preprocessing operations — rescaling to around 300 DPI, binarization, noise removal, dilation and erosion, rotation and deskewing, border handling, and alpha-channel removal — while noting it does not mandate a rigid order and that the right steps depend on the image. It stresses that some noise must be handled before or around binarization because thresholding alone cannot remove it."
    },
    {
      "kind": "paragraph",
      "text": "Tesseract itself performs internal image processing through the Leptonica library (thresholding, scaling, and some noise handling), but the documentation observes that external preprocessing often yields better results on difficult inputs."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Gaussian: simple, fast (separable), with a predictable frequency response; OpenCV notes it is \"highly effective in removing Gaussian noise,\" and HIPR2 notes it is gentler with better edge behavior than an equally sized mean filter.",
        "Median: OpenCV notes it is \"highly effective against salt-and-pepper noise\"; it removes impulses while preserving sharp edges, because it never invents new pixel values.",
        "Bilateral: removes noise and texture while maintaining edge definition; OpenCV describes it as \"highly effective in noise removal while keeping edges sharp.\" By design it offers the strongest edge preservation of the three filters here (an editorial comparison, not a benchmarked claim)."
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
        "Gaussian: blurs edges and attenuates high-frequency detail; the trade-off is inherent, since increased smoothing for noise reduction inevitably blurs edges and detail. It \"smears out\" rather than removes salt-and-pepper noise, and for thin text strokes it can fuse or thin characters.",
        "Median: less effective on Gaussian noise; with large windows or repeated passes, HIPR2 notes images become \"blotchy\" and fine detail, thin lines, and corners are lost; sorting makes it comparatively expensive.",
        "Bilateral: slower than the other blurs; it can produce a staircase effect (intensity plateaus, a \"cartoonish\" appearance) and gradient reversal (false edges), and it requires tuning two parameters (spatial and range)."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Balancing noise removal against detail loss"
    },
    {
      "kind": "paragraph",
      "text": "The unifying tension is that noise and fine detail can occupy overlapping scales, so any smoother that removes one risks the other. Gaussian filtering makes this trade explicit through σ; median filtering trades impulse rejection against loss of fine structure as window size grows; bilateral filtering tries to escape the trade by conditioning smoothing on intensity similarity, at the cost of extra parameters and characteristic artifacts."
    },
    {
      "kind": "paragraph",
      "text": "In document work the practical guidance is to match the filter to the noise — median for impulse and speckle, Gaussian for additive Gaussian-like noise, bilateral when strokes and edges must be kept crisp — and to keep denoising conservative so that character strokes are not eroded before recognition."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to OCR and scanning"
    },
    {
      "kind": "paragraph",
      "text": "Noise that survives into binarization degrades recognition accuracy; Tesseract states plainly that noise it cannot remove during binarization \"can cause accuracy rates to drop,\" and it recommends noise removal among preprocessing steps. Median filtering is a common choice against scanner speckle because it clears impulse noise without softening character edges, whereas heavy Gaussian blur can merge adjacent strokes. Bilateral filtering is used where smoothing must not blur glyph boundaries."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF/archival"
    },
    {
      "kind": "paragraph",
      "text": "Cleaner, less-speckled images compress better and reproduce more legibly, which matters for archival PDFs where scanned pages are stored as images, often behind an OCR text layer. Random speckle inflates file size and undermines bilevel and text-oriented compression, so conservative denoising before binarization can improve both size and fidelity. (This is an applied consequence of the binarization-and-compression relationship above rather than a claim about a specific PDF feature.)"
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "The three classical filters remain standard, widely implemented tools — Gaussian, median, and bilateral all ship as core functions in OpenCV and are documented as first-line smoothing operators. They are still routinely used in OCR preprocessing (Tesseract and Leptonica pipelines) and coexist with newer learning-based and non-local denoisers, which fall outside this page's scope."
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
          "text": "Huang, Yang, and Tang publish a fast two-dimensional median filtering algorithm (IEEE TASSP 27(1))."
        },
        {
          "period": "1995",
          "text": "Aurich and Weule describe the \"nonlinear Gaussian filter\" (per the Paris et al. survey)."
        },
        {
          "period": "1997",
          "text": "Smith and Brady's SUSAN framework includes the same edge-aware smoothing (per the Paris et al. survey)."
        },
        {
          "period": "1998",
          "text": "Tomasi and Manduchi introduce the term \"bilateral filter\" at ICCV (Bombay)."
        },
        {
          "period": "2009",
          "text": "Paris, Kornprobst, Tumblin, and Durand publish a consolidated survey documenting the filter's prior history and definition."
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
      "slug": "image-despeckle"
    },
    {
      "section": "guides",
      "slug": "document-cleanup"
    },
    {
      "section": "guides",
      "slug": "image-binarization"
    },
    {
      "section": "guides",
      "slug": "ocr-preprocessing"
    },
    {
      "section": "guides",
      "slug": "image-thresholding"
    },
    {
      "section": "guides",
      "slug": "morphological-operations"
    }
  ],
  "faqs": [
    {
      "q": "What is image noise reduction in document scanning?",
      "a": "It is the class of image-processing operations that suppress random variation in pixel brightness or color while preserving meaningful structure such as text strokes, rules, and line art. Tesseract defines noise as random variation of brightness or colour that makes text harder to read."
    },
    {
      "q": "Which filter is best for salt-and-pepper (speckle) noise?",
      "a": "Median filtering, which OpenCV describes as highly effective against salt-and-pepper noise. Because it replaces each pixel with the median of its neighborhood, it removes impulse noise without inventing new pixel values or softening character edges."
    },
    {
      "q": "How does a bilateral filter preserve edges?",
      "a": "It combines two Gaussian weights: a spatial term based on distance and a range term based on intensity difference. Neighbors across an edge differ strongly in intensity and receive near-zero weight, so smoothing stays within regions and edges are preserved."
    },
    {
      "q": "Where does denoising fit in an OCR pipeline?",
      "a": "It is a preprocessing step applied after capture and before or around binarization and recognition. Tesseract lists noise removal among preprocessing operations and warns that some noise cannot be removed during binarization, which can cause accuracy rates to drop."
    },
    {
      "q": "Why can Gaussian blur hurt text?",
      "a": "Gaussian smoothing is linear and blurs edges and high-frequency detail as smoothing increases. For thin text strokes this can fuse or thin characters, and it smears out rather than removes salt-and-pepper noise."
    }
  ],
  "sources": [
    {
      "title": "HIPR2 — Gaussian Smoothing (University of Edinburgh)",
      "url": "https://homepages.inf.ed.ac.uk/rbf/HIPR2/gsmooth.htm",
      "publisher": "University of Edinburgh"
    },
    {
      "title": "HIPR2 — Median Filter (University of Edinburgh)",
      "url": "https://homepages.inf.ed.ac.uk/rbf/HIPR2/median.htm",
      "publisher": "University of Edinburgh"
    },
    {
      "title": "Smoothing Images (Image Filtering tutorial)",
      "url": "https://docs.opencv.org/4.x/d4/d13/tutorial_py_filtering.html",
      "publisher": "OpenCV"
    },
    {
      "title": "A fast two-dimensional median filtering algorithm (Huang, Yang, Tang, 1979)",
      "url": "https://doi.org/10.1109/TASSP.1979.1163188",
      "publisher": "IEEE Transactions on Acoustics, Speech, and Signal Processing"
    },
    {
      "title": "Bilateral filtering for gray and color images (Tomasi & Manduchi, ICCV 1998)",
      "url": "https://doi.org/10.1109/ICCV.1998.710815",
      "publisher": "IEEE / ICCV"
    },
    {
      "title": "Bilateral Filtering: Theory and Applications (Paris, Kornprobst, Tumblin, Durand)",
      "url": "https://people.csail.mit.edu/sparis/publi/2009/fntcgv/Paris_09_Bilateral_filtering.pdf",
      "publisher": "Foundations and Trends in Computer Graphics and Vision"
    },
    {
      "title": "Improving the quality of the output (ImproveQuality)",
      "url": "https://tesseract-ocr.github.io/tessdoc/ImproveQuality.html",
      "publisher": "Tesseract OCR"
    },
    {
      "title": "CCD Noise Sources and Signal-to-Noise Ratio",
      "url": "https://hamamatsu.magnet.fsu.edu/articles/ccdsnr.html",
      "publisher": "Hamamatsu / Molecular Expressions"
    },
    {
      "title": "Scientific Camera Noise Sources",
      "url": "https://www.teledynevisionsolutions.com/learn/learning-center/scientific-imaging/scientific-camera-noise-sources/",
      "publisher": "Teledyne Vision Solutions"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "image noise reduction",
    "document image denoising",
    "gaussian filter",
    "median filter",
    "bilateral filter",
    "ocr preprocessing",
    "salt-and-pepper noise",
    "scanner noise",
    "edge-preserving smoothing",
    "order-statistic filter"
  ],
  "cluster": "image-preprocessing"
};

export default entry;
