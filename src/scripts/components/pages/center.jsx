var Reflux = require('reflux');

var React = require('react');
var GlobalActions = require('../../actions/GlobalActions.jsx');

var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;


module.exports = React.createClass({
  mixins: [ Router.State, Reflux.ListenerMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  render: function(){
    var router = this.context;

    return (
      <div>
        <div className="row">
            <div className="col-md-3">
                <a className="thumbnail well" href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_webtop">
                    <div className="caption">
                        <h1><i className="icon-home"></i></h1>
                        <h2>HUD</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </a>
            </div>
            <div className="col-md-3">
                <a className="thumbnail well" href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_webtop">
                    <div className="caption">
                        <h1><i className="icon-shopping"></i></h1>
                        <h2>Center</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </a>
            </div>
            <div className="col-md-3">
                <a className="thumbnail well" href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_webtop">
                    <div className="caption">
                        <h1><i className="icon-layout"></i></h1>
                        <h2>Webtop</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </a>
            </div>
            <div className="col-md-3">
                <a className="thumbnail well" href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_webtop">
                    <div className="caption">
                        <h1><i className="icon-globe"></i></h1>
                        <h2>Global</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </a>
            </div>
        </div>
      </div>
    );
  }
});
