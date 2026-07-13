import type { ContentEntry } from "@/lib/content/types";

// Foundation content
import historyOfPrinters from "@/content/history/history-of-printers";
import historyOfFax from "@/content/history/history-of-fax-machines";
import howLaser from "@/content/guides/how-laser-printers-work";
import howInkjet from "@/content/guides/how-inkjet-printers-work";
import printerOffline from "@/content/troubleshooting/printer-offline-guide";
import whatIsAirprint from "@/content/mobile-printing/what-is-airprint";
import howFax from "@/content/fax/how-fax-machines-work";
import hp from "@/content/brands/hewlett-packard";
import scanToPdf from "@/content/workflows/scan-to-searchable-pdf";
import whatIsPdf from "@/content/tools/what-is-pdf";
import gDpi from "@/content/glossary/dpi";
import gDuplex from "@/content/glossary/duplex-printing";
import gToner from "@/content/glossary/toner";
import gAirprint from "@/content/glossary/airprint";
import gOcr from "@/content/glossary/ocr";
import gPpm from "@/content/glossary/ppm";

// Phase 3 — history cluster
import histEvoLaser from "@/content/history/evolution-of-laser-printing";
import histEvoInkjet from "@/content/history/evolution-of-inkjet-printers";
import histDotMatrix from "@/content/history/dot-matrix-printers-explained";
import histThermal from "@/content/history/thermal-printing-history";
import hist1990s from "@/content/history/office-printing-in-the-1990s";
import histEarlyComputer from "@/content/history/early-computer-printing";

// Phase 4A — printing-evolution cluster
import histTransitionImpactLaser from "@/content/history/transition-from-impact-to-laser-printing";
import histEvoOfficePrinting from "@/content/history/evolution-of-office-printing";
import histEvoColor from "@/content/history/evolution-of-color-printing";
import histDesktopPublishing from "@/content/history/history-of-desktop-publishing";
import histWirelessHistory from "@/content/history/history-of-wireless-printing";

// Phase 4A — era + impact/early-digital clusters
import hist1980s from "@/content/history/printing-in-the-1980s";
import histDecade1990s from "@/content/history/printing-in-the-1990s";
import histBeforeWifi from "@/content/history/office-printing-before-wifi";
import histHowDotMatrix from "@/content/history/how-dot-matrix-printers-work";
import histHowImpact from "@/content/history/how-impact-printing-worked";
import histEarlyLaser from "@/content/history/how-early-laser-printers-worked";
import histEarlyNetwork from "@/content/history/early-network-printing-systems";

// Phase 3 — guides cluster
import gdDuplex from "@/content/guides/what-is-duplex-printing";
import gdPostscript from "@/content/guides/what-is-postscript-printing";
import gdDrivers from "@/content/guides/how-printer-drivers-work";
import gdWireless from "@/content/guides/how-wireless-printing-works";
import gdResolution from "@/content/guides/understanding-printer-resolution";
import gdLaserVsInkjet from "@/content/guides/laser-vs-inkjet-printers";
import gdPrintServer from "@/content/guides/what-is-a-print-server";

// Phase 3 — troubleshooting cluster
import tsMac from "@/content/troubleshooting/printer-not-detected-on-mac";
import tsWindows from "@/content/troubleshooting/printer-not-detected-on-windows";
import tsWifi from "@/content/troubleshooting/printer-wont-connect-to-wifi";
import tsJam from "@/content/troubleshooting/paper-jam-guide";
import tsBlank from "@/content/troubleshooting/printer-printing-blank-pages";
import tsScanner from "@/content/troubleshooting/scanner-not-detected";
import tsAirprint from "@/content/troubleshooting/airprint-not-working";
import tsOffline11 from "@/content/troubleshooting/printer-offline-windows-11";

// Phase 3 — brands cluster
import brCanon from "@/content/brands/canon";
import brEpson from "@/content/brands/epson";
import brBrother from "@/content/brands/brother";
import brXerox from "@/content/brands/xerox";

// Phase 4A — new brands
import brandRicoh from "@/content/brands/ricoh";
import brandKyocera from "@/content/brands/kyocera";
import brandLexmark from "@/content/brands/lexmark";

// Phase 11 — flagship manufacturer encyclopedia (new brand pages)
import brIbm from "@/content/brands/ibm";
import brKonicaMinolta from "@/content/brands/konica-minolta";

// Phase 12 — printing technology encyclopedia (guides)
import tech_laser_printing from "@/content/guides/laser-printing";
import tech_inkjet_printing from "@/content/guides/inkjet-printing";
import tech_electrophotography from "@/content/guides/electrophotography";
import tech_xerography from "@/content/guides/xerography";
import tech_dot_matrix_printing from "@/content/guides/dot-matrix-printing";
import tech_daisy_wheel_printing from "@/content/guides/daisy-wheel-printing";
import tech_line_printing from "@/content/guides/line-printing";
import tech_impact_printing from "@/content/guides/impact-printing";
import tech_thermal_transfer_printing from "@/content/guides/thermal-transfer-printing";
import tech_direct_thermal_printing from "@/content/guides/direct-thermal-printing";
import tech_led_printing from "@/content/guides/led-printing";
import tech_solid_ink_printing from "@/content/guides/solid-ink-printing";
import tech_dye_sublimation_printing from "@/content/guides/dye-sublimation-printing";
import tech_thermal_inkjet_printing from "@/content/guides/thermal-inkjet-printing";
import tech_piezoelectric_inkjet_printing from "@/content/guides/piezoelectric-inkjet-printing";
import tech_continuous_inkjet_printing from "@/content/guides/continuous-inkjet-printing";
import tech_page_wide_printing from "@/content/guides/page-wide-printing";
import tech_electrostatic_printing from "@/content/guides/electrostatic-printing";

