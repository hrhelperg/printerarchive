# Visual Surface Pass v2 — Per-Hub Specialized Layouts (Plan)

> Visible per-hub layouts. Each specialized hub gets a new Server Component rendered conditionally in `SectionHub`, extending the existing `isHistory ? <EvolutionBand />` precedent. 3 subagent dispatches (replace-components, augment-components, controller QA). User decisions: skip /brands; 3-dispatch shape.

**Branch:** `feat/foundation-architecture` only. No merge to `main`.

**Constraints:** zero new dependencies, no Client Components, no new images, no new content entries, no fake links (non-existent targets become non-linked labels). Calm-archive register; no dashboard/blog-card/thumbnail-wall aesthetics.

## Wiring contract (SectionHub bottom Container)

The specialized components slot into the bottom `<Container width="wide" className="py-14">`. Two render modes:
- **Replace** (glossary, troubleshooting, workflows): the specialized component renders INSTEAD of `SectionList`. It must link EVERY entry in the section (each has a fallback "other" bucket so a future un-mapped entry never disappears).
- **Augment** (tools, mobile-printing): the specialized component renders ABOVE the existing `SectionList`.

Target structure after both tasks:

```tsx
<Container width="wide" className="py-14">
  <JsonLd data={breadcrumbSchema(crumbs)} />
  {section === "tools" ? <InfrastructureMap /> : null}
  {section === "mobile-printing" ? <MobileHandoff /> : null}
  {items.length === 0 ? (
    <p className="text-ink-faint">New entries are being added to this section.</p>
  ) : section === "glossary" ? (
    <GlossaryIndex items={items} />
  ) : section === "troubleshooting" ? (
    <DiagnosticGroups items={items} />
  ) : section === "workflows" ? (
    <WorkflowGroups items={items} />
  ) : useGroups ? (
    /* existing cluster grouping — unchanged */
  ) : (
    <SectionList items={items} />
  )}
</Container>
```

Task 1 adds the three `section === "glossary|troubleshooting|workflows"` branches + their components. Task 2 adds the two augment lines + their components. Each task keeps the build green.

---

## Task 1 — Replace-components

### 1A — CREATE `components/content/GlossaryIndex.tsx`

```tsx
import Link from "next/link";
import type { ContentEntry, GlossaryEntry } from "@/lib/content/types";

function isGlossary(e: ContentEntry): e is GlossaryEntry {
  return e.section === "glossary";
}

export function GlossaryIndex({ items }: { items: ContentEntry[] }) {
  const terms = items.filter(isGlossary);
  if (terms.length === 0) return null;

  const byLetter = new Map<string, GlossaryEntry[]>();
  for (const t of terms) {
    const letter = t.term.charAt(0).toUpperCase();
    if (!byLetter.has(letter)) byLetter.set(letter, []);
    byLetter.get(letter)!.push(t);
  }
  const letters = [...byLetter.keys()].sort();

  return (
    <div className="mt-10">
      <p className="kicker">A–Z reference index</p>
      <div className="mt-6 divide-y divide-rule border-y border-rule">
        {letters.map((letter) => (
          <section
            key={letter}
            aria-label={`Terms starting with ${letter}`}
            className="grid gap-4 py-6 md:grid-cols-[3rem_1fr]"
          >
            <p
              className="font-serif text-3xl leading-none text-rule-strong"
              aria-hidden
            >
              {letter}
            </p>
            <dl className="space-y-4">
              {byLetter
                .get(letter)!
                .slice()
                .sort((a, b) => (a.term < b.term ? -1 : 1))
                .map((t) => (
                  <div key={t.slug}>
                    <dt>
                      <Link
                        href={`/glossary/${t.slug}`}
                        className="group no-underline"
                      >
                        <span className="font-serif text-lg tracking-tight text-ink group-hover:text-accent">
                          {t.term}
                        </span>
                      </Link>
                    </dt>
                    <dd className="mt-1 text-sm text-ink-soft text-pretty">
                      {t.shortDefinition}
                    </dd>
                  </div>
                ))}
            </dl>
          </section>
        ))}
      </div>
    </div>
  );
}
```

### 1B — CREATE `components/content/DiagnosticGroups.tsx`

