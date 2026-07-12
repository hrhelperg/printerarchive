import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "nozzle-clogging",
  "title": "Inkjet Nozzle Clogging and Missing Nozzles",
  "description": "Inkjet nozzle clogging and missing nozzles from dried ink, air, or debris cause white streaks and banding. Causes, nozzle-check diagnosis, and safe recovery.",
  "summary": "Nozzle clogging is the partial or complete blockage of an inkjet printhead's nozzles by dried ink, entrained air, or particulates, so an affected nozzle ejects no drop, a weakened drop, or a misdirected one. In prints it shows as missing lines, white streaks, banding, or misregistration, and a \"missing nozzle\" is one that has stopped contributing its drops. It is diagnosed with a nozzle-check test pattern that reveals which nozzles are not firing, and it is only one of several possible causes of banding rather than the sole cause. General recovery relies on the manufacturer's built-in cleaning or purge cycle and on keeping the head capped when idle, with nozzles that stay dead after cleaning requiring servicing.",
  "difficulty": "intermediate",
  "estimatedTime": "8 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What nozzle clogging and missing nozzles are"
    },
    {
      "kind": "paragraph",
      "text": "An inkjet printer forms an image by ejecting very small drops of ink from an array of fine nozzles in a printhead, building up dots on the media as the head and paper move relative to one another. Two drop-on-demand ejection mechanisms are in common use, and the distinction matters for how a nozzle fails:"
    },
    {
      "kind": "list",
      "items": [
        "Thermal heads (also called bubble-jet) use a small resistive heater that flash-vaporizes a thin layer of ink; the resulting bubble expands and propels a drop out of the nozzle.",
        "Piezoelectric heads use a piezo element that deforms when driven, mechanically pressurizing the ink chamber to push a drop out. No bubble is formed as part of normal ejection."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Nozzle clogging is the partial or complete obstruction of one or more of these nozzles by dried ink, entrained air, or solid debris, so that the affected nozzle ejects no drop, a weakened drop, or a drop sent off at an angle. A nozzle that stops contributing its drops to the image is described in industry usage as a \"missing nozzle,\" and a print showing the resulting gaps is said to have a missing-nozzle defect. A clog is often a transient condition that can be cleared, whereas a nozzle that remains inactive after cleaning behaves as a persistent missing nozzle; the two are distinguished mainly by whether ordinary recovery restores drop ejection."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Appearance and symptoms"
    },
    {
      "kind": "paragraph",
      "text": "Because each nozzle lays down a specific track of dots as the media advances, the loss of a nozzle produces a characteristic linear signature rather than a random one:"
    },
    {
      "kind": "list",
      "items": [
        "A fully blocked nozzle leaves a continuous unprinted track — a missing line or thin white streak running in the direction of relative head-to-media motion.",
        "Several adjacent affected nozzles merge into a broader light band, contributing to banding across the print.",
        "A partially blocked nozzle, or one whose drop is deflected by debris or an irregular meniscus, ejects a misdirected drop that lands off its intended position. This appears as a shifted or angled line, local misregistration, or a thin, weak line rather than a fully absent one.",
        "Where a missing nozzle belongs to a single colorant channel, the local loss of that ink can shift the apparent hue or lightness of an area, not only remove a line."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The symptoms may be constant down the page, or they may come and go as a marginal nozzle fires intermittently. Faded or largely blank output can also result when many nozzles are affected at once. It is important to treat clogging as one of several possible sources of these symptoms rather than the only one, which the next section addresses."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Distinguishing it from other banding and screening artifacts"
    },
    {
      "kind": "paragraph",
      "text": "Missing lines and banding are not unique to nozzle problems, so diagnosis depends on separating a nozzle cause from the alternatives:"
    },
    {
      "kind": "list",
      "items": [
        "Media-advance (paper-feed) error also produces banding: if the sheet steps forward by slightly the wrong amount between passes, tracks are spaced too closely or too far apart, creating light or dark bands that are not tied to any single nozzle.",
        "In electrophotographic (laser) printing, banding arises from development or exposure variation rather than from nozzles at all, so a nozzle explanation does not apply to those devices.",
        "Banding seen in smooth gradients can instead be a screening or quantization artifact — an effect of how continuous tone is converted into a pattern of dots — which is a separate subject. The dot-placement and tone-rendering methods involved are documented on their own pages, including halftoning, frequency-modulation (stochastic) screening, error diffusion, and dot gain, and are referenced here rather than re-explained."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The practical distinction is that a nozzle defect is tied to specific, repeatable tracks that correspond to individual nozzles and that show up in a nozzle-check pattern, whereas advance-error and screening banding are properties of the mechanism or the image processing and are not localized to particular nozzles."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Mechanisms and causes"
    },
    {
      "kind": "paragraph",
      "text": "The documented causes of nozzle blockage fall into a few families, and more than one can act at the same time:"
    },
    {
      "kind": "list",
      "items": [
        "Evaporation and dry-out. Aqueous inks carry colorant in a volatile vehicle. At the exposed meniscus of an idle nozzle, or during storage, the vehicle evaporates and the remaining colorant concentrates, thickening into a viscous or solid plug. With pigmented inks, loss of water near the nozzle can drive separation of the pigment from the vehicle, leaving concentrated or aggregated pigment at the orifice. This is why nozzles are especially prone to clogging after long idle periods.",
        "Air ingestion and entrainment. Air can enter the ink path — for example through an imperfect capping-station seal, during ink changes, or by entrainment at the meniscus. In a drop-on-demand head, and as documented in the literature for piezoelectric heads, an entrained air bubble is compressible: when the actuator fires, the bubble absorbs the pressure pulse instead of transmitting it to the ink, so the drop is weak or is not ejected at all. A study of piezoelectric heads further associated deposited nanoparticles (using polystyrene model particles) with the promotion of this air-related clogging.",
        "Particulates and contamination. Solid matter — dust, paper fibers, or fragments of dried ink — can lodge in the fine nozzle orifice and block or deflect the drop."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Because the orifices and the drops are very small, even minor amounts of dried ink, gas, or debris are enough to disturb or stop ejection."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Diagnosis and measurement"
    },
    {
      "kind": "paragraph",
      "text": "The standard diagnostic is the nozzle-check pattern, a test print provided as general practice by printer manufacturers in which each nozzle is commanded to fire into a defined arrangement of lines or blocks. Reading the printed pattern shows which nozzles are working and which are not:"
    },
    {
      "kind": "list",
      "items": [
        "Absent segments indicate nozzles that are not firing (blocked or missing nozzles).",
        "Broken or shifted segments indicate nozzles whose drops are deflected or partially obstructed.",
        "The pattern maps positions in the print back to specific nozzles, so the extent and location of the problem can be judged before and after any recovery attempt."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Visual inspection of ordinary output — looking for fine white streaks, ideally with magnification — is a complementary check."
    },
    {
      "kind": "paragraph",
      "text": "For characterizing the resulting artifact objectively, the visible banding, streaking, and graininess that a nozzle defect leaves in finished output can be assessed with general print image-quality measurement methods. International standards define such measurements: ISO/IEC 24790:2017 specifies image-quality attributes for monochrome hardcopy output — for example darkness, raggedness, blurriness, graininess, and mottle — and it cancels and replaces the earlier ISO/IEC 13660:2001 and ISO/IEC TS 24790:2012. These standards measure the appearance of the printed result; they do not themselves define, diagnose, or remediate nozzle clogging, and are noted here only because they are how the resulting banding or graininess would be quantified."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "General remediation principles"
    },
    {
      "kind": "paragraph",
      "text": "Recovery from clogging is described here at the level of well-documented general practice; anything beyond routine, built-in maintenance requires servicing and is not a user procedure."
    },
    {
      "kind": "list",
      "items": [
        "Run the manufacturer's cleaning or purge cycle. Inkjet systems provide a built-in routine that forces ink through the nozzles to flush out dried-ink plugs and expel trapped air, and this is the usual first response to a nozzle-check that shows gaps. Because cleaning cycles consume ink, they are used judiciously; specific cycle counts, timings, or intervals are device-dependent and are not generalized here.",
        "Keep the head capped and parked when idle. Inkjets typically move the printhead to a capping station that seals the nozzles against the air, maintaining humidity at the meniscus so ink does not dry out and keeping dust away. A capping station that no longer seals well can itself admit air or allow evaporation, so its condition matters to preventing recurrence.",
        "Escalate to servicing when routine recovery fails. If nozzles remain inactive after the manufacturer's cleaning procedures, the cause is likely beyond a clearable blockage, and the device requires servicing or printhead replacement according to manufacturer guidance."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Device-specific disassembly, manual flushing, soaking, solvents, and similar interventions are outside the scope of this reference; because they can damage the head or void support, such work is treated as requiring qualified servicing."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Prevention and ink or environment management"
    },
    {
      "kind": "paragraph",
      "text": "Because most clogging traces back to drying, air, or contamination, preventive practice targets those conditions as general principles rather than fixed rules:"
    },
    {
      "kind": "list",
      "items": [
        "Use the printer regularly. Periodic printing keeps ink moving through the nozzles and reduces the chance that ink dries in place during long idle spells.",
        "Rely on capping and an orderly power-down. Allowing the printer to park and cap the head, rather than removing power with the head uncapped, protects the nozzles between jobs.",
        "Control the environment. Low humidity and heat accelerate evaporation at the nozzle, so keeping ambient conditions moderate slows dry-out.",
        "Manage the ink. Using ink within its usable life, keeping the ink path sealed, and — for pigmented inks — allowing for the gentle agitation the system may provide help limit pigment settling and separation, while adequate filtration and clean handling limit particulates."
      ]
    },
    {
      "kind": "paragraph",
      "text": "These are general, well-documented principles; exact maintenance schedules and settings depend on the specific device and ink and are set by the manufacturer."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Transient clogs versus persistent missing nozzles"
    },
    {
      "kind": "paragraph",
      "text": "Distinguishing a temporary clog from a persistent missing nozzle guides what to do next:"
    },
    {
      "kind": "list",
      "items": [
        "A transient clog typically responds to one or more cleaning cycles and then prints a clean nozzle-check pattern. If it returns, the underlying condition — often drying from idleness, a poor capping seal, or air in the ink path — has not been resolved, and attention to prevention is more effective than repeated cleaning.",
        "A persistent missing nozzle still fails to fire after routine cleaning. This behaves as a hardware-level fault rather than a simple obstruction: a nozzle depends on its actuator (a heater in thermal heads, a piezo element in piezo heads) and on an unobstructed, air-free ink path, and when cleaning cannot restore it the appropriate response is servicing or printhead replacement per manufacturer guidance rather than continued do-it-yourself intervention."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Framing the problem this way keeps routine recovery — cleaning cycles and capping discipline — separate from faults that require a technician, and avoids both unnecessary ink consumption and unsafe improvised repairs."
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This is a neutral technical reference describing print-defect phenomena and general remediation principles. It is not a service manual: it does not provide device-specific repair procedures, error-code meanings, or maintenance intervals, and anything requiring service should be handled per the manufacturer's guidance. The references consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "guides",
      "slug": "print-banding"
    },
    {
      "section": "guides",
      "slug": "streaking"
    },
    {
      "section": "guides",
      "slug": "inkjet-printing"
    },
    {
      "section": "guides",
      "slug": "color-cast"
    },
    {
      "section": "tools",
      "slug": "halftoning"
    },
    {
      "section": "tools",
      "slug": "frequency-modulation-screening"
    }
  ],
  "faqs": [
    {
      "q": "What causes inkjet nozzles to clog?",
      "a": "Three documented causes act, sometimes together: ink drying out at the nozzle as its volatile vehicle evaporates during idle periods or storage (leaving a viscous or solid plug, and with pigmented inks separating pigment from the vehicle); air entrained in the ink path, where a compressible bubble absorbs the actuator's pressure pulse so no drop is ejected; and solid particulates such as dust, fibers, or dried-ink fragments lodging in the fine orifice."
    },
    {
      "q": "What does a clogged or missing nozzle look like on a print?",
      "a": "A fully blocked nozzle leaves a continuous missing line or thin white streak in the direction of head-to-media motion, and several affected nozzles together read as banding. A partially blocked or deflected nozzle ejects a misdirected drop that shows as a shifted or angled line, local misregistration, or a weak line. Losing a nozzle in one colorant channel can also shift the local color."
    },
    {
      "q": "How can I tell which nozzles are clogged?",
      "a": "Print the nozzle-check pattern, a test in which each nozzle fires into a defined layout of lines or blocks. Absent segments indicate nozzles that are not firing, while broken or shifted segments indicate deflected or partially obstructed nozzles. The pattern maps back to specific nozzles, so you can judge the extent of the problem before and after any recovery attempt."
    },
    {
      "q": "How is nozzle clogging cleared?",
      "a": "The general first step is to run the manufacturer's built-in cleaning or purge cycle, which forces ink through the nozzles to flush plugs and expel trapped air, together with keeping the head capped when idle so ink does not dry out. Specific cycle counts, intervals, temperatures, or manual procedures are device-dependent and are not generalized. If nozzles stay inactive after routine cleaning, the unit requires servicing or printhead replacement per manufacturer guidance."
    },
    {
      "q": "Is nozzle clogging the same thing as banding?",
      "a": "No. Clogging is one of several causes of banding, not a synonym for it. Banding can also come from media-advance (paper-feed) error, from development or exposure variation in laser printing, or from screening and quantization effects in smooth gradients, which are covered separately. A nozzle defect is specifically tied to repeatable tracks that correspond to individual nozzles and appear in a nozzle-check pattern."
    }
  ],
  "sources": [
    {
      "title": "ISO/IEC 24790:2017 — Measurement of image quality attributes for hardcopy output — Monochrome text and graphic images",
      "url": "https://www.iso.org/standard/69796.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO/IEC 13660:2001 — Measurement of image quality attributes for hardcopy output — Binary monochrome text and graphic images (withdrawn)",
      "url": "https://www.iso.org/standard/22145.html",
      "publisher": "ISO"
    },
    {
      "title": "Deposited Nanoparticles Can Promote Air Clogging of Piezoelectric Inkjet Printhead Nozzles (Langmuir, 2019)",
      "url": "https://pubs.acs.org/doi/abs/10.1021/acs.langmuir.8b04335",
      "publisher": "American Chemical Society"
    },
    {
      "title": "Higher-order meniscus oscillations driven by flow-focusing leading to bubble pinch off and entrainment in a piezo acoustic inkjet nozzle (arXiv:2105.03114)",
      "url": "https://arxiv.org/pdf/2105.03114",
      "publisher": "arXiv"
    },
    {
      "title": "Print head nozzle check and cleaning (support guidance)",
      "url": "https://support.usa.canon.com/kb/s/article/ART109200",
      "publisher": "Canon"
    },
    {
      "title": "Checking the print head nozzles with the nozzle check pattern",
      "url": "https://files.support.epson.com/docid/cpd4/cpd40257/source/pro_graphics/source/troubleshooting/reference/problem_nozzle_check_pattern.html",
      "publisher": "Epson"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "nozzle clogging",
    "clogged printhead",
    "missing nozzles",
    "nozzle check pattern",
    "inkjet nozzle check",
    "deflected drops",
    "inkjet banding",
    "white streaks",
    "printhead cleaning",
    "ink dry-out",
    "air entrainment inkjet",
    "print defects"
  ],
  "cluster": "print-quality"
};

export default entry;
