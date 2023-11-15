import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
//import './components/navbar/navbarComponent.css'

class workComponent extends Component {

  render() {
    return (
      <section id="projects" class="workContainer">
        <h3 class="workContainerTitle" data-sr-id="3" >Some Things I've Built</h3>
        <div>
          <div class="projects" data-sr-id="4" >
            <div class="projectsChild">
              <h4 class="projectTitle">Featured Project</h4>
              <h5 class="projectLink">
                <a href="https://octoprofile.now.sh" target="_blank" rel="nofollow noopener noreferrer" aria-label="External Link">OctoProfile</a>
              </h5>
              <div class="projectDescription">
                <p>A nicer look at your GitHub profile and repo stats. Includes data visualizations of your top languages, starred repositories, and sort through your top repos by number of stars, forks, and size.</p>
              </div>
              <ul class="projectTechStackList">
                <li>Next.js</li>
                <li>Chart.js</li>
                <li>GitHub API</li>
              </ul>
              <div class="projectGitLink">
                <a href="https://github.com/" target="_blank" label="GitHub" class="icon">
                  <FaGithub />
                </a>
                <a href="https://github.com/" target="_blank" label="GitHub" class="icon">
                  <FaExternalLinkAlt />
                </a>
              </div>
            </div>
            <a href="https://octoprofile.now.sh" target="_blank" rel="nofollow noopener noreferrer" class="projectExternalLink">
              <div class="projectExternalLinkChild">
                <div aria-hidden="true">
                </div>
                <img aria-hidden="true" src="./assets/nostalgic_blue_background_04_hd_pictures_169785.jpg" alt="">
                </img>
              </div>
            </a>
            <div class="projectImage" >
              <div aria-hidden="true" >
              </div><img aria-hidden="true" src="./assets/nostalgic_blue_background_04_hd_pictures_169785.jpg" alt="" >
              </img>
            </div>
          </div>
        </div>
      </section>
    );
  }
}
export default workComponent;
