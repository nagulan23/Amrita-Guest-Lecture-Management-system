import "./signin-card.css";
import React, { Component, useContext } from "react";
import firebaseAuth from "../../provider/AuthProvider";
import { authMethods } from "../../firebase/authmethods";
import firebase from "firebase";

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
  }

  state = { email: "", password: "", signedIn: false, errorText: "" };

  async handleSubmit(e) {
    e.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    console.log("handleSignup1");
    await firebase
      .auth()
      .signInWithEmailAndPassword(this.state.email, this.state.password)
      .then((res) => {
        console.log("success");
        this.setState({ signedIn: true });
      })
      .catch((err) => {
        console.log(err);
        console.log("failed");
        this.setState({ errorText: "Incorrect Mail-ID or Password" });
      });
    console.log(firebase.auth().currentUser);
    console.log(this.state.signedIn);
    /*console.log(authMethods.signin(
      this.state.email,
      this.state.password
    ));*/
    if (this.state.signedIn) {
      //if (() => firebaseAuth.handleSignin(this.state.email,this.state.password)) {
      this.props.changeHomePage();
      console.log("HandleSgnin function");
    }
  }

  handleChangeEmail(event) {
    this.setState({ errorText:""});
    this.setState({ email: event.target.value });
  }

  handleChangePassword(event) {
    this.setState({ errorText:""});
    this.setState({ password: event.target.value });
  }

  login() {
    document.getElementById("signlogin").style.left = "50px";
    document.getElementById("signregister").style.left = "450px";
    document.getElementById("signbtn").style.left = "0px";
    document.getElementById("signtoggle-btn1").style.color = "#ffe957";
    document.getElementById("signtoggle-btn2").style.color = "#282c34";
  }

  register() {
    document.getElementById("signlogin").style.left = "-400px";
    document.getElementById("signregister").style.left = "50px";
    document.getElementById("signbtn").style.left = "110px";
    document.getElementById("signtoggle-btn2").style.color = "#ffe957";
    document.getElementById("signtoggle-btn1").style.color = "#282c34";
  }

  error(){
    if(this.state.errorText!="")
    return<div className="error-text">{this.state.errorText}</div>
  }
  render() {
    return (
      <div>
        <link
          rel="stylesheet"
          type="text/css"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css"
        />
        <div className="App">
          <div class="signhero">
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
                    class="fa fa-user-circle-o fa-lg fa-fw"
                    aria-hidden="true"
                  ></i>
                </div>
                <div class="signinputwithIcon">
                  <input
                    type="text"
                    placeholder="Password"
                    password={this.state.password}
                    onChange={this.handleChangePassword}
                    required
                  />
                  <i
                    type="icon"
                    className="signinputwithiconii"
                    class="fa fa-lock fa-lg fa-fw"
                    aria-hidden="true"
                  ></i>
                </div>
                <input type="checkbox" className="signcheck-box1"></input>
                <p className="signforgot-password">Forgot Password?</p>
                {this.error()}
                <button type="submit" className="signsubmit-btn">
                  Login
                </button>
              </form>
              <form id="signregister" className="signinput-group">
                {/* <input type="text" className="input-field" placeholder="Mail-Id" required/>
            <input type="text" className="input-field" placeholder="Password" required/> 
            <input type="text" className="input-field" placeholder="Re-Password" required/>*/}

                <div class="signinputwithIcon">
                  <input type="text" placeholder="Mail-Id" />
                  <i
                    class="fa fa-user-circle-o fa-lg fa-fw"
                    aria-hidden="true"
                  ></i>
                </div>
                <div class="signinputwithIcon">
                  <input type="text" placeholder="Password" />
                  <i
                    type="icon"
                    class="fa fa-lock fa-lg fa-fw"
                    aria-hidden="true"
                  ></i>
                </div>
                <div class="signinputwithIcon">
                  <input type="text" placeholder="Re-Password" />
                  <i
                    type="icon"
                    class="fa fa-key fa-lg fa-fw"
                    aria-hidden="true"
                  ></i>
                </div>
                <input type="checkbox" className="signcheck-box"></input>
                <span>I agree to terms and conditions*</span>
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
