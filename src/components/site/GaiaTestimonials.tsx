import { useEffect, useRef } from "react";
import smiley from "../../assets/smileyOrange.png";
import logoOracle from "../../assets/smileyOrange.png";
import logoIlma from "../../assets/ilma.jpg";
import logoVitapro from "../../assets/smileyOrange.png";
import logoInvestLink from "../../assets/Invest_Link.png";
import logoIsabella from "../../assets/Residence_Isabella.png";
import logoKCare from "../../assets/k-care.jpg";

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
  const sectionRef   = useRef<HTMLElement>(null);
  const smileyLRef   = useRef<HTMLImageElement>(null);
  const smileyRRef   = useRef<HTMLImageElement>(null);
  const headerRef    = useRef<HTMLDivElement>(null);
  const gridRef      = useRef<HTMLDivElement>(null);
  const animatedRef  = useRef(false);

  useEffect(() => {
    const section  = sectionRef.current;
    const smileyL  = smileyLRef.current;
    const smileyR  = smileyRRef.current;
    const header   = headerRef.current;
    const grid     = gridRef.current;
    if (!section || !smileyL || !smileyR || !header || !grid) return;

    // Smileys start touching at center
    smileyL.style.transform  = "translateX(calc(50vw - 50% - 8px))";
    smileyR.style.transform  = "translateX(calc(-50vw + 50% + 8px))";
    smileyL.style.transition = "none";
    smileyR.style.transition = "none";

    // Header hidden
    header.style.opacity   = "0";
    header.style.transform = "translateY(10px)";
    header.style.transition = "none";

    // Cards hidden — tiny scale
    const cards = grid.querySelectorAll<HTMLElement>(".testi-card");
    cards.forEach((c) => {
      c.style.opacity    = "0";
      c.style.transform  = "scale(0.15)";
      c.style.transition = "none";
    });

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animatedRef.current) return;
        animatedRef.current = true;

        // Step 1: smileys separate to their positions
        const easing = "cubic-bezier(0.22, 1, 0.36, 1)";
        smileyL.style.transition = `transform 1.4s ${easing}`;
        smileyR.style.transition = `transform 1.4s ${easing}`;
        smileyL.style.transform  = "translateX(0)";
        smileyR.style.transform  = "translateX(0)";

        // Step 2: header reveals as smileys part
        setTimeout(() => {
          header.style.transition = `opacity 0.9s ease, transform 0.9s ${easing}`;
          header.style.opacity    = "1";
          header.style.transform  = "translateY(0)";
        }, 600);

        // Step 3: cards grow from tiny to full size with stagger
        cards.forEach((c, i) => {
          setTimeout(() => {
            c.style.transition = `opacity 0.7s ease, transform 0.8s ${easing}`;
            c.style.opacity    = "1";
            c.style.transform  = "scale(1)";
          }, 1100 + i * 80);
        });
      },
      { threshold: 0.35 }
    );

    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="gaia-testimonials" id="temoignages" aria-labelledby="testi-heading">
      <div className="testi-inner">

        {/* Smileys + header row */}
        <div className="testi-top">
          <img ref={smileyLRef} src={smiley} alt="" aria-hidden="true" className="testi-smiley testi-smiley-l" />
          <div ref={headerRef} className="testi-header-center">
            <div className="section-label">Notre Écho</div>
            <h2 className="gaia-h2" id="testi-heading">
              Ce qu'ils disent de nous
            </h2>
          </div>
          <img ref={smileyRRef} src={smiley} alt="" aria-hidden="true" className="testi-smiley testi-smiley-r" />
        </div>

        <div ref={gridRef} className="testi-grid">
          {testimonials.map((t, i) => (
            <article key={i} className="testi-card">
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