// Phase 13 — print languages, standards & protocols encyclopedia (tools)
import std_postscript from "@/content/tools/postscript";
import std_pcl from "@/content/tools/pcl";
import std_esc_p from "@/content/tools/esc-p";
import std_esc_pos from "@/content/tools/esc-pos";
import std_hp_gl from "@/content/tools/hp-gl";
import std_pjl from "@/content/tools/pjl";
import std_xps from "@/content/tools/xps";
import std_afp from "@/content/tools/afp";
import std_ipp from "@/content/tools/ipp";
import std_lpd_lpr from "@/content/tools/lpd-lpr";
import std_jetdirect from "@/content/tools/jetdirect";
import std_airprint from "@/content/tools/airprint";
import std_mopria from "@/content/tools/mopria";
import std_cups from "@/content/tools/cups";
import std_smb_printing from "@/content/tools/smb-printing";
import std_bonjour_mdns_printing from "@/content/tools/bonjour-mdns-printing";
import std_pdf_a from "@/content/tools/pdf-a";
import std_pdf_x from "@/content/tools/pdf-x";
import std_pdf_ua from "@/content/tools/pdf-ua";
import std_iso_32000 from "@/content/tools/iso-32000";
import std_tiff from "@/content/tools/tiff";
import std_icc_profiles from "@/content/tools/icc-profiles";
import std_cmyk from "@/content/tools/cmyk";
import std_halftoning from "@/content/tools/halftoning";
import std_raster_image_processor from "@/content/tools/raster-image-processor";

// Phase 14 — operating systems, drivers & print-pipeline encyclopedia (guides)
import os_windows_printing from "@/content/guides/windows-printing";
import os_windows_print_spooler from "@/content/guides/windows-print-spooler";
import os_windows_print_processor from "@/content/guides/windows-print-processor";
import os_windows_printer_drivers from "@/content/guides/windows-printer-drivers";
import os_windows_gdi_printing from "@/content/guides/windows-gdi-printing";
import os_windows_xps_print_pipeline from "@/content/guides/windows-xps-print-pipeline";
import os_macos_printing from "@/content/guides/macos-printing";
import os_cups_architecture from "@/content/guides/cups-architecture";
import os_linux_printing from "@/content/guides/linux-printing";
import os_openprinting from "@/content/guides/openprinting";
import os_printer_drivers from "@/content/guides/printer-drivers";
import os_universal_print_drivers from "@/content/guides/universal-print-drivers";
import os_driverless_printing from "@/content/guides/driverless-printing";
import os_print_rendering_pipeline from "@/content/guides/print-rendering-pipeline";
import os_spooling_architecture from "@/content/guides/spooling-architecture";
import os_print_queue_lifecycle from "@/content/guides/print-queue-lifecycle";
import os_print_job_lifecycle from "@/content/guides/print-job-lifecycle";
import os_printer_discovery from "@/content/guides/printer-discovery";
import os_snmp_printer_monitoring from "@/content/guides/snmp-printer-monitoring";
import os_enterprise_print_servers from "@/content/guides/enterprise-print-servers";
import os_print_management from "@/content/guides/print-management";
import os_secure_printing from "@/content/guides/secure-printing";
import os_pull_printing from "@/content/guides/pull-printing";
import os_print_job_accounting from "@/content/guides/print-job-accounting";
import os_cloud_print_architectures from "@/content/guides/cloud-print-architectures";

// Phase 15 Wave A — scanning, drivers & scan-to workflows
import sc_history_of_scanning from "@/content/guides/history-of-scanning";
import sc_flatbed_scanners from "@/content/guides/flatbed-scanners";
import sc_sheet_fed_scanners from "@/content/guides/sheet-fed-scanners";
import sc_adf_scanners from "@/content/guides/adf-scanners";
import sc_book_scanners from "@/content/guides/book-scanners";
import sc_drum_scanners from "@/content/guides/drum-scanners";
import sc_film_scanners from "@/content/guides/film-scanners";
import sc_portable_scanners from "@/content/guides/portable-scanners";
import sc_network_scanners from "@/content/guides/network-scanners";
import sc_document_scanners from "@/content/guides/document-scanners";
import sc_multifunction_scanning from "@/content/guides/multifunction-scanning";
import sc_scanner_driver_architecture from "@/content/guides/scanner-driver-architecture";
import sc_twain from "@/content/tools/twain";
import sc_wia from "@/content/tools/wia";
import sc_sane from "@/content/tools/sane";
import sc_ica from "@/content/tools/ica";
import sc_escl from "@/content/tools/escl";
import sc_isis from "@/content/tools/isis";
import sc_scan_to_email from "@/content/workflows/scan-to-email";
import sc_scan_to_folder from "@/content/workflows/scan-to-folder";
import sc_scan_to_cloud from "@/content/workflows/scan-to-cloud";

