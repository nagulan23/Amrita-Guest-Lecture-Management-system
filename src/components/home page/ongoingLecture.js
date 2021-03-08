import React, { Component } from "react";
import "./ongoingLecture.css";
import Lecture_card from "./lecture_card";
import ScrollContainer from 'react-indiana-drag-scroll'

class OngoingLecture extends Component {
  state = {};
  render() {
    return (
      <div className="og-container">
        <div className="heading">Ongoing Lectures</div>
        <div className="underline"></div>
        <ScrollContainer  className="row-scroll">
          
            <Lecture_card />
            <Lecture_card />
            <Lecture_card />
            <Lecture_card />
            <Lecture_card />
         
        </ScrollContainer >
      </div>
    );
  }
}
//<ScrollView horizontal={true} style={styles.container}> </ScrollView>
export default OngoingLecture;
