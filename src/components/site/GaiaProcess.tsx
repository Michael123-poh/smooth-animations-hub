import { useEffect, useRef } from "react";
import bulbImg from "../../assets/bulb.png";
import fingerImg from "../../assets/finger.png";
import iconHuman from "../../assets/head_with_hearth_icon_5.svg";
import iconCustom from "../../assets/hands_with_person_in_middle_icon_6.svg";
import iconExpert from "../../assets/people_arrows_icon_3.svg";

const steps = [
  {
    icon: iconHuman,
    title: "Approche centrée sur l'humain",
    desc: <>Nous plaçons <strong>vos besoins</strong> et ceux de vos clients au cœur de notre démarche créative.</>,
  },
  {
    icon: iconCustom,
    title: "Accompagnement sur-mesure",
    desc: "Chaque projet est unique et nous nous engageons à vous proposer des solutions personnalisées adaptées à vos enjeux.",
  },
  {
    icon: iconExpert,
    title: "Expertise éprouvée",
    desc: <>Nous avons déjà accompagné de nombreuses entreprises dans la création de solutions visuelles percutantes. <strong>Plus de 100 projets</strong> menés à terme à ce jour.</>,
  },
];

export function GaiaProcess() {
  const sectionRef  = useRef<HTMLElement>(null);
  const bulbRef     = useRef<HTMLImageElement>(null);
  const fingerRef   = useRef<HTMLImageElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const bulb    = bulbRef.current;
    const finger  = fingerRef.current;
    if (!section || !bulb || !finger) return;

    // Hidden at start — bulb above, finger below — clipped by overflow:hidden wrapper
    bulb.style.transform   = "translateY(-100%)";
    finger.style.transform = "translateY(110%)";

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animatedRef.current) return;
        animatedRef.current = true;

        bulb.style.transition   = "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1)";
        bulb.style.transform    = "translateY(0)";

        finger.style.transition = "transform 1.2s cubic-bezier(0.22, 1, 0.36, 1) 0.1s";
        finger.style.transform  = "translateY(0)";
      },
      { threshold: 0.15 }
    );
    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="gaia-process" id="processus" aria-labelledby="process-heading">

      <div className="process-inner">

        {/* Colonne gauche : header + steps */}
        <div className="process-left">
          <div className="section-header">
            <div className="section-label">Notre Recette</div>
            <div>
              <h2 className="gaia-h2" id="process-heading">
                Les ingrédients<br />de nos succès
              </h2>
            </div>
          </div>

          <div className="process-steps-col">
            {steps.map((s, i) => (
              <div key={i} className={`process-step-card reveal d${i + 1}`}>
                <div className="process-step-icon">
                  <img src={s.icon} alt="" style={{ width: 62, height: 62, objectFit: "contain" }} />
                </div>
                <div className="process-step-body">
                  <h3 className="process-step-title">{s.title}</h3>
                  <p className="process-step-desc">{s.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Colonne droite : bulb (clippe par le haut) + finger (clippé par le bas) */}
        <div className="process-right" aria-hidden="true">
          {/* Wrapper bulb : clip overflow top */}
          <div className="process-bulb-clip">
            <img ref={bulbRef} src={bulbImg} alt="" className="process-bulb" />
          </div>
          {/* Wrapper finger : clip overflow bottom */}
          <div className="process-finger-clip">
            <img ref={fingerRef} src={fingerImg} alt="" className="process-finger" />
          </div>
        </div>

      </div>
    </section>
  );
}
