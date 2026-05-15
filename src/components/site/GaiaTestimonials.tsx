import logoOracle from "../../assets/Oracle_Education_Cosultancy.png";
import logoIlma from "../../assets/Ilma_Consulting.png";
import logoVitapro from "../../assets/Vitapro.png";
import logoInvestLink from "../../assets/Invest_Link.png";
import logoIsabella from "../../assets/Residence_Isabella.png";
import logoKCare from "../../assets/K_Care_Cosmetics.png";

const testimonials = [
  {
    text: "L'équipe Gaïa a été un partenaire fiable et dévoué tout au long de ce projet en mettant à notre service leur expertise avec bienveillance et professionnalisme.",
    name: "Le Management de OEC",
    role: "Oracle Education Consultancy",
    logo: logoOracle,
  },
  {
    text: "Confier notre branding à l'équipe Gaïa est la meilleure décision que j'ai prise après avoir décidé de mettre sur pied mon cabinet.",
    name: "Fred MILLA",
    role: "CEO · ILMA Consulting",
    logo: logoIlma,
  },
  {
    text: "L'équipe Gaïa a su nous révéler tout le potentiel de notre projet. Nous étions complètement stupéfaits par le résultat.",
    name: "Mmes MBANGO & YOUDOM",
    role: "Co-fondatrices de l'entreprise",
    logo: logoVitapro,
  },
  {
    text: "Avec l'équipe Gaïa, construire notre identité visuelle était une belle aventure de collaboration et nous sommes ravis de les avoir à nos côtés jusqu'à ce jour.",
    name: "M. Eddy Ernest N.",
    role: "CEO · Invest Link",
    logo: logoInvestLink,
  },
  {
    text: "Grâce au travail acharné de l'équipe Gaïa, notre résidence a gagné une place notoire en hôtellerie dans la zone de Douala 5ème.",
    name: "M. NZIMA S. Seraphin",
    role: "CEO · SCI Isabella",
    logo: logoIsabella,
  },
  {
    text: "Nous sommes ravis d'avoir travaillé avec l'équipe Gaïa sur la conception et le déploiement de notre marque. Ils ont su trouver le juste milieu entre nos valeurs et les besoins du marché actuel.",
    name: "M. & Mme KUECHE",
    role: "Co-fondateurs de la marque",
    logo: logoKCare,
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
        <div className="section-header">
          <div className="section-label">Notre Écho</div>
          <div>
            <h2 className="gaia-h2" id="testi-heading">
              Ce qu'ils disent de nous
            </h2>
            <p className="section-sub">
              Ils nous ont fait <span style={{ color: "var(--orange)" }}>confiance</span>, voici ce qu'ils en pensent.
            </p>
          </div>
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
                <div className="testi-avatar" aria-hidden="true">
                  <img src={t.logo} alt="" />
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
