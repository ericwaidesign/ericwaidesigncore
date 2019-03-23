/**
 * client/src/index.js
 * @author <ericwaidesign@gmail.com>
 */

import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import App from './components/ImageLoader/ImageLoaderApp';

/* Render ImageLoader component into DOM */
ReactDOM.render(<App />, document.getElementById('SimpleImageSliderRoot'));