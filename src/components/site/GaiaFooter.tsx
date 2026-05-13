import { forwardRef } from "react";
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
  { label: "Expression digitale", href: "/#services" },
  { label: "Supports de com.", href: "/#services" },
];

const socialLinks = [
  {
    label: "LinkedIn",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
      </svg>
    ),
  },
  {
    label: "Behance",
    href: "#",
    icon: (
      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M22 7h-7V5h7v2zm1.726 10c-.442 1.297-2.029 3-5.101 3-3.074 0-5.564-1.729-5.564-5.675 0-3.91 2.325-5.92 5.466-5.92 3.082 0 4.964 1.782 5.375 4.426.078.506.109 1.188.095 2.14H15.97c.13 3.211 3.483 3.312 4.588 2.029H23.7zm-7.726-3h3.543c-.073-1.114-.43-2.243-1.541-2.243-1.066 0-1.861.896-2.002 2.243zM8 12c2.144 0 3.5.944 3.5 2.857 0 1.025-.56 1.717-1.347 2.085C11.194 17.29 12 18.167 12 19.5 12 21.67 10.345 23 7.81 23H2V7h5.545C10.062 7 11.5 8.134 11.5 10c0 1.467-.82 2.339-1.777 2.589A2.02 2.02 0 018 12zm-3.5 4.5v2h2.968C8.686 18.5 9.5 18 9.5 17s-.814-1.5-2.032-1.5H4.5zm0-6v2H7c1.086 0 1.5-.5 1.5-1s-.414-1-1.5-1H4.5z"/>
      </svg>
    ),
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
    <footer className="gaia-footer" ref={ref} role="contentinfo">

      {/* ── TOP ROW: logo + tagline ── */}
      <div className="footer-top-row">
        <img
          src={logoSombre}
          alt="Gaïa Studio"
          className="footer-logo"
        />
        <p className="footer-top-tagline">
          Connecting brands to pe<span className="footer-o-circle">O</span>ple
        </p>
      </div>

      {/* ── SEPARATOR ── */}
      <div className="footer-sep" aria-hidden="true" />

      {/* ── MIDDLE: CTA + columns ── */}
      <div className="footer-mid">

        {/* Left — CTA */}
        <div className="footer-cta-col">
          <p className="footer-cta-label">Parlons de</p>
          <a
            className="footer-cta-link"
            href="/contact"
            onClick={(e) => { e.preventDefault(); handleNav("/contact"); }}
          >
            votre projet…
          </a>
          <div className="footer-contact-stack">
            <a href="tel:+237674410693">+237 674 410 693</a>
            <a href="mailto:hello@gaiaimagine.com">hello@gaiaimagine.com</a>
            <span>Douala, Cameroun</span>
          </div>
          <div className="footer-socials">
            {socialLinks.map((s) => (
              <a key={s.label} href={s.href} aria-label={s.label} className="footer-social-icon">
                {s.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Right — nav columns */}
        <div className="footer-nav-cols">
          <div>
            <p className="footer-col-title">Navigation</p>
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
          <div>
            <p className="footer-col-title">Services</p>
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
        </div>
      </div>

      {/* ── BIG BRAND NAME ── */}
      <div className="footer-wordmark" aria-hidden="true">GAÏA</div>

      {/* ── LEGAL ── */}
      <div className="footer-legal">
        <span>© {new Date().getFullYear()} Gaïa Studio. Tous droits réservés.</span>
        <span>Fièrement Made in Cameroun 🇨🇲</span>
      </div>

    </footer>
  );
});
