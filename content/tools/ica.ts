import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "ica",
  "title": "ICA (Image Capture on macOS)",
  "description": "How Apple's Image Capture Architecture (ICA) and the ImageCaptureCore framework let macOS discover and control scanners and cameras.",
  "summary": "ICA is Apple's shorthand for the Image Capture Architecture, the macOS subsystem that lets applications discover and control image-input devices such as scanners, digital cameras, and multifunction devices over USB or the network. The name is shared by two things: the bundled Image Capture application, and the underlying frameworks and device-driver plug-ins (\"device modules\") beneath it. The current public programming surface is the ImageCaptureCore framework (headless) plus the ImageKit capture classes (ready-made UI), which Apple's documentation says replace the older Carbon-based Image Capture subframework introduced with OS X 10.6. For scanners the central class is ICScannerDevice. ICA gives macOS a single OS-level abstraction in place of fragmented per-vendor drivers, and increasingly brokers driverless network scanning (eSCL/AirScan) so many current scanners work with nothing installed.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "On the Mac, \"ICA\" is Apple's shorthand for Image Capture Architecture — the operating-system subsystem that lets applications discover and control image-input devices (scanners, digital cameras, and multifunction devices) attached over USB or reachable on a network. Apple uses the exact phrase \"Image Capture Architecture (ICA)\" in its own developer material, notably the Technical Q&A titled \"Launch Behavior Changes for Image Capture Architecture (ICA) Device Modules on macOS Sierra 10.12.\""
    },
    {
      "kind": "paragraph",
      "text": "Two things share the \"Image Capture\" name and are easy to conflate:"
    },
    {
      "kind": "list",
      "items": [
        "The Image Capture application — a bundled macOS utility (Image Capture.app) that imports photos from cameras and performs scans, with no third-party software required for supported devices.",
        "The Image Capture architecture / frameworks — the underlying APIs and device-driver plug-ins (\"device modules\") that the app, Preview, and third-party apps all sit on top of."
      ]
    },
    {
      "kind": "paragraph",
      "text": "This dual usage is real and appears in vendor documentation as well: some sources expand \"ICA\" as \"Image Capture Application,\" while Apple's own QA1946 uses \"Image Capture Architecture.\" In current developer terms, the public programming surface is the ImageCaptureCore framework (headless/programmatic) plus the ImageKit capture classes (ready-made UI), which Apple's documentation states \"replace the older Carbon-based Image Capture subframework.\" For scanners specifically, the central class is ICScannerDevice."
    },
    {
      "kind": "paragraph",
      "text": "Colloquially, an \"ICA driver\" or \"ICA scanner\" refers to a scanner whose macOS driver is a device module written to this architecture, so the device works directly in Image Capture or Preview — as opposed to relying on the older, cross-platform TWAIN model."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Apple shipped an Image Capture application in an early Mac OS X release to import images from cameras and scanners. The specific first release is commonly reported as Mac OS X 10.1 (around 2001), but that date comes from secondary sources and is not confirmed against a primary Apple page; treat it as reported rather than established."
    },
    {
      "kind": "paragraph",
      "text": "The original programming interface was a Carbon-based C API used both by applications and by driver authors writing device modules."
    },
    {
      "kind": "paragraph",
      "text": "With OS X 10.6 \"Snow Leopard\" (2009), Apple introduced the modern ImageCaptureCore framework and the ImageKit capture classes. Apple's archived Image Capture Services Programming Guide states that these \"replace the older Carbon-based Image Capture subframework,\" while keeping existing applications working. Legacy C entry points such as ICAObjectSendMessage() were deprecated in Mac OS X 10.6, superseded by the newer delegate-based messaging."
    },
    {
      "kind": "paragraph",
      "text": "macOS Sierra 10.12 (2016) changed how device modules run. Apple states verbatim that \"for performance reasons, on macOS Sierra 10.12 and later, device modules are only launched on-demand, when the user is interested in using the particular hardware.\""
    },
    {
      "kind": "paragraph",
      "text": "macOS Catalina 10.15 (2019) removed the ability to run 32-bit software. Because many vendors' TWAIN drivers and scan utilities were 32-bit, this broke a large number of older scanners on macOS and pushed users toward ICA device modules, driverless (network) scanning, or third-party 64-bit tools. Brother's support documentation from that period notes that where a TWAIN scanner driver was not supported under 10.15, \"an ICA … scanner driver may be available.\""
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Before a unified architecture, scanner and camera support on the Mac depended on per-vendor, often proprietary drivers and bundled utilities, and on the cross-platform TWAIN model (a working group founded in 1992 to standardize how applications acquire images from devices). That world was fragmented: capabilities varied by vendor application, drivers aged out with OS releases, and a 32-bit driver could stop working when the operating system moved on."
    },
    {
      "kind": "paragraph",
      "text": "ICA gives macOS a single, OS-level abstraction: one device-discovery mechanism, one set of frameworks, and a common driver (\"device module\") model. The practical payoff for users is that supported cameras and scanners appear directly in Image Capture, Preview, and other applications — and for many modern network devices, with no vendor driver installed at all."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "At a high level, ICA works through a small number of coordinated pieces:"
    },
    {
      "kind": "list",
      "items": [
        "Discovery. An application uses a device browser (ICDeviceBrowser in ImageCaptureCore) to enumerate connected and networked devices. Discovery covers local USB devices and network devices; network scanner discovery uses Bonjour.",
        "Device objects. Each device is represented by an ICDevice subclass — ICCameraDevice for cameras, ICScannerDevice for scanners. Applications communicate with devices through delegate callbacks rather than blocking calls.",
        "Scanner capabilities. A scanner exposes functional units (flatbed, document feeder, transparency/film) via ICScannerFunctionalUnit. The application queries the available unit types, selects one, sets scan parameters (resolution, bit depth, color, scan area), and then issues a scan request. Apple's scanner API includes ICScannerDevice.requestScan(), described as starting a scan on the selected functional unit, and delegate callbacks such as scannerDevice(_:didScanTo:) that deliver progress and results. Note that the delegate family has evolved and includes deprecated members, so exact method availability should be checked per macOS version.",
        "Device modules. The vendor- or Apple-supplied driver plug-in that actually talks to the hardware is a device module. Since macOS Sierra, these are launched on demand when a device is selected and terminate when no longer needed.",
        "UI versus headless. Applications can drive everything programmatically with ImageCaptureCore (no built-in UI), or drop in Apple's ImageKit capture views for a standard scan/import interface."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the capture pipeline"
    },
    {
      "kind": "paragraph",
      "text": "ICA is the middle layer between the app-facing frameworks and the concrete device module and transport. Roughly:"
    },
    {
      "kind": "paragraph",
      "text": "` Application (Image Capture.app, Preview, 3rd-party) │ ImageKit (ready UI) / ImageCaptureCore (headless API) ← public frameworks │ Image Capture Architecture (ICA) core + device browser │ Device module (driver plug-in: ICA-native, or a bridge) │ Transport (USB, or network: eSCL / IPP-over-Bonjour) │ Scanner / camera hardware `"
    },
    {
      "kind": "paragraph",
      "text": "In this sense ICA is to scanning roughly what CUPS is to printing on macOS: the operating-system-level stack that applications sit on top of, rather than a piece of end-user software in its own right."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "paragraph",
      "text": "ICA is macOS-specific. It is Apple's answer to a job that other platforms solve differently:"
    },
    {
      "kind": "list",
      "items": [
        "Windows historically used TWAIN and WIA (Windows Image Acquisition), and has moved toward driverless network scanning.",
        "Linux and Unix use SANE (Scanner Access Now Easy).",
        "macOS uses ICA / ImageCaptureCore."
      ]
    },
    {
      "kind": "paragraph",
      "text": "An ImageCaptureCore framework also exists on iOS/iPadOS for accessing cameras and external media, but the scanner-oriented ICScannerDevice story described here is the macOS scanning subsystem; cross-platform framework parity is version-dependent and should not be assumed."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to scanners"
    },
    {
      "kind": "paragraph",
      "text": "For scanners, ICA is the primary path on modern macOS:"
    },
    {
      "kind": "list",
      "items": [
        "A scanner is an \"ICA scanner\" when its macOS driver is an ICA device module, so it works in Image Capture or Preview without a separate vendor application.",
        "ICA models scanner-specific concepts — functional units, feeders, scan area, resolution — through ICScannerDevice and ICScannerFunctionalUnit.",
        "ICA increasingly reaches scanners without any vendor driver by speaking driverless network protocols directly. When a scanner supports eSCL/AirScan, it typically appears in Image Capture automatically."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and OCR"
    },
    {
      "kind": "paragraph",
      "text": "ICA is a capture subsystem: it delivers pixels — and, for document feeders, page-by-page images — not finished documents. PDF assembly and OCR sit above it."
    },
    {
      "kind": "list",
      "items": [
        "Applications built on ICA (Image Capture, Preview, third-party scan tools) take the scanned images and use higher-level macOS features to save or combine pages as PDF.",
        "OCR and searchable-PDF output are layered on by the application, typically using macOS text-recognition capabilities (for example the Vision framework's text recognition) or third-party engines. This is not a function of ICA or ImageCaptureCore itself."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "ICA remains the de facto scanning subsystem on macOS: essentially every scan through Image Capture, Preview, or an ImageCaptureCore-based application runs through it. Its role has shifted over time from hosting many bespoke vendor drivers toward brokering driverless network scanning (eSCL/AirScan), which is why so many current network scanners work on a Mac with nothing installed. For legacy USB-only devices, ICA device modules — and third-party bridges — keep older hardware usable after the 32-bit cutoff introduced in Catalina."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Unified, OS-level model for scanners and cameras shared across applications.",
        "Driverless operation for network devices via eSCL/AirScan — often no vendor software at all.",
        "Headless or UI developer choices (ImageCaptureCore versus ImageKit).",
        "A consistent scanner model exposing functional units, feeders, and scan parameters.",
        "On-demand device modules (Sierra and later) that reduce background resource use."
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
        "macOS-specific; not portable to Windows or Linux stacks.",
        "Dependent on vendor device modules for USB-only or non-eSCL hardware. Vendors often stop updating ICA modules, so devices can break on new macOS releases.",
        "The 32-bit cutoff in Catalina stranded many older scanners whose only drivers were 32-bit.",
        "Not a document or OCR pipeline — PDF assembly and text recognition are the application's responsibility.",
        "API evolution: legacy Carbon C entry points are deprecated, and individual ImageCaptureCore members have been deprecated across releases, so exact class and method availability must be checked per macOS version."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Related standards"
    },
    {
      "kind": "list",
      "items": [
        "TWAIN — cross-platform image-acquisition standard from the TWAIN Working Group (founded 1992); driver-based. Its driverless successor, TWAIN Direct (a RESTful API), reached version 1.0 in September 2019 and is not part of Apple's stack.",
        "eSCL — a Mopria Alliance driverless scan protocol (HTTP and XML discovered over Bonjour, working over Wi-Fi, Ethernet, and USB); Apple markets it as AirScan / AirPrint scanning.",
        "IPP Scan — the PWG (Printer Working Group) driverless-scan standard, related to the IPP and Mopria work.",
        "WIA — Windows Image Acquisition, the Windows analog.",
        "SANE — Scanner Access Now Easy, the Unix/Linux analog; its sane-airscan backend implements eSCL there.",
        "Bonjour / mDNS — Apple's zero-configuration networking, used to discover network scanners."
      ]
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
          "period": "1992",
          "text": "TWAIN Working Group founded (Aldus, Caere, Hewlett-Packard, Eastman Kodak, Logitech); cross-platform image acquisition standardized."
        },
        {
          "period": "~2001",
          "text": "Apple ships an Image Capture application with early Mac OS X (reported as 10.1; not confirmed to a primary source)."
        },
        {
          "period": "2009",
          "text": "OS X 10.6 \"Snow Leopard\": Apple introduces ImageCaptureCore and the ImageKit capture classes to replace the older Carbon-based Image Capture subframework; ICAObjectSendMessage() deprecated in 10.6."
        },
        {
          "period": "2016",
          "text": "macOS Sierra 10.12: ICA device modules launch on demand rather than persistently."
        },
        {
          "period": "2019",
          "text": "TWAIN Direct 1.0 (RESTful, driverless) finalized (September 19, 2019); separate from Apple's stack."
        },
        {
          "period": "2019",
          "text": "macOS Catalina 10.15 removes 32-bit support, breaking many 32-bit TWAIN scanner drivers and pushing users toward ICA modules, driverless scanning, or 64-bit third-party tools."
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
      "section": "tools",
      "slug": "twain"
    },
    {
      "section": "tools",
      "slug": "escl"
    },
    {
      "section": "guides",
      "slug": "scanner-driver-architecture"
    },
    {
      "section": "tools",
      "slug": "airprint"
    },
    {
      "section": "tools",
      "slug": "sane"
    },
    {
      "section": "tools",
      "slug": "wia"
    }
  ],
  "faqs": [
    {
      "q": "Does ICA stand for Image Capture Architecture or Image Capture Application?",
      "a": "Both usages exist. Apple's own developer material — for example Technical Q&A QA1946 — uses \"Image Capture Architecture (ICA),\" referring to the OS-level subsystem and its device modules. Some vendor documentation instead expands \"ICA\" as \"Image Capture Application,\" referring to the bundled Image Capture.app. On PrinterArchive we follow Apple's term for the architecture while noting that the app and the architecture share the name."
    },
    {
      "q": "What is the difference between an ICA driver and a TWAIN driver on a Mac?",
      "a": "An ICA driver is a device module written to Apple's Image Capture Architecture, so the scanner works directly in Image Capture and Preview with no separate vendor app. TWAIN is a cross-platform, driver-based standard that requires a locally installed driver. macOS did not standardize on TWAIN long-term, and the removal of 32-bit support in Catalina (10.15, 2019) disabled many 32-bit TWAIN drivers, pushing users toward ICA modules or driverless scanning."
    },
    {
      "q": "Why do some scanners work on a Mac with no software installed?",
      "a": "Many current network scanners support driverless scanning via eSCL, a Mopria Alliance protocol that Apple markets as AirScan/AirPrint scanning. It uses HTTP and XML discovered over Bonjour and works over Wi-Fi, Ethernet, and USB. When a scanner supports eSCL, macOS can discover and drive it through ICA without any vendor driver, so it appears in Image Capture automatically."
    },
    {
      "q": "Does ICA create PDFs or run OCR?",
      "a": "No. ICA is a capture subsystem: it delivers scanned images, and for document feeders it delivers page-by-page images. Assembling those pages into a PDF and running OCR to produce searchable text are handled above ICA by the application, typically using higher-level macOS features such as the Vision framework's text recognition or third-party engines."
    }
  ],
  "sources": [
    {
      "title": "Technical Q&A QA1946: Launch Behavior Changes for Image Capture Architecture (ICA) Device Modules on macOS Sierra 10.12",
      "url": "https://developer.apple.com/library/archive/qa/qa1946/_index.html",
      "publisher": "Apple Developer"
    },
    {
      "title": "Image Capture Services Programming Guide — Introduction",
      "url": "https://developer.apple.com/library/archive/documentation/Carbon/Conceptual/ImageCaptureServicesProgrammingGuide/01Introduction/01Introduction.html",
      "publisher": "Apple Developer"
    },
    {
      "title": "ImageCaptureCore framework",
      "url": "https://developer.apple.com/documentation/imagecapturecore",
      "publisher": "Apple Developer"
    },
    {
      "title": "ICScannerDevice",
      "url": "https://developer.apple.com/documentation/imagecapturecore/icscannerdevice",
      "publisher": "Apple Developer"
    },
    {
      "title": "ICScannerFunctionalUnit",
      "url": "https://developer.apple.com/documentation/imagecapturecore/icscannerfunctionalunit",
      "publisher": "Apple Developer"
    },
    {
      "title": "requestScan()",
      "url": "https://developer.apple.com/documentation/imagecapturecore/icscannerdevice/1508117-requestscan",
      "publisher": "Apple Developer"
    },
    {
      "title": "scannerDevice(_:didScanTo:)",
      "url": "https://developer.apple.com/documentation/imagecapturecore/icscannerdevicedelegate/1507845-scannerdevice",
      "publisher": "Apple Developer"
    },
    {
      "title": "TWAIN",
      "url": "https://en.wikipedia.org/wiki/TWAIN",
      "publisher": "Wikipedia"
    },
    {
      "title": "Mopria eSCL Specification",
      "url": "https://mopria.org/mopria-escl-specification",
      "publisher": "Mopria Alliance"
    },
    {
      "title": "Macintosh macOS 10.15 Catalina — Compatibility",
      "url": "https://help.brother-usa.com/app/answers/detail/a_id/166678",
      "publisher": "Brother USA"
    },
    {
      "title": "Apple's Latest MacOS Update Will Break Some Scanners",
      "url": "https://www.forbes.com/sites/marksparrow/2019/11/01/apples-latest-update-for-macos-has-broken-some-older-photo-scanners/",
      "publisher": "Forbes"
    },
    {
      "title": "sane-airscan (eSCL/AirScan universal backend)",
      "url": "https://github.com/alexpevzner/sane-airscan",
      "publisher": "GitHub"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "ica",
    "image capture architecture",
    "imagecapturecore",
    "icscannerdevice",
    "macos scanning",
    "image capture app",
    "imagekit",
    "device module",
    "escl",
    "airscan",
    "icdevicebrowser",
    "icscannerfunctionalunit"
  ],
  "cluster": "scanning-standards",
  "purpose": "Apple's macOS subsystem for discovering and controlling scanners, cameras, and multifunction image-input devices."
};

export default entry;
