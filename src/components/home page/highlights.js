import React from "react";
import { Carousel } from 'react-responsive-carousel';
import "bootstrap/dist/css/bootstrap.min.css";
import "./highlights.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const CarouselContainer = () => {
  return (
    <div className="carousel-wrapper-aglm">
      <Carousel infiniteLoop autoPlay showThumbs={false} showStatus={false}>
        <div className="highlight-image-container">
          <img className="highlight-short-image" src="https://www.amrita.edu/sites/default/files/amrita-coimbatore-campus-banner-1.jpg" />
        </div>
        <div className="highlight-image-container">
          <img className="highlight-short-image" src="https://www.amrita.edu/sites/default/files/amrita-coimbatore-campus-banner4.jpg" />
        </div>
        <div className="highlight-image-container">
          <img className="highlight-short-image" src="https://www.amrita.edu/sites/default/files/amrita-coimbatore-campus-banner5.jpg" />
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
