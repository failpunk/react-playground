var React = require('react');

var PasswordSetting = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <h4>
          Password </h4>
        <span>********</span>
        <a href="/account/change-password">
          modify </a>
      </div>
    );
  }
});

module.exports = PasswordSetting;