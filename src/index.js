import React from 'react';
import ReactDOM from 'react-dom';
import './css/index.css';
import Game from './Game.jsx';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<Game/>, document.getElementById('root'));

serviceWorker.register();
