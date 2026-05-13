import { useEffect, useRef } from "react";
import dnaVisual from "../../assets/deco/gaia_dna_visual.png";
import patternSombre from "../../assets/deco/Gaia_Decorative_Pattern_Fond_Sombre@3x.png";

export function GaiaDNA() {
  const patternRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);

  useEffect(() => {
    const section = patternRef.current?.closest("section");

    function tick() {
      if (patternRef.current && section) {
        const rect = section.getBoundingClientRect();
        const progress = -rect.top / window.innerHeight;
        patternRef.current.style.transform = `translateY(${progress * 30}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    }

    raf.current = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf.current);
    };
  }, []);

  return (
    <section className="gaia-dna" id="adn" aria-labelledby="dna-heading">
      {/* Decorative pattern overlay */}
      <div
        ref={patternRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${patternSombre})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
          mixBlendMode: "soft-light",
          pointerEvents: "none",
          willChange: "transform",
        }}
      />

      <div className="dna-grid" style={{ position: "relative", zIndex: 1 }}>
        {/* Left — story text */}
        <div className="reveal-left">
          <div className="section-label">Notre ADN</div>

          <h2 className="dna-h2" id="dna-heading">
            Nous transformons<br />des idées en <span style={{ color: "var(--orange)" }}>expériences</span><br />
            <span style={{ color: "var(--orange)" }}>mémorables</span>
          </h2>

          <p className="dna-body">
            Gaïa est née d'une conviction profonde : les marques camerounaises ont une histoire
            unique à raconter. Fondée à Douala, notre agence accompagne entrepreneurs et
            entreprises locales dans la construction d'identités visuelles qui résonnent avec
            authenticité et ambition.
          </p>

          <p className="dna-body">
            Nous ne créons pas seulement des logos. Nous bâtissons des ponts émotionnels entre
            votre marque et les gens qui comptent pour elle. Chaque projet est une graine que
            nous plantons avec soin, pour qu'elle grandisse et s'épanouisse.
          </p>

          <blockquote className="dna-quote">
            <p>
              "Nous sommes des passionnés qui transforment des idées en expériences mémorables —
              parce que votre histoire mérite d'être racontée avec excellence."
            </p>
          </blockquote>

        </div>

        {/* Right — studio photo avec effet glassmorphic */}
        <div className="dna-visual reveal-right d2" style={{ position: "relative", width: "100%", maxWidth: 400, margin: "0 auto" }}>
          
          <div
            style={{
              borderRadius: 24,
              overflow: "hidden",
              position: "relative",
            }}
          >
            <img
              src={dnaVisual}
              alt="Création d'identité visuelle Gaïa - brand book et logos"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "cover",
                aspectRatio: "4/3",
              }}
            />
            {/* Overlay dégradé */}
            <div
              aria-hidden="true"
              style={{
                position: "absolute",
                bottom: 0,
                left: 0,
                right: 0,
                height: "40%",
                background: "linear-gradient(to top, rgba(11,46,89,0.8) 0%, transparent 100%)",
              }}
            />
          </div>


        </div>

        {/* Stats — direct child of grid so order works on mobile */}
        <div className="dna-stats-row reveal d2">
          <div className="dna-stat">
            <span className="dna-stat-num">120+</span>
            <div className="dna-stat-label">Identités créées</div>
          </div>
          <div className="dna-stat">
            <span className="dna-stat-num">98%</span>
            <div className="dna-stat-label">Clients satisfaits</div>
          </div>
          <div className="dna-stat">
            <span className="dna-stat-num">6 ans</span>
            <div className="dna-stat-label">D'expertise</div>
          </div>
        </div>
      </div>
    </section>
  );
}
