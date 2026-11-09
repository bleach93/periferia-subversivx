import projectsBg from '../assets/projects-bg.png';
import red from '../assets/red-abortera.jpg';
import acompanamiento from '../assets/acompaniamiento.jpg'; 
import salud from '../assets/salud.jpg';

export default function Projects() {
    const bgSrc = typeof projectsBg === 'string' ? projectsBg : projectsBg.src;
    const redSrc = typeof red === 'string' ? red : red.src;
    const acompanamientoSrc = typeof acompanamiento === 'string' ? acompanamiento : acompanamiento.src;
    const saludSrc = typeof salud === 'string' ? salud : salud.src;

    const projectsData = [
        {
        id: 1,
        category: 'BRIGADAS',
        title: 'Brigada de salud comunitaria en la sierra',
        description: 'Llevamos atención médica, información y acompañamiento a comunidades rurales.',
        date: 'MAR 2025',
        image: saludSrc,
        link: 'https://www.instagram.com/p/DRvWV1eEruO/?img_index=1',
        },
        {
        id: 2,
        category: 'TALLERES',
        title: 'Taller Educacion Socioemocional para la niñez',
        description: 'Espacios de acompañamiento y contención para niñez desplazada por violencia en la sierra.',
        date: 'FEB 2025',
        image: acompanamientoSrc,
        link: 'https://www.instagram.com/p/DXKrSyQlDii/?img_index=1',
        },
        {
        id: 3,
        category: 'CAMPAÑA',
        title: 'aborto legal, seguro y autogestionado',
        description: 'Información y acompañamiento humano y amoroso en procesos de aborto.',
        date: 'ENE 2025',
        image: redSrc,
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
          Brigadas, talleres, campañas y acompañamientos en comunidades del sur de Sinaloa.
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