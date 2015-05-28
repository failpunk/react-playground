var React = require('react');

var AccountSetting = require('./AccountSetting.jsx');
var Moment = require('moment');

var user = {
  "userId": "1000006",
  "siteId": "1",
  "username": "premium",
  "email": "justin+premium@studymode.com",
  "password": "xxxxxxxxxxxxxxxxx",
  "meta": {
    "ip": "192.168.56.1",
    "updated": 1432683105,
    "ssoUserId": "7",
    "premiumStatus": "active",
    "premiumDate": "2015-06-20 01:49:47",
    "premiumPlan": "1010"
  },
  "userType": "member_premium",
  "status": "active",
  "legacyId": "0",
  "dateJoined": "1432067088",
  "lastLogin": "1432067088",
  "isSocial": false,
  "newsletter": "1",
  "notification": "1",
  "caslCampaign": "0"
};

var AccountSettings = React.createClass({
  render: function() {
    return (
      <div className="row">
        <div className="col-md-12">
          <form>
            <div className="row form-account">

              <div className="col-md-6">

                <AccountSetting heading={'Username'}>
                  <span>{user.username}</span>
                </AccountSetting>

                <AccountSetting heading={'Password'}>
                  <span>********</span>
                  <a href="#">modify</a>
                </AccountSetting>

                <AccountSetting heading={'Email Preferences'}>
                  <span>{user.email}</span>
                  <a href="#">modify</a>
                </AccountSetting>

              </div>

              <div className="col-md-6">

                <AccountSetting heading={'Account Type'}>
                  <span>Premium Membership ending on {Moment(user.meta.premiumDate).format('MMM Do, YYYY')}</span>
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

module.exports = AccountSettings;