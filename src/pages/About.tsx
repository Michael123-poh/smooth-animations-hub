import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { GaiaNavbar } from "../components/site/GaiaNavbar";
import { GaiaFooter } from "../components/site/GaiaFooter";
import statueImg from "../assets/Cameroon Statue 2.png";
import crowdImg from "../assets/Group of people walking (2) copie 2.png";

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

export default function About() {
  const scrollY = useScrollY();
  useReveal();

  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <>
      <Helmet>
        <title>À propos — Gaïa Studio | Agence Branding &amp; Communication Douala</title>
        <meta name="description" content="Découvrez l'histoire de Gaïa Studio, agence de branding et communication créative à Douala, Cameroun." />
        <link rel="canonical" href="https://gaiaimagine.com/a-propos" />
        <meta property="og:url" content="https://gaiaimagine.com/a-propos" />
        <meta property="og:title" content="À propos — Gaïa Studio | Agence Branding Douala" />
      </Helmet>
      <a href="#main-content" className="skip-link">Aller au contenu principal</a>
      <GaiaNavbar solid={scrollY > 60} />

      <main id="main-content">
        {/* Notre Histoire */}
        <div style={{ position: "relative" }}>
          {/* Bandeau navy du haut */}
          <section
            style={{
              background: "var(--blue-navy)",
              padding: "150px 80px 90px",
              position: "relative",
              overflow: "hidden",
            }}
            aria-label="Notre histoire"
          >
            <div className="section-label reveal" style={{ color: "var(--orange)" }}>Notre histoire</div>
            <h1
              className="gaia-h2 on-dark reveal d1"
              style={{ fontSize: "clamp(34px, 4.2vw, 56px)", fontWeight: 800, maxWidth: 620, lineHeight: 1.05 }}
            >
              Une vision devenue<br />une réalité...
            </h1>
          </section>

          {/* Statue — chevauche le bandeau navy et la section blanche */}
          <img
            src={statueImg}
            alt="Statue dorée symbolisant l'ambition des marques camerounaises"
            className="reveal-right d2"
            style={{
              position: "absolute",
              top: "6%",
              right: "9%",
              width: "24%",
              maxWidth: 420,
              height: "auto",
              zIndex: 3,
              pointerEvents: "none",
            }}
          />

          {/* Texte sur fond blanc */}
          <section style={{ background: "var(--cream)", padding: "0 80px 0", position: "relative" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80 }}>
              <div className="reveal-left d1" style={{ paddingTop: 56, paddingBottom: 56 }}>
                <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--text-mid)", marginBottom: 20, maxWidth: "none" }}>
                  Tout a commencé par un constat simple, presque dérangeant. En parcourant les rues de nos villes, les rayons de nos supermarchés, les réseaux sociaux et internet, une question revenait sans cesse :
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--text-mid)", marginBottom: 20, maxWidth: "none" }}>
                  Pourquoi les Entreprises et Produits Made in Cameroon sont si peu attirants ? Pourquoi nos marques, aussi pleines de promesses, semblent-elles inachevées ? Des identités visuelles inexistantes, des logotypes approximatifs, des messages sans cohérence. Des packagings ternes. Des marques qui existent, mais qui peinent à être remarquées, comprises et choisies.
                </p>
                <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--text-mid)", marginBottom: 0, maxWidth: "none" }}>
                  Et pourtant... derrière ces produits, il y a de la passion. Il y a des femmes et des hommes qui travaillent dur, qui croient en leurs rêves, qui portent une vision.
                </p>
              </div>

              <div className="reveal-right d2" style={{ paddingTop: 190, paddingBottom: 56 }}>
                <p style={{ fontSize: 16, lineHeight: 1.75, color: "var(--text-mid)", marginBottom: 24, maxWidth: "none" }}>
                  Alors... qu'est-ce qui cloche ? C'est de cette idée qu'est née gaïa, un nom choisi en écho à la déesse de la Terre, celle qui nourrit, qui révèle, qui fait croître.
                </p>
                <p style={{ fontFamily: "'Gotham Rounded', 'Nunito', sans-serif", fontSize: 17, fontWeight: 700, color: "var(--blue-navy)", lineHeight: 1.5, maxWidth: "none" }}>
                  Nous voulions faire de gaïa un terreau fertile où chaque marque pourrait éclore, grandir et se déployer.
                </p>
              </div>
            </div>
          </section>

          {/* Foule — pleine largeur */}
          <img
            src={crowdImg}
            alt="Foule de personnes en mouvement, symbolisant les marques et les personnes qu'elles touchent"
            className="reveal"
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
      </main>
    </>
  );
}