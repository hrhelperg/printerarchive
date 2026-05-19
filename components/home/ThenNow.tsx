import Link from "next/link";
import { Container } from "@/components/layout/Container";

const PANELS = [
  {
    tag: "Then",
    title: "Mechanical & impact printing",
    note: "Hammers, ribbons, and continuous-feed paper — the loud origins of the office printer.",
    href: "/history/history-of-printers",
  },
  {
    tag: "Now",
    title: "Wireless & mobile printing",
    note: "Driverless standards let a phone print across the room without thinking about it.",
    href: "/guides/how-wireless-printing-works",
  },
];

export function ThenNow() {
  return (
    <Container width="wide" className="py-14">
      <hr className="rule-sep" />
      <div className="mt-10 grid gap-px border border-rule bg-rule md:grid-cols-2">
        {PANELS.map((p) => (
          <Link
            key={p.tag}
            href={p.href}
            className="group flex flex-col bg-paper-raised p-8 no-underline transition-colors hover:bg-paper"
          >
            <span className="kicker">{p.tag}</span>
            <span className="mt-3 font-serif text-2xl tracking-tight text-ink group-hover:text-accent">
              {p.title}
            </span>
            <span className="mt-2 max-w-sm text-ink-soft text-pretty">
              {p.note}
            </span>
          </Link>
        ))}
      </div>
    </Container>
  );
}
