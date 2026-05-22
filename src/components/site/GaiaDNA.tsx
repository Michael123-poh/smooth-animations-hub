import React, { useEffect, useRef } from "react";
import ourDna from "../../assets/Our DNA.png";
import patternSombre from "../../assets/deco/Gaia_Decorative_Pattern_Fond_Sombre@3x.png";

export function GaiaDNA() {
  const patternRef  = useRef<HTMLDivElement>(null);
  const raf         = useRef<number>(0);
  const imgWrapRef  = useRef<HTMLDivElement>(null);
  const textColRef  = useRef<HTMLDivElement>(null);
  const statsRef    = useRef<HTMLDivElement>(null);
  const animatedRef = useRef(false);

  // Parallax pattern
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

  // Tap + content reveal animation
  useEffect(() => {
    const wrap    = imgWrapRef.current;
    const textCol = textColRef.current;
    const stats   = statsRef.current;
    if (!wrap || !textCol || !stats) return;

    // Hide all content at start
    textCol.style.opacity   = "0";
    textCol.style.transform = "translateY(16px)";
    textCol.style.transition = "none";

    stats.style.opacity   = "0";
    stats.style.transform = "translateY(16px)";
    stats.style.transition = "none";

    const target = wrap.closest("section") ?? wrap;

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animatedRef.current) return;
        animatedRef.current = true;

        // Step 1: wait for image to arrive (reveal-left = ~720ms)
        setTimeout(() => {
          // Step 2: tap press
          wrap.style.transition = "transform 0.12s cubic-bezier(0.4, 0, 0.2, 1)";
          wrap.style.transform  = "scale(0.94)";

          // Step 3: bounce release
          setTimeout(() => {
            wrap.style.transition = "transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)";
            wrap.style.transform  = "scale(1)";

            // Step 4: reveal text + stats after bounce
            setTimeout(() => {
              const revealTransition = "opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";

              textCol.style.transition = revealTransition;
              textCol.style.opacity    = "1";
              textCol.style.transform  = "translateY(0)";

              stats.style.transition = revealTransition;
              stats.style.opacity    = "1";
              stats.style.transform  = "translateY(0)";
            }, 300);
          }, 130);
        }, 900);
      },
      { threshold: 0.1 }
    );

    io.observe(target);
    return () => io.disconnect();
  }, []);

  const stats = [
    { num: "120+", label: ["PROJETS DE", "BRANDING"] },
    { num: "9/10",  label: ["CLIENTS", "SATISFAITS"] },
    { num: "6+",    label: ["ANNÉES", "D'EXPERTISE"] },
  ];

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

        {/* Left — DNA visual */}
        <div className="dna-visual reveal-left">
          <div
            ref={imgWrapRef}
            style={{ borderRadius: "20px 0 0 0", overflow: "hidden", transformOrigin: "center center" }}
          >
            <img
              src={ourDna}
              alt="Notre ADN — identité visuelle Gaïa"
              style={{ width: "100%", height: "auto", display: "block", objectFit: "contain", aspectRatio: "4/3" }}
            />
          </div>
        </div>

        {/* Right — text, hidden until tap */}
        <div ref={textColRef} className="dna-text-col">
          <div className="section-label">Notre ADN</div>
          <h2 className="dna-h2" id="dna-heading" style={{ marginBottom: 24 }}>
            Connecting<br />brands to people
          </h2>
          <p className="dna-body">
            Bien plus qu'un studio créatif, nous sommes des passionés, des créatifs qui se positionnent
            à l'intersection de l'humain et du design, nous transformons des idées en expériences
            mémorables. Notre spécialité réside dans la création de solutions visuelles sur-mesure,
            conçues pour capter l'attention de vos clients et construire un véritable lien émotionnel
            avec votre public.
          </p>
          <p className="dna-body">
            Chez Gaïa, nous croyons que chaque produit est conçu pour améliorer le quotidien, c'est
            pourquoi nous plaçons l'humain au cœur de notre processus créatif, afin de façonner une
            image qui parle à votre public. Pour nous, chaque projet est une occasion en or de{" "}
            <strong style={{ fontWeight: 700 }}>tisser un lien émotionnel entre votre marque et sa cible</strong>,
            nous appelons cela "Connecting Brands to People (B2P)."
          </p>
          <p className="dna-body">
            Toute notre expertise est dédiée à donner vie à des identités visuelles, des images de
            marque, des expériences utilisateur et des supports de communication qui propulseront vos
            idées vers les sommets. Chez Gaïa, chaque pixel, chaque ligne, chaque couleur est
            minutieusement pensé, rien n'est laissé au hasard. Oui, chaque détail compte. Nous sommes
            convaincus que vous ne cherchez pas l'ordinaire, vous visez l'exception.
          </p>
        </div>

        {/* Stats — appear after tap */}
        <div ref={statsRef} className="dna-stats-row">
          {stats.map((s) => (
            <div key={s.num} className="dna-stat">
              <div className="dna-stat-ring-wrap">
                <svg viewBox="0 0 190 190" aria-hidden="true">
                  <path d="M 70.28 171.08 A 80 80 0 0 1 16.75 78.37"  fill="none" stroke="var(--blue-navy)" strokeWidth="4.5" strokeLinecap="round"/>
                  <path d="M 41.47 35.55 A 80 80 0 0 1 148.53 35.55"  fill="none" stroke="var(--blue-navy)" strokeWidth="4.5" strokeLinecap="round"/>
                  <path d="M 173.25 78.37 A 80 80 0 0 1 119.72 171.08" fill="none" stroke="var(--blue-navy)" strokeWidth="4.5" strokeLinecap="round"/>
                </svg>
                <div className="dna-stat-inner">
                  <span className="dna-stat-num">{s.num}</span>
                  <div className="dna-stat-label">
                    {s.label.map((line, i) => (
                      <React.Fragment key={i}>
                        {line}{i < s.label.length - 1 && <br />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
