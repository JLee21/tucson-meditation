import React, { Component } from "react";
import EnvironmentLarge from "./EnvironmentLarge";
import EnvironmentSmall from "./EnvironmentSmall";
import SmallScreen from "./SmallScreen";
import Landing from "./Landing";
import { Block, Row, Inline, Col } from "jsxstyle";
import styled from "styled-components";
import bkgd from "../public/dust_scratches.png"; // Tell Webpack this JS file uses this image

const BackImage = styled.img`
  z-index: -1;
  position: fixed;
  left: 0;
  bottom: 0;
  min-width: 100%;
  min-height: 100%;
  background-image: url(${bkgd});
  object-fit: cover;
`;

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
            <>
              <BackImage />
              <Row>
                <Col position="fixed">
                  <Landing />
                </Col>
                <Col marginLeft="280px">
                  <EnvironmentLarge match={match} />
                </Col>
              </Row>
            </>
          )
        }
      </SmallScreen>
    );
  }
}

export default Environment;
