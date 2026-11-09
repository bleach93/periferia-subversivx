import React, { useState } from 'react';

export default function ContactFull() {
  const [formData, setFormData] = useState({
    nombre: '',
    contacto: '',
    asunto: 'acopio',
    mensaje: '',
    anonimo: false
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes integrar servicios como Formspree, EmailJS o tu backend en n8n
    console.log("Formulario enviado:", formData);
    setSubmitted(true);
  };

  return (
    <section className="contact-page">
      {/* 1. Encabezado */}
      <div className="contact-header">
        <span className="contact-badge">RED DE CUIDADOS Y ARTICULACIÓN</span>
        <h1 className="contact-title">PONTE EN CONTACTO</h1>
        <p className="contact-lead">
          Ya sea para sumarte a las Brigadas de Salud, donar a las colectas para familias desplazadas, proponer una alianza o solicitar acompañamiento psicosocial seguro.
        </p>
      </div>

      <div className="contact-container">
        {/* 2. Canales Directos / Información de Seguridad */}
        <div className="contact-info-panel">
          <div className="info-block">
            <span className="info-tag">ACOMPAÑAMIENTO DIRECTO</span>
            <h3>ESPACIO SEGURO Y ANÓNIMO</h3>
            <p>
              Entendemos el contexto del territorio. Todos los acompañamientos psicosociales y solicitudes de apoyo pueden tratarse con seudónimos o de forma completamente anónima.
            </p>
          </div>

          <div className="info-block">
            <span className="info-tag">PUNTOS DE ACOPIO & BASE</span>
            <h3>MAZATLÁN, SINALOA</h3>
            <p>
              Para entregas de viveres, medicamentos e insumos odontológicos, coordinamos entregas en puntos seguros de la ciudad tras recibir tu mensaje.
            </p>
          </div>

          <div className="info-block">
            <span className="info-tag">CANALES DIRECTOS</span>
            <ul className="direct-channels">
              <li><strong>Instagram:</strong> @periferiasubversivx</li>
              <li><strong>Correo:</strong> contacto@periferiasubversivx.org</li>
              <li><strong>Radio:</strong> Voces Periféricas</li>
            </ul>
          </div>
        </div>

        {/* 3. Formulario de Contacto Interactivo */}
        <div className="contact-form-panel">
          {submitted ? (
            <div className="form-success-box">
              <span className="success-tag">MENSAJE RECIBIDO</span>
              <h2>¡GRACIAS POR ACUERPAR!</h2>
              <p>
                Hemos recibido tu mensaje. Nos pondremos en contacto contigo lo antes posible a través del medio que nos compartiste.
              </p>
              <button className="reset-btn" onClick={() => setSubmitted(false)}>
                ENVIAR OTRO MENSAJE
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="zine-form">
              <div className="form-group">
                <label htmlFor="nombre">NOMBRE O ALIAS</label>
                <input 
                  type="text" 
                  id="nombre" 
                  name="nombre" 
                  placeholder="¿Cómo te nombras?" 
                  value={formData.nombre}
                  onChange={handleChange}
                  required={!formData.anonimo}
                  disabled={formData.anonimo}
                />
              </div>

              <div className="form-checkbox-group">
                <label className="checkbox-label">
                  <input 
                    type="checkbox" 
                    name="anonimo" 
                    checked={formData.anonimo} 
                    onChange={handleChange} 
                  />
                  <span>Prefiero mantener mi nombre anónimo</span>
                </label>
              </div>

              <div className="form-group">
                <label htmlFor="contacto">CORREO / TELÉFONO / RED SOCIAL</label>
                <input 
                  type="text" 
                  id="contacto" 
                  name="contacto" 
                  placeholder="Medio por el que te contactamos de forma segura" 
                  value={formData.contacto}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="asunto">¿CÓMO QUIERES ARTICULAR?</label>
                <select 
                  id="asunto" 
                  name="asunto" 
                  value={formData.asunto}
                  onChange={handleChange}
                >
                  <option value="acopio">Donaciones / Acopio para desplazadxs</option>
                  <option value="brigadas">Sumarme a las Brigadas de Salud (Salud/Cultura/Logística)</option>
                  <option value="psicosocial">Acompañamiento Psicosocial / Redes</option>
                  <option value="alianza">Alianza entre Colectivas / Proyectos 8M</option>
                  <option value="prensa">Prensa / Medios independientes</option>
                  <option value="otro">Otro motivo</option>
                </select>
              </div>

              <div className="form-group">
                <label htmlFor="mensaje">MENSAJE</label>
                <textarea 
                  id="mensaje" 
                  name="mensaje" 
                  rows="5" 
                  placeholder="Escribe aquí tu duda, propuesta o mensaje..."
                  value={formData.mensaje}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>

              <button type="submit" className="submit-btn">
                ENVIAR MENSAJE
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}