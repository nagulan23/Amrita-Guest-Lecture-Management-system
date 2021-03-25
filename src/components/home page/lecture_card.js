import React, { Component } from "react";
import "./lecture_card.css";
import { animated, useSpring } from "react-spring";
import { useScroll } from "react-use-gesture";
/*const Lecture_card = () => {
  const [style, set] = useSpring(() => ({
    transform: "perspective(500px) rotateY(0deg)",
  }));
  return (
    <animated.div className="container" >
      <div className="image-container">
        <img
          src="https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?size=626&ext=jpg"
          className="short-image"
        />
      </div>
      <div className="below-container">
        <p className="title">Music Lecture</p>
        <p className="content">19/2 18:00 - 20/2/18:00</p>
        <p className="content">Amriteswari Hall</p>
      </div>
    </animated.div>
  );
};

export default Lecture_card;*/
class Lecture_card extends Component {
  render() {
    return (
      <div className="lecture-container">
        <div className="image-container">
          <img
            src={this.props.details.image}
            className="short-image"
          />
        </div>
        <div className="below-container">
          <p className="title">{this.props.details.l_name}</p>
          {(this.props.details.Date=="")?<div/>:<p className="content">{this.props.details.Date} - {this.props.details.Time}</p>}
          <p className="content">{this.props.details.Roomno}</p>
        </div>
      </div>
    );
  }
}

export default Lecture_card;
