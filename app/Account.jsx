import React from 'react';
import Router from 'react-router';
import {Route, DefaultRoute, NotFoundRoute, RouteHandler, Link} from 'react-router';

import AccountSettingsContainer from './settings/AccountSettingsContainer.jsx';
import ChangePassword from './settings/password/ChangePassword.jsx';
import ChangeEmail from './settings/email/ChangeEmail.jsx';

let Account = React.createClass({
  render () {
    return (
      <div className="row">
        <div className="col-lg-8">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

let routes = (
  <Route name="settings" handler={Account} path="/">
    <DefaultRoute handler={AccountSettingsContainer}/>
      <Route name="password" handler={ChangePassword}/>
      <Route name="email" handler={ChangeEmail}/>
  </Route>
);

Router.run(routes, function (Handler) {
  React.render(
    <Handler/>,
    document.getElementById('accountSettings')
  );
});