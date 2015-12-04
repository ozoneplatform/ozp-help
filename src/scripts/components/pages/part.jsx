'use strict';

var Reflux    = require('reflux'),
      React     = require('react'),
      _         = require('lodash'),
      Router    = require('react-router'),
      { Route, RouteHandler, Link } = Router;

var GlobalActions = require('../../actions/GlobalActions.jsx');
var { HELP_VIDEOS } = require('ozp-react-commons/OzoneConfig');

var FakeDB = require('../../fakeDB');
var Articles = {
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
      Part: 'global',
      Articles: []
    };
  },

  componentDidMount: function(){
    this.setState({
      Articles: Articles[this.state.Part]
    });
  },

  makeSection: function(){
    var role = this.context.router.getCurrentParams().role || 0;
    var sections = [];
    for(var article in this.state.Articles){
      var articleParent = this.state.Articles[article].articles;
      var articleList = this.state.Articles[article].articles.map((article)=>{
        if(article.role <= role){
          // Did something change in react-router to require this?
          var tmpParent = articleParent.slice(0,6).reduce(function(o,v,i) { o[i] =v; return o; }, {});
          return (
            <li>
              <Link
                to="article"
                query={{
                  parentArticles: tmpParent
                }}
                params={{
                  role: role,
                  part: this.state.Part,
                  article: article.file,
                  title: article.name,
                }}>
                  { article.name }
                  { article.film &&
                    <span> &nbsp; <i className="icon-video-blue"></i></span>
                  }
                </Link>
            </li>
          );
        }
      });
      if ( parseInt(role) >= this.state.Articles[article].groupRole ) {
        sections.push(
          <div className="col-sm-4">
              <h3>{ this.state.Articles[article].name }</h3>
              <ul>
              { articleList }
              </ul>
          </div>
        );
      }
    }
    return sections;
  },

  render: function(){
    var router = this.context.router;

    var sections = this.makeSection().map(function(section){
      return (
        <div>
          {section}
        </div>
      );
    });


    return (
      <div>
        <div className="modal-highlight">
            {/*@wski: We will leave this here for now, since it will be changed elsewhere*/}
            <iframe width="448"
              height="252"
              src={HELP_VIDEOS['Three Components of AppsMall']}
              frameBorder="0" allowfullscreen></iframe>
        </div>
        <div className="modal-body clearfix">
            {/*<ol className="breadcrumb">
                <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help">Home</a></li>
                <li className="active">{this.state.Part.charAt(0).toUpperCase() + this.state.Part.slice(1)}</li>
            </ol>*/}
            <div className="row">
                {sections}
            </div>
        </div>
      </div>
    );
  }
});
