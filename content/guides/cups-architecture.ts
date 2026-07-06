import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "cups-architecture",
  "title": "CUPS Architecture",
  "description": "How CUPS is built: the cupsd scheduler, IPP object model, MIME filter chains, backends, and the modern driverless shift to CUPS 3.0.",
  "summary": "CUPS (originally the \"Common UNIX Printing System,\" shortened to \"CUPS\" from version 1.4) is the standards-based printing system used across Linux and Unix-like operating systems and underlying macOS printing. Architecturally it centers on a single scheduling daemon, cupsd, which is simultaneously an HTTP/1.1 and IPP/2.1 server: every client action (submitting, querying, administering) is an Internet Printing Protocol operation carried over HTTP. Around the scheduler sit four families of short-lived helper processes — CGI programs, filters, backends, and notifiers — coordinated through a shared library, libcups. This page explains how those pieces fit together and how a print job physically moves through them, from IPP submission and spooling, through data-driven MIME filter chains, to backend transmission with bidirectional device channels. It also covers the system's decisive modern shift from PPD-based drivers to fully driverless IPP printing in the CUPS 3.0 \"New Architecture.\"",
  "difficulty": "advanced",
  "estimatedTime": "11 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Michael Sweet, through his company Easy Software Products, began developing CUPS in 1997, with the first public betas appearing in 1999. The original design used the Berkeley Line Printer Daemon (LPD) protocol, but LPD's limitations led Sweet to adopt the then-emerging Internet Printing Protocol (IPP) as the foundation instead — the decision that shaped the entire architecture. CUPS was widely adopted as the default printing system across Linux distributions."
    },
    {
      "kind": "paragraph",
      "text": "Apple licensed CUPS as the printing system for Mac OS X 10.2 in March 2002, then in February 2007 hired Sweet and purchased the CUPS source code. During the Apple years, filters and drivers not needed by macOS were removed from the core and split into the separate cups-filters project maintained by OpenPrinting; since CUPS 1.6.0 these are required for driver-based and driverless printing on Linux. CUPS 1.6 (2012) also introduced OpenPrinting's PDF-centric workflow, making PDF (rather than PostScript) the neutral intermediate print format."
    },
    {
      "kind": "paragraph",
      "text": "Sweet announced he had left Apple on 20 December 2019, and in 2020 OpenPrinting forked CUPS with Sweet continuing development; Apple kept a separate repository for the macOS/iOS/iPadOS builds, whose last release was 2.3.6 on 25 May 2022. The OpenPrinting fork is the actively developed line, with the 2.4.x series as the current stable release. In parallel, OpenPrinting is building CUPS 3.0 — the \"New Architecture\" — an all-IPP, 100% driverless system built on a new, incompatible libcups v3."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "The scheduler, cupsd, is described in the CUPS design documentation as \"a HTTP/1.1 and IPP/2.1 server application that manages HTTP and IPP requests, printers, classes, jobs, subscriptions, and notifications.\" It answers browser HTTP requests and IPP operation messages (POSTed with the application/ipp content type) on the IPP port, 631. Crucially, the scheduler itself does none of the heavy lifting: it forks external processes for printing, notification, device/driver enumeration, and remote-printer monitoring, normally running them under an unprivileged lp account."
    },
    {
      "kind": "paragraph",
      "text": "Server settings live in cupsd.conf; classes in classes.conf; printers in printers.conf; subscriptions in subscriptions.conf; and the file-type and conversion database in mime.types and mime.convs. In the legacy/driver path, each printer has an associated PostScript Printer Description (PPD) file."
    },
    {
      "kind": "paragraph",
      "text": "Job files live in the spool directory, typically /var/spool/cups, in two kinds: control files (prefix c, e.g. c00001) which are IPP messages derived from the original request, and data files (prefix d, e.g. d00001-001) which are the submitted documents. Data files are deleted immediately after successful printing; control files are cleaned out by default after the 500th job. Logs (access_log, error_log, page_log) are kept in /var/log/cups and auto-rotated at a configured size, 1 MB by default."
    },
    {
      "kind": "paragraph",
      "text": "The subsystem's helper programs fall into four families, all sharing a common command-line interface:"
    },
    {
      "kind": "list",
      "items": [
        "CGI programs provide the web UI at fixed paths: admin.cgi (/admin), classes.cgi (/classes), help.cgi (/help), jobs.cgi (/jobs), and printers.cgi (/printers).",
        "Filters convert job data toward a printable format; the scheduler runs as many as needed in a chain. Printer drivers and port monitors are implemented as filters and share the identical interface. Port monitors handle device/channel-specific data formatting, such as the bcp and tbcp PostScript binary-communication protocols.",
        "Backends are the last stage: they transmit the final data to the device and also enumerate available devices for discovery. CUPS includes backends for AppSocket/JetDirect, IPP, LPD, and USB, plus DNS-SD and SNMP for discovery.",
        "Notifiers deliver asynchronous event notifications; CUPS ships mailto (SMTP email) and rss."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Berkeley (lpr, lpq, lprm, lpc) and System V (lp, lpstat, cancel, lpadmin, lpmove) command sets are provided as front-ends that ultimately issue IPP. Incoming LPD (RFC 1179) requests are accepted on TCP port 515 and handed to cups-lpd, which translates them into IPP operations. The shared library, libcups, carries all core HTTP/IPP communication plus helpers for queuing jobs, retrieving printer info, PPD manipulation, and reading/writing raster streams; the scheduler, all commands, all filters, and all backends link against it."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "The filter/backend execution model is the mechanical heart of CUPS. Every filter and backend is invoked with a fixed positional argument vector: argv[1] = job ID, argv[2] = user, argv[3] = job title, argv[4] = number of copies, argv[5] = job options, and argv[6] = the file to print (supplied to the first program in the chain only). The first filter reads the print file and writes to standard output; each subsequent filter reads standard input and writes standard output; the backend is the final link and writes to the device."
    },
    {
      "kind": "paragraph",
      "text": "Filters run as the unprivileged lp user. Backends run unprivileged unless file permissions disallow user/group execution, in which case they run as root — so USB/parallel backends needing device access can be mode 0500, root-owned. For security, CUPS refuses to run filters or backends that are not root-owned or that are group/world-writable; recommended permissions are 0555 for filters."
    },
    {
      "kind": "paragraph",
      "text": "Filters and backends signal status to the scheduler by writing prefixed lines to standard error. The scheduler parses prefixes including INFO:, WARNING:, ERROR:, DEBUG:/DEBUG2:, NOTICE:, ALERT:, CRIT:, and EMERG: (mapped to printer-state-message and log levels); PAGE: (writes page-accounting entries to page_log); STATE: +keyword / -keyword (set/clear printer-state-reasons such as media-empty, toner-low, cover-open); ATTR: (sets attributes such as the marker-* supply levels); and PPD: (updates PPD keywords). Unprefixed lines are treated as DEBUG:."
    },
    {
      "kind": "paragraph",
      "text": "Beyond the forward data stream, CUPS defines two extra channels between filters and the backend. The back-channel carries device-to-filter status data on file descriptor 3 (CUPS_BC_FD). The side-channel carries out-of-band control on file descriptor 4 (CUPS_SC_FD), with commands including CUPS_SC_CMD_GET_DEVICE_ID (fetch the IEEE 1284 device ID), CUPS_SC_CMD_DRAIN_OUTPUT (flush pending data before a query), and SNMP OID queries the backend performs on the filter's behalf."
    },
    {
      "kind": "paragraph",
      "text": "Filters exit 0 on success or 1 on error. Backends return richer cups_backend_t codes that tell the scheduler what to do next: CUPS_BACKEND_OK (0), CUPS_BACKEND_FAILED (use the queue's error policy), CUPS_BACKEND_AUTH_REQUIRED, CUPS_BACKEND_HOLD, CUPS_BACKEND_STOP (stop the queue), CUPS_BACKEND_CANCEL, CUPS_BACKEND_RETRY (retry later), and CUPS_BACKEND_RETRY_CURRENT (retry immediately). Cancellation is delivered via SIGTERM. The scheduler passes context through environment variables including CONTENT_TYPE (input MIME type), FINAL_CONTENT_TYPE (the printer's target type), PPD, PRINTER, DEVICE_URI, CHARSET, RIP_CACHE, CUPS_DATADIR, CUPS_SERVERROOT, and TMPDIR."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Data flow"
    },
    {
      "kind": "paragraph",
      "text": "A print job moves through the subsystem in a predictable sequence:"
    },
    {
      "kind": "list",
      "items": [
        "Submission. A client (an lp/lpr command, a desktop app, or a remote IPP client) opens an HTTP connection to cupsd on port 631 and issues an IPP Print-Job or Create-Job (plus Send-Document) operation. cups-lpd translates inbound LPD requests into the same IPP operations.",
        "Spooling. cupsd writes the job into /var/spool/cups as a control file (c…, the IPP job attributes) and one or more data files (d…, the raw document bytes), logging it in access_log.",
        "Type recognition. The scheduler identifies the document's MIME type using the pattern rules in mime.types (recognizing PDF, PostScript, JPEG, plain text, and so on).",
        "Chain selection. Given the source MIME type and the printer's destination type (FINAL_CONTENT_TYPE), cupsd searches mime.convs (plus PPD cupsFilter/cupsFilter2 entries) to assemble the filter chain as a data-driven conversion graph.",
        "Filtering. cupsd forks the chain as lp. The first filter reads the data file and each stage transforms the stream — for example pdftopdf for page management and copies, then a rasterizing filter to the printer's target format. pstops is specifically responsible for generating copies of PostScript. Filters emit status on standard error as they run.",
        "Transmission. The backend — selected from the printer's DEVICE_URI scheme (usb:, socket:, ipp:/ipps:, lpd:, and so on) — sends the finished data to the device, using the back- and side-channels for bidirectional status and control.",
        "Completion. The backend's exit code tells cupsd whether to mark the job complete, retry, hold, or stop the queue. Page counts go to page_log; data files are deleted immediately on success while the control file is retained until routine cleanup; and any subscribed notifiers fire."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Operating system integration"
    },
    {
      "kind": "paragraph",
      "text": "CUPS is the de facto printing layer on Linux and the historical printing layer on macOS/iOS/iPadOS, where Apple ships its own fork while OpenPrinting CUPS serves the rest of the Unix-like world. On Linux distributions it integrates with the platform's init/service system to run cupsd, and typically defers log rotation to logrotate by setting the internal rotation limit to 0."
    },
    {
      "kind": "paragraph",
      "text": "Legacy LPD reception is wired through the platform super-server — inetd, xinetd, or macOS launchd — which listens on TCP port 515 and dispatches to cups-lpd. Discovery relies on the platform's DNS-SD/mDNS stack (Avahi on Linux, Bonjour on macOS) via the DNS-SD backend. On macOS, additional sandboxing constrains even root backends. Across platforms, the unprivileged lp account together with root-owned, non-writable filter and backend directories form the OS-level trust boundary CUPS depends on."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to standards"
    },
    {
      "kind": "paragraph",
      "text": "IPP is not a feature of CUPS — it is the substrate. cupsd implements IPP/2.1 and a large body of PWG and IETF specifications, including PWG 5100.11 (JPS2), PWG 5100.13 (JPS3), PWG 5100.14 (IPP Everywhere), PWG 5100.15 (IPP FaxOut), and PWG 5100.16 (Transaction-Based Printing), plus IETF RFC 3995/3996/3998 (event notifications, ippget delivery, and administrative operations) and RFC 7472 (IPP over HTTPS, the ipps URI scheme)."
    },
    {
      "kind": "paragraph",
      "text": "CUPS supports the http, https, ipp, and ipps URI schemes with canonical resource paths (/printers/name, /classes/name, /jobs/id, /admin). It adds 17 vendor-extension IPP operations for managing multiple printers and classes on a single host. Other standards in play include RFC 1179 (LPD, via cups-lpd), RFC 8010/8011 (IPP encoding and model — the base IPP defines), and Adobe PPD 4.3 (the base specification CUPS PPDs extend). MIME media types are the internal currency for document formats."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to technologies"
    },
    {
      "kind": "paragraph",
      "text": "The MIME conversion engine is the key enabling technology: mime.types (recognition) plus mime.convs (conversions) turn format handling into a data-driven graph rather than hard-coded per-printer logic. In the modern PDF-centric workflow, document rendering leans on a PDF interpreter such as Ghostscript, Poppler, or MuPDF as the raster image processor."
    },
    {
      "kind": "paragraph",
      "text": "CUPS defines its own MIME types for internal stages, notably application/vnd.cups-raster, application/vnd.cups-postscript, and application/vnd.cups-pdf. Transport is HTTP/1.1, with TLS for ipps. Device connectivity spans USB, AppSocket/JetDirect (raw TCP port 9100), LPD, and IPP; discovery uses DNS-SD/mDNS and SNMP; and the web UI is plain CGI."
    },
    {
      "kind": "paragraph",
      "text": "For the driverless direction, the cups-filters project emits standard output formats — PWG Raster, Apple Raster, PCLm, and PDF. OpenPrinting also maintains PAPPL, a framework built on libcups for building Printer Applications: self-contained services that present a standard IPP interface and replace PPD-based drivers."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "paragraph",
      "text": "CUPS is deliberately vendor-neutral. Manufacturer-specific behavior historically entered through PPD files and cupsFilter/cupsFilter2 driver-filter declarations, so a vendor could supply a PPD plus a raster driver filter without patching the core. Driver filters shipped with CUPS and cups-filters target broad device languages such as HP-PCL, Epson ESC/P, and label-printer formats rather than specific models."
    },
    {
      "kind": "paragraph",
      "text": "Apple is a special case: it both employed the lead developer and maintains its own CUPS fork for its operating systems, and its AirPrint is an IPP Everywhere-compatible profile that CUPS speaks natively. The modern direction moves vendor specifics out of CUPS entirely — IPP Everywhere and Printer Applications let a printer, or a small per-vendor application, present a standard IPP interface, so CUPS needs no manufacturer-specific driver at all."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "CUPS remains the standard printing system for Linux and Unix-like systems and underlies macOS and iOS printing. Its trajectory is a decisive shift from drivers to driverless. Since CUPS 1.6 the workflow has been PDF-centric and the classic filters have lived in the external cups-filters project. The New Architecture of CUPS 3.0 makes this shift total: an all-IPP system with no PPD files, no classic drivers, and no external filter chain, built on the source- and binary-incompatible libcups v3, with any remaining device-specific logic isolated inside PAPPL-based Printer Applications rather than the spooler. In practice, most current printers are set up as IPP Everywhere or AirPrint queues that need no driver."
    },
    {
      "kind": "paragraph",
      "text": "CUPS is also security-relevant. In September 2024, a chain of remotely exploitable vulnerabilities in the printing stack (CVE-2024-47076, 47175, 47176, and 47177) was disclosed, centered on the cups-browsed daemon and associated libraries rather than cupsd itself. The disclosure underscored how much of the Unix printing base still runs through this software."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common misconceptions"
    },
    {
      "kind": "list",
      "items": [
        "\"CUPS still means Common UNIX Printing System.\" The expansion was dropped at version 1.4 over UNIX-trademark concerns; the name is now just \"CUPS.\"",
        "\"IPP is just one of CUPS's network protocols.\" IPP is the core object model and internal request format; the LPD, lpr, and lp interfaces are thin front-ends that convert to IPP.",
        "\"CUPS needs a PPD or vendor driver for every printer.\" In the modern driverless model (IPP Everywhere/AirPrint) no PPD or driver is required, and CUPS 3.0 removes PPD support outright.",
        "\"PostScript is CUPS's internal print format.\" Since CUPS 1.6 the neutral intermediate is PDF, not PostScript.",
        "\"cupsd renders print jobs.\" The scheduler only dispatches; all rendering happens in separate filter processes, and transmission happens in a backend process.",
        "\"Filters and backends are fundamentally different programs.\" They share one command-line interface; a backend is essentially the last filter in the chain, distinguished by writing to the device and returning cups_backend_t codes.",
        "\"The core CUPS package contains all the filters.\" Many filters and drivers were moved to the separate cups-filters project during the Apple era and are what most Linux systems actually use.",
        "\"OpenPrinting CUPS and Apple's CUPS are the same codebase.\" They diverged after 2019–2020 into two separately maintained repositories."
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
          "period": "1997",
          "text": "Michael Sweet (Easy Software Products) begins developing CUPS."
        },
        {
          "period": "1999",
          "text": "First public CUPS betas; IPP chosen over LPD as the foundation."
        },
        {
          "period": "2002-03",
          "text": "Apple licenses CUPS as the printing system for Mac OS X 10.2."
        },
        {
          "period": "2007-02",
          "text": "Apple hires Michael Sweet and purchases the CUPS source code."
        },
        {
          "period": "~1.4 era",
          "text": "\"Common UNIX Printing System\" name shortened to \"CUPS\" over UNIX-trademark concerns."
        },
        {
          "period": "2012 (CUPS 1.6.0)",
          "text": "PDF-centric workflow introduced by OpenPrinting; cups-filters becomes required for driver and driverless printing on Linux."
        },
        {
          "period": "2017",
          "text": "CUPS relicensed to the Apache License 2.0 (with a GPL2-linking exception)."
        },
        {
          "period": "2019-12-20",
          "text": "Michael Sweet announces he has left Apple."
        },
        {
          "period": "2020",
          "text": "OpenPrinting forks CUPS (Sweet continuing); Apple keeps a separate macOS/iOS repository."
        },
        {
          "period": "2022-05-25",
          "text": "Apple's last CUPS release, 2.3.6."
        },
        {
          "period": "2024-09",
          "text": "A remote-code-execution vulnerability chain in the CUPS printing stack (centered on cups-browsed) is disclosed."
        },
        {
          "period": "Ongoing",
          "text": "CUPS 3.0 \"New Architecture\" (all-IPP, driverless, no PPDs, libcups v3) in development; OpenPrinting CUPS 2.4.x is the current stable line."
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
      "slug": "cups"
    },
    {
      "section": "tools",
      "slug": "ipp"
    },
    {
      "section": "guides",
      "slug": "linux-printing"
    },
    {
      "section": "guides",
      "slug": "openprinting"
    },
    {
      "section": "guides",
      "slug": "printer-drivers"
    },
    {
      "section": "tools",
      "slug": "lpd-lpr"
    }
  ],
  "faqs": [
    {
      "q": "What is CUPS and what does it stand for?",
      "a": "CUPS is the standards-based printing system used across Linux and Unix-like operating systems and underlying macOS printing. The name originally stood for \"Common UNIX Printing System,\" but the expansion was dropped at version 1.4 over UNIX-trademark concerns, so the name is now simply \"CUPS.\""
    },
    {
      "q": "What is cupsd and what does it do?",
      "a": "cupsd is the central scheduling daemon and the core of the architecture. The CUPS documentation describes it as an HTTP/1.1 and IPP/2.1 server that manages HTTP and IPP requests, printers, classes, jobs, subscriptions, and notifications. It does none of the heavy lifting itself — it dispatches work to short-lived external filter, backend, and notifier processes running under an unprivileged account."
    },
    {
      "q": "What is the difference between a CUPS filter and a backend?",
      "a": "Both share the same command-line interface, so a backend is essentially the last filter in the chain. Filters convert job data toward a printable format and can be chained; printer drivers and port monitors are implemented as filters. A backend is the final stage that transmits the finished data to the device and also enumerates devices for discovery. Backends are distinguished by writing to the device and returning richer cups_backend_t exit codes."
    },
    {
      "q": "Does CUPS still need a PPD file or driver for every printer?",
      "a": "No. In the modern driverless model based on IPP Everywhere and AirPrint, no PPD or vendor driver is required — the printer presents a standard IPP interface. Manufacturer specifics historically entered through PPD files and cupsFilter declarations, but CUPS 3.0's New Architecture removes PPD support entirely, isolating any device-specific logic inside PAPPL-based Printer Applications."
    },
    {
      "q": "What is CUPS 3.0 and how does it differ architecturally?",
      "a": "CUPS 3.0, the \"New Architecture\" under development by OpenPrinting, is an all-IPP, fully driverless system with no PPD files, no classic drivers, and no external filter chain. It is built on a new libcups v3 that breaks source and binary compatibility with the 1.x and 2.x releases. The current stable line remains the OpenPrinting CUPS 2.4.x series."
    }
  ],
  "sources": [
    {
      "title": "CUPS Design Description",
      "url": "https://openprinting.github.io/cups/doc/spec-design.html",
      "publisher": "OpenPrinting / CUPS"
    },
    {
      "title": "Filter and Backend Programming",
      "url": "https://openprinting.github.io/cups/doc/api-filter.html",
      "publisher": "OpenPrinting / CUPS"
    },
    {
      "title": "CUPS Implementation of IPP",
      "url": "https://openprinting.github.io/cups/doc/spec-ipp.html",
      "publisher": "OpenPrinting / CUPS"
    },
    {
      "title": "CUPS PPD Extensions",
      "url": "https://openprinting.github.io/cups/doc/spec-ppd.html",
      "publisher": "OpenPrinting / CUPS"
    },
    {
      "title": "The CUPS Library v3 (libcups) README",
      "url": "https://github.com/OpenPrinting/libcups/blob/master/README.md",
      "publisher": "OpenPrinting"
    },
    {
      "title": "OpenPrinting cups-filters",
      "url": "https://github.com/OpenPrinting/cups-filters",
      "publisher": "OpenPrinting"
    },
    {
      "title": "CUPS License Change Coming (Apache License 2.0)",
      "url": "https://www.cups.org/blog/2017-11-07-cups-license-change.html",
      "publisher": "CUPS / Apple"
    },
    {
      "title": "CUPS (encyclopedia entry; dates and lineage)",
      "url": "https://en.wikipedia.org/wiki/CUPS",
      "publisher": "Wikimedia Foundation"
    },
    {
      "title": "PWG 5100.14: IPP Everywhere",
      "url": "https://www.pwg.org/dsc/5100.14.html",
      "publisher": "Printer Working Group"
    },
    {
      "title": "RFC 8011: Internet Printing Protocol/1.1: Model and Semantics",
      "url": "https://www.rfc-editor.org/rfc/rfc8011",
      "publisher": "IETF"
    },
    {
      "title": "RFC 1179: Line Printer Daemon Protocol",
      "url": "https://www.rfc-editor.org/rfc/rfc1179",
      "publisher": "IETF"
    },
    {
      "title": "Emerging CUPS vulnerability chain (CVE-2024-47176 et al.)",
      "url": "https://securitylabs.datadoghq.com/articles/emerging-vulnerability-cups/",
      "publisher": "Datadog Security Labs"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "cups architecture",
    "cupsd scheduler",
    "common unix printing system",
    "ipp printing",
    "mime filter chain",
    "cups backend",
    "cups-filters",
    "ipp everywhere",
    "driverless printing",
    "cups 3.0",
    "libcups",
    "ppd files"
  ],
  "cluster": "unix-printing"
};

export default entry;
