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

<h1>Understanding HUD</h1>
<p>HUD is a user's personalized homepage for all listings selected as bookmarks in Center. From HUD, you can quickly find, launch or get help relating to each listing. Users can also organize their bookmarked apps into shareable folders or remove an app from their bookmarks.</p>

<iframe width="560"
  height="315"
  src={HELP_VIDEOS['HUD | Heads Up Display']}
  frameBorder="0" allowfullscreen title="TUTORIAL 5 - HUD | Heads Up Display">
</iframe>
<br /><br />

<p><img alt="HUD home page" src="Doc_images/HUD_home.png"  title="HUD home page" /></p>

<br />
<h3>Bookmarks in HUD</h3>
<p>From HUD you can <b>open, get help on or remove bookmarked apps</b>. These actions are found under the drop-down menu at the upper right of each bookmarked listing.</p>
<p><img alt="Drop-down listing actions menu" src="Doc_images/drop-down-listing-actions.png"  title="Drop-down listing actions menu" /></p>

<br />
<p><b>Drop-down listing actions menu</b><br />Listing commands are accessible from the drop-down menu on the upper-right side of the listing:</p>

<ul>
	<li><b>Get help</b> - Opens the listing's Help resources.</li>
	<li><b>Remove Bookmark</b> - Deletes the listing from your HUD. To add it again: go to Center, search for the listing and bookmark it.</li>
</ul>


	</div>
	);
	}
});
