import type { WorkflowEntry } from "@/lib/content/types";

const entry: WorkflowEntry = {
  "section": "workflows",
  "slug": "ocr-for-receipts",
  "title": "OCR for Receipts",
  "description": "How optical character recognition converts point-of-sale receipts into searchable text and structured fields like merchant, date, and total.",
  "summary": "Receipt OCR applies optical character recognition to point-of-sale documents to recover their printed text and extract a small set of structured fields — typically merchant, date, and total. Receipts are a distinct, difficult OCR sub-problem: narrow, small-print, often thermal paper subject to skew, low resolution, and fading. Public benchmarks such as ICDAR 2019 SROIE and datasets like CORD frame the task as text localisation, transcription, and key information extraction. This reference describes the technology, its pipeline, accuracy factors, output formats, and limitations, vendor-neutrally and without financial, tax, or legal advice.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Receipt OCR is the application of optical character recognition (OCR) — the machine conversion of images of text into machine-encoded characters — to the specific class of documents produced at point of sale: retail receipts, restaurant checks, fuel and parking slips, and similar transaction records. The goal is usually twofold: recover the raw text printed on the receipt, and extract a small set of structured fields from that text, most commonly the merchant or company name, the transaction date, and the total amount, and often the address and line items."
    },
    {
      "kind": "paragraph",
      "text": "Receipts are a distinct and difficult sub-problem within document OCR. Unlike a clean, full-page scan of a book or form, a receipt is typically a narrow strip of low-cost paper, printed at small font sizes in a monospaced or condensed typeface, frequently on thermal stock whose image is chemically unstable. Public research benchmarks treat scanned receipt OCR and information extraction as its own task; the ICDAR 2019 Robust Reading Challenge on Scanned Receipt OCR and Information Extraction (SROIE), one of the most widely cited references in this area, framed the problem explicitly around receipts because of these real-world variations in layout, print quality, skew, and lighting."
    },
    {
      "kind": "paragraph",
      "text": "A common use is turning paper receipts into digital records for expense tracking and bookkeeping. Record-keeping authorities generally accept records held in electronic systems provided the same principles that apply to paper apply to the electronic form; the U.S. Internal Revenue Service states that \"all requirements that apply to hard copy books and records also apply to electronic records.\" This page describes the technology; it does not advise on whether or how any individual should retain records."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "OCR for receipts follows the general OCR model — image acquisition, pre-processing, text detection and recognition, and post-processing — but adds a structured-extraction stage tuned to the receipt's semantics."
    },
    {
      "kind": "paragraph",
      "text": "Modern general-purpose OCR engines recognize characters using trained neural networks. The widely used open-source engine Tesseract was originally developed at Hewlett-Packard between 1985 and 1994, open-sourced by HP in 2005, and developed by Google from 2006. Tesseract 4 added a recognition engine based on LSTM (long short-term memory) recurrent neural networks; the first 4.x alpha carrying the LSTM engine was released in November 2016, and the stable 4.0.0 release followed on 29 October 2018. Engines of this type output recognized characters together with their positions on the page."
    },
    {
      "kind": "paragraph",
      "text": "For receipts, raw recognition is only half the job. The recognized tokens must then be interpreted — which string is the merchant, which number is the grand total rather than the subtotal or the tax, which of several dates is the transaction date. Research benchmarks separate these concerns explicitly. The ICDAR 2019 SROIE task was structured as three sub-tasks: text localisation, OCR (transcription), and key information extraction. The information-extraction stage in that benchmark and its widely reused dataset targets four key fields — company, address, date, and total — which corresponds closely to what expense applications typically need."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The capture-to-text pipeline"
    },
    {
      "kind": "paragraph",
      "text": "A representative receipt pipeline has the following stages. Implementations vary, and not every system includes every stage."
    },
    {
      "kind": "list",
      "items": [
        "Capture. The receipt image is acquired, either by a flatbed or sheet-fed scanner or, increasingly, by a smartphone camera. Mobile capture introduces perspective distortion, uneven lighting, shadows, motion blur, and curled or crumpled paper that flat scanning does not.",
        "Pre-processing. Common steps include cropping to the receipt boundary, correcting perspective, deskewing (rotating a tilted image so text lines are horizontal), converting to grayscale, and binarization or contrast enhancement. General-purpose OCR wrappers expose such steps; OCRmyPDF, for example, offers deskewing and image cleaning before recognition.",
        "Text detection / localisation. The system finds regions containing text (the text-localisation task in SROIE).",
        "Recognition (OCR proper). Detected regions are transcribed into characters, typically by a neural recognizer such as Tesseract's LSTM engine.",
        "Post-processing and key information extraction. Recognized text is parsed to pull out structured fields (merchant, date, total, tax, line items). Approaches in the literature range from rule- and template-based parsing to machine-learning models that use both the text and its spatial layout, and more recently to vision-language models. Public datasets built for this stage include SROIE (company, address, date, total), CORD (a consolidated receipt dataset with a richer label hierarchy including store, payment, menu, subtotal, and total), and newer sets such as ReceiptSense.",
        "Verification / export. The structured result is validated and written to an output format or downstream system."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Accuracy and verification considerations"
    },
    {
      "kind": "paragraph",
      "text": "There is no single, universal accuracy figure for receipt OCR; results depend heavily on image quality, paper condition, language, typeface, and the specific engine and extraction method. This page deliberately does not cite a headline accuracy percentage, because such numbers are only meaningful relative to a stated dataset, metric, and system."
    },
    {
      "kind": "paragraph",
      "text": "Several factors documented in the literature make receipts harder than ordinary document OCR:"
    },
    {
      "kind": "list",
      "items": [
        "Small print and low resolution. Receipts are printed in small, often condensed type, and recognition degrades at low effective resolution, where the image simply contains less information to work with.",
        "Field disambiguation. Extracting the correct total, date, or merchant is a distinct error source from character recognition. A receipt may contain several monetary amounts (item prices, subtotal, tax, tip, total, change, card-payment amount) and several dates; picking the intended one is where key-information-extraction systems succeed or fail, which is why benchmarks such as SROIE score it separately.",
        "Human review remains common. Because commercial receipt processing often demands higher accuracy than general OCR and degrades on low-quality inputs, human checking is still frequently part of production workflows."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Practical verification techniques include internal arithmetic checks (do line items plus tax equal the stated total?), confidence thresholds surfaced by the recognizer, and human-in-the-loop confirmation of extracted fields before they are committed to a record."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Formats and output"
    },
    {
      "kind": "paragraph",
      "text": "Receipt OCR produces output at two levels."
    },
    {
      "kind": "list",
      "items": [
        "Text-level output. Plain text (the transcription), or an image-plus-text container such as a searchable PDF (see the next section). Some pipelines also emit position and geometry (bounding boxes) alongside characters.",
        "Structured-data output. The extracted fields — merchant, date, total, tax, currency, line items — typically serialized as structured records such as JSON. The SROIE dataset, for instance, encodes its key fields alongside bounding boxes and OCR transcripts."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and searchable PDF"
    },
    {
      "kind": "paragraph",
      "text": "A very common delivery format for a captured receipt is the searchable PDF: the original receipt image is kept for visual fidelity, and a layer of recognized text is placed invisibly behind or aligned with the image so the document can be searched, and text selected and copied, without altering its appearance. This is often called a \"searchable image\" approach — the image content is retained and a duplicate, invisible text layer is inserted over the recognized text, positioned by bounding boxes. Open-source tooling implements exactly this: OCRmyPDF \"adds an OCR text layer to scanned PDF files, allowing them to be searched,\" placing the OCR text beneath the image while preserving the original image resolution."
    },
    {
      "kind": "paragraph",
      "text": "For long-term retention, receipts are sometimes stored as PDF/A, the ISO 19005 family of standards for long-term archiving of electronic documents. A searchable PDF/A combines a preserved image with a recognized text layer; PDF/A output is a documented option of OCR pipelines such as OCRmyPDF."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to document management"
    },
    {
      "kind": "paragraph",
      "text": "Receipt OCR is the on-ramp from paper receipts into document- and records-management systems. Once a receipt has been recognized, its text layer makes it full-text searchable within a repository, and its extracted fields (merchant, date, amount) can index and route it automatically. This matters for expense and bookkeeping workflows where paper originals — especially thermal receipts — are physically fragile. Because record-keeping authorities generally accept records held in electronic systems provided electronic records meet the same requirements as paper, digitizing receipts into a managed store is a practical archival strategy. Whether a given organization's retention practices satisfy its own legal obligations is outside the scope of this reference."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Searchability and indexing. Converts an image of a receipt into searchable text and structured fields, enabling retrieval and automated categorization.",
        "Preservation against physical decay. A digitized copy captures the content before the paper original — particularly thermal stock — fades.",
        "Reduced manual entry. Automates transcription of merchant, date, and total that would otherwise be keyed by hand.",
        "Standardized output. Produces consistent, machine-readable records (for example, JSON fields or searchable PDF/A) suitable for downstream systems."
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
        "Sensitivity to image and paper quality. Faded, wrinkled, stained, or curled receipts and low-resolution captures degrade results.",
        "Small and dense print. Receipt typefaces are small and condensed; low effective resolution reduces recognizable detail.",
        "Field-selection errors. Correctly identifying which amount is the total or which date is the transaction date is an error source independent of character accuracy.",
        "Layout and language diversity. Receipts vary enormously by merchant, region, and language; models trained on one distribution may transfer poorly, which is why multiple public datasets across languages exist, including the Arabic–English AMuRD set.",
        "No guaranteed accuracy. Output should be treated as needing verification, not as inherently correct."
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
        "Capture quality drives everything. Even illumination, a flat receipt, minimal skew, and adequate resolution materially improve downstream recognition; deskew and cleanup stages exist precisely to compensate for imperfect capture.",
        "Thermal receipts fade. Direct-thermal receipts are known to fade over time, and thermal paper commonly contains a color developer such as bisphenol A (BPA), documented in the public-health literature on receipts. Capturing such receipts promptly, before fading, improves OCR outcomes.",
        "Verify the fields that matter. Because totals and dates can be mis-selected, arithmetic and confidence checks plus optional human review reduce downstream errors.",
        "Choose output for the use. Searchable PDF or PDF/A preserves the visual original alongside text; structured JSON suits automated processing, and many pipelines emit both.",
        "Vendor neutrality. Both open-source engines and tools (for example, Tesseract and OCRmyPDF) and commercial engines and services exist; this reference names tools only as documented examples, not endorsements, and states no comparative ranking."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Receipt OCR remains an active research and engineering area. Public competitions and datasets — SROIE in 2019, CORD, and more recent sets such as ReceiptSense in 2024 — continue to be published, and methods have progressed from OCR-plus-rules to layout-aware machine learning and, most recently, multimodal vision-language models applied to receipts and invoices. Two durable drivers keep the topic current: the volume of paper receipts still issued at point of sale, and the fragility of thermal receipts, which gives digitization a preservation rationale independent of convenience. At the same time, the difficulty of small, low-quality print and reliable field extraction means fully unattended, error-free receipt processing is not a solved problem."
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
          "text": "Tesseract OCR engine developed at Hewlett-Packard."
        },
        {
          "period": "2005",
          "text": "HP open-sources Tesseract."
        },
        {
          "period": "2006",
          "text": "Google begins developing Tesseract."
        },
        {
          "period": "November 2016",
          "text": "First Tesseract 4.x alpha released, introducing the LSTM neural-network recognition engine."
        },
        {
          "period": "29 October 2018",
          "text": "Tesseract 4.0.0 released as a stable version with the LSTM engine."
        },
        {
          "period": "2019",
          "text": "ICDAR 2019 Robust Reading Challenge on Scanned Receipt OCR and Information Extraction (SROIE) held, with roughly 1,000 scanned receipt images annotated for company, address, date, and total across three tasks."
        },
        {
          "period": "2019",
          "text": "CORD (Consolidated Receipt Dataset) released for post-OCR receipt parsing."
        },
        {
          "period": "2024",
          "text": "ReceiptSense dataset published for receipt understanding beyond traditional OCR."
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
      "slug": "ocr-for-invoices"
    },
    {
      "section": "workflows",
      "slug": "ocr-workflow"
    },
    {
      "section": "guides",
      "slug": "document-scanners"
    },
    {
      "section": "workflows",
      "slug": "ocr-for-forms"
    },
    {
      "section": "workflows",
      "slug": "scan-to-searchable-pdf"
    },
    {
      "section": "guides",
      "slug": "optical-character-recognition"
    }
  ],
  "faqs": [
    {
      "q": "What is receipt OCR?",
      "a": "Receipt OCR applies optical character recognition to point-of-sale documents — retail receipts, restaurant checks, fuel and parking slips — to convert their printed text into machine-encoded characters and then extract structured fields such as the merchant name, transaction date, and total amount."
    },
    {
      "q": "Why are receipts harder to OCR than ordinary documents?",
      "a": "Receipts are narrow strips of low-cost paper printed in small, condensed type, often on thermal stock that fades. Camera capture adds perspective distortion, shadows, and blur, and recognition degrades at low effective resolution. Beyond reading characters, systems must also pick the correct total and date from among several candidate amounts and dates."
    },
    {
      "q": "What fields does receipt OCR typically extract?",
      "a": "Most commonly the merchant or company name, the transaction date, and the total, and often the address and line items. The ICDAR 2019 SROIE benchmark targets four key fields — company, address, date, and total — while the CORD dataset uses a richer hierarchy including store, payment, menu, subtotal, and total."
    },
    {
      "q": "How accurate is receipt OCR?",
      "a": "There is no single universal accuracy figure. Results depend heavily on image quality, paper condition, language, typeface, engine, and extraction method, so any accuracy number is only meaningful relative to a stated dataset, metric, and system. Human review remains common in production workflows."
    },
    {
      "q": "How does receipt OCR relate to searchable PDFs?",
      "a": "A captured receipt is often delivered as a searchable PDF: the original image is kept for visual fidelity and an invisible recognized-text layer is aligned behind it so the document can be searched and copied. For long-term retention, receipts may be stored as searchable PDF/A (the ISO 19005 archiving standard)."
    }
  ],
  "sources": [
    {
      "title": "ICDAR2019 Competition on Scanned Receipt OCR and Information Extraction (SROIE)",
      "url": "https://arxiv.org/abs/2103.10213",
      "publisher": "arXiv / ICDAR"
    },
    {
      "title": "ReceiptSense: Beyond Traditional OCR — A Dataset for Receipt Understanding",
      "url": "https://arxiv.org/abs/2406.04493",
      "publisher": "arXiv"
    },
    {
      "title": "CORD: A Consolidated Receipt Dataset for Post-OCR Parsing",
      "url": "https://github.com/clovaai/cord",
      "publisher": "Clova AI / NAVER"
    },
    {
      "title": "AMuRD: Annotated Arabic-English Receipt Dataset",
      "url": "https://arxiv.org/abs/2309.09800",
      "publisher": "arXiv"
    },
    {
      "title": "Tesseract OCR (project README and history)",
      "url": "https://github.com/tesseract-ocr/tesseract",
      "publisher": "Tesseract project"
    },
    {
      "title": "Tesseract Release Notes",
      "url": "https://tesseract-ocr.github.io/tessdoc/ReleaseNotes.html",
      "publisher": "Tesseract project"
    },
    {
      "title": "OCRmyPDF",
      "url": "https://github.com/ocrmypdf/OCRmyPDF",
      "publisher": "OCRmyPDF project"
    },
    {
      "title": "What kind of records should I keep",
      "url": "https://www.irs.gov/businesses/small-businesses-self-employed/what-kind-of-records-should-i-keep",
      "publisher": "U.S. Internal Revenue Service"
    },
    {
      "title": "An end-to-end OCR approach for ultra-low-resolution printed text images",
      "url": "https://arxiv.org/abs/2105.04515",
      "publisher": "arXiv"
    },
    {
      "title": "Bisphenol A in Thermal Paper Receipts: An Opportunity for Evidence-Based Prevention",
      "url": "https://pmc.ncbi.nlm.nih.gov/articles/PMC3261950/",
      "publisher": "Environmental Health Perspectives (via PubMed Central)"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "receipt ocr",
    "optical character recognition",
    "key information extraction",
    "sroie",
    "cord",
    "tesseract",
    "searchable pdf",
    "expense receipts",
    "thermal paper",
    "document ocr"
  ],
  "cluster": "ocr-workflows",
  "modernTools": [
    "pocket-manager",
    "pdf-editor"
  ],
  "goal": "Applying optical character recognition to point-of-sale receipts to recover their text and extract structured fields.",
  "toolsUsed": [
    "A phone camera or scanner",
    "Receipt-capture software"
  ]
};

export default entry;
