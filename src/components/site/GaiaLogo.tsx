interface LogoProps {
  dark?: boolean;
  size?: number;
}

export function GaiaLogo({ dark = false, size = 32 }: LogoProps) {
  const color = dark ? "#1E3A5F" : "#1E3A5F";
  const orange = "#FF8A3D";

  return (
    <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        {/* Outer ring */}
        <circle cx="16" cy="16" r="14.5" stroke={color} strokeWidth="1" strokeOpacity="0.25" />
        {/* Mid ring */}
        <circle cx="16" cy="16" r="10" stroke={orange} strokeWidth="1.5" strokeOpacity="0.5" />
        {/* Inner filled */}
        <circle cx="16" cy="16" r="5.5" fill={orange} />
        {/* Offset accent */}
        <circle cx="23" cy="9" r="3" fill={color} fillOpacity="0.18" />
      </svg>
      <span
        style={{
          fontFamily: "'Plus Jakarta Sans', sans-serif",
          fontWeight: 800,
          fontSize: 20,
          letterSpacing: "-0.5px",
          color: color,
        }}
      >
        Gaïa
      </span>
    </div>
  );
}
