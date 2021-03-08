import React, { Component } from "react";
import "./pastLecture.css";
import Lecture_card from "./lecture_card";
import ScrollContainer from 'react-indiana-drag-scroll'

class PastLecture extends Component {
  state = {};
  render() {
    return (
      <div className="og-container">
        <div className="heading">Past Lectures</div>
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
export default PastLecture;
