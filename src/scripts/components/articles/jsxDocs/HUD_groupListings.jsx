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

<h1>Group Bookmarked Listings by Folder</h1>

<p>Listings in the HUD can be organized into folders.</p>

<p><img alt="Folders in HUD" src="Doc_images/folders_in_HUD.png"  title="Folders in HUD" /></p>

<h2>Create a Folder</h2>
<p>To make a folder:</p>

<ol>
	<li>Click a listing and drag it over another listing. Release the listing to create a folder.</li>
	<li>Drag more listings into the folder to add them to it.</li>
</ol>

<h3>Name Your Folders</h3>

<p>As shown in the image above, your first folder defaults to the name "New Folder." To change a folder name:</p>

<ol>
	<li>Double-click the folder name, which causes the textbox to highlight.</li>
	<li>Type the new name in the textbox.</li>
	<li>Click anywhere else on the screen; this action saves the new folder name.</li>
</ol>


<h2>Remove Listings from a Folder</h2>

<p>To remove a listing from a folder:</p>

<ol>
	<li>Click once on the folder to open it.</li>
	<li>Click the listing banner and drag it outside of the folder window. Once you release your mouse it will disappera from the folder but will remain within your HUD.</li>
	<li>When you close the folder (click the X), you will see the listing in your HUD--separate from the folder as shown by the MusicBox listing in the image above.</li>
</ol>

<h3>Open or Share Your Folders</h3>
<p><img alt="Folders in HUD" src="Doc_images/folders_in_HUD_share.png"  title="Share or Open Folders from HUD" /></p>

<p><b>To open</b> all the grouped listings in a new dashboard:</p>

<ol>
	<li>Click once on the folder to open it.</li>
	<li>Click <b>Open all in new dashboard</b>.</li>
	<li>The listing will open in a new dashboard on your Webtop.</li>
</ol>

<p><b>To share</b> your folder:</p>

<ol>
	<li>Click once on the folder to open it.</li>
	<li>Click <b>Get shareable Link</b>, the link displays a long URL.</li>
	<li>Copy the URL and share it or paste it into a new browser window. All the listings from the folder will open in a new dashboard in Webtop.</li>
</ol>

<h2>Delete a Folder</h2>

<p>To remove a folder from your HUD:</p>

<ol>
	<li>Click once on the folder to open it.</li>
	<li>Click the listing banner and drag it outside of the folder window. Once you release your mouse it will disappera from the folder but will remain within your HUD.</li>
	<li>When the last listing leaves the folder, the folder disappears. You will see the listings in your HUD but the folder will be gone.</li>
</ol>


	</div>
	);
	}
});
