import React from "react";
import { authMethods } from "../firebase/authmethods";
import { useState } from "react";

function AuthProvider(props) {
  const [inputs, setInputs] = useState({ email: props.email, password: props.password });
  const [errors, setErrors] = useState([]);
  const [token, setToken] = useState(null);
  const handleSignup = () => {
    // middle man between firebase and signup
    console.log("handleSignup");
    console.log(inputs.email, inputs.password);
    // calling signup from firebase server
    return authMethods.signup(inputs.email, inputs.password);
  };
  const handleSignin = input => {
    //changed to handleSingin
    console.log("handleSignin!!!!");
    // made signup signin
    return authMethods.signin(
      inputs.email,
      inputs.password,
      setErrors,
      setToken
    );
    //authMethods.signin(inputs.email, inputs.password, setErrors, setToken)
  };

  return (
    <firebaseAuth.Provider
      value={{
        //replaced test with handleSignup
        handleSignup,
        handleSignin,
        inputs,
        setErrors,
        errors,
        setInputs,
      }}
    >
      {props.children}
    </firebaseAuth.Provider>
  );
}

export default AuthProvider;

export const firebaseAuth = React.createContext();
