import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import ReduxPromise from 'redux-promise';

import App from './components/app';
import reducers from './reducers';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Login from './containers/login_page'
import HomeScreenHeader from './components/home_screen_header'

const createStoreWithMiddleware = applyMiddleware(ReduxPromise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <Router>
      <div>
        <Switch>
          <Route path="/home" component={App} />
          <Route path="/" component={Login} />
        </Switch>
      </div>
    </Router>
  </Provider>
  , document.querySelector('.container-fluid'));
