import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import Hover from './Hover';
import ScrollContainer from "react-indiana-drag-scroll";
import Lecturer_dp from "./face";
import Contact from "./MailLinkedin";

class Lecturer extends Component {
  state = {

  };
  render() {
    console.log(this.props.history.location.state);
    return (
      <div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between",alignItems:"center"}}>
          <div
            style={{
              width: "65%",
              backgroundColor: "#FEF2A4",
              borderRadius:"50% 50% 50% 50%",
              marginTop:"50px",
              marginLeft:"-300px",
              padding:"100px",
              paddingLeft:"320px",
              //boxShadow: "0 0 5px black"
            }}
          >
            <div style={{
                color: "#242526",
                fontSize: "40px",
                fontWeight:"bold"
            }}>
                {this.props.history.location.state.detail.name}
            </div>
            <div style={{
                color: "#616161",
                fontSize: "15px",
                fontWeight:"bold"
            }}>
                {this.props.history.location.state.detail.degree}
            </div>
            <div style={{
                color: "#616161",
                fontSize: "18px",
                fontWeight:"bold",
                margin:"30px",
            }}>
                {this.props.history.location.state.detail.bio}
            </div>
          </div>
          <div >
            <Lecturer_dp profile={this.props.history.location.state.detail.profile}/>
            <Contact gmail={this.props.history.location.state.detail.gmail} linkedin={this.props.history.location.state.detail.linkedin}/>
          </div>
          <div/>
        </div>
        <div style={{
             border:"1px solid black",
             borderRadius:"10px", 
             margin:"auto",
             marginTop:"20px",
             marginBottom:"20px",
             padding:"10px",
             overflow:"auto",  
             width:"90%",
             display:"flex",
             flexDirection:"row",
             justifyContent:"space-between"
        }}>
          <div>
          <div
                id="about"
                style={{
                  padding: "20px",
                  fontSize: "28px",
                  fontWeight: "bold",
                  color: "#282c34",
                  textAlign: "left",
                }}
              >
                Achivements
              </div>
            <div style={{paddingLeft:"40px",}}>
              {this.props.history.location.state.detail.achievements.map((achievement) => (
                <li>{achievement}</li>
              ))}
            </div>
          </div>
          <img src="https://img.freepik.com/free-vector/target-achievement-teamwork-business_107791-46.jpg?size=626&ext=jpg" alt="achievements.JPG" height="200px" style={{
             float:"right",
          }}/>
        </div>
        <div style={{backgroundColor:"#d1d1d1"}}>
          <div
            id="about"
            style={{
              padding: "20px",
              paddingTop:"10px",
              paddingBottom:"0px",
              fontSize: "28px",
              fontWeight: "bold",
              color: "#282c34",
              textAlign: "left",
            }}
          >
            Previous Lectures
          </div>
          <ScrollContainer id="up-row-scroll" className="up-row-scroll">
            {this.props.history.location.state.detail.lectures.map((lecture) => (
                  <Hover data={{url:lecture.poster,title:lecture.title,date:lecture.date,des:lecture.about}}/>
                ))}
          </ScrollContainer>
        </div>
      </div>
    );
  }
}

export default withRouter(Lecturer);
