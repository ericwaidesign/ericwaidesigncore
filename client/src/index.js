import React from "react";
import ReactDOM from "react-dom";
// import ImageLoaderApp from "./components/ImageLoader/App";
import ChatApp from "./components/Chat/App";
import store from "./components/Chat/sockets";

import "./assets/css/index.css";

// require the file to be added to the public folder by webpack
require("./assets/favicon.ico");

////////////////////////////// Chat //////////////////////////////
/* Render Chat component into DOM */
console.log(store.getState());
ReactDOM.render(<ChatApp />, document.getElementById("ChatRoot"));

////////////////////////////// ImageLoader //////////////////////////////
/* Render ImageLoader component into DOM */
// ReactDOM.render(<ImageLoaderApp />, document.getElementById("ImageLoaderRoot"));