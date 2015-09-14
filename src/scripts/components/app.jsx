var React = require('react/addons');
var Reflux = require('reflux');
var $ = require('jquery');

var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;

var GlobalStore = require('../stores/GlobalStore');
var Header = require('./header/header.jsx');

module.exports = React.createClass({
  mixins: [ Router.State, Reflux.connect(GlobalStore) ],

  render: function(){
    var router = this.context;

    return(
      <div className="modal fade in" id="modal_help" tabindex="-1" role="dialog" aria-labelledby="modal_help" aria-hidden="false" style={{'display': 'block'}}>
        <div className="modal-dialog modal-lg">
          <div className="modal-content">
            <Header />
            <RouteHandler />
          </div>
        </div>
      </div>
    );
  }
});
