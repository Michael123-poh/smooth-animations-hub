import { useEffect, useState } from "react";
import { GaiaNavbar } from "../components/site/GaiaNavbar";
import { GaiaFooter } from "../components/site/GaiaFooter";
import { GaiaCTA } from "../components/site/GaiaCTA";
import { GaiaCircleMotif } from "../components/site/GaiaCircleMotif";

function useScrollY() {
  const [y, setY] = useState(0);
  useEffect(() => {
    const handler = () => setY(window.scrollY);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);
  return y;
}

function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll(".reveal, .reveal-left, .reveal-right");
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }),
      { threshold: 0.1 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const projects = [
  {
    id: "oracle",
    name: "Oracle Education Consultancy",
    category: "Identité visuelle",
    desc: "Refonte complète de l'identité visuelle pour ce cabinet de conseil en orientation scolaire international.",
    tags: ["Logo", "Charte graphique", "Papeterie"],
    img: "https://picsum.photos/seed/oracle-edu/700/500",
    color: "#1E3A5F",
    year: "2024",
  },
  {
    id: "ilma",
    name: "ILMA Consulting",
    category: "Image de marque",
    desc: "Construction d'une identité de marque premium pour ce cabinet de conseil en stratégie d'entreprise.",
    tags: ["Branding", "Identité", "Digital"],
    img: "https://picsum.photos/seed/ilma-consult/700/500",
    color: "#2A4E7B",
    year: "2024",
  },
  {
    id: "vitapro",
    name: "VITAPRO",
    category: "Identité & packaging",
    desc: "Création d'une identité naturelle et chaleureuse pour cette gamme de compléments alimentaires locaux.",
    tags: ["Packaging", "Logo", "Communication"],
    img: "https://picsum.photos/seed/vitapro-health/700/500",
    color: "#3D6B4F",
    year: "2023",
  },
  {
    id: "investlink",
    name: "Invest Link",
    category: "Branding digital",
    desc: "Identité moderne et fiable pour cette plateforme d'investissement à destination des entrepreneurs africains.",
    tags: ["Branding", "UX", "Supports"],
    img: "https://picsum.photos/seed/invest-link/700/500",
    color: "#7B3F2A",
    year: "2023",
  },
  {
    id: "isabella",
    name: "Résidence Isabella",
    category: "Identité de luxe",
    desc: "Positionnement premium et identité haut-de-gamme pour ce complexe résidentiel exclusif de Douala.",
    tags: ["Luxe", "Identité", "Signalétique"],
    img: "https://picsum.photos/seed/residence-isabella/700/500",
    color: "#4A3728",
    year: "2022",
  },
  {
    id: "kcare",
    name: "K-Care Cosmetics",
    category: "Brand & packaging",
    desc: "Identité visuelle engageante pour cette marque de cosmétiques naturels camerounais, du logo au packaging complet.",
    tags: ["Cosmétiques", "Packaging", "Brand"],
    img: "https://picsum.photos/seed/kcare-cosmetics/700/500",
    color: "#6B2A5F",
    year: "2022",
  },
];

const filters = ["Tous", "Packaging", "Digital", "Luxe"];

export default function Portfolio() {
  const scrollY = useScrollY();
  const [activeFilter, setActiveFilter] = useState("Tous");
  useReveal();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  const filtered = activeFilter === "Tous"
    ? projects
    : projects.filter((p) =>
        p.category.toLowerCase().includes(activeFilter.toLowerCase()) ||
        p.tags.some((t) => t.toLowerCase().includes(activeFilter.toLowerCase()))
      );

  return (
    <>
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>
      <GaiaNavbar solid={scrollY > 60} />

      <main id="main-content">
        {/* Hero */}
        <section className="portfolio-page-hero" aria-label="Portfolio Gaïa" style={{ background: "var(--beige)" }}>
          <div style={{ position: "absolute", right: -60, top: "50%", transform: "translateY(-50%)", opacity: 0.2, pointerEvents: "none" }} aria-hidden="true">
            <GaiaCircleMotif variant="hero" size={420} />
          </div>
          <div style={{ position: "relative", zIndex: 1 }}>
            <div className="section-label">Nos réalisations</div>
            <h1 className="gaia-h2 reveal" style={{ fontSize: "clamp(32px, 5vw, 68px)", marginBottom: 20 }}>
              Des marques qui ont<br />trouvé leur <span style={{ color: "var(--orange)" }}>voix</span>
            </h1>
            <p className="section-sub reveal d2" style={{ marginBottom: 32 }}>
              Chaque projet est une collaboration unique. Voici quelques histoires que nous avons
              eu l'honneur de raconter.
            </p>

            {/* Filters — une seule ligne, 4 pills égaux */}
            <div
              role="group"
              aria-label="Filtrer par catégorie"
              className="portfolio-filters reveal d3"
            >
              {filters.map((f) => (
                <button
                  key={f}
                  onClick={() => setActiveFilter(f)}
                  aria-pressed={activeFilter === f}
                  className={`portfolio-filter-btn${activeFilter === f ? " active" : ""}`}
                >
                  {f}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Projects grid */}
        <section className="portfolio-page-grid" style={{ background: "var(--beige)" }}>
          <div className="portfolio-cards-grid">
            {filtered.map((p, i) => (
              <article
                key={p.id}
                className={`port-card reveal d${Math.min(i + 1, 4)}`}
                aria-label={`${p.name} — ${p.category}`}
              >
                {/* Photo — élément principal */}
                <div className="port-card-img" style={{ background: p.color }}>
                  <img
                    src={p.img}
                    alt={`Projet ${p.name}`}
                    loading="lazy"
                    onError={(e) => { e.currentTarget.style.display = "none"; }}
                  />
                  <div className="port-card-overlay">
                    <div className="port-card-category">{p.category}</div>
                    <div className="port-card-name">{p.name}</div>
                  </div>
                  <div className="port-card-year" aria-label={`Année : ${p.year}`}>{p.year}</div>
                </div>
              </article>
            ))}
          </div>
        </section>

        <GaiaCTA />
      </main>

      <GaiaFooter />
    </>
  );
}
