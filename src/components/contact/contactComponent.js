import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import {  FaInstagram, FaGithub, FaLinkedin, FaTwitter, FaFreeCodeCamp } from 'react-icons/fa';
import '../contact/contactComponent.css'

class ContactComponent extends Component {

  render() {
    return (
      <React.Fragment>
        <section id="contact" class="contactContainer" data-sr-id="15">
          <h3 class="contactTitle">Contact</h3>
          <h4 class="contactTitleChild">Get In Touch</h4>
          <div>
            <p>Although I'm not currently looking for any new opportunities, my inbox is always open. Whether you have a question or just want to say hi, I'll try my best to get back to you!
      </p>
          </div>
          <a href="mailto:reddy910@outlook.com" target="_blank" rel="nofollow noopener noreferrer" class="contactEmailButtonLink">Say Hello</a>
        </section>

        <footer class="footerContainer">
          <div class="footerStyle">
            <ul class="footerStyleList">
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
          
        </footer>
        <div class="footerText">
            <div>Designed and developed by Raja Jaidi</div>
          </div>
      </React.Fragment>

    );
  }
}
export default ContactComponent;
