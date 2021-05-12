import React, { useState, useContext } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.css";

import Description_Title from "./Components/views/Description_Title/Description_Title";
import Nickname from "./Components/views/Nickname/Nickname";
import Environment from "./Components/views/Environment/Environment";
import Cloud from "./Components/views/Cloud/Cloud";
import Orchtools from "./Components/views/Orchtools/Orchtools";
import Products from "./Components/views/Products/Products";
import Signup from "./Components/views/Signup/Signup";
import TechBio from "./Components/views/TechBio/TechBio";
import Calendar from "./Components/views/Calendar/Calendar";
import Payments from "./Components/views/Payments/Payments";
import Evaluation from "./Components/views/Evaluation/Evaluation";
import Availability from "./Components/views/Availability/Availability";
import Profile from "./Components/views/Profile/Profile";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/" component={Signup} exact />
          <Route path="/Description_Title" component={Description_Title} />
          <Route path="/Nickname" component={Nickname} />
          <Route path="/Environment" component={Environment} />
          <Route path="/Cloud" component={Cloud} />
          <Route path="/Orchtools" component={Orchtools} />
          <Route path="/Products" component={Products} />
          <Route path="/TechBio" component={TechBio} />
          <Route path="/Calendar" component={Calendar} />
          <Route path="/Payments" component={Payments} />
          <Route path="/Evaluation" component={Evaluation} />{" "}
          <Route path="/Availability" component={Availability} />
          <Route path="/Profile" component={Profile} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
