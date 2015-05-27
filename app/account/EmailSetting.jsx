var React = require('react');

var EmailSetting = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <h4>Email Preferences</h4>
        <span>justin+premium@studymode.com</span><a href="/account/email-preferences">modify</a>
      </div>
    );
  }
});

module.exports = EmailSetting;