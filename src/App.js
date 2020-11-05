import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Discover from "./Pages/Discover";
import About from "./Pages/About";
import Search from "./Pages/Search";
import Navbar from "./Components/Navbar";

import Wrapper from "./Components/Wrapper";

function App() {
  return (
    <Router>
      <div>
        <Wrapper>
          <Navbar />
          <Switch>
            <Route exact path="/" component={About} />
            <Route exact path="/discover" component={Discover} />
            <Route exact path="/search" component={Search} />
          </Switch>
        </Wrapper>
      </div>
    </Router>
  );
}

export default App;
