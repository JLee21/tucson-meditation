import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Block, Flex, Row, Inline, InlineBlock } from "jsxstyle";
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
    <Flex>
      <Nav retreatIds={retreatIds} />
      <Content retreatId={match.params.retreatId} match={match} />
    </Flex>
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

const PreviewCards = ({ retreatIds }) => {
  const retreatLength = retreatIds.length;
  return (
    <Block lineHeight="1.8" padding="0 10px">
      {retreatLength > 0 && (
        <Block>
          <Block>
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

const Nav = ({ retreatIds }) => (
  <Block
    fontSize="13px"
    position="relative"
    height="100vh"
    left="0"
    top="0"
    bottom="0"
    width="400px"
    padding="40px 20px 20px"
  >
    <PreviewCards retreatIds={retreatIds} />
  </Block>
);
// <EnvironmentHeader />;

const Content = ({ retreatId, match }) => {
  console.log("Content match", match);

  return (
    <Block paddingTop="40px">
      <Switch>
        <Route
          path={"/retreats/:retreatId"}
          render={props => (
            <RetreatCard key={retreatId} retreatId={retreatId} />
          )}
        />
      </Switch>
    </Block>
  );
};
// <Route
//   exact
//   path={match.url}
//   render={() => <Redirect to={"/retreats"} />}
// />
// <Redirect to={match.url} />

function mapStateToProps({ retreats, match }) {
  const retreatIds = Object.keys(retreats);
  return { retreatIds };
}

export default connect(mapStateToProps)(EnvironmentLarge);
