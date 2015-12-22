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

<h1>Edit a Listing</h1>

<p>Only listing owners and content stewards can edit listings. Listing owners can only edit their own app listings.<br />
To edit a listing:</p>

<ol>
	<li>Click the listing icon to open the Listing Detailed View.</li>
	<li>From the top-right, click <i className="icon-pencil"></i>, this will open the Create/Edit Form.</li>
	<li>Update the listing, then, click <i className="icon-save"></i> to save. The save icon switches to a green checkmark after saving. The listing will update in the system.</li>
</ol>


	</div>
	);
	}
});
