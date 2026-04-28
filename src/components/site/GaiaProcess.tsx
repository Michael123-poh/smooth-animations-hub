import { useEffect, useRef, useState } from "react";
import patternClair from "../../assets/deco/Gaia_Decorative_Pattern_Fond_Clair@3x.png";

const steps = [
  {
    num: "01",
    title: "Écoute & découverte",
    desc: "Nous plongeons dans votre univers. Brief approfondi, analyse de votre marché, étude de vos concurrents et de vos cibles. Chaque projet commence par une vraie conversation.",
    duration: "1 — 2 semaines",
  },
  {
    num: "02",
    title: "Stratégie & positionnement",
    desc: "Nous définissons votre territoire de marque : promesse, ton, valeurs différenciantes. Une fondation solide avant le moindre trait de crayon.",
    duration: "1 semaine",
  },
  {
    num: "03",
    title: "Création & itération",
    desc: "Nos designers conçoivent, testent, affinent. Vous êtes impliqués à chaque étape avec des retours organisés et constructifs. Pas de surprise au bout du tunnel.",
    duration: "2 — 4 semaines",
  },
  {
    num: "04",
    title: "Livraison & accompagnement",
    desc: "Fichiers finaux, charte d'utilisation, guide de marque complet. Et nous restons disponibles après livraison pour vous accompagner dans le déploiement.",
    duration: "1 semaine",
  },
];

