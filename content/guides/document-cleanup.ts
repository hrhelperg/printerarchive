import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "document-cleanup",
  "title": "Document Image Cleanup",
  "description": "How document image cleanup removes background, bleed-through, border noise, and scan marks from scanned pages before binarization and OCR.",
  "summary": "Document image cleanup is the composite preprocessing stage that transforms a raw scan or photograph of a page into a clean, foreground-faithful raster for downstream binarization, OCR, compression, and archival. Rather than a single algorithm, it bundles related sub-problems: background normalization, show-through and bleed-through reduction, marginal and border-noise removal, and scan-mark removal such as hole-punch and staple artifacts. The stage is documented across the OCR-engineering literature (Tesseract), image-processing libraries (Leptonica), and academic work on page frame detection (Shafait et al., IJDAR 2008). Its component methods trace to well-attested primary sources including Otsu's 1979 thresholding method, Sauvola and Pietikainen's 2000 adaptive binarization, and Sharma's 2001 show-through cancellation model. Cleanup improves OCR accuracy, produces cleaner binarization, shrinks file size, and aids legibility of degraded material, but it is lossy and interpretive: over-aggressive processing can delete real content, and errors cascade into later pipeline stages.",
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
      "text": "Document image cleanup did not arise from a single paper; it accreted as document-analysis systems matured through the 1980s to the 2000s. Several verifiable anchor points document its component methods."
    },
    {
      "kind": "paragraph",
      "text": "Thresholding to separate ink from paper is grounded in Otsu's global histogram method (N. Otsu, A Threshold Selection Method from Gray-Level Histograms, IEEE Transactions on Systems, Man, and Cybernetics, vol. 9, no. 1, 1979, pp. 62-66), which remains a default in tools such as Tesseract. Locally adaptive thresholding for documents was formalized by Sauvola and Pietikainen (Adaptive Document Image Binarization, Pattern Recognition, vol. 33, no. 2, 2000, pp. 225-236), building on Wayne Niblack's local mean and standard-deviation approach."
    },
    {
      "kind": "paragraph",
      "text": "The optical show-through problem in duplex scanning was analyzed from physical first principles by G. Sharma (Show-through cancellation in scans of duplex printed documents, IEEE Transactions on Image Processing, vol. 10, no. 5, May 2001, pp. 736-754). The combined-cleanup framing is stated explicitly in F. Shafait, J. van Beusekom, D. Keysers, and T. M. Breuel, Document cleanup using page frame detection (International Journal on Document Analysis and Recognition, vol. 11, no. 2, 2008, pp. 81-96), which defines the page frame and treats cleanup as an OCR-error-reduction step. From 2009 onward the DIBCO / H-DIBCO competition series standardized evaluation of binarization and cleanup on degraded documents. On the toolchain side, the open-source Leptonica library (Dan Bloomberg) documents adaptive background normalization as an explicit grayscale cleanup step, and Tesseract's documentation describes the Leptonica-based cleanup it performs internally before recognition."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solves"
    },
    {
      "kind": "paragraph",
      "text": "A raw capture of a physical page rarely contains only the intended foreground. It typically also contains:"
    },
    {
      "kind": "list",
      "items": [
        "Uneven illumination and paper tone: shadows, gradients, yellowing, foxing, and stains.",
        "Reverse-side content visible through the paper (show-through) or physically migrated ink (bleed-through).",
        "Black borders from the scanner platen or lid, speckle, and textual noise, meaning fragments of the neighboring page picked up when a thick or skewed book is scanned.",
        "Physical marks: hole-punch holes (rendered as black dots after binarization), staple marks and their shadows, torn edges, and fingers or holding tools at the page margin."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Per Tesseract's documentation, such artifacts can be erroneously picked up as extra characters, inflate file size, distort layout analysis, and reduce OCR accuracy. Cleanup exists to remove them while preserving legibility, producing a page that both a human and a recognizer can read as if it were a pristine original."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Cleanup is usually a sequence, or an interleaving, of targeted operations."
    },
    {
      "kind": "paragraph",
      "text": "Background normalization. Leptonica's approach tiles the image, estimates the local background value in each tile by identifying pixels that are almost certainly not background, averages the remaining background pixels, interpolates a smooth background surface across tiles, and linearly remaps pixels so the background sits at a constant value. Parameters named in the documentation include tile size, a foreground threshold (pixels this dark or darker are treated as foreground and excluded from background estimation), a minimum background count per tile, and smoothing factors. Leptonica exposes combined functions such as pixBackgroundNormFlex() for rapidly varying backgrounds and pixOtsuThreshOnBackgroundNorm() to normalize then threshold."
    },
    {
      "kind": "paragraph",
      "text": "Show-through and bleed-through reduction. Show-through is an optical artifact: because paper is not fully opaque, back-side printing becomes faintly visible in the front-side scan (Sharma 2001). When both sides are scanned, it can be cancelled with a model that relates the two scans and adaptively subtracts the registered, attenuated reverse image. Bleed-through is physical ink migration through the fibers and appears even without the verso scan; the general strategy is to identify bleed-through pixels, often via soft segmentation or statistical decorrelation of recto and verso, and replace them with values matching the surrounding clean background, frequently through image inpainting."
    },
    {
      "kind": "paragraph",
      "text": "Marginal and border-noise removal. Page frame detection (Shafait et al.) defines the page frame as the smallest rectangle enclosing the true foreground, found via a geometric matching algorithm that exploits text-alignment structure; everything outside is discarded. The authors report the method requires no parameter tuning and does not assume whitespace between the noise and content. Other documented approaches include projection-profile peak detection, connected-component and region-adjacency reasoning, edge-density analysis, and fully convolutional page-region segmentation."
    },
    {
      "kind": "paragraph",
      "text": "Scan-mark removal. Production scanners and imaging SDKs detect standard punch-hole patterns at page margins and fill them, and offer border and edge cleanup. Content-aware autonomous methods (described in scan-mark-removal patent literature) detect cues characteristic of each mark type, generate a mark mask, and fill the region using surrounding content."
    },
    {
      "kind": "paragraph",
      "text": "Despeckle. Isolated black or white specks below a size threshold are removed to reduce salt-and-pepper noise before binarization, as in ScanTailor's despeckle stages."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Algorithms and variants"
    },
    {
      "kind": "list",
      "items": [
        "Global thresholding: Otsu (1979), often used as a downstream consumer of a normalized background.",
        "Local / adaptive thresholding: Niblack; Sauvola and Pietikainen (2000), where local mean and standard deviation set a per-pixel threshold. Tesseract 5.0.0 added Leptonica-based Adaptive Otsu and Sauvola binarizers alongside the default global Otsu.",
        "Background normalization: Leptonica adaptive mapping, pixBackgroundNormFlex(), and pixOtsuThreshOnBackgroundNorm().",
        "Show-through cancellation: physically motivated adaptive filtering using registered front and back scans (Sharma 2001).",
        "Bleed-through removal: recursive unsupervised classification, soft segmentation via recto/verso decorrelation, and sparse or non-local sparse inpainting (bleed-through restoration literature).",
        "Border and marginal noise: page frame detection via geometric matching (Shafait et al.); projection-profile methods; connected-component and region-adjacency approaches; and FCN-based page segmentation.",
        "Scan-mark removal: class-specific mask-and-fill content-aware filters and scanner-firmware punch-hole detection.",
        "Despeckle: connected-component size filtering."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the capture/OCR pipeline"
    },
    {
      "kind": "paragraph",
      "text": "A common ordering, drawn from the acquisition and OCR-engineering sources, is:"
    },
    {
      "kind": "paragraph",
      "text": "1. Acquisition (scan or photograph, ideally at least 300 DPI per Tesseract guidance). 2. Geometry correction: deskew and rotation, and for book or camera captures, dewarping. 3. Cleanup: background normalization, show-through and bleed-through reduction, border and marginal-noise removal, scan-mark removal, and despeckle. Some steps (background normalization) precede binarization; others (border removal) can operate on the binarized image. 4. Binarization: Otsu, adaptive Otsu, or Sauvola. 5. Layout analysis and page segmentation. 6. OCR and recognition. 7. Output assembly, such as a searchable PDF or archival master."
    },
    {
      "kind": "paragraph",
      "text": "Tesseract explicitly performs several of these operations internally via Leptonica before recognition, while noting the internal result can be suboptimal, which is why external cleanup is common."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Higher OCR accuracy by removing spurious foreground. Shafait et al. (2008) report that page-frame-based cleanup reduces the OCR error rate due to elements outside the page frame from 4.3% to 1.7% on the UW-III dataset.",
        "Cleaner binarization, since normalized backgrounds let global and adaptive thresholds separate ink from paper more reliably (Leptonica documentation).",
        "Smaller files and better compression, because uniform backgrounds and removed speckle compress well, especially for bilevel and mixed raster content (MRC) encodings.",
        "Improved human legibility of degraded and historical material.",
        "Automation at scale, replacing infeasible manual pixel-by-pixel erasing for large multi-page jobs."
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
        "Over-cleaning removes real content: aggressive despeckle can delete the dots on i and j, punctuation, diacritics, or fine rule lines, and border removal can crop legitimate marginalia or page numbers.",
        "Bleed-through versus foreground ambiguity: where interfering strokes overlap genuine text, separation is under-determined and inpainting may corrupt real characters.",
        "Show-through cancellation needs both sides registered: single-sided input or misregistration between recto and verso degrades results.",
        "Structural assumptions: page-frame geometric matching assumes structured, text-aligned layouts; irregular, handwritten, or heavily illustrated pages can defeat it.",
        "Non-standard marks: detectors tuned to standard hole patterns miss unusual configurations, and content-aware fills can hallucinate texture.",
        "Parameter sensitivity: tile size, foreground threshold, and despeckle strength are content-dependent, so a single setting rarely fits a heterogeneous corpus.",
        "Cascading errors: cleanup mistakes propagate into binarization, layout analysis, and OCR."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to OCR and scanning"
    },
    {
      "kind": "paragraph",
      "text": "Cleanup is primarily motivated by recognition. Per Tesseract's documentation, dark borders and adjacent-page text can be erroneously picked up as extra characters, and noise can make image text more difficult to read. Modern OCR engines integrate cleanup: Tesseract runs Leptonica operations internally and, since version 5.0.0, offers Adaptive Otsu and Sauvola binarization. On the scanning side, production scanners and imaging SDKs push cleanup toward capture time through punch-hole removal, border and edge cleanup, and speckle removal, so downstream OCR receives cleaner input."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and archival"
    },
    {
      "kind": "paragraph",
      "text": "Cleanup directly serves digital preservation and searchable-document workflows."
    },
    {
      "kind": "list",
      "items": [
        "Searchable PDF and PDF/A: a clean binarized or MRC foreground plus an OCR text layer yields small, searchable, archival PDFs, whereas specks and borders bloat the file and pollute the text layer.",
        "Book and mass digitization: tools such as ScanTailor exist specifically to turn raw scans into clean pages ready to be printed or assembled into a PDF or DjVu file, combining split, deskew, content selection, despeckle, and binarize stages.",
        "Historical archives: bleed-through and stain removal improve legibility of digitized manuscripts without physical restoration, which the restoration literature notes was costly, invasive, and sometimes caused permanent damage.",
        "Preservation caveat: archival best practice generally keeps an unaltered or minimally processed master alongside cleaned derivatives, since cleanup is lossy and partly interpretive."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Cleanup remains a standard, actively tooled stage: Tesseract's quality guidance, Leptonica's normalization routines, and ScanTailor's workflow are all current. The DIBCO / H-DIBCO competition series keeps binarization and cleanup of degraded documents an active research benchmark, with metrics such as F-measure, pseudo-F-measure, PSNR, and DRD. Learning-based methods, including FCN page segmentation, deep binarization, and inpainting-based bleed-through removal, increasingly supplement or replace hand-tuned heuristics. Camera-captured and mobile document capture has expanded the problem to include dewarping and uneven-lighting cleanup, broadening the cleanup umbrella beyond flatbed scans."
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
          "text": "Otsu publishes the global histogram threshold method (IEEE TSMC, vol. 9, pp. 62-66)."
        },
        {
          "period": "2000",
          "text": "Sauvola and Pietikainen publish adaptive document image binarization (Pattern Recognition, vol. 33, no. 2, pp. 225-236)."
        },
        {
          "period": "2001",
          "text": "Sharma publishes the physical model and cancellation method for show-through in duplex scans (IEEE TIP, vol. 10, no. 5, pp. 736-754)."
        },
        {
          "period": "2007",
          "text": "The CBDAR document image dewarping contest (Shafait and Breuel) establishes a public camera-captured document dataset."
        },
        {
          "period": "2008",
          "text": "Shafait, van Beusekom, Keysers, and Breuel publish Document cleanup using page frame detection (IJDAR, vol. 11, pp. 81-96)."
        },
        {
          "period": "2009 onward",
          "text": "The DIBCO document image binarization contest series begins at ICDAR, with H-DIBCO variants at ICFHR."
        },
        {
          "period": "2021-11-30",
          "text": "Tesseract 5.0.0 adds Leptonica-based Adaptive Otsu and Sauvola binarization."
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
      "slug": "border-removal"
    },
    {
      "section": "guides",
      "slug": "image-noise-reduction"
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
      "q": "What is the difference between show-through and bleed-through?",
      "a": "Show-through is an optical artifact: because paper is not fully opaque, back-side printing becomes faintly visible in a front-side scan (Sharma 2001). Bleed-through is physical ink migration through the paper fibers, so it appears even without scanning the reverse side. Show-through can be cancelled using a registered front/back scan pair, while bleed-through is typically addressed by segmenting the interfering pixels and inpainting the background."
    },
    {
      "q": "Does document image cleanup happen before or after binarization?",
      "a": "Both. Some steps, such as background normalization, precede binarization so that global or adaptive thresholds separate ink from paper more reliably. Others, such as border and marginal-noise removal, can operate on the already-binarized image. Cleanup is best understood as a stage that is often interleaved with binarization rather than strictly before it."
    },
    {
      "q": "Can cleanup remove real content by mistake?",
      "a": "Yes. Cleanup is lossy and partly interpretive. Aggressive despeckle can delete the dots on i and j, punctuation, or diacritics; border removal can crop legitimate marginalia or page numbers; and bleed-through removal can corrupt characters where interfering strokes overlap genuine text. Because errors cascade into later OCR stages, archival practice usually keeps an unaltered master alongside cleaned derivatives."
    },
    {
      "q": "Do OCR engines do cleanup automatically?",
      "a": "Partly. Tesseract runs several Leptonica-based cleanup operations internally before recognition and, since version 5.0.0, offers Adaptive Otsu and Sauvola binarization. However, Tesseract's own documentation notes the internal result can be suboptimal, which is why external, dedicated cleanup is common for demanding or degraded material."
    }
  ],
  "sources": [
    {
      "title": "A Threshold Selection Method from Gray-Level Histograms (Otsu 1979)",
      "url": "https://ui.adsabs.harvard.edu/abs/1979ITSMC...9...62O/abstract",
      "publisher": "IEEE TSMC / NASA ADS"
    },
    {
      "title": "Adaptive Document Image Binarization (Sauvola & Pietikainen 2000)",
      "url": "https://doi.org/10.1016/S0031-3203(99)00055-2",
      "publisher": "Pattern Recognition, Elsevier"
    },
    {
      "title": "Show-through cancellation in scans of duplex printed documents (Sharma 2001)",
      "url": "https://hajim.rochester.edu/ece/sites/gsharma/papers/showthuip01.pdf",
      "publisher": "IEEE TIP / University of Rochester"
    },
    {
      "title": "Show-through cancellation in scans of duplex printed documents (record)",
      "url": "https://ieeexplore.ieee.org/document/918567/",
      "publisher": "IEEE Xplore"
    },
    {
      "title": "Document cleanup using page frame detection (Shafait et al. 2008)",
      "url": "https://link.springer.com/article/10.1007/s10032-008-0071-7",
      "publisher": "IJDAR, Springer"
    },
    {
      "title": "Tesseract — Improving the quality of the output",
      "url": "https://tesseract-ocr.github.io/tessdoc/ImproveQuality.html",
      "publisher": "Tesseract OCR project"
    },
    {
      "title": "Tesseract — Release Notes (5.0.0, adaptive Otsu/Sauvola)",
      "url": "https://tesseract-ocr.github.io/tessdoc/ReleaseNotes.html",
      "publisher": "Tesseract OCR project"
    },
    {
      "title": "Leptonica — Grayscale Mapping and Binarization",
      "url": "http://www.leptonica.org/binarization.html",
      "publisher": "Leptonica"
    },
    {
      "title": "Leptonica source repository",
      "url": "https://github.com/DanBloomberg/leptonica",
      "publisher": "Leptonica / GitHub"
    },
    {
      "title": "ICDAR 2009 Document Image Binarization Contest (DIBCO 2009)",
      "url": "https://users.iit.demokritos.gr/~bgat/DIBCO2009/DIBCO2009.pdf",
      "publisher": "ICDAR / DIBCO"
    },
    {
      "title": "Document Image Dewarping Contest (Shafait & Breuel, CBDAR 2007)",
      "url": "https://www.m.cs.osakafu-u.ac.jp/cbdar2007/proceedings/papers/Contest.pdf",
      "publisher": "CBDAR 2007 proceedings"
    },
    {
      "title": "Marginal noise removal for scanned document images by projection profile based method",
      "url": "https://ieeexplore.ieee.org/document/6567312",
      "publisher": "IEEE Xplore"
    },
    {
      "title": "Non-Local Sparse Image Inpainting for Document Bleed-Through Removal",
      "url": "https://www.mdpi.com/2313-433X/4/5/68",
      "publisher": "Journal of Imaging, MDPI"
    },
    {
      "title": "ScanTailor Advanced",
      "url": "https://github.com/4lex4/scantailor-advanced",
      "publisher": "ScanTailor project / GitHub"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "document image cleanup",
    "background normalization",
    "bleed-through removal",
    "show-through cancellation",
    "border noise removal",
    "page frame detection",
    "scan mark removal",
    "despeckle",
    "ocr preprocessing",
    "binarization",
    "leptonica",
    "tesseract"
  ],
  "cluster": "image-preprocessing"
};

export default entry;
