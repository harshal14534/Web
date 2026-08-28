import "./App.css";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ParticleBackground from "./components/ParticleBackground";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <div className="app">
      <ParticleBackground />

      <Navbar />

      <main>
        <Hero />
        <About />
        <Skills />
        <Project />
        <Contact />
      </main>

      <Footer />
      <Analytics />
    </div>
  );
}

export default App;