import React from 'react';
import { FaRegistered, FaHome, FaExternalLinkAlt, FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaFreeCodeCamp } from 'react-icons/fa';
import NavbarComponent from './components/navbar/navbarComponent';
import HeroComponent from "./components/hero/heroComponent"
import AboutComponent from "./components/about/aboutComponent"
import ContactComponent from "./components/contact/contactComponent"
import './App.css';

function App() {

  return (
    <div class ="appContainer">
      <NavbarComponent />
      <HeroComponent />
      <AboutComponent />
      <section id="jobs" class="experienceContainer" data-sr-id="15">
          <h3 class="experienceTitle">Experience</h3>
          <p>work is still in progress...</p>
          </section>
          <section id="projects" class="workContainer" data-sr-id="15">
          <h3 class="workTitle">Work</h3>
          <p>work is still in progress...</p>
          </section>
      <ContactComponent />
    </div>
  );
}

export default App;
