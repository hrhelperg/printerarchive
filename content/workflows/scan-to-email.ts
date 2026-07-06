import type { WorkflowEntry } from "@/lib/content/types";

const entry: WorkflowEntry = {
  "section": "workflows",
  "slug": "scan-to-email",
  "title": "Scan-to-email workflow",
  "description": "How networked multifunction printers scan paper and send it as an email attachment via their built-in SMTP client, from setup to OAuth-era constraints.",
  "summary": "Scan-to-email is a feature of networked multifunction printers, copiers, and standalone network scanners that digitizes a paper document at the device and delivers it as an email attachment directly from the control panel, without routing through a connected PC. The defining characteristic is that the device acts as an email client, not a server: it composes a MIME message and hands it to a configured SMTP server, whose infrastructure handles onward delivery. This page describes how the workflow chains image capture with SMTP submission, the three common submission patterns documented by Microsoft and Google (authenticated SMTP AUTH, connector relay, and direct/restricted send), typical output formats (PDF, searchable PDF, PDF/A, TIFF, JPEG), the roles of OCR and document management, and the practical constraints administrators face — attachment size caps, TLS and port requirements, deliverability (SPF/DKIM/DMARC), and provider send limits. The most significant recent change is the industry-wide shift from basic-authentication SMTP toward OAuth 2.0, which many older devices cannot perform, pushing administrators toward connector-based relay methods. All technical claims are drawn from primary sources including Microsoft Learn, Google Workspace Admin Help, the IETF (RFC 5321/821), ISO (PDF/A-1), and the Mopria Alliance.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Scan-to-email is a feature built into most networked multifunction printers (MFPs), copiers, and standalone network scanners that lets the device digitize a paper document and deliver it as an email attachment directly from the device's own control panel, without routing the scan through a connected PC first. The user places pages in the automatic document feeder (ADF) or on the flatbed, enters or selects one or more recipient addresses at the panel, and the device itself composes and transmits an email message with the scanned file attached."
    },
    {
      "kind": "paragraph",
      "text": "The defining technical characteristic is that the MFP acts as an email client (a message-originating device), not an email server. It connects outward to a configured SMTP server and hands off the message for delivery. Microsoft's documentation frames these devices precisely this way: network-connected scanners \"create email messages, but are incapable of sending those messages without help, because they aren't email servers.\""
    },
    {
      "kind": "paragraph",
      "text": "Scan-to-email sits alongside sibling \"scan-to\" destinations on the same devices — scan-to-folder (SMB/FTP), scan-to-network-storage, scan-to-cloud, and scan-to-USB. Email is historically the most universal of these because it needs no shared-folder permissions or client software on the recipient side."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "At a technical level, scan-to-email chains together two independent subsystems inside the device."
    },
    {
      "kind": "paragraph",
      "text": "Image capture and file assembly. The scan engine digitizes each page (via ADF or flatbed), applies image processing (deskew, despeckle, color/grayscale/monochrome conversion, resolution selection), and assembles the pages into a single output file — most commonly a multi-page PDF or multi-page TIFF. Optionally an OCR text layer is added if the device or an attached capture platform supports it."
    },
    {
      "kind": "paragraph",
      "text": "Email submission over SMTP. The device opens a TCP connection to a preconfigured outbound mail server and submits the message using the Simple Mail Transfer Protocol (SMTP), the internet standard for mail transmission originally specified in RFC 821 (1982) and updated by RFC 5321 (2008). The device typically negotiates a secure channel (STARTTLS on the submission port, or implicit TLS), authenticates if required, issues the MAIL FROM / RCPT TO / DATA sequence, and transmits the MIME-encoded message with the scan as a base64-encoded attachment."
    },
    {
      "kind": "paragraph",
      "text": "The MFP must know four things to submit mail: the SMTP server hostname, the TCP port, the encryption/security setting, and (usually) authentication credentials. Once the server accepts the message, onward delivery to the recipients is entirely the mail infrastructure's responsibility — the device's job ends at successful SMTP handoff."
    },
    {
      "kind": "paragraph",
      "text": "There are three common submission patterns, documented by Microsoft for Microsoft 365/Office 365 and mirrored by Google for Workspace:"
    },
    {
      "kind": "list",
      "items": [
        "Authenticated client SMTP submission (SMTP AUTH): the device signs in with a real mailbox's credentials and submits on the submission port. The mailbox address appears as the sender, and the message can be saved to Sent Items. Microsoft's settings for this are server smtp.office365.com, port 587 (recommended) or 25, with TLS required (TLS 1.2 or 1.3).",
        "SMTP relay via a connector: the device is authenticated by its static public IP address or a TLS certificate rather than a password, and relays through the mail platform. Microsoft uses the tenant's MX endpoint (e.g. contoso-com.mail.protection.outlook.com) on port 25; Google offers smtp-relay.gmail.com on ports 25, 465, or 587.",
        "Direct send / restricted relay: the device sends unauthenticated straight to the platform's MX host, delivering only to recipients within the organization's own domain. Microsoft calls this \"Direct Send\" (MX endpoint, port 25); Google's equivalent is the restricted server aspmx.l.google.com on port 25 with no TLS or auth required, IP-allowlisted and internal-recipients-only."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Step by step (conceptual, vendor-neutral)"
    },
    {
      "kind": "paragraph",
      "text": "Administrator setup (one time):"
    },
    {
      "kind": "list",
      "items": [
        "Connect the device to the network (Ethernet or Wi-Fi) and confirm it has an IP address and working DNS.",
        "Open the device's embedded web server (EWS) by browsing to its IP address, or use the control-panel menus. Vendors typically place these settings under a \"Network,\" \"Email,\" or \"SMTP\" section.",
        "Enter the outbound SMTP server hostname and port.",
        "Select the connection security (STARTTLS/TLS, SSL, or none) to match what the server requires.",
        "If the server requires authentication, enter the account username/email and password (or an app password / OAuth token where supported).",
        "Set the default \"From\" address, and optionally a display name, default subject, and default body text.",
        "Configure defaults for file format, resolution, and color mode; set any attachment size limit and address-book entries.",
        "Send a test scan and confirm it arrives."
      ]
    },
    {
      "kind": "paragraph",
      "text": "End-user operation (each scan):"
    },
    {
      "kind": "list",
      "items": [
        "Load the document in the ADF or on the flatbed glass.",
        "At the panel, choose the \"Scan to Email\" / \"Email\" function.",
        "Enter or select recipient address(es); optionally adjust subject, format, resolution, or color.",
        "Preview or adjust scan settings if the device offers it.",
        "Press Start; the device scans, builds the file, and submits it over SMTP.",
        "The panel reports success or an error (authentication failure, size exceeded, connection refused, etc.)."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Formats and output"
    },
    {
      "kind": "paragraph",
      "text": "PDF is the dominant output for scan-to-email — a single container that holds multiple pages, supports compression, and is universally readable. Devices commonly offer:"
    },
    {
      "kind": "list",
      "items": [
        "Image-only PDF (each page a scanned raster image).",
        "Searchable PDF (image plus an invisible OCR text layer), when OCR is available.",
        "PDF/A, the ISO-standardized archival subset (PDF/A-1 is ISO 19005-1:2005) intended for long-term preservation; it is self-contained and can retain searchable text."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Other formats appear alongside PDF:"
    },
    {
      "kind": "list",
      "items": [
        "TIFF (Tagged Image File Format) is the traditional document/fax raster format; multi-page TIFF has long been used in document-imaging and fax-adjacent workflows.",
        "JPEG is offered for single-page or photographic scans where a compact lossy image is acceptable.",
        "Some devices also offer XPS, or office formats via an attached OCR/capture platform."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Output size is governed by resolution (dpi), color mode (monochrome/grayscale/color), and compression. Monochrome documents at 200–300 dpi produce small files suited to email; full-color high-dpi scans grow quickly and can exceed attachment limits."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and OCR"
    },
    {
      "kind": "paragraph",
      "text": "PDF is central because scan-to-email needs one portable, multi-page container that any recipient can open. Plain scanned PDFs are images — not text — so they aren't searchable or copyable until optical character recognition (OCR) is applied. OCR analyzes the raster image and produces a text layer positioned behind the image, yielding a \"searchable PDF\" that looks identical but is indexable and selectable."
    },
    {
      "kind": "paragraph",
      "text": "Where the device firmware lacks OCR, the workflow is often completed downstream by a capture/print-management platform or a server-side tool — for example, the open-source OCRmyPDF, which adds a text layer and can emit PDF/A. OCR quality depends heavily on scan resolution, contrast, and clean deskewed input."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to document management"
    },
    {
      "kind": "paragraph",
      "text": "Scan-to-email is frequently the on-ramp to a document-management system (DMS) / enterprise content management (ECM) workflow. Two common patterns recur:"
    },
    {
      "kind": "list",
      "items": [
        "Email-to-capture: the scan is emailed to a monitored mailbox that a capture system watches, extracts the attachment, OCRs it, applies metadata/indexing, and files it into the DMS.",
        "Parallel to scan-to-folder: many organizations prefer scan-to-folder or a dedicated capture connector for high-volume, indexed archival, and reserve scan-to-email for ad-hoc sharing."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Searchable PDF/A output makes scan-to-email compatible with long-term records retention, since the archival format and the embedded text layer support future indexing and retrieval."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Universality: every recipient has email; no shared folders, VPN, or client software required.",
        "Simplicity for users: a few taps at the panel; no PC needed at scan time.",
        "Speed of sharing: documents reach internal and external recipients directly.",
        "No intermediate storage to manage for the sender in the simplest case.",
        "Standards-based: rides on SMTP and standard file formats, so it interoperates broadly."
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
        "Attachment size limits. Both the sending platform and the recipient's server impose message-size caps; large color scans can be rejected or silently dropped. This is the single most common failure mode.",
        "Authentication complexity. Modern mail providers are retiring username/password (basic) SMTP AUTH in favor of OAuth 2.0, which many older devices cannot perform.",
        "Deliverability / spam filtering. Because the device sends on behalf of a domain, messages can be flagged as spam or spoofing unless SPF, DKIM, and DMARC are configured; relay and direct-send methods explicitly warn about this.",
        "Sender limits / throttling. Providers cap recipients-per-day and messages-per-minute.",
        "Security exposure. A device configured with a real mailbox password stores that credential; a compromised MFP can leak it or be abused to send mail.",
        "No native end-to-end encryption of content. The attachment travels as ordinary email unless additional encryption is layered on; TLS protects the transport hop, not the message end-to-end.",
        "Limited feedback. Devices give minimal delivery diagnostics; a message accepted by the server but later bounced may not surface at the panel."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Practical considerations"
    },
    {
      "kind": "paragraph",
      "text": "Pick the right submission method:"
    },
    {
      "kind": "list",
      "items": [
        "Authenticated SMTP AUTH (submission port 587 with TLS) — simplest where the provider still allows it and OAuth isn't required.",
        "SMTP relay via connector (IP- or certificate-authenticated) — scales past mailbox limits and avoids storing a password, but needs a static public IP or certificate. Microsoft notes that a device that isn't a full mail transfer agent is often better served by client submission than by acting as a relaying server.",
        "Direct/restricted send — internal recipients only, no auth, IP-allowlisted."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Ports and TLS: use port 587 for authenticated submission with STARTTLS, 25 for server-to-server relay/direct-send, and 465 for implicit SSL where the provider supports it. Microsoft explicitly warns that a device that recommends or defaults to port 465 likely does not support the TLS versions Microsoft 365 requires for client SMTP submission — this caution is specific to Microsoft 365 client submission, not a universal statement about port 465, which is a valid implicit-TLS submission port elsewhere (e.g. Gmail). Ensure the device supports TLS 1.2 or 1.3; ISPs and firewalls often block port 25 outbound."
    },
    {
      "kind": "paragraph",
      "text": "Authentication realities: verify SMTP AUTH is even enabled — Microsoft disables it by default for organizations created after January 2020, and it is enabled per-mailbox. Where OAuth is mandated and unsupported by the device, use an app password (if the provider allows) or move to relay."
    },
    {
      "kind": "paragraph",
      "text": "Deliverability: publish or adjust SPF, and configure DKIM/DMARC, to include the sending IP or platform; otherwise scans land in Junk."
    },
    {
      "kind": "paragraph",
      "text": "Send-As permission: if the \"From\" address differs from the authenticating mailbox, grant Send As, or messages bounce (Microsoft NDR 5.7.60 Client doesn't have permissions to send as this sender)."
    },
    {
      "kind": "paragraph",
      "text": "File hygiene: default to monochrome/grayscale at 200–300 dpi and compressed PDF to stay under size caps; reserve color/high-dpi for when needed."
    },
    {
      "kind": "paragraph",
      "text": "Address management: maintain the device address book / LDAP lookup to reduce mis-typed recipients, and restrict who can add \"From\"/recipient values."
    },
    {
      "kind": "paragraph",
      "text": "Representative provider limits (verify against current provider docs, as these change):"
    },
    {
      "kind": "list",
      "items": [
        "Microsoft 365 client SMTP submission: 10,000 recipients/day and 30 messages/minute; requires TLS 1.2/1.3, port 587 or 25.",
        "Google Workspace SMTP relay (smtp-relay.gmail.com, ports 25/465/587): up to 10,000 recipients per user per day.",
        "Google Workspace Gmail SMTP (smtp.gmail.com, ports 465 SSL / 587 TLS): 2,000 messages/day, requires an app password.",
        "Google restricted Gmail SMTP (aspmx.l.google.com, port 25): no TLS/auth, internal recipients only, IP-allowlisted."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Scan-to-email remains a standard MFP capability, but the biggest recent shift is the industry-wide move from basic authentication to OAuth 2.0 on major mail platforms."
    },
    {
      "kind": "list",
      "items": [
        "Google turned off access for \"less secure apps\" (basic-auth access via SMTP/IMAP/POP/CalDAV/CardDAV), directing device owners to OAuth, app passwords, or SMTP relay. Google's transition documentation cites March 14, 2025 as the point when less-secure-app access was turned off for all Google Accounts, while Google's printer/scanner guidance states that Google Workspace accounts no longer support less secure apps as of May 1, 2025.",
        "Microsoft has scheduled deprecation of basic-authentication client SMTP submission in Exchange Online, recommending OAuth, High Volume Email (internal), Azure Communication Services Email, or on-premises/relay alternatives instead."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Many deployed MFPs — especially older units — cannot perform OAuth, so administrators increasingly route these devices through SMTP relay/connector methods (IP- or certificate-authenticated) or a mail-relay service, rather than storing mailbox passwords."
    },
    {
      "kind": "paragraph",
      "text": "Meanwhile the underlying scan pipeline itself is served by network scan standards such as driverless eSCL (an XML-over-HTTP protocol published and maintained through the Mopria Alliance) and the long-established TWAIN API for host-driven scanning. Scan-to-email specifically, however, is a firmware feature layered on top of the device's own SMTP client rather than any of these scan protocols."
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
          "period": "1982",
          "text": "SMTP first specified in RFC 821, establishing the mail-transmission protocol that scan-to-email later relies on."
        },
        {
          "period": "Early 1990s",
          "text": "the TWAIN scanning API/standard is introduced for communication between applications and imaging devices (TWAIN 1.0 is widely dated to 1992; treat the era as approximate)."
        },
        {
          "period": "2005",
          "text": "PDF/A archival standard published as ISO 19005-1:2005 (PDF/A-1), later adopted for archival scanned output."
        },
        {
          "period": "2008",
          "text": "RFC 5321 published (October 2008), the current SMTP specification, obsoleting RFC 2821 and listing RFC 821 among obsoleted documents."
        },
        {
          "period": "2013",
          "text": "the Mopria Alliance is founded, later publishing driverless network scanning (eSCL) alongside driverless printing."
        },
        {
          "period": "2025",
          "text": "Google turns off less-secure-app access for all Google Accounts (March 14, 2025), with Workspace accounts no longer supporting less secure apps as of May 1, 2025; Microsoft schedules deprecation of basic-auth client SMTP submission in Exchange Online."
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
      "slug": "scan-to-folder"
    },
    {
      "section": "workflows",
      "slug": "scan-to-cloud"
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
      "section": "tools",
      "slug": "pdf-a"
    },
    {
      "section": "tools",
      "slug": "escl"
    }
  ],
  "faqs": [
    {
      "q": "Does a scanner send email by itself, or does it need a mail server?",
      "a": "The device does not deliver mail on its own. It acts as an email client: it composes a MIME message and submits it to a configured SMTP server, which then handles delivery. Microsoft describes these devices as able to create email messages but incapable of sending them without a mail server, because they are not email servers themselves."
    },
    {
      "q": "Which SMTP port and encryption should a scan-to-email device use?",
      "a": "Use port 587 with STARTTLS for authenticated client submission, port 25 for server-to-server relay or direct send, and port 465 for implicit SSL where the provider supports it. Devices should support TLS 1.2 or 1.3. Microsoft warns that a device defaulting to port 465 may not support the TLS versions Microsoft 365 requires for client submission, and notes that port 25 outbound is often blocked by firewalls and ISPs."
    },
    {
      "q": "Why do scan-to-email messages fail or land in spam?",
      "a": "The most common failure is exceeding attachment size limits on the sending or receiving server. Messages can also be flagged as spam or spoofing if SPF, DKIM, and DMARC are not configured for the sending IP or platform. A mismatch between the From address and the authenticating mailbox produces a bounce such as Microsoft NDR 5.7.60. Provider throttling limits (recipients per day, messages per minute) can also block sends."
    },
    {
      "q": "How does the shift to OAuth 2.0 affect older scanners?",
      "a": "Major mail platforms are retiring basic username/password SMTP authentication in favor of OAuth 2.0. Google turned off less-secure-app access in 2025, and Microsoft has scheduled deprecation of basic-auth client SMTP submission in Exchange Online. Many older MFPs cannot perform OAuth, so administrators route them through SMTP relay or connector methods authenticated by static IP or a TLS certificate, or use app passwords where the provider still allows them."
    },
    {
      "q": "What file formats does scan-to-email produce?",
      "a": "PDF is dominant because it is a portable, multi-page, compressible container that any recipient can open. Variants include image-only PDF, searchable PDF (with an OCR text layer), and PDF/A (ISO 19005-1:2005) for archival preservation. Devices also commonly offer multi-page TIFF and JPEG, and some support XPS or office formats via an attached OCR/capture platform."
    }
  ],
  "sources": [
    {
      "title": "Set up a multifunction device or application to send email using Microsoft 365 or Office 365",
      "url": "https://learn.microsoft.com/en-us/exchange/mail-flow-best-practices/how-to-set-up-a-multifunction-device-or-application-to-send-email-using-microsoft-365-or-office-365",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "Send email from a printer, scanner, or app",
      "url": "https://support.google.com/a/answer/176600",
      "publisher": "Google Workspace Admin Help"
    },
    {
      "title": "Transition from less secure apps to OAuth",
      "url": "https://support.google.com/a/answer/14114704",
      "publisher": "Google Workspace Admin Help"
    },
    {
      "title": "RFC 5321 — Simple Mail Transfer Protocol",
      "url": "https://datatracker.ietf.org/doc/html/rfc5321",
      "publisher": "IETF"
    },
    {
      "title": "RFC 821 — Simple Mail Transfer Protocol (original)",
      "url": "https://datatracker.ietf.org/doc/html/rfc821",
      "publisher": "IETF"
    },
    {
      "title": "ISO 19005-1:2005 (PDF/A-1)",
      "url": "https://www.iso.org/standard/38920.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 19005-1 (PDF/A-1) overview",
      "url": "https://pdfa.org/resource/iso-19005-1-pdf-a-1/",
      "publisher": "PDF Association"
    },
    {
      "title": "Mopria eSCL Specification",
      "url": "https://mopria.org/mopria-escl-specification",
      "publisher": "Mopria Alliance"
    },
    {
      "title": "Enable or disable authenticated client SMTP submission (SMTP AUTH) in Exchange Online",
      "url": "https://learn.microsoft.com/en-us/exchange/clients-and-mobile-in-exchange-online/authenticated-client-smtp-submission",
      "publisher": "Microsoft Learn"
    },
    {
      "title": "OCRmyPDF — adds an OCR text layer to scanned PDFs, with PDF/A output",
      "url": "https://github.com/ocrmypdf/ocrmypdf",
      "publisher": "OCRmyPDF project"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "scan to email",
    "smtp submission",
    "multifunction printer",
    "mfp scanning",
    "smtp auth",
    "smtp relay",
    "direct send",
    "searchable pdf",
    "pdf/a",
    "starttls",
    "oauth 2.0 email",
    "network scanner"
  ],
  "cluster": "scanning-workflows",
  "modernTools": [
    "pdf-editor"
  ],
  "goal": "A device feature that scans paper and sends it as an email attachment via the machine's own SMTP client.",
  "toolsUsed": [
    "A scanner or multifunction device",
    "SMTP / email access"
  ]
};

export default entry;
