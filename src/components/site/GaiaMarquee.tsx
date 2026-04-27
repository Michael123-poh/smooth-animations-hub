const items = [
  "Identité visuelle",
  "Image de marque",
  "Expérience utilisateur",
  "Supports de communication",
  "Stratégie créative",
  "Direction artistique",
  "Branding digital",
  "Made in Cameroun",
];

export function GaiaMarquee() {
  const doubled = [...items, ...items];

  return (
    <div className="gaia-marquee" aria-hidden="true">
      <div className="marquee-track">
        {doubled.map((item, i) => (
          <span key={i} className="marquee-item">
            {item}
            <span className="marquee-sep" />
          </span>
        ))}
      </div>
    </div>
  );
}