// Phase 15 Wave B — OCR & recognition
import oc_history_of_ocr from "@/content/guides/history-of-ocr";
import oc_optical_character_recognition from "@/content/guides/optical-character-recognition";
import oc_icr from "@/content/guides/icr";
import oc_omr from "@/content/guides/omr";
import oc_handwriting_recognition from "@/content/guides/handwriting-recognition";
import oc_ocr_engines from "@/content/guides/ocr-engines";
import oc_ocr_accuracy from "@/content/guides/ocr-accuracy";
import oc_ocr_preprocessing from "@/content/guides/ocr-preprocessing";
import oc_ocr_layout_analysis from "@/content/guides/ocr-layout-analysis";
import oc_ocr_limitations from "@/content/guides/ocr-limitations";
import oc_ocr_for_forms from "@/content/workflows/ocr-for-forms";
import oc_ocr_for_invoices from "@/content/workflows/ocr-for-invoices";
import oc_ocr_for_receipts from "@/content/workflows/ocr-for-receipts";
import oc_ocr_for_books from "@/content/workflows/ocr-for-books";
import oc_ocr_for_newspapers from "@/content/workflows/ocr-for-newspapers";
import oc_ocr_for_legal_documents from "@/content/workflows/ocr-for-legal-documents";
import oc_ocr_for_healthcare from "@/content/workflows/ocr-for-healthcare";
import oc_ocr_for_archives from "@/content/workflows/ocr-for-archives";
import oc_ocr_workflow from "@/content/workflows/ocr-workflow";

// Phase 15 Wave C — image preprocessing
import ip_image_deskew from "@/content/guides/image-deskew";
import ip_image_despeckle from "@/content/guides/image-despeckle";
import ip_image_binarization from "@/content/guides/image-binarization";
import ip_image_thresholding from "@/content/guides/image-thresholding";
import ip_image_noise_reduction from "@/content/guides/image-noise-reduction";
import ip_contrast_enhancement from "@/content/guides/contrast-enhancement";
import ip_morphological_operations from "@/content/guides/morphological-operations";
import ip_document_cleanup from "@/content/guides/document-cleanup";
import ip_compression_before_ocr from "@/content/guides/compression-before-ocr";
import ip_orientation_detection from "@/content/guides/orientation-detection";
import ip_color_normalization from "@/content/guides/color-normalization";
import ip_border_removal from "@/content/guides/border-removal";
import ip_blank_page_detection from "@/content/guides/blank-page-detection";
import ip_barcode_recognition from "@/content/guides/barcode-recognition";
import ip_qr_code_recognition from "@/content/guides/qr-code-recognition";

// Phase 15 Wave D — enterprise document capture
import ec_enterprise_document_capture from "@/content/guides/enterprise-document-capture";
import ec_capture_servers from "@/content/guides/capture-servers";
import ec_document_indexing from "@/content/guides/document-indexing";
import ec_capture_metadata from "@/content/guides/capture-metadata";
import ec_records_management from "@/content/guides/records-management";
import ec_digital_preservation from "@/content/guides/digital-preservation";
import ec_microfilm_digitization from "@/content/guides/microfilm-digitization";
import ec_batch_scanning from "@/content/workflows/batch-scanning";
import ec_capture_workflow from "@/content/workflows/capture-workflow";
import ec_legal_document_archives from "@/content/workflows/legal-document-archives";
import ec_medical_record_archives from "@/content/workflows/medical-record-archives";
import ec_government_records_archives from "@/content/workflows/government-records-archives";
import ec_records_compliance from "@/content/workflows/records-compliance";

// Phase 16 Wave A — color science & color management
import cl_color_management from "@/content/guides/color-management";
import cl_rgb_color_model from "@/content/guides/rgb-color-model";
import cl_lab_color from "@/content/guides/lab-color";
import cl_xyz_color from "@/content/guides/xyz-color";
import cl_color_spaces from "@/content/guides/color-spaces";
import cl_rendering_intents from "@/content/guides/rendering-intents";
import cl_gamut_mapping from "@/content/guides/gamut-mapping";
import cl_device_independent_color from "@/content/guides/device-independent-color";
import cl_color_calibration from "@/content/guides/color-calibration";
import cl_printer_profiling from "@/content/guides/printer-profiling";
import cl_soft_proofing from "@/content/guides/soft-proofing";
import cl_hard_proofing from "@/content/guides/hard-proofing";
import cl_monitor_to_printer_matching from "@/content/guides/monitor-to-printer-matching";
import cl_rgb_to_cmyk_conversion from "@/content/guides/rgb-to-cmyk-conversion";

// Phase 16 Wave B — screening & print imaging
import im_amplitude_modulation_screening from "@/content/tools/amplitude-modulation-screening";
import im_frequency_modulation_screening from "@/content/tools/frequency-modulation-screening";
import im_error_diffusion from "@/content/tools/error-diffusion";
import im_ordered_dithering from "@/content/tools/ordered-dithering";
import im_screen_angles from "@/content/tools/screen-angles";
import im_moire_patterns from "@/content/tools/moire-patterns";
import im_dot_gain from "@/content/tools/dot-gain";
import im_black_generation from "@/content/tools/black-generation";

