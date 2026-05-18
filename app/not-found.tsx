import Link from "next/link";
import { Container } from "@/components/layout/Container";

export default function NotFound() {
  return (
    <Container className="py-24">
      <h1 className="font-serif text-3xl tracking-tight">Page not found</h1>
      <p className="mt-3 text-ink-soft">
        This page is not part of the archive. Return to the{" "}
        <Link href="/">homepage</Link>.
      </p>
    </Container>
  );
}
