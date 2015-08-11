var Reflux = require('reflux'),
    React = require('react'),
    Router = require('react-router'),
    { Route, RouteHandler, Link } = Router;

var GlobalActions = require('../../actions/GlobalActions.jsx');


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
    var router = this.context;
    var article = require(`../articles/jsxDocs/${router.getCurrentParams().article}.jsx`);
    this.setState({
      Article: article
    });
  },

  render(){
    return (
      <div>
        <this.state.Article />
      </div>
    );
  }
});
