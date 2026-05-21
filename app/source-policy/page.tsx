import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Prose } from "@/components/content/Prose";

export const metadata: Metadata = buildMetadata({
  title: "Source policy",
  path: "/source-policy",
  description:
    "Which sources PrinterArchive cites, which sources it refuses, and what evidence each image and claim must carry.",
});

export default function SourcePolicyPage() {
  return (
    <Container width="prose" className="py-12">
      <h1 className="font-serif text-4xl tracking-tight">
        Source policy
      </h1>
      <Prose>
        <p>
          The archive&apos;s usefulness rests on the quality of what it cites.
          This page records, plainly, which sources the archive draws from and
          which it refuses, so that any reader can audit how a given claim was
          arrived at.
        </p>

        <h2>Allowed sources for text claims</h2>
        <p>
          Text claims draw from: institutional archives (the Computer History
          Museum, the U.S. National Archives and Records Administration, the
          Library of Congress, the Smithsonian, the Internet Archive, museum
          and university collections); peer-reviewed historical literature
          (the <em>IEEE Annals of the History of Computing</em>, university
          press monographs on computing and printing history); primary sources
          where they are available (patents, manufacturer datasheets,
          contemporaneous trade press); and well-established encyclopedic
          references (Wikipedia, where its citations themselves resolve to
          one of the source categories above).
        </p>

        <h2>Allowed sources for images</h2>
        <p>
          Images draw exclusively from sources whose licensing posture is
          unambiguous: Wikimedia Commons (with the file&apos;s license string
          recorded verbatim), NARA, the Library of Congress &quot;Free to Use
          and Reuse&quot; sets, Smithsonian Open Access, the Internet Archive,
          and the Computer History Museum&apos;s public collections.
          Public-domain works (U.S. Federal Government works, works whose
          copyright has lapsed, works dedicated to the public domain) and
          compatible Creative Commons licenses (CC0, CC BY, CC BY-SA) are
          accepted; license-incompatible material is refused even when it
          would be visually preferable.
        </p>

        <h2>Forbidden sources</h2>
        <p>
          The archive does not source from stock-photo platforms (Alamy,
          Getty, Adobe Stock, iStock, Dreamstime, Shutterstock), content
          aggregators or social platforms (Pinterest, image-hosting
          aggregators without verifiable provenance), AI-generated imagery,
          fake retro recreations, or unverifiable personal blogs. The
          principle is not aesthetic: it is that the licensing chain on these
          sources is either non-existent or non-auditable, which makes them
          unsuitable for an archive that asks readers to trust its
          provenance claims.
        </p>

        <h2>License discipline</h2>
        <p>
          Every image carries an explicit license string recorded verbatim
          from the source institution&apos;s descriptor page. CC-BY-SA images
          are flagged as such; public-domain works are flagged as such; works
          released under a non-CC institutional rights statement (such as
          Flickr Commons&apos;s &quot;No known copyright restrictions&quot;)
          are recorded with that exact phrasing rather than translated into
          a different license. The archive does not attempt to relicense or
          paraphrase license terms.
        </p>

        <h2>Per-image metadata requirements</h2>
        <p>
          Every committed image must carry: descriptive alt-text, exact pixel
          dimensions, a source attribution line, a license string, and where
          available a URL pointing to the source institution&apos;s descriptor
          page (not the upload URL). The repository&apos;s build pipeline
          enforces this with a content-integrity gate; an image that fails
          any of these checks fails the build, and the entry cannot ship
          until the metadata is repaired.
        </p>
      </Prose>
      <p className="mt-12 font-sans text-xs text-ink-faint">
        Last reviewed: 2026-05-20
      </p>
    </Container>
  );
}
