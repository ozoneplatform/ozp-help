// Automatically Generated Module
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var { Route, RouteHandler, Link } = Router;
module.exports = React.createClass({
	mixins: [ Router.State, Reflux.ListenerMixin],
	contextTypes: { router: React.PropTypes.func },
	
render: function(){
return ( 
<div>

<h1>Receive and Dismiss Notifications</h1>
Notifications are located on the top-right side of the Global Toolbar. Center stewards use them to alert users of upcoming events. If you have any unread notifications, the <img alt="Notifications icon" src="Doc_images/Notifications_icon.png"  /> changes to <img alt="Active Notifications icon" src="Doc_images/Active_notifications_icon.png"  />. When you click the notifications icon, notifications will display below it:
<p><img alt="Example: Notifications drop-down menu" src="Doc_images/Notifications_drop_down_example.png" /></p>



<h3>Dismissing Notifications</h3>

<p>Click the X in the upper-right corner of a notification to dismiss it. If notifications are not dismissed by a user, they will disappear from the list when they expire.</p>


	</div>
	);
	}
});
