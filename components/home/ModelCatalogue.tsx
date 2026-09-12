import Link from "next/link";
import { getEntry, getSection } from "@/lib/content/queries";
import type { ModelEntry } from "@/lib/content/types";
import { Container } from "@/components/layout/Container";

/**
 * A slice of the model catalogue, rendered as a reference table rather than
 * cards — a catalogue should read like a catalogue.
 *
 * The selection is a fixed editorial shortlist of historically pivotal
 * machines; every displayed field comes from the entry itself, and a machine
 * whose manufacturer or year is not source-backed simply shows nothing in that
 * column rather than a guess.
 */
const SHORTLIST = [
  "hp-laserjet-original",
  "apple-laserwriter",
  "ibm-1403",
  "epson-mx-80",
  "hp-deskjet-original",
  "xerox-9700",
];

export function ModelCatalogue() {
  const models = SHORTLIST.map((slug) => getEntry("models", slug)).filter(
    (e): e is ModelEntry => e?.section === "models",
  );
  if (models.length === 0) return null;
  const total = getSection("models").length;

  return (
    <Container width="wide" className="py-[var(--band)]">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="kicker">The model catalogue</p>
          <h2 className="mt-2 text-display-sm text-balance">
            Machines, recorded from sources
          </h2>
          <p className="mt-4 max-w-2xl standfirst">
            Specifications appear only where an authoritative source states
            them. A blank column means the archive could not verify the figure,
            not that the figure is zero.
          </p>
        </div>
        <Link
          href="/models"
          className="font-sans text-sm font-semibold text-accent no-underline hover:underline"
        >
          All {total} models <span aria-hidden>→</span>
        </Link>
      </div>

      <div className="mt-9 overflow-x-auto">
        <table className="w-full min-w-[42rem] border-collapse text-left">
          <caption className="sr-only">
            Selected documented printer and fax models
          </caption>
          <thead>
            <tr className="border-b border-rule-strong">
              <th scope="col" className="tech-label py-3 pr-4">
                Model
              </th>
              <th scope="col" className="tech-label py-3 pr-4">
                Manufacturer
              </th>
              <th scope="col" className="tech-label py-3 pr-4">
                Introduced
              </th>
              <th scope="col" className="tech-label py-3 pr-4">
                Class
              </th>
              <th scope="col" className="tech-label py-3 text-right">
                Sources
              </th>
            </tr>
          </thead>
          <tbody>
            {models.map((m) => (
              <tr
                key={m.slug}
                className="border-b border-rule transition-colors hover:bg-paper-sunken"
              >
                <th scope="row" className="py-3.5 pr-4 font-normal">
                  <Link
                    href={`/models/${m.slug}`}
                    className="font-sans text-[0.95rem] font-semibold text-ink-display no-underline hover:text-accent"
                  >
                    {m.title}
                  </Link>
                </th>
                <td className="py-3.5 pr-4 font-sans text-sm text-ink-soft">
                  {m.manufacturer ?? <span className="text-ink-faint">—</span>}
                </td>
                <td className="py-3.5 pr-4 tech-value">
                  {m.introduced ?? <span className="text-ink-faint">—</span>}
                </td>
                <td className="py-3.5 pr-4 font-sans text-sm text-ink-soft">
                  {m.category ?? <span className="text-ink-faint">—</span>}
                </td>
                <td className="py-3.5 text-right tech-value">
                  {m.sources.length}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </Container>
  );
}
