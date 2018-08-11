/**
 * client/src/index.js
 * @author ERIC WAI <ericwaidesign@gmail.com>
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import ImageLoaderApp from './components/ImageLoader/ImageLoaderApp';
import registerServiceWorker from './registerServiceWorker';

/* Render ImageLoader component into DOM */
ReactDOM.render(<ImageLoaderApp />, document.getElementById('ImageLoaderRoot'));

registerServiceWorker();