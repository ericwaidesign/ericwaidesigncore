import React from "react";
import ReactDOM from "react-dom";

// import ImageLoaderApp from "./components/ImageLoader/App";
import ChatApp from "./components/Chat/containers/App";
import { Provider } from "react-redux";
import store from "./components/Chat/store";

import "./assets/css/index.css";

// require the file to be added to the public folder by webpack
require("./assets/favicon.ico");

////////////////////////////// Chat //////////////////////////////

ReactDOM.render(
    <Provider store={store}>
        <ChatApp />
    </Provider>,
    document.getElementById("ChatRoot")
);

////////////////////////////// ImageLoader //////////////////////////////
// ReactDOM.render(<ImageLoaderApp />, document.getElementById("ImageLoaderRoot"));