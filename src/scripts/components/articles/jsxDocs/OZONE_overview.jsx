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

<h1>Getting Started with OZONE</h1>
<p>OZONE is an ecosystem of software that enables users from numerous organizations to share data and manipulate it solely within browser memory. It is comprised of three interlocking components: the Center, HUD, and Webtop. Each has distinct features but also interlocking components.</p>

<iframe width="560"
  height="315"
  src={HELP_VIDEOS['Three Components of AppsMall']}
  frameBorder="0" allowfullscreen title="TUTORIAL 2 - Three Components">
</iframe>
<br /><br />


<h3><Link to="article" params={{
  part: 'global',
  article: 'HUD_overview',
  title: 'Understanding HUD'
}}>HUD</Link></h3>
<p>The HUD is the user's personalized homepage for organizing favorite apps discovered through the Center. Users are able to keep all of their favorite apps in one location, group apps into folders, share folders with other users, and choose to launch apps into the Webtop or a seperate browser tab.</p>
<img alt="HUD Home Screen" src="Doc_images/HUD_home.png" title="HUD Home Screen" />

<br />
<h3><Link to="article" params={{
  part: 'global',
  article: 'Center_overview',
  title: 'Understanding Center'
}}>Center</Link></h3>
<p>Center is the application discovery component where users can leverage multiple search methods to search for, rate and review, bookmark, launch, and submit applications.</p>
<img alt="Center Home Screen" src="Doc_images/center-search-and-discovery-page.png"  title="Center Home Screen" />

<br />
<h3><Link to="article" params={{
  part: 'global',
  article: 'Webtop_overview',
  title: 'Understanding Webtop'
}}>Webtop</Link></h3>
<p>The Webtop is a virtual desktop within the browser where users can launch multiple applications from their bookmarks and organize them into customized dashboards.</p>
<img alt="Webtop Home Screen" src="Doc_images/Webtop.png" title="Webtop Home Screen" />

<br />
<h3>Inter-Widget Communications (IWC)</h3>
<p>The technology that web applications and widgets use to communicate with each other within a browser without sending data back to their respective servers. Applications that utilize IWC can share data and services then use the data and services offered by others to enrich their own user experience.</p>


	</div>
	);
	}
});
