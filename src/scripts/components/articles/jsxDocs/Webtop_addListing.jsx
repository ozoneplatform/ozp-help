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

<h1>Add Listings to a Dashboard</h1>

<iframe width="560"
  height="315"
  src={HELP_VIDEOS['Dashboard Set Up']}
  frameBorder="0" allowfullscreen title="TUTORIAL 6 - Use Apps">
</iframe>
<br /><br />

<p>Any listing you bookmarked in HUD will be accessible to use in Webtop. <br />
To add a listing to your Webtop:</p>

<ol>
	<li>Click the <i className="icon-square-plus"></i> in the lower-left corner.</li>
	<li>A window will appear displaying all the bookmarked listings that also appear in your HUD.<br />
	Select the ones you want to add and click <b>Open in a new dashboard</b> or <b>Open.</b> To add new listings, click <b>Find more apps</b> which will open Center where you can bookmark more listings.<br />
	<img alt="Add bookmarks to your webtop" src="Doc_images/Add-Listings-to-Webtop.png"  title="Use this window to add bookmarks to your webtop" /></li>
	<li>The listings will open in the dashboard while their icons will appear at the bottom of the screen.</li>
</ol>


	</div>
	);
	}
});
