import React, { Component } from "react";
import "./lecture_card.css";
import { withRouter } from "react-router-dom";
class Lecture_card extends Component {
  openLecture() {
    if (this.props.details.geoinfo.stdate !== "") {
      //this.props.setDataLecture();
      //this.props.setDataLecture(this);
      var detail=this.props.details;
      detail['lecturestatus']=this.props.lecturestatus;
      this.props.history.push({pathname: "/lecture", state: { detail: detail }});
      window.scrollTo(0, 0);
      return("success");
    }
    return("failure");
  }

  render() {
    return (
      <div className="lecture-container" onClick={this.openLecture.bind(this)}>
        <div className="image-container">
          <img src={this.props.details.poster} className="short-image" alt="" />
        </div>
        <div className="below-container">
          <p className="title">{this.props.details.title}</p>
          {this.props.details.geoinfo.stdate === "" ? (
            <div />
          ) : (
            <>
              <p className="content">
                {this.props.details.geoinfo.stdate} -{" "}
                {this.props.details.geoinfo.eddate}
              </p>
              <p className="content">
                {this.props.details.geoinfo.sttime} -{" "}
                {this.props.details.geoinfo.edtime}
              </p>
            </>
          )}
          <p className="content">{this.props.details.geoinfo.venue}</p>
        </div>
      </div>
    );
  }
}

export default withRouter(Lecture_card);
