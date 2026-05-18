// Escape characters that could prematurely close the <script> element or
// be interpreted as HTML, per JSON-LD embedding best practice.
const safeJson = (d: object) =>
  JSON.stringify(d)
    .replace(/</g, "\\u003c")
    .replace(/>/g, "\\u003e")
    .replace(/&/g, "\\u0026");

export function JsonLd({ data }: { data: object | object[] }) {
  const items = Array.isArray(data) ? data : [data];
  return (
    <>
      {items.map((d, i) => (
        <script
          key={i}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: safeJson(d) }}
        />
      ))}
    </>
  );
}
