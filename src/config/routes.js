var React = require('react');
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;

var App = require('../components/app');
var Login = require('../components/login');
var NotFound = require('../components/not-found');

var Session = require('../components/session/session.controller');
var Devices = require('../components/devices/devices.controller');
var DataStores = require('../components/data-stores/data-stores.controller');
var SelectedDataStore = require('../components/data-stores/selected-data-store.controller');

var StyleGuide = require('../components/style-guide');

var routes = (
  <Route handler={App}>
    <Route path="login" handler={Login}/>
    <Route path="session" handler={Session}/>
    <Route path="data-stores" handler={DataStores}/>
    <Route path="data-store/:name" handler={SelectedDataStore} />
    <Route path="devices" handler={Devices}/>
    <Route path="style-guide" handler={StyleGuide}/>
    <NotFoundRoute handler={NotFound} />
  </Route>
)

module.exports = routes;
