import { useEffect, useRef } from "react";
import thumbUp from "../../assets/thumb_up.jpg";
import iconExcellence from "../../assets/badge_icon_1.svg";
import iconEngagement from "../../assets/shaking_hand_icon_2.svg";
import iconConvivialite from "../../assets/people_arrows_icon_3.svg";
import iconTransparence from "../../assets/messages_icon_4.svg";

const pillars = [
  {
    title: "Excellence",
    icon: iconExcellence,
    desc: "Comme la nature qui façonne ses œuvres avec patience et harmonie, nous portons une attention minutieuse à chaque détail. Tout est pensé avec soin pour donner naissance à des créations authentiques et abouties.",
  },
  {
    title: "Engagement",
    icon: iconEngagement,
    desc: "Nous sommes pleinement investis dans chaque projet, avec un souci constant de répondre aux attentes de nos clients et d'aller au-delà de leurs exigences. Chaque mission est une promesse que nous tenons avec passion et détermination.",
  },
  {
    title: "Convivialité",
    icon: iconConvivialite,
    desc: "Le travail créatif est avant tout une collaboration. Nous valorisons une approche humaine, ouverte et chaleureuse, où la confiance et l'échange sont au cœur de chaque interaction avec nos clients et partenaires.",
  },
  {
    title: "Transparence",
    icon: iconTransparence,
    desc: "Nous sommes pleinement investis dans chaque projet, avec un souci constant de répondre aux attentes de nos clients et d'aller au-delà de leurs exigences. Chaque mission est une promesse que nous tenons avec passion et détermination.",
  },
];

export function GaiaPillars() {
  const imgRef      = useRef<HTMLImageElement>(null);
  const textRef     = useRef<HTMLDivElement>(null);
  const sectionRef  = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const img     = imgRef.current;
    const text    = textRef.current;
    const section = sectionRef.current;
    if (!img || !text || !section) return;

    // Image starts off-screen to the right, text hidden
    img.style.transform  = "translateX(-100%)";
    img.style.transition = "none";
    text.style.opacity   = "0";
    text.style.transform = "translateY(14px)";
    text.style.transition = "none";

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animatedRef.current) return;
        animatedRef.current = true;

        // Image slides in from the left
        img.style.transition = "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)";
        img.style.transform  = "translateX(0)";

        // Text appears after image lands
        setTimeout(() => {
          text.style.transition = "opacity 0.6s ease, transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)";
          text.style.opacity    = "1";
          text.style.transform  = "translateY(0)";
        }, 900);
      },
      { threshold: 0.15 }
    );

    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="gaia-pillars" id="valeurs" aria-labelledby="pillars-heading">

      <div className="pillars-hero">
        <img ref={imgRef} src={thumbUp} alt="" aria-hidden="true" className="pillars-hero-img" />
        <div ref={textRef} className="pillars-hero-text">
          <div className="section-label">Nos Valeurs</div>
          <h2 className="gaia-h2" id="pillars-heading">
            Ce en quoi nous<br />croyons profondément
          </h2>
        </div>
      </div>

      <div className="pillars-grid">
        {pillars.map((p, i) => (
          <div key={p.title} className={`pillar-card reveal d${i + 1}`}>
            <div className="pillar-icon-wrap" aria-hidden="true">
              <img src={p.icon} alt="" style={{ width: 48, height: 48, objectFit: "contain" }} />
            </div>
            <h3 className="pillar-title">{p.title}</h3>
            <p className="pillar-desc">{p.desc}</p>
          </div>
        ))}
      </div>

    </section>
  );
}
