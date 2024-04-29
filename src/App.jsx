import "./App.scss";
import React from "react";
import Hero from "./Components/Hero/Hero";
import Parallax from "./Components/Parallax/Parallax";
import Services from "./Components/Services/Sevices";
import Navbar from "./Components/Navbar/Navbar";
import Projects from "./Components/Projects/Projects";
import Contact from "./Components/Contact/Contact";
import Skills from "./Components/Skills/Skills";
import Education from "./Components/Education/Education";
import Experience from "./Components/Experience/Experience";
import Hobbies from "./Components/Hobbies/Hobbies";


const App = () => {
  return (
    <div className="app">
      <section>
        <Navbar />
        <Hero />
       
      </section>
      <section>
        <Education />
      </section>
      <section>
        <Experience />
      </section>
      <section>
        <Skills />
      </section>
      <section id="Services">
        <Parallax type="services" />
      </section>
      <section>
        <Services />
      </section>
      <section id="projects">
        <Parallax type="projects" />
      </section>
      <Projects id="project" />
      <section>
        <Hobbies />
      </section>
      <section id="#contact">
        <Contact />
  </section>
    </div>
  );
};

export default App;
