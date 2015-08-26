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
      Article: require('../articles/jsxDocs/404.jsx')
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
            <li className="active">
              <Link to="part"
                params={{
                  part: 'global'
                }}>
                Home
              </Link>
            </li>
            {/*<li>
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
            </li>*/}
            <li className="active">
              { this.context.getCurrentParams().title }
            </li>
          </ol>
          <div>
            <this.state.Article />
          </div>
        </div>
        <div className="modal-nav well well-sm clearfix">
            <h4 class="col-md-12">Related Articles</h4>
            <a className="col-md-2 col-xs-12" href="#">
                <p>Delete a Dashboard</p>
            </a>
            <a className="col-md-2 col-xs-12" href="#">
                <p>Group Listings by Folder</p>
            </a>
            <a className="col-md-2 col-xs-12" href="#">
                <p>Using the Global Toolbar</p>
            </a>
            <a className="col-md-2 col-xs-12" href="#">
                <p>Getting Started with Ozone</p>
            </a>
            <a className="col-md-2 col-xs-12" href="#">
                <p>Getting Started with Ozone</p>
            </a>
            <a className="col-md-2 col-xs-12" href="#">
                <p>Getting Started with Ozone</p>
            </a>
        </div>
        <div className="modal-footer">
            <h4>Have a question not answered here?&nbsp;&nbsp;</h4>
            <button type="button" className="btn btn-primary">Contact the Help Desk</button>
            {/*<button type="button" className="btn btn-primary">Take the {this.context.getCurrentParams().part.charAt(0).toUpperCase() + this.context.getCurrentParams().part.slice(1)} tour</button>*/}
        </div>
      </div>
    );
  }
});
