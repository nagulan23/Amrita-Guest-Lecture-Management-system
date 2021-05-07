import React, { Component } from "react";
import {withRouter} from 'react-router-dom';
import Hover from './Hover';
import ScrollContainer from "react-indiana-drag-scroll";
import Lecturer_dp from "./Lecturer_dp";

class Lecturer extends Component {
  state = {};
  render() {
    console.log(this.props.history.location.state);
    return (
      <div>
        <div style={{display:"flex",flexDirection:"row",justifyContent:"space-between"}}>
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
                Nikola Tesla
            </div>
            <div style={{
                color: "#616161",
                fontSize: "15px",
                fontWeight:"bold"
            }}>
                B.tech, M.tech. ph.D
            </div>
            <div style={{
                color: "#616161",
                fontSize: "18px",
                fontWeight:"bold",
                margin:"30px",
            }}>
                A blend of Industrial and Teaching experience for 14 years. Strongly passionate to take up challenging tasks. Authored / Co- Authored 45 books for reputed publishers across globe. Authored 121 research papers in revered international journals, 28 Papers in international/national conferences.
            </div>
          </div>
          <Lecturer_dp/>
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
            <li>Published 100+ publications </li>
            <li>Won 200+ hackathon </li>
            <li> National representative of ACM </li>
            <li>Founder of Electric Dipole Organization</li>
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
            <Hover data={{url:"https://img.freepik.com/free-vector/music-event-poster-template-with-abstract-shapes_1361-1316.jpg?size=626&ext=jpg",title:"Machine Learning",date:"2000/12/34",des:"Lets make machines learn things by itself ;)"}}/>
            <Hover data={{url:"https://www.themodern.org/sites/default/files/2019-06/holzer_lecture2.jpg",title:"Machine Learning",date:"2000/12/34",des:"Lets make machines learn things by itself ;)"}}/>
            <Hover data={{url:"https://www.themodern.org/sites/default/files/2019-06/holzer_lecture2.jpg",title:"Machine Learning",date:"2000/12/34",des:"Lets make machines learn things by itself ;)"}}/>
            <Hover data={{url:"https://www.themodern.org/sites/default/files/2019-06/holzer_lecture2.jpg",title:"Machine Learning",date:"2000/12/34",des:"Lets make machines learn things by itself ;)"}}/>
            <Hover data={{url:"https://www.themodern.org/sites/default/files/2019-06/holzer_lecture2.jpg",title:"Machine Learning",date:"2000/12/34",des:"Lets make machines learn things by itself ;)"}}/>
            <Hover data={{url:"https://www.themodern.org/sites/default/files/2019-06/holzer_lecture2.jpg",title:"Machine Learning",date:"2000/12/34",des:"Lets make machines learn things by itself ;)"}}/>
          </ScrollContainer>
        </div>
      </div>
    );
  }
}

export default withRouter(Lecturer);
