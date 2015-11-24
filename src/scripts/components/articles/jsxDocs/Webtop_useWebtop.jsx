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

<h1>Using Webtop</h1>

<iframe width="560"
  height="315"
  src="https://www.youtube.com/embed/vnXb1S6l_jE"
  frameBorder="0" allowfullscreen title="TUTORIAL 7 - Dashboard Set Up">
</iframe>
<br /><br />

<p>You access Webtop from the Global Toolbar. Click the <img alt="Webtop" src="Doc_images/Webtop_icon.png"  title="Webtop icon on the Global Toolbar" /> icon on the left side of the Global Toolbar:</p>

<p><img alt="Webtop access from the toolbar" src="Doc_images/webtop-access--from-toolbar.png"  title="Webtop access from the toolbar" /><br /></p>

<p>This graphic explains how you do your work in Webtop. To learn how to add listings, create dashboards and configure your screen see <Link to="article" params={{
  part: 'global',
  article: 'Webtop_addListing',
  title: 'Add Listings to a Dashboard'
}}>Add Listings to Webtop</Link>, <Link to="article" params={{
  part: 'global',
  article: 'Webtop_dashboards_create',
  title: 'Create a Dashboard'
}}>Create a Dashboard</Link> and <Link to="article" params={{
  part: 'global',
  article: 'Webtop_lower_toolbar',
  title: 'Navigate with the Webtop Toolbar'
}}>Navigate with the Webtop Toolbar</Link>. </p>

<p><br />
<img alt="Overview of webtop functions." src="Doc_images/WebtopOverview.png"  title="Overview of webtop functions." /><br />
<b>Webtop Overview</b><br />
<br />
</p>

	<h1>Using Webtop</h1>

	<iframe width="560"
	  height="315"
	  src={HELP_VIDEOS['Dashboard Set Up']}
	  frameBorder="0" allowfullscreen title="TUTORIAL 7 - Dashboard Set Up">
	</iframe>
	<br /><br />

	<p>You access Webtop from the Global Toolbar. Click the <img alt="Webtop" src="Doc_images/Webtop_icon.png"  title="Webtop icon on the Global Toolbar" /> icon on the left side of the Global Toolbar:</p>

	<p><img alt="Webtop access from the toolbar" src="Doc_images/webtop-access--from-toolbar.png"  title="Webtop access from the toolbar" /><br /></p>

	<p>This graphic explains how you do your work in Webtop. To learn how to add listings, create dashboards and configure your screen see <Link to="article" params={{
	  part: 'global',
	  article: 'Webtop_addListing',
	  title: 'Add Listings to a Dashboard'
	}}>Add Listings to Webtop</Link>, <Link to="article" params={{
	  part: 'global',
	  article: 'Webtop_dashboards_create',
	  title: 'Create a Dashboard'
	}}>Create a Dashboard</Link> and <Link to="article" params={{
	  part: 'global',
	  article: 'Webtop_lower_toolbar',
	  title: 'Navigate with the Webtop Toolbar'
	}}>Navigate with the Webtop Toolbar</Link>. </p>

	<p><br />
	<img alt="Overview of webtop functions." src="Doc_images/WebtopOverview.png"  title="Overview of webtop functions." /><br />
	<b>Webtop Overview</b><br />
	<br />
	</p>

	</div>
	);
	}
});
