var Reflux = require('reflux');

var React = require('react');
var GlobalActions = require('../../actions/GlobalActions.jsx');

var Router = require('react-router');
var { Route, RouteHandler, Link } = Router;


module.exports = React.createClass({
  mixins: [ Router.State, Reflux.ListenerMixin],

  contextTypes: {
    router: React.PropTypes.func
  },

  render: function(){
    var router = this.context;

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
                  <li className="active">Webtop</li>
              </ol>
              <div className="row">
                  <div className="col-md-4">
                      <h3>Apps</h3>
                      <ul>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I delete apps from the Webtop?</a></li>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I move apps to another dashboard?</a></li>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I add apps to the Webtop?</a></li>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I cascade my dashboard apps when in desktop view?</a></li>
                      </ul>
                  </div>
                  <div className="col-md-4">
                      <h3>Dashboards</h3>
                      <ul>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I create a dashboard?</a></li>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I change my dashboard view?</a></li>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I rename a dashboard?</a></li>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I delete a dashboard?</a></li>
                      </ul>
                  </div>
                  <div className="col-md-4">
                      <h3>Workspace</h3>
                      <ul>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I enter fullscreen view?</a></li>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I find new apps?</a></li>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I change my notification settings?</a></li>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I edit my profile?</a></li>
                      </ul>
                  </div>
              </div>
              <div className="row">
                  <div className="col-md-4">
                      <h3>Apps</h3>
                      <ul>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I delete apps from the Webtop?</a></li>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I move apps to another dashboard?</a></li>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I add apps to the Webtop?</a></li>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I cascade my dashboard apps when in desktop view?</a></li>
                      </ul>
                  </div>
                  <div className="col-md-4">
                      <h3>Dashboards</h3>
                      <ul>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I create a dashboard?</a></li>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I change my dashboard view?</a></li>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I rename a dashboard?</a></li>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I delete a dashboard?</a></li>
                      </ul>
                  </div>
                  <div className="col-md-4">
                      <h3>Workspace</h3>
                      <ul>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I enter fullscreen view?</a></li>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I find new apps?</a></li>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I change my notification settings?</a></li>
                          <li><a href="#" data-toggle="modal" data-dismiss="modal" data-target="#modal_help_article">How do I edit my profile?</a></li>
                      </ul>
                  </div>
              </div>
          </div>
          <div className="modal-footer">
              <button type="button" className="btn btn-primary">Take the Webtop tour</button>
          </div>
        </div>
      </div>
    );
  }
});
