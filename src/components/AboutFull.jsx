import React from 'react';
// Importamos la imagen directamente desde src/assets/
import bgImage from '../assets/P2_03448.jpg';

export default function AboutFull() {
  const imgSrc = typeof bgImage === 'string' ? bgImage : bgImage.src;

  return (
    <section 
      className="nosotrxs-page"
      style={{
        backgroundImage: `linear-gradient(rgba(18, 16, 22, 0.75), rgba(18, 16, 22, 0.75)), url("${imgSrc}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%;',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* 1. Encabezado Principal */}
      <div className="nosotrxs-header">
        <span className="nosotrxs-badge">¿QUIÉNES SOMOS?</span>
        <h1 className="nosotrxs-title">NOSOTRXS</h1>
        <p className="nosotrxs-lead">
          Somos una colectiva transfeminista, antirracista, decolonial y antifascista que habita y construye desde los márgenes para transformar los territorios.
        </p>
      </div>

      {/* 2. Bloque Destacado de Manifiesto */}
      <div className="manifesto-box">
        <span className="manifesto-tag">NUESTRO MANIFIESTO</span>
        <blockquote className="manifesto-quote">
          "Creemos en los cuidados colectivos como la primera forma de resistencia. Entendemos el territorio no solo como el suelo que pisamos, sino como el cuerpo y la memoria que defendemos juntas."
        </blockquote>
      </div>

      {/* 3. Grid de Ejes de Acción */}
      <div className="axes-container">
        <h2 className="axes-section-title">EJES POLÍTICOS</h2>
        <div className="axes-grid">
          <div className="axis-card">
            <span className="axis-number">01</span>
            <h3 className="axis-card-title">TERRITORIO</h3>
            <p className="axis-card-desc">
              Reivindicamos el espacio físico y digital como lugares comunitarios de memoria, autogestión y resistencia frente al despojo.
            </p>
          </div>

          <div className="axis-card">
            <span className="axis-number">02</span>
            <h3 className="axis-card-title">TRANSFEMINISMO</h3>
            <p className="axis-card-desc">
              Cuestionamos las lógicas hegemónicas e integramos a todas las corporalidades, identidades y vivencias en el centro de las luchas.
            </p>
          </div>

          <div className="axis-card">
            <span className="axis-number">03</span>
            <h3 className="axis-card-title">CUIDADOS</h3>
            <p className="axis-card-desc">
              La sostenibilidad de la vida y el apoyo mutuo son pilares innegociables. Nos cuidamos entre nosotres para sostener la colectiva.
            </p>
          </div>

          <div className="axis-card">
            <span className="axis-number">04</span>
            <h3 className="axis-card-title">DECOLONIALIDAD</h3>
            <p className="axis-card-desc">
              Desarticulamos estructuras patriarcales y racistas impuestas, promoviendo saberes locales y pedagogías populares libres.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}