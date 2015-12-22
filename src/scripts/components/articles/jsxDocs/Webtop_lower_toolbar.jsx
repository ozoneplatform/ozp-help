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

<p><i className="icon-square-plus"></i> Opens a window that displays all the listings you bookmarked to HUD.
</p>

<p><i className="icon-caret-up"></i> Opens access to your dashboards. From here you can switch dashboards; and create, edit or delete them.</p>

<p>&nbsp;&nbsp;&nbsp;&nbsp; Small icons identify listings that are open on the dashboard.</p>

<p><i className="icon-stack"></i> On desktop dashboards, the square icon moves all listings into a cascading window format.</p>

<p><i className="icon-maximize-14"></i> The arrows icon makes the Webtop full-screen (hiding both toolbars) or switches from full-screen mode back to standard view (displaying the toolbars).</p>


	</div>
	);
	}
});
