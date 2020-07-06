import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
//import './components/navbar/navbarComponent.css'

class experienceComponent extends Component {

  render() {
    return (
      <section id="jobs" class="experience" data-sr-id="2" >
        <h3 class="experienceTitle">Where I've Worked</h3>
        <div class="jobsList">
          <ul role="tablist" aria-label="Job tabs" class="jobTabList">
            <li>
              <button id="tab-0" role="tab" aria-selected="true" aria-controls="panel-0" tabindex="0" class="tablistchild">
                <span>Upstatement</span>
              </button>
            </li>
            <li><button id="tab-1" role="tab" aria-selected="false" aria-controls="panel-1" tabindex="-1" class="tablistchild">
              <span>Scout</span>
            </button>
            </li>
            <li>
              <button id="tab-2" role="tab" aria-selected="false" aria-controls="panel-2" tabindex="-1" class="tablistchild">
                <span>Apple</span>
              </button>
            </li>
            <li>
              <button id="tab-3" role="tab" aria-selected="false" aria-controls="panel-3" tabindex="-1" class="tablistchild">
                <span>Scout</span>
              </button>
            </li>
            <li>
              <button id="tab-4" role="tab" aria-selected="false" aria-controls="panel-4" tabindex="-1" class="tablistchild">
                <span>Starry</span>
              </button>
            </li>
            <li>
              <button id="tab-5" role="tab" aria-selected="false" aria-controls="panel-5" tabindex="-1" class="tablistchild">
                <span>MullenLowe</span>
              </button>
            </li>
            <span class="jobs__StyledHighlight"></span>
          </ul>
          <div id="panel-0" role="tabpanel" aria-labelledby="tab-0" tabindex="0" class="jobContent">
            <h4 class="jobTitle">
              <span>Engineer</span>
              <span class="jobCompany">
                <span>&nbsp;@&nbsp;</span>
                <a href="https://www.upstatement.com/" target="_blank" rel="nofollow noopener noreferrer">Upstatement</a>
              </span>
            </h4>
            <h5 class="jobDetails">
              <span>May 2018 - Present</span></h5>
            <div>
              <ul>
                <li>Write modern, performant, maintainable code for a diverse array of client and internal projects</li>
                <li>Work with a variety of different languages, platforms, frameworks, and content management systems such as JavaScript, TypeScript, Gatsby, React, Craft, Wordpress, Prismic, and Netlify</li>
                <li>Communicate with multi-disciplinary teams of engineers, designers, producers, and clients on a daily basis</li>
              </ul>
            </div>
          </div>
        </div>

      </section>
    );
  }
}
export default experienceComponent;
