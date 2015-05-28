import React from 'react';

let AccountSetting = React.createClass({
  render () {
    return (
      <div className="form-group">
        <h4>{this.props.heading}</h4>
        {this.props.children}
      </div>
    );
  }
});

export default AccountSetting;