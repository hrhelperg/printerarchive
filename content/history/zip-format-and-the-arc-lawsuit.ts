import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "history",
  slug: "zip-format-and-the-arc-lawsuit",
  title:
    "How ZIP Became the Universal Archive: Phil Katz, ARC, and the 1988 Lawsuit",
  description:
    "ZIP opens everywhere because a 1988 lawsuit over a different format, ARC, pushed Phil Katz to build a new one and to publish its specification for anyone to use.",
  summary:
    "Opening a ZIP file is something most computers and phones simply do; creating a RAR archive generally still means the vendor's own program. The Library of Congress calls ZIP \"a de facto industry standard, developed, maintained, and openly documented by PKWARE,\" and records that RAR files \"can only be created through\" WinRAR. That asymmetry is not a verdict on compression quality. It is the long consequence of a legal dispute that had nothing to do with ZIP at all — a 1988 suit over a different archive format, which pushed the author of the losing side's tool into building something new and, decisively, into publishing how it worked.",
  era: "From BBS file library to universal container",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "The 1988 litigation was about ARC, PKARC and PKXARC — trademark, interface look and feel, and alleged code copying. ZIP was created after that dispute and partly because of it, not as its subject.",
        "The case settled out of court and produced no published opinion. The settlement terms that circulate online come from a document leaked onto bulletin boards, not from a court record, and secondary accounts contradict each other on the details.",
        "ZIP's universality rests on the freely published APPNOTE specification, not on compression ratio and not on ISO/IEC 21320-1:2015, which arrived twenty-six years later and only ratifies a restricted subset.",
        "Freely published is not the same as public domain: PKWARE's APPNOTE calls the document its exclusive property, permits use only to build products that read and write ZIP, and reserves certain patented technology behind a separate licence.",
        "RAR is the control case. Its decoder source is published and usable by anyone; its compressor is explicitly withheld, which is why almost every file manager can open a RAR and almost nothing but WinRAR can make one.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "The format the lawsuit was actually about",
    },
    {
      kind: "paragraph",
      text: "Before ZIP there was ARC, a DOS program from System Enhancement Associates that did two jobs at once: it bundled a set of files into a single container and compressed them on the way in. It was not the first program to do either thing — CP/M-era .LBR library files, paired with separate squeeze and unsqueeze utilities, had already split bundling from compression years earlier — but ARC fused the two operations into one command and became the de facto standard on DOS bulletin boards, where a single downloadable file was worth more than an elegant abstraction.",
    },
    {
      kind: "paragraph",
      text: "Phil Katz, working in Milwaukee, wrote PKARC and PKXARC: ARC-compatible tools that were substantially faster. On a bulletin board system, where a file library was measured in modem minutes, speed was not a nicety. The shareware channel these tools travelled through was small but real; the contemporaneous trade coverage preserved from 1988 puts the whole shareware market somewhere between five and fifteen million dollars, figures attributed to the Association of Shareware Professionals. That is the scale at which the dispute happened — not a corporate battle, but a fight between two small publishers over the same few thousand sysops.",
    },
    {
      kind: "heading",
      level: 2,
      text: "1988: what the record shows, and what it does not",
    },
    {
      kind: "paragraph",
      text: "System Enhancement Associates sued PKWARE in 1988. The curated case archive assembled by Jason Scott dates the filing to April of that year and describes the claims as covering the ARC trademark, the look and feel of ARC's command-line interface, and alleged lifting of ARC's code. The earliest dated primary artefact that survives in the open is a Usenet post of 14 June 1988 by Keith B. Petersen, the maintainer of the CP/M and MS-DOS archives at SIMTEL20, reproducing a press release: SEA \"claims that PKWare Inc. copied an SEA shareware program\" and \"has filed suit in U.S. District Court here.\"",
    },
    {
      kind: "paragraph",
      text: "What does not survive is a judgment, because there was never one to survive. The case settled, and every account of the terms — back royalties, expenses, a deadline after which PKWARE would stop shipping ARC-compatible tools, and the surrender of the ARC mark — traces back to a settlement document that was leaked onto bulletin boards rather than to anything filed in a reporter. Those terms are widely repeated as though they were adjudicated findings. They are not, and the retellings do not even agree with one another: some say SEA also obtained PKWARE's source code and customer list, others do not, and the cutoff date for ARC-compatible products is given as both the first and the last day of January 1989.",
    },
    {
      kind: "editorialAside",
      title: "Why you will not find a case citation",
      text: "SEA v. PKWARE is cited constantly and correctly cited almost never. Because it settled out of court — reported as 2 August 1988, in the U.S. District Court for the Eastern District of Wisconsin — there is no published opinion, no reporter volume, and no precedential holding on archive-format look and feel. Any page that offers you a case citation for it has manufactured one. The archive treats the settlement terms as attributed community documentation rather than as legal fact.",
    },
    {
      kind: "paragraph",
      text: "The community reaction outran the legal outcome by a wide margin. Sysops read the suit as an attack on the shareware ecosystem itself, and ARC — the incumbent standard, holding the field on merit and inertia — began losing its file libraries. That is the part of the story that actually mattered to the format's future. A standard that everyone had adopted by habit turned out to be held only by habit.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Why the dispute produced a new format instead of a better ARC",
    },
    {
      kind: "paragraph",
      text: "The settlement is reported to have barred PKWARE from continuing with ARC-compatible products — a term that comes from the leaked document, not from a court record. If it is right, it is the hinge of the whole story: Katz could not keep competing inside someone else's format, so he had to define his own. ZIP appeared in early 1989. The precise release date is one of the most frequently miscopied facts in computing history — a specific mid-February 1989 date circulates everywhere, but it belongs to a joint press release rather than to a first binary, and Wikipedia's detailed version history was deleted in 2022, leaving downstream accounts free to disagree. Version chronologies reconstructed from archived PKZIP executables place early releases in January and February 1989. \"Early 1989\" is what the evidence carries.",
    },
    {
      kind: "paragraph",
      text: "Even the name is softer than it looks. The account that Bob Mahoney, sysop of the EXEC-PC bulletin board, suggested \"ZIP\" for its connotation of speed rests on a single phone conversation recorded by Jason Scott. It is sourced, which is more than most origin stories manage, but it is sourced once.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The APPNOTE is the mechanism",
    },
    {
      kind: "paragraph",
      text: "Alongside the program, Katz published the specification. PKWARE's APPNOTE.TXT describes the container in implementable detail — the local file header that precedes each member, the central directory that indexes them all at the end of the file — and it has been revised and republished continuously since. The current text opens by noting that \"Since its first publication in 1989, PKWARE ... has remained committed to ensuring the interoperability of the .ZIP file format.\" The Library of Congress, assessing ZIP for preservation purposes, describes it as \"a de facto industry standard, developed, maintained, and openly documented by PKWARE,\" and records that \"The original version of the format was developed by Phil Katz (hence the PK in PKWARE).\"",
    },
    {
      kind: "paragraph",
      text: "This is the causal step. Because the container was documented, anyone could write a reader or a writer without reverse-engineering anything or asking permission — and people did. That is what the Library of Congress is recording when it calls ZIP a de facto industry standard, openly documented by PKWARE: not a decree handed down by a standards body, but a specification anyone could implement, which is how independent implementations reached platforms Katz never targeted, and how reading a ZIP file became an ordinary capability rather than a purchase. No amount of compression advantage produces that outcome. Publication does.",
    },
    {
      kind: "callout",
      tone: "warning",
      title: "\"Released into the public domain\" is not right",
      text: "The claim is repeated everywhere and it is at best a description of a 1989 press release, not of the format's legal status. APPNOTE §1.4 states that the document is PKWARE's exclusive property, permits its use \"solely for the purpose of creating products, programs and processes that read and write files in the ZIP format,\" forbids reproducing the document itself, and in §1.4.3 reserves certain patented PKWARE technology behind a separately executed licence. The accurate formulation is narrower and stronger: the classic ZIP core is freely published and implementable by anyone, which is exactly what universal support required.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What ZIP actually compressed, and when",
    },
    {
      kind: "paragraph",
      text: "The popular version of this story has Katz inventing Deflate and ZIP shipping with it from the start. Neither half holds. The first ZIP releases offered Shrinking, Reducing and Imploding; APPNOTE §5.1 describes Shrinking plainly as \"a Dynamic Ziv-Lempel-Welch compression algorithm\" — that is, LZW, the method covered by Sperry's, later Unisys's, US Patent 4,558,302, which would become a live commercial hazard for every format that used it in the early 1990s. Deflate arrived later and only then became the method everyone means when they say a file is zipped.",
    },
    {
      kind: "archivalTable",
      caption:
        "ZIP's compression methods did not arrive together, and the patent position differed sharply between them.",
      headers: ["Method", "Status in the format", "Legal exposure"],
      rows: [
        [
          "Shrinking",
          "Present in the earliest ZIP releases; documented in APPNOTE §5.1 as a dynamic Ziv-Lempel-Welch algorithm",
          "LZW, covered by US 4,558,302 (Welch); a significant constraint on adoption in the early 1990s",
        ],
        [
          "Reducing (factors 1-4) and Imploding",
          "Also present in the earliest releases; long since superseded and rarely produced by modern tools",
          "No comparable third-party patent claim documented in the sources consulted here",
        ],
        [
          "Deflate (method 8)",
          "Introduced in a 1991 PKZIP release and the default from the 2.04g generation onward; APPNOTE §4.1/§4.2 treat it as the standard method",
          "Katz's own US 5,051,745 (filed 21 August 1990, granted 24 September 1991, assigned to PKWARE, now expired) covers the hash-chain string search behind it",
        ],
      ],
      sources: [
        "PKWARE APPNOTE.TXT 6.3.3",
        "USPTO / Google Patents US 4,558,302 and US 5,051,745",
      ],
    },
    {
      kind: "paragraph",
      text: "Deflate then did something ZIP itself had not: it left home. In May 1996 it was specified independently as RFC 1951, an IETF Informational document written by L. Peter Deutsch. That is the concrete mechanism by which Katz's compression method became implementable outside PKZIP — zlib, gzip and PNG all build on it — and it is why the honest claim about patents is neither \"ZIP was always patent-free\" nor \"ZIP was patent-encumbered,\" but that Deflate specifically was widely judged implementable without infringement, at a moment when LZW manifestly was not.",
    },
    {
      kind: "paragraph",
      text: "If the APPNOTE argument is right, a format whose author made the opposite choice should show the opposite result. RAR is that experiment: the Library of Congress records that RAR files \"are the native format for WinRAR software and can only be created through this tool,\" although several options exist to open them. Why that is so — the licence clause that gives the decoder away and withholds the compressor by name — is traced in this archive's page on RAR and Eugene Roshal. What matters for the argument here is only the contrast: publication made ZIP implementable by anyone, and the absence of it left RAR's compressor where its rights holder chose to keep it.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What ISO standardisation did and did not do",
    },
    {
      kind: "paragraph",
      text: "A common shortcut says every system reads ZIP because it is an ISO standard. The chronology alone defeats this: ISO/IEC 21320-1 was published in 2015, twenty-six years after ZIP's release and long after universal support was an accomplished fact. What the standard does is define a Document Container File by normative reference to PKWARE's APPNOTE 6.3.3, and then deliberately restrict it — conforming files may use only stored or deflate compression, and encryption is prohibited. It is a narrowed profile for use inside other standards, ratifying a subset of something that had already won. Universal support both predates it and exceeds it.",
    },
    {
      kind: "timeline",
      events: [
        {
          period: "Mid-1980s",
          text: "ARC establishes bundling-plus-compression as routine on DOS bulletin boards. It is not the first program to do either job — CP/M .LBR files with separate squeeze utilities came earlier — but it is the one everyone standardises on.",
        },
        {
          period: "1988",
          text: "System Enhancement Associates sues PKWARE over ARC, PKARC and PKXARC. A Usenet post of 14 June 1988 by SIMTEL20's archive maintainer is the earliest dated primary artefact in the open record; the case is reported to have settled that August without a published opinion.",
        },
        {
          period: "Early 1989",
          text: "ZIP is released, together with the APPNOTE specification. Reportedly barred from ARC-compatible products, PKWARE builds a new format and documents it.",
        },
        {
          period: "1990-1993",
          text: "Katz files what becomes US 5,051,745 (granted 24 September 1991). Deflate enters PKZIP in 1991 and becomes the default from the 2.04g generation, displacing the LZW-based Shrinking method.",
        },
        {
          period: "May 1996",
          text: "RFC 1951 specifies Deflate independently at the IETF, making the compression method implementable outside PKZIP and enabling zlib, gzip and PNG.",
        },
        {
          period: "2015",
          text: "ISO/IEC 21320-1 defines a restricted Document Container File profile by normative reference to APPNOTE 6.3.3 — stored or deflate only, no encryption — long after ZIP's universality was settled.",
        },
      ],
    },
    {
      kind: "researchInset",
      title: "Where this record is thin",
      items: [
        "No published court opinion exists for SEA v. PKWARE. Settlement terms circulate from a document leaked onto bulletin boards and should be attributed, never asserted.",
        "The exact 1989 release date of ZIP is unsettled in the open record; the most-copied specific date belongs to a press release rather than a first binary.",
        "PKZIP version chronologies now depend on researchers working from archived executables, after a detailed encyclopedia version history was deleted in 2022.",
        "The origin of the name \"ZIP\" rests on a single recorded phone conversation and should be attributed as such.",
        "No freely licensed photograph of Phil Katz was located, which is why this page carries none.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "The coda, and what the specification is still doing",
    },
    {
      kind: "paragraph",
      text: "Phil Katz did not live to see the outcome settle. The Milwaukee Journal Sentinel reported that he was found dead on 14 April 2000 at 37, of acute pancreatic bleeding related to chronic alcoholism. The embellished retellings that make the lawsuit the cause of that decline are inferences the reporting does not make, and this archive does not make them either. What can be said is narrower and, in its way, larger: the constraint imposed on him in 1988 produced a decision — publish the format — whose effects long outlived both the dispute and the man.",
    },
    {
      kind: "paragraph",
      text: "That decision is why the argument of this page is testable rather than rhetorical. Because the ZIP container is documented for anyone to implement, and because Deflate is specified in a public RFC, an independent developer can build a ZIP reader and writer without negotiating a licence with anyone — no permission to request, no vendor to persuade, nothing to reverse-engineer. That is why ZIP-handling software exists on platforms PKWARE never shipped to, down to the archive utilities for phones and tablets that people install without thinking about it, ZIP & RAR among them. A published specification is not a gesture of goodwill. It is the thing that decides how far a format can travel.",
    },
    {
      kind: "paragraph",
      text: "The lesson generalises past archives. Formats do not become universal by being best; they become universal by being implementable, and implementability is a decision someone makes and writes down. ZIP's ubiquity is a thirty-five-year echo of a settlement that forced its author to start over — and of what he did with the second attempt.",
    },
  ],
  faqs: [
    {
      q: "Did the 1988 lawsuit involve the ZIP format?",
      a: "No. The suit concerned ARC and Phil Katz's ARC-compatible tools PKARC and PKXARC — the ARC trademark, the look and feel of ARC's command-line interface, and alleged copying of ARC code. ZIP was created after the dispute and partly because of it, since the settlement is reported to have barred PKWARE from continuing with ARC-compatible products.",
    },
    {
      q: "Is the ZIP format in the public domain?",
      a: "No, and the claim is one of the most widely repeated errors about it. PKWARE's APPNOTE calls the specification the company's exclusive property, permits its use solely to create products that read and write ZIP files, forbids reproducing the document itself, and reserves certain patented technology behind a separate licence. The accurate description is that the classic ZIP core is freely published and implementable by anyone.",
    },
    {
      q: "Did ZIP use Deflate from the beginning?",
      a: "No. The earliest ZIP releases offered Shrinking, Reducing and Imploding; APPNOTE describes Shrinking as a dynamic Ziv-Lempel-Welch algorithm, which is to say LZW. Deflate appeared in a 1991 PKZIP release and became the default from the 2.04g generation, then was specified independently as RFC 1951 in May 1996.",
    },
    {
      q: "Is ZIP universal because it is an ISO standard?",
      a: "Not causally. ISO/IEC 21320-1 was published in 2015, long after universal support existed, and it defines a deliberately restricted profile by normative reference to PKWARE's own APPNOTE — stored or deflate compression only, encryption prohibited. The published specification, and the portable third-party implementations it made possible, came first.",
    },
  ],
  related: [
    { section: "history", slug: "rar-format-and-eugene-roshal" },
    { section: "history", slug: "archive-formats-before-the-web" },
    { section: "guides", slug: "compression-before-ocr" },
    { section: "guides", slug: "digital-preservation" },
    { section: "tools", slug: "tiff" },
  ],
  published: "2026-08-26",
  updated: "2026-08-26",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "zip file format history",
    "sea v pkware",
    "arc lawsuit 1988",
    "phil katz pkzip",
    "appnote.txt specification",
    "deflate rfc 1951",
    "iso iec 21320-1",
  ],
  modernTools: ["zip-rar"],
  sources: [
    {
      title:
        "ZIP File Format (PKWARE), FDD ID fdd000354, Sustainability of Digital Formats",
      url: "https://www.loc.gov/preservation/digital/formats/fdd/fdd000354.shtml",
      publisher: "Library of Congress",
    },
    {
      title:
        "APPNOTE.TXT — .ZIP File Format Specification, Version 6.3.3 (1 September 2012)",
      url: "https://www.loc.gov/preservation/digital/formats/digformatspecs/APPNOTE%2820120901%29_Version_6.3.3.txt",
      publisher: "PKWARE, Inc. (archived copy hosted by the Library of Congress)",
    },
    {
      title:
        "ISO/IEC 21320-1:2015 — Information technology — Document Container File — Part 1: Core",
      url: "https://www.iso.org/standard/60101.html",
      publisher: "ISO",
    },
    {
      title:
        "RFC 1951 — DEFLATE Compressed Data Format Specification version 1.3",
      url: "https://www.rfc-editor.org/rfc/rfc1951",
      publisher: "IETF / RFC Editor",
    },
    {
      title: "US Patent 5,051,745 — String searcher, and compressor using same",
      url: "https://patents.google.com/patent/US5051745A/en",
      publisher: "USPTO / Google Patents (inventor Phillip W. Katz)",
    },
    {
      title: "US Patent 4,558,302 — High speed data compression and decompression apparatus and method (LZW)",
      url: "https://patents.google.com/patent/US4558302A/en",
      publisher: "USPTO / Google Patents",
    },
    {
      title:
        "\"Phil Katz (PKARC author) sued by SEA (ARC author)\" — Usenet post by Keith B. Petersen, 14 June 1988, reproducing the PKSUIT.TXT press release",
      url: "http://www.bbsdocumentary.com/library/CONTROVERSY/LAWSUITS/SEA/pksuit.txt",
      publisher: "BBS Documentary Library (Jason Scott)",
    },
    {
      title:
        "SEA vs. PKWARE — curated archive of case documents and contemporaneous coverage",
      url: "http://www.bbsdocumentary.com/library/CONTROVERSY/LAWSUITS/SEA/",
      publisher: "BBS Documentary Library (Jason Scott)",
    },
    {
      title:
        "\"Computer genius led sad and lonely life, and died in same way\" (syndicated reprint of the Milwaukee Journal Sentinel profile by Lee Hawkins Jr., 21 May 2000)",
      url: "https://journaltimes.com/news/state-and-regional/computer-genius-led-sad-and-lonely-life-and-died-in/article_fffbe0fb-16a3-59f0-be30-dcd7f697bb93.html",
      publisher: "The Journal Times (Racine, WI)",
    },
    {
      title:
        "RAR Archive File Format Family, FDD ID fdd000450, Sustainability of Digital Formats",
      url: "https://www.loc.gov/preservation/digital/formats/fdd/fdd000450.shtml",
      publisher: "Library of Congress",
    },
    {
      title: "UnRAR license.txt, shipped inside unrarsrc-7.1.6.tar.gz",
      url: "https://www.rarlab.com/rar/unrarsrc-7.1.6.tar.gz",
      publisher: "RARLAB (win.rar GmbH)",
    },
    {
      title: "\"Aversion to History: A PKZIP/Wikipedia Story\" (5 April 2025)",
      url: "https://www.pcjs.org/blog/2025/04/05/",
      publisher: "PCjs Machines (Jeff Parsons)",
    },
  ],
  cluster: "impact-and-early-digital",
};

export default entry;
