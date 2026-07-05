import type { SectionId } from "@/lib/site";
import type { ProductId } from "@/lib/products";

// The knowledge-graph taxonomy is the long-term architectural map of the site:
// every topic cluster PrinterArchive can honestly cover, the canonical entities
// each cluster centers on, its live/planned page counts, and how clusters
// interlink. It is DATA, not content — it lives in lib/ (never content/) so it
// is not treated as a page module by the content-integrity check. It exists to
// (1) keep cluster + entity vocabulary consistent for the internal graph, and
// (2) let future page generation be data-driven. It does not itself create
// routes or pages.
//
// Only type-only imports reference the "@/" alias so this module loads cleanly
// under `node --experimental-strip-types` (the type imports are erased).

/** Sections proposed by the taxonomy but not yet built as routes. */
export type ProposedSectionId = "models";

/**
 * Product anchors proposed by the taxonomy but NOT yet present in
 * lib/products.ts. These HELPERG apps have no verified store metadata wired
 * into the site yet, so ecosystem pages that reference them must wait until
 * they are promoted to real ProductIds.
 */
export type ProposedProductId = "cv-resume" | "invoice-maker" | "pocket-manager";

export type TaxonomySection = SectionId | ProposedSectionId;
export type TaxonomyAppAnchor = ProductId | ProposedProductId;

export type EntityType =
  | "brand"
  | "technology"
  | "standard"
  | "format"
  | "os"
  | "organization"
  | "concept"
  | "product"
  | "protocol";

/** A canonical named entity a cluster centers on (basis for entity consistency). */
export interface KgEntity {
  name: string;
  type: EntityType;
}

/** A representative NET-NEW page the cluster can sustain (not yet built). */
export interface KgPlannedPage {
  slug: string;
  title: string;
  section: TaxonomySection;
  angle: string;
}

/**
 * expand  = a cluster that already has published pages and should be deepened.
 * planned = net-new territory with no pages yet.
 */
export type KgClusterStatus = "expand" | "planned";

export interface KgCluster {
  id: string;
  label: string;
  primarySection: TaxonomySection;
  secondarySections: TaxonomySection[];
  description: string;
  /** Product to reference naturally where genuinely relevant, or null. */
  appAnchor: TaxonomyAppAnchor | null;
  status: KgClusterStatus;
  entities: KgEntity[];
  /** Pages already published in this cluster today. */
  livePages: number;
  /** Honest long-term page capacity (conservative <= ambitious). */
  capacity: { conservative: number; ambitious: number };
  /** Representative net-new pages (a demonstrative subset, not the full list). */
  planned: KgPlannedPage[];
  /** Other cluster ids this cluster should interlink with (internal graph). */
  crossLinks: string[];
  /** Kinds of verified public-domain imagery useful here (manifest workflow). */
  imageNeeds: string[];
}

// Runtime constants (LIVE_SECTIONS, PROPOSED_SECTIONS, LIVE_PRODUCTS,
// PROPOSED_PRODUCTS) live in taxonomy.ts, not here, so that this module stays
// types-only and is fully erased under `node --experimental-strip-types`.
