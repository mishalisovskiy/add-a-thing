import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import Main from './Main';
import ColumnsContainer from './components/ColumnsContainer/ColumnsContainer';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(<ColumnsContainer />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
