import React from "react";
import ReactDOM from "react-dom";

import ImageLoaderApp from "./components/ImageLoader/App";

import "./assets/css/index.css";

// require the file to be added to the public folder by webpack
require("./assets/favicon.ico");

////////////////////////////// Chat //////////////////////////////



////////////////////////////// ImageLoader //////////////////////////////
ReactDOM.render(<ImageLoaderApp />, document.getElementById("ImageLoaderRoot"));