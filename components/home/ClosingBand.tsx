import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "@/components/layout/Container";

export function ClosingBand() {
  return (
    <Container width="wide" className="py-16">
      <div className="premium-card p-8 md:p-10">
        <p className="kicker">About the archive</p>
        <h2 className="mt-2 max-w-3xl text-display-sm text-balance">
          A calm, factual record of printing technology
        </h2>
        <p className="mt-4 max-w-3xl font-serif text-lg text-ink-soft text-pretty">
          {site.name} is an educational reference, not a marketplace. No
          reviews, no affiliate links — only structured, source-ready
          explanations of how printing, fax, and document technology works and
          how it evolved.
        </p>
        <p className="mt-5 font-sans text-sm">
          <Link
            href="/about"
            className="inline-flex rounded-lg bg-accent px-4 py-2 font-semibold text-white no-underline transition-colors hover:bg-accent-hover hover:text-white"
          >
            Read about the archive →
          </Link>
        </p>
      </div>
    </Container>
  );
}
