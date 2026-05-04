import { useNavigate } from "react-router-dom";

const projects = [
  {
    id: "oracle",
    name: "Oracle Education Consultancy",
    category: "Identité visuelle",
    img: "https://picsum.photos/seed/oracle-edu/800/500",
    color: "#16166A",
  },
  {
    id: "ilma",
    name: "ILMA Consulting",
    category: "Image de marque",
    img: "https://picsum.photos/seed/ilma-consult/600/500",
    color: "#20208A",
  },
  {
    id: "vitapro",
    name: "VITAPRO",
    category: "Identité & packaging",
    img: "https://picsum.photos/seed/vitapro-health/600/400",
    color: "#3D6B4F",
  },
  {
    id: "investlink",
    name: "Invest Link",
    category: "Branding digital",
    img: "https://picsum.photos/seed/invest-link/800/400",
    color: "#7B3F2A",
  },
  {
    id: "isabella",
    name: "Résidence Isabella",
    category: "Identité de luxe",
    img: "https://picsum.photos/seed/residence-isabella/600/400",
    color: "#4A3728",
  },
  {
    id: "kcare",
    name: "K-Care Cosmetics",
    category: "Brand & packaging",
    img: "https://picsum.photos/seed/kcare-cosmetics/600/400",
    color: "#6B2A5F",
  },
];

export function GaiaPortfolio() {
  const navigate = useNavigate();

  return (
    <section className="gaia-portfolio" id="realisations" aria-labelledby="portfolio-heading">
      <div className="portfolio-header">
        <div>
          <div className="section-label">Nos Récoltes</div>
          <h2 className="gaia-h2 reveal" id="portfolio-heading">
            Des marques qui<br />ont trouvé leur voix
          </h2>
        </div>
        <button
          className="gaia-btn gaia-btn-ghost reveal d2"
          onClick={() => navigate("/portfolio")}
        >
          Voir tous les projets
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>

      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <article
            key={p.id}
            className={`port-item reveal d${Math.min(i + 1, 5)}`}
            onClick={() => navigate("/portfolio")}
            style={{ cursor: "pointer" }}
            aria-label={`${p.name} — ${p.category}`}
          >
            <img
              src={p.img}
              alt={`Projet ${p.name}`}
              loading={i > 2 ? "lazy" : "eager"}
              style={{
                width: "100%",
                height: "100%",
                objectFit: "cover",
              }}
              onError={(e) => {
                const t = e.currentTarget;
                t.style.display = "none";
                const parent = t.parentElement!;
                parent.style.background = p.color;
                parent.style.display = "flex";
                parent.style.alignItems = "center";
                parent.style.justifyContent = "center";
              }}
            />
            <div className="port-overlay">
              <div className="port-category">{p.category}</div>
              <div className="port-name">{p.name}</div>
            </div>
            <div className="port-arrow" aria-hidden="true">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                <path d="M2 7h10M7 2l5 5-5 5" stroke="#16166A" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
