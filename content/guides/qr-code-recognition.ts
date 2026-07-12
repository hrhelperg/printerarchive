import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "qr-code-recognition",
  "title": "QR and 2D Code Recognition",
  "description": "How QR Code and Data Matrix symbols are located, corrected, and decoded in scanned documents for capture, separation, and indexing.",
  "summary": "QR and 2D code recognition is the process of locating a two-dimensional matrix barcode within a scanned page image, correcting geometric and photometric distortion, and decoding its module grid back into the original data using built-in error correction. The two symbologies most relevant to document capture — QR Code and Data Matrix — are defined by international standards ISO/IEC 18004 and ISO/IEC 16022, each of which specifies a normative reference decoding procedure. In capture workflows the codes carry exact machine-readable metadata (record IDs, batch numbers, routing keys), act as separator markers that split a continuous scan stream into logical documents, and link a physical page to a database record. Recognition proceeds through binarization, localization of the symbology's fiducials, geometric normalization, format and mask recovery, and Reed-Solomon error correction. Unlike OCR, which is inherently probabilistic, 2D-code decoding recovers deliberately encoded data exactly, making it complementary to text recognition in the same pipeline.",
  "difficulty": "intermediate",
  "estimatedTime": "9 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History and origin"
    },
    {
      "kind": "paragraph",
      "text": "QR Code was invented in 1994 by Masahiro Hara and his team at Denso Wave (then a division of Denso, a Toyota-group supplier) in Japan. The stated motivation was tracking automotive parts on assembly lines, where 1D barcodes had become inadequate for both data capacity and read speed; \"QR\" stands for \"Quick Response,\" reflecting the goal of high-speed reading."
    },
    {
      "kind": "paragraph",
      "text": "Accounts of the design distinguish two ideas. The two-dimensional grid concept has been linked to the game of Go and its lattice of intersections. The three-corner position-detection (finder) patterns and their characteristic 1:1:3:1:1 dark-to-light run-length ratio, by contrast, are attributed to Hara's analysis of the frequency of black-and-white areas in printed matter — chosen as a pattern least likely to occur by accident on ordinary forms — rather than to the Go board. QR Code was later standardized as an AIM International specification (1997), as JIS X 0510 in Japan (1999), and as ISO/IEC 18004 (first edition 2000)."
    },
    {
      "kind": "paragraph",
      "text": "Data Matrix originated in the United States in the late 1980s. The foundational U.S. patent, US 4,939,354 (\"Dynamically variable machine readable binary code…\"), names inventors Dennis G. Priddy and Robert S. Cymbalski; it was filed May 5, 1988 and issued July 3, 1990. Secondary sources commonly credit the company \"International Data Matrix, Inc.\" as the originator, though the patent's recorded original assignee is \"Datacode International Inc.\"; the exact legal lineage varies across sources. The symbology was designed to encode substantial data on very small or irregular surfaces such as electronic components and metal parts. It was standardized by AIM (ISS Data Matrix) in the mid-1990s and as ISO/IEC 16022 (first edition 2000). The originating company's corporate lineage subsequently passed through RVSI/Acuity CiMatrix, Siemens, Microscan, and Omron."
    },
    {
      "kind": "paragraph",
      "text": "The current ECC 200 error-correction variant of Data Matrix is the one in general use and the one specified by ISO/IEC 16022; earlier ECC 000–140 convolution-based variants are legacy and effectively obsolete."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solves"
    },
    {
      "kind": "paragraph",
      "text": "Linear (1D) barcodes encode only a small identifier along one axis and require a relatively large footprint per character. Two-dimensional codes address several capture problems at once:"
    },
    {
      "kind": "list",
      "items": [
        "Data density. They store more data in a small area across two axes, enough to embed full index fields, URLs, or record keys directly on the page rather than a bare lookup number.",
        "Omnidirectional, distortion-tolerant reading. Matrix codes carry explicit geometric fiducials (finder, alignment, and timing structures) so a reader can locate the symbol and correct for rotation, skew, and moderate perspective — useful for pages fed at an angle or captured by camera.",
        "Robustness to damage. Built-in Reed-Solomon error correction allows decoding even when a symbol is partially obscured, smudged, folded, or degraded by scanning artifacts.",
        "Automation of document handling. In batch scanning, a code on a page can trigger document separation, naming, routing, and indexing without manual keying."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "A 2D-code reader operating on a scanned page image generally proceeds through these stages; the standards' reference decode algorithms formalize the later ones."
    },
    {
      "kind": "paragraph",
      "text": "1. Image acquisition and binarization. The greyscale or color scan is converted to a black/white module estimate. Global thresholding — for example Otsu's method (Otsu, 1979) — works under uniform illumination, while local/adaptive thresholding handles uneven background or shading. Reader libraries commonly attempt more than one binarization if the first decode fails. 2. Symbol localization. The reader searches for the symbology's fiducials. For QR Code, three finder patterns (nested concentric squares) sit at three corners and are recognizable by their 1:1:3:1:1 run-length ratio when scanned across, establishing position and rotation. For Data Matrix, an \"L\" finder pattern — two solid adjacent borders — together with the opposite two edges as an alternating timing pattern defines the row and column count. 3. Geometric normalization. Using the fiducials — and, for QR, interior alignment patterns (present in Model 2) that correct local warping plus timing patterns that fix the module coordinate grid — the reader computes a perspective transform and samples the grid to recover the module matrix. 4. Format and version recovery. For QR, format information (error-correction level and mask pattern, protected by a BCH code and stored in two copies) and, for larger symbols, version information are read first. 5. Demasking and de-interleaving. QR applies a data mask (an XOR pattern) at encode time to balance dark and light modules; the reader removes it, reads the bit stream in the prescribed order, and separates data codewords from error-correction codewords. 6. Error correction. Reed-Solomon decoding over a Galois field (GF(2⁸) for QR) corrects erroneous codewords and fills erasures up to the symbol's capacity; the corrected codewords are then decoded per the active encoding mode back into the original characters or bytes."
    },
    {
      "kind": "paragraph",
      "text": "A quiet zone (blank margin) around the symbol is required for reliable localization."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Algorithms and variants"
    },
    {
      "kind": "paragraph",
      "text": "Encoding modes (QR Code). Numeric, alphanumeric, byte/binary (8-bit), and kanji, with different bit-efficiencies per character; a single symbol can mix modes. Extended Channel Interpretation (ECI) supports non-default character sets."
    },
    {
      "kind": "paragraph",
      "text": "Symbol sizes. QR Code defines 40 versions; version n is (4·n + 17) modules per side (version 1 = 21×21, version 40 = 177×177). Micro QR is a reduced variant for tight spaces. Data Matrix ECC 200 comes in a range of square sizes and several rectangular sizes, and multiple symbols can be chained via Structured Append (up to 16)."
    },
    {
      "kind": "paragraph",
      "text": "Error-correction levels. QR Code offers four selectable Reed-Solomon levels — L (≈7%), M (≈15%), Q (≈25%), and H (≈30%) of codewords recoverable. Data Matrix ECC 200 uses a fixed Reed-Solomon scheme; ISO/IEC 16022 and Wikipedia's summary describe routine reconstruction of the entire encoded data string from symbols that have sustained roughly 30% damage."
    },
    {
      "kind": "paragraph",
      "text": "Masking (QR). Eight mask patterns are available; the encoder selects the one that best avoids problematic module distributions (such as patterns resembling finder marks), and the reader reverses it using the format information."
    },
    {
      "kind": "paragraph",
      "text": "Reader and detector implementations. Widely cited open-source options include ZXing (\"Zebra Crossing\"), ZBar, Quirc, and OpenCV's QRCodeDetector and barcode modules. They differ in binarization strategy, multi-symbol detection, and performance; several can detect more than one code in a single image."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the capture/OCR pipeline"
    },
    {
      "kind": "paragraph",
      "text": "Within a document-capture pipeline, 2D-code recognition is generally a distinct step run against the same scanned page image, typically before or alongside OCR because a decoded code can drive downstream logic."
    },
    {
      "kind": "paragraph",
      "text": "1. Scan / image acquisition. 2. Image preprocessing (deskew, despeckle, binarization) — shared with OCR. 3. Barcode / 2D-code detection and decode. 4. Document separation — a detected code, often on a cover or separator sheet, marks the boundary between logical documents in a batch. 5. Classification / indexing — the decoded value populates index fields, file names, or a database key. 6. OCR / full-text extraction on the page body. 7. Export to a document-management system, often as searchable PDF."
    },
    {
      "kind": "paragraph",
      "text": "Because the code carries exact digital data, it supplies reliable index values where OCR of printed text would be error-prone."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "High data capacity in a small footprint relative to 1D barcodes.",
        "Deterministic, exact data for the encoded fields, with no OCR ambiguity.",
        "Orientation independence via explicit fiducials, tolerant of rotation and moderate perspective.",
        "Damage tolerance through Reed-Solomon error correction.",
        "Standardized and vendor-neutral (ISO/IEC 18004, ISO/IEC 16022), enabling interoperable generation and reading.",
        "Automation-friendly for batch separation, naming, and routing.",
        "Complementary strengths: Data Matrix is efficient at very small sizes and for direct part marking, while QR supports large capacities and mixed encoding modes."
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
        "Localization failures when the quiet zone is missing, the symbol is cropped at a page edge, or it overlaps other marks.",
        "Binarization errors under low contrast, faint printing, bleed-through, or uneven illumination and shading.",
        "Resolution limits. If scan DPI is too low relative to module size, adjacent modules blur together and sampling fails; small dense symbols need adequate resolution.",
        "Geometric distortion beyond what alignment and timing structures can correct, such as severe warp, a fold across the symbol, or extreme perspective.",
        "Damage beyond error-correction capacity — once corruption exceeds the selected EC level, the symbol is unrecoverable.",
        "Print and scan artifacts such as dot gain, toner scatter, moiré, JPEG compression blocking, or dithering can corrupt modules.",
        "Security considerations. Because codes can encode URLs or commands opaque to a human reader, they are a recognized phishing and malware vector (\"quishing\"), which matters when captured codes trigger automated actions."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to OCR and scanning"
    },
    {
      "kind": "paragraph",
      "text": "2D-code recognition and OCR are complementary rather than competing technologies applied to the same scanned image. OCR converts printed human-readable text into characters and is inherently probabilistic, whereas 2D-code decoding recovers machine-encoded data exactly (with error correction) but only from a deliberately placed symbol. In capture systems the two share upstream preprocessing such as deskew and binarization. A common pattern is to print a 2D code carrying the fields that must be captured with certainty — IDs and routing keys — and to rely on OCR for free-form body text."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and archival"
    },
    {
      "kind": "paragraph",
      "text": "In archival capture, decoded 2D-code values commonly become document metadata: file names, index fields, or embedded properties in the exported (often searchable) PDF, and they frequently determine how a continuous scan stream is split into individual PDF documents. The code itself is preserved as part of the page raster in the archived image."
    },
    {
      "kind": "paragraph",
      "text": "A point of terminology: \"PDF417\" is a separate stacked-linear symbology (standardized as ISO/IEC 15438) whose name coincidentally contains \"PDF.\" It is unrelated to the Portable Document Format, though it is sometimes encountered alongside QR Code and Data Matrix in capture systems."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "QR Code and Data Matrix remain actively standardized and widely deployed. ISO/IEC issued current editions of both standards in 2024: ISO/IEC 18004:2024 (QR Code) and ISO/IEC 16022:2024 (Data Matrix). QR Code is ubiquitous in consumer, payment, and marketing contexts and continues to be used for document indexing and mobile capture. Data Matrix remains prominent for small-item and direct-part marking and appears in regulated traceability such as pharmaceutical and industrial identification, often within GS1 data structures. In document-capture software, 2D-code reading is a standard feature for automated separation, classification, and indexing, and camera-based capture has broadened the range of acquisition conditions readers must handle."
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
          "period": "Late 1980s",
          "text": "Data Matrix developed in the United States; U.S. patent US 4,939,354 (inventors Dennis G. Priddy and Robert S. Cymbalski) filed 1988, issued 1990."
        },
        {
          "period": "1994",
          "text": "QR Code invented at Denso Wave (Masahiro Hara and team), Japan."
        },
        {
          "period": "Mid-1990s",
          "text": "Data Matrix registered as an AIM (ISS) specification."
        },
        {
          "period": "1997",
          "text": "QR Code adopted as an AIM International specification."
        },
        {
          "period": "1999",
          "text": "QR Code standardized as JIS X 0510 (Japan)."
        },
        {
          "period": "2000",
          "text": "ISO/IEC 18004:2000 (QR Code) and ISO/IEC 16022:2000 (Data Matrix) first editions published."
        },
        {
          "period": "2006",
          "text": "ISO/IEC 18004:2006 and ISO/IEC 16022:2006 (2nd ed.) published."
        },
        {
          "period": "2015",
          "text": "ISO/IEC 18004:2015 published."
        },
        {
          "period": "2024",
          "text": "Current editions: ISO/IEC 18004:2024 and ISO/IEC 16022:2024."
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
      "slug": "barcode-recognition"
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
      "section": "guides",
      "slug": "image-binarization"
    },
    {
      "section": "guides",
      "slug": "image-thresholding"
    },
    {
      "section": "guides",
      "slug": "image-deskew"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between QR Code and Data Matrix?",
      "a": "Both are two-dimensional matrix symbologies of dark and light square modules. QR Code (ISO/IEC 18004) uses three corner finder patterns, supports 40 versions and mixed encoding modes with four error-correction levels, and scales to large capacities. Data Matrix (ISO/IEC 16022) uses an \"L\" finder plus a timing pattern, is efficient at very small sizes and for direct part marking, and in its ECC 200 variant uses a fixed Reed-Solomon scheme."
    },
    {
      "q": "How does a reader recover data from a damaged or skewed symbol?",
      "a": "The reader locates the symbology's fiducials, computes a perspective transform to correct rotation and skew, samples the module grid, and then applies Reed-Solomon error correction over a Galois field to fix corrupted codewords up to the symbol's capacity. QR error-correction level H recovers about 30% of codewords, and Data Matrix ECC 200 is documented to reconstruct the full data string from roughly 30% damage."
    },
    {
      "q": "Why use a 2D code instead of OCR for document indexing?",
      "a": "OCR of printed text is inherently probabilistic and error-prone, while 2D-code decoding recovers deliberately encoded data exactly (with error correction). Capture systems often print a code carrying the fields that must be certain — record IDs, batch numbers, routing keys — and rely on OCR for free-form body text. The two share upstream preprocessing such as deskew and binarization."
    },
    {
      "q": "Is PDF417 related to the PDF file format?",
      "a": "No. PDF417 is a separate stacked-linear symbology standardized as ISO/IEC 15438; the \"PDF\" in its name is coincidental and unrelated to Adobe's Portable Document Format. It is sometimes encountered alongside QR Code and Data Matrix in capture systems but is a distinct symbology."
    }
  ],
  "sources": [
    {
      "title": "ISO/IEC 18004:2024 — QR Code bar code symbology specification",
      "url": "https://www.iso.org/standard/83389.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO/IEC 16022:2024 — Data Matrix bar code symbology specification",
      "url": "https://www.iso.org/standard/80926.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO/IEC 16022:2006(en) online browsing platform",
      "url": "https://www.iso.org/obp/ui/#iso:std:iso-iec:16022:ed-2:v1:en",
      "publisher": "ISO"
    },
    {
      "title": "History of QR Code",
      "url": "https://www.qrcode.com/en/history/",
      "publisher": "Denso Wave"
    },
    {
      "title": "How a Board Game and Skyscrapers Inspired the QR Code",
      "url": "https://spectrum.ieee.org/how-a-board-game-and-skyscrapers-inspired-the-development-of-the-qr-code",
      "publisher": "IEEE Spectrum"
    },
    {
      "title": "US 4,939,354 — Dynamically variable machine readable binary code (Data Matrix patent)",
      "url": "https://patents.google.com/patent/US4939354A/en",
      "publisher": "Google Patents"
    },
    {
      "title": "Data Matrix",
      "url": "https://en.wikipedia.org/wiki/Data_Matrix",
      "publisher": "Wikipedia"
    },
    {
      "title": "QR code",
      "url": "https://en.wikipedia.org/wiki/QR_code",
      "publisher": "Wikipedia"
    },
    {
      "title": "A Threshold Selection Method from Gray-Level Histograms (Otsu, 1979), IEEE Trans. SMC 9(1):62–66",
      "url": "https://ieeexplore.ieee.org/document/4310076",
      "publisher": "IEEE"
    },
    {
      "title": "ISO/IEC 18004:2024 QR Code Bar Code Symbology (overview)",
      "url": "https://blog.ansi.org/ansi/iso-iec-18004-2024-qr-code-bar-code-symbology/",
      "publisher": "ANSI"
    },
    {
      "title": "Hooked: A Real-World Study on QR Code Phishing",
      "url": "https://arxiv.org/pdf/2407.16230",
      "publisher": "arXiv"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "qr code recognition",
    "data matrix decoding",
    "2d barcode recognition",
    "iso/iec 18004",
    "iso/iec 16022",
    "reed-solomon error correction",
    "finder pattern",
    "ecc 200",
    "document separation",
    "barcode indexing",
    "matrix barcode",
    "quiet zone"
  ],
  "cluster": "image-preprocessing"
};

export default entry;
