import React from "react";
import ReactDOM from "react-dom";
import { reatomContext } from "@reatom/npm-react";
import "./index.css";
import App from "./App";
import { ctx } from "./store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <reatomContext.Provider value={ctx}>
    <App />
  </reatomContext.Provider>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
