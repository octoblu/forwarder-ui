import React, { Component } from 'react';
import { IndexRoute, Route } from 'react-router';
import { ReduxRouter } from 'redux-react-router';

import Forwarder from '../containers/forwarders';
import ForwarderNew from '../containers/forwarders/forwarders-new';
import ForwarderNewDataStore from '../containers/forwarders/forwarders-new-data-store';
import ForwarderNewOptions from '../containers/forwarders/forwarders-new-options';
import ForwarderNewIndex from '../containers/forwarders/forwarders-new-index';
import ForwarderNewGateblu from '../containers/forwarders/forwarders-new-gateblu';
import ForwarderNewSubscriptions from '../containers/forwarders/forwarders-new-subscriptions';
import ForwarderNewRegister from '../containers/forwarders/forwarders-new-register';
import Login from '../containers/login';
import Logout from '../containers/logout';
import NotFound from '../containers/not-found';
import StyleGuide from '../containers/style-guide';


class AppRoutes extends Component {
  render() {
    const {requireAuth} = this.props
    return (
      <ReduxRouter>
        <Route path="/" onEnter={requireAuth}>
          <IndexRoute component={Forwarder}/>
          <Route path="/forwarders" component={Forwarder}/>
          <Route path="/forwarders/new" component={ForwarderNew}>
            <IndexRoute component={ForwarderNewIndex}/>
            <Route path="store" component={ForwarderNewDataStore}/>
            <Route path="options" component={ForwarderNewOptions}/>
            <Route path="gateblu" component={ForwarderNewGateblu}/>
            <Route path="subscriptions" component={ForwarderNewSubscriptions}/>
            <Route path="register" component={ForwarderNewRegister}/>
          </Route>
        </Route>

        <Route path="style-guide" component={StyleGuide}/>
        <Route path="login" component={Login}/>
        <Route path="logout" component={Logout}/>
      </ReduxRouter>
    );
  }
}

module.exports = AppRoutes;
