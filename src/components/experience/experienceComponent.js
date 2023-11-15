import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import '../experience/experienceComponent.css'

class experienceComponent extends Component {

  render() {
    return (
      <section id="jobs" class="experience" data-sr-id="15" >
        <h3 class="experienceTitle">Where I've Worked</h3>

        <div class="jobsList">
          <ul role="tablist" aria-label="Job tabs" class="jobTabList">
            <li>
              <button id="tab-0" role="tab" aria-selected="true" aria-controls="panel-0" tabindex="0" class="tablistchild">
                <span>Verizon</span>
              </button>
            </li>
            <li><button id="tab-1" role="tab" aria-selected="false" aria-controls="panel-1" tabindex="-1" class="tablistchild">
              <span>HPE</span>
            </button>
            </li>
            <li><button id="tab-2" role="tab" aria-selected="false" aria-controls="panel-2" tabindex="-2" class="tablistchild">
              <span>Comcast</span>
            </button>
            </li>
            <li><button id="tab-3" role="tab" aria-selected="false" aria-controls="panel-3" tabindex="-3" class="tablistchild">
              <span>HDFC</span>
            </button>
            </li>
            <span class="jobs__StyledHighlight"></span>
          </ul>
          <div id="panel-0" role="tabpanel" aria-labelledby="tab-0" tabindex="0" class="jobContent">
            <h4 class="jobTitle">
              <span>Sr. Software Engineer</span>
              <span class="jobCompany">
                <span>&nbsp;@&nbsp;</span>
                <a href="https://www.verizon.com/" target="_blank" rel="nofollow noopener noreferrer">Verizon</a>
              </span>
            </h4>
            <h5 class="jobDetails">
              <span>Nov 2017 - Present</span></h5>
            <div>
              <ul>
                <li>We followed SAFe Scaled agile methodology, sprints planning, and daily scrums to discuss the Iterations of the project and Involve in Sprint Planning and user stories discussions. </li>
                <li>Developed workflows using Bonita BPM and Redhat PAM, and interactive web pages using HTML5, CSS3, JavaScript, jQuery, Bootstrap, React JS. Java/J2EE applications using spring boot-microservices and deployed docker based Kubernetes containers to AWS cloud, used Tomcat, WebLogic servers, to unit test in dev environment and also deployed few apps in Pivotal Cloud Foundry. </li>
                <li>Integrated RESTful/HTTP web services with Bonita BPM to communicate with interface systems, handled complex JSON’s to display human readable messages on fallout tasks, and populated data using jQuery ajax and axios async calls in ReactJS screens.</li>
                <li>Implemented Continuous integration and continuous development using GitLab and Jenkin jobs to deploy Docker containers and Bonita bos files. Used oracle and PostgreSQL relational databases to manage data. Documented and Tested API with Swagger.io and Postman.
                </li>
                <li>Implemented test cases and perform unit testing to ensure the delivery of bug-free code. Integrated Splunk to analyze logger and debug issues. </li>
              </ul>
            </div>
          </div>

        </div>

      </section>
    );
  }
}
export default experienceComponent;
