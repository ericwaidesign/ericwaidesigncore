import React from 'react';
import ReactDOM from 'react-dom';
import './assets/css/index.css';
import ImageLoaderApp from './components/ImageLoader/ImageLoaderApp';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<ImageLoaderApp />, document.getElementById('ImageLoaderRoot'));

registerServiceWorker();