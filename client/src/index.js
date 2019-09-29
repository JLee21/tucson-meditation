import "./css/sass/materialize.scss";
import "./css/style.scss";
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore } from "redux";
import middleware from "./middleware";
import { ThemeProvider } from "styled-components";
import theme from "./css/theme";

import App from "./components/App";
import reducers from "./reducers";

const store = createStore(reducers, middleware);

ReactDOM.render(
  <Provider store={store}>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </Provider>,
  document.querySelector("#root")
);