```tsx
import Link from "next/link";
import type { ContentEntry, TroubleshootingEntry } from "@/lib/content/types";

const GROUPS: { label: string; slugs: string[] }[] = [
  {
    label: "Connection & detection",
    slugs: [
      "printer-not-detected-on-mac",
      "printer-not-detected-on-windows",
      "printer-wont-connect-to-wifi",
    ],
  },
  {
    label: "Offline & Windows",
    slugs: ["printer-offline-guide", "printer-offline-windows-11"],
  },
  {
    label: "Paper & output",
    slugs: ["paper-jam-guide", "printer-printing-blank-pages"],
  },
  { label: "Scanning", slugs: ["scanner-not-detected"] },
  { label: "AirPrint & mobile", slugs: ["airprint-not-working"] },
];

function isTrouble(e: ContentEntry): e is TroubleshootingEntry {
  return e.section === "troubleshooting";
}

function Card({ e }: { e: TroubleshootingEntry }) {
  return (
    <li className="bg-paper">
      <Link
        href={`/troubleshooting/${e.slug}`}
        className="group flex h-full flex-col p-6 no-underline transition-colors hover:bg-paper-raised"
      >
        <span className="text-sm text-ink-soft text-pretty">{e.symptom}</span>
        <span className="mt-3 font-serif text-base tracking-tight text-ink group-hover:text-accent">
          {e.title}
        </span>
        <span className="mt-2 font-sans text-xs uppercase tracking-wide text-ink-faint">
          Read the guide →
        </span>
      </Link>
    </li>
  );
}

export function DiagnosticGroups({ items }: { items: ContentEntry[] }) {
  const entries = items.filter(isTrouble);
  if (entries.length === 0) return null;
  const bySlug = new Map(entries.map((e) => [e.slug, e]));
  const mapped = new Set(GROUPS.flatMap((g) => g.slugs));
  const unmapped = entries.filter((e) => !mapped.has(e.slug));

  return (
    <div className="mt-10 space-y-12">
      {GROUPS.map((g) => {
        const groupEntries = g.slugs
          .map((s) => bySlug.get(s))
          .filter((e): e is TroubleshootingEntry => Boolean(e));
        if (groupEntries.length === 0) return null;
        return (
          <section key={g.label} aria-label={g.label}>
            <p className="kicker">{g.label}</p>
            <ul className="mt-4 grid gap-px border border-rule bg-rule sm:grid-cols-2">
              {groupEntries.map((e) => (
                <Card key={e.slug} e={e} />
              ))}
            </ul>
          </section>
        );
      })}
      {unmapped.length > 0 ? (
        <section aria-label="More troubleshooting">
          <p className="kicker">More troubleshooting</p>
          <ul className="mt-4 grid gap-px border border-rule bg-rule sm:grid-cols-2">
            {unmapped.map((e) => (
              <Card key={e.slug} e={e} />
            ))}
          </ul>
        </section>
      ) : null}
    </div>
  );
}
```

### 1C — CREATE `components/content/WorkflowGroups.tsx`

```tsx
import Link from "next/link";
import type { ContentEntry } from "@/lib/content/types";

const GROUPS: { label: string; slugs: string[] }[] = [
  {
    label: "Print from a phone or tablet",
    slugs: [
      "print-from-iphone",
      "print-from-android",
      "print-documents-from-ipad",
      "mobile-office-printing",
    ],
  },
  { label: "Scan to searchable PDF", slugs: ["scan-to-searchable-pdf"] },
  { label: "Print shipping labels", slugs: ["print-shipping-labels"] },
];

function Card({ e }: { e: ContentEntry }) {
  return (
    <li className="bg-paper">
      <Link
        href={`/workflows/${e.slug}`}
        className="group flex h-full flex-col p-6 no-underline transition-colors hover:bg-paper-raised"
      >
        <span className="font-serif text-base tracking-tight text-ink group-hover:text-accent">
          {e.title}
        </span>
        <span className="mt-1.5 text-sm text-ink-soft text-pretty">
          {e.summary}
        </span>
        <span className="mt-2 font-sans text-xs uppercase tracking-wide text-ink-faint">
          Open the workflow →
        </span>
      </Link>
    </li>
  );
}

export function WorkflowGroups({ items }: { items: ContentEntry[] }) {
  const entries = items.filter((e) => e.section === "workflows");
  if (entries.length === 0) return null;
  const bySlug = new Map(entries.map((e) => [e.slug, e]));
  const mapped = new Set(GROUPS.flatMap((g) => g.slugs));
  const unmapped = entries.filter((e) => !mapped.has(e.slug));

  return (
    <div className="mt-10 space-y-12">
      {GROUPS.map((g) => {
        const groupEntries = g.slugs
          .map((s) => bySlug.get(s))
          .filter((e): e is ContentEntry => Boolean(e));
        if (groupEntries.length === 0) return null;
        return (
          <section key={g.label} aria-label={g.label}>
            <p className="kicker">{g.label}</p>
            <ul className="mt-4 grid gap-px border border-rule bg-rule sm:grid-cols-2">
              {groupEntries.map((e) => (
                <Card key={e.slug} e={e} />
              ))}
            </ul>
          </section>
        );
      })}
      {unmapped.length > 0 ? (
        <section aria-label="More workflows">
          <p className="kicker">More workflows</p>
          <ul className="mt-4 grid gap-px border border-rule bg-rule sm:grid-cols-2">
            {unmapped.map((e) => (
              <Card key={e.slug} e={e} />
            ))}
          </ul>
        </section>
      ) : null}
      <p className="mt-4 font-sans text-sm text-ink-soft">
        Fax workflows are documented in the{" "}
        <Link href="/fax" className="no-underline hover:underline">
          Fax section
        </Link>
        .
      </p>
    </div>
  );
}
```

