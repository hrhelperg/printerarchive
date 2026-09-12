import { getSection } from "@/lib/content/queries";
import { allEntries } from "@/lib/content/registry";
import { allPosts } from "@/lib/blog/registry";
import { MANUFACTURERS } from "@/lib/knowledge-graph/manufacturers";
import { Container } from "@/components/layout/Container";

/**
 * The archive's scale, stated plainly.
 *
 * Every figure is counted from a source-of-truth registry at build time. None
 * of these numbers may ever be typed in: a footer or hero boasting "300+" a
 * year after it stopped being true is precisely the kind of small dishonesty
 * this archive is built to avoid.
 */
export function ArchiveScale() {
  const all = [...allEntries, ...allPosts];
  const stats: { value: string; label: string; note: string }[] = [
    {
      value: String(all.length),
      label: "Reference pages",
      note: "Every one source-backed",
    },
    {
      value: String(getSection("models").length),
      label: "Printer & fax models",
      note: "Documented, never inferred",
    },
    {
      value: String(MANUFACTURERS.length),
      label: "Manufacturers",
      note: "With model families mapped",
    },
    {
      value: all
        .reduce((n, e) => n + (e.sources?.length ?? 0), 0)
        .toLocaleString("en-US"),
      label: "Citations",
      note: "Institutional and primary",
    },
  ];

  return (
    <section aria-labelledby="archive-scale" className="band-sunken">
      <Container width="wide" className="py-10 lg:py-12">
        <h2 id="archive-scale" className="sr-only">
          The scale of the archive
        </h2>
        <dl className="grid grid-cols-2 gap-x-6 gap-y-8 lg:grid-cols-4">
          {stats.map((s) => (
            <div key={s.label}>
              <dd className="stat-value">{s.value}</dd>
              <dt className="mt-2 font-sans text-sm font-semibold text-ink-display">
                {s.label}
              </dt>
              <p className="mt-0.5 meta-line">{s.note}</p>
            </div>
          ))}
        </dl>
      </Container>
    </section>
  );
}
