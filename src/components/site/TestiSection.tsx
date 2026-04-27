import { useState } from "react";
import { ChevronLeft, ChevronRight } from "./Shared";

const TESTIMONIALS = [
  { text: "Gaïa a su capturer l'essence de notre vision pour en faire une réalité digitale. Notre marque a aujourd'hui une résonance que nous n'aurions jamais imaginée.", name: "Christian T.", role: "Manager, Gaïa Africa", co: "GAÏA", init: "CT" },
  { text: "Un accompagnement exceptionnel et une équipe qui comprend réellement les enjeux du 'Made in Africa'. Le résultat dépasse nos attentes les plus folles.", name: "Nathalie B.", role: "Co-fondatrice, SweePay", co: "SWEEP", init: "NB" },
  { text: "La transition vers notre nouvelle identité a été fluide. Aujourd'hui, notre site web est notre meilleur atout commercial auprès des investisseurs.", name: "Marc K.", role: "CTO, Tobiko Research", co: "TOB", init: "MK" },
];
const LOGOS = ["AFRIPAY", "SWEEP", "TOBIKO", "LUMEN", "TECH-IV", "CAMTOUR", "ENVIRO", "B-TRANS", "GA\u00CFA", "BMH"];

export const TestiSection = () => {
  const [tIdx, setTIdx] = useState(0);

  return (
    <section className="testi-section" style={{ background: 'var(--navy2)' }}>
      <h2 className="testi-title reveal">Ils nous font confiance</h2>
      <div className="testi-wrap">
        <div className="testi-card reveal" style={{ background: 'rgba(255, 255, 255, 0.03)', borderColor: 'rgba(255, 130, 32, 0.2)' }}>
          <div className="t-quot" style={{ color: 'var(--orange)' }}>"</div>
          <p className="t-text">{TESTIMONIALS[tIdx].text}</p>
          <div className="t-author">
            <div className="t-av" style={{ background: 'linear-gradient(135deg, var(--navy), var(--orange))' }}>{TESTIMONIALS[tIdx].init}</div>
            <div>
              <div className="t-name">{TESTIMONIALS[tIdx].name}</div>
              <div className="testi-role" style={{ color: 'var(--muted)' }}>{TESTIMONIALS[tIdx].role}</div>
            </div>
            <div className="t-co" style={{ color: 'var(--orange)', opacity: 0.8 }}>{TESTIMONIALS[tIdx].co}</div>
          </div>
          <div className="t-arrows">
            <button className="t-arr" onClick={() => setTIdx(p => (p - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}>
              <ChevronLeft size={18} />
            </button>
            <button className="t-arr" onClick={() => setTIdx(p => (p + 1) % TESTIMONIALS.length)}>
              <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
      <div className="t-dots">
        {TESTIMONIALS.map((_, i) => (
          <div key={i} className="t-dot" onClick={() => setTIdx(i)}
            style={{ background: i === tIdx ? "var(--orange)" : "rgba(255,255,255,.1)" }} />
        ))}
      </div>
      <div className="ls-strip" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <div className="ls-track">
          {[...LOGOS, ...LOGOS].map((l, i) => <div key={i} className="ls-logo" style={{ color: 'rgba(255,255,255,0.3)' }}>{l}</div>)}
        </div>
      </div>
    </section>
  );
};
