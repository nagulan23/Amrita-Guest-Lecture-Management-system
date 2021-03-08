import React, { Component } from "react";
import "./home.css";
import logo from "../../assets/amrita-logo.png";
import OngoingLecture from "./ongoingLecture";
import UpcomingLecture from "./upcomingLecture";
import PastLecture from "./pastLecture";
import CarouselContainer from "./highlights";
import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import firebase from "firebase";
import  Footer from "../footer/footer";

class Home extends Component {
  state = {};

  render() {
    return (
      <div className="App">
        <header className="home-header">
          <div className="logo-name">
            <img src={logo} alt="logo" className="image" />
            <h className="highlight">A</h>mrita
            <h className="highlight"> G</h>uest
            <h className="highlight"> L</h>ecture
            <h className="highlight"> M</h>anagement
            <h className="highlight"> S</h>ystem
          </div>
          <NavItem className="rollno-profile">
            <DropdownMenu className="rollno-profile" changeSigninPage={this.props.changeSigninPage}></DropdownMenu>
          </NavItem>
        </header>
        <div className="home-body">
          <OngoingLecture />
          <UpcomingLecture />
          <PastLecture />
        </div>
        <Footer/>
      </div>
    );
  }
}

export default Home;

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <button onClick={() => setOpen(!open)} className="rollno-profile">
        CB.EN.U4CSE18XXX
      </button>
      {open && props.children}
    </div>
  );
}

function DropdownMenu(props) {
  const [activeMenu, setActiveMenu] = useState("main");
  const [menuHeight, setMenuHeight] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    setMenuHeight(dropdownRef.current?.firstChild.offsetHeight);
  }, []);

  function calcHeight(el) {
    const height = el.offsetHeight;
    setMenuHeight(height);
  }

  function DropdownItem(props) {
    return (
      <a
        href="#"
        className="aglm-menu-item"
        onClick={() => props.goToMenu && setActiveMenu(props.goToMenu)}
      >
        {props.children}
      </a>
    );
  }
  async function signout(e) {
    e.preventDefault();
    await firebase
      .auth()
      .signout()
      .then((res) => {
        console.log("success");
      })
      .catch((err) => {
        console.log(err);
        console.log("failed");
      });
  }

  return (
    <div
      className="aglm-dropdown"
      style={{ height: menuHeight }}
      ref={dropdownRef}
    >
      <CSSTransition
        in={activeMenu === "main"}
        timeout={500}
        classNames="aglm-menu-primary"
        unmountOnExit
        onEnter={calcHeight}
      >
        <div className="aglm-menu">
          <DropdownItem goToMenu={props.changeSigninPage}>Sign Out</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
