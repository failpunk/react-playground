var React = require('react');

var AccountSetting = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <h4>{this.props.heading}</h4>
        {this.props.children}
      </div>
    );
  }
});

module.exports = AccountSetting;