interface ArchivalTableProps {
  caption: string;
  headers: string[];
  rows: string[][];
  sources?: string[];
  figureNumber?: string;
}

export function ArchivalTable({
  caption,
  headers,
  rows,
  sources,
  figureNumber,
}: ArchivalTableProps) {
  return (
    <figure className="my-8 overflow-x-auto">
      <table className="w-full border-collapse text-sm">
        <caption className="mb-3 text-left font-sans text-xs text-ink-soft text-pretty">
          {figureNumber ? (
            <span className="mr-2 font-mono text-ink-faint">{figureNumber}</span>
          ) : null}
          {caption}
        </caption>
        <thead>
          <tr>
            {headers.map((h, j) => (
              <th
                key={j}
                className="border border-rule bg-paper-raised px-3 py-2 text-left font-sans"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {rows.map((r, j) => (
            <tr key={j}>
              {r.map((c, k) => (
                <td key={k} className="border border-rule px-3 py-2">
                  {c}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {sources && sources.length > 0 ? (
        <p className="mt-2 font-sans text-xs text-ink-faint text-pretty">
          {sources.length === 1 ? "Source: " : "Sources: "}
          {sources.join("; ")}
        </p>
      ) : null}
    </figure>
  );
}
