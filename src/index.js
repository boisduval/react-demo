import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from "./views/Home";
import DataView from "./views/DataView"
import StatusView from "./views/StatusView"
import SecurityView from "./views/SecurityView"

import Nav from "./components/nav";

class Index extends React.Component {
  render() {
    return (
      <div className="home">
        <Nav />
      </div>
    )
  }
}

ReactDOM.render(
  <Router>
    <Index />
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/data" component={DataView} />
      <Route path="/status" component={StatusView} />
      <Route path="/security" component={SecurityView} />
    </Switch>
  </Router>
  , document.getElementById('root'))