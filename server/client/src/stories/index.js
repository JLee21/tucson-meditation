import React from "react";
import { Provider } from "react-redux";
import "../css/sass/materialize.scss";
import "../css/style.scss";
import { createStore } from "redux";
import { storiesOf } from "@storybook/react";
import { action } from "@storybook/addon-actions";
import { linkTo } from "@storybook/addon-links";
import "@storybook/addon-viewport/register";
import "@storybook/addon-console";
import reducers from "../reducers";
import middleware from "../middleware";
import { retreats, teachers, locations, fees } from "../utils/_data.js";

const initialData = {
  retreats,
  teachers,
  locations,
  fees
};

import { Button, Welcome } from "@storybook/react/demo";
import RetreatCard from "../components/retreats/RetreatCard";
import RetreatCardSimple from "../components/retreats/RetreatCardSimple";

const store = createStore(reducers, initialData, middleware);

storiesOf("Welcome", module).add("to Storybook", () => (
  <Welcome showApp={linkTo("Button")} />
));

storiesOf("Retreat Details", module)
  .addDecorator(getStory => <Provider store={store}>{getStory()}</Provider>)
  .add("Retreat Simple", () => <RetreatCardSimple />);

const RETREATID = "abc";
storiesOf("Retreat Details", module)
  .addDecorator(getStory => <Provider store={store}>{getStory()}</Provider>)
  .add("Retreat Full", () => <RetreatCard retreatId={RETREATID} />);
