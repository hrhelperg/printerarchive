export function Container({
  children,
  width = "default",
  className = "",
}: {
  children: React.ReactNode;
  width?: "default" | "prose" | "wide";
  className?: string;
}) {
  const w =
    width === "prose"
      ? "max-w-[72ch]"
      : width === "wide"
        ? "max-w-7xl"
        : "max-w-5xl";
  return (
    <div className={`mx-auto w-full ${w} px-5 sm:px-6 lg:px-8 ${className}`}>
      {children}
    </div>
  );
}
