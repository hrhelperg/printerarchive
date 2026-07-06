import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "windows-print-processor",
  "title": "Windows Print Processor",
  "description": "How the Windows print processor converts spooled data, controls EMF playback, and drives pause/resume/cancel in the print spooler pipeline.",
  "summary": "The Windows print processor is a user-mode DLL in the Windows print spooler architecture that converts a spooled print job into a stream a print monitor can send to the device, and that handles requests to pause, resume, and cancel a job in progress. The default in-box processor, WinPrint, is implemented by Localspl.dll and accepts the EMF, RAW, and TEXT data types, producing RAW output; a second in-box processor, Sfmpsprt.dll, handles PSCRIPT1 input. The processor sits after spooling and before the print monitor: for RAW data it forwards bytes essentially unchanged, while for EMF it replays device-independent GDI records through the printer's graphics DLL to render RAW. This page describes the subsystem's architecture, job lifecycle, data flow, and integration with the spooler service, based on Microsoft's primary Windows driver documentation.",
  "difficulty": "advanced",
  "estimatedTime": "10 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "The print processor is a component of the Windows NT-based printing architecture. Microsoft's driver documentation frames the customization model and the supported data types in terms of \"Windows 2000 or later\" versions and points readers to the Windows 2000 Professional and Server Resource Kits for background on the EMF data type. Enhanced Metafile (EMF) spooling — the mechanism that lets a client render device-independent GDI instructions and defer rasterization — is the default data type in this architecture."
    },
    {
      "kind": "paragraph",
      "text": "Microsoft's documentation also records behavioral evolution across releases. On Windows 2000 and Windows XP, a Plug and Play-installed print queue whose INF specified a non-default print processor would install the processor but not associate it with the queue. Windows Server 2003 and later corrected this, so the PnP manager associates the print processor with the queue automatically."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "The print processor is a user-mode DLL. Microsoft's reference specifies that it is compiled for Unicode (using #define UNICODE and wide strings such as LPWSTR). Its interface is declared in the spooler-libraries header winsplp.h."
    },
    {
      "kind": "paragraph",
      "text": "Two print processors ship in-box:"
    },
    {
      "kind": "list",
      "items": [
        "Localspl.dll, which implements the WinPrint print processor — input data types EMF, RAW, and TEXT; output RAW.",
        "Sfmpsprt.dll — input data type PSCRIPT1; output RAW."
      ]
    },
    {
      "kind": "paragraph",
      "text": "A print processor exports a defined set of functions:"
    },
    {
      "kind": "list",
      "items": [
        "OpenPrintProcessor — initialize the job and return a handle.",
        "PrintDocumentOnPrintProcessor — read the spool file, convert the data, and return the stream.",
        "ControlPrintProcessor — pause, resume, or cancel the job.",
        "ClosePrintProcessor — close the job.",
        "EnumPrintProcessorDatatypes — enumerate the supported data types.",
        "GetPrintProcessorCapabilities — report capabilities per input data type (N-up, page order, and number of copies). Microsoft's documentation is inconsistent about whether this is required: the \"Functions defined by print processors\" table lists it among functions a processor must export, while the function's own reference page states a processor can optionally export it."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Capabilities are returned through the PRINTPROCESSOR_CAPS_1 and PRINTPROCESSOR_CAPS_2 structures. PRINTPROCESSOR_CAPS_1 carries dwNupOptions (a bitmask of pages-per-sheet options), dwPageOrderFlags (values NORMAL_PRINT, REVERSE_PRINT, and BOOKLET_PRINT), and dwNumberOfCopies."
    },
    {
      "kind": "paragraph",
      "text": "The subsystem is extensible. Developers can build a customized print processor to support a new data type or to replace or augment handling of an existing one. Multiple print processors that support the same data type can coexist because they are associated with printer drivers at driver-install time. The Windows Driver Kit ships a sample print processor, Genprint.dll (source under \\Src\\Print\\Genprint), which accepts EMF, RAW, and TEXT. The import library referenced for PrintDocumentOnPrintProcessor is Nwprint.lib; Microsoft does not document the origin of the name."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "For each job, the spooler drives the print processor through a defined lifecycle:"
    },
    {
      "kind": "paragraph",
      "text": "1. The spooler calls OpenPrintProcessor, which performs initialization and returns a handle. The open data, including a DEVMODEW, is delivered through the PRINTPROCESSOROPENDATA structure. 2. The spooler calls PrintDocumentOnPrintProcessor, passing the document name. This function reads the named spool file, converts the data if needed into a printer-readable stream, and returns that stream to the spooler. 3. During conversion the spooler may make asynchronous calls to ControlPrintProcessor to pause, resume, or cancel; PrintDocumentOnPrintProcessor must be written to honor these. 4. When conversion finishes the spooler calls ClosePrintProcessor."
    },
    {
      "kind": "paragraph",
      "text": "How the converted data returns to the spooler depends on the data type. For RAW input no rendering is required, so the print processor returns the bytes by calling WritePrinter (sometimes inserting form feeds). For EMF input the print processor must play back the EMF records by calling GDI, which calls the printer driver's printer graphics DLL to render the image; that graphics DLL returns the RAW result to the spooler by calling EngWritePrinter."
    },
    {
      "kind": "paragraph",
      "text": "To control EMF playback, the print processor uses a dedicated set of GDI-for-print-processors functions. It first calls GdiGetSpoolFileHandle (exported by gdi32.dll, declared in winppi.h), which internally calls OpenPrinter and CreateDC; the returned handle is passed to the other GDI printing functions such as GdiGetDC and GdiGetPageCount. This playback control is what enables N-up printing, reverse-order printing, and multiple copies. A print processor that uses these functions must report \"NT EMF\" from EnumPrintProcessorDatatypes and must not modify the EMF records. GdiGetPageCount does not return until spooling ends, which disables the ability to print while spooling."
    },
    {
      "kind": "paragraph",
      "text": "The four input data types behave as follows:"
    },
    {
      "kind": "list",
      "items": [
        "EMF — device-independent GDI instructions, rendered to RAW at playback time.",
        "RAW — already device-ready (for example, PCL). PostScript counts as RAW when the target printer understands PostScript.",
        "TEXT — ANSI text only; the print processor calls GDI to draw characters in the device's default font and emits RAW, equivalent to printing the file from Notepad. It is used for printers that cannot print text characters directly.",
        "PSCRIPT1 — handled by Sfmpsprt.dll, which interprets PostScript input for non-PostScript printers."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Data flow"
    },
    {
      "kind": "paragraph",
      "text": "The path a job takes through the subsystem is as follows:"
    },
    {
      "kind": "paragraph",
      "text": "1. An application calls GDI (StartDoc, drawing calls, EndDoc). 2. The local print provider's job-creation path creates a spool file plus a data file that records the form type, the data type, and the target printer. By default, GDI drawing calls are stored as EMF records in the spool file; regardless of format, a spool file is created. 3. When the job is scheduled, the spooler reads the spool file and invokes the associated print processor (OpenPrintProcessor, then PrintDocumentOnPrintProcessor). 4. If the data is EMF, the print processor sends the job back through GDI for conversion to RAW, with help from the printer graphics DLL, which returns RAW via EngWritePrinter. If the data is RAW, TEXT, or PSCRIPT1, it is converted or passed through and returned via WritePrinter. 5. The resulting RAW stream goes back to the spooler, then to the appropriate print monitor, the port, and the device. Microsoft notes that the converted data can be sent back through the local print provider to the printer without being respooled. 6. On success, the spooler deletes the spool and data files."
    },
    {
      "kind": "paragraph",
      "text": "Where the application runs on the print server itself, the job is spooled as EMF so the application regains control quickly while a background spooler thread renders the EMF afterward. Because EMF is device-independent, it is also smaller and faster to send from a client to a server than pre-rendered RAW."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Operating system integration"
    },
    {
      "kind": "paragraph",
      "text": "The print processor is part of the print spooler service, which is loaded at system startup and continues to run until the operating system is shut down. The spooler locates and loads the printer driver, spools application calls into a job, determines the job's data type, schedules the job, and dispatches it to the print processor and monitor."
    },
    {
      "kind": "paragraph",
      "text": "Print processors are registered with the spooler through AddPrintProcessor, associated with a queue through a PrintProcessor entry in the driver's INF, and selected per-queue through the pPrintProcessor member of PRINTER_INFO_2 (set via AddPrinter or SetPrinter). Driver upgrades can rebind the processor via DrvUpgradePrinter; on the older operating systems noted above, PnP installs can bind it via DrvPrinterEvent with PRINTER_EVENT_INITIALIZE."
    },
    {
      "kind": "paragraph",
      "text": "Microsoft's troubleshooting guidance for a 32-bit environment shows print processors stored under C:\\WINDOWS\\system32\\spool\\PRTPROCS\\W32X86\\ and printer drivers under C:\\WINDOWS\\system32\\spool\\drivers\\w32x86\\3\\; on 64-bit systems the architecture folder differs. The Advanced tab of a printer's Properties exposes the Print Processor selection — for example, choosing WinPrint with a default data type of RAW."
    },
    {
      "kind": "paragraph",
      "text": "Capabilities are surfaced to applications through GetPrinterData using a value name of the form PrintProcCaps_<datatype>; the spooler strips the prefix and calls GetPrintProcessorCapabilities."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to standards"
    },
    {
      "kind": "paragraph",
      "text": "The print processor recognizes several format standards rather than implementing an external interoperability standard itself."
    },
    {
      "kind": "list",
      "items": [
        "PCL (Printer Command Language) is cited by Microsoft as a canonical example of RAW data — device-ready commands passed through untouched.",
        "PostScript is treated as RAW when the destination printer supports it; the PSCRIPT1 path (Sfmpsprt.dll) exists to interpret PostScript for printers that do not.",
        "EMF (Enhanced Metafile) is the device-independent intermediate format central to the GDI print path.",
        "ANSI text is the basis of the TEXT data type. (Microsoft's Print Spooler documentation refers to the same type as \"ASCII text,\" a minor terminology difference across pages.)"
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to technologies"
    },
    {
      "kind": "paragraph",
      "text": "The print processor sits at the junction of several Windows printing components:"
    },
    {
      "kind": "list",
      "items": [
        "GDI (Graphics Device Interface) is the source of EMF records and the engine that replays them during EMF conversion. The print processor bridges GDI and the printer driver's graphics DLL.",
        "The printer graphics DLL and EngWritePrinter (declared in winddi.h) form the rendering half of the EMF path.",
        "The local print provider and spooler (Localspl.dll, the spooler service) provide the surrounding job-management machinery.",
        "Print monitors and port monitors are the next stage that receives the print processor's RAW output.",
        "WDK interfaces include winsplp.h (the print processor, monitor, and provider interface), winppi.h (the GDI-for-print-processor functions such as GdiGetSpoolFileHandle), and the spooler client APIs (for example WritePrinter and EnumPrintProcessorDatatypes)."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "paragraph",
      "text": "Printer vendors have historically shipped custom print processors bundled with their drivers, associated with the queue at install time. Microsoft's own troubleshooting content documents an HP example, with Hpzpp4wm.dll as a print processor under the PRTPROCS directory and Hpzpi4wm.dll under the driver directory, and describes a workaround that reverts the queue to the in-box WinPrint processor with the RAW data type. This illustrates both the extensibility model and a common failure mode when a third-party processor misbehaves."
    },
    {
      "kind": "paragraph",
      "text": "Because multiple processors that support the same data type can coexist, vendor processors and WinPrint can be installed side by side, and an administrator can switch a queue back to WinPrint from the printer's Advanced properties. The HP names appear here only as neutral troubleshooting context, not as an endorsement."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "WinPrint and the print processor model remain the classic GDI print path component and are still selectable and configurable on current Windows through a printer's Advanced tab; the reference documentation is maintained in the current Windows Driver documentation set. The RAW-passthrough and EMF-render behaviors continue to underpin how legacy GDI drivers spool and render."
    },
    {
      "kind": "paragraph",
      "text": "At the same time, the surrounding third-party print stack is being superseded. Microsoft's Local Print Provider documentation notes that, starting with Windows 10, the APIs supporting third-party print providers are deprecated, and the broader v3/GDI print model is being succeeded by newer mechanisms. The subsystem's central position in the job pipeline has also made the spooler and its loadable components (drivers, processors, and monitors) a recurring focus of Windows servicing; specific security advisories are outside the scope of what was verified for this page."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common misconceptions"
    },
    {
      "kind": "list",
      "items": [
        "\"The print processor is the printer driver.\" It is not. The driver's graphics DLL performs rendering; the print processor orchestrates job data flow and controls playback and layout. They are distinct components installed together.",
        "\"WinPrint and Localspl.dll are two different processors.\" WinPrint is the name of the default print processor; Localspl.dll is the DLL that implements it.",
        "\"RAW means unprintable or garbage data.\" RAW means device-ready data (for example PCL or PostScript) that needs no further rendering — the print processor forwards it, at most inserting form feeds.",
        "\"The print processor always renders the job.\" For RAW it performs essentially no conversion; rendering through GDI and the graphics DLL happens only for EMF, and character drawing only for TEXT.",
        "\"Choosing EMF versus RAW changes the printer's output quality.\" The distinction is primarily about where and when rendering occurs (client versus server, immediate versus deferred) and device-independence, not final fidelity.",
        "\"Setting the default data type to RAW disables EMF entirely.\" The default data type is a per-queue selection; the processor still supports its full input set (EMF, RAW, and TEXT for WinPrint)."
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
          "period": "Windows 2000 era",
          "text": "The print processor customization model and the EMF, RAW, TEXT, and PSCRIPT1 data types are documented as supported on \"Windows 2000 or later\"; EMF is the default spool data type, with the Windows 2000 Resource Kits cited for EMF background."
        },
        {
          "period": "Windows 2000 / Windows XP",
          "text": "Plug and Play installs a non-default print processor but does not automatically associate it with the queue; a workaround uses DrvPrinterEvent with PRINTER_EVENT_INITIALIZE."
        },
        {
          "period": "Windows Server 2003 and later",
          "text": "The PnP manager correctly associates the print processor with the print queue."
        },
        {
          "period": "Windows 10 and later",
          "text": "The APIs supporting third-party print providers are documented as deprecated as the print stack evolves beyond the classic v3/GDI model."
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
      "slug": "windows-print-spooler"
    },
    {
      "section": "guides",
      "slug": "windows-printing"
    },
    {
      "section": "guides",
      "slug": "spooling-architecture"
    },
    {
      "section": "glossary",
      "slug": "print-spooler"
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
      "q": "What is the Windows print processor?",
      "a": "It is a user-mode DLL in the Windows print spooler that converts a spooled print job into a format a print monitor can send to the device, and that handles requests to pause, resume, and cancel a job in progress."
    },
    {
      "q": "What is WinPrint and how does it relate to Localspl.dll?",
      "a": "WinPrint is the name of the default in-box print processor supplied with Windows. Localspl.dll is the DLL that implements WinPrint. They are the same processor, not two separate ones."
    },
    {
      "q": "What data types does the default print processor support?",
      "a": "WinPrint (Localspl.dll) accepts EMF, RAW, and TEXT input and produces RAW output. A second in-box processor, Sfmpsprt.dll, accepts the PSCRIPT1 input type."
    },
    {
      "q": "How does the print processor handle RAW versus EMF data?",
      "a": "For RAW data no rendering is needed, so the processor forwards the bytes with WritePrinter, sometimes inserting form feeds. For EMF it replays the GDI records through the printer's graphics DLL, which renders RAW and returns it via EngWritePrinter."
    },
    {
      "q": "Where are print processors stored and selected in Windows?",
      "a": "On a 32-bit system they live under spool\\PRTPROCS\\W32X86; the architecture folder differs on 64-bit systems. A queue's processor is chosen on the printer's Advanced properties tab and stored in the pPrintProcessor member of PRINTER_INFO_2."
    }
  ],
  "sources": [
    {
      "title": "Introduction to print processors",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/introduction-to-print-processors",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Functions defined by print processors",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/functions-defined-by-print-processors",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Process a print job",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/processing-a-print-job",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Using GDI Functions in Print Processors",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/using-gdi-functions-in-print-processors",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "EMF Data Type",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/emf-data-type",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "RAW data type",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/raw-data-type",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "TEXT Data Type",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/text-data-type",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Local Print Provider",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/local-print-provider",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Print Spooler",
      "url": "https://learn.microsoft.com/windows/win32/printdocs/print-spooler",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Install a Print Processor",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/installing-a-print-processor",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Sample Print Processor (Genprint.dll)",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/sample-print-processor",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "PrintDocumentOnPrintProcessor function (winsplp.h)",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/ddi/winsplp/nf-winsplp-printdocumentonprintprocessor",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "GetPrintProcessorCapabilities function (winsplp.h)",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/ddi/winsplp/nf-winsplp-getprintprocessorcapabilities",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "PRINTPROCESSOR_CAPS_1 structure",
      "url": "https://learn.microsoft.com/windows/win32/printdocs/printprocessor-caps-1",
      "publisher": "Microsoft Learn"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "windows print processor",
    "winprint",
    "localspl.dll",
    "print spooler",
    "emf data type",
    "raw data type",
    "printdocumentonprintprocessor",
    "print processor dll",
    "gdigetspoolfilehandle",
    "winsplp.h",
    "sfmpsprt.dll",
    "print monitor"
  ],
  "cluster": "windows-printing"
};

export default entry;
