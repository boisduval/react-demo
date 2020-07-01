import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from "./views/Home";
import DataView from "./views/DataView";
import StatusView from "./views/StatusView";
import SecurityView from "./views/SecurityView";

import "./http/http";

import Nav from "./components/nav";

class Index extends React.Component {
  getDevice() {
    this.get(
      "http://sf28090049.wicp.vip:8082/conn/api/Statement/GetDeviceNames"
    ).then((res) => {
      console.log(res);
    });
  }

  componentDidMount() {
    this.getDevice();
  }

  render() {
    return (
      <div className="home">
        <Nav />
      </div>
    );
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
  </Router>,
  document.getElementById("root")
);
