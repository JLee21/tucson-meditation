// @flow
import React, { Component } from "react";
import Fees from "./Fees";
import ClassDesc from "./ClassDesc";
import TeacherCard from "./TeacherCard";
import { connect } from "react-redux";
import pick from "lodash/pick";
import * as moment from "moment";
// <div class="divider" />
// <i class="far fa-sun" />
// <i class="material-icons tiny">brightness_5</i>

type Props = {
  retreatID: string,
  retreat: any,
  fees: any,
  location: any,
  teachers: array
};

class RetreatCard extends Component<Props> {
  state = {
    showAvail: false
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
  daysDuration = (beginDate, endDate) => {
    // diff does not count day zero. so add one day.
    return Math.trunc(moment.duration(endDate.diff(beginDate)).asDays() + 1);
  };
  handleAvailibity = e => {
    e.preventDefault();
    this.setState(currState => ({ showAvail: !currState.showAvail }));
    console.log(this.state.showAvail);
  };

  render() {
    const { showAvail } = this.state;
    const { retreat, teachers, location, fees } = this.props;
    const beginDate = moment(retreat.timestampBegin * 1000);
    const endDate = moment(retreat.timestampEnd * 1000);
    const daysDuration = this.daysDuration(beginDate, endDate);
    const nightDuration = daysDuration - 1;

    return (
      <div className="card">
        <div className="card-content black-text">
          <span className="card-title">{retreat.title}</span>
          <div className="daterange-hostby">
            <p>
              Hosted by <span className="tcmc-font">{retreat.hostedBy}</span>
            </p>
            <p className="bold">{this.renderDateRange(beginDate, endDate)}</p>
          </div>
          <div className="weekdays">
            {daysDuration} Days
            <i class="fas fa-sun" />
            {nightDuration} Nights <i class="far fa-moon" />
            {this.renderDaysOfWeekRange(beginDate, endDate)}
          </div>
        </div>
        <div className="card-action center main-buttons">
          <button
            onClick={this.handleAvailibity}
            class="btn waves-effect waves-teal secondary-button"
            type="submit"
            name="action"
          >
            Availibility
          </button>
          <button
            class="btn waves-effect waves-light"
            type="submit"
            name="action"
          >
            Register
          </button>
        </div>

        {showAvail && fees && <Fees fees={fees} />}

        <ClassDesc desc={retreat.classDescription} />

        {teachers &&
          Object.keys(teachers).map(key => (
            <TeacherCard teacher={teachers[key]} />
          ))}

        {location && (
          <div className="card horizontal">
            <div
              style={{ paddingLeft: "12px" }}
              className="card-image location"
            >
              <h5
                style={{
                  fontWeight: "100"
                }}
              >
                Location
              </h5>
              <img alt="retreat location" src={location.pictureUrls[0]} />
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <span className="card-title">{`${location.name}`}</span>
                <p className="">
                  <i style={{ marginRight: "15px" }} class="far fa-map" />
                  Address
                </p>
                <p className="">
                  {location.address} {`${location.city}, ${location.state}`}
                </p>
                <div class="divider" />
                <p>
                  {location.drivingDescription && location.drivingDescription}
                </p>
              </div>
              <div className="card-action">
                <a href={location.url}>{location.url}</a>
              </div>
            </div>
          </div>
        )}
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
export default connect(mapStateToProps)(RetreatCard);
