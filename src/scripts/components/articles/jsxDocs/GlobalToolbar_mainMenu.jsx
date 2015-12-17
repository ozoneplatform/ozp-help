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

<h1>Navigate with the Menu</h1>

<p>The Menu is identified by three parallel, stacked, horizontal lines on the right side of the Toolbar: <img alt="Main Menu icon" src="Doc_images/Main_menu_icon.png"  /></p>

<p>From the menu, you can access your <b>Profile</b>, update <b>Settings</b> and <b>create or manage listings</b>. The menu is described below:<br /></p>

<p><img alt="Main Menu options" src="Doc_images/Main_Menu_drop-down_user.png"  title="Main Menu Options" /></p>



<h3>Personalize</h3>

<p>Personalize contains links to your personalized, account functions.</p>

<ul>
	<li><b>Bookmarks</b> returns to the HUD which displays all listings linked to your account.</li>
	<li><b>Profile</b> opens a window with your account information:
	<ul>
		<li>Name</li>
		<li>Username</li>
		<li>Email</li>
		<li>A list of listings you own. Clicking a listing opens its Detailed Listing View in Center.<br />
		<i>Note: Owning a listing means you are responsible for it and probably created it. To see bookmarked listings that you discovered in the Center, click Bookmarks to open your HUD.</i></li>
	</ul>
	</li>
	<li><b>Settings</b> ask your preference for the Default Application Launch. By default, applications launch in a new tab. If you change the default setting to Open in Webtop all listings will launch into Webtop when you double-click them in the HUD.<br />
	<i>Note: The "Launch in Webtop" Setting does not appear when you open your Settings in Webtop.</i></li>
</ul>

<h3>Create</h3>

<p>The Create section relates to the development of applications and their submission to Center.</p>

<ul>
	<li><b>Submit a Listing</b> takes you to the <Link to="article" params={{
  part: 'global',
  article: 'Center_listings_create',
  title: 'Create a Listing'
}}>Listing Create/Edit Form</Link>. Completing the form allows you to submit listings to Center.</li>
	<li><b>Developer Resources</b> opens a website selected by a Center steward. It is intended to provide a resource that will help develop applications.</li>
</ul>

<h3>Manage</h3>

<p>As a user, the Manage section displays information about listings you own.  Stewards will see additional settings related to administering listing in their organization; Center stewards can access system settings from this drop-down.</p>

<p><img alt="Listing Management Page" src="Doc_images/ListingManagementPage.png"/></p>

<p>See <Link to="article" params={{
  part: 'global',
  article: 'Center_listingManagementPage_user',
  title: 'Manage your Created Listings'
}}>Manage your Created Listings</Link> for more information.</p>

<h3>Contact</h3>

<p>Contact opens a portal to several feedback and help resources.</p>
<p><img alt="Contact Window" src="Doc_images/ContactPortal.png"/></p>
<ul>
	<li><b>Contact Help Desk:</b> Navigates to ticketing system where you can submit an issue for help desk support.</li>
	<li><b>Submit a Request:</b> Allows you to suggest new features through the community request site.</li>
	<li><b>Give Feedback:</b> Opens an email for you to communicate your comments directly.</li>
	<li><b>Connect With Us:</b> Links to popular social media feeds about OZONE.</li>
</ul>


	</div>
	);
	}
});
