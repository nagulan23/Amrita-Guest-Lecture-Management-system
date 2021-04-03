import React, { Component } from "react";
import Approval_card from "./approval_card";
import axios from "axios";
import Spinner from "react-spinkit";
import empty from "../../assets/empty.gif";

class Approval_section extends Component {
  constructor() {
    super();
    axios.get(`https://aglm.herokuapp.com/all_login`).then((res) => {
      this.setState({ list_approvals: res.data, loading:false });
    });
  }
  state = {
    list_approvals: [],
    loading: true
  };

  deleteEntry(email) {
    console.log("deleting!!")
    var uid=window.approve.uid;
    console.log(uid);
    axios
      .post(`https://aglm.herokuapp.com/deletelogin`, {
        email: email,
        uid:uid
      })
      .then((res) => {
        console.log(res.data);
        if (res.data.status === "Success") {
          var new_list = [];
          var index;
          for (index = 0; index < this.state.list_approvals.length; index++) {
            if (this.state.list_approvals[index].email !== email)
              new_list.push(this.state.list_approvals[index]);
          }
          this.setState({ list_approvals: new_list });
        }
      });
  }

  render() {
    return (
      (this.state.loading)?
      <div style={{width:"100%",display:"flex",justifyContent:"center"}}>
        <Spinner name="circle" />
        </div>
      :
      <div
        style={{
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          display: "flex",
          flexDirection: "column",
        }}
      >{this.state.list_approvals.length===0?
        //<img src="https://i.makeagif.com/media/12-20-2016/wZfadf.gif" alt=""/>
        <>
          <img src={empty} alt=""/>
          <div style={{fontSize:"20px"}}>No remaining approvals</div>
        </>
        :
        this.state.list_approvals.map((e) => (
          <Approval_card key={e.email} details={e} delete={this.deleteEntry.bind(this,e.email)} />
        ))}
      </div>
    );
  }
}

export default Approval_section;
