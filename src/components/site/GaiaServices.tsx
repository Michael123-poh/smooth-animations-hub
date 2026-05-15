import { useState } from "react";
import ourGarden from "../../assets/Our Garden.png";

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
      <div className="section-header">
        <div className="section-label">Notre Jardin</div>
        <div>
          <h2 className="gaia-h2" id="services-heading">
            Ce que nous<br />créons pour vous
          </h2>
          <p className="section-sub">
            Quatre <span style={{ color: "var(--orange)" }}>pôles d'expertise</span> au service de votre croissance.
          </p>
        </div>
      </div>

      <div className="services-accordion-wrap">
        <div className="services-photo-col">
          <img src={ourGarden} alt="Notre Jardin — l'univers créatif Gaïa" />
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
