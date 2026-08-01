import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { useParams, useNavigate, Navigate } from "react-router-dom";
import { GaiaNavbar } from "../components/site/GaiaNavbar";
import { GaiaFooter } from "../components/site/GaiaFooter";
import { getRecolte } from "../data/recoltes";

export default function PortfolioCategory() {
  const { slug } = useParams();
  const navigate = useNavigate();
  const cat = getRecolte(slug);
  const [lightbox, setLightbox] = useState<number | null>(null);

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  // Curseur système normal sur cette page (le site a `cursor: none` global)
  useEffect(() => {
    document.body.classList.add("native-cursor");
    return () => document.body.classList.remove("native-cursor");
  }, []);

  // Navigation clavier dans la lightbox : Échap ferme, ←/→ change d'image
  useEffect(() => {
    if (lightbox === null || !cat) return;
    const n = cat.images.length;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      else if (e.key === "ArrowRight") setLightbox((i) => (i === null ? i : (i + 1) % n));
      else if (e.key === "ArrowLeft") setLightbox((i) => (i === null ? i : (i - 1 + n) % n));
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox, cat]);

  // Slug inconnu → retour au portfolio
  if (!cat) return <Navigate to="/portfolio" replace />;

  const total = cat.images.length;
  const goPrev = () => setLightbox((i) => (i === null ? i : (i - 1 + total) % total));
  const goNext = () => setLightbox((i) => (i === null ? i : (i + 1) % total));

  return (
    <>
      <Helmet>
        <title>{cat.label} — Nos Récoltes | Gaïa Studio</title>
        <meta name="description" content={`Réalisations Gaïa Studio — ${cat.label}.`} />
        <link rel="canonical" href={`https://gaiaimagine.com/portfolio/${cat.slug}`} />
      </Helmet>
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>
      <GaiaNavbar />

      <main id="main-content">
        <section className="recolte-cat" aria-labelledby="recolte-cat-heading">
          <header className="recolte-cat-head">
            <button type="button" className="recolte-back" onClick={() => navigate("/portfolio")}>
              ← Nos Récoltes
            </button>
            <h1 className="gaia-h2 portfolio-h2" id="recolte-cat-heading">{cat.label}</h1>
          </header>

          {cat.images.length > 0 ? (
            <div className="recolte-cat-grid">
              {cat.images.map((src, i) => (
                <button
                  type="button"
                  className="recolte-cat-cell"
                  key={i}
                  onClick={() => setLightbox(i)}
                  aria-label={`Agrandir la réalisation ${i + 1}`}
                >
                  <img src={src} alt={`${cat.label} — réalisation ${i + 1}`} loading={i > 2 ? "lazy" : "eager"} />
                </button>
              ))}
            </div>
          ) : (
            <p className="recolte-cat-empty">
              Les réalisations de cette catégorie arrivent bientôt.
            </p>
          )}
        </section>
      </main>

      {/* Lightbox : popup image plein écran, angles droits */}
      {lightbox !== null && (
        <div
          className="recolte-lightbox"
          role="dialog"
          aria-modal="true"
          aria-label={`${cat.label} — réalisation ${lightbox + 1}`}
          onClick={() => setLightbox(null)}
        >
          <button
            type="button"
            className="recolte-lightbox-close"
            onClick={() => setLightbox(null)}
            aria-label="Fermer"
          >
            ×
          </button>
          {total > 1 && (
            <button
              type="button"
              className="recolte-lightbox-nav prev"
              onClick={(e) => { e.stopPropagation(); goPrev(); }}
              aria-label="Image précédente"
            >
              ‹
            </button>
          )}
          <img
            src={cat.images[lightbox]}
            alt={`${cat.label} — réalisation ${lightbox + 1}`}
            className="recolte-lightbox-img"
            onClick={(e) => e.stopPropagation()}
          />
          {total > 1 && (
            <button
              type="button"
              className="recolte-lightbox-nav next"
              onClick={(e) => { e.stopPropagation(); goNext(); }}
              aria-label="Image suivante"
            >
              ›
            </button>
          )}
          <div className="recolte-lightbox-count" aria-hidden="true">
            {lightbox + 1} / {total}
          </div>
        </div>
      )}

      <GaiaFooter />
    </>
  );
}
