import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { SectionId } from "@/lib/site";
import { getSectionMeta } from "@/lib/site";
import type { ContentBlock } from "@/lib/content/types";
import { getEntry, getBreadcrumbs, getRelated } from "@/lib/content/queries";
import { entryKicker } from "@/lib/content/kicker";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { MetaBar } from "@/components/layout/MetaBar";
import { ArchivePlate } from "@/components/content/ArchivePlate";
import { ArticleBody } from "@/components/content/ArticleBody";
import { FaqList } from "@/components/content/FaqList";
import { SourceTransparency } from "@/components/content/SourceTransparency";
import { ArchiveFootnotes } from "@/components/content/ArchiveFootnotes";
import { EssayLead } from "@/components/content/EssayLead";
import { DeepReadingLinks } from "@/components/content/DeepReadingLinks";
import { RelatedLinks } from "@/components/content/RelatedLinks";
import { ModernTools } from "@/components/content/ModernTools";
import { JsonLd } from "@/components/seo/JsonLd";
import { articleSchema, breadcrumbSchema, faqSchema } from "@/lib/seo/schema";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

type LevelTwoHeading = {
  kind: "heading";
  level: 2;
  text: string;
  id?: string;
};

function isLevelTwoHeading(block: ContentBlock): block is LevelTwoHeading {
  return block.kind === "heading" && block.level === 2;
}

export function articleMetadata(section: SectionId, slug: string): Metadata {
  const e = getEntry(section, slug);
  if (!e) return {};
  return buildMetadata({
    title: e.title,
    description: e.description,
    path: `/${section}/${slug}`,
    type: "article",
    published: e.published,
    modified: e.updated,
    keywords: e.keywords,
  });
}

export function ArticlePage({
  section,
  slug,
}: {
  section: SectionId;
  slug: string;
}) {
  const e = getEntry(section, slug);
  if (!e) notFound();
  const crumbs = getBreadcrumbs(section, slug);
  const related = getRelated(e);
  const schemas: object[] = [articleSchema(e), breadcrumbSchema(crumbs)];
  if (e.faqs?.length) schemas.push(faqSchema(e.faqs));
  const sectionLabel = getSectionMeta(e.section).label;
  const kick = entryKicker(e);
  const toc = e.body
    .filter(isLevelTwoHeading)
    .map((block) => ({
      id: block.id ?? slugify(block.text),
      text: block.text,
    }))
    .slice(0, 12);
  const showKick =
    kick.toLowerCase() !== sectionLabel.toLowerCase() &&
    kick.toLowerCase() !== sectionLabel.toLowerCase().replace(/s$/, "");
  return (
    <Container width="wide" className="py-8 lg:py-12">
      <JsonLd data={schemas} />
      <Breadcrumbs items={crumbs} />
      <div className="mt-6 grid gap-10 xl:grid-cols-[minmax(0,1fr)_18rem] xl:items-start">
        <article className="min-w-0 fade-up">
          {e.essayLead ? (
            <div className="max-w-4xl">
              <EssayLead
                kicker={e.essayLead.kicker ?? sectionLabel}
                title={e.title}
                standfirst={e.essayLead.standfirst}
                byline={e.essayLead.byline}
              />
            </div>
          ) : (
            <header className="max-w-4xl">
              <p className="kicker">
                {sectionLabel}
                {showKick ? ` · ${kick}` : ""}
              </p>
              <h1 className="mt-3 text-display-sm leading-tight text-balance">
                {e.title}
              </h1>
              <p className="mt-5 max-w-3xl font-serif text-xl leading-8 text-ink-soft text-pretty">
                {e.summary}
              </p>
              <MetaBar author={e.author} editor={e.editor} updated={e.updated} />
            </header>
          )}
          {e.hero ? (
            <div className="max-w-5xl">
              <ArchivePlate
                image={e.hero}
                preload
                sizes="(max-width: 1024px) 100vw, 960px"
                raised
              />
            </div>
          ) : null}
          <div className="mt-10 max-w-[76ch] font-serif text-[1.08rem] leading-[1.8] text-ink">
            <ArticleBody blocks={e.body} />
          </div>
          <div className="max-w-[76ch]">
            {e.faqs?.length ? <FaqList faqs={e.faqs} /> : null}
            {e.sources?.length ? <SourceTransparency sources={e.sources} /> : null}
            {e.footnotes?.length ? <ArchiveFootnotes footnotes={e.footnotes} /> : null}
            {e.deepReading?.length ? <DeepReadingLinks items={e.deepReading} /> : null}
            <RelatedLinks items={related} />
            {e.modernTools?.length ? <ModernTools products={e.modernTools} /> : null}
          </div>
        </article>

        <aside className="hidden xl:block">
          {/* Offset by the global ecosystem banner on top of the existing
              header allowance, so the sidebar never slides under either. */}
          <div className="sticky top-[calc(8rem+var(--ecosystem-banner-height))] space-y-4">
            {toc.length ? (
              <nav
                aria-labelledby="article-toc"
                className="premium-card-sm p-5"
              >
                <p id="article-toc" className="font-sans text-sm font-semibold text-ink-display">
                  On this page
                </p>
                <ol className="mt-3 space-y-2 font-sans text-sm text-ink-soft">
                  {toc.map((item, index) => (
                    <li key={item.id}>
                      <a
                        href={`#${item.id}`}
                        className="grid grid-cols-[1.25rem_1fr] gap-2 text-ink-soft no-underline transition-colors hover:text-accent"
                      >
                        <span className="text-xs text-ink-faint">
                          {index + 1}.
                        </span>
                        <span>{item.text}</span>
                      </a>
                    </li>
                  ))}
                </ol>
              </nav>
            ) : null}
            <div className="premium-card-sm p-5 font-sans">
              <p className="inline-flex rounded-full border border-[#b7ebc6] bg-[#f3fff6] px-2.5 py-1 text-xs font-semibold text-[#167a3a]">
                Verified
              </p>
              <dl className="mt-4 space-y-3 text-sm">
                <div>
                  <dt className="text-xs font-semibold text-ink-faint">Section</dt>
                  <dd className="mt-1 text-ink-display">{sectionLabel}</dd>
                </div>
                <div>
                  <dt className="text-xs font-semibold text-ink-faint">Updated</dt>
                  <dd className="mt-1 text-ink-display">
                    <time dateTime={e.updated}>{e.updated}</time>
                  </dd>
                </div>
                {e.sources?.length ? (
                  <div>
                    <dt className="text-xs font-semibold text-ink-faint">Sources</dt>
                    <dd className="mt-1 text-ink-display">{e.sources.length}</dd>
                  </div>
                ) : null}
              </dl>
            </div>
          </div>
        </aside>
      </div>
    </Container>
  );
}
