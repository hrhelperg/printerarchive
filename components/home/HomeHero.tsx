import { site } from "@/lib/site";
import { Container } from "@/components/layout/Container";
import { Motif } from "@/components/content/Motif";

export function HomeHero() {
  return (
    <section className="surface-grain border-b border-rule bg-paper-raised">
      <Container
        width="wide"
        className="grid gap-8 py-16 lg:grid-cols-[1.6fr_1fr] lg:items-center lg:py-20"
      >
        <div>
          <p className="kicker">{site.tagline}</p>
          <h1 className="mt-4 max-w-3xl text-display text-balance">
            The internet archive of printing technology.
          </h1>
          <p className="mt-5 max-w-2xl font-serif text-lg text-ink-soft text-pretty">
            {site.description}
          </p>
        </div>
        <div
          aria-hidden
          className="hidden items-center justify-center lg:flex"
        >
          <Motif className="h-28 w-28 text-rule-strong" />
        </div>
      </Container>
    </section>
  );
}
