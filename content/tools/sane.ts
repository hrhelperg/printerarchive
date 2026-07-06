import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "sane",
  "title": "SANE (Scanner Access Now Easy)",
  "description": "SANE is the open, standardized API and network protocol that provides uniform access to scanners on Linux and other Unix-like systems.",
  "summary": "SANE (Scanner Access Now Easy) is an open application programming interface that provides uniform access to raster image acquisition hardware such as flatbed and sheet-fed scanners. It is both a public specification, the SANE Standard, and a reference implementation distributed mainly through the sane-backends and sane-frontends packages, and it is the de facto scanning framework on Linux and other Unix-like systems. Its defining idea is a clean split between frontends (applications that acquire images) and backends (drivers for specific devices), so each scanner needs only one driver that works with every SANE-compatible application. SANE exposes device capabilities as machine-readable option descriptors and leaves all user-interface presentation to the frontend, and it includes a network protocol (saned plus the net backend) for network-transparent scanning. Modern SANE increasingly reaches networked multifunction devices without per-model drivers through the in-tree escl backend and the external sane-airscan.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "SANE was created by David Mosberger-Tang and Andreas Beck, with the first public release in November 1996 (Wikipedia gives 1996-11-27)."
    },
    {
      "kind": "paragraph",
      "text": "The project publishes a formal written SANE Standard that documents the API and an associated network protocol, maintained separately from the reference code. The version index lists releases from 1.01 through 1.06; the latest finalized revision is version 1.06, last updated 2008-05-03, credited to Andreas Beck and David Mosberger. A next-generation revision is under development on a draft branch (draft-2)."
    },
    {
      "kind": "paragraph",
      "text": "The reference software evolved through the long-lived 1.0.x series of the sane-backends package (for example 1.0.29, 1.0.31, 1.0.32) and later development lines. The sane-backends 1.4.0 release was published in May 2025."
    },
    {
      "kind": "paragraph",
      "text": "A notable later addition was the built-in escl backend for driverless network scanning, whose source headers credit Touboul Nathane and Thierry Huchard (Ordissimo), copyright 2019; it was first shipped in the sane-backends 1.0.29 release (February 2020)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Before SANE, scanner support on Unix and Linux was fragmented: there was no common driver interface, so applications either bundled their own hardware support or simply did not support a given scanner. SANE's separation of frontend from backend addressed this directly:"
    },
    {
      "kind": "list",
      "items": [
        "Driver authors write one backend per device, usable by any frontend.",
        "Application authors target one API and gain access to every supported scanner.",
        "Device controls are separated from their user-interface representation, so the same backend serves command-line tools, GUIs, and network clients without change.",
        "Network-transparent scanning is part of the design."
      ]
    },
    {
      "kind": "paragraph",
      "text": "This contrasts with the mainstream Windows-world APIs. TWAIN, for example, has traditionally coupled the driver with a vendor-provided user-interface dialog; SANE instead exposes device capabilities as machine-readable option descriptors and leaves all UI to the frontend. (This is the accepted characterization; TWAIN also offers programmatic control paths.)"
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "The SANE API is a small C interface organized as a device lifecycle:"
    },
    {
      "kind": "list",
      "items": [
        "Initialization and teardown: sane_init() must be called first; sane_exit() releases resources.",
        "Discovery and connection: sane_get_devices() returns a list of available device descriptors; sane_open() and sane_close() connect and disconnect a device via an opaque handle.",
        "Configuration: sane_get_option_descriptor() exposes each controllable parameter, and sane_control_option() gets or sets it (with GET_VALUE, SET_VALUE, and SET_AUTO actions).",
        "Acquisition: sane_start() begins a frame; sane_get_parameters() reports the frame format, dimensions, depth, and bytes-per-line; sane_read() is called repeatedly to pull image data in chunks until an end-of-frame status; sane_cancel() aborts.",
        "I/O helpers: sane_set_io_mode() (blocking versus non-blocking), sane_get_select_fd() (a file descriptor for polling data readiness), and sane_strstatus() (status-code to string)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Option model. Each option carries a name, a human-readable title and description, a type (bool, int, fixed-point, string, button, group), a unit (such as pixels, mm, DPI, percent, microseconds), a constraint (none, range, or enumerated list), and a capability bitset. Setting an option can return flags such as SANE_INFO_INEXACT (value was rounded), SANE_INFO_RELOAD_OPTIONS (other options changed), or SANE_INFO_RELOAD_PARAMS (image parameters changed), which tells the frontend when to refresh its view of the device."
    },
    {
      "kind": "paragraph",
      "text": "Frame model. Grayscale and lineart arrive as a single frame; color can be delivered either interleaved in one frame or as separate red, green, and blue frames, in which case the frontend loops the start/read sequence per frame. Automatic document feeders are handled by repeating the acquisition loop."
    },
    {
      "kind": "paragraph",
      "text": "Network encoding. The SANE network protocol runs over TCP/IP and encodes its data in a big-endian word format, letting a client operate a remote device as if it were local."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the capture pipeline"
    },
    {
      "kind": "paragraph",
      "text": "SANE occupies the device-access layer of the scanning pipeline:"
    },
    {
      "kind": "list",
      "items": [
        "Hardware transport reaches the device over USB, SCSI, parallel, or network.",
        "A backend (driver) translates the standardized API into device-specific commands.",
        "The SANE API and libsane form the stable boundary between applications and drivers.",
        "A frontend acquires raw raster data: a CLI such as scanimage, a GUI such as XSane, Simple Scan, Skanlite, or gscan2pdf, or a cross-platform application such as NAPS2.",
        "Post-processing, including image cleanup, format encoding, PDF assembly, and OCR, happens above SANE, in the frontend or downstream tools."
      ]
    },
    {
      "kind": "paragraph",
      "text": "SANE itself delivers pixels and metadata; it does not perform OCR, PDF assembly, or color management."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "paragraph",
      "text": "Linux, BSD, and Unix: SANE is the primary, native scanning stack, and its backends and libsane are packaged by essentially every distribution."
    },
    {
      "kind": "paragraph",
      "text": "macOS: some SANE frontends and the framework can run on macOS, although macOS also has its own Image Capture / ICA scanning stack; cross-platform frontends such as NAPS2 target macOS."
    },
    {
      "kind": "paragraph",
      "text": "Windows and OS/2: SANE has been ported and some frontends run on Windows, but the mainstream native Windows APIs are TWAIN and WIA (Windows Image Acquisition), and SANE is not the default Windows scanning path."
    },
    {
      "kind": "paragraph",
      "text": "SANE is independent of the OS printing subsystem; it is not part of CUPS and does not use CUPS or IPP for its classic vendor backends."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to scanners"
    },
    {
      "kind": "paragraph",
      "text": "SANE reaches scanners through backends grouped roughly by:"
    },
    {
      "kind": "list",
      "items": [
        "Vendor and model backends such as epson2, genesys, pixma, fujitsu, mustek, and umax, each speaking a particular device's protocol over USB, SCSI, or parallel.",
        "The network backend (net), which connects to a remote host running saned.",
        "The escl backend, a driverless path that speaks the eSCL protocol used by many modern networked multifunction devices, so recent scanners work without a model-specific driver.",
        "The third-party sane-airscan backend by Alexander Pevzner, which supports both eSCL and Microsoft WSD (WS-Scan), with discovery via mDNS/DNS-SD (Avahi) and WS-Discovery. It is commonly preferred for fuller feature coverage than the in-tree escl backend."
      ]
    },
    {
      "kind": "paragraph",
      "text": "eSCL devices announce themselves on the network as _uscan._tcp and _uscans._tcp services."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and OCR"
    },
    {
      "kind": "paragraph",
      "text": "SANE performs neither PDF creation nor OCR; those are frontend or downstream concerns."
    },
    {
      "kind": "paragraph",
      "text": "Frontends such as gscan2pdf and NAPS2 call SANE to acquire pages, then assemble multi-page PDF files and invoke an OCR engine (commonly Tesseract) to produce searchable, text-layered PDFs."
    },
    {
      "kind": "paragraph",
      "text": "SANE's job ends at delivering the raster frames and their parameters; format encoding and text recognition sit above the API."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "SANE remains the standard scanning layer on Linux and Unix and is actively maintained, with a stable release in 2025. Its modern trajectory is toward driverless network scanning: the in-tree escl backend and the external sane-airscan let SANE frontends reach contemporary networked multifunction printers over eSCL and WSD without per-model drivers, mirroring the shift to driverless printing."
    },
    {
      "kind": "paragraph",
      "text": "For USB devices that expose IPP or eSCL over USB, the companion daemon ipp-usb (also by Alexander Pevzner) bridges USB to a local network socket so driverless backends can be used with USB-attached hardware. Traditional vendor backends remain essential for older and non-eSCL devices."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Clean frontend/backend separation, so one driver serves all applications.",
        "A machine-readable option model that is UI-agnostic and supports CLI, GUI, and network clients alike.",
        "Built-in network transparency via saned and the net backend.",
        "Broad hardware coverage across decades of scanners over USB, SCSI, and parallel.",
        "An open specification with open-source reference code.",
        "Driverless (eSCL and WSD) support for modern devices through escl and sane-airscan."
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
        "Backend coverage and quality vary by device; some scanners are unsupported or only partially supported.",
        "SANE is not the native scanning stack on Windows or macOS, where TWAIN, WIA, and ICA dominate.",
        "saned is explicitly not designed for exposure to the internet or untrusted networks; its access control (host lists and optional user credentials) is basic and intended for trusted LANs.",
        "The in-tree escl backend has historically lagged sane-airscan in features such as ADF handling, leading many users to the third-party backend.",
        "SANE stops at raster acquisition; PDF, OCR, and color management depend on other tools."
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
        "TWAIN, a cross-platform (Windows and macOS) scanner API that has traditionally coupled driver and UI, unlike SANE.",
        "WIA (Windows Image Acquisition), Microsoft's native imaging API.",
        "ISIS (Image and Scanner Interface Specification), used in production and document scanning.",
        "eSCL (AirScan), a driverless network scanning protocol reachable via the escl backend and sane-airscan.",
        "WSD / WS-Scan, Microsoft Web Services for Devices scanning, supported via sane-airscan.",
        "IPP and the ipp-usb bridge daemon, which enable driverless workflows including driverless scanning over USB."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The SANE network daemon, saned, runs on the machine with the scanner and answers requests from remote net-backend clients. Its control connection uses the IANA-registered sane-port on TCP/UDP 6566 (the older service name \"sane\" is deprecated); it can run standalone (with -a) or under a super-server such as inetd, xinetd, or systemd socket activation, and access is restricted by a host-based list in its configuration."
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
          "period": "1996 (November)",
          "text": "First public release of SANE, created by David Mosberger-Tang and Andreas Beck (Wikipedia gives 1996-11-27)."
        },
        {
          "period": "2008-05-03",
          "text": "SANE Standard version 1.06 finalized (latest finalized revision), by Andreas Beck and David Mosberger."
        },
        {
          "period": "2019",
          "text": "In-tree escl (eSCL) backend authored; source headers credit Touboul Nathane and Thierry Huchard (Ordissimo)."
        },
        {
          "period": "2019–2020 (sane-backends 1.0.29)",
          "text": "escl backend authored in 2019 (Ordissimo) and first shipped in the sane-backends 1.0.29 release (February 2020)."
        },
        {
          "period": "May 2025",
          "text": "sane-backends 1.4.0 released."
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
      "slug": "escl"
    },
    {
      "section": "guides",
      "slug": "cups-architecture"
    },
    {
      "section": "tools",
      "slug": "wia"
    },
    {
      "section": "tools",
      "slug": "ica"
    }
  ],
  "faqs": [
    {
      "q": "What is SANE?",
      "a": "SANE (Scanner Access Now Easy) is an open, standardized API and network protocol that provides uniform access to raster image acquisition hardware such as flatbed and sheet-fed scanners. It is both a published specification and a reference implementation, and it is the de facto scanning framework on Linux and other Unix-like systems."
    },
    {
      "q": "How does SANE differ from TWAIN?",
      "a": "SANE separates the driver (backend) from the application (frontend) and exposes device capabilities as machine-readable option descriptors, leaving all user-interface presentation to the frontend. TWAIN has traditionally coupled a vendor-provided UI dialog with the driver, though it also offers programmatic control paths."
    },
    {
      "q": "Can SANE scan over a network?",
      "a": "Yes. The saned daemon runs on the machine with the scanner, and remote clients use the net backend to operate the device as if it were local. The control connection uses TCP/UDP port 6566. saned is intended for trusted LANs only and is not designed for internet exposure."
    },
    {
      "q": "Does SANE support modern driverless scanners?",
      "a": "Yes. The in-tree escl backend speaks the eSCL protocol used by many networked multifunction devices, and the external sane-airscan backend supports both eSCL and Microsoft WSD with mDNS and WS-Discovery. For USB devices exposing eSCL over USB, the ipp-usb daemon bridges them to a local socket."
    },
    {
      "q": "Does SANE do OCR or create PDFs?",
      "a": "No. SANE delivers raster frames and their parameters; PDF assembly and OCR are handled above the API by frontends such as gscan2pdf and NAPS2, which typically invoke an OCR engine like Tesseract to produce searchable PDFs."
    }
  ],
  "sources": [
    {
      "title": "SANE Standard index (version list, current = 1.06)",
      "url": "https://sane-project.gitlab.io/standard/",
      "publisher": "SANE Project"
    },
    {
      "title": "The SANE Application Programmer Interface (API), SANE Standard",
      "url": "https://sane-project.gitlab.io/standard/1.01/api.html",
      "publisher": "SANE Project"
    },
    {
      "title": "SANE Standard Network Protocol",
      "url": "https://sane-project.gitlab.io/standard/1.01/net.html",
      "publisher": "SANE Project"
    },
    {
      "title": "sane(7) man page",
      "url": "https://manpages.ubuntu.com/manpages/bionic/man7/sane.7.html",
      "publisher": "Ubuntu / SANE Project"
    },
    {
      "title": "saned(8) — SANE network daemon",
      "url": "https://linux.die.net/man/8/saned",
      "publisher": "die.net Linux man pages / SANE Project"
    },
    {
      "title": "sane-escl(5) man page",
      "url": "https://manpages.ubuntu.com/manpages/focal/man5/sane-escl.5.html",
      "publisher": "Ubuntu / SANE Project"
    },
    {
      "title": "SANE Backends 1.0.29 release (escl introduced)",
      "url": "https://gitlab.com/sane-project/backends/-/releases/1.0.29",
      "publisher": "SANE Project"
    },
    {
      "title": "SANE Backends 1.4.0 release",
      "url": "https://gitlab.com/sane-project/backends/-/releases/1.4.0",
      "publisher": "SANE Project"
    },
    {
      "title": "escl.c backend source (author header)",
      "url": "https://gitlab.com/sane-project/backends/-/raw/master/backend/escl/escl.c",
      "publisher": "SANE Project"
    },
    {
      "title": "sane-airscan (eSCL + WSD backend)",
      "url": "https://github.com/alexpevzner/sane-airscan",
      "publisher": "Alexander Pevzner"
    },
    {
      "title": "sane-airscan(5) man page",
      "url": "https://man.archlinux.org/man/sane-airscan.5.en",
      "publisher": "Arch Linux man pages"
    },
    {
      "title": "Scanner Access Now Easy",
      "url": "https://en.wikipedia.org/wiki/Scanner_Access_Now_Easy",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "sane",
    "scanner access now easy",
    "scanner api",
    "sane-backends",
    "saned",
    "scanimage",
    "escl backend",
    "sane-airscan",
    "escl",
    "driverless scanning",
    "linux scanning",
    "frontend backend architecture"
  ],
  "cluster": "scanning-standards",
  "purpose": "An open, standardized API and network protocol for uniform access to scanners on Unix-like systems."
};

export default entry;
