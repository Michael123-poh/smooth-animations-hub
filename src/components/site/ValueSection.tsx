import { Palette, Monitor, Zap } from "./Shared";

export const ValueSection = () => {
  return (
    <section className="value-section" style={{ background: 'var(--white)', padding: '160px 148px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="v-title reveal" style={{ 
          color: "var(--navy)", 
          textAlign: 'left', 
          fontSize: 'clamp(40px, 6vw, 90px)', 
          lineHeight: 0.9,
          letterSpacing: '-2px',
          marginBottom: '80px'
        }}>
          L'expertise Gaïa<br />
          <span style={{ color: 'var(--orange)' }}>sans compromis.</span>
        </h2>
        
        <div className="v-cards" style={{ background: 'transparent', boxShadow: 'none', gap: '60px' }}>
          {[
            { 
              icon: <Palette size={40} />, 
              title: "Branding", 
              text: "Façonner des territoires uniques qui incarnent votre essence." 
            },
            { 
              icon: <Monitor size={40} />, 
              title: "Digital", 
              text: "Interfaces mémorables pour transformer chaque interaction." 
            },
            { 
              icon: <Zap size={40} />, 
              title: "Impact", 
              text: "Des supports qui marquent les esprits avec intention." 
            },
          ].map((c, i) => (
            <div key={i} className={`reveal d${i + 1}`} style={{ 
              padding: '0',
              border: 'none',
              textAlign: 'left'
            }}>
              <div className="vc-icon" style={{ color: 'var(--orange)', marginBottom: '32px' }}>{c.icon}</div>
              <div className="vc-title" style={{ fontSize: '24px', fontWeight: 900, marginBottom: '16px' }}>{c.title}</div>
              <div className="vc-text" style={{ fontSize: '17px', color: '#556688', lineHeight: 1.5, maxWidth: '280px' }}>{c.text}</div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Visual Link Element */}
      <div style={{ 
        height: '1px', 
        width: '100%', 
        background: 'linear-gradient(to right, transparent, var(--orange), transparent)',
        marginTop: '120px',
        opacity: 0.2
      }} />
    </section>
  );
};
