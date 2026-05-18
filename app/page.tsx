import Link from "next/link";
import { SECTIONS, site } from "@/lib/site";
import { getSection } from "@/lib/content/queries";
import { Container } from "@/components/layout/Container";

const featured = (id: Parameters<typeof getSection>[0], n = 3) =>
  getSection(id).slice(0, n);

export default function HomePage() {
  return (
    <>
      <section className="border-b border-rule">
        <Container width="wide" className="py-20">
          <p className="font-sans text-xs uppercase tracking-[0.2em] text-ink-faint">
            {site.tagline}
          </p>
          <h1 className="mt-4 max-w-3xl font-serif text-5xl leading-[1.1] tracking-tight max-sm:text-4xl">
            A calm, factual reference for printing, fax, and document
            technology.
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-ink-soft">
            {site.description}
          </p>
        </Container>
      </section>

      <Container width="wide" className="py-16">
        <h2 className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-soft">
          Browse the archive
        </h2>
        <ul className="mt-6 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {SECTIONS.map((s) => (
            <li key={s.id} className="bg-paper p-6">
              <Link
                href={`/${s.id}`}
                className="font-serif text-xl tracking-tight no-underline hover:underline"
              >
                {s.title}
              </Link>
              <p className="mt-1.5 text-sm text-ink-soft">{s.description}</p>
            </li>
          ))}
        </ul>
      </Container>

      {(
        [
          "guides",
          "troubleshooting",
          "history",
          "mobile-printing",
          "brands",
        ] as const
      ).map((id) => {
        const items = featured(id);
        if (items.length === 0) return null;
        const meta = SECTIONS.find((s) => s.id === id)!;
        return (
          <Container
            key={id}
            width="wide"
            className="border-t border-rule py-14"
          >
            <div className="flex items-baseline justify-between">
              <h2 className="font-serif text-2xl tracking-tight">
                {meta.title}
              </h2>
              <Link
                href={`/${id}`}
                className="font-sans text-sm no-underline hover:underline"
              >
                All {meta.label.toLowerCase()} →
              </Link>
            </div>
            <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {items.map((e) => (
                <li
                  key={e.slug}
                  className="border border-rule p-5"
                >
                  <Link
                    href={`/${e.section}/${e.slug}`}
                    className="font-serif text-lg tracking-tight no-underline hover:underline"
                  >
                    {e.title}
                  </Link>
                  <p className="mt-1.5 text-sm text-ink-soft">
                    {e.description}
                  </p>
                </li>
              ))}
            </ul>
          </Container>
        );
      })}
    </>
  );
}
