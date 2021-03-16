import React, { Component } from "react";
import "./pastLecture.css";
import Lecture_card from "./lecture_card";
import ScrollContainer from "react-indiana-drag-scroll";
import axios from "axios";

class PastLecture extends Component {
  constructor() {
    super();
    axios.get(`https://aglm.herokuapp.com/completedlectures`).then((res) => {
      this.setState({ list_lecture: res.data });
    });
  }
  state = {
    list_lecture: [],
  };
  render() {
    return (
      <div className="og-container">
        <div className="heading">Past Lectures</div>
        <div className="underline"></div>
        <ScrollContainer className="row-scroll">
          {this.state.list_lecture.map((lecture) => (
            <Lecture_card details={lecture} />
          ))}
        </ScrollContainer>
      </div>
    );
  }
}
//<ScrollView horizontal={true} style={styles.container}> </ScrollView>
export default PastLecture;
