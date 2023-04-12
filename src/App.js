import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Order from "./components/Order";
import "./App.css";
import Success from "./components/Success";
const App = () => {
  return (
    <Router>
      <div className="App">
        <header>
          <h1> Teknolojik Yemekler</h1>
        </header>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pizza" component={Order} />
          <Route path="/success" component={Success} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
