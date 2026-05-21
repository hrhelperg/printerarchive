import type { Metadata } from "next";
import { site } from "@/lib/site";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Prose } from "@/components/content/Prose";

export const metadata: Metadata = buildMetadata({
  title: "Cookie policy",
  path: "/cookie-policy",
  description:
    "How PrinterArchive uses necessary storage and consent-gated analytics, and how to change your preferences.",
});

export default function CookiePolicyPage() {
  return (
    <Container width="prose" className="py-12">
      <h1 className="font-serif text-4xl tracking-tight">Cookie policy</h1>
      <Prose>
        <p>
          {site.name} keeps its use of cookies and similar storage deliberately
          small. This page describes what is stored, why, and how you can change
          your choice at any time.
        </p>

        <h2>Necessary storage</h2>
        <p>
          The archive uses a single small entry in your browser&apos;s local
          storage to remember your cookie choice (whether you accepted or
          rejected analytics). This is required for the site to respect your
          decision across visits, so it is always on. It contains only your
          preference and the date it was set — no identifier and no tracking
          data.
        </p>

        <h2>Analytics</h2>
        <p>
          With your consent, the archive loads a first-party analytics measure
          operated by the publisher, {site.publisher.name}. It records
          aggregate usage events — such as which pages are viewed — to help
          understand how the archive is used. It does <strong>not</strong> load
          until you accept analytics, and it is not used for advertising. If you
          reject analytics, no analytics script is loaded at all.
        </p>

        <h2>What is collected</h2>
        <p>
          At a high level, the analytics measure records page-level usage events
          and standard request information that a web server ordinarily sees. It
          is used only in aggregate to understand readership of the archive. The
          archive does not sell data and does not use it to build advertising
          profiles.
        </p>

        <h2>Changing your preferences</h2>
        <p>
          You can change your choice at any time using the{" "}
          <a href="#cookie-preferences">Cookie preferences</a> link in the site
          footer. Choosing to reject analytics after previously accepting will
          reload the page so that analytics stops immediately; your new choice is
          then remembered for future visits.
        </p>

        <h2>Contact</h2>
        <p>
          {site.name} is published by {site.publisher.name}. Questions about this
          policy can be sent to{" "}
          <a href={`mailto:${site.publisher.email}`}>{site.publisher.email}</a>.
        </p>
      </Prose>
      <p className="mt-12 font-sans text-xs text-ink-faint">
        Last reviewed: 2026-05-21
      </p>
    </Container>
  );
}
