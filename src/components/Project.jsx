// import projects from "../data/projects";

// function Project() {
//   return (
//     <section id="projects" className="projects section">
//       <div className="section-heading">
//         <p>MY WORK</p>
//         <h2>Featured Projects</h2>
//       </div>

//       <div className="projects-grid">
//         {projects.map((project) => (
//           <div className="project-card" key={project.title}>
//             <div className="project-image">
//               <span>{project.image}</span>
//             </div>

//             <div className="project-content">
//               <h3>{project.title}</h3>

//               <p>{project.description}</p>

//               <div className="project-tech">
//                 {project.technologies.map((tech) => (
//                   <span key={tech}>{tech}</span>
//                 ))}
//               </div>

//               <div className="project-links">
//                 <a href={project.demo} target="_blank" rel="noreferrer">
//                   Live Demo ↗
//                 </a>

//                 <a href={project.github} target="_blank" rel="noreferrer">
//                   GitHub ↗
//                 </a>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </section>
//   );
// }

// export default Project;

import projects from "../data/projects";

function Project() {
  return (
    <section id="projects" className="projects section">
      <div className="section-heading">
        <p>MY WORK</p>
        <h2>Featured Projects</h2>

        <span className="projects-subtitle">
          Here are some projects I have built while learning and improving my
          web development skills.
        </span>
      </div>

      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.id}>
            {/* Project Header */}
            <div className="project-image">
              <span className="project-icon">{project.icon}</span>

              <span className="project-number">
                0{project.id}
              </span>
            </div>

            {/* Project Content */}
            <div className="project-content">
              <h3>{project.title}</h3>

              <p className="project-description">
                {project.description}
              </p>

              {/* Technologies */}
              <div className="project-tech">
                {project.technologies.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>

              {/* Features */}
              <div className="project-features">
                <h4>Key Features</h4>

                <ul>
                  {project.features.map((feature) => (
                    <li key={feature}>
                      <span>✓</span>
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Project Links */}
              <div className="project-links">
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="project-demo"
                >
                  <span>↗</span>
                  Live Demo
                </a>

                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="project-github"
                >
                  <span>⌘</span>
                  GitHub
                </a>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default Project;