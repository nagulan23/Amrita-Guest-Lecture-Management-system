import React, { Component } from "react";
import axios from "axios";
import Spinner from "react-spinkit";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Lecturer_add extends Component {
  state = {
    title: "",
    organizer: "",
    about: "",
    poster: "",
    geoinfo: {
      stdate: "",
      eddate: "",
      sttime: "",
      edtime: "",
      venue: "",
      certificate: "No Certificate",
    },
    regcount: "",
    syllabus: [],
    requirements: ["", "", ""],
    fee: "",
    instructor: {
      name: "SAEED AGHABOZORGI",
      img:
        "https://d3njjcbhbojbot.cloudfront.net/api/utilities/v1/imageproxy/https://coursera-instructor-photos.s3.amazonaws.com/a0/8de0c0730a11e8a983190cf39a362d/My_Photo_lowsize3-copy.jpg?auto=format%2Ccompress&dpr=1&w=200&h=200",
      position: "Associate Professor in Data Science",
    },
    error: "",
    loading: false,
  };

  async handleCreate(event) {
    event.preventDefault();
    this.setState({ error: "" });
    if (this.state.geoinfo.stdate > this.state.geoinfo.eddate)
      this.setState({ error: "Date Invalid" });
    else if (
      this.state.geoinfo.stdate == this.state.geoinfo.eddate &&
      this.state.geoinfo.sttime >= this.state.geoinfo.edtime
    )
      this.setState({ error: "Time Invalid" });
    else {
      this.setState({ loading: true });
      var data = this.state;
      delete data.loading;
      delete data.error;
      await axios
        .post(`https://aglm.herokuapp.com/createlecture`, data)
        .then((res) => {
          console.log(res);
          NotificationManager.success('Created Lecture','Success!' );
        });
        this.setState({ loading: false });
    }
  }

  handleChange(cat, event) {
    this.setState({ error: "" });
    if (cat === "lname") this.setState({ title: event.target.value });
    else if (cat === "oname") this.setState({ organizer: event.target.value });
    else if (cat === "des") this.setState({ about: event.target.value });
    else if (cat === "purl") this.setState({ poster: event.target.value });
    else if (cat === "loc") {
      var geoinfo = this.state.geoinfo;
      geoinfo.venue = event.target.value;
      this.setState({ geoinfo: geoinfo });
    } else if (cat === "maxreg")
      this.setState({ regcount: event.target.value });
    else if (cat === "syllabus")
      this.setState({ syllabus: event.target.value.split(",") });
    else if (cat === "dep") {
      var req = this.state.requirements;
      req[0] = event.target.value;
      this.setState({ requirements: req });
    } else if (cat === "year") {
      var req = this.state.requirements;
      req[1] = event.target.value;
      this.setState({ requirements: req });
    } else if (cat === "topic") {
      var req = this.state.requirements;
      req[2] = event.target.value;
      this.setState({ requirements: req });
    } else if (cat === "fee") this.setState({ fee: event.target.value });
    else if (cat === "certificate") {
      var geoinfo = this.state.geoinfo;
      geoinfo.certificate = event.target.value;
      this.setState({ geoinfo: geoinfo });
    } else if (cat === "dates") {
      var geoinfo = this.state.geoinfo;
      geoinfo.stdate = event.target.value.replaceAll("-", "/");
      this.setState({ geoinfo: geoinfo });
    } else if (cat === "datet") {
      var geoinfo = this.state.geoinfo;
      geoinfo.eddate = event.target.value.replaceAll("-", "/");
      this.setState({ geoinfo: geoinfo });
    } else if (cat === "times") {
      var geoinfo = this.state.geoinfo;
      geoinfo.sttime = event.target.value;
      this.setState({ geoinfo: geoinfo });
    } else if (cat === "timet") {
      var geoinfo = this.state.geoinfo;
      geoinfo.edtime = event.target.value;
      this.setState({ geoinfo: geoinfo });
    }
  }

  render() {
    return (
      <div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              margin: "50px",
              fontSize: "40px",
              fontWeight: "800",
              color: "orangered",
            }}
          >
            LECTURER CREATION
          </div>
          <img
            src={
              "https://dthirdeyestudio.com/assets/uploads/homepage/slider_1580035577.png"
            }
            style={{ height: "200px" }}
          ></img>
        </div>
        <form
          onSubmit={this.handleCreate.bind(this)}
          style={{
            display: "flex",
            flexDirection: "column",
            margin: "40px",
            marginBottom: "0px",
            rowGap: "10px",
          }}
        >
          <label>
            {"Name :  "}
            <input
              name="name"
              type="name"
              onChange={this.handleChange.bind(this, "lname")}
              required
            />
          </label>
          <label>
            {"Degree :  "}
            <input
              name="name"
              type="name"
              onChange={this.handleChange.bind(this, "oname")}
              required
            />
          </label>
          <label>
            {"Bio :  "}
            <input
              name="bio"
              type="text"
              onChange={this.handleChange.bind(this, "des")}
              required
            />
          </label>
          <label>
            {"Profile URL :  "}
            <input
              name="profile"
              type="url"
              onChange={this.handleChange.bind(this, "purl")}
              required
            />
          </label>
          <label>
            {"Gmail :  "}
            <input
              name="gmail"
              type="name"
              onChange={this.handleChange.bind(this, "purl")}
              required
            />
          </label>
          <label>
            {"Linkedin :  "}
            <input
              name="linkedin"
              type="name"
              onChange={this.handleChange.bind(this, "purl")}
              required
            />
          </label>
          <label>
            {"Achievements (Comma separated) :  "}
            <input
              name="syllabus"
              type="text"
              onChange={this.handleChange.bind(this, "syllabus")}
              required
            />
          </label>
          <button
            type="submit"
            style={{
              width: "25%",
              margin: "20px",
              backgroundColor: "orangered",
              color: "white",
              borderRadius: "20px",
              padding: "10px",
              paddingLeft: "50px",
              paddingRight: "50px",
              cursor: "pointer",
              display: "flex",
              justifyContent: "center",
            }}
          >
            {this.state.loading ? <Spinner name="circle" /> : "Create Lecturer"}
          </button>
        </form>
        <div style={{ display: "flex", flexDirection: "row" }}>
          {this.state.error !== "" ? (
            <div
              style={{
                margin: "20px",
                marginLeft: "60px",
                color: "red",
                fontSize: "20px",
              }}
            >
              Error! {this.state.error}
            </div>
          ) : (
            <div />
          )}
        </div>
        <NotificationContainer/>
      </div>
    );
  }
}

export default Lecturer_add;

/*
<div onClick={this.handleCreate.bind(this)} style={{margin:"20px",backgroundColor:"orangered",color:"white",borderRadius:"10px",padding:"10px",paddingLeft:"50px",paddingRight:"50px",cursor:"pointer"}}>
            Create Lecture
          </div>
*/
