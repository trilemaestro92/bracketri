import React from 'react';
import ReactDOM from 'react-dom';
import App from './App2';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('react-app'));

serviceWorker.unregister();
