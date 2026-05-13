import { useNavigate } from "react-router-dom";
import eyeHero from "../../assets/Black Man With Eye Wide Opened 4.jpg.jpeg";

interface GaiaHeroProps {
  scrollY?: number;
}

export function GaiaHero({ scrollY: _scrollY = 0 }: GaiaHeroProps) {
  const navigate = useNavigate();

  return (
    <section className="gaia-hero gaia-hero--eye" id="accueil" aria-label="Section héros">

      {/* ── IMAGE DE FOND — œil fixe, pas de parallax ── */}
      <div className="hero-bg-wrap" aria-hidden="true">
        <img
          src={eyeHero}
          alt=""
          className="hero-bg-img hero-bg-img--eye"
        />
        <div className="hero-bg-overlay hero-bg-overlay--eye" />
      </div>

      {/* Vide contrôlé en haut — repousse le texte vers le bas */}
      <div className="hero-eye-void" aria-hidden="true" />

      {/* ── CONTENU centré ── */}
      <div className="hero-eye-content reveal d1">
        {/* Bloc inline-block : sa largeur = la ligne h1 la plus longue.
            "que voient-ils ?" s'étire exactement sur cette même largeur. */}
        <div className="hero-eye-text-block">
          <h1 className="hero-eye-h1">
            vos clients vous jugent<br />
            en <em>07</em> secondes chrono
          </h1>
          <p className="hero-eye-sub" role="text" aria-label="que voient-ils ?">
            {"que voient-ils ?".split("").map((char, i) => (
              <span key={i} aria-hidden="true">{char === " " ? " " : char}</span>
            ))}
          </p>
        </div>
        <div className="hero-ctas hero-eye-ctas">
          <button className="gaia-btn" onClick={() => navigate("/contact")}>
            Discutons de votre projet
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

    </section>
  );
}
