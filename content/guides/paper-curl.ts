import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "paper-curl",
  "title": "Paper Curl and Cockle",
  "description": "Paper curl and cockle are moisture-driven paper deformations—curl is smooth sheet-wide bending, cockle localized waviness. Causes, diagnosis, and remedies.",
  "summary": "Paper curl and cockle are two related, mostly moisture-driven distortions of paper. Curl is a smooth, systematic bending of the whole sheet or its edges into a cylindrical or bowl-like shape, while cockle is localized, non-uniform waviness or puckering. Both arise chiefly because paper's cellulose fibers absorb and release moisture unevenly, swelling and shrinking more across the grain than along it. This page describes their appearance, physical mechanisms, how they are diagnosed and measured, and general remediation principles; issues that require mechanical repair are noted as requiring servicing rather than instructed.",
  "difficulty": "intermediate",
  "estimatedTime": "9 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Definition and terminology"
    },
    {
      "kind": "paragraph",
      "text": "Paper curl and cockle (also called cockling) are two of the most common flatness defects in paper and printed output. Although they share a root cause—non-uniform moisture in a hygroscopic sheet—they are distinct phenomena and are described separately in paper-science and printing literature."
    },
    {
      "kind": "paragraph",
      "text": "Curl is a smooth, systematic deviation of a sheet from a flat plane. The sheet, or one or more of its edges, bends into a broadly cylindrical, tubular, or bowl-like shape around a well-defined axis. Curl is usually characterized by three attributes: its direction (which way the sheet bends, e.g. toward or away from the printed side), its axis (whether the curl runs along the sheet's machine direction or cross direction), and its magnitude (how far the edges lift from flat, or the curvature of the arc)."
    },
    {
      "kind": "paragraph",
      "text": "Cockle, by contrast, is localized and non-uniform waviness, rippling, or puckering. Rather than forming one clean arc, the surface develops small hills, waves, or pockets—often concentrated at the edges or in printed regions. Related descriptive terms include wavy edges (edges that ripple after gaining moisture relative to the sheet center) and tight edges (a domed center with drawn-in edges after the edges lose moisture relative to the center). Cockle can also be produced deliberately as a decorative cockle finish; on this page the term refers to the unwanted defect. Both defects should be distinguished from screening and tonal artifacts such as moiré and dot gain, which are covered separately."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Appearance and symptoms"
    },
    {
      "kind": "paragraph",
      "text": "Curl and cockle are usually diagnosed first by eye, because each has a recognizable signature."
    },
    {
      "kind": "paragraph",
      "text": "Typical presentations of curl include:"
    },
    {
      "kind": "list",
      "items": [
        "Tube or cylindrical curl — the whole sheet rolls up around one axis, like a scroll.",
        "Edge curl — only the leading, trailing, or side edges lift while the center stays flat.",
        "Four-corner curl — the corners rise, giving a shallow dish or bowl shape; this all-corners-up dish is a combination of machine-direction and cross-direction curl (combination curl), and should not be confused with diagonal (twist) curl, the twisted, propeller-like shape produced by combined or misaligned MD and CD stresses.",
        "Face-in vs. face-out curl — the sheet bends toward the printed side or away from it; noting which side is concave is an important diagnostic clue."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Cockle appears as irregular ripples, waves, or puckers across the surface, frequently worst at the edges of a stack or in heavily inked areas. Where it follows the printed image, ink or toner coverage is usually the trigger; where it follows the sheet edges, ambient humidity exchange with the stack is usually the trigger."
    },
    {
      "kind": "paragraph",
      "text": "Downstream, both defects tend to degrade handling and print quality: they can cause misfeeds and jams (see the consumer paper-jam guide), poor stacking and finishing, front-to-back and color-to-color misregistration, and uneven ink or toner lay that shows up as non-uniform gloss or density."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Physical mechanism: moisture, fibers, and grain"
    },
    {
      "kind": "paragraph",
      "text": "Paper is hygroscopic: its cellulose fibers continuously absorb moisture from, and release it to, the surrounding air, moving toward equilibrium with the ambient relative humidity. As the moisture content of the fibers changes, the fibers change dimension—and they do so anisotropically, expanding and contracting far more in width than in length."
    },
    {
      "kind": "paragraph",
      "text": "Because papermaking tends to align fibers along the machine direction (MD, the direction the web travels through the machine), the sheet's dimensional response to humidity is larger in the perpendicular cross direction (CD). Paper's dimensional response to moisture, called hygroexpansion, is anisotropic — larger across the grain (CD) than along it (MD) — which is why curl tends to form around a preferred axis and why grain direction matters so much to flatness."
    },
    {
      "kind": "paragraph",
      "text": "Curl is produced when the two faces of a sheet reach different moisture contents. The face that has lost the most moisture contracts more than the opposite face, so the sheet bends—becoming concave toward the drier, more contracted side. As a rule of thumb documented throughout the paper literature, a sheet curls toward the drier side. When wetting or drying is not just two-sided but also uneven within a face, the local, patchy expansion produces cockle instead of a clean curl. Much moisture-driven curl is therefore reversible: bringing the sheet back to a balanced, uniform moisture content often relaxes it, whereas distortion built into the sheet's structure during manufacture may persist."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Manufacturing and storage causes"
    },
    {
      "kind": "paragraph",
      "text": "Some curl and cockle originate before a sheet is ever printed."
    },
    {
      "kind": "paragraph",
      "text": "Structural (built-in) causes relate to how the sheet was formed and finished, and tend to produce persistent curl that does not fully relax with re-conditioning:"
    },
    {
      "kind": "list",
      "items": [
        "Two-sidedness — differences between the wire side and felt side of the sheet, or differing fiber orientation and fines distribution across the thickness.",
        "Uneven drying tension — asymmetric shrinkage locked in as the web dried under tension.",
        "Single-sided coating or treatment — a coating, size, or laminate on one face that responds to humidity differently from the other."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Environmental and storage causes are usually reversible and are the classic sources of wavy and tight edges:"
    },
    {
      "kind": "list",
      "items": [
        "In humid conditions, the exposed edges of a ream take on moisture faster than the protected center, expand, and ripple into wavy edges (a form of cockle).",
        "In dry conditions, the edges give up moisture faster than the center, shrink, and pull the stack into a domed tight-edge condition.",
        "Grain-direction mismatch — feeding a sheet so that its grain is oriented unfavorably to the way it must bend through a paper path increases curl and jam tendency.",
        "Inadequate conditioning — using paper before it has acclimated to the room or device environment leaves it out of moisture equilibrium and prone to distortion."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Causes in printing processes"
    },
    {
      "kind": "paragraph",
      "text": "Printing itself frequently induces curl and cockle by adding heat or moisture unevenly to the sheet."
    },
    {
      "kind": "paragraph",
      "text": "Electrophotographic printing (laser/LED). As a sheet passes the fuser, heat is applied to set the toner, and this rapidly drives moisture out of the heated side. The resulting front-to-back moisture imbalance produces the characteristic fusing or heat curl, with the sheet bending toward the drier side. Duplexing (printing both sides) and the amount and distribution of toner coverage both influence how much curl appears. These effects are inherent to applying heat to a moist, hygroscopic sheet; this page does not specify any device temperatures, voltages, or internal settings."
    },
    {
      "kind": "paragraph",
      "text": "Inkjet printing. Water-based inks deposit moisture directly onto the printed side. The wetted fibers swell locally, and where that swelling is uneven it produces cockle; where the printed side as a whole gains moisture relative to the back, it produces curl. Heavier ink coverage generally worsens both, and using media not matched to the ink chemistry makes the sheet more susceptible."
    },
    {
      "kind": "paragraph",
      "text": "Coverage as a shared factor. In both processes, the total amount of colorant laid down is a lever on moisture- and heat-driven distortion. Prepress controls that reduce total area coverage therefore also tend to reduce cockle: increasing gray-component replacement through black generation, managing total ink limits during RGB-to-CMYK conversion, and accounting for dot gain all bear on how much ink a substrate must carry."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Diagnosis and measurement"
    },
    {
      "kind": "paragraph",
      "text": "Diagnosis proceeds from qualitative classification to controlled measurement."
    },
    {
      "kind": "paragraph",
      "text": "Classification. Inspect a representative sheet and record the type (curl vs. cockle), the direction and axis of any curl, and whether distortion follows the sheet edges (pointing to humidity exchange) or the printed image (pointing to ink or toner coverage). Noting which face is concave, and whether the sheet was recently heated or wetted, usually narrows the cause quickly."
    },
    {
      "kind": "paragraph",
      "text": "Reversibility test. Distinguishing moisture-driven from structural distortion is central to remediation. Moisture-driven curl typically relaxes when the sheet is returned to a uniform, balanced moisture content—by re-conditioning in a stable environment or resting flat under even weight—whereas structural curl set during manufacture largely persists."
    },
    {
      "kind": "paragraph",
      "text": "Quantitative measurement. For repeatable numbers, samples are first equilibrated in a standardized, controlled atmosphere so that ambient humidity does not confound the result. Curl is then commonly measured by laying a cut sheet on a flat surface and recording how far the edges lift, or by expressing the bend as a curvature (the reciprocal of the arc's radius). Standardized test methods for curl and for conditioning are published by industry bodies such as TAPPI; consult the applicable current method for exact procedures rather than improvising one."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "General remediation principles"
    },
    {
      "kind": "paragraph",
      "text": "Remediation is best framed as general, well-documented practice. The specific commands, menus, or service actions available depend on the device and media, so follow the manufacturer's guidance for your equipment."
    },
    {
      "kind": "paragraph",
      "text": "Control and match the environment:"
    },
    {
      "kind": "list",
      "items": [
        "Keep paper sealed in its moisture-barrier wrapper until use, and reseal or re-wrap partially used stock.",
        "Store and run paper in a stable, controlled temperature and relative humidity, and let reams acclimate to the operating environment before printing."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Match the media to the process:"
    },
    {
      "kind": "list",
      "items": [
        "Use media rated for the print process at hand (for example, media formulated for laser fusing or for water-based inkjet inks).",
        "Orient grain direction to the paper path as recommended by the media and device makers.",
        "Select the correct media type/profile in the driver so the device applies appropriate handling."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Reduce the moisture and heat load:"
    },
    {
      "kind": "list",
      "items": [
        "Where cockle tracks ink coverage, lower total area coverage using standard prepress controls (black generation / GCR and total-ink limits during RGB-to-CMYK conversion).",
        "Use any manufacturer-provided media-conditioning or de-curl setting the device offers, per its documentation."
      ]
    },
    {
      "kind": "paragraph",
      "text": "When servicing is required. If curl persists despite correct media, coverage, and environment, or if a printer's de-curling or media-conditioning mechanism appears to be malfunctioning, the device requires servicing by a qualified technician. This page does not provide disassembly steps, part numbers, maintenance intervals, error-code procedures, or component-level adjustments; those belong to the manufacturer's service documentation."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to color reproduction and other print defects"
    },
    {
      "kind": "paragraph",
      "text": "Curl and cockle matter to color and image quality even though they are mechanical, not tonal, defects. A sheet that will not lie flat feeds and registers poorly, so front-to-back and color-to-color alignment drifts; and uneven surface geometry changes how ink or toner is laid down and how light reflects, producing visible density and gloss variation. For that reason, flatness is worth confirming before attributing a reproduction problem to the color pipeline described in color management, printer profiling, or color calibration—a profile or calibration built on cockled, misregistered proofs will not be reliable."
    },
    {
      "kind": "paragraph",
      "text": "Controller-side coverage decisions also connect the two domains: reducing total area coverage to limit moisture-driven cockle is the same lever managed through black generation and RGB-to-CMYK conversion, and it interacts with dot gain behavior on the chosen stock."
    },
    {
      "kind": "paragraph",
      "text": "Finally, curl and cockle should not be confused with screening defects. Periodic-pattern and tonal artifacts such as moiré, and the halftoning techniques behind them (amplitude-modulation screening, error diffusion, and screen angles), are image-formation phenomena covered on their own pages; curl and cockle are substrate-deformation phenomena driven by moisture and heat."
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
      "slug": "ink-bleeding"
    },
    {
      "section": "guides",
      "slug": "show-through"
    },
    {
      "section": "guides",
      "slug": "smearing-and-set-off"
    },
    {
      "section": "guides",
      "slug": "rgb-to-cmyk-conversion"
    },
    {
      "section": "tools",
      "slug": "black-generation"
    },
    {
      "section": "tools",
      "slug": "dot-gain"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between paper curl and cockle?",
      "a": "Curl is a smooth, systematic bending of the whole sheet or its edges into a cylindrical or bowl shape around a defined axis. Cockle is localized, non-uniform waviness or puckering—small ripples, waves, or pockets—rather than one clean arc. Both are usually caused by uneven moisture, but curl is a global bend while cockle is a local surface distortion."
    },
    {
      "q": "Why does paper curl after laser printing?",
      "a": "As the sheet passes the fuser, heat rapidly drives moisture out of the heated side, creating a front-to-back moisture imbalance. The drier side contracts more, so the sheet bends toward it. Coverage and duplexing influence how pronounced this heat curl is. It is inherent to heating a hygroscopic sheet and does not imply a fault by itself."
    },
    {
      "q": "Why does inkjet paper ripple or cockle?",
      "a": "Water-based ink adds moisture directly to the printed side, so the fibers there swell. Where that swelling is uneven, the surface ripples into cockle; heavier ink coverage makes it worse. Using media matched to the ink and reducing total ink coverage generally reduces it."
    },
    {
      "q": "Can paper curl be reversed?",
      "a": "Moisture-driven curl is often reversible by returning the sheet to a uniform, balanced moisture content—re-conditioning it in a stable environment or resting it flat under even weight. Curl built into the sheet's structure during manufacture may not fully reverse. If curl persists despite correct media and environment, or a de-curling mechanism seems faulty, the device requires servicing by a qualified technician."
    },
    {
      "q": "How is curl measured?",
      "a": "After conditioning samples in a standardized controlled atmosphere, curl is commonly measured by laying a cut sheet on a flat surface and recording how far the edges lift, or by expressing the bend as a curvature (the reciprocal of the arc radius). Standardized test methods are published by industry bodies such as TAPPI."
    },
    {
      "q": "Does grain direction affect curl and jamming?",
      "a": "Yes. Paper responds to humidity more across the grain than along it, so feeding a sheet with an unfavorable grain orientation relative to the paper path increases curl and the tendency to jam. Matching grain direction to the paper path, as recommended by the media and device makers, reduces both."
    }
  ],
  "sources": [
    {
      "title": "Paper",
      "url": "https://en.wikipedia.org/wiki/Paper",
      "publisher": "Wikipedia"
    },
    {
      "title": "Papermaking",
      "url": "https://www.britannica.com/technology/papermaking",
      "publisher": "Encyclopaedia Britannica"
    },
    {
      "title": "TAPPI (Technical Association of the Pulp and Paper Industry)",
      "url": "https://www.tappi.org",
      "publisher": "TAPPI"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "paper curl",
    "paper cockle",
    "cockling",
    "wavy edge",
    "tight edge",
    "paper moisture content",
    "fiber swelling",
    "machine direction",
    "cross direction",
    "grain direction",
    "fuser curl",
    "inkjet cockle"
  ],
  "cluster": "print-quality"
};

export default entry;
