import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "ocr-limitations",
  "title": "OCR Limitations",
  "description": "How and why OCR accuracy degrades on degraded, handwritten, dense, or complex-layout documents, and why human verification remains necessary.",
  "summary": "Optical character recognition converts images of text into machine-readable characters, but it is not error-free. Accuracy degrades predictably when input departs from clean, high-resolution printed text in a well-supported script: degraded or historical originals, small or dense type, complex multi-column layouts, handwriting, unusual fonts, tables, and non-Latin scripts all reduce recognition quality. Authoritative digitization programs treat OCR output as a machine estimate rather than a certified transcription. The U.S. Library of Congress states that OCR \"is not 100 percent accurate,\" publishes its historical-newspaper OCR uncorrected, and notes it has no defined accuracy standard because results \"can vary so widely.\" This page surveys the documented failure modes, the metrics used to measure error, and why human verification is required for consequential use.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Optical Character Recognition (OCR) is the automated conversion of images of text — scanned pages, photographs, or rendered document images — into machine-encoded, searchable, editable character data. Modern OCR is highly capable on clean, high-resolution printed material in well-supported scripts, but it is not error-free, and its accuracy degrades in predictable ways when input conditions depart from that ideal."
    },
    {
      "kind": "paragraph",
      "text": "A recurring theme across authoritative digitization programs is that OCR output is a machine estimate of the text, not a certified transcription. The U.S. Library of Congress states plainly for its Chronicling America historical-newspaper collection that OCR \"is not 100 percent accurate,\" and provides the OCR text uncorrected. There is no universal accuracy guarantee: the Library notes it \"does not have a defined standard for how accurate the OCR output must be because it can vary so widely\" depending on the source material."
    },
    {
      "kind": "paragraph",
      "text": "This page focuses on the limitations of OCR: the document and imaging conditions under which recognition quality falls, why human verification remains necessary, and what constitutes a realistic expectation of results."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "OCR has roots in early 20th-century reading-machine devices; the Austrian engineer Gustav Tauschek is commonly credited with a \"Reading Machine\" patent around 1929, though exact dates vary between secondary sources and no primary confirmation is cited here. Mid-century commercial and postal systems drove the field forward, and special machine-readable typefaces such as OCR-A and OCR-B were designed to make recognition tractable before general typeset text could be handled reliably. General-purpose \"omni-font\" recognition — reading arbitrary typefaces rather than constrained fonts — developed later."
    },
    {
      "kind": "paragraph",
      "text": "The widely used open-source engine Tesseract was originally developed at Hewlett-Packard between roughly 1985 and 1994, released as open source by HP in 2005, and has been sponsored by Google since 2006, with Ray Smith as lead developer. Tesseract 4.0.0 (October 2018) introduced an LSTM neural-network recognition engine, replacing the older pattern-based approach."
    },
    {
      "kind": "paragraph",
      "text": "The history matters to limitations because it explains a persistent gap: constrained printed text has been handled to a high degree for decades, while the harder cases — arbitrary handwriting, degraded historical material, complex layouts — remain active research problems."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "At a high level, an OCR pipeline performs four stages: (1) image acquisition and pre-processing (deskew, denoise, binarization or grayscale normalization, scaling to a working resolution); (2) layout and page analysis, segmenting the page into regions, lines, words, and characters; (3) character and word recognition (classically template or feature matching; in modern engines, neural sequence models such as LSTM-based recognizers); and (4) optional post-processing (dictionary or language-model correction, confidence scoring, output formatting)."
    },
    {
      "kind": "paragraph",
      "text": "Each stage is a potential failure point. If segmentation misreads a two-column page as one, downstream recognition inherits scrambled reading order regardless of how well individual characters are recognized. The Library of Congress organizes its Chronicling America OCR text in reading order by column, precisely because column handling is a known difficulty area."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Approach and techniques"
    },
    {
      "kind": "paragraph",
      "text": "Several techniques bear directly on where OCR succeeds or fails:"
    },
    {
      "kind": "list",
      "items": [
        "Pre-processing. Tesseract's own guidance states it works best on images with a DPI of at least 300, and that line segmentation \"reduces significantly if a page is too skewed,\" degrading OCR quality.",
        "Binarization versus grayscale. Converting to pure black-and-white can be suboptimal, particularly when a page background has uneven darkness. Tesseract 5.x added adaptive methods (Otsu and Sauvola). Recognition models are often trained to a specific binarization context and can degrade if a mismatched algorithm is applied.",
        "Resolution rescue. For material below the recommended resolution (down toward ~150 dpi), upscaling to 300 dpi by interpolation before recognition can help preserve results; below that, accuracy falls.",
        "Post-correction. Language models and dictionaries can catch some errors, but recent research on LLM-based post-correction of historical documents reports \"no free lunches\": automated correction does not reliably fix degraded OCR and can introduce new errors."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Accuracy and quality factors"
    },
    {
      "kind": "paragraph",
      "text": "Accuracy is not a fixed property of \"OCR\"; it is a function of input quality and script. Reported figures in the literature illustrate a range rather than any guaranteed number, and single percentages should be read as experiment-specific."
    },
    {
      "kind": "paragraph",
      "text": "For example, one study on election-ballot tallies (the iOCR work) reported Tesseract line accuracy falling as image quality dropped — roughly 60 of 5,000 lines wrong at 50% quality and about 420 of 5,000 at 20% quality. These are line-accuracy figures on a specific ballot-tally task, not universal character-accuracy benchmarks. Handwriting recognition (HTR) is materially harder than printed OCR, with accuracy commonly falling below printed-text OCR because of handwriting variability."
    },
    {
      "kind": "paragraph",
      "text": "Standard evaluation uses Character Error Rate (CER) and Word Error Rate (WER), both derived from Levenshtein edit distance against a ground-truth transcription. A CER of 5% means roughly one character in twenty needs correction. A key limitation of these metrics is that they weight all errors equally and do not penalize layout errors — for example, a line break that destroys paragraph or column structure — so a \"good\" CER can coexist with badly scrambled reading order."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "paragraph",
      "text": "The limitations of OCR are meaningful only against real strengths. OCR enables full-text search across otherwise image-only corpora, supports accessibility through screen readers, and enables text extraction and data capture at scale. It makes large archives — including the many millions of historic newspaper pages digitized and OCR'd in programs such as the Library of Congress's Chronicling America — searchable in ways manual transcription could never achieve at that volume. The point of cataloguing limitations is not that OCR is unreliable in general, but that its reliability is conditional, and the conditions must be understood."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Limitations"
    },
    {
      "kind": "paragraph",
      "text": "OCR performs poorly, or requires verification, in the following well-documented situations:"
    },
    {
      "kind": "list",
      "items": [
        "Degraded and historical documents. The Library of Congress attributes OCR errors on historical newspapers to originals that are damaged or suffer from deterioration, poor-quality microfilming that yields subpar images, faded ink, bleed-through, stains, and \"extraneous markings on the page.\" These physical defects exist before recognition begins and cannot be recovered by the algorithm.",
        "Small type and dense text. Historical newspapers often exhibit \"tight columns and tiny text sizes,\" which the Library cites as a direct complication. Very small fonts fall below the effective resolution the recognizer needs.",
        "Complex layouts. Multi-column pages, mixed text and image regions, sidebars, and irregular flows challenge page segmentation; errors here corrupt reading order independent of character-level quality.",
        "Handwriting. Handwriting recognition is a distinct, harder problem, driven by the high variability of handwriting — between writers and within a single writer — plus slant, variable spacing, historical conventions, and scarce labeled training data. Models also generalize poorly, showing significant accuracy drops on styles outside their training distribution.",
        "Unusual fonts and character weights. The Library notes \"unusual text styles\" as an error source, and Tesseract documentation notes that very bold or very thin typefaces and heavy ink bleeding reduce accuracy. Decorative, blackletter, and non-standard typefaces are harder than standard body text.",
        "Tables and structured data. Table recognition is a known limitation; Tesseract's own guidance notes difficulty recognizing text from tables without custom segmentation or layout analysis, and preserving row and column structure (not just cell text) is not something a basic engine reliably does.",
        "Multi-language and non-Latin scripts. Recognition quality varies substantially by language and script; low-resource languages and scripts with limited training data perform worse, mixed-language pages add difficulty, and language configuration affects results.",
        "Imaging defects. Skew and rotation, uneven lighting, noise that survives binarization, dark scan borders that \"can be erroneously picked up as extra characters,\" missing or excessive margins, inverted (light-on-dark) text, and low DPI all degrade output per Tesseract's quality guidance."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Why verification matters"
    },
    {
      "kind": "paragraph",
      "text": "Because OCR is a statistical estimate whose error rate varies widely with unpredictable inputs, and because there is no defined accuracy standard that holds across materials, downstream users cannot assume the extracted text is faithful. Large programs deliberately publish OCR text uncorrected and advise researchers to compensate — the Library of Congress recommends searching for shorter words and phrases to maximize recall against OCR errors."
    },
    {
      "kind": "paragraph",
      "text": "For any use where errors carry consequence, human verification against the source image is necessary. Automated post-correction helps but does not eliminate the need, and can itself introduce errors."
    },
    {
      "kind": "paragraph",
      "text": "Realistic expectations follow from this. On clean, high-resolution (at least 300 dpi), well-segmented printed text in a well-supported language, expect high but not perfect accuracy — plan for spot-checking rather than blind trust. On degraded, historical, handwritten, densely laid-out, small-font, or non-standard-script material, expect materially lower accuracy and budget for correction. Treat any single accuracy percentage as context-dependent; published figures are experiment-specific, and there is no universal OCR accuracy number."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to scanning"
    },
    {
      "kind": "paragraph",
      "text": "OCR accuracy is largely determined upstream, at capture. Resolution (at least 300 dpi recommended), even lighting, correct exposure, flat and deskewed pages, and clean margins directly govern recognition quality. For historical material the chain is longer still: the Library of Congress notes that microfilm quality and the condition of the original before microfilming constrain what OCR can achieve."
    },
    {
      "kind": "paragraph",
      "text": "In short, OCR cannot recover information the scan did not capture. Poor scanning is a leading, non-recoverable cause of poor OCR."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and searchable PDF"
    },
    {
      "kind": "paragraph",
      "text": "OCR is what turns an image-only PDF — for example, a scanned document — into a searchable PDF by adding a hidden or underlying text layer beneath the page image. A critical and often-misunderstood limitation follows: the visible page still looks perfect, but the searchable text layer carries whatever OCR errors occurred."
    },
    {
      "kind": "paragraph",
      "text": "A searchable PDF can therefore fail to find words that are plainly visible on the page, because the underlying OCR misread them. The visual fidelity of the PDF is no indicator of the accuracy of its text layer."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to workflows"
    },
    {
      "kind": "paragraph",
      "text": "In document-processing and digitization workflows, OCR is typically one stage feeding indexing, search, data extraction, or archival. Its limitations propagate: errors in the OCR stage surface as missed search hits, wrong extracted field values, or corrupted downstream analysis."
    },
    {
      "kind": "paragraph",
      "text": "Because CER and WER ignore layout errors, a workflow can report \"good OCR quality\" while reading order or table structure is broken. Mature workflows therefore incorporate confidence scoring, sampling and QA, and human-in-the-loop verification at the points where accuracy matters, rather than treating OCR output as final."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "OCR and its neural successors — LSTM-based engines and, more recently, transformer- and LLM-based recognition and post-correction — remain foundational to search, accessibility, and archives. But the hard cases persist: handwriting, heavily degraded historical documents, complex layouts, tables, and low-resource scripts are still active research areas where accuracy trails clean printed text."
    },
    {
      "kind": "paragraph",
      "text": "Neural methods have raised the ceiling. The Library of Congress launched a Tesseract-based reprocessing workflow (its NDNP-Open-OCR pipeline, combining Tesseract with custom post-processing) in 2025 to improve the machine-readable text of early-program Chronicling America newspapers. Yet researchers caution that even LLM-based post-correction offers no free lunches on degraded input. The realistic expectation is straightforward: excellent on easy material, still unreliable without verification on hard material."
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
          "period": "1920s",
          "text": "Gustav Tauschek develops an early \"Reading Machine\" (patent commonly dated around 1929; exact date varies by secondary source, no primary confirmation cited here)."
        },
        {
          "period": "1985–1994",
          "text": "Tesseract developed at Hewlett-Packard."
        },
        {
          "period": "2005",
          "text": "HP releases Tesseract as open source."
        },
        {
          "period": "2006",
          "text": "Google begins sponsoring Tesseract development."
        },
        {
          "period": "October 2018",
          "text": "Tesseract 4.0.0 introduces the LSTM neural-network recognition engine."
        },
        {
          "period": "2025",
          "text": "Library of Congress launches an OCR reprocessing workflow (NDNP-Open-OCR, Tesseract-based) for Chronicling America, improving text quality on early-program newspapers."
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
      "slug": "optical-character-recognition"
    },
    {
      "section": "guides",
      "slug": "handwriting-recognition"
    },
    {
      "section": "guides",
      "slug": "ocr-preprocessing"
    },
    {
      "section": "guides",
      "slug": "ocr-layout-analysis"
    },
    {
      "section": "guides",
      "slug": "ocr-engines"
    }
  ],
  "faqs": [
    {
      "q": "How accurate is OCR?",
      "a": "There is no universal figure. On clean, high-resolution (at least 300 dpi) printed text in a well-supported script, accuracy is high but not perfect; on degraded, handwritten, dense, or complex-layout material it falls substantially. The Library of Congress states OCR \"is not 100 percent accurate\" and has no defined accuracy standard because results vary widely. Treat any single percentage as experiment-specific."
    },
    {
      "q": "Why does a searchable PDF fail to find text that is clearly on the page?",
      "a": "OCR adds a hidden text layer beneath the page image. The visible page still looks perfect, but the text layer carries whatever OCR errors occurred. If the OCR misread a word, a search will miss it even though a human can read it. Visual fidelity is not an indicator of text-layer accuracy."
    },
    {
      "q": "What makes OCR fail most often?",
      "a": "Degraded or historical originals (faded ink, bleed-through, stains, poor microfilm), small or dense type, complex multi-column layouts, handwriting, unusual or decorative fonts, tables, non-Latin or low-resource scripts, and imaging defects such as skew, low DPI, uneven lighting, and dark scan borders."
    },
    {
      "q": "Do CER and WER fully measure OCR quality?",
      "a": "No. Character Error Rate and Word Error Rate, both based on edit distance to a ground-truth transcription, weight all errors equally and ignore layout errors. A document can show a good CER while its reading order or table structure is badly scrambled, so these metrics alone can overstate usable quality."
    },
    {
      "q": "Does automated post-correction remove the need for human review?",
      "a": "No. Language models and dictionaries catch some errors, but research on LLM-based post-correction of historical documents reports \"no free lunches\": it does not reliably fix degraded OCR and can introduce new errors. For consequential uses, human verification against the source image remains necessary."
    }
  ],
  "sources": [
    {
      "title": "Technical Information — Chronicling America",
      "url": "https://www.loc.gov/collections/chronicling-america/about-this-collection/technical-information/",
      "publisher": "U.S. Library of Congress"
    },
    {
      "title": "Improving Machine-Readable Text for Newspapers in Chronicling America",
      "url": "https://blogs.loc.gov/headlinesandheroes/2025/04/ocr-reprocessing/",
      "publisher": "U.S. Library of Congress (Headlines & Heroes blog)"
    },
    {
      "title": "Digitizing Microfilm and Optical Character Recognition (OCR) — National Digital Newspaper Program",
      "url": "https://www.loc.gov/ndnp/guidelines/digitizing.html",
      "publisher": "U.S. Library of Congress"
    },
    {
      "title": "Search Tips — Chronicling America research guide",
      "url": "https://guides.loc.gov/chronicling-america/search-tips",
      "publisher": "U.S. Library of Congress"
    },
    {
      "title": "Tesseract — Improving the quality of the output",
      "url": "https://tesseract-ocr.github.io/tessdoc/ImproveQuality.html",
      "publisher": "Tesseract OCR project"
    },
    {
      "title": "Tesseract Open Source OCR Engine (repository)",
      "url": "https://github.com/tesseract-ocr/tesseract",
      "publisher": "Tesseract OCR project"
    },
    {
      "title": "Handwritten Text Recognition: A Survey (arXiv:2502.08417)",
      "url": "https://arxiv.org/abs/2502.08417",
      "publisher": "arXiv"
    },
    {
      "title": "On the Generalization of Handwritten Text Recognition Models (arXiv:2411.17332)",
      "url": "https://arxiv.org/abs/2411.17332",
      "publisher": "arXiv"
    },
    {
      "title": "A Survey of OCR Evaluation Methods and Metrics and the Invisibility of Historical Documents (arXiv:2603.25761)",
      "url": "https://arxiv.org/abs/2603.25761",
      "publisher": "arXiv"
    },
    {
      "title": "OCR Error Post-Correction with LLMs in Historical Documents: No Free Lunches (arXiv:2502.01205)",
      "url": "https://arxiv.org/abs/2502.01205",
      "publisher": "arXiv"
    },
    {
      "title": "iOCR: Informed Optical Character Recognition for Election Ballot Tallies (arXiv:2208.00865)",
      "url": "https://arxiv.org/abs/2208.00865",
      "publisher": "arXiv"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "ocr limitations",
    "ocr accuracy",
    "character error rate",
    "word error rate",
    "handwriting recognition",
    "ocr degraded documents",
    "ocr complex layout",
    "tesseract accuracy",
    "ocr verification",
    "searchable pdf accuracy",
    "historical document ocr",
    "ocr non-latin scripts"
  ],
  "cluster": "ocr",
  "difficulty": "intermediate",
  "estimatedTime": "9 min read"
};

export default entry;
