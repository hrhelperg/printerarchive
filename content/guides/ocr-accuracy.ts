import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "ocr-accuracy",
  "title": "OCR Accuracy and Quality",
  "description": "How OCR accuracy is measured (CER/WER) and what governs it: resolution, binarization, skew, noise, language models, and layout.",
  "summary": "Optical character recognition (OCR) converts images of text into machine-encoded, searchable, editable character data. Its accuracy is not a fixed property of an engine but the outcome of an interaction between the source document, the imaging pipeline that captured it, the pre-processing applied, and the recognition model and its linguistic resources. The same engine can produce clean text from a crisp 300-DPI printout and near-unusable output from a faded, skewed scan of the same content, which is why OCR quality is best understood as a chain whose weakest link — often image quality rather than the recognition algorithm — sets the ceiling on results. Two ideas recur throughout: measurable accuracy is conventionally expressed as error rates computed against a human-verified ground truth, most commonly Character Error Rate (CER) and Word Error Rate (WER); and most practical levers for improving accuracy sit upstream of recognition, in resolution, contrast, binarization, deskewing, and noise removal. This page reviews the history of OCR from electromechanical template-matching devices to neural sequence models, the stages of a recognition pipeline, the factors that govern accuracy as documented by the Tesseract project and evaluation literature, and OCR's relationships to scanning, searchable PDF, and document workflows.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "OCR's lineage runs from electromechanical template-matching devices to statistical and, later, neural recognition."
    },
    {
      "kind": "list",
      "items": [
        "Emanuel Goldberg developed, in the 1910s–1920s, a machine that read characters and converted them into telegraph code, and was granted US Patent 1,838,389 (published December 29, 1931; filed 1928) for a \"Statistical Machine\" that used optical code recognition to search microfilm; IBM acquired a license.",
        "Gustav Tauschek patented a \"Reading Machine\" in Germany in 1929, using a template-matching (matrix-matching) approach with an optical/mechanical mechanism (per secondary histories).",
        "David Shepard built \"Gismo\" around 1951, a device able to recognize characters produced by a standard typewriter (per secondary histories; no primary source located, so this date is reported rather than established).",
        "The OCR-A typeface was issued in 1966 and first implemented around 1968; it is standardized as ISO 1073-1:1976. OCR-B was developed in 1968 by Adrian Frutiger and standardized as ISO 1073-2:1976; both were designed to make machine reading reliable.",
        "Ray Kurzweil founded Kurzweil Computer Products, Inc. in 1974 and developed an omni-font OCR system; the Kurzweil Reading Machine for blind users was unveiled on January 13, 1976; commercial OCR software sales began in 1978, with LexisNexis an early customer.",
        "The Tesseract engine was developed at Hewlett-Packard labs (Bristol, England, and Greeley, Colorado) between 1985 and 1994; released as open source in 2005 by HP and the University of Nevada, Las Vegas; and sponsored by Google beginning in 2006. Version 4 added an LSTM (recurrent neural network) recognition engine; version 5 was released in 2021.",
        "OCRopus, an open-source OCR system associated with Tom Breuel, emerged around 2009 (per secondary histories; treat the date and attribution as lower-confidence)."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "A conventional OCR pipeline proceeds in stages:"
    },
    {
      "kind": "paragraph",
      "text": "1. Image acquisition — a page image from a scanner or camera. 2. Pre-processing — operations that prepare the image for recognition, including de-skewing, despeckling (noise removal), binarization (conversion to black-and-white), and contrast normalization. 3. Layout / page analysis — detecting text regions, columns, lines, and reading order, and separating text from images and tables. 4. Segmentation — isolating lines, words, and, in classical pipelines, individual characters or glyphs. 5. Character / text recognition — mapping image regions to characters. 6. Post-processing — applying dictionaries, language models, and correction rules, and emitting output such as plain text, hOCR or ALTO XML, or a PDF text layer."
    },
    {
      "kind": "paragraph",
      "text": "Each stage constrains the next: layout analysis that misreads reading order, or segmentation that merges adjacent glyphs, will limit accuracy no matter how strong the recognizer."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Approach and techniques"
    },
    {
      "kind": "paragraph",
      "text": "Two core families of recognition algorithms characterize classical OCR:"
    },
    {
      "kind": "list",
      "items": [
        "Matrix matching (also called pattern or template matching): comparing the character image pixel-by-pixel against stored glyph templates. It works best when the input font and scale are known and consistent.",
        "Feature extraction: decomposing glyphs into higher-level features such as lines, closed loops, line direction, and intersections, then classifying based on those features. This generalizes better across fonts (\"omni-font\" recognition)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Modern engines have largely moved to trained neural models. Tesseract's version 4 introduced an LSTM-based recognizer that operates on text lines rather than pre-segmented characters. Line-based recurrent and CRNN approaches are the subject of substantial evaluation literature. The field continues to evolve toward transformer- and vision-language-model-based recognizers; the specific accuracy characteristics of those newer systems are beyond the scope of the sources cited here and are not asserted."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Accuracy and quality factors"
    },
    {
      "kind": "paragraph",
      "text": "The Tesseract project's guidance on improving output quality is a useful reference because it enumerates the levers a practitioner actually controls. Note that thresholds it gives are engine guidance, not standards or guarantees."
    },
    {
      "kind": "list",
      "items": [
        "Resolution / DPI. Tesseract's documentation states it works best on images that have a DPI of at least 300. Research on low-resolution input notes that OCR is generally tuned for roughly 300-DPI printed text, that images down to about 150 DPI can be upscaled (for example via bicubic interpolation) toward 300 DPI before recognition, and that inputs below about 150 DPI pose substantially greater difficulty.",
        "Binarization / thresholding. Converting to black-and-white using algorithms such as Otsu, adaptive Otsu, or Sauvola helps handle uneven backgrounds. Tesseract's documentation also notes that its neural models can perform better on grayscale input than on poorly binarized input — aggressive or wrong binarization can hurt. One pre-processing study reported OCR accuracy on challenging documents improving from 70.6% to 80.7% with better binarization; this is a study-specific result, not a universal figure.",
        "Image quality / noise. Random brightness and color variation reduces readability; despeckling and denoising (grayscale conversion, dilation/erosion, median blur) are common remedies.",
        "Skew. The quality of Tesseract's line segmentation reduces significantly if a page is too skewed, so deskewing to straighten lines is important.",
        "Character thickness (dilation / erosion). Adjusting stroke weight helps with bold, thin, or ink-bled type, and is noted as particularly useful for heavy ink bleeding from historical documents.",
        "Borders and cropping. Tightly cropped text can lose accuracy; the docs recommend adding a small border (around 10 px) and removing large dark scan borders that may be misread as characters.",
        "Fonts. Recognition is easier for standard, well-formed type; purpose-built fonts (OCR-A, OCR-B) were designed precisely to maximize machine legibility.",
        "Language models and dictionaries. Selecting the correct language or script model matters. Dictionaries and word lists improve results on natural-language text but can harm recognition of codes, IDs, or non-lexical strings; Tesseract exposes controls to disable dictionaries (load_system_dawg, load_freq_dawg) and to restrict output to a character set (tessedit_char_whitelist).",
        "Page segmentation mode. Choosing the right layout assumption (Tesseract's --psm) affects how the page is parsed; tables in particular are noted as difficult for standard layout analysis."
      ]
    },
    {
      "kind": "heading",
      "level": 3,
      "text": "How accuracy is measured"
    },
    {
      "kind": "paragraph",
      "text": "OCR quality is quantified against a human-verified ground-truth transcription, most commonly using edit-distance-based error rates derived from the Levenshtein distance after aligning the OCR output to the ground truth:"
    },
    {
      "kind": "list",
      "items": [
        "Character Error Rate (CER) = (S + I + D) / N, where S, I, and D are the counts of character substitutions, insertions, and deletions needed to turn the OCR output into the reference, and N is the total number of characters in the reference.",
        "Word Error Rate (WER) = (S + I + D) / W, computed at the word level, where W is the number of reference words."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Character-level and word-level accuracy differ: a single wrong character can invalidate an entire word, so WER is typically higher (worse) than CER for the same output. The evaluation literature also warns of methodological pitfalls — edit-distance metrics treat all errors equally (a mid-word substitution counts the same as a structural line break), Unicode normalization choices vary between tools, and some reported figures are inflated by restricting scoring to a subset of characters (for example only a–z, A–Z, 0–9) while ignoring punctuation, special characters, and line breaks. Blanket \"accuracy %\" claims should therefore be read with their evaluation conditions attached."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Converts static page images into searchable, indexable, editable text, enabling full-text search and retrieval across large document collections.",
        "Supports accessibility, including reading machines for blind and low-vision users — the original motivation for Kurzweil's system.",
        "Enables downstream automation such as data extraction, classification, and integration with databases; historically, LexisNexis loaded legal and news documents using early OCR.",
        "Preserves original page appearance while adding machine-readable text, as in searchable PDF and archival XML formats such as ALTO."
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
        "Accuracy is bounded by input quality; low resolution, poor contrast, skew, noise, bleed-through, and unusual layouts degrade results.",
        "Tables, multi-column layouts, and complex or mixed layouts remain challenging for standard segmentation.",
        "Historical documents, degraded print, and non-standard or low-resource scripts are harder. One study found character-level accuracy on 19th- and early-20th-century text ranging from 81% to 99% across commercial systems — a wide spread that illustrates how material-dependent results are, and not a general accuracy rate.",
        "Dictionaries and language models can introduce errors on non-lexical content (codes, part numbers) if not disabled.",
        "Evaluation is not standardized in practice; differing normalization and scoring conventions make cross-study accuracy comparisons unreliable."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to scanning"
    },
    {
      "kind": "paragraph",
      "text": "Scanning is the upstream stage that most determines OCR outcomes. The scan's resolution (DPI), bit depth (bitonal vs. grayscale vs. color), contrast, and geometric fidelity (skew, warping) become fixed inputs to OCR; errors introduced at capture generally cannot be fully recovered later. This is why the Tesseract project frames its quality guidance largely in terms of the captured image — 300 or more DPI, deskewed, denoised, and appropriately binarized. In digitization programs, capture standards are set precisely so that OCR and long-term preservation goals can be met from the source."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and searchable PDF"
    },
    {
      "kind": "paragraph",
      "text": "A \"searchable PDF\" is a page-image PDF with an added, usually invisible, text layer produced by OCR: the recognized characters are positioned over the corresponding image regions so the page looks unchanged but can be searched, selected, and copied. Tools such as OCRmyPDF render a text-only layer and sandwich it onto the original (or a re-rasterized) page."
    },
    {
      "kind": "paragraph",
      "text": "For preservation, output is often produced as PDF/A — an ISO-standardized subset of PDF designed for archiving, which requires that all fonts and resources needed to render the file be embedded. Per the OCRmyPDF documentation, some jurisdictions such as certain US courts mandate PDF/A for scanned documents; this is reported here as documented by that source rather than asserted as legal fact. OCR output can also be stored as structured XML (hOCR, ALTO) that records recognized text plus coordinates, which is what makes reliable text-over-image overlays and word-level search possible."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to workflows"
    },
    {
      "kind": "paragraph",
      "text": "OCR is rarely an end in itself; it is a stage in document workflows: capture → pre-process → OCR → post-process/validate → store/index. Post-processing may include dictionary or language-model correction and, in many production settings, human review or automated post-correction of high-error material, which the OCR evaluation and post-correction literature treats as a distinct step. Because accuracy is measurable via CER and WER against ground truth, workflows can set quality thresholds, route low-confidence pages for re-scan or manual keying, and monitor drift over time."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "OCR remains foundational to digitization, search, accessibility, and document automation. The technical trajectory has moved from template matching to feature-based classifiers to trained neural sequence models, such as Tesseract's LSTM engine in version 4, and the surrounding literature continues to refine both recognition and evaluation methodology. The core practical lesson has not changed: recognition quality is dominated by input quality and by matching the engine's language and layout assumptions to the document. Newer vision-language and transformer-based recognizers are an active research area; their comparative accuracy is documented in emerging literature but is not asserted here beyond what the cited sources support."
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
          "period": "1929",
          "text": "Gustav Tauschek patents a \"Reading Machine\" in Germany using template matching (secondary histories)."
        },
        {
          "period": "1931",
          "text": "Emanuel Goldberg is granted US Patent 1,838,389 for a \"Statistical Machine\" using optical code recognition; IBM later acquires a license."
        },
        {
          "period": "c. 1951",
          "text": "David Shepard builds \"Gismo,\" recognizing standard typewriter characters (secondary histories)."
        },
        {
          "period": "1966",
          "text": "OCR-A typeface issued (first implemented c. 1968); later standardized as ISO 1073-1:1976."
        },
        {
          "period": "1968",
          "text": "OCR-B developed by Adrian Frutiger; later standardized as ISO 1073-2:1976."
        },
        {
          "period": "1974",
          "text": "Ray Kurzweil founds Kurzweil Computer Products and develops omni-font OCR."
        },
        {
          "period": "January 13, 1976",
          "text": "Kurzweil Reading Machine for blind users unveiled."
        },
        {
          "period": "1978",
          "text": "Commercial OCR software sales begin; LexisNexis an early customer."
        },
        {
          "period": "1985–1994",
          "text": "Tesseract developed at Hewlett-Packard labs (Bristol; Greeley, Colorado)."
        },
        {
          "period": "2005",
          "text": "Tesseract released as open source by HP and UNLV."
        },
        {
          "period": "2006",
          "text": "Google begins sponsoring Tesseract development."
        },
        {
          "period": "c. 2009",
          "text": "OCRopus emerges as an open-source OCR system (secondary histories; lower-confidence)."
        },
        {
          "period": "2021",
          "text": "Tesseract version 5 released; version 4 had introduced the LSTM neural recognition engine."
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
      "section": "guides",
      "slug": "ocr-limitations"
    },
    {
      "section": "guides",
      "slug": "ocr-engines"
    },
    {
      "section": "guides",
      "slug": "ocr-layout-analysis"
    },
    {
      "section": "guides",
      "slug": "history-of-ocr"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between CER and WER?",
      "a": "Character Error Rate (CER) counts the character substitutions, insertions, and deletions needed to turn OCR output into a human-verified reference, divided by the total characters in the reference. Word Error Rate (WER) computes the same at the word level. Because one wrong character can invalidate a whole word, WER is typically higher (worse) than CER for the same output."
    },
    {
      "q": "What resolution is recommended for OCR?",
      "a": "The Tesseract project's documentation states it works best on images with a DPI of at least 300. Research on low-resolution input notes OCR is generally tuned for about 300-DPI printed text; images down to roughly 150 DPI can be upscaled toward 300 DPI, while inputs below about 150 DPI are substantially harder. These are engine and study guidance, not standards or guarantees."
    },
    {
      "q": "Why is one OCR accuracy percentage not comparable to another?",
      "a": "Evaluation is not standardized in practice. Edit-distance metrics treat all errors equally, Unicode normalization choices vary between tools, and some reported figures are inflated by scoring only a subset of characters (for example a–z, A–Z, 0–9) while ignoring punctuation and line breaks. Accuracy figures should always be read with their evaluation conditions attached."
    },
    {
      "q": "Can dictionaries reduce OCR accuracy?",
      "a": "Yes. Dictionaries and language models improve results on natural-language text but can harm recognition of codes, IDs, or other non-lexical strings. Tesseract exposes controls to disable its dictionaries (load_system_dawg, load_freq_dawg) and to restrict output to a defined character set (tessedit_char_whitelist)."
    },
    {
      "q": "What makes a PDF searchable?",
      "a": "A searchable PDF is a page-image PDF with an added, usually invisible, text layer produced by OCR. The recognized characters are positioned over the matching image regions so the page looks unchanged but can be searched, selected, and copied. For preservation, output is often produced as PDF/A, an ISO-standardized archival subset of PDF that requires needed fonts and resources to be embedded."
    }
  ],
  "sources": [
    {
      "title": "Improving the quality of the output",
      "url": "https://tesseract-ocr.github.io/tessdoc/ImproveQuality.html",
      "publisher": "Tesseract OCR project"
    },
    {
      "title": "Optical character recognition",
      "url": "https://en.wikipedia.org/wiki/Optical_character_recognition",
      "publisher": "Wikipedia"
    },
    {
      "title": "Tesseract (software)",
      "url": "https://en.wikipedia.org/wiki/Tesseract_(software)",
      "publisher": "Wikipedia"
    },
    {
      "title": "OCR-A",
      "url": "https://en.wikipedia.org/wiki/OCR-A",
      "publisher": "Wikipedia"
    },
    {
      "title": "OCR-B",
      "url": "https://en.wikipedia.org/wiki/OCR-B",
      "publisher": "Wikipedia"
    },
    {
      "title": "Ray Kurzweil",
      "url": "https://en.wikipedia.org/wiki/Ray_Kurzweil",
      "publisher": "Wikipedia"
    },
    {
      "title": "US Patent 1,838,389 — Statistical Machine (Goldberg)",
      "url": "https://patents.google.com/patent/US1838389A/en",
      "publisher": "Google Patents / USPTO"
    },
    {
      "title": "A Survey of OCR Evaluation Methods and Metrics and the Invisibility of Historical Documents",
      "url": "https://arxiv.org/abs/2603.25761",
      "publisher": "arXiv preprint"
    },
    {
      "title": "The Character Error Vector: Decomposable errors for page-level OCR evaluation",
      "url": "https://arxiv.org/abs/2604.06160",
      "publisher": "arXiv preprint"
    },
    {
      "title": "OCR accuracy improvement on document images through a novel pre-processing approach",
      "url": "https://arxiv.org/abs/1509.03456",
      "publisher": "arXiv preprint"
    },
    {
      "title": "On the Accuracy of CRNNs for Line-Based OCR: A Multi-Parameter Evaluation",
      "url": "https://arxiv.org/abs/2008.02777",
      "publisher": "arXiv preprint"
    },
    {
      "title": "From the Paft to the Fiiture: NMT and Word Embeddings for OCR Post-Correction",
      "url": "https://arxiv.org/abs/1910.05535",
      "publisher": "arXiv preprint"
    },
    {
      "title": "OCRmyPDF — Introduction",
      "url": "https://ocrmypdf.readthedocs.io/en/latest/introduction.html",
      "publisher": "OCRmyPDF project"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "ocr accuracy",
    "character error rate",
    "word error rate",
    "cer",
    "wer",
    "ocr quality",
    "binarization",
    "dpi",
    "tesseract",
    "ground truth",
    "ocr evaluation",
    "deskew"
  ],
  "cluster": "ocr",
  "difficulty": "intermediate",
  "estimatedTime": "9 min read"
};

export default entry;
