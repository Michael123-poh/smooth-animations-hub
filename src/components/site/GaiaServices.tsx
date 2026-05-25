import { useEffect, useRef } from "react";
import ourGarden from "../../assets/Our Garden.jpg";

const services = [
  "Stratégie de marque",
  "Identité & Image de marque",
  "Expression de la marque",
  "Supports de communication",
];

export function GaiaServices() {
  const imgGrayRef   = useRef<HTMLImageElement>(null); // calque gris (dessous)
  const imgColorRef  = useRef<HTMLImageElement>(null); // calque couleur (dessus, masqué)
  const animatedRef  = useRef(false);

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
          <span className="services-intro-l1">Derrière chaque marque se cache une histoire,</span>
          <span className="services-intro-l2">
            et <strong>chez Gaïa</strong> <strong>nous la transformons en</strong>{" "}
            <strong className="services-intro-orange">une identité forte.</strong>
          </span>
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
            <div key={i} className="services-list-item">
              <span className="services-list-name">{service}</span>
              <span className="services-list-arrow" aria-hidden="true">›</span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
