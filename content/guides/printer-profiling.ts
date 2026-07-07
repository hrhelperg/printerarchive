import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "printer-profiling",
  "title": "Printer Profiling",
  "description": "How printer profiling characterizes a printer, ink, and paper combination to build an ICC output profile for predictable, color-managed printing.",
  "summary": "Printer profiling is the characterization of a specific printer, ink, and substrate combination, encoding its measured color behavior into an ICC output profile that maps between device values and a device-independent Profile Connection Space. The workflow is consistent across authoritative sources: fix a repeatable printing condition, print a standardized test target with color management off, let it dry, measure every patch with a spectrophotometer under a defined ISO 13655 condition, and let profiling software build the profile's transforms. Because printed color is a joint result of the marking engine, colorants, and paper, a profile is valid only for the exact combination measured. Profiling underpins soft-proofing, cross-device consistency, and press standardization, and remains the foundation of professional color-managed printing.",
  "difficulty": "advanced",
  "estimatedTime": "8 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Printer profiling is the characterization of an output device: the process of measuring how a specific printer reproduces color with a specific ink set on a specific substrate, and encoding that measured behavior into an ICC output profile. The profile lets a color-managed system predict and control the printed appearance of any color by mapping between the printer's device values (typically CMYK) and a device-independent Profile Connection Space (PCS). Because the color a printer produces is the joint result of the marking engine, the colorants, and the paper, a profile is valid only for the exact combination that was measured."
    },
    {
      "kind": "paragraph",
      "text": "The workflow is consistent across authoritative sources: print a standardized test target, let it dry, measure every patch with a spectrophotometer, and feed the device values together with their measured colorimetry to profiling software, which builds the ICC profile. The International Color Consortium (ICC) describes a profiling package as three parts: a measurement instrument, a test target, and software that turns the measurements into a profile."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What it is / definition"
    },
    {
      "kind": "paragraph",
      "text": "Profiling (also called characterization) is distinct from calibration. Calibration returns a device to a known, repeatable reference state; profiling then measures and records the color behavior of that calibrated state. An ICC profile is defined by the ICC/ISO specification as a data set that characterizes a color input or output device by defining a mapping between the device color space and the PCS, which is either CIELAB (Lab*) or CIEXYZ."
    },
    {
      "kind": "paragraph",
      "text": "An output (printer) profile in particular characterizes the color gamut achievable for a given combination of printer, ink, and paper. It is the deliverable of the profiling process — the record that gives otherwise ambiguous device numbers a defined, measured meaning."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History where documented"
    },
    {
      "kind": "paragraph",
      "text": "The International Color Consortium was founded in 1993 by eight industry vendors — Adobe, Agfa, Apple, Kodak, Microsoft, Silicon Graphics, Sun Microsystems, and Taligent — to create a vendor-neutral, cross-platform color-management architecture."
    },
    {
      "kind": "paragraph",
      "text": "The ICC.1 profile format has two main generations in wide use: the legacy ICCv2 and ICCv4 (the v4 specification is dated December 2001 per Wikipedia; consult the ICC for exact revision dates). The ICC specification was adopted as an international standard as ISO 15076-1, whose first edition (2005) was based on ICC.1:2004-10; the ICC notes technical identity with later editions. The current published ICC specification is ICC.1:2022 (version 4.4)."
    },
    {
      "kind": "paragraph",
      "text": "The test-target lineage traces to ANSI IT8 committee work, later maintained under CGATS. The relevant characterization-target standards are ISO 12642-1 (IT8.7/3) and ISO 12642-2 (IT8.7/4), titled \"Graphic technology — Input data for characterization of 4-colour process printing.\" The ECI2002 target originates from the European Color Initiative."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "list",
      "items": [
        "Calibrate or fix a printing condition. Establish a stable, repeatable state: driver/RIP settings, resolution, media setting, ink limits, and linearization. Profiling is only meaningful if this state can be reproduced later.",
        "Print the test target. A chart of many known device-value color patches is printed with the exact ink and paper, using the chosen settings, with color management turned off so the raw device response is captured.",
        "Dry and stabilize. Prints are allowed to dry before measurement, because wet ink color drifts.",
        "Measure the patches. A spectrophotometer (or colorimeter) reads each patch, producing colorimetric data such as CIELAB. Measurement geometry and illumination are governed by ISO 13655, which defines measurement conditions M0, M1, M2, and M3 to handle optical brightening agents and fluorescence: M0 is the traditional/unspecified condition, M1 approximates a D50 condition with defined UV content, M2 excludes UV, and M3 adds polarization.",
        "Build the profile. Software pairs each patch's device values with its measured PCS color and constructs the profile's transforms — for output devices these are typically multidimensional lookup tables (LUT-based transforms) with interpolation, giving device-to-PCS and PCS-to-device mappings and multiple rendering intents. Profile size ranges from roughly 1 KB to several MB depending on the device and table sizes.",
        "Evaluate and verify. The profile can be validated by printing and measuring a verification chart and comparing predicted against measured color, for example using ΔE metrics."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Test targets (patch counts, per vendor documentation):"
    },
    {
      "kind": "list",
      "items": [
        "IT8.7/3 (ISO 12642-1): 928 patches.",
        "ECI2002: 1,485 patches.",
        "IT8.7/4 (ISO 12642-2): 1,617 patches, documented as a superset containing all 928 IT8.7/3 patches and all 1,485 ECI2002 patches. It comes in \"Visual\" and \"Random\" layouts with the same patches; the Random layout distributes ink across ink zones more evenly during printing."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The ISO 12642-2 data set is explicitly described as not optimized for any single printing process — it is robust enough for general use across offset, gravure, flexography, and other processes, and works for any three chromatic inks plus a dark ink."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the color/print pipeline"
    },
    {
      "kind": "paragraph",
      "text": "Profiling sits at the output/characterization stage. Upstream, a source profile — for example sRGB (IEC 61966-2-1) or a working CMYK space — describes the incoming image color. The color-management module (CMM) uses the source profile to convert image color into the PCS, then uses the output printer profile's PCS-to-device transform to compute device CMYK for the specific printer, ink, and paper. Those CMYK values are handed to the raster image processor (RIP) and rendered as halftone dots on the marking engine."
    },
    {
      "kind": "paragraph",
      "text": "Calibration precedes profiling; the profile is the characterization layer that makes the calibrated device predictable."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to ICC profiles and CMYK"
    },
    {
      "kind": "paragraph",
      "text": "A printer profile is an ICC output profile — the deliverable of profiling. It contains the transforms between the printer's CMYK (or CMYK-plus / multi-ink) device space and the CIELAB/CIEXYZ PCS, using D50-referenced colorimetry. The PCS white point is XYZ ≈ (0.9642, 1.000, 0.8249), a 16-bit approximation of D50."
    },
    {
      "kind": "paragraph",
      "text": "Because CMYK is device-dependent — the same CMYK numbers print differently on different presses and papers — the profile is what gives those numbers a defined, measured meaning. Profiling also encodes practical CMYK constraints established during calibration, such as total ink limit / total area coverage (TAC) and black generation (GCR/UCR), which differ by substrate. Vendor and practitioner practice cites typical figures such as around 330% TAC for coated glossy stock and lower for uncoated; these are typical values, not standardized constants."
    },
    {
      "kind": "paragraph",
      "text": "PrinterArchive maintains dedicated pages on ICC profiles, CMYK, halftoning, and the RIP; consult those for their internals rather than duplicating them here."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printer technologies"
    },
    {
      "kind": "paragraph",
      "text": "Profiling is technology-agnostic in method but technology-specific in result. It is applied to offset presses, inkjet, electrophotographic (toner) devices, gravure, flexography, and dye-sublimation. The IT8.7/4 / ISO 12642-2 data set was designed with offset, gravure, and flexographic needs in mind and works for any three chromatic inks plus a dark ink, not only standard CMYK."
    },
    {
      "kind": "paragraph",
      "text": "Inkjet profiling in particular is sensitive to ink type: for example, the choice between matte-black and photo-black ink changes the achievable black density and is baked into the profile, so a profile is specific to the ink selection as well as the paper."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common problems"
    },
    {
      "kind": "list",
      "items": [
        "Measuring wet prints — color drifts before ink dries, so targets must stabilize first.",
        "Optical brightener (OBA) mismatch — papers with optical brighteners fluoresce; using the wrong ISO 13655 measurement condition (M0 versus M1/M2) yields colorimetry that disagrees between instruments or fails to match the viewing environment.",
        "Unstable or re-changed device state — editing driver or RIP settings after profiling invalidates the profile because the characterized condition no longer holds.",
        "Color management left on during target printing — double-correcting the target corrupts the raw device response.",
        "Instrument disagreement — different spectrophotometers can disagree, especially pre-M1 hardware on OBA papers.",
        "Over-generic or mismatched profiles — using a canned profile for a different paper than it was built for reintroduces the very errors profiling exists to remove."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Produces predictable, device-independent color for a known printing condition, enabling soft-proofing and cross-device consistency.",
        "Captures the actual measured gamut of the specific printer, ink, and paper, so the CMM can gamut-map intelligently.",
        "Vendor-neutral and cross-platform by design of the ICC architecture.",
        "Supports multiple rendering intents, letting output balance colorimetric accuracy against gamut compression as needed."
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
        "Media- and condition-specific: a profile is valid only for the exact printer, ink, paper, and settings measured.",
        "A snapshot in time: it records the device as measured, and drift (ink lot, printhead, environment, press aging) degrades accuracy until re-profiling.",
        "Depends on measurement quality: results are only as good as target coverage, instrument accuracy, and correct ISO 13655 conditions.",
        "Interpolates between patches: LUT-based transforms interpolate colors not directly sampled, so target patch count and distribution bound the accuracy."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Why profiles are media-specific. The printed color of any given ink amount is inseparable from the paper. Paper white (base color) is the lightest achievable point and tints every color, and stocks differ in white point and OBA content. Dot gain / tone value increase varies by substrate — vendor documentation cites roughly 8–10% additional dot gain for uncoated versus coated stock (a typical figure, not a standard). Ink absorption and maximum density differ, so total ink limits vary by paper, and ink chemistry such as matte- versus photo-black is captured only for the paper it was profiled on. Because all of these vary by substrate, the profile must be rebuilt for each printer/ink/paper combination."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Profiling remains the foundation of professional color-managed printing and proofing. The ISO 13655 M1 measurement condition addressed the modern prevalence of optical brighteners, improving agreement between instruments; the current edition of ISO 13655 is the 2017 revision (the M0/M1/M2/M3 conditions were introduced in the 2009 edition)."
    },
    {
      "kind": "paragraph",
      "text": "Standardized targets (IT8.7/4 / ISO 12642-2) and the ICC.1:2022 / ISO 15076-1 profile format continue to underpin RIPs, proofing systems, and press-standardization workflows, alongside process-control standards such as ISO 12647 (covered separately). Automated inline spectrophotometry and RIP-integrated profiling have streamlined but not replaced the underlying measure-then-characterize principle."
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
          "period": "1993",
          "text": "International Color Consortium founded by eight vendors."
        },
        {
          "period": "1994",
          "text": "Initial ICC profile release (ICCv2 generation)."
        },
        {
          "period": "1996",
          "text": "ISO 12642-1 (IT8.7/3) first edition; current edition ISO 12642-1:2015 (reaffirmed R2020)."
        },
        {
          "period": "December 2001",
          "text": "ICCv4 specification dated (per Wikipedia; consult the ICC for exact revision dates)."
        },
        {
          "period": "2005",
          "text": "ICC specification adopted as ISO 15076-1:2005, based on ICC.1:2004-10 (later editions exist)."
        },
        {
          "period": "2006",
          "text": "ISO 12642-2 (IT8.7/4) first edition; current edition ISO 12642-2:2015."
        },
        {
          "period": "2009",
          "text": "ISO 13655:2009 introduces the M0/M1/M2/M3 measurement conditions; current edition ISO 13655:2017."
        },
        {
          "period": "2022",
          "text": "ICC.1:2022 (version 4.4) specification published."
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
      "section": "guides",
      "slug": "color-calibration"
    },
    {
      "section": "tools",
      "slug": "icc-profiles"
    },
    {
      "section": "guides",
      "slug": "soft-proofing"
    },
    {
      "section": "guides",
      "slug": "rgb-to-cmyk-conversion"
    },
    {
      "section": "tools",
      "slug": "cmyk"
    },
    {
      "section": "guides",
      "slug": "color-management"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between calibration and profiling?",
      "a": "Calibration returns a printer to a known, repeatable reference state. Profiling then measures and records the color behavior of that calibrated state and encodes it in an ICC profile. Profiling is only meaningful once a stable, reproducible printing condition has been fixed."
    },
    {
      "q": "Why does a printer profile only work for one paper?",
      "a": "Printed color is a joint result of the printer, ink, and substrate. Paper white, dot gain, ink absorption, maximum ink limit, and ink chemistry all vary by stock, so the measured device-to-color relationship — and therefore the profile — must be rebuilt for each printer, ink, and paper combination."
    },
    {
      "q": "What test targets are used for printer profiling?",
      "a": "Common standardized targets include IT8.7/3 (ISO 12642-1) with 928 patches, ECI2002 with 1,485 patches, and IT8.7/4 (ISO 12642-2) with 1,617 patches. Vendor documentation describes IT8.7/4 as a superset containing all 928 IT8.7/3 patches and all 1,485 ECI2002 patches."
    },
    {
      "q": "What does ISO 13655 have to do with profiling?",
      "a": "ISO 13655 governs the measurement conditions used when reading the test target. It defines conditions M0 (traditional/unspecified), M1 (approximating D50 with defined UV), M2 (UV-excluded), and M3 (polarization). Using the correct condition is important for papers with optical brighteners so that instruments agree and results match the viewing environment."
    }
  ],
  "sources": [
    {
      "title": "Making ICC profiles for devices",
      "url": "https://www.color.org/creatingprofiles.xalter",
      "publisher": "International Color Consortium"
    },
    {
      "title": "About ICC",
      "url": "https://www.color.org/abouticc.xalter",
      "publisher": "International Color Consortium"
    },
    {
      "title": "ICC profile specification published as ISO 15076-1:2005",
      "url": "https://www.color.org/News/060208.xalter",
      "publisher": "International Color Consortium"
    },
    {
      "title": "ICC.1:2022 Specification (PDF)",
      "url": "https://www.color.org/specification/ICC.1-2022-05.pdf",
      "publisher": "International Color Consortium"
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
      "title": "IEC 61966-2-1:1999 (sRGB)",
      "url": "https://webstore.iec.ch/en/publication/6169",
      "publisher": "International Electrotechnical Commission"
    },
    {
      "title": "ANSI/CGATS ISO 12642-1 (IT8.7/3):2015 (R2020)",
      "url": "https://webstore.ansi.org/Standards/NPES/ansicgatsiso12642it82015r2020",
      "publisher": "ANSI Webstore"
    },
    {
      "title": "ANSI/CGATS ISO 12642-2 (IT8.7/4):2015",
      "url": "https://webstore.ansi.org/standards/npes/ansicgatsiso12642it82015-1545821",
      "publisher": "ANSI Webstore"
    },
    {
      "title": "ISO 12642-2 — Input data for characterization of 4-colour process printing, Part 2",
      "url": "https://standards.globalspec.com/std/397141/iso-12642-2",
      "publisher": "GlobalSpec / ISO listing"
    },
    {
      "title": "IT8.7/4 test chart (1617 patches, superset statement)",
      "url": "https://onlinehelp.prinect-lounge.com/Prinect_Color_Toolbox/Version2021/en/Prinect/testforms/testforms-7.htm",
      "publisher": "Heidelberg Prinect documentation"
    },
    {
      "title": "ISO 13655:2009 Demystified",
      "url": "https://sensing.konicaminolta.us/us/learning-center/color-measurement/iso-demystified/",
      "publisher": "Konica Minolta Sensing"
    },
    {
      "title": "The M Factor (M-measurement standards)",
      "url": "https://www.xrite.com/page/learn-more-about-m-standards",
      "publisher": "X-Rite"
    },
    {
      "title": "An Introduction to Printer & Press ICC Profiles",
      "url": "https://www.colourphil.co.uk/print-profiling.shtml",
      "publisher": "colourphil.co.uk"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "printer profiling",
    "icc output profile",
    "device characterization",
    "spectrophotometer",
    "it8.7/4",
    "iso 12642",
    "test target",
    "profile connection space",
    "iso 13655",
    "color management",
    "cmyk profile",
    "printer calibration"
  ],
  "cluster": "color-management"
};

export default entry;
