import React, { Component } from "react";
import "./signin.css";
import logo from "../../assets/amrita-logo.png";
import bgp from "../../assets/bgpic.png";
import Signin_Card from "./signin-card";

class Signin extends Component {
  state = {};
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="logo-name">
            <img src={logo} alt="logo" className="image" />
            <h className="highlight">A</h>mrita
            <h className="highlight"> G</h>uest
            <h className="highlight"> L</h>ecture
            <h className="highlight"> M</h>anagement
            <h className="highlight"> S</h>ystem
          </div>
        </header>
        <div className="body">
          <img src={bgp} alt="Background" className="bgp" />
          <Signin_Card changeHomePage={this.props.changeHomePage}/>
        </div>
      </div>
    );
  }
}

export default Signin;
