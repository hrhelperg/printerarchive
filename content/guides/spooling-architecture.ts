import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "spooling-architecture",
  "title": "Spooling Architecture",
  "description": "How print spooling works: buffering, queuing, and device abstraction from mainframe SPOOL and HASP to the Windows spooler and CUPS.",
  "summary": "Spooling buffers data bound for a slow peripheral on fast intermediate storage so a program need not run at the device's mechanical speed. In printing, a job is written in full to a spool file on disk, queued, and later despooled to the printer by a background process, decoupling the producing application from the physical device. A spooler provides three durable functions found in every modern print stack: buffering, queuing and scheduling, and device abstraction. The technique originated on IBM mainframes, matured through OS/360 spooling routines and the HASP subsystem (which became JES2), and survives today in the Windows Print Spooler service and in CUPS on macOS, iOS, and Linux.",
  "difficulty": "advanced",
  "estimatedTime": "14 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Spooling is a technique in which data destined for a slow peripheral device is buffered on a fast intermediate storage medium — historically magnetic tape, later disk — so that a program does not have to run at the mechanical speed of the device. The acronym is conventionally expanded as SPOOL, \"Simultaneous Peripheral Operations On-Line,\" though this derivation is reported but uncertain and may be a backronym; an alternative account links the word to reels (\"spools\") of magnetic tape."
    },
    {
      "kind": "paragraph",
      "text": "The best-known application is printing. A print job is written in full to a spool file on disk, placed in a queue, and later despooled to the printer by a background process. This decouples the application that produced the job from the physical printing that consumes it: the application runs at CPU and disk speed while the printer runs at its own rated speed, and one queue can serve many jobs while many jobs share one device."
    },
    {
      "kind": "paragraph",
      "text": "Across every era and operating system, a spooler provides three durable functions:"
    },
    {
      "kind": "list",
      "items": [
        "Buffering — store the job so the producer can move on.",
        "Queuing and scheduling — order jobs, apply priorities, and select an available device.",
        "Device abstraction — present a logical printer or queue that hides the physical device and its I/O channel."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Spooling is not exclusive to printing. It historically mediated card readers, punches, and tape drives, and the term persists in batch job queues and in store-and-forward messaging (the uucp, email, and Usenet \"spool\")."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Spooling originated in mainframe computing as a response to the speed gap between processors and unit-record equipment. Among the earliest spooling programs was IBM's \"SPOOL System\" (program number 7070-IO-076) for the IBM 7070 series, which copied data from punched cards to magnetic tape, and from tape back to cards and printers, moving the CPU's interaction off the slow devices and onto tape."
    },
    {
      "kind": "paragraph",
      "text": "Because unit-record equipment on early-1960s IBM mainframes was slow, many large installations instead used a small offline \"satellite\" computer, such as the IBM 1401, to transfer between cards and tape and feed tapes to the main machine. This offline approach was an alternative to true (on-line) spooling, not spooling itself. From the mid-1960s, hard disks — offering higher I/O speed and random access — began replacing tape for spooling, and by the 1970s had largely displaced it, enabling the queue-and-schedule behavior associated with spooling today."
    },
    {
      "kind": "paragraph",
      "text": "Operating-system-integrated spoolers followed. IBM OS/360 included spooling routines conventionally described as reader/interpreters and output writers. The landmark subsystem was HASP (Houston Automatic Spooling Priority), developed by IBM Federal Systems Division contractors at the Lyndon B. Johnson Space Center in Houston (developers Tom Simpson and Bob Crabtree). HASP handled job scheduling, job-flow control, spooling, and printing and punching, storing spooled datasets on dedicated SPOOL volumes rather than as normal OS datasets. HASP became JES2 in MVS; its lineage is still visible because JES2 messages remain prefixed with \"$HASP\". The parallel line — ASP (Attached Support Processor) — became JES3."
    },
    {
      "kind": "paragraph",
      "text": "In the Unix world, the Berkeley printing system (lpr/lpd) established the disk-spool-plus-daemon pattern that dominated Unix printing for decades, later documented on the wire as the Line Printer Daemon protocol (RFC 1179). CUPS and the Windows print spooler are the direct modern descendants of these ideas."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "A spooling subsystem is built from a recurring set of roles:"
    },
    {
      "kind": "list",
      "items": [
        "Submission/client interface — the API or command a program calls to hand off a job (Windows winspool.drv; Unix lpr/lp; IPP over HTTP).",
        "Spooler service/scheduler — a long-running process that accepts jobs, assigns identifiers, and manages the queue (Windows spoolsv.exe; CUPS cupsd; mainframe JES2).",
        "Spool storage — on-disk control and data files representing queued jobs (CUPS /var/spool/cups; Windows spool and data files; HASP SPOOL volumes).",
        "Queue/scheduling logic — ordering, priorities, device selection, and hold, release, pause, resume, and cancel.",
        "Data-format conversion — transforming the stored job into what the device consumes (Windows print processors and drivers; CUPS filters).",
        "Device/transport layer — the component that pushes bytes to the hardware (Windows print and port monitors; CUPS backends)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Windows implements this as a set of user-mode components, per Microsoft's driver documentation: winspool.drv (client interface and RPC stubs to the server), spoolsv.exe (the spooler's API server, a service started at boot), spoolss.dll (the router, which selects the print provider by printer name or handle), and the print providers — localspl.dll (local print provider), win32spl.dll (network provider, RPC to a remote spoolsv.exe), plus historically nwprovau.dll (NetWare) and inetpp.dll (HTTP). Below these sit print processors (such as localspl.dll) that convert spooled data types, and print monitors (language monitors and port monitors) that talk to the port or device. Microsoft documents that all spooler components execute in user mode."
    },
    {
      "kind": "paragraph",
      "text": "CUPS is organized around a single scheduler, cupsd, an HTTP/1.1 and IPP server. It forks external helper processes — normally under an unprivileged lp account — for long-running work: filters (format conversion), backends (device transport), CGI helpers (web UI), and notifiers (event notifications). Shared logic lives in libcups. Configuration is file-based (cupsd.conf, printers.conf, classes.conf, mime.types, mime.convs, plus per-printer PPDs)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "When an application prints, it does not write to the device; it writes a complete job into spool storage and returns. A background process later reads that storage and drives the device."
    },
    {
      "kind": "paragraph",
      "text": "On Windows, per Microsoft Learn, a Win32 GDI application calls GDI functions; GDI, with the printer driver, either spools drawing instructions as an enhanced metafile (EMF) or renders a printable image. When the application calls StartDoc, the spooler creates a spool file (holding, by default, EMF records) and a companion data file (recording form type, data type, target printer, and similar attributes). Because EMF is device-independent and compact, spooling as EMF lets the application return quickly while a background spooler thread renders the job. When the job is scheduled, the spooler calls the print processor (OpenPrintProcessor, then PrintDocumentOnPrintProcessor), which converts the spooled data (EMF, RAW, or TEXT) into the device format (RAW); asynchronous ControlPrintProcessor calls implement pause, resume, and cancel. The spooler then hands the stream to a language monitor and port monitor (StartDocPort/WritePort/EndDocPort), where a language monitor may inject device commands such as PJL before the port monitor writes to the physical port. The spooler deletes the spool and data files after the job prints successfully."
    },
    {
      "kind": "paragraph",
      "text": "On CUPS, a client submits via IPP (a Print-Job or Create-Job operation carried over HTTP POST as application/ipp). cupsd records the job as a control file (an IPP message named c00001, c00002, and so on) and one or more data files (the original submitted document, named d00001-001, and so on) in /var/spool/cups. When scheduled, CUPS runs a chain of filters to convert the document to the printer's format, optionally a port monitor for channel-specific framing, and finally a backend to transmit to the device. cupsd tracks state, enforces authorization on IPP and HTTP requests, and can emit notifications."
    },
    {
      "kind": "paragraph",
      "text": "The mainframe pattern is the same in spirit: readers ingest jobs to SPOOL volumes, the job runs and writes output to spool, and output writers later despool to printers and punches, applying priorities."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Data flow"
    },
    {
      "kind": "paragraph",
      "text": "The generic path data takes is: application → submission API → spooler/scheduler → spool file(s) on disk (queued) → scheduler selects device → format conversion → device/transport layer → physical printer, with the spool files deleted on success."
    },
    {
      "kind": "paragraph",
      "text": "Windows (GDI/EMF path, per Microsoft docs):"
    },
    {
      "kind": "list",
      "items": [
        "Application calls GDI (StartDoc).",
        "GDI and the printer driver produce EMF records; winspool.drv marshals them to spoolsv.exe via RPC.",
        "spoolss.dll (router) selects the print provider — localspl.dll for local, win32spl.dll for a remote server.",
        "The local print provider writes the spool file (EMF) and data file; the job is queued.",
        "The scheduler picks the job; the print processor converts EMF/RAW/TEXT to RAW.",
        "A language monitor adds device commands (for example, PJL); a port monitor writes to the serial, parallel, USB, or network port.",
        "Files are deleted after successful printing."
      ]
    },
    {
      "kind": "paragraph",
      "text": "CUPS (per the OpenPrinting design doc):"
    },
    {
      "kind": "list",
      "items": [
        "The client sends an IPP Print-Job or Create-Job request over HTTP to cupsd (default port 631).",
        "cupsd authorizes the request and writes a control file (c, the IPP message) and data file(s) (d, the raw document) to /var/spool/cups.",
        "The scheduler queues and schedules the job.",
        "A filter chain converts the document format to a printable format (text, PostScript, PDF, image, HP-GL/2, or driver filters such as PCL or ESC/P).",
        "An optional port monitor applies channel formatting.",
        "A backend (USB, AppSocket/JetDirect, IPP, LPD, or SMB) transmits to the device."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Operating system integration"
    },
    {
      "kind": "paragraph",
      "text": "Windows. The print spooler is a core OS service. spoolsv.exe starts at boot and runs until shutdown; the service is named \"Print Spooler\" (spooler) and is managed like any service (net stop/start spooler, Restart-Service spooler). The spooler maintains a registry-based database of spooler components and printer forms. Notable evolution includes client-side rendering (CSR), added in Windows Vista so jobs render on the client rather than the print server, and Printer Driver Isolation in Windows 7, which lets drivers run in a separate process from the spooler for stability. Microsoft now positions the IPP-class-driver and Print Support Apps platform as preferred and has deprecated third-party print providers starting with Windows 10."
    },
    {
      "kind": "paragraph",
      "text": "macOS, iOS, and iPadOS. Apple adopted CUPS as the printing system for the Mac OS X 10.2 release in 2002 and later purchased the source code in 2007; CUPS remains Apple's print subsystem."
    },
    {
      "kind": "paragraph",
      "text": "Linux and Unix-like systems. CUPS is the de facto default print subsystem on most Linux distributions, layered over the filesystem (/var/spool/cups, /var/log/cups) and started as the cupsd daemon. It provides both System V (lp, lpadmin, cupsaccept/cupsreject) and Berkeley (lpr, lpq, lprm) command interfaces for compatibility. Historically, Unix used the Berkeley lpr/lpd spooler and the System V spooler directly."
    },
    {
      "kind": "paragraph",
      "text": "Mainframe (IBM z/OS). Spooling is provided by the Job Entry Subsystem — JES2 (HASP lineage) or JES3 (ASP lineage) — deeply integrated with job management and using dedicated SPOOL volumes."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to standards"
    },
    {
      "kind": "list",
      "items": [
        "IPP (Internet Printing Protocol). The wire and model standard underpinning CUPS and modern Windows printing. IPP is defined by RFC 8010 (Encoding and Transport) and RFC 8011 (Model and Semantics), which obsolete the earlier RFC 2910 and RFC 2911; both were elevated to Internet Standard STD 92. CUPS' scheduler implements IPP over HTTP/1.1 and uses it to manage jobs and queues; the default port is 631, on both TCP and UDP.",
        "LPD/LPR (Line Printer Daemon protocol). Documented in RFC 1179 (Informational, August 1990, authored by Leo J. McLaughlin III), listening on TCP port 515. It originated in the Berkeley printing system in BSD Unix. CUPS supports LPD via the cups-lpd helper, which converts jobs received on port 515 to IPP. RFC 1179 describes existing practice rather than a formal Standards-Track specification.",
        "PPD (PostScript Printer Description). Adobe's text-file format used by CUPS to describe printer capabilities and drivers, being phased down in newer CUPS in favor of driverless IPP.",
        "Page-description and job-control languages. On Windows, a language monitor may add PJL commands before the port monitor writes to the device; CUPS ships filters and drivers for PostScript, PDF, PCL, ESC/P, and HP-GL/2.",
        "Windows spool data types. The Windows spooler formally supports EMF, ASCII TEXT, and RAW (RAW covering PostScript, PCL, and custom types)."
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
        "EMF (Enhanced Metafile). Windows' default spool data type — a device-independent record of GDI calls, enabling fast application return and either server-side or client-side rendering.",
        "XPS print path. On Windows, GDI print commands can be converted to XPS and sent down the XPS print path as an alternative to the GDI/EMF path.",
        "RPC. Windows uses RPC between winspool.drv and spoolsv.exe, and between the network provider win32spl.dll and a remote server's spoolsv.exe, so local and remote printing look identical to the client.",
        "HTTP, CGI, and IPP-over-HTTP. The CUPS scheduler is fundamentally an HTTP server; it uses CGI helpers for its web UI and carries IPP inside HTTP.",
        "Batch scheduling and store-and-forward messaging. The spool concept generalizes beyond printing — batch systems spool ready-to-run tasks, and uucp, email, and Usenet use \"spool\" directories for message queues.",
        "Storage evolution. The shift from magnetic tape to random-access hard disk (mid-1960s to 1970s) made queue reordering, priorities, and true on-line spooling practical."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "paragraph",
      "text": "This section describes technical roles only; it does not endorse any vendor's products."
    },
    {
      "kind": "list",
      "items": [
        "IBM originated spooling (the 7070 \"SPOOL System,\" 7070-IO-076), the OS/360 reader/interpreter and output-writer model, HASP and ASP, and their successors JES2 and JES3. The IBM 1401 was widely used as an offline satellite for card/tape transfer as an alternative to spooling.",
        "Apple adopted CUPS for the Mac OS X 10.2 release in 2002, hired CUPS author Michael Sweet, and bought the source code in 2007; it still ships CUPS in macOS, iOS, and iPadOS.",
        "Microsoft defines the Windows print spooler architecture (spoolsv.exe, the spoolss.dll router, localspl.dll, print processors, and print, port, and language monitors) and has moved toward IPP-class drivers, deprecating third-party print providers from Windows 10.",
        "HP contributes industry technologies the spooler layer converts to or frames — PCL, PJL, and the AppSocket/JetDirect network transport (a CUPS backend).",
        "Adobe contributes PostScript (a RAW data type and filter target) and the PPD format used to describe printers in CUPS.",
        "Easy Software Products and OpenPrinting are the original and current stewards of CUPS."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Spooling remains foundational. Every mainstream desktop OS still spools: Windows via the Print Spooler service, macOS and iOS via CUPS, and Linux via CUPS. The core value propositions are unchanged — decouple the application from the device, queue and prioritize competing jobs, and abstract heterogeneous devices and transports behind a logical queue."
    },
    {
      "kind": "paragraph",
      "text": "What has shifted is the substrate and the protocols. Random-access disk long ago replaced tape, and the network is now the dominant transport, with IPP and driverless printing increasingly replacing per-model drivers and older protocols such as LPD. Rendering has moved for scalability and reliability: Windows added client-side rendering (Vista) to offload print servers and Printer Driver Isolation (Windows 7) to contain driver faults."
    },
    {
      "kind": "paragraph",
      "text": "The spooler also remains a security-sensitive surface. Because it is a privileged, often network-reachable service that loads third-party code — drivers, providers, filters, and backends — it has been the locus of notable vulnerabilities, including the Windows Print Spooler \"PrintNightmare\" flaw (CVE-2021-34527) and a 2024 remote-code-execution class of issues in the OpenPrinting CUPS stack (CVE-2024-47176 and related). These pressures are part of why Microsoft deprecated third-party print providers and why CUPS runs helpers under an unprivileged account."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common misconceptions"
    },
    {
      "kind": "list",
      "items": [
        "\"SPOOL definitely stands for Simultaneous Peripheral Operations On-Line.\" The expansion is commonly cited but its derivation is uncertain and may be a backronym; an alternative account links \"spool\" to reels of magnetic tape.",
        "\"Spooling is only about printing.\" It historically mediated card readers, punches, and tape drives, underlies batch job queues, and names message queues in uucp, email, and Usenet.",
        "\"The application sends data straight to the printer.\" With spooling, the application writes a complete job to disk and returns; a separate background process later drives the device.",
        "\"Spooling always meant disk.\" The earliest spooling used magnetic tape; disk became the norm only from the mid-1960s onward.",
        "\"Offline satellite computers such as the IBM 1401 were spooling.\" They were an alternative to on-line spooling — data was moved between cards and tape on a separate machine, not concurrently on-line with the main CPU.",
        "\"A Windows 'local' printer is physically attached.\" Microsoft notes that printers managed by the local print provider need not be physically local; \"local\" refers to which provider manages the queue.",
        "\"CUPS is a Linux-only project.\" It originated on Unix, became Apple's print system, and is now maintained as OpenPrinting CUPS for non-Apple platforms."
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
          "period": "7070 era",
          "text": "IBM's \"SPOOL System\" (7070-IO-076) copies data between punched cards, magnetic tape, and printers on the IBM 7070 series — among the first spooling programs."
        },
        {
          "period": "Early 1960s",
          "text": "Large IBM installations commonly use an offline satellite computer such as the IBM 1401 for card/tape transfer as an alternative to on-line spooling."
        },
        {
          "period": "Mid-1960s",
          "text": "Hard disks begin replacing magnetic tape for spooling, adding random access and higher speed."
        },
        {
          "period": "1960s",
          "text": "HASP (Houston Automatic Spooling Priority) is developed by IBM Federal Systems Division contractors at NASA's Johnson Space Center, Houston (Tom Simpson, Bob Crabtree); it becomes prominent on OS/360."
        },
        {
          "period": "By the 1970s",
          "text": "Disk has largely replaced tape for spooling."
        },
        {
          "period": "Early 1980s",
          "text": "The Line Printer Daemon (LPD/LPR) is introduced with the Berkeley printing system in BSD Unix."
        },
        {
          "period": "August 1990",
          "text": "RFC 1179 documents the LPD protocol (Informational)."
        },
        {
          "period": "1997",
          "text": "Michael Sweet (Easy Software Products) begins developing CUPS."
        },
        {
          "period": "June 9, 1999",
          "text": "First public CUPS releases and betas."
        },
        {
          "period": "2002",
          "text": "Apple adopts CUPS as the printing system for the Mac OS X 10.2 release."
        },
        {
          "period": "2007",
          "text": "Apple hires Michael Sweet and purchases the CUPS source code."
        },
        {
          "period": "Windows Vista era",
          "text": "Client-side rendering is added to the Windows print spooler."
        },
        {
          "period": "Windows 7 era",
          "text": "Printer Driver Isolation lets drivers run outside the spooler process."
        },
        {
          "period": "Windows 10",
          "text": "Third-party print providers are deprecated."
        },
        {
          "period": "2020",
          "text": "OpenPrinting forks CUPS; Apple retains the macOS, iOS, and iPadOS builds."
        },
        {
          "period": "2017/2018",
          "text": "IPP is republished as RFC 8010 and RFC 8011 and elevated to Internet Standard STD 92."
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
      "section": "glossary",
      "slug": "print-spooler"
    },
    {
      "section": "guides",
      "slug": "print-queue-lifecycle"
    },
    {
      "section": "guides",
      "slug": "windows-print-spooler"
    },
    {
      "section": "guides",
      "slug": "cups-architecture"
    },
    {
      "section": "glossary",
      "slug": "print-queue"
    },
    {
      "section": "history",
      "slug": "spoolers-and-print-queues"
    }
  ],
  "faqs": [
    {
      "q": "What is spooling in printing?",
      "a": "Spooling buffers a print job on fast intermediate storage — normally disk — so the producing application does not have to run at the printer's mechanical speed. The job is written in full to a spool file, placed in a queue, and later despooled to the printer by a background process, decoupling the application from the physical device."
    },
    {
      "q": "Does SPOOL stand for Simultaneous Peripheral Operations On-Line?",
      "a": "That expansion is commonly cited but uncertain, and may be a backronym. An alternative account links the word to reels (\"spools\") of magnetic tape, which was the original spooling medium before disk."
    },
    {
      "q": "What are the main components of the Windows print spooler?",
      "a": "Per Microsoft's documentation, the client interface winspool.drv, the API server spoolsv.exe (the Print Spooler service), the router spoolss.dll, print providers such as localspl.dll and win32spl.dll, plus print processors and print/port/language monitors. All run in user mode."
    },
    {
      "q": "How does CUPS handle spooling?",
      "a": "The cupsd scheduler, an HTTP and IPP server, receives jobs over IPP, writes a control file (c*) and data file(s) (d*) to /var/spool/cups, then forks filters to convert the format and a backend to transmit to the device."
    },
    {
      "q": "Which standards govern print spooling on the network?",
      "a": "IPP is defined by RFC 8010 and RFC 8011 (Internet Standard STD 92, port 631). The older LPD/LPR protocol is documented in RFC 1179 (Informational, 1990, TCP port 515). CUPS bridges LPD to IPP via its cups-lpd helper."
    }
  ],
  "sources": [
    {
      "title": "Introduction to Spooler Components",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/introduction-to-spooler-components",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Print Spooler Architecture",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/print-spooler-architecture",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Introduction to Print Providers",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/introduction-to-print-providers",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Introduction to Print Processors",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/introduction-to-print-processors",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "CUPS Software Design Description",
      "url": "https://openprinting.github.io/cups/doc/spec-design.html",
      "publisher": "OpenPrinting / CUPS"
    },
    {
      "title": "RFC 1179: Line Printer Daemon Protocol",
      "url": "https://www.rfc-editor.org/rfc/rfc1179",
      "publisher": "IETF"
    },
    {
      "title": "RFC 8010: IPP/1.1: Encoding and Transport",
      "url": "https://www.rfc-editor.org/rfc/rfc8010",
      "publisher": "IETF"
    },
    {
      "title": "RFC 8011: IPP/1.1: Model and Semantics",
      "url": "https://www.rfc-editor.org/rfc/rfc8011",
      "publisher": "IETF"
    },
    {
      "title": "Red Hat Response to OpenPrinting CUPS Vulnerabilities",
      "url": "https://www.redhat.com/en/blog/red-hat-response-openprinting-cups-vulnerabilities",
      "publisher": "Red Hat"
    },
    {
      "title": "PrintNightmare, Critical Windows Print Spooler Vulnerability (CVE-2021-34527)",
      "url": "https://www.cisa.gov/news-events/alerts/2021/06/30/printnightmare-critical-windows-print-spooler-vulnerability",
      "publisher": "CISA"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "spooling architecture",
    "print spooler",
    "spool file",
    "print queue",
    "despooling",
    "hasp",
    "jes2",
    "cups",
    "cupsd",
    "spoolsv.exe",
    "localspl.dll",
    "print provider"
  ],
  "cluster": "print-pipeline"
};

export default entry;
