// Automatically Generated Module
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var { Route, RouteHandler, Link } = Router;
module.exports = React.createClass({
	mixins: [ Router.State, Reflux.ListenerMixin],
	contextTypes: { router: React.PropTypes.func },
	
render: function(){return ( 
<div>

<h1>Send a Notification</h1>

<p>Only Center Stewards can alert users via the Notifications feature.</p>

<p>This section explains how to send and cancel notifications:</p>

<ol>
	<li>From the Center Settings page, click the Notifications tab.</li>
	<li>Schedule and write the notification:
	<ol >
		<li>In the Expires On field, enter the date when you want the Notification message to disappear from users' drop-down notifications list on their Global Toolbars.<br />
		<b>By default, you enter the Expires At time in Zulu Time.</b> It appears as the local time zone time on each person's Notification's tab.</li>
		<li>Write the notification:<br />
		<img alt="Create Notifications window" src="Doc_images/CreateNotification.png"  title="Create notification window" /></li>
	</ol>
	</li>
	<li>Click Send, the Notification will appear two places in the system:<br />
	<img alt="Notifications example" src="Doc_images/Notification_example.png"  title="Notification example" />
	<ol >
		<li>The list of Active Notifications on the right-side of the screen (all <b>Center Stewards</b> will see it there).</li>
		<li>Under the Notifications icon on the Global Toolbar (all <b>users</b> will see it there). Users can click the X in the upper-right corner of the notification to dismiss the notification or wait for the notification to expire, at which point it will be removed from their list.</li>
	</ol>
	</li>
</ol>

<h2>Cancel a Notification</h2>

<p>Any Center Steward can cancel a notification:</p>

<ol>
	<li>From the Notifications tab on the Center Settings window, click the remove icon beside the Active Notification:<br />
	<img alt="Dismiss notification" src="Doc_images/DismissNotification.png"  title="Dismiss notification" /></li>
	<li>The notification will be removed without a confirmation message. It will be removed from users' Global Toolbars when they refresh their page.</li>
</ol>


	</div>
	);
	}
});
