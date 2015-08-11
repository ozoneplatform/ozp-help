var Reflux = require('reflux');

actions = [
  'setCurrentArticle', 'setCurrentArticleCompleted',
  'fetchCurrentArticle', 'fetchCurrentArticleCompleted'
];

module.exports = Reflux.createActions(actions);
