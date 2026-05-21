interface EditorialAsideProps {
  title?: string;
  text: string;
}

export function EditorialAside({ title, text }: EditorialAsideProps) {
  return (
    <aside className="my-8 border-l border-rule pl-5 text-ink-soft">
      {title ? (
        <p className="kicker text-ink-faint">{title}</p>
      ) : (
        <p className="kicker text-ink-faint">Editor&apos;s note</p>
      )}
      <p className="mt-2 text-pretty">{text}</p>
    </aside>
  );
}
