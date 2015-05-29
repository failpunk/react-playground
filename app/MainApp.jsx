import React from 'react';
import Router from 'react-router';
import {Route, DefaultRoute, NotFoundRoute, RouteHandler, Link, State} from 'react-router';

import NavState from './dashboard/NavState.jsx';
import Dashboard from './dashboard/Dashboard.jsx';
import DashboardSettings from './dashboard/settings/Settings.jsx';
import DashboardProfile from './dashboard/profile/Profile.jsx';
import DashboardMessages from './dashboard/messages/Messages.jsx';
import AccountSettingsContainer from './dashboard/settings/AccountSettingsContainer.jsx';
import ChangePassword from './dashboard/settings/password/ChangePassword.jsx';
import ChangeEmail from './dashboard/settings/email/ChangeEmail.jsx';

let routes = (
  <Route name="dashboard" handler={Dashboard} path="/">

    <DefaultRoute handler={DashboardSettings}/>

    <Route name="settings" handler={DashboardSettings}>
      <DefaultRoute handler={AccountSettingsContainer}/>
      <Route name="password" handler={ChangePassword}/>
      <Route name="email" handler={ChangeEmail}/>
    </Route>

    <Route name="profile" handler={DashboardProfile}/>

    <Route name="messages" handler={DashboardMessages}/>
  </Route>
);

Router.run(routes, function (Handler, State) {
  NavState.current = State;

  React.render(
    <Handler/>,
    document.getElementById('content')
  );
});