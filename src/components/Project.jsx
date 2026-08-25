import projects from "../data/projects";

function Project() {
  return (
    <section id="projects" className="projects section">
      <div className="section-heading">
        <p>MY WORK</p>
        <h2>Featured Projects</h2>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <div className="project-card" key={project.title}>
            <div className="project-image">
              <span>{project.image}</span>
            </div>

            <div className="project-content">
              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              <div className="project-links">
                <a href={project.demo} target="_blank" rel="noreferrer">
                  Live Demo ↗
                </a>

                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub ↗
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Project;