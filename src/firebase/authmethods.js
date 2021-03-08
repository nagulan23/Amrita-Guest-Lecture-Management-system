import firebaseconfig from "./firebaseIndex";
import firebase from "firebase";

export const authMethods = {
  // firebase helper methods go here...
  signup: (email, password, setErrors) => {
    firebase
      .auth()
      .createUserWithEmailAndPassword(email, password)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        //setErrors(prev => ([...prev, value]))
      });
  },
  signin: (email, password) => {
    var flag;
    var result=  firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then((res) => {
        console.log("Signed in :)");
        return(true);
      })
      .catch((err) => {
        console.log(err);
        return(false);
      });
    console.log(result);
    return (flag)

  },
  signout: (email, password) => {
  },
};
export default authMethods;
