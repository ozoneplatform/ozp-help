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

<h1>Using HUD</h1>

<iframe width="560"
  height="315"
  src={HELP_VIDEOS['HUD | Heads Up Display']}
  frameBorder="0" allowfullscreen title="TUTORIAL 5 - HUD | Heads Up Display">
</iframe>
<br /><br />


<p>You can access HUD two ways using the Toolbar:</p>

<ul>
	<li>
	<p>Click the <i className="icon-home"></i> icon on the upper-left side of the toolbar or click the <br />
	<i className="icon-menu"></i> icon on the far-right side of the toolbar, then select Bookmarks:</p>
	</li>
</ul>

<p><img alt="HUD access from toolbar" src="Doc_images/HUD-access-from-toolbar.png"  title="HUD access from toolbar" /><br />
<b>Accessing HUD from the Toolbar</b></p>

<h3>Bookmarks in HUD</h3>
<p>From HUD you can <b>open, get help, or remove bookmarked apps</b>. To open a bookmarked app, click its tile. Other actions are found under the drop-down menu at the upper right of each bookmarked listing.<br />
<img alt="Drop-down listing actions menu" src="Doc_images/drop-down-listing-actions.png"  title="Drop-down listing actions menu" /></p>
<p>
<b>Drop-down listing actions menu</b>
<br/>Listing commands are accessible from the drop-down menu on the upper-right side of the listing:</p>

<ul>
	<li><b>Get help</b> - Opens the listing's Help resources.</li>
	<li><b>Remove Bookmark</b> - Deletes the listing from your HUD. To add it again: go to Center, search for the listing and bookmark it.</li>
</ul>


	</div>
	);
	}
});
