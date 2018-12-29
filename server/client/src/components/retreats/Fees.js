import React, { Component } from "react";

class Fees extends Component {
  render() {
    const { fees } = this.props;

    return (
      <div class="card grey darken-2 shadow">
        <div style={{ paddingLeft: "12px" }} class="card-content white-text">
          <span class="card-title">Availability</span>
          <div className="availble-table">
            <table className="">
              <thead>
                <tr>
                  <th>Option</th>
                  <th>Status</th>
                  <th>Details</th>
                </tr>
              </thead>
              <tbody>
                {fees.options.map(option => {
                  const { available, waitlist } = option;
                  let status = available > 0 ? "Open" : "Wait List";
                  let detailWord = available > 0 ? "Available" : "Queue";
                  let detailNum = available > 0 ? available : waitlist;
                  let statusIcon =
                    available > 0 ? "check_circle_outline" : "hourglass_empty";
                  return (
                    <tr>
                      <td>{option.title}</td>
                      <td>
                        <i class="material-icons tiny left">{statusIcon}</i>
                        {status}
                      </td>
                      <td>{`${detailWord}: ${detailNum}`}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
          <p>
            I am a very simple card. I am good at containing small bits of
            information. I am convenient because I require little markup to use
            effectively.
          </p>
        </div>
        <div class="card-action" />
      </div>
    );
  }
}

export default Fees;
