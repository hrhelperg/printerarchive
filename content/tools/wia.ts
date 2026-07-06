import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "wia",
  "title": "WIA (Windows Image Acquisition)",
  "description": "Windows Image Acquisition (WIA): Microsoft's still-image capture platform for scanners and cameras — architecture, history, STI/TWAIN ties, and limits.",
  "summary": "Windows Image Acquisition (WIA) is Microsoft's still-image acquisition platform for Windows, first shipped in Windows Me and Windows XP. It is both an application programming interface (API) used by imaging software and a device driver interface (DDI) implemented by hardware vendors, letting any WIA application communicate with any WIA-class scanner or camera through one standardized contract. WIA is implemented as a Component Object Model (COM) out-of-process server: applications issue requests to a system WIA service, which routes them to the correct vendor minidriver, isolating driver faults from the calling application. WIA 1.0 (Me/XP) supported scanners, digital still cameras, and digital video; WIA 2.0 (Windows Vista) refocused on scanners, adopted stream-based transfers, removed video support, and steered cameras and video toward Windows Portable Devices (WPD), while a compatibility layer keeps WIA 1.0 applications and devices working. WIA builds on the lower-level Still Image architecture (STI) and coexists with TWAIN through a compatibility layer. It remains the in-box Windows scanning API underlying Windows Fax and Scan, though the broader industry has moved toward driverless network scanning protocols such as eSCL and WSD Scan.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "In the legacy Windows imaging stack, still-image devices were reached through a low-level hardware abstraction called the Still Image architecture (STI) together with a high-level, third-party API, TWAIN. Microsoft's documentation describes this arrangement for the Windows 2000 and Windows 95-or-later generation of operating systems."
    },
    {
      "kind": "paragraph",
      "text": "WIA 1.0 was introduced with Windows Millennium Edition (Windows Me) and Windows XP. Built on STI, it supported scanners, digital still cameras, and digital video equipment."
    },
    {
      "kind": "paragraph",
      "text": "In 2002 Microsoft released a WIA Automation Library for scripting, supported on Windows XP SP1 and later, superseding the older WIA 1.0 scripting interface. It was later incorporated into Windows Vista and continued in Windows 7 as the WIA Automation Layer, exposing acquisition to environments such as VB6, ASP, VBScript, and C#."
    },
    {
      "kind": "paragraph",
      "text": "WIA 2.0 shipped with Windows Vista. It targets scanners, moves to a stream-based data-transfer model, and drops video capture; Microsoft recommends Windows Portable Devices (WPD) for cameras and video going forward. A compatibility layer keeps WIA 1.0 applications and STI/TWAIN drivers working alongside native WIA 2.0 drivers."
    },
    {
      "kind": "paragraph",
      "text": "Windows 7 added device-initiated (\"push\") scanning enhancements: auto-configured scanning with parameters set at the scanner's front panel, automatic source selection for device-initiated scans, and Device Stage integration."
    },
    {
      "kind": "paragraph",
      "text": "A note on numbering: Microsoft's documentation consistently refers to \"WIA 1.0\" (Me/XP) and \"WIA 2.0\" (Vista and later). The driver-side version is reported through STI: a Vista-model driver returns STI_VERSION_3, which should not be conflated with the \"WIA 2.0\" API generation."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Before WIA, applications generally reached scanners and cameras through TWAIN layered on top of STI. That model required an independent hardware vendor (IHV) to supply a user-interface module and detailed device knowledge, and it produced inconsistent behavior across applications and devices."
    },
    {
      "kind": "paragraph",
      "text": "WIA standardizes the application-to-device contract so that a certified device is base-level compatible with any WIA application. It supplies a system default user experience, provides a device certification process, and isolates drivers in a service process for stability. It also enables hardware \"scan button\" push events to launch applications, reducing per-application and per-device customization."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "WIA is a layered, COM-based architecture. Microsoft's driver documentation identifies its main components:"
    },
    {
      "kind": "list",
      "items": [
        "WIA service — a system component that enumerates imaging devices, retrieves device properties, sets up device events, creates device objects, and routes application requests to the correct driver through the WIA DDI. It runs in a separate process from applications and in the same process as the drivers.",
        "WIA driver services library — a system-supplied helper library implementing device-independent operations such as initializing the driver item tree and reading, writing, and validating device properties.",
        "Vendor user-mode driver — maps WIA properties and commands to a specific device. The common, full-featured form is a minidriver (a COM object implementing the WIA minidriver interfaces). A simpler microdriver (a DLL exporting a few functions, for basic flatbed scanners only, not cameras) also exists, but Microsoft documents it as a WIA 1.0-only model — there is no corresponding WIA 2.0 microdriver model, and microdrivers run in WIA 1.0 compatibility mode under WIA 2.0."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Below the user-mode driver sits a kernel-mode bus driver that talks to the hardware. WIA ships built-in kernel-mode drivers for devices connected over USB, serial/parallel, SCSI, and FireWire."
    },
    {
      "kind": "paragraph",
      "text": "Devices are modeled as a tree of items rooted at the device. For a scanner, child items represent the flatbed, feeder, front/back (duplex) sources, and — in Vista and later — storage items. For a camera, child items represent images and folders. Applications query capabilities and set properties on these items, then transfer the selected items. Notably, the application, not the driver, performs the transfer after the user interface is dismissed."
    },
    {
      "kind": "paragraph",
      "text": "For data transfer, WIA 1.0 used the TYMED model (for example TYMED_FILE and TYMED_CALLBACK, with multipage variants). WIA 2.0 replaced this with a stream-based model built on IStream; the compatibility layer collapses the older variants to TYMED_FILE and TYMED_MULTIPAGE_FILE. TYMED_MULTIPAGE_FILE is what lets drivers support multi-page TIFF (or PDF) scans. The memory-bitmap format WiaImgFmt_MEMORYBMP is not supported in Vista drivers, and Vista drivers can transfer image data in bands."
    },
    {
      "kind": "paragraph",
      "text": "WIA 2.0 also ships replaceable driver add-ons: a segmentation filter (multi-region detection, such as several photos on one platen scanned to separate files), an image-processing filter (post-processing and live software preview of brightness/contrast adjustments), and an extensible error handler for status and error reporting such as \"Lamp warming up,\" \"Cover open,\" and \"Paper jam,\" with clean cancel support."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the capture pipeline"
    },
    {
      "kind": "paragraph",
      "text": "WIA is the middle layer between imaging applications and imaging hardware:"
    },
    {
      "kind": "paragraph",
      "text": "Application → WIA API → WIA service → WIA driver services library → vendor minidriver → kernel-mode bus driver → device"
    },
    {
      "kind": "paragraph",
      "text": "The driver's user-interface component runs in the application's process space, while the driver core runs in the WIA service's process space. The service ran in the Local System context on Windows XP and moved to the lower-privilege Local Service context starting with Windows Server 2003 and Windows Vista for security hardening."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "paragraph",
      "text": "Microsoft states that applications using the WIA API require Windows XP or later. This is the application-API requirement; WIA 1.0 itself also shipped in Windows Me."
    },
    {
      "kind": "list",
      "items": [
        "WIA 1.0: Windows Me and Windows XP.",
        "WIA 2.0: Windows Vista and later (including Windows 7). WIA 1.0 applications and STI/TWAIN drivers remain supported alongside native WIA 2.0 drivers via the compatibility layer."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Windows Vista added a WSD-WIA class driver so that network scanners implementing the Web Services on Devices for Scanner (WS-Scan) protocol work with WIA applications out of the box, translating WIA calls to WSD calls and back. Windows 7 added Device Stage integration and the device-initiated scanning enhancements noted above. WIA persists in later Windows releases, but this reference does not make version-specific claims beyond Windows 7."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to scanners"
    },
    {
      "kind": "paragraph",
      "text": "From Vista onward, WIA is primarily a scanner platform. It certifies scanner drivers, models scanner sources (flatbed, feeder, duplex front/back, and storage) as an item tree, and supplies a built-in segmentation filter for multi-region scanning. In Windows 7 it supports device-initiated scans configured at the scanner's front panel with automatic source selection."
    },
    {
      "kind": "paragraph",
      "text": "WIA-based scanners work with in-box applications such as Windows Fax and Scan and Paint without extra software, and WIA also drives WS-Scan network scanners through the WSD-WIA class driver."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and OCR"
    },
    {
      "kind": "paragraph",
      "text": "WIA has no built-in OCR engine and no native PDF-authoring service of its own; those functions live in applications built on top of it. What WIA provides at the capture layer is multi-page transfer: the TYMED_MULTIPAGE_FILE transfer type exists specifically so drivers can support multi-page TIFF or PDF scans, and the stream-based transfer model lets applications receive scanned pages for downstream assembly into PDFs or for feeding into OCR."
    },
    {
      "kind": "paragraph",
      "text": "In practice, PDF creation and text recognition are performed by the acquiring application — for example Windows Fax and Scan, or third-party document software — after WIA delivers the image data. The absence of native OCR and PDF generation in the WIA API is an accurate characterization based on the WIA documentation set, which defines image delivery and transfer capabilities rather than authoring services."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "WIA remains the in-box Windows scanning API for locally attached and WSD network scanners, and it still underlies Windows Fax and Scan."
    },
    {
      "kind": "paragraph",
      "text": "The broader industry, however, has moved toward driverless, network scanning protocols. Chief among them is eSCL (the scanning counterpart to AirPrint, also known as AirScan), whose specification is published by the Mopria Alliance, alongside WSD Scan. These let modern multifunction devices be scanned without a vendor driver; secondary sources report eSCL support across macOS, Windows, and Linux, though the authoritative primary fact is that the eSCL specification is published by Mopria."
    },
    {
      "kind": "paragraph",
      "text": "For cross-platform desktop applications, TWAIN — and its RESTful successor TWAIN Direct, announced by the TWAIN Working Group in 2019 — and, on Unix-like systems, SANE, remain the principal alternatives to WIA."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to STI and TWAIN"
    },
    {
      "kind": "paragraph",
      "text": "Microsoft documents the STI and TWAIN relationships explicitly."
    },
    {
      "kind": "paragraph",
      "text": "STI (Still Image architecture) is the low-level hardware abstraction WIA is built on. A WIA driver builds on STI and must at minimum expose the IStiUSD interface; STI has no reciprocal dependency on WIA. It is possible to write an STI-only minidriver, making a device an \"STI image device,\" but such a device gets a degraded experience — for example, an STI-only camera does not show thumbnails in Windows Explorer. STI runs in both the client and service processes, whereas WIA runs only in the service process."
    },
    {
      "kind": "paragraph",
      "text": "TWAIN is a separate, cross-platform imaging API and protocol maintained by the TWAIN Working Group; its standardization effort is commonly dated to 1992, with founding members including Aldus, Caere, Hewlett-Packard, Kodak, and Logitech. In the legacy model, TWAIN sat on top of STI as the high-level API. WIA does not require TWAIN, but Windows continues to support TWAIN alongside WIA, and WIA includes a TWAIN compatibility layer so TWAIN applications can use WIA-driver-based devices. IHVs historically shipped TWAIN data sources for device-specific support."
    },
    {
      "kind": "paragraph",
      "text": "Both WIA devices and STI devices register under the device interface class GUID_DEVINTERFACE_IMAGE ({6BDD1FC6-810F-11D0-BEC7-08002BE2092F}), available in Windows XP and later. WIA drivers also provide built-in support for the Picture Transfer Protocol (PTP) for cameras."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Standardization: one API for many devices; certified drivers are base-level compatible with all WIA applications.",
        "Stability and security: drivers are isolated in the WIA service process, and the service runs in the lower-privilege Local Service context on Windows Server 2003 and Vista onward.",
        "Out-of-box experience: WIA scanners work with in-box Windows applications, with push-button and device-initiated scanning and Device Stage integration on Windows 7.",
        "Built-in helpers: the system segmentation filter, image-processing filter, and error handler reduce driver code.",
        "Scripting and automation: the WIA Automation Layer exposes acquisition to VB6, ASP, VBScript, and C#.",
        "Standard protocol reuse: PTP for cameras and the WSD-WIA class driver for WS-Scan network scanners."
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
        "Windows-only: unlike TWAIN or SANE, WIA is not cross-platform; Microsoft describes it solely as a Windows platform.",
        "Video capture dropped in WIA 2.0: cameras and video are steered toward WPD.",
        "No native OCR or PDF generation in the API itself; those are application responsibilities.",
        "Compatibility caveats across versions: the Vista item-tree model differs from XP/Me, storage items are not translated for legacy applications, and Vista-driver-on-XP scenarios are only partially supported.",
        "Microdriver constraints: the microdriver model is WIA 1.0 only, limited to basic flatbed scanners (no cameras, no duplex), and runs in compatibility mode under WIA 2.0."
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
        "STI (Still Image architecture) — the low-level Windows foundation WIA builds on.",
        "TWAIN / TWAIN Direct — the cross-platform imaging API and protocol from the TWAIN Working Group, supported alongside WIA via a compatibility layer.",
        "WPD (Windows Portable Devices) — Microsoft's recommended API for cameras and portable media devices after WIA 2.0.",
        "PTP (Picture Transfer Protocol) — the camera transfer protocol supported by WIA drivers.",
        "WSD / WS-Scan (Web Services on Devices for Scanner) — the network-scanner protocol bridged to WIA via the WSD-WIA class driver in Vista.",
        "eSCL (Mopria) and SANE — driverless network scanning and the Unix-like scanning API, respectively, relevant as modern alternatives."
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
          "text": "TWAIN standardization effort launched by imaging-industry members (commonly cited; non-Microsoft source)."
        },
        {
          "period": "Windows 2000 / Windows 95 era",
          "text": "Windows imaging stack consists of STI (low-level) plus TWAIN (high-level API)."
        },
        {
          "period": "Windows Me / Windows XP",
          "text": "WIA 1.0 introduced, supporting scanners, digital cameras, and digital video."
        },
        {
          "period": "2002",
          "text": "WIA Automation Library released for scripting (Windows XP SP1 and later)."
        },
        {
          "period": "Windows Server 2003 / Vista era",
          "text": "WIA service moved from Local System to Local Service context for security."
        },
        {
          "period": "Windows Vista",
          "text": "WIA 2.0 released: stream-based transfers, scanner focus, video support removed, WPD recommended for cameras/video, WIA 1.0 compatibility layer, and the WSD-WIA class driver for WS-Scan network scanners; Vista-model drivers report STI_VERSION_3."
        },
        {
          "period": "Windows 7",
          "text": "auto-configured device-initiated scanning, automatic source selection, and Device Stage integration; WIA 1.0 and STI/TWAIN drivers still supported."
        },
        {
          "period": "2019",
          "text": "TWAIN Direct 1.0 (RESTful TWAIN) announced by the TWAIN Working Group (non-Microsoft source)."
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
      "section": "guides",
      "slug": "scanner-driver-architecture"
    },
    {
      "section": "tools",
      "slug": "ica"
    },
    {
      "section": "tools",
      "slug": "sane"
    },
    {
      "section": "tools",
      "slug": "escl"
    },
    {
      "section": "guides",
      "slug": "driverless-printing"
    }
  ],
  "faqs": [
    {
      "q": "What is WIA (Windows Image Acquisition)?",
      "a": "WIA is Microsoft's still-image acquisition platform for Windows, first shipped in Windows Me and Windows XP. It is both an API used by imaging applications and a device driver interface implemented by hardware vendors, letting any WIA application communicate with any WIA-class scanner or camera through one standardized interface."
    },
    {
      "q": "What is the difference between WIA 1.0 and WIA 2.0?",
      "a": "WIA 1.0 (Windows Me/XP) supported scanners, digital still cameras, and digital video and used the TYMED transfer model. WIA 2.0 (Windows Vista) refocused on scanners, adopted a stream-based transfer model built on IStream, removed video support, and recommended Windows Portable Devices (WPD) for cameras and video, while a compatibility layer keeps WIA 1.0 applications and devices working."
    },
    {
      "q": "How does WIA relate to STI and TWAIN?",
      "a": "WIA is built on the lower-level Still Image architecture (STI); a WIA driver must expose the IStiUSD interface, but STI does not depend on WIA. TWAIN is a separate cross-platform imaging API; WIA does not require it, but Windows still supports TWAIN and WIA includes a TWAIN compatibility layer so TWAIN applications can use WIA-driver-based devices."
    },
    {
      "q": "Does WIA include OCR or PDF creation?",
      "a": "No. WIA has no built-in OCR engine and no native PDF-authoring service. It provides multi-page image transfer (via TYMED_MULTIPAGE_FILE and stream-based transfers), and the acquiring application performs PDF assembly and text recognition after WIA delivers the image data."
    },
    {
      "q": "Is WIA cross-platform?",
      "a": "No. WIA is a Windows-only platform. For cross-platform scanning, TWAIN (and TWAIN Direct) and, on Unix-like systems, SANE are the principal alternatives, while driverless protocols like eSCL and WSD Scan serve modern network multifunction devices."
    }
  ],
  "sources": [
    {
      "title": "Windows Image Acquisition (WIA) — start page",
      "url": "https://learn.microsoft.com/en-us/previous-versions/windows/desktop/wia/-wia-startpage",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Overview of Microsoft STI and Microsoft WIA",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/image/overview-of-microsoft-sti-and-microsoft-wia",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "WIA Architecture Overview",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/image/wia-architecture-overview",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "WIA Compatibility Layer Data Transfers Overview",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/image/wia-compatibility-layer-data-transfers-overview",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "WIA Driver Versioning",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/image/wia-driver-versioning",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Developing a WIA Scanner Driver",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/image/developing-a-wia-scanner-driver",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "GUID_DEVINTERFACE_IMAGE",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/install/guid-devinterface-image",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Windows Image Acquisition drivers",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/image/windows-image-acquisition-drivers",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "TWAIN Working Group",
      "url": "https://twain.org/",
      "publisher": "TWAIN Working Group"
    },
    {
      "title": "Mopria eSCL Specification",
      "url": "https://mopria.org/mopria-escl-specification",
      "publisher": "Mopria Alliance"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "wia",
    "windows image acquisition",
    "wia 2.0",
    "sti still image architecture",
    "wia driver",
    "wia scanner api",
    "wsd-wia class driver",
    "tymed_multipage_file",
    "wia vs twain",
    "windows scanning api"
  ],
  "cluster": "scanning-standards",
  "purpose": "Microsoft's Windows still-image platform with a standardized API and driver interface for scanners and cameras."
};

export default entry;
