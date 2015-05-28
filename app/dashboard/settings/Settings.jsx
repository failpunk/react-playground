import React from 'react';
import Router from 'react-router';
import {Route, DefaultRoute, NotFoundRoute, RouteHandler, Link} from 'react-router';

import AccountSettingsContainer from './AccountSettingsContainer.jsx';
import ChangePassword from './password/ChangePassword.jsx';
import ChangeEmail from './email/ChangeEmail.jsx';

let Settings = React.createClass({
  render () {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }
});

export default Settings;