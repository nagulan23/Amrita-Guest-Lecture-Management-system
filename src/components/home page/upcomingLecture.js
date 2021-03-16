import React, { Component } from "react";
import "./upcomingLecture.css";
import Lecture_card from "./lecture_card";
import ScrollContainer from 'react-indiana-drag-scroll';
import axios from "axios";

class UpcomingLecture extends Component {
  constructor() {
    super();
    axios.get(`https://aglm.herokuapp.com/nextlectures`).then((res) => {
      this.setState({ list_lecture: res.data });
    });
  }
  state = {
    list_lecture: [],
  };
  render() {
    return (
      <div className="og-container">
        <div className="heading">Upcoming Lectures</div>
        <div className="underline"></div>
        <ScrollContainer  id="up-row-scroll" className='up-row-scroll'>
          {this.state.list_lecture.map((lecture) => (
            <Lecture_card details={lecture} />
          ))}
        </ScrollContainer >
      </div>
    );
  }
}
//<ScrollView horizontal={true} style={styles.container}> </ScrollView>
export default UpcomingLecture;
