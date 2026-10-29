export default function Contact() {
  return (
    <section id="contacto" className="participate-container">
      {/* 1. Sello tipográfico a la izquierda */}
      <div className="participate-badge">
        <span>TU APOYO</span>
        <span>TAMBIÉN ES</span>
        <span className="underline">RESISTENCIA</span>
        <div className="badge-line"></div>
      </div>

      {/* 2. Contenido central: Título y descripción */}
      <div className="participate-content">
        <h2 className="participate-title">¿CÓMO PUEDES PARTICIPAR?</h2>
        <p className="participate-description">
          Tu apoyo nos ayuda a seguir construyendo proyectos, llegar a más territorios y fortalecer nuestras redes.
        </p>
      </div>

      {/* 3. Botones de acción a la derecha */}
      <div className="participate-actions">
        {/* Botón 1: Donar */}
        <a href="#donar" className="btn-pill">
          <span>DONAR</span>
          <svg className="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
          </svg>
        </a>

        {/* Botón 2: Voluntariado */}
        <a href="#voluntariado" className="btn-pill">
          <span>VOLUNTARIADO</span>
          <span className="btn-arrow">→</span>
        </a>

        {/* Botón 3: Contacto */}
        <a href="#contacto-form" className="btn-pill">
          <span>CONTACTO</span>
          <span className="btn-arrow">→</span>
        </a>
      </div>
    </section>
  );
}