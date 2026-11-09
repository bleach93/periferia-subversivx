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
          <li><a href="/" onClick={() => setMenuOpen(false)}>INICIO</a></li>
          <li><a href="/nosotrxs" onClick={() => setMenuOpen(false)}>NOSOTRXS</a></li>
          <li><a href="/proyectos" onClick={() => setMenuOpen(false)}>PROYECTOS</a></li>
          <li><a href="/territorio" onClick={() => setMenuOpen(false)}>TERRITORIO</a></li>
          <li><a href="/archivo" onClick={() => setMenuOpen(false)}>ARCHIVO</a></li>
          <li><a href="/contacto" onClick={() => setMenuOpen(false)}>CONTACTO</a></li>
        </ul>

        {/* Acciones y Redes */}
        <div className="header-actions">
          <a href="https://www.amazon.com.mx/registries/gl/guest-view/2M476IEXK4WK7?ref_=cm_sw_r_cp_ud_ggr-subnav-share_2XWZ4AF0ACTTW5EZG32W&utm_source=ig&utm_medium=social&utm_content=link_in_bio&fbclid=PAZXh0bgNhZW0CMTEAcGRvZgJzcnRjBmFwcF9pZA85MzY2MTk3NDMzOTI0NTkAAafG6dEIRreXwYula3r_ojvU2LPKQRGLA1weG98J_mEB-XtqrwZRejhWmcqlqw_aem_UosXWvTbLdMOBqOAPyyPxQ" className="btn-apoya" onClick={() => setMenuOpen(false)} target="_blank">
            APOYA <span className="heart">♡</span>
          </a>
          <div className="social-icons">
            <a href="https://www.instagram.com/periferiasubversivx/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
}