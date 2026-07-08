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
