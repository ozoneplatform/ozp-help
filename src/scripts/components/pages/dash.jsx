'use strict';

const Reflux    = require('reflux'),
      React     = require('react'),
      Router    = require('react-router'),
      { Route, RouteHandler, Link } = Router;

var GlobalActions = require('../../actions/GlobalActions.jsx');

module.exports = React.createClass({

  mixins: [ Router.State, Reflux.ListenerMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  componentDidMount(){

  },

  render(){
    var router = this.context;

    return (
      <div className="modal-body clearfix">
        <div className="row">
            <div className="col-md-3">
                <Link to="part" params={{part: 'hud'}} className="thumbnail well" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_webtop">
                    <div className="caption">
                        <h1><i className="icon-home"></i></h1>
                        <h2>HUD</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                  </div>
                </Link>
            </div>
            <div className="col-md-3">
                <Link to="part" params={{part: 'center'}} className="thumbnail well" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_webtop">
                    <div className="caption">
                        <h1><i className="icon-shopping"></i></h1>
                        <h2>Center</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </Link>
            </div>
            <div className="col-md-3">
                <Link to="part"
                  params={{part: 'webtop'}}
                  className="thumbnail well"
                  data-toggle="modal"
                  data-dismiss="modal"
                  data-target="#modal_help_webtop">
                    <div className="caption">
                        <h1><i className="icon-layout"></i></h1>
                        <h2>Webtop</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </Link>
            </div>
            <div className="col-md-3">
                <Link to="part"
                  params={{part: 'global'}}
                  className="thumbnail well"
                  data-toggle="modal"
                  data-dismiss="modal"
                  data-target="#modal_help_webtop">
                    <div className="caption">
                        <h1><i className="icon-globe"></i></h1>
                        <h2>Global</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    </div>
                </Link>
            </div>
        </div>
      </div>
    );
  }
});
