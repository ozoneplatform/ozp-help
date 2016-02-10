// Automatically Generated Module
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var { Route, RouteHandler, Link } = Router;
var { HELP_VIDEOS } = require('ozp-react-commons/OzoneConfig');

module.exports = React.createClass({
	mixins: [ Router.State, Reflux.ListenerMixin],
	contextTypes: { router: React.PropTypes.func },

render: function(){return (
<div>

<h1>Understanding Webtop</h1>

<p>Webtop is the framework where applications run and interact with each other. Webtop creates an environment where compatible applications can share a virtual network and core services that solely exist within the browser's memory.</p>

<iframe width="560"
  height="315"
  src={HELP_VIDEOS['Use Apps']}
  frameBorder="0" allowfullscreen title="TUTORIAL 7 - Dashboard Set Up">
</iframe>
<br /><br />

<p><img alt="Webtop" src="Doc_images/Webtop.png" title="Webtop" /><br />
<b>Webtop</b><br /></p>


	</div>
	);
	}
});
