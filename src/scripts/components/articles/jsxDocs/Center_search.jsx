// Automatically Generated Module
var React = require('react');
var Router = require('react-router');
var Reflux = require('reflux');
var { Route, RouteHandler, Link } = Router;
var { HELP_VIDEOS } = require('ozp-react-commons/OzoneConfig');

module.exports = React.createClass({
	mixins: [ Router.State, Reflux.ListenerMixin],
	contextTypes: { router: React.PropTypes.func },

render: function(){return ( 
<div>

<h1>Search for Listings</h1>

<iframe width="560"
  height="315"
  src={HELP_VIDEOS['Search for Apps']}
  frameBorder="0" allowfullscreen title="TUTORIAL 3 - Search for Apps">
</iframe>
<br /><br />


<p>There are a number of ways to find listings in Center. Remember that only Approved, Enabled listings appear in search results. This section explains Center's searching tools:</p>
<p><img alt="Center Search Tools" src="Doc_images/SearchingTools.png" title="Center Search Tools" /></p>

<br />
<h3>Search Tools</h3>

<p><b>Search box</b> - The search box is located at the top of the Center. When you enter a search term, the system looks for your term in the listing name, description, tags, etc.</p>

<p><b>Categories</b> - Groupings of listings determined by the owner or stewards, a listing can be associated with multiple categories. Click a category on the left panel and only listings associated with that category will appear on the page. If you select multiple categories, only listings associated with all of the selected categories will appear.</p>

<p><b>Types</b> - Located at the upper-right side of the Center, click the checkbox beside the Types you want to display. Only the listings of the selected Types will appear in the filtered list. Owners determine listing Type.</p>

<p>
<ul>
	<li><b>Widget:</b> A lightweight web application, usually for a singular task or purpose, that is formatted to fit and operate within an iFrame.</li>
	<li><b>Web Application:</b> A web-based tool or service that runs in the browser and does not need to be downloaded.</li>
	<li><b>Desktop App:</b> A listing that points a user to a specific webpage, where they can download a specific application to their desktop environment.</li>
	<li><b>Web Services:</b> A software system designed to support interoperable machine-to-machine interaction over a network.</li>
	<li><b>Code Library</b> A reusable library of code aimed at application developers.</li>
</ul>
</p>

<p><b>Organizations</b> - You can filter by organization using this field which is located on the upper-right side of the Center.</p>


	</div>
	);
	}
});
