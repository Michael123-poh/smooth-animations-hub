import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import imgOceanic from "../../assets/oceanic.jpg";
import imgIlma from "../../assets/ilma.jpg";
import imgInvest from "../../assets/Invest_Link.png";
import imgKCare from "../../assets/k-care.jpg";
import signPanel from "../../assets/Ressources Site Web 2/Nos Récoltes/Sign_Panel_Brand_Choice.png";

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
  const panelRef   = useRef<HTMLImageElement>(null);
  const animatedRef = useRef(false);

  useEffect(() => {
    const section = sectionRef.current;
    const panel   = panelRef.current;
    if (!section || !panel) return;

    const items = section.querySelectorAll<HTMLElement>(".port-item");

    // Set initial off-screen state
    items.forEach((item, i) => {
      item.style.opacity   = "0";
      item.style.transform = i % 2 === 0 ? "translateX(-100vw)" : "translateX(100vw)";
      item.style.transition = "none";
    });

    // Panneau : caché derrière la carte, plus bas, invisible
    panel.style.opacity   = "0";
    panel.style.transform = "translateY(180px)";
    panel.style.transition = "none";

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

        // Panneau : remonte à sa place peu après le début de l'entrée des cartes
        const cardsSettleDelay = 550;
        setTimeout(() => {
          panel.style.transition = "opacity 1.1s ease, transform 1.1s cubic-bezier(0.22, 1, 0.36, 1)";
          panel.style.opacity    = "1";
          panel.style.transform  = "translateY(0)";
        }, cardsSettleDelay);
      },
      { threshold: 0.3 }
    );

    io.observe(section);
    return () => io.disconnect();
  }, []);

  return (
    <section ref={sectionRef} className="gaia-portfolio" id="realisations" aria-labelledby="portfolio-heading">

      <img
        ref={panelRef}
        src={signPanel}
        alt=""
        aria-hidden="true"
        className="portfolio-sign-panel"
      />

      <div className="section-header">
        <div className="section-label portfolio-label">Nos Récoltes</div>
        <h2 className="gaia-h2 portfolio-h2" id="portfolio-heading">
          Des marques qui ont<br />
          trouvé leur voix{" "}
          <button
            className="portfolio-more-pill"
            onClick={() => navigate("/portfolio")}
            aria-label="Voir plus de projets"
          >
            <span>Voir plus…</span>
            <span className="portfolio-more-avatars" aria-hidden="true">
              <img src={imgOceanic} alt="" />
              <img src={imgIlma} alt="" />
              <img src={imgKCare} alt="" />
            </span>
          </button>
        </h2>
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
