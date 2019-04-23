import React from "react";
import ReactDOM from "react-dom";
import ImageLoaderApp from "./components/ImageLoader/App";
import ChatApp from "./components/Chat/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./components/Chat/reducers";
import handleNewMessage from "./components/Chat/sagas";
import setupSocket from "./components/Chat/sockets";
import username from "./components/Chat/utils/name";

import "./assets/css/index.css";

// require the file to be added to the public folder by webpack
require("./assets/favicon.ico");

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    reducers,
    applyMiddleware(sagaMiddleware)
);

const socket = setupSocket(store.dispatch, username);

sagaMiddleware.run(handleNewMessage, { socket, username });

/* Render Chat component into DOM */
ReactDOM.render(
    <Provider store={store}>
        <ChatApp />
    </Provider>,
    document.getElementById("ChatRoot")
);

/* Render ImageLoader component into DOM */
ReactDOM.render(<ImageLoaderApp />, document.getElementById("ImageLoaderRoot"));