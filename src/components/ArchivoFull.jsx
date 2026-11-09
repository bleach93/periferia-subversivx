import React, { useState } from 'react';
import bgImage from '../assets/P1342.jpg';

export default function ArchivoFull() {
  const [selectedYear, setSelectedYear] = useState('all');
  const [activeTopic, setActiveTopic] = useState('all');
  const imgSrc = typeof bgImage === 'string' ? bgImage : bgImage.src;

  // Red de colectivas aliadas registradas
  const allies = [
    "Perlas del Pacífico", "Sirenas Negras Mazatlán", "Las Cuidanderas", 
    "Lxs Abonadxs", "Nereidas Mzt", "Orquídeas Moradas Escuinapa", 
    "Sunset Lights Fotografía", "Tlali Maribel / Agua Chile", "Colectivas Feministas de Mzt"
  ];

  // Inventario temático (12 ejes)
  const topics = [
    { id: '8m', name: 'Feminismo / 8M', count: '68' },
    { id: 'transfeminismo', name: 'Transfeminismo & Interseccionalidad', count: '42' },
    { id: 'salud', name: 'Salud Comunitaria & Brigadas', count: '55' },
    { id: 'desplazamiento', name: 'Desplazamiento Forzado & Retorno', count: '38' },
    { id: 'territorio', name: 'Territorio & Sierra de Concordia', count: '45' },
    { id: 'derechos', name: 'Derechos Sexuales & 28S', count: '24' },
    { id: 'infancias', name: 'Infancias & Festivalito', count: '18' },
    { id: 'violencia', name: 'Violencia de Género & Búsqueda', count: '29' },
    { id: 'cultura', name: 'Cultura, Cine & Radio', count: '31' },
    { id: 'transparencia', name: 'Transparencia & Financiamiento', count: '15' },
    { id: 'alianzas', name: 'Red de Alianzas', count: '50+' },
    { id: 'palestina', name: 'Palestina & Internacionalismo', count: '12' }
  ];

  // Cronología histórica (2021 - 2026)
  const timelineData = [
    {
      year: "2021",
      tag: "FUNDACIÓN Y POSICIONAMIENTO",
      highlights: [
        "26 mar 2021: Presentación pública como la primera colectiva transfeminista en Mazatlán.",
        "Efemérides y pedagogía: Día de la Visibilidad Trans, Día de la Niña, Mujer Rural y sufragio femenino.",
        "Construcción de identidad política y posicionamientos comunitarios."
      ]
    },
    {
      year: "2022",
      tag: "CONSOLIDACIÓN FEMINISTA",
      highlights: [
        "Primer ciclo 'Camino al 8M': talleres, fanzines y espacios de autoformación.",
        "Eje en derechos sexuales, reproductivos, aborto seguro y erradicación de violencia de género.",
        "Consolidación de redes de apoyo con colectivas de Mazatlán."
      ]
    },
    {
      year: "2023",
      tag: "PRIMER SALTO A LA SIERRA",
      highlights: [
        "Abril 2023: 1er Festivalito Infantil en Chirimoyos para niñez desplazada por violencia (con Perlas del Pacífico y Lxs Abonadxs).",
        "Camino al 8M 2023: Jornada cultural y pedagógica en el Museo de Arte de Mazatlán.",
        "Consolidación del eje territorial: articulación Mazatlán ↔️ Sierra de Concordia."
      ]
    },
    {
      year: "2024",
      tag: "LOGÍSTICA Y AUTOGESTIÓN DE SEGURIDAD",
      highlights: [
        "Asamblea 8M 2024: Convocatoria masiva a poner 'todas las manos en marcha'.",
        "Creación de la Unidad Tiamat: protocolo de seguridad y acompañamiento en marchas.",
        "Profundización en transfeminismo, infancias trans y contención comunitaria."
      ]
    },
    {
      year: "2025",
      tag: "BRIGADAS DE SALUD Y 8M HISTÓRICO",
      highlights: [
        "8M 2025: Bloque interseccional/propalestino, panel en la UAS, fanzine colectivo y Juntanza en Scandalo.",
        "Despliegue de Brigadas de Salud Comunitaria en Chirimoyos, La Petaca, El Cuatantal y Potrerillos (~250 atenciones).",
        "Lanzamiento de campaña 'Emergencia Humanitaria con Responsabilidad Institucional' y Salud Bucal.",
        "28S: Diálogos con Las Cuidanderas y campaña activa por el aborto legal."
      ]
    },
    {
      year: "2026",
      tag: "RECONSTRUIR LO COMÚN Y TRANSPARENCIA",
      highlights: [
        "Lanzamiento del programa radial 'Voces Periféricas / Voices from the Margins'.",
        "Programa paraguas 'Reconstruir lo Común': atención psicosocial a personas desplazadas y retornadas.",
        "30 oct 2026: Concierto solidario 'Rancheras de Juguete' (Tlali Maribel) y acopio de alimentos.",
        "6 nov 2026: Publicación del Informe de Transparencia de Brigadas (FAU-LAC, GoFundMe y recursos propios).",
        "7 nov 2026: Rifa solidaria autogestiva para cobertura de gastos médicos de emergencias."
      ]
    }
  ];

  const filteredTimeline = selectedYear === 'all' 
    ? timelineData 
    : timelineData.filter(item => item.year === selectedYear);

  return (
    <section 
      className="archivo-page"
      style={{
        backgroundImage: `linear-gradient(rgba(18, 16, 22, 0.75), rgba(18, 16, 22, 0.75)), url("${imgSrc}")`,
        backgroundSize: 'cover',
        backgroundPosition: 'center 35%;',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: 'fixed',
      }}
    >
      {/* 1. Encabezado principal */}
      <div className="archivo-header">
        <span className="archivo-badge">DOCUMENTACIÓN COMUNITARIA</span>
        <h1 className="archivo-title">ARCHIVO VIVO (2021 — 2026)</h1>
        <p className="archivo-lead">
          Una memoria histórica abierta de 323 registros que atestigua el caminar de la colectiva, la resistencia en la Sierra de Concordia y las redes feministas del sur de Sinaloa.
        </p>
      </div>

      {/* 2. Ficha Técnica / Métricas */}
      <div className="stats-grid">
        <div className="stat-card">
          <span className="stat-number">323</span>
          <span className="stat-label">REGISTROS ARCHIVADOS</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">5.5</span>
          <span className="stat-label">AÑOS DE RECORRIDO (2021-2026)</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">4</span>
          <span className="stat-label">BRIGADAS EN LA SIERRA</span>
        </div>
        <div className="stat-card">
          <span className="stat-number">9+</span>
          <span className="stat-label">COLECTIVAS ALIADAS</span>
        </div>
      </div>

      {/* 3. Archivo de Red (Colectivas Aliadas) */}
      <div className="network-box">
        <span className="network-tag">RED DE ARTICULACIÓN</span>
        <h2>UN ARCHIVO DE COMUNIDAD Y ALIANZAS</h2>
        <p>Este archivo no pertenece a un solo nombre. Es una memoria tejida en conjunto con colectivas, fotógrafas y artistas:</p>
        <div className="allies-pills">
          {allies.map((ally, idx) => (
            <span key={idx} className="ally-pill">{ally}</span>
          ))}
        </div>
      </div>

      {/* 4. Inventario Temático */}
      <div className="topics-section">
        <span className="topics-badge">CLASIFICACIÓN</span>
        <h2 className="topics-title">INVENTARIO TEMÁTICO</h2>
        <div className="topics-grid">
          {topics.map(topic => (
            <div 
              key={topic.id} 
              className={`topic-card ${activeTopic === topic.id ? 'active' : ''}`}
              onClick={() => setActiveTopic(activeTopic === topic.id ? 'all' : topic.id)}
            >
              <span className="topic-name">{topic.name}</span>
              <span className="topic-count">{topic.count} REGISTROS</span>
            </div>
          ))}
        </div>
      </div>

      {/* 5. Cronología Interactiva */}
      <div className="cronologia-section">
        <div className="cronologia-header">
          <div>
            <span className="cronologia-badge">HISTORIAL</span>
            <h2 className="cronologia-title">CRONOLOGÍA COMPLETA</h2>
          </div>
          {/* Filtro por Año */}
          <div className="year-filters">
            <button className={`year-btn ${selectedYear === 'all' ? 'active' : ''}`} onClick={() => setSelectedYear('all')}>TODOS</button>
            <button className={`year-btn ${selectedYear === '2021' ? 'active' : ''}`} onClick={() => setSelectedYear('2021')}>2021</button>
            <button className={`year-btn ${selectedYear === '2022' ? 'active' : ''}`} onClick={() => setSelectedYear('2022')}>2022</button>
            <button className={`year-btn ${selectedYear === '2023' ? 'active' : ''}`} onClick={() => setSelectedYear('2023')}>2023</button>
            <button className={`year-btn ${selectedYear === '2024' ? 'active' : ''}`} onClick={() => setSelectedYear('2024')}>2024</button>
            <button className={`year-btn ${selectedYear === '2025' ? 'active' : ''}`} onClick={() => setSelectedYear('2025')}>2025</button>
            <button className={`year-btn ${selectedYear === '2026' ? 'active' : ''}`} onClick={() => setSelectedYear('2026')}>2026</button>
          </div>
        </div>

        <div className="timeline-list">
          {filteredTimeline.map((item, idx) => (
            <article key={idx} className="timeline-card">
              <div className="timeline-card-header">
                <span className="timeline-card-year">{item.year}</span>
                <span className="timeline-card-tag">{item.tag}</span>
              </div>
              <ul className="timeline-card-bullets">
                {item.highlights.map((point, pIdx) => (
                  <li key={pIdx}>{point}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}