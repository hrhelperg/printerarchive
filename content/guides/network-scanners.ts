import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "network-scanners",
  "title": "Network Scanners",
  "description": "How network scanners work: eSCL/AirScan and WSD driverless scanning, scan servers, and scan-to-email/folder push workflows across OSes.",
  "summary": "A network scanner is any document- or image-capture device that delivers output over a computer network rather than exclusively through a locally attached cable. The category spans dedicated network scanners, multifunction printer/peripherals (MFPs), scan servers that export a locally attached scanner to clients, and device-driven scan-to-destination workflows. Modern network scanning is dominated by two vendor-neutral \"driverless\" protocols: eSCL (marketed by Apple as AirScan/AirPrint scanning, with the specification published by the Mopria Alliance) and Microsoft's WSD/WS-Scan, built on the Devices Profile for Web Services. Both are XML-over-HTTP/SOAP protocols that let an operating system drive a scanner without a manufacturer-specific driver. Alongside these client-driven \"pull\" models, device-driven \"push\" workflows send finished files directly to email (SMTP), network folders (SMB/CIFS, FTP), or downstream systems.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "A network scanner is any document- or image-capture device that delivers its output over a computer network rather than exclusively through a locally attached cable (USB, SCSI, parallel). In practice the term covers three overlapping arrangements:"
    },
    {
      "kind": "list",
      "items": [
        "Devices with a network interface — a dedicated document scanner or, far more commonly, a multifunction printer/peripheral (MFP) with an Ethernet or Wi-Fi connection that can be driven from, or push files to, other machines.",
        "Scan servers / scan-sharing software — a host computer (or the device's own firmware) that exports an attached scanner to network clients, or that receives and routes scanned files.",
        "Scan-to-destination workflows — the device initiates the transfer itself, sending a finished file to email (SMTP), a network folder (SMB/CIFS, FTP), or a content system, with no scanning application running on a client."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Two vendor-neutral \"driverless\" protocols dominate modern network scanning. eSCL is marketed by Apple as AirScan / AirPrint scanning, and its specification is published by the Mopria Alliance. WSD / WS-Scan is Microsoft's application of Web Services for Devices to scanning, built on the Devices Profile for Web Services (DPWS). Both are XML-over-HTTP/SOAP protocols that let an operating system drive a scanner without a manufacturer-specific driver."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Network scanning is best understood as a layered accumulation of capabilities rather than a single invention. This account anchors only to datable, sourced milestones and avoids \"first-ever\" claims."
    },
    {
      "kind": "paragraph",
      "text": "On Unix-like systems, the SANE (Scanner Access Now Easy) project defined a manufacturer-agnostic scanner API and, through its network daemon saned and the client-side net backend, allowed a host with an attached scanner to make that scanner available to other machines. This is a classic scan-server model: the scanner stays locally attached to one machine while clients reach it over SANE's own protocol on TCP port 6566."
    },
    {
      "kind": "paragraph",
      "text": "Microsoft shipped the Web Services on Devices API (WSDAPI) in Windows Vista as part of the \"Windows Rally\" technologies, implementing DPWS. DPWS was initially published in May 2004, submitted to OASIS in July 2008, and DPWS 1.1 was approved as an OASIS Standard — together with WS-Discovery 1.1 and SOAP-over-UDP 1.1 — on 30 June 2009. WSD scanning (WS-Scan) is Microsoft's application of this stack to scanners."
    },
    {
      "kind": "paragraph",
      "text": "The Printer Working Group published PWG 5100.17, \"IPP Scan Service,\" dated 18 September 2014, defining a binding of the PWG Semantic Model scan service over the Internet Printing Protocol. IPP Scan is a separate lineage from eSCL and WSD and is not the protocol most consumer operating systems use for driverless scanning."
    },
    {
      "kind": "paragraph",
      "text": "eSCL is an XML-over-HTTP scanning protocol exposed by Apple as AirScan/AirPrint scanning, with its specification published by the Mopria Alliance, which also certifies devices to it. (The exact origin of eSCL is disputed in community documentation; what is well-supported is that Mopria publishes the specification and certifies devices.) For Windows, Mopria states that Windows 10/11 can install Mopria-certified scanners without a manufacturer driver, requiring the June 2022 Update or greater."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Network scanning splits into two fundamentally different control directions."
    },
    {
      "kind": "paragraph",
      "text": "Pull (client-driven / driverless). The client — a PC, Mac, or mobile OS — discovers the scanner, asks it for its capabilities, submits a scan job, and retrieves the resulting image data. This is how eSCL and WSD/WS-Scan operate."
    },
    {
      "kind": "paragraph",
      "text": "The eSCL flow is commonly documented (from community reverse-engineering, not the licensed Mopria text) as HTTP requests such as GET /eSCL/ScannerStatus and GET /eSCL/ScannerCapabilities, followed by a POST of a scan-settings XML document to /eSCL/ScanJobs. The scanner is reported to respond 201 Created with a Location header naming the new job resource; the client then polls status and downloads the finished page image. Everything rides on HTTP(S) and XML. These endpoint details should be treated as commonly documented rather than authoritative."
    },
    {
      "kind": "paragraph",
      "text": "The WSD/WS-Scan flow is built on SOAP over HTTP within DPWS: the client sends request operation elements and the WSD Scan Service returns the corresponding responses (or an error). On Windows, the device is surfaced through the WIA (Windows Image Acquisition) layer."
    },
    {
      "kind": "paragraph",
      "text": "Push (device-driven / scan-to-destination). The operator stands at the device, selects a destination on its panel, and the firmware transmits the finished file directly — to email via SMTP, to a shared folder via SMB/CIFS or FTP, or into a document system. No client-side scanning application is involved; the network is used as a delivery channel, not a control channel."
    },
    {
      "kind": "paragraph",
      "text": "A third, older middle ground is the scan-server export model (SANE saned), where the scanner is physically attached to a server that makes it appear as a local scanner to remote clients."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "At a network level, four building blocks recur."
    },
    {
      "kind": "list",
      "items": [
        "Discovery. eSCL uses DNS-SD / mDNS (Bonjour/Avahi), advertising the service types _uscan._tcp (cleartext) and _uscans._tcp (TLS); DNS-SD itself is defined in RFC 6763. WSD uses WS-Discovery, in which devices answer multicast Probe and Resolve messages over UDP per DPWS; Windows surfaces this through its Function Discovery provider.",
        "Capability negotiation. The client retrieves a machine-readable description of resolutions, color modes, input sources (flatbed/ADF), duplexing, and output formats before submitting a job.",
        "Job control and transfer. Jobs are created, monitored, and their image data returned over the same HTTP/SOAP channel.",
        "Transport security. eSCL supports TLS (the _uscans._tcp / HTTPS variant); WSD can carry WS-Security within DPWS. Push workflows rely on the security of the underlying delivery protocol (for example SMTP with STARTTLS/SMTPS, or authenticated SMB)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "On the host side, operating systems wrap these into their native imaging stacks: WIA on Windows, Image Capture on macOS, and SANE on Linux/Unix (with sane-airscan handling both eSCL and WSD, and sane-escl handling eSCL)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Processing pipeline"
    },
    {
      "kind": "paragraph",
      "text": "A representative end-to-end pull scan proceeds roughly as follows; details vary by protocol and device."
    },
    {
      "kind": "list",
      "items": [
        "Discovery — the client locates the device (mDNS _uscan._tcp for eSCL; WS-Discovery Probe/Resolve for WSD).",
        "Capability query — the client fetches supported resolutions, color modes, sources, and formats.",
        "Job submission — the client posts scan settings (resolution, area, color, format, duplex).",
        "Acquisition — the imaging hardware captures the page(s); ADF devices feed sheets sequentially, optionally duplex.",
        "On-device processing — cropping, deskew, blank-page removal, and compression may be applied in firmware (device-dependent).",
        "Encoding — pages are encoded, commonly as JPEG or wrapped into PDF (including searchable PDF where the device offers OCR), or TIFF/PNG.",
        "Transfer / retrieval — pull: the client downloads job data and assembles the file; push: the device transmits the file to the chosen destination.",
        "Delivery / post-processing — the file lands in an application, a folder, an inbox, or a downstream workflow for indexing and archival."
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
        "No manufacturer driver required. eSCL and WSD let an operating system drive certified devices out of the box, reducing driver maintenance and improving long-term compatibility.",
        "Multi-user access. One networked device serves many clients without per-desk cabling.",
        "Direct-to-destination delivery. Scan-to-email and scan-to-folder remove the client entirely for routine capture.",
        "Cross-platform reach. The same eSCL device is usable from Windows, macOS (Image Capture), and Linux (SANE) because the protocol is vendor-neutral.",
        "Standards-based discovery. Reliance on DNS-SD (RFC 6763) and WS-Discovery means devices can be found with general-purpose tooling."
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
        "Feature coverage varies. Driverless protocols expose a common subset; some advanced or vendor-specific capabilities may still require the manufacturer's own software.",
        "Discovery fragility. mDNS and WS-Discovery can be blocked by VLAN segmentation, firewalls, or \"AP/client isolation\" on Wi-Fi networks, so a device present on the wire may not be reachable by a client on a different segment.",
        "Driverless-mode enumeration defects. Real-world bugs can disrupt driverless operation independently of the network. In late 2024, a Windows 11 24H2 defect affected USB-connected eSCL multifunction devices that failed to switch out of eSCL mode into USB mode so scanner drivers could be matched — a driver-matching/enumeration failure rather than mDNS or WS-Discovery being blocked. Microsoft subsequently addressed it via KB5048667 (10 December 2024).",
        "Two incompatible driverless stacks. eSCL and WSD are different protocols; a device may support one, both, or neither, and WSD-only devices cannot use the eSCL-over-USB (ipp-usb) path.",
        "Push-workflow security exposure. Scan-to-email and scan-to-folder can leave documents in unprotected inboxes or shares unless authentication and encryption are configured.",
        "Legacy SANE net model is not general-purpose. The SANE net backend is meant for exporting a SANE-supported scanner from a specific server, not for reaching arbitrary network scanners."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF"
    },
    {
      "kind": "paragraph",
      "text": "PDF is the dominant container for network-scanned documents, but it is not part of the transport protocols themselves. eSCL and WSD move image data (commonly JPEG-encoded page images or raw raster); assembly into a single PDF — and, where offered, a searchable PDF produced by on-device or downstream OCR — happens in the device firmware, in the OS imaging utility (for example, macOS Image Capture can save directly to PDF), or in workflow software. For archival capture the relevant durability standard is PDF/A, though whether a given device or workflow emits PDF/A is device- and software-specific and should not be assumed."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "Most network scanners in the field are the scan side of a multifunction printer/peripheral (MFP), and this coupling is deliberate at the protocol level."
    },
    {
      "kind": "list",
      "items": [
        "eSCL is the scanning counterpart to AirPrint in Apple's ecosystem — an AirPrint MFP with a scanner is expected to expose eSCL.",
        "Mopria defines both the IPP-based printing standard and the eSCL scanning standard, and certifies MFPs against them.",
        "On Windows, the modern print platform treats print and scan together: the Print Support App (PSA) model pairs IPP printing with eSCL and WS-Scan scanning, and Microsoft has signaled a shift toward inbox IPP drivers, with a driver-ranking change dated 1 July 2026 that prefers the Microsoft IPP inbox class driver over third-party drivers for new installs."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The practical consequence is that printing and scanning on the same device increasingly share discovery (mDNS/DNS-SD), transport (HTTP/IPP/eSCL), and a driverless philosophy."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to workflows"
    },
    {
      "kind": "paragraph",
      "text": "Network scanning is the entry point of most document-capture workflows."
    },
    {
      "kind": "list",
      "items": [
        "Scan-to-email (SMTP). The device converts the scan to a file and emails it directly; this requires SMTP server, port, authentication, and encryption configuration, and is best suited to quick, low-sensitivity sharing.",
        "Scan-to-folder / scan-to-network (SMB/CIFS, FTP). The device deposits files into a shared folder for structured storage or downstream processing; this requires a path, credentials, and permissions.",
        "Client-driven capture (eSCL/WSD/SANE). For ad-hoc or application-integrated scanning, the workflow starts in software (WIA, Image Capture, SANE scanimage, or a capture SDK) that pulls from the device."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Downstream, captured files feed indexing, OCR, records management, and archival stages; the network scanner is the point at which paper becomes a routable digital object."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to standards"
    },
    {
      "kind": "list",
      "items": [
        "eSCL — specification published by the Mopria Alliance; an XML-over-HTTP(S) model for driving a scanner engine from software, cloud, mobile, and embedded-web-server clients.",
        "WSD / WS-Scan — Microsoft's scanning application of DPWS, which composes WS-Discovery, WS-Eventing, WS-MetadataExchange, WS-Transfer, WS-Addressing, and SOAP 1.2. DPWS 1.1 is an OASIS Standard (30 June 2009).",
        "PWG IPP Scan — PWG 5100.17 (18 September 2014) binds the PWG Semantic Model scan service over IPP.",
        "DNS-SD — RFC 6763 (DNS-Based Service Discovery, February 2013) underpins eSCL discovery via _uscan._tcp / _uscans._tcp.",
        "SANE — the de facto scanner API on Unix-like systems, with the saned network daemon for scanner export."
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
        "Windows. Networked WSD scanners are supported through an inbox WIA class driver, with discovery via Function Discovery / WS-Discovery. Windows 10/11 also support Mopria/eSCL driverless scanning (June 2022 Update or greater), installing certified scanners without a manufacturer driver.",
        "macOS. Image Capture, a built-in application that debuted in early Mac OS X, drives USB and network scanners, discovering network devices via mDNS. Apple exposes network scanning as AirScan / AirPrint scanning (eSCL) and can save to JPEG, TIFF, PNG, or PDF.",
        "Linux / Unix. SANE provides both the legacy network-export model (saned / net backend, port 6566) and modern driverless backends: sane-airscan (eSCL and WSD) and sane-escl (eSCL). eSCL devices can also be reached over USB when the ipp-usb daemon is installed; WSD-only devices cannot use that USB path."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Network scanning is now the default rather than the exception for office capture, and the industry is consolidating around driverless operation. Microsoft's modern print platform pairs IPP printing with eSCL/WS-Scan scanning and is shifting toward inbox drivers, with a driver-ranking change dated 1 July 2026 that prefers the Microsoft IPP inbox class driver for new printer installs. Apple's ecosystem standardizes on eSCL/AirScan, and Linux covers both eSCL and WSD via SANE. The Windows 11 24H2 eSCL defect of late 2024 (fixed via KB5048667) is a reminder that reliable device discovery and driverless-mode handling — not raw scan quality — is often the practical bottleneck. For sensitive documents, controlled delivery into permissioned systems is increasingly favored over open scan-to-email or scan-to-folder."
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
          "period": "2004 (May)",
          "text": "DPWS specification initially published."
        },
        {
          "period": "2006–2007",
          "text": "Microsoft ships WSDAPI/DPWS (\"Windows Rally\") in Windows Vista, enabling WSD device discovery and communication."
        },
        {
          "period": "2008 (July)",
          "text": "DPWS submitted to OASIS for standardization."
        },
        {
          "period": "2009 (30 June)",
          "text": "DPWS 1.1 approved as an OASIS Standard, together with WS-Discovery 1.1 and SOAP-over-UDP 1.1."
        },
        {
          "period": "2013 (February)",
          "text": "DNS-Based Service Discovery published as RFC 6763, the basis for eSCL mDNS discovery."
        },
        {
          "period": "2014 (18 September)",
          "text": "PWG 5100.17, \"IPP Scan Service,\" published."
        },
        {
          "period": "2022 (June)",
          "text": "Windows 10/11 update enabling inbox Mopria/eSCL scanner installation without manufacturer drivers."
        },
        {
          "period": "2024 (November–December)",
          "text": "Windows 11 24H2 eSCL driver-matching defect reported (November) and fixed via KB5048667 (10 December 2024)."
        },
        {
          "period": "2026 (1 July)",
          "text": "Windows driver-ranking change: the Microsoft IPP inbox class driver preferred over third-party drivers for new printer installs."
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
      "slug": "scanner-driver-architecture"
    },
    {
      "section": "tools",
      "slug": "escl"
    },
    {
      "section": "guides",
      "slug": "driverless-printing"
    },
    {
      "section": "workflows",
      "slug": "scan-to-folder"
    },
    {
      "section": "tools",
      "slug": "ipp"
    },
    {
      "section": "tools",
      "slug": "wia"
    }
  ],
  "faqs": [
    {
      "q": "What is a network scanner?",
      "a": "A network scanner is any document- or image-capture device that delivers its output over a computer network rather than only through a locally attached cable such as USB or SCSI. The category includes dedicated network scanners, multifunction printer/peripherals (MFPs), scan servers that export a locally attached scanner to clients, and devices that push scanned files directly to a destination."
    },
    {
      "q": "What is the difference between eSCL and WSD scanning?",
      "a": "eSCL is an XML-over-HTTP(S) protocol marketed by Apple as AirScan/AirPrint scanning, with its specification published by the Mopria Alliance and discovery via mDNS/DNS-SD. WSD/WS-Scan is Microsoft's SOAP-over-HTTP scanning built on the Devices Profile for Web Services, using WS-Discovery. They are different, incompatible protocols; a device may support one, both, or neither."
    },
    {
      "q": "Do network scanners still need a manufacturer driver?",
      "a": "Often no. Driverless protocols eSCL and WSD let an operating system drive certified devices without a manufacturer-specific driver. Windows 10/11 support inbox Mopria/eSCL scanning (June 2022 Update or greater), macOS uses Image Capture with AirScan/eSCL, and Linux uses SANE. Some advanced or vendor-specific features may still require the manufacturer's own software."
    },
    {
      "q": "What is the difference between pull and push network scanning?",
      "a": "In pull (client-driven) scanning, a PC, Mac, or mobile OS discovers the device, requests its capabilities, submits a job, and downloads the image; this is how eSCL and WSD work. In push (device-driven) scanning, the operator selects a destination at the device and its firmware sends the finished file directly to email (SMTP), a folder (SMB/CIFS, FTP), or a document system, with no client application involved."
    },
    {
      "q": "How do clients discover network scanners?",
      "a": "eSCL scanners advertise over DNS-SD/mDNS using the service types _uscan._tcp (cleartext) and _uscans._tcp (TLS), per RFC 6763. WSD devices respond to multicast WS-Discovery Probe and Resolve messages over UDP. Discovery can be blocked by VLAN segmentation, firewalls, or Wi-Fi client isolation, so a device on the network may not always be reachable by a given client."
    }
  ],
  "sources": [
    {
      "title": "eSCL Technical Specification",
      "url": "https://mopria.org/mopria-escl-specification",
      "publisher": "Mopria Alliance"
    },
    {
      "title": "Scanning with Windows",
      "url": "https://mopria.org/scan-with-windows",
      "publisher": "Mopria Alliance"
    },
    {
      "title": "sane-escl(5) manpage",
      "url": "https://manpages.debian.org/testing/libsane-common/sane-escl.5.en.html",
      "publisher": "Debian Project"
    },
    {
      "title": "SaneOverNetwork",
      "url": "https://wiki.debian.org/SaneOverNetwork",
      "publisher": "Debian Project"
    },
    {
      "title": "eSCL",
      "url": "https://wiki.debian.org/eSCL",
      "publisher": "Debian Project"
    },
    {
      "title": "sane-airscan (universal SANE backend for eSCL and WSD)",
      "url": "https://github.com/alexpevzner/sane-airscan",
      "publisher": "Alexander Pevzner / open-source project"
    },
    {
      "title": "WIA with Web Services for Devices",
      "url": "https://learn.microsoft.com/en-us/windows-hardware/drivers/image/wia-with-web-services-for-devices",
      "publisher": "Microsoft"
    },
    {
      "title": "WSD Scan Service Operation Elements",
      "url": "https://learn.microsoft.com/en-us/windows-hardware/drivers/image/wsd-scan-service-operation-elements",
      "publisher": "Microsoft"
    },
    {
      "title": "About Web Services on Devices (WSDAPI)",
      "url": "https://learn.microsoft.com/en-us/windows/win32/wsdapi/about-web-services-for-devices",
      "publisher": "Microsoft"
    },
    {
      "title": "Introducing Windows Ready Print and modernized driver selection",
      "url": "https://techcommunity.microsoft.com/blog/partnernews/introducing-windows-ready-print-and-modernized-driver-selection/4526895",
      "publisher": "Microsoft"
    },
    {
      "title": "Devices Profile for Web Services",
      "url": "https://en.wikipedia.org/wiki/Devices_Profile_for_Web_Services",
      "publisher": "Wikipedia"
    },
    {
      "title": "Image Capture",
      "url": "https://en.wikipedia.org/wiki/Image_Capture",
      "publisher": "Wikipedia"
    },
    {
      "title": "PWG 5100.17 — IPP Scan Service",
      "url": "https://ftp.pwg.org/pub/pwg/candidates/cs-ippscan10-20140918-5100.17.pdf",
      "publisher": "Printer Working Group"
    },
    {
      "title": "RFC 6763 — DNS-Based Service Discovery",
      "url": "https://datatracker.ietf.org/doc/html/rfc6763",
      "publisher": "IETF"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "network scanner",
    "escl",
    "airscan",
    "wsd",
    "ws-scan",
    "driverless scanning",
    "mopria",
    "scan to email",
    "scan to folder",
    "sane",
    "saned",
    "dpws"
  ],
  "cluster": "scanning-hardware",
  "difficulty": "intermediate",
  "estimatedTime": "11 min read"
};

export default entry;
