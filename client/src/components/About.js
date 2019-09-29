import React, { Component } from "react";
import { Block, Col } from "jsxstyle";
import { Link, Switch, Route } from "react-router-dom";
import Animated from "animated/lib/targets/react-dom";
import Img from "react-image";
import { Heading } from "rebass";

class About extends Component {
  state = {
    // 0 = parent is active
    // 1 = child is active
    anim: new Animated.Value(this.props.match.isExact ? 0 : 1),
    animating: false
  };

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
    const { history, location, match } = this.props;
    const { anim, animating } = this.state;
    console.group("AboutComponent");
    console.info(anim);
    console.info("match: ", match);
    console.info("location: ", location);
    console.info("history: ", history);
    console.groupEnd();

    return (
      <Block position="absolute" left="0" right="0" bottom="0" top="0">
        <Block position="relative" zIndex="1">
          <AnimatedParentHeader anim={anim}>
            <Block background={"rgba(0,0,0,0.1)"}>
              <Heading>MeowHeader</Heading>
            </Block>
          </AnimatedParentHeader>
        </Block>
        <AnimatedChildHeader
          anim={anim}
          atParent={match.isExact}
          animating={animating}
        >
          <Switch location={location}>
            <Route
              path={"/about/:meowvar"}
              render={({ match }) => {
                return (
                  <>
                    <Block background={"rgba(0,0,0,0.1)"}>
                      <Heading>MeowTitle</Heading>
                      <i>match.params.meowvar</i> --->
                      {match.params.meowvar}
                    </Block>
                  </>
                );
              }}
            />
          </Switch>
        </AnimatedChildHeader>

        <AnimatedNav anim={anim}>
          <Block display="grid">
            <Link to={"/about/meow"}>MeowLink</Link>
            <Link to={"/about/meow"}>MeowLink</Link>
            <Link to={"/about/meow"}>MeowLink</Link>
            <Link to={"/about/meow"}>MeowLink</Link>
            <Link to={"/about/meow"}>MeowLink</Link>
            <Link to={"/about/meow"}>MeowLink</Link>
          </Block>
          <Link to={"/about"}>Back To /about</Link>
        </AnimatedNav>

        <AnimatedChild
          anim={anim}
          atParent={match.isExact}
          animating={animating}
        >
          <Block display="flex-wrap" background={"rgba(0,0,0,0.1)"}>
            <Link to={"/about"}>Back To /about </Link>
            MeowContent <i>match.params.meowvar</i> --->
            {match.params.meowvar}
            <Block background="white">
              <Img src={"https://picsum.photos/300/300?image=1074"} />
            </Block>
          </Block>
        </AnimatedChild>
      </Block>
    );
  }
}

class AnimatedParentHeader extends Component {
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

class AnimatedChildHeader extends Component {
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

class AnimatedNav extends Component {
  render() {
    const { anim, children } = this.props;
    return (
      <Animated.div
        style={{
          position: "relative",
          top: 30,
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

class AnimatedChild extends Component {
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
          top: 70,
          width: "100%",
          bottom: 0,
          background: "white",
          left: anim.interpolate({
            inputRange: [0, 1],
            outputRange: ["100%", "0%"]
          })
        }}
      >
        <Animated.div
          style={{
            position: "absolute",
            top: 20,
            width: "80px",
            bottom: 0,
            background:
              "linear-gradient(to left, rgba(0,0,0,0.20) 10%, rgba(255,255,255,0) 100%)",
            left: anim.interpolate({
              inputRange: [0, 1],
              outputRange: ["0px", "-80px"]
            })
          }}
        />
        {previousChildren || children}
      </Animated.div>
    );
  }
}

export default About;
