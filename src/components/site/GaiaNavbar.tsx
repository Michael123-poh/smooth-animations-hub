import { useState, useRef, useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import smileyBg from "../../assets/Man Drawing An Emoji 2 copie 2.jpg.jpeg";
import logoSombre from "../../assets/logos/Gaia_logo_principal_declinaison_sur_fond_sombre@3x.png";
import logoPrincipal from "../../assets/logos/Gaia_logo_principal@3x.png";

const links = [
  {
    label: "Notre Jardin",
    href: "/#services",
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M2 4a2 2 0 0 1 2-2h7l3 3v7a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V4z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M11 2v3h3" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        <circle cx="6" cy="8" r="1.5" stroke="currentColor" strokeWidth="1.1"/>
        <path d="M4 12l3-3 2 2 2-2.5L14 12" stroke="currentColor" strokeWidth="1.1" strokeLinejoin="round" strokeLinecap="round"/>
      </svg>
    ),
  },
  {
    label: "Nos Valeurs",
    href: "/#valeurs",
    icon: (
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
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
      <svg width="18" height="18" viewBox="0 0 16 16" fill="none" aria-hidden="true">
        <path d="M2 3a1.5 1.5 0 0 1 1.5-1.5h9A1.5 1.5 0 0 1 14 3v6a1.5 1.5 0 0 1-1.5 1.5H9.5L7 13V10.5H3.5A1.5 1.5 0 0 1 2 9V3z" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round"/>
        <path d="M5.5 6.5V5a1 1 0 0 1 1-1M9 6.5V5a1 1 0 0 1 1-1" stroke="currentColor" strokeWidth="1.1" strokeLinecap="round"/>
      </svg>
    ),
  },
];

export function GaiaNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [visible, setVisible] = useState(true);
  const prevY = useRef(0);
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const handler = () => {
      const cur = window.scrollY;
      const goingDown = cur > prevY.current;
      const nearBottom = cur + window.innerHeight >= document.documentElement.scrollHeight - 80;
      setSolid(cur > 60);
      if (cur <= 80 || menuOpen) {
        setVisible(true);
      } else if (nearBottom) {
        setVisible(false);
      } else if (goingDown) {
        setVisible(false);
      } else {
        setVisible(true);
      }
      prevY.current = cur;
    };
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, [menuOpen]);

  if (!visible && !menuOpen) return null;

  // Pages avec un haut sombre (hero accueil, portfolio, contact) → logo blanc + barres blanches
  const darkTopPage =
    location.pathname === "/" ||
    location.pathname === "/portfolio" ||
    location.pathname === "/contact";

  // Menu ouvert → fond bleu : logo + barres en blanc.
  // Sinon : barres blanches sur les pages à haut sombre non défilées.
  const onHero = menuOpen || (darkTopPage && !solid);

  // Logo dans la navbar : menu ouvert (toutes pages), ou pages non-accueil en haut
  const showNavLogo = menuOpen || (location.pathname !== "/" && !solid);
  // Fond sombre (menu ouvert, contact, portfolio) → logo clair ; sinon logo principal
  const navLogoSrc =
    menuOpen || location.pathname === "/contact" || location.pathname === "/portfolio"
      ? logoSombre
      : logoPrincipal;

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
        {showNavLogo && (
          <a
            href="/"
            className="gaia-nav-logo"
            style={{ marginRight: "auto" }}
            onClick={(e) => { e.preventDefault(); navigate("/"); }}
          >
            <img
              src={navLogoSrc}
              alt="Gaïa Studio"
              style={{
                height: location.pathname === "/portfolio" ? 68 : 48,
                width: "auto",
                display: "block",
              }}
            />
          </a>
        )}
        <button
          className={`gaia-hamburger${onHero ? "" : " dark"}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={menuOpen}
          aria-controls="nav-overlay"
        >
          <span className={`gaia-hamburger-bar${menuOpen ? " open-top" : ""}`} />
          <span className={`gaia-hamburger-bar${menuOpen ? " open-mid" : ""}`} />
          <span className={`gaia-hamburger-bar${menuOpen ? " open-bot" : ""}`} />
        </button>
      </nav>

      {/* Navigation overlay */}
      <div
        id="nav-overlay"
        className={`gaia-mobile-menu${menuOpen ? " open" : ""}`}
        aria-hidden={!menuOpen}
        style={{
          backgroundImage: `url(${smileyBg})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center center",
          backgroundSize: "cover",
        }}
      >
        <ul className="gaia-mobile-links" role="list">
          {links.map((l, i) => (
            <li key={l.href} style={{ transitionDelay: menuOpen ? `${i * 60}ms` : "0ms" }}>
              <a
                href={l.href}
                onClick={(e) => { e.preventDefault(); handleNav(l.href); }}
                className={location.pathname === l.href ? "active" : ""}
              >
                <span className="mobile-link-icon">{l.icon}</span>
                <span className="mobile-link-text">{l.label}</span>
              </a>
            </li>
          ))}
        </ul>

        <div className="nav-social-row">
          <a href="#" className="nav-social-link" aria-label="Facebook">
            <span className="nav-social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3V2z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span>Facebook</span>
          </a>
          <a href="#" className="nav-social-link" aria-label="Instagram">
            <span className="nav-social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" stroke="currentColor" strokeWidth="1.6"/>
                <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.6"/>
                <circle cx="17.5" cy="6.5" r="1" fill="currentColor"/>
              </svg>
            </span>
            <span>Instagram</span>
          </a>
          <a href="#" className="nav-social-link" aria-label="WhatsApp">
            <span className="nav-social-icon">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
            <span>WhatsApp</span>
          </a>
        </div>
      </div>
    </>
  );
}
