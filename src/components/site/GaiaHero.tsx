import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import shape1 from "../../assets/deco/Gaia_Decorative_Shape_1@3x.png";
import smileHero from "../../assets/Man Drawing An Emoji 2 copie 2.jpg.jpeg";

interface GaiaHeroProps {
  scrollY?: number;
}

export function GaiaHero({ scrollY: _scrollY = 0 }: GaiaHeroProps) {
  const navigate = useNavigate();
  const imgRef  = useRef<HTMLImageElement>(null);
  const shapeRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);

  useEffect(() => {
    let lastY = 0;
    function onScroll() { lastY = window.scrollY; }
    function tick() {
      // Léger parallax vers le bas sur l'image de fond
      if (imgRef.current) {
        imgRef.current.style.transform = `translateY(${lastY * 0.12}px) scale(1.08)`;
      }
      if (shapeRef.current) {
        shapeRef.current.style.transform = `translateY(${lastY * 0.18}px) rotate(${lastY * 0.012}deg)`;
      }
      raf.current = requestAnimationFrame(tick);
    }
    window.addEventListener("scroll", onScroll, { passive: true });
    raf.current = requestAnimationFrame(tick);
    return () => { window.removeEventListener("scroll", onScroll); cancelAnimationFrame(raf.current); };
  }, []);

  return (
    <section className="gaia-hero gaia-hero--fullbg" id="accueil" aria-label="Section héros">

      {/* ── IMAGE DE FOND — smiley pleine largeur ── */}
      <div className="hero-bg-wrap" aria-hidden="true">
        <img
          ref={imgRef}
          src={smileHero}
          alt=""
          className="hero-bg-img"
        />
        {/* Dégradé gauche pour lisibilité du texte */}
        <div className="hero-bg-overlay" />
      </div>

      {/* Deco shape — filigrane */}
      <div ref={shapeRef} className="gaia-deco-shape parallax-layer" aria-hidden="true"
        style={{ position: "absolute", right: "-40px", bottom: "-60px", width: "340px", opacity: 0.06, zIndex: 2, transformOrigin: "center center" }}>
        <img src={shape1} alt="" style={{ width: "100%", height: "auto" }} />
      </div>

      {/* ── CONTENU — texte centré à gauche ── */}
      <div className="gaia-hero-left gaia-hero--fullbg-content reveal d1" style={{ position: "relative", zIndex: 3 }}>

        <h1 className="gaia-h1" style={{ fontSize: "clamp(38px, 5vw, 76px)" }}>
          Derrière chaque marque,<br />
          se cache <em>une histoire</em>
        </h1>

        <p className="hero-sub reveal d2">
          Nous façonnons des identités visuelles qui parlent au cœur.
          Le Made in Cameroun mérite de briller — et nous sommes là pour ça.
        </p>

        {/* Badges */}
        <div className="hero-badges-inline reveal d3" style={{ display: "flex" }}>
          <div className="hero-badge-pill">
            <div className="float-card-dot" aria-hidden="true" />
            Identité visuelle complète
          </div>
          <div className="hero-badge-pill">
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none" aria-hidden="true">
              <path d="M8 1.5C4.41 1.5 1.5 4.41 1.5 8s2.91 6.5 6.5 6.5 6.5-2.91 6.5-6.5S11.59 1.5 8 1.5z" fill="#FF8A3D" fillOpacity="0.2" stroke="#FF8A3D" strokeWidth="1.2" />
              <path d="M5 8l2 2 4-4" stroke="#FF8A3D" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            Made in Cameroun
          </div>
        </div>

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
            style={{ borderColor: "rgba(255,255,255,0.25)", color: "white" }}
            onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.1)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.5)"; }}
            onMouseLeave={(e) => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; }}
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
            <div className="hero-stat-num">98%</div>
            <div className="hero-stat-label">Clients satisfaits</div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero-scroll-indicator" aria-hidden="true">
        <div className="hero-scroll-line" />
        <span>Défiler</span>
      </div>
    </section>
  );
}
