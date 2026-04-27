/**
 * Gaïa wordmark — lowercase rounded with orange dot accent over the "i".
 * Renders as styled text so it scales perfectly.
 */
export function Logo({
  className = "",
  variant = "white",
}: {
  className?: string;
  variant?: "white" | "navy";
}) {
  const color = variant === "white" ? "text-white" : "text-navy-deep";
  return (
    <span
      className={`inline-flex items-baseline font-bold-r tracking-[-0.04em] leading-none ${color} ${className}`}
      aria-label="gaïa"
    >
      <span>ga</span>
      <span className="relative">
        i
        <span
          className="absolute -top-[0.25em] left-1/2 -translate-x-1/2 h-[0.22em] w-[0.22em] rounded-full bg-orange"
          aria-hidden
        />
      </span>
      <span>a</span>
    </span>
  );
}