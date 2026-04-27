interface CircleMotifProps {
  size?: number;
  className?: string;
  variant?: "hero" | "dna" | "mini";
}

export function GaiaCircleMotif({ size = 480, className = "", variant = "hero" }: CircleMotifProps) {
  if (variant === "mini") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        <circle cx="80" cy="80" r="72" stroke="#FF8A3D" strokeWidth="1" strokeOpacity="0.2" />
        <circle cx="80" cy="80" r="50" fill="#FF8A3D" fillOpacity="0.06" stroke="#FF8A3D" strokeWidth="0.75" strokeOpacity="0.25" />
        <circle cx="104" cy="55" r="18" fill="#1E3A5F" fillOpacity="0.14" />
        <circle cx="80" cy="80" r="16" fill="#FF8A3D" fillOpacity="0.18" />
        <circle cx="56" cy="106" r="8" fill="#FF8A3D" fillOpacity="0.35" />
      </svg>
    );
  }

  if (variant === "dna") {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 440 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={className}
        aria-hidden="true"
      >
        {/* Outer spinning ring */}
        <circle cx="220" cy="220" r="200" stroke="rgba(255,255,255,0.06)" strokeWidth="1" strokeDasharray="3 9" className="spin-slow" />
        <circle cx="220" cy="220" r="168" stroke="rgba(255,138,61,0.15)" strokeWidth="1.5" />
        {/* Mid fill */}
        <circle cx="220" cy="220" r="130" fill="rgba(255,138,61,0.04)" stroke="rgba(255,138,61,0.12)" strokeWidth="1" />
        {/* Inner */}
        <circle cx="220" cy="220" r="80" fill="rgba(255,255,255,0.04)" />
        {/* Orange accent */}
        <circle cx="300" cy="145" r="28" fill="#FF8A3D" fillOpacity="0.85" />
        <circle cx="300" cy="145" r="40" fill="none" stroke="#FF8A3D" strokeWidth="1" strokeOpacity="0.25" />
        {/* Navy dot */}
        <circle cx="140" cy="300" r="18" fill="rgba(255,255,255,0.08)" />
        {/* Center */}
        <circle cx="220" cy="220" r="40" fill="#FF8A3D" fillOpacity="0.1" stroke="#FF8A3D" strokeWidth="1.5" strokeOpacity="0.4" />
        <circle cx="220" cy="220" r="12" fill="#FF8A3D" fillOpacity="0.6" />
        {/* Small orbiting dots */}
        <circle cx="358" cy="220" r="7" fill="#FF8A3D" fillOpacity="0.45" />
        <circle cx="82" cy="220" r="5" fill="rgba(255,255,255,0.2)" />
        <circle cx="220" cy="52" r="5" fill="rgba(255,255,255,0.15)" />
      </svg>
    );
  }

  // Hero variant
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 520 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      {/* Outermost dashed ring — slow spin */}
      <circle cx="260" cy="260" r="248" stroke="#1E3A5F" strokeWidth="0.75" strokeOpacity="0.1" strokeDasharray="2 10" className="spin-slow" />

      {/* Outer ring */}
      <circle cx="260" cy="260" r="220" stroke="#1E3A5F" strokeWidth="1" strokeOpacity="0.08" />

      {/* Main filled navy ring */}
      <circle cx="260" cy="260" r="185" fill="#1E3A5F" fillOpacity="0.04" stroke="#1E3A5F" strokeWidth="1" strokeOpacity="0.12" />

      {/* Orange offset large circle */}
      <circle cx="310" cy="215" r="140" fill="#FF8A3D" fillOpacity="0.07" stroke="#FF8A3D" strokeWidth="1.5" strokeOpacity="0.2" />

      {/* Reverse-spin ring */}
      <circle cx="260" cy="260" r="120" fill="none" stroke="#1E3A5F" strokeWidth="0.75" strokeOpacity="0.15" strokeDasharray="4 8" className="spin-slow-reverse" />

      {/* Inner cream circle */}
      <circle cx="245" cy="275" r="75" fill="#FFFCF8" fillOpacity="0.6" />

      {/* Center anchor */}
      <circle cx="260" cy="260" r="36" fill="#FF8A3D" fillOpacity="0.12" stroke="#FF8A3D" strokeWidth="1.5" strokeOpacity="0.4" />
      <circle cx="260" cy="260" r="14" fill="#FF8A3D" fillOpacity="0.8" />

      {/* Orange accent — top right */}
      <circle cx="372" cy="148" r="24" fill="#FF8A3D" fillOpacity="0.9" />
      <circle cx="372" cy="148" r="38" fill="none" stroke="#FF8A3D" strokeWidth="1.5" strokeOpacity="0.3" />

      {/* Navy accent — bottom left */}
      <circle cx="150" cy="370" r="16" fill="#1E3A5F" fillOpacity="0.18" />
      <circle cx="150" cy="370" r="28" fill="none" stroke="#1E3A5F" strokeWidth="1" strokeOpacity="0.12" />

      {/* Tiny dots on perimeter */}
      <circle cx="460" cy="260" r="6" fill="#FF8A3D" fillOpacity="0.4" />
      <circle cx="60" cy="260" r="4" fill="#1E3A5F" fillOpacity="0.2" />
      <circle cx="260" cy="60" r="5" fill="#1E3A5F" fillOpacity="0.15" />
      <circle cx="260" cy="460" r="4" fill="#FF8A3D" fillOpacity="0.3" />
    </svg>
  );
}
