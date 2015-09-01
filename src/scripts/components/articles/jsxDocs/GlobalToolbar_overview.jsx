// Automatically Generated Module
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
module.exports = React.createClass({
	mixins: [ Router.State, Reflux.ListenerMixin],
	contextTypes: { router: React.PropTypes.func },
	
render: function(){return ( 
<div>

<h1>Using the Global Toolbar</h1>

<p>The Global Toolbar appears at the top of each product in the OZONE family. Use it to navigate between HUD, Center and Webtop. From the toolbar, you can access your settings and Help resources, see notifications or create a listing.</p>

<iframe width="560"
  height="315"
  src="https://www.youtube.com/embed/vnXb1S6l_jE"
  frameBorder="0" allowfullscreen title="TUTORIAL 1 - Toolbar">
</iframe>
<br /><br />

<p><img alt="Global Toolbar" src="Doc_images/Global_Toolbar.png" /></p>

<p><b>Global Toolbar</b></p>

<p>A blue Global Toolbar icon signifies which part of OZONE you are viewing and alerts you of unread notifications.</p>

<p>Each Global Toolbar icon is described in the corresponding section:</p>

<ul>
	<li><img alt="HUD" src="Doc_images/HUD_icon.png"  /> Opens <a href="HUD_overview.html">HUD</a> (Heads up display) where your bookmarks are stored. Think of HUD like the home screen on a smart phone.</li>

	<li><img alt="Center" src="Doc_images/center_icon.png"  /> Opens <a href="Center_overview.html">Center</a> where you can search for listings to bookmark to your HUD or open in Webtop.</li>

	<li><img alt="Webtop" src="Doc_images/Webtop_icon.png"  /> Opens <a href="Webtop_overview.html">Webtop</a> your customizable workspace within OZONE.</li>

	<li><img alt="Notifications" src="Doc_images/Notifications_icon.png"  /> <a href="GlobalToolbar_notifications.html">Notifications</a> - If you have a notification the icon will change colors and a line will display above it.</li>

	<li><img alt="Help" src="Doc_images/Help_content_icon.png"  /> <a href="GlobalToolbar_help.html">Help</a> - Links to system Help resources.</li>

	<li><img alt="Main Menu" src="Doc_images/Main_menu_icon.png"  /> <a href="GlobalToolbar_mainMenu.html">Main Menu</a> - A list of resources you can use to submit listings, change your settings, view your profile, etc.</li>
</ul>


	</div>
	);
	}
});
