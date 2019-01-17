import React from "react";
import PropTypes from "prop-types";
import { Block, Row, Inline, Col } from "jsxstyle";
import { Link, Route } from "react-router-dom";
import { LIGHT_GRAY, RED } from "../Theme";
import Logo from "./Logo";
import { IconContext } from "react-icons";
import { MdArrowBack } from "react-icons/md";
import { Flex, Box, Card, Image, Heading, Text } from "rebass";

const Tab = ({ to, ...rest }) => (
  <Route
    path={to}
    children={({ match }) => (
      <Block
        component={Link}
        props={{ to }}
        flex="1"
        textAlign="center"
        textTransform="uppercase"
        fontWeight="bold"
        fontSize="90%"
        padding="5px"
        background={match ? RED : "white"}
        color={match ? "white" : ""}
        {...rest}
      />
    )}
  />
);

Tab.propTypes = { to: PropTypes.string };

const Tabs = () => (
  <Row boxShadow="0px 1px 1px hsla(0, 0%, 0%, 0.15)" margin="10px">
    <Tab to="/web" borderTopLeftRadius="3px" borderBottomLeftRadius="3px">
      Web
    </Tab>
    <Tab to="/native" marginLeft="-1px">
      Native
    </Tab>
    <Tab
      to="/core"
      marginLeft="-1px"
      borderTopRightRadius="3px"
      borderBottomRightRadius="3px"
    >
      Core
    </Tab>
  </Row>
);

const Title = props => (
  <Block
    textTransform="uppercase"
    fontWeight="lighter"
    fontSize="30px"
    color={LIGHT_GRAY}
    marginTop={5}
    filter="drop-shadow(0px 3px 10px rgba(221,221,221,0.8))"
    fontFamily="Martel Sans, sans-serif"
    {...props}
  />
);

const Branding = () => (
  <Flex px={2} color="white" alignItems="center">
    <Link to="/">
      <IconContext.Provider value={{ color: "hsl(0, 0%, 32%)", size: "30px" }}>
        <div>
          <MdArrowBack />
        </div>
      </IconContext.Provider>
    </Link>
    <Box width={1 / 2} mx="auto">
      <Title>Retreats</Title>
    </Box>
  </Flex>
);

const EnvironmentHeader = () => (
  <Block>
    <Branding />
  </Block>
);

export default EnvironmentHeader;
