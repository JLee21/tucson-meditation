import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions";

import Landing from "./Landing";
import RetreatCont from "./retreats/RetreatCont";
import RetreatCard from "./retreats/RetreatCard";
import Environment from "./Environment";
import About from "./About";

function App(props) {
  console.log("App handleInitialData()...");
  useEffect(() => props.dispatch(handleInitialData()));

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Environment} />
          <Route path="/retreats/:retreatId" component={Environment} />
          <Route exact={true} path="/retreats/" component={Environment} />
          <Route path="/about/" component={About} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

// first argument: mapStateToProps is null
// second argument: mapDispatchToProps is used for dispatching actions to the store.
export default connect()(App);
