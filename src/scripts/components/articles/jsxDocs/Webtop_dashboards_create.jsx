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

<h1>Create a Dashboard</h1>

<p>
	A dashboard is a user-configured layout of applications within the Webtop. 
</p>

<iframe width="560"
  height="315"
  src={HELP_VIDEOS['Dashboard Set Up']}
  frameBorder="0" allowfullscreen title="TUTORIAL 7 - Dashboard Set Up">
</iframe>
<br /><br />

<img alt="Dashboard" src="Doc_images/Webtop.png"  title="Dashboard" />

<br />

<b>Dashboard Example</b>

<br /><br/>
<h2>Create a Dashboard</h2>

<p>You can create multiple dashboards with different configurations of listings. Consider making different dashboards for different tasks. You can use the same listing on multiple dashboards. The dashboards can be in grid or desktop format. If you edit the dashboard to change it from one format to the other, your listings will lose their state (i.e. they will refresh and you will lose the data they are displaying).</p>

<p>Create a dashboard and add a listing to it:</p>
<br />

<ol>
	<li>Click the <i className="icon-caret-up"></i> at the bottom-left side of Webtop's lower toolbar.
		<br />
		<i>Note: Your first dashboard is called Default. If you change that name or use a different dashboard, you will see a different name to the left of the arrow.</i>
	</li>
	<li>Click <b>+Create a new dashboard</b>.</li>
	<li>Type a Name and select if the dashboard will have a grid or desktop format.</li>
	<li>Click <b>Create Dashboard</b>, the dashboard will automatically open.</li>
	<li>Now it's time to add listings. Click the <i className="icon-square-plus"></i> at the bottom-left side of the Webtop's lower toolbar.</li>
	<li>All the Webtop-enabled listings you have bookmarked to HUD will appear. Select the ones you want to use on this dashboard and click <b>Open.</b></li>
</ol>


	</div>
	);
	}
});
