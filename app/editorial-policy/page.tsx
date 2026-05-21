import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Prose } from "@/components/content/Prose";

export const metadata: Metadata = buildMetadata({
  title: "Editorial policy",
  path: "/editorial-policy",
  description:
    "How PrinterArchive writes, sources, and corrects its entries — the conservative editorial practice the archive follows.",
});

export default function EditorialPolicyPage() {
  return (
    <Container width="prose" className="py-12">
      <h1 className="font-serif text-4xl tracking-tight">
        Editorial policy
      </h1>
      <Prose>
        <p>
          PrinterArchive is written to a conservative editorial standard. Its
          aim is not to be exhaustive, novel, or surprising; its aim is to be
          correct, sourceable, and durable. Where that goal forces a slower
          publication pace or a quieter claim, that trade is accepted.
        </p>

        <h2>Conservatism principle</h2>
        <p>
          The archive prefers to describe a mechanism precisely rather than
          assert a figure, date, or attribution it cannot stand behind. Where
          a claim depends on a specific source, that source is cited. Where
          the underlying historiography is contested or uneven, the entry is
          organised around the operational character of the technology — what
          it did, what it cost, what it changed — rather than around a single
          datable sequence. The recurring &quot;A note on dates&quot; callout
          used throughout the history cluster is the visible artefact of this
          rule.
        </p>

        <h2>Sourcing standards</h2>
        <p>
          Entries draw on institutional archives, peer-reviewed material,
          primary sources where available, and well-established encyclopedic
          references. The full allowed-source set, and the equally important
          forbidden-source set, is documented on the{" "}
          <a href="/source-policy">source policy page</a>. Each entry that
          carries external claims surfaces its references in the{" "}
          <em>Source transparency</em> block at the foot of the article, where
          the reader can inspect them without leaving the page.
        </p>

        <h2>Attribution methodology</h2>
        <p>
          Every image in the archive carries an explicit source, a license
          string, and a link to the descriptor page on the institution that
          holds the original. The build pipeline enforces this with a
          content-integrity gate that fails the build if any image lacks
          alt-text, dimensions, source, or license. Attribution is recorded
          verbatim as the source institution provides it; the archive does
          not paraphrase or shorten institutional credit lines.
        </p>

        <h2>Correction policy</h2>
        <p>
          When an entry is found to contain a factual error, an unsupported
          claim, or a mis-attributed image, the correction is made directly
          to the entry and the entry&apos;s <code>updated</code> date is
          advanced. Significant corrections — those that change the meaning
          of a claim rather than fix a typo — are also noted in the{" "}
          <a href="/changelog">changelog</a>. Editorial questions and
          corrections can be sent to{" "}
          <a href="mailto:info@helperg.com">info@helperg.com</a>.
        </p>

        <h2>No AI-fabricated history</h2>
        <p>
          The archive does not publish AI-generated historical imagery, fake
          retro recreations, or invented bibliographic citations.
          Machine-assistance is used in drafting and copy-editing, but every
          factual claim and every cited source is reviewed and verified by a
          human editor before publication. Entries that cannot be sourced
          honestly are not published.
        </p>

        <h2>Editorial cadence</h2>
        <p>
          Updates are made deliberately rather than continuously. Entries are
          revisited when new institutional sources become available, when
          reader corrections require it, or when adjacent entries surface a
          contradiction. The archive prefers fewer, more durable entries to a
          rapidly-expanding catalogue of unstable ones.
        </p>
      </Prose>
      <p className="mt-12 font-sans text-xs text-ink-faint">
        Last reviewed: 2026-05-20
      </p>
    </Container>
  );
}
