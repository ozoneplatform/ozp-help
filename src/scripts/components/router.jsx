
var React = require('react');

// Assign React to Window so the Chrome React Dev Tools will work.
window.React = React;

var Router = require('react-router');
var {Route, NotFoundRoute} = Router;


// Require route components.
var App = require('./app');

var routes = (
  <Route handler={App}>
    <Route name="part" handler={require('./pages/part')} path="/" addHandlerKey={true} />
    <Route name="article" handler={require('./pages/article')} path="/:part/article/:article/:title" addHandlerKey={true} />
  </Route>
);

Router.run(routes, function(Handler){
  React.render(<Handler/>, document.getElementById("container"));
});
