import projectsBg from '../assets/projects-bg.png';

export default function Projects() {
    const bgSrc = typeof projectsBg === 'string' ? projectsBg : projectsBg.src;
    const projectsData = [
        {
        id: 1,
        category: 'BRIGADAS',
        title: 'Brigada de salud comunitaria en la sierra',
        description: 'Llevamos atención médica, información y acompañamiento a comunidades rurales.',
        date: 'MAR 2025',
        image: '/projects/brigada.jpg',
        link: '#',
        },
        {
        id: 2,
        category: 'TALLERES',
        title: 'Taller de arte y memoria',
        description: 'Espacios para crear, compartir y sanar desde la expresión colectiva.',
        date: 'FEB 2025',
        image: '/projects/taller.jpg',
        link: '#',
        },
        {
        id: 3,
        category: 'CAMPAÑA',
        title: 'Contra la violencia de género',
        description: 'Información, redes de apoyo y acompañamiento en situaciones de riesgo.',
        date: 'ENE 2025',
        image: '/projects/campana.jpg',
        link: '#',
        },
    ];

  return (
    <section id="proyectos" className="projects-container">
      {/* Etiqueta img con la ruta importada */}
      <img 
        src={bgSrc} 
        alt="Fondo textura colectiva" 
        className="projects-bg-img"
      />
      {/* Columna de Encabezado */}
      <div className="projects-header">
        <span className="projects-subtitle">PROYECTOS</span>
        <h2 className="projects-title">
          NUESTRO<br />
          TRABAJO<br />
          EN TERRITORIO
        </h2>
        <p className="projects-description">
          Brigadas, talleres, campañas y acompañamientos en comunidades de Sinaloa y otras regiones.
        </p>
        <a href="#todos-proyectos" className="projects-main-link">
          <span>VER TODOS LOS PROYECTOS</span>
          <span className="arrow">→</span>
        </a>
      </div>

      {/* Grid de Tarjetas de Proyectos */}
      <div className="projects-grid">
        {projectsData.map((project) => (
          <article key={project.id} className="project-card">
            <div className="card-image-wrapper">
              <span className="card-badge">{project.category}</span>
              <img 
                src={project.image} 
                alt={project.title} 
                className="card-image"
              />
            </div>

            <div className="card-body">
              <h3 className="card-title">{project.title}</h3>
              <p className="card-description">{project.description}</p>
              
              <div className="card-footer">
                <span className="card-date">{project.date}</span>
                <a href={project.link} className="card-link">
                  <span>LEER MÁS</span>
                  <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}