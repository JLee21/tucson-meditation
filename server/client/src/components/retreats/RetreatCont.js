import React, { Component } from "react";
import { connect } from "react-redux";
import RetreatCard from "./RetreatCard";
import RetreatPreview from "./RetreatPreview";
import { ScrollTo, ScrollArea } from "react-scroll-to";

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
      <div className="row">
        <div className="col s12 m12 l6 xl4">
          <ScrollTo>
            {({ scrollTo }) => (
              <React.Fragment>
                <button
                  type="button"
                  onClick={() => scrollTo({ x: 0, y: 1000, smooth: true })}
                >
                  Scroll area down
                </button>

                <ScrollArea
                  id="my-scroll-area"
                  style={{
                    height: "50vh",
                    overflow: "auto",
                    background: "#222",
                    padding: 20,
                    position: "relative"
                  }}
                >
                  <span style={{ color: "#FFF", fontSize: "2rem" }}>
                    ^ Click the button
                  </span>
                  <div style={{ height: "1000px" }} />
                  <span style={{ color: "#FFF", fontSize: "2rem" }}>
                    HELLO!
                    <button
                      type="button"
                      style={{ marginLeft: 5 }}
                      onClick={() =>
                        scrollTo({ id: "my-scroll-area", y: 0, smooth: true })
                      }
                    >
                      Scroll area up
                    </button>
                  </span>
                </ScrollArea>

                <div
                  style={{
                    height: "50vh",
                    padding: 20,
                    overflow: "auto",
                    background: "#888"
                  }}
                >
                  <span style={{ color: "#FFF", fontSize: "2rem" }}>
                    I don't move.
                  </span>
                  <div style={{ height: "200vh" }} />
                </div>
              </React.Fragment>
            )}
          </ScrollTo>

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
          {retreatId > 0 && (
            <RetreatCard key={retreatId} retreatId={retreatId} />
          )}
          {retreatId ? (
            <RetreatCard key={retreatId} retreatId={retreatId} />
          ) : (
            <p className="section center" />
          )}
        </div>
      </div>
    );
  }
}

// {retreatLength > 0 ? (
//   retreatIds.map(retreatId => (
//     <RetreatCard key={retreatId} retreatId={retreatId} />
//   ))
// ) : (
//   <h3>Please Select a Retreat</h3>
// )}

function mapStateToProps({ retreats }) {
  const retreatIds = Object.keys(retreats);
  return { retreatIds };
}

// first argument: mapStateToProps is null
// second argument: mapDispatchToProps is used for dispatching actions to the store.
export default connect(mapStateToProps)(RetreatCont);
