import { useNavigate } from "react-router-dom";
import logoSombre from "../../assets/logos/Gaia_logo_principal_declinaison_sur_fond_sombre@3x.png";

const navLinks = [
  { label: "Accueil", href: "/" },
  { label: "À propos", href: "/a-propos" },
  { label: "Portfolio", href: "/portfolio" },
  { label: "Contact", href: "/contact" },
];

const serviceLinks = [
  { label: "Identité visuelle", href: "/#services" },
  { label: "Image de marque", href: "/#services" },
  { label: "Expérience UX", href: "/#services" },
  { label: "Supports de com.", href: "/#services" },
];

const legalLinks = [
  { label: "Politique de confidentialité", href: "#" },
  { label: "Conditions d'utilisation", href: "#" },
];

export function GaiaFooter() {
  const navigate = useNavigate();

  function handleNav(href: string) {
    if (href.startsWith("/#")) {
      navigate("/");
      setTimeout(() => {
        const id = href.slice(2);
        document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
      }, 100);
    } else {
      navigate(href);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }

  return (
    <footer className="gaia-footer" role="contentinfo">
      {/* Ambient glow top-right */}
      <div aria-hidden="true" style={{
        position: "absolute",
        top: 0,
        right: 0,
        width: 350,
        height: 350,
        borderRadius: "50%",
        background: "radial-gradient(circle, rgba(255,138,61,0.06) 0%, transparent 70%)",
        pointerEvents: "none",
      }} />

      <div className="footer-grid" style={{ position: "relative", zIndex: 1 }}>
        {/* Brand column */}
        <div>
          <img
            src={logoSombre}
            alt="Gaïa Studio"
            style={{ height: 40, width: "auto", display: "block" }}
          />
          <p className="footer-brand-desc">
            Agence de branding et design basée à Douala, Cameroun. Nous connectons les marques
            d'ici aux gens qui comptent.
          </p>
          <div style={{ display: "flex", gap: 12, marginTop: 24 }}>
            {["Li", "Ig", "Be"].map((s, idx) => {
              const full = ["LinkedIn", "Instagram", "Behance"][idx];
              return (
                <a
                  key={full}
                  href="#"
                  aria-label={`Suivez-nous sur ${full}`}
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: 8,
                    border: "1px solid rgba(255,255,255,0.1)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    color: "rgba(255,255,255,0.4)",
                    fontSize: 11,
                    fontWeight: 700,
                    transition: "all 0.2s",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,138,61,0.5)";
                    e.currentTarget.style.color = "var(--orange)";
                    e.currentTarget.style.background = "rgba(255,138,61,0.08)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)";
                    e.currentTarget.style.color = "rgba(255,255,255,0.4)";
                    e.currentTarget.style.background = "transparent";
                  }}
                >
                  {s}
                </a>
              );
            })}
          </div>
        </div>

        {/* Navigation */}
        <div>
          <div className="footer-col-title">Navigation</div>
          <ul className="footer-links">
            {navLinks.map((l) => (
              <li key={l.href}>
                <a href={l.href} onClick={(e) => { e.preventDefault(); handleNav(l.href); }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Services */}
        <div>
          <div className="footer-col-title">Services</div>
          <ul className="footer-links">
            {serviceLinks.map((l) => (
              <li key={l.label}>
                <a href={l.href} onClick={(e) => { e.preventDefault(); handleNav(l.href); }}>
                  {l.label}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact */}
        <div>
          <div className="footer-col-title">Contact</div>
          <ul className="footer-links">
            <li><a href="mailto:bonjour@gaia-studio.cm">bonjour@gaia-studio.cm</a></li>
            <li><span style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>Douala, Cameroun</span></li>
            <li><span style={{ color: "rgba(255,255,255,0.5)", fontSize: 14 }}>+237 6XX XXX XXX</span></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom" style={{ position: "relative", zIndex: 1 }}>
        <span>© {new Date().getFullYear()} Gaïa Studio. Tous droits réservés.</span>
        <span style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {legalLinks.map((l) => (
            <a key={l.label} href={l.href}>{l.label}</a>
          ))}
        </span>
        <span>Fièrement Made in Cameroun</span>
      </div>
    </footer>
  );
}
