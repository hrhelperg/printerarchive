import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "print-job-lifecycle",
  "title": "Print Job Lifecycle",
  "description": "How a print job moves through submission, spooling, filtering, transmission, and completion — the IPP state model and its CUPS and Windows implementations.",
  "summary": "A print job is the fundamental unit of work in a printing system: a self-contained bundle of document data plus processing instructions that travels from an application, through the operating system's print subsystem, and out to an output device. The print job lifecycle describes the ordered states and processing stages that unit passes through — submission, admission to a queue, spooling to storage, format conversion and rendering, transmission to the device, marking on media, and terminal disposition. Two authoritative frameworks define it: the abstract model in the Internet Printing Protocol (RFC 8011), whose Job objects carry a fixed seven-value job-state enumeration augmented by an extensible job-state-reasons attribute, and its reference implementation in CUPS, whose scheduler realizes that abstract model as concrete spool files processed by filters and delivered by backends. Windows implements an analogous lifecycle through its Print Spooler service.",
  "difficulty": "intermediate",
  "estimatedTime": "12 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "A print job is the fundamental unit of work in every modern printing system: a self-contained bundle of document data plus processing instructions (copies, media, sides, finishing) that travels from an application, through the operating system's print subsystem, and out to a physical or virtual output device. The \"print job lifecycle\" describes the ordered set of states and processing stages that unit passes through — submission, admission to a queue, spooling to persistent storage, format conversion and rendering, transmission to the device, marking on media, and terminal disposition."
    },
    {
      "kind": "paragraph",
      "text": "Two authoritative frameworks define this lifecycle:"
    },
    {
      "kind": "list",
      "items": [
        "The IPP model. The Internet Printing Protocol defines an abstract, transport-independent model in which a Printer object holds a queue of Job objects, and each Job carries a required job-state attribute drawn from a fixed enumeration, augmented by an extensible job-state-reasons attribute. This is specified in RFC 8011, IPP/1.1: Model and Semantics (January 2017).",
        "The CUPS implementation. CUPS (the Common UNIX Printing System) is the reference open-source printing stack on Linux, macOS, and other Unix-like systems. Its scheduler cupsd is an HTTP/1.1 and IPP server; it realizes the abstract IPP job lifecycle as concrete on-disk spool files processed by a chain of filters and delivered by a backend."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The IPP job state machine has exactly seven states, plus an out-of-band unknown value, and three of those seven are terminal (completed, canceled, aborted)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Two lineages converge in the modern print job lifecycle: the Berkeley/System V Unix spoolers, and the IETF's Internet Printing Protocol."
    },
    {
      "kind": "list",
      "items": [
        "Berkeley LPD (line printer daemon). The Unix lpr/lpd spooling model — a client submits a job to a daemon that queues it on disk and feeds it to a device — is codified in RFC 1179, Line Printer Daemon Protocol (August 1990, Informational). Its lpr/lpq/lprm/lpc commands and control/data file split are the direct ancestors of later spoolers, and CUPS still provides these commands and an LPD compatibility gateway (cups-lpd) on TCP port 515.",
        "IPP standardization. IPP/1.1 was first published as RFC 2911 (Model and Semantics) and RFC 2910 (Encoding and Transport) in 2000. Those were later obsoleted by the current pair: RFC 8011 (model and semantics; obsoletes 2911, 3381, 3382) and RFC 8010 (encoding and transport; obsoletes 2910, 3382), both January 2017, both authored by Michael Sweet (Apple Inc.) and Ira McDonald (High North, Inc.). RFC 8011 is an Internet Standard (STD 92). Ongoing work is carried by the Printer Working Group (PWG) and the IANA IPP registries.",
        "CUPS. Per the OpenPrinting CUPS project, CUPS was originally developed by Michael R. Sweet at Easy Software Products starting in 1997, with the first beta released May 14, 1999. Apple licensed CUPS for macOS in 2002 and purchased CUPS in February 2007, hiring Sweet to continue it as open source. Sweet left Apple in December 2019 to start Lakeside Robotics; in September 2020, OpenPrinting forked Apple CUPS into OpenPrinting CUPS, which is the actively developed line today.",
        "Driverless era. The PWG's IPP Everywhere effort standardized discovery (DNS-SD) plus a fixed set of document formats so clients can print without vendor-specific drivers, steering CUPS toward an all-IPP architecture that reduces reliance on classic PPD-based drivers."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "The lifecycle is best understood as an abstract model realized by concrete implementations."
    },
    {
      "kind": "paragraph",
      "text": "IPP abstract model (RFC 8011). The relevant objects are:"
    },
    {
      "kind": "list",
      "items": [
        "Printer object — the queue, addressed by a printer-uri; holds printer-state and printer-state-reasons.",
        "Job object — created by a Job Creation operation and addressed by job-uri/job-id; carries job-state (the seven-value enum), job-state-reasons (an extensible keyword set), and job-state-message (human-readable).",
        "Document(s) — a Job optionally contains one or more Documents (via Create-Job plus Send-Document).",
        "Operations that drive the lifecycle: Print-Job, Print-URI, Validate-Job, Create-Job plus Send-Document/Send-URI (submission); Cancel-Job, Hold-Job, Release-Job, Restart-Job (control); Get-Job-Attributes, Get-Jobs (query)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "CUPS implementation. From the CUPS Design Description:"
    },
    {
      "kind": "list",
      "items": [
        "Scheduler cupsd — an HTTP/1.1 and IPP/2.1 server that manages HTTP/IPP requests, printers, classes, jobs, subscriptions, and notifications. It forks external helper processes (filters, backends, CGI, notifiers) for long-running work.",
        "Config files — cupsd.conf, classes.conf, printers.conf, subscriptions.conf, and mime.types/mime.convs (file types and filter conversion rules); plus per-printer PPD files in the legacy driver model.",
        "Spool directory — typically /var/spool/cups, holding control files named c00001, c00002, … (IPP messages derived from the original request — one per job) and data files named d00001-001, … (the actual document data — zero or more per job).",
        "Log files — in /var/log/cups: access_log, error_log, page_log.",
        "Filters — programs that convert job data toward a printable format.",
        "Port monitors — device/channel-specific data formatting; CUPS ships bcp and tbcp (Binary and Tagged Binary Communications Protocol).",
        "Backends — deliver data to the device and enumerate devices: AppSocket (JetDirect), IPP, LPD, and USB, plus DNS-SD and SNMP for discovery.",
        "libcups — the shared library carrying core HTTP/IPP code used by the scheduler, commands, filters, and backends."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Following one job through IPP semantics and the CUPS realization:"
    },
    {
      "kind": "paragraph",
      "text": "1. Submission. An application (or lp/lpr) issues a Job Creation request to the printer-uri. The common case is Print-Job (data inline, one document). Alternatives are Print-URI (data by reference) or Create-Job followed by one or more Send-Document/Send-URI for multi-document jobs. Validate-Job lets a client pre-check acceptance without creating a job. The request carries operation attributes (such as printer-uri, requesting-user-name, job-name, document-format, compression) and Job Template attributes (copies, sides, media, and the like)."
    },
    {
      "kind": "paragraph",
      "text": "2. Admission and job creation. The Printer validates the request. On acceptance it creates a Job and returns the required job-id, job-uri, and job-state. A newly created job normally enters pending (a candidate to start) or pending-held (blocked, with the reason in job-state-reasons). Before all data arrives, the Printer may set job-incoming and/or job-data-insufficient reasons. In CUPS this is where the cNNNNN control file and dNNNNN-NNN data file(s) are written to /var/spool/cups."
    },
    {
      "kind": "paragraph",
      "text": "3. Scheduling. When the queue is ready and the job is at the head, the scheduler selects it and moves it to processing."
    },
    {
      "kind": "paragraph",
      "text": "4. Rendering and filtering. RFC 8011 folds interpreting a page description language, transforming to another representation, and being queued at the device all into the single processing state, with finer detail in job-state-reasons (job-interpreting, job-transforming, job-queued, job-queued-for-marker, job-printing). In CUPS, cupsd runs the filter chain determined by mime.convs and the PPD."
    },
    {
      "kind": "paragraph",
      "text": "5. Transmission. The printable stream is handed to a backend (such as ipp, socket, usb, or lpd), which opens the channel and writes to the device; job-outgoing marks transmission to the output device."
    },
    {
      "kind": "paragraph",
      "text": "6. Marking and completion. The device marks media; job-printing may be posted while sheets accrue. When all media sheets are stacked and all status attributes reach final values, the job moves to the terminal completed state with a completion reason (job-completed-successfully, -with-warnings, or -with-errors)."
    },
    {
      "kind": "paragraph",
      "text": "7. Interruptions. A Cancel-Job from any non-terminal state drives the job toward canceled (via a transient processing-to-stop-point). A system-detected fatal error, such as unsupported-document-format, drives it to aborted. A stalled device holds the job in the recoverable processing-stopped state until conditions clear."
    },
    {
      "kind": "paragraph",
      "text": "8. Retention, history, removal. After reaching a terminal state the Printer may retain the job (data kept, restartable via Restart-Job) for an implementation-defined period; then it enters Job History (data deleted, attributes may remain — RFC 8011 says the Printer SHOULD keep the job in the Job History phase for at least 60 seconds); finally Job Removal deletes it entirely. CUPS mirrors this: data files are removed immediately after a successful print, while control files are retained (by default cleaned out after the 500th job)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Data flow"
    },
    {
      "kind": "paragraph",
      "text": "The path data takes through the subsystem, from application to stacked sheets:"
    },
    {
      "kind": "list",
      "items": [
        "Application / lp / lpr produces document data plus Job Template attributes.",
        "An IPP Job Creation request (Print-Job, or Create-Job plus Send-Document) is sent over an HTTP POST with content type application/ipp.",
        "The scheduler (cupsd) writes /var/spool/cups/cNNNNN (control) and dNNNNN-NNN (data). The admitted job enters job-state pending or pending-held.",
        "The scheduler selects the job, moving job-state to processing.",
        "The filter chain (per mime.convs and PPD) normalizes and then rasterizes or drives the data toward a device-ready format, with reasons progressing job-interpreting → job-transforming → job-queued-for-marker.",
        "An optional port monitor (such as bcp/tbcp) applies channel encoding.",
        "The backend (ipp, socket, usb, or lpd) transmits to the device (reason job-outgoing).",
        "The output device marks media (reason job-printing).",
        "The job reaches a terminal state: completed, canceled, or aborted.",
        "Retention → History (≥60 s) → Removal follows; data files are deleted after a successful print."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The abstract contract is: raw document data plus instructions in, physically stacked sheets out, with the job-state/job-state-reasons pair acting as the observable snapshot a client polls (via Get-Job-Attributes) at every stage."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Operating system integration"
    },
    {
      "kind": "paragraph",
      "text": "Linux and other Unix-like systems. CUPS is the print subsystem: cupsd owns the queue, filters, and backends, and exposes IPP over HTTP at http://127.0.0.1:631/. Applications typically go through a print dialog that talks to CUPS. The Berkeley (lpr/lpq/lprm/lpc) and System V (lp/lpstat/cancel/lpadmin/lpmove) command sets are provided as front ends."
    },
    {
      "kind": "paragraph",
      "text": "macOS and iOS. Apple CUPS is the underlying print subsystem on macOS, and CUPS technology underlies printing on iOS. Discovery and driverless printing use IPP together with DNS-SD."
    },
    {
      "kind": "paragraph",
      "text": "Windows has its own subsystem with an analogous lifecycle, per Microsoft Learn:"
    },
    {
      "kind": "list",
      "items": [
        "The Print Spooler service — an executable loaded at system startup — manages the process: locating and loading the driver, spooling high-level GDI calls into a job, scheduling it, and feeding the device. A job is bracketed by StartDoc/EndDoc (application) and StartDocPrinter/EndDocPrinter (spooler).",
        "Supported spool data types are Enhanced Metafile (EMF), ASCII TEXT, and RAW (PostScript, PCL, or custom).",
        "A print processor (a user-mode DLL; localspl.dll handles EMF/RAW/TEXT-to-RAW) converts the spooled data and also implements pause, resume, and cancel via ControlPrintProcessor.",
        "Language monitors (for example Pjlmon.dll, adding PJL commands) and port monitors (for example Localmon.dll) then move the stream to the port driver."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Windows also supports IPP printing, so IPP jobs interoperate across these OS boundaries."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to standards"
    },
    {
      "kind": "list",
      "items": [
        "RFC 8011 — IPP/1.1: Model and Semantics defines the Printer/Job/Document objects, the seven-value job-state enum, job-state-reasons, the lifecycle diagram, and the retention/history/removal phases. It is the primary source for the job lifecycle.",
        "RFC 8010 — IPP/1.1: Encoding and Transport is the companion wire encoding (IPP messages over HTTP). It obsoletes RFC 2910 and RFC 3382.",
        "RFC 2911 / RFC 2910 are the original IPP/1.1 model and encoding (2000), now obsoleted by 8011/8010.",
        "RFC 1179 — Line Printer Daemon Protocol is the Berkeley LPD spooling model, still bridged by the CUPS cups-lpd gateway.",
        "PWG standards — IPP Everywhere (discovery plus required PWG Raster and JPEG document formats, with PDF recommended, for driverless printing) and the IPP Implementor's Guides. IPP registrations, including additional job-state-reasons keywords, are maintained through the PWG and IANA. RFC 8011 makes job-state-reasons deliberately extensible so new reasons can be registered without breaking deployed clients — unlike the fixed job-state enum."
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
        "HTTP — IPP rides on HTTP POST with content type application/ipp; cupsd is simultaneously an HTTP and IPP server.",
        "DNS-SD (Bonjour / mDNS) — printer discovery for IPP Everywhere; CUPS ships a DNS-SD backend.",
        "SNMP — device discovery and status; CUPS ships an SNMP backend.",
        "Page description languages — PostScript, PDF, PCL, ESC/P, HP-GL/2, and PWG Raster; filters convert the incoming format to a device-ready PDL during the processing state.",
        "PPD (PostScript Printer Description) files — the legacy per-queue capability and driver description in CUPS; the driverless IPP Everywhere model reduces reliance on them.",
        "USB, AppSocket (JetDirect, TCP port 9100), and LPD — physical and network transports realized as CUPS backends and, on Windows, as port monitors."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "list",
      "items": [
        "Apple owns and ships CUPS (macOS and iOS) and employed the IPP/CUPS lead author, Michael Sweet, through 2019; RFC 8010 and RFC 8011 list Apple Inc. as the first author's affiliation.",
        "HP — AppSocket/JetDirect (raw TCP port 9100) and PCL are HP technologies represented as CUPS backends and filters; PJL, used by Windows language monitors, originated with HP.",
        "Adobe — PostScript and PDF, the dominant PDLs the filter stage targets and normalizes.",
        "Epson — ESC/P, another driver-filter target in CUPS.",
        "Microsoft — its own spooler architecture (spooler service, print processors, language and port monitors) with its own EMF/RAW/TEXT data types, interoperating with IPP."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Broad industry participation is channeled through the PWG, keeping the lifecycle vendor-neutral. The PWG's IPP Everywhere page states an estimated 98% of printers sold today support IPP/2.0 and DNS-SD; this is a PWG positioning figure rather than an independently audited statistic."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "The IPP job lifecycle is arguably more central now than a decade ago. Driverless printing (IPP Everywhere and related profiles) makes IPP the default path from phones, laptops, and Chromebooks to printers, and the job-state/job-state-reasons pair is the standard way applications show \"printing…\", \"held\", \"canceled\", or \"error\" status."
    },
    {
      "kind": "paragraph",
      "text": "OpenPrinting CUPS is moving toward an all-IPP architecture in which classic PPD-based drivers are replaced by self-contained Printer Applications — IPP services that expose a printer over IPP Everywhere — while still supporting IPP Everywhere printers and legacy PPD drivers for compatibility."
    },
    {
      "kind": "paragraph",
      "text": "Cloud and enterprise \"release printing\" build on the same model, where a print service acts as a proxy that printers poll for jobs; the job lifecycle spans client, cloud, and device without changing the state semantics. The seven-state model has proven durable precisely because implementation detail was pushed into the extensible job-state-reasons rather than the fixed enum."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common misconceptions"
    },
    {
      "kind": "list",
      "items": [
        "\"There are lots of job states.\" IPP defines exactly seven job-state values (plus the out-of-band unknown). The apparent richness lives in job-state-reasons, which is extensible.",
        "\"processing means the printer is putting ink on paper.\" RFC 8011 defines processing broadly: interpreting a PDL, making marks, or merely having the job queued in the device waiting to print. Actual marking is signaled by the job-printing reason, not by a distinct state.",
        "\"Canceled and aborted are the same.\" canceled results from a Cancel-Job operation (by user, operator, or device); aborted is a system-initiated termination, typically from a fatal error such as unsupported-document-format. They are distinct states with distinct reasons.",
        "\"A completed job disappears immediately.\" Completion is followed by optional retention (restartable), then Job History (SHOULD persist at least 60 seconds), then removal. In CUPS the data files are removed after a successful print, but control files are retained (by default, cleaned after the 500th job).",
        "\"completed means success.\" A job can reach completed with job-completed-with-errors. Reaching a terminal state is not the same as printing perfectly.",
        "\"Spooling equals rendering.\" Spooling is persisting the job to storage and queuing it; rendering/filtering is a separate stage within the processing state.",
        "\"CUPS uses its own protocol.\" CUPS is fundamentally an IPP (and HTTP) server; its jobs follow the RFC 8011 lifecycle.",
        "\"IPP replaced LPD entirely.\" LPD (RFC 1179) semantics persist; CUPS still offers the lpr-family commands and a cups-lpd gateway on port 515."
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
          "period": "1990",
          "text": "RFC 1179 documents the Berkeley Line Printer Daemon Protocol (spooling model; lpr/lpd, TCP port 515)."
        },
        {
          "period": "1997",
          "text": "Michael R. Sweet begins developing CUPS at Easy Software Products."
        },
        {
          "period": "1999 (May 14)",
          "text": "First public beta of CUPS."
        },
        {
          "period": "2000",
          "text": "IPP/1.1 published as RFC 2911 (Model and Semantics) and RFC 2910 (Encoding and Transport)."
        },
        {
          "period": "2002",
          "text": "Apple licenses CUPS for macOS."
        },
        {
          "period": "2007 (February)",
          "text": "Apple purchases CUPS and hires Michael Sweet."
        },
        {
          "period": "2017 (January)",
          "text": "RFC 8011 (obsoletes 2911, 3381, 3382) and RFC 8010 (obsoletes 2910, 3382) published, the current IPP/1.1 specifications."
        },
        {
          "period": "2019 (December)",
          "text": "Sweet leaves Apple and founds Lakeside Robotics."
        },
        {
          "period": "2020 (September)",
          "text": "OpenPrinting forks Apple CUPS into OpenPrinting CUPS, the actively developed line."
        },
        {
          "period": "2020s",
          "text": "Driverless printing (IPP Everywhere) becomes dominant; CUPS moves toward an all-IPP architecture with Printer Applications replacing classic PPD drivers."
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
      "slug": "print-queue-lifecycle"
    },
    {
      "section": "guides",
      "slug": "spooling-architecture"
    },
    {
      "section": "tools",
      "slug": "ipp"
    },
    {
      "section": "tools",
      "slug": "cups"
    },
    {
      "section": "tools",
      "slug": "lpd-lpr"
    },
    {
      "section": "glossary",
      "slug": "print-spooler"
    }
  ],
  "faqs": [
    {
      "q": "How many states can an IPP print job have?",
      "a": "IPP defines exactly seven job-state values — pending, pending-held, processing, processing-stopped, canceled, aborted, and completed — plus an out-of-band unknown value. Three of the seven (completed, canceled, aborted) are terminal. Finer detail is carried by the separate, extensible job-state-reasons attribute rather than by adding more states."
    },
    {
      "q": "What is the difference between a canceled and an aborted print job?",
      "a": "A job becomes canceled as a result of a Cancel-Job operation issued by a user, operator, or the device. A job becomes aborted through a system-initiated termination, typically after a fatal error such as an unsupported document format. They are distinct terminal states with distinct job-state-reasons."
    },
    {
      "q": "Does a completed print job always mean it printed successfully?",
      "a": "No. A job can reach the completed state with the reason job-completed-with-errors or job-completed-with-warnings. Reaching a terminal state means processing has finished, not that every sheet printed perfectly."
    },
    {
      "q": "What happens to a print job after it finishes in CUPS?",
      "a": "After a job reaches a terminal state, the printer may retain it (restartable), then move it to Job History (RFC 8011 recommends keeping it at least 60 seconds), then remove it. In CUPS, data files are deleted immediately after a successful print, while control files are retained and, by default, cleaned out after the 500th job."
    },
    {
      "q": "Is spooling the same as rendering a print job?",
      "a": "No. Spooling is persisting the job to storage and queuing it. Rendering, or filtering, is a separate stage that occurs within the processing state, where a page description language is interpreted or transformed into a device-ready format."
    }
  ],
  "sources": [
    {
      "title": "RFC 8011 — Internet Printing Protocol/1.1: Model and Semantics",
      "url": "https://www.rfc-editor.org/rfc/rfc8011",
      "publisher": "IETF / RFC Editor"
    },
    {
      "title": "RFC 8010 — Internet Printing Protocol/1.1: Encoding and Transport",
      "url": "https://www.rfc-editor.org/info/rfc8010",
      "publisher": "IETF / RFC Editor"
    },
    {
      "title": "RFC 1179 — Line Printer Daemon Protocol",
      "url": "https://www.rfc-editor.org/info/rfc1179",
      "publisher": "IETF / RFC Editor"
    },
    {
      "title": "CUPS Design Description",
      "url": "https://openprinting.github.io/cups/doc/spec-design.html",
      "publisher": "OpenPrinting"
    },
    {
      "title": "A Brief History of CUPS",
      "url": "https://openprinting.github.io/cups/",
      "publisher": "OpenPrinting"
    },
    {
      "title": "IPP Everywhere",
      "url": "https://www.pwg.org/ipp/everywhere.html",
      "publisher": "Printer Working Group"
    },
    {
      "title": "Print Spooler",
      "url": "https://learn.microsoft.com/windows/win32/printdocs/print-spooler",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Introduction to Print Processors",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/introduction-to-print-processors",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "IANA IPP Registrations",
      "url": "https://www.iana.org/assignments/ipp-registrations/",
      "publisher": "IANA"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "print job lifecycle",
    "ipp job states",
    "job-state",
    "job-state-reasons",
    "rfc 8011",
    "cups scheduler",
    "cupsd",
    "print spooling",
    "print filters",
    "print backend",
    "windows print spooler",
    "print processor"
  ],
  "cluster": "print-pipeline"
};

export default entry;
