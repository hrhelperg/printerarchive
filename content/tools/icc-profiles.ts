import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "icc-profiles",
  "title": "ICC Color Profiles",
  "description": "ICC color profiles are ISO 15076-standardized files that characterize device color so it translates consistently across scanners, displays, and printers.",
  "summary": "ICC color profiles are standardized data files, defined by the International Color Consortium and published as ISO 15076-1, that characterize the color behavior of a device or color space so color can be translated consistently as it moves between devices, applications, and platforms. Each profile maps a device's native color space to a shared device-independent reference called the Profile Connection Space (PCS), letting independently authored profiles be chained at run time. Introduced in 1994 and honored by operating-system color frameworks, PDF, and RIPs, ICC profiles are the open foundation of cross-platform color management.",
  "purpose": "Standardized files that characterize device color so it translates consistently across devices and platforms.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Apple developed ColorSync 1.0, a Macintosh-only color management architecture that shipped as part of an operating system release around 1993. That same year, a group of vendors formed the International Color Consortium (ICC) to create an open, vendor-neutral color management system intended to work across operating systems and applications rather than within a single proprietary environment."
    },
    {
      "kind": "paragraph",
      "text": "The eight founding members are Adobe, Agfa, Apple, Kodak, Microsoft, Silicon Graphics, Sun Microsystems, and Taligent; several (Silicon Graphics, Sun Microsystems, and Taligent) have since left the consortium. The cross-platform profile format the ICC defined was adopted into ColorSync 2.0."
    },
    {
      "kind": "paragraph",
      "text": "The ICC profile format was initially released in 1994 (this first generation, ICCv2, is internally versioned \"3.0\"). A revised specification, ICCv4, was published later (secondary sources date it to December 2001). The specification was subsequently published as an International Standard, ISO 15076-1:2005, based on ICC.1:2004-10 and developed cooperatively by the ICC and ISO Technical Committee 130 (TC 130); the ICC described it as the first International Standard produced under that agreement. A later edition, ISO 15076-1:2010, is based on ICC.1:2010. The current traditional-profile specification is ICC.1:2022 (version 4.4), and a next-generation architecture, iccMAX (ICC.2), extends the model beyond fixed colorimetry."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Before device-independent color management, color values such as RGB or CMYK were device-dependent: the same RGB triplet produced different colors on different monitors, and identical CMYK values printed differently on different presses. There was no reliable way to know what color a given set of numbers actually represented, or to reproduce it faithfully across a scanner, a display, and a printer."
    },
    {
      "kind": "paragraph",
      "text": "ICC profiles solved this by anchoring device numbers to an unambiguous, perceptually defined reference space (the PCS, built on CIE colorimetry). A profile states, in effect, that on a particular device these numbers correspond to this measured color. With that anchor, any device's color can be translated into any other's through the shared reference, giving predictable, repeatable color across an open ecosystem of vendors and platforms rather than within a single proprietary system."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "A profile characterizes a device or color space by defining a mapping between its native (device-dependent) space and a shared device-independent Profile Connection Space (PCS). Because every profile connects to the same PCS, profiles authored independently by different vendors can be chained at run time."
    },
    {
      "kind": "list",
      "items": [
        "Profile Connection Space (PCS): the reference hub, expressed as either CIEXYZ or CIELAB (L\\a\\b\\*), normalized to the D50 white point and grounded in the CIE 1931 standard colorimetric observer. Reference measurement conditions align with ISO 13655, and reference viewing conditions align with ISO 3664.",
        "Translation chain: converting from one device to another is expressed as two steps — transform device A's values into the PCS using A's profile, then transform out of the PCS into device B's values using B's profile.",
        "Profile contents: a fixed-format header plus a tag table of tagged elements. Transform data may be stored as tone-reproduction curves plus a matrix (for simple three-component displays) or as multidimensional lookup tables, or LUTs (for complex devices such as printers).",
        "CMM: a Color Management Module (color engine) reads the profiles and performs the math; examples include Apple ColorSync, Microsoft ICM/WCS, and the open-source Little CMS."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The profile file is binary (commonly .icc or .icm), identified internally by the four-character signature acsp. Because device gamuts differ, a profile can hold several transforms, one per rendering intent:"
    },
    {
      "kind": "list",
      "items": [
        "Perceptual — compresses the whole source gamut to fit the destination, preserving overall visual relationships; suited to photographs (implementation is partly vendor-specific).",
        "Media-relative colorimetric — reproduces in-gamut colors exactly after white-point scaling and clips out-of-gamut colors.",
        "ICC-absolute colorimetric — reproduces in-gamut colors without white-point adaptation; used for proofing and spot colors.",
        "Saturation — favors vivid, saturated color over exact matching; suited to business graphics and charts (implementation is partly vendor-specific)."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the print/document pipeline"
    },
    {
      "kind": "paragraph",
      "text": "ICC profiles operate at the color-conversion layer of the imaging pipeline, between content authoring and device output. A typical path runs through several stages:"
    },
    {
      "kind": "list",
      "items": [
        "Capture or creation — a scanner or camera profile (or an assumed working space such as sRGB or Adobe RGB) tags the source data.",
        "Editing — the application works in a profiled working space and previews via the display profile, a practice known as soft proofing.",
        "Conversion — when output is requested, the CMM converts source into the PCS and then into the destination-device space, using the chosen profile and rendering intent.",
        "Output — the destination-device profile (printer or press) produces the final device values, such as CMYK, sent to the marking engine."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Profiles are typically embedded in documents and images (in TIFF, JPEG, PNG, PDF, and other formats) so the receiving system knows how to interpret the numbers it is given."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "Printer and press profiles are among the most complex ICC profiles because printing is highly non-linear and multi-channel (CMYK and beyond). Such output profiles usually rely on multidimensional lookup tables built from measured print targets, and they carry gamut information used by the rendering intents to compress or clip colors the device cannot reproduce."
    },
    {
      "kind": "paragraph",
      "text": "Because reproduction depends on the physical process, a printer profile is specific to a combination of printer, ink or toner, paper or media, and often halftoning and driver settings; a different paper generally requires a different profile. Standardized printing conditions characterized under ISO printing standards are commonly distributed as reference ICC output profiles."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "paragraph",
      "text": "ICC profiles are honored by the color-management frameworks built into major operating systems:"
    },
    {
      "kind": "list",
      "items": [
        "Apple macOS — ColorSync, whose 2.0 release adopted the cross-platform ICC format, serves as Apple's system CMM and profile manager.",
        "Microsoft Windows — Image Color Management (ICM) and the later Windows Color System (WCS) consume ICC profiles.",
        "Linux and Unix — profile handling via CUPS and color-management services such as colord, commonly using the open-source Little CMS engine."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Across these systems, the OS stores profiles in known locations, lets users assign display and device profiles, and exposes a CMM that applications call to perform conversions — consistent with the ICC's stated founding goal of color management that works transparently across all operating systems."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF / PostScript / drivers"
    },
    {
      "kind": "paragraph",
      "text": "ICC profiles integrate with the major page-description and document formats used in printing:"
    },
    {
      "kind": "list",
      "items": [
        "PDF supports ICC-based color spaces directly: an ICC profile stream can be embedded and referenced as an ICCBased color space, and output-oriented workflows use PDF/X with an output intent that names or embeds the destination profile, letting a PDF carry portable, unambiguous color.",
        "PostScript Level 2 and 3 introduced device-independent, CIE-based color spaces and Color Rendering Dictionaries; tooling can convert between ICC profiles and PostScript color-space constructs so ICC-managed color can be expressed in a PostScript stream.",
        "Drivers and RIPs use output profiles to convert incoming color into the device's native inks. Depending on the workflow, color management may be performed by the application, by the OS or driver, or by the RIP — and correct setup requires that only one stage manage color, to avoid double conversions."
      ]
    },
    {
      "kind": "paragraph",
      "text": "(The PDF and PostScript specifics above reflect established Adobe and ISO documentation but were not fetched from primary specifications in preparing this page.)"
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "ICC color management is pervasive across imaging and prepress. It underlies soft proofing and print output in professional workflows, color-accurate display calibration and profiling, camera and scanner characterization, and consistent color in cross-application, cross-platform document exchange. Profiles are embedded in web and print image formats and in PDFs, and are integrated into OS color pipelines, RIPs, and design and photo applications."
    },
    {
      "kind": "paragraph",
      "text": "The evolving iccMAX (ICC.2) specification extends the model beyond fixed D50 colorimetry to spectral data, alternative illuminants and observers, and more flexible processing for advanced and specialized workflows."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Vendor-neutral and open, standardized as ISO 15076, avoiding lock-in to a single proprietary system.",
        "Cross-platform and cross-application consistency through a common Profile Connection Space.",
        "Modular: any source profile can pair with any destination profile at run time.",
        "Portable: profiles can be embedded in documents and images so color intent travels with the content.",
        "Flexible gamut handling through four rendering intents for different content types.",
        "Broadly supported in operating systems, PDF, RIPs, and imaging software."
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
        "Setup complexity: accurate results require calibrated devices, quality profiling, and ensuring that only one stage in the chain manages color.",
        "Gamut loss is unavoidable when the destination cannot reproduce source colors; rendering intents mitigate but cannot eliminate this.",
        "Vendor variation in the perceptual and saturation intents means results can differ between CMMs for the same profile.",
        "Condition-specific profiles: printer profiles are tied to a particular media, ink, and settings combination and must be remade when those change.",
        "Fixed colorimetric model (v2/v4): classic profiles assume a single D50 adaptation and the 1931 observer and do not natively handle spectral data or variable viewing conditions — a gap iccMAX is designed to address.",
        "Accuracy depends on measurement quality of the characterization targets and instruments."
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
        "ISO 15076-1 — the international standard form of the ICC profile format.",
        "ICC.1 / ICC.2 (iccMAX) — the ICC specification documents themselves.",
        "CIE colorimetry — CIEXYZ, CIELAB, the D50 white point, and the 1931 standard observer, the basis of the PCS.",
        "ISO 13655 (measurement) and ISO 3664 (viewing conditions) — referenced measurement and viewing standards.",
        "PDF/X (ISO 15930) — print-oriented PDF with ICC output intents.",
        "sRGB (IEC 61966-2-1) and Adobe RGB — common working and display color spaces expressed via profiles.",
        "PostScript device-independent (CIE-based) color and Color Rendering Dictionaries.",
        "Little CMS, ColorSync, and Windows ICM/WCS — color management modules that consume ICC profiles."
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
          "period": "~1993",
          "text": "Apple ships ColorSync 1.0, a Macintosh-only color management architecture, as part of an OS release."
        },
        {
          "period": "1993",
          "text": "Eight vendors found the International Color Consortium to create an open, cross-platform color management system."
        },
        {
          "period": "1994",
          "text": "First ICC profile format (ICCv2, internally version \"3.0\") released; adopted into ColorSync 2.0."
        },
        {
          "period": "December 2001",
          "text": "ICCv4 published (date per secondary sources)."
        },
        {
          "period": "ICC.1:2004-10",
          "text": "the ICCv4-era specification that became the basis of the first ISO edition."
        },
        {
          "period": "December 2005",
          "text": "profile format published as ISO 15076-1:2005, developed jointly by the ICC and ISO TC 130."
        },
        {
          "period": "2010",
          "text": "ISO 15076-1:2010, based on ICC.1:2010."
        },
        {
          "period": "iccMAX (ICC.2)",
          "text": "next-generation specification published, adding spectral and variable-condition support."
        },
        {
          "period": "2022",
          "text": "ICC.1:2022 (version 4.4) published."
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
      "slug": "cmyk"
    },
    {
      "section": "tools",
      "slug": "raster-image-processor"
    },
    {
      "section": "guides",
      "slug": "inkjet-printing"
    },
    {
      "section": "history",
      "slug": "evolution-of-color-printing"
    },
    {
      "section": "tools",
      "slug": "what-is-pdf"
    },
    {
      "section": "guides",
      "slug": "how-printer-drivers-work"
    }
  ],
  "faqs": [
    {
      "q": "What is an ICC color profile?",
      "a": "An ICC color profile is a standardized data file that characterizes the color behavior of a device or color space so color can be translated consistently between devices, applications, and platforms. It maps a device's native color space to a shared device-independent reference called the Profile Connection Space."
    },
    {
      "q": "Who created ICC profiles and when?",
      "a": "The format was created by the International Color Consortium, founded in 1993 by eight vendors (Adobe, Agfa, Apple, Kodak, Microsoft, Silicon Graphics, Sun Microsystems, and Taligent). The first profile format (ICCv2) was released in 1994."
    },
    {
      "q": "What is the Profile Connection Space (PCS)?",
      "a": "The PCS is the device-independent reference space that all ICC profiles connect to. It is expressed as CIEXYZ or CIELAB, normalized to the D50 white point and based on the CIE 1931 standard observer, allowing profiles from different vendors to be chained together."
    },
    {
      "q": "What are the four ICC rendering intents?",
      "a": "Perceptual (compresses the gamut for photographs), media-relative colorimetric (exact in-gamut with white-point scaling), ICC-absolute colorimetric (exact without white-point adaptation, for proofing), and saturation (vivid color for business graphics)."
    },
    {
      "q": "Is the ICC profile format an official standard?",
      "a": "Yes. The format was published as International Standard ISO 15076-1, first in 2005 (based on ICC.1:2004-10) and developed jointly by the ICC and ISO Technical Committee 130. The current traditional-profile specification is ICC.1:2022, version 4.4."
    },
    {
      "q": "Why does a printer need a separate profile for each paper?",
      "a": "Printer profiles characterize a specific combination of printer, ink or toner, paper or media, and often halftoning and driver settings. Because those physical factors change the color output, a different paper generally requires a different profile."
    }
  ],
  "sources": [
    {
      "title": "Introduction to the ICC profile format",
      "url": "https://www.color.org/iccprofile.xalter",
      "publisher": "International Color Consortium"
    },
    {
      "title": "ICC.1:2022 specification (PDF)",
      "url": "https://www.color.org/specification/ICC.1-2022-05.pdf",
      "publisher": "International Color Consortium"
    },
    {
      "title": "ICC.2:2019 (iccMAX) specification (PDF)",
      "url": "https://www.color.org/specification/ICC.2-2019.pdf",
      "publisher": "International Color Consortium"
    },
    {
      "title": "ICC profile specification published as ISO 15076-1:2005 (announcement)",
      "url": "https://www.color.org/News/060208.xalter",
      "publisher": "International Color Consortium"
    },
    {
      "title": "About the ICC",
      "url": "https://www.color.org/abouticc.xalter",
      "publisher": "International Color Consortium"
    },
    {
      "title": "ISO 15076-1:2010 — Image technology colour management",
      "url": "https://www.iso.org/standard/54754.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "ICC profile",
      "url": "https://en.wikipedia.org/wiki/ICC_profile",
      "publisher": "Wikipedia"
    },
    {
      "title": "International Color Consortium",
      "url": "https://en.wikipedia.org/wiki/International_Color_Consortium",
      "publisher": "Wikipedia"
    },
    {
      "title": "ColorSync",
      "url": "https://en.wikipedia.org/wiki/ColorSync",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "icc color profiles",
    "icc profile",
    "color management",
    "profile connection space",
    "iso 15076",
    "international color consortium",
    "rendering intents",
    "cmyk color management",
    "colorsync",
    "iccmax",
    "icc.1:2022",
    "device-independent color"
  ],
  "cluster": "color-and-imaging"
};

export default entry;