### 1D — MODIFY `components/pages/SectionHub.tsx`

Add imports:
```tsx
import { GlossaryIndex } from "@/components/content/GlossaryIndex";
import { DiagnosticGroups } from "@/components/content/DiagnosticGroups";
import { WorkflowGroups } from "@/components/content/WorkflowGroups";
```

In the bottom Container's items conditional, insert three branches BEFORE the `useGroups` branch (and after the `items.length === 0` branch):
```tsx
) : section === "glossary" ? (
  <GlossaryIndex items={items} />
) : section === "troubleshooting" ? (
  <DiagnosticGroups items={items} />
) : section === "workflows" ? (
  <WorkflowGroups items={items} />
) : useGroups ? (
```

(The existing `useGroups` and `SectionList` branches remain untouched as the fallback for other sections.)

### Task 1 commits (4)
1. `feat(hubs): add GlossaryIndex A–Z reference component`
2. `feat(hubs): add DiagnosticGroups troubleshooting component`
3. `feat(hubs): add WorkflowGroups operational component`
4. `feat(hubs): wire glossary/troubleshooting/workflows specialized layouts into SectionHub`

### Task 1 verification
```
npm run typecheck   # clean
npm run lint        # clean
npm run test:content  # 72 entries, no issues
npm run test:unit   # 34/34
npm run build       # 96 routes
```

---

## Task 2 — Augment-components

### 2A — CREATE `components/content/InfrastructureMap.tsx`

All `href` targets are confirmed-existing routes. `FUTURE` items are non-linked labels (no page exists; no fake links).

```tsx
import Link from "next/link";

const MAP: { label: string; href: string; note: string }[] = [
  {
    label: "PDF",
    href: "/tools/what-is-pdf",
    note: "The portable document format the office standardised on.",
  },
  {
    label: "Searchable PDF",
    href: "/workflows/scan-to-searchable-pdf",
    note: "A scanned image made selectable and indexable through OCR.",
  },
  {
    label: "OCR",
    href: "/glossary/ocr",
    note: "Optical character recognition — turning an image of text into text.",
  },
  {
    label: "Print queue",
    href: "/glossary/print-queue",
    note: "The ordered line of jobs waiting for a shared device.",
  },
  {
    label: "Print spooler",
    href: "/glossary/print-spooler",
    note: "The service that holds and releases jobs to the device.",
  },
  {
    label: "Print driver",
    href: "/glossary/print-driver",
    note: "The translation layer between an application and a printer.",
  },
  {
    label: "Print server",
    href: "/guides/what-is-a-print-server",
    note: "The system that administers a shared printer for many users.",
  },
  {
    label: "PostScript",
    href: "/guides/what-is-postscript-printing",
    note: "The page-description language behind PDF's lineage.",
  },
];

const FUTURE: string[] = [
  "Document compression (ZIP / archive formats)",
  "File-format conversion",
];

export function InfrastructureMap() {
  return (
    <section aria-label="Document infrastructure map" className="mb-14">
      <p className="kicker">Document infrastructure map</p>
      <h2 className="mt-2 text-display-sm text-balance">
        The layer the document moves through
      </h2>
      <p className="mt-3 max-w-2xl font-serif text-lg text-ink-soft text-pretty">
        Formats, queues, and protocols connect the application to the page.
        These reference entries document the infrastructure beneath the
        visible printer.
      </p>
      <ul className="mt-8 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {MAP.map((m) => (
          <li key={m.href} className="bg-paper">
            <Link
              href={m.href}
              className="group flex h-full flex-col p-6 no-underline transition-colors hover:bg-paper-raised"
            >
              <span className="font-serif text-lg tracking-tight text-ink group-hover:text-accent">
                {m.label}
              </span>
              <span className="mt-1.5 text-sm text-ink-soft text-pretty">
                {m.note}
              </span>
            </Link>
          </li>
        ))}
      </ul>
      <div className="mt-6">
        <p className="kicker text-ink-faint">Future reference topics</p>
        <ul className="mt-2 flex flex-wrap gap-x-4 gap-y-1 font-sans text-sm text-ink-faint">
          {FUTURE.map((f) => (
            <li key={f}>{f}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
```

