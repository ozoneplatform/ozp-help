var Reflux = require('reflux');
var React = require('react');

var GlobalActions = require('../actions/GlobalActions');

var _ = require('lodash');
var $ = require('jquery');

var currentArticle = React.createClass({
  render: function(){
    return (
      <p>Invalid article. Something may have went wrong.</p>
    );
  }
});

module.exports = Reflux.createStore({
  listenables: [GlobalActions],
  mixins: [Reflux.ListenerMixin],

  init: function(){
    this.listenTo(GlobalActions.setCurrentArticle, this.setArticle);
    this.listenTo(GlobalActions.fetchCurrentArticle, this.fetchArticle);
  },

  setArticle: function(article){
    currentArticle = article;
    GlobalActions.setCurrentArticleCompleted();
  },

  fetchArticle: function(){
    GlobalActions.fetchCurrentArticleCompleted(currentArticle);
  }
});
