import type { ContentEntry } from "@/lib/content/types";
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

export const allEntries: ContentEntry[] = [
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
];
