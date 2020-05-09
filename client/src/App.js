import React from "react";
import data from "./data.json";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/Search";
import Saved from "./pages/Saved";
import DataAreaContext from "./utils/DataAreaContext";

function App() {
  return (
    <Router>
      <div>
        <DataAreaContext.Provider
        value={{ data }}
        >
          <Switch>
            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            <Route exact path="/saved" component={Saved} />
          </Switch>
        </DataAreaContext.Provider>
      </div>
    </Router>
  );
}

export default App;
