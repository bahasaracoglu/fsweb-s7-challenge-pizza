import React from "react";

import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./components/Home";
import Order from "./components/Order";
import "./App.css";
const App = () => {
  return (
    <Router>
      <div className="App">
        <h1> Teknolojik Yemekler</h1>
        <nav>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/pizza">Order</Link>
            </li>
          </ul>
        </nav>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/pizza" component={Order} />
        </Switch>
      </div>
    </Router>
  );
};
export default App;
