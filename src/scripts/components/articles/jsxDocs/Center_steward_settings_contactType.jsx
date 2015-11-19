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

<h1>Manage Contact Types</h1>

<p>Contact Types identify designated contact people. The information appears on the Resources tab of the listing's Detailed View:</p>

<p><img alt="Contact Type Example" src="Doc_images/ContactType.png"  title="Contact Type Example" /></p>


<h3>Access the contact type settings:</h3>

<ol>
	<li>Click <img alt="Main Menu" src="Doc_images/Main_menu_icon.png"  /> on the right-side of the Global Toolbar.</li>
	<li>Select Center Settings<br />
	<img alt="Center Settings Link on Main Menu" src="Doc_images/centerSettingsLink_MainMenu.png"  title="Center Settings Link on Main Menu" /></li>
	<li>The Center Settings page will open to the Categories tab, click the Contact Type tab next to it.</li>
</ol>

<h2>Create a Contact Type:</h2>

<ol>
	<li>Click the Contact Types tab on the Center Settings page.</li>
	<li>Click Add New at the top of the table:<br />
	<img alt="Add new contact type" src="Doc_images/AddNewContactType.png"  title="Add new contact type" /></li>
	<li>The Create Contact Type window opens. Give the contact type a Title and check Required if the field is required for listing submission.</li>
	<li>Click Save.
	<ul>
		<li>The contact type will appear on the list of contact types on the Center Settings page.</li>
		<li>It will be a drop-down choice on the Contacts section of the Listing Create/Edit Form.</li>
		<li>If the contact type is required, it must be populated when anyone edits an existing listing.</li>
	</ul>
	</li>
</ol>

<h2>Edit a contact type:</h2>

<ol>
	<li>From the Contact Types tab on the Center Settings page, click the contact type that you want to edit.</li>
	<li>The Edit button will become active, click it.</li>
	<li>The Edit Contact Type window will open, make your change and click Save.</li>
	<li>The change will appear on the list of contact types on the Center Settings page and on the Listing Create/Edit Form.</li>
</ol>

<h2>Delete a contact type:</h2>

<ol>
	<li>From the Contact Types tab on the Center Settings page, click the contact type that you want to delete.</li>
	<li>The Delete button will become active, click it.</li>
	<li>A confirmation window appears, click Delete.</li>
	<li>The contact type will be removed from the list of contact types on the Center Settings page and on the Listing Create/Edit Form.</li>
</ol>


	</div>
	);
	}
});
