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

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/launches" exact>
          <LaunchListContainer />
        </Route>
        <Route path="/launches/:id" exact>
          <LaunchProfileContainer />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

function Home() {
  return <Layout>Home</Layout>;
}

export default App;
