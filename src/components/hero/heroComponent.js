import React, { Component } from 'react';
import ReactDOM, { render } from 'react-dom';
import '../hero/heroComponent.css'

class HeroComponent extends Component {

  render() {
    return (
      <div class="hero">
        <div class="herotext">
          <h5>Hi, Myself</h5>
          <h1>Raja Narasimha Reddy, Jaidi.</h1>
          <h2>Sr Software Engineer.</h2>
          <h3>Raleigh,NC.</h3>
          <p> Experienced in facilitating cutting edge engineering solutions and ability to leverage FullStack knowledge in developing responsive websites. </p>
          <div class="email">
            <a href="mailto:reddy910@outlook.com" class="email-button">Reach me</a>
          </div>
        </div>
      </div>
    );
  }
}
export default HeroComponent;
