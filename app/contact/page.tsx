import type { Metadata } from "next";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Prose } from "@/components/content/Prose";

export const metadata: Metadata = buildMetadata({
  title: "Contact",
  path: "/contact",
  description: `Contact ${site.publisher.name}, publisher of ${site.name}, for corrections and editorial questions.`,
});

export default function ContactPage() {
  return (
    <Container width="prose" className="py-12">
      <h1 className="font-serif text-4xl tracking-tight">Contact</h1>
      <Prose>
        <p>
          {site.name} is published by {site.publisher.name}. We welcome
          corrections, clarifications, and factual feedback on any entry.
        </p>
        <h2>Corrections &amp; editorial</h2>
        <p>
          Email{" "}
          <a href={`mailto:${site.publisher.email}`}>
            {site.publisher.email}
          </a>
          . When reporting a correction, please include the page URL and the
          specific statement in question so it can be verified against
          sources.
        </p>
        <h2>Scope of contact</h2>
        <p>
          We do not provide individual device support or product
          recommendations. Troubleshooting guidance is published in the
          troubleshooting section and applies generally rather than to
          specific support cases.
        </p>
      </Prose>
    </Container>
  );
}
