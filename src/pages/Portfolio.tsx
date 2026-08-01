import { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";
import { GaiaNavbar } from "../components/site/GaiaNavbar";
import { GaiaCursor } from "../components/site/GaiaCursor";
import { recoltes } from "../data/recoltes";

import tunnelImg from "../assets/Ressources Site Web 2/Nos Récoltes/Nos_Récoltes-100.jpg";

export default function Portfolio() {
  const navigate = useNavigate();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>Portfolio — Gaïa Studio | Design Graphique, Branding &amp; Identité Visuelle</title>
        <meta name="description" content="Découvrez les projets de Gaïa Studio : design graphique, branding, identité visuelle, UI/UX et corporate branding pour des entreprises camerounaises et africaines." />
        <link rel="canonical" href="https://gaiaimagine.com/portfolio" />
        <meta property="og:url" content="https://gaiaimagine.com/portfolio" />
        <meta property="og:title" content="Portfolio — Gaïa Studio | Design Graphique &amp; Branding" />
      </Helmet>
      <GaiaCursor />
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>
      <GaiaNavbar />

      <main id="main-content">
        <section className="recolte-page gaia-portfolio" aria-labelledby="recolte-heading">

          {/* Image tunnel — plein écran, derrière tout le contenu */}
          <div className="recolte-visual" aria-hidden="true">
            <img src={tunnelImg} alt="" className="recolte-visual-img" />
          </div>
          {/* Voile dégradé noir pour la lisibilité du texte à gauche */}
          <div className="recolte-overlay" aria-hidden="true" />

          {/* Contenu : titre + description + pilules cliquables */}
          <div className="recolte-left">
            <div className="section-label portfolio-label">Nos Récoltes</div>
            <h2 className="gaia-h2 portfolio-h2" id="recolte-heading">
              Des marques qui ont<br />trouvé leur voix
            </h2>
            <p className="section-sub recolte-sub">
              Chaque projet est une rencontre entre une vision et les personnes qu'elle
              souhaite toucher.<br />
              Voici quelques marques que nous avons eu le plaisir d'accompagner.
            </p>

            <ul className="recolte-pills">
              {recoltes.map((cat) => (
                <li key={cat.slug}>
                  <button
                    type="button"
                    className="recolte-pill"
                    onClick={() => navigate(`/portfolio/${cat.slug}`)}
                    aria-label={`Voir les réalisations : ${cat.label}`}
                  >
                    {cat.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

        </section>
      </main>
    </>
  );
}
