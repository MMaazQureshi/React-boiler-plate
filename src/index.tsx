import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Router, Route } from 'react-router-dom';
import { Provider as ReduxProvider } from 'react-redux';
import history from './history';
import configureStore from './redux/configureStore';
import { initialState } from './redux/reducers/initialState';

const store = configureStore(initialState);

ReactDOM.render(
  <ReduxProvider store={store}>
    <Router history={history}>
      <Route component={App} />
    </Router>
  </ReduxProvider>,
  document.getElementById('root'),
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
