import { forwardRef } from "react";
import { useNavigate } from "react-router-dom";
import logoSombre from "../../assets/logos/Gaia_logo_principal_declinaison_sur_fond_sombre@3x.png";
import backgroundOrange from "../../assets/back.png";

const socialLinks = [
  {
    label: "Facebook",
    href: "#",
  },
  {
    label: "Instagram",
    href: "#",
  },
  {
    label: "LinkedIn",
    href: "#",
  },
];

export const GaiaFooter = forwardRef<HTMLElement>(function GaiaFooter(_, ref) {
  const navigate = useNavigate();

  function handleNav(href: string) {
    if (href.startsWith("/#")) {
      navigate("/");
      setTimeout(() => {
        document.getElementById(href.slice(2))?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <footer 
      className="gaia-footer" 
      ref={ref} 
      role="contentinfo"
      style={{
        backgroundImage: `url(${backgroundOrange})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
      }}
    >
      
      {/* ── TOP: Socials + Logo + Nav ── */}
      <div className="footer-top">
        {/* Socials (top right on desktop, top on mobile) */}
        <div className="footer-socials-top">
          {socialLinks.map((s, i) => (
            <a key={s.label} href={s.href} aria-label={s.label} className="footer-social-link">
              {s.label}
              {i < socialLinks.length - 1 && <span className="footer-social-sep">|</span>}
            </a>
          ))}
        </div>
      </div>

      {/* ── LEFT: Logo + Navigation ── */}
      <div className="footer-left-col">
        <img src={logoSombre} alt="Gaïa Studio" className="footer-logo" />
        <nav className="footer-nav">
          <ul>
            {[
              { label: "Accueil", href: "/" },
              { label: "À propos", href: "/a-propos" },
              { label: "Portfolio", href: "/portfolio" },
              { label: "Contact", href: "/contact" },
            ].map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => { e.preventDefault(); handleNav(l.href); }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>

      {/* ── CENTER: Big "Get in Touch" ── */}
      <div className="footer-center">
        <p className="footer-main-title">Get in Touch</p>
      </div>


      {/* ── SEO text block ── */}
      <div style={{ padding: "0 40px 32px", maxWidth: 900 }}>
        <p style={{ fontSize: 13, lineHeight: 1.7, color: "rgba(255,255,255,0.55)", margin: 0 }}>
          Gaïa Studio est une <strong style={{ color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>agence de branding et design graphique</strong> basée à Douala, Cameroun.
          Nous accompagnons les entreprises dans la création de leur <strong style={{ color: "rgba(255,255,255,0.7)", fontWeight: 600 }}>identité visuelle</strong>, image de marque,
          corporate branding et supports de communication. Nos services incluent : stratégie de marque, design graphique,
          UI/UX design, signalétique, packaging, goodies personnalisés et webdesign.
          Agence marketing et agence publicité à Douala — nous connectons vos marques aux personnes.
        </p>
      </div>

      {/* ── BOTTOM: Legal ── */}
      <div className="footer-bottom">
        <div className="footer-legal-left">
          <span className="footer-year">Gaïa © 2026</span>
        </div>
        <div className="footer-legal-center">
          <span className="footer-tagline">Studio créatif basé à Douala-Cameroun | We build and connect <strong>brands to people.</strong></span>
        </div>
        <div className="footer-legal-right">
          <a href="mailto:hello@gaiaimagine.com" className="footer-email-bottom">hello@gaiaimagine.com</a>
        </div>
      </div>

    </footer>
  );
});
