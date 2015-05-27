/**
 * @jsx React.DOM
 */

var React = require('react');

var SectionHeader = React.createClass({
  render: function() {
    return (
      <div classname="page-header">
        <h1 id="type">{this.props.title}</h1>
        <p classname="lead">{this.props.desc}</p>
      </div>
    );
  }
});

var AccountSettingsContainer = React.createClass({

  render: function () {
    return (
      <div className="row">
        <div className="col-lg-8">

          <SectionHeader title={'Account Settings'}
                         desc={'Manage your personal information, billing details and connected accounts.'}>
          </SectionHeader>

          <AccountSettings>
          </AccountSettings>

        </div>
      </div>
    );
  }
});

var AccountSettings = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="row form-account">

              <div className="col-md-6">

                <UsernameSetting></UsernameSetting>

                <PasswordSetting></PasswordSetting>

                <EmailSetting></EmailSetting>

              </div>

              <div className="col-md-6">

                <AccountTypeSetting></AccountTypeSetting>

                <BillingInfoSetting></BillingInfoSetting>

              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
});

var UsernameSetting = React.createClass({
  render: function() {
    return (
      <div classname="form-group">
        <h4>Username</h4>
        <span>premium</span>
      </div>
    );
  }
});

var PasswordSetting = React.createClass({
  render: function() {
    return (
      <div classname="form-group">
        <h4>
          Password </h4>
        <span>********</span>
        <a href="/account/change-password">
          modify </a>
      </div>
    );
  }
});

var EmailSetting = React.createClass({
  render: function() {
    return (
      <div classname="form-group">
        <h4>Email Preferences</h4>
        <span>justin+premium@studymode.com</span><a href="/account/email-preferences">modify</a>
      </div>
    );
  }
});

var AccountTypeSetting = React.createClass({
  render: function() {
    return (
      <div classname="form-group account-type-container">
        <h4>Account Type</h4>
        <span>Premium Membership ending on June 20, 2015</span>
        <p>
          <a href="/account/your-subscription">Modify Account</a>
        </p>
      </div>
    );
  }
});

var BillingInfoSetting = React.createClass({
  render: function() {
    return (
      <div classname="form-group">
        <h4>Billing Information</h4>
        <span>Credit Card ending in 1111</span><a href="/account/modify-billing">modify</a>
      </div>
    );
  }
});

React.render(
  <AccountSettingsContainer></AccountSettingsContainer>,
  document.getElementById('accountSettings')
);
