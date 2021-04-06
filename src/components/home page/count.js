import React, { Component } from 'react';
import axios from "axios";

class CountBox extends Component {
  
  constructor() {
    super();
    this.getdata = this.getdata.bind(this);
    this.getdata();
  }
  
  async getdata() {
    await axios
      .post(`https://aglm.herokuapp.com/countlectures`, {
        uid: localStorage.getItem("userID"),
      }).then((res) => {
        this.setState({ count:  res.data  });
      });
  }


  state = { 
    count:{
      present:0,
      future:0,
      my:0,
    } 
  }
  render() { 
    return ( <div
      style={{
        textAlign: "left",
        padding: "20px",
        margin: "50px",
        width: "25%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-evenly",
        border: "4px solid black",
        borderRadius: "5px",
        boxShadow: "0px 0px 20px black",
        backgroundColor:"white"
      }}
    >
      <div>
        <div
          style={{
            fontFamily: "sans-serif",
            display: "inline",
            fontSize: 55,
            fontWeight: "bold",
          }}
        >
          {this.state.count.present}
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            display: "inline",
            fontSize: 25,
            padding: "20px",
          }}
        >
          Ongoing Lectures
          {/* <Typical
        steps={[' ', 1000, '  Ongoing Lectures', 500]}
        loop={1}
        wrapper="span"
      /> */}
        </div>
      </div>
      <div>
        <div
          style={{
            fontFamily: "sans-serif",
            display: "inline",
            fontSize: 55,
            fontWeight: "bold",
          }}
        >
        {this.state.count.future}
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            display: "inline",
            fontSize: 25,
            padding: "20px",
          }}
        >
          Upcoming Lectures
          {/* <Typical
        steps={[' ', 1000, '  Upcoming Lectures', 500]}
        loop={1}
        wrapper="span"
      /> */}
        </div>
      </div>
      <div>
        <div
          style={{
            fontFamily: "sans-serif",
            display: "inline",
            fontSize: 55,
            fontWeight: "bold",
          }}
        >
        {this.state.count.my}
        </div>
        <div
          style={{
            fontFamily: "sans-serif",
            display: "inline",
            fontSize: 25,
            padding: "20px",
          }}
        >
          Registered Lectures
          {/* <Typical
        steps={[' ', 1000, '  Cancelled Lectures', 500]}
        loop={1}
        wrapper="span"
      /> */}
        </div>
        <div style={{ width: "100%",textAlign:"center" }}>
          <div
            style={{
              width: "30%",
              height: "8px",
              backgroundColor: "#242526",
              borderRadius: "20px",
              alignSelf: "center",
              display:"inline-block"
            }}
          />
        </div>
      </div>
    </div> );
  }
}
 
export default CountBox;
