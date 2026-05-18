export function Prose({ children }: { children: React.ReactNode }) {
  return (
    <div
      className="font-serif text-[1.0625rem] leading-[1.75] text-ink
      [&_h2]:font-serif [&_h2]:text-2xl [&_h2]:mt-12 [&_h2]:mb-3 [&_h2]:tracking-tight
      [&_h3]:font-serif [&_h3]:text-xl [&_h3]:mt-8 [&_h3]:mb-2
      [&_p]:my-5 [&_ul]:my-5 [&_ol]:my-5 [&_li]:my-1.5
      [&_ul]:list-disc [&_ol]:list-decimal [&_ul]:pl-6 [&_ol]:pl-6
      [&_a]:underline"
    >
      {children}
    </div>
  );
}
