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

<h1>Manage your Created Listings</h1>

<p>The Listing Management Page tells users where their listings are in the approval process. To access this page, click the drop-down Menu on the right side of the Toolbar and select Listing Management:</p>

<p><img alt="Link to Listing Management Page from Global Toolbar" src="Doc_images/listingManagementLink.png" title="Listing Management Page" /></p>

<p>As a user, the Manage section displays information about listings you own.</p>

<p><img alt="Listing Management Page" src="Doc_images/ListingManagementPage.png"   title="Listing Management Page" /></p>

<p>The Listing Management page displays different information for different users. The following sections explain each field as it relates to a user.</p>

<p>As a <b>user</b>, you see all the listings that you own (including active, disabled and draft listings); the Recent Activity tab describes changes to listings you own; and the State panel on the left side provides an overview on the status of your listings:</p>

<ul>
	<li><b>All</b> - Listings you own in the system</li>
	<li><b>Published</b> - Listings that are approved by Center and organizational stewards in the system (this number includes listings that are Disabled)</li>
	<li><b>Needs action</b> - Listings returned from a steward. To see the reason a listing was returned, click the arrow in the upper-right corner of the listing and select Read Feedback:<br />
	<img alt="Listing Action drop-down" src="Doc_images/ListingAction_drop-down.png"   title="Listing Action drop-down" /></li>
	<li><b>Pending</b> - Listings waiting for approval from a steward</li>
	<li><b>Draft</b> - Listings that you have not yet submitted for approval</li>
</ul>


	</div>
	);
	}
});
