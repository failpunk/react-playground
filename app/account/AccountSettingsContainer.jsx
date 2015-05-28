var React = require('react');

var SectionHeader = require('./SectionHeader.jsx');
var AccountSettings = require('./AccountSettings.jsx');

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

        </div>s
      </div>
    );
  }
});

React.render(
  <AccountSettingsContainer></AccountSettingsContainer>,
  document.getElementById('accountSettings')
);

module.exports = AccountSettingsContainer;