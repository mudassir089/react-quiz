import React, { useState, useEffect } from "react";
// import QuizMain from "./quizWithAuth/QuizMain";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";
import NavBar from "./components/layout/NavBar";
import Quiz from "./components/tasks/Quiz";
import Error from "./components/dashboard/Error";

function App() {
  return (
    <div>
      <BrowserRouter>
        <NavBar />
        <Switch>
          <Route path="/signin" component={SignIn} />
          <Route path="/signup" component={SignUp} />
          <Route exact path="/" component={Dashboard} />
          <Route path="/quiz/:name" component={Quiz} />
          <Route exact path="*" component={Error} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
