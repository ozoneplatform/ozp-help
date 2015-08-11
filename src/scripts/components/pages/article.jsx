var Reflux = require('reflux');

var React = require('react');
var GlobalActions = require('../../actions/GlobalActions.jsx');

var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;

var FakeDB= require('../fakeDB');
var Articles = {
  center: FakeDB.Center,
  webtop: FakeDB.Webtop,
  hud: FakeDB.HUD
};

module.exports = React.createClass({
  mixins: [ Router.State, Reflux.ListenerMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function(){
    return {
      Part: this.context.getCurrentParams().part,
      Article: require('../articles/jsxDocs/HUD_useHUD.jsx')
    };
  },

  componentDidMount: function(){
    var router = this.context;
    var article = require(`../articles/jsxDocs/${router.getCurrentParams().article}.jsx`);
    this.setState({
      Article: article
    });
    console.log('setState');
  },

  render: function(){
    return (
      <div>
        <this.state.Article />
      </div>
    );
  }
});
