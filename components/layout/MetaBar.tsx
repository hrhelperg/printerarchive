/**
 * Byline / edited-by / last-updated line under an article masthead.
 */
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
    <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-rule pt-4 meta-line">
      <span>By {author}</span>
      <span aria-hidden>·</span>
      <span>Edited by {editor}</span>
      <span aria-hidden>·</span>
      <time dateTime={updated}>Last updated {updated}</time>
    </p>
  );
}
