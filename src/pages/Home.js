import React from 'react';

const Home = ({ testimonials, services }) => {
  return (
    <div className="home-page">
      <section className="hero">
        <h1>Welcome to Anu Catering Service</h1>
        <p>Crafting unforgettable dining experiences.</p>
        
      </section>
      <section className="services">
        <h2>Our Services</h2>
        <ul>
          {services.map(service => (
            <li key={service.id}>{service.name}</li>
          ))}
        </ul>
      </section>
      <section className="testimonials">
        <h2>What Our Clients Say</h2>
        <ul>
          {testimonials.map(testimonial => (
            <li key={testimonial.id}>{testimonial.text}</li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default Home;
