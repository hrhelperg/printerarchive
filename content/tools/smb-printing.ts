import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "smb-printing",
  "title": "SMB Printing",
  "description": "How printing works over Server Message Block (SMB/CIFS): shared print queues, the Windows spooler, RPRN, Point-and-Print, and Samba.",
  "summary": "SMB printing is the practice of submitting print jobs to a shared printer over the Server Message Block (SMB) protocol, the same file-and-printer-sharing protocol that underlies Windows network drives. Rather than defining a new page-description language or printer wire format, it reuses SMB's general-purpose \"share\" abstraction: a print queue is exposed as a named share, and a client prints by writing already-formatted job bytes to that share much as it would write a file. A print server (a Windows print server, or a Unix host running Samba) buffers the data in a spool queue, optionally processes it, and forwards it to the physical device. SMB is content-agnostic: the bytes it carries are typically PostScript, PCL, XPS/EMF spool data, or raw printer-ready data produced by a driver. Print sharing is one of SMB's two original purposes, alongside file sharing.",
  "purpose": "A method of submitting print jobs to shared printer queues over the SMB file-and-printer-sharing protocol.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "SMB (Server Message Block) originated at IBM in the early-to-mid 1980s as a protocol for sharing files and printers among IBM PC DOS systems, an origin widely attributed to Barry A. Feigenbaum. That attribution and the frequently cited 1983 date come from secondary sources rather than a primary IBM specification, so the era is more reliable than any exact year. Printer sharing was present in SMB from these early dialects; it is the \"printer sharing\" half of \"file and printer sharing.\""
    },
    {
      "kind": "paragraph",
      "text": "In the late 1980s, Microsoft and 3Com implemented SMB in LAN Manager for MS-DOS and OS/2, running SMB over NetBIOS. During the early-to-mid 1990s, SMB was integrated into Windows for Workgroups and Windows NT, and Samba emerged as an independent free-software reimplementation of SMB for Unix-like systems."
    },
    {
      "kind": "paragraph",
      "text": "Around 1996, Microsoft rebranded its SMB variant as CIFS (Common Internet File System) and made an initial, experimental attempt at running SMB directly over TCP without NetBIOS; working direct hosting over TCP port 445 shipped later, with Windows 2000. SMB 2.0 was introduced with Windows Vista and Windows Server 2008, sharply reducing the protocol's command set and chattiness. SMB 3.0 arrived with Windows 8 and Windows Server 2012, adding end-to-end encryption (AES-128-CCM). SMB over QUIC was introduced with Windows Server 2022 (initially the Azure Edition), carrying SMB, and thus SMB printing, over an encrypted QUIC transport."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Before networked print sharing, a printer was typically attached to a single computer's parallel or serial port and usable only from that machine. SMB printing let organizations solve several problems at once:"
    },
    {
      "kind": "list",
      "items": [
        "Share one physical printer among many PCs on a LAN without dedicated print-server hardware per printer.",
        "Reuse existing file-sharing infrastructure: the same protocol, credentials, authentication, and network stack used for shared folders also carried print jobs, so administrators did not need a separate print protocol or separate access control.",
        "Centralize spooling and queue management on a server, so client machines could \"fire and forget\" a job while the server handled ordering, buffering, and delivery to the device.",
        "Distribute drivers automatically via Point-and-Print, so a client connecting to a shared queue could obtain the appropriate driver from the server."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "At its core, a shared printer is presented as an SMB share whose type is a print queue rather than a directory. Two intertwined mechanisms are involved."
    },
    {
      "kind": "paragraph",
      "text": "Job-data transfer over SMB. In the classic model, the client connects to the printer share and performs SMB file-style operations: open a \"file\" on the print share, write the job bytes sequentially, then close it. Closing the handle signals the server that the job is complete and can be released to the queue. Microsoft's Print Services documentation illustrates the minimal case as copy /b FILE \\\\SERVER\\PRINTQ, streaming raw job data to a named print queue over the SMB protocol family."
    },
    {
      "kind": "paragraph",
      "text": "Spooler control via RPC. In the modern Windows model, richer job and queue management is layered on top using the Print System Remote Protocol (MS-RPRN) and its asynchronous counterpart (MS-PAR), carried as RPC over SMB named pipes. The client opens a printer handle, signals the start of each logical page, streams page data, signals page end, ends the job, and closes the handle via RPRN, while the bulk job bytes move over the SMB transport."
    },
    {
      "kind": "paragraph",
      "text": "On the server side, the print spooler service receives the data, buffers it in the queue, optionally runs it through a print processor or driver-side rendering, and dispatches it to the physical device. Clients authenticate with standard SMB authentication, and access to the print share is governed by SMB share and security permissions. Point-and-Print driver distribution rides alongside: drivers can be downloaded from the server over the SMB access protocols, or via the HTTP-based Web Point-and-Print Protocol (MS-WPRN)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the print/document pipeline"
    },
    {
      "kind": "paragraph",
      "text": "SMB printing occupies the transport and spooling layer, sitting between the client-side rendering stack and the physical device (or its downstream protocol):"
    },
    {
      "kind": "paragraph",
      "text": "` Application -> print subsystem -> driver renders job format (PostScript / PCL / XPS-EMF / raw) -> client spooler -> SMB transport (open share, write bytes / RPRN over named pipe) -> server spooler + queue (buffer, optional processing) -> device (USB/parallel, or forwarded via raw 9100, LPD, IPP) `"
    },
    {
      "kind": "paragraph",
      "text": "SMB does not define the page content and does not talk to the printer hardware directly. It is the network plumbing plus queue between two spoolers. The server's backend may itself forward the job to the device using another protocol."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "SMB printing generally targets shared print queues, not printers directly. The printer need not \"speak SMB\" at all; the server abstracts the device. Common arrangements include:"
    },
    {
      "kind": "list",
      "items": [
        "A printer physically attached to the server (USB or parallel), shared over SMB.",
        "A network printer reachable by the server over raw TCP/IP (port 9100), LPD, or IPP, which the server re-shares over SMB to clients."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Some network printers and print appliances have historically implemented an SMB/CIFS server so they can be addressed as \\\\printer\\share directly, but this is a vendor implementation choice, not a requirement of the model. Because SMB carries whatever bytes it is given, \"raw\" queues, where a client-side driver produces printer-ready data and the server passes it through untouched, are common."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "paragraph",
      "text": "Windows is the native environment: SMB is the built-in file-and-printer-sharing protocol, and the print spooler, MS-RPRN/MS-PAR, and Point-and-Print are integral OS components. File and Printer Sharing for Microsoft Networks must be enabled, using TCP port 445 (direct SMB) and/or port 139 (SMB over NetBIOS)."
    },
    {
      "kind": "paragraph",
      "text": "Unix and Linux participate through Samba, whose smbd daemon provides SMB/CIFS file and print services to Windows clients. Samba bridges SMB to a local print backend such as CUPS, LPRng, or classic BSD lpr, configured via smb.conf (for example, printing = CUPS, a [printers] share with printable = yes, and load printers; automatic sharing can be disabled with load printers = no). Available printers are discovered from the print backend or printcap. Samba's optional spoolssd, a pre-forked helper integrated with smbd, improves performance on servers with many printers or jobs; per SambaWiki, that guidance applies to Samba 4.15 and earlier, while newer versions use rpcd-spoolss."
    },
    {
      "kind": "paragraph",
      "text": "macOS can both connect to SMB shared printers and, historically, share printers over SMB, using CUPS underneath."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF / PostScript / drivers"
    },
    {
      "kind": "paragraph",
      "text": "SMB is orthogonal to the page-description language. The job bytes flowing over SMB are produced by the client's printer driver and may be:"
    },
    {
      "kind": "list",
      "items": [
        "PostScript or PCL, when a language-specific driver renders to those.",
        "XPS or EMF spool data in modern Windows, later converted by the server or driver.",
        "Raw or printer-ready data in \"raw print\" configurations, where the client driver fully formats the job and the server passes it through unmodified (Samba explicitly supports this raw-printer model)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "PDF is generally not the native spool format; where PDF-based printing is used (for example, some CUPS-centric pipelines), conversion to a device format happens in the print backend, not in SMB. Driver distribution is where SMB is directly involved: Point-and-Print lets clients pull the correct driver from the server over SMB (or via MS-WPRN over HTTP), so users need not install drivers manually."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "SMB print sharing remains widely deployed on Windows networks and via Samba, especially in centrally managed office and enterprise environments where a Windows or Samba print server fronts many printers with domain or Active Directory authentication. However, the industry trend is toward IPP, IPP Everywhere, and driverless printing, and toward direct-IP printing."
    },
    {
      "kind": "paragraph",
      "text": "Microsoft has also been hardening or restricting legacy print paths for security reasons, including changes around Point-and-Print driver installation and the deprecation of third-party print drivers. SMB1/CIFS is deprecated and disabled by default on current Windows for security reasons; modern SMB printing runs over SMB2/SMB3."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Reuses existing infrastructure: one protocol, one authentication model, and one set of firewall ports for both file and print sharing.",
        "Integrated authentication and access control via SMB share permissions and domain/Active Directory identity.",
        "Centralized spooling and queue management on the server.",
        "Automatic driver deployment through Point-and-Print.",
        "Cross-platform interoperability via Samba, letting Unix/Linux servers serve Windows clients and vice versa.",
        "Content-agnostic transport that works with PostScript, PCL, XPS, or raw data."
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
        "Historically LAN-oriented and \"chatty,\" especially SMB1, and not ideal across high-latency links (mitigated by SMB2/SMB3 and SMB over QUIC).",
        "Security surface: SMB1/CIFS has well-known vulnerabilities and is deprecated, and Point-and-Print driver installation has been a notable attack vector, prompting Microsoft to tighten defaults.",
        "Driver dependency: the classic model relies on matching client and server drivers; mismatches and driver management are a recurring operational burden (the industry is moving to driverless IPP to avoid this).",
        "Not a device protocol: SMB does not itself deliver jobs to a printer, so a backend or forwarding protocol is still needed for network devices.",
        "Port and firewall requirements (139/445) that are often restricted, particularly across network boundaries.",
        "Platform-centric: full-featured SMB printing (spooler notifications, Point-and-Print) is richest on Windows; other platforms rely on reimplementations such as Samba and CUPS."
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
        "SMB / CIFS / SMB2 / SMB3 — the underlying file-and-printer-sharing transport (MS-CIFS, MS-SMB, MS-SMB2).",
        "MS-RPRN (Print System Remote Protocol) and MS-PAR (Print System Asynchronous Remote Protocol) — RPC-based spooler and queue control carried over SMB named pipes; MS-PAR is Microsoft's asynchronous enhanced replacement for MS-RPRN.",
        "MS-PAN (Print System Asynchronous Notification Protocol) — job and printer status notifications.",
        "MS-WPRN (Web Point-and-Print Protocol) — HTTP-based driver download and Web Point-and-Print.",
        "MS-GPDPC (Group Policy: Deployed Printer Connections Extension) — deploys printer connections to clients via Group Policy (it deploys connections, not drivers).",
        "MS-EMFSPOOL, MS-FSCC, MS-RAP — spool file format, file-system control information, and remote administration used within the Print Services system.",
        "IPP (Internet Printing Protocol) and CUPS — the HTTP-based, increasingly driverless alternative and complement now favored industry-wide.",
        "LPD/LPR (RFC 1179) and raw TCP/IP printing (port 9100) — older or lower-level device-delivery protocols often used as the backend behind an SMB share.",
        "NetBIOS/NetBT and QUIC — transports SMB has run over across its history."
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
          "period": "Early-to-mid 1980s",
          "text": "SMB created at IBM (attributed to Barry A. Feigenbaum) to share files and printers among IBM PC DOS systems; printer sharing present from the start. (Date and attribution per secondary sources.)"
        },
        {
          "period": "Late 1980s",
          "text": "Microsoft and 3Com implement SMB in LAN Manager; SMB runs over NetBIOS."
        },
        {
          "period": "Early-to-mid 1990s",
          "text": "SMB integrated into Windows for Workgroups and Windows NT; Samba emerges as an independent Unix implementation."
        },
        {
          "period": "~1996",
          "text": "Microsoft rebrands its SMB variant as CIFS; an initial, experimental attempt at direct SMB over TCP appears, with working direct hosting over port 445 arriving in Windows 2000."
        },
        {
          "period": "2006-2008",
          "text": "SMB 2.0 ships with Windows Vista and Windows Server 2008, reducing the command set."
        },
        {
          "period": "2012 era",
          "text": "SMB 3.0 ships with Windows 8 and Windows Server 2012, adding encryption."
        },
        {
          "period": "2010s onward",
          "text": "Industry shift toward IPP and driverless printing; SMB1/CIFS deprecated and disabled by default in current Windows."
        },
        {
          "period": "2022",
          "text": "SMB over QUIC introduced with Windows Server 2022 (initially the Azure Edition)."
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
      "slug": "ipp"
    },
    {
      "section": "guides",
      "slug": "what-is-a-print-server"
    },
    {
      "section": "history",
      "slug": "office-printing-in-the-1990s"
    },
    {
      "section": "guides",
      "slug": "how-wireless-printing-works"
    },
    {
      "section": "guides",
      "slug": "how-printer-drivers-work"
    },
    {
      "section": "guides",
      "slug": "what-is-postscript-printing"
    }
  ],
  "faqs": [
    {
      "q": "What is SMB printing?",
      "a": "SMB printing is the practice of submitting print jobs to a shared printer over the Server Message Block (SMB) protocol, the same file-and-printer-sharing protocol used for Windows network drives. A print queue is exposed as a named share, and a client prints by writing already-formatted job bytes to that share much as it would write a file. A print server buffers the data and forwards it to the physical printer."
    },
    {
      "q": "What is the difference between SMB printing and CIFS printing?",
      "a": "They refer to the same thing. CIFS (Common Internet File System) was Microsoft's mid-1990s rebranding of its SMB variant. SMB1/CIFS is now deprecated and disabled by default on current Windows for security reasons; modern SMB printing runs over SMB2 and SMB3."
    },
    {
      "q": "Does SMB printing depend on a specific page-description language like PostScript or PDF?",
      "a": "No. SMB is content-agnostic and only transports the job bytes. Those bytes are produced by the client's printer driver and are typically PostScript, PCL, XPS/EMF spool data, or raw printer-ready data. PDF is generally not the native spool format; where PDF is used, conversion happens in the print backend such as CUPS, not in SMB."
    },
    {
      "q": "What network ports does SMB printing use?",
      "a": "SMB printing uses TCP port 445 for direct SMB over TCP/IP and/or TCP port 139 for SMB over NetBIOS. On Windows, File and Printer Sharing for Microsoft Networks must be enabled for these to be available."
    },
    {
      "q": "How do Linux and Unix systems provide SMB printing?",
      "a": "Through Samba, an independent free-software reimplementation of SMB. Samba's smbd daemon provides SMB/CIFS print services to Windows clients and bridges to a local print backend such as CUPS, LPRng, or BSD lpr, configured in smb.conf. Samba also supports a raw-printer pass-through model where the client driver fully formats the job and the server forwards it unmodified."
    }
  ],
  "sources": [
    {
      "title": "[MS-PRSOD]: Print Services Protocols Overview",
      "url": "https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-prsod/97fd9728-f83e-48d0-aa2c-79471fd9e00a",
      "publisher": "Microsoft"
    },
    {
      "title": "[MS-PRSOD]: Submitting a Print Job Using the SMB Protocol Family",
      "url": "https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-prsod/83397ad0-a400-4ff2-bcf6-01de1c22612d",
      "publisher": "Microsoft"
    },
    {
      "title": "[MS-PRSOD]: Example 6: Sending a Print Job to an SMB Share",
      "url": "https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-prsod/a84201ad-7700-4c19-98c4-3981341c549c",
      "publisher": "Microsoft"
    },
    {
      "title": "[MS-RPRN]: Print System Remote Protocol (Overview)",
      "url": "https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-rprn/a7cceedb-3afc-45f0-82e1-af2b2cbf20e4",
      "publisher": "Microsoft"
    },
    {
      "title": "Direct hosting of SMB over TCP/IP (ports 445/139)",
      "url": "https://learn.microsoft.com/en-us/troubleshoot/windows-server/networking/direct-hosting-of-smb-over-tcpip",
      "publisher": "Microsoft"
    },
    {
      "title": "SMB Security Enhancements (SMB 3.0 encryption, AES-128-CCM)",
      "url": "https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2012-r2-and-2012/dn551363(v=ws.11)",
      "publisher": "Microsoft"
    },
    {
      "title": "SMB over QUIC",
      "url": "https://learn.microsoft.com/en-us/windows-server/storage/file-server/smb-over-quic",
      "publisher": "Microsoft"
    },
    {
      "title": "RFC 1179: Line Printer Daemon Protocol",
      "url": "https://www.rfc-editor.org/rfc/rfc1179",
      "publisher": "IETF / RFC Editor"
    },
    {
      "title": "Setting up Samba as a Print Server",
      "url": "https://wiki.samba.org/index.php/Setting_up_Samba_as_a_Print_Server",
      "publisher": "Samba Team (SambaWiki)"
    },
    {
      "title": "smbd(8) man page",
      "url": "https://www.samba.org/samba/docs/4.17/man-html/smbd.8.html",
      "publisher": "Samba Team"
    },
    {
      "title": "smb.conf(5) man page",
      "url": "https://www.samba.org/samba/docs/4.9/man-html/smb.conf.5.html",
      "publisher": "Samba Team"
    },
    {
      "title": "Server Message Block (history and dialects)",
      "url": "https://en.wikipedia.org/wiki/Server_Message_Block",
      "publisher": "Wikipedia (secondary/corroborating)"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "smb printing",
    "server message block",
    "cifs",
    "print share",
    "windows print spooler",
    "ms-rprn",
    "point-and-print",
    "samba print server",
    "smb2",
    "smb3",
    "network printing",
    "shared printer queue"
  ],
  "cluster": "printing-protocols"
};

export default entry;
