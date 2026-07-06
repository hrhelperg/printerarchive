import type { WorkflowEntry } from "@/lib/content/types";

const entry: WorkflowEntry = {
  "section": "workflows",
  "slug": "scan-to-folder",
  "title": "Scan-to-folder workflow",
  "description": "How scan-to-folder works: MFPs write scans directly to an SMB or FTP shared folder as the ingestion point for document pipelines.",
  "summary": "Scan-to-folder is a workflow in which a scanner or multifunction printer (MFP) digitizes a document and writes the resulting file directly into a shared folder on a server, PC, or NAS, acting as a network file-sharing client rather than requiring a PC-initiated \"pull\" scan or an email step. The two dominant transports are SMB (the native Windows file-sharing protocol, also served by macOS, Samba, and NAS appliances) and FTP with its secured variants FTPS and SFTP. Because these transports are standardized, the workflow is implemented consistently across essentially every major MFP brand. The deposited file lands in a known filesystem location, which makes scan-to-folder the classic \"hot folder\" ingestion point for OCR, indexing, and document management pipelines. Modern relevance is shaped by the industry-wide move off SMBv1 to SMB2/SMB3, the growth of encrypted transports, and the coexistence of cloud and connector destinations that have not displaced the shared-folder pattern.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Scan-to-folder (also called scan-to-network-folder, scan-to-SMB, or scan-to-FTP) is a workflow in which a scanner or multifunction printer (MFP) digitizes a paper document and deposits the resulting file directly into a shared folder on a network file server, a desktop computer, or a network-attached storage (NAS) device — without an intermediate PC-side \"pull\" scan or an email step. The device itself acts as a network client: it opens a session to a file-sharing service, authenticates, and writes the file into a pre-designated directory."
    },
    {
      "kind": "paragraph",
      "text": "The two dominant transport mechanisms are SMB (Server Message Block), the native Windows file-sharing protocol, which is also served by macOS, Linux/Samba, and most NAS appliances, and FTP (File Transfer Protocol) together with its secured variants FTPS and SFTP. The workflow is implemented across essentially every major MFP brand — Brother, Canon, HP, Konica Minolta, Ricoh, Sharp, Xerox and others — and while the configuration screens differ, the underlying mechanics are consistent because the transport protocols themselves are standardized."
    },
    {
      "kind": "paragraph",
      "text": "The defining characteristic — and the reason the workflow exists — is that the scan destination is a shared filesystem location rather than an inbox or a locally attached application. This makes scan-to-folder a foundation of most \"paperless office\" and document-capture pipelines: scanned files land in a known folder where they can be indexed, OCR'd, routed, or ingested by a document management system."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "At a technical level, the MFP contains a network client stack for the chosen protocol. When a user scans, the device:"
    },
    {
      "kind": "list",
      "items": [
        "Captures the page(s) on the imaging sensor and renders them into a file (typically PDF, TIFF, or JPEG).",
        "Opens a network connection to the destination host over the protocol's ports. For SMB, this is TCP 445 (direct TCP hosting) or the legacy TCP 139 (NetBIOS over TCP); both transports are described in the MS-SMB2 specification. For FTP, this is the control channel on TCP 21 (the IANA default) with a separate data channel.",
        "Authenticates against the target. For SMB this is a Windows/Samba credential exchange, historically via NTLM and, in domain environments, Kerberos. For FTP it is a username and password sent over the control channel.",
        "Traverses to the target directory — the shared folder, addressed by its share name and any sub-path — and creates and writes the file there, subject to the share and filesystem permissions granted to the authenticating account.",
        "Closes the session."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Under SMB the protocol is stateful and session-oriented. Per Microsoft's [MS-SMB2] specification, a client establishes a connection to a server, establishes an authenticated context on that connection, and then issues a variety of requests to access files, printers, and named pipes. The MFP is exercising exactly the file-open, file-modify, and file-close request types that any SMB client would; the scanner is, in effect, a headless SMB (or FTP) client whose only job is to write one file."
    },
    {
      "kind": "paragraph",
      "text": "FTP works differently under the hood: it separates a control connection (commands and login) from a data connection (the file bytes), a model established by RFC 959. The MFP typically exposes a passive mode toggle that governs how the data connection is established; passive mode is generally required when the scanner sits behind NAT or a firewall, because the client rather than the server initiates the data channel."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Step by step (conceptual, vendor-neutral)"
    },
    {
      "kind": "paragraph",
      "text": "The setup and use pattern is consistent across manufacturers, even though menu labels vary."
    },
    {
      "kind": "paragraph",
      "text": "A. Prepare the destination (server side)"
    },
    {
      "kind": "list",
      "items": [
        "Create a folder on the target computer, server, or NAS and enable file sharing on it (an SMB share, or an FTP directory on an FTP service).",
        "Ensure the file-sharing service is running and reachable. SMB is enabled by default on Windows; on macOS and Linux it may need to be turned on explicitly.",
        "Create or designate a service account with permission to write to that folder, noting both the share-level permission and the underlying filesystem (NTFS/POSIX) permission — both must allow the account to create and write files."
      ]
    },
    {
      "kind": "paragraph",
      "text": "B. Register the destination on the scanner"
    },
    {
      "kind": "list",
      "items": [
        "In the device control panel or its Embedded Web Server (the browser-based admin page), create an address-book entry, profile, or contact for the destination.",
        "Enter the host (hostname or IP — hostname is generally preferred so the entry survives IP changes), the port, the share name or path, and the login credentials for the service account. For domain environments the login is entered as DOMAIN\\user; for a workgroup PC it is PCNAME\\user.",
        "Select the transport (SMB or FTP) and, where offered, the SMB version and the authentication method (NTLM/NTLMv2 or Kerberos). For FTP, set passive mode as required by the network.",
        "Configure file settings: file type, resolution, color mode, single- versus multi-page output, and the file-name rule."
      ]
    },
    {
      "kind": "paragraph",
      "text": "C. Scan"
    },
    {
      "kind": "list",
      "items": [
        "At the device, place the original, choose the registered destination, and start the scan.",
        "The device connects, authenticates, writes the file, and reports success or an error."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Formats and output"
    },
    {
      "kind": "paragraph",
      "text": "Scan-to-folder devices typically write one of several formats:"
    },
    {
      "kind": "list",
      "items": [
        "PDF — the most common default; includes image-only PDF and, where OCR is available, searchable PDF (an image with an invisible text layer). Multi-page documents are usually delivered as a single PDF.",
        "TIFF — often used for archival workflows; supports multiple pages in one file.",
        "JPEG — single-image output, used for photos or single pages.",
        "PNG, and on some devices XPS or Office document formats when OCR conversion to editable documents is offered."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Output controls exposed at the device generally include resolution (dpi), color/grayscale/black-and-white mode, page size, compression, single-file versus one-file-per-page, and duplex."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and OCR"
    },
    {
      "kind": "paragraph",
      "text": "Scan-to-folder and PDF are tightly coupled in practice: PDF is the near-universal default container because it preserves page fidelity, supports multi-page documents in one file, and is broadly readable."
    },
    {
      "kind": "paragraph",
      "text": "OCR (optical character recognition) is the value-add layer. Many MFPs can run OCR on-device and produce a searchable PDF — an image of the page with a hidden, selectable, indexable text layer beneath it — rather than a flat image. This is what makes a deposited file findable by full-text search and consumable by downstream indexing, and vendor manuals from makers such as Ricoh and Epson document producing searchable PDFs directly from the scan."
    },
    {
      "kind": "paragraph",
      "text": "On-device OCR can also enable automatic file naming: some vendors extract a text string from the first page and use it as the filename, a behavior documented in Canon and Ricoh manuals. A practical limitation reported by vendors and integrators is that firmware-based scan-to-folder naming is often restricted to sequential numbering plus a date/time component, whereas richer naming rules may only be available through PC-side scan software; this is a vendor-typical pattern rather than a universal rule. Where OCR is unavailable, the folder receives image-only files that must be OCR'd later by server-side software."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to document management"
    },
    {
      "kind": "paragraph",
      "text": "Scan-to-folder is the classic \"hot folder\" ingestion point for document management and records systems. Because the output lands in a defined filesystem location, a downstream process — a document-management watcher, a capture and routing product, a script, or a workflow engine — can monitor that folder, pick up new files, apply OCR, classification, and metadata, and file them into the repository."
    },
    {
      "kind": "paragraph",
      "text": "Many enterprise workflows deliberately point the scanner at an SMB share or FTP directory that a capture platform watches, so the folder acts as the seam between the physical-to-digital step and the automated document pipeline. Some vendors extend the same mechanism directly to SharePoint or cloud connectors, but the shared-folder pattern remains the lowest-common-denominator integration that works with virtually any back-end."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Centralization and volume. Files land directly on a server or NAS, avoiding mailbox size limits; vendor documentation notes that SMB is well suited to sending large scan volumes that would be impractical by email.",
        "Vendor-neutral, open transports. SMB and FTP are standardized, so the same conceptual workflow works across brands and across Windows, macOS, Linux, and NAS destinations.",
        "No PC-initiated step. The user does not need to sit at a computer to \"pull\" the scan; the device pushes the file autonomously.",
        "Pipeline-ready. A known folder is a natural ingestion point for OCR, indexing, and document-management automation.",
        "Multi-user. A single MFP can serve many registered destinations and users from its address book."
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
        "Configuration fragility. Scan-to-folder is sensitive to permissions, credentials, and protocol-version mismatches. Common failure causes documented by vendors and integrators include wrong or expired credentials, share permissions that allow \"Everyone\" while the underlying filesystem permissions block write/create, use of mapped drive letters instead of UNC paths, wrong Kerberos realm or clock skew, and NTLM or dialect mismatches.",
        "SMBv1 deprecation. Legacy devices that speak only SMBv1 are increasingly locked out. Microsoft does not install SMBv1 by default starting with Windows 10 version 1709 and Windows Server 2019, and strongly discourages its use because of known security issues involving ransomware and other malware. Older MFPs stuck on SMBv1 fail against modern hosts unless SMBv1 is re-enabled (not recommended) or the device firmware is updated to negotiate SMB2/SMB3.",
        "Plaintext FTP. Classic FTP transmits credentials and data in the clear, exposing them to network eavesdropping; it is unsuitable for sensitive documents unless replaced by FTPS or SFTP.",
        "Credential lifecycle. A stored service-account password on the device breaks the workflow when the account's password rotates or expires.",
        "Limited on-device naming and metadata. As noted, firmware naming rules are often restricted to numbering and date/time; richer metadata usually comes from downstream software."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Practical considerations"
    },
    {
      "kind": "list",
      "items": [
        "Use SMB2/SMB3, not SMBv1. Where the setting exists, configure the device's minimum SMB version to 2.0 and allow up to 3.x, to align with modern, secure defaults.",
        "Prefer encrypted transports. Where the network or data is sensitive, prefer SMB3 with encryption, FTPS, or SFTP over plain FTP. SFTP (over SSH, commonly port 22) encrypts both credentials and data over a single connection; FTPS secures the traditional FTP channels with TLS; plain FTP encrypts nothing.",
        "Use a dedicated service account with least-privilege access to the target share, and a password policy compatible with a stored credential or a managed rotation process.",
        "Address by hostname, not IP, so entries survive DHCP changes, and use UNC-style paths rather than mapped drives.",
        "Verify both layers of permission (share and filesystem) — the account must be able to create and write, not merely read.",
        "Match authentication to the environment — NTLMv2 for workgroup or standalone PCs, Kerberos in Active Directory, with the correct realm and synchronized clocks.",
        "Set passive mode for FTP behind NAT or firewalls, and open the appropriate ports (SMB 445/139; FTP 21 plus data ports; SFTP 22).",
        "Choose searchable PDF as the output format where OCR is available, to make files findable downstream."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Scan-to-folder remains a core, actively supported feature on current MFPs and is the backbone of most on-premises document-capture workflows. Its relevance today is shaped by three forces: the industry-wide move off SMBv1 to SMB2/SMB3, which has forced firmware updates and retired some older hardware; a growing emphasis on encrypted transports (SMB3 encryption, SFTP, FTPS) for compliance; and the rise of cloud and connector-based destinations such as SharePoint and cloud storage that coexist with, but have not displaced, the shared-folder pattern. Because SMB and FTP are open and near-universal, scan-to-folder continues to be one of the most portable integration points between paper and digital systems."
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
          "period": "1985",
          "text": "RFC 959 specifies the File Transfer Protocol, establishing the separate control-channel and data-channel model later reused by scan-to-FTP."
        },
        {
          "period": "Windows Vista / Windows Server 2008 era",
          "text": "SMB 2.0 is introduced."
        },
        {
          "period": "Windows 7 / Windows Server 2008 R2 era",
          "text": "SMB 2.1 adds enhancements such as improved client caching and branch-cache hashes."
        },
        {
          "period": "Windows 8 / Windows Server 2012 era",
          "text": "SMB 3.0 is introduced, adding per-share encryption, multichannel, RDMA (SMB Direct), and improved failover (per MS-SMB2)."
        },
        {
          "period": "Windows 8.1 / Windows Server 2012 R2 era",
          "text": "SMB 3.0.2 adds features such as asymmetric-share detection and unbuffered I/O (per MS-SMB2)."
        },
        {
          "period": "Windows 10 / Windows Server 2016 era",
          "text": "SMB 3.1.1 adds negotiated encryption and integrity algorithms and pre-authentication integrity, with later additions including message compression and QUIC transport (per MS-SMB2)."
        },
        {
          "period": "Windows 10 version 1709 and Windows Server 2019",
          "text": "SMBv1 is no longer installed by default, and Microsoft publicly discourages its use due to security vulnerabilities (per Microsoft Learn)."
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
      "section": "workflows",
      "slug": "scan-to-email"
    },
    {
      "section": "workflows",
      "slug": "scan-to-cloud"
    },
    {
      "section": "guides",
      "slug": "network-scanners"
    },
    {
      "section": "guides",
      "slug": "multifunction-scanning"
    },
    {
      "section": "workflows",
      "slug": "scan-to-searchable-pdf"
    },
    {
      "section": "glossary",
      "slug": "ocr"
    }
  ],
  "sources": [
    {
      "title": "Detect, enable, and disable SMBv1, SMBv2, and SMBv3 in Windows",
      "url": "https://learn.microsoft.com/en-us/windows-server/storage/file-server/troubleshoot/detect-enable-and-disable-smbv1-v2-v3",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "SMBv1 not installed by default in Windows Server and Windows",
      "url": "https://learn.microsoft.com/windows-server/storage/file-server/troubleshoot/smbv1-not-installed-by-default-in-windows",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "[MS-SMB2]: Overview (Server Message Block Protocol Versions 2 and 3)",
      "url": "https://learn.microsoft.com/en-us/openspecs/windows_protocols/ms-smb2/4287490c-602c-41c0-a23e-140a1f137832",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "What is SMB File Sharing for Windows and Windows Server?",
      "url": "https://learn.microsoft.com/windows-server/storage/file-server/file-server-smb-overview",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "RFC 959: File Transfer Protocol",
      "url": "https://www.rfc-editor.org/rfc/rfc959",
      "publisher": "IETF / RFC Editor"
    },
    {
      "title": "Scan to Network Folder using the SMB protocol",
      "url": "https://support.brother.com/g/s/id/smb/stn/stn-a-scan.html?c=us&lang=en",
      "publisher": "Brother"
    },
    {
      "title": "How To Set Up Scanning to a Shared Windows Folder Using SMB",
      "url": "https://www.support.xerox.com/en-us/article/KB0117554",
      "publisher": "Xerox"
    },
    {
      "title": "Configure a scan-to-network or scan-to-FTP folder",
      "url": "https://support.hp.com/us-en/document/c04529716",
      "publisher": "HP"
    },
    {
      "title": "Scanner: Using Scan to SMB with Windows Shared Folder",
      "url": "https://manuals.konicaminolta.eu/ineo-plus-2060L-2060-2070/EN/contents/id19-_102709244.html",
      "publisher": "Konica Minolta"
    },
    {
      "title": "Configuring the Machine for Scanning to FTP Server",
      "url": "https://oip.manual.canon/USRMA-0336-zz-SS-enUS/contents/SS729_network_215configuringthemachineforscanningtoftpserver.html",
      "publisher": "Canon"
    },
    {
      "title": "Setting a File Name (Scanning)",
      "url": "https://oip.manual.canon/USRMA-1816-zz-CS-3500-enUV/contents/devu-scan-useful-file_name.html",
      "publisher": "Canon"
    },
    {
      "title": "Scanning an Original as a PDF File with Embedded Text Data (OCR)",
      "url": "http://support.ricoh.com/bb_v1oi/pub_e/oi_view/0001077/0001077458/view/scanner/int/ocr.htm",
      "publisher": "Ricoh"
    },
    {
      "title": "Saving Scanned Documents as a Searchable PDF",
      "url": "https://files.support.epson.com/docid/cpd5/cpd51359/source/scanners/source/scanning_software/tasks/epson_scan_2/escan2_creating_searchable_pdf.html",
      "publisher": "Epson"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "scan to folder",
    "scan to network folder",
    "scan to smb",
    "scan to ftp",
    "smb",
    "ftp",
    "sftp",
    "ftps",
    "multifunction printer",
    "mfp scanning",
    "document capture",
    "hot folder"
  ],
  "cluster": "scanning-workflows",
  "modernTools": [
    "zip-rar"
  ],
  "goal": "A workflow where a scanner or MFP writes digitized documents straight into a shared network folder.",
  "toolsUsed": [
    "A scanner or multifunction device",
    "A shared network folder (SMB or FTP)"
  ]
};

export default entry;
