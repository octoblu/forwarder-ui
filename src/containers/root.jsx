import React from 'react'
import { RouteHandler } from 'react-router'
import { createStore, applyMiddleware, combineReducers, compose } from 'redux';
import { Provider } from 'react-redux'
import ThunkMiddleware from 'redux-thunk'
import { devTools, persistState } from 'redux-devtools';
import { DevTools, DebugPanel, LogMonitor } from 'redux-devtools/lib/react';

import * as MeshbluActions from '../actions/meshblu-actions';

import reducers from '../reducers/';

var middleware = [ThunkMiddleware];
var finalCreateStore;

if (process.env.NODE_ENV === 'production') {
  finalCreateStore = applyMiddleware(...middleware)(createStore);
} else {
  finalCreateStore = compose(
    applyMiddleware(...middleware),
    require('redux-devtools').devTools(),
    require('redux-devtools').persistState(
      window.location.href.match(/[?&]debug_session=([^&]+)\b/)
    ),
    createStore
  );
}

var store = finalCreateStore(reducers);
store.dispatch(MeshbluActions.createConnection());

var Root = React.createClass({
  render: function() {
    return (
      <Provider store={store}>
        {function() {
          return (
          <div>
            <h1>App Layout</h1>

            <RouteHandler />

            <DebugPanel top right bottom>
              <DevTools store={store} monitor={LogMonitor} />
            </DebugPanel>
          </div>
          )
        }}
      </Provider>
    );
  }
});

module.exports = Root;