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

<p>The Webtop is a virtual desktop in the browser where you can use the listings that you found and added to your bookmarks in Center. Webtop is a framework where applications can run and, in some cases, interact with each other.</p>

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
