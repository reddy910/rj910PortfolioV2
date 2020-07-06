import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import { FaRegistered, FaHome, FaExternalLinkAlt, FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaFreeCodeCamp } from 'react-icons/fa';
import '../navbar/navbarComponent.css'

class NavbarComponent extends Component {

  render() {
    return (
      <React.Fragment>
        <header class="navbarHeaderContainer">
          <nav class="navbarContainer">
            <div class="navbarContainerChild">
              <a class="logo" href="/" label="home" alt="logo"><FaRegistered /></a>
            </div>
            <div class="hamburgerMenuNavContainer">
              <div class="hamburgerMenuNav">
                <div class="hamburgerMenuNavChild">
                </div>
              </div>
            </div>
            <div class="navContainer">
              <ul class="navContainerUnorderList">
                <li class="navContainerOrderList">
                  <a class="navContainerLink" href="/#about">About</a>
                </li>
                <li class="navContainerOrderList" >
                  <a class="navContainerLink" href="/#jobs">Experience</a>
                </li>
                <li class="navContainerOrderList" >
                  <a class="navContainerLink" href="/#projects">Work</a>
                </li>
                <li class="navContainerOrderList" >
                  <a class="navContainerLink" href="/#contact">Contact</a>
                </li>
              </ul>
              <div class="resumeButton">
                <a href="../Raja Narasimha Reddy Jaidi _Resume.pdf" target="_blank" rel="nofollow noopener noreferrer" class="resumeButtonLink">Resume</a>
              </div>
            </div>
          </nav>
        </header >

        <div orientation="left" class="side-navbar">
          <ul class="socail-list">     
            <li>
              <a href="https://github.com/reddy910" target="_blank" label="github" class="icon">
                <FaGithub />
              </a>
            </li>
            <li>
              <a href="www.linkedin.com/in/rj910" target="_blank" label="linkedin" class="icon">
                <FaLinkedin />
              </a>
            </li>
            <li>
              <a href="https://twitter.com/_rj910" target="_blank" label="twitter" class="github-icon">
                <FaTwitter />
              </a>
            </li>
            <li>
              <a href="https://www.freecodecamp.org/reddy910" target="_blank" label="freeCodeCamp" class="icon">
                <FaFreeCodeCamp />
              </a>
            </li>
            <li>
              <a href="https://www.instagram.com/_rj910/" target="_blank" label="instagram" class="icon">
                <FaInstagram />
              </a>
            </li>
          </ul>
        </div>
        <div orientation="right" class="side-email-link">
          <div class="email-link">
            <a href="mailto:reddy910@outlook.com" class="email__Link">reddy910@outlook.com</a>
          </div>
        </div>
      </React.Fragment>
    );
  }
}
export default NavbarComponent;