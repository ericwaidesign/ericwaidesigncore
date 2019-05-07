import React from "react";
import ReactDOM from "react-dom";
import ImageLoaderApp from "./components/ImageLoader/App";
import ChatApp from "./components/Chat/App";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import reducers from "./components/Chat/reducers";
/*
    Saga is a design pattern that comes from the distributed transactions
    world, where a saga manages processes that needed to be executed in a
    transactional way, keep the state of the execution and compensating
    failed processes
*/
import handleNewMessage from "./components/Chat/sagas";
import setupSocket from "./components/Chat/sockets";
// import username from "./components/Chat/utils/name";

import "./assets/css/index.css";

// require the file to be added to the public folder by webpack
require("./assets/favicon.ico");

////////////////////////////// Chat //////////////////////////////
/* create middleware using the factory function exported from redux-saga
   middleware is a piece of code that executed after an action is dispatched
   but before reaching the reducer. */
const sagaMiddleware = createSagaMiddleware();

/*
    create store that holds the app state
 */
const store = createStore(
    reducers,
    // connect the middleware to the store
    applyMiddleware(sagaMiddleware)
);

// TODO
const username = 'ericwaidesign@gmail.com';
const socket = setupSocket(store.dispatch, username);

// start the Saga
sagaMiddleware.run(handleNewMessage, { socket, username });

/* Render Chat component into DOM */
ReactDOM.render(
    /* provider make store accessible to the children, that is why it is
       sensible thing to put App component within provider
       Provider node is represented as the parent node on top of App node */
    <Provider store={store}>
        <ChatApp />
    </Provider>,
    document.getElementById("ChatRoot")
);

////////////////////////////// ImageLoader //////////////////////////////
/* Render ImageLoader component into DOM */
ReactDOM.render(<ImageLoaderApp />, document.getElementById("ImageLoaderRoot"));