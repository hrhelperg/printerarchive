import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Prose } from "@/components/content/Prose";

export const metadata: Metadata = buildMetadata({
  title: "About",
  path: "/about",
  description:
    "PrinterArchive.net is an educational reference documenting printing, fax, scanning, and document technology.",
});

export default function AboutPage() {
  return (
    <Container width="prose" className="py-12">
      <h1 className="font-serif text-4xl tracking-tight">
        About PrinterArchive
      </h1>
      <Prose>
        <p>
          {site.name} is an independent educational reference. Its purpose is
          to document how printing, fax, scanning, mobile printing, and
          document workflows actually work — clearly, accurately, and without
          marketing language.
        </p>
        <h2>Editorial approach</h2>
        <p>
          Entries are written to be conservative and source-ready. We prefer
          to explain a mechanism precisely rather than state figures or dates
          we cannot stand behind. Where a claim depends on a specific source,
          that source is cited; where it cannot be verified, it is not
          asserted.
        </p>
        <h2>Scope</h2>
        <p>
          The archive covers printing history, technology guides,
          troubleshooting, brands, document workflows, tools and formats, a
          glossary, mobile printing, and fax technology. It is reference
          material, not product reviews or recommendations.
        </p>
        <h2>Publisher</h2>
        <p>
          {site.name} is published by {site.publisher.name}. Editorial
          questions and corrections can be sent to{" "}
          <a href={`mailto:${site.publisher.email}`}>
            {site.publisher.email}
          </a>
          .
        </p>

        <h2>Editorial standards</h2>
        <p>
          The full statement of the archive&apos;s editorial practice —
          conservatism principle, sourcing standards, attribution methodology,
          correction policy, and the no-AI-fabricated-history rule — is on
          the <Link href="/editorial-policy">editorial policy page</Link>.
        </p>

        <h2>Source transparency</h2>
        <p>
          The complete list of allowed and forbidden source categories, the
          archive&apos;s license discipline, and the per-image metadata
          requirements that the build pipeline enforces is on the{" "}
          <Link href="/source-policy">source policy page</Link>. Every entry
          that carries external claims surfaces its references in the{" "}
          <em>Source transparency</em> block at the foot of the article.
        </p>

        <h2>Image provenance</h2>
        <p>
          Every image carries an explicit source institution, license string,
          and link to the source institution&apos;s descriptor page. The
          allowed image-source set (Wikimedia Commons, NARA, Library of
          Congress, Smithsonian, Computer History Museum, and equivalent
          institutional archives) and the refused set (stock-photo platforms,
          content aggregators, AI-generated imagery) are documented on the{" "}
          <Link href="/source-policy">source policy page</Link>.
        </p>

        <h2>Correction policy</h2>
        <p>
          When an entry is found to contain a factual error or an unsupported
          claim, the correction is made directly to the entry and the
          entry&apos;s <code>updated</code> date is advanced. Significant
          corrections are also noted in the{" "}
          <Link href="/changelog">changelog</Link>. Send corrections to{" "}
          <a href={`mailto:${site.publisher.email}`}>
            {site.publisher.email}
          </a>
          .
        </p>

        <h2>Methodology</h2>
        <p>
          How the archive organises entries — eras, clusters, related links
          — and how it treats contested historical claims is described on
          the <Link href="/archive-methodology">archive methodology page</Link>.
        </p>

        <h2>Changes</h2>
        <p>
          A dated record of how the archive has changed since the foundation
          phase shipped is maintained on the{" "}
          <Link href="/changelog">changelog page</Link>.
        </p>
      </Prose>
      <p className="mt-12 font-sans text-xs text-ink-faint">
        Last reviewed: 2026-05-20
      </p>
    </Container>
  );
}
