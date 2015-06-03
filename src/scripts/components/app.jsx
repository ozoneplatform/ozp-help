var React = require('react/addons');
var Reflux = require('reflux');

var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;

var GlobalStore = require('../stores/GlobalStore');

module.exports = React.createClass({
  mixins: [ Router.State, Reflux.connect(GlobalStore) ],

  render: function(){
    var router = this.context;

    return(
      <div>
        <RouteHandler />
      </div>
    );
  }
});
