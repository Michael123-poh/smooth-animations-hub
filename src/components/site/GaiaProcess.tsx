import { useEffect, useRef } from "react";
import patternClair from "../../assets/deco/Gaia_Decorative_Pattern_Fond_Clair@3x.png";

const steps = [
  {
    num: "01",
    title: "Écoute & découverte",
    desc: "Brief approfondi, analyse marché, étude concurrents et cibles.",
    duration: "1 — 2 semaines",
  },
  {
    num: "02",
    title: "Stratégie & positionnement",
    desc: "Territoire de marque : promesse, ton, valeurs différenciantes.",
    duration: "1 semaine",
  },
  {
    num: "03",
    title: "Création & itération",
    desc: "Design, tests, affinements avec vos retours à chaque étape.",
    duration: "2 — 4 semaines",
  },
  {
    num: "04",
    title: "Livraison & accompagnement",
    desc: "Fichiers finaux, charte d'utilisation, guide de marque complet.",
    duration: "1 semaine",
  },
];

export function GaiaProcess() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const io = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) section.classList.add("process-visible"); },
      { threshold: 0.15 }
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="gaia-process" id="processus" aria-labelledby="process-heading">

      <div aria-hidden="true" style={{
        position: "absolute", inset: 0,
        backgroundImage: `url(${patternClair})`,
        backgroundSize: "cover", backgroundPosition: "center",
        opacity: 0.04, mixBlendMode: "soft-light", pointerEvents: "none",
      }} />

      <div style={{ position: "relative", zIndex: 1 }}>
        <div className="section-label">Notre recette</div>
        <h2 className="gaia-h2" id="process-heading" style={{ marginBottom: 56 }}>
          Comment nous travaillons <span style={{ color: "var(--orange)" }}>ensemble</span>
        </h2>

        <div className="process-steps-row">
          {steps.map((s, i) => (
            <div key={s.num} className="process-card" style={{ animationDelay: `${i * 120}ms` }}>
              <div className="process-card-num">{s.num}</div>
              <div className="process-card-connector" aria-hidden="true" />
              <h3 className="process-card-title">{s.title}</h3>
              <p className="process-card-desc">{s.desc}</p>
              <div className="process-card-duration">
                <svg width="11" height="11" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                  <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.3"/>
                  <path d="M6 3.5V6l1.5 1.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round"/>
                </svg>
                {s.duration}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
