import React from "react";
import { render } from "react-dom";
import App from "./app";
import { GlobalStyle } from "./global-styles";
import "normalize.css";
import { firebase } from "./lib/firebase";
import { FirebaseContext } from "./context/firebase";

render(
  <FirebaseContext.Provider value={{ firebase }}>
    <GlobalStyle />
    <App />
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
