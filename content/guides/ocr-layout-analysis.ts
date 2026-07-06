import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "ocr-layout-analysis",
  "title": "OCR Layout Analysis (Page Segmentation)",
  "description": "How OCR layout analysis segments a page image into regions, classifies them, and determines reading order before character recognition.",
  "summary": "Layout analysis — also called document layout analysis (DLA) or page segmentation — is the stage of a document-recognition pipeline that determines the structure of a page image before individual characters are recognized. It locates and categorizes the regions on a page (body text, headings, columns, tables, figures, captions, headers and footers, marginalia) and establishes the order in which those regions should be read.\n\nThe literature usually separates two connected tasks. Page segmentation partitions the page into homogeneous regions based on their appearance, using visual cues such as geometry, spacing, and pixel density. Region classification then labels each region by content type (text, image, table, separator, and so on). Together these are termed physical (or geometric) layout analysis, which is concerned with where regions are and what visual type they are. Logical structure analysis goes further, assigning finer-grained semantic roles — distinguishing a paragraph from a caption or a document title — grouping regions into logical units, and producing the reading order (Subramani, Matton, Greaves and Lam, A Survey of Deep Learning Approaches for OCR and Document Understanding, 2020).\n\nReading order — the sequence in which text regions and lines should be consumed — is a key output. On a single-column page it is trivial, but on multi-column newspapers, magazines, or scientific papers it is the difference between coherent extracted text and interleaved nonsense. Because the recognition engine operates on individual lines or words, layout analysis is what isolates those lines in the correct grouping and order while keeping non-text regions out of the recognizer. In this sense it frames and constrains everything the recognizer does.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Document image analysis matured as a research field through the 1980s and 1990s, and most of the foundational page-segmentation algorithms date from that period. Classic techniques fall into the categories still used to describe the field today: top-down, bottom-up, and hybrid."
    },
    {
      "kind": "list",
      "items": [
        "Run-Length Smearing/Smoothing Algorithm (RLSA) — introduced by Wong, Casey and Wahl (IBM, 1982) in \"Document analysis system.\" It works on the binary bitmap, smearing runs of white pixels shorter than a threshold into black so that dense text zones merge into solid blocks that can be isolated. It is a foundational bottom-up/hybrid technique.",
        "X-Y tree and recursive X-Y cut — the X-Y tree page representation was introduced by Nagy and Seth (\"Hierarchical Representation of Optically Scanned Documents,\" ICPR, 1984). The recursive cutting scheme built on it was developed and popularized in Nagy's group into the early 1990s. It is the canonical top-down method: the page is recursively split at wide horizontal or vertical valleys of whitespace. It is simple and efficient but sensitive to page skew.",
        "Docstrum — O'Gorman, \"The Document Spectrum for Page Layout Analysis,\" IEEE Transactions on Pattern Analysis and Machine Intelligence, 1993. A bottom-up method that uses k-nearest-neighbor relationships among connected components, plus distance and angle thresholds, to build up text lines and blocks. It is relatively robust to skew.",
        "Area Voronoi diagram segmentation — Kise, Sato and Iwata, \"Segmentation of Page Images Using the Area Voronoi Diagram,\" Computer Vision and Image Understanding, 1998. A bottom-up method using a generalized (area) Voronoi diagram over connected components, notable for handling non-Manhattan (non-rectangular) layouts and being relatively insensitive to skew and text orientation.",
        "Whitespace and geometric analysis — in the early 2000s, geometric algorithms based on maximal whitespace rectangles were developed for column and region finding."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The field's terminology was consolidated by survey work, notably Mao, Rosenfeld and Kanungo, \"Document structure analysis algorithms: a literature survey\" (Proc. SPIE, 2003), which organized methods by physical-layout representation, logical-structure representation, and evaluation, and codified the top-down / bottom-up / hybrid taxonomy."
    },
    {
      "kind": "paragraph",
      "text": "Systematic comparative evaluation was driven by shared benchmarks and by ICDAR competitions: a newspaper-specific segmentation contest was held in 2001, and the general Page Segmentation Competition series (Antonacopoulos and colleagues, PRImA) ran at successive ICDAR conferences from 2003, with dedicated tracks for historical material added later."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "A typical pipeline positions layout analysis between image preprocessing and text recognition:"
    },
    {
      "kind": "paragraph",
      "text": "1. Preprocessing — binarization (or grayscale handling), noise removal, border cleanup, and skew detection/correction (deskew). Skew correction matters because several classic segmentation methods assume roughly axis-aligned text. 2. Connected-component / feature extraction — grouping black pixels into components (roughly characters or component fragments), or computing pixel-density and whitespace features. 3. Page segmentation — partitioning the page into candidate regions (blocks, columns, lines). 4. Region classification — labeling regions as text, image, table, separator, and so on. 5. Text-line and word segmentation within text regions — producing the line and word images the recognizer will read. 6. Reading-order determination — ordering regions and lines, typically informed by the detected column structure. 7. Handoff to recognition — recognized characters are then reassembled using the layout so that output preserves structure."
    },
    {
      "kind": "paragraph",
      "text": "A concrete illustration of a hybrid modern approach is the layout analysis in the open-source Tesseract engine. Ray Smith's \"Hybrid Page Layout Analysis via Tab-Stop Detection\" (ICDAR 2009) uses bottom-up methods to form an initial data-type hypothesis and to locate the tab-stops used when the page was typeset. The detected tab-stops are then used to deduce the page's column layout, which is applied in a top-down manner to impose structure and reading order on the detected regions."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Approach and techniques"
    },
    {
      "kind": "paragraph",
      "text": "Physical layout-analysis algorithms are traditionally grouped into three families:"
    },
    {
      "kind": "list",
      "items": [
        "Top-down — start from the whole page and recursively split it into smaller regions (for example, recursive X-Y cut). Efficient for regular, rectangular (\"Manhattan\") layouts but brittle on complex or skewed pages.",
        "Bottom-up — start from pixels and connected components and progressively cluster them into characters, words, lines, and blocks (for example, Docstrum, area Voronoi, RLSA-style smearing). More flexible for irregular layouts but can be more computationally involved and sensitive to noise.",
        "Hybrid — combine both, such as a bottom-up hypothesis followed by top-down structuring (Tesseract's tab-stop method)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Additional technique notes:"
    },
    {
      "kind": "list",
      "items": [
        "Region classification distinguishes text from non-text using features such as connected-component size distributions, stroke statistics, and pixel density; tables and separators (rules) are often treated as special cases.",
        "Reading order is commonly derived from column geometry (tab-stops, whitespace columns) and refined by logical rules; recent work also models it as an explicit structural or tree-construction problem (for example, \"Detect-Order-Construct,\" 2024).",
        "Modern deep-learning approaches treat layout analysis as object detection or instance/semantic segmentation over the page image (for example, Faster R-CNN and Mask R-CNN-style models), and increasingly as multimodal problems that combine image, text, and 2-D position (the LayoutLM family and successors). These are trained on large annotated datasets."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Accuracy and quality factors"
    },
    {
      "kind": "paragraph",
      "text": "Layout-analysis quality is governed by both the input image and the document's complexity:"
    },
    {
      "kind": "list",
      "items": [
        "Skew — misalignment degrades line and region segmentation. Tesseract's documentation states plainly that \"the quality of Tesseract's line segmentation reduces significantly if a page is too skewed.\"",
        "Scan quality — low resolution, poor binarization, bleed-through, and speckle noise blur the whitespace and component cues segmentation relies on.",
        "Borders and cropping — text cropped too tightly, or dark scan borders, can cause errors; Tesseract guidance recommends adding a small white border and warns that dark scanned borders can be misrecognized.",
        "Layout complexity — dense multi-column layouts, non-Manhattan layouts, mixed text and graphics, overlapping regions, and marginalia are harder than simple single-column pages.",
        "Tables — widely acknowledged as difficult; Tesseract's own documentation notes it lacks custom table segmentation and suggests alternative handling for tabular data.",
        "Historical and handwritten documents — irregular spacing, ornamentation, non-rectangular blocks, and degradation make segmentation substantially harder, motivating dedicated historical-document competitions and datasets."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Evaluation typically uses region-overlap metrics against ground-truth regions; the ICDAR 2009 competition, for example, defined ground truth with isothetic (horizontal- and vertical-edged) polygons for accurate geometric description of complex regions. Because there is no single universal accuracy figure for layout analysis, results are always relative to a dataset and metric, and general claims of a fixed accuracy percentage should be treated with caution."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Enables correct multi-column and multi-region reading — produces a coherent reading order instead of text read straight across columns.",
        "Separates content types — keeps figures, rules, and tables out of the character recognizer, reducing spurious output.",
        "Improves downstream recognition — feeding cleanly segmented lines and words to the recognizer improves the usefulness of its output.",
        "Preserves structure for reuse — supports structured extraction (fields, tables), article grouping (newspapers), and export formats that retain geometry such as ALTO and hOCR.",
        "Supports accessibility and searchable output — reading order underpins tagged and searchable PDFs and screen-reader-friendly text."
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
        "Error propagation — segmentation mistakes cascade into recognition; a mis-split column or a table read as running text cannot be fully repaired downstream.",
        "Complex layouts remain hard — dense magazines and newspapers, overlapping or non-rectangular regions, and heavy graphics challenge both classic and learned methods.",
        "Tables — structure recognition (rows, columns, cells) is a distinct and still-difficult problem beyond basic region detection.",
        "Skew and noise sensitivity — many classic geometric methods assume clean, deskewed, Manhattan layouts.",
        "Historical and handwritten material — degraded, irregular pages reduce reliability.",
        "Data and generalization for deep-learning methods — deep models need large labeled datasets and can degrade under domain shift or image corruption, which is why robustness benchmarking (for example, RoDLA, 2024) exists to measure it."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to scanning"
    },
    {
      "kind": "paragraph",
      "text": "Layout analysis operates on the image the scanner (or camera) produces, so scanning choices directly shape its success. Adequate resolution, good contrast and binarization, and a flat, well-aligned page preserve the whitespace and component structure that segmentation depends on. Deskew is frequently performed as a preprocessing step because skew degrades line segmentation. Poor scans — low resolution, skew, noise, or dark borders — are a leading cause of layout-analysis errors, which is why capture guidelines in digitization programs emphasize consistent, higher-quality imaging before OCR."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and searchable PDF"
    },
    {
      "kind": "list",
      "items": [
        "Scanned (image-only) PDFs contain no text; OCR — including layout analysis — is required to add a text layer. A searchable PDF places the recognized text as an invisible layer positioned beneath the page image, so the page looks unchanged but is selectable and searchable. Layout analysis determines where that hidden text is placed and, crucially, in what reading order it is stored, which governs how copied or extracted text reads and how assistive technology traverses the page. Tesseract can output searchable PDF directly.",
        "Born-digital PDFs already carry character codes and positions, so character recognition is not needed; however, they often lack explicit logical structure, so layout-analysis techniques are still applied to recover reading order, columns, tables, and logical roles. This is one reason layout datasets such as PubLayNet and DocLayNet are built from PDFs.",
        "Export formats — OCR layout results are commonly serialized to ALTO XML or hOCR, both of which encode region, line, and word geometry so that layout is preserved alongside text."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to workflows"
    },
    {
      "kind": "list",
      "items": [
        "Library and archive digitization — large-scale programs run OCR with layout analysis and store results in standards such as ALTO, often wrapped in METS. ALTO — \"Analyzed Layout and Text Object\" — is an XML schema for the layout and content of digitized text pages, maintained by the Library of Congress with a community editorial board on GitHub.",
        "Newspaper and article segmentation — logical layout analysis groups columns and continuations into articles, which is essential for archival newspaper retrieval.",
        "Intelligent document processing (IDP) — invoices, forms, contracts, and reports rely on layout analysis to locate fields, tables, and key regions before extraction.",
        "Interchange formats — hOCR (an OCR-result representation embedded in HTML/XHTML, associated with Thomas Breuel) and ALTO let layout-aware OCR output flow between engines and downstream tools; Tesseract can emit both."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Layout analysis remains an active and necessary stage rather than a solved or obsolete one:"
    },
    {
      "kind": "list",
      "items": [
        "Deep learning has become dominant, framing the problem as object detection or segmentation over page images, and increasingly as multimodal modeling that fuses image, text, and 2-D layout.",
        "Large benchmark datasets anchor the field. PubLayNet (IBM, 2019) provides over 360,000 page images auto-labeled from PubMed Central across five classes — text, title, list, table, and figure. DocLayNet (IBM, 2022) provides 80,863 human-annotated pages across six document genres and eleven classes, including caption, footnote, formula, list-item, page header and footer, picture, section header, table, text, and title.",
        "Competitions continue, for example the ICDAR 2023 Competition on Robust Layout Segmentation in Corporate Documents.",
        "Robustness and generalization are current concerns (domain shift, image corruption), reflected in dedicated robustness benchmarks."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Even as end-to-end and multimodal large models handle more of the pipeline, understanding page structure — regions, tables, and reading order — remains central to producing usable, structured text."
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
          "period": "1982",
          "text": "Run-Length Smearing Algorithm (RLSA) introduced (Wong, Casey & Wahl, IBM Journal of Research and Development)."
        },
        {
          "period": "1984",
          "text": "X-Y tree page representation introduced (Nagy & Seth); basis for the top-down recursive X-Y cut developed in the following years."
        },
        {
          "period": "1993",
          "text": "Docstrum bottom-up method published (O'Gorman, IEEE TPAMI)."
        },
        {
          "period": "1998",
          "text": "Area Voronoi diagram segmentation published (Kise, Sato & Iwata, Computer Vision and Image Understanding)."
        },
        {
          "period": "2001",
          "text": "ICDAR newspaper segmentation contest held."
        },
        {
          "period": "2003",
          "text": "Literature survey codifying physical/logical analysis and the top-down/bottom-up/hybrid taxonomy (Mao, Rosenfeld & Kanungo); general ICDAR Page Segmentation Competition series begins."
        },
        {
          "period": "2009",
          "text": "\"Hybrid Page Layout Analysis via Tab-Stop Detection\" (Ray Smith, ICDAR); ICDAR 2009 Page Segmentation Competition (Antonacopoulos et al., PRImA)."
        },
        {
          "period": "2019",
          "text": "PubLayNet dataset released (IBM)."
        },
        {
          "period": "2022",
          "text": "DocLayNet dataset released (IBM)."
        },
        {
          "period": "2023",
          "text": "ICDAR 2023 Competition on Robust Layout Segmentation in Corporate Documents."
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
      "slug": "ocr-preprocessing"
    },
    {
      "section": "guides",
      "slug": "optical-character-recognition"
    },
    {
      "section": "workflows",
      "slug": "ocr-for-newspapers"
    },
    {
      "section": "guides",
      "slug": "ocr-engines"
    },
    {
      "section": "guides",
      "slug": "ocr-accuracy"
    },
    {
      "section": "guides",
      "slug": "ocr-limitations"
    }
  ],
  "faqs": [
    {
      "q": "What is OCR layout analysis (page segmentation)?",
      "a": "It is the stage of a document-recognition pipeline that determines a page's structure before characters are recognized. It locates and categorizes regions such as text blocks, headings, columns, tables, and figures, and establishes the order in which regions should be read."
    },
    {
      "q": "What is the difference between physical and logical layout analysis?",
      "a": "Physical (or geometric) layout analysis answers where the regions are and what visual type they are, using cues like whitespace, connected components, and pixel density. Logical layout analysis assigns finer-grained semantic roles (title, heading, body paragraph, caption, footnote), groups regions into logical units, and produces the reading order."
    },
    {
      "q": "Why does reading order matter?",
      "a": "Reading order is the sequence in which text regions and lines should be consumed. On a single-column page it is trivial, but on multi-column newspapers, magazines, or scientific papers it is the difference between coherent extracted text and interleaved nonsense. It also governs how copied text reads and how assistive technology traverses a page."
    },
    {
      "q": "What are the main families of segmentation algorithms?",
      "a": "Top-down methods recursively split the whole page at whitespace valleys (for example, recursive X-Y cut). Bottom-up methods cluster pixels and connected components into characters, words, lines, and blocks (for example, Docstrum, area Voronoi, RLSA). Hybrid methods combine both, such as Tesseract's bottom-up tab-stop hypothesis followed by top-down column structuring."
    },
    {
      "q": "How does scan quality affect layout analysis?",
      "a": "Segmentation relies on whitespace and connected-component cues, so low resolution, skew, noise, bleed-through, and dark scan borders degrade results. Tesseract's documentation notes that line segmentation quality drops significantly on skewed pages, which is why deskew and clean capture are recommended before OCR."
    },
    {
      "q": "How do layout results get stored and reused?",
      "a": "Layout results are commonly serialized to ALTO XML (maintained by the Library of Congress) or hOCR, both of which encode region, line, and word geometry alongside the text. In a searchable PDF, layout analysis determines where hidden text is placed and in what reading order it is stored."
    }
  ],
  "sources": [
    {
      "title": "The Document Spectrum for Page Layout Analysis (O'Gorman, IEEE TPAMI, 1993)",
      "url": "https://dl.acm.org/doi/10.1109/34.244677",
      "publisher": "IEEE / ACM Digital Library"
    },
    {
      "title": "Segmentation of Page Images Using the Area Voronoi Diagram (Kise, Sato & Iwata, 1998)",
      "url": "https://www.sciencedirect.com/science/article/abs/pii/S1077314298906841",
      "publisher": "Computer Vision and Image Understanding (Elsevier)"
    },
    {
      "title": "Document structure analysis algorithms: a literature survey (Mao, Rosenfeld & Kanungo, 2003)",
      "url": "https://www.kanungo.com/pubs/spie03-layoutsurvey.pdf",
      "publisher": "Proc. SPIE 5010, Document Recognition and Retrieval X"
    },
    {
      "title": "Hierarchical Representation of Optically Scanned Documents (Nagy & Seth, 1984)",
      "url": "https://digitalcommons.unl.edu/cseconfwork/292/",
      "publisher": "University of Nebraska-Lincoln DigitalCommons / ICPR"
    },
    {
      "title": "Improving the quality of the output (page segmentation, skew, borders)",
      "url": "https://tesseract-ocr.github.io/tessdoc/ImproveQuality.html",
      "publisher": "Tesseract OCR project documentation"
    },
    {
      "title": "Hybrid Page Layout Analysis via Tab-Stop Detection (Ray Smith, ICDAR 2009)",
      "url": "https://dl.acm.org/doi/10.1109/ICDAR.2009.257",
      "publisher": "IEEE ICDAR / ACM Digital Library"
    },
    {
      "title": "A Survey of Deep Learning Approaches for OCR and Document Understanding (Subramani et al., 2020)",
      "url": "https://arxiv.org/abs/2011.13534",
      "publisher": "arXiv"
    },
    {
      "title": "PubLayNet: largest dataset ever for document layout analysis (IBM, 2019)",
      "url": "https://arxiv.org/abs/1908.07836",
      "publisher": "arXiv / IBM Research"
    },
    {
      "title": "DocLayNet: A Large Human-Annotated Dataset for Document-Layout Analysis (IBM, 2022)",
      "url": "https://arxiv.org/abs/2206.01062",
      "publisher": "arXiv / IBM Research"
    },
    {
      "title": "ICDAR 2023 Competition on Robust Layout Segmentation in Corporate Documents",
      "url": "https://arxiv.org/abs/2305.14962",
      "publisher": "arXiv"
    },
    {
      "title": "ALTO (Analyzed Layout and Text Object) standard",
      "url": "https://www.loc.gov/standards/alto/",
      "publisher": "Library of Congress"
    },
    {
      "title": "ICDAR 2003 Page Segmentation Competition (Antonacopoulos et al.)",
      "url": "https://eprints.soton.ac.uk/263515/1/ICDAR2003_Antonacopoulos.pdf",
      "publisher": "University of Southampton ePrints / PRImA"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "ocr layout analysis",
    "page segmentation",
    "document layout analysis",
    "region classification",
    "reading order",
    "physical layout analysis",
    "logical layout analysis",
    "recursive x-y cut",
    "docstrum",
    "area voronoi diagram",
    "rlsa",
    "tab-stop detection"
  ],
  "cluster": "ocr",
  "difficulty": "advanced",
  "estimatedTime": "9 min read"
};

export default entry;
