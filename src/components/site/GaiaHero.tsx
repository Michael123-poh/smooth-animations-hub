import { useNavigate } from "react-router-dom";
import eyeHero from "../../assets/Black Man With Eye Wide Opened 4.jpg.jpeg";
import logoSombre from "../../assets/logos/Gaia_logo_principal_declinaison_sur_fond_sombre@3x.png";

interface GaiaHeroProps {
  scrollY?: number;
}

export function GaiaHero({ scrollY: _scrollY = 0 }: GaiaHeroProps) {
  const navigate = useNavigate();

  return (
    <section className="gaia-hero gaia-hero--eye" id="accueil" aria-label="Section héros">

      {/* Logo — only visible here in the hero, not in the navbar */}
      <div className="hero-logo">
        <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
          <img src={logoSombre} alt="Gaïa Studio" />
        </a>
      </div>

      <div className="hero-bg-wrap" aria-hidden="true">
        <img src={eyeHero} alt="" className="hero-bg-img hero-bg-img--eye" />
        <div className="hero-bg-overlay hero-bg-overlay--eye" />
      </div>

      <div className="hero-eye-void" aria-hidden="true" />

      <div className="hero-eye-content reveal d1">
        <div className="hero-eye-text-block">

          <h1 className="hero-eye-h1">
            {/* PC: 3 lignes distinctes — Mobile: inline, wrapping naturel */}
            <span className="hero-h1-line">vos clients<span className="hero-h1-comma">,</span></span>
            <span className="hero-h1-line">vous jugent</span>
            {/* "en 07 secondes chrono." + sous-titre groupés pour alignement exact */}
            <span className="hero-h1-line">
              <span className="hero-chrono-group">
                <span>en <em>07</em> secondes chrono</span>
                <span className="hero-eye-sub" role="text" aria-label="que voient-ils ?">
                  {"que voient-ils ?".split("").map((char, i) => (
                    <span key={i} aria-hidden="true">{char === " " ? " " : char}</span>
                  ))}
                </span>
              </span>
            </span>
          </h1>

        </div>

        <div className="hero-ctas hero-eye-ctas">
          <button className="gaia-btn" onClick={() => navigate("/contact")}>
            Parlons en
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

    </section>
  );
}
