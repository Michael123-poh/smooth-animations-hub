import { useEffect, useRef } from "react";
import ourDna from "../../assets/Our DNA.png";
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
    return () => { cancelAnimationFrame(raf.current); };
  }, []);

  return (
    <section className="gaia-dna" id="adn" aria-label="Notre ADN">
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
        {/* Left — two text columns */}
        <div className="reveal-left">
          <div className="section-label">Notre ADN</div>
          <h2 className="dna-h2" id="dna-heading" style={{ marginBottom: 24 }}>
            Connecting<br />brands to people
          </h2>
          <div className="dna-cols-flex">
            <div style={{ flex: 1 }}>
              <p className="dna-body">
                Gaïa est née d'une conviction profonde :<br /> les marques camerounaises ont une histoire
                unique à raconter. Fondée à Douala, notre agence accompagne entrepreneurs et
                entreprises locales dans la construction d'identités visuelles qui résonnent avec
                authenticité et ambition.
              </p>
              <p className="dna-body">
                Nous ne créons pas seulement des logos. Nous bâtissons des ponts émotionnels entre
                votre marque etles gens qui comptent pour elle. Chaque projet est une graine que
                nous plantons avec soin, pour qu'elle grandisse et s'épanouisse.
              </p>
            </div>
            <div style={{ flex: 1 }}>
              <p className="dna-body">
                Nous sommes des passionnés qui transforment des idées en expériences mémorables —
                parce que votre histoire mérite d'être racontée avec authenticité et excellence.
              </p>
            </div>
          </div>
        </div>

        {/* Right — DNA visual */}
        <div className="dna-visual reveal-right d2">
          <div style={{ borderRadius: "20px 0 0 0", overflow: "hidden", position: "relative" }}>
            <img
              src={ourDna}
              alt="Notre ADN — identité visuelle Gaïa"
              style={{
                width: "100%",
                height: "auto",
                display: "block",
                objectFit: "contain",
                aspectRatio: "4/3",
              }}
            />
          </div>
        </div>

        {/* Stats — spans both columns */}
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
