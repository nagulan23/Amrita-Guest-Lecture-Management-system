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
    this.changeHomePage = this.changeHomePage.bind(this);
    this.changeSigninPage=this.changeSigninPage.bind(this);
  }

  changeHomePage() {
    console.log("change home called");
    this.setState({ redirect: "/home" });
  }

  changeSigninPage() {
    console.log("change signin called");
    this.setState({ redirect: "/" });
  }

  state = {
    redirect: "",
  };
  render() {
    return (
      <React.Fragment>
        <Redirect to={this.state.redirect} />
        <Switch>
          <Route exact path="/">
            <Signin changeHomePage={this.changeHomePage} />
          </Route>
          <Route exact path="/home">
            <Home changeSigninPage={this.changeSigninPage} />
          </Route>
        </Switch>
      </React.Fragment>
    );
  }
}

export default App;
