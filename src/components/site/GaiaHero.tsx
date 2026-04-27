import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import shape1 from "../../assets/deco/Gaia_Decorative_Shape_1@3x.png";
import heroVisual from "../../assets/deco/gaia_hero_visual.png";

interface GaiaHeroProps {
  scrollY?: number;
}

export function GaiaHero({ scrollY = 0 }: GaiaHeroProps) {
  const navigate = useNavigate();
  const shapeRef  = useRef<HTMLDivElement>(null);
  const photoRef  = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);

  useEffect(() => {
    let lastY = 0;

    function onScroll() {
      lastY = window.scrollY;
    }

    function tick() {
      if (shapeRef.current) {
        shapeRef.current.style.transform = `translateY(${lastY * 0.22}px) rotate(${lastY * 0.015}deg)`;
      }
      if (photoRef.current) {
        photoRef.current.style.transform = `translateY(${lastY * -0.1}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    raf.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("scroll", onScroll);
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <section className="gaia-hero" id="accueil" aria-label="Section héros">
      {/* Decorative shape — parallax bas */}
      <div
        ref={shapeRef}
        className="gaia-deco-shape parallax-layer"
        aria-hidden="true"
        style={{
          right: "-40px",
          bottom: "-60px",
          width: "340px",
          opacity: 0.1,
          zIndex: 1,
          transformOrigin: "center center",
        }}
      >
        <img src={shape1} alt="" style={{ width: "100%", height: "auto" }} />
      </div>

      {/* Left — text content */}
      <div className="gaia-hero-left" style={{ position: "relative", zIndex: 2 }}>
        <div className="hero-label reveal d1">
          <span className="hero-label-dot" aria-hidden="true" />
          Studio créatif · Douala, Cameroun
        </div>

        <h1 className="gaia-h1 reveal d2">
          Derrière chaque marque,<br />
          se cache <em>une histoire</em>
        </h1>

        <p className="hero-sub reveal d3">
          Nous façonnons des identités visuelles qui parlent au cœur.
          Le Made in Cameroun mérite de briller — et nous sommes là pour ça.
        </p>

        <div className="hero-ctas reveal d4">
          <button className="gaia-btn" onClick={() => navigate("/contact")}>
            Discutons de votre projet
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
          <button
            className="gaia-btn gaia-btn-ghost"
            onClick={() => navigate("/portfolio")}
            style={{ borderColor: "rgba(255,255,255,0.2)", color: "white" }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = "rgba(255,255,255,0.08)";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.4)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.borderColor = "rgba(255,255,255,0.2)";
            }}
          >
            Voir nos réalisations
          </button>
        </div>

        <div className="hero-stats reveal d5">
          <div>
            <div className="hero-stat-num">6+</div>
            <div className="hero-stat-label">Années d'expertise</div>
          </div>
          <div>
            <div className="hero-stat-num">120+</div>
            <div className="hero-stat-label">Marques créées</div>
          </div>
          <div>
            <div className="hero-stat-num">4</div>
            <div className="hero-stat-label">Pôles de services</div>
          </div>
        </div>
      </div>

      {/* Right — studio photo avec parallax */}
      <div
        className="gaia-hero-right"
        style={{ position: "relative", zIndex: 2, display: "flex", alignItems: "center", justifyContent: "center", padding: "40px 60px 40px 20px" }}
      >
        <div
          ref={photoRef}
          className="parallax-layer reveal-right d2"
          style={{
            position: "relative",
            width: "100%",
            maxWidth: 520,
            willChange: "transform",
          }}
        >
          {/* Photo principale */}
          <div
            style={{
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 40px 100px rgba(11,25,41,0.6), 0 0 0 1px rgba(255,255,255,0.07)",
              position: "relative",
            }}
          >
            <img
              src={heroVisual}
              alt="Studio créatif Gaïa — workspace design et branding"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
                aspectRatio: "4/3",
              }}
            />
            {/* Overlay dégradé en bas pour fondre avec le fond bleu */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "35%",
                background: "linear-gradient(to top, rgba(11,25,41,0.7) 0%, transparent 100%)",
              }}
            />
          </div>

          {/* Badge flottant — haut droite */}
          <div
            className="hero-float-card card-top float-bob reveal d3"
            style={{ top: "-18px", right: "-18px", position: "absolute" }}
          >
            <div className="float-card-dot" aria-hidden="true" />
            <span>Identité visuelle complète</span>
          </div>

          {/* Badge flottant — bas gauche */}
          <div
            className="hero-float-card card-bottom float-bob-delay reveal d4"
            style={{ bottom: "20px", left: "-24px", position: "absolute" }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5S11.59 1.5 8 1.5z" fill="#FF8A3D" fillOpacity="0.2" stroke="#FF8A3D" strokeWidth="1.2" />
              <path d="M5 8l2 2 4-4" stroke="#FF8A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            <span>Made in Cameroun</span>
          </div>

          {/* Décoration coins — cadre lumineux */}
          {[
            { top: -4, left: -4 },
            { top: -4, right: -4 },
            { bottom: -4, left: -4 },
            { bottom: -4, right: -4 },
          ].map((pos, idx) => (
            <div
              key={idx}
              aria-hidden="true"
              style={{
                position: "absolute",
                ...pos,
                width: 20,
                height: 20,
                border: "2px solid rgba(255,138,61,0.5)",
                borderRadius: 4,
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
