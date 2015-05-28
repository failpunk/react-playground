var React = require('react');
var Router = require('react-router');
var {Route, DefaultRoute, NotFoundRoute, RouteHandler, Link} = Router;

var AccountSettingsContainer = require('./account/AccountSettingsContainer.jsx');
var ChangePassword = require('./account/ChangePassword.jsx');

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
  <Route handler={Account} path="/">
    <DefaultRoute handler={AccountSettingsContainer}/>
      <Route name="password" handler={ChangePassword}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(
    <Handler/>,
    document.getElementById('accountSettings')
  );
});