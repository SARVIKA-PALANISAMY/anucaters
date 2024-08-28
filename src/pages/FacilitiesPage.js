import React from 'react';

const FacilitiesPage = ({ facilities }) => {
  return (
    <div className="facilities-page">
      <h1>Our Facilities</h1>
      {facilities.map(facility => (
        <section key={facility.id} className={facility.type.toLowerCase()}>
          <h2>{facility.type}</h2>
          <p>{facility.description}</p>
        </section>
      ))}
    </div>
  );
};

export default FacilitiesPage;
