import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "linux-printing",
  "title": "Linux Printing",
  "description": "How Linux printing works: the CUPS scheduler, filter pipeline, backends, drivers, and the shift to driverless IPP Everywhere printing.",
  "summary": "Linux printing is a layered subsystem built around CUPS, the standards-based print scheduler, spooler, and administration system used on nearly all Linux distributions. CUPS accepts jobs through System V and Berkeley commands and the Internet Printing Protocol (IPP), then runs each document through a chain of MIME-driven filters before a device backend delivers it to the printer. Historically this depended on model-specific drivers supplied by cups-filters, Gutenprint, HPLIP, and Foomatic, using PostScript Printer Description (PPD) files and Ghostscript. Over the past decade the ecosystem has moved to driverless printing via the Printer Working Group's IPP Everywhere standard, in which printers advertise their own capabilities and accept standard raster or PDF formats. The OpenPrinting project, hosted by the Linux Foundation, now maintains CUPS and is steering it toward an all-IPP, PPD-free architecture in CUPS 3.x, with legacy drivers repackaged as self-contained Printer Applications.",
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
      "text": "Linux printing is not a single program but a layered subsystem built around a print scheduler, a spooling and filtering pipeline, device backends, and a discovery and driver ecosystem. On essentially all mainstream Linux distributions the standard system is CUPS (originally the \"Common UNIX Printing System\"), a standards-based, open-source printing system that provides the spooler, job scheduler, administration interfaces, and the network protocol used to talk to printers."
    },
    {
      "kind": "paragraph",
      "text": "CUPS exposes both the System V command set (lp, lpadmin, lpstat, cancel) and the Berkeley command set (lpr, lpq, lprm, lpc), a C library (libcups), and a web administration interface at http://127.0.0.1:631/."
    },
    {
      "kind": "paragraph",
      "text": "Historically, converting an application's output (PostScript, PDF, images, or text) into a specific printer's page-description language required printer drivers — most importantly the cups-filters collection, Gutenprint, HPLIP for HP devices, and the Foomatic database and filter framework — generally driven by PostScript Printer Description (PPD) files and Ghostscript. Over the past decade the ecosystem has shifted toward driverless printing via the Printer Working Group's IPP Everywhere standard, where the printer itself advertises its capabilities over the Internet Printing Protocol (IPP) and accepts standard raster or PDF formats, removing the need for model-specific drivers. The OpenPrinting project, hosted by the Linux Foundation, now maintains CUPS, cups-filters, and the newer \"Printer Application\" model, and is steering the subsystem toward an all-IPP, PPD-free design in CUPS 3.x."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "CUPS was created by Michael R. Sweet at Easy Software Products, with development starting in 1997 and the first public beta released on May 14, 1999. Around the same period Till Kamppeter began packaging CUPS for Mandrake Linux and created the Foomatic drivers, which helped drive CUPS adoption across Linux."
    },
    {
      "kind": "paragraph",
      "text": "Apple licensed CUPS for macOS in 2002, and in February 2007 Apple purchased the CUPS source code and hired Sweet to continue developing it as open source; from that point CUPS shipped as the printing system of macOS."
    },
    {
      "kind": "paragraph",
      "text": "In December 2019 Sweet left Apple to found Lakeside Robotics, and in September 2020 he joined the OpenPrinting developers to fork Apple's CUPS into OpenPrinting CUPS, which is now the actively developed version for Linux and other operating systems. \"Apple CUPS\" continues to ship with macOS, iOS, and iPadOS as a separate lineage. In parallel, the Foomatic and later cups-filters work — and eventually stewardship of CUPS itself — moved under the OpenPrinting workgroup of the Linux Foundation, which coordinates with the Printer Working Group (PWG) on IPP standards."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "CUPS is organized around a central scheduling daemon with a set of satellite helper programs. The principal components, as described in the official CUPS Design Description, are:"
    },
    {
      "kind": "list",
      "items": [
        "Scheduler (cupsd) — an HTTP/1.1 and IPP/2.1 server that manages printers, classes, jobs, subscriptions, and notifications. IPP operations are carried as HTTP POST requests with the application/ipp content type. It is a single-threaded server that spawns external processes for long-running work, normally running them under the unprivileged lp account.",
        "Configuration files — cupsd.conf (server settings), printers.conf (printers), classes.conf (printer classes), subscriptions.conf (notification subscriptions), and mime.types / mime.convs (recognized file types and filter conversion rules). PPD files are associated with each classic, driver-based queue.",
        "Spool and job files — typically stored in /var/spool/cups, with control files prefixed c (IPP job attributes) and data files prefixed d (the documents themselves).",
        "Log files — access_log, error_log, and page_log, normally in /var/log/cups.",
        "Filters — programs that convert a job from one MIME type toward the printable format, chained as needed.",
        "Port monitors — handle device- or channel-specific data formatting; CUPS ships bcp and tbcp for PostScript binary communication protocols.",
        "Backends — deliver data to the device and enumerate devices. CUPS ships backends for AppSocket/JetDirect (socket), IPP, LPD, and USB, plus DNS-SD and SNMP for discovery.",
        "Notifiers — asynchronous event delivery; CUPS ships mailto (SMTP) and rss.",
        "CGI web-interface programs — admin.cgi, classes.cgi, help.cgi, jobs.cgi, and printers.cgi.",
        "LPD compatibility — cups-lpd, invoked from an inetd, launchd, or xinetd super-daemon on TCP port 515, translating RFC 1179 LPD requests into IPP.",
        "libcups — the core library implementing HTTP/IPP, job submission, PPD manipulation, and CUPS raster I/O, used by the scheduler and all commands, filters, and backends."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The driver layer sits on top of this. cups-filters, maintained by OpenPrinting, supplies the PDF-centric filters and drivers that CUPS needs on non-Apple systems. Since CUPS 1.6.0, cups-filters is required to use printer drivers, and driverless printing, with CUPS under Linux. In the current cups-filters 2.x line the code is factored into libraries — libcupsfilters (filter functions) and libppd (PPD handling) — plus filter executables and cups-browsed, a daemon that discovers remote and DNS-SD printers and creates local queues. Gutenprint, HPLIP, and Foomatic plug in as additional drivers and filters."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "A user or application submits a document to a named queue. The scheduler recognizes the document's MIME type and, using the rules in mime.convs (and, for classic queues, the printer's PPD), computes a chain of filters that transforms the input into the format the target printer accepts. Each filter reads from standard input, or a file, and writes to standard output, honoring a common set of arguments — printer name, job ID, user, title, copies, and options. The final backend then transmits the data to the device over the appropriate transport."
    },
    {
      "kind": "paragraph",
      "text": "For classic, driver-based queues, the workflow on modern Linux is PDF-centric: application output is normalized to PDF, then converted (via Ghostscript, Poppler, or MuPDF) into either CUPS/PWG raster or the printer's native language, such as HP-PCL or ESC/P. Foomatic's foomatic-rip filter can translate PostScript or PDF directly into a printer's language using options drawn from the PPD, invoking Ghostscript in the background."
    },
    {
      "kind": "paragraph",
      "text": "For driverless queues, the modern default, no model-specific driver is used: CUPS queries the printer over IPP for its supported capabilities and media, then sends a standard format the printer is required to accept — PWG Raster, Apple Raster, JPEG, or PDF — chosen from the printer's advertised attributes."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Data flow"
    },
    {
      "kind": "paragraph",
      "text": "The path a document takes through the subsystem is roughly as follows:"
    },
    {
      "kind": "list",
      "items": [
        "Submission — An application (or lp / lpr) hands the document to cupsd as an IPP Print-Job or Create-Job request over HTTP; the scheduler writes a control file (c…) and one or more data files (d…) into the spool directory.",
        "Type detection — CUPS identifies the document's MIME type using mime.types.",
        "Filter-chain selection — Using mime.convs (and the queue's PPD, for classic queues), the scheduler determines the least-cost sequence of filters from the source type to the printer's required format.",
        "Filtering — Filters run in sequence; Ghostscript, Poppler, or MuPDF perform the heavy PDF and PostScript rasterization, and foomatic-rip handles many legacy printers.",
        "Port monitor — if configured, applies channel-specific encoding such as tbcp.",
        "Backend — the selected backend (ipp, socket, usb, lpd, and so on) sends the data to the printer and reports status back.",
        "Notification and accounting — the scheduler updates page_log, fires any notifiers, and cleans up data files after successful printing."
      ]
    },
    {
      "kind": "paragraph",
      "text": "In the driverless path, the filtering and port-monitor steps largely collapse: CUPS produces a standard raster or PDF stream matched to the printer's IPP-advertised capabilities and sends it via the ipp backend, with no vendor filter in the chain."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Operating system integration"
    },
    {
      "kind": "paragraph",
      "text": "CUPS runs as a system service (cupsd), typically started by systemd on modern distributions and often socket-activated. It integrates with the operating system in several ways:"
    },
    {
      "kind": "list",
      "items": [
        "Standard command-line tools — both the System V and Berkeley print commands are provided, so existing UNIX scripts and tools work unchanged.",
        "The lp service account — filters and backends run unprivileged; administration requires membership in an admin group, commonly lpadmin (or sys, system, root, or admin).",
        "mDNS / DNS-SD discovery — provided on Linux via Avahi, letting desktops find network printers automatically. Bonjour-style discovery and sharing support was introduced in the CUPS 1.6 era, and an mDNS discovery backend appeared in the CUPS 1.4 era.",
        "Scanning — handled by the separate SANE subsystem, not by CUPS; multifunction drivers such as HPLIP register scan backends with SANE while their print side integrates with CUPS.",
        "Log rotation — CUPS can rotate its own logs, but distributions frequently set the size limit to zero and delegate rotation to logrotate.",
        "Desktop environments — GNOME and KDE ship printer-configuration GUIs that drive CUPS through its IPP and administrative APIs."
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
        "Internet Printing Protocol (IPP) — the native protocol of CUPS, maintained by the PWG and carried over HTTP. Work on IPP began in 1996, with the first specifications published in 1999. The CUPS scheduler speaks IPP/2.1, and IPP has continued to evolve; the PWG's IPP/2.x Fourth Edition is published as PWG 5100.12-2024.",
        "IPP Everywhere — a PWG standard (current version 1.1) enabling discovery and printing without vendor software. Printers are required to support IPP/2.0, DNS-SD, and the PWG Raster and JPEG/JFIF formats (JPEG required for color printers), with PDF and IPP-USB recommended. The PWG operates a printer self-certification program. This is the technical foundation of driverless Linux printing.",
        "AirPrint — Apple's driverless printing profile, closely related to IPP Everywhere; CUPS interoperates with AirPrint printers.",
        "RFC 1179 (LPD) — supported for legacy interoperability via cups-lpd.",
        "PostScript and PDF — the historical (PostScript) and current (PDF) page-description interchange formats in the pipeline; PPD files, a PostScript-era Adobe format, describe classic printer capabilities.",
        "PWG Raster and CUPS Raster — standardized raster formats produced by filters for raster printers.",
        "DNS-SD / mDNS (Bonjour) and SNMP — discovery standards used by CUPS backends."
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
        "Ghostscript — the primary interpreter used to rasterize PostScript and PDF for non-PostScript printers; Poppler and MuPDF are supported alternatives for PDF rendering in cups-filters.",
        "cups-filters libraries — libcupsfilters (filter functions) and libppd (PPD parsing and generation) in the 2.x line; these retrofit filtering onto CUPS 2.x.",
        "cups-browsed — a daemon that discovers DNS-SD and remote printers and auto-creates local queues.",
        "PAPPL — a C framework and library for building Printer Applications, described by its author as \"the recommended replacement for printer drivers.\" PAPPL provides an embedded IPP Everywhere service and supports JPEG, PNG, PWG Raster, Apple Raster, and raw printing over USB and network (AppSocket/JetDirect). It underpins LPrint for label printers and is intended to host a future Gutenprint Printer Application.",
        "Avahi — the Linux mDNS/DNS-SD stack CUPS uses for discovery and sharing.",
        "SANE — the separate scanning framework that complements CUPS for multifunction devices."
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
        "HP leads HPLIP (\"HP Linux Imaging and Printing\"), a project written in Python and C/C++ that provides printing, scanning, and faxing for HP inkjet and laser devices, covering several thousand HP models. Many lower-end models rely on open drivers, while others use HP-provided plugins. HPLIP integrates with CUPS for printing and SANE for scanning.",
        "Gutenprint (formerly Gimp-Print) is a vendor-neutral collection of drivers covering many manufacturers, including Canon, Epson, Brother, and Apple, and numbering well over a thousand drivers. It is usable with CUPS and other spoolers.",
        "Foomatic aggregates a large cross-manufacturer database of printer and driver data and generates PPDs; it is spooler-independent and driven by Ghostscript."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The broader trend is that most modern printers no longer need vendor drivers on Linux at all — they are IPP Everywhere or AirPrint capable and work out of the box. Vendor drivers now matter mainly for older or specialized hardware."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Linux printing has moved from a driver-heavy, PostScript- and PPD-centric model to a standards-based, driverless one. Modern desktops discover IPP/DNS-SD printers automatically and print PWG Raster or PDF directly, so a typical current printer requires no downloaded driver. OpenPrinting frames this as the \"New Architecture\" for printing and scanning: legacy per-model drivers are repackaged as self-contained Printer Applications — built with PAPPL and distributable as Snaps or containers — that expose an IPP Everywhere interface to CUPS, rather than being installed as classic CUPS filters and PPDs."
    },
    {
      "kind": "paragraph",
      "text": "CUPS 3.x embodies this direction. According to OpenPrinting, CUPS 3.x has a vastly changed architecture that is all-IPP, supports only driverless IPP printers, and drops PPD files, classic CUPS drivers, and external filters. The cups-filters, libcupsfilters, libppd, and cups-browsed stack exists in large part to retrofit filtering and legacy-printer support onto CUPS 2.x during the transition; under CUPS 3.x the legacy filter path is intended to live inside Printer Applications instead. Apple CUPS remains a distinct 2.x-lineage system on macOS, iOS, and iPadOS."
    },
    {
      "kind": "paragraph",
      "text": "Security has also shaped the modern subsystem. A coordinated disclosure in 2024 (CVE-2024-47076, CVE-2024-47175, CVE-2024-47176, and CVE-2024-47177) described a chain involving cups-browsed binding to all interfaces on UDP port 631 and command injection through generated printer configuration, prompting mitigations and guidance to disable cups-browsed's legacy behavior where it is not needed."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common misconceptions"
    },
    {
      "kind": "list",
      "items": [
        "\"CUPS is Linux-only.\" CUPS is a UNIX and Unix-like printing system used on macOS, iOS, iPadOS, and other systems, not just Linux.",
        "\"Apple invented CUPS.\" CUPS predates Apple's involvement; it was created by Michael R. Sweet at Easy Software Products, with development starting in 1997, licensed by Apple in 2002, and purchased in 2007.",
        "\"CUPS and Apple CUPS are the same project today.\" Since the 2020 fork, OpenPrinting CUPS (Linux and others) and Apple CUPS (macOS and iOS) are separate lineages.",
        "\"You always need a driver to print on Linux.\" Most current printers work driverless via IPP Everywhere or AirPrint; drivers are increasingly a legacy fallback.",
        "\"CUPS itself contains the printer drivers.\" The core scheduler is driver-agnostic; drivers and filters come from cups-filters, Gutenprint, HPLIP, Foomatic, or, going forward, Printer Applications.",
        "\"PPDs are mandatory.\" PPDs describe classic driver queues; driverless queues use IPP attributes instead, and CUPS 3.x removes PPDs entirely.",
        "\"Foomatic is a driver.\" Foomatic is a database plus a configurable filter (foomatic-rip) that wraps other renderers, typically Ghostscript; it is not itself a low-level printer driver.",
        "\"CUPS handles scanning.\" Scanning is the domain of SANE; CUPS handles printing."
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
          "period": "1996",
          "text": "Work on the Internet Printing Protocol begins under the PWG and IETF."
        },
        {
          "period": "1997",
          "text": "Michael R. Sweet begins CUPS development at Easy Software Products."
        },
        {
          "period": "May 14, 1999",
          "text": "First public beta of CUPS."
        },
        {
          "period": "1999",
          "text": "First IPP specifications published."
        },
        {
          "period": "c. 1999–2000",
          "text": "Till Kamppeter packages CUPS for Mandrake Linux and creates the Foomatic drivers, driving Linux adoption."
        },
        {
          "period": "2002",
          "text": "Apple licenses CUPS for macOS."
        },
        {
          "period": "February 2007",
          "text": "Apple purchases CUPS and hires Sweet to continue it as open source."
        },
        {
          "period": "CUPS 1.4 era",
          "text": "An mDNS (Bonjour/DNS-SD) discovery backend is added."
        },
        {
          "period": "CUPS 1.6 era",
          "text": "Bonjour discovery and sharing via Avahi; from CUPS 1.6.0, cups-filters becomes required for drivers and driverless printing on Linux."
        },
        {
          "period": "December 2019",
          "text": "Sweet leaves Apple and founds Lakeside Robotics."
        },
        {
          "period": "September 2020",
          "text": "OpenPrinting forks Apple CUPS into OpenPrinting CUPS."
        },
        {
          "period": "2024",
          "text": "Coordinated disclosure of the cups-browsed/cups-filters vulnerability chain (CVE-2024-47076, 47175, 47176, 47177), followed by mitigations."
        },
        {
          "period": "November 2024",
          "text": "IPP/2.x Fourth Edition (PWG 5100.12-2024) published."
        },
        {
          "period": "CUPS 3.x (in development at OpenPrinting)",
          "text": "\"New Architecture\": all-IPP, driverless-only, with no PPDs, no classic drivers, and no external filters."
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
      "slug": "cups-architecture"
    },
    {
      "section": "guides",
      "slug": "openprinting"
    },
    {
      "section": "tools",
      "slug": "ipp"
    },
    {
      "section": "guides",
      "slug": "printer-drivers"
    },
    {
      "section": "tools",
      "slug": "cups"
    },
    {
      "section": "tools",
      "slug": "airprint"
    }
  ],
  "faqs": [
    {
      "q": "What is CUPS in Linux?",
      "a": "CUPS (originally the Common UNIX Printing System) is the standards-based printing system used on nearly all Linux distributions. It provides the print scheduler (cupsd), the spooler, the job and filter pipeline, administration interfaces, and the Internet Printing Protocol used to communicate with printers. It also exposes the System V and Berkeley print commands and a web interface at http://127.0.0.1:631/."
    },
    {
      "q": "Do you still need printer drivers on Linux?",
      "a": "Increasingly not. Most modern printers support IPP Everywhere or AirPrint, so CUPS queries the printer's advertised capabilities and sends a standard format such as PWG Raster or PDF with no model-specific driver. Vendor drivers from cups-filters, Gutenprint, HPLIP, or Foomatic are now mainly needed for older or specialized hardware."
    },
    {
      "q": "What is the difference between OpenPrinting CUPS and Apple CUPS?",
      "a": "CUPS was created by Michael R. Sweet, licensed by Apple in 2002, and purchased in 2007. After Sweet left Apple in 2019, the OpenPrinting project forked the code in September 2020 into OpenPrinting CUPS, now the actively developed version for Linux. Apple CUPS continues as a separate lineage shipping with macOS, iOS, and iPadOS."
    },
    {
      "q": "How does a document travel through the Linux print pipeline?",
      "a": "An application submits the document to cupsd over IPP; the scheduler detects its MIME type, selects a least-cost chain of filters using mime.convs (and the PPD for classic queues), runs those filters to produce the printer's required format, optionally applies a port monitor, and then hands the data to a backend such as ipp, socket, usb, or lpd for delivery. On driverless queues the filtering largely collapses to a standard raster or PDF stream sent via the ipp backend."
    },
    {
      "q": "What is IPP Everywhere?",
      "a": "IPP Everywhere is a Printer Working Group standard (current version 1.1) that enables discovery and printing without vendor software. Compliant printers must support IPP/2.0, DNS-SD, and PWG Raster and JPEG/JFIF formats, with PDF and IPP-USB recommended. It is the technical foundation of driverless printing on Linux and is closely related to Apple's AirPrint."
    }
  ],
  "sources": [
    {
      "title": "OpenPrinting CUPS — Home and Brief History of CUPS",
      "url": "https://openprinting.github.io/cups/",
      "publisher": "OpenPrinting"
    },
    {
      "title": "CUPS Design Description",
      "url": "https://openprinting.github.io/cups/doc/spec-design.html",
      "publisher": "OpenPrinting"
    },
    {
      "title": "OpenPrinting project home",
      "url": "https://openprinting.github.io/",
      "publisher": "OpenPrinting / Linux Foundation"
    },
    {
      "title": "cups-filters (README)",
      "url": "https://github.com/OpenPrinting/cups-filters",
      "publisher": "OpenPrinting"
    },
    {
      "title": "IPP Everywhere",
      "url": "https://www.pwg.org/ipp/everywhere.html",
      "publisher": "Printer Working Group"
    },
    {
      "title": "PAPPL — Printer Application Framework",
      "url": "https://github.com/michaelrsweet/pappl",
      "publisher": "Michael R. Sweet"
    },
    {
      "title": "cups-browsed security advisory GHSA-rj88-6mr5-rcw8 (CVE-2024-47176)",
      "url": "https://github.com/OpenPrinting/cups-browsed/security/advisories/GHSA-rj88-6mr5-rcw8",
      "publisher": "OpenPrinting"
    },
    {
      "title": "CVE-2024-47176",
      "url": "https://nvd.nist.gov/vuln/detail/cve-2024-47176",
      "publisher": "NIST National Vulnerability Database"
    },
    {
      "title": "Red Hat response: CUPS vulnerabilities (RHSB-2024-002)",
      "url": "https://access.redhat.com/security/vulnerabilities/RHSB-2024-002",
      "publisher": "Red Hat"
    },
    {
      "title": "PWG 5100.12-2024 — IPP/2.x Fourth Edition",
      "url": "https://ftp.pwg.org/pub/pwg/standards/std-ippbase23-20241108-5100.12.pdf",
      "publisher": "Printer Working Group"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "linux printing",
    "cups",
    "common unix printing system",
    "cups-filters",
    "ipp everywhere",
    "internet printing protocol",
    "driverless printing",
    "openprinting",
    "cupsd",
    "print filter pipeline",
    "ppd",
    "ghostscript"
  ],
  "cluster": "unix-printing"
};

export default entry;
