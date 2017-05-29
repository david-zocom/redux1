import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import './index.css';

import {createStore} from 'redux';
import {rootReducer} from './reducers.js';
import {actionHomeClick} from './actions.js';

let store = createStore(rootReducer);
store.subscribe( () => {
	const state = store.getState();
	//console.log('index.js: Store got new state:', state)
	ReactDOM.render(<App {...state}/>, document.getElementById('root'));
} );
store.dispatch(actionHomeClick());
	
//ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();

export {store};