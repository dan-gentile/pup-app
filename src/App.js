import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavBar from "./Components/NavBar";
import About from "./Components/About";
import Discover from "./Components/Discover";
import Search from "./Components/Search";

function App() {
  return (
    <Router>
      <main className="wrapper">
        <div>
          <NavBar />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/Search" component={Search} />
          </Switch>
        </div>
      </main>
    </Router>
  );
}

export default App;
