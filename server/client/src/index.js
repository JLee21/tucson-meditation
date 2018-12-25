import "./css/js/waves";
import "./css/sass/materialize.scss";
import "./css/style.css";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import middleware from "./middleware";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.querySelector("#root")
);
