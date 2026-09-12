import type { ModelEntry } from "@/lib/content/types";

/**
 * The identity strip on a model page: what the machine is, who made it, and
 * when — presented as a spec header rather than as prose, so a model page
 * announces itself as a technical reference and not as another essay.
 *
 * Only fields the entry actually carries are rendered. The archive omits any
 * value it cannot cite, so an absent field means "not verified", and inventing
 * a placeholder row would turn that silence into a claim.
 */
export function ModelIdentity({ entry }: { entry: ModelEntry }) {
  const fields: { term: string; value: string }[] = [];
  if (entry.manufacturer) fields.push({ term: "Manufacturer", value: entry.manufacturer });
  if (entry.category) fields.push({ term: "Class", value: entry.category });
  if (entry.introduced) fields.push({ term: "Introduced", value: entry.introduced });
  if (entry.discontinued) fields.push({ term: "Discontinued", value: entry.discontinued });
  if (entry.era) fields.push({ term: "Era", value: entry.era });
  if (entry.alsoKnownAs?.length)
    fields.push({ term: "Also known as", value: entry.alsoKnownAs.join(", ") });

  if (fields.length === 0) return null;

  return (
    <dl className="mt-8 grid gap-x-10 gap-y-5 border-t border-rule pt-6 sm:grid-cols-2 lg:grid-cols-3">
      {fields.map((f) => (
        <div key={f.term}>
          <dt className="tech-label">{f.term}</dt>
          <dd className="mt-1.5 font-sans text-[0.9375rem] leading-6 text-ink-display">
            {f.value}
          </dd>
        </div>
      ))}
    </dl>
  );
}
