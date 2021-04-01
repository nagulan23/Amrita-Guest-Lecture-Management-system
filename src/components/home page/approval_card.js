import React, { Component } from "react";
import "./approval_card.css";
import firebase from "firebase";
import Spinner from "react-spinkit";

class Approval_card extends Component {
  state = {
    email: "",
    password: "",
    date: "",
    loading: false,
  };

  async firebaseSignup() {
    this.setState({ loading: true });
    await firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log(res.user.uid);
        console.log("success");
        window.approve={uid:res.user.uid};
        this.props.delete();
      })
      .catch((err) => {
        console.log(err);
        console.log("failed");
      });
  }

  callDelete() {
    this.setState({ loading: true });
    window.approve={uid:""};
    this.props.delete();
  }

  render() {
    this.state.email = this.props.details.email;
    this.state.password = this.props.details.password;
    this.state.date = this.props.details.Date;
    return (
      <div
        style={{
          width: "90%",
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
          {this.state.email}
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
            {this.state.date}
          </div>
          <div
            style={{
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {this.state.loading ? (
              <Spinner spinnerName="wave" />
            ) : (
              <>
                <button
                  type="button"
                  className="btn btn-info btn-circle btn-lg"
                  onClick={this.firebaseSignup.bind(this)}
                >
                  <a>✔</a>
                </button>
                <button
                  type="button"
                  className="btn btn-warning btn-circle btn-lg"
                  onClick={this.callDelete.bind(this)}
                >
                  <a>✖</a>
                </button>
              </>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Approval_card;
