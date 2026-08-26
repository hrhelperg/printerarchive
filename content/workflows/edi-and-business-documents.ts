import type { WorkflowEntry } from "@/lib/content/types";

const entry: WorkflowEntry = {
  section: "workflows",
  slug: "edi-and-business-documents",
  title: "EDI: How Business Documents Moved Before the Internet",
  description:
    "How invoices and orders travelled machine-to-machine before the web — VAN mailboxes, X.400, and why AS2 replaced EDI's transport but not its syntax.",
  summary:
    "Long before an invoice could be attached to an email, it could be sent as a strictly formatted block of characters that the receiving company's software posted straight into its own ledger. That was electronic data interchange. The usual account of what happened next — that the internet killed EDI — inverts the history. What the internet replaced was the way EDI documents travelled. The syntax those documents were written in largely stayed where it was, and the standards that carried them onto the internet say so in their own text.",
  goal: "Understand how business documents were exchanged machine-to-machine before internet transport, and what actually changed when the internet arrived.",
  toolsUsed: [
    "Remote-batch terminals and leased or dial telephone lines",
    "Value-added network mailboxes and translation software",
    "X.400 message handling systems with the X.435 EDI content type",
    "MIME-based internet transport (the EDIINT AS1, AS2 and AS3 applicability statements)",
  ],
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "EDI is defined by strict formatting, not by any particular network. NIST's FIPS PUB 161-2 (issued 29 April 1996) allowed the same formatted data to be transmitted by telecommunications or physically transported on electronic storage media.",
        "There were two competing pre-internet transports, not one: commercial value-added network mailboxes, and the OSI route of X.400 messaging carrying EDI through the content type specified in ITU-T Recommendation X.435.",
        "The IETF's EDIINT documents standardised secure MIME carriage for payloads the IETF did not define. RFC 4130 (AS2, July 2005) explicitly names X12 and UN/EDIFACT among the things it carries.",
        "The founding stories most EDI histories open with — Berlin Airlift manifests, a 1965 telex manifest — rest on award citations and trade retellings rather than primary documentation, and the standards bodies' own dates disagree with the popular ones.",
        "On this archive's reading, EDI's binding limit was commercial rather than technical: each relationship needed a negotiated trading-partner agreement and network membership, costs only volume could amortise. This is an inference from how the field settled, not a claim any of the standards documents makes.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "What the standard actually said EDI was",
    },
    {
      kind: "paragraph",
      text: "The most useful definition of electronic data interchange is not a vendor's but a government's. FIPS PUB 161-2, issued by the Computer Systems Laboratory at NIST on 29 April 1996 as a successor to FIPS PUB 161-1 of 1993, defines EDI as the computer-to-computer interchange of strictly formatted messages that represent documents other than monetary instruments, and states that the formatted data representing those documents may be transmitted from originator to recipient via telecommunications or physically transported on electronic storage media.",
    },
    {
      kind: "paragraph",
      text: "That last clause is worth sitting with, because it contradicts almost every modern retelling. A federal standard still in force in the mid-1990s treated a reel of magnetic tape carried across town by courier as a legitimate EDI transmission, provided the data on it was structured to an adopted standard. What made a document an EDI document was the agreed layout of its fields — where the invoice number sat, how a date was encoded, which separators delimited segments — not the wire it travelled over. The wire was interchangeable from the beginning. Everything that follows in this history is a series of substitutions at that interchangeable layer, made while the layout stayed comparatively fixed.",
    },
    {
      kind: "editorialAside",
      title: "The phrase that erases the wires",
      text: "\"Machine-to-machine\" is a retrofit. It describes the ideal case and quietly writes out the physical layer that made the ideal case possible: couriered tape, remote-batch terminals dialling each other after hours, and earlier still, teleprinter and telex traffic that a person rekeyed at one or both ends. FIPS 161-2's own definition preserves the messiness. Histories that begin with two computers talking directly are describing the destination, not the road.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The founding legend, and what documentation survives",
    },
    {
      kind: "paragraph",
      text: "Nearly every account of EDI opens the same way: during the Berlin Airlift in 1948, an American officer named Edward A. Guilbert standardised the cargo manifests that had been arriving in incompatible formats, and had them sent by telex and telephone. The story is repeated so consistently that it functions as the field's origin myth. It should be treated as exactly that. The chain of evidence runs through award citations and trade retellings; a primary archival record of the airlift manifest standard and its transmission does not appear to be publicly available.",
    },
    {
      kind: "paragraph",
      text: "The sources cannot even agree on who Guilbert was. X12's own awards material, published by the ANSI-accredited standards developer that named its lifetime achievement award after him, describes him as a U.S. Air Force Colonel. Widely circulated popular accounts describe a U.S. Army Master Sergeant. Both cannot be right, and the discrepancy is instructive: when the standards body's own account of its namesake diverges from the version in general circulation, the version in general circulation has no better claim. What X12 does document is subsequent and checkable — that Guilbert served as president of the Transportation Data Coordinating Committee for nineteen years, and that he later developed a standard electronic message set at DuPont for cargo information exchanged with the carrier Chemical Leaman Tank Lines. It also names Joe Carley, Ralph Notto and Earl \"Buddy\" Bass as collaborators, three people the single-founder retelling routinely drops.",
    },
    {
      kind: "archivalTable",
      caption:
        "Contested foundation dates in EDI history, with the claimant attached to each figure",
      headers: ["Claim", "What the standards body's material says", "What circulates elsewhere"],
      rows: [
        [
          "Origin of standardised electronic manifests",
          "X12's awards material does not date or describe the airlift episode. What it states is that Edward A. Guilbert was a U.S. Air Force Colonel, served nineteen years as TDCC president, and later developed a cargo message set at DuPont with Chemical Leaman Tank Lines; it names Carley, Notto and Bass as collaborators.",
          "A U.S. Army Master Sergeant standardising Berlin Airlift manifests in 1948, transmitted by telex and telephone. No primary archival record located.",
        ],
        [
          "Formation of the Transportation Data Coordinating Committee",
          "X12 says TDCC was formed in the mid-1960s and published the first US EDI integrated standards in 1975.",
          "1968 is the most-repeated figure in secondary sources, generally without citation.",
        ],
        [
          "Founding of ASC X12",
          "X12's own site says ANSI accredited X12 standards in 1977; elsewhere it describes the committee as chartered for more than forty years.",
          "Most secondary sources, including Wikipedia, give 1979 as the ANSI charter date. First published standards are separately dated to 1983.",
        ],
        [
          "The first EDI transaction",
          "No standards body makes this claim.",
          "\"A 1965 shipping manifest sent by telex by the Holland-America Line\" appears near-verbatim across vendor histories with no archival citation.",
        ],
      ],
      sources: [
        "X12, About X12 / X12 Awards (x12.org)",
        "Editorial note: no primary documentation located for the airlift or 1965 telex claims",
      ],
    },
    {
      kind: "paragraph",
      text: "The point of laying these out side by side is not pedantry. It is that the disagreements cluster precisely where the commercial histories are most confident, and the confident dates are the ones with the weakest paper behind them. An article that picks a single number for any row above is choosing which unsourced tradition to join.",
    },
    {
      kind: "figure",
      image: {
        src: "/images/workflows/edi-and-business-documents--teleprinter-1938-loc.jpg",
        alt: "1938 photograph of a teleprinter with its mechanism exposed, showing keyboard, type mechanism, paper roll and drive motor, with a desk telephone behind it",
        width: 1920,
        height: 1410,
        caption: "A teleprinter in institutional service at the Jerusalem Department of Health, June 1938. Machine-to-machine document exchange over a telegraph or telephone circuit predates the computer by decades; EDI's contribution was to agree on what the characters meant.",
        credit: {
          source: "Matson Photo Service, Library of Congress, via Wikimedia Commons",
          url: "https://commons.wikimedia.org/wiki/File:Teleprinter,_June_1938,_Jerusalem_Dept._of_Health_LOC_matpc.08709.jpg",
          license: "Public domain",
        },
      },
    },
    {
      kind: "heading",
      level: 2,
      text: "How the bits actually moved",
    },
    {
      kind: "paragraph",
      text: "Underneath the standards question sits a plainer one that most EDI histories skip: what physically happened when a purchase order left one company for another in the 1970s and 1980s. For a great deal of that traffic the answer was remote-batch communication over the telephone network. IBM's 2780 and 3780 data communication terminals — devices built around reading and punching card decks and driving line printers at the far end — spoke Binary Synchronous Communications, the half-duplex, character-oriented link protocol documented in Datapro's contemporaneous technical report on BSC. Bisync ran over leased lines where volume justified them and dial-up lines where it did not.",
    },
    {
      kind: "paragraph",
      text: "This is the layer that gives the era its texture. A transmission was a scheduled event, often overnight, between two parties who had agreed in advance on the line, the terminal emulation, the block sizes and the file layout. Failure was discovered by someone looking at a console or a printout in the morning. \"Integration\" frequently meant that the received batch was written to disk in a format the accounting system's import job could read at a fixed hour. The document had become machine-readable long before the exchange had become continuous.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Two answers to the same problem",
    },
    {
      kind: "paragraph",
      text: "Point-to-point Bisync scales badly: every new trading partner is another line, another schedule, another set of parameters. Two different infrastructures emerged to absorb that combinatorial cost, and they came from different worlds.",
    },
    {
      kind: "paragraph",
      text: "The commercial answer was the value-added network. Functionally, a VAN was a store-and-forward mailbox service: a sender delivered an interchange to the network, the network held it, and the recipient collected it on its own schedule, removing the requirement that both parties be available at once. Around that mailbox the operators sold the services that gave the model its name — translation between transmission protocols so that partners on different equipment could still exchange, translation between document formats where the two sides had standardised differently, and audit trails recording what was deposited and when it was retrieved. That audit function mattered as much as the delivery: it produced a third-party record of a commercial exchange.",
    },
    {
      kind: "callout",
      tone: "warning",
      title: "VAN economics are poorly documented",
      text: "Descriptions of what VAN service cost — billing by the kilocharacter, per-mailbox subscription figures, counts of connected businesses — circulate between vendor pages and trade articles without traceable origins. This archive has not located authoritative documentation of VAN commercial mechanics. The functional description above is defensible; specific prices and adoption counts should be attributed to whichever page they came from, or treated as undocumented.",
    },
    {
      kind: "paragraph",
      text: "The standards-body answer came from the OSI side of the world: carry EDI inside the X.400 message handling system. ITU-T Recommendation X.435 defines an EDI messaging system built on X.400, with a dedicated EDI content type and notification semantics appropriate to commercial documents rather than personal mail. Its lineage is documentable where much of this history is not. X.435 was issued by CCITT in 1991; the ITU-T edition approved on 18 June 1999 replaces that recommendation and consolidates its amendments, and the same text was published as ISO/IEC 10021-9. It remains listed as in force.",
    },
    {
      kind: "table",
      caption: "The two pre-internet transports, compared on what each actually provided",
      headers: ["", "Value-added network", "X.400 with X.435"],
      rows: [
        [
          "Origin",
          "Commercial network operators selling a service",
          "International standards bodies (CCITT/ITU-T, published identically by ISO/IEC)",
        ],
        [
          "Delivery model",
          "Store-and-forward mailbox; recipient collects on its own schedule",
          "Store-and-forward message handling, with EDI-specific notifications",
        ],
        [
          "Format handling",
          "Protocol and document-format translation offered as a paid service",
          "EDI content carried as a defined content type; syntax left to X12/EDIFACT",
        ],
        [
          "Evidence of exchange",
          "Operator-held audit trails",
          "Standardised notification messages defined in the recommendation",
        ],
        [
          "What is documentable today",
          "Function is clear; commercial mechanics are not authoritatively documented",
          "Publication history is precise: CCITT 1991, ITU-T edition approved 18 June 1999, ISO/IEC 10021-9",
        ],
      ],
    },
    {
      kind: "paragraph",
      text: "It is tempting to file X.400 under failed standards. That is a verdict rather than a finding, and it flattens a longer story — X.400 messaging persisted for years in aviation, military and some government settings. What can be stated without editorialising is narrower and more useful: X.435 was published, revised, and republished by ISO/IEC, and it lost commercial ground to internet transport.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Two syntaxes, two governance chains",
    },
    {
      kind: "paragraph",
      text: "The documents themselves were written in one of two major families, and their provenance is regularly mangled. The North American family is maintained by ASC X12, the ANSI-accredited standards committee — written without a period, as X12 and not \"X.12\". The stray period is common enough to appear in vendor page titles, and it invites confusion with the ITU-T X-series recommendations, an entirely separate lineage that happens to include the X.400 and X.435 documents discussed above.",
    },
    {
      kind: "paragraph",
      text: "The international family, UN/EDIFACT, is not a single standard and is not simply \"an ISO standard\". ISO 9735, first published on 15 July 1988 and reprinted with amendment in November 1990, specifies the application-level syntax rules only: the structure of the interchange and message envelope, the separators, the service segments. The message directories, data element definitions and code lists that make an EDIFACT invoice an invoice are UNTDID, maintained on the United Nations side by UNECE and later UN/CEFACT, with trade data elements governed separately. ISO/TC 154, the committee of record, describes a Joint Syntax Working Group established with UNECE in the late 1980s and a convergence in 1987 of separate United Nations and US/ANSI syntax proposals before ISO approval. Two governance chains, joined at the syntax layer — which is why \"the UN invented EDIFACT\" and \"EDIFACT is an ISO standard\" are both distortions of a shared arrangement.",
    },
    {
      kind: "paragraph",
      text: "That the two families were expected to converge is not hindsight. FIPS 161-2 cites ASC X12W/95-137, the X12 committee's own plan for technical migration to UN/EDIFACT, in a document whose purpose was to tell US federal agencies which standards to use.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The internet bridge",
    },
    {
      kind: "paragraph",
      text: "The IETF's involvement began with encapsulation rather than security. RFC 1767, published in March 1995 on the standards track, registers MIME content types for EDI objects — application/EDI-X12, application/EDIFACT, and application/EDI-consent for formats agreed bilaterally between the parties. It does not define an EDI syntax. It declares that these existing syntaxes are things internet mail can legitimately carry, and leaves their meaning to the bodies that own them.",
    },
    {
      kind: "paragraph",
      text: "The applicability statements that followed added what commercial exchange required: confidentiality, integrity, non-repudiation, and above all a receipt. RFC 3335 (September 2002, standards track) specifies AS1, EDI over SMTP with S/MIME or OpenPGP protection and signed message disposition notifications as acknowledgements. RFC 4130 (July 2005) specifies AS2, the same security model over HTTP — the transport to which VAN store-and-forward mailboxes are generally described as having given way. RFC 4823 (April 2007) specifies AS3 over FTP and completes the set — but it was published as Informational rather than on the standards track, and calling AS3 an internet standard misstates its status.",
    },
    {
      kind: "timeline",
      events: [
        {
          period: "15 July 1988",
          text: "ISO 9735 first published — the EDIFACT application-level syntax rules only; reprinted with amendment 1 November 1990.",
        },
        {
          period: "1991",
          text: "CCITT issues Recommendation X.435, carrying EDI messages within the X.400 message handling system.",
        },
        {
          period: "March 1995",
          text: "RFC 1767 registers MIME content types for EDI objects: application/EDI-X12, application/EDIFACT, application/EDI-consent.",
        },
        {
          period: "29 April 1996",
          text: "FIPS PUB 161-2 issued by NIST, superseding FIPS PUB 161-1 (1993) and adopting the X12, UN/EDIFACT and HL7 families for federal EDI.",
        },
        {
          period: "18 June 1999",
          text: "ITU-T approves the X.435 edition replacing the 1991 CCITT recommendation and consolidating its amendments; identical text published as ISO/IEC 10021-9.",
        },
        {
          period: "September 2002",
          text: "RFC 3335 specifies AS1 — EDI over SMTP with S/MIME or OpenPGP and signed MDN acknowledgements.",
        },
        {
          period: "July 2005",
          text: "RFC 4130 specifies AS2 — the same secure MIME model over HTTP.",
        },
        {
          period: "April 2007",
          text: "RFC 4823 specifies AS3 over FTP, published as Informational rather than standards track.",
        },
      ],
    },
    {
      kind: "researchInset",
      title: "What the EDIINT documents do and do not claim",
      items: [
        "The numbering is by applicability-statement order, not by chronology of the idea. The surprise is the gap: AS2, the one usually treated as the original, was specified a full decade after RFC 1767 registered the MIME content types it depends on.",
        "None of these documents defines an EDI syntax. They define secure, acknowledged MIME carriage for payloads specified elsewhere.",
        "RFC 4130 states that the payload it carries may be XML, X12, UN/EDIFACT or another structured format — the internet standard names the pre-internet syntaxes as its cargo.",
        "The signed message disposition notification, introduced for AS1 and inherited by AS2, is the functional replacement for the VAN's audit trail: evidence of receipt produced by the counterparty rather than by an intermediary.",
        "AS3's Informational status is a real distinction, not a technicality — it was never approved as an internet standard.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "The transport changed; the syntax stayed",
    },
    {
      kind: "paragraph",
      text: "Put the two primary documents next to each other and the central claim of this page assembles itself. In 1996, a US federal standard adopted the X12, UN/EDIFACT and HL7 families for federal EDI — not mandating that agencies conduct EDI, but mandating these standards where they did. In 2005, an IETF specification for moving business data over HTTP named X12 and UN/EDIFACT as payloads it packages inside MIME. The internet did not displace those syntaxes. It arrived and offered to carry them, and the carriage was cheaper and more ubiquitous than a leased line or a subscription mailbox.",
    },
    {
      kind: "paragraph",
      text: "What died, then, was not EDI but a business model and a network topology. The VAN's core products — availability decoupling, protocol translation, and third-party evidence of delivery — were each answered by something in the internet stack. Store-and-forward availability became a server that stays up. Protocol translation became a smaller problem once both ends could speak HTTP. The audit trail became a cryptographically signed receipt returned by the trading partner itself. Later, SFTP and web APIs absorbed still more of the same traffic. Through all of it, the segment-and-element structure of the documents inside was substantially the structure agreed decades earlier, which is why the field's characteristic artefact — an integration specialist reading a raw X12 or EDIFACT interchange to find out why a partner's file rejected — is still a recognisable job.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Who EDI never reached",
    },
    {
      kind: "paragraph",
      text: "The second-order fact about this history is the one the standards documents cannot state, because it lives in commercial arrangements rather than specifications. Every EDI relationship rested on a trading-partner agreement: a negotiated document settling which standard and version applied, which message types were in scope, how identifiers mapped, what constituted acknowledgement, and what happened when a file failed. Add to that the network membership, the translation software, and the staff time to onboard each partner, and the cost of an EDI relationship was substantially fixed — largely independent of how many documents crossed it. That reading should be marked for what it is: the documentation behind it is commercial rather than standards-based, and thin. No specification states it, and this archive has not located authoritative figures for what a trading-partner agreement or a network account cost.",
    },
    {
      kind: "paragraph",
      text: "Fixed costs are amortised by volume, and only volume. A manufacturer exchanging tens of thousands of order and despatch messages a year with a distributor recovered that outlay quickly. A firm sending forty invoices a year to twenty different customers never could, and no improvement in transport changed the arithmetic, because the expensive part was never the wire. This is why EDI settled where it did — inside high-volume, long-lived supply-chain relationships between parties large enough to negotiate — and why it remained invisible to most businesses that issue invoices at all. Open interoperability networks, in which a participant connects once to reach many counterparties rather than negotiating each link, exist precisely because that per-relationship cost was the binding constraint; modern structured e-invoicing formats are treated separately in this archive.",
    },
    {
      kind: "paragraph",
      text: "But generalising the transmission problem does not touch the creation problem. The businesses EDI excluded were never going to emit a machine-readable interchange in the first place; they needed to produce a correct, complete, self-contained document — the right identifiers, the right dates, the right tax treatment, laid out so a human on the other side can read it and pay it. They produced those documents individually through the whole EDI era, and many businesses still do. Tooling aimed at that end of the market is therefore document-production tooling rather than interchange tooling: an invoice generator such as Invoice Maker addresses the composition and export problem that EDI's standards deliberately assumed away by starting from the premise that both parties already ran systems capable of speaking to each other.",
    },
    {
      kind: "paragraph",
      text: "Read that way, the history stops being a story about a technology that was superseded. It is a story about a layer that kept being swapped underneath a document format that mostly held still — and about a threshold, set by negotiation costs rather than engineering, that determined for decades which businesses got to stop printing and posting their paperwork and which did not.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "Reference scope",
      text: "This is a neutral historical and technical reference covering how EDI documents were transmitted. Dates and definitions are attributed to the standards documents that carry them, and disputed claims are marked as disputed rather than resolved. It does not cover the field-level content of X12 or EDIFACT message types, and it is not legal, tax, or accounting advice.",
    },
  ],
  related: [
    { section: "workflows", slug: "ocr-for-invoices" },
    { section: "guides", slug: "enterprise-document-capture" },
    { section: "history", slug: "enterprise-document-management" },
    { section: "workflows", slug: "records-compliance" },
    { section: "tools", slug: "pdf-a" },
    { section: "guides", slug: "barcode-recognition" },
  ],
  faqs: [
    {
      q: "What is electronic data interchange, in a definition that can be cited?",
      a: "FIPS PUB 161-2, issued by NIST on 29 April 1996, defines EDI as the computer-to-computer interchange of strictly formatted messages that represent documents other than monetary instruments, and states that the formatted data may be transmitted via telecommunications or physically transported on electronic storage media.",
    },
    {
      q: "Did the internet replace EDI?",
      a: "It replaced EDI's transport rather than its document syntax. RFC 4130 (AS2, July 2005) states that the payload it packages in MIME may be XML, X12, UN/EDIFACT or another structured format, and FIPS 161-2 was still adopting the X12, UN/EDIFACT and HL7 families for US federal EDI in 1996.",
    },
    {
      q: "What is the difference between AS1, AS2 and AS3?",
      a: "They are applicability statements for the same secure MIME model over different transports: AS1 over SMTP (RFC 3335, September 2002), AS2 over HTTP (RFC 4130, July 2005), and AS3 over FTP (RFC 4823, April 2007). AS1 and AS2 are standards track; AS3 was published as Informational.",
    },
    {
      q: "Is EDIFACT an ISO standard?",
      a: "Only in part. ISO 9735, first published on 15 July 1988, specifies the EDIFACT application-level syntax rules. The message directories, data elements and code lists are UNTDID, maintained on the United Nations side by UNECE and later UN/CEFACT. ISO/TC 154 describes a joint working group with UNECE and a 1987 convergence of separate United Nations and US/ANSI syntax proposals.",
    },
    {
      q: "Was the first EDI transaction a 1965 telex manifest?",
      a: "That claim circulates widely in vendor histories without an archival citation, and no standards body appears to make it. The same applies to the Berlin Airlift origin story: it rests on award citations and retellings, and even the accounts disagree on whether Edward A. Guilbert was an Air Force Colonel, as X12's own awards material says, or an Army Master Sergeant, as popular versions have it.",
    },
    {
      q: "What did a value-added network actually do?",
      a: "Functionally, it operated store-and-forward mailboxes so that sender and recipient did not need to be available simultaneously, offered translation between transmission protocols and between document formats, and kept audit trails of what was deposited and collected. Authoritative documentation of VAN pricing and adoption figures has not been located; the numbers in circulation are trade-press claims.",
    },
  ],
  sources: [
    {
      title: "FIPS PUB 161-2: Electronic Data Interchange (EDI), issued 29 April 1996",
      url: "https://nvlpubs.nist.gov/nistpubs/Legacy/FIPS/fipspub161-2.pdf",
      publisher:
        "National Institute of Standards and Technology, U.S. Department of Commerce",
    },
    {
      title: "RFC 1767 — MIME Encapsulation of EDI Objects (March 1995)",
      url: "https://www.rfc-editor.org/rfc/rfc1767.html",
      publisher: "IETF / RFC Editor",
    },
    {
      title:
        "RFC 3335 — MIME-based Secure Peer-to-Peer Business Data Interchange over the Internet (AS1, September 2002)",
      url: "https://www.rfc-editor.org/rfc/rfc3335.html",
      publisher: "IETF / RFC Editor",
    },
    {
      title:
        "RFC 4130 — MIME-Based Secure Peer-to-Peer Business Data Interchange Using HTTP, Applicability Statement 2 (AS2, July 2005)",
      url: "https://www.rfc-editor.org/rfc/rfc4130.html",
      publisher: "IETF / RFC Editor",
    },
    {
      title:
        "RFC 4823 — FTP Transport for Secure Peer-to-Peer Business Data Interchange over the Internet (AS3, April 2007, Informational)",
      url: "https://www.rfc-editor.org/rfc/rfc4823",
      publisher: "IETF / RFC Editor",
    },
    {
      title:
        "ITU-T Recommendation X.435: Message Handling Systems — Electronic data interchange messaging system (edition approved 18 June 1999)",
      url: "https://www.itu.int/rec/T-REC-X.435-199906-I/en",
      publisher: "International Telecommunication Union (ITU-T)",
    },
    {
      title:
        "ISO 9735:1988 — EDIFACT application level syntax rules (first published 15 July 1988)",
      url: "https://www.iso.org/standard/17592.html",
      publisher: "International Organization for Standardization",
    },
    {
      title: "ISO/TC 154 — Standard ISO 9735 and JWG 1 (EDIFACT Syntax)",
      url: "https://www.isotc154.org/standards/iso-9735/",
      publisher:
        "ISO/TC 154: Processes, data elements and documents in commerce, industry and administration",
    },
    {
      title: "About X12 / X12 Awards (Edward A. Guilbert lifetime achievement award)",
      url: "https://x12.org/about/awards",
      publisher: "X12 (ANSI-accredited standards developer, ASC X12)",
    },
    {
      title: "Datapro report 2760: IBM Binary Synchronous Communications (BSC)",
      url: "https://www.bitsavers.org/pdf/datapro/communications_standards/2760_IBM_BSC.pdf",
      publisher: "Datapro Research, archived at bitsavers.org",
    },
  ],
  published: "2026-08-26",
  updated: "2026-08-26",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "edi",
    "electronic data interchange",
    "ansi asc x12",
    "un/edifact",
    "iso 9735",
    "value-added network",
    "van mailbox",
    "x.400",
    "itu-t x.435",
    "as2",
    "rfc 4130",
    "ediint",
    "fips 161-2",
    "binary synchronous communications",
    "trading partner agreement",
  ],
  cluster: "document-workflows",
  modernTools: ["invoice-maker"],
};

export default entry;
