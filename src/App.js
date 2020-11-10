import React from "react";

import "./App.css";
import Security from "./components/Security";
import Support from "./components/Support";
import MyProfile from "./components/MyProfile";
import TopBar from "./components/TopBar";
import Account from "./components/Account";
import Invoicing from "./components/Invoicing";
import AccMgt from "./components/AccMgt";
import Welcome from "./components/Welcome";
import HomePage from "./components/HomePage"
import { HashRouter, Switch, Route } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <Switch>
        <Route path="/account" component={Account}></Route>
        <Route exact path="/invoicing" component={Invoicing}></Route>
        <Route exact path="/accmgt" component={AccMgt}></Route>
        <Route exact path="/profile" component={MyProfile}></Route>
        <Route exact path="/security" component={Security}></Route>
        <Route exact path="/support" component={Support}></Route>
        <Route exact path="/topbar" component={TopBar}></Route>
        <Route exact path="/" component={HomePage}></Route>
        <Route exact path='/welcome' component={Welcome}></Route>
      </Switch>
    </HashRouter>
  );
}

export default App;
