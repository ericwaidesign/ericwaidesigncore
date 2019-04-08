/**
 * ericwaidesigncore\client\src\index.js
 * @author <ericwaidesign@gmail.com>
 */

import React from 'react';
import ReactDOM from 'react-dom';
import ImageLoaderApp from './components/ImageLoader/App';
import registerServiceWorker from './registerServiceWorker';

import './assets/css/index.css';

/* Render ImageLoader component into DOM */
ReactDOM.render(<ImageLoaderApp />, document.getElementById('ImageLoaderRoot'));

/* Render ChatUI component into DOM */
// ReactDOM.render(<ChatUI />, document.getElementById('ChatUIRoot'));

// cache assets for offline or slow network
registerServiceWorker();