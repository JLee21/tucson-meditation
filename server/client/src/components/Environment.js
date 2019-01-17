import React, { Component } from "react";
import EnvironmentLarge from "./EnvironmentLarge";
import EnvironmentSmall from "./EnvironmentSmall";
import SmallScreen from "./SmallScreen";

class Environment extends Component {
  render() {
    const { history, location, match } = this.props;
    console.group("EnvironmentComponent");
    console.info("match: ", match);
    console.info("location: ", location);
    console.info("history: ", history);
    console.groupEnd();

    return (
      <SmallScreen>
        {isSmallScreen =>
          isSmallScreen ? (
            <EnvironmentSmall
              match={match}
              location={location}
              history={history}
            />
          ) : (
            <EnvironmentLarge match={match} />
          )
        }
      </SmallScreen>
    );
  }
}

export default Environment;
