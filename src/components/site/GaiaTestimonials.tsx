const testimonials = [
  {
    text: "Gaïa a transformé notre vision en une identité visuelle qui nous ressemble vraiment. Chaque détail reflète notre ADN d'entreprise. Le résultat a dépassé toutes nos attentes.",
    name: "Marguerite Nkeng",
    role: "Directrice générale",
    company: "Oracle Education Consultancy",
    initials: "MN",
    color: "#16166A",
  },
  {
    text: "Une collaboration remarquable. L'équipe Gaïa a su comprendre nos enjeux dès le premier échange et proposer une identité à la hauteur de nos ambitions. Professionnalisme et créativité au rendez-vous.",
    name: "Bertrand Fouda",
    role: "Fondateur",
    company: "ILMA Consulting",
    initials: "BF",
    color: "#20208A",
  },
  {
    text: "Notre packaging VITAPRO est maintenant reconnaissable en rayons. Gaïa a su capturer l'essence naturelle de notre marque dans chaque élément graphique. Un travail d'orfèvre.",
    name: "Sandrine Mbella",
    role: "Responsable marketing",
    company: "VITAPRO",
    initials: "SM",
    color: "#3D6B4F",
  },
  {
    text: "Travailler avec Gaïa a été une expérience humaine avant tout. Ils écoutent, ils comprennent, et ils livrent. Notre nouvelle identité a immédiatement séduit nos investisseurs.",
    name: "Hervé Nkemdirim",
    role: "CEO",
    company: "Invest Link",
    initials: "HN",
    color: "#7B3F2A",
  },
];

const logos = [
  "Oracle Education", "ILMA Consulting", "VITAPRO", "Invest Link", "Résidence Isabella", "K-Care Cosmetics",
  "Oracle Education", "ILMA Consulting", "VITAPRO", "Invest Link", "Résidence Isabella", "K-Care Cosmetics",
];

export function GaiaTestimonials() {
  return (
    <section className="gaia-testimonials" id="temoignages" aria-labelledby="testi-heading">
      <div className="testi-inner">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40 }}>
          <div>
            <div className="section-label" style={{ color: "var(--orange)" }}>Notre Écho</div>
            <h2 className="gaia-h2" id="testi-heading">
              Ce que disent<br />nos clients
            </h2>
          </div>
          <p className="section-sub" style={{ marginTop: 0, textAlign: "right" }}>
            Ils nous ont fait confiance.<br />Voilà ce qu'ils en pensent.
          </p>
        </div>

        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <article key={i} className="testi-card">
              <div className="testi-quote-mark" aria-hidden="true">"</div>
              <p className="testi-text">"{t.text}"</p>
              <div className="testi-author">
                <div
                  className="testi-avatar"
                  style={{ background: `linear-gradient(135deg, ${t.color}, var(--orange))` }}
                  aria-hidden="true"
                >
                  {t.initials}
                </div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role} · {t.company}</div>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Client logos marquee */}
        <div className="logos-strip" aria-hidden="true">
          <div className="logos-track">
            {logos.map((l, i) => (
              <span key={i} className="logo-item">{l}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
