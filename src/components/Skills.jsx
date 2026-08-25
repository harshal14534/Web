import skills from "../data/skills";

function Skills() {
  return (
    <section id="skills" className="skills section">
      <div className="section-heading">
        <p>MY EXPERTISE</p>
        <h2>Skills & Technologies</h2>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <div className="skill-card" key={skill.name}>
            <div className="skill-icon">{skill.icon}</div>

            <h3>{skill.name}</h3>

            <p>{skill.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Skills;