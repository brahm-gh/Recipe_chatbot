import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(<App />, document.getElementById('root'));

// To enhance your app's offline functionality and improve loading speed,
// consider changing unregister() to register() below.
// However, be aware that this choice has some potential drawbacks.
// For a deeper understanding of service workers,
// explore further: https://bit.ly/CRA-PWA
serviceWorker.unregister();
