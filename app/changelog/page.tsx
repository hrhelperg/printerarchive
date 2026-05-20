import type { Metadata } from "next";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { CHANGELOG, type ChangelogKind } from "@/lib/changelog";

export const metadata: Metadata = buildMetadata({
  title: "Changelog",
  path: "/changelog",
  description:
    "A dated record of how PrinterArchive has changed — when major editorial, content, image, and infrastructure work shipped.",
});

const KIND_LABEL: Record<ChangelogKind, string> = {
  redesign: "Redesign",
  feature: "Feature",
  content: "Content",
  editorial: "Editorial",
  "image-batch": "Image batch",
  infrastructure: "Infrastructure",
};

export default function ChangelogPage() {
  return (
    <Container width="prose" className="py-12">
      <h1 className="font-serif text-4xl tracking-tight">Changelog</h1>
      <p className="mt-4 font-serif text-lg text-ink-soft text-pretty">
        A dated record of how the archive has changed. Entries are added
        deliberately as phases ship, newest first. Significant editorial
        corrections that change the meaning of a claim are noted here in
        addition to being applied to the relevant entry.
      </p>
      <ol className="mt-10 space-y-8">
        {CHANGELOG.map((c) => (
          <li key={`${c.date}-${c.title}`} className="border-t border-rule pt-6">
            <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
              <time className="font-mono text-sm text-ink-faint" dateTime={c.date}>
                {c.date}
              </time>
              <span className="kicker">{KIND_LABEL[c.kind]}</span>
            </div>
            <h2 className="mt-2 font-serif text-xl tracking-tight">{c.title}</h2>
            <p className="mt-2 text-ink-soft text-pretty">{c.summary}</p>
          </li>
        ))}
      </ol>
      <p className="mt-12 font-sans text-xs text-ink-faint">
        Last reviewed: 2026-05-20
      </p>
    </Container>
  );
}
