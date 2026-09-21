import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { GaiaNavbar } from "../components/site/GaiaNavbar";
import statueImg from "../assets/Cameroon Statue 2.png";
import crowdImg from "../assets/Group of people walking forward 1.webp";

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
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

export default function About() {
  const scrollY = useScrollY();
  useReveal();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>À propos — Gaïa Studio | Agence Branding &amp; Communication Douala</title>
        <meta
          name="description"
          content="Découvrez l'histoire de Gaïa Studio, agence de branding et communication créative à Douala, Cameroun."
        />
        <link rel="canonical" href="https://gaiaimagine.com/a-propos" />
        <meta property="og:url" content="https://gaiaimagine.com/a-propos" />
        <meta property="og:title" content="À propos — Gaïa Studio | Agence Branding Douala" />
      </Helmet>
      <a href="#main-content" className="skip-link">
        Aller au contenu principal
      </a>
      <GaiaNavbar solid={scrollY > 60} />

      <main id="main-content">
        <div style={{ position: "relative", background: "var(--cream)" }}>
          {/* Section du haut : zIndex: 10 pour rester AU-DESSUS de la foule */}
          <section
            className="about-story-top"
            style={{
              position: "relative",
              overflow: "hidden",
              background: "var(--blue-navy)",
              zIndex: 10,
            }}
            aria-label="Notre histoire"
          >
            <div className="section-label reveal" style={{ color: "var(--orange)" }}>
              Notre histoire
            </div>
            <h1
              className="gaia-h2 reveal d1"
              style={{
                fontSize: "clamp(34px, 4.2vw, 56px)",
                fontWeight: 800,
                maxWidth: 620,
                lineHeight: 1.05,
                color: "var(--cream)",
              }}
            >
              Une vision devenue
              <br />
              une réalité...
            </h1>
          </section>

          {/* Statue : zIndex: 12 */}
          <img
            src={statueImg}
            alt="Statue dorée symbolisant l'ambition des marques camerounaises"
            className="reveal-right d2 about-statue-img"
            style={{
              position: "absolute",
              top: "80px",
              right: "14%",
              width: "70%",
              maxWidth: 650,
              height: "auto",
              zIndex: 12,
              pointerEvents: "none",
            }}
          />

          {/* Texte : zIndex: 8 pour flotter au-dessus de la foule */}
          <section
            className="about-story-bottom"
            style={{ background: "transparent", position: "relative", zIndex: 8, pointerEvents: "none" }}
          >
            <div className="about-text-grid" style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 80, pointerEvents: "auto" }}>
              <div className="reveal-left d1 about-text-col about-text-col--left" style={{ paddingTop: 50, paddingBottom: 0 }}>
                <p
                  className="about-text-p"
                  style={{
                    fontWeight: 300,
                    fontSize: 17,
                    lineHeight: 1.1,
                    color: "var(--text-mid)",
                    marginBottom: 12,
                    maxWidth: 500,
                  }}
                >
                  Tout a commencé par un constat simple, <br /> presque dérangeant. En parcourant les <br />
                  rues de nos villes, les rayons de nos su-<br /> permarchés, les réseaux sociaux et inter-<br />
                  net, une question revenait sans cesse :
                </p>

                <p
                  className="about-text-p about-text-p--hide-mobile"
                  style={{
                    fontWeight: 300,
                    fontSize: 17,
                    lineHeight: 1.1,
                    color: "var(--text-mid)",
                    marginBottom: 12,
                    maxWidth: 500,
                  }}
                >
                  Pourquoi les Entreprises et Produits <br /> Made in Cameroon sont si peu attirants ? <br />
                  Pourquoi nos marques, aussi pleines de <br /> promesses, semblent-elles inachevées ? <br />
                  Des identités visuelles inexistantes, des <br /> logotypes approximatifs, des messages <br />
                  sans cohérence. Des packagings ternes. <br /> Des marques qui existent, mais qui <br />
                  peinent à être remarquées, comprises et <br /> choisies.
                </p>

                <p
                  className="about-text-p about-text-p--hide-mobile"
                  style={{
                    fontWeight: 300,
                    fontSize: 17,
                    lineHeight: 1.1,
                    color: "var(--text-mid)",
                    marginBottom: 0,
                    maxWidth: 500,
                  }}
                >
                  Et Pourtant... derrière ces produits, il y a <br /> de la passion. Il y a des femmes et des <br />
                  hommes qui travaillent dur, qui croient en <br /> leurs rêves, qui portent une vision.
                </p>
              </div>

              <div className="reveal-right d2 about-text-col about-text-col--right" style={{ paddingTop: 220, paddingBottom: 0 }}>
                <p
                  className="about-text-p"
                  style={{
                    fontWeight: 300,
                    fontSize: 17,
                    lineHeight: 1.1,
                    color: "var(--text-mid)",
                    marginBottom: 22,
                    maxWidth: 500,
                  }}
                >
                  Alors... qu'est-ce qui cloche ? C'est de cette <br />
                  idée qu'est née gaïa, un nom choisi en écho <br />
                  à la déesse de la Terre, celle qui nourrit, qui <br />
                  révèle, qui fait croître.
                </p>

                <p
                  className="about-text-p"
                  style={{
                    fontFamily: "'Gotham Rounded', 'Nunito', sans-serif",
                    fontSize: 17,
                    fontWeight: 700,
                    color: "var(--blue-navy)",
                    lineHeight: 1.1,
                    maxWidth: 500,
                  }}
                >
                  Nous voulions faire de gaïa un terreau <br />
                  fertile où chaque marque pourrait éclore,
                  <br />
                  grandir et se déployer.
                </p>
              </div>
            </div>
          </section>

          {/* Foule : zIndex: 1 (Reste sous le texte et sous la bande bleue) */}
          <div
            className="about-crowd-wrap"
            style={{
              marginTop: "-1100px",
              position: "relative",
              zIndex: 1,
              WebkitMaskImage: "linear-gradient(to bottom, transparent 0%, black 60px, black 100%)",
              maskImage: "linear-gradient(to bottom, transparent 0%, black 60px, black 100%)",
            }}
          >
            <img
              src={crowdImg}
              alt="Foule de personnes en mouvement"
              className="reveal"
              style={{ width: "100%", height: "auto", display: "block" }}
            />
          </div>
        </div>
      </main>
    </>
  );
}