### 2B — CREATE `components/content/MobileHandoff.tsx`

```tsx
import Link from "next/link";

const STAGES: { n: number; label: string; text: string }[] = [
  {
    n: 1,
    label: "Device",
    text: "A phone, tablet, or laptop holds the document and initiates the print.",
  },
  {
    n: 2,
    label: "Network discovery",
    text: "The device finds an eligible printer on the local network — the step AirPrint and its equivalents standardised.",
  },
  {
    n: 3,
    label: "Printer",
    text: "The printer accepts the job directly, without a conventionally installed driver.",
  },
  {
    n: 4,
    label: "Document output",
    text: "The page is rendered and printed — the same end the rest of the archive traces from its mechanical origins.",
  },
];

export function MobileHandoff() {
  return (
    <section aria-label="Modern mobile printing handoff" className="mb-14">
      <p className="kicker">The modern handoff</p>
      <h2 className="mt-2 text-display-sm text-balance">
        From device to printed page
      </h2>
      <p className="mt-3 max-w-2xl font-serif text-lg text-ink-soft text-pretty">
        Mobile printing replaced the installed driver with network discovery.
        The document still reaches paper; the path it takes is what changed.
      </p>
      <ol className="mt-8 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-4">
        {STAGES.map((s) => (
          <li key={s.n} className="flex h-full flex-col bg-paper p-6">
            <span className="font-serif text-2xl leading-none text-rule-strong">
              {String(s.n).padStart(2, "0")}
            </span>
            <span className="mt-3 font-serif text-base tracking-tight text-ink">
              {s.label}
            </span>
            <span className="mt-1.5 text-sm text-ink-soft text-pretty">
              {s.text}
            </span>
          </li>
        ))}
      </ol>
      <p className="mt-6 font-sans text-sm text-ink-soft">
        The discovery step is explained in{" "}
        <Link href="/mobile-printing/what-is-airprint" className="no-underline hover:underline">
          What is AirPrint?
        </Link>
      </p>
    </section>
  );
}
```

### 2C — MODIFY `components/pages/SectionHub.tsx`

Add imports:
```tsx
import { InfrastructureMap } from "@/components/content/InfrastructureMap";
import { MobileHandoff } from "@/components/content/MobileHandoff";
```

In the bottom Container, immediately AFTER the `<JsonLd ... />` line and BEFORE the `{items.length === 0 ? (` conditional, add:
```tsx
{section === "tools" ? <InfrastructureMap /> : null}
{section === "mobile-printing" ? <MobileHandoff /> : null}
```

### Task 2 commits (3)
1. `feat(hubs): add InfrastructureMap component for /tools`
2. `feat(hubs): add MobileHandoff component for /mobile-printing`
3. `feat(hubs): wire tools/mobile-printing augment layouts into SectionHub`

### Task 2 verification — same 5 commands, all clean; 96 routes.

---

## Task 3 — Controller QA + inspection + push

```
npm run typecheck
npm run lint
npm run test:content   # 72 entries, no issues
npm run test:unit      # 34/34
npm run build          # 96 prerendered routes
```

HTML inspection of built artefacts:
- `/glossary`: contains "A–Z reference index" + letter markers (A, D, O, P, S, T) + all 11 term links. No plain SectionList lead-card.
- `/troubleshooting`: contains the 5 diagnostic group labels + each entry's symptom text + "Read the guide". All 9 entries present.
- `/tools`: contains "Document infrastructure map" + all 8 linked concepts + "Future reference topics" with the 2 non-linked labels, ABOVE the what-is-pdf list entry.
- `/workflows`: contains the 3 task-group labels + all 6 entries + the "Fax workflows … Fax section" cross-link.
- `/mobile-printing`: contains "The modern handoff" + the 4 numbered stages + the AirPrint cross-link, above the 2-entry list.
- `/brands`: UNCHANGED (no specialized layout — confirms scope discipline).
- Single `<h1>` on every inspected hub.
- No `localhost`, no `noindex`.
- Every InfrastructureMap href resolves to an existing route (grep the built sitemap or route table).

Push: `git push origin feat/foundation-architecture`.

## Done criteria
- 5 specialized components live; /brands untouched.
- Every section entry remains reachable (replace-components link all entries + fallback bucket).
- No fake links (FUTURE topics are non-linked labels).
- 5 QA commands pass; 96 routes; single h1 per hub.
- Branch `feat/foundation-architecture` only; no merge to main.
- Final report delivered.
