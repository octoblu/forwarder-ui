import React, { Component } from 'react'
import { IndexRoute, Route, Router } from 'react-router'

import AppLayout from './containers/app-layout'
import ForwardersEdit from './containers/forwarders/edit'
import ForwardersIndex from './containers/forwarders/index'
import ForwardersShow from './containers/forwarders/show'
import ForwardersShowConfigure from './containers/forwarders/configure'
import ForwardersShowSubscriptions from './containers/forwarders/subscriptions'
import ForwarderTypes from './containers/forwarder-types/'
import ConfigureForwarderTypes from './containers/forwarder-types/configure'
import ShowForwarderTypes from './containers/forwarder-types/show'

import Login from './containers/login'
import Logout from './containers/logout'
import NotFound from './containers/not-found'

import { fetchOctobluUser, storeAuthentication } from './services/auth-service'

const AppRoutes = ({ history }) => {
  return (
  <Router history={history}>
    <Route path="/" component={AppLayout}>
      <IndexRoute component={ForwardersIndex}/>

      <Route path="new" component={ForwarderTypes}>
        <IndexRoute component={ShowForwarderTypes}/>
        <Route path=":forwarderTypeId" component={ConfigureForwarderTypes}/>
      </Route>

      <Route path="forwarders" component={ForwardersIndex} />
      <Route path="forwarders/:forwarderUuid" component={ForwardersShow}>
        <IndexRoute component={ForwardersShowConfigure} />
        <Route path="subscriptions" component={ForwardersShowSubscriptions} />
      </Route>
    </Route>

    <Route path="authenticated" onEnter={storeAuthentication}/>
    <Route path="login" component={Login}/>
    <Route path="logout" component={Logout}/>

    <Route path="*" component={NotFound}/>
  </Router>
)}

export default AppRoutes
