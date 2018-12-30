// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import pick from "lodash/pick";
import * as moment from "moment";
// <div className="divider" />
// <i className="far fa-sun" />
// <i className="material-icons tiny">brightness_5</i>

type Props = {
  retreatID: string,
  retreat: any,
  location: any,
  teachers: array
};

class RetreatPreview extends Component<Props> {
  handleRetreatSelect = e => {
    // extract which retreat was selected
    // Push the retreat route id to router/history
    e.preventDefault();
  };
  daysDuration = (beginDate, endDate) => {
    // diff does not count day zero. so add one day.
    return Math.trunc(moment.duration(endDate.diff(beginDate)).asDays() + 1);
  };
  renderDateRange = (beginDate, endDate) => {
    const beginDay = moment(beginDate).format("Do");
    const beginMonth = moment(beginDate).format("MMMM");
    const endDay = moment(endDate).format("Do");
    const endMonth = moment(endDate).format("MMMM");
    const endYear = moment(endDate).format("YYYY");

    // check if daterange lies within the same month
    if (beginMonth === endMonth) {
      return `${beginMonth} ${beginDay}-${endDay}, ${endYear}`;
    } else {
      return `${beginMonth} ${beginDay}-${endMonth} ${endDay}, ${endYear}`;
    }
  };
  renderDaysOfWeekRange = (beginDate, endDate) => {
    const beginDayWeek = moment(beginDate).format("dddd");
    const endDayWeek = moment(endDate).format("dddd");
    return `(${beginDayWeek}-${endDayWeek})`;
  };

  render() {
    const { retreatID, retreat, teachers, location, onSelect } = this.props;
    const beginDate = moment(retreat.timestampBegin * 1000);
    const endDate = moment(retreat.timestampEnd * 1000);
    const daysDuration = this.daysDuration(beginDate, endDate);
    const nightDuration = daysDuration - 1;

    return (
      <div>
        <div className="card">
          <div className="card-image preview">
            {retreat.backdropImageUrl && <img src={retreat.backdropImageUrl} />}
            <span className="card-title">{retreat.title}</span>
          </div>
          <div className="card-content black-text">
            <div className="daterange-hostby">
              <p>
                with {Object.keys(teachers).map(key => teachers[key].fullName)}
              </p>
              <p className="fine-details">
                Hosted by <span className="tcmc-font">{retreat.hostedBy}</span>
              </p>
              <p className="bold">{this.renderDateRange(beginDate, endDate)}</p>
            </div>
            <div className="weekdays">
              <span>
                {`${daysDuration} Days`}
                <i className="fas fa-sun" />
              </span>

              {retreat.residential === true ? (
                <span>
                  {`${nightDuration} Nights`}
                  <i className="far fa-moon" />
                </span>
              ) : (
                "non-residential   "
              )}
              {this.renderDaysOfWeekRange(beginDate, endDate)}
            </div>
          </div>
          <div className="card-action main-buttons">
            <button
              onClick={onSelect}
              className="btn waves-effect waves-light"
              type="submit"
              value={retreatID}
            >
              Show More
            </button>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const retreatID = props.retreatId;
  const { retreats, teachers, locations } = state;

  // retreat
  const _retreat = retreats[retreatID];

  // teachers
  // slice-out (ie pick) any teacher objects denoted by _retreatTeachersIds
  // _teachers will be a collections of objects: { id: {firstName}, id: {firstname} }
  const _teachersIds = _retreat._teachers; // array
  const _teachers = pick(teachers, _teachersIds);

  // location
  const _locationId = retreats[retreatID]._location;
  const _location = locations[_locationId];

  return {
    retreatID,
    retreat: _retreat,
    teachers: _teachers,
    location: _location
  };
}

// first argument: mapStateToProps is null
// second argument: mapDispatchToProps is used for dispatching actions to the store.
export default connect(mapStateToProps)(RetreatPreview);
