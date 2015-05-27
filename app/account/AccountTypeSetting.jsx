var React = require('react');

var AccountTypeSetting = React.createClass({
  render: function() {
    return (
      <div className="form-group account-type-container">
        <h4>Account Type</h4>
        <span>Premium Membership ending on June 20, 2015</span>
        <p>
          <a href="/account/your-subscription">Modify Account</a>
        </p>
      </div>
    );
  }
});

module.exports = AccountTypeSetting;