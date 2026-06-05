import { useEffect, useRef, useState } from "react";
import ourGarden from "../../assets/Our Garden.jpg";

const services = [
  {
    title: "Stratégie de marque",
    points: [
      "Audit de votre positionnement actuel",
      "Clarification de votre promesse de marque",
      "Définition de votre audience et de vos objectifs",
      "Angle de différenciation clair face au marché",
    ],
  },
  {
    title: "Identité & Image de marque",
    points: [
      "Direction artistique sur mesure",
      "Indentité visuelle cohérente",
      "Charte graphique 360°",
    ],
  },
  {
    title: "Expression de la marque",
    points: [
      "Ton de voix adapté à votre public",
      "Storytelling aligné avec votre positionnement",
      "Stratégie de communication",
    ],
  },
  {
    title: "Supports de communication",
    points: [
      "Papeterie",
      "Supports publicitaires",
      "Signalétique",
      "Goodies",
      "Packaging produit",
      "Contenu digital",
      "Webdesign",
    ],
  },
];

export function GaiaServices() {
  const imgGrayRef   = useRef<HTMLImageElement>(null); // calque gris (dessous)
  const imgColorRef  = useRef<HTMLImageElement>(null); // calque couleur (dessus, masqué)
  const animatedRef  = useRef(false);
  const [openService, setOpenService] = useState<number | null>(null);

  useEffect(() => {
    const gray  = imgGrayRef.current;
    const color = imgColorRef.current;
    if (!gray || !color) return;

    // Départ : calque couleur masqué à 0% (invisible)
    (color.style as unknown as Record<string, string>)["webkitMaskImage"] =
    color.style.maskImage = "radial-gradient(circle at 42% 28%, black 0%, transparent 0%)";
    color.style.transition = "none";

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animatedRef.current) return;
        animatedRef.current = true;

        // Séquence de clignotements sur le calque gris (opacité)
        const flickers: { opacity: string; delay: number }[] = [
          { opacity: "0.3", delay: 400  },
          { opacity: "1",   delay: 520  },
          { opacity: "0.2", delay: 680  },
          { opacity: "1",   delay: 760  },
          { opacity: "0.4", delay: 900  },
          { opacity: "1",   delay: 960  },
          { opacity: "0.1", delay: 1100 },
          { opacity: "1",   delay: 1160 },
          { opacity: "0.3", delay: 1280 },
          { opacity: "1",   delay: 1340 },
        ];

        flickers.forEach(({ opacity, delay }) => {
          setTimeout(() => {
            if (gray) {
              gray.style.transition = "opacity 0.07s ease";
              gray.style.opacity = opacity;
            }
          }, delay);
        });

        // Après les clignotements : révéler la couleur depuis l'ampoule (42% 28%)
        setTimeout(() => {
          // Masquer le gris
          if (gray) {
            gray.style.transition = "opacity 0.2s ease";
            gray.style.opacity    = "0";
          }
          // Révéler la couleur avec un radial qui s'étend depuis l'ampoule
          if (color) {
            color.style.transition = "none";
            // Animer via keyframes custom avec rAF
            const start = performance.now();
            const duration = 1200;
            function expand(now: number) {
              const t = Math.min((now - start) / duration, 1);
              // Easing ease-out
              const e = 1 - Math.pow(1 - t, 3);
              const pct = Math.round(e * 160); // 0% → 160%
              (color!.style as unknown as Record<string, string>)["webkitMaskImage"] =
              color!.style.maskImage = `radial-gradient(circle at 42% 28%, black ${pct}%, transparent ${pct + 20}%)`;
              if (t < 1) requestAnimationFrame(expand);
            }
            requestAnimationFrame(expand);
          }
        }, 1600);
      },
      { threshold: 0.2 }
    );

    io.observe(gray);
    return () => io.disconnect();
  }, []);

  return (
    <section className="gaia-services" id="services" aria-labelledby="services-heading">

      <div className="services-intro-wrap">
        <div className="services-intro">
          <span className="services-intro-l1"><strong>Chez Gaïa nous transformons</strong></span>
          <span className="services-intro-l2"><strong>chaque idée en une marque</strong></span>
          <span className="services-intro-l3"><strong className="services-intro-orange">forte et engageante</strong></span>
        </div>
      </div>

      <div className="services-main">

        <div className="services-card-left">
          {/* Conteneur relatif pour superposer les deux calques */}
          <div className="services-img-stack">
            {/* Calque gris — dessous */}
            <img
              ref={imgGrayRef}
              src={ourGarden}
              alt=""
              aria-hidden="true"
              className="services-card-img services-img-gray"
            />
            {/* Calque couleur — dessus, révélé par masque */}
            <img
              ref={imgColorRef}
              src={ourGarden}
              alt=""
              aria-hidden="true"
              className="services-card-img services-img-color"
            />
          </div>
          <div className="services-card-content">
            <span className="services-card-label">Notre Jardin</span>
            <h2 className="services-card-h2" id="services-heading">
              Ce que nous<br />créons pour vous
            </h2>
          </div>
        </div>

        <div className="services-list-col">
          {services.map((service, i) => (
            <div key={i} className={`services-list-item${openService === i ? " is-open" : ""}`}>
              <span className="services-list-copy">
                <span 
                  className="services-list-name"
                  onClick={() => setOpenService(openService === i ? null : i)}
                >
                  {service.title}
                </span>
                <span className="services-list-desc" id={`service-panel-${i}`}>
                  {service.points.map((point) => (
                    <span key={point} className="services-list-point">{point}</span>
                  ))}
                </span>
              </span>
              <button
                type="button"
                className="services-list-arrow"
                aria-label={`${openService === i ? "Refermer" : "Ouvrir"} ${service.title}`}
                aria-expanded={openService === i}
                aria-controls={`service-panel-${i}`}
                onClick={() => setOpenService(openService === i ? null : i)}
              >
                ›
              </button>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
