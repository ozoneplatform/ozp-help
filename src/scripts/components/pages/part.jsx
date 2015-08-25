'use strict';

const Reflux    = require('reflux'),
      React     = require('react'),
      _         = require('lodash'),
      Router    = require('react-router'),
      { Route, RouteHandler, Link } = Router;

let GlobalActions = require('../../actions/GlobalActions.jsx');

const FakeDB = require('../../fakeDB');
let Articles = {
  center: _.sortBy(FakeDB.Center, 'priority'),
  webtop: _.sortBy(FakeDB.Webtop, 'priority'),
  hud: _.sortBy(FakeDB.HUD, 'priority'),
  global: _.sortBy(FakeDB.Global, 'priority'),
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
      var articleList = this.state.Articles[article].articles.map((article)=>{
        return (
          <li><Link to="article" params={{part: this.state.Part, article: article.file, title: article.name}}>{ article.name }</Link></li>
        );
      });
      sections.push(
        <div className="col-sm-4">
            <h3>{ this.state.Articles[article].name }</h3>
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
        <div className="modal-body clearfix">
            {/*<ol className="breadcrumb">
                <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help">Home</a></li>
                <li className="active">{this.state.Part.charAt(0).toUpperCase() + this.state.Part.slice(1)}</li>
            </ol>*/}
            <div className="row">
                {sections}
            </div>
        </div>
        {/*<div className="modal-nav well well-sm clearfix">
            <a className="col-md-1" href="#">
                <i className="icon-rewind"></i>
            </a>
            <a className="col-md-2" href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">
                <p>Delete a Dashboard</p>
            </a>
            <a className="col-md-2" href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">
                <p>Group Listings by Folder</p>
            </a>
            <a className="col-md-2" href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">
                <p>Using the Global Toolbar</p>
            </a>
            <a className="col-md-2" href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">
                <p>Getting Started with Ozone</p>
            </a>
            <a className="col-md-2" href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">
                <p>Create a Dashboard</p>
            </a>
            <a className="col-md-1" href="#">
                <i className="icon-fast-forward"></i>
            </a>
        </div>*/}
        <div className="modal-footer">
            <h4>Have a question not answered here?&nbsp;&nbsp;</h4>
            <button type="button" className="btn btn-primary">Contact the Help Desk</button>
            {/*<button type="button" className="btn btn-primary">Take the {this.state.Part.charAt(0).toUpperCase() + this.state.Part.slice(1)} tour</button>*/}
        </div>
      </div>
    );
  }
});
