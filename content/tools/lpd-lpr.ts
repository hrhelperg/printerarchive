import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "lpd-lpr",
  "title": "LPD / LPR — Line Printer Daemon Protocol",
  "description": "LPD/LPR is the Berkeley line printer daemon protocol (RFC 1179, TCP port 515) for submitting print jobs to and managing the queue of a remote spooler.",
  "summary": "LPD/LPR (Line Printer Daemon / Line Printer Remote) is a minimal, text-oriented TCP protocol, documented in the Informational RFC 1179 (August 1990), for submitting print jobs to a remote spooler and querying or manipulating its queue. A conforming daemon listens on TCP port 515; a print job is carried as a control file plus a data file. Grown from the Berkeley (BSD) UNIX printing system, LPD/LPR became a lowest-common-denominator way to print across heterogeneous networks and was later embedded directly into network printers and print-server appliances. It carries no authentication or encryption — RFC 1179 states that \"Security issues are not discussed in this memo\" — and it has largely been superseded by IPP for new deployments, though it remains widely supported for legacy interoperability.",
  "purpose": "A minimal TCP protocol for submitting print jobs to, and managing the queue of, a remote print spooler.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "LPD originated in the Berkeley printing system, the print-spooling subsystem of BSD UNIX developed at the University of California, Berkeley (Computer Systems Research Group). The networked form of the protocol is tied to BSD's adoption of TCP/IP, and secondary sources commonly date the networked LPD/LPR system to the 4.2BSD era (released 1983), consistent with 4.2BSD introducing TCP/IP networking. The exact BSD version and any individual attribution are not settled across sources: some references instead trace it to earlier BSD releases, and no primary source examined here fixes a single inventor, so this page describes the era rather than asserting disputed precision."
    },
    {
      "kind": "paragraph",
      "text": "The protocol was a de-facto standard in practice for years before it was written down. RFC 1179, \"Line Printer Daemon Protocol,\" was published in August 1990, edited by L. McLaughlin III of The Wollongong Group under the Network Printing Working Group. Notably, RFC 1179 documents existing practice rather than defining a new standard, and it was published with Informational status — it never became an IETF Standards-Track specification."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "On multi-user timesharing systems and, later, on networked workstations, many users needed to share a small number of physical printers. Letting user programs access printer hardware directly did not scale and produced interleaved, corrupted output."
    },
    {
      "kind": "paragraph",
      "text": "The Berkeley system introduced spooling: a user's lpr command hands a job to a background daemon (lpd), which queues jobs, serializes them to the device, and reports status. Extending this over TCP/IP let a client on one machine submit jobs to a spooler or network-attached printer on another machine. An organization could therefore centralize print queues and share network printers across many hosts and operating systems."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "A client opens a TCP connection to port 515 on the server. RFC 1179 requires the client's source port to fall in the privileged range 721–731 inclusive — a weak, BSD-style \"trusted host\" gate. The client then sends a one-byte request code followed by ASCII arguments, terminated by a line feed."
    },
    {
      "kind": "paragraph",
      "text": "RFC 1179 defines five top-level request codes:"
    },
    {
      "kind": "list",
      "items": [
        "\\01 — Print any waiting jobs (start or resume the queue)",
        "\\02 — Receive a printer job",
        "\\03 — Send queue state (short)",
        "\\04 — Send queue state (long)",
        "\\05 — Remove jobs"
      ]
    },
    {
      "kind": "paragraph",
      "text": "Within a \"receive job\" (\\02) session, three subcommands apply: \\01 abort, \\02 receive control file, and \\03 receive data file."
    },
    {
      "kind": "paragraph",
      "text": "A print job consists of two files. A control file (named cfA + a three-digit job number + the originating hostname) describes the job as an ASCII stream, one command per line, LF-terminated. Uppercase command letters set parameters — for example C (class), H (host), J (job name), L (banner), M (mail-on-completion user), N (source file name), P (user name), and the numerals 1–4 (fonts). Lowercase letters specify how to print each data file — for example f (formatted text), l (literal / leave control characters), o (PostScript), p (print via pr), and r (FORTRAN carriage control), among others (c, d, g, n, t, v)."
    },
    {
      "kind": "paragraph",
      "text": "The data file (named dfA + job number + hostname) holds the bytes to be printed, and the server acknowledges each transfer with a status byte. Job numbers range 0–999. RFC 1179's field limits include host names and user names capped at 31 octets, with larger limits for job names and file names."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the print/document pipeline"
    },
    {
      "kind": "paragraph",
      "text": "LPD/LPR is a transport and queue-management layer, not a page-description or rendering layer. It sits between the client application or spooler and the destination spooler or printer."
    },
    {
      "kind": "paragraph",
      "text": "The application (or a driver) first produces the actual print data — plain text, PostScript, PCL, or a raster stream — and LPR then carries that already-formed data, plus a control file, to the remote lpd, which enqueues it and eventually feeds it to the device backend. LPD itself does not rasterize, page-describe, or transform content; the control-file letters merely hint at how the receiving spooler should treat each data file."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "LPD/LPR reaches printers in two ways. Historically, lpd ran on a UNIX host that owned a locally attached line printer or terminal-connected printer and served it to the network. Later, LPD was embedded directly into network-attached printers and print-server appliances, many of which expose a raw LPD listener on port 515 with one or more named queues."
    },
    {
      "kind": "paragraph",
      "text": "The protocol is print-data-agnostic: whatever bytes arrive in the data file are handed to the printer, so the sender must transmit data the printer understands (for example PostScript or PCL). LPD provides no page-level device feedback beyond basic queue status."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "paragraph",
      "text": "LPD/LPR began as core BSD UNIX infrastructure — the lpr, lpq, lprm, and lpc commands and the lpd daemon, configured via /etc/printcap. It spread widely across platforms:"
    },
    {
      "kind": "list",
      "items": [
        "UNIX / Linux: the original BSD lpd, and later LPRng, implemented it. Modern Linux and macOS use CUPS, which supports LPD both as a client (an lpd backend) and as a server (via the cups-lpd helper).",
        "macOS: ships CUPS, so it can both send to and, when enabled, receive LPD jobs.",
        "Windows: provided LPR/LPD support for years through optional components (such as the LPR Port Monitor and the LPD Print Service), primarily for interoperating with UNIX hosts and network printers."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Because LPR/LPD was implemented on essentially every major platform, it long served as the lowest-common-denominator way to print across heterogeneous networks."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF / PostScript / drivers"
    },
    {
      "kind": "paragraph",
      "text": "LPD/LPR is orthogonal to PDF, PostScript, and printer drivers — it transports whatever those produce. A driver or application renders a document to a device-ready stream (commonly PostScript or PCL), and LPR ships that stream unchanged. The control file's o letter, for example, flags a data file as PostScript for spoolers that special-case it, but LPD does not interpret or convert the content."
    },
    {
      "kind": "paragraph",
      "text": "PDF is not part of the classic LPD flow: a PDF is typically converted to PostScript, PCL, or raster by the sending system (or by a CUPS filter chain) before an LPD data file is sent. In CUPS specifically, when cups-lpd receives an LPD job it converts the request into IPP and lets the normal CUPS filter/driver pipeline handle rendering."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "LPD/LPR is legacy but still widely present. It remains useful for:"
    },
    {
      "kind": "list",
      "items": [
        "Talking to older or embedded network printers and print-server appliances that expose only an LPD queue on port 515.",
        "Interoperating with legacy UNIX spoolers and established enterprise print environments.",
        "Simple host-to-host job submission where richer protocols are unavailable."
      ]
    },
    {
      "kind": "paragraph",
      "text": "CUPS retains an lpd backend for sending and the cups-lpd receiver (activated by a super-server such as inetd, launchd, or systemd) for accepting LPD jobs and translating them to IPP. However, the modern default for network printing is IPP — including its driverless variants — and the CUPS documentation states that it does not recommend LPD when the printer or server supports any of the other protocols."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Ubiquity and interoperability: implemented across virtually all operating systems and countless network printers, making it a reliable lowest-common-denominator.",
        "Simplicity: a tiny, text-oriented protocol running over plain TCP, easy to implement.",
        "Maturity and stability: decades of deployment, well understood, and still supported by CUPS and LPRng.",
        "Built-in queue semantics: submit, list (short and long), remove/cancel, and start-queue operations are all part of the protocol."
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
        "No security: RFC 1179 does not address security; there is no authentication, authorization, integrity, or encryption. CUPS documentation characterizes LPD as offering no security and being a common attack vector.",
        "Weak host-trust model: the only access hint is the privileged source-port range (721–731) together with hostname fields, both easily spoofed and problematic behind NAT.",
        "Spool-then-send behavior: per CUPS, LPD typically stores an entire job before transmitting it, which can consume large amounts of disk and delay printing for very large jobs.",
        "Limited, largely one-way status: minimal job feedback compared with IPP, with no rich attributes, capability negotiation, or detailed job/printer state model.",
        "Constrained and loosely specified fields: job numbers 0–999, 31-octet limits on host and user names, and behaviors that diverge across implementations because RFC 1179 documents existing practice and leaves gaps.",
        "Non-standard status: an Informational RFC, never a formal Internet Standard, so implementation details vary."
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
        "IPP (Internet Printing Protocol): the modern HTTP-based successor with security and rich attributes. IPP/1.1 was defined in RFC 2910 (encoding/transport) and RFC 2911 (model/semantics), both published September 2000; RFC 8011 (2017) is the current model-and-semantics specification, with RFC 8010 covering encoding and transport.",
        "Raw / AppSocket / JetDirect (TCP port 9100): direct socket printing that, like LPD, offers no security.",
        "CUPS: the modern spooling system that implements both LPD (client and server) and IPP.",
        "LPRng: an enhanced re-implementation of the BSD LPR/LPD system supporting RFC 1179.",
        "Berkeley printing system: the lpr / lpq / lprm / lpc / lpd toolset plus /etc/printcap from which LPD grew."
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
          "period": "1983 (4.2BSD era)",
          "text": "BSD UNIX gains TCP/IP networking; the Berkeley printing system (lpr / lpd) is the basis for networked line-printer spooling. Exact version and attribution are disputed across sources."
        },
        {
          "period": "August 1990",
          "text": "RFC 1179, \"Line Printer Daemon Protocol,\" is published as Informational; editor L. McLaughlin III (The Wollongong Group), Network Printing Working Group. It documents existing LPD/LPR practice and specifies TCP port 515."
        },
        {
          "period": "1990s",
          "text": "Widespread cross-platform adoption; LPRng emerges as an enhanced BSD-compatible implementation; LPD listeners are embedded in network printers and print-server appliances."
        },
        {
          "period": "September 2000",
          "text": "IPP/1.1 is standardized in RFC 2910 and RFC 2911 as a richer, HTTP-based network-printing protocol."
        },
        {
          "period": "2000s onward",
          "text": "CUPS becomes the default spooler on Linux and macOS, supporting LPD via an lpd backend and the cups-lpd receiver while recommending IPP over LPD."
        },
        {
          "period": "2017",
          "text": "RFC 8011 restates the IPP/1.1 model and semantics (obsoleting RFC 2911); driverless IPP printing becomes the modern norm, further relegating LPD to legacy interoperability."
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
      "section": "tools",
      "slug": "cups"
    },
    {
      "section": "guides",
      "slug": "what-is-a-print-server"
    },
    {
      "section": "history",
      "slug": "early-network-printing-systems"
    },
    {
      "section": "guides",
      "slug": "what-is-postscript-printing"
    },
    {
      "section": "guides",
      "slug": "how-printer-drivers-work"
    }
  ],
  "faqs": [
    {
      "q": "What is LPD/LPR?",
      "a": "LPD/LPR is a minimal TCP-based network printing protocol documented in RFC 1179 (August 1990). \"LPD\" (Line Printer Daemon) is the server that listens for and services requests on TCP port 515; \"LPR\" (Line Printer Remote) is the client role that submits jobs. It is used to send print jobs to a remote spooler and to query or manipulate its queue."
    },
    {
      "q": "What port does LPD use?",
      "a": "A conforming LPD server listens on TCP port 515. RFC 1179 also requires the client to use a privileged source port in the range 721–731 as a weak trusted-host gate."
    },
    {
      "q": "Is LPD/LPR secure?",
      "a": "No. RFC 1179 states that \"Security issues are not discussed in this memo,\" and the protocol has no authentication, authorization, integrity, or encryption. CUPS documentation characterizes LPD as offering no security and being a common attack vector, and recommends IPP instead where available."
    },
    {
      "q": "How does an LPD print job work?",
      "a": "A print job consists of two files sent over the connection: a control file (named cfA plus a three-digit job number and the hostname) that describes the job with one ASCII command per line, and a data file (named dfA plus job number and hostname) that holds the actual bytes to print. LPD queues the data and feeds it to the printer without rendering or converting it."
    },
    {
      "q": "What replaced LPD/LPR?",
      "a": "The Internet Printing Protocol (IPP) is the modern successor, offering security, rich attributes, and capability negotiation over HTTP. IPP/1.1 was defined in RFC 2910 and RFC 2911 (2000) and restated in RFC 8011 (2017). CUPS still supports LPD for legacy interoperability but recommends IPP when a printer or server supports it."
    }
  ],
  "sources": [
    {
      "title": "RFC 1179: Line Printer Daemon Protocol",
      "url": "https://www.rfc-editor.org/rfc/rfc1179.html",
      "publisher": "IETF / RFC Editor"
    },
    {
      "title": "RFC 8011: Internet Printing Protocol/1.1: Model and Semantics",
      "url": "https://www.rfc-editor.org/rfc/rfc8011.html",
      "publisher": "IETF / RFC Editor"
    },
    {
      "title": "RFC 2911: Internet Printing Protocol/1.1: Model and Semantics",
      "url": "https://www.rfc-editor.org/rfc/rfc2911.html",
      "publisher": "IETF / RFC Editor"
    },
    {
      "title": "RFC 2910: Internet Printing Protocol/1.1: Encoding and Transport",
      "url": "https://www.rfc-editor.org/rfc/rfc2910.html",
      "publisher": "IETF / RFC Editor"
    },
    {
      "title": "CUPS: Using Network Printers",
      "url": "https://www.cups.org/doc/network.html",
      "publisher": "CUPS / OpenPrinting"
    },
    {
      "title": "cups-lpd(8) man page",
      "url": "https://www.cups.org/doc/man-cups-lpd.html",
      "publisher": "CUPS / OpenPrinting"
    },
    {
      "title": "4.4BSD System Manager's Manual: LPD Line Printer Spooler",
      "url": "https://docs-archive.freebsd.org/44doc/smm/07.lpd/paper-2.html",
      "publisher": "University of California, Berkeley (CSRG)"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "lpd",
    "lpr",
    "line printer daemon protocol",
    "rfc 1179",
    "tcp port 515",
    "berkeley printing system",
    "bsd lpd",
    "network printing protocol",
    "cups-lpd",
    "ipp successor",
    "print spooler protocol",
    "lpr command"
  ],
  "cluster": "printing-protocols"
};

export default entry;
