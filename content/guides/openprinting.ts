import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "openprinting",
  "title": "OpenPrinting",
  "description": "How OpenPrinting develops the Linux/POSIX print stack — CUPS, cups-filters, Foomatic, PAPPL Printer Applications, ipp-usb and driverless IPP.",
  "summary": "OpenPrinting is the Linux Foundation project that develops and maintains the core printing (and increasingly scanning) subsystem for Linux and other POSIX systems. It is the upstream steward of CUPS, cups-filters, the Foomatic driver database, PAPPL-based Printer Applications, ipp-usb and the Common Print Dialog Backends. This reference explains both the classic PPD-and-filter architecture still deployed today and the emerging all-IPP \"New Architecture,\" in which every print target is a driverless IPP printer or a daemon that emulates one, and traces the project's history, standards work and manufacturer relationships.",
  "difficulty": "intermediate",
  "estimatedTime": "13 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "OpenPrinting is the open-source project that develops and maintains the core printing subsystem used by Linux and other POSIX-style operating systems, and increasingly the scanning stack as well. It is hosted as a project of the Linux Foundation, and its remit is to make printing \"just work\" on free-software operating systems by developing the software stack, integrating printer drivers, and implementing open printing standards."
    },
    {
      "kind": "paragraph",
      "text": "OpenPrinting is the upstream steward of a specific set of software:"
    },
    {
      "kind": "list",
      "items": [
        "CUPS (Common UNIX Printing System) — the IPP-based print spooler and scheduler. Since September 2020, OpenPrinting is the official upstream home of CUPS.",
        "cups-filters and its successor libraries (libcupsfilters, libppd, cups-browsed) — the filters and backends that convert print data and discover network queues on non-Apple systems.",
        "Foomatic and the OpenPrinting printer/driver database — the knowledge base that generates PPD files for free-software drivers.",
        "PAPPL-based Printer Applications and pappl-retrofit — the newer driver architecture, in which a driver is packaged as a self-contained daemon that emulates a driverless IPP printer.",
        "ipp-usb — a daemon that exposes IPP-over-USB devices as driverless network devices on 127.0.0.1.",
        "CPDB (Common Print Dialog Backends) — a D-Bus layer that decouples application print dialogs from print technologies."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The project's strategic direction is the \"New Architecture\": an all-IPP, driverless model that eliminates PPD files and model-specific filter executables in favor of driverless IPP printing (IPP Everywhere, AirPrint, Mopria) plus Printer Applications for legacy and specialty hardware."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "OpenPrinting's roots are in CUPS, created by Michael Sweet at Easy Software Products. Till Kamppeter encountered CUPS in 2000, wrote one of the first Linux print dialogs (the X Printing Panel, XPP), and joined MandrakeSoft in Paris in August 2000, where he switched Mandrake Linux from LPD to CUPS. To obtain PPDs for non-PostScript printers he used linuxprinting.org, the site behind Foomatic (created by Grant Taylor), and took over its maintainership in 2001."
    },
    {
      "kind": "paragraph",
      "text": "OpenPrinting was founded in 2001 at the HP/IBM-hosted OSDN Printing Summit in San Jose, as part of the Free Standards Group (FSG). Kamppeter names the co-founders as Tom Hastings, Michael Sweet, Ira McDonald, Claudia Alimpich, Glen Petrie, Norm Jacobs and himself, working alongside the Printer Working Group (PWG). In 2006 the FSG took on hosting of linuxprinting.org/Foomatic and hired Kamppeter full-time; at the first OpenPrinting Summit that year the project decided to make PDF the standard print job format, replacing PostScript."
    },
    {
      "kind": "paragraph",
      "text": "In 2007 the FSG and the OSDL merged to form the Linux Foundation, of which OpenPrinting has been a part ever since. Also in 2007 the \"Grand Unified Ghostscript\" effort folded the CUPS/ESP Ghostscript features into upstream GPL Ghostscript, released as GPL Ghostscript 8.60 in August 2007. In February 2007 Apple acquired the CUPS source code and hired Michael Sweet; because Apple used its own proprietary filters, the free-software filters were handed to OpenPrinting. Apple removed them from CUPS in the 1.6.0 release (2012), and Kamppeter created cups-filters from the abandoned filters starting in late 2011."
    },
    {
      "kind": "paragraph",
      "text": "At the end of 2019 Michael Sweet left Apple and founded Lakeside Robotics, and Apple's CUPS development largely stopped. In September 2020 OpenPrinting forked CUPS to continue development. OpenPrinting CUPS is now the cross-platform upstream, while \"Apple CUPS\" is the variant shipped in macOS and iOS. The Printer Applications concept that underpins the New Architecture was introduced by Michael Sweet at the OpenPrinting Summit / PWG meeting in Sunnyvale in May 2018."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Architecture"
    },
    {
      "kind": "paragraph",
      "text": "OpenPrinting is best understood as a stack of cooperating components rather than a single program, and two architectures coexist today."
    },
    {
      "kind": "paragraph",
      "text": "Classic architecture (CUPS 2.x, the widely deployed stable line):"
    },
    {
      "kind": "list",
      "items": [
        "cupsd — the print scheduler daemon. It receives jobs over IPP (default TCP port 631) and a local domain socket, manages queues, spools and schedules jobs, and can share queues on the network.",
        "Print queues, created manually or automatically, each assigned a driver.",
        "A driver = a PPD file plus filter executables. The PPD (PostScript Printer Description) file statically describes user-settable options; filters convert the job into the printer's native language, often invoking Ghostscript or Poppler.",
        "cups-filters provides the non-Apple filters and backends, including the PDF-centric filter chain and cups-browsed for discovering and aggregating remote queues.",
        "Foomatic supplies PPDs and a universal wrapper (historically cups-o-matic, later foomatic-rip) that drives free-software drivers from database data."
      ]
    },
    {
      "kind": "paragraph",
      "text": "New Architecture (all-IPP, driverless):"
    },
    {
      "kind": "paragraph",
      "text": "Here CUPS deals only with driverless IPP printers. Every print target is either a real driverless IPP printer, a remote CUPS server (itself an IPP printer), or a Printer Application that emulates one. There are no PPD files and no model-specific filter executables; legacy and specialty hardware is handled by Printer Applications built on PAPPL (Michael Sweet's Printer Application framework), and pappl-retrofit wraps classic PPD/filter drivers inside a PAPPL daemon. Queues are created automatically as \"temporary queues\" when a discovered IPP printer is used."
    },
    {
      "kind": "paragraph",
      "text": "The CUPS project is being split into modular components, with OpenPrinting repositories for libcups (libcups3), cups-commands (lp, lpstat, cancel, lpinfo, lpadmin, and related tools), cups-local (a non-root local user daemon, no web UI) and cups-sharing (the network-sharing server with a web UI). libcups 3.0.0 was released on 2026-01-08."
    },
    {
      "kind": "paragraph",
      "text": "PAPPL provides, per its documentation, an IPP-printer-emulating daemon, a web configuration interface, DNS-SD advertisement, receipt of PWG/Apple Raster jobs and images fed to the driver, and TLS/certificate handling; its public API includes documented functions such as papplSystemCreate, papplSystemAddListeners, papplSystemAddMIMEFilter, papplSystemRun and papplSystemSetPrintDrivers. CPDB sits beside this stack: print dialogs (GTK, Qt, LibreOffice) talk over D-Bus to per-technology backend modules (cpdb-backend-cups, cpdb-backend-file, and historically cpdb-backend-gcp) via cpdb-libs, rather than talking to CUPS directly."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Driverless IPP printing (the target model), per OpenPrinting's documentation, proceeds as follows:"
    },
    {
      "kind": "paragraph",
      "text": "1. The printer advertises itself on the network via DNS-SD (also called mDNS, ZeroConf or Bonjour), including a summary of its capabilities and supported Page Description Languages (PDLs). 2. Clients discover the printer via DNS-SD. 3. The client polls full capabilities with an IPP get-printer-attributes request (paper sizes and types, margins, resolutions, trays, finishers, quality and all settable options). 4. CUPS, or cups-browsed, generates an attribute/PPD model and creates a temporary queue. 5. Application print dialogs expose the options to the user. 6. On print, the application's PDF is converted by cups-filters into a PDL the printer supports; user selections travel with the job as IPP attributes. 7. The printer prints, and job status, supply levels and errors are reported back over IPP. 8. When the printer disappears, its temporary queue is removed automatically."
    },
    {
      "kind": "paragraph",
      "text": "Printer Applications make legacy and non-driverless printers fit this model. A Printer Application is a daemon that detects supported printers, advertises them on 127.0.0.1 as IPP Everywhere printers, answers get-printer-attributes, receives raster, image or PDF jobs, and internally converts them to the device's native format. To CUPS it is indistinguishable from a real driverless printer."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Data flow"
    },
    {
      "kind": "paragraph",
      "text": "The classic CUPS 2.x path takes print data through spooling, MIME detection, a filter chain and a backend:"
    },
    {
      "kind": "list",
      "items": [
        "Application produces a PDF job.",
        "The job travels over IPP (port 631 or a local domain socket) to cupsd, which spools it.",
        "cupsd performs MIME type detection and runs the cups-filters chain (for example pdftopdf then a raster converter, using Ghostscript or Poppler) applying PPD options.",
        "A backend (usb, ipp, dnssd, socket and others) sends the result to the printer, which prints in its native language."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The New-Architecture path with a Printer Application replaces the local filter chain with a second IPP endpoint:"
    },
    {
      "kind": "list",
      "items": [
        "Application produces a PDF or raster job, sent over IPP to cupsd, which auto-creates a temporary queue for the discovered IPP endpoint.",
        "The job is forwarded over IPP on 127.0.0.1 to the Printer Application (a PAPPL daemon discovered via DNS-SD), which receives PWG/Apple Raster or PDF data and feeds pixels to the driver.",
        "The driver converts to the device's native format and sends it over USB or the network to the physical printer."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The IPP-over-USB path brings the same model to USB devices: an IPP-over-USB class device is handled by the ipp-usb daemon, which acts as an HTTP reverse proxy over USB, exposes an IPP service on a 127.0.0.1 socket, and advertises it via DNS-SD, so CUPS and scanning frontends treat it exactly as a driverless network device."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Operating system integration"
    },
    {
      "kind": "paragraph",
      "text": "On Linux and other POSIX/Unix systems, CUPS is the de-facto standard print service, and essentially all major distributions (Debian/Ubuntu, Red Hat/Fedora, SUSE and others) ship CUPS plus cups-filters. Discovery relies on Avahi, the Linux DNS-SD/mDNS implementation; OpenPrinting contributed loopback (\"127.0.0.1\") interface support to Avahi 0.8.0, which is needed so that a local Printer Application or ipp-usb device can be discovered on the same machine."
    },
    {
      "kind": "paragraph",
      "text": "For desktop integration, setup tools such as the GNOME Control Center \"Printers\" module and print dialogs (GTK, Qt) integrate with CUPS, while OpenPrinting's CPDB effort moves print-technology handling into shared D-Bus backends."
    },
    {
      "kind": "paragraph",
      "text": "Because New-Architecture components communicate only over IP-based protocols (IPP, DNS-SD) rather than shared files and executables, they suit sandboxed, distribution-independent packaging. OpenPrinting ships a CUPS Snap and retro-fitting Printer Applications as Snaps, and has published Docker/OCI images; per its own analysis, Flatpak and AppImage are unsuitable for the daemons and system components, so Snap and Docker are the emphasized formats."
    },
    {
      "kind": "paragraph",
      "text": "macOS and iOS ship \"Apple CUPS,\" a separate lineage maintained by Apple rather than the OpenPrinting version. On Windows, OpenPrinting has demonstrated running Printer Applications under WSL (Windows Subsystem for Linux) to revive legacy printers — a documented HOWTO rather than a packaged product."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to standards"
    },
    {
      "kind": "paragraph",
      "text": "OpenPrinting works closely with the Printer Working Group (PWG) and implements its standards; Michael Sweet has been a long-time contributor to the Internet Printing Protocol."
    },
    {
      "kind": "list",
      "items": [
        "IPP (Internet Printing Protocol) is the core protocol, HTTP-based, originally an IETF effort and now maintained by the PWG. CUPS uses IPP for job submission, status and capability queries (get-printer-attributes).",
        "The four driverless standards, all built on DNS-SD discovery plus IPP and a selection of common PDLs, are: AirPrint (Apple) with Apple Raster/URF, JPEG and PDF; IPP Everywhere (PWG, fully open) with PWG Raster, JPEG and PDF; Mopria (a proprietary IPP profile used from Android and Windows) with PCLm, PWG Raster and PDF; and Wi-Fi Direct Print Services with PCLm, PWG Raster and PDF.",
        "Page Description Languages include PDF; the PWG Raster Format (PWG Candidate Standard 5102.4-2012); Apple Raster / URF (modified PackBits with GZIP); and PCLm, a raster-only subset of PDF that is unrelated to classic HP PCL.",
        "DNS-SD / mDNS (ZeroConf/Bonjour) is used for discovery, and IPP-over-USB (ratified by the USB-IF in 2012) carries the driverless model to USB.",
        "For scanning, eSCL (the HTTP-based protocol behind Apple's AirScan, with a specification published by Mopria in May 2021) and WSD (Microsoft's Web Services for Devices) are relevant; OpenPrinting is pursuing IPP Scan and PAPPL-based Scanner Applications, while IPP Fax Out covers driverless faxing."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The legacy PPD (PostScript Printer Description) format is an Adobe format from which OpenPrinting is deliberately moving away; PPD and printer-driver support was marked deprecated in the CUPS 2.x era (around 2019 onward) as OpenPrinting moved toward all-IPP driverless printing — not in the earlier CUPS 1.4 timeframe."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to technologies"
    },
    {
      "kind": "paragraph",
      "text": "Several external technologies underpin the OpenPrinting stack:"
    },
    {
      "kind": "list",
      "items": [
        "Ghostscript and Poppler are PostScript/PDF interpreters used by classic filters to rasterize jobs for non-PostScript printers. OpenPrinting historically maintained \"ESP Ghostscript\" and merged its features upstream in GPL Ghostscript 8.60.",
        "SANE (Scanner Access Now Easy) is the classic Linux scanning API; OpenPrinting's driverless scanning uses the SANE backends escl (in sane-backends from 1.0.29) and sane-airscan, and aims to replace model-specific SANE drivers with Scanner Applications.",
        "Avahi provides DNS-SD, and D-Bus is used by CPDB backends and planned local-server GUI APIs.",
        "Snap, Docker and Flatpak are packaging and sandboxing technologies; OpenPrinting targets Snap and Docker for its components, while the Flatpak \"Printing Portal\" independently realized the older \"Common Print Dialog\" idea.",
        "Go and Rust appear in the tooling: ipp-usb is written in Go, ChromeOS's alternative ippusb_bridge is in Rust, and OpenPrinting hosts Rust bindings (cups-rs, cpdb-rs) alongside the older C daemon ippusbxd (now suspended)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "OpenPrinting also participates in Google Summer of Code (since 2008) and Season of Docs under the Linux Foundation umbrella, a major source of contributors."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "paragraph",
      "text": "OpenPrinting is vendor-neutral and works with printer manufacturers and the PWG to get devices working on Linux/POSIX systems and to implement standards."
    },
    {
      "kind": "paragraph",
      "text": "For HP, the HPLIP (HP Linux Imaging and Printing) suite is HP's own driver software; OpenPrinting provides an hplip-printer-app retro-fitting Printer Application (with support for HP's proprietary plugin), and Michael Sweet maintains a separate hp-printer-app. Epson, Canon and others are covered by Gutenprint, a set of high-quality inkjet and dye-sublimation drivers available as a retro-fitting Printer Application. Dymo and Zebra label printers are supported by LPrint, a native (non-retrofitting) Printer Application."
    },
    {
      "kind": "paragraph",
      "text": "The OpenPrinting database and Foomatic catalog manufacturer support for free-software drivers and host manufacturer-contributed PPDs, split into foomatic-db (free) and foomatic-db-nonfree (restricted redistribution). Printers are rated as Perfectly, Mostly or Partially supported, or as a \"Paperweight.\" Manufacturers who cannot or will not adopt driverless printing can distribute drivers as sandboxed Printer Applications."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "CUPS is the standard print subsystem across Linux and Unix and remains actively developed at OpenPrinting after Apple stepped back. As of mid-2026 the CUPS 2.4.x series is the current stable line (for example v2.4.19, released 2026-04-27)."
    },
    {
      "kind": "paragraph",
      "text": "The New Architecture is materializing: the modular CUPS 3.x components exist as separate repositories (libcups, cups-commands, cups-local, cups-sharing), and libcups 3.0.0 shipped on 2026-01-08 (3.0.2 on 2026-06-05). PAPPL is actively released (v1.4.11, 2026-06-05), and Printer Applications continue to ship (for example the HP Printer Application 1.3.1 and LPrint 1.4.0 in June 2026). Earlier published schedules slipped — the 2.4.x line remains the deployed stable series while the modular 3.x pieces roll out."
    },
    {
      "kind": "paragraph",
      "text": "Driverless printing is now the norm: even inexpensive consumer printers support AirPrint or Mopria so they can print from phones, which also makes them work out-of-the-box on Linux."
    },
    {
      "kind": "paragraph",
      "text": "Security has raised the subsystem's profile. In September 2024 a set of remote-code-execution vulnerabilities affecting the CUPS/OpenPrinting stack was disclosed and drew wide attention: CVE-2024-47076 (libcupsfilters), CVE-2024-47175 (libppd), CVE-2024-47176 (cups-browsed) and CVE-2024-47177 (cups-filters / foomatic-rip), which could be chained for remote code execution. OpenPrinting published a news flash and fixes. The project also runs the printer/driver database and continues its GSoC and Season of Docs participation."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common misconceptions"
    },
    {
      "kind": "list",
      "items": [
        "\"OpenPrinting is CUPS.\" OpenPrinting is the umbrella project and steward; CUPS is one (central) component alongside cups-filters, Foomatic, PAPPL/Printer Applications, ipp-usb and CPDB.",
        "\"CUPS is an Apple project.\" Apple owned and developed CUPS from 2007, but since September 2020 the actively developed cross-platform upstream is OpenPrinting CUPS. \"Apple CUPS\" is now the macOS/iOS-only variant.",
        "\"You still need a driver or PPD for every printer.\" Most modern printers are driverless (IPP Everywhere, AirPrint, Mopria) and need no model-specific software; PPDs are deprecated and being removed in the New Architecture.",
        "\"Driverless printing only works over the network.\" IPP-over-USB, via ipp-usb, brings the same driverless model to USB-connected devices.",
        "\"A Printer Application is just a repackaged PPD.\" It is a running daemon that emulates a full driverless IPP printer — discovery, capability reporting and job conversion — not a static data file.",
        "\"PCLm is HP PCL.\" PCLm is a raster-only subset of PDF and is unrelated to classic PCL.",
        "\"IPP Everywhere, AirPrint and Mopria are fundamentally different protocols.\" They share the same mechanism (DNS-SD plus IPP) and differ mainly in which PDLs they mandate, which is why OpenPrinting treats them collectively as \"driverless IPP printing.\""
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
          "period": "2000",
          "text": "Till Kamppeter adopts CUPS at MandrakeSoft and writes the X Printing Panel (XPP) print dialog."
        },
        {
          "period": "2001",
          "text": "Kamppeter takes over Foomatic/linuxprinting.org; OpenPrinting is founded at the OSDN Printing Summit (San Jose) under the Free Standards Group."
        },
        {
          "period": "2002",
          "text": "Mac OS X adopts CUPS (10.2 Jaguar)."
        },
        {
          "period": "2006",
          "text": "First OpenPrinting Summit (Atlanta); the project decides to make PDF the standard print job format; the FSG hires Kamppeter full-time."
        },
        {
          "period": "2007",
          "text": "The FSG and OSDL merge into the Linux Foundation; the Grand Unified Ghostscript effort ships as GPL Ghostscript 8.60; Apple acquires CUPS and hires Michael Sweet (February)."
        },
        {
          "period": "2008",
          "text": "OpenPrinting begins participating in Google Summer of Code."
        },
        {
          "period": "2011–2012",
          "text": "cups-filters is created (late 2011); Apple removes the free filters in CUPS 1.6.0 (2012); cups-browsed is created (late 2012)."
        },
        {
          "period": "2012",
          "text": "The USB-IF ratifies IPP-over-USB."
        },
        {
          "period": "2017",
          "text": "CUPS Snap work begins and the CPDB project starts (GSoC 2017)."
        },
        {
          "period": "2018",
          "text": "Michael Sweet introduces Printer Applications at the OpenPrinting Summit / PWG meeting (Sunnyvale)."
        },
        {
          "period": "2019",
          "text": "Michael Sweet leaves Apple (year end); Apple's CUPS development stalls."
        },
        {
          "period": "2019–2020",
          "text": "First eSCL SANE backends appear; Avahi 0.8.0 adds 127.0.0.1 support."
        },
        {
          "period": "September 2020",
          "text": "OpenPrinting forks CUPS and becomes its official upstream."
        },
        {
          "period": "May 2021",
          "text": "The eSCL specification is published by Mopria."
        },
        {
          "period": "September 2024",
          "text": "Remote-code-execution vulnerabilities (CVE-2024-47076/47175/47176/47177) are disclosed in the cups-browsed/CUPS filter stack."
        },
        {
          "period": "2026-01-08",
          "text": "libcups 3.0.0 is released, part of the New-Architecture library line."
        },
        {
          "period": "2026 (through mid-year)",
          "text": "CUPS 2.4.19 (April), PAPPL 1.4.11 and libcups 3.0.2 (June), and updated Printer Applications ship."
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
      "slug": "driverless-printing"
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
      "q": "Is OpenPrinting the same thing as CUPS?",
      "a": "No. OpenPrinting is the umbrella project and upstream steward; CUPS is its central component, but OpenPrinting also maintains cups-filters, the Foomatic driver database, PAPPL-based Printer Applications, ipp-usb and the Common Print Dialog Backends."
    },
    {
      "q": "Who maintains CUPS now — Apple or OpenPrinting?",
      "a": "Apple owned and developed CUPS from 2007, but since September 2020 the actively developed cross-platform upstream is OpenPrinting CUPS. \"Apple CUPS\" is the separate variant shipped in macOS and iOS."
    },
    {
      "q": "What is a Printer Application?",
      "a": "A Printer Application is a self-contained daemon (typically built on the PAPPL framework) that emulates a driverless IPP printer. It detects supported devices, advertises them on 127.0.0.1, answers capability queries, and converts incoming jobs to the device's native format, so legacy hardware works in the all-IPP New Architecture without PPD files."
    },
    {
      "q": "Do modern printers still need drivers on Linux?",
      "a": "Most do not. Printers supporting IPP Everywhere, AirPrint or Mopria are driverless and work out-of-the-box; PPD files are deprecated and are being removed in OpenPrinting's New Architecture. IPP-over-USB (via ipp-usb) extends the same driverless model to USB-connected devices."
    },
    {
      "q": "What were the September 2024 CUPS vulnerabilities?",
      "a": "A chain of remote-code-execution flaws in the OpenPrinting stack: CVE-2024-47076 (libcupsfilters), CVE-2024-47175 (libppd), CVE-2024-47176 (cups-browsed) and CVE-2024-47177 (cups-filters/foomatic-rip). OpenPrinting published a news flash and fixes."
    }
  ],
  "sources": [
    {
      "title": "OpenPrinting — Home / project overview",
      "url": "https://openprinting.github.io/",
      "publisher": "OpenPrinting (Linux Foundation)"
    },
    {
      "title": "OpenPrinting — How did this all begin? (history)",
      "url": "https://openprinting.github.io/history/",
      "publisher": "OpenPrinting"
    },
    {
      "title": "OpenPrinting — Our principal achievements",
      "url": "https://openprinting.github.io/achievements/",
      "publisher": "OpenPrinting"
    },
    {
      "title": "OpenPrinting — What are we doing currently? (New Architecture)",
      "url": "https://openprinting.github.io/current/",
      "publisher": "OpenPrinting"
    },
    {
      "title": "OpenPrinting — Driverless Printing (standards and PDLs)",
      "url": "https://openprinting.github.io/driverless/",
      "publisher": "OpenPrinting"
    },
    {
      "title": "OpenPrinting — Printer Compatibility Database intro",
      "url": "https://openprinting.github.io/databaseintro/",
      "publisher": "OpenPrinting"
    },
    {
      "title": "OpenPrinting CUPS — release history",
      "url": "https://github.com/OpenPrinting/cups/releases",
      "publisher": "OpenPrinting"
    },
    {
      "title": "OpenPrinting libcups (libcups3) — releases",
      "url": "https://github.com/OpenPrinting/libcups/releases",
      "publisher": "OpenPrinting"
    },
    {
      "title": "ipp-usb — IPP-over-USB daemon",
      "url": "https://github.com/OpenPrinting/ipp-usb",
      "publisher": "OpenPrinting"
    },
    {
      "title": "cups-browsed Remote Code Execution vulnerability — news flash",
      "url": "https://openprinting.github.io/OpenPrinting-News-Flash-cups-browsed-Remote-Code-Execution-vulnerability/",
      "publisher": "OpenPrinting"
    },
    {
      "title": "Red Hat response to the OpenPrinting CUPS vulnerabilities",
      "url": "https://www.redhat.com/en/blog/red-hat-response-openprinting-cups-vulnerabilities",
      "publisher": "Red Hat"
    },
    {
      "title": "CUPS attack: zero-day vulnerability analysis (CVE-2024-47076/47175/47176/47177)",
      "url": "https://jfrog.com/blog/cups-attack-zero-day-vulnerability-all-you-need-to-know/",
      "publisher": "JFrog"
    },
    {
      "title": "PWG Candidate Standard 5102.4-2012 (PWG Raster Format)",
      "url": "https://ftp.pwg.org/pub/pwg/candidates/cs-ippraster10-20120420-5102.4.pdf",
      "publisher": "Printer Working Group"
    },
    {
      "title": "The Grand Unified Ghostscript Officially Released: GPL Ghostscript 8.60",
      "url": "https://www.cups.org/blog/2007-08-01-the-grand-unified-ghostscript-officially-released-gpl-ghostscript-8.60.html",
      "publisher": "CUPS.org"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "openprinting",
    "cups",
    "cups-filters",
    "foomatic",
    "pappl",
    "printer application",
    "ipp-usb",
    "driverless printing",
    "ipp everywhere",
    "common print dialog backends",
    "ppd",
    "linux printing"
  ],
  "cluster": "unix-printing"
};

export default entry;
