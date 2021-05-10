import "./App.css";
import Header from "./components/home page/header";
import Signin from "./components/Signin page/signin";
import { Route, Redirect, Switch } from "react-router-dom";
import React, { Component } from "react";

class App extends Component {
  constructor() {
    super();
    const loggedInUser = localStorage.getItem("userID");
    console.log("App.js executing");
    console.log(loggedInUser);
    if (loggedInUser) {
      const userID = loggedInUser;
      console.log(userID);
      this.state.userID = userID;
      this.state.redirect = "/home";
    }
    else
      this.state.redirect = "/signin";
    console.log(this.state);
  }
  
  state = {
    redirect: "/home",
    userID: "",
  };
  render() {
    return (
      <React.Fragment>
        <Redirect to={this.state.redirect} />
        <Switch>
          <Route exact path="/signin">
            <Signin />
          </Route>
          <Route exact path="/home">
            <Header />
          </Route>
          <Route exact path="/lecture">
            <Header />
          </Route>
          <Route exact path="/lecture-create">
            <Header />
          </Route>
          <Route exact path="/lecturer-create">
            <Header />
          </Route>
          <Route exact path="/lecturer">
            <Header />
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}
//<Home changeSigninPage={this.changeSigninPage} />
export default App;
