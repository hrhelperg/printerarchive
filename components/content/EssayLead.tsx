interface EssayLeadProps {
  kicker?: string;
  title: string;
  standfirst: string;
  byline?: string;
}

export function EssayLead({ kicker, title, standfirst, byline }: EssayLeadProps) {
  return (
    <header>
      {kicker ? <p className="kicker">{kicker}</p> : null}
      <h1 className="mt-3 text-display-sm leading-tight text-balance">
        {title}
      </h1>
      <p className="mt-5 font-serif text-xl italic text-ink-soft text-pretty">
        {standfirst}
      </p>
      {byline ? (
        <p className="mt-4 font-sans text-sm text-ink-faint">{byline}</p>
      ) : null}
    </header>
  );
}
