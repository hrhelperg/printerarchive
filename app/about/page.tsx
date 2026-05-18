import type { Metadata } from "next";
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
      </Prose>
    </Container>
  );
}
