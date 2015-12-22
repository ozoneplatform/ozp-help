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

<h1>Manage Intents</h1>

<p>Intents are the instructions for carrying out a listing's intentions. Intents comprise an Action (graph, view, edit, etc.), a Data Type (HTML, text, image, etc.) and a Send/Receive request. You can associate this action and data type with an icon and label. However, this information is only metadata used as a placeholder. <mark>For any intent to function, a developer has to code the actual function into the listing.</mark></p>

<p>From the Intents tab on the Center Settings page, you can create an intent placeholder that will appear on the Listing Create/Edit Form.</p>

<h3>Access the Center Settings page:</h3>

<ol>
	<li>Click <i className="icon-menu"></i> on the right-side of the Global Toolbar.</li>
	<li>Select Center Settings<br />
	<img alt="Center Settings Link on Main Menu" src="Doc_images/centerSettingsLink_MainMenu.png"  title="Center Settings Link on Main Menu" /></li>
	<li>The Center Settings page will open to the Categories tab, click the Intents tab to configure intent placeholders.</li>
</ol>

<h2>Create an Intent placeholder:</h2>

<ol>
	<li>Click the Intent tab on the Center Settings page.</li>
	<li>Click Add New at the top of the table.</li>
	<li>The Create Intent window opens. Populate the following fields:
	<ul >
		<li><b>Label</b> - Explain what the intent does.</li>
		<li><b>Action</b> - Describe the intent in 64 characters.</li>
		<li><b>Type</b> - Describe the intent in 124 characters (62 characters before the slash, 62 characters after it).<br />
		Ex: application/json, application/custom-type, etc.</li>
		<li><b>Icon</b> - Attach an image that will appear when anyone uses the intent. Think of this like the icon that appears on a smart phone when you decide to open an address and the system prompts you to open that address in a browser or a mapping app.</li>
	</ul>
	</li>
	<li>Click Save.
	<ul >
		<li>The intent will appear on the list of intents on the Center Settings page.</li>
		<li>It will be a drop-down choice in the Intents section of the Listing Create/Edit Form.</li>
	</ul>
	</li>
</ol>

<h2>Edit an intent Label or Icon:</h2>

<ol>
	<li>From the Intents tab on the Center Settings page, click the intent that you want to edit.</li>
	<li>The Edit button will become active, click it.</li>
	<li>The Edit Intent window will open, make your change and click Save.<br />
	<i>Note: You cannot edit the intent Action and Type after it is created. </i></li>
</ol>

<p>The change will appear on the list of Intents on the Center Settings page.</p>

<h2>Delete an Intent:</h2>

<ol>
	<li>From the Intents tab on the Center Settings page, click the Intent that you want to delete.</li>
	<li>The Delete button will become active, click it.</li>
	<li>A confirmation window appears, click Delete.</li>
</ol>

<p>The intent will be removed from the list of intents on the Center Settings page and on the Listing Create/Edit Form.</p>


	</div>
	);
	}
});
