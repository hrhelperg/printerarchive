import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  section: "guides",
  slug: "fax-servers-and-inbound-routing",
  title: "Fax Servers: Pooled Lines and the Inbound Routing Problem",
  description:
    "Fax servers pooled outbound lines cleanly, but Group 3 carries no recipient field — so inbound routing had to be inferred from DID, DTMF, CSID/TSID or a subaddress.",
  summary:
    "A fax server let an organisation run facsimile for many people without putting a machine on every desk. Sending was the easy half: a shared pool of lines, a queue in front of it, and a scheduler. Receiving was not, and never became so. A Group 3 fax carries an image and a set of station identifiers; it does not carry a field that says who the fax is for. Every fax server therefore had to guess the addressee from something outside the page — a dedicated number, digits handed over by the switch, the sender's identifier, or a subaddress most sending machines never sent. This page treats that asymmetry as the defining fact of the technology rather than a footnote to it.",
  difficulty: "intermediate",
  estimatedTime: "9 min read",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "Outbound faxing from many desks over pooled lines is a queueing problem, and the client/server fax systems of the period solved it in a recognisable, durable way.",
        "Inbound was structurally different: Group 3 facsimile carries no recipient field, so the addressee had to be inferred from call metadata rather than read off the document.",
        "Microsoft's FAX_ROUTE structure is a useful inventory of what an inbound routing extension actually received: called- and transmitting-station identifiers, caller ID, a dialled number with an optional subaddress, device details, and a ReceiverName field the documentation never traces to anything in the call.",
        "Direct inward dialling dominated in practice. ITU-T T.33 defined a subaddress-based answer in 1996, but sending machines rarely supported it, so it should not be described as how routing was actually done.",
        "The fax server generally sat alongside the fax machines rather than replacing them — one of its documented routing options was to print the received fax on a real printer.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "Two problems that share a wire",
    },
    {
      kind: "paragraph",
      text: "It is easy to describe a fax server as a single thing: a box with telephone lines on one side and a local network on the other. Structurally it was two systems that happened to share hardware. The outbound system took jobs from many users, held them, ordered them, and dealt them out to whichever line was free. The inbound system took calls arriving on those same lines and tried to decide who each one belonged to. The first is a scheduling problem with a well-understood shape. The second is an addressing problem that the underlying protocol simply does not provide the information to solve.",
    },
    {
      kind: "paragraph",
      text: "That asymmetry explains most of what looks arbitrary about fax-server design — the licence-and-line arithmetic, the odd insistence on one telephone number per employee, the persistence of a person whose job was to look at incoming faxes and walk them to a desk. None of it was inefficiency. It was the cost of routing a document format that was never designed to be routed.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The half that worked: pooling lines for outbound",
    },
    {
      kind: "paragraph",
      text: "The outbound model is stated plainly in the primary sources. The HylaFAX project describes itself as an enterprise-class system for sending and receiving facsimiles in which the fax modems may reside on a single networked machine while clients submit jobs from any other machine, with support for multiple modems and heavy traffic. Microsoft's Fax Service documentation describes the same shape from the other side of the industry: a TAPI-compliant service that provides fax functionality for clients on a local area network, letting users send and receive using either a local fax device or a shared network fax device, and archiving sent faxes.",
    },
    {
      kind: "paragraph",
      text: "Once a job is a queue entry rather than a person standing at a machine, the ordinary machinery of scheduling becomes available: retries on busy or no-answer, priority, off-peak deferral, per-user and per-department accounting, and a record of what was sent and whether it was confirmed. The economics that justified the purchase followed from this — fewer telephone lines carrying more traffic, no walk to the machine room, and an audit trail that a physical fax machine could not produce. It is worth resisting the temptation to fold this into a paperless-office narrative. Fax servers were bought to reduce line cost, save time at the desk, and produce records; they still ended with a document that was very often printed.",
    },
    {
      kind: "paragraph",
      text: "What the pool was made of varied, and the distinction matters here only for what a pool could be. At one end is the single-line fax modem, which presents an AT-style command interface and splits the T.30 work between host and modem according to a service class. At the other is the multi-channel fax board, a different animal: the Computer History Museum's GammaLink publicity photographs show both a single-line PC fax board and the multi-line MLCP-4, and boards of that family carried their own signal processors and multiple line interfaces rather than exposing a modem command set at all. The same number of pooled lines might therefore be an array of single-line modems or a small number of boards, with quite different host software behind them. The service classes themselves — Class 1 against Class 2 and 2.0, and why pre-standard Class 2 modems interoperated badly — are covered on their own page and not rehearsed here. Channel densities were board- and generation-specific and are not worth stating as general facts.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The half that did not: nothing on the page says who it is for",
    },
    {
      kind: "paragraph",
      text: "A Group 3 call is governed by ITU-T T.30, which negotiates capabilities, transfers pages, and confirms them. What it does not do is carry a structured recipient. The cover sheet may say \"For: Margaret in Accounts\", but that is ink on an image, indistinguishable to the server from any other marks. Everything the server knows about the intended recipient has to come from outside the document.",
    },
    {
      kind: "paragraph",
      text: "The clearest single inventory of what a server had instead is a data structure. Microsoft's FAX_ROUTE, the structure handed to a routing extension when a fax arrives, contains Csid — documented as the called station identifier of the local device that received the fax — and Tsid, the transmitting station identifier of the remote device that sent it; CallerId, which identifies the calling device; RoutingInfo, documented in the form \"Canonical-Phone-Number[|Additional-Routing-Info]\", where the additional part is the subaddress; ReceiverName, documented as the name of the person who received the fax; ReceiverNumber, the telephone number of the device that received it; the device name and identifier; and an opaque routing-data blob. One of those fields does name a person. But the documentation does not say where its value comes from, and the T.30 exchange offers nothing for it to be filled from — every field the structure can populate out of the incoming call is a station, a line or a number. The recipient's name is not something the fax brings with it. It is something the server has to work out.",
    },
    {
      kind: "archivalTable",
      caption:
        "Inbound routing signals available to a fax server, and where each one breaks down.",
      headers: ["Signal", "Where it comes from", "What it can address", "Practical limit"],
      rows: [
        [
          "Direct inward dialling (DID)",
          "A block of telephone numbers pointed at the server; the switch delivers the dialled number",
          "One recipient (or group) per number",
          "Costs a number per user and requires the sender to dial the right one",
        ],
        [
          "DTMF digits after answer",
          "Digits the PBX or the caller supplies once the call is answered",
          "An extension-like identifier",
          "Depends on switch behaviour, and on a human or machine sending digits at the right moment",
        ],
        [
          "TSID (transmitting station identifier)",
          "An identifier string the sending fax device declares about itself during the handshake",
          "The sending station, not the recipient",
          "Only works via a maintained sender-to-recipient table; identifiers are self-declared and often blank or wrong",
        ],
        [
          "CSID (called station identifier)",
          "The receiving station's own identifier, declared to the caller during the handshake",
          "The local line that answered — nothing about the sender at all",
          "Carries no information about the far end, so it can distinguish one of your own lines from another but never a correspondent",
        ],
        [
          "Caller ID",
          "The telephone network's calling-line identification",
          "The calling line, not the recipient",
          "Same indirection as TSID, and may be withheld or absent",
        ],
        [
          "T.33 subaddress",
          "A subaddress carried in the fax call setup (ITU-T T.33, 1996)",
          "A specific recipient behind one number",
          "The sending machine has to support and populate it, which most did not",
        ],
        [
          "Cover-sheet reading or manual triage",
          "The received image itself, read by software or by a person",
          "Whatever the sender wrote",
          "Automated reading was marketed far more confidently than it worked; manual triage reintroduces the clerk",
        ],
      ],
      sources: [
        "Microsoft Learn, FAX_ROUTE structure (faxroute.h)",
        "ITU-T Recommendation T.33 (07/96)",
      ],
    },
    {
      kind: "editorialAside",
      title: "How much weight the structure will bear",
      text: "FAX_ROUTE is not a description of fax — it is an interface contract, and that is what makes it worth reading. Whatever a third-party routing extension was going to route on had to be in that structure, so the structure is a fair inventory of the signals a Windows fax server could offer. It is weaker evidence than a clean argument from silence would be, and the page should not pretend otherwise: the structure does carry a ReceiverName field. What it does not carry is any account of where that name comes from, while every field whose origin the documentation does state is a station, a line or a number. The claim that Group 3 itself carries no recipient rests on T.30, not on this header file.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Why direct inward dialling won",
    },
    {
      kind: "paragraph",
      text: "Of the available signals, one is unambiguous, arrives before the document does, and requires nothing of the sending machine: the number that was dialled. Give each person their own fax number, point the block at the server, and the switch tells the server who the fax is for. It is expensive in numbers and it pushes the burden onto the sender's address book, but it is deterministic, and determinism is what an inbound router needs.",
    },
    {
      kind: "paragraph",
      text: "The standards body did produce a more elegant answer. ITU-T T.33, in force since 1996, defines facsimile routing using a subaddress — a way of naming a recipient behind a single published number rather than buying a number per person. It is the correct design. It also depended on the machine at the far end supporting and populating the subaddress, which the great majority did not, and a routing scheme that fails whenever a sender's equipment is ordinary is not a routing scheme an organisation can rely on. T.33 belongs in this story as the answer the industry had and could not use, not as the answer it used.",
    },
    {
      kind: "paragraph",
      text: "Identifier-based routing occupied an awkward middle. TSID matching and caller-ID matching work by knowing who is calling rather than who is being called, which means they route correctly only for correspondents already in a table and only when the far end declares itself honestly. CSID does not even do that much: it is the called station's own identifier, so it describes the line that answered rather than anyone at the other end of the call. Cover-sheet recognition was the most heavily advertised approach and the least dependable; vendor claims about its accuracy should be read as advertising rather than as evidence, and in practice a queue of unroutable faxes and a person to sort them remained part of the design.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What happened after the decision",
    },
    {
      kind: "paragraph",
      text: "Once a recipient was decided, delivery was comparatively unglamorous and well documented. Microsoft's Windows Server 2008 incoming-routing documentation describes any combination of routing methods being applied to a received fax: forward it to an e-mail address, store it in a folder, or print it. Vendors could extend the set of global routing methods through the Fax Routing Extension API, whose documented anatomy covers initialising an extension, routing a fax, managing the file list associated with it, and registering both routing extensions and fax service providers. The same documentation carries the operational residue of all this — a run of Fax Service event identifiers, 32002 through 32110, recording the success and failure of print, store and e-mail routing.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "It printed the fax",
      text: "That printing is one of the standard routing destinations is the tidiest available refutation of the idea that fax servers replaced fax machines. In most organisations the server sat alongside the machines, absorbing outbound volume and delivering some inbound traffic electronically, while paper remained a normal and expected endpoint.",
    },
    {
      kind: "heading",
      level: 2,
      text: "A pattern without a clean origin",
    },
    {
      kind: "paragraph",
      text: "There is no defensible \"first fax server\", and the claim is worth refusing rather than adjudicating. Candidates include PC fax boards fitted with local-network front ends from the mid-1980s onward, dedicated LAN fax gateway products of the early 1990s, and FlexFAX, which later became HylaFAX — a project commonly attributed to Sam Leffler and dated to 1991, though the project's current site carries no history section to confirm either that or the rename, which is itself commonly dated to April 1995 for trademark reasons. Vendor corporate histories in this space are also unreliable narrators, having been rewritten through repeated acquisition: both GammaLink and Brooktrout Technology ended up inside Dialogic, and nothing cited here fixes the dates of those transfers. Founding dates and priority claims taken from a current vendor's About page should be treated as marketing — including, consistently, when the date is one this page would have liked to use.",
    },
    {
      kind: "researchInset",
      title: "A dated primary source for the pattern",
      items: [
        "US 6,396,597 B1, \"Computer network-based facsimile reception system\", inventor Catherine R. Marshall, assigned to Qwest Communications International.",
        "Filed 10 February 1993; published 28 May 2002 — the filing date is what makes it useful, since it fixes the pattern in time independently of vendor recollection.",
        "Describes push and pull delivery from a store-and-forward fax service to a central LAN server, header codes routing faxes into individual user folders, and multiple users sharing a single fax modem while receiving into private mailboxes.",
        "A patent documents what was described and claimed, not what was widespread. Read it as evidence that the shared-line, per-recipient-mailbox arrangement was well formed by the early 1990s, not as evidence of priority.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "The problem outlived the hardware",
    },
    {
      kind: "paragraph",
      text: "When fax addressing was carried into internet mail, the same shortage of recipient information reappeared, and the same subaddress was pressed into service. RFC 3192, published in October 2001, defines a minimal fax address format for internet mail of the form FAX=+phone-number, optionally followed by /T33S= and a subaddress, at a gateway domain. The telephone number identifies the destination station, and the optional subaddress is the T.33 mechanism carried across unchanged — the same answer to the same shortage, in a new envelope.",
    },
    {
      kind: "paragraph",
      text: "Two claims are worth declining at this point. The first is that Microsoft removed fax from Windows: the TAPI-based Fax Service is documented for the Windows 2000 and XP generation, a Fax Server role shipped in Windows Server 2008, and Windows Fax and Scan shipped on client Windows. Those API documents are archived, which is a statement about documentation rather than about the feature, and any claim of removal needs to name a specific version. The second is the quiet backdating of hosted fax services into this history. An on-premises fax server owned its lines and its boards; a hosted service owns lines on a customer's behalf. Their inbound routing, failure modes and cost structures differ, and the arrangement described here should not be read as an early version of the other.",
    },
    {
      kind: "paragraph",
      text: "What survives is the shape of the problem. Pooling a scarce outbound resource behind a queue is a solved pattern that recurs wherever many people share few channels. Delivering an inbound document to a named person, when the document format carries no name, is not solved by better software — it is solved by buying addressing from the network, one number at a time, or by accepting that a human will read the cover sheet.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "Reference scope",
      text: "This page describes on-premises fax servers and their inbound routing, drawing on standards documents, vendor API references, project documentation and a dated patent. Where origins or dates are contested they are presented as contested rather than resolved, and no product recommendation is made. Sources consulted are listed below.",
    },
  ],
  faqs: [
    {
      q: "Why couldn't a fax server just read who the fax was addressed to?",
      a: "Because a Group 3 fax is an image plus call metadata, not a structured message. The recipient's name on a cover sheet is ink in a bitmap. Microsoft's FAX_ROUTE structure, which defines everything a routing extension receives about an incoming fax, carries the called and transmitting station identifiers, caller ID, the dialled number with an optional subaddress, device details, a ReceiverNumber that is the receiving device's own telephone number, and a ReceiverName field documented as the person who received the fax. That last field is the only one that names anyone, and nothing in the T.30 call supplies a name for it — which is the whole difficulty: the name has to be inferred from the metadata rather than read off the document.",
    },
    {
      q: "What was direct inward dialling routing, and why was it so common?",
      a: "The organisation buys a block of telephone numbers pointed at the fax server and assigns one to each user; the switch tells the server which number was dialled, and the server maps that to a recipient. It is expensive in numbers and depends on senders dialling the right one, but it is unambiguous and arrives before the document, which is what an automatic router needs.",
    },
    {
      q: "Wasn't there a standard for routing a fax to a person?",
      a: "Yes — ITU-T T.33, in force since 1996, defines facsimile routing using a subaddress, so one published number can serve many recipients. Its weakness was adoption rather than design: the sending machine had to support and populate the subaddress, and most did not, so subaddress routing should not be described as the way inbound routing was actually done.",
    },
    {
      q: "Did fax servers replace fax machines?",
      a: "Generally no. They absorbed outbound volume and delivered some inbound traffic electronically while machines stayed in service. Microsoft's own incoming-routing options include printing a received fax, alongside storing it in a folder or forwarding it to an e-mail address — paper remained a normal destination.",
    },
  ],
  related: [
    { section: "guides", slug: "what-is-a-print-server" },
    { section: "guides", slug: "enterprise-print-servers" },
    { section: "history", slug: "print-servers-in-large-offices" },
    { section: "guides", slug: "pc-fax-modems-and-fax-boards" },
    { section: "fax", slug: "history-of-business-faxing" },
    { section: "workflows", slug: "scan-to-email" },
    { section: "models", slug: "multifunction-fax-machines" },
  ],
  sources: [
    {
      title: "Fax Service (Windows Fax Service documentation)",
      url: "https://learn.microsoft.com/en-us/previous-versions/windows/desktop/fax/-mfax-fax-service-start-page",
      publisher: "Microsoft Learn (archived Windows Desktop documentation)",
    },
    {
      title: "FAX_ROUTE structure (faxroute.h)",
      url: "https://learn.microsoft.com/en-us/windows/win32/api/faxroute/ns-faxroute-fax_route",
      publisher: "Microsoft Learn (Win32 API reference)",
    },
    {
      title: "Using the Fax Routing Extension API",
      url: "https://learn.microsoft.com/en-us/previous-versions/windows/desktop/fax/-mfax-using-the-fax-routing-extension-api",
      publisher: "Microsoft Learn (archived Windows Desktop documentation)",
    },
    {
      title: "Incoming Routing Configuration (Windows Server 2008 Fax Service Manager)",
      url: "https://learn.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc736163(v=ws.10)",
      publisher: "Microsoft Learn (archived Windows Server documentation)",
    },
    {
      title:
        "ITU-T Recommendation T.33 — Facsimile routing utilizing the subaddress",
      url: "https://www.itu.int/rec/T-REC-T.33/en",
      publisher: "ITU-T",
    },
    {
      title:
        "ITU-T Recommendation T.30 — Procedures for document facsimile transmission in the general switched telephone network",
      url: "https://www.itu.int/rec/T-REC-T.30/en",
      publisher: "ITU-T",
    },
    {
      title: "RFC 3192 — Minimal FAX address format in Internet Mail",
      url: "https://www.rfc-editor.org/rfc/rfc3192.html",
      publisher: "IETF / RFC Editor",
    },
    {
      title:
        "US 6,396,597 B1 — Computer network-based facsimile reception system (Marshall; Qwest; filed 10 February 1993, published 28 May 2002)",
      url: "https://patents.google.com/patent/US6396597B1/en",
      publisher: "USPTO / Google Patents",
    },
    {
      title: "HylaFAX project site (open-source enterprise fax server)",
      url: "https://www.hylafax.org/",
      publisher: "HylaFAX project",
    },
    {
      title: "Which modems can be used with HylaFAX",
      url: "https://legacy.hylafax.org/site1/modems.html",
      publisher: "HylaFAX project (legacy documentation)",
    },
    {
      title:
        "Fax Service Class 1 and Fax Service Class 1.0 Developer's Guide (S000262C)",
      url: "https://multitech.com/wp-content/uploads/s000262c.pdf",
      publisher: "Multi-Tech Systems, Inc.",
    },
    {
      title:
        "GammaLink publicity photographs (PC Week Art Department collection, catalogue no. 102774717)",
      url: "https://www.computerhistory.org/collections/catalog/102774717",
      publisher: "Computer History Museum",
    },
  ],
  published: "2026-08-26",
  updated: "2026-08-26",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "fax server",
    "inbound fax routing",
    "DID fax routing",
    "direct inward dialling",
    "FAX_ROUTE",
    "fax routing extension api",
    "T.33 subaddress",
    "CSID TSID routing",
    "HylaFAX",
    "fax board",
    "shared fax lines",
    "Windows Fax Service",
  ],
  cluster: "fax-history",
};

export default entry;
