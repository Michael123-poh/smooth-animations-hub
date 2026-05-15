import { useEffect, useRef } from "react";
import patternClair from "../../assets/deco/Gaia_Decorative_Pattern_Fond_Clair@3x.png";

const steps = [
  {
    num: "01",
    title: "Écoute & découverte",
    desc: "Brief approfondi, analyse marché, étude concurrents et cibles.",
  },
  {
    num: "02",
    title: "Stratégie & positionnement",
    desc: "Territoire de marque : promesse, ton, valeurs différenciantes.",
  },
  {
    num: "03",
    title: "Création & itération",
    desc: "Design, tests, affinements avec vos retours à chaque étape.",
  },
  {
    num: "04",
    title: "Livraison & accompagnement",
    desc: "Fichiers finaux, charte d'utilisation, guide de marque complet.",
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
        <div className="section-header">
          <div className="section-label">Notre Recette</div>
          <div>
            <h2 className="gaia-h2" id="process-heading">
              Les ingrédients<br />de nos succès
            </h2>
            <p className="section-sub">
              Du premier brief à la <span style={{ color: "var(--orange)" }}>livraison finale</span>,<br />voici comment nous travaillons.
            </p>
          </div>
        </div>

        <div className="process-steps-row">
          {steps.map((s, i) => (
            <div key={s.num} className="process-card" style={{ animationDelay: `${i * 120}ms` }}>
              <div className="process-card-header">
                <span className="process-card-num">{s.num}</span>
                <h3 className="process-card-title">{s.title}</h3>
              </div>
              <p className="process-card-desc">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
