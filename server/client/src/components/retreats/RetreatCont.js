import React, { Component } from "react";
import { connect } from "react-redux";
import RetreatCard from "./RetreatCard";

class RetreatCont extends Component {
  render() {
    const { retreatIds } = this.props;
    const retreatLength = retreatIds.length;

    return (
      <div className="row">
        <div className="col s12 m12 l6 grey lighten-2">
          RetreatCont
          {retreatLength > 0 ? (
            retreatIds.map(retreatId => (
              <RetreatCard key={retreatId} retreatId={retreatId} />
            ))
          ) : (
            <h3>No Retreats Availble</h3>
          )}
        </div>
      </div>
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
