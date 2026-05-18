export function MetaBar({
  author,
  editor,
  updated,
}: {
  author: string;
  editor: string;
  updated: string;
}) {
  return (
    <p className="mt-4 font-sans text-xs text-ink-faint">
      By {author} · Edited by {editor} ·{" "}
      <time dateTime={updated}>Last updated {updated}</time>
    </p>
  );
}
