var React = require('react');

var UsernameSetting = require('./UsernameSetting.jsx');
var PasswordSetting = require('./PasswordSetting.jsx');
var EmailSetting = require('./EmailSetting.jsx');
var AccountTypeSetting = require('./AccountTypeSetting.jsx');
var BillingInfoSetting = require('./BillingInfoSetting.jsx');

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

module.exports = AccountSettings;