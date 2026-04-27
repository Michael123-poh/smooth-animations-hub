import { useEffect, useRef, useState } from "react";
import { CreativeLight, Check } from "./Shared";

interface BlueprintSectionProps {
  scrollY: number;
}

const STEPS = [
  { num: "01", title: "Cœur Stratégique", items: ["Aligner votre vision avec celle du public", "Définir un territoire d'expression unique"] },
  { num: "02", title: "Design d'Inspiration", items: ["Façonner une esthétique mémorable", "Visualiser la valeur de vos solutions"] },
  { num: "03", title: "Résonance Digitale", items: ["Technologie fluide et interactions vivantes", "Incarner votre marque sur tous supports"] },
];

export const BlueprintSection = ({ scrollY }: BlueprintSectionProps) => {
  const bpRef = useRef<HTMLElement>(null);
  const [bpProg, setBpProg] = useState(0);

  useEffect(() => {
    const el = bpRef.current;
    if (!el) return;
    const winH = window.innerHeight;
    const start = el.offsetTop;
    const total = el.offsetHeight - winH;
    const prog = Math.max(0, Math.min(1, (scrollY - start) / total));
    setBpProg(prog);
  }, [scrollY]);

  const phase = bpProg < 0.12 ? 0 : bpProg < 0.4 ? 1 : bpProg < 0.7 ? 2 : 3;
  const activeStep = bpProg < 0.38 ? 0 : bpProg < 0.68 ? 1 : 2;

  return (
    <section className="blueprint-section" ref={bpRef} style={{ 
      background: 'var(--navy2)',
      paddingTop: '100px'
    }}>
      <div className="blueprint-sticky">
        <div className="bp-left">
          <div className="bp-subgrid" />
          <div className="rocket-stage">
            <CreativeLight phase={phase} />
          </div>
        </div>
        <div className="bp-right">
          <div className="bp-eyebrow" style={{ color: 'var(--orange)', letterSpacing: '4px' }}>NOTRE RECETTE</div>
          {STEPS.map((s, i) => (
            <div key={i} className={`bp-step ${activeStep === i ? "on" : ""}`} style={{ marginBottom: '60px' }}>
              <div className="bp-num" style={{ color: 'white', marginBottom: '8px' }}>
                <span className="dim" style={{ opacity: 0.15 }}>{s.num}.</span>
              </div>
              <div className="bp-title" style={{ fontSize: 'clamp(24px, 3vw, 40px)' }}>{s.title}</div>
              <ul className="bp-items" style={{ marginTop: '16px' }}>
                {s.items.map(it => (
                  <li key={it} style={{ fontSize: '16px', color: 'rgba(255,255,255,0.5)' }}>
                    <span className="chk" style={{ color: 'var(--orange)', display: 'flex', alignItems: 'center' }}>
                      <Check size={14} strokeWidth={3} />
                    </span>
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
