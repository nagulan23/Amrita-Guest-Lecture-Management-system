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
import { Route, Switch } from "react-router-dom";
import { withRouter } from "react-router-dom";
import Lecture_add from "../Lecture/lecture_add";
import Lecturer_add from "../Lecturer/lecturer_add";
import Lecturer from "../Lecturer/lecturer_main";import { useHistory } from "react-router-dom";
class Header extends Component {
  state = {
    roll_no: "Loading...",
    lecture_detail:{},
  };
  constructor() {
    super();
    this.getdata = this.getdata.bind(this);
    this.getdata();
  }

  async getdata() {
    await axios
      .post(`https://aglm.herokuapp.com/`, {
        uid: localStorage.getItem("userID"),
      })
      .then((res) => {
        if (res.data.type === "user") {
          window.user = { roll_no: res.data.roll_no };
        } else if (res.data.type === "guser") {
          window.user = { roll_no: "Guest User" };
        } else {
          window.user = { roll_no: "ADMIN" };
        }
      });
    this.setState({ roll_no: window.user.roll_no });
  }

  setData(detail,ch){
    console.log("setted");
    console.log(detail);
    if(ch==1)
    detail.lecturestatus="Ongoing Lecture";
    else if(ch==2)
    detail.lecturestatus="Upcoming Lecture";
    else
    detail.lecturestatus="Past Lecture";
    this.setState({lecture_detail:detail});
  }
  render() {
    return (
      <div className="App">
        <header className="home-header">
          <div
            className="logo-name"
            onClick={() => this.props.history.push("/home")}
          >
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
              <Home setDataLecture={(e,ch)=>this.setData(e,ch)} type={this.state.roll_no}/>
            </Route>
            <Route exact path="/lecture">
              <Lecture_main detail={this.state.lecture_detail} type={this.state.roll_no}/>
            </Route>
            <Route exact path="/lecture-create">
              <Lecture_add />
            </Route>
            <Route exact path="/lecturer-create">
              <Lecturer_add />
            </Route>
            <Route exact path="/lecturer">
              <Lecturer />
            </Route>
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default withRouter(Header);

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
  let history = useHistory();

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
        history. push("/signin");
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
