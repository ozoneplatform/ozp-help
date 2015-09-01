// Automatically Generated Module
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
module.exports = React.createClass({
	mixins: [ Router.State, Reflux.ListenerMixin],
	contextTypes: { router: React.PropTypes.func },
	
render: function(){return ( 
<div>

<h1>Feature a Listing</h1>

<p>Center stewards control Featured Listings on the Search and Discovery Page; only they can make a listing featured. If you are a listing owner, contact your Org Steward regarding your group's process to feature a listing. To add a listing to the group of Featured Listings:</p>

<ol>
	<li>Open a listing's Detailed View by clicking the listing icon.</li>
	<li>Click the Administration tab.</li>
	<li>Click the Featured control to active it:<br />
	<img alt="Enabled and Featured Buttons on a Listing's Detailed Page" src="Doc_images/AdminTab_EnableFeatured.png" title="Enabled and Feature Buttons on a Listing's Detailed View" /></li>
	<li>When the Featured control is activated, the listing appears in the Featured section of the Search and Discovery Page:<br />
	<img border="0" height="798" src="Doc_images/FeaturedListing_SearchDiscoverPage.png" alt="Example of a Featured Listing on the Search and Discovery Page" width="1260" /></li>
</ol>


	</div>
	);
	}
});
