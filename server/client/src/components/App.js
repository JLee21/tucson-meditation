import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import { handleInitialData } from "../actions";

import Landing from "./Landing";
import Nav from "./Nav";
import RetreatCont from "./retreats/RetreatCont";

class App extends Component {
  componentDidMount() {
    // remember that this component is connected to the redux store.
    // we are provided an action that is already wrapped with dispatch.
    // https://react-redux.js.org/using-react-redux/connect-mapdispatch#providing-a-mapdispatchtoprops-parameter
    this.props.dispatch(handleInitialData());
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <>
            <Nav />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Route path="/retreats" component={RetreatCont} />
            </Switch>
          </>
        </BrowserRouter>
      </div>
    );
  }
}

// first argument: mapStateToProps is null
// second argument: mapDispatchToProps is used for dispatching actions to the store.
export default connect()(App);
