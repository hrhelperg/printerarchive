import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "gloss-differential",
  "title": "Differential Gloss and Bronzing",
  "description": "Differential gloss and bronzing: why prints show uneven gloss or a colored metallic sheen over dark areas, how it is measured, and general ways to reduce it.",
  "summary": "Differential gloss (uneven surface gloss across a print) and bronzing (a hue-shifted metallic sheen seen in the specular direction over dark, heavily inked areas) are surface-appearance defects governed by how an ink or toner film reflects light rather than how it colors light. Differential gloss is an achromatic difference in gloss level, driven mainly by surface roughness and non-uniform absorption; bronzing is a chromatic effect in which the wavelength-dependent refractive index of a pigment boosts Fresnel reflection near its absorption band. Both are angle- and lighting-dependent, are diagnosed under raking light and measured with gloss meters or goniophotometry, and share a remediation family centered on surface-equalizing clear overcoats, reduced ink coverage, and media matching. This page is a descriptive reference, not a service manual; periodic device-related gloss banding requires servicing by a qualified technician.",
  "difficulty": "intermediate",
  "estimatedTime": "13 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Definition: two related surface-reflection defects"
    },
    {
      "kind": "paragraph",
      "text": "Differential gloss and bronzing are print-quality defects of surface appearance: they concern how a printed ink or toner film reflects light, rather than how it colors light. They are grouped here because they share a root cause — the microstructure and optical properties of the printed surface layer — and are addressed by an overlapping family of remedies, chiefly surface-equalizing clear overcoats. They differ in kind: differential gloss is an achromatic difference in gloss level, while bronzing is a chromatic (colored) effect in the specularly reflected light."
    },
    {
      "kind": "list",
      "items": [
        "Differential gloss (also called gloss non-uniformity or uneven gloss) is a visible difference in surface gloss across a single print — between regions of different ink or toner coverage, or between the printed image and the bare substrate. The image-versus-paper case is the most common complaint: a solid or heavily inked area looks noticeably glossier (or duller) than the paper around it, so the image appears to \"float\" on the sheet.",
        "Bronzing is a hue-shifted metallic or colored sheen seen in the specular (\"hot-spot\") direction, typically reddish-to-bronze or sometimes greenish, appearing over areas of high pigment coverage — especially dark neutrals, blacks, and saturated cyans and blues. Put formally, the specularly reflected light from a printed area takes on a color tone different from the pigment's inherent diffuse (body) color."
      ]
    },
    {
      "kind": "paragraph",
      "text": "A terminology caution: some photo-printing literature uses the phrase \"gloss differential\" loosely to describe bronzing. This reference keeps the two distinct — a difference in gloss level versus a colored specular reflection — because their diagnosis and, in part, their causes differ."
    },
    {
      "kind": "paragraph",
      "text": "The dedicated print standard for gloss uniformity, ISO/IEC 19799:2007 (scoped to electrophotographic prints), frames the attribute as three sub-attributes: differential gloss, gloss uniformity within a page, and gloss consistency within a run. That vocabulary is useful even where the standard's measurement method does not apply, such as inkjet."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The optics of gloss: specular versus diffuse reflection"
    },
    {
      "kind": "paragraph",
      "text": "Gloss is the fraction of incident light that a surface reflects specularly (mirror-like, concentrated in one direction) rather than diffusely (scattered in many directions). Two physical factors govern the split, and distinguishing them is the key to understanding why differential gloss and bronzing are different problems."
    },
    {
      "kind": "list",
      "items": [
        "Surface micro-roughness dominates the gloss level. As a surface roughens, energy shifts out of the narrow specular lobe and into the diffuse component, lowering measured gloss. In a study of gloss-meter behavior, Ye, Banach and Arney concluded that \"the width of the [bidirectional reflectance distribution function], and therefore the roughness of the surface, plays the major role in governing the reading from a gloss meter,\" while \"differences in index of refraction ... appear to play only a minor role\" for ordinary gloss readings.",
        "Fresnel reflection at the air/film interface sets how strong the specular beam is for a given smoothness. The reflectance at the top surface depends on the refractive-index contrast between air and film and on the angle of incidence, through the Fresnel equations; human gloss perception tracks these Fresnel highlights."
      ]
    },
    {
      "kind": "paragraph",
      "text": "These two factors map onto the two defects:"
    },
    {
      "kind": "list",
      "items": [
        "Differential gloss arises when the ink film and the substrate — or two image regions — present different surface roughness, so their specular reflectances differ. A smooth ink film over rougher paper looks glossier than the paper; a film that dries matte over glossy paper looks duller.",
        "Bronzing is the spectral special case of Fresnel reflection. Near a pigment's strong absorption band, its complex refractive index rises sharply (anomalous dispersion). This selectively boosts the Fresnel specular reflectance at the absorbed wavelengths — precisely the wavelengths that are missing from the diffuse body color. The mirror reflection is therefore enriched in the pigment's complementary hue: a cyan pigment that absorbs red light reflects a reddish specular sheen, and a dense neutral built from heavy cyan, magenta and yellow does the same across its combined absorption. This is consistent with the roughness-versus-index finding above: refractive index barely affects the magnitude of achromatic gloss, but its wavelength dependence is exactly what colors the specular highlight in bronzing."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Appearance and symptoms"
    },
    {
      "kind": "paragraph",
      "text": "Both defects are specular, so they are inherently angle- and lighting-dependent: they appear or vanish as the viewing angle, the lighting direction, or the print orientation changes, and diffuse illumination tends to hide them. The practical consequence is that they must be evaluated under directional light and, ideally, under the lighting in which the print will actually be displayed."
    },
    {
      "kind": "paragraph",
      "text": "Differential gloss is best revealed under raking light — a single directional source tilted so that a specular highlight sweeps across the surface as the print is rotated. Symptoms include:"
    },
    {
      "kind": "list",
      "items": [
        "Solids, shadows, or heavy-coverage regions that read as glossier (or duller) patches against the substrate, with boundaries that follow the image content — the \"floating image\" effect.",
        "In web and production printing, gloss streaks or bands running along the process direction on large solids (\"gloss banding\"), or a blotchy, cloud-like unevenness within a nominally uniform tint (\"gloss mottle\")."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Bronzing looks normal in flat, diffuse light but reveals itself at grazing or specular angles under a directional source (for example, LED spotlighting), where a colored metallic sheen appears over dark or dense areas. Because it is a specular effect, a small change in angle moves the hot-spot, so the sheen flickers in and out as the viewer or the print moves. It is strongest in the deepest blacks and heavy neutrals — where pigment load is highest — and on high-gloss media; matte, baryta and luster surfaces show far less than ultra-gloss stocks. The dominant reported hue is reddish-to-bronze, but the exact tone depends on the pigment set and can be greenish or another color; this is a tendency rather than a rule."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Causes of differential gloss"
    },
    {
      "kind": "paragraph",
      "text": "Differential gloss traces to anything that leaves neighboring areas of a print with different surface smoothness or reflectance. The main documented cause families are:"
    },
    {
      "kind": "list",
      "items": [
        "Coverage-dependent film gloss. The gloss of a printed area varies with the amount of colorant laid down. In electrophotography, prints characteristically show high gloss in high-mass (high toner-per-area) regions and a gloss minimum in the mid-tones on glossy substrate, so tone-dependent gloss steps appear across an image. Fusing conditions — such as temperature and the state of the fuser and media — shift the whole gloss curve. (These are described here as general behavior; specific settings are model-dependent and are not given.)",
        "Substrate coating and differential absorption. On coated papers, non-uniform absorption of the ink vehicle by the coating leaves the ink film with locally different surface smoothness, producing uneven gloss. Non-uniform coating porosity and pore clustering are the classic drivers of gloss mottle and the related back-trap mottle seen in offset printing.",
        "Image-versus-paper mismatch. Wherever a smooth ink film sits on a differently textured substrate, the boundary is a gloss step — the mechanism behind the \"floating image\" appearance.",
        "Process- or hardware-induced banding. Periodic gloss streaks or bands that correlate with the device can indicate roller, fusing, or transport non-uniformity. These point to a hardware condition that requires servicing rather than user adjustment (see the remediation and scope notes below)."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Causes of bronzing"
    },
    {
      "kind": "paragraph",
      "text": "Bronzing is fundamentally an optical property of the colorant, amplified by how and where the colorant sits at the print surface."
    },
    {
      "kind": "list",
      "items": [
        "Colorant optics (the primary cause). Bronzing results from the strong wavelength dependence of a pigment's refractive index. Near the pigment's absorption band the complex refractive index rises (anomalous dispersion), so the air/ink interface reflects more strongly at those wavelengths; when pigment particles are exposed at the surface, this selective specular reflection dominates the mirror reflection and gives it a color. An open-access physics treatment of the effect (Hébert, Mallet et al.) attributes bronzing directly to this wavelength-dependent interface reflectance.",
        "Predominantly a pigment-ink phenomenon. The optical effect is predominantly associated with pigment inks; dye inks bronze far less, and mainly through a different, media-chemistry route — for example, dye/media interactions on quick-dry photographic media that are addressed by buffering the ink relative to the coating.",
        "Which colorants. The effect is most often reported for cyan — specifically copper-phthalocyanine cyan and related blue pigments on glossy media — and for dense neutrals and blacks at high total coverage, where the combined pigment load is greatest. Patent literature on blue/cyan pigment inks corroborates that these colorants are prone to bronzing.",
        "Media interaction. On microporous or \"quick-dry\" glossy media — receptor layers built from inorganic nanoparticles on the order of tens of nanometres — the ink vehicle is absorbed very quickly, so pigment tends to be stranded and to aggregate right at the surface, which strengthens bronzing. Swellable-polymer media, which envelop the colorant within a resin layer, tend to bronze less. This behavior is documented in inkjet media-coating research; that bronzing occurs on quick-dry/microporous photographic media is also recognized in the ink-formulation patent literature.",
        "Scaling with surface pigment load. Because the effect depends on pigment exposed at the surface, it scales with surface pigment concentration: heaviest in maximum-density blacks and saturated solids, and rarely visible in light tints."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Diagnosis and measurement"
    },
    {
      "kind": "paragraph",
      "text": "Visual assessment. Raking-light inspection is the first-line diagnostic: tilt the print under a single directional source and rotate it. Differential gloss shows as gloss steps at image boundaries; bronzing shows as a colored specular sheen over dark areas. Because both are specular, evaluate them under the intended display lighting — diffuse illumination will conceal them."
    },
    {
      "kind": "paragraph",
      "text": "Measuring gloss level. A gloss meter illuminates the surface and measures the specularly reflected light at an equal and opposite angle, reporting the result in Gloss Units (GU). Standard geometries are 20°, 60° and 85°, defined for non-metallic coatings in ISO 2813 and ASTM D523, with the angle chosen to suit the gloss level:"
    },
    {
      "kind": "list",
      "items": [
        "20° for high gloss (above roughly 70 GU),",
        "60° for semigloss (roughly 10–70 GU),",
        "85° for matte (below roughly 10 GU)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "For paper specifically, ISO 8254-1 and TAPPI T480 specify a 75° converging-beam (\"TAPPI\") geometry for coated and uncoated papers, while TAPPI T653 uses 20° and is preferred for very high-gloss papers and high-gloss ink films. Gloss uniformity of printed pages is the subject of ISO/IEC 19799:2007 (electrophotographic scope), which distinguishes differential gloss, within-page uniformity and run consistency. Broader hardcopy image-quality attributes such as graininess, mottle and banding are standardized in ISO/IEC 24790:2017 — which cancels and replaces the earlier ISO/IEC 13660:2001 — although that standard targets monochrome image quality."
    },
    {
      "kind": "paragraph",
      "text": "Measuring bronzing. Because the diagnostic signal for bronzing is the chroma of the specular reflection, a single-angle gloss meter cannot capture it; angle-resolved (goniophotometric) or gonio-spectrophotometric measurement is required. Imaging-science work at the Rochester Institute of Technology developed a micro-goniophotometer that resolves specular reflection at high spatial and angular resolution to characterize print gloss (Arney, Heo & Anderson, J. Imaging Sci. Technol. 48(5), 2004). Angle- and wavelength-resolved measurement of this kind — examining the specular reflection in red, green and blue light in relation to the Fresnel specular-reflectance factors — is what makes bronzing quantifiable; in practice, a nonzero specular chroma measured over a neutral (gray or black) patch is an indicator of bronzing."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "General remediation principles"
    },
    {
      "kind": "paragraph",
      "text": "The approaches below are general, well-documented practices and design choices, not device-specific procedures. Where a value would be model-specific — temperatures, coverage limits, ink amounts and the like — it is deliberately omitted; treat everything here as directional and follow the manufacturer's own instructions for a given printer, media and ink combination."
    },
    {
      "kind": "list",
      "items": [
        "Surface-equalizing clear overcoat (addresses both defects). Applying a colorless layer over the print smooths the top surface and unifies its refractive properties, which raises and equalizes gloss and buries pigment beneath a clear resin so that the specular reflection is no longer wavelength-selective. In practice this is the gloss optimizer / gloss enhancer / clear \"chroma optimizer\" ink offered on many photo inkjet printers, the clear flood varnish or overprint coating used in offset, and clear-toner overcoat in electrophotography. Applying it across the entire sheet (not only the inked areas) is what removes image-versus-paper differential gloss; coating only the printed areas can reduce bronzing yet still leave a gloss step at the paper. In electrophotography, halftoned clear toner has been used to equalize gloss between high-mass and mid-tone regions.",
        "Ink selection and formulation (manufacturer-side). Encapsulating pigment in a polymeric binder, or adding a water-insoluble additive, keeps colorant below a resin surface and is documented to improve image gloss while reducing bronzing. This is a formulation lever relevant to choosing inks, not a user action — inks should not be modified.",
        "Reduce total ink or toner coverage in the worst areas. Because both heavy differential gloss and bronzing track surface pigment load, lowering total area coverage (the ink limit) and gently lifting the deepest shadows reduces both. This is controlled through the ICC profile and driver ink limits and verified by soft-proofing — see color management and printer profiling.",
        "Shift neutral and shadow construction toward black (GCR/UCR). Building neutrals and shadows with more black and less cyan/magenta/yellow — heavier gray-component replacement or under-color removal — reduces the stacked CMY pigment that drives bronzing in dark neutrals. This is a separation decision and is a particularly direct lever for dark-neutral bronzing; see black generation.",
        "Match media to ink and process. Use manufacturer-recommended media–ink pairings and the correct media preset. For pigment inks prone to bronzing, baryta, luster and satin surfaces and swellable receptor coatings generally bronze less than ultra-gloss microporous stocks, and matte media essentially eliminate bronzing — at the cost of gloss and maximum density. Whether a given combination bronzes is empirically variable, so verify rather than assume.",
        "Finishing overcoats. Lamination, aqueous or UV varnish, or a clear film applied over the whole piece unify gloss and are standard commercial-print approaches to hiding differential gloss.",
        "Drying and ambient control. Allowing prints to set and dry fully, and controlling ambient conditions per manufacturer guidance, helps the film level uniformly; poorly set films can bronze or mottle more. This is general practice, not a fixed rule.",
        "Viewing-condition management. Because both defects are specular, diffuse, high-CRI lighting and the avoidance of narrow-beam spotlights reduce their visibility. This mitigates perception, not the underlying physical defect.",
        "Hardware-related gloss banding requires servicing. Periodic, device-correlated gloss streaks or bands indicate a fusing, roller or transport fault. Addressing them is a service task for a qualified technician; this reference does not provide disassembly, part-number, temperature, voltage, error-code, or maintenance-interval instructions."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Related PrinterArchive topics and scope"
    },
    {
      "kind": "paragraph",
      "text": "This page is a descriptive, encyclopedic reference to two surface-appearance phenomena, not a service manual. The controls that most affect differential gloss and bronzing are covered in depth elsewhere in PrinterArchive:"
    },
    {
      "kind": "list",
      "items": [
        "Colorant amount and separation. How much colorant lands, and how neutrals are built, are the strongest levers over both defects. See black generation for GCR/UCR (the key control for dark-neutral bronzing), and color management, printer profiling, color calibration and RGB-to-CMYK conversion for ink limits and neutral construction.",
        "Ink-film tonal behavior. Dot gain describes how dense-area dots and ink films behave tonally, which interacts with where bronzing and gloss steps appear.",
        "Surface microtexture from screening. The halftone structure shapes the printed surface's microtexture and therefore its local gloss. These methods are covered separately: halftoning, amplitude-modulation screening, frequency-modulation screening, error diffusion, ordered dithering and screen angles.",
        "Related screening-interaction defect. Moiré patterns are a sibling appearance defect arising from screen interactions."
      ]
    },
    {
      "kind": "paragraph",
      "text": "For everyday consumer printing problems, see the troubleshooting how-to guides (for example, the paper-jam guide and \"printer printing blank pages\")."
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
      "slug": "print-mottle"
    },
    {
      "section": "guides",
      "slug": "ink-bleeding"
    },
    {
      "section": "guides",
      "slug": "print-quality-assessment"
    },
    {
      "section": "tools",
      "slug": "black-generation"
    },
    {
      "section": "guides",
      "slug": "color-management"
    },
    {
      "section": "guides",
      "slug": "printer-profiling"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between differential gloss and bronzing?",
      "a": "Differential gloss is an achromatic difference in gloss *level* across a print — for example, an inked area looking glossier or duller than the surrounding paper, or gloss steps between coverage regions. Bronzing is a chromatic effect: a colored (typically reddish-bronze) metallic sheen seen only in the specular direction over dark, heavily pigmented areas. They share a root cause in the optics of the printed surface, but one is a difference in how much light is mirror-reflected and the other is a difference in the color of that mirror reflection."
    },
    {
      "q": "Why does bronzing mostly affect pigment inks and dark areas?",
      "a": "Bronzing is predominantly a pigment-ink phenomenon. Near a pigment's strong absorption band its complex refractive index rises (anomalous dispersion), which boosts the Fresnel specular reflection at the absorbed wavelengths, so the mirror reflection takes on the pigment's complementary hue. Because the effect depends on pigment exposed at the surface, it scales with surface pigment concentration and is strongest in the deepest blacks and dense neutrals. Dye inks bronze far less, and mainly via a different media-chemistry route."
    },
    {
      "q": "How are gloss and bronzing measured?",
      "a": "Gloss level is measured with a gloss meter that reports Gloss Units at standard geometries — 20°, 60° and 85° per ISO 2813 and ASTM D523, with the angle chosen by gloss level. Paper-specific gloss uses a 75° geometry (ISO 8254-1 / TAPPI T480) or 20° (TAPPI T653) for very high-gloss papers and ink films. Bronzing is a colored specular effect, so it cannot be captured by a single-angle gloss meter; it requires angle-resolved goniophotometry or gonio-spectrophotometry, where a nonzero specular chroma over a neutral patch indicates bronzing."
    },
    {
      "q": "How can differential gloss and bronzing be reduced?",
      "a": "General practice includes applying a surface-equalizing clear overcoat (gloss optimizer/enhancer, clear varnish, or clear toner) across the whole sheet; reducing total ink or toner coverage; shifting neutral and shadow build toward black using GCR/UCR; matching media and ink to the process (swellable and matte/baryta media bronze less than ultra-gloss microporous stocks); and using finishing overcoats or lamination. Diffuse, high-CRI viewing light reduces visibility but not the physical defect. Follow the manufacturer's instructions for a given printer/media/ink combination."
    },
    {
      "q": "Is a printer defective if a print shows gloss banding?",
      "a": "Not necessarily. Coverage-dependent gloss steps and media-related gloss mottle are inherent to how ink and toner films reflect light and are not faults. However, periodic gloss streaks or bands that correlate with the device can indicate a fusing, roller or transport problem; that is a hardware condition requiring servicing by a qualified technician rather than user repair."
    }
  ],
  "sources": [
    {
      "title": "ISO/IEC 19799:2007 — Information technology — Method of measuring gloss uniformity on printed pages",
      "url": "https://www.iso.org/standard/33937.html",
      "publisher": "ISO/IEC"
    },
    {
      "title": "ISO/IEC 24790:2017 — Office equipment — Measurement of image quality attributes for hardcopy output — Monochrome text and graphic images",
      "url": "https://www.iso.org/standard/69796.html",
      "publisher": "ISO/IEC"
    },
    {
      "title": "ISO/IEC 13660:2001 — Office equipment — Measurement of image quality attributes for hardcopy output — Binary monochrome text and graphic images",
      "url": "https://www.iso.org/standard/22145.html",
      "publisher": "ISO/IEC"
    },
    {
      "title": "ISO 2813:2014 — Paints and varnishes — Determination of gloss value at 20°, 60° and 85°",
      "url": "https://www.iso.org/standard/56807.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 8254-1:2009 — Paper and board — Measurement of specular gloss — Part 1: 75° gloss with a converging beam, TAPPI method",
      "url": "https://www.iso.org/standard/41605.html",
      "publisher": "ISO"
    },
    {
      "title": "TAPPI T480 om — Specular gloss of paper and paperboard at 75 degrees",
      "url": "https://standards.globalspec.com/std/1177920/tappi-t-480",
      "publisher": "TAPPI (via GlobalSpec)"
    },
    {
      "title": "Ling Ye, Steve Banach & J. S. Arney, \"Interpretation of Gloss Meter Measurements,\" Journal of Imaging Science and Technology 50(6):567–571 (2006)",
      "url": "https://library.imaging.org/jist/articles/50/6/art00010",
      "publisher": "Society for Imaging Science and Technology (IS&T)"
    },
    {
      "title": "RIT Researchers Seek to Quantify Quality (micro-goniophotometer for print gloss and image quality)",
      "url": "https://www.rit.edu/news/rit-researchers-seek-quantify-quality",
      "publisher": "Rochester Institute of Technology"
    },
    {
      "title": "Lee et al., \"Back-trap mottle: A review of mechanisms and possible solutions,\" BioResources 16(3):6426–6447 (2021)",
      "url": "https://bioresources.cnr.ncsu.edu/resources/back-trap-mottle-a-review-of-mechanisms-and-possible-solutions/",
      "publisher": "BioResources (NC State University)"
    },
    {
      "title": "Faul, \"The influence of Fresnel effects on gloss perception,\" Journal of Vision 19(13):1 (2019)",
      "url": "https://jov.arvojournals.org/article.aspx?articleid=2754718",
      "publisher": "ARVO / Journal of Vision"
    },
    {
      "title": "Hébert, Mallet et al., \"Exploring the bronzing effect at the surface of ink layers\"",
      "url": "https://hal.science/hal-01160299",
      "publisher": "HAL open-access archive (peer-reviewed)"
    },
    {
      "title": "Gloss standards and angle selection (20°/60°/85°, GU thresholds)",
      "url": "https://www.rhopointamericas.com/faqs/gloss/",
      "publisher": "Rhopoint Instruments"
    },
    {
      "title": "What You Need to Know About Gloss Standards",
      "url": "https://www.hunterlab.com/blog/what-you-need-to-know-about-gloss-standards/",
      "publisher": "HunterLab"
    },
    {
      "title": "US Patent 11,499,065 — Aqueous inkjet inks containing a water-insoluble additive (gloss vs. bronzing trade-off)",
      "url": "https://image-ppubs.uspto.gov/dirsearch-public/print/downloadPdf/11499065",
      "publisher": "USPTO"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "differential gloss",
    "bronzing",
    "gloss differential",
    "gloss non-uniformity",
    "gloss mottle",
    "specular reflection",
    "gloss meter",
    "pigment ink bronzing",
    "print quality defects",
    "goniophotometry",
    "gloss optimizer",
    "iso 2813"
  ],
  "cluster": "print-quality"
};

export default entry;
