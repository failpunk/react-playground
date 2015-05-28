import React from 'react';
import Router from 'react-router';
import {Link, Navigation} from 'react-router';

let ChangePasswordForm = React.createClass({

  mixins: [Navigation],

  backToSettings: function() {
    this.transitionTo('settings');
  },

  render () {
    return (
      <form action="/account/change-password" method="post" id="changePassword" noValidate="novalidate">
        <div className="form-account">
          <div className="form-group">
            <label htmlFor="oldpassword" className="h4">Old Password</label>
            <input type="password" id="oldpassword" className="txt form-control" placeholder="Old Password" autoComplete="off" />
          </div>
          <div className="form-group">
            <label htmlFor="password" className="h4">New Password</label>
            <input type="password" id="password" className="txt form-control" placeholder="New Password" />
          </div>
          <div className="form-group">
            <label htmlFor="passwordConfirm" className="h4">Confirm New Password</label>
            <input type="password" id="passwordConfirm" className="txt form-control" placeholder="Confirm New Password" />
          </div>
          <input type="submit" defaultValue="Update Password" className="btn btn-primary" />
          <input type="button" defaultValue="Back" className="btn" onClick={this.backToSettings}/>
        </div>
      </form>
    );
  }
});

export default ChangePasswordForm;