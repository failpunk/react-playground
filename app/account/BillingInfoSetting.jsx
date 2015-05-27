var React = require('react');

var BillingInfoSetting = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <h4>Billing Information</h4>
        <span>Credit Card ending in 1111</span><a href="/account/modify-billing">modify</a>
      </div>
    );
  }
});

module.exports = BillingInfoSetting;