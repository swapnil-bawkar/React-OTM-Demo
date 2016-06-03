/**
 * Created by iag on 5/31/16.
 */
var React = require('react');
var ReactDom = require('react-dom');
var RouterRouter = require('react-router');
var Router = RouterRouter.Router;
var browserHistory = RouterRouter.browserHistory;
var routes = require('./config/routes');

ReactDom.render(
    <Router history={browserHistory}>{routes}</Router>,
    document.getElementById('app')
);
