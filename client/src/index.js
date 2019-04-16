import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";

import ImageLoaderApp from "./components/ImageLoader/App";
import ChatApp from "./components/Chat/App";
import chat from "./components/Chat/reducers";
import reducers from "./components"
import './assets/css/index.css';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(
    combineReducers,
    applyMiddleware(sagaMiddleware)
);

const socket = setupSocket(store.dispatch, username);
sagaMiddleware.run(handleNewMessage, {socket, username});

/* Render ImageLoader component into DOM */
ReactDOM.render(<ImageLoaderApp />, document.getElementById('ImageLoaderRoot'));

/* Render Chat component into DOM */
ReactDOM.render(
    // indead of telling ReactDOM to render <ChatApp />, Provider makes
    //  the store available to all the components of the ChatApp, without
    //  explicitly passing it down.
    <Provider store={store}>
        <ChatApp />
    </Provider>,
    document.getElementById('ChatRoot')
);