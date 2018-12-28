import React, { Component } from "react";
import { connect } from "react-redux";
import RetreatCard from "./RetreatCard";
import { handleInitialData } from "../../actions";

class RetreatCont extends Component {
  // componentDidMount() {
  //   this.props.dispatch(handleInitialData());
  // }

  render() {
    const { retreatIds } = this.props;
    const retreatLength = retreatIds.length;

    return (
      <div>
        RetreatCont
        {retreatLength > 0 ? (
          retreatIds.map(retreatId => (
            <RetreatCard key={retreatId} retreatId={retreatId} />
          ))
        ) : (
          <h3>No Retreats Availble</h3>
        )}
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
