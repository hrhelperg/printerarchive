import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "multifunction-scanning",
  "title": "Multifunction (MFP) Scanning",
  "description": "How the shared scan engine inside a multifunction printer works — capture, routing, driverless protocols (eSCL, WSD, IPP Scan), and standards.",
  "summary": "A multifunction printer (MFP), also called an all-in-one or multifunction device, combines printing, scanning, copying, and often faxing in one unit. Its scanner is not a bolt-on accessory but a shared imaging subsystem multiplexed across on-device services (copy, fax-out) and off-device destinations (a PC application, email, a network folder, USB, cloud). The Printer Working Group models this explicitly, treating Scan as one service among Print, Copy, FaxIn/FaxOut, Email, Transform, and Resource that share the same hardware. MFP scanning is distinguished from standalone scanning by routing and by device-driven \"push\" scan-to-destination, and the modern trend across Windows, macOS, and Linux is driverless network scanning via eSCL, WSD, and IPP Scan.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "The convergence of separate office machines into a single \"multifunction\" device is generally dated to the 1980s and 1990s. Accounts of copier-industry history describe a convergence in some high-end machines during the 1980s toward a device combining the roles of photocopier, fax machine, scanner, and network-connected printer, with digital copying, fax integration, and network connectivity maturing through the 1990s."
    },
    {
      "kind": "paragraph",
      "text": "On the desktop and home-office side, Hewlett-Packard's corporate history states that the HP OfficeJet, introduced in 1994, was an all-in-one desktop device combining print, fax, and copy functions in a single space-saving unit for home-office users. This characterization traces to HP's own vendor history rather than a neutral third party, and office and business MFP convergence in high-end copiers predates it; the claim is best read as HP's stated account rather than an independently verified industry \"first.\""
    },
    {
      "kind": "paragraph",
      "text": "The pivotal technical event for scanning was the transition from analog photocopiers, which optically project the original directly onto a drum, to digital copiers. A digital copier first scans the original into memory as a digital image and then prints from that image. Once the copy path became \"scan, then print,\" the captured image could just as easily be routed elsewhere — the technical foundation for scan-to-destination features."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "At the physical level, MFP scanning uses the same capture mechanisms as standalone scanners:"
    },
    {
      "kind": "list",
      "items": [
        "A flatbed platen — a fixed glass surface under which a moving sensor bar traverses the page — for books, fragile originals, and single sheets.",
        "An automatic document feeder (ADF) — which moves sheets past a stationary sensor — for multi-page batches. Higher-end ADFs support duplex (two-sided) capture, either by flipping the sheet or by using two sensor arrays."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The sensor (CIS or CCD, depending on the device) converts reflected light into a digital raster. From there, the MFP's controller applies the requested settings — resolution, color mode, page size, format — and then routes the resulting image according to which button the user pressed or which job a networked client submitted."
    },
    {
      "kind": "paragraph",
      "text": "The decisive difference from a standalone scanner is routing. On an MFP the scanned image can be sent to the device's own print engine (a copy), the fax modem (fax-out), an email server via SMTP (scan-to-email), a shared network folder via SMB, FTP, WebDAV, or NFS (scan-to-folder), a USB thumb drive at the front panel (scan-to-USB), or a connected computer's scanning application pulled via a driver or driverless network protocol."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "There are two broad control models for MFP scanning."
    },
    {
      "kind": "paragraph",
      "text": "Host-driven (\"pull\") scanning. A computer application drives the scan. On Windows this historically means a TWAIN data source or Microsoft's WIA (Windows Image Acquisition) driver; on Linux and Unix it means a SANE backend; on macOS it means the Image Capture / ICA framework. The application requests a scan and pulls the image back over USB or the network."
    },
    {
      "kind": "paragraph",
      "text": "Device-driven (\"push\") scanning and scan-to-destination. The user stands at the MFP's control panel, selects a destination and settings, and the device itself performs the scan and pushes the result to email, folder, USB, or cloud without a host application initiating it. This is the model characteristic of MFPs, and it depends on the device holding its own embedded configuration — SMTP server settings and an address book for email, folder paths and credentials for SMB, and so on."
    },
    {
      "kind": "paragraph",
      "text": "Modern network MFPs also expose an Embedded Web Server (EWS) for configuration and increasingly implement standardized driverless network scan protocols, so any conformant client can drive the scan engine without a vendor-specific driver:"
    },
    {
      "kind": "list",
      "items": [
        "eSCL — an HTTP-based scanning specification published and maintained by Mopria (it originated with HP/Apple and is the protocol behind Apple's AirScan). Mopria describes eSCL as defining the interfaces, data types, and behavioral model for driving a scanner engine from client classes including Software, Cloud Services, Mobile Device, and Embedded Web Server.",
        "WSD Scan (Web Services for Devices) — Microsoft's web-services scan protocol; Windows ships an inbox WIA class driver (WSDScan.sys), a reusable kernel driver compliant with the Windows Device Protocol for scanners.",
        "IPP Scan (PWG 5100.17) — an Internet Printing Protocol binding of the PWG Semantic Model Scan service, designed so IPP can carry scanning as well as printing on the same device."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Processing pipeline"
    },
    {
      "kind": "paragraph",
      "text": "A representative MFP scan pipeline runs through the following stages:"
    },
    {
      "kind": "list",
      "items": [
        "Selection — the user, at the panel or via a client, chooses source (platen or ADF), resolution, color mode, page size, duplex, and destination or format.",
        "Capture — the sensor digitizes each page; the ADF advances sheets; duplex captures both sides.",
        "Image processing — the controller may apply auto-exposure, deskew, background removal, blank-page detection, and, on the platen, region detection. Microsoft's WIA driver interface exposes exactly this kind of function: the IWiaSegmentationFilter::DetectRegions method determines the subregions of an image laid out on the flatbed platen so that each subregion can be acquired into a separate image item.",
        "Encoding — the raster is compressed and wrapped into a file format (commonly PDF or PDF/A for documents; TIFF or JPEG for images). OCR may be applied to produce a searchable PDF.",
        "Routing/delivery — the file is handed to the chosen service: the print engine (copy), the fax modem, SMTP, SMB/FTP/WebDAV/NFS, USB mass storage, a cloud connector, or streamed back to the host application.",
        "Job management — on networked devices the job carries status, and PWG scan standards define remote service, device, and job management for network scanners."
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
        "Consolidation — one device, one footprint, one network address for multiple document functions.",
        "Shared-engine efficiency — the scan hardware is reused for copy, fax-out, and digital capture, avoiding duplicate sensors.",
        "Walk-up digitization — scan-to-email, scan-to-folder, and scan-to-USB let a user digitize and distribute a paper document with no PC and no driver install.",
        "Workflow integration — direct delivery into email, file shares, and cloud connectors turns paper into a networked document at the point of capture.",
        "Standardization and driverless operation — eSCL, WSD, and IPP Scan allow modern MFPs to be driven by phones, tablets, and operating systems without vendor drivers."
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
        "Shared-resource contention — because the engine is shared, heavy print or copy load can queue against scan jobs; vendors mitigate this with batch or job-build modes that scan to memory first.",
        "Configuration burden for scan-to-destination — scan-to-folder in particular requires network shares, credentials, and correct SMB versions. Administrators who lock networks down to SMBv3 (disabling SMBv1/v2) can break scan-to-folder on MFPs that do not support SMBv3, and scan-to-email similarly breaks as mail providers deprecate legacy SMTP AUTH.",
        "Security surface — an MFP that holds SMTP credentials, address books, and file-share logins, plus an Embedded Web Server and stored scan images, is a networked endpoint that must be secured and patched.",
        "Format and quality ceilings — walk-up presets favor convenience; fine control over custom resolution, color depth, or precise cropping may still require a host TWAIN, WIA, or SANE session.",
        "Fragmented protocol support — a given device may implement some but not all of eSCL, WSD, and IPP Scan, and vendor implementations vary in completeness."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF"
    },
    {
      "kind": "paragraph",
      "text": "PDF is the dominant delivery format for MFP scanning because it packages multi-page, mixed-content documents into a single portable file. MFPs typically offer plain image PDF, searchable PDF (an image plus an OCR text layer), and often PDF/A for archival use. PDF appears among the standard MFP scan output formats alongside TIFF and JPEG."
    },
    {
      "kind": "paragraph",
      "text": "In practice the MFP is one of the most common on-ramps for turning paper into PDF at scale: the scan-to-PDF-to-email or scan-to-PDF-to-folder chain is a canonical office workflow."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "The scanner and printer inside an MFP are physically distinct engines that share a controller, a network identity, a control panel, and a power supply. Their tightest coupling is the copy function, which is literally the scan engine feeding the print engine."
    },
    {
      "kind": "paragraph",
      "text": "Standards reflect this shared identity. IPP Scan (PWG 5100.17) deliberately binds scanning onto the same Internet Printing Protocol used for printing, and the Mopria and AirPrint ecosystems pair eSCL scanning with IPP-based printing so that a single certified device answers for both."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to workflows"
    },
    {
      "kind": "paragraph",
      "text": "MFP scanning is the capture stage of document workflows. Beyond ad-hoc scan-to-email, MFPs feed:"
    },
    {
      "kind": "list",
      "items": [
        "File-share and document-management ingestion via SMB, FTP, WebDAV, and NFS destinations.",
        "Cloud imaging, which the PWG models explicitly in PWG 5109.1 (Cloud Imaging Requirements and Model) and which eSCL anticipates by naming \"Cloud Services\" as a client class.",
        "Batch capture modes — vendor features such as Ricoh's Batch Mode or Toshiba's Job Build — that let an operator scan large jobs in segments and process them collectively."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The scan-to-destination configuration — address books, folder mappings, credentials, default formats — is where the MFP becomes an embedded workflow node rather than a simple peripheral."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to standards"
    },
    {
      "kind": "list",
      "items": [
        "TWAIN — a cross-platform application-to-scanner API maintained by the TWAIN Working Group, built on a three-layer model (application, source manager, data source). It provides the fine device control valued by professional capture software.",
        "WIA (Windows Image Acquisition) — Microsoft's Still Image (STI)-based imaging architecture, implemented as a service (wiaservc.dll) hosted in svchost together with user-mode still-image drivers and kernel-mode bus drivers. Microsoft accepts only WIA drivers for in-box scanner support and no longer ships TWAIN data sources with Windows; a TWAIN compatibility layer remains available.",
        "SANE — the \"Scanner Access Now Easy\" API on Linux and Unix; backends such as sane-airscan provide driverless scanning by implementing eSCL and WSD.",
        "PWG standards — PWG 5108.02 (Network Scan Service Semantic Model, 2009), PWG 5108.01 (MFD Model and Common Semantics, 2011), PWG 5100.17 (IPP Scan, 2014), and PWG 5109.1 (Cloud Imaging, 2015). The MFD model enumerates Print, Scan, Copy, FaxIn, FaxOut, EmailIn, EmailOut, Transform, and Resource as services that may share a device.",
        "Mopria eSCL — a vendor-neutral network scan protocol, also the basis of Apple's AirScan/AirPrint scanning.",
        "WSD / WS-Scan — Microsoft's web-services device protocol for network scanners."
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
        "Windows — WIA is the native architecture; WSD Scan provides inbox class-driver support for network web-services scanners through WSDScan.sys, which is compliant with the Windows Device Protocol for scanners. TWAIN remains available via a compatibility layer.",
        "macOS and iOS — Image Capture and the ICA framework drive scanners; AirScan (eSCL over AirPrint) provides driverless network scanning.",
        "Linux and Unix — SANE, with the sane-airscan backend, implements both eSCL and WS-Scan and auto-selects between them. This backend has been tested across devices from Brother, Canon, Dell, Kyocera, Lexmark, Epson, HP, Panasonic, Ricoh, Samsung, and Xerox, among others."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The clear modern trend across all three platforms is driverless operation via eSCL, WSD, and IPP Scan, reducing reliance on vendor-specific drivers."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "MFP scanning remains central to office document capture even as standalone fax and dedicated scanners decline. The active direction is fourfold: driverless, standards-based network scanning (eSCL, WSD, IPP Scan) so phones, tablets, and any-OS clients can scan without drivers; direct-to-cloud and direct-to-workflow delivery; searchable-PDF and OCR performed at the device; and hardening of the scan-to-destination surface as SMBv1/v2 and legacy SMTP AUTH are retired."
    },
    {
      "kind": "paragraph",
      "text": "That MFPs continue to be Mopria- and AirPrint-certified, and that Microsoft, Apple, and the SANE project all maintain driverless scan paths, indicates the category is being modernized rather than deprecated."
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
          "period": "1980s",
          "text": "Convergence begins in some high-end machines toward a combined photocopier, fax, scanner, and network-printer device."
        },
        {
          "period": "1990s",
          "text": "Multifunctionality matures on office copiers: digital copying, fax integration, and network connectivity."
        },
        {
          "period": "1994",
          "text": "HP introduces the HP OfficeJet, described by HP's corporate history as an all-in-one desktop device combining print, fax, and copy for home-office users."
        },
        {
          "period": "2009",
          "text": "PWG 5108.02, Network Scan Service Semantic Model and Service Interface v1.0 (April 10, 2009)."
        },
        {
          "period": "2011",
          "text": "PWG 5108.01, MFD Model and Common Semantics v1.0 (April 15, 2011), enumerating Print, Scan, Copy, Fax, and other MFD services."
        },
        {
          "period": "2014",
          "text": "PWG 5100.17, IPP Scan Service (September 18, 2014)."
        },
        {
          "period": "2015",
          "text": "PWG 5109.1, Cloud Imaging Requirements and Model (June 19, 2015)."
        },
        {
          "period": "Ongoing",
          "text": "eSCL/AirScan promoted via AirPrint; the sane-airscan and sane-escl backends, new to Debian 11 \"bullseye,\" provide driverless network scanning."
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
      "slug": "adf-scanners"
    },
    {
      "section": "workflows",
      "slug": "scan-to-email"
    },
    {
      "section": "workflows",
      "slug": "scan-to-folder"
    },
    {
      "section": "guides",
      "slug": "network-scanners"
    },
    {
      "section": "guides",
      "slug": "scanner-driver-architecture"
    },
    {
      "section": "guides",
      "slug": "driverless-printing"
    }
  ],
  "faqs": [
    {
      "q": "How is MFP scanning different from using a standalone scanner?",
      "a": "The key difference is routing. In an MFP the scan engine is shared and its output can be sent to the print engine (a copy), the fax modem, an email server, a network folder, a USB drive, cloud storage, or a host application. MFPs also support device-driven \"push\" scan-to-destination, where the device performs and delivers the scan from its own control panel without a host computer."
    },
    {
      "q": "What is driverless MFP scanning?",
      "a": "Driverless scanning lets any conformant client drive an MFP's scanner without a vendor-specific driver, using standardized network protocols: eSCL (Mopria, and the basis of Apple AirScan), WSD Scan (Microsoft web services for devices), and IPP Scan (PWG 5100.17). Windows, macOS, iOS, and Linux (via SANE's sane-airscan) all maintain driverless scan paths."
    },
    {
      "q": "Why does scan-to-folder sometimes stop working after a network update?",
      "a": "Scan-to-folder depends on the MFP holding correct network shares, credentials, and SMB protocol support. When administrators disable older SMB versions (SMBv1/v2) and require SMBv3, an MFP that does not support SMBv3 can no longer reach the folder. Scan-to-email can break similarly when mail providers retire legacy SMTP AUTH."
    },
    {
      "q": "What file formats do MFPs produce when scanning?",
      "a": "Common formats are PDF for documents (including searchable PDF with an OCR text layer and PDF/A for archival), and TIFF or JPEG for images. PDF is the dominant format because it packages multi-page, mixed-content documents into a single portable file, making the MFP a common on-ramp for turning paper into PDF."
    }
  ],
  "sources": [
    {
      "title": "Multifunction printer",
      "url": "https://en.wikipedia.org/wiki/Multifunction_printer",
      "publisher": "Wikipedia"
    },
    {
      "title": "Photocopier",
      "url": "https://en.wikipedia.org/wiki/Photocopier",
      "publisher": "Wikipedia"
    },
    {
      "title": "PWG Published Standards (MFD Model 5108.01; Scan Semantic Model 5108.02; IPP Scan 5100.17; Cloud Imaging 5109.1)",
      "url": "https://www.pwg.org/standards.html",
      "publisher": "Printer Working Group"
    },
    {
      "title": "IPP Scan Service, PWG 5100.17-2014 (PDF)",
      "url": "https://ftp.pwg.org/pub/pwg/candidates/cs-ippscan10-20140918-5100.17.pdf",
      "publisher": "Printer Working Group"
    },
    {
      "title": "IWiaSegmentationFilter::DetectRegions (WIA DDI)",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/ddi/wia_lh/nf-wia_lh-iwiasegmentationfilter-detectregions",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "WIA with Web Services for Devices (WSD Scan / WSDScan.sys)",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/image/wia-with-web-services-for-devices",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "TWAIN compatibility (Windows)",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/image/twain-compatibility",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "WIA Core Components",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/image/wia-core-components",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Overview of Microsoft STI and Microsoft WIA",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/image/overview-of-microsoft-sti-and-microsoft-wia",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Mopria eSCL Specification",
      "url": "https://mopria.org/mopria-escl-specification",
      "publisher": "Mopria Alliance"
    },
    {
      "title": "sane-airscan (eSCL and WSD backend for scanners and MFPs)",
      "url": "https://github.com/alexpevzner/sane-airscan",
      "publisher": "SANE project (A. Pevzner)"
    },
    {
      "title": "SANE over Network (Debian 11 bullseye packaging)",
      "url": "https://wiki.debian.org/SaneOverNetwork",
      "publisher": "Debian Project"
    },
    {
      "title": "eSCL — Debian Wiki",
      "url": "https://wiki.debian.org/eSCL",
      "publisher": "Debian Project"
    },
    {
      "title": "The HP OfficeJet Multipurpose Printer (vendor history — treat as HP's stated claim)",
      "url": "https://www.hewlettpackardhistory.com/item/a-multi-purpose-printer/",
      "publisher": "HP corporate history"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "multifunction printer",
    "mfp scanning",
    "all-in-one scanner",
    "scan-to-email",
    "scan-to-folder",
    "escl",
    "wsd scan",
    "ipp scan",
    "driverless scanning",
    "twain",
    "wia",
    "sane"
  ],
  "cluster": "scanning-hardware",
  "modernTools": [
    "smart-printer"
  ],
  "difficulty": "intermediate",
  "estimatedTime": "10 min read"
};

export default entry;
