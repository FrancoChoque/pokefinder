import React, { Component } from "react";
import Layout from "./containers/Layout/Layout";
import { Route, Switch } from "react-router-dom";
import Finder from "./containers/Finder/Finder";
import About from "./components/About/About";

class App extends Component {
  render() {
    return (
      <div className="App">
        <Layout>
          <Switch>
            <Route path="/about" component={About} />
            <Route path="/" exact component={Finder} />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
