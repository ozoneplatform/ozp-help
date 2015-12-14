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

<h1>Navigate with the Webtop Toolbar</h1>

<p>Use the lower toolbar to add listings to a dashboard, switch dashboards and manage open listings.</p>

<p><img alt="Lower toolbar in Webtop" src="Doc_images/webtop-lower-toolbar.png" title="Lower toolbar in Webtop" /><br /></p>

<p><img alt="List of all open bookmarks" src="Doc_images/+.png" title="List of all open bookmarks" /> Opens a window that displays all the listings you bookmarked to HUD.
</p>

<p><img alt="Dashboard access icon" src="Doc_images/dashboard-access-icon.png"  title="Dashboard access icon" /> Opens access to your dashboards. From here you can switch dashboards; and create, edit or delete them.</p>

<p><img alt="Small listing icons" src="Doc_images/small-listing-icons-on-webtop.png"  title="Small listing icons" /> Small icons identify listings that are open on the dashboard.
	<ul>
		<li>A line under the icon represents a listing that is visible on the screen.</li>
		<li>Icons that do not have lines under them are minimized.</li>
	</ul>
</p>

<p><img alt="Cascading window format" src="Doc_images/cascading-window-format-icon.png"  title="Cascading window format" /> On desktop dashboards, the square icon moves all listings into a cascading window format.</p>

<p><img alt="Make webtop full screen" src="Doc_images/full-screen-icon.png"  title="Webtop full screen icon" /> The arrows icon makes the Webtop full-screen (hiding both toolbars) or switches from full-screen mode back to standard view (displaying the toolbars).</p>


	</div>
	);
	}
});
