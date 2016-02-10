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

<h1>Using the Toolbar</h1>

<p>The Toolbar appears at the top of each component of OZONE. Use it to navigate between HUD, Center and Webtop. From the toolbar, you can access your settings and Help resources, view notifications or create a listing.</p>

<iframe width="560"
  height="315"
  src={HELP_VIDEOS['Toolbar']}
  frameBorder="0" allowfullscreen title="TUTORIAL 1 - Toolbar">
</iframe>
<br /><br />

<p><img alt="Global Toolbar" src="Doc_images/Global_Toolbar.png" /></p>

<p><b>Toolbar</b></p>

<p>A blue Toolbar icon signifies which part of OZONE you are viewing and alerts you of unread notifications.</p>

<p>Each Toolbar icon is described in the corresponding section:</p>

<ul>
	<li><i className="icon-home"></i> Opens <Link to="article" params={{
  part: 'global',
  article: 'HUD_overview',
  title: 'Understanding HUD'
}}>HUD</Link> (Heads up display) where your bookmarks are stored. Think of HUD like the home screen on a smartphone.</li>

	<li><i className="icon-shopping"></i> Opens <Link to="article" params={{
  part: 'global',
  article: 'Center_overview',
  title: 'Understanding Center'
}}>Center</Link> where you can search for listings to bookmark to your HUD.</li>

	<li><i className="icon-layout"></i> Opens <Link to="article" params={{
  part: 'global',
  article: 'Webtop_overview',
  title: 'Understanding Webtop'
}}>Webtop</Link>, your customizable workspace within OZONE.</li>

	<li><i className="icon-bell"></i> <Link to="article" params={{
  part: 'global',
  article: 'GlobalToolbar_notifications',
  title: 'Receive and Dismiss Notifications'
}}>Notifications</Link> - If you have a notification the icon will change color and a line will display above it.</li>

	<li><i className="icon-question"></i> Help - Links to system Help resources.</li>

	<li><i className="icon-menu"></i> <Link to="article" params={{
  part: 'global',
  article: 'GlobalToolbar_mainMenu',
  title: 'Navigate with the Global Menu'
}}>Menu</Link> - A list of resources you can use to submit listings, view your profile, etc.</li>
</ul>


	</div>
	);
	}
});
