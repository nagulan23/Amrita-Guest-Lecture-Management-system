import "./signin-card.css";
import React, { Component, useState} from "react";
import firebase from "firebase";
import axios from "axios";
import Popup from "./Popup";
/*function HandleSubmit(e){
  console.log("Handle function")
  e.preventDefault()
  const {handleSignup,handleSignin,inputs,setInputs,errors} = useContext(firebaseAuth)
  if(handleSignin()){
    //this.props.changePage();
    console.log("HandleSgnin function")
  }
};

function HandleSubmit() {
  const {handleSignup,handleSignin,inputs,setInputs,errors} = useContext(firebaseAuth)
  const handleSubmit = (e) => {
    e.preventDefault()
    if(handleSignin()){
      //this.props.changePage();
      console.log("HandleSgnin function")
    }
  }
  
  return (handleSubmit);
}*/
class Signin_Card extends Component {
  constructor(props) {
    super(props);
    this.handleChangeEmail = this.handleChangeEmail.bind(this);
    this.handleChangePassword = this.handleChangePassword.bind(this);
    this.handleChangeNewEmail = this.handleChangeNewEmail.bind(this);
    this.handleChangeNewPassword = this.handleChangeNewPassword.bind(this);
    this.handleChangeNewRepassword = this.handleChangeNewRepassword.bind(this);
  }

  state = {
    email: "",
    password: "",
    errorText: "",
    newEmail: "",
    newPassword: "",
    newRepassword: "",
    seen: false,
  };
   togglePop () {
    this.setState({
     seen: !this.state.seen
    });
    console.log(this.state.seen);
   };


  async handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    console.log("handleSignup1");
    this.setState({errorText:"Signing in! Please wait"})
    await firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log("success");
        this.setState({ signedIn: true });
        localStorage.setItem("userID", firebase.auth().currentUser.uid);
        window.location.reload();
      })
      .catch((err) => {
        console.log(err);
        console.log("failed");
        this.setState({ errorText: "Incorrect Mail-ID or Password" });
      });
  }

  async handleSignUp(e) {
    e.preventDefault();
    if (
      !(this.state.newEmail.includes("@") && this.state.newEmail.includes("."))
    ) {
      this.setState({ errorText: "Invalid Email" });
    } else if (this.state.newPassword !== this.state.newRepassword) {
      this.setState({ errorText: "Passwords do not match" });
    } else {
      this.setState({errorText:"Signing up! Please wait"})
      await axios
      .post(`https://aglm.herokuapp.com/requestlogin`, {
        email: this.state.newEmail,
        password: this.state.newPassword,
      })
      .then((res) => {
        console.log(res.data);
        if(res.data.status==="Success")
        this.setState({errorText:"Success! You will be able to login once ADMIN approves"})
        else
        this.setState({errorText:"Sign up failed!"})
      });
    }
  }

  handleChangeEmail(event) {
    this.setState({ errorText: "" });
    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ errorText: "" });
    this.setState({ password: event.target.value });
  }

  handleChangeNewEmail(event) {
    this.setState({ errorText: "" });
    this.setState({ newEmail: event.target.value });
  }

  handleChangeNewPassword(event) {
    this.setState({ errorText: "" });
    this.setState({ newPassword: event.target.value });
  }

  handleChangeNewRepassword(event) {
    this.setState({ errorText: "" });
    this.setState({ newRepassword: event.target.value });
  }

  login() {
    this.setState({ errorText: "" });
    document.getElementById("signlogin").style.left = "50px";
    document.getElementById("signregister").style.left = "450px";
    document.getElementById("signbtn").style.left = "0px";
    document.getElementById("signtoggle-btn1").style.color = "#ffe957";
    document.getElementById("signtoggle-btn2").style.color = "#282c34";
  }

  register() {
    this.setState({ errorText: "" });
    document.getElementById("signlogin").style.left = "-400px";
    document.getElementById("signregister").style.left = "50px";
    document.getElementById("signbtn").style.left = "110px";
    document.getElementById("signtoggle-btn2").style.color = "#ffe957";
    document.getElementById("signtoggle-btn1").style.color = "#282c34";
  }

  error() {
    if (this.state.errorText !== "" && this.state.errorText!=="Success! You will be able to login once ADMIN approves" )
      return <div className="signerror-text">{this.state.errorText}</div>;
  }
  success() {
    if (this.state.errorText === "Success! You will be able to login once ADMIN approves")
      return <div className="signuperror-text">{this.state.errorText}</div>;
  }

  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        />
       {this.state.seen? <Popup toggle = {this.togglePop.bind(this)}/>:<div/>}
        <div className="App">
          <div className="signhero">
            <div className="signform-box">
              <div className="signbutton-box">
                <div id="signbtn"></div>
                <button
                  type="button"
                  id="signtoggle-btn1"
                  className="signtoggle-btn1"
                  onClick={this.login.bind(this)}
                >
                  Sign In
                </button>
                <button
                  type="button"
                  id="signtoggle-btn2"
                  className="signtoggle-btn2"
                  onClick={this.register.bind(this)}
                >
                  {" "}
                  Sign Up
                </button>
              </div>
              <form
                id="signlogin"
                className="signinput-group"
                onSubmit={this.handleSubmit.bind(this)}
              >
                {/* <input type="text" className="input-field" placeholder="Mail-Id" required/>
            <input type="text" className="input-field" placeholder="Password" required/> */}
                <div className="signinputwithIcon">
                  <input
                    type="text"
                    placeholder="Mail-Id"
                    email={this.state.email}
                    onChange={this.handleChangeEmail}
                    required
                  />
                  <i
                    type="icon"
                    className="fa fa-user-circle-o fa-lg fa-fw"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="signinputwithIcon">
                  <input
                    type="password"
                    placeholder="Password"
                    password={this.state.password}
                    onChange={this.handleChangePassword}
                    required
                  />
                  <i
                    type="icon"
                    className="fa fa-lock fa-lg fa-fw"
                    aria-hidden="true"
                  ></i>
                </div>
                <input type="checkbox" className="signcheck-box1"></input>
                <p onClick= {this.togglePop.bind(this)} className="signforgot-password">Forgot Password?</p>
                {this.error()}
                <button type="submit" className="signsubmit-btn">
                  Login
                </button>
              </form>
              <form
                id="signregister"
                className="signinput-group"
                onSubmit={this.handleSignUp.bind(this)}
              >
                {/* <input type="text" className="input-field" placeholder="Mail-Id" required/>
            <input type="text" className="input-field" placeholder="Password" required/> 
            <input type="text" className="input-field" placeholder="Re-Password" required/>*/}

                <div className="signinputwithIcon">
                  <input
                    type="text"
                    placeholder="Mail-Id"
                    onChange={this.handleChangeNewEmail}
                    required
                  />
                  <i
                    className="fa fa-user-circle-o fa-lg fa-fw"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="signinputwithIcon">
                  <input
                    type="text"
                    placeholder="Password"
                    onChange={this.handleChangeNewPassword}
                    required
                  />
                  <i
                    type="icon"
                    className="fa fa-lock fa-lg fa-fw"
                    aria-hidden="true"
                  ></i>
                </div>
                <div className="signinputwithIcon">
                  <input
                    type="text"
                    placeholder="Re-Password"
                    onChange={this.handleChangeNewRepassword}
                    required
                  />
                  <i
                    type="icon"
                    className="fa fa-key fa-lg fa-fw"
                    aria-hidden="true"
                  ></i>
                </div>
                {this.error()}
                {this.success()}
                <button type="submit" className="signsubmit-btn">
                  Register
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Signin_Card;
