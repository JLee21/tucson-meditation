import React, { Component } from "react";
import EnvironmentLarge from "./EnvironmentLarge";
import EnvironmentSmall from "./EnvironmentSmall";
import SmallScreen from "./SmallScreen";
import { ParallaxProvider } from "react-scroll-parallax";
import { Block, InlineBlock } from "jsxstyle";

// const EnvironmentSmall = () => <p>Meow</p>;
// const EnvironmentLarge = () => <p>Bark</p>;

class Environment extends Component {
  render() {
    const { history, location, match } = this.props;
    console.log("Environment match: ", match);
    console.log("Environment location: ", location);

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
