import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

import ImageLoaderApp from './components/ImageLoader/App';
import ChatApp from './components/Chat/App';

import chat from './reducers';

import './assets/css/index.css';

const store = createStore(chat);

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