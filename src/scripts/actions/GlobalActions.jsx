var Reflux = require('reflux');

actions = [
  'setRelatedArticles', 'fetchRelatedArticles', 'sendRelatedArticles'
];

module.exports = Reflux.createActions(actions);
