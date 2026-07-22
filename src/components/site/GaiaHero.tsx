import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import eyeHero from "../../assets/Black Man With Eye Wide Opened 4.jpg.jpeg";
import eyeVideo from "../../assets/hero-eye.mp4";
import logoSombre from "../../assets/logos/Gaia_logo_principal_declinaison_sur_fond_sombre@3x.png";

interface GaiaHeroProps {
  scrollY?: number;
}

export function GaiaHero({ scrollY: _scrollY = 0 }: GaiaHeroProps) {
  const navigate = useNavigate();
  const videoRef = useRef<HTMLVideoElement>(null);

  // Lecture unique : l'œil s'ouvre puis se fige sur l'image « Brand » (œil ouvert)
  // La vidéo dure ~5,1 s (ouvre → Brand → se referme) ; on l'arrête à l'ouverture.
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const FREEZE_AT = 2.0; // instant où l'œil est ouvert sur « Brand »
    let frozen = false;

    function checkFreeze() {
      if (!video || frozen) return;
      if (video.currentTime >= FREEZE_AT) {
        frozen = true;
        video.pause();
        video.currentTime = FREEZE_AT;
      }
    }

    video.addEventListener("timeupdate", checkFreeze);
    // Autoplay (certains navigateurs exigent un appel explicite)
    video.play().catch(() => {});

    return () => video.removeEventListener("timeupdate", checkFreeze);
  }, []);

  return (
    <section className="gaia-hero gaia-hero--eye" id="accueil" aria-label="Section héros">

      <div className="hero-logo">
        <a href="/" onClick={(e) => { e.preventDefault(); navigate("/"); }}>
          <img src={logoSombre} alt="Gaïa Studio" />
        </a>
      </div>

      <div className="hero-bg-wrap" aria-hidden="true">
        <video
          ref={videoRef}
          className="hero-bg-img hero-bg-img--eye"
          src={eyeVideo}
          poster={eyeHero}
          autoPlay
          muted
          playsInline
          preload="auto"
        />
        <div className="hero-bg-overlay hero-bg-overlay--eye" />
      </div>

      {/* Contenu — ancré en bas à gauche, aligné sur la maquette */}
      <div className="hero-eye-void" aria-hidden="true" />
      <div className="hero-eye-content reveal d1">
        <h1 className="hero-eye-h1">
          <span className="hero-h1-line">Vos clients</span>
          <span className="hero-h1-line">vous jugent</span>
          <span className="hero-h1-line">en <em>07</em>s chrono.</span>
          <span className="hero-h1-line hero-h1-line--accent">Que voient-ils&#8202;?</span>
        </h1>

        <p className="hero-eye-lead">
          Une marque qui inspire confiance ou une entreprise qui se fond<br />
          dans la masse&#8202;? Derrière chaque entreprise se cache un potentiel<br />
          inexploité&nbsp;; et grâce à une stratégie de marque, une identité visuelle<br />
          forte et un branding cohérent, nous révélons ce potentiel pour faire<br />
          de votre entreprise une marque reconnue, choisie et recommandée.
        </p>

        <div className="hero-eye-ctas">
          <button className="gaia-btn hero-cta-primary" onClick={() => navigate("/contact")}>
            Parlons de votre projet
          </button>
          <button className="gaia-btn gaia-btn-ghost hero-cta-ghost" onClick={() => navigate("/portfolio")}>
            Découvrir nos récoltes
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M3.5 10.5L10.5 3.5M5 3.5h5.5V9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>
      <div className="hero-eye-void-bottom" aria-hidden="true" />

    </section>
  );
}
