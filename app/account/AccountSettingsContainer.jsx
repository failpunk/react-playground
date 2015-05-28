var React = require('react');
var Router = require('react-router');
var {Route, DefaultRoute, NotFoundRoute, RouteHandler, Link} = Router;


var SectionHeader = require('./SectionHeader.jsx');
var AccountSettings = require('./AccountSettings.jsx');

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

var AccountSettingsContainer = React.createClass({
  render: function () {
    return (
      <div>
        <SectionHeader title={'Account Settings'}
          desc={'Manage your personal information, billing details and connected accounts.'}>
        </SectionHeader>

        <AccountSettings user={user}>
        </AccountSettings>
      </div>
    );
  }
});

module.exports = AccountSettingsContainer;