import React, { Component } from "react";
import "./home.css";
import OngoingLecture from "./ongoingLecture";
import UpcomingLecture from "./upcomingLecture";
import PastLecture from "./pastLecture";
import CarouselContainer from "./highlights";
import axios from "axios";
import CountBox from "./count";
import Approval_section from "./approval_section";
import {
  Navbar,
} from "react-bootstrap";

class Home extends Component {
  state = {
    type: "user",
    section: 1,
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
        window.user = { type: res.data.type };
      });
    this.setState({ type: window.user.type });
  }

  my() {
    this.setState({ section: 2 });
  }

  all() {
    this.setState({ section: 1 });
  }

  approve() {
    this.setState({ section: 3 });
  }

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            backgroundImage: `url("https://wallpaperaccess.com/full/692084.png")`,
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <CarouselContainer />
          <CountBox />
        </div>
        <Navbar bg="dark" variant="dark" expand="lg" sticky="top">
          <ul class="navbar-nav">
            <li class="nav-item">
              <a
                class="nav-link"
                style={{
                  color: this.state.section == 1 ? "yellow" : "white",
                  cursor: "pointer",
                  "&:hover": { background: "#efefef" },
                }}
                onClick={this.all.bind(this)}
              >
                Home
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                style={{
                  color: this.state.section == 2 ? "yellow" : "white",
                  cursor: "pointer",
                }}
                onClick={this.my.bind(this)}
              >
                My Registrations
              </a>
            </li>
            {(this.state.type=="user")?
            <div></div>
            :
            <li class="nav-item">
              <a
                class="nav-link"
                style={{
                  color: this.state.section == 3 ? "yellow" : "white",
                  cursor: "pointer",
                }}
                onClick={this.approve.bind(this)}
              >
                Sign-in Approvals
              </a>
            </li>
              }
          </ul>
        </Navbar>
        <br />
        {this.state.section == 1 ? (
          <>
            <OngoingLecture />
            <UpcomingLecture />
            <PastLecture />
          </>
        ) : this.state.section == 2 ? (
          <>
            <OngoingLecture />
            <UpcomingLecture />
            <PastLecture />
          </>
        ) : (
          <Approval_section />
        )}
      </div>
    );
  }
}

export default Home;

