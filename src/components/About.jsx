function About() {
  return (
    <section id="about" className="about section">
      <div className="section-heading">
        <p>GET TO KNOW ME</p>
        <h2>About Me</h2>
      </div>

      <div className="about-grid">
        <div className="about-text">
          <h3>
            Building my skills and growing as a <span>developer.</span>
          </h3>

          <p>
            I am a BSc IT student with a strong interest in web development,
            programming, and modern technologies. I enjoy transforming ideas
            into practical and user-friendly applications.
          </p>

          <p>
            I am continuously learning new technologies and improving my
            development skills through academic projects and hands-on practice.
            My goal is to start my career in the IT industry and contribute to
            meaningful and innovative projects.
          </p>

          <a href="#contact" className="btn btn-primary about-btn">
            Let's Connect
          </a>
        </div>

        <div className="about-cards">
          <div className="about-card">
            <span className="card-number">01</span>
            <div>
              <h4>Education</h4>
              <p>BSc in Information Technology</p>
            </div>
          </div>

          <div className="about-card">
            <span className="card-number">02</span>
            <div>
              <h4>Focus</h4>
              <p>Web Development & Programming</p>
            </div>
          </div>

          <div className="about-card">
            <span className="card-number">03</span>
            <div>
              <h4>Goal</h4>
              <p>Grow as a Professional Developer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;