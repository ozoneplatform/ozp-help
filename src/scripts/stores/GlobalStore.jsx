var Reflux = require('reflux');
var React = require('react');

var GlobalActions = require('../actions/GlobalActions');

var _ = require('lodash');
var $ = require('jquery');

module.exports = Reflux.createStore({
  listenables: [GlobalActions],
  mixins: [Reflux.ListenerMixin],

  init: function(){
  }

});
