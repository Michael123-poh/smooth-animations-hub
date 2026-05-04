import { useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import logoSombre from "../../assets/logos/Gaia_logo_principal_declinaison_sur_fond_sombre@3x.png";

interface NavbarProps {
  solid: boolean;
}

const links = [
  {
    label: "Notre Jardin",
    href: "/#services",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <rect x="2" y="2" width="5.5" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="8.5" y="2" width="5.5" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="2" y="8.5" width="5.5" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
        <rect x="8.5" y="8.5" width="5.5" height="5.5" rx="1.5" stroke="currentColor" strokeWidth="1.2"/>
      </svg>
    ),
  },
  {
    label: "Notre ADN",
    href: "/#adn",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="8" cy="8" r="6.5" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.5"/>
        <circle cx="8" cy="8" r="3.5" stroke="currentColor" strokeWidth="1.2" strokeOpacity="0.75"/>
        <circle cx="8" cy="8" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
  {
    label: "Nos Récoltes",
    href: "/portfolio",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M2 4a2 2 0 0 1 2-2h7l3 3v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M11 2v3h3" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        <circle cx="6" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.1"/>
        <path d="M4 12l3-3 2 2 2-2.5L14 12" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Nos Titans",
    href: "/#equipe",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <circle cx="6" cy="5" r="2.2" stroke="currentColor" strokeWidth="1.2"/>
        <path d="M1.5 13.5C1.5 11 3.5 9.5 6 9.5s4.5 1.5 4.5 4" stroke="currentColor" strokeWidth="1.2" strokeLinecap="round"/>
        <circle cx="11.5" cy="5" r="1.8" stroke="currentColor" strokeWidth="1.1" strokeOpacity="0.65"/>
        <path d="M13.5 13.5c0-2-1.2-3.2-3-3.6" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round" strokeOpacity="0.65"/>
      </svg>
    ),
  },
  {
    label: "Notre Écho",
    href: "/#temoignages",
    icon: (
      <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M2 3a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 14 3v6a1.5 1.5 0 0 1-1.5 1.5H9.5L7 13V10.5H3.5A1.5 1.5 0 0 1 2 9V3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M5.5 6.5V5a1 1 0 0 1 1-1M9 6.5V5a1 1 0 0 1 1-1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
  },
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
                {l.icon}
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
                <span className="mobile-link-icon">{l.icon}</span>
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
