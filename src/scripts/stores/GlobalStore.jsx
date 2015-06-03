var Reflux = require('reflux');

var GlobalActions = require('../actions/GlobalActions');

var _ = require('lodash');
var $ = require('jquery');

var sweetAlert = require('sweetalert');

module.exports = Reflux.createStore({
  listenables: [GlobalActions],
  mixins: [Reflux.ListenerMixin],

  init: function(){

  }
});
