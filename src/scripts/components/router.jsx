require('../../../public/main.css');

var React = require('react');

// Assign React to Window so the Chrome React Dev Tools will work.
window.React = React;

var Router = require('react-router');
var {Route, NotFoundRoute} = Router;


// Require route components.
var App = require('./app');

var routes = (
  <Route handler={App}>
    <Route name="home" handler={require('./pages/dash')} path="/" addHandlerKey={true} />
    <Route name="part" handler={require('./pages/part')} path="/part/:part" addHandlerKey={true} />
    <Route name="hud" handler={require('./pages/hud')} path="/hud" addHandlerKey={true} />
  </Route>
);

Router.run(routes, function(Handler){
  React.render(<Handler/>, document.getElementById("container"));
});
