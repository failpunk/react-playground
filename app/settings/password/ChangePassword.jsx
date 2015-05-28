var React = require('react');

var SectionHeader = require('./../SectionHeader.jsx');
var ChangePasswordForm = require('./ChangePasswordForm.jsx');

var ChangePassword = React.createClass({
  render: function () {
    return (
      <div>
        <SectionHeader title={'Change Password'}
          desc={'Change your password'}>
        </SectionHeader>

        <ChangePasswordForm></ChangePasswordForm>
      </div>
    );
  }
});

module.exports = ChangePassword;