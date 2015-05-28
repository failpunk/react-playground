var React = require('react');
var Router = require('react-router');
var {Route, DefaultRoute, NotFoundRoute, RouteHandler, Link} = Router;

var AccountSettingsContainer = require('./account/AccountSettingsContainer.jsx');

var Account = React.createClass({
  render: function () {
    return (
      <div className="row">
        <div className="col-lg-8">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

var routes = (
  <Route handler={Account} path="/react-playground/web/">
    <DefaultRoute handler={AccountSettingsContainer}/>
  </Route>
);

Router.run(routes, Router.HistoryLocation, function (Handler) {
  React.render(
    <Handler/>,
    document.getElementById('accountSettings')
  );
});