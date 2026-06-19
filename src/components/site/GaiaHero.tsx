import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import eyeHero from "../../assets/Black Man With Eye Wide Opened 4.jpg.jpeg";
import logoSombre from "../../assets/logos/Gaia_logo_principal_declinaison_sur_fond_sombre@3x.png";

interface GaiaHeroProps {
  scrollY?: number;
}

export function GaiaHero({ scrollY: _scrollY = 0 }: GaiaHeroProps) {
  const navigate = useNavigate();
  const subRef = useRef<HTMLSpanElement>(null);
  const line2Ref = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    function sync() {
      if (!line2Ref.current || !subRef.current) return;
      const el = line2Ref.current;
      const prev = el.style.display;
      el.style.display = "inline-block";
      const w = el.getBoundingClientRect().width;
      el.style.display = prev;
      if (w > 0) subRef.current.style.width = `${w}px`;
    }
    document.fonts.ready.then(sync);
    window.addEventListener("resize", sync, { passive: true });
    return () => window.removeEventListener("resize", sync);
  }, []);

  return (
    <section className="gaia-hero gaia-hero--eye" id="accueil" aria-label="Section héros">

      <div className="hero-logo">
        <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
          <img src={logoSombre} alt="Gaïa Studio" />
        </a>
      </div>

      <div className="hero-bg-wrap" aria-hidden="true">
        <img src={eyeHero} alt="" className="hero-bg-img hero-bg-img--eye" />
        <div className="hero-bg-overlay hero-bg-overlay--eye" />
      </div>

      {/* Titre — positionné par le void flex */}
      <div className="hero-eye-void" aria-hidden="true" />
      <div className="hero-eye-content reveal d1">
        <h1 className="hero-eye-h1">
          <span className="hero-h1-line">Vos clients</span>
          <span className="hero-h1-line">vous jugent</span>
          <span className="hero-h1-line hero-h1-line--group" ref={line2Ref}>
            <span>en <em>07</em> secondes</span>
            <span>chrono…</span>
          </span>
        </h1>
      </div>
      <div className="hero-eye-void-bottom" aria-hidden="true" />

      {/* Bas de page — positionné de façon absolue, indépendant du titre */}
      <div className="hero-eye-bottom-row">
        <span ref={subRef} className="hero-eye-sub" role="text" aria-label="Que voient-ils?">
          {"Que voient-ils?".split("").map((char, i) => (
            <span key={i} aria-hidden="true" style={char === "?" ? { color: "var(--orange)" } : undefined}>
              {char}
            </span>
          ))}
        </span>
        <button className="gaia-btn" onClick={() => navigate("/contact")}>
          Parlons-en
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

    </section>
  );
}
