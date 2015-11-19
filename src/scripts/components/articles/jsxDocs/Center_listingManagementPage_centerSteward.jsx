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

<h2>Listing Management State Panel</h2>
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
}}>Approve or Return a Listing</Link>.</li>
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
}}>Approve or Return a Listing</Link>.</p>

<h2>Listing Management Table View</h2>
<img border="0" alt="Table View" src="Doc_images/ListingManagementTable.png" />


<p> From the steward management tabs, you can switch to a table view by clicking the table button on the upper-left side of the state panel (circled in the figure above). To switch back to the standard listing management view, click the grid button located at the top-left of the State panel.</p>

<p>The table view lists:</p>
<ul>
	<li><b>Name</b> -- links to the listing</li>
	<li><b>Owner</b> -- links to the owner&#39;s profile</li>
	<li><b>Comments</b> -- lists the last comment from the change log</li>
	<li>Status</li>
	<li>Updated date</li>
	<li>Enable/Disabled status</li>
	<li><b>Featured</b> status -- to feature a listing or remove it from the featured listings, check or uncheck this field</li>
	<li>List of <b>Actions</b> -- click the edit, feedback, view or delete actions to update or review the listing:</li>
</ul>

<img border="0" alt="Table Actions" src="Doc_images/ListingManagementTable_ActionIcons.png" />

<h3>Use the Listing Management Table</h3>
<p>From the table view, stewards can:</p>
<ul>
	<li>Export the table to Excel</li>
	<li>Preview a listing by clicking its Name. From here, you can publish pending listings using the Administration tab.</li>
	<li>See the listing owner&#39;s profile by clicking their name.</li>
	<li>Read the last entry in the listing&#39;s change log (entered in the comments field).</li>
	<li>Feature a listing by checking it. Also, to stop using a listing as a Featured Listing on the Search and Discovery Page, uncheck it.</li>
	<li>Edit, review feedback comments, view or delete a listing from the Actions column.</li>
</ul>

<h3>Customize the Listing Management Table View</h3>
<p>You can hide some columns on the Listing Management Table. To customize your table view:</p>

<img border="0" alt="Listing Management Display/Hide Columns Setting" src="Doc_images/ListingManagementTable_SettingsGear.png" />

<ol>
	<li>Click the button located immediately left of the search box (shown in the figure above).</li>
	<li>To make a column appear on the table, check the box next to its name on the list. To hide a column, uncheck the box next to its name: </li>
</ol>

<img border="0" alt="Listing Management Display/Hide Columns Setting" src="Doc_images/ListingManagementTable_SettingsWindow.png" />
<p><i>Note: If you only want to change the immediate appearance of the table, you're done. To save the column change for future viewing, click <b>Save Grid State</b>. The menu will disappear and column changes should remain after you close or refresh the page.</i></p>



	</div>
	);
	}
});
