import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "windows-print-spooler",
  "title": "Windows Print Spooler",
  "description": "How the Windows Print Spooler queues, renders, and dispatches print jobs: spoolsv.exe, providers, processors, monitors, and protected print mode.",
  "summary": "The Windows Print Spooler is the operating-system subsystem that accepts, queues, schedules, and dispatches print jobs between applications and printing devices. Its central component, the Print Spooler service (spoolsv.exe), runs from system startup and decouples the application from the device: an application hands a document to the spooler and regains control quickly while the spooler stores the job, renders it to a device-ready format, and streams it to a port. Microsoft documents the spooler as a set of cooperating, entirely user-mode components — an API server, a router, print providers, print processors, and print monitors — that together decide whether a job is local or networked, spool data to disk, convert spooled formats such as EMF to device formats such as PCL, and maintain a registry-based configuration database. This page describes the subsystem's architecture, data flow, operating-system integration, and its relationship to page description languages and modern IPP-based printing.",
  "difficulty": "intermediate",
  "estimatedTime": "10 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "The print spooler is a long-standing part of the Windows printing interface. Microsoft's Windows Driver Kit documents the modular component architecture for \"Windows 2000 and later,\" and the subsystem has evolved substantially across releases."
    },
    {
      "kind": "paragraph",
      "text": "Windows Vista added client-side rendering (CSR), enabled by default, which moves job rendering from the print server to the client. Windows 7 introduced Printer Driver Isolation, allowing print drivers to run in a process separate from the spooler. Windows 8 added the v4 print driver model and expanded XPS/OpenXPS support side by side with Microsoft XPS. Windows 10 and Windows 11 introduced the modern print platform — the inbox IPP class driver, Print Support Apps, and Windows protected print mode. Over the same period, third-party print providers were deprecated starting with Windows 10."
    },
    {
      "kind": "paragraph",
      "text": "(Historical note: a print spooler existed in Windows NT before the Windows 2000 documentation cited here; that earlier origin is general background rather than a claim tied to the Microsoft pages referenced on this page.)"
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "Microsoft documents the spooler as a set of cooperating components, all of which execute in user mode. (GDI has a kernel-mode graphics engine used by graphics device drivers, but the spooler itself is user-mode.)"
    },
    {
      "kind": "list",
      "items": [
        "Application + GDI — The application creates a print job by calling GDI functions. GDI has a user-mode component (Win32 GDI) and a kernel-mode graphics engine.",
        "Winspool.drv — The client-side interface into the spooler. It exports the spooler's Win32 print API and provides RPC stubs to reach the server. GDI is its primary client, but applications call some of its functions directly.",
        "Spoolsv.exe — The spooler's API server, implemented as a Windows service started at boot. It exports an RPC interface to the server side of the Win32 print API. Its clients are Winspool.drv locally and Win32spl.dll remotely. It implements some API functions itself and passes most calls to a print provider by way of the router.",
        "Router (Spoolss.dll) — Determines which print provider to call based on the printer name or handle supplied with each call, and forwards the call. On OpenPrinter, the router calls each provider's OpenPrinter until one recognizes the name, then returns a composite handle (printer handle plus provider handle) so later calls route correctly.",
        "Print providers — Direct jobs to local or remote devices and manage queues. Microsoft-supplied providers include Localspl.dll (local print provider), Win32spl.dll (Windows network provider for remote Windows/NT-based servers), Nwprovau.dll (Novell NetWare), and Inetpp.dll (HTTP/Internet printing).",
        "Print processors — User-mode DLLs that convert a job's spooled data into a form a print monitor can accept and that handle pause, resume, and cancel. Windows ships Localspl.dll (inputs EMF, RAW, TEXT and outputs RAW) and Sfmpsprt.dll (PSCRIPT1 to RAW).",
        "Print monitors — Two kinds. Language monitors (for example Pjlmon.dll for HP's PJL) provide bidirectional status and add printer-control commands. Port monitors (such as the TCP/IP port monitor exposing the TCPMON Xcv interface, and the WSD port monitor WSDMON) direct the data stream to the correct port and kernel-mode port driver."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "An application obtains a printer device context and brackets a job between the StartDoc and EndDoc GDI calls; a job can contain one or more pages and even multiple forms. The spooler determines the printer driver, loads it, and determines the data type used to record the job. The supported data types are:"
    },
    {
      "kind": "list",
      "items": [
        "EMF (Enhanced Metafile) — device-independent GDI drawing records.",
        "TEXT — ASCII text.",
        "RAW — already-rendered device data, including PostScript, PCL, and custom data types (extensible via additional drivers and print processors)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "When the job is scheduled, the print processor reads the spool file and converts it. For EMF input, the EMF print processor replays the metafile records back through GDI, which calls the driver's printer graphics DLL to render the image into RAW data (returned to the spooler via EngWritePrinter). For RAW input, the print processor simply returns the data to the spooler (WritePrinter), sometimes inserting form feeds. The spooler then sends the RAW stream through the language monitor, if any, to the port monitor and out to the device. The processor's PrintDocumentOnPrintProcessor routine can be interrupted by ControlPrintProcessor calls to pause, resume, or cancel."
    },
    {
      "kind": "paragraph",
      "text": "Spool files. When spooling is enabled, jobs are held in the spool folder, which defaults to %systemroot%\\System32\\spool\\PRINTERS (configurable via the DefaultSpoolDirectory value under HKLM\\SYSTEM\\CurrentControlSet\\Control\\Print\\Printers). Microsoft's printing troubleshooting documentation refers directly to the .SPL and .SHD files that appear in this folder: an .SPL spool data file holds the job's print data, and an accompanying .SHD \"shadow\" file holds the job descriptor and metadata. Under normal operation these files are deleted as jobs finish printing; leftover or corrupted files in this folder are a classic cause of spooler faults. The .SPL and .SHD extensions and the fact that they are removed as jobs print are Microsoft-documented; the precise internal binary layout of the two file formats is described in community and forensics literature rather than in a formal Microsoft specification."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Data flow"
    },
    {
      "kind": "paragraph",
      "text": "The path a print job takes through the subsystem:"
    },
    {
      "kind": "paragraph",
      "text": "1. The application calls GDI between StartDoc and EndDoc. 2. GDI, with the printer driver, produces a data stream (EMF, or RAW when rendered up front). 3. Winspool.drv, called by GDI or the application, carries the request via RPC to spoolsv.exe (the API server). 4. Spoolss.dll (the router) selects the print provider by printer name or handle. 5. The local print provider Localspl.dll creates a spool file (.SPL) with an accompanying job descriptor (.SHD), regardless of the initial format. 6. On scheduling, the print processor reads the spool file: EMF is replayed through GDI and the printer graphics DLL to produce RAW; RAW passes through directly. 7. The RAW stream goes to the language monitor (optional; for example Pjlmon.dll adds PJL) and then to the port monitor. 8. The port monitor opens the port and hands the stream to the kernel-mode port driver or device (local port, TCP/IP, WSD, USB, and so on). 9. Completion is signaled back to the spooler with SetJob (JOB_CONTROL_SENT_TO_PRINTER, or JOB_CONTROL_LAST_PAGE_EJECTED for bidirectional and language-monitor paths), and the spool files are removed."
    },
    {
      "kind": "paragraph",
      "text": "For networked printing, the client's Win32spl.dll forwards the job over RPC to the remote server's spooler, where it re-enters the server's local print provider. With client-side rendering (Windows Vista and later, on by default), the driver renders to the device page description language on the client, and the RAW data is sent to the server for queuing — eliminating driver-mismatch problems and enabling offline spooling."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Operating system integration"
    },
    {
      "kind": "paragraph",
      "text": "The spooler runs as the Windows service named Spooler (spoolsv.exe), started at boot and managed under HKLM\\SYSTEM\\CurrentControlSet\\Services\\Spooler. By default it depends only on the RPC service (RpcSs, via DependOnService), reflecting its RPC-based client/server design. It can be controlled with net stop spooler / net start spooler or PowerShell's Restart-Service -Name spooler, and Group Policy can disable the service — a common hardening step, particularly on systems that do not need to print."
    },
    {
      "kind": "paragraph",
      "text": "The spooler exposes the Win32 print API (OpenPrinter, GetPrinter/SetPrinter, GetJob/SetJob, EnumPrinters, WritePrinter, AddMonitor, SetPrinterDataEx/GetPrinterDataEx, and others) and integrates with Active Directory directory services: print queues are published using SetPrinter/GetPrinter with the PRINTER_INFO_7 structure. Spooler event logging flows through channels such as Microsoft-Windows-PrintService/Admin and Microsoft-Windows-PrintService/Operational."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to standards"
    },
    {
      "kind": "list",
      "items": [
        "Page description languages. RAW jobs commonly carry PostScript (Adobe) or PCL (HP); these are treated as RAW when the target device understands them directly.",
        "PJL (HP Printer Job Language). Supported through the Pjlmon.dll language monitor for job control and bidirectional status.",
        "XPS / OpenXPS. XPS is used as a spool and document format by XPSDrv and v4 drivers. Windows 8 provides full OpenXPS (ECMA-388) support side by side with Microsoft XPS, and the Microsoft XPS Document Converter (MXDC) turns GDI output into an XPS spool file.",
        "IPP and WSD. The modern platform's inbox IPP (Internet Printing Protocol) class driver is Microsoft's preferred path; WSD (Web Services on Devices) printing uses the WSDMON port monitor. IPP supports transport encryption and a limited set of PDLs, reducing parsing complexity.",
        "Standard CompatibleIDs. These map device PDLs to manufacturer-neutral class drivers, including 1284_CID_MS_XPS, 1284_CID_MS_OXPS, 1284_CID_MS_PCL6, and 1284_CID_MS_PS."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to technologies"
    },
    {
      "kind": "list",
      "items": [
        "GDI is the classic rendering front end; EMF spooling is the device-independent GDI-record format.",
        "v3 driver model (GDI-based) is extended by XPSDrv to consume XPS as the spool format. The v4 driver model (Windows 8 and later) uses the XPS filter pipeline, print class drivers, and driver manifests, and removes the need to manage per-architecture drivers for sharing. Standard XPS filters such as MSxpsPCL6.dll (to PCL6) and MSxpsPS.dll (to PostScript) ship with Windows, though Microsoft now recommends discontinuing their use.",
        "Point and Print lets clients automatically acquire drivers and configuration from a print server; under IPP this has been reworked toward a driver-less model.",
        "Printer Driver Isolation (Windows 7) hosts drivers outside the spooler process.",
        "Modern print platform and Windows protected print mode. A Spooler Worker process runs with a restricted token — removing SeTcbPrivilege and SeAssignPrimaryTokenPrivilege and no longer running at SYSTEM integrity — together with modern binary mitigations including Control Flow Guard, CET, Arbitrary Code Guard, Redirection Guard, and disabled child-process creation. Microsoft states these are made possible by removing third-party driver code from the process."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "paragraph",
      "text": "The spooler is deliberately vendor-neutral and extensible. Manufacturers historically supplied print drivers, print processors, language monitors, and port monitors that plug into the Microsoft framework, and the extension points interoperate — for example, a vendor language monitor can pair with a Microsoft port monitor and vice versa. HP's PCL and PJL, Adobe's PostScript, and vendor XPS filters are all consumed through these interfaces."
    },
    {
      "kind": "paragraph",
      "text": "Microsoft's direction has shifted toward vendor-neutral print class drivers and IPP, complemented by Print Support Apps (PSA) that let OEMs and IHVs customize the experience without loading privileged third-party driver code into the spooler. Microsoft describes this as reducing its dependence on vendors to patch driver vulnerabilities."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "The spooler remains the core Windows printing service, but Microsoft is steering customers away from third-party-driver printing toward the modern print platform (the inbox IPP class driver plus Print Support Apps) and Windows protected print mode, which runs the spooler's worker with least privilege and modern exploit mitigations. Third-party print providers have been deprecated since Windows 10, and on Windows 8 and later third-party providers cannot create or manage v4 queues. IPP-based, driver-less printing — with transport encryption and a limited PDL set — is now the recommended, lower-attack-surface path. Much of this hardening responds to a long history of spooler vulnerabilities rooted in the privileged loading of driver code."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common misconceptions"
    },
    {
      "kind": "list",
      "items": [
        "\"The spooler runs in the kernel.\" No. Microsoft states all spooler components execute in user mode. GDI has a kernel-mode graphics engine, but the spooler itself — spoolsv.exe, the spoolss.dll router, print providers, processors, and monitors — is user-mode.",
        "\"EMF is what gets sent to the printer.\" No. EMF is an intermediate, device-independent spool format; it is replayed through GDI and the driver to produce RAW device data before it reaches the port.",
        "\"RAW means unprocessed or plain text.\" No. RAW is already-rendered, device-ready data (PostScript, PCL, custom); plain text is the separate TEXT data type.",
        "\"PostScript is always RAW.\" Only when the target printer understands PostScript. The Sfmpsprt.dll processor can interpret PostScript for non-PostScript printers, in which case it is not RAW.",
        "\"Rendering always happens on the print server.\" Since Windows Vista, client-side rendering is the default, moving rendering to the client.",
        "\"PrintNightmare was a brand-new class of bug.\" The spooler has a long remote-code-execution history (for example MS16-087 / CVE-2016-3238 in 2016) rooted in the privileged loading of driver code. PrintNightmare (2021) is the most prominent instance, not a novel category."
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
          "period": "1990s (documented for Windows 2000 and later)",
          "text": "Modular, entirely user-mode spooler architecture: spoolsv.exe API server, spoolss.dll router, print providers, print processors, and print monitors."
        },
        {
          "period": "Windows Vista",
          "text": "Client-side rendering introduced and enabled by default."
        },
        {
          "period": "Windows 7",
          "text": "Printer Driver Isolation lets drivers run outside the spooler process."
        },
        {
          "period": "Windows 8",
          "text": "v4 print driver model and full OpenXPS (ECMA-388) support alongside Microsoft XPS."
        },
        {
          "period": "2016 (MS16-087, CVE-2016-3238)",
          "text": "Print Spooler remote code execution via improper validation of print drivers during printer installation from servers; addressed by warning on untrusted driver installs."
        },
        {
          "period": "Windows 10 and later",
          "text": "Third-party print providers deprecated; modern print platform (IPP class driver, Print Support Apps) introduced."
        },
        {
          "period": "June–July 2021 (CVE-2021-1675, CVE-2021-34527 \"PrintNightmare\")",
          "text": "Spooler remote code execution rooted in RpcAddPrinterDriverEx() loading printer drivers that run with SYSTEM privileges (per MSRC/NVD). Out-of-band updates were released July 6, 2021, and KB5005010 introduced RestrictDriverInstallationToAdministrators, which restricts printer-driver installation to administrators. Related work on CVE-2021-34481 changed the Point and Print default behavior (non-administrators can no longer install or update drivers from a remote server without elevation), delivered via KB5005033/KB5005031 and managed via KB5005652."
        },
        {
          "period": "Windows 11 / recent",
          "text": "Windows protected print mode: a least-privilege Spooler Worker process with CFG, CET, Arbitrary Code Guard, Redirection Guard, and disabled child-process creation."
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
      "slug": "spooling-architecture"
    },
    {
      "section": "guides",
      "slug": "print-queue-lifecycle"
    },
    {
      "section": "glossary",
      "slug": "print-spooler"
    },
    {
      "section": "guides",
      "slug": "windows-printing"
    },
    {
      "section": "glossary",
      "slug": "print-queue"
    },
    {
      "section": "glossary",
      "slug": "print-driver"
    }
  ],
  "faqs": [
    {
      "q": "What is the Windows Print Spooler?",
      "a": "It is the Windows operating-system subsystem that accepts, queues, schedules, and dispatches print jobs between applications and printing devices. Its central component is the Print Spooler service, spoolsv.exe, which runs from system startup until shutdown and lets an application hand off a document and regain control quickly while the spooler stores, renders, and sends the job to a port."
    },
    {
      "q": "Does the print spooler run in the kernel?",
      "a": "No. Microsoft documents that all spooler components execute in user mode. GDI has a kernel-mode graphics engine used by graphics device drivers, but the spooler itself — spoolsv.exe, the spoolss.dll router, print providers, processors, and monitors — is user-mode."
    },
    {
      "q": "What are .SPL and .SHD files?",
      "a": "They are the two files that represent a queued job in the spool folder (default %systemroot%\\System32\\spool\\PRINTERS). The .SPL file holds the job's print data and the .SHD \"shadow\" file holds the job descriptor and metadata. Microsoft's troubleshooting documentation names both extensions; the files are deleted as jobs finish printing, and leftover or corrupted files are a common cause of spooler faults."
    },
    {
      "q": "What is the difference between the EMF and RAW data types?",
      "a": "EMF is a device-independent intermediate spool format made of GDI drawing records, which the print processor replays through GDI and the driver to produce device data. RAW is already-rendered, device-ready data such as PostScript or PCL that passes through to the device. Plain text is a separate data type, TEXT."
    },
    {
      "q": "What was PrintNightmare?",
      "a": "PrintNightmare refers to the 2021 Print Spooler remote-code-execution vulnerabilities CVE-2021-1675 and CVE-2021-34527, rooted (per MSRC and NVD) in RpcAddPrinterDriverEx() loading printer drivers that run with SYSTEM privileges. Microsoft released out-of-band updates on July 6, 2021, and KB5005010 introduced a setting restricting printer-driver installation to administrators. It was the most prominent case in a longer history of spooler driver-loading vulnerabilities, not a new category."
    }
  ],
  "sources": [
    {
      "title": "Introduction to spooler components",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/introduction-to-spooler-components",
      "publisher": "Microsoft Learn (Windows Driver Kit)"
    },
    {
      "title": "Print Spooler Architecture",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/print-spooler-architecture",
      "publisher": "Microsoft Learn (Windows Driver Kit)"
    },
    {
      "title": "Introduction to print providers",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/introduction-to-print-providers",
      "publisher": "Microsoft Learn (Windows Driver Kit)"
    },
    {
      "title": "Introduction to print processors",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/introduction-to-print-processors",
      "publisher": "Microsoft Learn (Windows Driver Kit)"
    },
    {
      "title": "RAW data type",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/raw-data-type",
      "publisher": "Microsoft Learn (Windows Driver Kit)"
    },
    {
      "title": "EMF Data Type",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/emf-data-type",
      "publisher": "Microsoft Learn (Windows Driver Kit)"
    },
    {
      "title": "PSCRIPT1 Data Type",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/pscript1-data-type",
      "publisher": "Microsoft Learn (Windows Driver Kit)"
    },
    {
      "title": "Language monitors",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/language-monitors",
      "publisher": "Microsoft Learn (Windows Driver Kit)"
    },
    {
      "title": "WSDMON Port Monitor",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/wsdmon-port-monitor",
      "publisher": "Microsoft Learn (Windows Driver Kit)"
    },
    {
      "title": "Print Spooler (Win32 printing)",
      "url": "https://learn.microsoft.com/windows/win32/printdocs/print-spooler",
      "publisher": "Microsoft Learn (Win32)"
    },
    {
      "title": "V4 driver setup concepts (CompatibleIDs)",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/v4-driver-setup-concepts",
      "publisher": "Microsoft Learn (Windows Driver Kit)"
    },
    {
      "title": "Driver Support for OpenXPS",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/driver-support-for-openxps",
      "publisher": "Microsoft Learn (Windows Driver Kit)"
    },
    {
      "title": "Standard XPS Filters",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/standard-xps-filters",
      "publisher": "Microsoft Learn (Windows Driver Kit)"
    },
    {
      "title": "Troubleshooting scenarios for printing",
      "url": "https://learn.microsoft.com/troubleshoot/windows-server/printing/troubleshoot-printing-scenarios",
      "publisher": "Microsoft Learn (Support)"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "windows print spooler",
    "spoolsv.exe",
    "print spooler service",
    "spoolss.dll router",
    "print providers",
    "print processors",
    "print monitors",
    "emf data type",
    "raw data type",
    "client-side rendering",
    "printer driver isolation",
    "v4 print driver"
  ],
  "cluster": "windows-printing"
};

export default entry;
