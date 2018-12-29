// Receive a single (required) price option. User can select this in order to sign up.

import React, { Component } from "react";
import * as moment from "moment";

class OptionCard extends Component {
  render() {
    const {
      title,
      description,
      fee,
      earlyBirdFee,
      capacity,
      available,
      waitlist
    } = this.props.fees;
    const { deadline, earlyBirdDeadline } = this.props;

    let status = available > 0 ? "Open" : "Wait List";
    let detailWord = available > 0 ? "Available" : "In Queue";
    let detailNum = available > 0 ? available : waitlist;
    let statusIcon = available > 0 ? "check_circle_outline" : "hourglass_empty";
    let classBadge =
      available > 0
        ? "new badge left"
        : "new badge left white teal-text secondary-badge-2";
    let dateEarlyDeadline = moment(earlyBirdDeadline * 1000).format(
      "MMMM Do YYYY"
    );
    let dateDeadline = moment(deadline * 1000).format("MMMM Do YYYY, h:mm a");
    const daysLeftEarlyBird = Math.trunc(
      moment.duration(moment(earlyBirdDeadline * 1000).diff(moment())).asDays()
    );
    const daysLeftWord = daysLeftEarlyBird > 0 ? "Days" : "Day";

    return (
      <div className="card card-panel">
        <div className="card-content">
          <div className="card-title">{title}</div>
          <div>
            <span className={classBadge} data-badge-caption={status} />
            <p>{`${detailNum} ${detailWord}`}</p>
            <div class="divider" />
            <div className="card-title">
              Early Bird Price <span className="price">${earlyBirdFee}</span>
              <span className="secondary-badge">
                {`${daysLeftEarlyBird} ${daysLeftWord} Left`}
              </span>
            </div>
            <p className="fine-details">
              Price increases to ${fee} after {dateEarlyDeadline}
            </p>
            <p className="fine-details">
              Registration Deadline: {dateDeadline} Pacific Time
            </p>
          </div>
        </div>
        <div className="card-action section center main-buttons">
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Select
          </button>
        </div>
      </div>
    );
  }
}

export default OptionCard;
