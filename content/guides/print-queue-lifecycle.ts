import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "print-queue-lifecycle",
  "title": "Print Queue Lifecycle",
  "description": "How print queues hold, order, and dispatch jobs across CUPS and Windows, governed by the RFC 8011 IPP job and printer state model.",
  "summary": "A print queue is the operating-system data structure and control surface that holds submitted print jobs, orders them, and feeds them to an output device as it becomes ready. It decouples submission from imaging: applications hand off a job and return immediately while a background spooler retains each job on disk, tracks its state, and dispatches it. Two things are often conflated under \"queue\": the logical printer/destination (a named object that is accepting or rejecting new jobs, and enabled or disabled for output) and the jobs within it (each moving pending → processing → completed/canceled/aborted). The dominant model is defined by the Internet Printing Protocol in RFC 8011, which specifies exact job and printer state values, transitions, and the operations (Hold-Job, Release-Job, Cancel-Job, Pause-Printer, Resume-Printer) that drive them. CUPS on Linux/macOS/Unix, the Windows Print Spooler, and Microsoft Universal Print all express queue behavior in terms compatible with this model.",
  "difficulty": "intermediate",
  "estimatedTime": "11 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "A print queue is the operating-system data structure and control surface that holds submitted print jobs, orders them, and feeds them to an output device (a physical or logical printer) as that device becomes ready. The queue decouples the moment of submission from the moment of imaging: applications hand off a job and return immediately, while a background service (a spooler or scheduler) retains each job on disk, tracks its state, and dispatches it when the printer is available."
    },
    {
      "kind": "paragraph",
      "text": "Two conceptually separate things are often conflated under \"queue\":"
    },
    {
      "kind": "list",
      "items": [
        "The logical printer / destination — a named administrative object with its own state (accepting vs. rejecting new jobs; enabled vs. disabled/paused output; idle/processing/stopped).",
        "The jobs within it — each an independent object moving through its own lifecycle (pending → processing → completed/canceled/aborted)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The dominant modern model is defined by the Internet Printing Protocol (IPP) in RFC 8011 (IPP/1.1: Model and Semantics), which specifies the exact job and printer state values, transitions, and the operations (Hold-Job, Release-Job, Cancel-Job, Pause-Printer, Resume-Printer) that drive them. CUPS (Linux, macOS, Unix) and, at the semantic layer, Microsoft Windows and Universal Print all express queue behavior in terms compatible with this model."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Batch print spooling — the origin of the word spool — predates networking: mainframe operating systems queued output to disk so the CPU need not wait on slow printers."
    },
    {
      "kind": "paragraph",
      "text": "On Unix, two command families established the enduring queue vocabulary: the BSD/Berkeley line-printer system (lpr, lpq, lprm, lpc, driven by the lpd daemon) and the System V system (lp, lpstat, cancel, lpadmin, plus accept/reject and enable/disable). The BSD network protocol was documented in RFC 1179, \"Line Printer Daemon Protocol,\" August 1990 (informational, The Wollongong Group)."
    },
    {
      "kind": "paragraph",
      "text": "CUPS (Common UNIX Printing System) was created by Michael R. Sweet at Easy Software Products starting in 1997, with its first beta on May 14, 1999. Apple licensed CUPS for macOS in 2002, purchased CUPS and hired Sweet in February 2007. Sweet left Apple in December 2019; in September 2020 OpenPrinting forked \"OpenPrinting CUPS.\" Today Apple CUPS ships in macOS/iOS while OpenPrinting CUPS is developed for all platforms."
    },
    {
      "kind": "paragraph",
      "text": "IPP was standardized by the IETF and the Printer Working Group (PWG). The earlier IPP/1.1 specification (RFC 2911) was obsoleted by RFC 8011 (January 2017), authored by M. Sweet (Apple) and I. McDonald (High North), which also obsoletes RFC 3381 and RFC 3382."
    },
    {
      "kind": "paragraph",
      "text": "The Microsoft Windows print spooler architecture described in current documentation dates from Windows 2000 and later, with additions such as client-side rendering (Windows Vista) and Printer Driver Isolation (Windows 7)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "The IPP model (RFC 8011) defines the vendor-neutral objects:"
    },
    {
      "kind": "list",
      "items": [
        "A Printer object (a logical print destination that may front one or more output devices) with a REQUIRED printer-state enum: idle (3), processing (4), stopped (5), augmented by printer-state-reasons. A printer-is-accepting-jobs (boolean) attribute and a queued-job-count attribute describe the queue as a whole.",
        "A Job object with a REQUIRED job-state enum and job-state-reasons, plus scheduling attributes job-priority (integer 1–100; higher = higher priority) and job-hold-until."
      ]
    },
    {
      "kind": "paragraph",
      "text": "CUPS implements this model around a single daemon:"
    },
    {
      "kind": "list",
      "items": [
        "cupsd — the scheduler, an HTTP/1.1 and IPP/2.1 server application that manages HTTP and IPP requests, printers, classes, jobs, subscriptions, and notifications. It is a single-threaded server that spawns external helper processes (filters, backends, notifiers) normally as the unprivileged lp account.",
        "Config files: cupsd.conf (server settings), printers.conf (queues), classes.conf (printer classes), subscriptions.conf; type/convert rules in mime.types and mime.convs; per-printer PPD files (legacy driver model).",
        "Spool directory (typically /var/spool/cups) holding two file kinds per job: control files prefixed c (c00001…) that are IPP messages derived from the original Print-Job/Create-Job request, and data files prefixed d (d00001-001…) that are the submitted print data. One control file per job; zero or more data files per job.",
        "Logs in /var/log/cups: access_log, error_log, page_log.",
        "Filters (convert job data toward a printable format), port monitors (bcp, tbcp for PostScript binary protocols), backends (usb, ipp, lpd, AppSocket/JetDirect, plus dnssd and snmp for discovery), and notifiers (mailto, rss). Core code is in libcups."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Windows — all spooler components run in user mode:"
    },
    {
      "kind": "list",
      "items": [
        "Winspool.drv — the client-side interface exporting the spooler's Win32 API and RPC stubs.",
        "Spoolsv.exe — the spooler's API server, implemented as a service started at boot (the \"Print Spooler\" service). It exports the RPC interface; most calls are forwarded through the router.",
        "Spoolss.dll — the router, which selects the correct print provider based on the printer name/handle.",
        "Print provider — e.g. the local print provider Localspl.dll.",
        "Print processor — a user-mode DLL (default Localspl.dll) that converts spooled data (data types EMF, RAW, TEXT) and is also responsible for handling application requests to pause, resume, and cancel print jobs.",
        "Print monitors — language monitors (e.g. Pjlmon.dll for Printer Job Language) and port monitors that direct the data stream to the port."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Job submission and the destination's two independent switches. Under the CUPS/System-V model a destination has two orthogonal controls, which is the single most important operational fact about print queues:"
    },
    {
      "kind": "list",
      "items": [
        "Accepting vs. rejecting new jobs — cupsaccept / cupsreject. Rejecting does not touch jobs already queued; it only refuses new submissions (cupsreject -r \"reason\" records why).",
        "Enabled vs. disabled (started/stopped) output — cupsenable / cupsdisable. Disabling stops jobs from being sent to the device while still accepting new ones into the queue."
      ]
    },
    {
      "kind": "paragraph",
      "text": "These are independent: a queue can accept jobs while stopped (jobs accumulate), or reject jobs while still draining what it holds. This is exactly the IPP split between printer-is-accepting-jobs (boolean) and printer-state (idle/processing/stopped)."
    },
    {
      "kind": "paragraph",
      "text": "Holding, releasing, prioritizing."
    },
    {
      "kind": "list",
      "items": [
        "Hold / release a job: IPP defines the Hold-Job and Release-Job operations. Hold-Job moves a job to pending-held; Release-Job returns it to pending when no other hold reasons remain. In CUPS the client form is lp -H hold (hold indefinitely), lp -H HH:MM (hold until a UTC time), lp -i <job-id> -H resume (release). job-hold-until accepts named periods: no-hold, indefinite, day-time, evening, night, weekend, second-shift, third-shift; a future period adds the job-hold-until-specified reason and forces pending-held.",
        "Hold the whole queue: cupsdisable --hold holds remaining jobs (useful to let the current job finish before maintenance); cupsenable --release resumes them. cupsdisable -c cancels all jobs on the destination.",
        "Prioritize: IPP job-priority is an integer 1–100; a Printer MUST print all jobs with a priority value of n before printing those with a priority value of n − 1. CUPS exposes this as lp -q <1–100> (default 50). Note the platform difference below: Windows job priority is 1–99."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Error states. When processing cannot continue, IPP moves the job to processing-stopped (it returns to processing as soon as the reasons are no longer present) and typically adds a job-state-reasons value such as printer-stopped; the device itself may go to printer-state = stopped (\"intervention is required\"). Clients read printer-state, printer-state-reasons, and printer-state-message for detail. Cancellation and system abort lead to the terminal canceled / aborted states."
    },
    {
      "kind": "paragraph",
      "text": "Mapping queues to printers and spoolers. A logical queue can map to one device or to several: CUPS printer classes let one queue name feed the first available member printer (implicit load balancing / failover); IPP calls the same idea a Printer object fronting one or more output devices. The spooler that owns the queue differs by OS: cupsd on Linux/macOS; the Print Spooler service (Spoolsv.exe) on Windows; a cloud service for Microsoft Universal Print."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Data flow"
    },
    {
      "kind": "paragraph",
      "text": "CUPS:"
    },
    {
      "kind": "list",
      "items": [
        "A client submits via IPP over HTTP POST (application/ipp), or through a compatibility command (lp/lpr), or via the cups-lpd gateway (RFC 1179 on TCP 515 → IPP).",
        "cupsd creates the control file (c…, an IPP message) and stores the print data as data file(s) (d…) in /var/spool/cups; the job enters pending (or pending-held if held).",
        "When the destination is accepting and enabled and the device is ready, the scheduler schedules the job (respecting priority), sets it processing, and runs the filter chain to convert the data toward the printable format, optionally through a port monitor.",
        "A backend (usb/ipp/lpd/socket) transmits the result to the device.",
        "On success the job becomes completed; the data file is removed immediately, while control files are retained (by default cleaned after the 500th job). Failures yield processing-stopped, aborted, or canceled."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Windows:"
    },
    {
      "kind": "list",
      "items": [
        "Application → GDI (or XPS path) produces a data stream; Winspool.drv calls into the spooler.",
        "Spoolsv.exe receives the request; the router Spoolss.dll picks the print provider (Localspl.dll locally), which spools the job to a file. The job carries status flags (JOB_STATUS_SPOOLING, then queued).",
        "When the spooler decides the job should print, it invokes the print processor (Localspl.dll), which converts the spooled data (EMF/RAW/TEXT) and writes it back to the spooler (JOB_STATUS_PRINTING).",
        "The spooler delimits the job to a language/port monitor via StartDocPort/WritePort/EndDocPort; a language monitor (e.g. Pjlmon.dll) may inject PJL before the port monitor sends bytes to the port.",
        "Job flags terminate at JOB_STATUS_PRINTED/JOB_STATUS_COMPLETE, or JOB_STATUS_DELETED; JOB_STATUS_RETAINED keeps a finished job in the queue (\"Keep Printed Documents\")."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Operating system integration"
    },
    {
      "kind": "list",
      "items": [
        "Linux / Unix: CUPS is the standard. cupsd is launched by systemd/launchd/init; queues are managed with lpadmin, controlled with cupsenable/cupsdisable and cupsaccept/cupsreject, and inspected with lpstat and lpq. A web UI lives at http://127.0.0.1:631/.",
        "macOS / iOS: macOS uses Apple CUPS (the same architecture and commands); iOS printing is AirPrint, an IPP profile — there is no user-visible local queue, but the IPP job/printer state model still governs behavior.",
        "Windows: the Print Spooler service (Spoolsv.exe) owns per-printer queues. Job state is exposed through the JOB_INFO_1/2/4 structures' status flags and the .NET System.Printing.PrintJobStatus enum; SetJob issues per-job commands (pause/resume/restart/cancel/retain-release). Microsoft now recommends the IPP inbox class driver plus Print Support Apps (PSA) as the modern platform for Windows 10/11.",
        "Microsoft Universal Print (cloud): a service-hosted queue whose per-job status values — unknown, pending, pendingHeld, processing, paused, stopped, completed, canceled, aborted — are a near-verbatim mapping of the IPP job-state model."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to standards"
    },
    {
      "kind": "list",
      "items": [
        "RFC 8011 (IPP/1.1: Model and Semantics) — the authoritative definition of job and printer states, state-reasons, priority, hold-until, and the Hold/Release/Cancel/Pause/Resume operations. It obsoletes RFC 2911, 3381, and 3382. The on-the-wire encoding is defined in the companion RFC 8010.",
        "RFC 1179 (Line Printer Daemon Protocol) — the BSD lpd network queue protocol; CUPS interoperates via cups-lpd on TCP 515.",
        "IPP Everywhere / PWG — the driverless printing profile CUPS uses, standardized through the Printer Working Group.",
        "Related IETF references cited by RFC 8011: the Printer MIB (RFC 3805) for SNMP-based device status and RFC 3995 for IPP event notifications; printer-state-reasons values align with prtAlertSeverityLevel in the Printer MIB."
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
        "Spooling to disk is the mechanism that makes a queue durable and asynchronous — CUPS control/data files, Windows spool files.",
        "Filters / print processors / RIPs turn queued job data into device data (CUPS filter chain; Windows print processor with EMF→RAW conversion; PostScript/PCL/PDF RIPs).",
        "Discovery technologies feed queue creation: DNS-SD/Bonjour and SNMP (CUPS dnssd/snmp backends).",
        "Transports / backends: AppSocket/JetDirect (TCP 9100), IPP over HTTP, LPD/RFC 1179, USB.",
        "Notifications: IPP subscriptions (RFC 3995), CUPS notifiers (mailto, rss), and Windows spooler notification for cross-session UI."
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
        "HP — originated PJL (handled by Windows' Pjlmon.dll language monitor and by CUPS filters) and JetDirect/AppSocket (port 9100), a common CUPS backend.",
        "Apple — owned and developed CUPS (2007–2019) and created AirPrint; CUPS remains the macOS/iOS queue engine.",
        "Microsoft — defines the Windows spooler API surface and now the IPP inbox class driver plus Print Support Apps model.",
        "PostScript (Adobe) — the bcp/tbcp CUPS port monitors implement Adobe's binary communication protocols."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The subsystem is deliberately vendor-neutral: manufacturer specifics enter only through pluggable filters, drivers/PPDs (or Printer Applications), language monitors, and backends — not through the queue/state model itself."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Print queues remain the universal control point for enterprise print management: holding jobs for secure/\"pull\" printing (release at the device), prioritizing, load-balancing across printer classes, accounting via page logs, and pausing a queue for maintenance without losing submissions."
    },
    {
      "kind": "paragraph",
      "text": "The industry has shifted from per-model drivers toward driverless IPP Everywhere / AirPrint and cloud-hosted queues (Universal Print), but all of these still expose the same RFC 8011 lifecycle — pending → processing → completed/canceled/aborted, with pending-held and processing-stopped as the hold and error waypoints — so the operator concepts (accept/reject, enable/disable, hold/release, prioritize) carry over unchanged."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common misconceptions"
    },
    {
      "kind": "list",
      "items": [
        "\"Pausing a printer and rejecting jobs are the same.\" They are two independent controls. cupsdisable (stop output) still lets new jobs queue; cupsreject (refuse new jobs) still lets queued jobs drain. IPP models these as separate attributes (printer-state vs. printer-is-accepting-jobs).",
        "\"Deleting a queued job frees its data immediately / a completed job is gone.\" CUPS removes the data file after a successful print but retains control files (default: cleaned after the 500th job). Windows can deliberately retain finished jobs (JOB_STATUS_RETAINED, \"Keep Printed Documents\").",
        "\"JOB_STATUS_COMPLETE / completed means it physically printed.\" Microsoft explicitly notes JOB_STATUS_COMPLETE means the job was sent to the printer but may not be printed yet. IPP's terminal completed is stronger (media stacked), but a job can complete with errors.",
        "\"Higher priority number means lower priority,\" or a single universal range. In IPP/CUPS higher = higher priority, range 1–100, default 50. Windows uses 1–99. The ranges differ — do not assume one number scheme.",
        "\"The queue lives on the printer.\" The queue is a host/spooler-side construct (cupsd, Spoolsv.exe, or a cloud service). The device merely images what the backend sends; IPP even distinguishes a Printer object from the underlying output device.",
        "\"Hold-until times are local.\" CUPS lp -H HH:MM holds until the specified UTC time, not local time."
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
          "text": "RFC 1179 documents the BSD Line Printer Daemon Protocol (informational)."
        },
        {
          "period": "1997",
          "text": "Michael R. Sweet begins developing CUPS at Easy Software Products."
        },
        {
          "period": "1999-05-14",
          "text": "First CUPS beta released."
        },
        {
          "period": "1999–2000",
          "text": "IETF/PWG standardize IPP/1.1 (RFC 2911, later obsoleted)."
        },
        {
          "period": "2000",
          "text": "Windows 2000 establishes the modern Windows spooler component architecture (spoolsv/spoolss/providers/processors/monitors)."
        },
        {
          "period": "2002",
          "text": "Apple licenses CUPS for macOS."
        },
        {
          "period": "2007-02",
          "text": "Apple purchases CUPS and hires Michael Sweet."
        },
        {
          "period": "2007",
          "text": "Windows Vista adds client-side rendering and the JOB_STATUS_RETAINED state."
        },
        {
          "period": "2009-era",
          "text": "Windows 7 adds Printer Driver Isolation."
        },
        {
          "period": "2017-01",
          "text": "RFC 8011 (IPP/1.1 Model and Semantics) published, obsoleting RFC 2911/3381/3382."
        },
        {
          "period": "2019-12",
          "text": "Michael Sweet leaves Apple."
        },
        {
          "period": "2020-09",
          "text": "OpenPrinting forks OpenPrinting CUPS; Apple CUPS continues to ship in macOS/iOS."
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
      "slug": "print-queue"
    },
    {
      "section": "guides",
      "slug": "print-job-lifecycle"
    },
    {
      "section": "guides",
      "slug": "spooling-architecture"
    },
    {
      "section": "guides",
      "slug": "what-is-a-print-server"
    },
    {
      "section": "glossary",
      "slug": "print-spooler"
    },
    {
      "section": "history",
      "slug": "spoolers-and-print-queues"
    }
  ],
  "faqs": [
    {
      "q": "What is a print queue?",
      "a": "A print queue is the operating-system data structure and control surface that holds submitted print jobs, orders them, and feeds them to an output device as it becomes ready. It decouples submission from imaging: an application hands off a job and returns immediately, while a background spooler retains each job on disk, tracks its state, and dispatches it when the printer is available."
    },
    {
      "q": "What states does a print job pass through?",
      "a": "Under the RFC 8011 IPP model, a job moves through pending, processing, and one of the terminal states completed, canceled, or aborted. Two intermediate waypoints matter: pending-held (when a job is held) and processing-stopped (when processing cannot continue, for example because the device is stopped)."
    },
    {
      "q": "What is the difference between disabling a printer and rejecting jobs?",
      "a": "They are two independent controls. Disabling output (cupsdisable) stops jobs from being sent to the device while still accepting new jobs into the queue, so jobs accumulate. Rejecting (cupsreject) refuses new submissions but lets already-queued jobs continue to drain. IPP models these as separate attributes: printer-state versus printer-is-accepting-jobs."
    },
    {
      "q": "Does a job status of completed mean the document physically printed?",
      "a": "Not necessarily. Microsoft documents that JOB_STATUS_COMPLETE means the job was sent to the printer but may not be printed yet. IPP's terminal completed state is stronger (media has been stacked in the output), though a job can also complete with errors."
    },
    {
      "q": "How does print job priority work, and is it the same everywhere?",
      "a": "In IPP and CUPS, priority is an integer from 1 to 100 where a higher number means higher priority, with a default of 50; a printer prints all jobs of priority n before those of priority n minus 1. Windows uses a different range of 1 to 99. The ranges differ, so you should not assume a single universal scheme."
    },
    {
      "q": "Where does the print queue actually live?",
      "a": "The queue is a host- or spooler-side construct, not something stored on the printer. It is owned by cupsd on Linux and macOS, by the Print Spooler service (Spoolsv.exe) on Windows, or by a cloud service such as Microsoft Universal Print. The device merely images the data the backend sends it; IPP even distinguishes the logical Printer object from the underlying output device."
    }
  ],
  "sources": [
    {
      "title": "RFC 8011 — Internet Printing Protocol/1.1: Model and Semantics",
      "url": "https://www.rfc-editor.org/rfc/rfc8011.txt",
      "publisher": "IETF"
    },
    {
      "title": "RFC 1179 — Line Printer Daemon Protocol",
      "url": "https://www.rfc-editor.org/rfc/rfc1179.txt",
      "publisher": "IETF"
    },
    {
      "title": "CUPS Design Description",
      "url": "https://openprinting.github.io/cups/doc/spec-design.html",
      "publisher": "OpenPrinting"
    },
    {
      "title": "OpenPrinting CUPS — A Brief History of CUPS",
      "url": "https://openprinting.github.io/cups/",
      "publisher": "OpenPrinting"
    },
    {
      "title": "cupsenable/cupsdisable(8) man page",
      "url": "https://openprinting.github.io/cups/doc/man-cupsenable.html",
      "publisher": "OpenPrinting"
    },
    {
      "title": "cupsaccept/cupsreject(8) man page",
      "url": "https://openprinting.github.io/cups/doc/man-cupsaccept.html",
      "publisher": "OpenPrinting"
    },
    {
      "title": "lp(1) man page",
      "url": "https://openprinting.github.io/cups/doc/man-lp.html",
      "publisher": "OpenPrinting"
    },
    {
      "title": "Introduction to spooler components",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/introduction-to-spooler-components",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Print Spooler Architecture",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/print-spooler-architecture",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Introduction to print processors",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/introduction-to-print-processors",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Language monitors",
      "url": "https://learn.microsoft.com/windows-hardware/drivers/print/language-monitors",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "JOB_INFO_1 structure",
      "url": "https://learn.microsoft.com/windows/win32/printdocs/job-info-1",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "PrintJobStatus enumeration",
      "url": "https://learn.microsoft.com/dotnet/api/system.printing.printjobstatus",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Universal Print — View print job status",
      "url": "https://learn.microsoft.com/universal-print/fundamentals/universal-print-job-status",
      "publisher": "Microsoft Learn"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "print queue lifecycle",
    "print queue",
    "print spooler",
    "cups",
    "cupsd",
    "rfc 8011",
    "ipp",
    "internet printing protocol",
    "job state",
    "printer state",
    "pending-held",
    "processing-stopped"
  ],
  "cluster": "print-pipeline"
};

export default entry;
