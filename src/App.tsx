import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import LaunchListContainer from "./components/LaunchList";
import LaunchProfileContainer from "./components/LaunchProfile";
import Layout from "./components/Layout";
import About from "./components/About";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/launches/" exact>
          <LaunchListContainer />
        </Route>
        <Route path="/launches/:id/" exact>
          <LaunchProfileContainer />
        </Route>
        <Route path="/about/" exact>
          <About />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

function Home() {
  return (
    <Layout>
      <div style={{ color: "white" }}>
        <br />
        <h1 style={{ fontSize: "60px", fontWeight: "bolder" }}>
          Welcome to SpaceX
        </h1>
        <h4 style={{ fontWeight: "bold" }}>CEO - Elon Musk</h4>
        <br />
        <h5>
          “When something is important enough, you do it even if the odds are
          not in your favor.”
        </h5>
      </div>
    </Layout>
  );
}

export default App;
