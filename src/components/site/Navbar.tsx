import { GIcon, ChevronDown } from "./Shared";

interface NavbarProps {
  navSolid: boolean;
}

export const Navbar = ({ navSolid }: NavbarProps) => {
  return (
    <nav className={navSolid ? "solid" : ""} style={{ padding: '20px 56px' }}>
      <a href="#" className="nav-logo" style={{ transition: 'transform .3s' }}><GIcon /></a>
      <ul className="nav-links">
        <li><a href="#home">Accueil</a></li>
        <li><a href="#cases" className="drop" style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
          Réalisations <ChevronDown size={12} strokeWidth={3} style={{ opacity: 0.6 }} />
        </a></li>
        <li><a href="#about">Notre ADN</a></li>
        <li><a href="#blog">Blog</a></li>
      </ul>
      <button className="btn-y" style={{ background: 'var(--orange)', color: 'white' }}>
        Lancer un projet
      </button>
    </nav>
  );
};