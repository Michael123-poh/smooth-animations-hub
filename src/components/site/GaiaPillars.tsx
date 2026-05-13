import patternSombre from "../../assets/deco/Gaia_Decorative_Pattern_Fond_Sombre@3x.png";

const pillars = [
  {
    number: "01",
    title: "Excellence",
    desc: "Chaque détail compte. Nous nous imposons des standards élevés sur chaque projet, sans compromis sur la qualité.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M14 3l2.8 5.6 6.2.9-4.5 4.4 1.1 6.2-5.6-2.9-5.6 2.9 1.1-6.2-4.5-4.4 6.2-.9z" stroke="#FF8A3D" strokeWidth="1.5" strokeLinejoin="round" fill="#FF8A3D" fillOpacity="0.2" />
      </svg>
    ),
  },
  {
    number: "02",
    title: "Engagement",
    desc: "Nous investissons pleinement dans chaque projet. Votre succès est notre priorité, du brief à la livraison.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path d="M8 14c0-3.3 2.7-6 6-6s6 2.7 6 6" stroke="#FF8A3D" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M5 14h18M10 19l4 4 4-4" stroke="#FF8A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
  },
  {
    number: "03",
    title: "Convivialité",
    desc: "Travailler avec nous, c'est collaborer avec des humains accessibles, chaleureux et à l'écoute de vos besoins.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="10" cy="11" r="3.5" stroke="#FF8A3D" strokeWidth="1.5" />
        <circle cx="18" cy="11" r="3.5" stroke="#FF8A3D" strokeWidth="1.5" />
        <path d="M4 22c0-3.3 2.7-6 6-6h8c3.3 0 6 2.7 6 6" stroke="#FF8A3D" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    number: "04",
    title: "Transparence",
    desc: "Process clair, tarification lisible, communication ouverte — vous savez toujours où en est votre projet.",
    icon: (
      <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <circle cx="13" cy="12" r="6" stroke="#FF8A3D" strokeWidth="1.5" />
        <path d="M17.5 17.5l4.5 4.5" stroke="#FF8A3D" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="13" cy="12" r="2" fill="#FF8A3D" fillOpacity="0.4" />
      </svg>
    ),
  },
];

export function GaiaPillars() {
  return (
    <section className="gaia-pillars" id="valeurs" aria-labelledby="pillars-heading">

      {/* Decorative layer */}
      <div aria-hidden="true" className="pillars-deco-layer" style={{ position: "absolute", inset: 0, pointerEvents: "none" }}>
        {/* Pattern texture */}
        <div className="pillars-deco-pattern" style={{
          position: "absolute", inset: 0,
          backgroundImage: `url(${patternSombre})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
        }} />
        {/* Orange glow top-right */}
        <div className="pillars-deco-glow-tr" style={{
          position: "absolute", top: "-10%", right: "-5%",
          width: 500, height: 500,
          background: "radial-gradient(circle, rgba(255,138,61,0.13) 0%, transparent 65%)",
          borderRadius: "50%",
        }} />
        {/* White glow bottom-left */}
        <div style={{
          position: "absolute", bottom: "-15%", left: "-8%",
          width: 420, height: 420,
          background: "radial-gradient(circle, rgba(255,255,255,0.04) 0%, transparent 65%)",
          borderRadius: "50%",
        }} />
        {/* Decorative ring top-right */}
        <svg className="pillars-deco-ring-tr" style={{ position: "absolute", top: -30, right: -30, opacity: 0.07 }}
          width="360" height="360" viewBox="0 0 360 360" fill="none">
          <circle cx="180" cy="180" r="170" stroke="white" strokeWidth="1.5" strokeDasharray="4 12" />
          <circle cx="180" cy="180" r="120" stroke="white" strokeWidth="1" />
          <circle cx="180" cy="180" r="60" stroke="#FF8A3D" strokeWidth="1" strokeOpacity="0.6" />
        </svg>
        {/* Decorative ring bottom-left */}
        <svg className="pillars-deco-ring-bl" style={{ position: "absolute", bottom: -60, left: -60, opacity: 0.06 }}
          width="280" height="280" viewBox="0 0 280 280" fill="none">
          <circle cx="140" cy="140" r="130" stroke="white" strokeWidth="1" strokeDasharray="3 9" />
          <circle cx="140" cy="140" r="80" stroke="#FF8A3D" strokeWidth="1" strokeOpacity="0.5" />
        </svg>
      </div>

      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="pillars-header">
          <div>
            <div className="section-label">Nos Valeurs</div>
            <h2 className="gaia-h2 reveal" id="pillars-heading">
              <span className="pillars-title-desktop">Les valeurs qui<br /><span style={{ color: "var(--orange)" }}>nous fondent</span></span>
              <span className="pillars-title-mobile">Les valeurs<br />qui nous<br /><span style={{ color: "var(--orange)" }}>fondent</span></span>
            </h2>
          </div>
          <p className="section-sub reveal d2" style={{ marginTop: 0 }}>
            Quatre engagements qui guident chacune de nos collaborations
            et définissent la manière dont nous travaillons.
          </p>
        </div>

        <div className="pillars-grid">
          {pillars.map((p, i) => (
            <div key={p.number} className={`pillar-card spotlight-card reveal d${i + 1}`}>
              <span className="pillar-number">{p.number}</span>
              <div className="pillar-icon-wrap">{p.icon}</div>
              <h3 className="pillar-title">{p.title}</h3>
              <p className="pillar-desc">{p.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
