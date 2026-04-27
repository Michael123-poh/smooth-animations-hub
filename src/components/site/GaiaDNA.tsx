import { useEffect, useRef } from "react";
import dnaVisual from "../../assets/deco/gaia_dna_visual.png";
import patternSombre from "../../assets/deco/Gaia_Decorative_Pattern_Fond_Sombre@3x.png";

export function GaiaDNA() {
  const patternRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);

  useEffect(() => {
    let lastY = 0;
    const section = patternRef.current?.closest("section");

    function onScroll() {
      lastY = window.scrollY;
    }

    function tick() {
      if (patternRef.current && section) {
        const rect = section.getBoundingClientRect();
        const progress = -rect.top / window.innerHeight;
        patternRef.current.style.transform = `translateY(${progress * 30}px)`;
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
          <span className="dna-tag">Notre ADN</span>

          <h2 className="dna-h2" id="dna-heading">
            Nous transformons<br />des idées en<br />
            <span style={{ color: "var(--orange)" }}>expériences mémorables</span>
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

        {/* Right — studio photo avec effet glassmorphic */}
        <div className="dna-visual reveal-right d2" style={{ position: "relative", width: "100%", maxWidth: 480, margin: "0 auto" }}>
          
          <div
            style={{
              borderRadius: 24,
              overflow: "hidden",
              boxShadow: "0 40px 100px rgba(11,25,41,0.6), 0 0 0 1px rgba(255,255,255,0.07)",
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

          {/* Floating label Douala, Cameroun */}
          <div
            className="float-bob"
            style={{
              position: "absolute",
              bottom: "-20px",
              left: "50%",
              transform: "translateX(-50%)",
              background: "rgba(255,255,255,0.07)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: 12,
              padding: "16px 24px",
              backdropFilter: "blur(12px)",
              WebkitBackdropFilter: "blur(12px)",
              textAlign: "center",
              whiteSpace: "nowrap",
              boxShadow: "0 20px 40px rgba(0,0,0,0.3)",
              zIndex: 10,
            }}
          >
            <div
              style={{
                fontFamily: "'Plus Jakarta Sans', sans-serif",
                fontSize: 22,
                fontWeight: 800,
                color: "var(--orange)",
                letterSpacing: "-0.5px",
              }}
            >
              Douala, Cameroun
            </div>
            <div style={{ fontSize: 12, color: "rgba(255,255,255,0.6)", marginTop: 4, fontWeight: 500 }}>
              Agence de branding & design
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
