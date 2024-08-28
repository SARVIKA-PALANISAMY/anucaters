import React, { Component } from 'react';
import FacilitiesPage from './FacilitiesPage';

// Mock function for fetching data
const fetchFacilities = async () => {
  return [
    { id: 1, type: 'Kitchen', description: 'State-of-the-art kitchen facilities.' },
    { id: 2, type: 'Event Setup', description: 'Beautiful event setups for any occasion.' },
    { id: 3, type: 'Staff', description: 'Experienced staff to cater to your needs.' },
    { id: 4, type: 'Special Features', description: 'Unique features to enhance your event.' },
  ];
};

class Facilities extends Component {
  state = {
    facilities: [],
  };

  async componentDidMount() {
    // Fetch data and update state
    const facilities = await fetchFacilities();
    this.setState({ facilities });
  }

  render() {
    const { facilities } = this.state;
    return <FacilitiesPage facilities={facilities} />;
  }
}

export default Facilities;
