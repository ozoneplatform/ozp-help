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

<h1>Approve or Return a Listing as a Center Steward</h1>

<p>Before users can find and bookmark listings from Center, an org steward and Center steward must approve the listings as described in the following sections. After an org steward approves a listing, the Center steward must:</p>

<ol>
	<li>Click the Needs action filter. To do this, click the drop-down Main Menu and select Listing Management. Click Needs action from the state panel on the left:<br />
	<img alt="Needs Action Link on the Listing Management Page" src="Doc_images/NeedsAction_ListingManagementPage.png" title="Needs Action Link on the Listing Management Page" /></li>
	<li>Listings that need approval appear on the Needs action page. Click a listing to open its Detailed View.</li>
	<li>After reviewing the listing, click the Administration tab.</li>
	<li>On the left-side, click Approve or Return to Owner:<br /> 
    <img border="0" src="Doc_images/mpAdminTab_Approve_Reject.png" alt="Approve/Return Setting on Admin Tab"/>
	<ul>
		<li>If you approve the listing, the listing is automatically Enabled and it will appear in search results and be available to bookmark.</li>
		<li>If you click Return to Owner, type instructions explaining how the user should update the listing before resubmitting it. Then, click Return to Owner. The listing will move out of your queue until it is resubmitted and approved by an org steward.</li>
	</ul>
	</li>
	<li>As a Center steward, you have two more decisions:
	<ul>
		<li><b>Center Enabled</b> - Makes the listing visible to all users, i.e., it appears on the Search and Discovery Page and is searchable.</li>
		<li><b>Featured</b> - Activate the Featured button to add the listing to the group of Featured Listings that scroll across the top of the Search and Discovery Page, see <Link to="article" params={{
  part: 'global',
  article: 'Center_steward_featureFlag',
  title: 'Feature a Listing'
}}>Feature a Listing</Link>.<br />
		<img alt="Enabled and Featured Buttons on a Listing's Detailed Page" src="Doc_images/AdminTab_EnableFeatured.png" title="Enabled and Feature Buttons on a Listing's Detailed View" /><br/></li>
	</ul>
	</li>
</ol>


	</div>
	);
	}
});
