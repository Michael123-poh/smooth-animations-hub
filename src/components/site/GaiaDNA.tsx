import { useEffect, useRef } from "react";
import happyWoman from "../../assets/Ressources Site Web 2/Notre ADN/Happy_Woman_Expressing_Wonder.png";
import statExpertise from "../../assets/Ressources Site Web 2/Notre ADN/Notre_ADN_1.svg";
import statBranding from "../../assets/Ressources Site Web 2/Notre ADN/Notre_ADN_2.svg";
import statClients from "../../assets/Ressources Site Web 2/Notre ADN/Notre_ADN_3.svg";
import patternSombre from "../../assets/deco/Gaia_Decorative_Pattern_Fond_Sombre@3x.png";

const columns = [
  {
    title: <>Bien plus qu'un<br />studio créatif,</>,
    body: "Nous sommes des passionnés, des créatifs qui se positionnent à l'intersection de l'humain et du design. Notre spécialité réside dans la création de solutions visuelles sur-mesure, conçues pour capter l'attention de vos clients et construire un véritable lien émotionnel avec votre public.",
  },
  {
    title: <>L'humain<br />est au cœur</>,
    body: "de notre processus créatif, afin de façonner une image qui parle à votre public. Pour nous, chaque projet est une occasion en or de tisser un lien émotionnel entre votre marque et sa cible, nous appelons cela : Connecting Brands to People (B2P).",
  },
  {
    title: <>Toute notre<br />expertise est dédiée</>,
    body: "à donner vie à des images de marque, des identités visuelles, des expériences utilisateur et des supports de communication qui propulseront vos idées vers les sommets. Chaque pixel, chaque ligne, chaque couleur est minutieusement pensé, rien n'est laissé au hasard parce que vous méritez la perfection.",
  },
];

const stats = [
  { img: statExpertise, alt: "6+ années d'expertise" },
  { img: statBranding, alt: "120+ projets de branding" },
  { img: statClients, alt: "98% clients satisfaits" },
];

export function GaiaDNA() {
  const patternRef = useRef<HTMLDivElement>(null);
  const raf = useRef<number>(0);

  useEffect(() => {
    const section = patternRef.current?.closest("section");
    function tick() {
      if (patternRef.current && section) {
        const rect = section.getBoundingClientRect();
        const progress = -rect.top / window.innerHeight;
        patternRef.current.style.transform = `translateY(${progress * 30}px)`;
      }
      raf.current = requestAnimationFrame(tick);
    }
    raf.current = requestAnimationFrame(tick);
    return () => { cancelAnimationFrame(raf.current); };
  }, []);

  return (
    <section className="gaia-dna" id="adn" aria-label="Notre ADN">
      <div
        ref={patternRef}
        aria-hidden="true"
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: `url(${patternSombre})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          opacity: 0.06,
          mixBlendMode: "soft-light",
          pointerEvents: "none",
          willChange: "transform",
        }}
      />

      <div className="dna-top" style={{ position: "relative", zIndex: 1 }}>
        {/* Gauche — photo dans le motif d'empreinte + titre */}
        <div className="dna-visual reveal-left">
          <img
            src={happyWoman}
            alt="Femme souriante, illustration du lien émotionnel entre les marques et les personnes"
            className="dna-fingerprint-img"
          />
          <div className="section-label">Notre ADN</div>
          <h2 className="dna-h2" id="dna-heading">
            Connecting brands<br />
            to pe<span className="dna-o-accent">o</span>ple (B2P)
          </h2>
        </div>

        {/* Droite — 3 cartes stats empilées */}
        <div className="dna-stats-stack reveal-right">
          {stats.map((s) => (
            <img key={s.alt} src={s.img} alt={s.alt} className="dna-stat-card" />
          ))}
        </div>
      </div>

      {/* Bas — 3 colonnes de texte titrées */}
      <div className="dna-cols-panel reveal">
        {columns.map((c, i) => (
          <div key={i} className="dna-col">
            <h3 className="dna-col-title">{c.title}</h3>
            <p className="dna-body">{c.body}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
