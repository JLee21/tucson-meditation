// @flow
import React, { Component } from "react";
import { connect } from "react-redux";

class RetreatCardSimple extends Component<Props> {
  render() {
    console.log(this.props);

    return <div />;
  }
}

function mapStateToProps({ retreats }) {
  return {
    retreats
  };
}

// first argument: mapStateToProps is null
// second argument: mapDispatchToProps is used for dispatching actions to the store.
export default connect(
  mapStateToProps,
  null
)(RetreatCardSimple);
