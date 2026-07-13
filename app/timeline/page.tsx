import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";
import { modelTimeline, timelineCount } from "@/lib/timeline";

const crumbs = [
  { name: "Home", href: "/" },
  { name: "Timeline", href: "/timeline" },
];

export const metadata = buildMetadata({
  title: "Printer & Fax Timeline",
  description:
    "A chronological timeline of documented printer and fax models by introduction year, each dated from an authoritative source.",
  path: "/timeline",
});

export default function Page() {
  const decades = modelTimeline();
  const count = timelineCount();
  return (
    <>
      <Container width="wide" className="pt-8">
        <Breadcrumbs items={crumbs} />
      </Container>

      <Container width="prose" className="mt-10">
        <h1 className="font-serif text-4xl tracking-tight">
          Printer &amp; Fax Timeline
        </h1>
        <p className="mt-4 font-serif text-lg text-ink-soft">
          {count} documented models arranged by year of introduction. Every date
          is drawn from an authoritative source on the model&rsquo;s own page;
          models without a sourced introduction year are omitted rather than
          estimated. Select any entry to read its sourced reference page.
        </p>
      </Container>

      <Container width="wide" className="py-14">
        <JsonLd data={breadcrumbSchema(crumbs)} />
        {decades.map((d) => (
          <section key={d.decade} className="mt-12 first:mt-0">
            <p className="font-serif text-2xl text-ink">{d.decade}s</p>
            <ul className="mt-4 list-none space-y-3 border-l-2 border-rule p-0 pl-5">
              {d.items.map((it) => (
                <li key={`${it.slug}`} className="flex flex-wrap items-baseline gap-x-3">
                  <span className="font-sans text-sm tabular-nums text-ink-faint">
                    {it.year}
                  </span>
                  <Link
                    href={`/models/${it.slug}`}
                    className="font-serif text-lg text-ink no-underline hover:text-accent"
                  >
                    {it.title}
                  </Link>
                  {(it.manufacturer || it.category) && (
                    <span className="font-sans text-xs text-ink-faint">
                      {[it.manufacturer, it.category]
                        .filter(Boolean)
                        .join(" · ")}
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </section>
        ))}
      </Container>
    </>
  );
}
