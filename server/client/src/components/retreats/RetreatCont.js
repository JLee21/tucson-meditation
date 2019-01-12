import React, { Component } from "react";
import { connect } from "react-redux";
import { Block, InlineBlock } from "jsxstyle";
import RetreatCard from "./RetreatCard";
import RetreatPreview from "./RetreatPreview";
import { Link, Route, Redirect, Switch } from "react-router-dom";
import { ParallaxProvider } from "react-scroll-parallax";

class RetreatCont extends Component {
  state = {
    retreatId: ""
  };
  handleRetreatSelect = e => {
    const { value: retreatId } = e.target;
    this.setState({ retreatId });
    console.log(this.state);
  };
  render() {
    const { retreatIds } = this.props;
    const retreatLength = retreatIds.length;
    const { retreatId } = this.state;
    console.log("state", retreatId);

    return (
      <Block>
        <div className="col s12 m12 l6 xl4">
          {retreatLength > 0 ? (
            retreatIds.map(retreatId => (
              <RetreatPreview
                key={retreatId}
                onSelect={this.handleRetreatSelect}
                retreatId={retreatId}
              />
            ))
          ) : (
            <h3>No Retreats Availble</h3>
          )}
        </div>
        <div className="col s12 m12 l6 xl4">
          {retreatId ? (
            <RetreatCard key={retreatId} retreatId={retreatId} />
          ) : (
            <p className="section center" />
          )}
        </div>
        <div className="col s12 m12 l6 xl4">
          {retreatId && (
            <p className="section center">Sign up goes here maybe?</p>
          )}
        </div>
      </Block>
    );
  }
}

function mapStateToProps({ retreats }) {
  const retreatIds = Object.keys(retreats);
  return { retreatIds };
}

// first argument: mapStateToProps is null
// second argument: mapDispatchToProps is used for dispatching actions to the store.
export default connect(mapStateToProps)(RetreatCont);
