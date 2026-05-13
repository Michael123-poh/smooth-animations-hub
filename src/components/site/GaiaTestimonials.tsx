const testimonials = [
  {
    text: "L'équipe Gaïa a été un partenaire fiable et dévoué tout au long de ce projet en mettant à notre service leur expertise avec bienveillance et professionnalisme.",
    name: "Le Management de OEC",
    role: "Oracle Education Consultancy",
    initials: "OE",
    color: "#16166A",
  },
  {
    text: "Confier notre branding à l'équipe Gaïa est la meilleure décision que j'ai prise après avoir décidé de mettre sur pied mon cabinet.",
    name: "Fred MILLA",
    role: "CEO · ILMA Consulting",
    initials: "FM",
    color: "#20208A",
  },
  {
    text: "L'équipe Gaïa a su nous révéler tout le potentiel de notre projet. Nous étions complètement stupéfaits par le résultat.",
    name: "Mmes MBANGO & YOUDOM",
    role: "Co-fondatrices de l'entreprise",
    initials: "MB",
    color: "#3D6B4F",
  },
  {
    text: "Avec l'équipe Gaïa, construire notre identité visuelle était une belle aventure de collaboration et nous sommes ravis de les avoir à nos côtés jusqu'à ce jour.",
    name: "M. Eddy Ernest N.",
    role: "CEO · Invest Link",
    initials: "EE",
    color: "#7B3F2A",
  },
  {
    text: "Grâce au travail acharné de l'équipe Gaïa, notre résidence a gagné une place notoire en hôtellerie dans la zone de Douala 5ème.",
    name: "M. NZIMA S. Seraphin",
    role: "CEO · SCI Isabella",
    initials: "NS",
    color: "#4A3728",
  },
  {
    text: "Nous sommes ravis d'avoir travaillé avec l'équipe Gaïa sur la conception et le déploiement de notre marque. Ils ont su trouver le juste milieu entre nos valeurs et les besoins du marché actuel.",
    name: "M. & Mme KUECHE",
    role: "Co-fondateurs de la marque",
    initials: "KU",
    color: "#6B2A5F",
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
        <div style={{ display: "flex", alignItems: "flex-start", justifyContent: "space-between", gap: 40 }}>
          <div>
            <div className="section-label" style={{ color: "var(--orange)" }}>Notre Écho</div>
            <h2 className="gaia-h2" id="testi-heading">
              Ce que disent<br /><span style={{ color: "var(--orange)" }}>nos clients</span>
            </h2>
          </div>
          <p className="section-sub" style={{ marginTop: 0, textAlign: "right", paddingTop: 36 }}>
            Ils nous ont fait confiance.<br />Voilà ce qu'ils en pensent.
          </p>
        </div>

        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <article key={i} className="testi-card">
              {/* Stars */}
              <div className="testi-stars" aria-label="5 étoiles">
                {[...Array(5)].map((_, s) => (
                  <svg key={s} width="12" height="12" viewBox="0 0 12 12" fill="var(--orange)" aria-hidden="true">
                    <path d="M6 1l1.2 2.4 2.7.4-1.95 1.9.46 2.66L6 7.1l-2.41 1.26.46-2.66L2.1 3.8l2.7-.4z"/>
                  </svg>
                ))}
              </div>
              <p className="testi-text">{t.text}</p>
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
                  <div className="testi-role">{t.role}</div>
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
