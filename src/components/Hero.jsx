// 1. SE importa la URL del video desde src/assets/
import heroVideo from '../assets/hero-video.mp4';
import resistenciaImg from '../assets/cuidado-resistencia.png';

export default function Hero() {
  return (
    <section className="hero-container">
      {/* 2. Usas la variable importada en la propiedad src */}
      <video 
        className="hero-video-bg"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source src={heroVideo} type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>
        <div className="hero-badge-right-text">
            <span>CUIDAR(NOS)</span>
            <span>TAMBIÉN ES</span>
            <span className="underline">RESISTIR</span>
            
            {/* Rayas decorativas del sticker */}
            <div className="badge-sparks">
                <span></span>
                <span></span>
                <span></span>
            </div>
        </div>
      <div className="hero-overlay"></div>

      {/* 2. Capa oscura/púrpura para dar contraste al texto (Overlay) */}
      <div className="hero-overlay"></div>

      {/* 3. Contenido de Texto */}
      <div className="hero-content">
        <span className="hero-subtitle">TERRITORIO · RESISTENCIA · CUIDADOS</span>
        
        <h1 className="hero-title">
          OTRAS FORMAS DE EXISTIR.<br />
          OTRAS FORMAS DE RESISTIR.
        </h1>

        <p className="hero-description">
          Somos una colectiva transfeminista, antirracista, decolonial y antifascista. 
          Organizamos desde los márgenes para construir comunidades más justas y libres.
        </p>

        <a href="#proyectos" className="hero-btn">
          <span>CONOCE NUESTROS PROYECTOS</span>
          <span className="btn-arrow">→</span>
        </a>
      </div>
    </section>
  );
}