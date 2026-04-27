import { useEffect, useRef } from "react";
import shape3 from "../../assets/deco/Gaia_Decorative_Shape_3@3x.png";

const ArrowIcon = () => (
  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
    <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

const services = [
  {
    id: "identite",
    title: "Identité visuelle",
    desc: "Logo, charte graphique, typographie, palette de couleurs — nous construisons l'âme visuelle de votre marque avec rigueur et créativité.",
    featured: true,
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="26" cy="26" r="22" stroke="#FF8A3D" strokeWidth="1.5" strokeOpacity="0.4" />
        <circle cx="26" cy="26" r="14" fill="#FF8A3D" fillOpacity="0.12" />
        <circle cx="26" cy="26" r="7" fill="#FF8A3D" fillOpacity="0.7" />
        <circle cx="37" cy="15" r="4" fill="#1E3A5F" fillOpacity="0.5" />
        <circle cx="15" cy="37" r="3" fill="#FF8A3D" fillOpacity="0.5" />
      </svg>
    ),
  },
  {
    id: "branding",
    title: "Image de marque",
    desc: "Positionnement, ton de voix, storytelling — nous définissons qui vous êtes et comment vous parlez au monde.",
    featured: false,
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="8" y="16" width="36" height="24" rx="4" stroke="#1E3A5F" strokeWidth="1.5" strokeOpacity="0.6" />
        <path d="M16 28h20M16 23h12" stroke="#1E3A5F" strokeWidth="1.5" strokeLinecap="round" strokeOpacity="0.5" />
        <circle cx="38" cy="14" r="5" fill="#FF8A3D" fillOpacity="0.85" />
      </svg>
    ),
  },
  {
    id: "ux",
    title: "Expérience utilisateur",
    desc: "Interfaces intuitives, parcours fluides — nous concevons des expériences digitales qui engagent et convertissent.",
    featured: false,
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="12" y="8" width="28" height="36" rx="6" stroke="#1E3A5F" strokeWidth="1.5" strokeOpacity="0.5" />
        <rect x="18" y="16" width="16" height="10" rx="3" fill="#FF8A3D" fillOpacity="0.18" stroke="#FF8A3D" strokeWidth="1" strokeOpacity="0.5" />
        <circle cx="26" cy="38" r="2.5" fill="#1E3A5F" fillOpacity="0.4" />
      </svg>
    ),
  },
  {
    id: "supports",
    title: "Supports de communication",
    desc: "Brochures, affiches, packaging, réseaux sociaux — des supports cohérents qui portent votre message partout.",
    featured: false,
    icon: (
      <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 14h32v24H10z" stroke="#1E3A5F" strokeWidth="1.5" strokeOpacity="0.5" strokeLinejoin="round" />
        <path d="M10 14l16 16 16-16" stroke="#FF8A3D" strokeWidth="1.5" strokeOpacity="0.6" strokeLinejoin="round" />
        <circle cx="38" cy="36" r="6" fill="#FF8A3D" fillOpacity="0.85" />
        <path d="M35.5 36h5M38 33.5v5" stroke="white" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
];

export function GaiaServices() {
  const shapeRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);

  useEffect(() => {
    const section = shapeRef.current?.closest("section");

    function tick() {
      if (shapeRef.current && section) {
        const rect = section.getBoundingClientRect();
        const progress = -rect.top / window.innerHeight;
        shapeRef.current.style.transform = `translateY(${progress * 40}px) rotate(${progress * 8}deg)`;
      }
      raf.current = requestAnimationFrame(tick);
    }

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  return (
    <section className="gaia-services" id="services" aria-labelledby="services-heading">
      {/* Decorative Shape 3 — parallax filigrane */}
      <div
        ref={shapeRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          top: "-60px",
          right: "-80px",
          width: "380px",
          opacity: 0.07,
          pointerEvents: "none",
          willChange: "transform",
          zIndex: 0,
        }}
      >
        <img src={shape3} alt="" style={{ width: "100%", height: "auto" }} />
      </div>

      <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40, marginBottom: 0, position: "relative", zIndex: 1 }}>
        <div>
          <div className="section-label">Nos services</div>
          <h2 className="gaia-h2 reveal" id="services-heading">
            Ce que nous<br />créons pour vous
          </h2>
        </div>
        <p className="section-sub reveal d2" style={{ marginTop: 0, textAlign: "right" }}>
          Quatre pôles d'expertise au service<br />de votre croissance.
        </p>
      </div>

      <div className="services-grid" style={{ position: "relative", zIndex: 1 }}>
        {services.map((s, i) => (
          <div
            key={s.id}
            className={`service-card spotlight-card${s.featured ? " featured" : ""} reveal d${i + 1}`}
          >
            <div className="service-icon">{s.icon}</div>
            <div className="service-title">{s.title}</div>
            <p className="service-desc">{s.desc}</p>
            <div className="service-arrow" aria-hidden="true">
              <ArrowIcon />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
