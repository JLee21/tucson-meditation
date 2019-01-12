import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { Block, Col } from "jsxstyle";
import EnvironmentHeader from "./EnvironmentHeader";
import { Link, Switch, Route } from "react-router-dom";
import { MdChevronLeft } from "react-icons/md";
import { RED } from "../Theme";
import Animated from "animated/lib/targets/react-dom";
import RetreatPreview from "./retreats/RetreatPreview";

class EnvironmentSmall extends Component {
  state = {
    // 0 = parent is active
    // 1 = child is active
    anim: new Animated.Value(this.props.match.isExact ? 0 : 1),
    animating: false
  };

  componentDidMount() {}

  componentWillReceiveProps(nextProps) {
    const { anim } = this.state;

    // only animate if we're going from here to direct child.
    // child to child we'll ignore
    const goingToChild =
      nextProps.match.isExact === false && this.props.match.isExact === true;

    const comingFromChild =
      nextProps.match.isExact === true && this.props.match.isExact === false;

    if (goingToChild || comingFromChild) {
      this.setState(
        {
          animating: true
        },
        () => {
          Animated.timing(anim, {
            toValue: goingToChild ? 1 : 0,
            duration: 350
          }).start(() => {
            this.setState({
              animating: false
            });
          });
        }
      );
    }
  }

  render() {
    const { retreatIds, match, location } = this.props;
    const { anim, animating } = this.state;

    return (
      <Block
        position="absolute"
        left="0"
        right="0"
        bottom="0"
        top="0"
        overflow="hidden"
      >
        <Block position="relative" zIndex="1">
          <AnimatedHeaderBg anim={anim}>
            <AnimatedParentHeader anim={anim}>
              <EnvironmentHeader />
            </AnimatedParentHeader>
            <AnimatedChildHeader
              anim={anim}
              atParent={match.isExact}
              animating={animating}
            />
          </AnimatedHeaderBg>
        </Block>
        <NavLinks retreatIds={retreatIds} />
      </Block>
    );
  }
}

class AnimatedHeaderBg extends Component {
  static propTypes = {
    anim: PropTypes.object,
    children: PropTypes.node
  };

  render() {
    const { anim, children } = this.props;
    return (
      <Block
        position="absolute"
        top="0"
        left="0"
        right="0"
        fontSize="13px"
        background="linear-gradient(to bottom, rgba(221,221,221,1) 0%,rgba(221,221,221,1) 33%,rgba(221,221,221,0.9) 100%)"
        overflow="hidden"
        filter="drop-shadow(0px 1px 2px teal)"
      >
        <Animated.div
          style={{
            height: anim.interpolate({
              inputRange: [0, 1],
              outputRange: [65, 50]
            })
          }}
        >
          {children}
        </Animated.div>
      </Block>
    );
  }
}

class AnimatedParentHeader extends Component {
  static propTypes = {
    anim: PropTypes.object,
    children: PropTypes.node
  };

  render() {
    const { anim, children } = this.props;
    return (
      <Animated.div
        children={children}
        style={{
          position: "relative",
          top: anim.interpolate({
            inputRange: [0, 1],
            outputRange: [0, -50]
          }),
          opacity: anim.interpolate({
            inputRange: [0, 0.5],
            outputRange: [1, 0]
          })
        }}
      />
    );
  }
}

class AnimatedNav extends Component {
  static propTypes = {
    children: PropTypes.node,
    anim: PropTypes.object
  };

  render() {
    const { anim, children } = this.props;
    return (
      <Animated.div
        style={{
          position: "absolute",
          top: 0,
          width: "100%",
          bottom: 0,
          background: "white",
          left: anim.interpolate({
            inputRange: [0, 1],
            outputRange: ["0%", "-25%"]
          })
        }}
      >
        {children}
      </Animated.div>
    );
  }
}

class AnimatedChildHeader extends Component {
  static propTypes = {
    children: PropTypes.node,
    anim: PropTypes.object,
    atParent: PropTypes.bool,
    animating: PropTypes.bool
  };

  state = {
    previousChildren: null
  };

  componentWillReceiveProps(nextProps) {
    const navigatingToParent = nextProps.atParent && !this.props.atParent;
    const animationEnded = this.props.animating && !nextProps.animating;

    if (navigatingToParent) {
      this.setState({
        previousChildren: this.props.children
      });
    } else if (animationEnded) {
      this.setState({
        previousChildren: null
      });
    }
  }

  render() {
    const { anim, children } = this.props;
    const { previousChildren } = this.state;
    return (
      <Animated.div
        style={{
          position: "absolute",
          left: 0,
          right: 0,
          top: anim.interpolate({
            inputRange: [0, 1],
            outputRange: [20, 0]
          }),
          opacity: anim.interpolate({
            inputRange: [0, 0.75],
            outputRange: [0, 1]
          })
        }}
      >
        {previousChildren || children}
      </Animated.div>
    );
  }
}

class GoUp extends React.Component {
  static propTypes = {
    url: PropTypes.string
  };

  state = {
    justClicked: false
  };

  render() {
    const { url } = this.props;
    const { justClicked } = this.state;
    return (
      <Block
        component={Link}
        fontSize="45px"
        color={RED}
        opacity={justClicked ? "0.25" : "1"}
        lineHeight="0"
        className="no-tap-highlight"
        props={{
          to: url,
          onClick: () => this.setState({ justClicked: true })
        }}
        position="absolute"
        top="3px"
        left="-8px"
      >
        <MdChevronLeft />
      </Block>
    );
  }
}

const Header = ({ children, url, ...rest }) => (
  <Col
    justifyContent="center"
    fontSize="14px"
    width="100%"
    height="50px"
    textAlign="center"
    textTransform="uppercase"
    fontWeight="bold"
    position="relative"
    {...rest}
  >
    {children}
    <GoUp url={url} />
  </Col>
);

Header.propTypes = {
  children: PropTypes.node,
  url: PropTypes.string
};

const NavLink = ({ to, retreatId, color, triangleColor }) => (
  <Route
    path={to}
    children={({ match }) => (
      <Block
        component={RetreatPreview}
        hoverTextDecoration="underline"
        color={color}
        position="relative"
        props={{ to, retreatId }}
      />
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
    <Block
      position="absolute"
      className="mobile-scroll"
      top="0"
      bottom="0"
      left="0"
      width="100%"
      overflow="scroll"
      paddingTop="70px"
    >
      {retreatLength > 0 && (
        <Block>
          <Block padding="20px" marginBottom="100px">
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

function mapStateToProps({ retreats, match }) {
  const retreatIds = Object.keys(retreats);
  return { retreatIds };
}

export default connect(mapStateToProps)(EnvironmentSmall);
