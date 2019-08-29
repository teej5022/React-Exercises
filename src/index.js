import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import NavigationContainer from "./components/navigation-container";
import Counter from "./components/counter";
import Toggle from "./components/toggle";
import Grow from "./components/growshrink";
import Hide from "./components/showHide";
import Align from "./components/align";
import Clock from "./components/clock";
import ChangeColor from "./components/changeColor";

import "./styles.css";

class App extends React.Component {
  render() {
    return (
      <div className="content">
        <Router>
          <NavigationContainer />

          <Switch>
            <Route path="/clock" component={Clock} />
            <Route path="/counter" component={Counter} />
            <Route path="/toggle" component={Toggle} />
            <Route path="/showHide" component={Hide} />
            <Route path="/align" component={Align} />
            <Route path="/growshrink" component={Grow} />
            <Route path="/changeColor" component={ChangeColor} />
          </Switch>
        </Router>
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
