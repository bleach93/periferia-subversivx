import aboutImg from '../assets/about-hands.png';

export default function About() {
  const imgSrc = typeof aboutImg === 'string' ? aboutImg : aboutImg?.src || '/assets/about-hands.png';

  const axes = [
    {
      id: 1,
      title: 'SALUD COMUNITARIA',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
        </svg>
      )
    },
    {
      id: 2,
      title: 'TERRITORIO Y ECOLOGÍA',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10z"></path>
          <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"></path>
        </svg>
      )
    },
    {
      id: 3,
      title: 'MEMORIA Y JUSTICIA',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
          <circle cx="9" cy="7" r="4"></circle>
          <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
          <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
        </svg>
      )
    },
    {
      id: 4,
      title: 'CULTURA Y EDUCACIÓN POPULAR',
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2L2 7l10 5 10-5-10-5z"></path>
          <path d="M2 17l10 5 10-5"></path>
          <path d="M2 12l10 5 10-5"></path>
        </svg>
      )
    }
  ];

  return (
    <section id="sobre-nosotras" className="about-container">
      {/* Columna 1: Collage de Manos a la izquierda */}
      <div className="about-media">
        <div className="about-image-wrapper">
          <img src={imgSrc} alt="Manos unidas colectiva" className="about-image" />
          {/* Rayas/Destellos en la imagen */}
          <div className="about-sparks">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      {/* Columna 2: Texto Principal */}
      <div className="about-content">
        <span className="about-subtitle">SOBRE NOSOTRXS</span>
        <h2 className="about-title">
          UNA COLECTIVA<br />
          DESDE EL MARGEN
        </h2>
        <p className="about-description">
          Periferia Subversivx nace de la necesidad de organizar, cuidar y resistir. 
          Creemos en la fuerza de la comunidad, en la autonomía y en la construcción 
          de otros mundos posibles.
        </p>
        <a href="#mas-informacion" className="about-link">
          <span>CONOCE MÁS SOBRE NOSOTRAS</span>
          <span className="arrow">→</span>
        </a>
      </div>

      {/* Divisor Vertical */}
      <div className="about-divider"></div>

      {/* Columna 3: Ejes Temáticos */}
      <div className="about-axes">
        <ul className="axes-list">
          {axes.map((axis) => (
            <li key={axis.id} className="axis-item">
              <div className="axis-icon">{axis.icon}</div>
              <span className="axis-title">{axis.title}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Rayón decorativo en la esquina inferior derecha */}
      <div className="about-corner-scribble">
        <svg viewBox="0 0 100 40" fill="none" stroke="#A88BC4" strokeWidth="3" strokeLinecap="round">
          <path d="M 5 35 L 90 10 M 20 38 L 95 18 M 50 38 L 98 25" />
        </svg>
      </div>
    </section>
  );
}