import React, { useState } from 'react';
import bgImage from '../assets/P82812.jpg';

export default function TerritorioFull() {
  const [activeZone, setActiveZone] = useState('all');
  const imgSrc = typeof bgImage === 'string' ? bgImage : bgImage.src;

  const zones = [
    {
      id: 'mazatlan',
      badge: 'PUERTO & LLEGADA',
      title: 'Mazatlán',
      role: 'Base Operativa y Espacio de Acuepamiento',
      desc: 'Mazatlán no es solo nuestra sede: es territorio de llegada donde familias desplazadas de la sierra intentan resolver vivienda, alimento, trabajo y redes de vida frente al despojo.',
      spots: [
        { name: 'Parque Ciudades Hermanas', detail: 'Punto central de encuentro y actividades del 8M.' },
        { name: 'Museo de Arte de Mazatlán', detail: 'Espacio para talleres "Camino al 8M", acopio y conciertos solidarios.' },
        { name: 'MADE A.C.', detail: 'Sede de charlas, elaboración de fanzines y talleres autogestivos.' },
        { name: 'Scandalo (Ramón Corona 1903)', detail: 'Juntanza Feminista y festival cultural post-marcha.' },
        { name: 'INAPAM "Años Dorados" y Cafés', detail: 'Ruta de articulación previa a las movilizaciones.' },
        { name: 'El Castillo & Zonas Periféricas', detail: 'Asentamiento principal de llegada para familias desplazadas.' }
      ]
    },
    {
      id: 'sierra',
      badge: 'CORAZÓN TERRITORIAL',
      title: 'Sierra de Concordia',
      role: 'Origen, Retorno y Resistencia',
      desc: 'El centro neurálgico de las Brigadas de Salud y el acompaño comunitario. Un territorio impactado por la violencia pero donde "donde arde, florece".',
      spots: [
        { name: 'Chirimoyos', detail: 'Comunidad eje. Atención a infancias desplazadas y brigadas médicas.' },
        { name: 'La Petaca', detail: 'Acompañamiento en procesos de retorno sin condiciones estatales.' },
        { name: 'El Cuatantal / El Cuantanal', detail: 'Punto de intervención odontológica y salud comunitaria.' },
        { name: 'Potrerillos', detail: 'Incorporado a la ruta de brigadas integrales en 2025.' },
        { name: 'El Palmito', detail: 'Comunidad articulada a las redes de la Sierra Sur de Sinaloa.' }
      ]
    },
    {
      id: 'sinaloa',
      badge: 'ESTADO EN CRISIS',
      title: 'Sinaloa',
      role: 'Territorio en Emergencia Humanitaria',
      desc: 'El marco macro de nuestro trabajo: un estado atravesado por la narcopandemia, la impunidad y el abandono institucional sistemático.',
      spots: [
        { name: '6,195 personas desplazadas', detail: 'Registro en Sinaloa durante 2025 (Estudio Travesías Forzadas - UIA).' },
        { name: '3,000 familias desplazadas', detail: 'Cifra oficial registrada en el sur del estado (Octubre 2025).' },
        { name: '3,901 personas desaparecidas', detail: '344 de ellas mujeres (Datos citados con Orquídeas Moradas).' },
        { name: 'Escuinapa y Redes Aliadas', detail: 'Articulación con colectivas de otros municipios e iniciativas virtuales.' }
      ]
    }
  ];

  const filteredZones = activeZone === 'all' ? zones : zones.filter(z => z.id === activeZone);

  return (
    <section 
      className="territorio-page"
      style={{
        backgroundImage: `linear-gradient(rgba(18, 16, 22, 0.75), rgba(18, 16, 22, 0.75)), url("${imgSrc}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%;',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* 1. Encabezado */}
      <div className="territorio-header">
        <span className="territorio-badge">CARTOGRAFÍA POLÍTICA</span>
        <h1 className="territorio-title">EL TERRITORIO QUE HABITAMOS</h1>
        <p className="territorio-lead">
          Para Periferia Subversivx, el territorio no es un fondo ni un mapa estático: es la Sierra de Concordia como origen y retorno, Mazatlán como base y acopio, y Sinaloa como una emergencia humanitaria donde la comunidad resiste y se cuida en común.
        </p>
      </div>

      {/* 2. Filtros de Zona */}
      <div className="territorio-filters">
        <button className={`t-filter-btn ${activeZone === 'all' ? 'active' : ''}`} onClick={() => setActiveZone('all')}>
          VER MAPA COMPLETO
        </button>
        <button className={`t-filter-btn ${activeZone === 'mazatlan' ? 'active' : ''}`} onClick={() => setActiveZone('mazatlan')}>
          MAZATLÁN (BASE Y LLEGADA)
        </button>
        <button className={`t-filter-btn ${activeZone === 'sierra' ? 'active' : ''}`} onClick={() => setActiveZone('sierra')}>
          SIERRA DE CONCORDIA
        </button>
        <button className={`t-filter-btn ${activeZone === 'sinaloa' ? 'active' : ''}`} onClick={() => setActiveZone('sinaloa')}>
          SINALOA EN CRISIS
        </button>
      </div>

      {/* 3. Grid de Cartografía */}
      <div className="territorio-grid">
        {filteredZones.map(zone => (
          <article key={zone.id} className="zone-card">
            <div className="zone-header">
              <span className="zone-badge">{zone.badge}</span>
              <h2 className="zone-title">{zone.title}</h2>
              <h3 className="zone-subtitle">{zone.role}</h3>
            </div>
            <p className="zone-desc">{zone.desc}</p>
            
            <div className="zone-spots">
              <h4>NODOS Y DATOS EN EL TERRITORIO:</h4>
              <ul>
                {zone.spots.map((spot, idx) => (
                  <li key={idx}>
                    <strong>{spot.name}:</strong> {spot.detail}
                  </li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {/* 4. Diagnóstico Territorial */}
      <div className="territorio-analysis">
        <span className="analysis-badge">DIAGNÓSTICO CRÍTICO</span>
        <h2 className="analysis-title">¿QUÉ LE PASA AL TERRITORIO?</h2>
        
        <div className="analysis-grid">
          <div className="analysis-card">
            <span className="analysis-num">01</span>
            <h3>VIOLENCIA Y DESPLAZAMIENTO</h3>
            <p>
              Disputas del crimen organizado, incendios forestales provocados y narcobloqueos que aíslan comunidades. Pueblos enteros secuestrados y desplazados, dejando secuelas de trauma pero también de solidaridad resiliente.
            </p>
          </div>

          <div className="analysis-card">
            <span className="analysis-num">02</span>
            <h3>ABANDONO INSTITUCIONAL</h3>
            <p>
              Clínicas cerradas (como en Chirimoyos durante 11 meses), falta crónica de agua, luz y comida. Casas de retorno sin servicios estatales. Exigimos <em>Responsabilidad Institucional</em>, no asistencialismo.
            </p>
          </div>

          <div className="analysis-card">
            <span className="analysis-num">03</span>
            <h3>RETORNO SIN CONDICIONES</h3>
            <p>
              Las familias vuelven a la sierra porque es su hogar, pero regresan a estructuras destruidas. Proyectos como <em>Reconstruir lo Común</em> acompañan este retorno para que nadie lo habite en soledad.
            </p>
          </div>
        </div>
      </div>

      {/* 5. Acuerpamiento Feminista y Principios */}
      <div className="territorio-manifesto">
        <div className="manifesto-content">
          <span className="manifesto-tag">CUIDADO Y PROTESTA</span>
          <h2>SEMBRAR CUIDADOS EN EL TERRITORIO</h2>
          <p>
            Habitamos el territorio en clave transfeminista: desplegando la <strong>Unidad Tiamat</strong> para la seguridad en las marchas del 8M, abriendo espacios seguros para infancias y maternidades, y llevando brigadas médicas y festivales infantiles donde el Estado ha dejado vacíos.
          </p>
          <div className="principles-row">
            <div className="principle-pill">"LA SALUD NO ES UN PRIVILEGIO, ES UN DERECHO"</div>
            <div className="principle-pill">"LA SIERRA RESISTE"</div>
            <div className="principle-pill">"DONDE ARDE, FLORECE"</div>
          </div>
        </div>
      </div>
    </section>
  );
}