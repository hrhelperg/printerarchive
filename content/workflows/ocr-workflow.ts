import type { WorkflowEntry } from "@/lib/content/types";

const entry: WorkflowEntry = {
  "section": "workflows",
  "slug": "ocr-workflow",
  "title": "The OCR Workflow (Scan to Searchable Text)",
  "description": "How OCR turns a scanned page image into machine-readable, searchable text: the capture-to-output pipeline, formats, and standards.",
  "summary": "Optical character recognition (OCR) converts an image of text into machine-encoded characters, turning a page that a computer can only display into one it can search and index. In practice OCR is one stage in a chain that runs from image capture through preprocessing, recognition, verification, and packaging into an output such as plain text or a searchable PDF. This reference describes the recognition core (using the well-documented Tesseract engine as its example), the full capture-to-text pipeline, accuracy and verification considerations, the standard output formats (plain text, hOCR, ALTO XML, searchable/PDF-A), the invisible-text-layer mechanism behind searchable PDFs, and OCR's role in document management. It draws only on primary and authoritative sources — the Tesseract project, Ray Smith's ICDAR 2007 architecture paper, the hOCR specification, OCRmyPDF, the Library of Congress, the Internet Archive, and the ISO 19005 (PDF/A) standard.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Optical Character Recognition (OCR) is the process of converting an image of text — a photograph or scan of a printed or typewritten page — into machine-encoded, editable, and searchable character data. A raster scan by itself is only a grid of pixels: to a computer it is a picture, with no notion of which pixels form the letter \"A.\" OCR is the stage that interprets those pixels as characters and words."
    },
    {
      "kind": "paragraph",
      "text": "In practical document systems OCR is rarely a standalone act; it is one link in an end-to-end chain that begins with image capture and ends with a searchable output such as a text file or a searchable PDF. The Library of Congress frames the problem plainly: scanning produces a page image with no underlying machine-readable text, and OCR is what makes that scanned content full-text searchable."
    },
    {
      "kind": "paragraph",
      "text": "The most widely documented open-source OCR engine, Tesseract, illustrates the division of labor. It does not include a graphical application and expects a reasonably clean image as input, positioning itself as a recognition engine rather than a complete capture-to-output document system. The surrounding pipeline — scanning, preprocessing, verification, and packaging into an output format — is supplied by other tools."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "At the recognition core, a classical OCR engine turns a cleaned page image into text through a sequence of well-defined stages. The canonical description is Ray Smith's \"An Overview of the Tesseract OCR Engine\" (Google Inc., presented at ICDAR 2007), which documents Tesseract's architecture:"
    },
    {
      "kind": "list",
      "items": [
        "Adaptive thresholding / binarization — the input is reduced to a binary (black-and-white) image separating foreground text from background.",
        "Connected-component analysis — the engine finds connected pixel regions and stores their outlines. Smith notes this step was unusual for its era and let Tesseract recognize white-on-black (inverse) text with little extra work.",
        "Organizing outlines into blobs — component outlines are gathered into candidate character shapes (\"blobs\").",
        "Line and word finding — blobs are organized into text lines; lines are analyzed and broken into words, distinguishing fixed-pitch from proportionally spaced text.",
        "Two-pass word recognition — a first pass recognizes each word, and words recognized well enough are passed to an adaptive classifier as training data. A second pass then runs over the page again so that words not recognized confidently the first time can benefit from what the classifier learned lower on the page."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Modern Tesseract (version 4 and later) adds a neural-network engine based on Long Short-Term Memory (LSTM) networks focused on line recognition, while still shipping the legacy pattern-based engine from version 3. The engine mode is selectable (--oem), and page-layout handling is controlled by page segmentation modes (--psm), which tell the engine whether to expect a full page, a single column, a single line, a single word, or sparse text."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The capture-to-text pipeline"
    },
    {
      "kind": "paragraph",
      "text": "A complete workflow chains discrete stages, each of which materially affects the final result:"
    },
    {
      "kind": "list",
      "items": [
        "Capture / scan. A physical document is digitized to a raster image (or a photo is taken). Resolution matters: Tesseract's own guidance states it \"works best on images which have a DPI of at least 300 dpi.\" This stage produces an image only — no text yet.",
        "Preprocess. The image is conditioned to maximize recognition accuracy. Documented steps include binarization/thresholding (Tesseract uses Otsu internally, and version 5.0.0 added Leptonica-based Adaptive Otsu and Sauvola methods), noise removal, deskewing, border handling, and rescaling. Tesseract's documentation warns that the quality of its line segmentation reduces significantly if a page is too skewed, and that some noise cannot be removed during binarization and will depress accuracy.",
        "OCR (recognition). The engine performs the layout-analysis and recognition stages described above, emitting characters and words, usually with position and confidence data.",
        "Verify / correct. OCR output is not guaranteed correct; large digitization programs treat correction as an explicit step. The Internet Archive, for example, records word-level confidence in its hOCR output, which supports downstream review.",
        "Output / package. Recognized text is written to a chosen format — plain text, a structured layout format (hOCR, ALTO), or a searchable PDF that combines the original image with a text layer."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Where OCR sits: it comes after scanning and preprocessing and before (or as part of) the packaging into PDF or other outputs. Scanning creates the picture; OCR interprets it; the searchable PDF is a container that carries both."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Accuracy and verification considerations"
    },
    {
      "kind": "paragraph",
      "text": "OCR accuracy is probabilistic and image-dependent, not absolute. Contributing factors documented by primary sources include scan resolution and image quality, skew, background noise, font and typeface, and page-layout complexity. Because results vary, engines expose confidence metrics: the hOCR format defines an x_confidence property alongside word and character bounding boxes, and Tesseract can emit per-word confidence."
    },
    {
      "kind": "paragraph",
      "text": "Large-scale programs treat OCR output as uncorrected unless a review step is added. In cultural-heritage newspaper digitization, the METS/ALTO combination stores the recognized text along with spatial coordinates for every column, line, and word, which enables both searching and hit-highlighting and provides a structure a human can correct against the original image."
    },
    {
      "kind": "paragraph",
      "text": "This reference does not assert any specific accuracy percentage. Published rates are highly corpus- and condition-dependent, and no single figure is authoritative; the responsible statement is simply that accuracy is variable and driven by input quality."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Formats and output"
    },
    {
      "kind": "paragraph",
      "text": "OCR results can be serialized in several documented formats, each suited to a different purpose:"
    },
    {
      "kind": "list",
      "items": [
        "Plain text (.txt) — recognized characters only, with no layout or coordinates.",
        "hOCR — an open format that embeds OCR results (a page/line/word hierarchy, bbox coordinates, and confidence) inside HTML. It was created by Thomas M. Breuel in 2007 for the OCRopus system and presented at ICDAR 2007; the specification is now maintained in the kba/hocr-spec repository.",
        "ALTO XML (Analyzed Layout and Text Object) — a technical-metadata schema maintained by the Library of Congress that encodes text together with the spatial coordinates of columns, lines, and words; widely used with METS in library and newspaper digitization.",
        "Searchable PDF and \"invisible-text-only\" PDF — a page image with a hidden text layer, discussed below.",
        "TSV and PAGE — additional structured outputs."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Tesseract itself lists its supported outputs as \"plain text, hOCR (HTML), PDF, invisible-text-only PDF, TSV, ALTO and PAGE.\""
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and searchable PDF"
    },
    {
      "kind": "paragraph",
      "text": "A \"searchable PDF\" (sometimes called image-plus-text, or in Adobe Acrobat's terminology Searchable Image) is the most common consumer-facing OCR output. Its defining trick is a text layer positioned over the page image and drawn invisibly."
    },
    {
      "kind": "paragraph",
      "text": "In the PDF imaging model, text can be drawn in different rendering modes. Text rendering mode 3 (\"3 Tr\" in the content stream) renders glyphs with neither fill nor stroke — the text is present and selectable but visually invisible. OCR tools place each recognized word at the coordinates where it appears in the scan using mode 3, so the reader sees the original scanned image while a search, copy, or screen reader operates on the hidden text underneath. When a match is found, the viewer highlights the region occupied by the invisible word, giving the illusion of searching the picture itself."
    },
    {
      "kind": "paragraph",
      "text": "OCRmyPDF, a widely used open-source tool built on Tesseract, describes the mechanism: it rasterizes each page for OCR, then integrates the OCR data back into the original PDF, producing a \"minimally altered\" file that preserves the original image resolution and document structure rather than replacing the page. The image and the text layer coexist; the image is what you see, the text layer is what the machine reads."
    },
    {
      "kind": "paragraph",
      "text": "For long-term archiving, this image-plus-hidden-text pattern is accommodated by PDF/A (ISO 19005), the ISO standard for long-term preservation of electronic documents. PDF/A requires a self-contained file — embedded fonts, color information, and everything needed to reproduce the page identically over time — and for scanned material an OCR text layer can be included as an invisible layer that enables search while preserving the visual layout. PDF/A-1 (ISO 19005-1:2005) is based on PDF 1.4; later parts add features such as transparency (PDF/A-2) and embedding of arbitrary files (PDF/A-3)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to document management"
    },
    {
      "kind": "paragraph",
      "text": "OCR is the enabling technology that turns a repository of scanned images into a searchable, indexable corpus. Once text (or a text layer) exists, downstream document-management functions become possible: full-text indexing and retrieval, keyword search across large collections, text extraction for data capture, and accessibility — a screen reader can voice a text layer it could never derive from a bare image."
    },
    {
      "kind": "paragraph",
      "text": "The Internet Archive's system is a concrete example. After an item is uploaded, automated derivation produces hOCR files carrying text, bounding boxes, and confidence, and OCR-derived text becomes searchable on the site. In library and archival settings, METS packages the ALTO OCR output together with descriptive and structural metadata to drive full-text search interfaces."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Converts otherwise opaque scanned images into searchable, selectable, and extractable text.",
        "Enables full-text search and keyword retrieval across large digitized collections.",
        "Supports accessibility by producing a machine-readable text layer for assistive technology.",
        "Preserves the original appearance when packaged as a searchable PDF — the image is untouched and the text is hidden beneath or over it.",
        "Produces interoperable outputs (hOCR, ALTO, PDF/A) that integrate with preservation and document-management systems and carry coordinate data for highlighting."
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
        "Accuracy is not guaranteed and depends heavily on image quality, resolution, skew, noise, font, and layout complexity.",
        "Output is typically uncorrected unless a verification step is added; errors propagate into search indexes.",
        "Complex or multi-column layouts, tables, degraded historical type, and handwriting are harder and may require specific engine modes or dedicated systems. Page-segmentation modes address layout, not all content types.",
        "A recognition engine such as Tesseract is not a full capture-to-output system; it depends on external preprocessing and packaging.",
        "Language and script coverage vary and require the appropriate trained models."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Practical considerations"
    },
    {
      "kind": "list",
      "items": [
        "Scan quality first. Because accuracy tracks input quality, capturing at adequate resolution (Tesseract recommends at least 300 DPI) and good contrast pays off more than post-hoc fixes.",
        "Preprocess deliberately. Deskew, denoise, binarize appropriately, and handle borders; poor deskewing degrades line segmentation and therefore recognition.",
        "Choose the right segmentation mode for the material (full page versus single column, line, or word) rather than relying on defaults for atypical inputs.",
        "Select an output format to match the goal — searchable PDF or PDF/A for distribution and archiving; hOCR or ALTO when coordinate-level structure and downstream processing are needed.",
        "Preserve the original image. Tools that integrate the text layer without re-rasterizing the page (such as OCRmyPDF's minimally altered output) avoid quality loss.",
        "Plan for verification where accuracy is critical, and retain confidence data to prioritize review."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "OCR remains foundational to digitization, search, and accessibility. The transition in Tesseract from pattern-matching (version 3 and earlier) to LSTM neural networks (version 4 and later) reflects the broader shift toward deep-learning recognition. Standards developed for OCR workflows — hOCR (2007), ALTO (Library of Congress), and PDF/A (ISO 19005) — continue to underpin large digitization programs at institutions such as the Library of Congress and the Internet Archive. The searchable-PDF pattern of an invisible text layer over an image is still the dominant way scanned documents are made searchable in everyday office and archival use."
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
          "period": "1985–1994",
          "text": "Tesseract is developed at Hewlett-Packard (Bristol, UK, and Greeley, Colorado), according to the Tesseract README. Ray Smith's overview dates the start to 1984; the source variance is noted."
        },
        {
          "period": "1996",
          "text": "Tesseract is ported to Windows."
        },
        {
          "period": "2005",
          "text": "Hewlett-Packard releases Tesseract as open source."
        },
        {
          "period": "2005",
          "text": "ISO 19005-1 (PDF/A-1), based on PDF 1.4, is published."
        },
        {
          "period": "2006–2017",
          "text": "Tesseract development is led by Google."
        },
        {
          "period": "2007",
          "text": "The hOCR format is introduced by Thomas M. Breuel (for OCRopus) and presented at ICDAR 2007, the same conference that features Ray Smith's \"An Overview of the Tesseract OCR Engine.\""
        },
        {
          "period": "~2018",
          "text": "Tesseract 4 ships its neural-network (LSTM) engine focused on line recognition, alongside the legacy engine; the LSTM engine had been in development from around 2017."
        },
        {
          "period": "Version 5.0.0",
          "text": "Tesseract adds Leptonica-based Adaptive Otsu and Sauvola binarization methods."
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
      "section": "workflows",
      "slug": "scan-to-searchable-pdf"
    },
    {
      "section": "guides",
      "slug": "optical-character-recognition"
    },
    {
      "section": "guides",
      "slug": "ocr-preprocessing"
    },
    {
      "section": "tools",
      "slug": "what-is-pdf"
    },
    {
      "section": "guides",
      "slug": "document-scanners"
    },
    {
      "section": "guides",
      "slug": "ocr-layout-analysis"
    }
  ],
  "sources": [
    {
      "title": "An Overview of the Tesseract OCR Engine (Ray Smith, Google / ICDAR 2007)",
      "url": "https://research.google/pubs/an-overview-of-the-tesseract-ocr-engine/"
    },
    {
      "title": "Tesseract Open Source OCR Engine — README",
      "url": "https://github.com/tesseract-ocr/tesseract"
    },
    {
      "title": "Improving the quality of the output — Tesseract documentation",
      "url": "https://tesseract-ocr.github.io/tessdoc/ImproveQuality.html"
    },
    {
      "title": "OCRmyPDF documentation — Introduction",
      "url": "https://ocrmypdf.readthedocs.io/en/latest/introduction.html"
    },
    {
      "title": "hOCR specification repository (kba/hocr-spec)",
      "url": "https://github.com/kba/hocr-spec"
    },
    {
      "title": "OCR at the Internet Archive with Tesseract and hOCR",
      "url": "https://archive.org/developers/ocr.html"
    },
    {
      "title": "ALTO: Technical Metadata for Layout and Text Objects (Library of Congress)",
      "url": "https://www.loc.gov/standards/alto/"
    },
    {
      "title": "Making Scanned Content Accessible Using Full-text Search and OCR (Library of Congress, The Signal)",
      "url": "https://blogs.loc.gov/thesignal/2014/08/making-scanned-content-accessible-using-full-text-search-and-ocr/"
    },
    {
      "title": "ISO 19005-1:2005 (PDF/A-1)",
      "url": "https://www.iso.org/standard/38920.html"
    },
    {
      "title": "ISO 19005 (PDF/A) family — PDF Association",
      "url": "https://pdfa.org/resource/iso-19005-pdfa/"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "ocr workflow",
    "optical character recognition",
    "scan to searchable text",
    "searchable pdf",
    "tesseract",
    "hocr",
    "alto xml",
    "pdf/a",
    "ocr preprocessing",
    "invisible text layer",
    "binarization",
    "ocr pipeline"
  ],
  "cluster": "ocr-workflows",
  "modernTools": [
    "pdf-editor"
  ],
  "goal": "The end-to-end process that converts a scanned page image into machine-readable, searchable text.",
  "toolsUsed": [
    "A scanner or multifunction device",
    "OCR-capable software"
  ]
};

export default entry;
