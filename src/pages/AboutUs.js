import React, { Component } from 'react';
import Aim from './Aim';
import Vision from './Vision';
import Mission from './Mission';
import './AboutUs.css';

class AboutUs extends Component {
  render() {
    return (
      <div className="about-us">
        <Aim />
        <Vision />
        <Mission />
      </div>
    );
  }
}

export default AboutUs;
