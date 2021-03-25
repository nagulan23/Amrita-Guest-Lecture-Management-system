import React, { Component } from "react";
import Approval_card from "./approval_card";

class Approval_section extends Component {
  state = {};
  render() {
    return (
      <div style={{alignItems:"center",justifyContent:"center",width:"100%",display:"flex",flexDirection:"column"}}>
        <Approval_card />
        <Approval_card />
        <Approval_card />
        <Approval_card />
        <Approval_card />
      </div>
    );
  }
}

export default Approval_section;
