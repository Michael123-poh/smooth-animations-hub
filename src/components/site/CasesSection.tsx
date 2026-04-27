const CASES = [
  { label: "Réinvention d'Identité \u2014 Fintech", img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&q=80" },
  { label: "Écosystème Digital \u2014 SaaS", img: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&q=80" },
  { label: "Campagne d'Impact \u2014 Social", img: "https://images.unsplash.com/photo-1557804506-669a67965ba0?w=500&q=80" },
  { label: "Design de Produit \u2014 Tech", img: "https://images.unsplash.com/photo-1522542550221-31fd19255a7a?w=500&q=80" },
  { label: "Territoire de Marque \u2014 Luxe", img: "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=500&q=80" },
];

export const CasesSection = () => {
  return (
    <section className="cases-section" id="cases" style={{ background: 'var(--navy2)' }}>
      <div className="cases-label reveal">Nos<br />Réalisations</div>
      <div className="cases-wrap">
        <div className="cases-track">
          {CASES.map((c, i) => (
            <div key={i} className={`case-card reveal d${(i % 3) + 1}`}>
              <img src={c.img} alt={c.label} />
              <div className="case-overlay" style={{ background: 'linear-gradient(to top, rgba(245, 130, 32, 0.9) 0%, transparent 70%)' }} />
              <div className="case-lbl">{c.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
