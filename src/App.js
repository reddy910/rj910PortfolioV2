import React from 'react';
import { FaRegistered, FaHome, FaExternalLinkAlt, FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaFreeCodeCamp } from 'react-icons/fa';
import NavbarComponent from './components/navbar/navbarComponent';
import HeroComponent from "./components/hero/heroComponent"
import AboutComponent from "./components/about/aboutComponent"
import ContactComponent from "./components/contact/contactComponent"
import Experience from "./components/experience/experienceComponent"
import './App.css';

function App() {

  return (
    <div class ="appContainer">
      <NavbarComponent />
      <HeroComponent />
      <AboutComponent />
      <Experience />
      <section id="projects" class="workContainer">
        <h3 class="workTitle" data-sr-id="3" >Some Things I've Built</h3>
        <p> loading ... </p>
      </section>
      <ContactComponent />
    </div>
  );
}

export default App;
