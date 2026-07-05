import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "pjl",
  "title": "PJL (Printer Job Language)",
  "description": "Printer Job Language (PJL) is HP's job-level control language for switching printer PDLs and reading printer status back to the host.",
  "summary": "Printer Job Language (PJL) is a command language developed by Hewlett-Packard that operates at the print-job level, above the page description language (PDL) that renders each page. Per HP's own definition, PJL provides \"a method for switching printer languages at the job level, and for status readback between the printer and the host computer.\" Where a PDL such as PCL or PostScript describes marks on a page, PJL describes what to do with the job as a whole: which interpreter should process the next block of data, how many copies to print, which paper tray to use, what the control panel displays, and what status the host is told. PJL commands are largely plain-English text, each line beginning with the @PJL prefix, which makes them human-readable and easy to generate from a driver. Because PJL parses its own commands before any PDL sees the data, HP describes it as residing \"above all the other printer languages.\"",
  "purpose": "A job-level command language for switching printer languages and reading device status back to the host.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Printer Job Language emerged from Hewlett-Packard's LaserJet ecosystem in the early 1990s, in the same generation that introduced PCL 5 (the HP LaserJet III family). It answered a practical problem created by multi-language printers: a single device might understand both PCL and PostScript and needed a reliable, language-neutral way to be told which one to use for a given job."
    },
    {
      "kind": "paragraph",
      "text": "HP published the Printer Job Language Technical Reference Manual across at least ten editions, from the First Edition in September 1992 (part number 5961-0512) through the Tenth Edition in October 1997 (part number 5021-0380). HP continues to distribute the PJL Technical Reference Manual and related addenda through its developer portal."
    },
    {
      "kind": "paragraph",
      "text": "The exact debut year should be treated as an era rather than a precise claim. Secondary sources sometimes associate PJL's introduction with the HP LaserJet III and PCL 5 generation around 1990, but the earliest official PJL reference manual is dated September 1992, and no primary HP source states a single \"introduced in year X\" origin. PJL is attributed to HP as its corporate developer; no individual inventor is named in HP's documentation."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Before PJL, a printer that supported more than one PDL had no standardized, in-band way to know which interpreter a given job required, nor a clean way to report device status back to the host. Ambiguity between languages caused jobs to print as garbage, for example PostScript code emitted as literal text, or PCL fed to a PostScript interpreter."
    },
    {
      "kind": "paragraph",
      "text": "Job settings such as copy count or paper source were also buried inside PDL-specific escape sequences that differed per language. PJL provided a single job-control layer that:"
    },
    {
      "kind": "list",
      "items": [
        "explicitly declares which PDL to enter;",
        "sets job-level and device-level parameters in one consistent syntax regardless of the underlying PDL;",
        "allows the printer to send status and configuration information back to the host (status readback), enabling bidirectional communication rather than a one-way data push."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "A PJL-aware data stream is bracketed by a special escape sequence called the Universal Exit Language (UEL) command: the ASCII escape character (0x1B) followed by %-12345X. The UEL tells the printer to stop interpreting whatever PDL it is currently in and hand control to the PJL parser. The @PJL prefix must immediately follow the opening UEL, with no intervening characters — HP's documentation states that no other characters, including control characters, are allowed between the UEL command and the @PJL prefix."
    },
    {
      "kind": "paragraph",
      "text": "Each PJL line begins with @PJL, uses plain-English verbs and PARAMETER = VALUE assignments, and is terminated by a line feed. HP's manual identifies three core (kernel) commands used in most jobs: the UEL command, the COMMENT command, and the ENTER command. When the parser reaches @PJL ENTER LANGUAGE = PCL (or = POSTSCRIPT), it switches to that PDL's interpreter until the next UEL returns control to PJL. Because each sub-job is delimited by a UEL, multiple sub-jobs in different languages can be chained safely in one stream."
    },
    {
      "kind": "paragraph",
      "text": "A simple job looks like this:"
    },
    {
      "kind": "list",
      "items": [
        "<ESC>%-12345X@PJL COMMENT ...",
        "@PJL SET COPIES = 3",
        "@PJL ENTER LANGUAGE = PCL",
        "... PCL page data ...",
        "<ESC>%-12345X"
      ]
    },
    {
      "kind": "paragraph",
      "text": "For status readback, the host issues query commands and the printer returns text responses on the back-channel of a bidirectional interface. HP's manual documents the status-readback command set as INQUIRE, DINQUIRE, ECHO, INFO, USTATUS, and USTATUSOFF."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the print/document pipeline"
    },
    {
      "kind": "paragraph",
      "text": "PJL is a thin control layer between the driver/spooler and the PDL interpreter inside the printer. The pipeline runs roughly: application to print driver (which generates the PDL and wraps it in PJL), to spooler and port monitor, to the printer's PJL parser, to the selected PDL interpreter (PCL, PostScript, and so on), to the raster and print engine."
    },
    {
      "kind": "paragraph",
      "text": "PJL never describes page content; it configures the environment and routes the data stream to the correct interpreter. Because it is parsed first, PJL can also front-run device-management functions — control-panel messages, default settings, and file-system operations — that are independent of any single job's page content."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "PJL is a device-level language: many of its commands manipulate the printer itself rather than the current job. It can change control-panel default settings with @PJL DEFAULT, override settings for the current job only with @PJL SET, set the display \"ready\" message with @PJL RDYMSG, reset the device, and query the printer's model, installed options, memory, and configuration."
    },
    {
      "kind": "paragraph",
      "text": "On network printers, PJL is commonly spoken over raw TCP port 9100 — the AppSocket/JetDirect PDL-data-stream port — which is why it features heavily in printer administration and in printer security testing. Support is not uniform: not every documented PJL command is implemented in every device, behavior varies by model and firmware, and many vendors add proprietary PJL extensions."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "paragraph",
      "text": "PJL is OS-agnostic; it lives in the data stream, not the operating system. But every major platform's printing stack emits it. Windows print drivers and port monitors routinely wrap jobs in PJL. On Linux, Unix, and macOS, CUPS filters and PPD-driven drivers (and the underlying Ghostscript/Foomatic chain) generate PJL headers to select the PDL and set options."
    },
    {
      "kind": "paragraph",
      "text": "Because PJL is plain text, spoolers such as LPRng and lpd historically passed or generated PJL directly, and an administrator can send raw PJL to a printer with a simple network socket or a copy-to-port command. The operating system's role is essentially to construct the correct PJL wrapper and deliver it to the device."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF / PostScript / drivers"
    },
    {
      "kind": "paragraph",
      "text": "According to HP's documentation, PJL was conceived as an extension to Printer Command Language (PCL) but is now supported by most PostScript printers as well; @PJL ENTER LANGUAGE = POSTSCRIPT is the standard way a driver hands off to a PostScript interpreter."
    },
    {
      "kind": "paragraph",
      "text": "PJL does not interpret PDF, PostScript, or PCL content — it only selects which interpreter runs and sets the surrounding job parameters. PDF is not a PJL language target in the classic model; historically PDF was rasterized to PostScript or PCL by the driver, though some modern devices accept PDF directly as a PDL, declared through PJL where supported."
    },
    {
      "kind": "paragraph",
      "text": "In driver architecture, PJL is the envelope the driver writes around the PDL payload: it declares copies, duplex, media, resolution, and the target language, and the PDL payload then follows."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "PJL remains in everyday use. Contemporary printer drivers still wrap jobs in PJL to select the interpreter and carry job settings, and the UEL / @PJL ENTER LANGUAGE convention is essentially universal on office laser devices. Its status-readback and device-management commands are used by fleet-management and monitoring tools to query consumables, page counts, and configuration."
    },
    {
      "kind": "paragraph",
      "text": "On the security side, PJL is a well-known attack surface. The RUB-NDS Printer Exploitation Toolkit (PRET), developed as a Master's thesis at Ruhr University Bochum, supports PostScript, PJL, and PCL, connects over TCP port 9100 (or USB), and can capture or manipulate jobs, access the printer's file system and memory, and cause physical damage. Because of exposures such as these, PJL hardening — setting a PJL password and disabling file-system or disk-access commands — is a standard part of printer security guidance."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Language-neutral, unambiguous job-level control: one syntax to switch between PCL, PostScript, and other PDLs.",
        "Human-readable, plain-English commands that are easy to generate and debug.",
        "Enables bidirectional communication (status readback) rather than a one-way data push.",
        "Consolidates job and device settings — copies, media, duplex, control-panel messages — independent of the underlying PDL.",
        "Allows multiple differently-languaged sub-jobs to be chained safely in a single stream via UEL delimiters.",
        "Broadly supported across HP and third-party devices, making it a de facto interoperability layer."
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
        "It is a de facto HP standard, not an open ISO or IETF standard; command support and behavior vary by vendor, model, and firmware, and vendor-specific extensions fragment compatibility.",
        "It has no built-in security model by default: the same file-system, NVRAM, and device-control commands that aid administration also enable serious attacks when the device is reachable, notably on port 9100. CVE-2010-4107, for example, describes how the default PJL access configuration on a range of HP LaserJet and Color LaserJet devices let remote attackers read arbitrary files via a directory-traversal payload in a print job, with remediation being to set a PJL password or disable PJL file-system access.",
        "It controls but does not render — it cannot describe page content and is only as capable as the PDLs and features the target device implements.",
        "Strict framing requirements (the UEL immediately followed by @PJL, with correct termination) mean malformed streams can fail silently or print as garbage."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Related standards and protocols"
    },
    {
      "kind": "list",
      "items": [
        "PCL (Printer Command Language) — the HP PDL that PJL was originally designed to wrap; PJL evolved alongside PCL 5.",
        "PostScript — the Adobe PDL commonly selected via @PJL ENTER LANGUAGE = POSTSCRIPT.",
        "PDF — increasingly accepted directly as a PDL on newer devices; otherwise rasterized to PCL or PostScript upstream.",
        "PML (Printer Management Language) — an object-oriented, request-reply printer management protocol that is embedded within and carried over PJL (for example, PML/SNMP requests passed through PJL to the device's PML parser).",
        "IPP (Internet Printing Protocol) and PWG standards — modern, open, network-level job-submission and status protocols whose status and job-control roles overlap PJL's at the network layer; unlike PJL, IPP is an IETF/PWG standard.",
        "AppSocket / JetDirect (raw TCP port 9100) — the common transport over which PJL and PDL data are streamed to network printers."
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
          "period": "Early 1990s (HP LaserJet III / PCL 5 era)",
          "text": "PJL emerges as HP's job-level control layer; the precise debut year is often cited as 1990 by association but is best treated as an era rather than a firm claim."
        },
        {
          "period": "September 1992",
          "text": "First Edition, Printer Job Language Technical Reference Manual (P/N 5961-0512)."
        },
        {
          "period": "May 1993",
          "text": "Second Edition; July 1993 — Third Edition."
        },
        {
          "period": "May 1994",
          "text": "Fourth Edition; September 1994 — Fifth Edition."
        },
        {
          "period": "May 1995",
          "text": "Sixth Edition; October 1995 — Seventh Edition."
        },
        {
          "period": "May 1996",
          "text": "Eighth Edition; October 1996 — Ninth Edition."
        },
        {
          "period": "October 1997",
          "text": "Tenth Edition (P/N 5021-0380)."
        },
        {
          "period": "2010",
          "text": "CVE-2010-4107: directory-traversal file-system read access documented in a range of HP LaserJet devices via PJL."
        },
        {
          "period": "2010s",
          "text": "PJL becomes a documented printer-attack surface; RUB-NDS releases PRET (Printer Exploitation Toolkit), exercising PJL over port 9100."
        },
        {
          "period": "Present",
          "text": "HP continues to publish the PJL Technical Reference Manual; PJL remains standard in drivers and device management."
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
      "slug": "pcl"
    },
    {
      "section": "tools",
      "slug": "postscript"
    },
    {
      "section": "brands",
      "slug": "hewlett-packard"
    },
    {
      "section": "guides",
      "slug": "how-printer-drivers-work"
    },
    {
      "section": "guides",
      "slug": "what-is-postscript-printing"
    },
    {
      "section": "glossary",
      "slug": "print-driver"
    }
  ],
  "faqs": [
    {
      "q": "Is PJL the same as PCL or PostScript?",
      "a": "No. PCL and PostScript are page description languages that describe the marks on a page. PJL sits above them and controls the job — selecting which interpreter runs and setting parameters such as copies and paper source. HP describes PJL as residing above all the other printer languages, parsing its own commands first."
    },
    {
      "q": "What is the UEL command in PJL?",
      "a": "The Universal Exit Language (UEL) command is the escape sequence <ESC>%-12345X (ASCII 0x1B followed by %-12345X). It signals the printer to stop interpreting the current PDL and hand control to the PJL parser. The @PJL prefix must immediately follow the UEL, with no intervening characters."
    },
    {
      "q": "Is PJL an official open standard?",
      "a": "No. PJL is a de facto standard developed by Hewlett-Packard, not an open ISO or IETF standard. Command support and behavior vary by vendor, model, and firmware, and vendors add proprietary extensions. Open network-level protocols such as IPP overlap some of PJL's job-control and status roles."
    },
    {
      "q": "Why is PJL a security concern?",
      "a": "PJL has no built-in security model by default, and its file-system, NVRAM, and device-control commands can be abused when a printer is reachable, notably over TCP port 9100. Documented issues include CVE-2010-4107 and tools such as PRET. Hardening involves setting a PJL password and disabling file-system access commands."
    }
  ],
  "sources": [
    {
      "title": "Printer Job Language Technical Reference Manual (HP; edition history, definition, command chapters)",
      "url": "https://docslib.org/doc/1604344/printer-job-language-technical-reference-manual",
      "publisher": "Hewlett-Packard (mirrored via DocsLib)"
    },
    {
      "title": "Printer Job Language Technical Reference Manual, Edition 10",
      "url": "https://lprng.sourceforge.net/DISTRIB/RESOURCES/DOCS/pjltkref.pdf",
      "publisher": "Hewlett-Packard (archived via LPRng)"
    },
    {
      "title": "Using Printer Job Language (PJL) — HP LaserJet documentation (UEL sequence, @PJL framing rule)",
      "url": "https://www.devenezia.com/docs/HP/LJ1686.html",
      "publisher": "Hewlett-Packard (mirrored)"
    },
    {
      "title": "Print Job Language (PJL) — HP Developer Portal",
      "url": "https://developers.hp.com/hp-printer-command-languages-pcl/doc/print-job-language-pjl",
      "publisher": "Hewlett-Packard"
    },
    {
      "title": "Printer Job Language",
      "url": "https://en.wikipedia.org/wiki/Printer_Job_Language",
      "publisher": "Wikipedia"
    },
    {
      "title": "CVE-2010-4107 (HP LaserJet PJL directory-traversal file read)",
      "url": "https://www.cvedetails.com/cve/CVE-2010-4107/",
      "publisher": "CVE Details / NVD"
    },
    {
      "title": "RUB-NDS/PRET — Printer Exploitation Toolkit",
      "url": "https://github.com/RUB-NDS/PRET",
      "publisher": "Ruhr University Bochum, Chair for Network and Data Security"
    },
    {
      "title": "PML — Hacking Printers wiki (PML embedded within PJL)",
      "url": "http://hacking-printers.net/wiki/index.php/PML",
      "publisher": "Hacking Printers project (Ruhr University Bochum)"
    },
    {
      "title": "PCL 5 Printer Language Technical Reference Manual",
      "url": "https://developers.hp.com/sites/default/files/PCL_5_Printer_Language_Technical_Reference_Manual.pdf",
      "publisher": "Hewlett-Packard"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "pjl",
    "printer job language",
    "hp pjl",
    "universal exit language",
    "uel",
    "pcl",
    "postscript",
    "page description language",
    "print job control",
    "status readback",
    "port 9100",
    "pjl commands"
  ],
  "cluster": "page-description-languages"
};

export default entry;
