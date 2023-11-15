import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import '../about/aboutComponent.css'

class AboutComponent extends Component {

  render() {
    return (
      <section id="about" class="about" data-sr-id="0" tabindex="-1">
        <h3 class="aboutHeading">About Me</h3>
        <div class="about-child">
          <div class="about-child-child">
            <div>
              <p>Hello! I'm Raja, a software engineer based in Raleigh, NC.</p>
              <p>8+ years of experience in facilitating cutting edge engineering solutions and a wide range of web-based applications.
              Proven ability to leverage full-stack knowledge and experience to develop interactive websites, applications, or anything that live on the Internet.</p>
              <p> My goal is to always build products that provide pixel-perfect, performant experiences.</p>
              <p>Apart from coding.I enjoy playing cricket and listening music.</p>
              <p>I have completed MS(CS), MSITM &amp; persuing P.hD(IT)
              <a href="" target="_blank" rel="nofollow noopener noreferrer"> University of the Cumberlands.</a></p>
              <p> Present working at <a href="https://www.verizon.com/" target="_blank" rel="nofollow noopener noreferrer">Verizon Data Services.</a></p>
              <p> where I work on a wide variety of interesting and meaningful projects on a daily basis.</p>
              <p>Here are a few technologies I've been working with recently:</p>
            </div>
          </div>
        </div>
        <div>
          <ul class="about__Skills">
            <li class="about__SkillName">Java</li>
            <li class="about__SkillName">J2EE</li>
            <li class="about__SkillName">Spring-boot</li>
            <li class="about__SkillName">Micro Services</li>
            <li class="about__SkillName">JavaScript (ES6+)</li>
            <li class="about__SkillName">HTML &amp; (S)CSS</li>
            <li class="about__SkillName">React &amp; Angular</li>
            <li class="about__SkillName">SQL &amp; NoSQL </li>
            <li class="about__SkillName">Node.js</li>
          </ul>
        </div>
      </section>
    );
  }
}
export default AboutComponent;
