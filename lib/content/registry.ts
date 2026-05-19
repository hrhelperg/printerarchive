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
];
