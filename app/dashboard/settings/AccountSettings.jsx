import React from 'react';
import Router from 'react-router';
import { DefaultRoute, Link, Route, RouteHandler } from 'react-router';
import Moment from 'moment';

import AccountSetting from './AccountSetting.jsx';

let AccountSettings = React.createClass({
  render () {
    return (
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="row form-account">

              <div className="col-md-6">

                <AccountSetting heading={'Username'}>
                  <span>{this.props.user.username}</span>
                </AccountSetting>

                <AccountSetting heading={'Password'}>
                  <span>********</span>
                  <Link to="password">Modify</Link>
                </AccountSetting>

                <AccountSetting heading={'Email Preferences'}>
                  <span>{this.props.user.email}</span>
                  <Link to="email">Modify</Link>
                </AccountSetting>

              </div>

              <div className="col-md-6">

                <AccountSetting heading={'Account Type'}>
                  <span>Premium Membership ending on {Moment(this.props.user.meta.premiumDate).format('MMM Do, YYYY')}</span>
                  <p>
                    <a href="#">Modify Account</a>
                  </p>
                </AccountSetting>

                <AccountSetting heading={'Billing Information'}>
                  <span>Credit Card ending in 1111</span><a href="#">modify</a>
                </AccountSetting>

              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

export default AccountSettings;