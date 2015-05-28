import React from 'react';
import Router from 'react-router';
import {Route, DefaultRoute, NotFoundRoute, RouteHandler, Link} from 'react-router';

import DashboardSettings from './settings/Settings.jsx';
import DashboardProfile from './profile/Profile.jsx';
import DashboardMessages from './messages/Messages.jsx';
import AccountSettingsContainer from './settings/AccountSettingsContainer.jsx';
import ChangePassword from './settings/password/ChangePassword.jsx';
import ChangeEmail from './settings/email/ChangeEmail.jsx';

let Sidebar = React.createClass({
  render() {
    return (
      <ul>
        <li><Link to="settings">Account Settings</Link></li>
        <li><Link to="profile">Profile</Link></li>
        <li><Link to="messages">Message</Link></li>
      </ul>
    );
  }
});

let Dashboard = React.createClass({
  render() {
    return (
      <div className="row">
        <div className="col-lg-3">
          <Sidebar></Sidebar>
        </div>
        <div className="col-lg-8">
          <RouteHandler/>
        </div>
      </div>
    );
  }
});

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

Router.run(routes, function (Handler) {
  React.render(
    <Handler/>,
    document.getElementById('content')
  );
});