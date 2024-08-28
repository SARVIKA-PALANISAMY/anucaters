import React, { Component } from 'react';
import Home from './Home';

// Mock functions for fetching data
const fetchTestimonials = async () => {
  return [
    { id: 1, text: 'Excellent service!' },
    { id: 2, text: 'Highly recommend!' },
  ];
};

const fetchServices = async () => {
  return [
    { id: 1, name: 'Wedding Catering' },
    { id: 2, name: 'Corporate Events' },
  ];
};

class HomePageContainer extends Component {
  state = {
    testimonials: [],
    services: [],
  };

  async componentDidMount() {
    // Fetch data and update state
    const testimonials = await fetchTestimonials();
    const services = await fetchServices();
    this.setState({ testimonials, services });
  }

  render() {
    const { testimonials, services } = this.state;
    return <Home testimonials={testimonials} services={services} />;
  }
}

export default HomePageContainer;
