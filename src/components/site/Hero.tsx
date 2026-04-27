import { useState } from "react";
import { Stars, Palette, Zap, Monitor, Check } from "./Shared";

interface HeroProps {
  scrollY: number;
}

export const Hero = ({ scrollY }: HeroProps) => {
  const [htab, setHtab] = useState(1);
  const heroP = scrollY * 0.28;
  const imgP = scrollY * 0.12;

  const tabs = [
    { id: 0, icon: <Palette size={16} />, label: "Branding" },
    { id: 1, icon: <Zap size={16} />, label: "Stratégie" },
    { id: 2, icon: <Monitor size={16} />, label: "Digital" }
  ];

  return (
    <section className="hero" id="home">
      <div className="hero-bg" style={{ transform: `translateY(${-heroP * 0.4}px)` }} />
      <Stars />

      <div className="hero-left">
        <div className="webflow-badge" style={{ transform: `translateY(${-heroP * 0.15}px)` }}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
            <path d="M12 3L20 7V12C20 16.4 16.5 20.5 12 21C7.5 20.5 4 16.4 4 12V7L12 3Z" fill="#f58220" opacity=".3" />
            <path d="M12 3L20 7V12C20 16.4 16.5 20.5 12 21C7.5 20.5 4 16.4 4 12V7L12 3Z" stroke="#f58220" strokeWidth="1.5" />
          </svg>
          Connecting brands to peOple
        </div>
        <h1 style={{ transform: `translateY(${-heroP * 0.2}px)` }}>
          Connecter votre vision<br />au cœur de l'humain
        </h1>
        <p className="hero-sub" style={{ transform: `translateY(${-heroP * 0.24}px)` }}>
          Nous ne créons pas seulement des designs ; nous bâtissons des identités audacieuses qui résonnent et transforment vos ambitions en territoires de réussite.
        </p>
        <button className="btn-y" style={{ transform: `translateY(${-heroP * 0.28}px)` }}>
          Découvrir notre ADN
        </button>
        <ul className="hero-checks" style={{ transform: `translateY(${-heroP * 0.28}px)` }}>
          {["Identités visuelles mémorables", "Expériences digitales immersives", "Accompagnement stratégique sur-mesure"].map(t => (
            <li key={t}><span className="chk"><Check size={14} strokeWidth={3} /></span>{t}</li>
          ))}
        </ul>
      </div>

      <div className="hero-right">
        <div className="hero-img-wrap" style={{ transform: `translateY(${-imgP}px)` }}>
          <img
            className="hero-main-img"
            src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=1200&q=85"
            alt="Équipe créative Gaïa au travail"
          />
          <div className="hero-rocket-badge" style={{ background: '#f58220', borderRadius: '14px', padding: '10px' }}>
             <img
              src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=400&q=80"
              alt="Design thinking session"
              style={{ borderRadius: '8px' }}
            />
          </div>
        </div>
      </div>

      <div className="hero-tabs">
        {tabs.map((t) => (
          <div key={t.id} className={`htab ${htab === t.id ? "active" : ""}`} onClick={() => setHtab(t.id)}>
            <span style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{t.icon}</span> {t.label}
          </div>
        ))}
      </div>
    </section>
  );
};