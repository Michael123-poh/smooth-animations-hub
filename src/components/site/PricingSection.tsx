import { Zap, Check } from "./Shared";

const PRICE_FEATURES = [
  { plus: false, text: "Audit stratégique & Alignement de vision" },
  { plus: false, text: "Design UX/UI haute-fidélité (6\u201310 pages)" },
  { plus: false, text: "Iconographie & Visualisations 3D sur-mesure" },
  { plus: false, text: "Développement Webflow optimisé & scalable" },
  { plus: false, text: "Transitions fluides & Animations immersives" },
  { plus: false, text: "Intégration d'outils tiers & Configuration DNS" },
  { plus: false, text: "Optimisation SEO & Performance technique" },
  { plus: false, text: "Support technique & maintenance (3 mois)" },
  { plus: true, text: "Stratégie de contenu & Copywriting", addon: "Option" },
  { plus: true, text: "Campagne de lancement digitale", addon: "Option" },
];

export const PricingSection = () => {
  return (
    <section className="pricing-section" style={{ background: 'var(--navy)' }}>
      <div className="pricing-bg" style={{ background: 'radial-gradient(ellipse 100% 70% at 50% 0%, #1a3080 0%, #0b1640 65%)' }} />
      <div style={{ position: "absolute", bottom: "-60px", left: "50%", transform: "translateX(-50%)", width: "130%", height: "280px", background: "linear-gradient(to bottom,rgba(245, 130, 32, 0.08),transparent)", borderRadius: "50% 50% 0 0", filter: "blur(30px)", pointerEvents: "none" }} />
      <div className="price-card reveal">
        <div className="price-top" style={{ background: 'linear-gradient(135deg, #fff5ec, #ffe8d5)', color: '#d66d10' }}>
          Formule <strong>Lancement Accéléré</strong>
        </div>
        <div className="price-body">
          <div className="price-head">
            <span className="price-icon" style={{ color: 'var(--orange)', display: 'flex', alignItems: 'center' }}><Zap size={38} /></span>
            <h2 style={{ color: 'var(--navy)' }}>Expertise<br />360 Degrés</h2>
          </div>
          <p className="price-desc" style={{ color: '#556688' }}>Un processus de 8 semaines pour bâtir une présence digitale d'élite qui prouve votre autorité sur le marché.</p>
          <div className="price-hr" style={{ background: '#f5e0cf' }} />
          {PRICE_FEATURES.map((f, i) => (
            <div key={i} className="pf" style={{ color: '#334466' }}>
              <span className={`ic ${f.plus ? "pl" : "ck"}`} style={{ color: f.plus ? '#22cc88' : 'var(--orange)', display: 'flex', alignItems: 'center', marginTop: '2px' }}>
                {f.plus ? <span style={{ fontWeight: 900 }}>+</span> : <Check size={14} strokeWidth={3} />}
              </span>
              <span>{f.text}{f.addon && <span className="addon" style={{ background: '#fff0e5', color: '#d66d10' }}>{f.addon}</span>}</span>
            </div>
          ))}
          <button className="btn-y price-cta" style={{ background: 'var(--orange)', color: 'white' }}>
            Démarrer votre projet
          </button>
        </div>
      </div>
    </section>
  );
};
