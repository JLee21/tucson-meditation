import React, { Component } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { connect } from "react-redux";
import * as actions from "../actions";

import Landing from "./Landing";
import RetreatCont from "./retreats/RetreatCont";

class App extends Component {
  componentDidMount() {
    // remember that this component is connected to the redux store.
    // we are provided an action that is already wrapped with dispatch.
    // https://react-redux.js.org/using-react-redux/connect-mapdispatch#providing-a-mapdispatchtoprops-parameter
    this.props.handleInitialData();
  }

  render() {
    return (
      <div>
        <BrowserRouter>
          <div>
            <Route exact path="/" component={Landing} />
            <Route path="/retreats" component={RetreatCont} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

// first argument: mapStateToProps is null
// second argument: mapDispatchToProps is used for dispatching actions to the store.
export default connect(
  null,
  actions
)(App);
