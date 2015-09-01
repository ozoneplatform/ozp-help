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

<h1>Viewing Listings</h1>

<h3>Definitions</h3>

<p><b>Listing</b> - Any software application or component that a user enters into Center is called a <i>listing.</i> Like apps on smart phones, listings in Center contain various types of Web content.</p>

<p>From Center, you can save listings to your HUD or open them in a new browser tab.</p>

<br />
<h3>Listing Short View</h3>

<p>On the Search and Discovery Page, you see each listing's icon, name, rating and organizational association. Hover over the listing to display its Short View.</p>

<p><img alt="Listing Short View" src="Doc_images/Listing-Short-View.png" height="236px" width="624px" title="Listing Short View" /><br />
<b>Listing Short View</b></p>

<p>From the Listing Short View you can read a short description, open or bookmark a listing:</p>

<p><img alt="Listing Actions" src="Doc_images/listing-actions.png" height="170px" width="324px" title="Listing Actions" /><br />
<b>Listing Actions</b></p>

<br />
<h3>Listing Detailed View</h3>

<p>While the Listing Short View displays basic information, its Detailed View provides much more information. Click inside the view to open the Detailed Listing View. Each tab is described in this section:</p>

<p><img alt="Listing Detailed View" src="Doc_images/Listing-detailed-view.png" height="372px" width="684px" title="Listing Detailed View" /><br />
<b>Listing Detailed View</b></p>

<p>The listing's header information and actions appear on each tab. Its header includes: listing icon, name, rating, organizational affiliation and actions such as opening, bookmarking and editing:</p>

<p><img alt="Listing heading" src="Doc_images/Listing-heading.png" height="127px" width="624px" title="Listing heading" /><br />
<b>Listing Heading</b></p>

<p>Basic listing information:</p>

<p>
<img alt="Left-side details of the listing header" src="Doc_images/Left-side-listing-view-header.png" height="184px" width="244px" title="Left-side details of the listing header" /><br /><b>Left-side Detailed Listing View Header</b></p>

<p>At the top of the listing's Detailed View, you will see the listing's:</p>
<ul>
	<li><b>Icon</b></li>
	<li><b>Name</b></li>
	<li><b>Rating</b></li>
	<li><b>Organizational association</b></li>
</ul>

<p>
<img alt="Right-side detailed listing view header" src="Doc_images/Right-side-detailed-listing-view-header.png" height="147px" width="214px" title="Right-side detailed listing view header" /><br /><b>Right-side Detailed Listing View Header</b></p>

<p>The right-side of the listing's Detailed View houses three actions:</p>

<ul>
	<li><b>Open in a new tab</b></li>
	<li><b>Add to your HUD</b></li>
	<li><b>Edit</b> (if you are the listing owner)</li>
	<li><b>Close</b></li>
</ul>


<br />
<h3>Overview Tab</h3>

<p>When you open the listing's Detailed View you'll see the Overview tab which includes screenshots and the long description.</p>

<p><img alt="Listing Detailed View" src="Doc_images/Listing-detailed-view.png" height="248px" width="456px" title="Listing Detailed View" /><br /><b>Overview Tab on the Listing's Detailed View</b></p>

<p>The Overview tab displays the listing's screenshots and long description. Here's what you should know about them:</p>

<p><b>Screenshots</b> - If there are more than one, use the arrows on the left or right to scroll. Click the screenshot for a larger view of it. Close the expanded view using the <b>x</b> in the upper-right corner. Scroll from one image to the next using the arrows on the right and left.</p>

<p><b>Long Description</b> - This description can provide more content than the one displayed on the Short View. The listing owner enters the description and the owner or a content steward can edit it.</p>

<br />
<h3>Reviews Tab</h3>

<p>Click the Reviews tab to add a comment or rating. Also, you can read other users' comments and see how many users rated the listing. For instructions about writing or editing a review see <Link to="article" params={{
  part: 'global',
  article: 'Center_listings_reviews',
  title: 'Review a Listing'
}}>Review a Listing</Link>.</p>

<p><img alt="Review tab on detailed view" src="Doc_images/Review-tab-on-listings-detailed-view.png" height="286px" width="624px" title="Review tab on detailed view" /><br />
<b>Review Tab on the Listing's Detailed View</b></p>

<br />
<h3>Details Tab</h3>

<p>The Details tab displays important information about the listing. The owner and stewards can edit it from the Create/Edit page. Descriptions of each field are included on the <Link to="article" params={{
  part: 'global',
  article: 'Center_listings_create',
  title: 'Create a Listing'
}}>Create a Listing</Link> page.</p>

<p><img alt="Details tab on listing's detailed view" src="Doc_images/Details-tab-detailed-listing-view.png" height="337px" width="624px" title="Details tab on listing's detailed view" /><br />
<b>Details Tab on the Listing's Detailed View</b></p>

<br />
<h3>Resources Tab</h3>

<p>The Resources tab links to information and people that support the app. Descriptions of each field are included on the <Link to="article" params={{
  part: 'global',
  article: 'Center_listings_create',
  title: 'Create a Listing'
}}>Create a Listing</Link> page.</p>

<p><img alt="Resources tab on the listing details view" src="Doc_images/resources-tab-listing-details-view.png" height="398px" width="747px" title="Resources tab on the listing details view" /><br />
<b>Resources Tab on the Listing's Detailed View</b></p>

<br />
<h3>Administration Tab</h3>

<p>The Administration tab only appears if you are the listing owner or a content steward. From this tab, stewards approve or reject listings; make them visible or hide them from Center and decide if the listing will be featured in the banner at the top of the Discovery Page.</p>

<p><img alt="Admin tab on the listing details view" src="Doc_images/admin-tab-listing-details-view.png" height="334px" width="624px" title="Admin tab on the listing details view" /><br />
<b>Administration Tab on the Listing's Detailed View</b></p>


	</div>
	);
	}
});
