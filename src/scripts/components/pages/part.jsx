var Reflux = require('reflux');

var React = require('react');
var GlobalActions = require('../../actions/GlobalActions.jsx');

var _ = require('lodash');

var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;

var FakeDB= require('../fakeDB');
var Articles = {
  center: _.sortBy(FakeDB.Center, 'priority'),
  webtop: _.sortBy(FakeDB.Webtop, 'priority'),
  hud: _.sortBy(FakeDB.HUD, 'priority')
};

module.exports = React.createClass({
  mixins: [ Router.State, Reflux.ListenerMixin, Router.Navigation],

  contextTypes: {
    router: React.PropTypes.func
  },

  getInitialState: function(){
    return {
      Part: this.context.getCurrentParams().part,
      Articles: []
    };
  },

  componentDidMount: function(){
    this.setState({
      Articles: Articles[this.state.Part]
    });

  },

  makeSection: function(){
    var sections = [];
    for(var article in this.state.Articles){
      var articleList = this.state.Articles[article].articles.map(function(article){
        return (
          <li><Link to="article" params={{article: article.file}}>{ article.name }</Link></li>
        );
      });
      sections.push(
        <div className="col-md-4">
          <h2>{ this.state.Articles[article].name }</h2>
          <ul>
            { articleList }
          </ul>
        </div>
      );
    }
    return sections;
  },

  render: function(){
    var router = this.context;

    var sections = this.makeSection().map(function(section){
      return (
        <div>
          {section}
        </div>
      );
    });


    return (
      <div>
        <div className="row">
          <div className="modal-nav well well-sm clearfix">
              <a className="col-md-1" href="#">
                  <i className="icon-rewind"></i>
              </a>
              <a className="col-md-2" href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">
                  <p>How do I delete apps from the Webtop?</p>
              </a>
              <a className="col-md-2" href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">
                  <p>How do I move apps to another dashboard?</p>
              </a>
              <a className="col-md-2" href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">
                  <p>How do I change my dashboard view?</p>
              </a>
              <a className="col-md-2" href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">
                  <p>How do I add apps to the Webtop?</p>
              </a>
              <a className="col-md-2" href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">
                  <p>How do I delete a dashboard?</p>
              </a>
              <a className="col-md-1" href="#">
                  <i className="icon-fast-forward"></i>
              </a>
          </div>
          <div className="modal-body clearfix">
              <ol className="breadcrumb">
                  <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help">Home</a></li>
                  <li className="active">{this.state.Part.charAt(0).toUpperCase() + this.state.Part.slice(1)}</li>
              </ol>
              <div className="row">
                  {sections}
              </div>
          </div>
          <div className="modal-footer">
              <button type="button" className="btn btn-primary">Take the {this.state.Part.charAt(0).toUpperCase() + this.state.Part.slice(1)} tour</button>
          </div>
        </div>
      </div>
    );
  }
});
