import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Prose } from "@/components/content/Prose";

export const metadata: Metadata = buildMetadata({
  title: "Archive methodology",
  path: "/archive-methodology",
  description:
    "How PrinterArchive organises entries, treats contested historical claims, and structures cross-references between technologies and eras.",
});

export default function ArchiveMethodologyPage() {
  return (
    <Container width="prose" className="py-12">
      <h1 className="font-serif text-4xl tracking-tight">
        Archive methodology
      </h1>
      <Prose>
        <p>
          This page describes how the archive is organised — the choices
          behind the structure, the metadata that connects entries to one
          another, and the rules the archive applies when historical evidence
          is incomplete.
        </p>

        <h2>Why we organise around operational character, not dates</h2>
        <p>
          For most of the technologies the archive covers, the underlying
          historiography is uneven. Adoption happened at different times
          across industries, regions, and organisational sizes; vendor claims,
          contemporaneous press, and later retrospectives often disagree on
          specific dates. Rather than asserting a single canonical sequence,
          the archive describes the operational character of an arrangement —
          what it did, what it cost, what it changed about the day around it
          — and treats specific years and product names as supporting detail
          rather than as the spine of the narrative.
        </p>

        <h2>How contested claims are handled</h2>
        <p>
          When a claim cannot be settled from the available sources, the
          archive states the constraint explicitly. The recurring{" "}
          <em>A note on dates</em> callout, used throughout the history
          cluster, is the visible artefact of this rule: it signals that the
          surrounding section describes a pattern rather than a single
          datable event. The archive prefers to under-state a claim it cannot
          fully support than to over-state one it can.
        </p>

        <h2>The metadata system</h2>
        <p>
          Each entry carries three structural fields that organise it within
          the archive:
        </p>
        <ul>
          <li>
            <strong>era</strong> — a short label placing the entry within a
            longer technological arc (for example, <em>the impact-printing
            era and its lasting niches</em>). The era field anchors the entry
            on chronological rails like the homepage&apos;s five-era
            timeline.
          </li>
          <li>
            <strong>cluster</strong> — a topical grouping (for example,{" "}
            <em>impact-and-early-digital</em>, <em>fax-history</em>) used to
            associate entries that share a thematic concern even when their
            eras differ.
          </li>
          <li>
            <strong>related</strong> — a hand-curated list of cross-references
            to other entries. Related links are not automatically inferred
            from keywords; an editor chooses each one for a specific
            cross-reading reason.
          </li>
        </ul>

        <h2>Why archival imagery matters</h2>
        <p>
          An entry about technology that shaped office work for two decades
          loses force when it is illustrated by generic modern photography.
          The archive uses period-authentic institutional imagery — bound
          continuous-form printout, an HP LaserJet I as it was first sold, a
          NORAD command-room scene from the period the entry actually
          describes — because the visual register has to match the claim
          register. A documentary photograph from the National Archives sits
          alongside a documentary sentence; a stock image, even a flattering
          one, does not.
        </p>

        <h2>The integrity gate</h2>
        <p>
          The repository&apos;s build pipeline runs a content-integrity
          script that walks every entry and every image and fails the build
          if any image lacks alt-text, dimensions, source, or license, or if
          any entry is missing a required field. This is the mechanical
          enforcement behind the editorial commitments described on the{" "}
          <a href="/editorial-policy">editorial policy</a> and{" "}
          <a href="/source-policy">source policy</a> pages: a regression in
          provenance becomes a build failure rather than something a reader
          discovers months later.
        </p>
      </Prose>
      <p className="mt-12 font-sans text-xs text-ink-faint">
        Last reviewed: 2026-05-20
      </p>
    </Container>
  );
}
