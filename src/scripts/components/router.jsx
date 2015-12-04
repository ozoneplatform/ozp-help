
var React = require('react');

// Assign React to Window so the Chrome React Dev Tools will work.
window.React = React;

var Router = require('react-router');
var {Route, NotFoundRoute} = Router;


// Require route components.
var App = require('./app');

var routes = (
  <Route handler={App}>
    <Route name="part" handler={require('./pages/part')} path="/:role?" addHandlerKey={true} />
    <Route name="article" handler={require('./pages/article')} path="/:role?/:part/article/:article/:title" addHandlerKey={true} />
  </Route>
);

var AppRouter = Router.create({
  scrollBehavior: Router.ScrollToTopBehavior,
  routes: routes
});

AppRouter.run(function(Handler){
  React.render(<Handler/>, document.getElementById("container"));
});
