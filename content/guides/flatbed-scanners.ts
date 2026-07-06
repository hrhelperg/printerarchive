import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "flatbed-scanners",
  "title": "Flatbed Scanners",
  "description": "How flatbed scanners work: CCD vs. CIS sensors, line-by-line capture, standards, OS support, and their role in PDF and document workflows.",
  "summary": "A flatbed scanner captures a reflective (and, with a transparency unit, transmissive) image of an original that rests face-down on a stationary glass platen while a sensor assembly moves beneath it, digitizing the page one transverse line at a time. Because the original stays still and the optics move, flatbeds handle bound books, fragile or thick documents, loose sheets, and flat 3D objects that cannot be fed through rollers. Two sensor families dominate: CCD, which uses a lens-and-mirror optical path and offers greater depth of field, and CIS (contact image sensor), which places a full-width sensor bar with integrated RGB LEDs almost against the glass for a thinner, lighter, lower-power device. The desktop flatbed reached the mass market with the HP ScanJet in 1987, and standard software interfaces (TWAIN, SANE, WIA, ImageCaptureCore, and the driverless eSCL protocol) later made scanners broadly interoperable across operating systems. Flatbeds sit at the front of document-capture workflows, producing the raster images that applications wrap into PDFs, and CIS-based units form the scanning half of most multifunction printers.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Digital scanning predates the desktop flatbed by decades, but the personal-computer flatbed as it is known today emerged in the mid-1980s. The identity of the \"first flatbed\" is a contested superlative, so the devices below are described as their sources characterize them rather than as absolute firsts."
    },
    {
      "kind": "list",
      "items": [
        "The Autokon 8400, introduced by ECRM Inc. in 1975, is described as an early flatbed scanner for digital image processing; it used a laser to scan pages up to 11 by 14 inches at up to 1000 lines per inch in 1-bit monochrome.",
        "The Kurzweil Reading Machine (1977) is described as the first flatbed scanner to use a CCD imaging element; it was built to read printed books aloud for blind users.",
        "The HP ScanJet, launched in February 1987, is credited as the first relatively affordable flatbed scanner for personal computers. It scanned 4-bit grayscale at up to 300 dpi."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Through the 1990s, falling CCD costs, color capture, and the arrival of a common software interface (TWAIN, 1992) turned flatbeds into a mass-market peripheral. CIS technology later enabled slim, USB-powered flatbeds and the flatbed units built into all-in-one printers."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Capture is inherently line-by-line: at any instant the scanner reads a single thin transverse line of the original, and a full two-dimensional image is assembled by mechanically advancing the sensor carriage down the platen one step at a time. A single scan proceeds through these stages:"
    },
    {
      "kind": "list",
      "items": [
        "Placement. The original is laid face-down on the glass platen; a hinged lid (often with a white or neutral backing) presses it flat and blocks stray light.",
        "Illumination. A light source under the glass illuminates one transverse line. CCD designs historically used a fluorescent lamp that required a warm-up period, and increasingly a white LED with a light guide; CIS designs use red, green, and blue LEDs built into the sensor bar.",
        "Reflection and capture. Light reflected from that line is read by the sensor, with per-pixel intensity encoding tonal value. Color is captured either with separate R/G/B sensor rows (CCD) or by combining R/G/B LED illumination (CIS).",
        "Analog-to-digital conversion. The per-pixel analog signal is amplified and digitized into numeric samples.",
        "Mechanical advance. A stepper motor and belt drive move the carriage a small increment along the long axis, and the next line is captured, repeating across the page.",
        "Transfer. Line data is streamed to the host computer (or to onboard memory in a networked device) and assembled into a complete image."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Vertical (sub-scan) resolution is governed by how finely the carriage steps down the page; horizontal (main-scan) resolution is governed by how many sensor elements sit per inch across the scan line. True optical resolution is bounded by these physical limits; anything higher is interpolated in software."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "A flatbed comprises several principal subsystems:"
    },
    {
      "kind": "list",
      "items": [
        "Platen (glass bed). The fixed transparent surface on which the original rests; it defines the maximum scan area (commonly Letter or A4).",
        "Lid / document cover. Presses the original flat and excludes ambient light. It may be removable to accommodate thick items, or replaced by a transparency adapter for film and slides.",
        "Sensor carriage (scan head). The moving assembly that captures each line, in one of two families. A CCD carriage combines a light source, a folded optical path of mirrors, and a reduction lens that focuses the full-width scan line onto a comparatively small CCD chip; because it uses real optics with focal depth, it can hold focus on originals sitting slightly above the glass, giving usable depth of field. A CIS carriage integrates LEDs, a rod-lens array, and a 1:1 detector array in near-contact with the glass; it is thin and light and consumes roughly a tenth the power of a CCD system, but its depth of field is very shallow, so non-flat originals blur.",
        "Illumination. A fluorescent lamp (legacy CCD) or white/RGB LEDs. Per Canon, LED illumination removed the roughly 30-second warm-up of older fluorescent CCD units.",
        "Drive mechanism. A stepper motor, belt, and guide rail that translate the carriage and set sub-scan resolution.",
        "Analog front end / ADC. Signal conditioning and digitization that determine the raw bit depth per channel.",
        "Controller and interface. An onboard processor, buffer memory, and the host connection (historically SCSI or parallel; now USB, and Ethernet or Wi-Fi for networked and multifunction devices)."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Processing pipeline"
    },
    {
      "kind": "paragraph",
      "text": "Raw line data typically passes through several stages before an application receives a finished image:"
    },
    {
      "kind": "list",
      "items": [
        "Calibration / shading correction. Compensation for lamp non-uniformity and per-element sensitivity differences.",
        "Analog gain and ADC. Conversion to raw digital samples at the device's native bit depth (for example, 16 bits per channel internally).",
        "Color and tonal mapping. Application of gamma and white balance, and often reduction from the internal high bit depth to an output depth (commonly 24-bit color).",
        "Optional software correction. Vendor drivers may add descreening, dust-and-scratch removal, sharpening, and shadow or binding correction. Canon's ScanGear driver, for example, documents dust-and-scratch removal, discoloration correction, and book-binding shadow correction.",
        "Interpolation (optional). Upsampling beyond optical resolution; per Wikipedia this carries little meaningful value and does not increase captured detail.",
        "Delivery. The image is handed to the operating system or application through a scanning API (TWAIN, WIA, ImageCaptureCore/ICA, SANE, or eSCL), which then saves it to a raster format or a container such as PDF."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Handles diverse originals — bound books, thick or fragile documents, loose sheets, and flat 3D objects — because nothing is fed through rollers.",
        "High image quality is achievable, especially with CCD optics and their greater depth of field.",
        "Non-destructive to fragile or valuable material.",
        "With a transparency unit, can capture film and slides transmissively.",
        "Ubiquitous and well-supported by standard operating-system scanning stacks."
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
        "Slower than sheet-fed scanning for large volumes of loose pages, since each page is placed and scanned individually unless paired with an automatic document feeder.",
        "Larger footprint than sheet-fed units for a given page size.",
        "Shallow CIS depth of field means books that do not lie flat and 3D objects blur; CCD mitigates this but adds bulk.",
        "Interpolated resolution figures can overstate real capability; only optical resolution reflects true detail.",
        "Dynamic range and true resolution fall below dedicated drum scanners, which use photomultiplier tubes and can resolve detail in excess of 10,000 dpi with superior shadow dynamic range."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF"
    },
    {
      "kind": "paragraph",
      "text": "A flatbed produces a raster image per page, and that raster is frequently the raw material for a PDF: scanning applications wrap one or more page images into a PDF container, optionally running OCR to add a searchable text layer over the image."
    },
    {
      "kind": "paragraph",
      "text": "The flatbed itself does not create PDF. The driver or application (through a scanning API such as TWAIN, WIA, or eSCL) delivers the image, and PDF assembly, compression, and OCR happen in software downstream. This is why scan-quality choices — optical resolution, bit depth, and color versus grayscale versus bitonal — directly determine the size and fidelity of the resulting PDF."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "Flatbed scanning modules are the input half of multifunction printers (MFPs), or all-in-ones, which combine a printer, a flatbed scanner (often with an automatic document feeder), and sometimes fax. CIS technology in particular made it practical to embed a thin, low-power flatbed in a printer chassis."
    },
    {
      "kind": "paragraph",
      "text": "On the software side, network printing and network scanning are handled by related driverless standards: Mopria's printing support builds on the PWG's Internet Printing Protocol (IPP), while Mopria defines and publishes the eSCL scanning standard, so a single networked MFP can be driven for both functions over one connection."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to workflows"
    },
    {
      "kind": "paragraph",
      "text": "Flatbeds sit at the front of document-capture and digitization workflows: capture, then optional deskew, crop, and clean-up, then OCR, then classify and index, then store or route."
    },
    {
      "kind": "paragraph",
      "text": "In office settings they feed document-management and records systems; in libraries, archives, and museums they support preservation digitization of bound and fragile material where feeding is impossible. Batch throughput usually depends on pairing the flatbed with an automatic document feeder or moving high-volume loose-page work to dedicated sheet-fed scanners, reserving the flatbed for exceptions such as books, ID cards, and fragile pages."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to standards"
    },
    {
      "kind": "list",
      "items": [
        "TWAIN. An application-to-device API and protocol for image scanners and digital cameras, maintained by the not-for-profit TWAIN Working Group. Design began in January 1991 and the first release followed in 1992; the group was founded in 1992 by member companies including Aldus, Caere, Hewlett-Packard, Eastman Kodak, and Logitech. TWAIN Direct, a RESTful/JSON variant, was announced as version 1.0 on September 19, 2019.",
        "SANE (Scanner Access Now Easy). A public-domain API (implementations are typically GPL) standard on Linux and Unix that separates device backends from application frontends; a saned daemon enables network scanning. Initial release was November 1996.",
        "eSCL / IPP Scan / WSD. Vendor-neutral driverless network scanning protocols. eSCL (also known as AirScan, the mechanism behind Apple's AirPrint scanning) is standardized by Mopria; IPP Scan extends the Internet Printing Protocol to scanning; WSD is a Microsoft-originated web-services device protocol. In practice, manufacturers favor eSCL and WSD."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "list",
      "items": [
        "Windows. Windows Image Acquisition (WIA) is the still-image acquisition platform for cameras and scanners; WIA 1.0 arrived with Windows Me and Windows XP, and WIA 2.0 shipped with Windows Vista, targeting scanners and providing a WIA 1.0 compatibility layer.",
        "macOS / iOS. ImageCaptureCore (and the underlying Image Capture Architecture, ICA) lets apps discover and control scanners and cameras programmatically; Apple lists framework availability from macOS 10.6+ and iOS/iPadOS/Mac Catalyst 13.0+. macOS also uses eSCL/AirScan for driverless network scanning.",
        "Linux / Unix. SANE provides the standard scanning stack, with the sane-airscan backend enabling driverless eSCL and WSD devices."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Standalone consumer flatbeds have contracted as smartphone camera scanning apps and MFPs absorbed casual capture, but the flatbed remains indispensable wherever originals cannot be fed: bound books, fragile archival material, photographic prints, film (with a transparency unit), and mixed 2D/3D originals."
    },
    {
      "kind": "paragraph",
      "text": "CIS-based flatbeds live inside most home and office all-in-ones, while CCD flatbeds persist in photo, art-reproduction, and archival digitization for their depth of field and tonal quality. On the connectivity side, the shift to driverless standards (eSCL, IPP Scan, and WSD) has reduced dependence on per-device drivers, letting current operating systems discover and drive networked flatbeds without vendor software."
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
          "period": "1975",
          "text": "ECRM Inc. introduces the Autokon 8400, an early flatbed scanner for digital image processing."
        },
        {
          "period": "1977",
          "text": "Kurzweil Reading Machine released; described as the first flatbed scanner using a CCD imaging element."
        },
        {
          "period": "February 1987",
          "text": "HP ScanJet launches; credited as the first relatively affordable PC flatbed scanner (4-bit grayscale, up to 300 dpi)."
        },
        {
          "period": "January 1991",
          "text": "Design of TWAIN begins."
        },
        {
          "period": "1992",
          "text": "TWAIN Working Group founded and first TWAIN release published."
        },
        {
          "period": "November 1996",
          "text": "Initial release of SANE."
        },
        {
          "period": "2000–2001",
          "text": "WIA 1.0 introduced with Windows Me and Windows XP."
        },
        {
          "period": "2007",
          "text": "WIA 2.0 released with Windows Vista."
        },
        {
          "period": "2009",
          "text": "High-end flatbeds cited at around 5400 ppi optical resolution (as of 2009)."
        },
        {
          "period": "September 19, 2019",
          "text": "TWAIN Direct 1.0 (RESTful) announced."
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
      "slug": "document-scanners"
    },
    {
      "section": "guides",
      "slug": "sheet-fed-scanners"
    },
    {
      "section": "glossary",
      "slug": "scanner-bed"
    },
    {
      "section": "tools",
      "slug": "twain"
    },
    {
      "section": "guides",
      "slug": "history-of-scanning"
    },
    {
      "section": "guides",
      "slug": "scanner-driver-architecture"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between a CCD and a CIS flatbed scanner?",
      "a": "A CCD scanner uses a light source, mirrors, and a reduction lens to focus each scan line onto a small sensor chip, giving greater depth of field and generally higher image quality, but a bulkier body. A CIS scanner places a full-width sensor bar with integrated RGB LEDs almost against the glass; it is thinner, lighter, and uses roughly a tenth the power, but its shallow depth of field blurs originals that do not lie flat."
    },
    {
      "q": "What is optical resolution versus interpolated resolution?",
      "a": "Optical resolution is the true, physical detail a scanner can capture, set by the number of sensor elements per inch across the scan line and how finely the carriage steps down the page. Interpolated resolution is a higher figure produced by upsampling in software; per Wikipedia it carries little meaningful value and does not increase actual captured detail."
    },
    {
      "q": "Do flatbed scanners create PDF files themselves?",
      "a": "No. A flatbed produces a raster image per page. The driver or application, working through a scanning API such as TWAIN, WIA, or eSCL, wraps those page images into a PDF container and can add an OCR text layer. PDF assembly, compression, and OCR all happen in software downstream of the scanner."
    },
    {
      "q": "How do modern operating systems scan without installing drivers?",
      "a": "They use vendor-neutral driverless protocols. eSCL (also known as AirScan), IPP Scan, and WSD let an operating system discover and drive a networked scanner over the network without vendor software. macOS uses eSCL/AirScan, Windows supports WIA and WSD, and Linux uses SANE with the sane-airscan backend for eSCL and WSD devices."
    }
  ],
  "sources": [
    {
      "title": "Image scanner",
      "url": "https://en.wikipedia.org/wiki/Image_scanner",
      "publisher": "Wikipedia"
    },
    {
      "title": "Contact image sensor",
      "url": "https://en.wikipedia.org/wiki/Contact_image_sensor",
      "publisher": "Wikipedia"
    },
    {
      "title": "HP ScanJet",
      "url": "https://en.wikipedia.org/wiki/HP_ScanJet",
      "publisher": "Wikipedia"
    },
    {
      "title": "Technologies Used in Scanners",
      "url": "https://global.canon/en/technology/support10.html",
      "publisher": "Canon Global"
    },
    {
      "title": "TWAIN",
      "url": "https://en.wikipedia.org/wiki/TWAIN",
      "publisher": "Wikipedia"
    },
    {
      "title": "The History of TWAIN",
      "url": "https://infogovworld.com/the-history-of-twain-a-standard-linking-images-to-applications/",
      "publisher": "Info Gov World"
    },
    {
      "title": "Scanner Access Now Easy (SANE)",
      "url": "https://en.wikipedia.org/wiki/Scanner_Access_Now_Easy",
      "publisher": "Wikipedia"
    },
    {
      "title": "SANE - Scanner Access Now Easy",
      "url": "http://www.sane-project.org/",
      "publisher": "SANE Project"
    },
    {
      "title": "Windows Image Acquisition",
      "url": "https://en.wikipedia.org/wiki/Windows_Image_Acquisition",
      "publisher": "Wikipedia"
    },
    {
      "title": "Windows Image Acquisition Drivers",
      "url": "https://learn.microsoft.com/en-us/windows-hardware/drivers/image/windows-image-acquisition-drivers",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "ImageCaptureCore",
      "url": "https://developer.apple.com/documentation/imagecapturecore",
      "publisher": "Apple Developer"
    },
    {
      "title": "Mopria eSCL Specification",
      "url": "https://mopria.org/mopria-escl-specification",
      "publisher": "Mopria Alliance"
    },
    {
      "title": "eSCL",
      "url": "https://wiki.debian.org/eSCL",
      "publisher": "Debian Wiki"
    },
    {
      "title": "sane-airscan",
      "url": "https://github.com/alexpevzner/sane-airscan",
      "publisher": "SANE airscan project"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "flatbed scanner",
    "ccd scanner",
    "cis scanner",
    "contact image sensor",
    "platen",
    "image scanner",
    "optical resolution",
    "twain",
    "sane",
    "wia",
    "escl",
    "driverless scanning"
  ],
  "cluster": "scanning-hardware",
  "difficulty": "intermediate",
  "estimatedTime": "9 min read"
};

export default entry;
