import { useEffect, useRef } from "react";
import shape4 from "../../assets/deco/Gaia_Decorative_Shape_4@3x.png";

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
  const shapeRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);

  useEffect(() => {
    const section = shapeRef.current?.closest("section");

    function tick() {
      if (shapeRef.current && section) {
        const rect = section.getBoundingClientRect();
        const progress = -rect.top / window.innerHeight;
        shapeRef.current.style.transform = `translateY(${progress * -25}px) rotate(${progress * -5}deg)`;
      }
      raf.current = requestAnimationFrame(tick);
    }

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <section className="gaia-pillars" id="valeurs" aria-labelledby="pillars-heading">
      {/* Decorative shape 4 — parallax */}
      <div
        ref={shapeRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          left: "-60px",
          bottom: "-40px",
          width: "320px",
          opacity: 0.1,
          pointerEvents: "none",
          willChange: "transform",
          zIndex: 0,
        }}
      >
        <img src={shape4} alt="" style={{ width: "100%", height: "auto" }} />
      </div>

      {/* Ambient glow spots */}
      <div aria-hidden="true" style={{
        position: "absolute",
        top: "10%",
        right: "10%",
        width: 400,
        height: 400,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,138,61,0.08) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
      }} />
      <div aria-hidden="true" style={{
        position: "absolute",
        bottom: "10%",
        left: "30%",
        width: 300,
        height: 300,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(53,103,170,0.15) 0%, transparent 70%)",
        pointerEvents: "none",
        zIndex: 0,
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="pillars-header">
          <div>
            <div className="section-label">Nos piliers</div>
            <h2 className="gaia-h2 reveal" id="pillars-heading">
              Les valeurs qui<br />nous fondent
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
