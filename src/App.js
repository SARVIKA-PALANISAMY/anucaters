import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import HomePageContainer from './pages/HomePageContainer';
import AboutUs from './pages/AboutUs';
import Facilities from './pages/Facilities';
import Gallery from './pages/Gallery';
import ContactUs from './pages/ContactUs';
import logo from './assets/logo1.jpeg'; // Importing the logo
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

const App = () => {
    return (
        <Router>
            <nav>
                <img src={logo} alt="Catering Logo" />
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about-us">About Us</Link></li>
                    <li><Link to="/facilities">Facilities</Link></li>
                    <li><Link to="/gallery">Gallery</Link></li>
                    <li><Link to="/contact-us">Contact Us</Link></li>
                </ul>
            </nav>
            <Routes>
                <Route path="/" element={<HomePageContainer />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/facilities" element={<Facilities />} />
                <Route path="/gallery" element={<Gallery />} />
                <Route path="/contact-us" element={<ContactUs />} />
            </Routes>
        </Router>
    );
};

export default App;
