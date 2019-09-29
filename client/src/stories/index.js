import React from "react";
import { Provider } from "react-redux";
import "../css/sass/materialize.scss";
import "../css/style.scss";
import { createStore } from "redux";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import addWithDoc from "storybook-addon-props";
import "@storybook/addon-viewport/register";
import "@storybook/addon-console";
import reducers from "../reducers";
import middleware from "../middleware";
import { retreats, teachers, locations, fees } from "../utils/_data.js";

import { Button, Welcome } from "@storybook/react/demo";
import RetreatCard from "../components/retreats/RetreatCard";
import RetreatCardSimple from "../components/retreats/RetreatCardSimple";
import OptionCard from "../components/retreats/OptionCard";
import TeacherCard from "../components/retreats/TeacherCard";
import LocationCard from "../components/retreats/LocationCard";

const initData = {
  retreats,
  teachers,
  locations,
  fees
};

const store = createStore(reducers, initData, middleware);

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Retreat Details", module)
  .addDecorator(getStory => <Provider store={store}>{getStory()}</Provider>)
  .add("Retreat Simple", () => <RetreatCardSimple />);

const TEACHERID = "shinzenyoung";
const LOCATIONID = "codranch";
storiesOf("Retreat Details", module)
  .addDecorator(getStory => <Provider store={store}>{getStory()}</Provider>)
  .add("TeacherCard", () => <TeacherCard teacher={teachers[TEACHERID]} />)
  .add("LocationCard", () => <LocationCard location={locations[LOCATIONID]} />);

const FEESID = "abc";
storiesOf("Retreat Details", module)
  .addDecorator(getStory => <Provider store={store}>{getStory()}</Provider>)
  .add("OptionCard", () => (
    <OptionCard
      option={initData.fees[FEESID].options[0]}
      deadline={initData.fees[FEESID].deadline}
      earlyBirdDeadline={initData.fees[FEESID].earlyBirdDeadline}
    />
  ))
  .add("OptionCard Wait List", () => (
    <OptionCard
      option={initData.fees[FEESID].options[2]}
      deadline={initData.fees[FEESID].deadline}
      earlyBirdDeadline={initData.fees[FEESID].earlyBirdDeadline}
    />
  ));

const RETREATID = "abc";
storiesOf("Retreat Details", module)
  .addDecorator(getStory => <Provider store={store}>{getStory()}</Provider>)
  .add("Retreat Full", () => <RetreatCard retreatId={RETREATID} />);