// Phase 16 Wave C — print-quality & defects
import pq_print_banding from "@/content/guides/print-banding";
import pq_ghosting from "@/content/guides/ghosting";
import pq_print_registration from "@/content/guides/print-registration";
import pq_ink_bleeding from "@/content/guides/ink-bleeding";
import pq_print_mottle from "@/content/guides/print-mottle";
import pq_streaking from "@/content/guides/streaking";
import pq_toner_adhesion from "@/content/guides/toner-adhesion";
import pq_nozzle_clogging from "@/content/guides/nozzle-clogging";
import pq_paper_curl from "@/content/guides/paper-curl";
import pq_show_through from "@/content/guides/show-through";
import pq_gloss_differential from "@/content/guides/gloss-differential";
import pq_color_cast from "@/content/guides/color-cast";
import pq_background_fogging from "@/content/guides/background-fogging";
import pq_print_quality_assessment from "@/content/guides/print-quality-assessment";
import pq_smearing_and_set_off from "@/content/guides/smearing-and-set-off";

// Phase 17 Wave A — printer components
import cp_developer_unit from "@/content/guides/developer-unit";
import cp_drum_cleaning_and_waste_toner from "@/content/guides/drum-cleaning-and-waste-toner";
import cp_fuser_unit from "@/content/guides/fuser-unit";
import cp_photoconductor_drum from "@/content/guides/photoconductor-drum";
import cp_transfer_unit from "@/content/guides/transfer-unit";
import cp_laser_scanner_unit from "@/content/guides/laser-scanner-unit";
import cp_thermal_printhead from "@/content/guides/thermal-printhead";
import cp_inkjet_printhead from "@/content/guides/inkjet-printhead";
import cp_platen_roller from "@/content/guides/platen-roller";
import cp_charge_roller from "@/content/guides/charge-roller";
import cp_registration_assembly from "@/content/guides/registration-assembly";
import cp_printhead_service_station from "@/content/guides/printhead-service-station";
import cp_printer_control_electronics from "@/content/guides/printer-control-electronics";
import cp_duplexing_unit from "@/content/guides/duplexing-unit";
import cp_output_and_finishing from "@/content/guides/output-and-finishing";
import cp_carriage_and_encoder from "@/content/guides/carriage-and-encoder";
import cp_paper_feed_rollers from "@/content/guides/paper-feed-rollers";
import cp_ink_delivery_system from "@/content/guides/ink-delivery-system";

// Phase 17 Wave B — consumables & ink/toner types
import cn_toner_cartridge from "@/content/guides/toner-cartridge";
import cn_imaging_unit from "@/content/guides/imaging-unit";
import cn_ink_cartridge from "@/content/guides/ink-cartridge";
import cn_ink_tank_system from "@/content/guides/ink-tank-system";
import cn_thermal_transfer_ribbon from "@/content/guides/thermal-transfer-ribbon";
import cn_dot_matrix_ribbon from "@/content/guides/dot-matrix-ribbon";
import cn_maintenance_kit from "@/content/guides/maintenance-kit";
import cn_waste_toner_container from "@/content/guides/waste-toner-container";
import cn_dye_based_ink from "@/content/guides/dye-based-ink";
import cn_pigment_based_ink from "@/content/guides/pigment-based-ink";
import cn_solvent_ink from "@/content/guides/solvent-ink";
import cn_latex_ink from "@/content/guides/latex-ink";
import cn_uv_curable_ink from "@/content/guides/uv-curable-ink";
import cn_sublimation_ink from "@/content/guides/sublimation-ink";
import cn_toner_composition from "@/content/guides/toner-composition";
import cn_polymerized_toner from "@/content/guides/polymerized-toner";
import cn_micr_toner from "@/content/guides/micr-toner";
import cn_liquid_toner from "@/content/guides/liquid-toner";

// Phase 17 Wave C — media & paper
import pm_paper_weight_and_caliper from "@/content/guides/paper-weight-and-caliper";
import pm_paper_grain from "@/content/guides/paper-grain";
import pm_coated_vs_uncoated_paper from "@/content/guides/coated-vs-uncoated-paper";
import pm_paper_finish from "@/content/guides/paper-finish";
import pm_paper_brightness_and_whiteness from "@/content/guides/paper-brightness-and-whiteness";
import pm_paper_opacity from "@/content/guides/paper-opacity";
import pm_inkjet_photo_paper from "@/content/guides/inkjet-photo-paper";
import pm_cardstock_and_cover_stock from "@/content/guides/cardstock-and-cover-stock";
import pm_label_and_tag_media from "@/content/guides/label-and-tag-media";
import pm_synthetic_and_specialty_media from "@/content/guides/synthetic-and-specialty-media";
import pm_paper_sizes from "@/content/guides/paper-sizes";
import pm_paper_grades_and_standards from "@/content/guides/paper-grades-and-standards";

