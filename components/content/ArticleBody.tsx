import type { ContentBlock } from "@/lib/content/types";
import { Callout } from "./Callout";
import { KeyTakeaways } from "./KeyTakeaways";
import { StepList } from "./StepList";
import { Timeline } from "./Timeline";

const slugify = (s: string) =>
  s
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

export function ArticleBody({ blocks }: { blocks: ContentBlock[] }) {
  return (
    <>
      {blocks.map((b, i) => {
        switch (b.kind) {
          case "heading": {
            const id = b.id ?? slugify(b.text);
            return b.level === 2 ? (
              <h2 key={i} id={id}>
                {b.text}
              </h2>
            ) : (
              <h3 key={i} id={id}>
                {b.text}
              </h3>
            );
          }
          case "paragraph":
            return <p key={i}>{b.text}</p>;
          case "list":
            return b.ordered ? (
              <ol key={i}>
                {b.items.map((t, j) => (
                  <li key={j}>{t}</li>
                ))}
              </ol>
            ) : (
              <ul key={i}>
                {b.items.map((t, j) => (
                  <li key={j}>{t}</li>
                ))}
              </ul>
            );
          case "callout":
            return (
              <Callout
                key={i}
                tone={b.tone}
                title={b.title}
                text={b.text}
              />
            );
          case "keyTakeaways":
            return <KeyTakeaways key={i} items={b.items} />;
          case "steps":
            return <StepList key={i} steps={b.steps} />;
          case "timeline":
            return <Timeline key={i} events={b.events} />;
          case "table":
            return (
              <figure key={i} className="my-6 overflow-x-auto">
                <table className="w-full border-collapse text-sm">
                  <thead>
                    <tr>
                      {b.headers.map((h, j) => (
                        <th
                          key={j}
                          className="border border-rule bg-black/[0.02] px-3 py-2 text-left font-sans"
                        >
                          {h}
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {b.rows.map((r, j) => (
                      <tr key={j}>
                        {r.map((c, k) => (
                          <td
                            key={k}
                            className="border border-rule px-3 py-2"
                          >
                            {c}
                          </td>
                        ))}
                      </tr>
                    ))}
                  </tbody>
                </table>
                {b.caption && (
                  <figcaption className="mt-2 font-sans text-xs text-ink-faint">
                    {b.caption}
                  </figcaption>
                )}
              </figure>
            );
        }
      })}
    </>
  );
}
