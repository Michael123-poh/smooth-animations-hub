import { useEffect, useState } from "react";
import { GaiaNavbar } from "../components/site/GaiaNavbar";
import { GaiaFooter } from "../components/site/GaiaFooter";
import { GaiaCircleMotif } from "../components/site/GaiaCircleMotif";
import { GaiaPillars } from "../components/site/GaiaPillars";

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
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

const team = [
  { name: "Amina K.", role: "Directrice créative & fondatrice", initials: "AK", color: "#FF8A3D" },
  { name: "Thierry M.", role: "Designer identité visuelle", initials: "TM", color: "#1E3A5F" },
  { name: "Clarisse N.", role: "Stratège de marque", initials: "CN", color: "#2A4E7B" },
  { name: "Boris E.", role: "Designer UX/UI", initials: "BE", color: "#7B3F2A" },
];

export default function About() {
  const scrollY = useScrollY();
  useReveal();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>
      <GaiaNavbar solid={scrollY > 60} />

      <main id="main-content">
        {/* Hero */}
        <section
          style={{
            background: "var(--navy)",
            minHeight: "60dvh",
            display: "flex",
            alignItems: "center",
            padding: "140px 80px 100px",
            position: "relative",
            overflow: "hidden",
          }}
          aria-label="À propos de Gaïa"
        >
          <div style={{ position: "absolute", right: -80, top: "50%", transform: "translateY(-50%)", opacity: 0.15, pointerEvents: "none" }} aria-hidden="true">
            <GaiaCircleMotif variant="dna" size={500} />
          </div>
          <div style={{ position: "relative", zIndex: 1, maxWidth: 720 }}>
            <div className="section-label" style={{ color: "var(--orange)" }}>Notre histoire</div>
            <h1
              className="gaia-h2 on-dark reveal"
              style={{ fontSize: "clamp(36px, 5vw, 72px)", marginBottom: 24 }}
            >
              Nous croyons que<br />chaque marque africaine<br />
              <span style={{ color: "var(--orange)" }}>mérite de briller</span>
            </h1>
            <p className="section-sub on-dark reveal d2" style={{ maxWidth: 560 }}>
              Gaïa est née d'une conviction simple : les entreprises camerounaises ont des histoires
              puissantes à raconter. Nous sommes là pour les mettre en lumière.
            </p>
          </div>
        </section>

        {/* Story */}
        <section style={{ background: "var(--cream)", padding: "100px 80px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, alignItems: "center" }}>
            <div className="reveal-left">
              <div className="section-label">Notre genèse</div>
              <h2 className="gaia-h2" style={{ marginBottom: 24 }}>
                Douala, 2018.<br />Une idée, une passion.
              </h2>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-mid)", marginBottom: 20, maxWidth: "none" }}>
                Gaïa a été fondée par une équipe de créatifs passionnés qui partageaient un même constat :
                les agences de branding au Cameroun étaient soit trop chères, soit trop génériques.
                Il manquait un studio qui comprenne vraiment la culture locale, ses codes, ses aspirations.
              </p>
              <p style={{ fontSize: 16, lineHeight: 1.8, color: "var(--text-mid)", marginBottom: 20, maxWidth: "none" }}>
                Le nom "Gaïa" — déesse grecque de la Terre — n'est pas un hasard. Comme la terre qui
                nourrit les racines pour que les arbres grandissent, nous cultivons vos fondations
                de marque pour que votre business s'épanouisse durablement.
              </p>
              <blockquote
                style={{
                  borderLeft: "3px solid var(--orange)",
                  paddingLeft: 20,
                  marginTop: 28,
                }}
              >
                <p style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, fontStyle: "italic", fontWeight: 600, color: "var(--navy)", lineHeight: 1.6, maxWidth: "none" }}>
                  "Nous façonnons des marques qui parlent au cœur, parce que votre histoire
                  mérite d'être racontée avec excellence."
                </p>
              </blockquote>
            </div>

            <div className="reveal-right d2" style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
              <GaiaCircleMotif variant="hero" size={420} />
            </div>
          </div>
        </section>

        {/* Team */}
        <section style={{ background: "var(--beige)", padding: "100px 80px" }}>
          <div style={{ marginBottom: 56 }}>
            <div className="section-label">L'équipe</div>
            <h2 className="gaia-h2 reveal" style={{ maxWidth: 480 }}>
              Des humains derrière chaque création
            </h2>
          </div>

          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
            {team.map((member, i) => (
              <div
                key={member.name}
                className={`reveal d${i + 1}`}
                style={{
                  background: "white",
                  border: "1px solid var(--border)",
                  borderRadius: 20,
                  padding: "36px 28px",
                  textAlign: "center",
                  transition: "transform 0.25s, box-shadow 0.25s",
                  cursor: "default",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = "var(--shadow-warm)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "";
                  e.currentTarget.style.boxShadow = "";
                }}
              >
                <div
                  style={{
                    width: 72,
                    height: 72,
                    borderRadius: 18,
                    background: `linear-gradient(135deg, ${member.color}, var(--orange))`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: "'Plus Jakarta Sans', sans-serif",
                    fontWeight: 800,
                    fontSize: 22,
                    color: "white",
                    margin: "0 auto 20px",
                  }}
                  aria-hidden="true"
                >
                  {member.initials}
                </div>
                <div style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 17, fontWeight: 700, color: "var(--navy)", marginBottom: 6 }}>
                  {member.name}
                </div>
                <div style={{ fontSize: 13, color: "var(--text-muted)", fontWeight: 500 }}>
                  {member.role}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Values */}
        <GaiaPillars />
      </main>

      <GaiaFooter />
    </>
  );
}
