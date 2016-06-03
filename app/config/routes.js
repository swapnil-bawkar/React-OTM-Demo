/**
 * Created by iag on 5/31/16.
 */
var Router = require('react-router');
var Route = Router.Route;
var IndexRoute = Router.IndexRoute;
var Main = require('../components/Main');
var Home = require('../components/Home');
var Engine = require('./Engine');

module.exports = (
    <Route path="/" component={Main}>
        <IndexRoute component={Home}></IndexRoute>
        <Route path="/question/:questionNo" component={Engine}></Route>
    </Route>
);