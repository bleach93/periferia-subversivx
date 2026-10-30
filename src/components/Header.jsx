import { useState } from 'react';
import logoImg from '../assets/Logo.png';

export default function Header() {
  const logoSrc = typeof logoImg === 'string' ? logoImg : logoImg.src;
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="header-container">
      {/* Brand / Logo */}
      <div className="header-brand">
        <a href="/"><img src={logoSrc} alt="Logo Periferia Subversivx" className="header-logo" /></a>
        <span className="header-title">PERIFERIA<br />SUBVERSIVX</span>
      </div>

      {/* Botón Menú Hamburguesa (Móviles) */}
      <button 
        className={`hamburger-btn ${menuOpen ? 'active' : ''}`} 
        onClick={toggleMenu}
        aria-label="Abrir menú"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      {/* Navegación Principal */}
      <nav className={`header-nav ${menuOpen ? 'open' : ''}`}>
        <ul className="nav-list">
          <li><a href="#inicio" onClick={() => setMenuOpen(false)}>INICIO</a></li>
          <li><a href="#sobre-nosotras" onClick={() => setMenuOpen(false)}>NOSOTRXS</a></li>
          <li><a href="#proyectos" onClick={() => setMenuOpen(false)}>PROYECTOS</a></li>
          <li><a href="#territorio" onClick={() => setMenuOpen(false)}>TERRITORIO</a></li>
          <li><a href="#archivo" onClick={() => setMenuOpen(false)}>ARCHIVO</a></li>
          <li><a href="#contacto" onClick={() => setMenuOpen(false)}>CONTACTO</a></li>
        </ul>

        {/* Acciones y Redes */}
        <div className="header-actions">
          <a href="#donar" className="btn-apoya" onClick={() => setMenuOpen(false)}>
            APOYA <span className="heart">♡</span>
          </a>
          <div className="social-icons">
            <a href="https://www.instagram.com/periferiasubversivx/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
            <a href="https://x.com" target="_blank" rel="noreferrer" aria-label="X">
              <svg viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}