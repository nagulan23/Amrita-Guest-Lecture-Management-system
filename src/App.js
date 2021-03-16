import "./App.css";
import firebaseAuth from "./provider/AuthProvider";
import Home from "./components/home page/home";
import Signin from "./components/Signin page/signin";
import {
  BrowserRouter as Router,
  Route,
  useHistory,
  Redirect,
  Switch,
} from "react-router-dom";
import React, { Component, useContext } from "react";

/*function App() {
  const {handleSignup,handleSignin,inputs,setInputs,errors} = useContext(firebaseAuth)
  console.log(handleSignup)
  const handleSubmit = (e) => {
    e.preventDefault()
    return(handleSignin())
  }
  const handleChange = e => {
    const {name, value} = e.target
    setInputs(prev => ({...prev, [name]: value}))
  }
  
  return (
  <form onSubmit={handleSubmit}>
      signin
      <input onChange={handleChange} name="email" placeholder='email' value={inputs.email} />
      <input onChange={handleChange} name="password" placeholder='password' value={inputs.password} />
      <button>signin</button>
    </form>  
  );
}
export default App;*/
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
    console.log(this.state);
  }

  state = {
    redirect: "",
    userID: "",
  };
  render() {
    return (
      <React.Fragment>
        <Redirect to={this.state.redirect} />
        <Switch>
          <Route exact path="/">
            <Signin/>
          </Route>
          <Route exact path="/home">
            <Home/>
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}
//<Home changeSigninPage={this.changeSigninPage} />
export default App;
