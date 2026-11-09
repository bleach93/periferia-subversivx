import React, { useState } from 'react';
import bgImage from '../assets/P8281.jpg';

export default function ProjectsFull() {
  const [filter, setFilter] = useState('all');
  const imgSrc = typeof bgImage === 'string' ? bgImage : bgImage.src;

  const projects = [
    {
      id: 1,
      number: "01",
      title: "Reconstruir lo Común",
      category: "centrales",
      subtitle: "Acompañamiento a desplazadxs y retornadxs",
      tag: "PROYECTO PARAGUAS 2026",
      desc: "Iniciativa enfocada en personas sobrevivientes de desplazamiento forzado interno y retornadas en el sur de Sinaloa. Diseñada como un espacio seguro de contención y organización comunitarias.",
      bullets: [
        "Acompañamiento psicosocial gratuito, anónimo y voluntario.",
        "Fortalecimiento de redes comunitarias en territorio.",
        "Registro y diagnóstico de necesidades para diseño de programas.",
        "Actividades con difusión focalizada durante 2026."
      ]
    },
    {
      id: 2,
      number: "02",
      title: "Brigadas de Salud Comunitaria en la Sierra",
      category: "centrales",
      subtitle: "Sembrar cuidados en común / Donde arde, florece",
      tag: "2025 - EN CURSO",
      desc: "Proyecto de atención integral y sostenida en la Sierra de Concordia (Chirimoyos, La Petaca, El Cuatantal y Potrerillos) frente al despojo y la violencia.",
      bullets: [
        "Medicina general, ginecología, odontología, psicología y círculos de sanación.",
        "Talleres culturales y proyecciones de cine comunitario.",
        "1ª etapa (Ago-Nov 2025): 4 brigadas y más de 250 personas atendidas.",
        "Financiamiento transparente: Beca FAU-LAC, GoFundMe y recursos propios."
      ]
    },
    {
      id: 3,
      number: "03",
      title: "Emergencia Humanitaria con Responsabilidad Institucional",
      category: "centrales",
      subtitle: "Campaña de denuncia y acopio",
      tag: "ACCION DIRECTA",
      desc: "Estrategia de visibilización y recaudación ligada a las brigadas de salud ante la inacción de las autoridades en la sierra.",
      bullets: [
        "Denuncia pública por cierre de clínicas y desabasto de agua, comida y luz.",
        "Recaudación activa (GoFundMe / BBVA) para costear insumos médicos e intervenciones."
      ]
    },
    {
      id: 4,
      number: "04",
      title: "Salud Bucal para la Sierra",
      category: "centrales",
      subtitle: "Colecta e intervención odontológica",
      tag: "CONVOCATORIA",
      desc: "Eje especializado dentro de las brigadas para responder a la emergencia de salud dental en las comunidades de la sierra.",
      bullets: [
        "Convocatoria a odontólogxs, estudiantes y personal de salud.",
        "Colecta abierta de insumos, instrumental y material curativo.",
        "Jornadas de atención bucal gratuita en territorio."
      ]
    },
    {
      id: 5,
      number: "05",
      title: "Colectas para Familias Desplazadas en Mazatlán",
      category: "desplazamiento",
      subtitle: "Redes de acopio en la zona urbana",
      tag: "SUD DE SINALOA",
      desc: "Red de acopio y entregas directas para familias asentadas o en tránsito en Mazatlán que huyen de la violencia en el sur del estado.",
      bullets: [
        "Acopio constante de alimentos no perecederos e insumos de primera necesidad.",
        "Armado y distribución de paquetes de comida.",
        "Eventos solidarios de acopio como el concierto 'Rancheras de juguete' en el Museo de Arte de Mazatlán."
      ]
    },
    {
      id: 6,
      number: "06",
      title: "Rifas Solidarias y Apoyo Médico",
      category: "desplazamiento",
      subtitle: "Autogestión de emergencias de salud",
      tag: "MUTUO APOYO",
      desc: "Mecanismo autogestivo de respuesta rápida para cubrir cirugías, tratamientos e intervenciones médicas urgentes de personas desplazadas.",
      bullets: [
        "Rifas estilo Lotería Mexicana ($100 por número).",
        "Transferencias directas a familias sin intermediarios.",
        "Campañas de difusión de casos de salud críticos."
      ]
    },
    {
      id: 7,
      number: "07",
      title: "Camino al 8M",
      category: "feminismo",
      subtitle: "Ciclo anual de articulación feminista",
      tag: "ANUAL / MAZATLÁN",
      desc: "Jornadas de preparación, formación y encuentro previo a la marcha del 8 de Marzo en alianza con la red de colectivas locales.",
      bullets: [
        "Edición 2023: Talleres, fanzines y festival en el Museo de Arte de Mazatlán.",
        "Edición 2025: Talleres de autoformación en Parque Ciudades Hermanas, INAPAM y cafés.",
        "Fanzine colectivo, música, cinefórum y contingente en la marcha."
      ]
    },
    {
      id: 8,
      number: "08",
      title: "Juntanza Feminista / Festival Post-Marcha",
      category: "feminismo",
      subtitle: "Encuentro cultural y acuerpamiento",
      tag: "8M 2025",
      desc: "Espacio de descanso, celebración y recaudación realizado inmediatamente después de la marcha del 8M 2025 en Scandalo, Mazatlán.",
      bullets: [
        "Proyección del documental 'Kenya' y conversatorio.",
        "Open Mic Sororo y presentaciones musicales en vivo.",
        "Recaudación de entrada destinada al acompañamiento de una víctima de violencia."
      ]
    },
    {
      id: 9,
      number: "09",
      title: "Actividades 8M en MADE A.C.",
      category: "feminismo",
      subtitle: "Talleres y herramientas de autogestión",
      tag: "MARZO 2025",
      desc: "Ciclo formativo enfocado en corporalidades, salud mental comunitaria y autogestión laboral.",
      bullets: [
        "Charla 'Ser una Mesa Herida' (análisis sobre Frida Kahlo).",
        "Taller 'Narrativas autocompasivas: rompiendo el rol patriarcal'.",
        "Elaboración de Fanzine colectivo y la guía '¿Cómo encontrar mejor chamba?'."
      ]
    },
    {
      id: 10,
      number: "10",
      title: "Primer Festivalito Infantil en la Sierra",
      category: "infancias",
      subtitle: "Día del Niño/a para niñez desplazada",
      tag: "CHIRIMOYOS 2023",
      desc: "Jornada de juego, fiesta y derecho al ocio dedicada a las infancias afectadas por el desplazamiento forzado en la sierra.",
      bullets: [
        "Organizado en alianza con Perlas del Pacífico y Lxs Abonadxs.",
        "Colecta masiva de juguetes, dulces y piñatas.",
        "Festejo comunitario en la comunidad de Chirimoyos."
      ]
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <section 
      className="proyectos-page"
      style={{
        backgroundImage: `linear-gradient(rgba(18, 16, 22, 0.75), rgba(18, 16, 22, 0.75)), url("${imgSrc}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%;',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* 1. Cabecera principal */}
      <div className="proyectos-header">
        <span className="proyectos-badge">ACCIONES Y TERRITORIO</span>
        <h1 className="proyectos-title">NUESTROS PROYECTOS</h1>
        <p className="proyectos-lead">
          Desde brigadas de salud en las altas montañas hasta articulación transfeminista en la costa. Conocé las iniciativas con las que sostenemos la vida y la memoria comunitaria.
        </p>
      </div>

      {/* 2. Filtros de Categoría */}
      <div className="proyectos-filters">
        <button 
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`} 
          onClick={() => setFilter('all')}
        >
          TODOS ({projects.length})
        </button>
        <button 
          className={`filter-btn ${filter === 'centrales' ? 'active' : ''}`} 
          onClick={() => setFilter('centrales')}
        >
          BRIGADAS Y SALUD
        </button>
        <button 
          className={`filter-btn ${filter === 'desplazamiento' ? 'active' : ''}`} 
          onClick={() => setFilter('desplazamiento')}
        >
          APOYO A DESPLAZADXS
        </button>
        <button 
          className={`filter-btn ${filter === 'feminismo' ? 'active' : ''}`} 
          onClick={() => setFilter('feminismo')}
        >
          FEMINISMO Y 8M
        </button>
        <button 
          className={`filter-btn ${filter === 'infancias' ? 'active' : ''}`} 
          onClick={() => setFilter('infancias')}
        >
          INFANCIAS
        </button>
      </div>

      {/* 3. Grid de Proyectos */}
      <div className="projects-grid">
        {filteredProjects.map((item) => (
          <article className="project-card" key={item.id}>
            <div className="project-card-header">
              <span className="project-number">{item.number}</span>
              <span className="project-tag">{item.tag}</span>
            </div>
            <h2 className="project-card-title">{item.title}</h2>
            <h3 className="project-card-subtitle">{item.subtitle}</h3>
            <p className="project-card-desc">{item.desc}</p>
            
            <div className="project-bullets">
              <h4>PUNTOS CLAVE:</h4>
              <ul>
                {item.bullets.map((bullet, idx) => (
                  <li key={idx}>{bullet}</li>
                ))}
              </ul>
            </div>
          </article>
        ))}
      </div>

      {/* 4. Línea de Tiempo Resumida */}
      <div className="timeline-section">
        <span className="timeline-badge">RECORRIDO</span>
        <h2 className="timeline-title">LÍNEA DE TIEMPO</h2>
        
        <div className="timeline-container">
          <div className="timeline-item">
            <span className="timeline-year">2021 — 2023</span>
            <h3 className="timeline-event-title">Inicios y primeras semillas</h3>
            <p className="timeline-event-desc">
              Primeras jornadas del 8M, articulación feminista en Mazatlán y arranque del trabajo directo con niñez desplazada en Chirimoyos.
            </p>
          </div>

          <div className="timeline-item">
            <span className="timeline-year">2024 — 2025</span>
            <h3 className="timeline-event-title">Consolidación en la Sierra</h3>
            <p className="timeline-event-desc">
              Lanzamiento masivo de las Brigadas de Salud Comunitaria en Concordia (Chirimoyos, La Petaca, Potrerillos) y consolidación del festival post-8M.
            </p>
          </div>

          <div className="timeline-item">
            <span className="timeline-year">2025 — 2026</span>
            <h3 className="timeline-event-title">Reconstruir lo Común y Transparencia</h3>
            <p className="timeline-event-desc">
              Publicación de informes de transparencia, despliegue del proyecto paraguas "Reconstruir lo Común" y red de acopio urgente para familias desplazadas en Mazatlán.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}