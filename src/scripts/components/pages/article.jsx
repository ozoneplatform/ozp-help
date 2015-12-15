'use strict';

var   Reflux    = require('reflux'),
      React     = require('react'),
      Router    = require('react-router'),
      { Route, RouteHandler, Link } = Router;


var GlobalActions = require('../../actions/GlobalActions.jsx');

module.exports = React.createClass({
  mixins: [ Router.State, Reflux.ListenerMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  componentWillReceiveProps: function (newProps) {
    var article = require(`../articles/jsxDocs/${newProps.params.article}.jsx`);
    this.setState({
      Article: article,
      part: newProps.params.part,
      title: newProps.params.title
    });
  },

  getInitialState(){
    return {
      part: this.context.router.getCurrentParams().part,
      Article: require('../articles/jsxDocs/404.jsx'),
      relatedArticles: false
    };
  },

  componentDidMount(){
    var router = this.context.router;
    var article = require(`../articles/jsxDocs/${router.getCurrentParams().article}.jsx`);
    this.setState({
      Article: article
    });
    if(router.getCurrentQuery().parentArticles) {
      this.setState({ relatedArticles: router.getCurrentQuery().parentArticles });
    }
  },

  render(){
    var RelatedArticles = (this.state.relatedArticles) ? this.state.relatedArticles.map((article)=>{
      if(article.role <= this.context.router.getCurrentParams().role){
        return(
          <Link className="col-sm-2 col-xs-12" to="article" params={{
              role: this.context.router.getCurrentParams().role,
              part: 'global',
              article: article.file,
              title: article.name
            }}>
              <p>{article.name}</p>
          </Link>
        );
      }else {
        return '';
      }
    }) : '';
    return (
      <div>
        <div className="modal-body clearfix">
          <ol className="breadcrumb">
            <li className="active">
              <Link to="part"
                params={{
                  part: 'global',
                  role: this.context.router.getCurrentParams().role
                }}>
                Home
              </Link>
            </li>

            <li className="active">
              { this.context.router.getCurrentParams().title }
            </li>
          </ol>
          <div>
            <this.state.Article />
          </div>
        </div>
        { this.state.relatedArticles &&
          <div className="modal-nav well well-sm clearfix">
              <h4 class="col-md-12">Related Articles</h4>
              { RelatedArticles }
          </div>
        }
      </div>
    );
  }
});
