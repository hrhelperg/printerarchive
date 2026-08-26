import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "history",
  slug: "portable-document-formats-before-pdf",
  title:
    "Envoy, Common Ground and Replica: The Portable Document Formats PDF Beat",
  description:
    "Acrobat entered a crowded market. What Envoy, Common Ground and Farallon Replica were, what offices used before them, and what the record says decided it.",
  summary:
    "PDF is usually described as arriving into a vacuum — a memo, a product, a standard. The contemporary record shows something less tidy: a four-way commercial contest in which Envoy, Common Ground and Farallon Replica launched alongside Acrobat, and two working practices, not chaos, as the incumbent they were all trying to displace.",
  era: "The portable-document format war",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "Acrobat did not launch alone. A 1996 review in Online and CD-Rom Review records that Acrobat, Envoy and Common Ground \"all launched commercially within a few months of each other in 1994\", as did Farallon Replica.",
        "The incumbent was not disorder. Warnock's own Camelot paper names two working practices: PostScript and EPS as ad-hoc interchange, and fax as the reliability fallback.",
        "Neither Farallon Computing nor No Hands Software held a single portable-document patent — an assignee search returns networking hardware for one and nothing at all for the other.",
        "The differentiator the record actually supports is documentation. Common Ground's own 1995 IANA registration could offer only \"specification by example\", and Envoy is reported never to have been publicly documented; Adobe has a traceable specification lineage, since ISO 32000-1 was fast-tracked from its own PDF Reference — though the date Adobe first published a PDF reference was not verified in this pass.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "A four-way market, not a vacuum",
    },
    {
      kind: "paragraph",
      text: "The standard account of PDF runs in a straight line: John Warnock writes a memo, Adobe ships Acrobat, the world adopts it. That story is missing the other three companies in the room. Through the middle 1990s, at least four commercial products competed to be the way a formatted document travelled between machines that did not share fonts, software or operating systems — Adobe's Acrobat and PDF; Envoy, associated with WordPerfect and then Novell; Common Ground, also marketed as Digital Paper, from No Hands Software of Belmont, California; and Replica, from Farallon Computing. Only one of them is still a filename extension anyone recognises.",
    },
    {
      kind: "paragraph",
      text: "The launch dating needs care, because the two best-sourced datings do not agree. Adobe's own corporate retrospective places the Acrobat launch in mid-June 1993. A 1996 article in Online and CD-Rom Review, written while all four products were still being compared in print, states that Acrobat, Envoy and Common Ground \"all launched commercially within a few months of each other in 1994, as did a format called Farallon Replica that will no longer be marketed from this year\". These are reconcilable — announcement and first release are not the same event as volume commercial availability, and Adobe is an interested party writing anniversary marketing twenty-five years after the fact — but they should not be flattened into a single date. This page keeps both visible.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What offices actually did before",
    },
    {
      kind: "paragraph",
      text: "It is tempting to describe the pre-PDF era as chaos, with formatted documents arriving broken or not at all. Warnock's Camelot paper, the document usually cited as PDF's origin point, does not describe it that way. It describes two practices that worked, and explains why each was unsatisfactory rather than unusable.",
    },
    {
      kind: "paragraph",
      text: "The first was PostScript itself, and its Encapsulated PostScript subset, used as an interchange format — send the print stream rather than the source document. The paper's objection is economic rather than technical: \"this solution requires powerful desktop machines and PostScript printers\". The archive's page on PostScript covers why that was a real constraint in an office where the expensive machine was shared. That path was also a first-class Internet citizen: application/postscript was, and remains, a registered media type, which is more than can be said for two of Acrobat's three commercial rivals.",
    },
    {
      kind: "paragraph",
      text: "The second was fax, and the paper names it verbatim: \"The popularity of FAX machines has given us a way to send images around to produce remote paper, but the lack of quality, the high communication bandwidth and the device specific nature of FAX has made the solution less than desirable.\" That is a description of a working fallback with known costs, not of a gap. Anyone who has watched a contract go out by fax because the recipient's software could not open the file will recognise the reasoning; the practice outlived every product on this page.",
    },
    {
      kind: "callout",
      tone: "warning",
      title: "Camelot is not Carousel, and its date is contested",
      text: "Two cautions before the paper is used as evidence. Camelot and Carousel are different things and are constantly merged: Camelot was the concept paper, Carousel the internal codename of the product that shipped as Acrobat. And the paper's date is contested — secondary accounts split between 1990 and spring 1991, while the widely circulated copy's 1995 file date is a digitisation artefact, that PDF having been generated by Acrobat PDFWriter 2.0 for Macintosh years after the text was written. Warnock's own account in a 2018 oral history is \"so, in 1991, I wrote this little paper\", and that it \"sort of became the impetus for Acrobat, for PDF\"; that is the dating this archive prefers. For what the paper actually proposes, and how little of PDF's shipped file structure appears in it, see the archive's page on PDF stream filters and file size.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The four contenders, as the record supports them",
    },
    {
      kind: "archivalTable",
      caption:
        "The four commercial portable-document products, restricted to claims traceable to a primary or contemporary source",
      headers: [
        "Product",
        "Associated with",
        "Registered Internet media type",
        "Published specification",
        "Recorded outcome",
      ],
      rows: [
        [
          "Acrobat / PDF",
          "Adobe Systems",
          "application/pdf (registered; current registration RFC 8118)",
          "Specification lineage traceable through to ISO 32000, which was fast-tracked from Adobe's own PDF Reference",
          "Described in a 1996 patent filing as in \"widespread use\"; later an ISO standard",
        ],
        [
          "Envoy",
          "WordPerfect Corporation, then Novell, then Corel — but see the attribution note below",
          "None. No media type was ever registered",
          "Reported never to have been publicly documented (single-sourced)",
          "Named alongside PDF as being in \"widespread use\" in a patent filed October 1996",
        ],
        [
          "Common Ground / Digital Paper",
          "No Hands Software, 1301 Shoreway Road, Belmont CA",
          "application/commonground, registered 11 April 1995",
          "\"Specification by example\" only; a paper specification was promised \"beginning in the middle of 1995\"",
          "Company later renamed Common Ground Software; the subsequent corporate chain is not verified here",
        ],
        [
          "Replica",
          "Farallon Computing (the networking company, later renamed Netopia)",
          "None",
          "None located",
          "A 1996 review states it \"will no longer be marketed from this year\"",
        ],
      ],
      sources: [
        "IANA Media Types registry (application tree)",
        "IANA registration: application/commonground, 11 April 1995",
        "US Patent 5,790,790 (Tumbleweed Software, filed 24 October 1996)",
        "Online and CD-Rom Review, Vol. 20 No. 1 (1996), pp. 33-35",
        "Google Patents assignee search: Farallon Computing; No Hands Software",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "Envoy: an attribution nobody has nailed down",
    },
    {
      kind: "paragraph",
      text: "Envoy is the rival that came closest, and it is also the one whose history is least secure. The claims that circulate everywhere — that Tumbleweed Communications introduced it in 1993, that it shipped with WordPerfect Office in March 1994, that versions 1 and 7 were released — all appear to originate from a single encyclopaedia article and propagate outward from there. None of them is corroborated by any primary source located for this page, and one primary source cuts against the origin claim directly.",
    },
    {
      kind: "paragraph",
      text: "That source is Tumbleweed's own patent, filed 24 October 1996 and granted 4 August 1998, covering an electronic document delivery system. Its specification refers to \"Novell's Envoy\" — twice, in the possessive — and never presents Tumbleweed as the format's originator. A company writing its own patent specification has every incentive to claim provenance it holds; this one does not. The conventional chain, WordPerfect Corporation to Novell after the 1994 acquisition to Corel in 1996, is the one the archive treats as most likely, while noting it is not settled.",
    },
    {
      kind: "paragraph",
      text: "The same patent is the best contemporaneous evidence of how the market looked from outside by late 1996. Its opening framing is that \"Adobe Systems' Acrobat PDF and Novell's Envoy portable document formats have come into widespread use\", and the delivery system it describes claims compatibility with both. Common Ground is not mentioned at all. An interested third party, three years into the contest, saw two horses.",
    },
    {
      kind: "callout",
      tone: "warning",
      title: "Two Envoy traps",
      text: "The IANA registry does contain application/vnd.enphase.envoy. It is a modern Enphase solar-inverter media type and has nothing whatsoever to do with WordPerfect Envoy; there is no registered media type for the document format. Second, the recurring claim that Envoy files were smaller or technically better than PDF has no verifiable basis. No public documentation of the format has been located, and none is reported to have existed; if that is right, no independent comparison was possible then and none is possible now. Treat it as marketing residue.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Common Ground: registered, and undocumented",
    },
    {
      kind: "paragraph",
      text: "Common Ground is usually cast as the open, standards-minded alternative that lost to a proprietary giant. Its own registration document says otherwise, and it is worth quoting because it is the single most load-bearing primary source on this page. On 11 April 1995 No Hands Software registered a media type with IANA: \"A Content-Type of 'application/commonground' indicates a document in the Common Ground portable file format, also known as Digital Paper.\" Under the heading for a published specification, however, the registration offers only \"Specification by example: From any version of the Common Ground full viewer, select 'Save As...'\", adding that a paper specification \"will be available upon request from the address below, beginning in the middle of 1995\".",
    },
    {
      kind: "paragraph",
      text: "Read plainly: at the moment of its formal Internet registration, the format was undocumented, and the recommended way to learn it was to reverse-engineer output from the vendor's own viewer. Adobe, by contrast, has a documented specification lineage: ISO 32000-1 was fast-tracked from Adobe's own PDF Reference, sixth edition (2006). The date at which Adobe first published a PDF reference was not verified in this pass. Openness is a genuine differentiator in this story — it simply cuts the opposite way from how the story is usually told. Common Ground did get one thing none of the others managed, which was the registration itself; it is the only one of Acrobat's three commercial rivals with a media type in the registry.",
    },
    {
      kind: "paragraph",
      text: "Common Ground's most-cited technical idea was the self-viewing document: a file that carried its own viewer, so a recipient needed no software install. The registration records the Macintosh file type APPL and creator CGVM, which is the fingerprint of an executable rather than a document. That is the honest cost of the trick. A file that is a program is a file bound to one platform, so a portable document stopped being portable at the operating-system boundary, and mailing executables around was already becoming a security problem rather than a convenience. The feature is usually presented as something Adobe lacked; it is better read as a trade Adobe declined to make.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Replica, and which Farallon",
    },
    {
      kind: "paragraph",
      text: "Replica came from Farallon Computing — and the name needs disambiguating on first encounter, because the company later became Netopia while Farallon survived as a networking product brand. A reader searching the name today lands on Ethernet adapters and LAN hardware, not documents. Farallon of the early 1990s was a Macintosh connectivity company, and the Computer History Museum holds collection material under its name.",
    },
    {
      kind: "paragraph",
      text: "Its patent portfolio confirms where its expertise sat: screen image sharing among heterogeneous computers, running local networks over ordinary telephone wiring, network configuration and connection. There is no portable-document patent among them, and a parallel assignee search for No Hands Software returns nothing at all. This is negative evidence, and it needs stating precisely: neither Farallon nor No Hands Software held a portable-document patent at all, so neither was defending one. Whether anyone else's patents mattered here was not tested in this pass.",
    },
    {
      kind: "paragraph",
      text: "Replica also went first. The same 1996 review that dates the launches records that Replica \"will no longer be marketed from this year\" — roughly two years in the market, then withdrawal. No verified account of the reasoning was located for this page, and the archive prefers to leave that blank rather than invent a plausible one.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What the record says actually decided it",
    },
    {
      kind: "paragraph",
      text: "Strip out what the evidence does not support and the field narrows quickly. It was not demonstrable file quality, because no public specification for two of the four formats has been located, so nobody outside the vendors could measure them. Only one advantage is left standing: a specification other people could implement against. The usual second half of the answer — installed base — is the part this page could not verify, and the aside below says why.",
    },
    {
      kind: "paragraph",
      text: "The registry is only good for a negative: Envoy and Replica never obtained a media type, and Common Ground — the one rival that did — is also the one whose registration admitted it had no specification. Registration was not what separated the winner from the losers. Meanwhile application/postscript was already registered, which meant the incumbent practice — just send the print stream — had the better standing on the network than two of the challengers. Warnock's own retrospective account of the rival document-interchange languages is that they \"got horrendously complicated and horrendously hard to implement\", which is a claim about implementability rather than about features, and it is the same axis.",
    },
    {
      kind: "editorialAside",
      title: "The one explanation we could not verify",
      text: "The most popular account of why PDF won is that Adobe initially charged for Acrobat Reader — around fifty dollars — and made it free with Acrobat 2.0 in 1994, at which point the installed base compounded. It would supply the missing half of the answer above, which is precisely why it should be held at arm's length. This research pass did not verify it against a contemporary price list, press release or trade-press item, so this page does not assert it, and reach stays an open question here rather than a finding. What can be said is that the opposite claim, that the reader was free from the beginning, is definitely wrong.",
    },
    {
      kind: "paragraph",
      text: "The longer consequence is visible elsewhere in the archive. A documented format that anyone could write became the substrate for enterprise document management, for print-production interchange, and eventually for a formal standard when PDF was published as ISO 32000-1 in 2008 — a fate no closed competitor could have reached even if it had survived. The 1990s office context in which this contest was decided, and the desktop-publishing shift that created the incompatibility problem in the first place, are covered on their own pages here.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Timeline, with the dating disputes intact",
    },
    {
      kind: "timeline",
      events: [
        {
          period: "1991 (Warnock's dating)",
          text: "Warnock writes the Camelot paper. He says in a 2018 oral history, \"so, in 1991, I wrote this little paper\". Secondary accounts split between 1990 and spring 1991; the circulated PDF's 1995 file date is a digitisation artefact and should never be cited as the authoring date.",
        },
        {
          period: "June 1993 (Adobe's dating)",
          text: "Adobe's corporate retrospective dates the Acrobat launch to mid-June 1993.",
        },
        {
          period: "1994 (contemporary review's dating)",
          text: "A 1996 review states that Acrobat, Envoy and Common Ground \"all launched commercially within a few months of each other in 1994\", as did Farallon Replica. On the conventional chronology, Novell's acquisition of WordPerfect — and with it Envoy — falls in the same year.",
        },
        {
          period: "11 April 1995",
          text: "No Hands Software registers application/commonground with IANA — the only one of Acrobat's three commercial rivals to obtain a media type — while stating that the format's specification exists only \"by example\".",
        },
        {
          period: "1996",
          text: "The same review reports Replica \"will no longer be marketed from this year\". Tumbleweed's patent application, filed 24 October 1996, names only PDF and Envoy as being in widespread use.",
        },
        {
          period: "2008",
          text: "PDF is published as ISO 32000-1, an outcome available only to a format with a public specification.",
        },
      ],
    },
    {
      kind: "researchInset",
      title: "Claims this page deliberately does not make",
      items: [
        "That Adobe published the PDF Reference alongside Acrobat 1.0 in 1993. Widely repeated; not verified against a contemporary source in this pass.",
        "That Tumbleweed created Envoy, or that Envoy shipped with WordPerfect Office in March 1994. Both trace to a single encyclopaedia article, and Tumbleweed's own patent calls the format Novell's.",
        "That Envoy files were smaller or better than PDF. No public specification for Envoy has been located, so the comparison cannot be made here.",
        "That Adobe charged for Acrobat Reader and later made it free. Widely repeated and plausible, but unverified against a contemporary source in this pass.",
        "That Hummingbird acquired No Hands Software for six million dollars in 1996. The figure circulates only through hobbyist preservation writing, and sources disagree over whether Hummingbird invested in or acquired the renamed company.",
        "That DjVu belonged to this contest. It came out of AT&T Labs in the 1996-1998 window, after this market had resolved, and is a scanned-image codec rather than a print-capture portable-document product.",
        "That the Camelot paper is the PDF specification, or that \"Camelot shipped as Acrobat\". Camelot was the concept paper; Carousel was the internal codename of the product that shipped.",
        "That any surviving screenshot of Envoy, Common Ground or Replica is archival. No openly licensed image of any of the three could be located, and this page will not caption a substitute as though it were one.",
      ],
    },
    {
      kind: "callout",
      tone: "note",
      title: "Sourcing scope",
      text: "This page is built from primary documents where they exist — a patent specification, an IANA registration, an oral history, the Camelot paper itself — and from one contemporary trade review for the launch and withdrawal dates. Where sources disagree, both readings are printed. Where a widely repeated claim could not be traced past a single tertiary source, it is named as such rather than repeated. The references consulted are listed below.",
    },
  ],
  faqs: [
    {
      q: "What did people use to send a formatted document before PDF?",
      a: "Two practices, both named in Warnock's Camelot paper. PostScript and EPS were used as ad-hoc interchange — send the print stream instead of the source file — with the objection being cost rather than capability, since it \"requires powerful desktop machines and PostScript printers\". Fax was the reliability fallback, described in the same paper as workable but limited by \"the lack of quality, the high communication bandwidth and the device specific nature of FAX\".",
    },
    {
      q: "Who created Envoy?",
      a: "It is not settled. The conventional chain is WordPerfect Corporation, then Novell after the 1994 acquisition, then Corel. The commonly repeated claim that Tumbleweed introduced it in 1993 traces to a single encyclopaedia article; Tumbleweed's own 1996 patent filing refers to the format as \"Novell's Envoy\" and never claims to have originated it.",
    },
    {
      q: "Was Common Ground an open format?",
      a: "No, despite its reputation. Its own IANA registration of 11 April 1995 lists its published specification as \"Specification by example: From any version of the Common Ground full viewer, select 'Save As...'\", and says a paper specification would be available on request \"beginning in the middle of 1995\". It did, however, obtain a registered media type, which neither Envoy nor Replica ever did.",
    },
    {
      q: "What was Common Ground's Digital Paper?",
      a: "Digital Paper was the alternative name for the same format — the IANA registration states that application/commonground \"indicates a document in the Common Ground portable file format, also known as Digital Paper\". Its distinguishing design was the self-viewing document, a file that carried its own viewer; the registration records the Macintosh file type APPL and creator CGVM, meaning the document was an executable and therefore tied to one platform.",
    },
    {
      q: "Why did Farallon Replica disappear?",
      a: "A 1996 article in Online and CD-Rom Review records that Replica \"will no longer be marketed from this year\", roughly two years after launch. No verified account of the decision was located. Note that Farallon Computing was a Macintosh networking company that later became Netopia, so the name today points at network hardware rather than documents.",
    },
  ],
  related: [
    { section: "tools", slug: "what-is-pdf" },
    { section: "tools", slug: "postscript" },
    { section: "tools", slug: "iso-32000" },
    { section: "history", slug: "history-of-desktop-publishing" },
    { section: "history", slug: "printing-in-the-1990s" },
    { section: "history", slug: "enterprise-document-management" },
  ],
  published: "2026-08-26",
  updated: "2026-08-26",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "portable document formats before pdf",
    "envoy wordperfect format",
    "common ground digital paper",
    "farallon replica",
    "no hands software",
    "camelot paper warnock",
    "acrobat 1993 launch",
    "application/commonground",
    "pre-pdf document interchange",
  ],
  cluster: "printing-evolution",
  sources: [
    {
      title: "The Camelot Project (J. Warnock) — full paper text",
      url: "http://www.cs.unibo.it/~paolo.ciancarini/wwwpages/dd/camelot.pdf",
      publisher:
        "John Warnock / Adobe Systems (internal paper; copy mirrored at Università di Bologna, also hosted by the PDF Association)",
    },
    {
      title:
        "Oral History of John Warnock, part 2 of 2 (interviewed by David C. Brock, 26 April 2018; CHM Ref X8536.2018)",
      url: "https://archive.computerhistory.org/resources/access/text/2023/08/102738854-05-01-acc.pdf",
      publisher: "Computer History Museum",
    },
    {
      title:
        "US 5,790,790 — Electronic document delivery system in which notification of said electronic document is sent to a recipient thereof (Tumbleweed Software; filed 24 Oct 1996, granted 4 Aug 1998)",
      url: "https://patents.google.com/patent/US5790790A/en",
      publisher: "USPTO via Google Patents",
    },
    {
      title:
        "IANA media type registration: application/commonground (registration correspondence dated 11 April 1995)",
      url: "https://www.iana.org/assignments/media-types/application/commonground",
      publisher:
        "IANA / IETF media types registry; submitted by David Glazer, No Hands Software",
    },
    {
      title: "IANA Media Types registry (application tree)",
      url: "https://www.iana.org/assignments/media-types/media-types.xhtml",
      publisher: "IANA",
    },
    {
      title:
        "Portable Document Formats, Online and CD-Rom Review, Vol. 20 No. 1 (1996), pp. 33–35, DOI 10.1108/eb024560",
      url: "https://www.emerald.com/insight/content/doi/10.1108/eb024560/full/html",
      publisher: "Emerald (Online and CD-Rom Review)",
    },
    {
      title: "Farallon Computing — collection catalogue record 102739449",
      url: "https://www.computerhistory.org/collections/catalog/102739449",
      publisher: "Computer History Museum",
    },
    {
      title:
        "Google Patents assignee search: Farallon Computing, Inc. / No Hands Software",
      url: "https://patents.google.com/?assignee=Farallon+Computing",
      publisher: "USPTO records via Google Patents",
    },
    {
      title:
        "Evolution of the Digital Document: Celebrating Adobe Acrobat's 25th Anniversary (14 June 2018)",
      url: "https://blog.adobe.com/en/publish/2018/06/14/evolution-digital-document-celebrating-adobe-acrobats-25th-anniversary",
      publisher: "Adobe (corporate blog; an interested party)",
    },
    {
      title: "RFC 8118: The application/pdf Media Type",
      url: "https://www.rfc-editor.org/rfc/rfc8118.txt",
      publisher: "IETF / RFC Editor",
    },
    {
      title:
        "ISO 32000-1:2008 — Document management — Portable document format — Part 1: PDF 1.7",
      url: "https://www.iso.org/standard/51502.html",
      publisher: "ISO (International Organization for Standardization)",
    },
    {
      title: "Envoy (WordPerfect) — encyclopaedia article",
      url: "https://en.wikipedia.org/wiki/Envoy_(WordPerfect)",
      publisher:
        "Wikimedia Foundation (cited as the traceable origin of contested claims, not as corroboration)",
    },
  ],
};

export default entry;