export function GaiaProcess() {
  const [activeStep, setActiveStep] = useState(0);
  // Wrapper that has full scroll height, inner sticky panel stays in view
  const wrapperRef = useRef<HTMLDivElement>(null);
  const patternRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);

  useEffect(() => {
    function tick() {
      const wrapper = wrapperRef.current;
      if (!wrapper) { raf.current = requestAnimationFrame(tick); return; }

      const rect = wrapper.getBoundingClientRect();
      const vh   = window.innerHeight;

      // Parallax pattern
      if (patternRef.current) {
        const progress = -rect.top / vh;
        patternRef.current.style.transform = `translateY(${progress * 20}px)`;
      }

      // Scroll progress: 0 when wrapper top enters viewport, 1 when wrapper bottom exits
      const scrolled = vh - rect.top;
      const total    = rect.height + vh;
      const pct      = Math.max(0, Math.min(1, scrolled / total));

      // Map to step index — includes slight overshoot so last step fully activates
      const raw  = pct * steps.length;
      const step = Math.min(steps.length - 1, Math.floor(raw));
      setActiveStep(step);

      raf.current = requestAnimationFrame(tick);
    }

    raf.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf.current);
  }, []);

  const progressPercent = ((activeStep + 1) / steps.length) * 100;

  return (
    // Outer wrapper: tall enough to drive the sticky animation
    <div
      ref={wrapperRef}
      className="process-scroll-wrapper"
      id="processus"
    >
      {/* Sticky inner — stays in view while user scrolls through wrapper */}
      <section
        className="gaia-process process-sticky"
        aria-labelledby="process-heading"
      >
        {/* Pattern overlay */}
        <div
          ref={patternRef}
          aria-hidden="true"
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url(${patternClair})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.04,
            mixBlendMode: "soft-light",
            pointerEvents: "none",
            willChange: "transform",
          }}
        />
        <div aria-hidden="true" style={{
          position: "absolute",
          top: "-100px", right: "-100px",
          width: 500, height: 500,
          borderRadius: "50%",
          background: "radial-gradient(circle, rgba(255,138,61,0.07) 0%, transparent 70%)",
          pointerEvents: "none",
        }} />

        <div style={{ position: "relative", zIndex: 1 }}>
          <div>
            <div className="section-label">Notre recette</div>
            <h2 className="gaia-h2 reveal" id="process-heading" style={{ maxWidth: 480 }}>
              Comment nous travaillons ensemble
            </h2>
          </div>

          <div className="process-grid">
            {/* Left — steps */}
            <div className="process-steps">
              <div className="process-line">
                <div
                  className="process-line-fill"
                  style={{ height: `${progressPercent}%` }}
                  aria-hidden="true"
                />
              </div>

              {steps.map((s, i) => {
                const isActive = i === activeStep;
                const isDone   = i < activeStep;

                return (
                  <div
                    key={s.num}
                    className={`process-step${isActive ? " active" : ""}`}
                    style={{
                      opacity: isDone || isActive ? 1 : 0.35,
                      transition: "opacity 0.4s",
                    }}
                  >
                    <div
                      className="step-num"
                      style={{
                        background: isActive ? "var(--orange)" : isDone ? "rgba(255,138,61,0.18)" : "rgba(255,255,255,0.05)",
                        borderColor: isActive ? "var(--orange)" : isDone ? "rgba(255,138,61,0.35)" : "rgba(255,255,255,0.15)",
                        color: isActive ? "white" : isDone ? "var(--orange)" : "rgba(255,255,255,0.35)",
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                      aria-hidden="true"
                    >
                      {isDone ? (
                        <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                          <path d="M2.5 7l3.5 3.5 5.5-6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      ) : s.num}
                    </div>

                    <div className="step-content">
                      <h3
                        className="step-title"
                        style={{
                          color: isActive ? "white" : isDone ? "rgba(255,255,255,0.7)" : "rgba(255,255,255,0.38)",
                          transition: "color 0.4s",
                        }}
                      >
                        {s.title}
                      </h3>

                      <p
                        className="step-desc"
                        style={{
                          maxHeight: isActive ? "200px" : "0px",
                          overflow: "hidden",
                          opacity: isActive ? 1 : 0,
                          transition: "max-height 0.5s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.35s",
                          marginBottom: isActive ? 0 : -8,
                        }}
                      >
                        {s.desc}
                      </p>

                      <div style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 6,
                        marginTop: isActive ? 10 : 0,
                        fontSize: 12,
                        fontWeight: 600,
                        color: "var(--orange)",
                        opacity: isActive ? 1 : 0,
                        maxHeight: isActive ? "30px" : "0px",
                        overflow: "hidden",
                        transition: "opacity 0.35s, max-height 0.4s, margin-top 0.35s",
                      }}>
                        <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden="true">
                          <circle cx="6" cy="6" r="5" stroke="currentColor" strokeWidth="1.2" />
                          <path d="M6 3.5V6l1.5 1.5" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round" />
                        </svg>
                        {s.duration}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right — sticky visual card */}
            <div className="process-visual">
              <div className="process-visual-card">
                <div className="process-visual-label">Progression du projet</div>

                {steps.map((s, i) => {
                  const done    = i < activeStep;
                  const current = i === activeStep;
                  return (
                    <div key={s.num} style={{ marginBottom: 18 }}>
                      <div style={{
                        display: "flex",
                        justifyContent: "space-between",
                        marginBottom: 6,
                        fontSize: 13,
                        fontWeight: 600,
                        color: current ? "white" : done ? "rgba(255,255,255,0.55)" : "rgba(255,255,255,0.2)",
                        transition: "color 0.4s",
                      }}>
                        <span>{s.title}</span>
                        <span style={{
                          color: done ? "var(--orange)" : current ? "rgba(255,255,255,0.5)" : "rgba(255,255,255,0.15)",
                          transition: "color 0.4s",
                        }}>
                          {done ? "✓" : s.num}
                        </span>
                      </div>
                      <div className="process-bar">
                        <div
                          className="process-bar-fill"
                          style={{
                            width: done ? "100%" : current ? "60%" : "0%",
                            transition: "width 0.5s cubic-bezier(0.4, 0, 0.2, 1)",
                          }}
                        />
                      </div>
                    </div>
                  );
                })}

                <div style={{
                  marginTop: 28,
                  padding: "16px 20px",
                  background: "rgba(255,138,61,0.12)",
                  border: "1px solid rgba(255,138,61,0.2)",
                  borderRadius: 10,
                  fontSize: 13,
                  fontWeight: 600,
                  color: "var(--orange)",
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                }}>
                  <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <circle cx="8" cy="8" r="7" stroke="currentColor" strokeWidth="1.2" />
                    <path d="M8 5v4M8 11v.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                  </svg>
                  Durée moyenne : 6 — 8 semaines
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
