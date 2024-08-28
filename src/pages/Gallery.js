import React from 'react';
import { Carousel } from 'react-bootstrap';
import img1 from '../assets/img1.png';
import img2 from '../assets/img2.png';
import img3 from '../assets/img3.png';
import img4 from '../assets/img4.png';

const Gallery = () => {
    return (
        <div className="gallery">
            <Carousel>
                <Carousel.Item>
                    <div className="scrollable">
                        <img className="d-block w-100 large" src={img1} alt="First slide" />
                    </div>
                    <Carousel.Caption>
                        <p>Dishes</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="scrollable">
                        <img className="d-block w-100 large" src={img2} alt="Second slide" />
                    </div>
                    <Carousel.Caption>
                        <p>Buffet Display</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="scrollable">
                        <img className="d-block w-100 large" src={img3} alt="Third slide" />
                    </div>
                    <Carousel.Caption>
                        <p>Bronchure</p>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <div className="scrollable">
                        <img className="d-block w-100 large" src={img4} alt="Fourth slide" />
                    </div>
                    <Carousel.Caption>
                        <p>Visiting Card</p>
                    </Carousel.Caption>
                </Carousel.Item>
            </Carousel>
        </div>
    );
};

export default Gallery;
