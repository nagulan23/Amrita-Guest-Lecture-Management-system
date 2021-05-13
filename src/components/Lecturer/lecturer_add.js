import React, { Component } from "react";
import axios from "axios";
import Spinner from "react-spinkit";
import {NotificationContainer, NotificationManager} from 'react-notifications';
import 'react-notifications/lib/notifications.css';

class Lecturer_add extends Component {
  state = {
    name:"",
    degree:"",
    bio:"",
    gmail:"",
    linkedin:"",
    lectures:[],
    profile:"",
    achievements:[],
    error: "",
    loading: false,
  };

  async handleCreate(event) {
    event.preventDefault();
    this.setState({ error: "" });
    console.log(this.state);
    this.setState({ loading: true });
      var data = this.state;
      delete data.loading;
      delete data.error;
      await axios
        .post(`https://aglm.herokuapp.com/createlecturer`, data)
        .then((res) => {
          console.log(res);
          NotificationManager.success('Created Lecturer','Success!' );
        });
        this.setState({ loading: false });
  }

  handleChange(cat, event) {
    this.setState({ error: "" });
    if (cat === "name") this.setState({ name: event.target.value });
    else if (cat === "degree") this.setState({ degree: event.target.value });
    else if (cat === "bio") this.setState({ bio: event.target.value });
    else if (cat === "purl") this.setState({ profile: event.target.value });
    else if (cat === "gmail") this.setState({ gmail: event.target.value });
    else if (cat === "lin") this.setState({ linkedin: event.target.value });
    else if (cat === "ach") this.setState({ achievements: event.target.value.split(",") });
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
              onChange={this.handleChange.bind(this, "name")}
              required
            />
          </label>
          <label>
            {"Degree :  "}
            <input
              name="name"
              type="name"
              onChange={this.handleChange.bind(this, "degree")}
              required
            />
          </label>
          <label>
            {"Bio :  "}
            <input
              name="bio"
              type="text"
              onChange={this.handleChange.bind(this, "bio")}
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
              onChange={this.handleChange.bind(this, "gmail")}
              required
            />
          </label>
          <label>
            {"Linkedin :  "}
            <input
              name="linkedin"
              type="name"
              onChange={this.handleChange.bind(this, "lin")}
              required
            />
          </label>
          <label>
            {"Achievements (Comma separated) :  "}
            <input
              name="syllabus"
              type="text"
              onChange={this.handleChange.bind(this, "ach")}
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
