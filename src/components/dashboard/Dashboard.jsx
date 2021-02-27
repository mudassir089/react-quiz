import React, { useState, useEffect } from "react";
import SelectQuiz from "../tasks/SelectQuiz";
import firebase from "../../firebase/fbConfig";
import SignIn from "../auth/SignIn";

function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(true);
  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      setIsLoggedIn(user);
    });
  }, []);
  return (
    <>
      <div>{isLoggedIn ? <SelectQuiz /> : <SignIn />}</div>
    </>
  );
}

export default Dashboard;
