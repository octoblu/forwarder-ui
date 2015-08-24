import React from 'react';
import Router, { HistoryLocation } from 'react-router';
import routes from './config/routes';

Router.run(routes, HistoryLocation, (Root, state) => {
  React.render(<Root params={state.params}/>, document.body);
});
