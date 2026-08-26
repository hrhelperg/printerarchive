import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "history",
  slug: "rar-format-and-eugene-roshal",
  title:
    "RAR, Eugene Roshal, and the Licence That Splits Decoder from Encoder",
  description:
    "RAR's decoder is published for anyone to use; its compressor is withheld by one licence clause. That clause, not compression quality, decides who can write RAR.",
  summary:
    "RAR is the control case for how archive formats spread. It shared an era and a problem with ZIP and took the opposite licensing posture, and the result is visible on any device you own: a RAR archive opens almost anywhere, and creating one almost always means the vendor's own program. The reason is not a technical secret. It is a single paragraph in a licence file that RARLAB itself ships, which gives away everything needed to decode a RAR archive and withholds, by name, everything needed to make one.",
  era: "From shareware archiver to source-available decoder",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "The licence shipped with the UnRAR source permits that source in any software to handle RAR archives free of charge, but states it \"cannot be used to develop RAR (WinRAR) compatible archiver and to re-create RAR compression algorithm, which is proprietary.\"",
        "That clause is the whole mechanism. It is why third-party file managers and operating systems can extract RAR archives, and why producing one generally means the vendor's tool.",
        "\"Eugene Roshal owns RAR\" is the standard error. The licence names Alexander Roshal as the copyright holder and is signed by him; the Library of Congress records the same, describing him as Eugene's brother.",
        "Neither \"closed source\" nor \"open source\" fits. Source-available and decoder-only is the accurate description, and it is precisely why the licence fails Fedora's free-software policy.",
        "RARLAB's own acknowledgements credit published work by others for the internals — Shkarin's PPMII, Subbotin's carryless range coder, and Reed-Solomon research behind recovery records — not invention from nothing.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "The paragraph that decides everything",
    },
    {
      kind: "paragraph",
      text: "The load-bearing document in this story is not a specification, a court filing or an interview. It is a licence file roughly a page long, distributed inside RARLAB's own UnRAR source tarball, which anybody can download without agreeing to anything first. Its first clause reads: \"All copyrights to RAR and the utility UnRAR are exclusively owned by the author - Alexander Roshal.\" Its second clause is the one that shaped how RAR-handling software could be built.",
    },
    {
      kind: "pullquote",
      text: "UnRAR source code may be used in any software to handle RAR archives without limitations free of charge, but cannot be used to develop RAR (WinRAR) compatible archiver and to re-create RAR compression algorithm, which is proprietary.",
      attribution: "license.txt, shipped inside the UnRAR source distribution",
    },
    {
      kind: "paragraph",
      text: "Read that as an engineering instruction rather than as legal boilerplate. Everything a program needs in order to decompress a RAR archive is handed over: real source code, usable in any software, free of charge, without limitation. Everything a program would need in order to compress one is withheld, and withheld specifically — not by silence or obscurity, but by an explicit prohibition on building a compatible archiver or re-creating the algorithm. A reader can be built by anyone. A writer cannot be built legitimately at all.",
    },
    {
      kind: "paragraph",
      text: "The consequence is the thing most people notice about RAR without ever knowing why. The Library of Congress, assessing the format for preservation purposes, states it flatly: RAR files \"are the native format for WinRAR software and can only be created through this tool which is licensed to win.rar GmbH although there are several options to open RAR files.\" That is not a description of a difficult format. It is a description of a licence.",
    },
    {
      kind: "heading",
      level: 2,
      text: "How the split is maintained in practice",
    },
    {
      kind: "paragraph",
      text: "It would be reasonable to assume the decoder is a separate, hand-maintained project — a stripped reimplementation kept in step with the real one. It is not. The readme shipped alongside the licence explains that \"Unrar source is subset of RAR and generated from RAR source automatically, by a small program removing blocks like #ifndef UNRAR ... #endif.\" The published decoder is the private codebase with the encoder mechanically cut out of it, marked off in advance by preprocessor guards so the cut can be repeated on demand.",
    },
    {
      kind: "paragraph",
      text: "This detail matters more than it first appears. It means the asymmetry is not an accident of history that nobody got round to fixing, and not a matter of the compressor being too entangled to release. The two halves live in one tree, and the boundary between what is given away and what is kept is drawn deliberately, in source, and re-drawn every time a new version ships. The line between decoder and encoder is a maintained artefact.",
    },
    {
      kind: "callout",
      tone: "warning",
      title: "Not closed source, and not open source either",
      text: "Both shorthand descriptions of RAR are wrong, in opposite directions. \"Closed source\" misses that RARLAB publishes real, buildable decoder source and permits it in any software free of charge — which is exactly why RAR support is so widespread. \"Open source\" misses that clause 2 makes the licence non-free under Fedora's policy, which is why Fedora keeps a standing licensing record explaining the position. The accurate phrase is source-available, decoder-only. RARLAB's own readme calls the decoder freeware; that is a price description, not a rights description.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Who wrote RAR, and who owns it",
    },
    {
      kind: "paragraph",
      text: "Almost every account of this format says Eugene Roshal owns RAR. The primary documents say otherwise, and they say it twice over. The UnRAR licence vests all copyright in Alexander Roshal and is signed \"Alexander L. Roshal.\" Independently, the Library of Congress records the copyright in \"RAR's compression applications and libraries to Alexander Roshal, brother of Eugene Roshal,\" while naming Eugene as the person the format is named after. Two unrelated sources, one conclusion: the author of the code and the holder of the rights are different people.",
    },
    {
      kind: "paragraph",
      text: "There is an oddity here worth flagging rather than tidying away. The licence describes Alexander as \"the author\" — a word that sits awkwardly against every other account, including the Library of Congress entry, in which Eugene is the one who wrote the thing. The sources consulted for this page do not reconcile that, and this archive is not going to reconcile it by choosing whichever reading reads more smoothly. What can be stated is the division of roles the documents actually support.",
    },
    {
      kind: "archivalTable",
      caption:
        "Three distinct roles that popular accounts routinely collapse into one person.",
      headers: ["Party", "Role the documents support", "Evidence"],
      rows: [
        [
          "Eugene Roshal",
          "Author of the format and its code; the R in RAR",
          "Library of Congress format description; the BSD licence header on his other program, Far Manager, reading \"Copyright (c) 1996, Eugene Roshal\"",
        ],
        [
          "Alexander Roshal",
          "Copyright holder in RAR, UnRAR and the compression applications and libraries",
          "UnRAR license.txt clause 1, signed \"Alexander L. Roshal\"; Library of Congress, which describes him as Eugene's brother",
        ],
        [
          "win.rar GmbH (RARLAB)",
          "Licensee and distributor; publisher of WinRAR, of the RAR 5.0 technical note, and of the UnRAR source drops",
          "Library of Congress (\"licensed to win.rar GmbH\"); RARLAB's own licensing page and published technical note",
        ],
      ],
      sources: [
        "UnRAR license.txt, unrarsrc distribution",
        "Library of Congress FDD ID fdd000450",
        "FarGroup/FarManager LICENSE (BSD 3-Clause)",
      ],
    },
    {
      kind: "paragraph",
      text: "It also follows that calling RARLAB \"Roshal's company\" without qualification overstates the record. win.rar GmbH is a German company holding a licence, with its own management, and the documents describe it as licensee rather than as author or owner.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The dates that will not confirm",
    },
    {
      kind: "paragraph",
      text: "Biographical writing about RAR is unusually confident for how little it rests on. The commonly repeated release dates — RAR in 1993, WinRAR in the spring of 1995 — trace to encyclopedias and vendor-adjacent pages rather than to any archival artefact, dated press release or contemporaneous trade item located for this page. The same is true of Roshal's reported birth date and birthplace. None of that means the dates are wrong. It means they are unverified, and an archive that repeats them as though they were settled is quietly manufacturing certainty.",
    },
    {
      kind: "editorialAside",
      title: "A biography with no archive behind it",
      text: "Searches on Eugene Roshal surface a tribute site written in memorial register that ranks well and is not a primary source, shows no evidence of affiliation with RARLAB, and cites nothing checkable. It is the kind of page that facts get laundered through: a claim appears there, gets cited by a blog, and returns three years later looking sourced. This page does not cite it, and readers tracing RAR's history should treat its biographical specifics as unattributed until a dated document turns up.",
    },
    {
      kind: "paragraph",
      text: "One date does survive the test, and it belongs to a different program. Far Manager — the other program Roshal is widely known for — carries a BSD 3-Clause licence file reading \"Copyright (c) 1996, Eugene Roshal\" and \"Copyright (c) 2000, Far Group.\" That is a primary document: a licence header, in a live repository, naming both the author and the year. It is the firmest dated fact in this biography, and it comes from the project he gave away rather than the one he did not.",
    },
    {
      kind: "heading",
      level: 2,
      text: "A documented container with an undocumented compressor",
    },
    {
      kind: "paragraph",
      text: "\"RAR is undocumented\" is another convenient half-truth. For the current generation it is simply false: RARLAB publishes a technical note describing RAR 5.0's data structures in implementable detail — the archive signature, the general block format, variable-length integers, the main archive header, file and service headers, encryption headers, the end-of-archive marker. Anyone can read it. What that document does at the top, though, is tell you where it stops: if you need information about the algorithms, it says, use the UnRAR source code.",
    },
    {
      kind: "paragraph",
      text: "That single redirection is the licence expressed as documentation policy. The container — how blocks are framed, where headers sit, how the file is laid out — is published prose. The compression itself is published only as a decoder you may read and use but may not use to build a compressor. A preservation engineer can parse a RAR archive's structure from the vendor's own text; the moment they want to produce one, the text hands them back to the licence.",
    },
    {
      kind: "paragraph",
      text: "The earlier generations are a different problem, and the honest position on them is silence. The Library of Congress states that RAR 1.3 and RAR 1.5 have no public documentation at all and are only thought to underlie later versions. When the national library's format registry declines to describe a format's internals, no secondary account is in a position to do better; claims about what the first RAR versions did internally should be read as reconstruction, not record.",
    },
    {
      kind: "archivalTable",
      caption:
        "How the RAR generations appear in the two public registries that catalogue them.",
      headers: ["Generation", "Registry position", "Documentation status"],
      rows: [
        [
          "RAR 1.3 and 1.5",
          "Described by the Library of Congress within the RAR format family entry",
          "No public documentation; thought to be the base for later versions",
        ],
        [
          "RAR 2.x",
          "Given its own Library of Congress format description",
          "Not covered by RARLAB's published technical note, which describes RAR 5.0",
        ],
        [
          "RAR4, also recorded as RAR version 2.9",
          "PRONOM PUID fmt/411, \"RAR Archive 2.9\"; MIME type application/vnd.rar",
          "Same format under two names — a tool reporting \"2.9\" is not reporting a distinct older format",
        ],
        [
          "RAR 5.0",
          "PRONOM PUID fmt/613, with an identification signature; own Library of Congress description",
          "Container documented by RARLAB's technical note; algorithms deferred to the UnRAR source",
        ],
      ],
      sources: [
        "Library of Congress, Sustainability of Digital Formats, FDD IDs fdd000450, fdd000457, fdd000458 and fdd000459",
        "The National Archives (UK), PRONOM fmt/411 and fmt/613",
        "RARLAB, RAR 5.0 technical note",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "What is actually being withheld",
    },
    {
      kind: "paragraph",
      text: "It is tempting to imagine the withheld compressor as a piece of unshared mathematics. RARLAB's own acknowledgements file argues against that reading. It credits the text-compression side of the RAR4 generation to Dmitry Shkarin's PPMII work and to Dmitry Subbotin's carryless range coder, and credits the recovery-record functionality to published Reed-Solomon research. Those are named, public contributions from the compression literature, acknowledged by the vendor in the same source distribution that carries the licence.",
    },
    {
      kind: "paragraph",
      text: "So the thing behind clause 2 is better understood as an engineered combination — parameter choices, modelling, format integration, years of tuning — than as a secret unknown to the field. That is exactly why the restriction has to be written down rather than merely relied upon. Obscurity would not have held. A licence does.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The counterfactual next door",
    },
    {
      kind: "paragraph",
      text: "ZIP, a format from the same era, faced the same problem and made the opposite choice. PKWARE published a container specification openly and kept republishing it, and the Deflate method at ZIP's core was later specified independently at the IETF as RFC 1951 in May 1996, which left anyone who wanted one with an implementable description of the container from PKWARE and of the Deflate method from the IETF. The Library of Congress describes ZIP as a de facto industry standard, openly documented by its vendor. The outcome is the one everybody lives inside: a ZIP archive can be both read and written by software built from a freely published specification, without negotiating with the vendor — the classic Deflate core, at least; PKWARE reserves certain later patented technology behind a separate licence.",
    },
    {
      kind: "paragraph",
      text: "Set the two side by side and the variable isolates itself. Same era, same job, comparable technical seriousness, and one difference that matters — whether the compressor was made implementable by third parties. This page takes no position on which format compresses better, because that question is benchmark-dependent and, for this argument, beside the point. Universality did not follow the better compressor. It followed the published one.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The same author's other program went the other way",
    },
    {
      kind: "paragraph",
      text: "The contrast is not a claim about a person's disposition, and it would be lazy to make it one. Far Manager, the other program Roshal is known for, is published under a BSD 3-Clause licence — the permissive, OSI-recognised kind, with no clause carving out any part of the program from reuse — and the project's own site documents its move to published source after it passed out of his hands. One program by the same author is free software by any standard definition. The other publishes a decoder and prohibits an encoder.",
    },
    {
      kind: "paragraph",
      text: "What separates them is not temperament but commercial structure. Far Manager had no product on the other side of it; RAR did, and still does, in the form of a licensed archiver sold by a company that holds the rights under licence from the copyright holder. Clause 2 is the load-bearing wall of that arrangement. Remove it and the commercial position of the archiver changes, which is a plausible reading of why the clause is still there in the current source drop.",
    },
    {
      kind: "researchInset",
      title: "Where this record is thin",
      items: [
        "The commonly cited 1993 RAR and 1995 WinRAR release dates rest on encyclopedias and vendor-adjacent pages, not on dated archival artefacts.",
        "Eugene Roshal's reported birth date and birthplace trace to the same weak chain and should be treated as commonly reported rather than established.",
        "The UnRAR licence calls Alexander Roshal \"the author\" while other sources credit Eugene with writing the format; no consulted source reconciles the two.",
        "RAR 1.3 and 1.5 have no public documentation, and the Library of Congress declines to describe their internals.",
        "No freely licensed photograph of Eugene Roshal was located in any open image repository, which is why this page carries no portrait.",
        "Present-day WinRAR trial behaviour is a live end-user-licence question, not a historical one, and is deliberately outside this page's scope.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "The clause, running on a phone",
    },
    {
      kind: "paragraph",
      text: "The reason this piece of licence archaeology is worth a reader's time is that its consequence is testable in about ten seconds on whatever device is nearest. Long-press a RAR archive on a phone and something will offer to extract it — because RARLAB's decoder may be used in any software free of charge. Try to produce one and the option is generally missing. ZIP & RAR, an archiver built for phones, sits exactly on that boundary: it can extract a RAR archive because the decoder is published for that purpose, and it can create ZIP archives because ZIP's compression is independently specified and implementable by anyone. The capability gap between those two operations is not a gap in the software. It is clause 2, executing.",
    },
    {
      kind: "paragraph",
      text: "That is also the useful lesson for anyone choosing a format for material meant to outlive the tool that made it. Both public format registries that catalogue RAR flag its proprietary status, and preservation guidance generally prefers containers with independent implementations for exactly the reason this page has been tracing: a format you can only write with one vendor's program is a format whose future is that vendor's to decide. RAR is not a cautionary tale about bad engineering. It is a demonstration that the terms attached to a format do more to determine its reach than the format's own quality ever will.",
    },
  ],
  faqs: [
    {
      q: "Why can my computer open a RAR file but not create one?",
      a: "Because RARLAB publishes a decoder and withholds an encoder. The licence shipped with the UnRAR source permits that source in any software to handle RAR archives free of charge, but states that it cannot be used to develop a RAR-compatible archiver or to re-create the RAR compression algorithm, which it calls proprietary. Extraction support is therefore easy to add legitimately; creation support is not.",
    },
    {
      q: "Does Eugene Roshal own RAR?",
      a: "The primary documents say the rights sit elsewhere. The UnRAR licence states that all copyrights to RAR and UnRAR are exclusively owned by Alexander Roshal and is signed by him, and the Library of Congress independently records the copyright as Alexander's, describing him as Eugene's brother. Eugene is credited as the author of the format and its code, and win.rar GmbH holds the licence as distributor.",
    },
    {
      q: "Is RAR closed source?",
      a: "Not in the usual sense, and not open source either. RARLAB publishes real decoder source that may be used in any software free of charge, so a great deal of RAR-reading software is built on the vendor's own code. But because the licence prohibits using it to build a compatible archiver or re-create the compressor, it is treated as non-free by Fedora, which keeps a standing licensing record explaining why. Source-available and decoder-only is the accurate description.",
    },
    {
      q: "Is the RAR format documented?",
      a: "Partly. RARLAB publishes a technical note describing the RAR 5.0 container — signature, block format, headers, variable-length integers — but directs readers to the UnRAR source for the algorithms. The Library of Congress states that RAR 1.3 and 1.5 have no public documentation at all and are only thought to be the base for later versions.",
    },
    {
      q: "Are RAR4 and \"RAR 2.9\" different formats?",
      a: "No. They are the same generation under two names, which the Library of Congress notes explicitly and which appears in the UK National Archives' PRONOM registry as \"RAR Archive 2.9\" under PUID fmt/411. A tool reporting 2.9 is not identifying an older, distinct format.",
    },
  ],
  related: [
    { section: "history", slug: "zip-format-and-the-arc-lawsuit" },
    { section: "tools", slug: "tiff" },
    { section: "guides", slug: "digital-preservation" },
    { section: "workflows", slug: "government-records-archives" },
    { section: "guides", slug: "records-management" },
  ],
  published: "2026-08-26",
  updated: "2026-08-26",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "rar file format history",
    "unrar licence clause",
    "eugene roshal",
    "alexander roshal copyright",
    "winrar win.rar gmbh",
    "rar 5.0 technical note",
    "source available decoder only",
    "far manager bsd licence",
    "pronom fmt/411 rar",
  ],
  cluster: "impact-and-early-digital",
  modernTools: ["zip-rar"],
  sources: [
    {
      title:
        "RAR Archive File Format Family, FDD ID fdd000450, Sustainability of Digital Formats",
      url: "https://www.loc.gov/preservation/digital/formats/fdd/fdd000450.shtml",
      publisher: "Library of Congress",
    },
    {
      title: "RAR Archive File Format, Version 2, FDD ID fdd000457",
      url: "https://www.loc.gov/preservation/digital/formats/fdd/fdd000457.shtml",
      publisher: "Library of Congress",
    },
    {
      title: "RAR Archive File Format, Version 4, FDD ID fdd000458",
      url: "https://www.loc.gov/preservation/digital/formats/fdd/fdd000458.shtml",
      publisher: "Library of Congress",
    },
    {
      title: "RAR Archive File Format, Version 5, FDD ID fdd000459",
      url: "https://www.loc.gov/preservation/digital/formats/fdd/fdd000459.shtml",
      publisher: "Library of Congress",
    },
    {
      title: "PRONOM technical registry, PUID fmt/411 — RAR Archive 2.9",
      url: "https://www.nationalarchives.gov.uk/PRONOM/fmt/411",
      publisher: "The National Archives (UK)",
    },
    {
      title: "PRONOM technical registry, PUID fmt/613 — RAR Archive 5.0",
      url: "https://www.nationalarchives.gov.uk/pronom/fmt/613",
      publisher: "The National Archives (UK)",
    },
    {
      title: "RAR 5.0 archive format — technical note",
      url: "https://www.rarlab.com/technote.htm",
      publisher: "RARLAB (win.rar GmbH)",
    },
    {
      title: "UnRAR license.txt, shipped inside unrarsrc-7.1.6.tar.gz",
      url: "https://www.rarlab.com/rar/unrarsrc-7.1.6.tar.gz",
      publisher: "RARLAB (win.rar GmbH), signed \"Alexander L. Roshal\"",
    },
    {
      title:
        "UnRAR readme.txt and acknow.txt, same source distribution (unrarsrc-7.1.6.tar.gz)",
      url: "https://www.rarlab.com/rar/unrarsrc-7.1.6.tar.gz",
      publisher: "RARLAB (win.rar GmbH)",
    },
    {
      title: "WinRAR licensing page",
      url: "https://www.rarlab.com/license.htm",
      publisher: "RARLAB (win.rar GmbH)",
    },
    {
      title: "Far Manager LICENSE (BSD 3-Clause), FarGroup/FarManager repository",
      url: "https://github.com/FarGroup/FarManager/blob/master/LICENSE",
      publisher: "Far Group",
    },
    {
      title: "Far Manager official site — open source page",
      url: "https://www.farmanager.com/opensource.php",
      publisher: "Far Group",
    },
    {
      title: "Licensing:Unrar — distribution policy record",
      url: "https://fedoraproject.org/wiki/Licensing:Unrar",
      publisher: "Fedora Project Wiki",
    },
    {
      title:
        "RFC 1951 — DEFLATE Compressed Data Format Specification version 1.3 (P. Deutsch, May 1996)",
      url: "https://www.rfc-editor.org/rfc/rfc1951",
      publisher: "IETF / RFC Editor",
    },
    {
      title:
        "ZIP File Format (PKWARE), FDD ID fdd000354, Sustainability of Digital Formats",
      url: "https://www.loc.gov/preservation/digital/formats/fdd/fdd000354.shtml",
      publisher: "Library of Congress",
    },
  ],
};

export default entry;
