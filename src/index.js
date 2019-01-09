import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import 'tachyons'; // Bootstap-like package
import './index.css';
import App from './containers/App.js'

//ReactDOM.render(<App />, document.getElementById('root')); //ORIGINAL
//ReactDOM.render(<h1>Hello World!!</h1>, document.getElementById('root'));
//const Name='Alex';
//ReactDOM.render(<Hello greeting={`Hello ${Name} you react ninja`} user={Name}/>, document.getElementById('root'));

ReactDOM.render(<App />,document.getElementById('root'));

serviceWorker.unregister();
