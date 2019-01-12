// @flow
import React, { Component } from "react";
import { connect } from "react-redux";
import pick from "lodash/pick";
import Img from "react-image";
import { Block } from "jsxstyle";
// import VisibilitySensor from "react-visibility-sensor";
import * as moment from "moment";
import { Link } from "react-router-dom";
import { ParallaxProvider, Parallax } from "react-scroll-parallax";

type Props = {
  retreatID: string,
  retreat: any,
  location: any,
  teachers: array
};

class RetreatPreview extends Component<Props> {
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
    const { to, retreatId, retreat, teachers, location } = this.props;
    const beginDate = moment(retreat.timestampBegin * 1000);
    const endDate = moment(retreat.timestampEnd * 1000);
    const daysDuration = this.daysDuration(beginDate, endDate);
    const nightDuration = daysDuration - 1;

    return (
      <Block marginTop="20">
        <div className="card">
          <div className="card-image preview">
            {retreat.backdropImageUrl && (
              <Img src={retreat.backdropImageUrl} decode={false} />
            )}
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
            </div>
            <p className="bold">{this.renderDateRange(beginDate, endDate)}</p>
            <div className="weekdays">
              {`${daysDuration} Days`}
              <span>
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
            <Link style={{ color: "white" }} to={to}>
              <button
                className="btn waves-effect waves-light"
                type="submit"
                value={retreatId}
              >
                Show More
              </button>
            </Link>
          </div>
        </div>
      </Block>
    );
  }
}

function mapStateToProps(state, props) {
  const { retreatId, to } = props;
  const { retreats, teachers, locations } = state;

  // retreat
  const _retreat = retreats[retreatId];

  // teachers
  // slice-out (ie pick) any teacher objects denoted by _retreatTeachersIds
  // _teachers will be a collections of objects: { id: {firstName}, id: {firstname} }
  const _teachersIds = _retreat._teachers; // array
  const _teachers = pick(teachers, _teachersIds);

  // location
  const _locationId = retreats[retreatId]._location;
  const _location = locations[_locationId];

  return {
    to,
    retreatId,
    retreat: _retreat,
    teachers: _teachers,
    location: _location
  };
}

// first argument: mapStateToProps is null
// second argument: mapDispatchToProps is used for dispatching actions to the store.
export default connect(mapStateToProps)(RetreatPreview);
