import React from "react";
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./highlights.css";

const CarouselContainer = () => {
  return (
    <div className="Outerbox">
      <Carousel fade={true} pause={false} width={896} height={504}>
        <Carousel.Item interval={2000}>
          <img
            // className="d-block w-100"

            className="innerimagesize"
            src="https://penji.co/wp-content/uploads/2018/12/Get-Inspired-By-These-Attention-Grabbing-Event-Poster-Design-Examples.png"
            alt="First slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="innerimagesize"
            src="https://previews.123rf.com/images/korara/korara1708/korara170800160/84999108-grand-opening-vector-illustration-template-banner-or-horizontal-poster-with-abstract-background-for-.jpg"
            alt="Third slide"
          />
        </Carousel.Item>
        <Carousel.Item interval={2000}>
          <img
            className="innerimagesize"
            src="https://penji.co/wp-content/uploads/2018/12/Get-Inspired-By-These-Attention-Grabbing-Event-Poster-Design-Examples.png"
            alt="Third slide"
          />
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default CarouselContainer;
