import { Shield, Sparkles, Heart, Users } from "./Shared";

const PILLARS = [
  { 
    icon: <Sparkles size={24} />, 
    title: "Excellence", 
    text: "Savoir-faire et quête perpétuelle de perfection.",
    color: "var(--orange)"
  },
  { 
    icon: <Shield size={24} />, 
    title: "Engagement", 
    text: "Votre vision devient notre unique mission.",
    color: "#4285f4" 
  },
  { 
    icon: <Users size={24} />, 
    title: "Convivialité", 
    text: "L'humain placé au centre de chaque échange.",
    color: "#34a853"
  },
  { 
    icon: <Heart size={24} />, 
    title: "Transparence", 
    text: "Une relation de confiance claire et durable.",
    color: "#ea4335"
  }
];

export const PillarsSection = () => {
  return (
    <section className="testi-section" style={{ background: 'var(--navy)', paddingTop: '120px', paddingBottom: '120px' }}>
      <div className="testi-wrap" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '32px' }}>
        <div style={{ gridColumn: '1 / -1', marginBottom: '60px' }}>
          <h2 className="reveal" style={{ fontSize: 'clamp(32px, 4vw, 56px)', fontWeight: 900, textAlign: 'center' }}>
            Nos Piliers Fondateurs
          </h2>
          <p className="reveal d1" style={{ textAlign: 'center', color: 'var(--muted)', marginTop: '16px', fontSize: '18px' }}>
            Des valeurs fortes qui façonnent notre art de vivre.
          </p>
        </div>
        
        {PILLARS.map((p, i) => (
          <div key={i} className={`reveal d${i + 1}`} style={{ 
            background: 'rgba(255, 255, 255, 0.02)', 
            border: '1px solid rgba(255,255,255,0.05)',
            borderRadius: '24px', 
            padding: '40px',
            textAlign: 'center',
            transition: 'all 0.4s ease',
            cursor: 'default'
          }}>
            <div style={{ 
              width: '60px', 
              height: '60px', 
              borderRadius: '16px', 
              background: 'rgba(255, 255, 255, 0.03)', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              margin: '0 auto 24px',
              color: p.color
            }}>
              {p.icon}
            </div>
            <h3 style={{ fontSize: '20px', fontWeight: 800, marginBottom: '12px' }}>{p.title}</h3>
            <p style={{ color: 'var(--muted)', fontSize: '15px', lineHeight: 1.6 }}>{p.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