// Phase 18 Wave 0 — printer models (pilot)
import mdl_hp_laserjet_original from "@/content/models/hp-laserjet-original";

// Phase 18 Wave 1 — flagship printer models
import mdl_apple_laserwriter from "@/content/models/apple-laserwriter";
import mdl_canon_lbp_cx_print_engine from "@/content/models/canon-lbp-cx-print-engine";
import mdl_ibm_3800 from "@/content/models/ibm-3800";
import mdl_xerox_9700 from "@/content/models/xerox-9700";
import mdl_xerox_docutech from "@/content/models/xerox-docutech";
import mdl_ibm_1403 from "@/content/models/ibm-1403";
import mdl_diablo_630 from "@/content/models/diablo-630";
import mdl_teletype_model_33 from "@/content/models/teletype-model-33";
import mdl_centronics_101 from "@/content/models/centronics-101";
import mdl_epson_mx_80 from "@/content/models/epson-mx-80";
import mdl_epson_fx_80 from "@/content/models/epson-fx-80";
import mdl_okidata_microline from "@/content/models/okidata-microline";
import mdl_star_micronics_nl_10 from "@/content/models/star-micronics-nl-10";
import mdl_apple_imagewriter from "@/content/models/apple-imagewriter";
import mdl_hp_thinkjet from "@/content/models/hp-thinkjet";
import mdl_hp_deskjet_original from "@/content/models/hp-deskjet-original";
import mdl_canon_bubble_jet_bj from "@/content/models/canon-bubble-jet-bj";
import mdl_hp_laserjet_4 from "@/content/models/hp-laserjet-4";
import mdl_tektronix_phaser_solid_ink from "@/content/models/tektronix-phaser-solid-ink";
import mdl_hp_7475a_plotter from "@/content/models/hp-7475a-plotter";
import mdl_hp_officejet_original from "@/content/models/hp-officejet-original";

// Phase 18 Wave 2 — additional well-documented printer models
import mdl_hp_laserjet_iii from "@/content/models/hp-laserjet-iii";
import mdl_hp_laserjet_5 from "@/content/models/hp-laserjet-5";
import mdl_apple_laserwriter_ii from "@/content/models/apple-laserwriter-ii";
import mdl_hp_deskjet_500 from "@/content/models/hp-deskjet-500";
import mdl_epson_stylus_color from "@/content/models/epson-stylus-color";
import mdl_canon_bjc_4000 from "@/content/models/canon-bjc-4000";
import mdl_hp_designjet_original from "@/content/models/hp-designjet-original";
import mdl_ibm_proprinter from "@/content/models/ibm-proprinter";
import mdl_epson_lq_1500 from "@/content/models/epson-lq-1500";
import mdl_nec_spinwriter from "@/content/models/nec-spinwriter";
import mdl_ibm_1443 from "@/content/models/ibm-1443";
import mdl_hp_7550a_plotter from "@/content/models/hp-7550a-plotter";
import mdl_lexmark_optra from "@/content/models/lexmark-optra";
import mdl_oki_okipage from "@/content/models/oki-okipage";
import mdl_star_gemini_10x from "@/content/models/star-gemini-10x";
import mdl_panasonic_kx_p1124 from "@/content/models/panasonic-kx-p1124";
import mdl_hp_color_laserjet_original from "@/content/models/hp-color-laserjet-original";
import mdl_hp_laserjet_1100 from "@/content/models/hp-laserjet-1100";

// Phase 19 Wave 1 — fax model classes / standards / series
import fxm_group_3_fax_machines from "@/content/models/group-3-fax-machines";
import fxm_group_4_fax_machines from "@/content/models/group-4-fax-machines";
import fxm_super_g3_fax_machines from "@/content/models/super-g3-fax-machines";
import fxm_thermal_paper_fax_machines from "@/content/models/thermal-paper-fax-machines";
import fxm_plain_paper_fax_machines from "@/content/models/plain-paper-fax-machines";
import fxm_laser_fax_machines from "@/content/models/laser-fax-machines";
import fxm_inkjet_fax_machines from "@/content/models/inkjet-fax-machines";
import fxm_multifunction_fax_machines from "@/content/models/multifunction-fax-machines";
import fxm_fax_copier_combination_machines from "@/content/models/fax-copier-combination-machines";
import fxm_roll_feed_vs_cut_sheet_fax_machines from "@/content/models/roll-feed-vs-cut-sheet-fax-machines";
import fxm_desktop_vs_console_fax_machines from "@/content/models/desktop-vs-console-fax-machines";
import fxm_brother_fax_machine_series from "@/content/models/brother-fax-machine-series";
import fxm_canon_faxphone_series from "@/content/models/canon-faxphone-series";
import fxm_panasonic_kx_fax_series from "@/content/models/panasonic-kx-fax-series";
import fxm_sharp_ux_fax_series from "@/content/models/sharp-ux-fax-series";
import fxm_muratec_fax_machines from "@/content/models/muratec-fax-machines";

