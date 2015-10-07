'use strict';

const Reflux    = require('reflux'),
      React     = require('react'),
      _         = require('lodash'),
      Router    = require('react-router'),
      { Route, RouteHandler, Link } = Router;

var GlobalActions = require('../../actions/GlobalActions.jsx');

const FakeDB = require('../../fakeDB');
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
          var tmpParent = articleParent.reduce(function(o,v,i) { o[i] =v; return o; }, {});
          return (
            <li>
              <Link
                to="article"
                query={{
                  parentArticles: tmpParent
                }}
                params={{
                  part: this.state.Part,
                  article: article.file,
                  title: article.name,
                }}>
                  { article.name }
                  { article.film &&
                    <span> 🎥 </span>
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
            <iframe width="560"
              height="315"
              src="https://www.youtube.com/embed/vnXb1S6l_jE"
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
        <div className="modal-footer">
            <h4>Have a question not answered here?&nbsp;&nbsp;</h4>
            <button type="button" className="btn btn-primary">Contact the Help Desk</button>
            {/*<button type="button" className="btn btn-primary">Take the {this.state.Part.charAt(0).toUpperCase() + this.state.Part.slice(1)} tour</button>*/}
        </div>
      </div>
    );
  }
});
