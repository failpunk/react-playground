import React from 'react';
import Router from 'react-router';
import {Route, DefaultRoute, NotFoundRoute, RouteHandler, Link, State} from 'react-router';

import NavState from './NavState.jsx';
import DashboardSettings from './settings/Settings.jsx';
import Sidebar from './Sidebar.jsx';
import DashboardProfile from './profile/Profile.jsx';
import DashboardMessages from './messages/Messages.jsx';
import AccountSettingsContainer from './settings/AccountSettingsContainer.jsx';
import ChangePassword from './settings/password/ChangePassword.jsx';
import ChangeEmail from './settings/email/ChangeEmail.jsx';

let Dashboard = React.createClass({

  render() {
    return (
      <div className="row">
        <div className="col-lg-3">
          <Sidebar navstate={NavState.current}></Sidebar>
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

Router.run(routes, function (Handler, State) {
  NavState.current = State;

  React.render(
    <Handler/>,
    document.getElementById('content')
  );
});