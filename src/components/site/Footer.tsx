import { GIcon } from "./Shared";

export const Footer = () => {
  return (
    <footer style={{ background: 'var(--navy3)' }}>
      <div className="ft-grid">
        <div className="ft-brand">
          <GIcon />
          <p style={{ marginTop: '24px', opacity: 0.7 }}>
            Studio de design d'excellence, connectant les marques au cœur des gens à travers des expériences mémorables.
          </p>
        </div>
        {[
          { title: "Expertise", links: ["Branding & Identité", "Design UX/UI", "Stratégie Digitale", "Développement Web"] },
          { title: "Studio", links: ["Notre ADN", "Méthodologie", "Réalisations", "Blog"] },
          { title: "Contact", links: ["Discuter d'un projet", "hello@gaialab.africa", "Cameroun, Douala", "LinkedIn"] },
        ].map((col, i) => (
          <div key={i} className="ft-col">
            <h4 style={{ color: 'var(--orange)', opacity: 1 }}>{col.title}</h4>
            <ul>{col.links.map(l => <li key={l}><a href="#">{l}</a></li>)}</ul>
          </div>
        ))}
      </div>
      <div className="ft-bot" style={{ borderColor: 'rgba(255,255,255,0.05)' }}>
        <span>\u00A9 2024 GA\u00CFA Africa. Tous droits réservés.</span>
        <span style={{ color: 'var(--orange)' }}>Connecting brands to peOple</span>
      </div>
    </footer>
  );
};
