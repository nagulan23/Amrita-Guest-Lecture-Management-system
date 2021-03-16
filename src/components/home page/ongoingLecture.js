import React, { Component } from "react";
import "./ongoingLecture.css";
import Lecture_card from "./lecture_card";
import ScrollContainer from "react-indiana-drag-scroll";
import axios from "axios";

class OngoingLecture extends Component {
  constructor() {
    super();
    axios.get(`https://aglm.herokuapp.com/presentlectures`).then((res) => {
      this.setState({ list_lecture: res.data });
    });
  }
  state = {
    list_lecture: [],
  };
  render() {
    return (
      <div className="og-container">
        <div className="heading">Today's Lectures</div>
        <div className="underline"></div>
        <ScrollContainer className="row-scroll">
          {this.state.list_lecture.map((lecture) => 
            <Lecture_card details={lecture} />
          )}
        </ScrollContainer>
      </div>
    );
  }
}
//<ScrollView horizontal={true} style={styles.container}> </ScrollView>
//
export default OngoingLecture;
