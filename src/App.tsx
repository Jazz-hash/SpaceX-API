import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
} from "react-router-dom";
import LaunchListContainer from "./components/LaunchList";
import LaunchProfileContainer from "./components/LaunchProfile";

function App() {
  return (
    <Router>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/launches">Launches</Link>
          </li>
        </ul>
      </nav>
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
  return <h1>Home</h1>;
}

export default App;
