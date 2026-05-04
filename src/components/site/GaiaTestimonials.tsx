import { useState, useEffect, useCallback, useRef } from "react";

const testimonials = [
  {
    text: "Gaïa a transformé notre vision en une identité visuelle qui nous ressemble vraiment. Chaque détail reflète notre ADN d'entreprise. Le résultat a dépassé toutes nos attentes.",
    name: "Marguerite Nkeng",
    role: "Directrice générale",
    company: "Oracle Education Consultancy",
    initials: "MN",
    color: "#16166A",
  },
  {
    text: "Une collaboration remarquable. L'équipe Gaïa a su comprendre nos enjeux dès le premier échange et proposer une identité à la hauteur de nos ambitions. Professionnalisme et créativité au rendez-vous.",
    name: "Bertrand Fouda",
    role: "Fondateur",
    company: "ILMA Consulting",
    initials: "BF",
    color: "#20208A",
  },
  {
    text: "Notre packaging VITAPRO est maintenant reconnaissable en rayons. Gaïa a su capturer l'essence naturelle de notre marque dans chaque élément graphique. Un travail d'orfèvre.",
    name: "Sandrine Mbella",
    role: "Responsable marketing",
    company: "VITAPRO",
    initials: "SM",
    color: "#3D6B4F",
  },
  {
    text: "Travailler avec Gaïa a été une expérience humaine avant tout. Ils écoutent, ils comprennent, et ils livrent. Notre nouvelle identité a immédiatement séduit nos investisseurs.",
    name: "Hervé Nkemdirim",
    role: "CEO",
    company: "Invest Link",
    initials: "HN",
    color: "#7B3F2A",
  },
];

const logos = [
  "Oracle Education", "ILMA Consulting", "VITAPRO", "Invest Link", "Résidence Isabella", "K-Care Cosmetics",
  "Oracle Education", "ILMA Consulting", "VITAPRO", "Invest Link", "Résidence Isabella", "K-Care Cosmetics",
];

export function GaiaTestimonials() {
  const [active, setActive] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const total = testimonials.length;

  // Detect single-card mode (≤768px)
  useEffect(() => {
    const mq = window.matchMedia("(max-width: 768px)");
    setIsMobile(mq.matches);
    const handler = (e: MediaQueryListEvent) => setIsMobile(e.matches);
    mq.addEventListener("change", handler);
    return () => mq.removeEventListener("change", handler);
  }, []);

  const visible = isMobile ? 1 : 2;
  const max = total - visible;

  const next = useCallback(() => setActive((a) => (a + 1) % (max + 1)), [max]);
  const prev = useCallback(() => setActive((a) => (a - 1 + max + 1) % (max + 1)), [max]);

  // Reset active when switching modes
  useEffect(() => { setActive(0); }, [isMobile]);

  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  // Card width as % of track + gap offset
  const cardWidthPct = isMobile ? 100 : 50;
  const gapPx = isMobile ? 0 : 24;
  const offset = -(active * (cardWidthPct + (cardWidthPct === 100 ? 0 : 1.2)));

  return (
    <section className="gaia-testimonials" id="temoignages" aria-labelledby="testi-heading">
      <div className="testi-inner">
        <div style={{ display: "flex", alignItems: "flex-end", justifyContent: "space-between", gap: 40 }}>
          <div>
            <div className="section-label" style={{ color: "var(--orange)" }}>Notre Écho</div>
            <h2 className="gaia-h2 on-dark reveal" id="testi-heading">
              Ce que disent<br />nos clients
            </h2>
          </div>
          <p className="section-sub on-dark reveal d2" style={{ marginTop: 0, textAlign: "right" }}>
            Ils nous ont fait confiance.<br />Voilà ce qu'ils en pensent.
          </p>
        </div>

        <div className="testi-carousel" ref={carouselRef} aria-live="polite">
          <div
            className="testi-track"
            style={{ transform: `translateX(calc(${offset}% - ${active * gapPx}px))` }}
          >
            {testimonials.map((t, i) => (
              <article
                key={i}
                className={`testi-card${isMobile ? " testi-card--single" : ""}`}
                aria-hidden={i < active || i >= active + visible}
              >
                <div className="testi-quote-mark" aria-hidden="true">"</div>
                <p className="testi-text">"{t.text}"</p>
                <div className="testi-author">
                  <div
                    className="testi-avatar"
                    style={{ background: `linear-gradient(135deg, ${t.color}, var(--orange))` }}
                    aria-hidden="true"
                  >
                    {t.initials}
                  </div>
                  <div>
                    <div className="testi-name">{t.name}</div>
                    <div className="testi-role">{t.role} · {t.company}</div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          <div className="testi-controls">
            <button
              className="testi-btn"
              onClick={prev}
              aria-label="Témoignage précédent"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M10 3L5 8l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            <div className="testi-dots" role="tablist" aria-label="Témoignages">
              {Array.from({ length: max + 1 }).map((_, i) => (
                <button
                  key={i}
                  className={`testi-dot${active === i ? " active" : ""}`}
                  onClick={() => setActive(i)}
                  role="tab"
                  aria-selected={active === i}
                  aria-label={`Témoignage ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="testi-btn"
              onClick={next}
              aria-label="Témoignage suivant"
            >
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
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
