// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import pick from "lodash/pick";
import * as moment from "moment";

type Props = {
  retreatID: string,
  retreat: any,
  fees: any,
  location: any,
  teachers: array
};

class RetreatCard extends Component<Props> {
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

    // diff does not count day zero. so add one day.
    const dayDuration = moment.duration(endDate.diff(beginDate)).asDays() + 1;
    const nightDuration = moment.duration(endDate.diff(beginDate)).asDays();
    console.log("dayDuration", dayDuration);

    return `(${beginDayWeek}-${endDayWeek})`;
  };
  daysDuration = (beginDate, endDate) => {
    // diff does not count day zero. so add one day.
    return Math.trunc(moment.duration(endDate.diff(beginDate)).asDays() + 1);
  };

  render() {
    const { retreat, teachers, location, fees } = this.props;
    const beginDate = moment(retreat.timestampBegin * 1000);
    const endDate = moment(retreat.timestampEnd * 1000);
    const daysDuration = this.daysDuration(beginDate, endDate);
    const nightDuration = daysDuration - 1;

    return (
      <div className="">
        <div className="section">
          <div className="row">
            <div className="col s12 m12 l6 grey lighten-2">
              <div className="card">
                <div className="card-content black-text">
                  <span className="card-title">{retreat.title}</span>
                  <div className="daterange-hostby">
                    <p>
                      Hosted by{" "}
                      <span className="tcmc-font">{retreat.hostedBy}</span>
                    </p>
                    <p className="bold">
                      {this.renderDateRange(beginDate, endDate)}
                    </p>
                  </div>
                  <div className="weekdays">
                    {daysDuration} Days <i class="fas fa-sun" />
                    {nightDuration} Nights <i class="far fa-moon" />
                    {this.renderDaysOfWeekRange(beginDate, endDate)}
                  </div>
                </div>
                <div className="card-action center">
                  <a href="#">Register</a>
                </div>
              </div>
              <div className="card">
                <div className="card-content black-text">
                  <span className="card-title">Description</span>
                  <p>{retreat.classDescription}</p>
                </div>
              </div>
              <div className="card">
                <div className="card-content black-text">
                  <span className="card-title">Teacher</span>
                  <p>{teachers.description}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state, props) {
  const retreatID = props.retreatId;
  const { retreats, teachers, locations, fees } = state;

  // retreat
  const _retreat = retreats[retreatID];

  // teachers
  // slice-out (ie pick) any teacher objects denoted by _retreatTeachersIds
  const _teachersIds = _retreat._teachers; // array
  const _teachers = pick(teachers, _teachersIds);

  // location
  const _locationId = retreats[retreatID]._location;
  const _location = locations[_locationId];

  // fees
  const _feesId = retreats[retreatID]._fees;
  const _fees = fees[_feesId];

  return {
    retreat: _retreat,
    teachers: _teachers,
    location: _location,
    fees: _fees
  };
}

// first argument: mapStateToProps is null
// second argument: mapDispatchToProps is used for dispatching actions to the store.
export default connect(
  mapStateToProps,
  null
)(RetreatCard);
