import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import imgOceanic from "../../assets/oceanic.jpg";
import imgIlma from "../../assets/ilma.jpg";
import imgInvest from "../../assets/Invest_Link.png";
import imgKCare from "../../assets/k-care.jpg";

const projects = [
  {
    id: "oceanic",
    name: "Oceanic Trade & Logistics",
    category: "Identité visuelle",
    img: imgOceanic,
  },
  {
    id: "ilma",
    name: "ILMA Consulting",
    category: "Image de marque",
    img: imgIlma,
  },
  {
    id: "investlink",
    name: "Invest Link",
    category: "Branding digital",
    img: imgInvest,
  },
  {
    id: "kcare",
    name: "K-Care Cosmetics",
    category: "Identité & packaging",
    img: imgKCare,
  },
];

export function GaiaPortfolio() {
  const navigate   = useNavigate();
  const sectionRef = useRef<HTMLElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll<HTMLElement>(".port-item");

    // Set initial off-screen state
    items.forEach((item, i) => {
      item.style.opacity   = "0";
      item.style.transform = i % 2 === 0 ? "translateX(-100vw)" : "translateX(100vw)";
      item.style.transition = "none";
    });

    const io = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting || animatedRef.current) return;
        animatedRef.current = true;

        items.forEach((item, i) => {
          const delay = i * 80;
          setTimeout(() => {
            item.style.transition = "opacity 1.3s cubic-bezier(0.22, 1, 0.36, 1), transform 1.3s cubic-bezier(0.22, 1, 0.36, 1)";
            item.style.opacity    = "1";
            item.style.transform  = "translateX(0)";
          }, delay);
        });
      },
      { threshold: 0.3 }
    );

    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="gaia-portfolio" id="realisations" aria-labelledby="portfolio-heading">
      <div className="section-header">
        <div className="section-label portfolio-label">Nos Récoltes</div>
        <div className="portfolio-title-row">
          <h2 className="gaia-h2" id="portfolio-heading">
            Des marques qui<br />ont trouvé leur voix
          </h2>
          <button
            className="gaia-btn portfolio-btn"
            onClick={() => navigate("/portfolio")}
            style={{ flexShrink: 0 }}
          >
            Voir nos projets
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
              <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </button>
        </div>
      </div>

      <div className="portfolio-grid">
        {projects.map((p, i) => (
          <article
            key={p.id}
            className="port-item"
            onClick={() => navigate("/portfolio")}
            style={{ cursor: "pointer" }}
            aria-label={`${p.name} — ${p.category}`}
          >
            <img
              src={p.img}
              alt={`Projet ${p.name}`}
              loading={i > 1 ? "lazy" : "eager"}
              style={{ width: "100%", height: "100%", objectFit: "cover" }}
            />
            <div className="port-overlay">
              <div className="port-category">{p.category}</div>
              <div className="port-name">{p.name}</div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
