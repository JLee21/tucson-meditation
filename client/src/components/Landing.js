import React, { Component } from "react";
import { Link as _Link } from "react-router-dom";
import { Box, Card, Image, Heading, Text, Flex } from "rebass";
import { Block, Row, Inline, Col } from "jsxstyle";
import { SMALL_SCREEN, LIGHT_GRAY, BRIGHT_GRAY } from "../Theme";
import styled from "styled-components";
import Environment from "./Environment";
import tucsonImage from "../public/tucson-liliana.jpg"; // Tell Webpack this JS file uses this image

const Link = styled(_Link)`
  color: black;
`;

const LinksWrap2 = styled.div`
  display: flex;
  flex-direction: column;
  align-items: space-between;
  height: 30vh;
  width: 275px;
  text-align: left;
  padding-top: 30px;
  padding-left: 80px;
  background: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 0.8) 5%,
    rgba(255, 255, 255, 0.1) 100%
  );
`;

const NavLink = ({ to, children }) => (
  <Link to={to}>
    <Text fontFamily={"sans"} fontWeight="300" fontSize={[4]}>
      {children}
    </Text>
  </Link>
);

class Landing extends Component {
  render() {
    return (
      <>
        <Flex>
          <Block width="275px" height="100vh">
            <Block
              position="relative"
              left="0"
              top="0"
              bottom="0"
              textAlign="center"
              padding="15px"
              boxShadow="0 8px 6px -10px black"
            >
              <Heading fontFamily={"sans"}>
                <Link to="/">Tucson Community Meditation Center</Link>
              </Heading>
            </Block>
            <LinksWrap2>
              <NavLink to="/retreats">Retreats</NavLink>
              <NavLink to="/retreats">Classes</NavLink>
              <NavLink to="/retreats">Teachers</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/retreats">Donate</NavLink>
            </LinksWrap2>
          </Block>
        </Flex>
      </>
    );
  }
}

export default Landing;
