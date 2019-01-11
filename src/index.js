import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from 'redux';
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import * as serviceWorker from './serviceWorker';
import 'tachyons'; // Bootstap-like package
import './index.css';
import {searchRobots, requestRobots} from './reducers.js'
import App from './containers/App.js'

//ReactDOM.render(<App />, document.getElementById('root')); //ORIGINAL
//ReactDOM.render(<h1>Hello World!!</h1>, document.getElementById('root'));
//const Name='Alex';
//ReactDOM.render(<Hello greeting={`Hello ${Name} you react ninja`} user={Name}/>, document.getElementById('root'));

const logger = createLogger();
const rooReducer = combineReducers ({searchRobots, requestRobots});
const store = createStore(rooReducer, applyMiddleware(thunkMiddleware, logger));

ReactDOM.render(<Provider store={store}>
					<App/>
				</Provider>
				,document.getElementById('root'));

serviceWorker.unregister();
