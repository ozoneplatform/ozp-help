'use strict';

const Reflux    = require('reflux'),
      React     = require('react'),
      Router    = require('react-router'),
      { Route, RouteHandler, Link } = Router;


let GlobalActions = require('../../actions/GlobalActions.jsx');

module.exports = React.createClass({
  mixins: [ Router.State, Reflux.ListenerMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState(){
    return {
      Part: this.context.getCurrentParams().part,
      Article: require('../articles/jsxDocs/HUD_useHUD.jsx')
    };
  },

  componentDidMount(){
    let router = this.context;
    let article = require(`../articles/jsxDocs/${router.getCurrentParams().article}.jsx`);
    this.setState({
      Article: article
    });
  },

  render(){
    return (
      <div>
        <div className="modal-body clearfix">
          <ol className="breadcrumb">
            <li>
              <a href="#"
                data-toggle="modal"
                data-dismiss="modal"
                data-target="#modal_help">Home</a>
            </li>
            <li className="active">
              <Link to="part"
                params={{
                  part: this.context.getCurrentParams().part
                }}>
                { this.context.getCurrentParams().part.charAt(0).toUpperCase() + this.context.getCurrentParams().part.slice(1) }
              </Link>
            </li>
            <li className="active">
              { this.context.getCurrentParams().article }
            </li>
          </ol>
          <div className="row container">
            <this.state.Article />
          </div>
        </div>
        <div className="modal-footer">
            <button type="button" className="btn btn-primary">Take the {this.context.getCurrentParams().part.charAt(0).toUpperCase() + this.context.getCurrentParams().part.slice(1)} tour</button>
        </div>
      </div>
    );
  }
});
