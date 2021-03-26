import "./home.css";
import React, { Component } from "react";
import logo from "../../assets/amrita-logo.png";
import Home from "./home";
import { useState, useEffect, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import firebase from "firebase";
import Footer from "../footer/footer";
import axios from "axios";
import Lecture_main from "../Lecture/lecture_main";
import {
    BrowserRouter as Router,
    Route,
    useHistory,
    Redirect,
    Switch,
  } from "react-router-dom";
class Header extends Component {
  state = {
    roll_no: "Loading...",
  };
  constructor() {
    super();
    this.getdata();
  }

  async getdata() {
    await axios
      .post(`https://aglm.herokuapp.com/`, {
        uid: localStorage.getItem("userID"),
      })
      .then((res) => {
        console.log(res.data);
        window.user = { roll_no: res.data.roll_no };
      });
    this.setState({ roll_no: window.user.roll_no });
  }

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
          <NavItem className="rollno-profile" roll_no={this.state.roll_no}>
            <DropdownMenu
              className="rollno-profile"
              changeSigninPage={this.props.changeSigninPage}
            ></DropdownMenu>
          </NavItem>
        </header>
        <div className="home-body">
          <Switch>
            <Route exact path="/home">
              <Home />
            </Route>
            <Route exact path="/lecture">
              <Lecture_main />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Header;

function NavItem(props) {
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setOpen(!open)} className="rollno-profile">
        {props.roll_no}
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
  async function signout() {
    await firebase
      .auth()
      .signOut()
      .then((res) => {
        console.log("success");
        localStorage.clear();
        window.location.reload();
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
          <DropdownItem goToMenu={signout}>Sign Out</DropdownItem>
        </div>
      </CSSTransition>
    </div>
  );
}
