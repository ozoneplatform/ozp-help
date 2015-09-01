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

<h1>The Role of Content Steward</h1>

<p>Content stewards are the gatekeepers. They oversee all listings in Center. Before listings are available for users to find and use, an organizational content steward and a Center content steward must approve them.</p>

<p><em>Note: We separated steward instructions into <Link to="article" params={{
  part: 'global',
  article: 'Center_listingManagementPage_orgSteward',
  title: 'Manage Listings as an Org Steward'
}}>org steward</Link> and <Link to="article" params={{
  part: 'global',
  article: 'Center_listingManagementPage_centerSteward',
  title: 'Manage Listings as a Center Steward'
}}>center steward</Link> tasks and views.</em></p>
<ul>
	<li><em>If you are an <b>org steward</b>, you will not need the information in the Center steward section.</em></li>
	<li><em>If you are a <b>Center steward</b>, skip to that section because the information in the org steward section will be redundant.</em></li>
</ul>

<h2>Content Steward Roles</h2>

<p><Link to="article" params={{
  part: 'global',
  article: 'Center_listingManagementPage_orgSteward',
  title: 'Manage Listings as an Org Steward'
}}><b>Organizational steward</b></Link> - Every organization has at least one organizational content steward or <i>org steward.</i> The org steward must approve listings before sending them to a Center steward for final approval. Org stewards can approve listings or send them back to their owners for updates. Also, they can enable/disable listing and edit or delete reviews for their organization.</p>

<p><Link to="article" params={{
  part: 'global',
  article: 'Center_listingManagementPage_centerSteward',
  title: 'Manage Listings as a Center Steward'
}}><b>Center steward</b></Link> - The Center Content Steward has two roles:</p>

<ol>
	<li><b>Oversee <i>all</i> listings in Center (see <Link to="article" params={{
  part: 'global',
  article: 'Center_listingManagementPage_centerSteward',
  title: 'Manage Listings as a Center Steward'
}}>Center Steward</Link>).</b>

	<ul>
		<li>Approve or reject listings</li>
		<li>Enable or disable listings</li>
		<li>Select which listings will be featured on the Search and Discovery Page using the <Link to="article" params={{
  part: 'global',
  article: 'Center_steward_featureFlag',
  title: 'Feature a Listing'
}}>feature flag</Link>.</li>
	</ul>
	</li>
	<li><b>Configure and administer Center</b> see <Link to="article" params={{
  part: 'global',
  article: 'Center_steward_settings',
  title: 'Change Center Settings'
}}>Center Settings</Link>.
	<ul>
		<li>Add, edit and delete Center Settings including Categories, Contact Types, Intents, Organizations and Stewards</li>
		<li>Send system-wide Notifications</li>
	</ul>
	</li>
</ol>


	</div>
	);
	}
});
