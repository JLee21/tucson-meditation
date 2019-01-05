import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions";

import Landing from "./Landing";
import Nav from "./Nav";
import RetreatCont from "./retreats/RetreatCont";
import Environment from "./Environment";

function App(props) {
  useEffect(() => props.dispatch(handleInitialData()));

  return (
    <div>
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/retreats" component={RetreatCont} />
          <Route path="/about" component={Environment} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

// first argument: mapStateToProps is null
// second argument: mapDispatchToProps is used for dispatching actions to the store.
export default connect()(App);
