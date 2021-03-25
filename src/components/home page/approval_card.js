import React, { Component } from "react";
import "./approval_card.css";

class Approval_card extends Component {
  state = {};
  render() {
    return (
      <div
        style={{
            width:"90%",
          margin: "30px",
          backgroundColor: "white",
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0 0 10px 2px #282c34",
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <div
          style={{
            fontSize: "25px",
            fontWeight: "bold",
            color: "#242526",
            width: "50%",
          }}
        >
          nagulan1645@gmail.com
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "50%",
            alignItems: "center",
          }}
        >
          <div style={{ fontSize: "25px", fontWeight: "w500", color: "gray" }}>
            23/12/2000
          </div>
          <div>
            <button type="button" class="btn btn-info btn-circle btn-lg">
              <a>✔</a>
            </button>
            <button type="button" class="btn btn-warning btn-circle btn-lg">
              <a>✖</a>
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default Approval_card;
