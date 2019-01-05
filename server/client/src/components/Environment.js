import React from "react";
import EnvironmentLarge from "./EnvironmentLarge";
// import EnvironmentSmall from "./EnvironmentSmall";
import SmallScreen from "./SmallScreen";
import { Block, InlineBlock } from "jsxstyle";

const EnvironmentSmall = () => <p>Meow</p>;
// const EnvironmentLarge = () => <p>Bark</p>;

function Base() {
  return (
    <SmallScreen>
      {isSmallScreen =>
        isSmallScreen ? <EnvironmentSmall /> : <EnvironmentLarge />
      }
    </SmallScreen>
  );
}

export default Base;
