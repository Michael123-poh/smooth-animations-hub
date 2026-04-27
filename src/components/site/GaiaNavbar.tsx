import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoSombre from "../../assets/logos/Gaia_logo_principal_declinaison_sur_fond_sombre@3x.png";

interface NavbarProps {
  solid: boolean;
}

const links = [
  { label: "Services", href: "/#services" },
  { label: "Réalisations", href: "/portfolio" },
  { label: "Notre ADN", href: "/#adn" },
  { label: "Processus", href: "/#processus" },
];

export function GaiaNavbar({ solid }: NavbarProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  function handleNav(href: string) {
    setMenuOpen(false);
    if (href.startsWith("/#")) {
      if (location.pathname !== "/") {
        navigate("/");
        setTimeout(() => {
          const id = href.slice(2);
          document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
        }, 100);
      } else {
        const id = href.slice(2);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      navigate(href);
    }
  }

  return (
    <nav className={`gaia-nav${solid ? " solid" : ""}`} role="navigation" aria-label="Navigation principale">
      <a href="/" className="gaia-nav-logo" onClick={(e) => { e.preventDefault(); handleNav("/"); }}>
        <img
          src={logoSombre}
          alt="Gaïa Studio"
          style={{ height: 38, width: "auto", display: "block" }}
        />
      </a>

      <ul className="gaia-nav-links" aria-hidden={menuOpen}>
        {links.map((l) => (
          <li key={l.href}>
            <a
              href={l.href}
              onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
              className={location.pathname === l.href ? "active" : ""}
            >
              {l.label}
            </a>
          </li>
        ))}
      </ul>

      <button
        className="gaia-btn"
        onClick={() => handleNav("/contact")}
        aria-label="Discutons de votre projet"
      >
        Discutons
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
          <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      </button>

      {/* Mobile hamburger */}
      <button
        className="gaia-hamburger"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Ouvrir le menu"
        aria-expanded={menuOpen}
        style={{
          display: "none",
          flexDirection: "column",
          gap: 5,
          background: "none",
          border: "none",
          cursor: "pointer",
          padding: 4,
        }}
      >
        {[0, 1, 2].map((i) => (
          <span
            key={i}
            style={{
              display: "block",
              width: 22,
              height: 2,
              background: "white",
              borderRadius: 1,
              transition: "all 0.2s",
            }}
          />
        ))}
      </button>
    </nav>
  );
}
