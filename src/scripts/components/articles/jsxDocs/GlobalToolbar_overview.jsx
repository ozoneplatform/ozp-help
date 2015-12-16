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
	<li><img alt="HUD" src="Doc_images/HUD_icon.png"  /> Opens <Link to="article" params={{
  part: 'global',
  article: 'HUD_overview',
  title: 'Understanding HUD'
}}>HUD</Link> (Heads up display) where your bookmarks are stored. Think of HUD like the home screen on a smartphone.</li>

	<li><img alt="Center" src="Doc_images/center_icon.png"  /> Opens <Link to="article" params={{
  part: 'global',
  article: 'Center_overview',
  title: 'Understanding Center'
}}>Center</Link> where you can search for listings to bookmark to your HUD or open in Webtop.</li>

	<li><img alt="Webtop" src="Doc_images/Webtop_icon.png"  /> Opens <Link to="article" params={{
  part: 'global',
  article: 'Webtop_overview',
  title: 'Understanding Webtop'
}}>Webtop</Link>, your customizable workspace within OZONE.</li>

	<li><img alt="Notifications" src="Doc_images/Notifications_icon.png"  /> <Link to="article" params={{
  part: 'global',
  article: 'GlobalToolbar_notifications',
  title: 'Receive and Dismiss Notifications'
}}>Notifications</Link> - If you have a notification the icon will change color and a line will display above it.</li>

	<li><img alt="Help" src="Doc_images/Help_content_icon.png"  /> Help - Links to system Help resources.</li>

	<li><img alt="Main Menu" src="Doc_images/Main_menu_icon.png"  /> <Link to="article" params={{
  part: 'global',
  article: 'GlobalToolbar_mainMenu',
  title: 'Navigate with the Global Menu'
}}>Menu</Link> - A list of resources you can use to submit listings, change your settings, view your profile, etc.</li>
</ul>


	</div>
	);
	}
});
