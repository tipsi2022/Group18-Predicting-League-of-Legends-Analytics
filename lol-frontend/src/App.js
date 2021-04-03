import React from "react";
import "./App.css";
import SignIn from "./SignIn";
import SignUp from "./SignUp";
import { Route } from "react-router-dom";
import Navbar from "./Navbar";
import DashBoard from "./DashBoard";

function App() {
  return (
    <div>
      <Navbar />
      <Route exact path="/" component={DashBoard} />
      <Route exact path="/sign-in" component={SignIn} />
      <Route exact path="/sign-up" component={SignUp} />
    </div>
  );
}

export default App;
