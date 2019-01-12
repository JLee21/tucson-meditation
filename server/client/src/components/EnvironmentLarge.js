import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Block, InlineBlock } from "jsxstyle";
import { Link, Route, Redirect, Switch } from "react-router-dom";
import { LIGHT_GRAY, RED } from "../Theme";
import EnvironmentHeader from "./EnvironmentHeader";
import RetreatCont from "./retreats/RetreatCont";
import RetreatPreview from "./retreats/RetreatPreview";
import RetreatCard from "./retreats/RetreatCard";
import { ParallaxProvider } from "react-scroll-parallax";

// "Content" is everything outside of the Nav comp. In this case, it'll be the
function EnvironmentLarge({ retreatIds, match }) {
  console.log("EnvironmentLarge match", match);
  console.log("EnvironmentLarge match.params", match.params);

  return (
    <Block>
      <Nav retreatIds={retreatIds} />
      <Content retreatId={match.params.retreatId} match={match} />
    </Block>
  );
}

const Title = props => (
  <Block
    textTransform="uppercase"
    fontWeight="bold"
    textAlign="center"
    color={LIGHT_GRAY}
    marginTop="20px"
    {...props}
  />
);

const Triangle = ({ color }) => (
  <InlineBlock
    position="absolute"
    right="-10px"
    width="0"
    height="0"
    borderTop="10px solid transparent"
    borderBottom="10px solid transparent"
    borderRight={`10px solid ${color}`}
  />
);

Triangle.propTypes = { color: PropTypes.string };

const NavLink = ({ to, retreatId, color, triangleColor }) => (
  <Route
    path={to}
    children={({ match }) => (
      <Block
        padding="0"
        component={RetreatPreview}
        hoverTextDecoration="underline"
        color={color}
        position="relative"
        props={{ to, retreatId }}
      >
        {match && <Triangle color={triangleColor} />}
      </Block>
    )}
  />
);

NavLink.propTypes = {
  // children: PropTypes.string,
  // to: PropTypes.string,
  // color: PropTypes.string,
  // triangleColor: PropTypes.string
};

const NavLinks = ({ retreatIds }) => {
  const retreatLength = retreatIds.length;
  return (
    <Block lineHeight="1.8" padding="10px">
      {retreatLength > 0 && (
        <Block>
          <Block padding="20px">
            {retreatLength > 0 ? (
              retreatIds.map(retreatId => (
                <NavLink
                  key={retreatId}
                  to={`/retreats/${retreatId}`}
                  triangleColor="rgb(45, 45, 45)"
                  retreatId={retreatId}
                />
              ))
            ) : (
              <h3>No Retreats Availble</h3>
            )}
          </Block>
        </Block>
      )}
    </Block>
  );
};

NavLinks.propTypes = {
  // data: PropTypes.object,
  // environment: PropTypes.string
};

const Nav = ({ retreatIds }) => (
  <Block
    fontSize="13px"
    background="#ccc"
    overflow="auto"
    position="fixed"
    height="100vh"
    left="0"
    top="0"
    bottom="0"
    width="600px"
    background="linear-gradient(to bottom, rgba(221,221,221,0.9) 0%,rgba(221,221,221,1) 33%,rgb(0,128,128, 0.1) 100%)"
  >
    <EnvironmentHeader />
    <NavLinks retreatIds={retreatIds} />
  </Block>
);

Nav.propTypes = {
  // retreatIds: PropTypes.array
};

const Content = ({ retreatId, match }) => {
  console.log("Content match", match);

  return (
    <Block marginLeft="600px">
      <Switch>
        <Route
          path={"/retreats/:retreatId"}
          render={props => (
            <RetreatCard key={retreatId} retreatId={retreatId} />
          )}
        />
        <Route
          exact
          path={match.url}
          render={() => <Redirect to={"/retreats"} />}
        />
        <Redirect to={match.url} />
      </Switch>
    </Block>
  );
};

Content.propTypes = {
  //   data: PropTypes.object,
  //   match: PropTypes.object
};

function mapStateToProps({ retreats, match }) {
  const retreatIds = Object.keys(retreats);
  return { retreatIds };
}

export default connect(mapStateToProps)(EnvironmentLarge);
