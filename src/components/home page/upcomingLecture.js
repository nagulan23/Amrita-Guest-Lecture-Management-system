import React, { Component } from "react";
import "./upcomingLecture.css";
import Lecture_card from "./lecture_card";
import ScrollContainer from "react-indiana-drag-scroll";
import axios from "axios";

class UpcomingLecture extends Component {
  constructor(props) {
    super();
    (props.all)?
    axios.get(`https://aglm.herokuapp.com/nextlectures`).then((res) => {
      this.setState({ list_lecture: res.data });
    })
    :
    axios.post(`https://aglm.herokuapp.com/mylectures_future`,{uid:localStorage.getItem("userID")}).then((res) => {
      this.setState({ list_lecture: res.data });
    });
  }
  state = {
    list_lecture: [],
  };
  render() {
    return (
      <div className="og-container">
        <div className="heading">{(this.props.all)?"Upcoming Lectures":"Your Upcoming Lectures"}</div>
        <div className="underline"></div>
        <ScrollContainer id="up-row-scroll" className="up-row-scroll">
          {this.state.list_lecture.length > 0 ? (
            this.state.list_lecture.map((lecture) => (
              <Lecture_card key={lecture.lecture_id} details={lecture} lecturestatus="Upcoming Lecture"/>
            ))
          ) : (
            <Lecture_card
              details={{
                poster:
                  "https://t3.ftcdn.net/jpg/02/66/33/82/360_F_266338299_wTr8tcMGNmjFbEJVnrkKXrrsHABMlqXY.jpg",
                title: "No Lectures to display right now!",
                geoinfo: {
                  stdate: "",
                  eddate: "",
                  sttime: "",
                  edtime: "",
                  venue: "",
                },
              }}
            />
          )}
        </ScrollContainer>
      </div>
    );
  }
}
//<ScrollView horizontal={true} style={styles.container}> </ScrollView>
export default UpcomingLecture;
