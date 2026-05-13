import { useState } from "react";
import gaiaTeam from "../../assets/gaia-team.jpg";

const categories = [
  {
    id: "identite",
    title: "Identité & Image de Marque",
    items: ["Logo & charte graphique", "Typographie & palette de couleurs", "Système visuel complet", "Brand guidelines"],
  },
  {
    id: "strategie",
    title: "Stratégie de Marque",
    items: ["Positionnement de marque", "Analyse concurrentielle", "Architecture de marque", "Naming & baseline"],
  },
  {
    id: "digitale",
    title: "Expression Digitale",
    items: ["Design UI/UX", "Sites web & landing pages", "Templates réseaux sociaux", "Motion design"],
  },
  {
    id: "supports",
    title: "Supports de Communication",
    items: ["Packaging & étiquettes", "Brochures & affiches", "Signalétique & uniformes", "Objets promotionnels"],
  },
];

export function GaiaServices() {
  const [open, setOpen] = useState<string | null>(null);

  return (
    <section className="gaia-services" id="services" aria-labelledby="services-heading">
      <div className="services-top">
        <div>
          <div className="section-label">Notre Jardin</div>
          <h2 className="gaia-h2 reveal" id="services-heading">
            Ce que nous créons<br /><span style={{ color: "var(--orange)" }}>pour vous</span>
          </h2>
        </div>
        <p className="section-sub reveal d2" style={{ marginTop: 0, textAlign: "right" }}>
          Quatre pôles d'expertise au service<br />de votre croissance.
        </p>
      </div>

      <div className="services-accordion-wrap">
        <div className="services-photo-col">
          <img src={gaiaTeam} alt="L'équipe Gaïa en atelier créatif" />
        </div>

        <div className="services-list-col">
          {categories.map((cat) => (
            <div
              key={cat.id}
              className={`accordion-item${open === cat.id ? " open" : ""}`}
            >
              <button
                className="accordion-trigger"
                onClick={() => setOpen(open === cat.id ? null : cat.id)}
                aria-expanded={open === cat.id}
                aria-controls={`accordion-body-${cat.id}`}
              >
                <span className="accordion-trigger-title">{cat.title}</span>
                <span className="accordion-chevron" aria-hidden="true">›</span>
              </button>
              <div
                className="accordion-body"
                id={`accordion-body-${cat.id}`}
                role="region"
              >
                <ul className="accordion-sub-list">
                  {cat.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
