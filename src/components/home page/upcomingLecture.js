import React, { Component } from "react";
import "./upcomingLecture.css";
import Lecture_card from "./lecture_card";
import ScrollContainer from 'react-indiana-drag-scroll'

class UpcomingLecture extends Component {
  state = {
  };
  render() {
    return (
      <div className="og-container">
        <div className="heading">Upcoming Lectures</div>
        <div className="underline"></div>
        <ScrollContainer  id="up-row-scroll" className='up-row-scroll'>
          
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
export default UpcomingLecture;
