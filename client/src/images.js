import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './AppImages';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('imageRoot'));
registerServiceWorker();
