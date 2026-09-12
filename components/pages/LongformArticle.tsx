import type { ReactNode } from "react";
import type { ArchiveEntry, ContentBlock, ContentEntry } from "@/lib/content/types";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
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

export interface LongformArticleProps {
  /** The encyclopedia entry or editorial post being rendered. */
  entry: ArchiveEntry;
  crumbs: { name: string; href: string }[];
  /** Eyebrow above the H1, already composed by the caller. */
  kicker: string;
  /** Schema.org objects emitted in a single JSON-LD block. */
  schemas: object[];
  /** Cards under "Related". */
  related: ContentEntry[];
  /** Rows in the sticky right rail, above the auto-added Updated/Sources rows. */
  railRows?: { term: string; value: ReactNode }[];
  /** Pill at the top of the right rail. */
  badge?: string;
  /** Byline / date line rendered under the header. */
  metaLine?: ReactNode;
  /** Small typographic tags rendered under the header. */
  tags?: string[];
}

/**
 * The archive's longform reading surface: breadcrumbs, header, optional plate,
 * measured body column, apparatus (FAQs, sources, footnotes, continue-reading,
 * related), and a sticky contents rail.
 *
 * Both the encyclopedia's ArticlePage and the Blog's article route render
 * through this component, so an editorial post and a reference entry read with
 * exactly the same typography, measure and furniture. Anything specific to one
 * register — section labels, reading time, schema shape — is composed by the
 * caller and passed in.
 */
export function LongformArticle({
  entry: e,
  crumbs,
  kicker,
  schemas,
  related,
  railRows,
  badge = "Verified",
  metaLine,
  tags,
}: LongformArticleProps) {
  const toc = e.body
    .filter(isLevelTwoHeading)
    .map((block) => ({
      id: block.id ?? slugify(block.text),
      text: block.text,
    }))
    .slice(0, 12);

  return (
    <Container width="wide" className="py-8 lg:py-12">
      <JsonLd data={schemas} />
      <Breadcrumbs items={crumbs} />
      <div className="mt-6 grid gap-10 xl:grid-cols-[minmax(0,1fr)_18rem] xl:items-start">
        <article className="min-w-0 fade-up">
          {e.essayLead ? (
            <div className="max-w-4xl">
              <EssayLead
                kicker={e.essayLead.kicker ?? kicker}
                title={e.title}
                standfirst={e.essayLead.standfirst}
                byline={e.essayLead.byline}
              />
              {tags?.length ? <TopicTags tags={tags} /> : null}
              {metaLine}
            </div>
          ) : (
            <header className="max-w-4xl">
              <p className="kicker">{kicker}</p>
              <h1 className="mt-3 text-display-sm leading-tight text-balance">
                {e.title}
              </h1>
              <p className="mt-5 max-w-3xl font-serif text-xl leading-8 text-ink-soft text-pretty">
                {e.summary}
              </p>
              {tags?.length ? <TopicTags tags={tags} /> : null}
              {metaLine}
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
                {badge}
              </p>
              <dl className="mt-4 space-y-3 text-sm">
                {railRows?.map((row) => (
                  <div key={row.term}>
                    <dt className="text-xs font-semibold text-ink-faint">
                      {row.term}
                    </dt>
                    <dd className="mt-1 text-ink-display">{row.value}</dd>
                  </div>
                ))}
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

function TopicTags({ tags }: { tags: string[] }) {
  return (
    <ul className="mt-5 flex flex-wrap gap-2">
      {tags.map((t) => (
        <li
          key={t}
          className="rounded-full border border-rule bg-paper-raised px-3 py-1 font-sans text-xs font-semibold text-ink-faint"
        >
          {t}
        </li>
      ))}
    </ul>
  );
}