// Phase 20 — error-code / maintenance / safety concept guides
import mn_understanding_printer_error_codes from "@/content/guides/understanding-printer-error-codes";
import mn_printer_error_code_categories from "@/content/guides/printer-error-code-categories";
import mn_printer_safety_hazards from "@/content/guides/printer-safety-hazards";
import mn_toner_safety_and_handling from "@/content/guides/toner-safety-and-handling";
import mn_when_to_call_a_printer_technician from "@/content/guides/when-to-call-a-printer-technician";
import mn_printer_preventive_maintenance from "@/content/guides/printer-preventive-maintenance";
import mn_printer_service_documentation from "@/content/guides/printer-service-documentation";
import mn_safe_paper_jam_clearing from "@/content/guides/safe-paper-jam-clearing";
import mn_printer_maintenance_messages from "@/content/guides/printer-maintenance-messages";
import mn_laser_printer_safety from "@/content/guides/laser-printer-safety";
import mn_inkjet_printhead_maintenance from "@/content/guides/inkjet-printhead-maintenance";
import mn_printer_self_test_and_diagnostics from "@/content/guides/printer-self-test-and-diagnostics";
import mn_printer_emissions_and_ozone_safety from "@/content/guides/printer-emissions-and-ozone-safety";

// Phase 3 — glossary expansion
import gSpooler from "@/content/glossary/print-spooler";
import gQueue from "@/content/glossary/print-queue";
import gDriver from "@/content/glossary/print-driver";
import gThermal from "@/content/glossary/thermal-printing";
import gScannerBed from "@/content/glossary/scanner-bed";

// Phase 3 — workflows cluster
import wfIphone from "@/content/workflows/print-from-iphone";
import wfAndroid from "@/content/workflows/print-from-android";
import wfIpad from "@/content/workflows/print-documents-from-ipad";
import wfLabels from "@/content/workflows/print-shipping-labels";
import wfMobileOffice from "@/content/workflows/mobile-office-printing";

// Phase 3 — mobile-printing cluster
import mpChromebook from "@/content/mobile-printing/printing-from-a-chromebook";

// Phase 4A — fax-history cluster
import faxBizHistory from "@/content/fax/history-of-business-faxing";
import faxAnalogVsDigital from "@/content/fax/analog-fax-vs-digital-fax";
import faxBeforeEmail from "@/content/fax/fax-machines-before-email";
import faxDecline from "@/content/fax/decline-of-office-fax-machines";
import faxStillUsed from "@/content/fax/why-fax-is-still-used";

// Phase 8 — office-infrastructure cluster
import histPrintRooms from "@/content/history/office-print-rooms";
import histPrintServersLarge from "@/content/history/print-servers-in-large-offices";
import histSpoolersQueues from "@/content/history/spoolers-and-print-queues";
import histEnterpriseDocMgmt from "@/content/history/enterprise-document-management";
import wfSharedPrinter from "@/content/workflows/shared-printer-workflows";

