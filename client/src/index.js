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

////////////////////////////// Chat //////////////////////////////
/*
    In a React app, data is fetched in an parent component and then
    passed down to child components through props. Things get complicated
    when there are many layers of components and data/state (and functions
    that modify this state) are passed through numerous components to get
    from origin to destination. This path can be difficult to remember and
    it leaves many places for errors to be introduced.

    With Redux, any components can connect directly to state.

    It is a good practice for parent/container components connect to state
    and pass state directly to children, not passing props down from parent
    to great-great-great....-grandchild.

    Components connected to state are usually called "container" or "smart"
    components, and they usually execute logic too. Components that do not
    have state of their own, and receive state from container components
    care called "dumb" components. Sometimes these dumb components are
    functional components.
*/

// redux middleware libary "redux-saga" that handles redux side effects
const sagaMiddleware = createSagaMiddleware();
// create Redux store that holds the state of the app
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

////////////////////////////// ImageLoader //////////////////////////////
/* Render ImageLoader component into DOM */
ReactDOM.render(<ImageLoaderApp />, document.getElementById("ImageLoaderRoot"));