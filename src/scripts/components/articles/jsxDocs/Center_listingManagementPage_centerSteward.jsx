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

<h1>Manage Listings as a Center Steward</h1>

<p>Center stewards can see every listing in their organization from their Listing Management page. To access this page, click the drop-down Main Menu on the right side of the Global Toolbar and select Listing Management:</p>

<p><img alt="Link to Listing Management Page from Global Toolbar" src="Doc_images/listingManagementLink.png" title="Listing Management Page" /></p>

<p>As a Center steward, the Listing Management page displays information about listings you own and listings you oversee. For the user view see <Link to="article" params={{
  part: 'global',
  article: 'Center_listingManagementPage_user',
  title: 'Manage your Created Listings'
}}>Manage your Created Listings</Link>.</p>

<p><img alt="Steward Management Tabs" border="0" src="Doc_images/mpSteward_managementTabs.png" /></p>

<p>As a <b>Center steward</b>, you see multiple tabs on the Listing Management screen:</p>

<ul>
	<li>The <b>Recent Activity</b> tab displays changes to all listings you oversee.</li>
	<li><b>All Marketplace (Center) Listings </b>displays all listings in the system.</li>
	<li>Each <b>organizational tab</b> displays listings that you oversee for that specific organization. All the organization's listings appear there. You will only see this tab if you are an Org Steward.</li>
	<li>The <b>My Listings</b> tab displays listings you own.</li>
</ul>

<br />

<img border="0" alt="State panel" src="Doc_images/mpSteward_statePanel.png" />

<p>The left-side State panel provides slightly different information than a user's or org steward's left-side panel:</p>

<p><strong>State</strong></p>

<ul>
	<li>All - Listings you oversee as a steward</li>
	<li>Published - Listings that are approved by Center and organizational stewards within your organization (this number includes listings that are Disabled)</li>
	<li>Needs action - Listing waiting for your approval. For instructions regarding approving or returning listings see <Link to="article" params={{
  part: 'global',
  article: 'Center_listings_approveReject_centerSteward',
  title: 'Approve or Return a Listing as a Center Steward'
}}>Approve or Return Listings</Link>.</li>
	<li>Pending, Org. - Listings waiting for your approval</li>
	<li>Returned - Listings returned to their owners</li>
	<li>Draft - Listings in the system that have not been submitted for approval</li>
</ul>

<p><b>Organization</b></p>

<p>Center stewards can filter by organization.</p>

<p><b>Enabled</b></p>

<p>All stewards see the Enabled section which allows them to filter by <b>enabled and disabled listings</b> (For information about enabled and disabled listings see <Link to="article" params={{
  part: 'global',
  article: 'Center_listings_approveReject_centerSteward',
  title: 'Approve or Return a Listing as a Center Steward'
}}>Enable or Disable a Listing</Link>.</p>



	</div>
	);
	}
});
