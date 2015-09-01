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

<h1>Sorry, we can't find that article</h1>

<p>The article may have been moved, or the link you followed may have been mistyped. Try starting at the <a href="#/">Help home screen</a> to access the content you are looking for.</p>

<h3>Or try one of these articles:</h3>
<ul>
	<li><Link to="article" params={{
  part: 'global',
  article: 'OZONE_overview',
  title: 'Getting Started with Ozone'
}}>Getting Started with OZONE</Link></li>
	<li><Link to="article" params={{
  part: 'global',
  article: 'GlobalToolbar_overview',
  title: 'Using the Global Toolbar'
}}>Using the Global Toolbar</Link></li>
	<li><Link to="article" params={{
  part: 'global',
  article: 'Webtop_overview',
  title: 'Understanding Webtop'
}}>Understanding Webtop</Link></li>
	<li><Link to="article" params={{
  part: 'global',
  article: 'Center_overview',
  title: 'Understanding Center'
}}>Understanding Center</Link></li>
	<li><Link to="article" params={{
  part: 'global',
  article: 'HUD_overview',
  title: 'Understanding HUD'
}}>Understanding HUD</Link></li>
</ul>


	</div>
	);
	}
});