export const allEntries: ContentEntry[] = [
  // Foundation
  historyOfPrinters,
  historyOfFax,
  howLaser,
  howInkjet,
  printerOffline,
  whatIsAirprint,
  howFax,
  hp,
  scanToPdf,
  whatIsPdf,
  gDpi,
  gDuplex,
  gToner,
  gAirprint,
  gOcr,
  gPpm,
  // History
  histEvoLaser,
  histEvoInkjet,
  histDotMatrix,
  histThermal,
  hist1990s,
  histEarlyComputer,
  histTransitionImpactLaser,
  histEvoOfficePrinting,
  histEvoColor,
  histDesktopPublishing,
  histWirelessHistory,
  hist1980s,
  histDecade1990s,
  histBeforeWifi,
  histHowDotMatrix,
  histHowImpact,
  histEarlyLaser,
  histEarlyNetwork,
  // Guides
  gdDuplex,
  gdPostscript,
  gdDrivers,
  gdWireless,
  gdResolution,
  gdLaserVsInkjet,
  gdPrintServer,
  // Troubleshooting
  tsMac,
  tsWindows,
  tsWifi,
  tsJam,
  tsBlank,
  tsScanner,
  tsAirprint,
  tsOffline11,
  // Brands
  brCanon,
  brEpson,
  brBrother,
  brXerox,
  brandRicoh,
  brandKyocera,
  brandLexmark,
  // Phase 11 — flagship manufacturers (new)
  brIbm,
  brKonicaMinolta,
  // Phase 12 — printing technology encyclopedia
  tech_laser_printing,
  tech_inkjet_printing,
  tech_electrophotography,
  tech_xerography,
  tech_dot_matrix_printing,
  tech_daisy_wheel_printing,
  tech_line_printing,
  tech_impact_printing,
  tech_thermal_transfer_printing,
  tech_direct_thermal_printing,
  tech_led_printing,
  tech_solid_ink_printing,
  tech_dye_sublimation_printing,
  tech_thermal_inkjet_printing,
  tech_piezoelectric_inkjet_printing,
  tech_continuous_inkjet_printing,
  tech_page_wide_printing,
  tech_electrostatic_printing,
  // Phase 13 — print languages, standards & protocols
  std_postscript,
  std_pcl,
  std_esc_p,
  std_esc_pos,
  std_hp_gl,
  std_pjl,
  std_xps,
  std_afp,
  std_ipp,
  std_lpd_lpr,
  std_jetdirect,
  std_airprint,
  std_mopria,
  std_cups,
  std_smb_printing,
  std_bonjour_mdns_printing,
  std_pdf_a,
  std_pdf_x,
  std_pdf_ua,
  std_iso_32000,
  std_tiff,
  std_icc_profiles,
  std_cmyk,
  std_halftoning,
  std_raster_image_processor,
  // Phase 14 — operating systems, drivers & print pipeline
  os_windows_printing,
  os_windows_print_spooler,
  os_windows_print_processor,
  os_windows_printer_drivers,
  os_windows_gdi_printing,
  os_windows_xps_print_pipeline,
  os_macos_printing,
  os_cups_architecture,
  os_linux_printing,
  os_openprinting,
  os_printer_drivers,
  os_universal_print_drivers,
  os_driverless_printing,
  os_print_rendering_pipeline,
  os_spooling_architecture,
  os_print_queue_lifecycle,
  os_print_job_lifecycle,
  os_printer_discovery,
  os_snmp_printer_monitoring,
  os_enterprise_print_servers,
  os_print_management,
  os_secure_printing,
  os_pull_printing,
  os_print_job_accounting,
  os_cloud_print_architectures,
  // Phase 15 Wave A — scanning, drivers & scan-to workflows
  sc_history_of_scanning,
  sc_flatbed_scanners,
  sc_sheet_fed_scanners,
  sc_adf_scanners,
  sc_book_scanners,
  sc_drum_scanners,
  sc_film_scanners,
  sc_portable_scanners,
  sc_network_scanners,
  sc_document_scanners,
  sc_multifunction_scanning,
  sc_scanner_driver_architecture,
  sc_twain,
  sc_wia,
  sc_sane,
  sc_ica,
  sc_escl,
  sc_isis,
  sc_scan_to_email,
  sc_scan_to_folder,
  sc_scan_to_cloud,
  // Phase 15 Wave B — OCR & recognition
  oc_history_of_ocr,
  oc_optical_character_recognition,
  oc_icr,
  oc_omr,
  oc_handwriting_recognition,
  oc_ocr_engines,
  oc_ocr_accuracy,
  oc_ocr_preprocessing,
  oc_ocr_layout_analysis,
  oc_ocr_limitations,
  oc_ocr_for_forms,
  oc_ocr_for_invoices,
  oc_ocr_for_receipts,
  oc_ocr_for_books,
  oc_ocr_for_newspapers,
  oc_ocr_for_legal_documents,
  oc_ocr_for_healthcare,
  oc_ocr_for_archives,
  oc_ocr_workflow,
  // Phase 15 Wave C — image preprocessing
  ip_image_deskew,
  ip_image_despeckle,
  ip_image_binarization,
  ip_image_thresholding,
  ip_image_noise_reduction,
  ip_contrast_enhancement,
  ip_morphological_operations,
  ip_document_cleanup,
  ip_compression_before_ocr,
  ip_orientation_detection,
  ip_color_normalization,
  ip_border_removal,
  ip_blank_page_detection,
  ip_barcode_recognition,
  ip_qr_code_recognition,
  // Phase 15 Wave D — enterprise document capture
  ec_enterprise_document_capture,
  ec_capture_servers,
  ec_document_indexing,
  ec_capture_metadata,
  ec_records_management,
  ec_digital_preservation,
  ec_microfilm_digitization,
  ec_batch_scanning,
  ec_capture_workflow,
  ec_legal_document_archives,
  ec_medical_record_archives,
  ec_government_records_archives,
  ec_records_compliance,
  // Phase 16 Wave A — color science & color management
  cl_color_management,
  cl_rgb_color_model,
  cl_lab_color,
  cl_xyz_color,
  cl_color_spaces,
  cl_rendering_intents,
  cl_gamut_mapping,
  cl_device_independent_color,
  cl_color_calibration,
  cl_printer_profiling,
  cl_soft_proofing,
  cl_hard_proofing,
  cl_monitor_to_printer_matching,
  cl_rgb_to_cmyk_conversion,
  // Phase 16 Wave B — screening & print imaging
  im_amplitude_modulation_screening,
  im_frequency_modulation_screening,
  im_error_diffusion,
  im_ordered_dithering,
  im_screen_angles,
  im_moire_patterns,
  im_dot_gain,
  im_black_generation,
  // Phase 16 Wave C — print-quality & defects
  pq_print_banding,
  pq_ghosting,
  pq_print_registration,
  pq_ink_bleeding,
  pq_print_mottle,
  pq_streaking,
  pq_toner_adhesion,
  pq_nozzle_clogging,
  pq_paper_curl,
  pq_show_through,
  pq_gloss_differential,
  pq_color_cast,
  pq_background_fogging,
  pq_print_quality_assessment,
  pq_smearing_and_set_off,
  // Phase 17 Wave A — printer components
  cp_developer_unit,
  cp_drum_cleaning_and_waste_toner,
  cp_fuser_unit,
  cp_photoconductor_drum,
  cp_transfer_unit,
  cp_laser_scanner_unit,
  cp_thermal_printhead,
  cp_inkjet_printhead,
  cp_platen_roller,
  cp_charge_roller,
  cp_registration_assembly,
  cp_printhead_service_station,
  cp_printer_control_electronics,
  cp_duplexing_unit,
  cp_output_and_finishing,
  cp_carriage_and_encoder,
  cp_paper_feed_rollers,
  cp_ink_delivery_system,
  // Phase 17 Wave B — consumables & ink/toner types
  cn_toner_cartridge,
  cn_imaging_unit,
  cn_ink_cartridge,
  cn_ink_tank_system,
  cn_thermal_transfer_ribbon,
  cn_dot_matrix_ribbon,
  cn_maintenance_kit,
  cn_waste_toner_container,
  cn_dye_based_ink,
  cn_pigment_based_ink,
  cn_solvent_ink,
  cn_latex_ink,
  cn_uv_curable_ink,
  cn_sublimation_ink,
  cn_toner_composition,
  cn_polymerized_toner,
  cn_micr_toner,
  cn_liquid_toner,
  // Phase 17 Wave C — media & paper
  pm_paper_weight_and_caliper,
  pm_paper_grain,
  pm_coated_vs_uncoated_paper,
  pm_paper_finish,
  pm_paper_brightness_and_whiteness,
  pm_paper_opacity,
  pm_inkjet_photo_paper,
  pm_cardstock_and_cover_stock,
  pm_label_and_tag_media,
  pm_synthetic_and_specialty_media,
  pm_paper_sizes,
  pm_paper_grades_and_standards,
  // Phase 18 Wave 0 — printer models (pilot)
  mdl_hp_laserjet_original,
  // Phase 18 Wave 1 — flagship printer models
  mdl_apple_laserwriter,
  mdl_canon_lbp_cx_print_engine,
  mdl_ibm_3800,
  mdl_xerox_9700,
  mdl_xerox_docutech,
  mdl_ibm_1403,
  mdl_diablo_630,
  mdl_teletype_model_33,
  mdl_centronics_101,
  mdl_epson_mx_80,
  mdl_epson_fx_80,
  mdl_okidata_microline,
  mdl_star_micronics_nl_10,
  mdl_apple_imagewriter,
  mdl_hp_thinkjet,
  mdl_hp_deskjet_original,
  mdl_canon_bubble_jet_bj,
  mdl_hp_laserjet_4,
  mdl_tektronix_phaser_solid_ink,
  mdl_hp_7475a_plotter,
  mdl_hp_officejet_original,
  // Phase 18 Wave 2 — additional well-documented printer models
  mdl_hp_laserjet_iii,
  mdl_hp_laserjet_5,
  mdl_apple_laserwriter_ii,
  mdl_hp_deskjet_500,
  mdl_epson_stylus_color,
  mdl_canon_bjc_4000,
  mdl_hp_designjet_original,
  mdl_ibm_proprinter,
  mdl_epson_lq_1500,
  mdl_nec_spinwriter,
  mdl_ibm_1443,
  mdl_hp_7550a_plotter,
  mdl_lexmark_optra,
  mdl_oki_okipage,
  mdl_star_gemini_10x,
  mdl_panasonic_kx_p1124,
  mdl_hp_color_laserjet_original,
  mdl_hp_laserjet_1100,
  // Phase 19 Wave 1 — fax model classes / standards / series
  fxm_group_3_fax_machines,
  fxm_group_4_fax_machines,
  fxm_super_g3_fax_machines,
  fxm_thermal_paper_fax_machines,
  fxm_plain_paper_fax_machines,
  fxm_laser_fax_machines,
  fxm_inkjet_fax_machines,
  fxm_multifunction_fax_machines,
  fxm_fax_copier_combination_machines,
  fxm_roll_feed_vs_cut_sheet_fax_machines,
  fxm_desktop_vs_console_fax_machines,
  fxm_brother_fax_machine_series,
  fxm_canon_faxphone_series,
  fxm_panasonic_kx_fax_series,
  fxm_sharp_ux_fax_series,
  fxm_muratec_fax_machines,
  // Phase 20 — error-code / maintenance / safety concept guides
  mn_understanding_printer_error_codes,
  mn_printer_error_code_categories,
  mn_printer_safety_hazards,
  mn_toner_safety_and_handling,
  mn_when_to_call_a_printer_technician,
  mn_printer_preventive_maintenance,
  mn_printer_service_documentation,
  mn_safe_paper_jam_clearing,
  mn_printer_maintenance_messages,
  mn_laser_printer_safety,
  mn_inkjet_printhead_maintenance,
  mn_printer_self_test_and_diagnostics,
  mn_printer_emissions_and_ozone_safety,
  // Glossary
  gSpooler,
  gQueue,
  gDriver,
  gThermal,
  gScannerBed,
  // Workflows
  wfIphone,
  wfAndroid,
  wfIpad,
  wfLabels,
  wfMobileOffice,
  // Mobile printing
  mpChromebook,
  // Phase 4A — fax-history cluster
  faxBizHistory,
  faxAnalogVsDigital,
  faxBeforeEmail,
  faxDecline,
  faxStillUsed,
  // Phase 8 — office-infrastructure cluster
  histPrintRooms,
  histPrintServersLarge,
  histSpoolersQueues,
  histEnterpriseDocMgmt,
  wfSharedPrinter,
];
