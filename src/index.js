import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

// components
import "./styles/index.css";
import store from "./redux/store";

// pages
import App from "./App";

ReactDOM.render(
  <Provider store={store}>
    {/* // <Provider> */}
    <App />
  </Provider>,
  document.getElementById("root")
);
