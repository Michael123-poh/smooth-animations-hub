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
    <>
      <nav className={`gaia-nav${solid ? " solid" : ""}`} role="navigation" aria-label="Navigation principale">
        <a href="/" className="gaia-nav-logo" onClick={(e) => { e.preventDefault(); handleNav("/"); }}>
          <img
            src={logoSombre}
            alt="Gaïa Studio"
            style={{ height: 38, width: "auto", display: "block" }}
          />
        </a>

        <ul className="gaia-nav-links" role="list">
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

        {/* Hamburger button — visible only on mobile via CSS */}
        <button
          className="gaia-hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <span className={`gaia-hamburger-bar${menuOpen ? " open-top" : ""}`} />
          <span className={`gaia-hamburger-bar${menuOpen ? " open-mid" : ""}`} />
          <span className={`gaia-hamburger-bar${menuOpen ? " open-bot" : ""}`} />
        </button>
      </nav>

      {/* Mobile menu overlay */}
      <div
        id="mobile-menu"
        className={`gaia-mobile-menu${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
      >
        <ul className="gaia-mobile-links" role="list">
          {links.map((l, i) => (
            <li key={l.href} style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
              >
                <span className="mobile-link-num">0{i + 1}</span>
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className="gaia-btn"
          style={{ marginTop: 40, alignSelf: "flex-start" }}
          onClick={() => handleNav("/contact")}
        >
          Discutons de votre projet
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
            <path d="M2 7h10M7 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </>
  );
}
