import pattern from "@/assets/gaia-pattern.png";

/**
 * Decorative Gaïa brand pattern strip — used as a visual bridge between sections
 * to create scroll-continuity. Subtle, repeats horizontally.
 */
export function PatternStrip({
  className = "",
  height = 80,
  opacity = 0.55,
}: {
  className?: string;
  height?: number;
  opacity?: number;
}) {
  return (
    <div
      aria-hidden
      className={`w-full overflow-hidden pointer-events-none ${className}`}
      style={{ height }}
    >
      <div
        className="w-full h-full animate-[marquee_60s_linear_infinite]"
        style={{
          backgroundImage: `url(${pattern})`,
          backgroundRepeat: "repeat-x",
          backgroundSize: "auto 100%",
          opacity,
          width: "200%",
        }}
      />
    </div>
  );
}