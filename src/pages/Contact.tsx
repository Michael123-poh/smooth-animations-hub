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

const faqs = [
  {
    q: "Combien coûte une identité visuelle ?",
    a: "Chaque projet est unique. Nos tarifs dépendent de la complexité et de l'étendue des livrables. Contactez-nous pour un devis personnalisé et sans engagement.",
  },
  {
    q: "Combien de temps dure un projet de branding ?",
    a: "En moyenne 6 à 8 semaines pour une identité visuelle complète. Ce délai peut varier selon la réactivité des échanges et la complexité du projet.",
  },
  {
    q: "Travaillez-vous avec des entreprises hors Cameroun ?",
    a: "Absolument. Nous accompagnons des clients partout en Afrique centrale et en diaspora. Nos échanges se font facilement à distance.",
  },
  {
    q: "Combien de retours sont inclus ?",
    a: "Nous incluons 3 cycles de révisions structurés dans chaque projet. Cela garantit un processus clair et des résultats alignés avec vos attentes.",
  },
];

export default function Contact() {
  const scrollY = useScrollY();
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  useReveal();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>
      <GaiaNavbar />

      <main id="main-content">
        {/* Hero */}
        <section
          style={{
            background: "var(--navy)",
            padding: "140px 80px 80px",
            position: "relative",
            overflow: "hidden",
          }}
          aria-label="Contactez Gaïa"
        >
          <div style={{ position: "absolute", right: -60, top: "50%", transform: "translateY(-50%)", opacity: 0.12, pointerEvents: "none" }} aria-hidden="true">
            <GaiaCircleMotif variant="dna" size={500} />
          </div>
          <div style={{ position: "relative", zIndex: 1, maxWidth: 640 }}>
            <div className="section-label" style={{ color: "var(--orange)" }}>Contact</div>
            <h1 className="gaia-h2 on-dark reveal" style={{ fontSize: "clamp(36px, 5vw, 64px)", marginBottom: 20 }}>
              Parlons de<br />votre <span style={{ color: "var(--orange)" }}>projet</span>
            </h1>
            <p className="section-sub on-dark reveal d2">
              Pas de jargon, pas de vente forcée. Juste une conversation honnête
              sur comment nous pouvons vous aider à construire une marque qui dure.
            </p>
          </div>
        </section>

        {/* CTA form section */}
        <GaiaCTA />

        {/* FAQ */}
        <section style={{ background: "var(--beige)", padding: "100px 80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "start" }}>
            <div>
              <div className="section-label">Questions fréquentes</div>
              <h2 className="gaia-h2 reveal" style={{ marginBottom: 0 }}>
                Tout ce que vous<br />voulez savoir
              </h2>
            </div>

            <div>
              {faqs.map((faq, i) => (
                <div
                  key={i}
                  className={`reveal d${i + 1}`}
                  style={{
                    borderBottom: "1px solid var(--border)",
                    paddingBottom: 20,
                    marginBottom: 20,
                  }}
                >
                  <button
                    onClick={() => setOpenFaq(openFaq === i ? null : i)}
                    aria-expanded={openFaq === i}
                    style={{
                      width: "100%",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "center",
                      background: "none",
                      border: "none",
                      cursor: "pointer",
                      padding: "4px 0",
                      textAlign: "left",
                      gap: 16,
                    }}
                  >
                    <span
                      style={{
                        fontFamily: "'Nunito', 'Gotham Rounded', sans-serif",
                        fontSize: 16,
                        fontWeight: 700,
                        color: "var(--navy)",
                        flex: 1,
                      }}
                    >
                      {faq.q}
                    </span>
                    <span
                      aria-hidden="true"
                      style={{
                        width: 24,
                        height: 24,
                        borderRadius: "50%",
                        border: "1.5px solid var(--border)",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        flexShrink: 0,
                        color: "var(--orange)",
                        fontSize: 16,
                        fontWeight: 700,
                        transition: "transform 0.25s",
                        transform: openFaq === i ? "rotate(45deg)" : "none",
                      }}
                    >
                      +
                    </span>
                  </button>
                  {openFaq === i && (
                    <p
                      style={{
                        fontSize: 14,
                        lineHeight: 1.75,
                        color: "var(--text-mid)",
                        marginTop: 12,
                        maxWidth: "none",
                      }}
                    >
                      {faq.a}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <GaiaFooter />
    </>
  );
}
