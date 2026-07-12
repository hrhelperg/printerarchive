import type { WorkflowEntry } from "@/lib/content/types";

const entry: WorkflowEntry = {
  "section": "workflows",
  "slug": "ocr-for-invoices",
  "title": "OCR for Invoices",
  "description": "How optical character recognition converts scanned invoices into machine-readable data, its pipeline, formats, limits, and its place beside e-invoicing.",
  "summary": "Optical character recognition (OCR) applied to invoices converts the pixels of a scanned, photographed, or image-only invoice into machine-readable text, after which a separate field-extraction stage locates business values such as invoice number, dates, line items, tax amounts, and totals. OCR sits at the front of accounts-payable automation but performs recognition only; deciding which value is \"the total\" is a further step built on rules, templates, or trained models. This page describes the image-to-characters-to-fields pipeline, layout and table analysis, positioned output formats (hOCR, ALTO, searchable PDF, PDF/A), validation controls, and OCR's relationship to structured e-invoicing standards such as EN 16931 and Directive 2014/55/EU, where machine-readable data at the source removes the need for OCR entirely.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Optical character recognition (OCR) applied to invoices is the use of general-purpose text-recognition technology to convert the pixels of a scanned or image-based invoice into machine-readable characters, and then to locate meaningful business values within that text — supplier and buyer identifiers, invoice number and date, line items, subtotals, tax amounts, and grand totals. It sits at the front of what is commonly called accounts-payable (AP) automation: the practice of ingesting incoming supplier invoices and extracting their data with minimal manual keying."
    },
    {
      "kind": "paragraph",
      "text": "It is important to separate two things that are often conflated. OCR is a recognition technology: it turns an image into text and, at best, into positioned text regions. Deciding that a particular number is \"the total\" or \"the tax amount\" is a further step — variously called data capture, field extraction, key-value extraction, or document understanding — that layers rules, templates, or machine-learning models on top of OCR output. Tesseract, the most widely used open-source OCR engine, characterizes its job as character/word recognition together with page-layout analysis, not semantic interpretation of business documents."
    },
    {
      "kind": "paragraph",
      "text": "A second framing matters: OCR is only necessary because an invoice arrived as an image (a scan, a photo, or an image-only PDF). A large and growing share of invoicing is structured e-invoicing, in which the invoice is transmitted as machine-readable data from the outset (for example, XML) and needs no character recognition at all. In the European Union this is formalized by the standard EN 16931 and Directive 2014/55/EU (see \"Modern relevance\"). OCR-based capture and structured e-invoicing therefore coexist and address different starting conditions."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "At a high level, invoice OCR proceeds from image to characters to fields:"
    },
    {
      "kind": "list",
      "items": [
        "Image acquisition. The invoice enters as a raster image — a scan, a mobile photo, or a rasterizable PDF page.",
        "Character/word recognition (OCR proper). An OCR engine detects the text on the page and outputs recognized characters, usually grouped into words and lines, often with per-word confidence values and bounding-box coordinates.",
        "Layout analysis. The engine (or a separate stage) segments the page into blocks, columns, and paragraphs and — for invoices, critically — into tabular regions, so that line-item rows and columns can be reconstructed.",
        "Field extraction / data capture. Downstream logic maps the recognized, positioned text onto named invoice fields (header fields, line-item columns, totals, tax fields). This is where templates, positional rules, keyword anchors (\"Invoice No.\", \"Total Due\"), or trained models operate.",
        "Validation and export. Extracted values are checked for internal consistency and emitted in a structured output for review or for a downstream AP/ERP system."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Modern Tesseract illustrates the recognition and layout stages: Tesseract 4.0 added an OCR engine based on an LSTM (Long Short-Term Memory) neural network that recognizes text line by line across many languages, alongside page-layout analysis that segments text regions and reading order."
    },
    {
      "kind": "heading",
      "level": 3,
      "text": "Invoice document elements"
    },
    {
      "kind": "paragraph",
      "text": "Invoices, whatever the vendor or country, tend to share a recognizable structure, and capture systems are organized around these elements:"
    },
    {
      "kind": "list",
      "items": [
        "Header fields — supplier name and address, buyer name and address, invoice number, invoice date, due date, purchase-order reference, and payment details. These are typically single occurrences located in the upper region and near the footer.",
        "Line items — a repeating table of rows, each with columns such as description, quantity, unit price, and line amount; the number of rows is variable, which is why robust table reconstruction is the hardest part of invoice capture.",
        "Totals — subtotal (net), tax, and payable total, usually in a totals block near the bottom.",
        "Tax fields — tax amounts, taxable base, and tax identifiers (for example a VAT registration number) appear both in the totals area and, sometimes, per line."
      ]
    },
    {
      "kind": "paragraph",
      "text": "These are described here as document elements to be located, not as accounting or tax determinations. The semantic definitions of comparable elements are set out formally in the EN 16931 core invoice model (see \"Modern relevance\")."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The capture-to-text pipeline"
    },
    {
      "kind": "paragraph",
      "text": "Breaking the middle of the process down further, a typical invoice capture-to-text pipeline includes:"
    },
    {
      "kind": "list",
      "items": [
        "Pre-processing. Deskewing, denoising, binarization/thresholding, and de-warping (especially for phone photos) to give the recognizer a cleaner image. Image quality is a primary driver of downstream accuracy.",
        "Page-layout / structure analysis. Tesseract's layout analysis uses a hybrid approach that combines bottom-up and top-down methods: it forms initial region hypotheses and detects the tab-stops used when the page was laid out, then infers the column structure and imposes reading order. This tab-stop technique was introduced by Ray Smith in \"Hybrid Page Layout Analysis via Tab-Stop Detection\" (Proc. 10th ICDAR, IEEE, 2009) and underpins Tesseract's column and table handling.",
        "Text recognition. From version 4.0 onward, Tesseract recognizes text line by line with an LSTM neural network across many languages.",
        "Positioned output. The recognizer can emit not just plain text but text with coordinates and confidence, and standardized formats such as hOCR and ALTO XML that carry per-word bounding boxes.",
        "Field mapping and table reconstruction. Using the positioned text, the system associates values with field names and rebuilds the line-item grid."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Positioned output is what makes the later stages feasible: knowing where each word sits, not merely what it says, is what allows a system to align a number with a column header or a keyword anchor."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Accuracy and verification considerations"
    },
    {
      "kind": "list",
      "items": [
        "Recognition confidence is not correctness. OCR engines report confidence scores, but a high score is not a guarantee of a correct character, and confidence says nothing about whether a value was mapped to the right field.",
        "Image quality dominates. Skew, low resolution, JPEG artifacts, stamps, handwriting, coloured backgrounds, and poor scans all degrade results; pre-processing exists to mitigate these.",
        "No universally quoted accuracy rate applies. Published accuracy figures depend entirely on the corpus, language, image quality, and metric (character-level vs. word-level vs. field-level), so a single headline percentage for \"invoice OCR\" would be misleading. Field-level accuracy (did we get the total right?) is generally the number that matters for AP, and it is stricter than character-level accuracy.",
        "Validation checks. Because recognition can err, capture systems apply consistency checks: arithmetic reconciliation (do line amounts sum to the subtotal; does subtotal plus tax equal the total?), format/pattern checks on structured identifiers, date plausibility, and cross-referencing against master data such as a supplier list or a purchase order. A common AP control is the \"three-way match\" — comparing the invoice against the purchase order and the goods-receipt record — which uses extracted fields but is an accounting control rather than an OCR feature.",
        "Human-in-the-loop. Low-confidence or failed-validation fields are typically routed to a person for review; straight-through processing (no human touch) is a goal, not a given, and its feasibility varies with document quality and the diversity of supplier formats."
      ]
    },
    {
      "kind": "paragraph",
      "text": "These are engineering and control considerations; nothing here constitutes tax, accounting, or legal advice."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Formats and output"
    },
    {
      "kind": "paragraph",
      "text": "OCR of an invoice can produce several kinds of output, chosen by use case:"
    },
    {
      "kind": "list",
      "items": [
        "Plain text — the recognized characters with no layout.",
        "Positioned OCR formats — hOCR (HTML-based) and ALTO XML, which record each recognized word together with its bounding-box coordinates and confidence. ALTO (Analyzed Layout and Text Object) is maintained by the U.S. Library of Congress and is widely used in library and archive digitization to store OCR layout and text.",
        "Searchable PDF — the original page image with an invisible recognized-text layer behind it (see next section).",
        "Structured business data — the extracted fields (header values, line items, totals, tax) serialized as JSON, CSV, or an invoice-specific schema for import into an AP or ERP system. This last output is the product of the field-extraction stage, not of OCR alone."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and searchable PDF"
    },
    {
      "kind": "paragraph",
      "text": "Many invoices arrive as PDFs, and PDFs come in two very different kinds. A digitally generated PDF already contains a real text layer, so its values can often be read directly with a PDF text extractor and no OCR is needed. An image-only PDF (a scan wrapped in PDF) contains only a picture and requires OCR."
    },
    {
      "kind": "paragraph",
      "text": "The standard OCR product for a scanned PDF is the searchable PDF: the tool rasterizes each page, runs OCR on the raster, and inserts the recognized text as a hidden layer positioned behind the visible image, so the page looks identical but is now selectable and searchable. OCRmyPDF documents exactly this workflow — rasterize (via pypdfium2 or Ghostscript), OCR with Tesseract, then integrate the OCR text back into the original PDF while keeping the page minimally altered. Commercial tools such as Adobe's PDF Services offer a comparable \"OCR PDF\" capability."
    },
    {
      "kind": "paragraph",
      "text": "For archival use, OCR tools frequently output PDF/A, an ISO-standardized subset of PDF designed for long-term preservation that omits features such as JavaScript, audio/video, and external font references; OCRmyPDF defaults to producing PDF/A (PDF/A-2b) and can produce ordinary PDF on request. PDF itself is standardized as ISO 32000, and PDF/A as ISO 19005."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to document management"
    },
    {
      "kind": "paragraph",
      "text": "Invoice OCR is a common feed into document management and enterprise content management systems. The searchable-text layer makes archived invoices full-text searchable and indexable; the extracted structured fields become metadata that lets an invoice be filed, routed for approval, matched to a purchase order, and retrieved by supplier or amount. Positioned OCR standards like ALTO exist precisely so that layout and text can be stored and reused across such systems. In an AP context, the capture step typically hands its structured output to a workflow or ERP system that owns approval, posting, and payment — steps that are downstream of, and separate from, OCR."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Converts image-only invoices into searchable, indexable, and machine-processable form, reducing manual data entry.",
        "Enables downstream automation (routing, matching, approval) by producing structured fields and metadata.",
        "Preserves the original visual document while adding a text layer (searchable PDF), aiding both human review and archival.",
        "Mature, widely available tooling exists, including open-source engines (Tesseract) and format standards (hOCR, ALTO, PDF/A) that help avoid lock-in."
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
        "OCR recognizes characters; it does not, by itself, know which value is which field — semantic extraction is a separate, error-prone layer.",
        "Accuracy is highly sensitive to image quality, fonts, handwriting, stamps, and layout complexity, and no single accuracy figure generalizes across invoices.",
        "Line-item tables are the hardest element to reconstruct reliably because row counts and column arrangements vary widely between suppliers.",
        "Confidence scores can be misleading; validation and, often, human review remain necessary.",
        "The wide diversity of supplier layouts across organizations and countries makes fully template-free, straight-through capture difficult.",
        "OCR is unnecessary — and strictly worse — where a structured e-invoice or a digitally generated PDF with a real text layer is available."
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
        "Check whether OCR is even needed. If a PDF already carries a text layer, extract it directly; reserve OCR for image-only documents.",
        "Invest in pre-processing. Deskew, threshold, and de-warp before recognition; capturing quality upstream (resolution, lighting for photos) tends to pay off more than post-hoc tuning.",
        "Use positioned output. Word-level coordinates and confidence (hOCR/ALTO and similar) are what make field mapping and table reconstruction feasible; plain text alone is rarely enough for invoices.",
        "Design validation in from the start. Arithmetic reconciliation, master-data cross-checks, and purchase-order matching catch a large fraction of recognition and mapping errors.",
        "Plan for exceptions. Route low-confidence or failed-validation items to human review rather than assuming straight-through processing.",
        "Choose output formats deliberately. Searchable PDF or PDF/A for archival and audit; structured JSON/CSV/schema for system integration."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "OCR-based capture remains widely relevant wherever invoices still arrive as scans, photos, or image-only PDFs — which is common across many suppliers and jurisdictions. In parallel, structured e-invoicing is expanding and, in some regions, is mandated for parts of the economy, which removes the need for OCR at the source:"
    },
    {
      "kind": "list",
      "items": [
        "The European standard EN 16931 defines a semantic data model — a common core invoice model of the elements an invoice must convey — so that e-invoices are interoperable across the EU. It is expressed in structured syntaxes, principally UBL (Universal Business Language) and the UN/CEFACT Cross-Industry Invoice (CII) XML.",
        "Directive 2014/55/EU (adopted 16 April 2014) requires public-sector contracting authorities in the EU to be able to receive and process invoices that comply with the European standard.",
        "Hybrid formats such as Factur-X / ZUGFeRD bridge the two worlds: a PDF/A-3 document that is human-readable and carries embedded CII XML structured data conforming to EN 16931, with profiles (for example MINIMUM, BASIC, EN 16931, and EXTENDED) at increasing levels of structured detail. From ZUGFeRD 2.1 / Factur-X 1.0 onward the two are technically aligned. For a hybrid invoice, the embedded XML is read directly and OCR of the PDF page is unnecessary."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The trajectory is therefore toward structured data at the source, with OCR remaining the fallback for the large installed base of image-only invoices."
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
          "period": "Late 1960s–1970s",
          "text": "The standardized OCR typefaces OCR-A and OCR-B are developed to ease machine reading; they are later defined in ISO 1073 (OCR-A in ISO 1073-1, OCR-B in ISO 1073-2, both published 1976)."
        },
        {
          "period": "2009",
          "text": "Ray Smith publishes \"Hybrid Page Layout Analysis via Tab-Stop Detection\" (Proc. 10th ICDAR, IEEE), the layout-analysis method used in Tesseract."
        },
        {
          "period": "2014",
          "text": "Directive 2014/55/EU on electronic invoicing in public procurement is adopted in the EU (16 April 2014)."
        },
        {
          "period": "2018",
          "text": "Tesseract 4.0 adds an LSTM neural-network OCR engine, improving accuracy over the earlier pattern-based engine."
        }
      ]
    },
    {
      "kind": "paragraph",
      "text": "Note: Gustav Tauschek is commonly credited with patenting an early \"Reading Machine\" OCR device in Germany around 1929, and Kurzweil reading-machine technology for printed text is generally associated with the 1970s; both attributions rest on secondary survey literature rather than verified primary sources."
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
      "slug": "ocr-for-receipts"
    },
    {
      "section": "workflows",
      "slug": "ocr-for-forms"
    },
    {
      "section": "workflows",
      "slug": "ocr-workflow"
    },
    {
      "section": "tools",
      "slug": "what-is-pdf"
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
      "q": "Does OCR by itself extract the invoice total and tax amounts?",
      "a": "No. OCR recognizes characters and their positions on the page. Deciding which recognized number is the total or the tax amount is a separate field-extraction (data-capture) step that layers rules, templates, or machine-learning models on top of the OCR output."
    },
    {
      "q": "When is OCR unnecessary for an invoice?",
      "a": "When the invoice is already machine-readable. A digitally generated PDF with a real text layer can be read directly with a text extractor, and a structured e-invoice (such as EN 16931 XML) or a hybrid Factur-X/ZUGFeRD file carries data at the source, so no character recognition is required."
    },
    {
      "q": "What is a searchable PDF in the context of invoice OCR?",
      "a": "A searchable PDF keeps the original page image and inserts the recognized text as an invisible layer positioned behind it, so the page looks identical but becomes selectable and searchable. Tools like OCRmyPDF produce this, and can output PDF/A for long-term archival."
    },
    {
      "q": "Is there a single accuracy figure for invoice OCR?",
      "a": "No. Reported accuracy depends on the corpus, language, image quality, and metric (character-, word-, or field-level), so a single headline percentage would be misleading. Field-level accuracy matters most for accounts payable and is stricter than character-level accuracy."
    }
  ],
  "sources": [
    {
      "title": "Tesseract OCR — official documentation",
      "url": "https://tesseract-ocr.github.io/tessdoc/",
      "publisher": "Tesseract OCR project"
    },
    {
      "title": "tesseract-ocr/tesseract — source repository",
      "url": "https://github.com/tesseract-ocr/tesseract",
      "publisher": "Tesseract OCR project / GitHub"
    },
    {
      "title": "OCRmyPDF — Introduction",
      "url": "https://ocrmypdf.readthedocs.io/en/latest/introduction.html",
      "publisher": "OCRmyPDF project"
    },
    {
      "title": "OCRmyPDF — repository",
      "url": "https://github.com/ocrmypdf/OCRmyPDF",
      "publisher": "OCRmyPDF project / GitHub"
    },
    {
      "title": "ALTO: Technical Metadata for Layout and Text Objects",
      "url": "https://www.loc.gov/standards/alto/",
      "publisher": "U.S. Library of Congress"
    },
    {
      "title": "OCR PDF — PDF Services API",
      "url": "https://developer.adobe.com/document-services/docs/overview/pdf-services-api/howtos/ocr-pdf",
      "publisher": "Adobe"
    },
    {
      "title": "eInvoicing and EN 16931 — European legislation on eInvoicing",
      "url": "https://ec.europa.eu/digital-building-blocks/sites/spaces/DIGITAL/pages/467108867/European+legislation+on+eInvoicing",
      "publisher": "European Commission"
    },
    {
      "title": "Directive 2014/55/EU on electronic invoicing in public procurement",
      "url": "https://eur-lex.europa.eu/legal-content/EN/ALL/?uri=CELEX:32014L0055",
      "publisher": "EUR-Lex / European Union"
    },
    {
      "title": "ZUGFeRD / Factur-X",
      "url": "https://zugferd.org/",
      "publisher": "FeRD — Forum elektronische Rechnung Deutschland"
    },
    {
      "title": "ISO 1073-2:1976 — Alphanumeric character sets for optical recognition (OCR-B)",
      "url": "https://www.iso.org/standard/5568.html",
      "publisher": "ISO"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "ocr for invoices",
    "invoice data capture",
    "accounts payable automation",
    "field extraction",
    "tesseract",
    "searchable pdf",
    "hocr",
    "alto",
    "pdf/a",
    "en 16931",
    "e-invoicing",
    "zugferd"
  ],
  "cluster": "ocr-workflows",
  "modernTools": [
    "invoice-maker",
    "pdf-editor"
  ],
  "goal": "Using OCR to turn image-based invoices into machine-readable text and extractable business fields.",
  "toolsUsed": [
    "A scanner or mobile capture",
    "OCR / data-capture software"
  ]
};

export default entry;
