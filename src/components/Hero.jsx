import { useEffect, useState } from "react";
import heroImage from "../assets/images/hero.png";

function Hero() {
  const [text, setText] = useState("");
  const fullText = "BSc IT Student & Aspiring Developer";

  useEffect(() => {
    let index = 0;

    const typing = setInterval(() => {
      setText(fullText.slice(0, index + 1));
      index++;

      if (index === fullText.length) {
        clearInterval(typing);
      }
    }, 70);

    return () => clearInterval(typing);
  }, []);

  return (
    <section id="home" className="hero section">
      <div className="hero-content">
        <p className="hero-greeting">HELLO, I'M</p>

        <h1>
          Harshal <span>Bhamare</span>
        </h1>

        <h2>
          {text}
          <span className="cursor">|</span>
        </h2>

        <p className="hero-description">
          I am passionate about technology and web development. I enjoy
          creating responsive, user-friendly applications and continuously
          learning new technologies to improve my skills.
        </p>

        <div className="hero-buttons">
          <a href="#projects" className="btn btn-primary">
            View My Work
          </a>

          <a href="#contact" className="btn btn-secondary">
            Contact Me
          </a>
        </div>
      </div>

      <div className="hero-image-wrapper">
        <div className="hero-image-bg"></div>

        <img
          src={heroImage}
          alt="Harshal Bhamare"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;